import type { Metadata } from 'next'
import { Check, Monitor, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: 'Pre-Order MiniClaw — Mac Mini with AI Agent Included',
  description: 'Reserve your Mac Mini with MiniClaw pre-installed. White glove setup, priority support for 1 year, and plug-and-play AI on day one. Ships Spring 2026.',
  alternates: {
    canonical: 'https://miniclaw.bot/preorder',
  },
}

const depositLink = process.env.NEXT_PUBLIC_STRIPE_DEPOSIT_LINK
const fullPaymentLink = process.env.NEXT_PUBLIC_STRIPE_FULL_PAYMENT_LINK

const included = [
  "Brand new Apple Mac Mini (M4)",
  "MiniClaw pre-installed & configured",
  "White glove video unboxing — we're with you on day one",
  "Hardware, labor & shipping included",
  "Plug in, turn on, start talking",
  "Priority support for 1 year",
]

export default function PreOrderPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="mx-auto max-w-3xl px-6 pb-24 pt-32 md:pt-40">
        {/* Back link */}
        <a
          href="/#pricing"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to pricing
        </a>

        {/* Header */}
        <div className="text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
            <Monitor className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Pre-Order Mac Mini + MiniClaw
          </h1>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Choose your payment option. Either way, you&apos;re first in line when we ship Spring 2026.
          </p>
        </div>

        {/* White glove callout */}
        <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-5">
          <p className="text-sm text-foreground">
            <strong>Includes white glove setup:</strong> We&apos;ll join you on video during unboxing to make sure everything works perfectly on day one.
          </p>
        </div>

        {/* What's included */}
        <div className="mt-8 rounded-2xl border border-border/40 bg-card p-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">What&apos;s included</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Payment options */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* 50% Deposit */}
          <div className="relative flex flex-col rounded-2xl border-2 border-primary bg-card p-8">
            <div className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-0.5 text-xs font-bold text-primary-foreground">
              Most Popular
            </div>
            <h2 className="text-xl font-semibold text-foreground">50% Deposit</h2>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-5xl font-bold text-foreground">$999.50</span>
              <span className="text-sm text-muted-foreground">today</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Pay the remaining $999.50 before we ship
            </p>
            <ul className="mt-6 flex-1 space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">Reserve your spot in line</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">Lower upfront commitment</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">Pay the rest before shipping</span>
              </li>
            </ul>
            <Button size="lg" className="mt-8 w-full" asChild>
              <a href={depositLink || "#"} target="_blank" rel="noopener noreferrer">
                Pay $999.50 Deposit
              </a>
            </Button>
          </div>

          {/* Full Payment */}
          <div className="flex flex-col rounded-2xl border border-border/40 bg-card p-8">
            <h2 className="text-xl font-semibold text-foreground">Full Payment</h2>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-5xl font-bold text-foreground">$1,999</span>
              <span className="text-sm text-muted-foreground">today</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Pay once, you&apos;re done
            </p>
            <ul className="mt-6 flex-1 space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">One simple transaction</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">No payment reminders</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">Same priority shipping</span>
              </li>
            </ul>
            <Button size="lg" variant="outline" className="mt-8 w-full" asChild>
              <a href={fullPaymentLink || "#"} target="_blank" rel="noopener noreferrer">
                Pay $1,999 Full
              </a>
            </Button>
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-8 text-center text-sm text-muted-foreground/60">
          All pre-orders are fully refundable until we ship. Estimated shipping: Spring 2026.
        </p>

        {/* Why MiniClaw */}
        <div className="mt-16 border-t border-border/40 pt-12">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Why MiniClaw?</h2>
          <p className="mt-4 text-muted-foreground">
            MiniClaw turns a brand new Apple Mac Mini into a fully configured AI agent workstation. Instead of spending weeks setting up tools, configuring models, and debugging integrations, you get a machine that&apos;s ready to work on day one.
          </p>
          <p className="mt-4 text-muted-foreground">
            MiniClaw runs on OpenClaw, our open-source AI agent runtime. It comes with a curated set of plugins that let you delegate real tasks to your AI agent — not just chat with it. Browse the web, write and run code, manage files, send messages, and more. Your agent runs locally on your hardware, so your data stays private and under your control.
          </p>
          <p className="mt-4 text-muted-foreground">
            Most AI tools ask you to adapt to them. MiniClaw is built the other way around — it adapts to how you work. Whether you&apos;re a solo founder, a developer, or someone who simply wants AI doing useful things without a steep learning curve, MiniClaw is designed to get out of your way and get to work.
          </p>
        </div>

        {/* About the hardware */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">About the Hardware</h2>
          <p className="mt-4 text-muted-foreground">
            Your MiniClaw ships on a brand new Apple Mac Mini with the M4 chip — one of the most power-efficient, capable desktop chips available. The M4 handles local AI inference smoothly, keeping your agent responsive without the noise or heat of a gaming PC.
          </p>
          <p className="mt-4 text-muted-foreground">
            The hardware is entirely yours. There are no ongoing licensing fees for the base system. MiniClaw is software that lives on your machine — you own it, you control it. We handle the configuration so you don&apos;t have to, but you can inspect and modify anything once it&apos;s yours.
          </p>
        </div>

        {/* What happens after you order */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">What Happens After You Order</h2>
          <ol className="mt-4 space-y-4">
            {[
              { step: "1", text: "You receive a confirmation email immediately after checkout." },
              { step: "2", text: "We reach out before shipping to schedule your white glove onboarding call." },
              { step: "3", text: "Your Mac Mini ships with MiniClaw pre-installed and pre-configured." },
              { step: "4", text: "We join you on a live video call during unboxing to verify everything works and walk you through your first agent session." },
              { step: "5", text: "You're set up with priority support for 12 months — real humans, fast responses." },
            ].map(({ step, text }) => (
              <li key={step} className="flex items-start gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {step}
                </span>
                <p className="text-muted-foreground">{text}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* FAQ */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-6">
            {[
              {
                q: "What exactly is MiniClaw?",
                a: "MiniClaw is an AI agent system built on OpenClaw, our open-source agent runtime. It gives you a persistent AI agent that can actually do things — browse the web, write and execute code, manage files, send messages, and more. Unlike chatbots, it remembers context across sessions and can work autonomously on longer tasks.",
              },
              {
                q: "When will my order ship?",
                a: "We're targeting Spring 2026. Pre-orders ship in the order they were received, so earlier pre-orders go out first. We'll email you with a confirmed ship date as we get closer.",
              },
              {
                q: "Is my pre-order refundable?",
                a: "Yes — fully refundable until we ship. If you change your mind for any reason before your Mac Mini ships, you'll receive a full refund with no questions asked. Deposit customers who don't pay the remainder before shipping also receive a full refund of their deposit.",
              },
              {
                q: "Do I need any technical experience?",
                a: "No. MiniClaw is designed for people who want AI working for them — not for people who want an AI project. We handle all the setup. You plug it in, turn it on, and start talking. Our white glove onboarding session walks you through everything in real time.",
              },
              {
                q: "What are the ongoing costs?",
                a: "The Mac Mini hardware is yours with no ongoing platform fees. MiniClaw itself may use API keys for certain AI models — you pay those providers directly at standard rates. We'll help you configure the most cost-effective setup during onboarding. For many use cases, costs are a few dollars a month.",
              },
              {
                q: "Can I see MiniClaw before I buy?",
                a: "Yes — visit miniclaw.bot to learn more about what MiniClaw does, watch demos, and read about the OpenClaw runtime that powers it. If you have specific questions, reach out and we'll answer them directly.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="rounded-xl border border-border/40 bg-card p-6">
                <h3 className="font-semibold text-foreground">{q}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
          <h2 className="text-xl font-bold text-foreground">Ready to get your AI workstation?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Reserve your spot now. Ships Spring 2026. Fully refundable until then.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <a href={depositLink || "#"} target="_blank" rel="noopener noreferrer">
                Pay $999.50 Deposit
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={fullPaymentLink || "#"} target="_blank" rel="noopener noreferrer">
                Pay $1,999 Full
              </a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
