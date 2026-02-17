import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Monitor } from "lucide-react"
import { HeroPersonaCard } from "@/components/hero-persona-card"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6">
      {/* Subtle glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      {/* Above the fold — always fills exactly one viewport, text centered */}
      <div className="relative flex min-h-screen flex-col items-center justify-center pt-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
            An AI that uses your computer.<br className="hidden md:block" />
            <span className="text-foreground/80">Like a human would.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-xl leading-relaxed text-muted-foreground">
            Research. Data entry. Software development. Project management. Scheduling. Ideation.
            It speaks with a real voice, remembers everything, and solves problems in ways that are starting to feel like{" "}
            <span className="text-foreground font-semibold">AGI.</span>
          </p>

          {/* Proof points */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground/70">
            <span>⚡ Ready in 2 minutes</span>
            <span>·</span>
            <span>🚫 Zero lines of code</span>
            <span>·</span>
            <span>🧠 Remembers everything</span>
            <span>·</span>
            <span>🔒 Stays on your machine</span>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 px-8 text-base" asChild>
              <a href="#download">
                <Download className="h-4 w-4" />
                Download Free
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2 px-8 text-base" asChild>
              <a href="#order">
                <Monitor className="h-4 w-4" />
                Order a Mac Mini
              </a>
            </Button>
          </div>

          <p className="mt-4 text-xs text-muted-foreground/60">
            macOS 13+&middot; No credit card required
          </p>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 flex flex-col items-center gap-2 text-muted-foreground/40">
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>

      {/* Below the fold — persona card (scroll required) */}
      <div className="relative mx-auto w-full max-w-4xl pb-24 pt-8">
        <p className="mb-6 text-center text-base text-muted-foreground sm:text-lg">
          Your new assistant can look and sound any way you like, and you can change them at any time{" "}
          <span className="font-medium text-foreground">without them losing their memory.</span>
        </p>
        <HeroPersonaCard />
      </div>
    </section>
  )
}
