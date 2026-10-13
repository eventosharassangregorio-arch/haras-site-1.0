import { motion } from 'framer-motion'
import { Check, ChevronDown } from 'lucide-react'
import { Button } from '../components/Button.jsx'
import { fadeUpItem, staggerContainer } from '../components/motionPresets.js'
import { googleRating, testimonials } from '../data/content.js'
import {
  kidsBenefits,
  kidsCtaUrl,
  kidsFaqs,
  kidsGallery,
  kidsIncluded,
  kidsMarquee,
  kidsSteps
} from '../data/kids.js'

const view = { once: true, margin: '-10%' }

function Eyebrow({ children, tone = 'text-wood' }) {
  return <p className={`mb-5 text-xs font-semibold uppercase tracking-normal ${tone}`}>{children}</p>
}

export function KidsMarquee() {
  const items = [...kidsMarquee, ...kidsMarquee]
  return (
    <div className="overflow-hidden border-y border-forest/10 bg-sun py-4 text-forest" aria-hidden="true">
      <div className="kids-marquee flex w-max gap-10 whitespace-nowrap text-sm font-semibold">
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className="inline-flex items-center gap-10">
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-forest/60" />
          </span>
        ))}
      </div>
    </div>
  )
}

export function KidsBenefits() {
  return (
    <section id="espaco" className="bg-ivory px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-[92rem]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={view}
          variants={staggerContainer}
          className="mb-14 max-w-3xl"
        >
          <motion.div variants={fadeUpItem}>
            <Eyebrow>O espaço</Eyebrow>
            <h2 className="h-display font-display text-forest">
              Um lugar pensado para receber família, <span className="font-semibold">com a criançada solta.</span>
            </h2>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={view}
          variants={staggerContainer}
          className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4"
        >
          {kidsBenefits.map(({ title, copy, image }, index) => (
            <motion.article key={title} variants={fadeUpItem} className={index % 2 ? 'lg:mt-14' : ''}>
              <div className="kids-arch-sm aspect-[4/5] w-full overflow-hidden bg-sand">
                <img
                  src={image.src}
                  srcSet={image.srcSet}
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                  alt={title}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold leading-tight text-forest">{title}</h3>
              <p className="mt-3 text-base leading-relaxed text-charcoal/70">{copy}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export function KidsGallery() {
  return (
    <section id="fotos" className="bg-bone py-24 sm:py-32">
      <div className="mx-auto max-w-[92rem] px-5 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={view}
          variants={staggerContainer}
          className="mb-12 grid gap-6 lg:grid-cols-12 lg:items-end"
        >
          <motion.div variants={fadeUpItem} className="lg:col-span-7">
            <Eyebrow tone="text-gold">Festa real, no Haras</Eyebrow>
            <h2 className="h-display font-display text-forest">
              Uma festa de 1&nbsp;aninho, <span className="font-semibold">feita aqui.</span>
            </h2>
          </motion.div>
          <motion.p
            variants={fadeUpItem}
            className="max-w-md text-base leading-relaxed text-charcoal/70 sm:text-lg lg:col-span-4 lg:col-start-9"
          >
            Festa Limão Siciliano, realizada no Haras. Cada família monta a sua do jeito que imagina.
          </motion.p>
        </motion.div>
      </div>

      <div className="kids-scroller flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 sm:px-8 lg:px-12">
        {kidsGallery.map(({ title, image }) => {
          const portrait = image.height > image.width
          return (
            <figure
              key={title}
              className={[
                'relative shrink-0 snap-center overflow-hidden rounded-3xl bg-sand',
                portrait ? 'h-[26rem] w-[17rem] sm:h-[30rem] sm:w-[20rem]' : 'h-[26rem] w-[80vw] sm:h-[30rem] sm:w-[30rem]'
              ].join(' ')}
            >
              <img
                src={image.src}
                srcSet={image.srcSet}
                sizes="(min-width: 640px) 30rem, 80vw"
                alt={`${title} na festa infantil do Haras San Gregório.`}
                width={image.width}
                height={image.height}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <figcaption className="absolute bottom-4 left-4 rounded-full bg-ivory/90 px-3 py-1.5 text-xs font-semibold text-forest backdrop-blur">
                {title}
              </figcaption>
            </figure>
          )
        })}
      </div>
    </section>
  )
}

export function KidsIncluded() {
  return (
    <section id="estrutura" className="bg-forest px-5 py-24 text-bone sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto grid max-w-[92rem] gap-14 lg:grid-cols-12 lg:items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={view}
          variants={staggerContainer}
          className="lg:col-span-6"
        >
          <motion.div variants={fadeUpItem}>
            <Eyebrow tone="text-sun">Já incluso</Eyebrow>
            <h2 className="h-display font-display">
              Chega e a mesa <span className="font-semibold">já está lá.</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-bone/70 sm:text-lg">
              Menos coisa para alugar, menos coisa para transportar. Você foca na festa, e o espaço já
              vem com o essencial.
            </p>
          </motion.div>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={view}
          variants={staggerContainer}
          className="grid gap-4 lg:col-span-6"
        >
          {kidsIncluded.map((item) => (
            <motion.li
              key={item}
              variants={fadeUpItem}
              className="flex items-start gap-4 rounded-2xl border border-bone/10 bg-bone/5 px-5 py-4 text-lg leading-snug"
            >
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sun text-forest">
                <Check className="h-4 w-4" strokeWidth={2.2} />
              </span>
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

export function KidsSteps() {
  return (
    <section id="como-funciona" className="bg-ivory px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-[92rem]">
        <motion.div initial="hidden" whileInView="visible" viewport={view} variants={staggerContainer}>
          <motion.div variants={fadeUpItem} className="mb-14 max-w-3xl">
            <Eyebrow>Como funciona</Eyebrow>
            <h2 className="h-display font-display text-forest">
              Em três passos, <span className="font-semibold">sem complicação.</span>
            </h2>
          </motion.div>

          <ol className="grid gap-6 md:grid-cols-3">
            {kidsSteps.map(({ title, copy }, index) => (
              <motion.li
                key={title}
                variants={fadeUpItem}
                className="rounded-3xl border border-forest/10 bg-bone p-8 shadow-soft"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sun font-display text-xl font-semibold text-forest">
                  {index + 1}
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold text-forest">{title}</h3>
                <p className="mt-3 text-base leading-relaxed text-charcoal/70">{copy}</p>
              </motion.li>
            ))}
          </ol>

          <motion.div variants={fadeUpItem} className="mt-10">
            <Button href={kidsCtaUrl} variant="dark">
              Consultar datas no WhatsApp
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export function KidsReviews() {
  const picks = [testimonials[0], testimonials[1], testimonials[3]]
  return (
    <section id="avaliacoes" className="bg-sand px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-[92rem]">
        <motion.div initial="hidden" whileInView="visible" viewport={view} variants={staggerContainer}>
          <motion.div variants={fadeUpItem} className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow tone="text-gold">Quem já foi</Eyebrow>
              <h2 className="h-display font-display text-forest">
                Famílias que <span className="font-semibold">recomendam.</span>
              </h2>
            </div>
            <p className="flex items-baseline gap-3">
              <span className="font-serif text-6xl leading-none text-forest">{googleRating.score}</span>
              <span className="text-sm leading-snug text-charcoal/70">
                nota no Google
                <br />
                {googleRating.count} avaliações
              </span>
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {picks.map(({ quote, author, meta }) => (
              <motion.figure
                key={quote}
                variants={fadeUpItem}
                className="flex flex-col rounded-3xl bg-ivory p-7"
              >
                <blockquote className="font-serif text-xl leading-snug text-forest">“{quote}”</blockquote>
                <figcaption className="mt-auto pt-8">
                  <span className="block text-sm font-semibold uppercase tracking-normal text-charcoal">
                    {author}
                  </span>
                  <span className="mt-1 block text-xs uppercase tracking-normal text-charcoal/55">{meta}</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function KidsFaq() {
  return (
    <section id="duvidas" className="bg-bone px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto grid max-w-[92rem] gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Eyebrow>Dúvidas</Eyebrow>
          <h2 className="h-display font-display text-forest">
            O que os pais <span className="font-semibold">perguntam.</span>
          </h2>
        </div>
        <div className="divide-y divide-forest/10 border-y border-forest/10 lg:col-span-8">
          {kidsFaqs.map(({ q, a }) => (
            <details key={q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl font-semibold text-forest">
                {q}
                <ChevronDown
                  className="h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180"
                  strokeWidth={1.5}
                />
              </summary>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-charcoal/70">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
