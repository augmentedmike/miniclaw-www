import { Check, Monitor, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"

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
      </main>
    </div>
  )
}
