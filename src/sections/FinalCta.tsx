import { motion } from 'framer-motion'
import { Button } from '../components/Button.jsx'
import { ResponsiveImage } from '../components/ResponsiveImage.jsx'
import { images, quoteUrl, whatsappUrl } from '../data/content.js'

export function FinalCta() {
  return (
    <section
      className="cinematic-noise relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-forest px-5 py-28 text-center text-bone sm:px-8 lg:px-12"
    >
      <div className="absolute inset-0">
        <ResponsiveImage
          image={images.twilight}
          alt="Celebração elegante ao anoitecer no campo."
          className="block h-full w-full"
          imgClassName="h-full w-full object-cover"
          sizes="100vw"
        />
      </div>
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
          Visita gratuita e sem compromisso
        </p>
        <h2 className="font-serif h-display">
          Venha conhecer o Haras. A visita é por nossa conta.
        </h2>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={quoteUrl} variant="light">
            Agendar visita gratuita
          </Button>
          <Button href={whatsappUrl} variant="ghost">
            Falar no WhatsApp
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
