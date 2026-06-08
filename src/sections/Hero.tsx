import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, MapPin } from 'lucide-react'
import { Button } from '../components/Button.jsx'
import { ResponsiveImage } from '../components/ResponsiveImage.jsx'
import { brand, heroPoster, heroVideo, images, quoteUrl, smallSignals, whatsappUrl } from '../data/content.js'
import { Navbar } from './Navbar'

export function Hero() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 520], [1, 0.28])
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    const connection = navigator.connection || navigator.webkitConnection
    const slowConnection = connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType || '')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const hasDesktopViewport = window.matchMedia('(min-width: 768px)').matches

    setShouldLoadVideo(hasDesktopViewport && !prefersReducedMotion && !slowConnection)
  }, [])

  return (
    <section
      id="top"
      className="cinematic-noise relative flex min-h-[100svh] overflow-hidden bg-forest text-bone"
    >
      <ResponsiveImage
        image={images.heroPoster}
        alt=""
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 block"
        imgClassName="hero-media h-full w-full object-cover"
        sizes="100vw"
      />
      {shouldLoadVideo && (
        <video
          aria-hidden="true"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroPoster}
          onCanPlay={() => setVideoReady(true)}
          className={[
            'hero-media hero-video absolute inset-0 h-full w-full object-cover transition-opacity duration-1000',
            videoReady ? 'opacity-100' : 'opacity-0'
          ].join(' ')}
        >
          <source src={heroVideo} type="video/webm" />
        </video>
      )}
      <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(122,97,56,0.18),rgba(23,37,27,0.14)_42%,rgba(16,18,15,0.2))] mix-blend-soft-light" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,18,15,0.62),rgba(16,18,15,0.28)_45%,rgba(16,18,15,0.86))]" />
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-forest to-transparent" />

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

            <h1 className="max-w-6xl font-serif text-[3.6rem] font-medium leading-[0.88] tracking-normal sm:text-[6rem] sm:leading-[0.86] lg:text-[8.5rem] xl:text-[10rem]">
              Um espaço raro para momentos únicos.
            </h1>
          </div>

          <div className="max-w-md lg:col-span-4 lg:justify-self-end">
            <p className="text-base leading-relaxed text-bone/80 sm:text-lg">
              Eventos exclusivos em meio à natureza, com privacidade e atmosfera
              incomparável.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <Button href={whatsappUrl} variant="light">
                Agendar Visita
              </Button>
              <Button href={quoteUrl} variant="ghost">
                Solicitar Orçamento
              </Button>
            </div>
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
