import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { BonsaiBrain } from "@/components/bonsai-brain"
import { ProjectBoard } from "@/components/project-board"
import { LivingSoftware } from "@/components/living-software"
import { Pricing } from "@/components/pricing"
import { BuiltWithBonsai } from "@/components/built-with-bonsai"
import { AGIMoment } from "@/components/agi-moment"

import { Features } from "@/components/features"
import { LiveSupport } from "@/components/live-support"
import { FAQ } from "@/components/faq"
import { OpenSource } from "@/components/open-source"
import { Footer } from "@/components/footer"

const companySlides = [
  {
    headline: "A full company.",
    headlineSub: "Running on your desk.",
    description:
      "Sales, support, dev, ops — all handled by digital assistants coordinating through Bonsai. They create their own tickets, ship their own code, and fix their own bugs. Around the clock. Without",
    emphasisWord: "you.",
    proofs: [
      "Every department covered",
      "Runs 24/7",
      "Self-healing systems",
      "Autonomous operations",
    ],
  },
  {
    headline: "Ship code while you sleep.",
    headlineSub: "Wake up to a PR.",
    description:
      "Your digital assistant writes features, reviews PRs, handles deployments, and fixes bugs — all from the terminal. Pair program during the day. Let it ship",
    emphasisWord: "overnight.",
    proofs: [
      "Full terminal access",
      "Git & CI/CD native",
      "Self-healing code",
      "Deploys autonomously",
    ],
  },
  {
    headline: "Your brand. Every platform.",
    headlineSub: "Always on.",
    description:
      "Post daily content. Maintain your brand voice. Monitor engagement. Run A/B tests. Pause underperforming ads. Your digital assistant is the social media manager that never",
    emphasisWord: "sleeps.",
    proofs: [
      "Every platform managed",
      "Brand voice locked in",
      "Performance tracked",
      "Content on autopilot",
    ],
  },
  {
    headline: "Your inbox. Your calendar.",
    headlineSub: "Your life. Handled.",
    description:
      "Inbox zero every day. Meetings turned into action items. Flights checked in. Morning briefings delivered. Your digital assistant manages the chaos so you can focus on what",
    emphasisWord: "matters.",
    proofs: [
      "Inbox zero daily",
      "Calendar managed",
      "Travel booked",
      "Morning briefings",
    ],
  },
]

export default function AICompanyInABoxPage() {
  return (
    <main style={{ "--primary": "217 91% 60%" } as React.CSSProperties}>
      <Navbar />
      <PageHero slides={companySlides} />
      <BonsaiBrain />
      <ProjectBoard />
      <LivingSoftware />
      <Pricing />
      <BuiltWithBonsai />
      <AGIMoment />
      <Features />
      <LiveSupport />
      <FAQ />
      <OpenSource />
      <Footer />
    </main>
  )
}
