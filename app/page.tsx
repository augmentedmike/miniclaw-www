import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { PathPicker } from "@/components/path-picker"
import { Showcase } from "@/components/showcase"
import { MiniClawArchitecture } from "@/components/miniclaw-architecture"
import { BlogHighlight } from "@/components/blog-highlight"
import { LiveSupport } from "@/components/live-support"
import { FAQ } from "@/components/faq"
import { OpenSource } from "@/components/open-source"
import { Footer } from "@/components/footer"

const homeSlides = [
  {
    headline: "Your super agent.",
    headlineSub: "Always working.",
    description:
      "A single, capable AI that handles any task — coding, design, research, support, and more. MiniClaw adds the cognitive layer: persistent memory, visual intelligence, task planning, trusted communication, and encrypted secrets. Together they create a super agent that doesn't just respond — it remembers, plans, and grows with you over time.",
    emphasisWord: "grows.",
    proofs: [
      "Ready in 2 minutes",
      "Zero lines of code",
      "Remembers everything",
      "Stays on your machine",
    ],
  },
  {
    headline: "Research, build, create.",
    headlineSub: "At the speed of thought.",
    description:
      "Stop context-switching. Your super agent writes code, designs graphics, conducts research, writes copy, plans projects, and learns your patterns. It handles the work while you focus on strategy, judgment, and the things only humans can do. Paired or autonomous.",
    emphasisWord: "autonomous.",
    proofs: [
      "Coding + design",
      "Research + writing",
      "24/7 availability",
      "Learns your style",
    ],
  },
  {
    headline: "Your digital companion.",
    headlineSub: "Always by your side.",
    description:
      "Not a tool. A thinking partner. MiniClaw knows your context, remembers your journey, and adapts to how you work. Whether you need strategic counsel, a sparring partner, or someone to rubber-duck your ideas with — your super agent is there, always learning from the time you spend together.",
    emphasisWord: "together.",
    proofs: [
      "Remembers everything",
      "Your look & personality",
      "Real voice & presence",
      "Yours. Always.",
    ],
  },
]

export default function Page() {
  return (
    <main>
      <Navbar />
      <PageHero slides={homeSlides} />

      <div className="px-6 py-12 text-center">
        <p className="text-lg italic text-muted-foreground/60">
          &ldquo;We built the boat while sailing the sea.&rdquo;
        </p>
      </div>

      <PathPicker />
      <Showcase />
      <MiniClawArchitecture />
      <BlogHighlight />
      <LiveSupport />
      <FAQ />
      <OpenSource />
      <Footer />
    </main>
  )
}
