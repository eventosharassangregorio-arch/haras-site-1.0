import { createServer } from 'node:http'
import { createReadStream, promises as fs } from 'node:fs'
import path from 'node:path'
import { chromium } from 'file:///Users/thiagoalba/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs'

const sourcePath = '/Users/thiagoalba/Downloads/DJI_20260503011121_0137_D.MP4'
const outputPath = '/Users/thiagoalba/Documents/New project/public/videos/haras-hero.webm'
const durationSeconds = 8
const startSeconds = 0
const outputWidth = 1280
const outputHeight = 720
const outputFps = 24
const outputBitrate = 1400000

const sourceStat = await fs.stat(sourcePath)

function serveRange(req, res) {
  const range = req.headers.range
  const mime = 'video/mp4'

  if (!range) {
    res.writeHead(200, {
      'Content-Length': sourceStat.size,
      'Content-Type': mime
    })
    createReadStream(sourcePath).pipe(res)
    return
  }

  const [startRaw, endRaw] = range.replace(/bytes=/, '').split('-')
  const start = Number.parseInt(startRaw, 10)
  const end = endRaw ? Number.parseInt(endRaw, 10) : sourceStat.size - 1
  const chunkSize = end - start + 1

  res.writeHead(206, {
    'Accept-Ranges': 'bytes',
    'Content-Length': chunkSize,
    'Content-Range': `bytes ${start}-${end}/${sourceStat.size}`,
    'Content-Type': mime
  })

  createReadStream(sourcePath, { start, end }).pipe(res)
}

const server = createServer((req, res) => {
  if (req.url === '/source.mp4') {
    serveRange(req, res)
    return
  }

  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end('<!doctype html><title>capture</title>')
})

await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
const { port } = server.address()

try {
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  })

  const page = await browser.newPage({ viewport: { width: outputWidth, height: outputHeight } })
  await page.goto(`http://127.0.0.1:${port}/`)

  const result = await page.evaluate(
    async ({ durationSeconds, startSeconds, outputBitrate, outputFps, outputHeight, outputWidth }) => {
      const video = document.createElement('video')
      video.src = '/source.mp4'
      video.muted = true
      video.playsInline = true
      video.crossOrigin = 'anonymous'
      video.preload = 'auto'

      await new Promise((resolve, reject) => {
        video.addEventListener('loadedmetadata', resolve, { once: true })
        video.addEventListener('error', reject, { once: true })
      })

      video.currentTime = startSeconds

      await new Promise((resolve, reject) => {
        video.addEventListener('seeked', resolve, { once: true })
        video.addEventListener('error', reject, { once: true })
      })

      const canvas = document.createElement('canvas')
      canvas.width = outputWidth
      canvas.height = outputHeight
      const ctx = canvas.getContext('2d')

      function drawCover() {
        const scale = Math.max(
          canvas.width / video.videoWidth,
          canvas.height / video.videoHeight
        )
        const sourceWidth = canvas.width / scale
        const sourceHeight = canvas.height / scale
        const sourceX = (video.videoWidth - sourceWidth) / 2
        const sourceY = (video.videoHeight - sourceHeight) / 2

        ctx.drawImage(
          video,
          sourceX,
          sourceY,
          sourceWidth,
          sourceHeight,
          0,
          0,
          canvas.width,
          canvas.height
        )
      }

      const stream = canvas.captureStream(outputFps)
      const mimeType = MediaRecorder.isTypeSupported('video/webm;codecs=vp9')
        ? 'video/webm;codecs=vp9'
        : 'video/webm;codecs=vp8'
      const recorder = new MediaRecorder(stream, {
        mimeType,
        videoBitsPerSecond: outputBitrate
      })
      const chunks = []

      recorder.addEventListener('dataavailable', (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data)
        }
      })

      const stopped = new Promise((resolve) => {
        recorder.addEventListener('stop', resolve, { once: true })
      })

      let animationFrame
      const drawLoop = () => {
        drawCover()
        animationFrame = requestAnimationFrame(drawLoop)
      }

      recorder.start()
      drawLoop()
      await video.play()

      await new Promise((resolve) => setTimeout(resolve, durationSeconds * 1000))
      video.pause()
      cancelAnimationFrame(animationFrame)
      recorder.stop()
      await stopped

      const blob = new Blob(chunks, { type: mimeType })
      const buffer = await blob.arrayBuffer()

      return {
        mimeType,
        width: video.videoWidth,
        height: video.videoHeight,
        bytes: Array.from(new Uint8Array(buffer))
      }
    },
    { durationSeconds, startSeconds, outputBitrate, outputFps, outputHeight, outputWidth }
  )

  await fs.mkdir(path.dirname(outputPath), { recursive: true })
  await fs.writeFile(outputPath, Buffer.from(result.bytes))
  await browser.close()

  console.log(
    JSON.stringify(
      {
        outputPath,
        mimeType: result.mimeType,
        sourceSize: sourceStat.size,
        sourceDimensions: `${result.width}x${result.height}`,
        outputDimensions: `${outputWidth}x${outputHeight}`,
        outputSize: (await fs.stat(outputPath)).size
      },
      null,
      2
    )
  )
} finally {
  server.close()
}
