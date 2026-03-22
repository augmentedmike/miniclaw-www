import { Bot, Cpu, Heart } from "lucide-react"
import { useTranslations } from "next-intl"

export function CompanionIntro() {
  const t = useTranslations('companionIntro')

  const pillars = [
    {
      icon: Heart,
      title: t('pillar1Title'),
      description: t('pillar1Desc'),
    },
    {
      icon: Cpu,
      title: t('pillar2Title'),
      description: t('pillar2Desc'),
    },
    {
      icon: Bot,
      title: t('pillar3Title'),
      description: t('pillar3Desc'),
    },
  ]

  return (
    <section aria-label={t('label')} className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            {t('label')}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {t('heading')}{" "}
            <span className="text-muted-foreground">{t('headingHighlight')}</span>
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            {t('description')}
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-border/40 bg-card p-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <pillar.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
