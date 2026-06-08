import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { brand, whatsappFormUrl } from '../data/content.js'

const initialForm = {
  name: '',
  date: '',
  guests: '',
  phone: ''
}

export function LeadForm() {
  const [form, setForm] = useState(initialForm)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const formattedDate = form.date
      ? new Date(`${form.date}T00:00:00`).toLocaleDateString('pt-BR')
      : ''

    const message = [
      `Olá! Gostaria de solicitar um orçamento no ${brand.shortName}.`,
      '',
      `Nome: ${form.name}`,
      formattedDate ? `Data desejada: ${formattedDate}` : '',
      form.guests ? `Número de convidados: ${form.guests}` : '',
      `WhatsApp: ${form.phone}`
    ]
      .filter((line) => line !== '')
      .join('\n')

    window.open(whatsappFormUrl(message), '_blank', 'noopener,noreferrer')
  }

  const inputClass =
    'min-h-12 w-full rounded-sm border border-charcoal/10 bg-bone px-4 text-sm text-charcoal outline-none transition-colors placeholder:text-charcoal/40 focus:border-gold'

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div>
        <label htmlFor="lead-name" className="mb-2 block text-xs font-semibold uppercase tracking-normal text-charcoal/60">
          Nome
        </label>
        <input
          id="lead-name"
          name="name"
          value={form.name}
          onChange={handleChange}
          className={inputClass}
          autoComplete="name"
          required
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-date" className="mb-2 block text-xs font-semibold uppercase tracking-normal text-charcoal/60">
            Data
          </label>
          <input
            id="lead-date"
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="lead-guests" className="mb-2 block text-xs font-semibold uppercase tracking-normal text-charcoal/60">
            Convidados
          </label>
          <input
            id="lead-guests"
            name="guests"
            type="number"
            min="1"
            inputMode="numeric"
            value={form.guests}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="lead-phone" className="mb-2 block text-xs font-semibold uppercase tracking-normal text-charcoal/60">
          WhatsApp
        </label>
        <input
          id="lead-phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          className={inputClass}
          autoComplete="tel"
          required
        />
      </div>

      <button
        type="submit"
        className="group mt-2 inline-flex min-h-12 items-center justify-center gap-3 rounded-sm border border-forest bg-forest px-6 py-3 text-xs font-semibold uppercase tracking-normal text-bone transition-all duration-500 hover:bg-transparent hover:text-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest sm:min-h-14"
      >
        Enviar pelo WhatsApp
        <ArrowUpRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          strokeWidth={1.5}
        />
      </button>
    </form>
  )
}
