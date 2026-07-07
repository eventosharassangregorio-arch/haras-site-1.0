import { motion } from 'framer-motion'
import { ResponsiveImage } from '../components/ResponsiveImage.jsx'
import { fadeUpItem, staggerContainer } from '../components/motionPresets.js'
import { gallery } from '../data/content.js'

export function Gallery() {
  return (
    <section
      id="galeria"
      className="content-auto bg-ivory px-5 py-24 text-charcoal sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-[92rem]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          variants={staggerContainer}
          className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end"
        >
          <motion.div variants={fadeUpItem} className="lg:col-span-7">
            <p className="mb-6 text-xs font-semibold uppercase tracking-normal text-gold">
              Galeria cinematográfica
            </p>
            <h2 className="font-serif text-[3.15rem] font-medium leading-[0.94] tracking-normal text-forest sm:text-[4.75rem] lg:text-[6.5rem] xl:text-[7rem]">
              O cenário transforma tudo.
            </h2>
          </motion.div>
          <motion.p
            variants={fadeUpItem}
            className="max-w-xl text-base leading-relaxed text-charcoal/70 sm:text-lg lg:col-span-4 lg:col-start-9"
          >
            Jardins, interiores, festas, arquitetura e detalhes reunidos em um
            mosaico visual pensado para ser sentido antes de ser explicado.
          </motion.p>
        </motion.div>

        <div className="mb-7 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-normal text-charcoal/50">
          {['Cerimônias', 'Sunset', 'Festas', 'Estrutura', 'Natureza', 'Detalhes'].map((item) => (
            <span key={item} className="border border-charcoal/10 px-3 py-2">
              {item}
            </span>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          variants={staggerContainer}
          className="masonry"
        >
          {gallery.map(({ title, image, ratio }) => (
            <motion.figure
              variants={fadeUpItem}
              key={title}
              className="group relative overflow-hidden rounded-sm bg-forest"
            >
              <ResponsiveImage
                image={image}
                alt={title}
                className={`block ${ratio} overflow-hidden`}
                imgClassName="h-full w-full object-contain"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-coal/80 to-transparent p-5 pt-16 text-xs font-semibold uppercase tracking-normal text-bone/80 opacity-100 transition-opacity duration-500 sm:opacity-0 sm:group-hover:opacity-100">
                {title}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
