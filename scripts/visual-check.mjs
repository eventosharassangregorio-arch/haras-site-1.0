import { chromium } from 'file:///Users/thiagoalba/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs'

const browser = await chromium.launch({
  headless: true,
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
})

const page = await browser.newPage({
  viewport: { width: 1440, height: 1000 },
  deviceScaleFactor: 1
})
const consoleMessages = []

page.on('console', (message) => {
  if (['error', 'warning'].includes(message.type())) {
    consoleMessages.push({
      viewport: 'desktop',
      type: message.type(),
      text: message.text()
    })
  }
})

const targetUrl = process.argv[2] ?? 'http://127.0.0.1:5173/'

await page.goto(targetUrl, {
  waitUntil: 'domcontentloaded',
  timeout: 10000
})
await page.waitForSelector('h1', { timeout: 10000 })
await page.screenshot({
  path: '/Users/thiagoalba/Documents/New project/desktop-preview.png'
})

const checkpoints = [0, 950, 1950, 2850, 3900]
const results = []

for (const [index, y] of checkpoints.entries()) {
  await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y)
  await page.waitForTimeout(900)
  const visibleHeadings = await page.locator('h1,h2').evaluateAll((nodes) =>
    nodes
      .filter((node) => {
        const rect = node.getBoundingClientRect()
        return rect.bottom > 0 && rect.top < innerHeight
      })
      .map((node) => node.textContent.trim())
  )
  await page.screenshot({
    path: `/Users/thiagoalba/Documents/New project/section-${index}.png`
  })
  results.push({ y, visibleHeadings })
}

const mobile = await browser.newPage({
  viewport: { width: 390, height: 850 },
  deviceScaleFactor: 1
})

mobile.on('console', (message) => {
  if (['error', 'warning'].includes(message.type())) {
    consoleMessages.push({
      viewport: 'mobile',
      type: message.type(),
      text: message.text()
    })
  }
})

await mobile.goto(targetUrl, {
  waitUntil: 'domcontentloaded',
  timeout: 10000
})
await mobile.waitForSelector('h1', { timeout: 10000 })
await mobile.screenshot({
  path: '/Users/thiagoalba/Documents/New project/mobile-preview.png'
})
await mobile.evaluate(() => window.scrollTo(0, 1180))
await mobile.waitForTimeout(900)
await mobile.screenshot({
  path: '/Users/thiagoalba/Documents/New project/mobile-section.png'
})

const mobileOverflow = await mobile.evaluate(
  () => document.documentElement.scrollWidth > document.documentElement.clientWidth
)

await browser.close()

console.log(JSON.stringify({ results, mobileOverflow, consoleMessages }, null, 2))
