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
              Experiências
            </p>
            <h2 className="max-w-5xl font-serif text-[3.15rem] font-medium leading-[0.94] tracking-normal sm:text-[4.75rem] sm:leading-[0.92] lg:text-[7rem] xl:text-[7.5rem]">
              Celebrações com espaço para respirar.
            </h2>
          </motion.div>
          <motion.p
            variants={fadeUpItem}
            className="max-w-xl text-base leading-relaxed text-bone/70 sm:text-lg lg:col-span-4 lg:col-start-9"
          >
            Casamentos, encontros sociais e eventos para marcas em um cenário
            reservado entre natureza, arquitetura e experiências inesquecíveis.
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
                alt={`${title} no Eventos Haras São Gregório.`}
                className="absolute inset-0"
                imgClassName="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
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
                  <h3 className="font-serif text-4xl font-medium leading-none tracking-normal">
                    {title}
                  </h3>
                  <p className="mt-5 text-sm leading-relaxed text-bone/75 transition-all duration-700 sm:translate-y-3 sm:text-bone/0 sm:group-hover:translate-y-0 sm:group-hover:text-bone/75">
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
