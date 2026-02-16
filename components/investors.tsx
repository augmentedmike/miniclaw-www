"use client"

import { Button } from "@/components/ui/button"
import { TrendingUp, Shield, Users } from "lucide-react"

const investorFeatures = [
  {
    icon: TrendingUp,
    title: "Early Access",
    description: "Be part of the AGI revolution from day one",
  },
  {
    icon: Shield,
    title: "SAFE Agreement",
    description: "Simple Agreement for Future Equity with favorable terms",
  },
  {
    icon: Users,
    title: "Investor Updates",
    description: "Monthly updates on progress, metrics, and milestones",
  },
]

export function Investors() {
  const investorEmail = "invest@miniclaw.com"

  return (
    <section className="border-y border-border/40 bg-card/30 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Investors
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Invest in MiniClaw
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            We're raising capital to bring AGI to everyone. Join us as an investor and help shape the future of accessible AI.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {investorFeatures.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center rounded-xl border border-border/40 bg-card p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border/40 bg-card p-8 md:p-10">
          <h3 className="text-xl font-semibold text-foreground">
            Interested in investing?
          </h3>
          <p className="mt-2 text-muted-foreground">
            We're currently raising through SAFE agreements. Minimum investment: $10,000.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button size="lg" asChild>
              <a href={`mailto:${investorEmail}?subject=Investment Inquiry`}>
                Contact Us to Invest
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              or email us directly at{" "}
              <a
                href={`mailto:${investorEmail}`}
                className="text-primary hover:underline"
              >
                {investorEmail}
              </a>
            </p>
          </div>

          <div className="mt-8 rounded-lg border border-border/40 bg-background/50 p-4">
            <p className="text-xs text-muted-foreground">
              <strong className="text-foreground">Important:</strong> This is not an offer to sell securities. All investments are subject to our terms and conditions, and must comply with applicable securities laws. Investing in startups is risky and you could lose your entire investment.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
