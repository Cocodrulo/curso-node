import { readdir, stat } from 'node:fs/promises'
import { join } from 'node:path'

const consoleColors = {
    Reset: "\x1b[0m",
    Black: "\x1b[30m",
    Red: "\x1b[31m",
    Green: "\x1b[32m",
    Yellow: "\x1b[33m",
    Blue: "\x1b[34m",
    Magenta: "\x1b[35m",
    Cyan: "\x1b[36m",
    White: "\x1b[37m",
    Gray: "\x1b[90m",
}

async function readAllFiles(folder) {
    try {
        return await readdir(folder)
    } catch {
        console.error('Error when reading the directory')
        process.exit(1)
    }
}

async function getFileStats(filePath) {
    try {
        return await stat(filePath)
    } catch {
        return null
    }
}

function color(text, color) {
    if (!consoleColors[color]) return text
    return `${consoleColors[color]}${text}${consoleColors.Reset}`
}

function formatStat({ file, fileType, fileSize, fileModified }) {
    return `${color(fileType, 'Magenta')} ${color(file.padEnd(25), 'Blue')} ${color(fileSize.padStart(10), 'Green')} ${color(fileModified, 'Yellow')}`
}

/**
 * @see https://nodejs.org/docs/latest/api/process.html#processargv
 */
async function ls () {
    // argv[0] is full command, argv[1] is command, argv[2] is first param
    // if not folder then use current dir
    const folder = process.argv[2] ?? "."
    const files = await readAllFiles(folder)

    const filesPromises = files.map(async file => {
        const filePath = join(folder, file)
        const stat = await getFileStats(filePath)

        if (!stat) return `No se pudo leer el archivo ${filePath}`

        const isDir = stat.isDirectory()
        const fileType = isDir ? 'd' : 'f'
        const fileSize = stat.size.toString()
        const fileModified = stat.mtime.toLocaleString()

        return formatStat({ file, fileType, fileSize, fileModified })
    })

    const fileTexts = await Promise.all(filesPromises)
    fileTexts.forEach(text => console.log(text))
}

ls()