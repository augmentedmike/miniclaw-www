import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TrendingUp, Shield, Users, Zap, Target, DollarSign, Check, ArrowRight } from "lucide-react"

const highlights = [
  {
    icon: Target,
    stat: "$100B+",
    label: "AI Assistant Market by 2030",
  },
  {
    icon: Users,
    stat: "2.5B",
    label: "Potential Users Worldwide",
  },
  {
    icon: Zap,
    stat: "Spring 2026",
    label: "Product Launch Timeline",
  },
]

const whyInvest = [
  {
    icon: TrendingUp,
    title: "Massive Market Opportunity",
    description:
      "The AI assistant market is exploding. Everyone wants AGI, but current solutions are too complex. We're making it accessible to everyone.",
  },
  {
    icon: Shield,
    title: "Proven Demand",
    description:
      "Pre-orders and waitlist signups validate product-market fit. People are ready to pay for AI that just works.",
  },
  {
    icon: Users,
    title: "Underserved Market",
    description:
      "While competitors focus on developers and tech enthusiasts, we're targeting the 99% — business owners, retirees, everyday people.",
  },
  {
    icon: Zap,
    title: "Fast Execution",
    description:
      "Launching Spring 2026. Revenue-generating from day one with hardware + software model.",
  },
]

const terms = [
  "SAFE (Simple Agreement for Future Equity)",
  "Minimum investment: $10,000",
  "Valuation cap and discount available",
  "Investor updates monthly",
  "Direct access to founding team",
  "Advisory opportunities for strategic investors",
]

const faqs = [
  {
    question: "What is a SAFE?",
    answer:
      "A SAFE (Simple Agreement for Future Equity) is an investment contract that converts to equity during a future financing round. It's simpler than traditional equity with no immediate valuation.",
  },
  {
    question: "What's the minimum investment?",
    answer:
      "The minimum investment is $10,000. For investors looking to commit $100k+, we offer strategic advisory opportunities and additional terms.",
  },
  {
    question: "When does the SAFE convert?",
    answer:
      "The SAFE converts to equity during our next priced equity round (Series A) or upon an acquisition/IPO.",
  },
  {
    question: "Who can invest?",
    answer:
      "This offering is limited to accredited investors as defined by the SEC. You'll need to verify your accredited status during the investment process.",
  },
  {
    question: "What are the risks?",
    answer:
      "Investing in early-stage startups is extremely risky. You could lose your entire investment. Only invest what you can afford to lose.",
  },
]

export default function InvestPage() {
  const investorEmail = "invest@clawdaddy.com"

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="px-6 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm text-primary mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Now Raising
          </div>

          <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
            Invest in the future of accessible AGI
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            ClawDaddy is making AGI accessible to everyone — not just developers. Join us as we build the AI assistant that your mother can use.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="gap-2 px-8 text-base" asChild>
              <a href={`mailto:${investorEmail}?subject=Investment Inquiry`}>
                Express Interest
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8 text-base" asChild>
              <a href="#terms">
                View Terms
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/40 bg-card/30 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="mt-4 text-4xl font-bold text-foreground">{item.stat}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Why invest in ClawDaddy?
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              We're positioned to capture a massive, underserved market with a product people are already asking for.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {whyInvest.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border/40 bg-card p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Terms */}
      <section id="terms" className="border-y border-border/40 bg-card/30 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Investment Terms
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Simple, founder-friendly terms that align incentives.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-border/40 bg-card p-8 md:p-10">
            <div className="flex items-start gap-3 mb-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <DollarSign className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  SAFE Agreement Details
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  We're raising via SAFE to move fast while keeping terms simple.
                </p>
              </div>
            </div>

            <ul className="space-y-3">
              {terms.map((term) => (
                <li key={term} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{term}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-lg border border-primary/20 bg-primary/5 p-4">
              <p className="text-sm text-foreground">
                <strong>For large investments ($100k+):</strong> We offer additional terms, board observer rights, and strategic advisory opportunities. Contact us to discuss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Investor FAQ
            </h2>
          </div>

          <div className="mt-12 space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-border/40 bg-card p-6"
              >
                <h3 className="font-semibold text-foreground">{faq.question}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-y border-border/40 bg-card/30 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Ready to invest?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-muted-foreground">
            Email us to start the conversation. We'll send you our pitch deck and answer any questions.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <Button size="lg" className="gap-2 px-8 text-base" asChild>
              <a href={`mailto:${investorEmail}?subject=Investment Inquiry`}>
                Contact Us to Invest
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              or email{" "}
              <a
                href={`mailto:${investorEmail}`}
                className="text-primary hover:underline"
              >
                {investorEmail}
              </a>
            </p>
          </div>

          <div className="mt-12 rounded-xl border border-border/40 bg-background/50 p-6">
            <p className="text-xs text-muted-foreground">
              <strong className="text-foreground">Important Legal Disclaimer:</strong> This is not an offer to sell securities and does not constitute investment advice. All investments must comply with applicable federal and state securities laws. Investing in early-stage companies involves substantial risk, including the risk of total loss of investment. This opportunity is only available to accredited investors as defined under Regulation D of the Securities Act of 1933. Past performance is not indicative of future results.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
