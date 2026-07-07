import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

const unusedPublicAssets = [
  'images/aquarela-convites.png',
  'images/aquarela-convites.webp',
  'images/haras-casal-fachada.jpg',
  'images/haras-casal-fachada.webp',
  'images/haras-evento-jardim.jpg',
  'images/haras-evento-jardim.webp',
  'images/haras-fachada-evento.jpg',
  'images/haras-fachada-evento.webp'
]

const externallyHostedImages = ['images/optimized']
const externallyHostedVideos = ['videos']

const pruneLegacyRasterWithWebp = async (directory) => {
  let entries = []

  try {
    entries = await fs.readdir(directory, { withFileTypes: true })
  } catch {
    return
  }

  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name)

      if (entry.isDirectory()) {
        await pruneLegacyRasterWithWebp(entryPath)
        return
      }

      if (!/\.(jpe?g|png)$/i.test(entry.name)) return

      const webpPath = entryPath.replace(/\.(jpe?g|png)$/i, '.webp')

      try {
        await fs.access(webpPath)
        await fs.rm(entryPath, { force: true })
      } catch {
        // Keep the original when there is no WebP pair.
      }
    })
  )
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const hasExternalMediaBase = Boolean(env.VITE_MEDIA_BASE_URL?.trim())
  const hasExternalVideoBase = Boolean(env.VITE_VIDEO_BASE_URL?.trim())

  return {
    plugins: [
      react(),
      {
        name: 'prune-unused-public-assets',
        apply: 'build',
        async closeBundle() {
          const assetsToPrune = [
            ...unusedPublicAssets,
            ...(hasExternalMediaBase ? externallyHostedImages : []),
            ...(hasExternalMediaBase || hasExternalVideoBase ? externallyHostedVideos : [])
          ]

          await Promise.all(
            assetsToPrune.map((asset) =>
              fs.rm(path.resolve(process.cwd(), 'dist', asset), { force: true, recursive: true })
            )
          )

          await pruneLegacyRasterWithWebp(path.resolve(process.cwd(), 'dist', 'images'))
        }
      }
    ],
    publicDir: 'public'
  }
})
