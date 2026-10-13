import { Footer } from '../sections/Footer'
import { KidsContact, KidsStickyBar } from './KidsForm.jsx'
import { KidsHeader, KidsHero } from './KidsHero.jsx'
import {
  KidsBenefits,
  KidsFaq,
  KidsGallery,
  KidsIncluded,
  KidsMarquee,
  KidsReviews,
  KidsSteps
} from './KidsSections.jsx'

export default function KidsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-ivory pb-16 font-sans text-charcoal antialiased md:pb-0">
      <KidsHeader />
      <KidsHero />
      <KidsMarquee />
      <KidsBenefits />
      <KidsGallery />
      <KidsIncluded />
      <KidsSteps />
      <KidsReviews />
      <KidsFaq />
      <KidsContact />
      <Footer />
      <KidsStickyBar />
    </main>
  )
}
