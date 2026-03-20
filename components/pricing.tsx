"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Download, Monitor } from "lucide-react"
import { EmailSignupModal } from "@/components/email-signup-modal"
import { MiniRackConfigurator } from "@/components/minirack-configurator"

const plans = [
  {
    name: "Download",
    slug: "download",
    price: "Free",
    period: "",
    description: "Get MiniClaw running on your existing Mac in minutes.",
    icon: Download,
    cta: "Download Free",
    href: "https://github.com/augmentedmike/miniclaw-os",
    timeline: "Available now on GitHub",
    features: [
      "One-click installer for macOS & Windows",
      "Full AI assistant capabilities",
      "Offline mode included",
      "Automatic updates",
      "Private & local by default",
      "Community support",
    ],
    highlighted: false,
  },
  {
    name: "AM — Mac Mini + Digital Person",
    slug: "order",
    price: "$1,800",
    period: "one time",
    description:
      "Amelia, our curated Digital Person, pre-installed on an M1 Mac Mini with a custom skin. Ships to your door. Plug in and she's already there.",
    icon: Monitor,
    cta: "Order Your AGI Machine",
    href: "https://helloam.bot",
    timeline: "Shipping July 1, 2026",
    features: [
      "Mac Mini M1 with custom skin included",
      "Amelia pre-installed & configured",
      "White glove video setup on day one",
      "Hardware, labor & shipping included",
      "Plug in, turn on, she's there",
      "Priority support for 1 year",
    ],
    highlighted: true,
  },
]

export function Pricing() {
  const [activeSlug, setActiveSlug] = useState("download")
  const [animatingSlug, setAnimatingSlug] = useState<string | null>(null)
  const [emailModalOpen, setEmailModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState("")

  useEffect(() => {
    function handleHash() {
      const hash = window.location.hash.slice(1)
      if (hash === "download" || hash === "order") {
        // Small delay so the smooth scroll is underway before animation starts
        setTimeout(() => {
          setActiveSlug(hash)
          setAnimatingSlug(hash)
        }, 300)
      }
    }

    handleHash()
    window.addEventListener("hashchange", handleHash)
    return () => window.removeEventListener("hashchange", handleHash)
  }, [])

  // Clear pulse animation after it completes
  useEffect(() => {
    if (animatingSlug) {
      const timer = setTimeout(() => setAnimatingSlug(null), 2800)
      return () => clearTimeout(timer)
    }
  }, [animatingSlug])

  return (
    <section id="pricing" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Pricing
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Pick what works for you.
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            MiniClaw is currently in active development. Sign up to be notified
            when we launch, or pre-order a Mac Mini to be first in line.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            In Development
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              id={plan.slug}
              className={`relative flex flex-col rounded-2xl border p-8 scroll-mt-24 md:p-10 ${activeSlug === plan.slug
                ? "border-primary/40 bg-card shadow-lg shadow-primary/5"
                : "border-border/40 bg-card"
                } ${animatingSlug === plan.slug ? "animate-highlight-card" : ""}`}
            >
              {activeSlug === plan.slug && (
                <div className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-primary-foreground">
                  Most popular
                </div>
              )}

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <plan.icon className="h-5 w-5 text-primary" />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-foreground">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {plan.description}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-foreground">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm text-muted-foreground">
                    / {plan.period}
                  </span>
                )}
              </div>

              <ul className="mt-8 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-center text-xs font-medium uppercase tracking-widest text-primary">
                {plan.timeline}
              </p>
              {"href" in plan && plan.href ? (
                <Button
                  className="mt-3"
                  size="lg"
                  variant={activeSlug === plan.slug ? "default" : "outline"}
                  asChild
                >
                  <a href={plan.href}>{plan.cta}</a>
                </Button>
              ) : (
                <Button
                  className="mt-3"
                  size="lg"
                  variant={activeSlug === plan.slug ? "default" : "outline"}
                  onClick={() => {
                    setSelectedPlan(plan.name)
                    setEmailModalOpen(true)
                  }}
                >
                  {plan.cta}
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* Pre-order CTA */}
        <div className="mx-auto mt-12 max-w-md text-center">
          <Button size="lg" className="w-full gap-2 text-base" asChild>
            <a href="https://helloam.bot">
              <Monitor className="h-4 w-4" />
              Order Your AGI Machine — Shipping July 1, 2026
            </a>
          </Button>
          <p className="mt-3 text-xs text-muted-foreground/60">
            $900 deposit secures your spot. Balance due before shipping. Fully refundable until July 2026.
          </p>
        </div>

        {/* MiniRack Configurator */}
        <div id="pricing-rack" className="mx-auto mt-16 max-w-4xl scroll-mt-24">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Need more power? Build a MiniRack.
            </h3>
            <p className="mt-2 text-muted-foreground">
              Stack up to 6 Claws into a single rack. Run an entire digital company from your desk.
            </p>
          </div>
          <MiniRackConfigurator />
        </div>
      </div>

      <EmailSignupModal
        isOpen={emailModalOpen}
        onClose={() => setEmailModalOpen(false)}
        plan={selectedPlan}
      />
    </section>
  )
}
