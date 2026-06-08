import { ArrowUpRight } from 'lucide-react'

export function Button({ href, children, variant = 'light', className = '' }) {
  const isExternal = typeof href === 'string' && /^(https?:)?\/\//.test(href)
  const styles = {
    light:
      'border border-bone/60 bg-bone text-forest hover:bg-transparent hover:text-bone focus-visible:outline-bone',
    dark:
      'border border-forest bg-forest text-bone hover:bg-transparent hover:text-forest focus-visible:outline-forest',
    gold:
      'border border-gold bg-gold text-forest hover:bg-transparent hover:text-gold focus-visible:outline-gold',
    ghost:
      'border border-bone/40 bg-transparent text-bone hover:border-bone hover:bg-bone hover:text-forest focus-visible:outline-bone'
  }

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className={[
        'group inline-flex min-h-12 items-center justify-center gap-3 rounded-sm px-6 py-3 text-xs font-semibold uppercase tracking-normal transition-all duration-500 sm:min-h-14 sm:px-8',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4',
        styles[variant] ?? styles.light,
        className
      ].join(' ')}
    >
      <span>{children}</span>
      <ArrowUpRight
        aria-hidden="true"
        className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        strokeWidth={1.5}
      />
    </a>
  )
}
