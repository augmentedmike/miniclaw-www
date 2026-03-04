"use client"

import { GitCommit, Ticket, FolderKanban } from "lucide-react"

const stats = [
  { value: "132", label: "Commits in 22 days", icon: GitCommit },
  { value: "12", label: "Projects running on Bonsai", icon: FolderKanban },
  { value: "197", label: "Tickets created and worked", icon: Ticket },
]

const timeline = [
  {
    date: "Feb 4",
    marker: "Day 0 — First commit",
    title: "Bonsai is born",
    description:
      "Initial Next.js scaffold. One person, one idea.",
  },
  {
    date: "Feb 6",
    marker: "Day 2 — Core platform ships",
    title: "The foundation lands in a single day",
    description:
      "agent tooling, ticket attachments, vault injection, and the full kanban board — all landed in a single day.",
  },
  {
    date: "Feb 7",
    marker: "Day 3 — Bonsai starts building itself",
    title: "First tickets worked by Sims",
    description:
      "Speech-to-text, logo concepts, auto-focus UX. Merge tracking goes live.",
  },
  {
    date: "Feb 8",
    marker: "Day 4 — Multi-project architecture",
    title: "Bonsai becomes multi-tenant",
    description:
      "Project-scoped routes, per-project Sims, settings, and the shipping pipeline. Bonsai becomes a multi-tenant system.",
  },
  {
    date: "Feb 11",
    marker: "Day 7 — agent dispatch system",
    title: "The Sims start coordinating",
    description:
      "@team mentions, agent @mention dispatch, role-based skills, and board auto-sort. The Sims start coordinating.",
  },
  {
    date: "Feb 14",
    marker: "Day 10 — MiniClaw begins",
    title: "Database migration & AI avatars. MiniClaw Day 0.",
    description:
      "Schema overhaul, integer ticket IDs, Gemini-powered avatar generation. Sims get faces. ClawDaddy landing page scaffolded — two products now running on the same brain.",
  },
  {
    date: "Feb 15",
    marker: "Day 11 — 19 MiniClaw commits in one day",
    title: "Sims take the wheel on MiniClaw",
    description:
      "Rebrand to MiniClaw, pre-order flow, email signups, investor page, 6 persona archetypes, pricing — all shipped by Sims in a single day.",
  },
  {
    date: "Feb 17",
    marker: "Day 13 — Major overhaul",
    title: "Full MiniClaw homepage rebuild",
    description:
      "Persona card system, OpenClaw page, preorder page, hero rewrite, SSR fixes, logo — 6 commits, all agent-driven.",
  },
  {
    date: "Feb 20",
    marker: "Day 16 — Autonomy breakthrough",
    title: "Sims start thinking for themselves",
    description:
      "Single-version research, agent memory (QMD), worktree preview system, and self-healing workflows. 14 commits in one day.",
  },
  {
    date: "Feb 21",
    marker: "Day 17 — Dogfooding goes live",
    title: "Bonsai builds Bonsai full-time",
    description:
      "agent symlinks, persona editing, and UI polish — all shipped by the agents.",
  },
  {
    date: "Feb 26",
    marker: "Day 22 — 38 commits in a single day",
    title: "The Sims are shipping faster than any human team",
    description:
      "Operator dispatch, unified chat panels, role archetypes, agent activity dashboard on Bonsai. MiniRack configurator, rotating hero, Built with Bonsai timeline, branding overhaul on MiniClaw. Both products shipping in parallel, autonomously.",
  },
]

export function BuiltWithBonsai() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Proof of work
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            We built the boat while sailing the sea.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            MiniClaw and Bonsai were built using MiniClaw and Bonsai — the software, the websites, all of it. Every feature, every bug fix, every line of code — written by Sims, reviewed by a human, and shipped.{" "}
            <span className="font-medium text-foreground">
              The tools build themselves.
            </span>
          </p>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-xl border border-border/40 bg-card p-5"
            >
              <stat.icon className="mb-2 h-5 w-5 text-primary" />
              <span className="text-2xl font-bold tabular-nums text-foreground md:text-3xl">
                {stat.value}
              </span>
              <span className="mt-1 text-center text-xs text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-16">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border/60 md:left-1/2 md:-translate-x-px" />

            <div className="flex flex-col gap-10">
              {timeline.map((event, i) => (
                <div
                  key={i}
                  className="relative flex gap-6 md:gap-0"
                >
                  {/* Dot */}
                  <div className="relative z-10 mt-1.5 shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                    <div className="h-3.5 w-3.5 rounded-full border-2 border-primary bg-background" />
                  </div>

                  {/* Content — alternates sides on desktop */}
                  <div
                    className={`flex-1 md:w-[calc(50%-2rem)] ${
                      i % 2 === 0
                        ? "md:mr-auto md:pr-12 md:text-right"
                        : "md:ml-auto md:pl-12"
                    }`}
                  >
                    <p className="text-xs font-medium text-primary">
                      {event.date}
                    </p>
                    <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50">
                      {event.marker}
                    </p>
                    <h3 className="mt-2 text-base font-bold text-foreground">
                      {event.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
