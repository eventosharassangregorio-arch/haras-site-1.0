import { MessageCircle } from 'lucide-react'
import { whatsappUrl } from '../data/content.js'

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-4 right-4 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full border border-bone/40 bg-forest text-bone shadow-[0_18px_48px_rgba(16,18,15,0.26)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={1.65} />
    </a>
  )
}
