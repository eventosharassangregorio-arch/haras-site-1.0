import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { FinalCta } from './sections/FinalCta'
import { FloatingWhatsApp } from './sections/FloatingWhatsApp'
import { Footer } from './sections/Footer'
import { Gallery } from './sections/Gallery'
import { Hero } from './sections/Hero'
import { PastEvents } from './sections/PastEvents'
import { Testimonials } from './sections/Testimonials'
import { Visit } from './sections/Visit'

function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-ivory font-sans text-charcoal antialiased">
      <Hero />
      <About />
      <Experience />
      <Visit />
      <Gallery />
      <PastEvents />
      <Testimonials />
      <FinalCta />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}

export default App
