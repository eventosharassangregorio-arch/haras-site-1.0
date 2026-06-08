# Hospedagem de midia

O site funciona de dois jeitos:

- Sem `VITE_MEDIA_BASE_URL`: usa os arquivos locais da pasta `public`.
- Com `VITE_MEDIA_BASE_URL`: usa fotos e video em uma hospedagem externa e o build nao copia a pasta `public`, deixando o `dist` muito mais leve.

## Hospedagens recomendadas

Para esse tipo de site, as melhores opcoes sao:

- Cloudinary: mais simples para imagens, com CDN e transformacoes automaticas.
- Bunny CDN + Storage: bom custo e muito rapido.
- Cloudflare R2 + CDN: bom para controle e escala.
- Amazon S3 + CloudFront: robusto, mas um pouco mais burocratico.

## Estrutura para upload

Suba a pasta `public` preservando exatamente estes caminhos:

```text
images/
images/optimized/
videos/
```

Exemplo: se o dominio da midia for `https://cdn.seudominio.com/haras`, estes arquivos precisam abrir assim:

```text
https://cdn.seudominio.com/haras/images/optimized/haras-fachada-evento-1400.jpg
https://cdn.seudominio.com/haras/images/san-gregorio-logo.jpeg
https://cdn.seudominio.com/haras/videos/haras-hero.webm
```

## Como ativar

Crie um arquivo `.env.production` com:

```text
VITE_MEDIA_BASE_URL=https://cdn.seudominio.com/haras
```

Depois rode o build normalmente. Com essa variavel preenchida, o Vite nao copia `public` para `dist`.

## Observacao de performance

Mantenha as imagens otimizadas em `images/optimized`. O site ja usa `srcset` com 900, 1400 e 2200px para o navegador escolher a versao mais leve conforme o tamanho da tela.
