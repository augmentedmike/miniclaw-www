import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { LogosBar } from "@/components/logos-bar"
import { Features } from "@/components/features"
import { Personalize } from "@/components/personalize"
import { HowItWorks } from "@/components/how-it-works"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { Press } from "@/components/press"
import { Showcase } from "@/components/showcase"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogosBar />
      <Features />
      <Personalize />
      <HowItWorks />
      <Press />
      <Pricing />
      <Testimonials />
      <Showcase />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
