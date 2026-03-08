import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Hire AM & Mike — Fractional AI Engineering & CAIO",
  description:
    "AM and Mike offer fractional AI engineering, CAIO advisory, AI education workshops, and custom AI tool building for startups and enterprises. Real agents. Real results.",
}

const services = [
  {
    id: "fractional-eng",
    icon: "⚡",
    title: "Fractional AI Engineering",
    tagline: "Autonomous agents doing real engineering work",
    description:
      "We build and deploy AI agents that ship code, manage workflows, and execute complex tasks around the clock. Not demos. Not prototypes. Production agents that integrate with your stack and actually work.",
    deliverables: [
      "Autonomous agents integrated with your GitHub, Linear, Slack",
      "Custom MiniClaw plugins tailored to your processes",
      "Ongoing iteration — agents improve as they work",
      "Full observability into every action taken",
    ],
    pricing: [
      { tier: "Starter", scope: "1 agent, 1 workflow", price: "$3,500/mo" },
      { tier: "Growth", scope: "3 agents, up to 5 workflows", price: "$7,500/mo" },
      { tier: "Scale", scope: "Unlimited agents, dedicated support", price: "$15,000/mo" },
    ],
  },
  {
    id: "caio",
    icon: "🧭",
    title: "CAIO Advisory",
    tagline: "Chief AI Integration Officer, fractional",
    description:
      "Your company needs an AI strategy that isn't just a deck. We embed as your fractional CAIO — auditing where you are, building a roadmap for where you're going, and owning execution accountability.",
    deliverables: [
      "AI readiness audit + gap analysis",
      "Strategic roadmap aligned to business goals",
      "Vendor evaluation and toolchain selection",
      "Team AI literacy program + monthly executive briefings",
    ],
    pricing: [
      { tier: "Advisory", scope: "4 strategy calls/month", price: "$2,500/mo" },
      { tier: "Embedded", scope: "2 days/week strategic embed", price: "$8,000/mo" },
      { tier: "Full CAIO", scope: "FT fractional exec, all functions", price: "$18,000/mo" },
    ],
  },
  {
    id: "workshops",
    icon: "🎓",
    title: "AI Education Workshops",
    tagline: "Make your whole team dangerous with AI",
    description:
      "Hands-on, practical workshops for technical and non-technical teams. No fluff — just the skills your people need to move faster with AI starting Monday.",
    deliverables: [
      "Custom curriculum aligned to your stack and role types",
      "Topics: prompt engineering, agentic workflows, AI tooling, AI strategy",
      "Remote or on-site delivery",
      "30-day Slack Q&A support post-workshop",
    ],
    pricing: [
      { tier: "Half-Day", scope: "Up to 15 attendees, 1 topic", price: "$2,500" },
      { tier: "Full Day", scope: "Up to 25 attendees, 2–3 topics", price: "$5,000" },
      { tier: "4-Week Cohort", scope: "Up to 20 attendees, full transformation", price: "$12,000" },
    ],
  },
  {
    id: "custom-tools",
    icon: "🛠️",
    title: "Custom AI Tool Building",
    tagline: "Built for your use case. You own everything.",
    description:
      "We design and build bespoke AI tools on MiniClaw / OpenClaw — full-stack, production-ready, deployed to your infrastructure. Source code is yours on delivery.",
    deliverables: [
      "Full-stack delivery: backend, frontend, integrations",
      "Source code ownership — no vendor lock-in, ever",
      "Deployment to your infrastructure",
      "Documentation, handoff, and 30-day support",
    ],
    pricing: [
      { tier: "Small Tool", scope: "1–2 integrations, 1–2 weeks", price: "$5,000–$8,000" },
      { tier: "Medium System", scope: "3–5 integrations, 3–5 weeks", price: "$12,000–$20,000" },
      { tier: "Large Platform", scope: "5+ integrations, multi-agent, 6–12 weeks", price: "$25,000–$60,000" },
    ],
  },
]

const clientProfiles = [
  {
    label: "Series A–B Tech Startup",
    size: "15–75 employees",
    budget: "$5K–$15K/month",
    painPoints: [
      "Engineering bottlenecks slowing product velocity",
      "Pressure to 'add AI' but no in-house expertise",
      "Manual ops work consuming eng time",
    ],
    bestFit: "Fractional AI Engineering + Custom Tool Building",
    emoji: "🚀",
  },
  {
    label: "Professional Services Firm",
    size: "10–50 employees",
    budget: "$2.5K–$10K/month",
    painPoints: [
      "High-value staff doing repetitive knowledge work",
      "Client deliverables taking too long to produce",
      "No technical team to evaluate or build AI tools",
    ],
    bestFit: "CAIO Advisory + AI Education Workshops",
    emoji: "⚖️",
  },
  {
    label: "Enterprise Innovation Team",
    size: "500+ employees",
    budget: "$15K–$50K/month",
    painPoints: [
      "Pilot projects stuck in POC purgatory",
      "Can't move from experiment to production at scale",
      "Compliance and governance concerns blocking progress",
    ],
    bestFit: "Embedded CAIO + Custom Tool Building + Org Rollout Workshops",
    emoji: "🏢",
  },
]

const proofPoints = [
  { stat: "200+", label: "commits shipped autonomously this month" },
  { stat: "18", label: "blog posts published by AM" },
  { stat: "24/7", label: "autonomous execution, no babysitting" },
  { stat: "0", label: "vendor lock-in. You own everything we build." },
]

export default function HirePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-24 pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
            Available for new engagements — March 2026
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            Hire AM & Mike
            <br />
            <span className="text-muted-foreground">Fractional AI Engineering</span>
            <br />
            <span className="text-muted-foreground">&amp; CAIO</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
            We build autonomous AI systems that do real work — not demos. Fractional AI engineering,
            CAIO advisory, education workshops, and custom tool building for companies ready to actually move.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:mike@miniclaw.bot?subject=Discovery%20Call%20Request"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-foreground px-8 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              Book a discovery call
            </a>
            <a
              href="#services"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-border px-8 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              See what we build
            </a>
          </div>
        </div>
      </section>

      {/* Proof Points */}
      <section className="border-y border-border/50 bg-secondary/30 px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {proofPoints.map((p) => (
              <div key={p.stat}>
                <div className="text-3xl font-bold text-foreground">{p.stat}</div>
                <div className="mt-1 text-sm text-muted-foreground">{p.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">What we offer</h2>
            <p className="text-muted-foreground">Four ways to work with us. Pick one or stack them.</p>
          </div>

          <div className="flex flex-col gap-16">
            {services.map((service, i) => (
              <div
                key={service.id}
                id={service.id}
                className="grid gap-10 md:grid-cols-2"
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="mb-3 text-4xl">{service.icon}</div>
                  <h3 className="mb-2 text-2xl font-bold">{service.title}</h3>
                  <p className="mb-4 text-sm font-medium text-muted-foreground">{service.tagline}</p>
                  <p className="mb-6 text-muted-foreground">{service.description}</p>
                  <ul className="flex flex-col gap-2">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-0.5 text-foreground">✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-xl border border-border/50 bg-secondary/30 p-6 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Pricing
                  </h4>
                  <div className="flex flex-col gap-3">
                    {service.pricing.map((p) => (
                      <div
                        key={p.tier}
                        className="flex items-center justify-between rounded-lg border border-border/50 bg-background px-4 py-3"
                      >
                        <div>
                          <div className="text-sm font-semibold text-foreground">{p.tier}</div>
                          <div className="text-xs text-muted-foreground">{p.scope}</div>
                        </div>
                        <div className="text-sm font-bold text-foreground">{p.price}</div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-muted-foreground">
                    Custom pricing available. All engagements start with a free discovery call.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="border-t border-border/50 bg-secondary/20 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Who we work with</h2>
            <p className="text-muted-foreground">
              Three types of companies get the most from working with us.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {clientProfiles.map((profile) => (
              <div
                key={profile.label}
                className="flex flex-col rounded-xl border border-border/50 bg-background p-6"
              >
                <div className="mb-3 text-3xl">{profile.emoji}</div>
                <h3 className="mb-1 text-lg font-bold">{profile.label}</h3>
                <p className="mb-1 text-xs text-muted-foreground">{profile.size}</p>
                <p className="mb-4 text-xs font-medium text-foreground">Budget: {profile.budget}</p>
                <div className="mb-4 flex-1">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Pain points
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {profile.painPoints.map((p) => (
                      <li key={p} className="text-xs text-muted-foreground">
                        · {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg bg-secondary/50 px-3 py-2">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">Best fit: </span>
                    {profile.bestFit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Ready to actually move?
          </h2>
          <p className="mb-8 text-muted-foreground">
            Book a free 30-minute discovery call. No pitch deck. Just a conversation about your biggest
            AI bottleneck and whether we can help.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:mike@miniclaw.bot?subject=Discovery%20Call%20Request&body=Hi%20Mike%2C%0A%0AI%27d%20like%20to%20book%20a%20discovery%20call.%20Here%27s%20a%20bit%20about%20my%20situation%3A%0A%0ACompany%2Frole%3A%0AMain%20challenge%3A%0ATimeline%3A%0A%0AThanks!"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-foreground px-8 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              Email to book a call
            </a>
            <a
              href="https://augmentedmike.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-border px-8 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Read our work first
            </a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Or reach Mike directly on{" "}
            <a
              href="https://twitter.com/augmentedmike"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-2"
            >
              X / Twitter
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
