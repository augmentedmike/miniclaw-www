import { Heart, Github, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function OpenSource() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          MiniClaw is and always will be{" "}
          <span className="text-primary">open source</span> software.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          No paywalls. No gated features. No bait-and-switch. The code is yours
          to read, fork, modify, and run forever. That&apos;s a promise.
        </p>

        <div className="mx-auto mt-8 max-w-xl rounded-xl border border-border/40 bg-card p-6 text-left">
          <div className="flex items-center gap-3">
            <Heart className="h-5 w-5 shrink-0 text-red-400" />
            <h3 className="text-base font-semibold text-foreground">
              Help us keep the lights on
            </h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            MiniClaw is built by a small team — mostly Sims, guided by one
            human. There&apos;s no VC money and no corporate backer. Server
            costs, API bills, and hardware don&apos;t pay themselves. If
            MiniClaw has saved you time, made you money, or just made your life
            a little easier — consider supporting the project so we can keep
            building.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="gap-2" asChild>
            <a
              href="https://usebonsai.org/support"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Support page coming soon"
            >
              <Heart className="h-4 w-4" />
              Support This Project
            </a>
          </Button>
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <a
              href="https://github.com/augmentedmike/miniclaw-os"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              View Source
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
