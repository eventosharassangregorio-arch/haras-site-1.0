import { motion } from 'framer-motion'
import { ResponsiveImage } from '../components/ResponsiveImage.jsx'
import { fadeUpItem, staggerContainer } from '../components/motionPresets.js'
import { pastEvent } from '../data/content.js'

export function PastEvents() {
  const cardLayouts = [
    'lg:col-span-2 lg:row-span-2',
    'lg:col-span-2',
    'lg:row-span-2',
    '',
    '',
    'lg:col-span-2',
    '',
    '',
    '',
    'lg:row-span-2',
    'lg:col-span-2'
  ]

  return (
    <section
      id="eventos-passados"
      className="content-auto overflow-hidden bg-coal px-5 py-24 text-bone sm:px-8 sm:py-32 lg:px-12"
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
              {pastEvent.eyebrow}
            </p>
            <h2 className="max-w-5xl font-serif text-[3.15rem] font-medium leading-[0.94] tracking-normal text-bone sm:text-[4.75rem] sm:leading-[0.92] lg:text-[6.5rem] xl:text-[7rem]">
              {pastEvent.title}
            </h2>
          </motion.div>
          <motion.div variants={fadeUpItem} className="max-w-xl lg:col-span-4 lg:col-start-9">
            {pastEvent.subtitle ? (
              <p className="mb-4 text-xs font-semibold uppercase tracking-normal text-bone/45">
                {pastEvent.subtitle}
              </p>
            ) : null}
            <p className="text-base leading-relaxed text-bone/70 sm:text-lg">
              {pastEvent.copy}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          variants={staggerContainer}
          className="grid auto-rows-[18rem] gap-4 sm:grid-cols-2 sm:auto-rows-[20rem] lg:grid-cols-4 lg:auto-rows-[18rem]"
        >
          {pastEvent.images.map(({ title, image }, index) => (
            <motion.figure
              variants={fadeUpItem}
              key={title}
              className={`${cardLayouts[index] || ''} group relative overflow-hidden rounded-sm bg-bone/5`}
            >
              <ResponsiveImage
                image={image}
                alt={`${title} no Eventos Haras San Gregório.`}
                className="absolute inset-0 h-full w-full"
                imgClassName="h-full w-full object-contain"
                sizes={
                  cardLayouts[index]?.includes('col-span-2')
                    ? '(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw'
                    : '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw'
                }
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,18,15,0.02),rgba(16,18,15,0.1)_45%,rgba(16,18,15,0.72))] opacity-90 transition-opacity duration-700 group-hover:opacity-100" />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-5 pt-16 text-[11px] font-semibold uppercase tracking-normal text-bone/78">
                {title}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
