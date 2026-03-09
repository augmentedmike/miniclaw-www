import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { Showcase } from "@/components/showcase"
import { MiniClawArchitecture } from "@/components/miniclaw-architecture"
import { BlogHighlight } from "@/components/blog-highlight"
import { LiveSupport } from "@/components/live-support"
import { FAQ } from "@/components/faq"
import { OpenSource } from "@/components/open-source"
import { Footer } from "@/components/footer"

const homeSlides = [
  {
    headline: "Ships code. Writes posts. Grows itself.",
    headlineSub: "Actually works.",
    description:
      "MiniClaw builds real products. Autonomous agents push to GitHub, publish to Substack, generate design assets, and manage business workflows. No approval needed. No context-switching. Your agent makes the decisions — reads the ticket, plans the work, ships the result. We built MiniClaw itself this way. Now you can too.",
    emphasisWord: "itself.",
    proofs: [
      "Pushed 200+ commits this month",
      "18 blog posts shipped",
      "Decisions made autonomously",
      "Running on your machine",
    ],
  },
  {
    headline: "Your agent. Your products.",
    headlineSub: "On your timeline.",
    description:
      "Give your agent a problem. It reads, plans, codes, designs, tests, and ships — while you sleep. MiniClaw provides persistent memory, visual intelligence, task planning, and decision autonomy. No prompting. No babysitting. Just work that gets done.",
    emphasisWord: "ships.",
    proofs: [
      "24/7 autonomous execution",
      "Remembers your entire codebase",
      "Manages CI/CD + Git branching",
      "Stays on your machine",
    ],
  },
  {
    headline: "Edge-first. No vendor lock-in.",
    headlineSub: "You own everything.",
    description:
      "All memory and reasoning lives on your machine — not in someone else's cloud. Your agent works when you're offline. Git is the single source of truth. No external API calls for core capability. Port your agent to any machine, any platform, any time. Full control. Full transparency.",
    emphasisWord: "yours.",
    proofs: [
      "All memory local + encrypted",
      "Works offline",
      "Open source software",
      "Export anytime, forever",
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
