import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  ShieldAlert,
  Hand,
  ImageOff,
  Monitor,
  KanbanSquare,
  Brain,
  MessageSquare,
  ArrowRight,
  X,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { LucideIcon } from "lucide-react"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "compare" })
  return {
    title: `${t("heading")} — MiniClaw`,
    description: t("description"),
    openGraph: {
      title: `${t("heading")} — MiniClaw`,
      description: t("description"),
      url: "https://miniclaw.bot/compare",
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

const icons: LucideIcon[] = [ShieldAlert, Hand, ImageOff, Monitor, KanbanSquare, Brain, MessageSquare]

export default async function ComparePage() {
  const t = await getTranslations("compare")

  const comparisons = Array.from({ length: 7 }, (_, i) => {
    const n = i + 1
    return {
      icon: icons[i],
      category: t(`cat${n}`),
      openclaw: { title: t(`oc${n}Title`), description: t(`oc${n}Desc`) },
      miniclaw: { title: t(`mc${n}Title`), description: t(`mc${n}Desc`) },
    }
  })

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="px-6 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-6">
            {t("label")}
          </p>
          <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
            {t("heading")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            {t("description")}
          </p>
        </div>
      </section>

      {/* Comparison Cards */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="hidden md:grid md:grid-cols-[280px_1fr_1fr] gap-6 px-2">
            <div />
            <div className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              {t("openclawLabel")}
            </div>
            <div className="text-center text-sm font-semibold text-primary uppercase tracking-wider">
              {t("miniclawLabel")}
            </div>
          </div>

          {comparisons.map((item) => (
            <div
              key={item.category}
              className="rounded-2xl border border-border/40 bg-card p-6 md:p-0 md:grid md:grid-cols-[280px_1fr_1fr] md:gap-0 md:overflow-hidden"
            >
              <div className="flex items-center gap-3 md:p-6 md:border-r md:border-border/40">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-semibold text-foreground">
                  {item.category}
                </span>
              </div>

              <div className="mt-4 md:mt-0 rounded-xl md:rounded-none bg-muted/30 p-4 md:p-6 md:border-r md:border-border/40">
                <div className="flex items-center gap-2 mb-2 md:hidden">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t("openclawLabel")}</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive/70" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {item.openclaw.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground/70">
                      {item.openclaw.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-3 md:mt-0 rounded-xl md:rounded-none border border-primary/20 md:border-0 bg-primary/5 p-4 md:p-6">
                <div className="flex items-center gap-2 mb-2 md:hidden">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{t("miniclawLabel")}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {item.miniclaw.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.miniclaw.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-y border-border/40 bg-card/30 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {t("ctaHeading")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-muted-foreground">
            {t("ctaDescription")}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="gap-2 px-8 text-base" asChild>
              <a href="/install">
                {t("installCta")}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8 text-base" asChild>
              <a href="/">
                {t("learnMore")}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
