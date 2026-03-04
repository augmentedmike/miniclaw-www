"use client"

import { Building2, Heart, ArrowRight } from "lucide-react"

export function PathPicker() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-3 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          What are you building?
        </h2>
        <p className="mb-10 text-center text-lg text-muted-foreground">
          Choose your path. Everything else follows.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/ai-company-in-a-box"
            className="group relative flex flex-col items-center gap-5 rounded-3xl border border-border/40 bg-card p-10 text-center transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <Building2 className="h-8 w-8 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">A digital company</p>
              <p className="mt-2 text-base text-muted-foreground">
                Autonomous teams, MiniRack, digital personas
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
              Explore <ArrowRight className="h-4 w-4" />
            </div>
          </a>
          <a
            href="/best-ai-companion"
            className="group relative flex flex-col items-center gap-5 rounded-3xl border border-border/40 bg-card p-10 text-center transition-all hover:border-pink-500/50 hover:shadow-xl hover:shadow-pink-500/10 hover:-translate-y-1"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-500/10">
              <Heart className="h-8 w-8 text-pink-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">A digital companion</p>
              <p className="mt-2 text-base text-muted-foreground">
                Companion, coach, creative partner
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-pink-400 opacity-0 transition-opacity group-hover:opacity-100">
              Explore <ArrowRight className="h-4 w-4" />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
