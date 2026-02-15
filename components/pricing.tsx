"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Download, Monitor, ShieldCheck } from "lucide-react"
import { EmailSignupModal } from "@/components/email-signup-modal"
import { PreOrderModal } from "@/components/pre-order-modal"

const plans = [
  {
    name: "Download",
    slug: "download",
    price: "Free",
    period: "",
    description: "Get ClawDaddy running on your existing Mac in minutes.",
    icon: Download,
    cta: "Notify Me",
    timeline: "Available soon!",
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
    name: "ClawMini + ClawDaddy",
    slug: "order",
    price: "$1,999",
    period: "one time",
    description:
      "We install and preconfigure your ClawDaddy AI assistant on a brand new ClawMini and ship it straight to you. Plug in and go.",
    icon: Monitor,
    cta: "Pre-Order Now",
    timeline: "Shipping Spring 2026",
    features: [
      "Brand new ClawMini included",
      "ClawDaddy pre-installed & configured",
      "Hardware, labor & shipping included",
      "Plug in, turn on, start talking",
      "Priority support for 1 year",
      "Extended warranty available",
    ],
    highlighted: true,
  },
  {
    name: "ClawDaddy Care",
    slug: "care",
    price: "$99",
    period: "month",
    description:
      "We keep your AI assistant updated, secure, and running smoothly. If anything goes wrong, we fix it for you.",
    icon: ShieldCheck,
    cta: "Notify Me",
    timeline: "Available Spring 2026",
    features: [
      "Automatic updates & security patches",
      "Remote troubleshooting & fixes",
      "Priority email & phone support",
      "Performance monitoring",
      "Configuration changes on request",
      "Peace of mind, hands-free",
    ],
    highlighted: false,
  },
]

export function Pricing() {
  const [activeSlug, setActiveSlug] = useState("download")
  const [animatingSlug, setAnimatingSlug] = useState<string | null>(null)
  const [emailModalOpen, setEmailModalOpen] = useState(false)
  const [preOrderModalOpen, setPreOrderModalOpen] = useState(false)
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
            ClawDaddy is currently in active development. Sign up to be notified
            when we launch, or pre-order a ClawMini to be first in line.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            In Development
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3">
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
              <Button
                className="mt-3"
                size="lg"
                variant={activeSlug === plan.slug ? "default" : "outline"}
                onClick={() => {
                  if (plan.cta === "Notify Me") {
                    setSelectedPlan(plan.name)
                    setEmailModalOpen(true)
                  } else if (plan.cta === "Pre-Order Now") {
                    setPreOrderModalOpen(true)
                  }
                }}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>

      <EmailSignupModal
        isOpen={emailModalOpen}
        onClose={() => setEmailModalOpen(false)}
        plan={selectedPlan}
      />

      <PreOrderModal
        isOpen={preOrderModalOpen}
        onClose={() => setPreOrderModalOpen(false)}
      />
    </section>
  )
}
