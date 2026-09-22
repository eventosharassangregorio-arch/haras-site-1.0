import { motion } from 'framer-motion'
import { fadeUpItem, staggerContainer } from '../components/motionPresets.js'
import { visitSteps } from '../data/content.js'

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-ivory px-5 py-24 text-charcoal sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-[92rem]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          variants={staggerContainer}
          className="mb-14 max-w-4xl"
        >
          <motion.p variants={fadeUpItem} className="mb-6 text-xs font-semibold uppercase tracking-normal text-gold">
            Visita gratuita
          </motion.p>
          <motion.h2
            variants={fadeUpItem}
            className="font-serif text-forest h-display"
          >
            Como funciona a visita.
          </motion.h2>
          <motion.p variants={fadeUpItem} className="mt-7 max-w-xl text-base leading-relaxed text-charcoal/70 sm:text-lg">
            Cada evento é diferente, então cada proposta é feita sob medida. Para começar, é só vir conhecer.
          </motion.p>
        </motion.div>

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          variants={staggerContainer}
          className="grid gap-5 md:grid-cols-3"
        >
          {visitSteps.map(({ title, copy }, index) => (
            <motion.li key={title} variants={fadeUpItem} className="rounded-sm border border-charcoal/10 bg-bone p-7 sm:p-9">
              <span className="font-serif text-6xl font-medium leading-none text-gold">{index + 1}</span>
              <h3 className="mt-6 font-serif text-3xl font-medium leading-tight text-forest">{title}</h3>
              <p className="mt-4 text-base leading-relaxed text-charcoal/70">{copy}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}
