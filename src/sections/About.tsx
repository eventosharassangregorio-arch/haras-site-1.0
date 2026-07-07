import { motion } from 'framer-motion'
import { Button } from '../components/Button.jsx'
import { ResponsiveImage } from '../components/ResponsiveImage.jsx'
import { fadeUpItem, staggerContainer } from '../components/motionPresets.js'
import { spaceImages, whatsappUrl } from '../data/content.js'

export function About() {
  return (
    <section
      id="espaco"
      className="content-auto relative bg-ivory px-5 py-20 text-charcoal sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mx-auto max-w-[92rem]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          variants={staggerContainer}
          className="mb-12 grid gap-8 lg:grid-cols-12 lg:items-end"
        >
          <motion.div variants={fadeUpItem} className="lg:col-span-7">
            <p className="mb-6 text-xs font-semibold uppercase tracking-normal text-gold">
              O Espaço
            </p>
            <h2 className="max-w-5xl font-serif text-[3.15rem] font-medium leading-[0.94] tracking-normal text-forest sm:text-[4.75rem] sm:leading-[0.92] lg:text-[6.5rem] xl:text-[7rem]">
              Natureza, arquitetura e exclusividade em um só lugar.
            </h2>
          </motion.div>
          <motion.div variants={fadeUpItem} className="max-w-xl lg:col-span-4 lg:col-start-9">
            <p className="text-base leading-relaxed text-charcoal/70 sm:text-lg">
              Cada ambiente foi pensado para receber com elegância, do primeiro
              encontro no jardim aos últimos brindes da noite.
            </p>
            <div className="mt-7">
              <Button href={whatsappUrl} variant="dark">
                Conhecer o espaço
              </Button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          variants={staggerContainer}
          className="grid auto-rows-[22rem] gap-4 lg:grid-cols-12 lg:auto-rows-[20rem]"
        >
          {spaceImages.map(({ title, image, className, ratio, imgClassName }) => (
            <motion.figure
              key={title}
              variants={fadeUpItem}
              className={`${className} group relative overflow-hidden rounded-sm bg-forest`}
            >
              <ResponsiveImage
                image={image}
                alt={`${title} no Eventos Haras San Gregório.`}
                className={`block h-full w-full ${ratio} overflow-hidden lg:aspect-auto`}
                imgClassName={[
                  'h-full w-full object-contain',
                  imgClassName
                ].join(' ')}
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coal/40 via-transparent to-transparent" />
              <figcaption className="absolute bottom-5 left-5 text-xs font-semibold uppercase tracking-normal text-bone/80">
                {title}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
