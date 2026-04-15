import { BlogPost } from "../types/blogpost"

export const BLOG_POSTS: BlogPost[] = [
    {
    id: 1,
    title: "Getting Started with TypeScript",
    content: "TypeScript adds static typing to JavaScript, helping developers catch errors early and build scalable applications.",
    author: "Alice Johnson",
    publishedAt: new Date("2025-01-10")
  },
  {
    id: 2,
    title: "Understanding Async/Await",
    content: "Async and await simplify working with promises, making asynchronous code easier to read and maintain.",
    author: "Bob Smith",
    publishedAt: new Date("2025-01-15")
  },
  {
    id: 3,
    title: "Introduction to Node.js",
    content: "Node.js allows you to run JavaScript on the server, enabling full-stack development with a single language.",
    author: "Charlie Brown",
    publishedAt: new Date("2025-01-20")
  },
  {
    id: 4,
    title: "CSS Grid vs Flexbox",
    content: "CSS Grid and Flexbox are powerful layout systems. Knowing when to use each can improve your designs.",
    author: "Diana Prince",
    publishedAt: new Date("2025-02-01")
  },
  {
    id: 5,
    title: "REST API Best Practices",
    content: "Designing clean and consistent APIs improves maintainability and developer experience.",
    author: "Ethan Hunt",
    publishedAt: new Date("2025-02-10")
  },
  {
    id: 6,
    title: "Database Indexing Explained",
    content: "Indexes improve query performance but must be used wisely to avoid unnecessary overhead.",
    author: "Fiona Gallagher",
    publishedAt: new Date("2025-02-18")
  },
  {
    id: 7,
    title: "Intro to Docker",
    content: "Docker helps you containerize applications, ensuring consistency across environments.",
    author: "George Miller",
    publishedAt: new Date("2025-03-01")
  },
  {
    id: 8,
    title: "Authentication with JWT",
    content: "JSON Web Tokens provide a compact and secure way to transmit authentication data.",
    author: "Hannah Lee",
    publishedAt: new Date("2025-03-08")
  },
  {
    id: 9,
    title: "Web Performance Optimization",
    content: "Improving load times enhances user experience and SEO rankings.",
    author: "Ian Wright",
    publishedAt: new Date("2025-03-15")
  },
  {
    id: 10,
    title: "Introduction to GraphQL",
    content: "GraphQL allows clients to request exactly the data they need, improving efficiency.",
    author: "Julia Roberts",
    publishedAt: new Date("2025-03-25")
  }
]