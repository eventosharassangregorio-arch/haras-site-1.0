import { chromium } from 'file:///Users/thiagoalba/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs'

const targetUrl = process.argv[2] ?? 'http://127.0.0.1:5175/'

const browser = await chromium.launch({
  headless: true,
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
})

try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } })
  await page.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 15000 })
  await page.waitForSelector('h1', { timeout: 10000 })

  const links = await page.locator('a').evaluateAll((nodes) =>
    nodes.map((node, index) => ({
      index,
      text: node.textContent.replace(/\s+/g, ' ').trim(),
      aria: node.getAttribute('aria-label'),
      href: node.getAttribute('href'),
      target: node.getAttribute('target'),
      visible: Boolean(node.offsetParent || node.getClientRects().length)
    }))
  )

  const internalResults = []
  for (const hash of ['#espaco', '#eventos', '#galeria', '#visitas', '#contato']) {
    await page.locator(`a[href="${hash}"]`).first().click()
    await page.waitForTimeout(350)
    internalResults.push({ hash, ok: page.url().endsWith(hash), url: page.url() })
  }

  await page.goto(`${targetUrl.split('#')[0]}#visitas`, {
    waitUntil: 'domcontentloaded',
    timeout: 15000
  })
  await page.evaluate(() => {
    window.__openedUrls = []
    window.open = (url) => {
      window.__openedUrls.push(String(url))
      return null
    }
  })

  await page.locator('#lead-name').fill('Teste Cliente')
  await page.locator('#lead-date').fill('2026-08-15')
  await page.locator('#lead-guests').fill('120')
  await page.locator('#lead-phone').fill('(48) 99999-0000')
  await page.getByRole('button', { name: 'Enviar pelo WhatsApp' }).click()

  const formOpenedUrls = await page.evaluate(() => window.__openedUrls)
  const formUrl = formOpenedUrls[0] ?? ''
  const decodedFormUrl = decodeURIComponent(formUrl)

  const mobile = await browser.newPage({
    viewport: { width: 390, height: 850 },
    deviceScaleFactor: 1,
    isMobile: true
  })
  await mobile.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 15000 })
  await mobile.waitForSelector('h1', { timeout: 10000 })
  const mobileResult = await mobile.evaluate(() => ({
    overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
    whatsappButtons: [...document.querySelectorAll('a[href="https://wa.me/message/AKHZGIR7BGP3O1"]')]
      .filter((node) => Boolean(node.offsetParent || node.getClientRects().length)).length,
    formButtonVisible: Boolean(
      [...document.querySelectorAll('button')].find((node) =>
        node.textContent.includes('Enviar pelo WhatsApp')
      )?.getClientRects().length
    )
  }))
  await mobile.close()

  console.log(
    JSON.stringify(
      {
        links: {
          total: links.length,
          visible: links.filter((link) => link.visible).length,
          emptyHref: links.filter((link) => !link.href),
          externalWithoutNewTab: links.filter(
            (link) => /^(https?:)?\/\//.test(link.href || '') && link.target !== '_blank'
          ),
          whatsapp: links.filter((link) => link.href === 'https://wa.me/message/AKHZGIR7BGP3O1')
            .length,
          instagram: links.filter((link) =>
            link.href?.includes('instagram.com/eventosharassangregorio')
          ).length,
          map: links.filter((link) => link.href?.includes('maps.google.com')).length
        },
        internalResults,
        form: {
          opened: Boolean(formUrl),
          url: formUrl,
          hasApiWhatsapp: formUrl.startsWith('https://api.whatsapp.com/send?'),
          hasPhone: formUrl.includes('phone=5548996729976'),
          hasName: decodedFormUrl.includes('Nome: Teste Cliente'),
          hasDate: decodedFormUrl.includes('Data desejada: 15/08/2026'),
          hasGuests: decodedFormUrl.includes('Número de convidados: 120'),
          hasClientPhone: decodedFormUrl.includes('WhatsApp: (48) 99999-0000')
        },
        mobile: mobileResult
      },
      null,
      2
    )
  )
} finally {
  await browser.close()
}
