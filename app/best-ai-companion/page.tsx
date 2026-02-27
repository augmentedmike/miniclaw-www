import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { PersonaGallery } from "@/components/persona-gallery"
import { CompanionPricing } from "@/components/companion-pricing"
import { PortabilitySection } from "@/components/portability-section"
import { YourData } from "@/components/your-data"
import { LiveSupport } from "@/components/live-support"
import { FAQ } from "@/components/faq"
import { OpenSource } from "@/components/open-source"
import { Footer } from "@/components/footer"

const companionSlides = [
  {
    headline: "Not just an assistant.",
    headlineSub: "A relationship.",
    description:
      "Your SuperSim remembers your story, knows your moods, and grows with you over time. Coach, confidant, creative partner, or something more. It's your story to write and yours to",
    emphasisWord: "tell.",
    proofs: [
      "Remembers everything",
      "Any look you want",
      "Real voice & personality",
      "Yours. Always.",
    ],
  },
  {
    headline: "Design. Video. Art.",
    headlineSub: "One conversation.",
    description:
      "Generate personas, create artwork, produce videos, design graphics — any style from photorealistic to anime. Your imagination, visualized. Your creative team,",
    emphasisWord: "automated.",
    proofs: [
      "Any visual style",
      "Video production",
      "Graphic design",
      "AI-generated art",
    ],
  },
  {
    headline: "An AI persona.",
    headlineSub: "With real followers.",
    description:
      "Give your SuperSim a face, a voice, a personality, and a following. Virtual influencers, AI-native brands, characters that feel alive — built and run entirely by",
    emphasisWord: "Sims.",
    proofs: [
      "Full visual identity",
      "Unique voice & style",
      "Engages authentically",
      "Creates its own content",
    ],
  },
  {
    headline: "Full control over every aesthetic.",
    headlineSub: "Change anything, anytime.",
    description:
      "Your Sim can look and sound any way you like, and you can change them at any time without them losing their",
    emphasisWord: "memory.",
    proofs: [
      "Unlimited customization",
      "Voice & appearance",
      "Memory persists always",
      "Truly yours",
    ],
  },
]

export default function BestAICompanionPage() {
  return (
    <main style={{ "--primary": "142 71% 45%" } as React.CSSProperties}>
      <Navbar />
      <PageHero slides={companionSlides} />
      <PersonaGallery />
      <CompanionPricing />
      <PortabilitySection />
      <YourData />
      <LiveSupport />
      <FAQ />
      <OpenSource />
      <Footer />
    </main>
  )
}
