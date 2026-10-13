// Subdomínio das campanhas de festa infantil: a raiz de infantil.<domínio> mostra a página /festa-infantil/.
// Só a rota "/" passa por aqui (ver public/_routes.json); o restante do site é servido direto como arquivo estático.
const SUBDOMAIN_PAGES = {
  infantil: '/festa-infantil/'
}

export async function onRequest({ request, next, env }) {
  const url = new URL(request.url)
  const subdomain = url.hostname.split('.')[0]
  const page = SUBDOMAIN_PAGES[subdomain]

  if (page && url.hostname.split('.').length >= 2 && (url.pathname === '/' || url.pathname === '/index.html')) {
    url.pathname = page
    return env.ASSETS.fetch(new Request(url, request))
  }

  return next()
}
