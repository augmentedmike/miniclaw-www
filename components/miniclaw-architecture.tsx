"use client"

import { ArrowRight } from "lucide-react"

const features = [
  {
    title: "Tickets in, features out",
    description:
      "Write what you want in plain English. Your agents handle research, planning, and implementation end to end. Move the ticket to 'In Progress' and walk away.",
  },
  {
    title: "Ships while you sleep",
    description:
      "Your agents run 24/7. Drop a ticket at midnight, wake up to a working feature. The kanban board tracks every decision so nothing slips.",
  },
  {
    title: "Human-gated deploys",
    description:
      "Nothing goes live without your sign-off. Review the preview, check acceptance criteria, then ship. Full autonomy with a human in the loop.",
  },
  {
    title: "Git, tests, branches — handled",
    description:
      "Every ticket gets its own branch, worktree, and test run. Clean history, isolated changes, zero manual git work.",
  },
  {
    title: "Watch the work happen",
    description:
      "The agent activity dashboard shows every agent in real time — what they're doing, how long it's taking, and what it costs. Full transparency.",
  },
]

const whoItsFor = [
  "Solopreneurs",
  "Business owners",
  "Dev shops",
  "Agencies",
  "Corporate teams",
  "Founders",
  "CTOs",
]

export function MiniClawArchitecture() {
  return (
    <section id="architecture" aria-label="Architecture" className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            How MiniClaw works
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Your super agent. Real work.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            MiniClaw runs a kanban board where your super agent handles the actual work. Not a copilot. Not a chatbot.{" "}
            <span className="font-medium text-foreground">A thinking partner that ships.</span>
          </p>
        </div>

        {/* Feature list */}
        <div className="mx-auto mt-16 max-w-3xl divide-y divide-border/40">
          {features.map((f) => (
            <div
              key={f.title}
              className="group flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:gap-8"
            >
              <h3 className="shrink-0 text-lg font-bold text-foreground transition-colors group-hover:text-primary sm:w-56">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {f.description}
              </p>
            </div>
          ))}
        </div>

        {/* Who it's for */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Software just became a one-person operation.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {whoItsFor.map((label) => (
              <span
                key={label}
                className="rounded-full border border-border/60 bg-card px-4 py-2 text-sm text-muted-foreground"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://github.com/augmentedmike/miniclaw-os"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
          >
            Get MiniClaw
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="/#faq"
            className="inline-flex items-center gap-2 rounded-lg border border-border/60 bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Read the FAQ
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
