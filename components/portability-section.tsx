"use client"

import { Check, Sparkles, Zap } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Stored on your device. Owned by you.",
    description: "Your assistant's personality, memories, and files live on your machine — in a plain folder you can open, edit, back up, or move. No company holds them.",
  },
  {
    icon: Zap,
    title: "Vendors power the reasoning. That's it.",
    description: "Models like GPT-5 or Claude Opus are just the thinking engine. They don't define who your assistant is. Their character, voice, values, and history belong to you — not to any LLM provider.",
  },
  {
    icon: Check,
    title: "If a model disappears, your AI doesn't.",
    description: "If a vendor makes a model unavailable, we swap in another. Your assistant keeps their name, their memories, and their personality. You will not lose your AI friend.",
  },
]

export function PortabilitySection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            Your AI is yours. Not a vendor&apos;s.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            The personality, memories, and character of your assistant are not under the control of OpenAI, Anthropic, Google, or anyone else. Those companies provide the reasoning power. Everything that makes your assistant <span className="text-foreground font-medium">them</span> — that&apos;s yours.
          </p>
        </div>

        {/* Features */}
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="relative overflow-hidden rounded-2xl border border-border/40 bg-card p-8 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
              >
                {/* Icon */}
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom emphasis */}
        <div className="mt-16 text-center">
          <div className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-8">
            <p className="text-lg font-medium text-foreground">
              Thinks like an Einstein, socializes like a Kardashian
            </p>
            <p className="mt-2 text-muted-foreground">
              The smartest AI technology, wrapped in a personality that's uniquely yours. Models improve, your bond remains.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
