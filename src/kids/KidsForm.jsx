import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '../components/Button.jsx'
import { brand } from '../data/content.js'
import { kidsCtaUrl, kidsWhatsappUrl } from '../data/kids.js'
import { track } from '../lib/tracking.js'

const initialForm = { name: '', date: '', guests: '', age: '' }

const inputClass =
  'min-h-12 w-full rounded-xl border border-forest/15 bg-ivory px-4 text-base text-charcoal outline-none transition-colors placeholder:text-charcoal/40 focus:border-forest'

const labelClass = 'mb-2 block text-xs font-semibold uppercase tracking-normal text-charcoal/60'

export function KidsContact() {
  const [form, setForm] = useState(initialForm)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const formattedDate = form.date ? new Date(`${form.date}T00:00:00`).toLocaleDateString('pt-BR') : ''
    const message = [
      `Olá! Vim pelo site e queria saber as datas para uma festa infantil no ${brand.shortName}.`,
      '',
      `Nome: ${form.name}`,
      form.age ? `O aniversariante vai fazer: ${form.age} ano(s)` : '',
      formattedDate ? `Data desejada: ${formattedDate}` : '',
      form.guests ? `Convidados (crianças e adultos): ${form.guests}` : ''
    ]
      .filter(Boolean)
      .join('\n')

    track('generate_lead', { section: 'festa-infantil', guests: form.guests || undefined })
    window.open(kidsWhatsappUrl(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contato" className="relative overflow-hidden bg-sun px-5 py-24 text-forest sm:px-8 sm:py-32 lg:px-12">
      <div className="relative mx-auto grid max-w-[92rem] gap-12 lg:grid-cols-12 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-6"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-normal">Visita gratuita e sem compromisso</p>
          <h2 className="h-display font-display">
            Vamos escolher a data <span className="font-semibold">da festa?</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-forest/80">
            Conte um pouco sobre a festa que você imagina. Respondemos pelo WhatsApp e combinamos uma
            visita no melhor horário.
          </p>
          <div className="mt-8">
            <Button href={kidsCtaUrl} variant="dark">
              Prefiro falar direto no WhatsApp
            </Button>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="grid gap-4 rounded-3xl bg-bone p-6 shadow-veil sm:p-9 lg:col-span-6"
        >
          <div>
            <label htmlFor="kids-name" className={labelClass}>
              Seu nome
            </label>
            <input
              id="kids-name"
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
              <label htmlFor="kids-age" className={labelClass}>
                Idade do aniversariante
              </label>
              <input
                id="kids-age"
                name="age"
                type="number"
                min="0"
                max="17"
                inputMode="numeric"
                value={form.age}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="kids-guests" className={labelClass}>
                Convidados
              </label>
              <input
                id="kids-guests"
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
            <label htmlFor="kids-date" className={labelClass}>
              Data aproximada
            </label>
            <input
              id="kids-date"
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <button
            type="submit"
            className="group mt-2 inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-forest bg-forest px-8 py-3 text-xs font-semibold uppercase tracking-normal text-bone transition-all duration-500 hover:bg-transparent hover:text-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
          >
            Consultar datas no WhatsApp
            <ArrowUpRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={1.5}
            />
          </button>
          <p className="text-center text-xs text-charcoal/55">
            O WhatsApp abre com a mensagem pronta. Você só envia.
          </p>
        </motion.form>
      </div>
    </section>
  )
}

export function KidsStickyBar() {
  const [scrolled, setScrolled] = useState(false)
  const [atContact, setAtContact] = useState(false)
  const visible = scrolled && !atContact

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 520)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    // Esconde a barra quando o formulário já está na tela.
    const contact = document.getElementById('contato')
    const observer = contact ? new IntersectionObserver(([entry]) => setAtContact(entry.isIntersecting), { threshold: 0.15 }) : null
    if (contact && observer) observer.observe(contact)

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer?.disconnect()
    }
  }, [])

  return (
    <div
      className={[
        'fixed inset-x-0 bottom-0 z-50 border-t border-forest/10 bg-ivory/95 px-4 py-3 backdrop-blur-xl transition-transform duration-500 md:hidden',
        visible ? 'translate-y-0' : 'translate-y-full'
      ].join(' ')}
    >
      <a
        href={kidsCtaUrl}
        className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-sun text-xs font-semibold uppercase tracking-normal text-forest"
      >
        Consultar datas no WhatsApp
        <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
      </a>
    </div>
  )
}
