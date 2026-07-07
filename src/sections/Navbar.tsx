import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import { useEffect, useState } from 'react'
import { brand, instagramUrl, navLinks, whatsappUrl } from '../data/content.js'

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
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className={[
              'inline-flex h-10 w-10 items-center justify-center rounded-sm border transition-colors duration-500',
              scrolled
                ? 'border-charcoal/20 text-charcoal hover:border-forest hover:bg-forest hover:text-bone'
                : 'border-bone/40 text-bone hover:bg-bone hover:text-forest'
            ].join(' ')}
          >
            <Instagram className="h-4 w-4" strokeWidth={1.5} />
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar pelo WhatsApp"
            className={[
              'inline-flex h-10 w-10 items-center justify-center rounded-sm border transition-colors duration-500',
              scrolled
                ? 'border-charcoal/20 text-charcoal hover:border-forest hover:bg-forest hover:text-bone'
                : 'border-bone/40 text-bone hover:bg-bone hover:text-forest'
            ].join(' ')}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 32 32"
              className="h-4 w-4"
              fill="currentColor"
            >
              <path d="M16.03 4A11.82 11.82 0 0 0 5.84 21.8L4.3 27.5l5.84-1.52A11.8 11.8 0 1 0 16.03 4Zm0 2.12a9.7 9.7 0 1 1-4.95 18.04l-.36-.22-3.47.9.92-3.36-.24-.38a9.69 9.69 0 0 1 8.1-14.98Zm-4.15 4.92c-.22-.5-.45-.51-.66-.52h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.06 3.3 5.1 4.5 2.52.99 3.04.79 3.59.74.55-.05 1.78-.72 2.03-1.42.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.94 1.18-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.66-1.61-.92-2.21Z" />
            </svg>
          </a>
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
        </div>
      </nav>
    </motion.header>
  )
}
