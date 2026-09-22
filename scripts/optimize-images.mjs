import sharp from 'sharp'
import { readdirSync, mkdirSync } from 'node:fs'
import { join, parse } from 'node:path'

const [, , srcDir, outDir] = process.argv
if (!srcDir || !outDir) {
  console.error('uso: node optimize-images.mjs <pastaOrigem> <pastaDestino>')
  process.exit(1)
}

mkdirSync(outDir, { recursive: true })
const widths = [900, 1400, 2200]
const files = readdirSync(srcDir).filter((f) => /\.(jpe?g|png)$/i.test(f))

for (const file of files) {
  const { name } = parse(file)
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
  const input = join(srcDir, file)
  for (const w of widths) {
    const out = join(outDir, `${slug}-${w}.webp`)
    await sharp(input).rotate().resize({ width: w, withoutEnlargement: true }).webp({ quality: 78 }).toFile(out)
  }
  console.log('ok', slug)
}
