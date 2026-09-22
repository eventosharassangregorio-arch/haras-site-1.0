import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { Button } from '../components/Button.jsx'
import { LeadForm } from '../components/LeadForm.jsx'
import { ResponsiveImage } from '../components/ResponsiveImage.jsx'
import { images, whatsappUrl } from '../data/content.js'

export function Visit() {
  return (
    <section
      id="visitas"
      className="cinematic-noise relative overflow-hidden bg-forest px-5 py-24 text-bone sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="absolute inset-0">
        <ResponsiveImage
          image={images.sunset}
          alt="Vista do Haras San Gregório em meio à natureza."
          className="block h-full w-full"
          imgClassName="h-full w-full object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,18,15,0.9),rgba(16,18,15,0.5)_52%,rgba(16,18,15,0.78))]" />

      <div className="relative z-10 mx-auto grid max-w-[92rem] gap-10 lg:grid-cols-12 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="max-w-4xl lg:col-span-7"
        >
          <p className="mb-6 text-xs font-semibold uppercase tracking-normal text-gold">
            Visita gratuita
          </p>
          <h2 className="font-serif h-display">
            Alguns lugares precisam ser vistos pessoalmente.
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-bone/70 sm:text-lg">
            Agende uma visita gratuita, conheça o espaço e imagine o seu dia.
            Sem compromisso.
          </p>
          <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row">
            <Button href={whatsappUrl} variant="light">
              Agendar visita gratuita
            </Button>
            <Button href={whatsappUrl} variant="ghost">
              Falar no WhatsApp
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.85, ease: 'easeOut', delay: 0.08 }}
          className="bg-ivory p-5 text-charcoal shadow-veil sm:p-7 lg:col-span-4 lg:col-start-9"
        >
          <div className="mb-7 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-normal text-gold">
                Visita gratuita
              </p>
              <h3 className="mt-2 font-serif text-4xl font-medium leading-none text-forest">
                Agende sua visita.
              </h3>
            </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-charcoal/10 text-gold">
              <MessageCircle className="h-5 w-5" strokeWidth={1.25} />
            </span>
          </div>
          <LeadForm />
        </motion.div>
      </div>
    </section>
  )
}
