"use client"

import { useEffect, useRef, useState } from "react"

const ROOT_AGENTS = [
  {
    role: "CEO",
    emoji: "🧠",
    color: "from-violet-500/20 to-violet-500/5",
    border: "border-violet-500/30",
    accent: "text-violet-400",
    dot: "bg-violet-400",
    sims: ["Strategy", "Roadmap", "OKRs", "Hiring"],
    capability: "Long-term vision, goal setting, cross-team coordination",
  },
  {
    role: "Developer",
    emoji: "💻",
    color: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/30",
    accent: "text-cyan-400",
    dot: "bg-cyan-400",
    sims: ["Coder", "QA", "DevOps", "Reviewer"],
    capability: "Self-healing software, auto bug fixes, CI/CD, testing",
  },
  {
    role: "Researcher",
    emoji: "🔬",
    color: "from-amber-500/20 to-amber-500/5",
    border: "border-amber-500/30",
    accent: "text-amber-400",
    dot: "bg-amber-400",
    sims: ["Analyst", "Data", "Synthesis", "Intel"],
    capability: "Market research, competitive analysis, synthesis, insights",
  },
  {
    role: "Marketer",
    emoji: "📣",
    color: "from-pink-500/20 to-pink-500/5",
    border: "border-pink-500/30",
    accent: "text-pink-400",
    dot: "bg-pink-400",
    sims: ["Copywriter", "SEO", "Social", "Outreach"],
    capability: "Content pipeline, SEO, campaigns, brand voice",
  },
]

const CAPABILITIES = [
  {
    icon: "🗺️",
    title: "Long-term planning",
    body: "Kanban boards, roadmaps, and milestones that persist across sessions. Your agents remember what they're building toward.",
  },
  {
    icon: "🌊",
    title: "Subconscious thinking",
    body: "Background agents run while you sleep — researching, writing, testing. You wake up to work already done.",
  },
  {
    icon: "🔧",
    title: "Self-healing software",
    body: "Bugs are detected, ticketed, fixed, and deployed — automatically. The system maintains itself.",
  },
  {
    icon: "🎫",
    title: "Automatic ticketing",
    body: "Agents create their own tickets, assign themselves, and move work forward. No manual project management.",
  },
  {
    icon: "🤝",
    title: "Inter-agent collaboration",
    body: "The Researcher feeds the Developer. The Developer ships to the Marketer. Roles talk to each other through MiniClaw.",
  },
  {
    icon: "📊",
    title: "Self-evaluating",
    body: "Agents rate their own output, flag low-confidence work for review, and improve over time.",
  },
  {
    icon: "💾",
    title: "Persisted memory",
    body: "Every decision, every output, every lesson — stored in a knowledge graph and available to every agent on your team.",
  },
]

const HARDWARE = [
  {
    name: "Mac Mini",
    label: "Solo Founder",
    specs: ["1 MiniClaw instance", "4 root agents", "16 worker agents", "Runs 24/7 on $0.10/day power"],
    highlight: false,
  },
  {
    name: "Mini Rack",
    label: "Digital Company",
    specs: ["5–20 MiniClaw nodes", "Unlimited agents", "Parallel workstreams", "Full company infrastructure"],
    highlight: true,
  },
]

function PulsingDot({ delay = 0, size = 2 }: { delay?: number; size?: number }) {
  return (
    <div
      className="absolute rounded-full bg-primary/40 animate-ping"
      style={{
        width: size * 4,
        height: size * 4,
        animationDelay: `${delay}s`,
        animationDuration: "3s",
      }}
    />
  )
}

export function MiniClawBrain() {
  const [activeAgent, setActiveAgent] = useState<number | null>(null)
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 2000)
    return () => clearInterval(id)
  }, [])

  // Cycle through agents to show "activity"
  const activeIndex = tick % (ROOT_AGENTS.length + 2) // +2 for pauses

  return (
    <section id="business" className="relative overflow-hidden scroll-mt-20 px-6 py-24 md:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
      <div className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(var(--primary-rgb, 99 102 241) / 0.04) 0%, transparent 70%)",
        }}
      />

      {/* Floating background dots suggesting background activity */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary/20"
            style={{
              left: `${8 + i * 8}%`,
              top: `${15 + (i % 4) * 20}%`,
              opacity: ((tick + i) % 5 === 0) ? 0.8 : 0.15,
              transition: "opacity 0.8s ease",
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Powered by MiniClaw
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            A digital company.{" "}
            <span className="text-primary">In a box.</span>
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            MiniClaw isn&apos;t a chatbot. It&apos;s a fully autonomous operating system for your business — a kanban brain where super agents plan, build, ship, and heal the software themselves. Around the clock. Without you.
          </p>
        </div>

        {/* Agent hierarchy */}
        <div className="mt-16">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
            Root Agents — machine-level access — always on
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ROOT_AGENTS.map((agent, i) => (
              <div
                key={agent.role}
                className={`group relative cursor-default rounded-2xl border bg-gradient-to-b p-5 transition-all duration-300 ${agent.color} ${agent.border} ${activeIndex === i ? "shadow-lg" : ""}`}
                onMouseEnter={() => setActiveAgent(i)}
                onMouseLeave={() => setActiveAgent(null)}
              >
                {/* Live indicator */}
                <div className="absolute right-3 top-3 flex items-center gap-1.5">
                  <div className={`h-1.5 w-1.5 rounded-full ${agent.dot} ${activeIndex === i ? "animate-pulse" : "opacity-40"}`} />
                  {activeIndex === i && (
                    <span className={`text-[9px] font-semibold ${agent.accent} opacity-80`}>ACTIVE</span>
                  )}
                </div>

                {/* Role */}
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-2xl">{agent.emoji}</span>
                  <span className={`text-base font-bold ${agent.accent}`}>{agent.role}</span>
                </div>

                {/* Capability */}
                <p className="mb-4 text-[11px] leading-relaxed text-muted-foreground/70">
                  {agent.capability}
                </p>

                {/* Sims */}
                <div className="border-t border-white/5 pt-3">
                  <p className="mb-2 text-[9px] font-semibold uppercase tracking-widest text-muted-foreground/40">
                    Worker Agents
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {agent.sims.map((sim) => (
                      <span
                        key={sim}
                        className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] font-medium text-white/50"
                      >
                        {sim}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MiniClaw connector visual */}
        <div className="my-10 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30" />
          <div className="flex items-center gap-3 rounded-full border border-primary/30 bg-primary/5 px-5 py-2.5">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary">MiniClaw Brain</span>
            <span className="text-xs text-muted-foreground">— shared kanban · shared memory · shared goals</span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30" />
        </div>

        {/* Capabilities grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.title}
              className="rounded-xl border border-border/40 bg-card/60 p-5 transition-all hover:border-primary/20 hover:bg-card"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="text-xl">{cap.icon}</span>
                <span className="text-sm font-semibold text-foreground">{cap.title}</span>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">{cap.body}</p>
            </div>
          ))}
        </div>

        {/* Subconscious callout */}
        <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 px-8 py-8 md:px-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-12">
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Subconscious thinking</p>
              <p className="text-xl font-semibold text-foreground md:text-2xl">
                Your company thinks even when you don&apos;t.
              </p>
              <p className="mt-3 text-pretty text-muted-foreground">
                While you sleep, your super agents are researching competitors, writing tickets, fixing bugs, and moving roadmap cards. Every agent has a role, a team, and a purpose. They collaborate through the kanban. They remember everything. They never stop.
              </p>
            </div>
            <div className="shrink-0 flex flex-col gap-3">
              {["Planning", "Building", "Testing", "Shipping"].map((stage, i) => (
                <div key={stage} className="flex items-center gap-3">
                  <div
                    className={`h-2 w-2 rounded-full ${activeIndex % 4 === i ? "bg-primary animate-pulse" : "bg-primary/20"}`}
                  />
                  <span className={`text-sm ${activeIndex % 4 === i ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                    {stage}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hardware */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {HARDWARE.map((hw) => (
            <a
              key={hw.name}
              href={hw.highlight ? "#pricing-rack" : "#pricing"}
              className={`block rounded-2xl border p-6 transition-all hover:shadow-lg ${hw.highlight ? "border-primary/40 bg-primary/5 shadow-lg shadow-primary/10 hover:shadow-primary/20" : "border-border/40 bg-card/60 hover:border-primary/20 hover:shadow-primary/5"}`}
            >
              {hw.highlight && (
                <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                  Scale up
                </div>
              )}
              <p className={`text-2xl font-bold ${hw.highlight ? "text-primary" : "text-foreground"}`}>{hw.name}</p>
              <p className="mt-0.5 text-sm text-muted-foreground font-medium">{hw.label}</p>
              <ul className="mt-4 space-y-2">
                {hw.specs.map((spec) => (
                  <li key={spec} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className={`h-1 w-1 rounded-full flex-shrink-0 ${hw.highlight ? "bg-primary" : "bg-muted-foreground/40"}`} />
                    {spec}
                  </li>
                ))}
              </ul>
              <p className={`mt-4 text-sm font-semibold ${hw.highlight ? "text-primary" : "text-foreground"}`}>
                See pricing →
              </p>
            </a>
          ))}
        </div>

        {/* Install the brain CTA */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
            Already running OpenClaw?
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="https://github.com/augmentedmike/miniclaw-os"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary/20 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10"
            >
              <span className="text-lg">🧠</span>
              Install the brain
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <code className="rounded-lg border border-border/40 bg-card/80 px-4 py-2.5 text-xs text-muted-foreground font-mono select-all">
              openclaw plugins install mc-board
            </code>
          </div>
        </div>

        {/* Bottom tagline */}
        <p className="mt-10 text-center text-sm text-muted-foreground/60">
          MiniClaw —{" "}
          <span className="text-foreground font-medium">the kanban board that not only can, but does. Autonomously.</span>
        </p>
      </div>
    </section>
  )
}
