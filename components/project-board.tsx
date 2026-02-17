const columns = [
  {
    label: "To Do",
    accent: "border-border/40",
    dot: "bg-muted-foreground/50",
    labelColor: "text-muted-foreground",
    cards: [
      { task: "Write Q2 investor update",      role: "Writer",   emoji: "✍️",  roleColor: "bg-blue-500/10 text-blue-400" },
      { task: "Audit site performance",        role: "Dev",      emoji: "💻",  roleColor: "bg-cyan-500/10 text-cyan-400" },
      { task: "Plan social content calendar",  role: "Marketing",emoji: "📣",  roleColor: "bg-pink-500/10 text-pink-400" },
    ],
  },
  {
    label: "In Progress",
    accent: "border-yellow-500/30",
    dot: "bg-yellow-400",
    labelColor: "text-yellow-400",
    cards: [
      { task: "Design new landing hero",       role: "Designer", emoji: "🎨",  roleColor: "bg-purple-500/10 text-purple-400" },
      { task: "Research competitor gaps",      role: "Analyst",  emoji: "🔍",  roleColor: "bg-orange-500/10 text-orange-400" },
      { task: "Draft outreach emails",         role: "Sales",    emoji: "📬",  roleColor: "bg-green-500/10 text-green-400" },
      { task: "Patch checkout flow bug",       role: "Dev",      emoji: "💻",  roleColor: "bg-cyan-500/10 text-cyan-400" },
    ],
  },
  {
    label: "Done",
    accent: "border-primary/30",
    dot: "bg-primary",
    labelColor: "text-primary",
    cards: [
      { task: "Set up dev environment",        role: "Dev",      emoji: "💻",  roleColor: "bg-cyan-500/10 text-cyan-400" },
      { task: "Brand guidelines doc",          role: "Designer", emoji: "🎨",  roleColor: "bg-purple-500/10 text-purple-400" },
      { task: "Prospect list — 200 leads",     role: "Sales",    emoji: "📬",  roleColor: "bg-green-500/10 text-green-400" },
    ],
  },
]

export function ProjectBoard() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Built-in Project Board
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            Your assistant never loses the thread.
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Under the hood, your AI maintains a real project board — tracking every task, deadline, and deliverable across every role it plays. It&apos;s just like having a full team at work. Except every card is owned by the same person, wearing a different hat.
          </p>
        </div>

        {/* Board */}
        <div className="mt-14 overflow-x-auto pb-2">
          {/* Board chrome */}
          <div className="min-w-[640px] rounded-2xl border border-border/50 bg-zinc-950 p-4 shadow-2xl shadow-black/40">
            {/* Board toolbar */}
            <div className="mb-4 flex items-center gap-3 border-b border-white/5 pb-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/50" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                <div className="h-3 w-3 rounded-full bg-green-500/50" />
              </div>
              <span className="text-xs text-white/20 font-mono">Your Project Board</span>
              <div className="ml-auto flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1">
                <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] text-primary font-medium">Live</span>
              </div>
            </div>

            {/* Columns */}
            <div className="grid grid-cols-3 gap-3">
              {columns.map((col) => (
                <div key={col.label} className={`rounded-xl border ${col.accent} bg-white/[0.02] p-3`}>
                  {/* Column header */}
                  <div className="mb-3 flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${col.dot}`} />
                    <span className={`text-[11px] font-semibold uppercase tracking-wider ${col.labelColor}`}>
                      {col.label}
                    </span>
                    <span className="ml-auto flex h-4 w-4 items-center justify-center rounded-full bg-white/5 text-[9px] text-white/30">
                      {col.cards.length}
                    </span>
                  </div>

                  {/* Cards */}
                  <div className="space-y-2">
                    {col.cards.map((card) => (
                      <div
                        key={card.task}
                        className="rounded-lg border border-white/5 bg-white/[0.04] px-3 py-2.5 transition-colors hover:bg-white/[0.07]"
                      >
                        <p className="text-[11px] font-medium leading-snug text-white/80">
                          {card.task}
                        </p>
                        <div className="mt-2 flex items-center gap-1.5">
                          <span className="text-xs leading-none">{card.emoji}</span>
                          <span className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${card.roleColor}`}>
                            {card.role}
                          </span>
                        </div>
                      </div>
                    ))}

                    {/* Add card hint */}
                    <div className="flex items-center gap-1.5 rounded-lg border border-dashed border-white/5 px-3 py-2 opacity-30">
                      <span className="text-sm text-white/40">+</span>
                      <span className="text-[10px] text-white/30">Add task</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom callout */}
        <div className="mt-8 rounded-2xl border border-border/40 bg-card/60 px-8 py-6 text-center">
          <p className="text-base text-muted-foreground">
            One assistant. Every role. One shared memory.{" "}
            <span className="font-semibold text-foreground">Nothing falls through the cracks.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
