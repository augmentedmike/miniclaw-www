import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TrendingUp, Shield, Users, Zap, Target, DollarSign, Check, ArrowRight } from "lucide-react"
import { LucideIcon } from "lucide-react"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "invest" })
  return {
    title: `${t("heading")} — MiniClaw`,
    description: t("description"),
    openGraph: {
      title: `${t("heading")} — MiniClaw`,
      description: t("description"),
      url: "https://miniclaw.bot/invest",
      siteName: "MiniClaw",
      type: "website",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: t("heading") }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("heading")} — MiniClaw`,
      description: t("description"),
      images: ["/og-image.png"],
    },
  }
}

const whyIcons: LucideIcon[] = [TrendingUp, Shield, Users, Zap]
const statIcons: LucideIcon[] = [Target, Users, Zap]

export default async function InvestPage() {
  const t = await getTranslations("invest")
  const investorEmail = "amelia@helloam.bot"

  const highlights = Array.from({ length: 3 }, (_, i) => {
    const n = i + 1
    return { icon: statIcons[i], stat: t(`stat${n}`), label: t(`stat${n}Label`) }
  })

  const whyInvest = Array.from({ length: 4 }, (_, i) => {
    const n = i + 1
    return { icon: whyIcons[i], title: t(`why${n}Title`), description: t(`why${n}Desc`) }
  })

  const terms = Array.from({ length: 6 }, (_, i) => t(`term${i + 1}`))

  const faqs = Array.from({ length: 5 }, (_, i) => {
    const n = i + 1
    return { question: t(`faq${n}Q`), answer: t(`faq${n}A`) }
  })

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
            {t("badge")}
          </div>

          <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
            {t("heading")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            {t("description")}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="gap-2 px-8 text-base" asChild>
              <a href={`mailto:${investorEmail}?subject=Investment Inquiry`}>
                {t("emailCta")}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8 text-base" asChild>
              <a href="#terms">
                {t("viewTerms")}
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
              {t("whyHeading")}
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              {t("whyDescription")}
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
              {t("termsHeading")}
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              {t("termsDescription")}
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-border/40 bg-card p-8 md:p-10">
            <div className="flex items-start gap-3 mb-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <DollarSign className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  {t("safeTitle")}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t("safeDescription")}
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
                <strong>{t("largerInvestments")}</strong>
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
              {t("faqHeading")}
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
            {t("readyCta")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-muted-foreground">
            {t("readyDesc")}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <Button size="lg" className="gap-2 px-8 text-base" asChild>
              <a href={`mailto:${investorEmail}?subject=Investment Inquiry`}>
                {t("contactInvest")}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              {t("orEmail")}{" "}
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
              {t("disclaimer")}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
