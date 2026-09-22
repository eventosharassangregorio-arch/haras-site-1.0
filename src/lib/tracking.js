const GTM_ID = import.meta.env.VITE_GTM_ID || ''
const STORAGE_KEY = 'haras_attribution'
const CAMPAIGN_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'gbraid', 'wbraid']

const readAttribution = () => {
  try {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  } catch {
    return {}
  }
}

// Guarda a origem do clique do anúncio (UTM e gclid) durante a visita.
const captureAttribution = () => {
  const params = new URLSearchParams(window.location.search)
  const found = {}
  CAMPAIGN_KEYS.forEach((key) => {
    if (params.get(key)) found[key] = params.get(key)
  })
  if (!Object.keys(found).length) return
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ ...readAttribution(), ...found }))
  } catch {
    // sem sessionStorage: o rastreamento segue sem a atribuição guardada
  }
}

export const track = (event, params = {}) => {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...readAttribution(), ...params })
}

const loadGtm = () => {
  if (!GTM_ID || document.getElementById('gtm-script')) return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' })
  const script = document.createElement('script')
  script.id = 'gtm-script'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`
  document.head.appendChild(script)
}

const isWhatsappLink = (href) => /^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)

const handleClick = (event) => {
  const link = event.target.closest?.('a[href]')
  if (!link) return

  const href = link.href
  const section = link.closest('section[id], footer, header, nav')?.id || link.closest('footer, header, nav')?.tagName.toLowerCase() || 'pagina'
  const label = (link.getAttribute('aria-label') || link.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 60)

  if (isWhatsappLink(href)) {
    // Acrescenta a origem à mensagem para saber de qual botão veio a conversa.
    try {
      const url = new URL(href)
      if (url.searchParams.has('text') && !url.searchParams.get('text').includes('(ref:')) {
        url.searchParams.set('text', `${url.searchParams.get('text')} (ref: ${section})`)
        link.href = url.toString()
      }
    } catch {
      // mantém o link original
    }
    track('whatsapp_click', { section, link_text: label })
  } else if (href.startsWith('tel:')) {
    track('phone_click', { section, link_text: label })
  }
}

export const initTracking = () => {
  captureAttribution()
  loadGtm()
  document.addEventListener('click', handleClick, true)
}
