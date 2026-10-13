import { motion } from 'framer-motion'
import { MapPin, Star } from 'lucide-react'
import { Button } from '../components/Button.jsx'
import { brand, googleRating, images } from '../data/content.js'
import { kidsCtaUrl, kidsHero } from '../data/kids.js'

export function KidsHeader() {
  return (
    <header className="relative z-20 px-5 py-5 sm:px-8 lg:px-12">
      <nav className="mx-auto flex max-w-[92rem] items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3" aria-label={brand.name}>
          <img
            src={images.logo.src}
            alt=""
            width="44"
            height="44"
            className="h-11 w-11 rounded-full border border-forest/15 bg-bone object-contain"
          />
          <span className="font-display text-base font-semibold leading-tight tracking-tight text-forest sm:text-xl">
            {brand.shortName}
          </span>
        </a>
        <a
          href={kidsCtaUrl}
          className="inline-flex min-h-11 items-center rounded-full border border-forest/25 px-5 text-[11px] font-semibold uppercase tracking-normal text-forest transition-colors duration-300 hover:bg-forest hover:text-bone"
        >
          <span className="sm:hidden">WhatsApp</span>
          <span className="hidden sm:inline">Chamar no WhatsApp</span>
        </a>
      </nav>
    </header>
  )
}

export function KidsHero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ivory px-5 pb-16 pt-4 sm:px-8 sm:pb-24 lg:px-12">
      <div className="kids-sun" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid max-w-[92rem] items-center gap-12 lg:min-h-[78svh] lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="lg:col-span-7"
        >
          <p className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-normal text-wood">
            <MapPin className="h-4 w-4" strokeWidth={1.5} />
            Ingleses · Florianópolis
          </p>

          <h1 className="h-kids font-display text-forest">
            <span className="block font-light">Festa infantil com</span>
            <span className="block font-semibold">espaço para a criançada correr.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-charcoal/75">
            Salão, gramado e piscina no Haras San Gregório. Mesas, cadeiras e louça já estão
            incluídas, para você cuidar do aniversário sem correria.
          </p>

          <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row">
            <Button href={kidsCtaUrl} variant="sun">
              Consultar datas
            </Button>
            <Button href="#fotos" variant="outline">
              Ver fotos de uma festa
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-charcoal/70">
            <li className="inline-flex items-center gap-2">
              <Star className="h-4 w-4 fill-sun text-sun" strokeWidth={1.5} />
              <span>
                <strong className="font-semibold text-forest">{googleRating.score}</strong> no Google ·{' '}
                {googleRating.count} avaliações
              </span>
            </li>
            <li>Visita gratuita e sem compromisso</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none"
        >
          <div className="kids-arch aspect-[4/5] w-full overflow-hidden bg-sand shadow-veil">
            <img
              src={kidsHero.arch.src}
              srcSet={kidsHero.arch.srcSet}
              sizes="(min-width: 1024px) 40vw, 90vw"
              alt="Jardim do Haras San Gregório decorado com limões para uma festa infantil."
              width="1100"
              height="733"
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="kids-sticker absolute -left-2 bottom-10 sm:-left-6" aria-hidden="true">
            <span className="block text-[10px] font-semibold uppercase tracking-normal">Festa real</span>
            <span className="block font-display text-lg font-semibold leading-tight">
              1&nbsp;aninho, feito aqui
            </span>
          </div>

          <div className="kids-circle absolute -right-1 top-6 hidden h-28 w-28 overflow-hidden rounded-full border-4 border-ivory shadow-soft sm:block lg:-right-6 lg:h-36 lg:w-36">
            <img
              src={kidsHero.circle.src}
              srcSet={kidsHero.circle.srcSet}
              sizes="150px"
              alt="Bolo de aniversário decorado com limões."
              width="300"
              height="450"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
