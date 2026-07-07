import { whatsappUrl } from '../data/content.js'

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="group fixed bottom-4 right-3 z-[60] flex flex-col items-center gap-1.5 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:bottom-6 sm:right-5"
    >
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-bone/40 bg-forest text-bone shadow-[0_18px_48px_rgba(16,18,15,0.26)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-gold group-hover:text-forest">
        <svg
          aria-hidden="true"
          viewBox="0 0 32 32"
          className="h-6 w-6"
          fill="currentColor"
        >
          <path d="M16.03 4A11.82 11.82 0 0 0 5.84 21.8L4.3 27.5l5.84-1.52A11.8 11.8 0 1 0 16.03 4Zm0 2.12a9.7 9.7 0 1 1-4.95 18.04l-.36-.22-3.47.9.92-3.36-.24-.38a9.69 9.69 0 0 1 8.1-14.98Zm-4.15 4.92c-.22-.5-.45-.51-.66-.52h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.06 3.3 5.1 4.5 2.52.99 3.04.79 3.59.74.55-.05 1.78-.72 2.03-1.42.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.94 1.18-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.66-1.61-.92-2.21Z" />
        </svg>
      </span>
      <span className="rounded-full border border-forest/10 bg-ivory/85 px-2.5 py-1 text-[10px] font-medium leading-none tracking-normal text-forest/75 shadow-[0_8px_24px_rgba(16,18,15,0.12)] backdrop-blur-sm transition-colors duration-300 group-hover:text-forest">
        faça seu evento
      </span>
    </a>
  )
}
