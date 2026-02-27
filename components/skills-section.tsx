"use client"

import { Brain, Code, Image as ImageIcon, Video } from "lucide-react"

const skills: {
  name: string
  subtitle: string
  description: string
  icon: typeof Brain
  color: string
  note?: string
}[] = [
  {
    name: "AI Agent",
    subtitle: "Your Personal Agent",
    description: "Clears your inbox, manages your calendar, checks you in for flights, analyzes your health data—all from chat. Real people run entire businesses from their phones.",
    icon: Brain,
    color: "text-purple-500",
  },
  {
    name: "Claude Code",
    subtitle: "Pair Programmer",
    description: "Your Sim has access to the terminal, runs git commands, handles deployments, and codes alongside you—from any device. Requires a Claude Max subscription ($100–$200/mo), which caps your monthly spend — unlike API-based platforms where costs can spiral. Add more subscriptions to the same MiniClaw or MiniRack for even more power.",
    icon: Code,
    color: "text-blue-500",
    note: "Claude Max required",
  },
  {
    name: "Nano Banana",
    subtitle: "Visual Designer",
    description: "Generate personas, create artwork, design graphics—any style from photorealistic to furry to anime. Your imagination, visualized.",
    icon: ImageIcon,
    color: "text-pink-500",
  },
  {
    name: "Sora",
    subtitle: "Video Production",
    description: "Automate video production pipelines through conversation. From concept to rendered video, your Sim handles it.",
    icon: Video,
    color: "text-orange-500",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative overflow-hidden px-6 py-24 md:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            One Personality. All the Power.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Your Sim has access to the latest cutting-edge tools. They use whichever skill is needed—you don't think about it.
          </p>
          <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-1.5 text-sm text-muted-foreground">
            <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
            No vendor lock-in — MiniClaw works across AI providers
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.name}
                className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
              >
                {/* Icon + Badge */}
                <div className="mb-4 flex items-start justify-between">
                  <div className="inline-flex rounded-xl bg-primary/10 p-3">
                    <Icon className={`h-6 w-6 ${skill.color}`} />
                  </div>
                  {skill.note && (
                    <span className="rounded-full bg-blue-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-blue-400">
                      {skill.note}
                    </span>
                  )}
                </div>

                {/* Content */}
                <h3 className="mb-1 text-xl font-bold text-foreground">
                  {skill.name}
                </h3>
                <p className="mb-3 text-sm font-medium text-muted-foreground">
                  {skill.subtitle}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground/80">
                  {skill.description}
                </p>

                {/* Hover gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            )
          })}
        </div>

        {/* Bottom Message */}
        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-muted-foreground">
            New AI models released?{" "}
            <span className="text-foreground">Your Sim gets them automatically.</span>
            <br />
            <span className="text-sm">It only gets better over time.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
