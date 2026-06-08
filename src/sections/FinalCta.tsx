import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '../components/Button.jsx'
import { ResponsiveImage } from '../components/ResponsiveImage.jsx'
import { images, quoteUrl, whatsappUrl } from '../data/content.js'

export function FinalCta() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-60, 60])

  return (
    <section
      ref={ref}
      className="cinematic-noise relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-forest px-5 py-28 text-center text-bone sm:px-8 lg:px-12"
    >
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <ResponsiveImage
          image={images.twilight}
          alt="Celebração elegante ao anoitecer no campo."
          className="block h-full w-full"
          imgClassName="h-full w-full object-cover"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(23,37,27,0.12),rgba(16,18,15,0.86)_70%)]" />
      <div className="absolute inset-0 bg-forest/30" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative z-10 mx-auto max-w-5xl"
      >
        <p className="mb-7 text-xs font-semibold uppercase tracking-normal text-gold">
          Atendimento reservado
        </p>
        <h2 className="font-serif text-[3.15rem] font-medium leading-[0.9] tracking-normal sm:text-[5rem] sm:leading-[0.88] lg:text-[8rem] xl:text-[8.5rem]">
          Seu evento começa pela escolha do lugar certo.
        </h2>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={quoteUrl} variant="light">
            Solicitar orçamento
          </Button>
          <Button href={whatsappUrl} variant="ghost">
            Agendar visita
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
