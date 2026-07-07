import { motion } from 'framer-motion'
import { ResponsiveImage } from '../components/ResponsiveImage.jsx'
import { fadeUpItem, staggerContainer } from '../components/motionPresets.js'
import { structureItems } from '../data/content.js'

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
            <h2 className="max-w-6xl font-serif text-[3.15rem] font-medium leading-[0.94] tracking-normal text-forest sm:text-[4.75rem] lg:text-[6.5rem] xl:text-[7rem]">
              O essencial para receber com beleza e precisão.
            </h2>
          </motion.div>
          <motion.p
            variants={fadeUpItem}
            className="max-w-lg text-base leading-relaxed text-charcoal/70 sm:text-lg lg:col-span-3 lg:col-start-10"
          >
            Ambientes internos e externos se conectam com naturalidade, criando
            uma experiência fluida do primeiro brinde ao último abraço.
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
                  imgClassName="h-full w-full object-contain"
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
      </div>
    </section>
  )
}
