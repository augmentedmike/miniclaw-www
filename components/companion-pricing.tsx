"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Download, Monitor } from "lucide-react"
import { EmailSignupModal } from "@/components/email-signup-modal"

const plans = [
  {
    name: "Download",
    slug: "download",
    price: "Free",
    period: "",
    description: "Get MiniClaw running on your existing Mac in minutes.",
    icon: Download,
    cta: "Notify Me",
    timeline: "Available soon!",
    features: [
      "One-click installer for macOS & Windows",
      "Full digital companion capabilities",
      "Offline mode included",
      "Automatic updates",
      "Private & local by default",
      "Community support",
    ],
  },
  {
    name: "Mac Mini + MiniClaw",
    slug: "order",
    price: "$1,800",
    period: "one time",
    description:
      "A brand new Mac Mini with MiniClaw pre-installed. Plug in and go.",
    icon: Monitor,
    cta: "Pre-Order Now",
    href: "https://helloam.bot/#waitlist",
    timeline: "Shipping Spring 2026",
    features: [
      "Brand new Mac Mini included",
      "MiniClaw pre-installed & configured",
      "White glove setup with the founder",
      "Hardware, labor & shipping included",
      "Plug in, turn on, start talking",
      "Priority support for 1 year",
    ],
    highlighted: true,
  },
]

export function CompanionPricing() {
  const [emailModalOpen, setEmailModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState("")

  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-pink-400">
            Get started
          </p>
          <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            One digital companion. Your story.
          </h3>
          <p className="mt-2 text-muted-foreground">
            No rack needed. Just a single MiniClaw — or download it free on your existing Mac.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                plan.highlighted
                  ? "border-primary/40 bg-card shadow-lg shadow-primary/5"
                  : "border-border/40 bg-card"
              }`}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
                <plan.icon className="h-4 w-4 text-primary" />
              </div>

              <h4 className="mt-4 text-lg font-semibold text-foreground">
                {plan.name}
              </h4>
              <p className="mt-1 text-sm text-muted-foreground">
                {plan.description}
              </p>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-foreground">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm text-muted-foreground">
                    / {plan.period}
                  </span>
                )}
              </div>

              <ul className="mt-5 flex flex-col gap-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-center text-xs font-medium uppercase tracking-widest text-primary">
                {plan.timeline}
              </p>
              {"href" in plan && plan.href ? (
                <Button
                  className="mt-2"
                  size="lg"
                  variant={plan.highlighted ? "default" : "outline"}
                  asChild
                >
                  <a href={plan.href}>{plan.cta}</a>
                </Button>
              ) : (
                <Button
                  className="mt-2"
                  size="lg"
                  variant={plan.highlighted ? "default" : "outline"}
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
      </div>

      <EmailSignupModal
        isOpen={emailModalOpen}
        onClose={() => setEmailModalOpen(false)}
        plan={selectedPlan}
      />
    </section>
  )
}
