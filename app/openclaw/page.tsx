import type { Metadata } from 'next'
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: 'OpenClaw for Humans — MiniClaw Personal AI Platform',
  description: 'OpenClaw powers MiniClaw — a local agentic OS with persona, memory, and skills for macOS. No terminal required. Just plug in and your AI gets to work.',
  alternates: {
    canonical: 'https://miniclaw.bot/openclaw',
  },
}
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
