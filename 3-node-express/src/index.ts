import express from "express"
import { BLOG_POSTS } from "./constants/blogposts"
import { BlogPost } from "./types/blogpost"

process.loadEnvFile()

const app = express()
app.use(express.json())

let blogs = [...BLOG_POSTS]

const response = (success: boolean, msg: string) => {return {success, message: msg}}

app.get('/', (_, res) => {
    return res.json(response(true, "Connection succesfully done"))
})

app.get('/posts/:id', (req, res) => {
    if (!req.params.id || !Number(req.params.id)) {
        res.status(400)
        res.json(response(false, "ID parameter is required"))
        return
    }

    const postId = Number(req.params.id)

    if (!blogs.some(post => post.id === postId)) {
        res.status(404)
        res.json(response(false, `Post with id ${postId} not found`))
        return
    }

    res.status(200)
    res.json(blogs.find(post => post.id === postId))
})

app.post('/post', (req, res) => {
    const { id, title, content, author } = req.body as Omit<BlogPost, 'publishedAt'>
    if (!id || blogs.some(post => post.id === id)) {
        res.status(400)
        res.json(response(false, "ID not found or already exists"))
        return
    }

    if (!title || !content || !author) {
        res.status(400)
        res.json(response(false, "Title, content and author are required"))
        return
    }

    blogs.push({id, title, content, author, publishedAt: new Date()})
    res.status(201)
    res.json(response(true, "Post created succesfully"))

})

app.listen(process.env.PORT, () => {
    console.log(`Hola mundo desde el puerto ${process.env.PORT}`)
})
