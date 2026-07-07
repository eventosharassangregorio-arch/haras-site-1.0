import { motion } from 'framer-motion'
import { ResponsiveImage } from '../components/ResponsiveImage.jsx'
import { brand, footerLinks, images, whatsappUrl } from '../data/content.js'

export function Footer() {
  return (
    <footer
      id="contato"
      className="bg-coal px-5 py-16 text-bone sm:px-8 sm:py-20 lg:px-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mx-auto max-w-[92rem]"
      >
        <div className="grid gap-12 border-b border-bone/10 pb-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <a href="#top" className="inline-flex items-center gap-4">
              <ResponsiveImage
                image={images.logo}
                alt={`Logo ${brand.name}`}
                className="block h-14 w-14 overflow-hidden rounded-full border border-bone/20"
                imgClassName="h-full w-full object-contain"
              />
              <span className="font-serif text-3xl font-medium leading-none tracking-normal">
                {brand.shortName}
              </span>
            </a>
            <p className="mt-7 max-w-md text-base leading-relaxed text-bone/60">
              {brand.line} Um refúgio reservado, sofisticado e cinematográfico
              em meio à natureza.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-3 lg:col-span-6 lg:col-start-7">
            {footerLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-sm text-bone/70 transition-colors hover:text-bone"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-bone/10 text-gold transition-colors group-hover:border-gold/60">
                  <Icon className="h-4 w-4" strokeWidth={1.25} />
                </span>
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-xs text-bone/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {brand.name}. Todos os direitos reservados.</p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-bone">
            Visitas mediante agendamento.
          </a>
        </div>
      </motion.div>
    </footer>
  )
}
