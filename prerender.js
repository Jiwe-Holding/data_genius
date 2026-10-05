// Injects the server-rendered app into dist/index.html so crawlers get full HTML.
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const { render } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href)
const file = resolve('dist/index.html')
writeFileSync(file, readFileSync(file, 'utf-8').replace('<!--app-html-->', render()))
rmSync('dist-ssr', { recursive: true, force: true })
console.log('Prerendered dist/index.html')
