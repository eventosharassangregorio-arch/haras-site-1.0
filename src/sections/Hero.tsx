import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, MapPin } from 'lucide-react'
import { Button } from '../components/Button.jsx'
import { brand, heroVideoSources, images, quoteUrl, smallSignals, whatsappUrl } from '../data/content.js'
import { Navbar } from './Navbar'

export function Hero() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 520], [1, 0.28])
  const [videoSrc, setVideoSrc] = useState('')
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    const connection = navigator.connection
    const saveData = connection?.saveData
    const slow = /(^|-)2g$/.test(connection?.effectiveType || '')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion || saveData || slow) return undefined

    // Vídeo real de drone do Haras: um recorte na horizontal para telas largas
    // e o quadro vertical original para o celular.
    const isPortrait = window.innerHeight > window.innerWidth
    const start = () => setVideoSrc(isPortrait ? heroVideoSources.mobile : heroVideoSources.desktop)

    // O vídeo só começa a baixar depois que a página já apareceu (foto de capa primeiro).
    const timer = window.setTimeout(start, 1200)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <section
      id="top"
      className="cinematic-noise hero-shell hero-grain relative flex min-h-[100svh] overflow-hidden bg-forest text-bone"
    >
      <img
        src={images.hero.src}
        srcSet={images.hero.srcSet}
        sizes="100vw"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className="hero-media hero-still absolute inset-0 h-full w-full object-cover"
      />
      {videoSrc && (
        <video
          aria-hidden="true"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onCanPlay={() => setVideoReady(true)}
          className={[
            'hero-media hero-motion-media hero-video absolute inset-0 h-full w-full object-cover',
            videoReady ? 'is-ready' : ''
          ].join(' ')}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      <div className="hero-cinema-grade absolute inset-0" />
      <div className="hero-letterbox absolute inset-0" aria-hidden="true">
        <span />
        <span />
      </div>
      <div className="absolute inset-x-0 bottom-0 z-[6] h-52 bg-gradient-to-t from-forest to-transparent" />

      <Navbar />

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex w-full max-w-[92rem] flex-col justify-end px-5 pb-9 pt-32 sm:px-8 sm:pb-12 lg:px-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
          className="grid min-h-[82svh] items-end gap-10 lg:grid-cols-12"
        >
          <div className="max-w-5xl lg:col-span-8">
            <div className="mb-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs uppercase tracking-normal text-bone/80">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" strokeWidth={1.25} />
                {brand.location}
              </span>
              {smallSignals.map(({ label, icon: Icon }) => (
                <span key={label} className="inline-flex items-center gap-2">
                  <Icon className="h-4 w-4" strokeWidth={1.25} />
                  {label}
                </span>
              ))}
            </div>

            <h1 className="hero-title max-w-6xl font-serif h-hero">
              Casamentos e festas em um haras no meio do verde.
            </h1>
          </div>

          <div className="max-w-md lg:col-span-4 lg:justify-self-end">
            <p className="text-base leading-relaxed text-bone/80 sm:text-lg">
              Salão de madeira, jardins e piscina semi-olímpica, com mesas,
              cadeiras e louça incluídas. Venha conhecer o espaço: a visita é
              gratuita e sem compromisso.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <Button href={whatsappUrl} variant="light">
                Agendar visita gratuita
              </Button>
              <Button href={quoteUrl} variant="ghost">
                Falar no WhatsApp
              </Button>
            </div>
            <p className="mt-5 max-w-[15rem] text-xs leading-relaxed text-bone/70 sm:max-w-none">
              Sem custo · Sem compromisso · Combinamos o melhor horário com você
            </p>
          </div>
        </motion.div>

        <div className="mt-8 flex items-center justify-between gap-5 border-t border-bone/20 pt-5 text-xs uppercase tracking-normal text-bone/60">
          <span>{brand.shortName}</span>
          <a href="#espaco" className="inline-flex items-center gap-2 transition-colors hover:text-bone">
            O Espaço
            <ArrowDown className="h-4 w-4" strokeWidth={1.25} />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
