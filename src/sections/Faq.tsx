import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/content.js'

export function Faq() {
  return (
    <section id="perguntas" className="bg-sand px-5 py-24 text-charcoal sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto grid max-w-[92rem] gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="mb-6 text-xs font-semibold uppercase tracking-normal text-wood">Perguntas frequentes</p>
          <h2 className="font-serif text-forest h-display">
            Antes de visitar.
          </h2>
        </div>
        <div className="divide-y divide-charcoal/10 border-y border-charcoal/10 lg:col-span-7 lg:col-start-6">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-2xl leading-snug text-forest sm:text-3xl">
                {q}
                <ChevronDown className="h-5 w-5 shrink-0 text-gold transition-transform duration-300 group-open:rotate-180" strokeWidth={1.5} />
              </summary>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-charcoal/70">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
