"use client"

export function YourData() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Your AI. Not Theirs.
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            No vendor has access to your assistant.
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            The companies behind the AI models don&apos;t see your assistant&apos;s personality, memories, or files. That data lives on your machine, in your folder, under your control.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {/* Left — Vendor wall graphic */}
          <div className="flex flex-col gap-4 rounded-2xl border border-border/40 bg-card p-8">
            {/* Graphic */}
            <div className="flex h-40 items-center justify-center rounded-xl bg-background/60">
              <div className="flex items-start gap-6">
                {/* Vendor cloud */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-muted/40">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M17 9A6 6 0 1 0 5.3 12H3a3 3 0 1 0 0 6h14a4 4 0 0 0 0-8h-.3A6 6 0 0 0 17 9z" fill="hsl(var(--muted-foreground) / 0.3)" stroke="hsl(var(--muted-foreground) / 0.5)" strokeWidth="1.2" />
                    </svg>
                  </div>
                  <span className="text-[10px] text-muted-foreground/60">AI vendor</span>
                </div>

                {/* Wall / barrier */}
                <div className="flex flex-col items-center gap-1">
                  <div className="h-16 w-6 overflow-hidden rounded border border-primary/30 bg-primary/5">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-2 border-b border-primary/20 ${i % 2 === 0 ? "bg-primary/10" : "bg-primary/5"}`}
                      />
                    ))}
                  </div>
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5h6M2 5l2.5-2.5M2 5l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-[9px] text-primary/70 font-medium">blocked</span>
                </div>

                {/* Your machine */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <rect x="2" y="4" width="18" height="12" rx="2" fill="hsl(var(--primary) / 0.15)" stroke="hsl(var(--primary))" strokeWidth="1.5" />
                      <path d="M7 19h8M11 16v3" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-[10px] text-primary font-medium">your machine</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Vendor-proof privacy</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                OpenAI, Anthropic, Google — they power the models, but they never see your assistant&apos;s name, personality, history, or memories. That data never leaves your device.
              </p>
            </div>
          </div>

          {/* Right — File system + backup graphic */}
          <div className="flex flex-col gap-4 rounded-2xl border border-border/40 bg-card p-8">
            {/* Graphic */}
            <div className="flex h-40 items-center justify-center rounded-xl bg-background/60">
              <div className="w-full max-w-[220px]">
                {/* Folder tree */}
                <div className="font-mono text-[10px] space-y-0.5">
                  <div className="flex items-center gap-1.5 text-foreground/80">
                    <span>📁</span>
                    <span>/Users/you/MiniClaw/</span>
                  </div>
                  <div className="ml-4 space-y-0.5">
                    <div className="flex items-center gap-1.5 text-purple-400">
                      <span>┣━</span><span>🧠</span><span>personality.json</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-blue-400">
                      <span>┣━</span><span>💬</span><span>memories/</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-yellow-400">
                      <span>┣━</span><span>📂</span><span>files/</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-green-400">
                      <span>┗━</span><span>💾</span><span>checkpoint_v3.zip</span>
                    </div>
                  </div>
                </div>
                {/* Backup buttons row */}
                <div className="mt-3 flex gap-2">
                  {["Download", "Backup", "Restore"].map((label) => (
                    <div
                      key={label}
                      className="flex-1 rounded border border-primary/30 bg-primary/5 px-1.5 py-1 text-center text-[9px] font-medium text-primary"
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Download, backup, restore</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Everything that makes your assistant <em>yours</em> — their voice, memories, habits — lives in a plain folder on your Mac. Download it. Checkpoint it. Restore it. It&apos;s just files.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom callout */}
        <div className="mt-8 rounded-2xl border border-border/40 bg-card/60 px-8 py-6 text-center">
          <p className="text-base text-muted-foreground">
            Your AI companion is a relationship you own.{" "}
            <span className="font-semibold text-foreground">
              Switch models, switch hardware, switch everything — and they still remember you.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
