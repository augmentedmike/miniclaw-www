"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Monitor } from "lucide-react"

interface HeroSlide {
  headline: string
  headlineSub: string
  description: string
  emphasisWord: string
  proofs: string[]
}

interface PageHeroProps {
  slides: HeroSlide[]
  rotationInterval?: number
}

const ROTATION_INTERVAL = 6000

export function PageHero({ slides, rotationInterval = ROTATION_INTERVAL }: PageHeroProps) {
  const [activeIndex, setActiveIndex] = useState(() =>
    Math.floor(Math.random() * slides.length)
  )
  const [fading, setFading] = useState(false)

  useEffect(() => {
    if (slides.length <= 1) return
    const timer = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % slides.length)
        setFading(false)
      }, 400)
    }, rotationInterval)
    return () => clearInterval(timer)
  }, [slides.length, rotationInterval])

  const slide = slides[activeIndex]

  return (
    <section className="relative overflow-hidden px-6">
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative flex min-h-[85vh] flex-col items-center justify-center pt-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <div
            className={`transition-opacity duration-400 ${fading ? "opacity-0" : "opacity-100"}`}
          >
            <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
              {slide.headline}
              <br className="hidden md:block" />{" "}
              <span className="text-foreground/80">{slide.headlineSub}</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-pretty text-xl leading-relaxed text-muted-foreground">
              {slide.description}{" "}
              <span className="font-semibold text-foreground">
                {slide.emphasisWord}
              </span>
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground/70">
              {slide.proofs.map((proof, i) => (
                <span key={i}>
                  {i > 0 && <span className="mr-6">&middot;</span>}
                  {proof}
                </span>
              ))}
            </div>
          </div>

          {slides.length > 1 && (
            <div className="mt-8 flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setFading(true)
                    setTimeout(() => {
                      setActiveIndex(i)
                      setFading(false)
                    }, 400)
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    i === activeIndex
                      ? "w-6 bg-primary"
                      : "w-1.5 bg-border hover:bg-primary/40"
                  }`}
                />
              ))}
            </div>
          )}

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
              <a href="/preorder">
                <Monitor className="h-4 w-4" />
                Order a Mac Mini
              </a>
            </Button>
          </div>

          <p className="mt-4 text-xs text-muted-foreground/60">
            macOS 13+&middot; No credit card required
          </p>
        </div>

        <div className="absolute bottom-8 flex flex-col items-center gap-2 text-muted-foreground/40">
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
