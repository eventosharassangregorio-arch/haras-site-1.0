import { createServer } from 'node:http'
import { createReadStream, promises as fs } from 'node:fs'
import path from 'node:path'
import { chromium } from 'file:///Users/thiagoalba/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs'

const cwd = process.cwd()
const videoPath = path.join(cwd, 'public/videos/haras-hero.webm')
const outputPath = path.join(cwd, 'public/images/optimized/haras-hero-poster.jpg')
const sourceStat = await fs.stat(videoPath)

const server = createServer((req, res) => {
  if (req.url === '/hero.webm') {
    const range = req.headers.range

    if (!range) {
      res.writeHead(200, {
        'Accept-Ranges': 'bytes',
        'Content-Length': sourceStat.size,
        'Content-Type': 'video/webm'
      })
      createReadStream(videoPath).pipe(res)
      return
    }

    const [startRaw, endRaw] = range.replace('bytes=', '').split('-')
    const start = Number.parseInt(startRaw, 10)
    const end = endRaw ? Number.parseInt(endRaw, 10) : sourceStat.size - 1
    const chunkSize = end - start + 1

    res.writeHead(206, {
      'Accept-Ranges': 'bytes',
      'Content-Length': chunkSize,
      'Content-Range': `bytes ${start}-${end}/${sourceStat.size}`,
      'Content-Type': 'video/webm'
    })
    createReadStream(videoPath, { start, end }).pipe(res)
    return
  }

  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end('<!doctype html><title>Hero poster capture</title>')
})

await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
const { port } = server.address()

try {
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  })
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } })
  await page.goto(`http://127.0.0.1:${port}/`)

  const jpegBase64 = await page.evaluate(async () => {
    const video = document.createElement('video')
    video.src = '/hero.webm'
    video.muted = true
    video.playsInline = true
    video.preload = 'auto'

    await new Promise((resolve, reject) => {
      video.addEventListener('loadedmetadata', resolve, { once: true })
      video.addEventListener('error', reject, { once: true })
    })

    video.currentTime = Math.min(0.4, Math.max(0, video.duration - 0.1))

    await new Promise((resolve, reject) => {
      video.addEventListener('seeked', resolve, { once: true })
      video.addEventListener('error', reject, { once: true })
    })

    const canvas = document.createElement('canvas')
    canvas.width = 1280
    canvas.height = 720
    const ctx = canvas.getContext('2d')
    ctx.filter = 'brightness(0.84) contrast(1.08) saturate(0.82) sepia(0.08)'
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

    return canvas.toDataURL('image/jpeg', 0.82).split(',')[1]
  })

  await fs.writeFile(outputPath, Buffer.from(jpegBase64, 'base64'))
  await browser.close()

  console.log(
    JSON.stringify(
      {
        outputPath,
        outputSize: (await fs.stat(outputPath)).size
      },
      null,
      2
    )
  )
} finally {
  server.close()
}
