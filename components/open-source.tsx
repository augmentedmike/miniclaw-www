import { Heart, Github, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"

export function OpenSource() {
  const t = useTranslations('openSource')

  return (
    <section aria-label="Open Source" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          {t('heading')}{" "}
          <span className="text-primary">{t('headingHighlight')}</span> {t('headingSuffix')}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {t('description')}
        </p>

        <div className="mx-auto mt-8 max-w-xl rounded-xl border border-border/40 bg-card p-6 text-left">
          <div className="flex items-center gap-3">
            <Heart className="h-5 w-5 shrink-0 text-red-400" />
            <h3 className="text-base font-semibold text-foreground">
              {t('supportTitle')}
            </h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {t('supportDescription')}
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="gap-2" asChild>
            <a
              href="https://helloam.bot/invest"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('supportButton')}
            >
              <Heart className="h-4 w-4" />
              {t('supportButton')}
            </a>
          </Button>
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <a
              href="https://github.com/augmentedmike/miniclaw-os"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              {t('viewSource')}
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
