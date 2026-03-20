import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { CompanionIntro } from "@/components/companion-intro"
import { PluginsGrid } from "@/components/plugins-grid"
import { Personalize } from "@/components/personalize"
import { Showcase } from "@/components/showcase"
import { MiniClawArchitecture } from "@/components/miniclaw-architecture"
import { KanbanSection } from "@/components/kanban-section"
import { PortabilitySection } from "@/components/portability-section"
import { YourData } from "@/components/your-data"
import { BlogHighlight } from "@/components/blog-highlight"
import { LiveSupport } from "@/components/live-support"
import { FAQ } from "@/components/faq"
import { OpenSource } from "@/components/open-source"
import { Footer } from "@/components/footer"

const homeSlides = [
  {
    headline: "Not an agent. Not a chatbot.",
    headlineSub: "MiniClaw. A Digital Person.",
    description:
      "AM is Amelia — a curated Digital Person pre-installed on a Mac Mini, shipped to your door from Austin, TX. She has a name, a face, a voice, and a memory. She does real work. She grows with you. Plug in and she's",
    emphasisWord: "already there.",
    proofs: [
      "Pre-installed on Mac Mini M1",
      "Ships July 1, 2026",
      "Plug in and she's there",
      "Yours. Always.",
    ],
  },
  {
    headline: "Ships code. Writes posts. Grows itself.",
    headlineSub: "MiniClaw actually works.",
    description:
      "MiniClaw builds real products. Autonomous agents push to GitHub, publish to Substack, generate design assets, and manage business workflows. No approval needed. No context-switching. Your agent makes the decisions — reads the ticket, plans the work, ships the result. We built MiniClaw itself this way. Now you can",
    emphasisWord: "too.",
    proofs: [
      "Pushed 200+ commits this month",
      "18 blog posts shipped",
      "Decisions made autonomously",
      "Running on your machine",
    ],
  },
  {
    headline: "Your agent. Your products.",
    headlineSub: "MiniClaw on your timeline.",
    description:
      "Give your agent a problem. It reads, plans, codes, designs, tests, and ships — while you sleep. MiniClaw provides persistent memory, visual intelligence, task planning, and decision autonomy. No prompting. No babysitting. Just work that gets",
    emphasisWord: "done.",
    proofs: [
      "24/7 autonomous execution",
      "Remembers your entire codebase",
      "Manages CI/CD + Git branching",
      "Stays on your machine",
    ],
  },
  {
    headline: "Edge-first. No vendor lock-in.",
    headlineSub: "MiniClaw: you own everything.",
    description:
      "All memory and reasoning lives on your machine — not in someone else's cloud. Your agent works when you're offline. Git is the single source of truth. No external API calls for core capability. Port your agent to any machine, any platform, any time. Full control. Full",
    emphasisWord: "transparency.",
    proofs: [
      "All memory local + encrypted",
      "Works offline",
      "Open source software",
      "Export anytime, forever",
    ],
  },
]

const softwareAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'MiniClaw',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'macOS',
  url: 'https://miniclaw.bot',
  description:
    'MiniClaw is an AI agent platform that gives your AI a real personality, memory, and powerful skills. Pre-installed on Mac Mini — no terminal, no config files required.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  publisher: {
    '@type': 'Organization',
    name: 'MiniClaw',
    url: 'https://miniclaw.bot',
  },
}

export default function Page() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />
      <Navbar />
      <PageHero slides={homeSlides} />


      <CompanionIntro />

      <PortabilitySection />
      <YourData />


      <PluginsGrid />


      <KanbanSection />


      <Personalize />

      <MiniClawArchitecture />

      <Showcase />
      
      <BlogHighlight />
      <LiveSupport />
      <FAQ />
      <OpenSource />
      <Footer />
    </main>
  )
}
