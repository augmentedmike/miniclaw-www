"use client"

export function LivingSoftware() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Living Software
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            Software that thinks for itself.
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            MiniClaw isn&apos;t just an app you install and forget. It&apos;s a system that updates, repairs, and improves — on its own, while you sleep.
          </p>
        </div>

        {/* Three feature cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {/* Card 1 — Nightly Updates */}
          <div className="group rounded-2xl border border-border/40 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
            {/* Graphic */}
            <div className="mb-6 flex h-36 items-center justify-center rounded-xl bg-background/60">
              <div className="relative">
                {/* Moon + clock face */}
                <svg width="96" height="96" viewBox="0 0 96 96" fill="none" className="drop-shadow-lg">
                  {/* Outer ring — animated progress */}
                  <circle cx="48" cy="48" r="42" stroke="hsl(var(--border))" strokeWidth="3" fill="none" />
                  <circle
                    cx="48" cy="48" r="42"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="264"
                    strokeDashoffset="66"
                    style={{ transformOrigin: "center", transform: "rotate(-90deg)" }}
                    className="opacity-70"
                  />
                  {/* Clock face */}
                  <circle cx="48" cy="48" r="30" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1.5" />
                  {/* Hour markers */}
                  {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => {
                    const angle = (i / 12) * Math.PI * 2 - Math.PI / 2
                    const r1 = 22, r2 = i % 3 === 0 ? 18 : 20
                    return (
                      <line
                        key={i}
                        x1={48 + r1 * Math.cos(angle)}
                        y1={48 + r1 * Math.sin(angle)}
                        x2={48 + r2 * Math.cos(angle)}
                        y2={48 + r2 * Math.sin(angle)}
                        stroke="hsl(var(--border))"
                        strokeWidth={i % 3 === 0 ? 2 : 1}
                      />
                    )
                  })}
                  {/* Hour hand — pointing ~2 o'clock (nightly = ~2am) */}
                  <line x1="48" y1="48" x2="60" y2="38" stroke="hsl(var(--foreground))" strokeWidth="2.5" strokeLinecap="round" />
                  {/* Minute hand — pointing ~12 */}
                  <line x1="48" y1="48" x2="48" y2="30" stroke="hsl(var(--foreground))" strokeWidth="1.5" strokeLinecap="round" />
                  {/* Center dot */}
                  <circle cx="48" cy="48" r="2.5" fill="hsl(var(--primary))" />
                  {/* Moon symbol top-right */}
                  <text x="68" y="22" fontSize="14" textAnchor="middle" dominantBaseline="middle">🌙</text>
                </svg>
                {/* Download badge */}
                <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg animate-pulse">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 2v7M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-foreground">Nightly auto-updates</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Every night, MiniClaw updates itself — new models, bug fixes, skill upgrades. You wake up to a better assistant. You never think about it.
            </p>
          </div>

          {/* Card 2 — Self-Authoring */}
          <div className="group rounded-2xl border border-border/40 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
            {/* Graphic — code diff window */}
            <div className="mb-6 flex h-36 items-center justify-center rounded-xl bg-background/60">
              <div className="w-full max-w-[220px] overflow-hidden rounded-lg border border-border/60 bg-zinc-900 text-[10px] font-mono shadow-lg">
                {/* Title bar */}
                <div className="flex items-center gap-1.5 border-b border-white/10 bg-zinc-800 px-3 py-1.5">
                  <div className="h-2 w-2 rounded-full bg-red-500/70" />
                  <div className="h-2 w-2 rounded-full bg-yellow-500/70" />
                  <div className="h-2 w-2 rounded-full bg-green-500/70" />
                  <span className="ml-1 text-white/30">miniclaw.patch</span>
                </div>
                {/* Diff lines */}
                <div className="space-y-0.5 px-3 py-2">
                  <div className="flex gap-2 text-white/30">
                    <span>-</span>
                    <span className="text-red-400/60 line-through">old_behavior()</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-green-400">+</span>
                    <span className="text-green-400">improved_behavior()</span>
                  </div>
                  <div className="flex gap-2 text-white/30">
                    <span>-</span>
                    <span className="text-red-400/60 line-through">skill_v1.load()</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-green-400">+</span>
                    <span className="text-green-400">skill_v2.load()
                    </span>
                  </div>
                  <div className="flex gap-2 text-white/40 text-[9px]">
                    <span className="text-white/20">//</span>
                    <span className="text-primary/60">written by MiniClaw ✦</span>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-foreground">Self-authoring</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              MiniClaw is one of the first pieces of software that can modify its own code. It can add new skills, update its behavior, and patch its own bugs — automatically.
            </p>
          </div>

          {/* Card 3 — Self-Healing */}
          <div className="group rounded-2xl border border-border/40 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
            {/* Graphic — broken → healed */}
            <div className="mb-6 flex h-36 items-center justify-center rounded-xl bg-background/60">
              <div className="flex items-center gap-4">
                {/* Broken state */}
                <div className="flex flex-col items-center gap-1">
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-red-500/40 bg-red-500/10">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      {/* Cracked shield */}
                      <path d="M14 3L4 7v8c0 5.5 4.5 9.5 10 11 5.5-1.5 10-5.5 10-11V7L14 3z" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="1.5" />
                      <path d="M14 8l-2 5h3l-2 7" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-[9px] text-red-400/70 font-medium">broken</span>
                </div>

                {/* Arrow */}
                <div className="flex flex-col items-center gap-1">
                  <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
                    <path d="M2 8h24M20 2l8 6-8 6" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[9px] text-primary/60">next update</span>
                </div>

                {/* Healed state */}
                <div className="flex flex-col items-center gap-1">
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/40 bg-primary/10">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M14 3L4 7v8c0 5.5 4.5 9.5 10 11 5.5-1.5 10-5.5 10-11V7L14 3z" fill="hsl(var(--primary) / 0.15)" stroke="hsl(var(--primary))" strokeWidth="1.5" />
                      <path d="M9 14l3 3 7-7" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-[9px] text-primary font-medium">restored</span>
                </div>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-foreground">Self-healing</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              If something ends up broken, the next nightly update corrects it. No reinstall, no support ticket. It just fixes itself and keeps going.
            </p>
          </div>
        </div>

        {/* Bottom callout — Free features forever */}
        <div className="mt-8 grid gap-8 rounded-2xl border border-primary/20 bg-primary/5 p-8 md:grid-cols-2 md:gap-12 md:p-10">
          {/* Left — copy */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-medium uppercase tracking-widest text-primary">Free. Forever.</p>
            <h3 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
              New features land automatically.<br />You never have to ask.
            </h3>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Every time a new AI model or tool comes out — better image generation, faster reasoning, uncensored models, voice upgrades — we evaluate it, integrate it, and ship it to you overnight. No API keys to hunt down. No YouTube tutorial to follow. You wake up and it&apos;s just there.
            </p>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Between us and your assistant, you&apos;re covered. You don&apos;t have to keep up with AI anymore.{" "}
              <span className="font-medium text-foreground">We do that for you.</span>
            </p>
          </div>
          {/* Right — incoming model cards graphic */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-xs space-y-2">
              {[
                { label: "GPT-5 Turbo",          badge: "new",  color: "text-green-400",  dot: "bg-green-400" },
                { label: "Gemini Ultra Vision",   badge: "new",  color: "text-blue-400",   dot: "bg-blue-400" },
                { label: "Flux NSFW v3",          badge: "new",  color: "text-purple-400", dot: "bg-purple-400" },
                { label: "Whisper Voice HD",      badge: "soon", color: "text-yellow-400", dot: "bg-yellow-400" },
                { label: "Llama 5 Local",         badge: "soon", color: "text-orange-400", dot: "bg-orange-400" },
              ].map((model) => (
                <div
                  key={model.label}
                  className="flex items-center gap-3 rounded-lg border border-border/40 bg-card px-4 py-2.5"
                >
                  <div className={`h-2 w-2 shrink-0 rounded-full ${model.dot} opacity-80`} />
                  <span className={`flex-1 text-xs font-medium ${model.color}`}>{model.label}</span>
                  <span className={`rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide ${
                    model.badge === "new"
                      ? "bg-primary/20 text-primary"
                      : "bg-muted/60 text-muted-foreground/60"
                  }`}>
                    {model.badge === "new" ? "✓ installed" : "coming"}
                  </span>
                </div>
              ))}
              <p className="pt-1 text-center text-[10px] text-muted-foreground/50">
                added automatically · no action needed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
