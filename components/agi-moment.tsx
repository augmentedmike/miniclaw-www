const waves = [
  {
    year: "1994",
    label: "The Web",
    outcome: "First movers built billion-dollar companies. Late adopters played catch-up for a decade.",
    dim: true,
  },
  {
    year: "2008",
    label: "Smartphones",
    outcome: "App store early movers built empires. Everyone else licensed their tech.",
    dim: true,
  },
  {
    year: "2016",
    label: "Social Media",
    outcome: "Creators and brands who moved early owned the audiences. Latecomers bought ads.",
    dim: true,
  },
  {
    year: "2026",
    label: "AI Agents",
    outcome: "This is that moment. Right now.",
    dim: false,
  },
]

export function AGIMoment() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      {/* Dark gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            The Shift
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            Every decade has a moment.{" "}
            <span className="text-primary">This is yours.</span>
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            The people who got ahead of each technology wave didn&apos;t wait until it was obvious. They moved early. History is about to repeat itself.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-16 grid gap-4 md:grid-cols-4">
          {waves.map((wave) => (
            <div
              key={wave.year}
              className={`relative rounded-2xl border p-6 transition-all ${
                wave.dim
                  ? "border-border/30 bg-card/40 opacity-60"
                  : "border-primary/40 bg-primary/5 shadow-lg shadow-primary/10"
              }`}
            >
              {!wave.dim && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-primary/40 bg-primary px-3 py-0.5 text-xs font-bold text-primary-foreground">
                  NOW
                </div>
              )}
              <p className={`text-3xl font-bold tabular-nums ${wave.dim ? "text-muted-foreground/50" : "text-primary"}`}>
                {wave.year}
              </p>
              <p className={`mt-1 text-lg font-semibold ${wave.dim ? "text-muted-foreground" : "text-foreground"}`}>
                {wave.label}
              </p>
              <p className={`mt-3 text-sm leading-relaxed ${wave.dim ? "text-muted-foreground/60" : "text-muted-foreground"}`}>
                {wave.outcome}
              </p>
            </div>
          ))}
        </div>

        {/* Insight callout */}
        <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 px-8 py-8 md:px-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-12">
            <div className="flex-1">
              <p className="text-xl font-semibold text-foreground md:text-2xl">
                Right now, your competitors are still asking ChatGPT to write emails.
              </p>
              <p className="mt-3 text-pretty text-muted-foreground">
                MiniClaw-powered businesses are running automated workflows around the clock — researching leads, drafting proposals, managing schedules — while their owners sleep. The gap between those who adapt and those who don&apos;t is opening fast.
              </p>
            </div>
            <div className="shrink-0 text-center md:text-right">
              <p className="text-5xl font-bold text-primary">10×</p>
              <p className="mt-1 text-sm text-muted-foreground">
                productivity advantage<br />for early movers
              </p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground/60">
          The window to get ahead is open.{" "}
          <span className="text-foreground font-medium">It won&apos;t be for long.</span>
        </p>
      </div>
    </section>
  )
}
