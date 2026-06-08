import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { fadeUpItem, staggerContainer } from '../components/motionPresets.js'
import { testimonials } from '../data/content.js'

export function Testimonials() {
  return (
    <section className="content-auto bg-bone px-5 py-24 text-charcoal sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-[92rem]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          variants={staggerContainer}
          className="grid gap-10 lg:grid-cols-12"
        >
          <motion.div variants={fadeUpItem} className="lg:col-span-4">
            <p className="mb-6 text-xs font-semibold uppercase tracking-normal text-gold">
              Impressões
            </p>
            <h2 className="font-serif text-[2.9rem] font-medium leading-[0.98] tracking-normal text-forest sm:text-[4rem] sm:leading-[0.96] lg:text-[5.5rem] xl:text-[5.75rem]">
              O que fica na memória.
            </h2>
          </motion.div>

          <div className="grid gap-5 lg:col-span-8 md:grid-cols-3">
            {testimonials.map(({ quote, author, meta }) => (
              <motion.article
                variants={fadeUpItem}
                key={quote}
                className="flex min-h-[17rem] flex-col rounded-sm border border-charcoal/10 bg-ivory p-7"
              >
                <Quote className="mb-10 h-7 w-7 text-gold" strokeWidth={1.15} />
                <p className="font-serif text-2xl leading-tight text-forest">
                  “{quote}”
                </p>
                <div className="mt-auto pt-10">
                  <p className="text-sm font-semibold uppercase tracking-normal text-charcoal">
                    {author}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-normal text-charcoal/55">
                    {meta}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
