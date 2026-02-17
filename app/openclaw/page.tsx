import { Navbar } from "@/components/navbar"
import { OpenClawHero } from "@/components/openclaw-hero"
import { Press } from "@/components/press"
import { AGIMoment } from "@/components/agi-moment"
import { ProjectBoard } from "@/components/project-board"
import { MiniClawVsOpenClaw } from "@/components/miniclaw-vs-openclaw"
import { LogosBar } from "@/components/logos-bar"
import { Showcase } from "@/components/showcase"
import { LivingSoftware } from "@/components/living-software"
import { YourData } from "@/components/your-data"
import { LiveSupport } from "@/components/live-support"
import { SkillsSection } from "@/components/skills-section"
import { Features } from "@/components/features"
import { PersonaGallery } from "@/components/persona-gallery"
import { PortabilitySection } from "@/components/portability-section"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function OpenClawPage() {
  return (
    <main>
      <Navbar />
      <OpenClawHero />
      <ProjectBoard />
      <Press />
      <AGIMoment />
      <MiniClawVsOpenClaw />
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
