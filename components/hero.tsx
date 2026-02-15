import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Monitor } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
      {/* Subtle glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">

        <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
          AI Assistants that just work.
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Catch the ClawBot craze and feel the agi, without a degree in nerd.
        </p>


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
              Order a ClawMini
            </a>
          </Button>
        </div>

        <p className="mt-4 text-xs text-muted-foreground/60">
          macOS 13+&middot; No credit card required
        </p>
      </div>

      {/* Product image */}
      <div className="relative mx-auto mt-16 w-full max-w-3xl md:mt-20">
        <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-card shadow-2xl shadow-primary/5">
          <Image
            src="/images/hero-product.jpg"
            alt="ClawDaddy mascot holding a margarita, sitting on top of a ClawMini"
            width={1200}
            height={675}
            className="w-full"
            priority
          />
        </div>
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
