"use client"

export function LiveSupport() {
  return (
    <section id="support" className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-background" />
      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative mx-auto max-w-5xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">

          {/* Left — copy */}
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Live Support
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
              Did something go horribly wrong?<br />
              <span className="text-muted-foreground">We&apos;ve got you.</span>
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              No subscription required. When you need a real human — one of our engineers — just book a 30-minute block and we&apos;ll solve your problem directly. White-glove service, on demand.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                { icon: "🧑‍💻", text: "A real engineer, not a chatbot" },
                { icon: "⏱️",  text: "30-minute focused sessions — pay only for what you need" },
                { icon: "🔧",  text: "We fix the problem in the session, not a ticket queue" },
                { icon: "🤝",  text: "No subscription, no commitment — book once, done" },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <span className="mt-0.5 text-lg leading-none">{item.icon}</span>
                  <span className="text-muted-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — booking card graphic */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-sm">
              {/* Card */}
              <div className="overflow-hidden rounded-2xl border border-border/50 bg-card shadow-2xl shadow-primary/10">
                {/* Header */}
                <div className="border-b border-border/40 bg-primary/5 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-widest text-primary">Live Session</p>
                      <p className="mt-0.5 text-base font-semibold text-foreground">Engineer on Call</p>
                    </div>
                    {/* Live indicator */}
                    <div className="flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1">
                      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs font-medium text-green-400">Available</span>
                    </div>
                  </div>
                </div>

                {/* Session option */}
                <div className="p-6">
                  <div className="rounded-xl border-2 border-primary/40 bg-primary/5 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-foreground">Per 30 minutes</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">Screenshare + direct fix</p>
                        <p className="mt-0.5 text-xs text-muted-foreground/60">Book more blocks if you need more time</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">$50</p>
                        <p className="text-[10px] text-muted-foreground">per block</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Engineer avatars */}
                <div className="border-t border-border/40 px-6 py-4">
                  <div className="flex items-center gap-3">
                    {/* Avatar stack */}
                    <div className="flex -space-x-2">
                      {["bg-blue-500", "bg-purple-500", "bg-green-500"].map((color, i) => (
                        <div
                          key={i}
                          className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-card text-xs font-bold text-white ${color}`}
                        >
                          {["J", "M", "S"][i]}
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-foreground">Real engineers, real help</p>
                    </div>
                    {/* CTA */}
                    <div className="ml-auto rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-lg shadow-primary/30">
                      Book Now →
                    </div>
                  </div>
                </div>
              </div>

              {/* Below card note */}
              <p className="mt-4 text-center text-xs text-muted-foreground/50">
                No subscription. No account needed. Just book and go.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
