import { motion } from 'framer-motion'
import { ResponsiveImage } from '../components/ResponsiveImage.jsx'
import { fadeUpItem, staggerContainer } from '../components/motionPresets.js'
import { experiences } from '../data/content.js'

export function Experience() {
  return (
    <section
      id="eventos"
      className="content-auto relative overflow-hidden bg-forest px-5 py-24 text-bone sm:px-8 sm:py-32 lg:px-12"
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
              Para quem é
            </p>
            <h2 className="max-w-5xl font-serif h-display">
              Um só espaço, do casamento à festa de família.
            </h2>
          </motion.div>
          <motion.p
            variants={fadeUpItem}
            className="max-w-xl text-base leading-relaxed text-bone/70 sm:text-lg lg:col-span-4 lg:col-start-9"
          >
            Casamentos, aniversários e encontros em um cenário de campo, com o
            que a sua festa precisa.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          variants={staggerContainer}
          className="grid gap-4 md:grid-cols-3"
        >
          {experiences.map(({ title, copy, icon: Icon, image }) => (
            <motion.article
              key={title}
              variants={fadeUpItem}
              className="group relative min-h-[32rem] overflow-hidden rounded-sm bg-coal"
            >
              <ResponsiveImage
                image={image}
                alt={`${title} no Eventos Haras San Gregório.`}
                className="absolute inset-0"
                imgClassName="h-full w-full object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,18,15,0.08),rgba(16,18,15,0.58)_58%,rgba(16,18,15,0.9))]" />
              <div className="relative z-10 flex h-full min-h-[32rem] flex-col justify-between p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="h-px w-12 bg-gold" />
                  <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-bone/25 bg-bone/10 backdrop-blur">
                    <Icon className="h-5 w-5 text-gold" strokeWidth={1.25} />
                  </span>
                </div>
                <div>
                  <h3
                    lang="pt-BR"
                    className="font-serif text-2xl font-medium leading-tight tracking-normal [hyphens:auto] sm:text-3xl"
                  >
                    {title}
                  </h3>
                  <p className="mt-5 text-sm leading-relaxed text-bone/80">
                    {copy}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
