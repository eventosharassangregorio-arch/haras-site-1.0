import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { FinalCta } from './sections/FinalCta'
import { FloatingWhatsApp } from './sections/FloatingWhatsApp'
import { Footer } from './sections/Footer'
import { Gallery } from './sections/Gallery'
import { Hero } from './sections/Hero'
import { PastEvents } from './sections/PastEvents'
import { Structure } from './sections/Structure'
import { HowItWorks } from './sections/HowItWorks'
import { Faq } from './sections/Faq'
import { Testimonials } from './sections/Testimonials'
import { Visit } from './sections/Visit'

function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-ivory font-sans text-charcoal antialiased">
      <Hero />
      <About />
      <Experience />
      <Structure />
      <HowItWorks />
      <Visit />
      <Gallery />
      <PastEvents />
      <Testimonials />
      <Faq />
      <FinalCta />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}

export default App
