import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { fadeUpItem, staggerContainer } from '../components/motionPresets.js'
import { googleRating, testimonials } from '../data/content.js'

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
            <h2 className="font-serif text-forest h-display">
              Quem já fez festa aqui.
            </h2>
            <p className="mt-8 flex items-baseline gap-3">
              <span className="font-serif text-6xl leading-none text-forest">{googleRating.score}</span>
              <span className="text-sm leading-snug text-charcoal/70">
                nota no Google
                <br />
                {googleRating.count} avaliações
              </span>
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 lg:col-span-8">
            {testimonials.map(({ quote, author, meta }) => (
              <motion.article
                variants={fadeUpItem}
                key={quote}
                className="flex min-h-[15rem] flex-col rounded-sm border border-charcoal/10 bg-ivory p-7"
              >
                <Quote className="mb-6 h-6 w-6 text-gold" strokeWidth={1.15} />
                <p className="font-serif text-xl leading-snug text-forest">
                  “{quote}”
                </p>
                <div className="mt-auto pt-8">
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
