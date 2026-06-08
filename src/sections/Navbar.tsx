import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { brand, navLinks, whatsappUrl } from '../data/content.js'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: 'easeOut' }}
      className={[
        'fixed left-0 right-0 top-0 z-50 px-4 py-4 transition-all duration-700 sm:px-8 lg:px-12',
        scrolled
          ? 'bg-ivory/95 text-charcoal shadow-[0_16px_50px_rgba(16,18,15,0.07)] backdrop-blur-2xl'
          : 'bg-transparent text-bone'
      ].join(' ')}
    >
      <nav className="mx-auto flex max-w-[92rem] items-center justify-between gap-5">
        <a
          href="#top"
          aria-label={brand.name}
          className="group flex items-center gap-3"
        >
          <span
            className={[
              'hidden h-px w-10 transition-colors duration-700 sm:block',
              scrolled ? 'bg-gold' : 'bg-bone/60'
            ].join(' ')}
          />
          <span className="font-serif text-xl font-semibold leading-none tracking-normal sm:text-2xl">
            {brand.shortName}
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-semibold uppercase tracking-normal opacity-75 transition-opacity duration-300 hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className={[
              'hidden min-h-10 items-center justify-center rounded-sm px-4 text-[11px] font-semibold uppercase tracking-normal transition-all duration-500 sm:inline-flex',
              scrolled
                ? 'border border-forest bg-forest text-bone hover:bg-transparent hover:text-forest'
                : 'border border-bone/50 text-bone hover:bg-bone hover:text-forest'
            ].join(' ')}
          >
            Agendar Visita
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar pelo WhatsApp"
            className={[
              'inline-flex h-10 w-10 items-center justify-center rounded-sm border transition-colors duration-500 lg:hidden',
              scrolled
                ? 'border-charcoal/20 text-charcoal'
                : 'border-bone/40 text-bone'
            ].join(' ')}
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
          </a>
        </div>
      </nav>
    </motion.header>
  )
}
