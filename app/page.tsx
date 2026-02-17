import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { LogosBar } from "@/components/logos-bar"
import { Features } from "@/components/features"
import { PersonaShowcase } from "@/components/assistant-showcase"
import { PersonaGallery } from "@/components/persona-gallery"
import { SkillsSection } from "@/components/skills-section"
import { PortabilitySection } from "@/components/portability-section"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { Showcase } from "@/components/showcase"
import { LivingSoftware } from "@/components/living-software"
import { YourData } from "@/components/your-data"
import { LiveSupport } from "@/components/live-support"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { AGIMoment } from "@/components/agi-moment"
import { ProjectBoard } from "@/components/project-board"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProjectBoard />
      <AGIMoment />
      <LogosBar />
      <Showcase />
      <LivingSoftware />
      <YourData />
      <SkillsSection />
      <Features />
      <LiveSupport />
      <PersonaGallery />
      <PortabilitySection />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
