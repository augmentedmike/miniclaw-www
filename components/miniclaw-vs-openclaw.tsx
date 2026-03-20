"use client"

const improvements = [
  {
    label: "Human Experience",
    openclaw: "Terminal setup. YAML config files. GitHub required. Average setup: hours.",
    miniclaw: "Double-click install. Ready in 2 minutes. Zero code. Zero configuration. Your grandma could do this.",
  },
  {
    label: "Agent Personality Matrix",
    openclaw: "No personality layer. Responses are cold, generic, inconsistent. Same AI for everyone.",
    miniclaw: "Every AI has a name, a face, a voice, a backstory, and a defined personality. It feels like someone, not something.",
  },
  {
    label: "Steerability",
    openclaw: "Behavior controlled by raw system prompts. Technical. Rigid. Hard to adjust without breaking things.",
    miniclaw: "Set your AI's tone, values, communication style, and quirks through natural conversation — no prompting knowledge needed.",
  },
  {
    label: "Long-Term Memory",
    openclaw: "Stateless by default. Every session starts fresh. No continuity between conversations.",
    miniclaw: "Your AI remembers everything — your preferences, your work, your life. Upgrade the model, keep the relationship.",
  },
]

export function MiniClawVsOpenClaw() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Built on OpenClaw
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            We took the engine. We rebuilt the car.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            MiniClaw uses the same agentic technology behind OpenClaw — the AI that took the internet by storm. We built everything around it that makes it actually liveable for humans.
          </p>
        </div>

        {/* Comparison */}
        <div className="space-y-4">
          {/* Header row */}
          <div className="grid grid-cols-3 gap-4 px-4">
            <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider" />
            <div className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider">OpenClaw (raw)</div>
            <div className="text-center text-sm font-semibold text-primary uppercase tracking-wider">MiniClaw</div>
          </div>

          {improvements.map((item) => (
            <div
              key={item.label}
              className="grid grid-cols-3 gap-4 rounded-2xl border border-border/40 bg-card p-4 md:p-6"
            >
              {/* Label */}
              <div className="flex items-start">
                <span className="font-semibold text-foreground">{item.label}</span>
              </div>

              {/* OpenClaw column */}
              <div className="rounded-xl bg-muted/30 p-4">
                <p className="text-sm leading-relaxed text-muted-foreground">{item.openclaw}</p>
              </div>

              {/* MiniClaw column */}
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                <p className="text-sm leading-relaxed text-foreground">{item.miniclaw}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <p className="mt-10 text-center text-muted-foreground">
          Same power.{" "}
          <span className="font-semibold text-foreground">Built for the rest of us.</span>
        </p>
      </div>
    </section>
  )
}
