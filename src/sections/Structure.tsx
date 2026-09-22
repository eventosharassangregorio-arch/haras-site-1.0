import { motion } from 'framer-motion'
import { ResponsiveImage } from '../components/ResponsiveImage.jsx'
import { fadeUpItem, staggerContainer } from '../components/motionPresets.js'
import { Check } from 'lucide-react'
import { Button } from '../components/Button.jsx'
import { availableItems, includedItems, structureItems, whatsappUrl } from '../data/content.js'

export function Structure() {
  return (
    <section
      id="estrutura"
      className="bg-sand px-5 py-24 text-charcoal sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-[92rem]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          variants={staggerContainer}
          className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end"
        >
          <motion.div variants={fadeUpItem} className="lg:col-span-8">
            <p className="mb-6 text-xs font-semibold uppercase tracking-normal text-wood">
              Estrutura
            </p>
            <h2 className="max-w-6xl font-serif text-forest h-display">
              Tudo o que você precisa para receber, já no espaço.
            </h2>
          </motion.div>
          <motion.p
            variants={fadeUpItem}
            className="max-w-lg text-base leading-relaxed text-charcoal/70 sm:text-lg lg:col-span-3 lg:col-start-10"
          >
            Ambientes internos e externos que se conectam, com mesas, cadeiras e
            louça incluídas. Menos coisa para contratar, menos coisa para se
            preocupar.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          variants={staggerContainer}
          className="grid gap-5 lg:grid-cols-12"
        >
          {structureItems.map(({ title, copy, icon: Icon, image, className }) => (
            <motion.article
              variants={fadeUpItem}
              key={title}
              className={`${className} group overflow-hidden rounded-sm bg-bone shadow-soft`}
            >
              <div className="grid min-h-full md:grid-cols-[1.05fr_0.95fr]">
                <ResponsiveImage
                  image={image}
                  alt={`${title} no Eventos Haras San Gregório.`}
                  className="block min-h-72 overflow-hidden"
                  imgClassName="h-full w-full object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="flex min-h-72 flex-col justify-between p-7 sm:p-9">
                  <Icon className="h-8 w-8 text-gold" strokeWidth={1.2} />
                  <div>
                    <h3 className="font-serif text-4xl font-medium leading-none tracking-normal text-forest">
                      {title}
                    </h3>
                    <p className="mt-5 text-base leading-relaxed text-charcoal/70">
                      {copy}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          variants={fadeUpItem}
          className="mt-5 grid gap-5 lg:grid-cols-12"
        >
          <div className="rounded-sm bg-forest p-7 text-bone sm:p-9 lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-normal text-gold">Já incluso</p>
            <ul className="mt-6 grid gap-4">
              {includedItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-lg leading-snug">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-sm bg-bone p-7 shadow-soft sm:p-9 lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-normal text-wood">À disposição</p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {availableItems.map(({ label, icon: Icon }) => (
                <li key={label} className="flex items-center gap-3 text-base text-charcoal/80">
                  <Icon className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.25} />
                  {label}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href={whatsappUrl} variant="dark">
                Agendar visita gratuita
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
