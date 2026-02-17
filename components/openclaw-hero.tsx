import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Monitor } from "lucide-react"
import { HeroPersonaCard } from "@/components/hero-persona-card"

export function OpenClawHero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
      {/* Subtle glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">

        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/60 px-4 py-1.5 text-sm font-medium text-muted-foreground">
          Built on OpenClaw — the AI agent taking over the internet
        </div>

        <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
          You found OpenClaw.<br className="hidden md:block" />
          <span className="text-foreground/80">Now make it yours.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-xl leading-relaxed text-muted-foreground">
          OpenClaw is the most powerful AI agent ever built. MiniClaw wraps it in a real personality, a real memory, and an interface your whole life can live inside — no terminal, no YAML, no PhD required.
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
          <Button
            variant="outline"
            size="lg"
            className="gap-2 px-8 text-base"
            asChild
          >
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

      {/* Hero persona card */}
      <div className="relative mx-auto mt-16 w-full max-w-4xl md:mt-20">
        <p className="mb-6 text-center text-base text-muted-foreground sm:text-lg">
          Your new assistant can look and sound any way you like, and you can change them at any time{" "}
          <span className="font-medium text-foreground">without them losing their memory.</span>
        </p>
        <HeroPersonaCard />
      </div>

      {/* Scroll indicator */}
      <a
        href="#features"
        className="mt-12 mb-8 flex flex-col items-center gap-2 text-muted-foreground/40 transition-colors hover:text-muted-foreground"
        aria-label="Scroll to features"
      >
        <span className="text-xs">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  )
}
