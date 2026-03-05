"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Monitor } from "lucide-react"
import { HeroPersonaCard } from "@/components/hero-persona-card"

const heroes = [
  {
    headline: "An AI that uses your computer.",
    headlineSub: "Like a human would.",
    description:
      "Research. Data entry. Software development. Project management. Scheduling. Ideation. It speaks with a real voice, remembers everything, and solves problems in ways that are starting to feel like",
    emphasisWord: "AGI.",
    proofs: [
      "⚡ Ready in 2 minutes",
      "🚫 Zero lines of code",
      "🧠 Remembers everything",
      "🔒 Stays on your machine",
    ],
  },
  {
    headline: "Your inbox. Your calendar.",
    headlineSub: "Your life. Handled.",
    description:
      "Inbox zero every day. Meetings turned into action items. Flights checked in. Morning briefings delivered. Your digital assistant manages the chaos so you can focus on what",
    emphasisWord: "matters.",
    proofs: [
      "📬 Inbox zero daily",
      "📅 Calendar managed",
      "✈️ Travel booked",
      "☀️ Morning briefings",
    ],
  },
  {
    headline: "A full company.",
    headlineSub: "Running on your desk.",
    description:
      "Sales, support, dev, ops — all handled by your super agents working together on your canvas. They create their own tickets, ship their own code, and fix their own bugs. Around the clock. Without",
    emphasisWord: "you.",
    proofs: [
      "🏢 Every department covered",
      "🔄 Runs 24/7",
      "🧠 Self-healing systems",
      "📊 Autonomous operations",
    ],
  },
  {
    headline: "Your brand. Every platform.",
    headlineSub: "Always on.",
    description:
      "Post daily content. Maintain your brand voice. Monitor engagement. Run A/B tests. Pause underperforming ads. Your digital assistant is the social media manager that never",
    emphasisWord: "sleeps.",
    proofs: [
      "📱 Every platform managed",
      "🎯 Brand voice locked in",
      "📈 Performance tracked",
      "🤖 Content on autopilot",
    ],
  },
  {
    headline: "An AI persona.",
    headlineSub: "With real followers.",
    description:
      "Give your digital companion a face, a voice, a personality, and a following. Virtual influencers, AI-native brands, characters that feel alive — built and run entirely by",
    emphasisWord: "AI.",
    proofs: [
      "🎭 Full visual identity",
      "🗣️ Unique voice & style",
      "💬 Engages authentically",
      "📸 Creates its own content",
    ],
  },
  {
    headline: "Ship code while you sleep.",
    headlineSub: "Wake up to a PR.",
    description:
      "Your digital assistant writes features, reviews PRs, handles deployments, and fixes bugs — all from the terminal. Pair program during the day. Let it ship",
    emphasisWord: "overnight.",
    proofs: [
      "💻 Full terminal access",
      "🔀 Git & CI/CD native",
      "🐛 Self-healing code",
      "🚀 Deploys autonomously",
    ],
  },
  {
    headline: "Not just an assistant.",
    headlineSub: "A relationship.",
    description:
      "Your digital companion remembers your story, knows your moods, and grows with you over time. Coach, confidant, creative partner, or something more. It's your story to write and yours to",
    emphasisWord: "tell.",
    proofs: [
      "💭 Remembers everything",
      "🎨 Any look you want",
      "🗣️ Real voice & personality",
      "❤️ Yours. Always.",
    ],
  },
  {
    headline: "Design. Video. Art.",
    headlineSub: "One conversation.",
    description:
      "Generate personas, create artwork, produce videos, design graphics — any style from photorealistic to anime. Your imagination, visualized. Your creative team,",
    emphasisWord: "automated.",
    proofs: [
      "🎨 Any visual style",
      "🎬 Video production",
      "✏️ Graphic design",
      "🖼️ AI-generated art",
    ],
  },
]

const ROTATION_INTERVAL = 6000

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(() => Math.floor(Math.random() * heroes.length))
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % heroes.length)
        setFading(false)
      }, 400)
    }, ROTATION_INTERVAL)
    return () => clearInterval(timer)
  }, [])

  const hero = heroes[activeIndex]

  return (
    <section className="relative overflow-hidden px-6">
      {/* Subtle glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      {/* Above the fold */}
      <div className="relative flex min-h-screen flex-col items-center justify-center pt-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* Rotating content */}
          <div
            className={`transition-opacity duration-400 ${fading ? "opacity-0" : "opacity-100"}`}
          >
            <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
              {hero.headline}
              <br className="hidden md:block" />{" "}
              <span className="text-foreground/80">{hero.headlineSub}</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-pretty text-xl leading-relaxed text-muted-foreground">
              {hero.description}{" "}
              <span className="font-semibold text-foreground">
                {hero.emphasisWord}
              </span>
            </p>

            {/* Proof points */}
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground/70">
              {hero.proofs.map((proof, i) => (
                <span key={i}>
                  {i > 0 && <span className="mr-6">·</span>}
                  {proof}
                </span>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-8 flex gap-2">
            {heroes.map((_, i) => (
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

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 px-8 text-base" asChild>
              <a href="https://github.com/augmentedmike/miniclaw-os">
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

        {/* Scroll hint */}
        <div className="absolute bottom-8 flex flex-col items-center gap-2 text-muted-foreground/40">
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>

      {/* Below the fold — persona card */}
      <div className="relative mx-auto w-full max-w-4xl pb-24 pt-8">
        <h2 className="mb-2 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Full control over every aesthetic.
        </h2>
        <p className="mb-6 text-center text-base text-muted-foreground sm:text-lg">
          Your digital companion can look and sound any way you like, and you can change them
          at any time{" "}
          <span className="font-medium text-foreground">
            without them losing their memory.
          </span>
        </p>
        <HeroPersonaCard />
      </div>
    </section>
  )
}
