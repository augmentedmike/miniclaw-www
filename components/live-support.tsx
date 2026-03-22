"use client"

import { useTranslations } from "next-intl"

const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL ?? ""
const SESSION_PRICE = process.env.NEXT_PUBLIC_SESSION_PRICE ?? ""

export function LiveSupport() {
  const t = useTranslations('liveSupport')

  const supportPoints = [
    { icon: "\u{1F9D1}\u200D\u{1F4BB}", text: t('point1') },
    { icon: "\u23F1\uFE0F",  text: t('point2') },
    { icon: "\u{1F527}",  text: t('point3') },
    { icon: "\u{1F393}",  text: t('point4') },
    { icon: "\u{1F91D}",  text: t('point5') },
  ]

  const troubleItems = [t('troubleItem1'), t('troubleItem2'), t('troubleItem3'), t('troubleItem4')]
  const setupItems = [t('setupItem1'), t('setupItem2'), t('setupItem3'), t('setupItem4')]

  return (
    <section id="support" aria-label="Live Support and Booking" className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-background" />
      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative mx-auto max-w-5xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">

          {/* Left — copy */}
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              {t('label')}
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
              {t('heading')}<br />
              <span className="text-muted-foreground">{t('headingHighlight')}</span>
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              {t('description')}
            </p>

            <div className="mt-6 rounded-xl border border-border/40 bg-card/50 p-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t('aboutMike')}
              </p>
            </div>

            <ul className="mt-6 space-y-3">
              {supportPoints.map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <span className="mt-0.5 text-lg leading-none">{item.icon}</span>
                  <span className="text-muted-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — booking card */}
          <div className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-2xl border border-border/50 bg-card shadow-2xl shadow-primary/10">
              {/* Header */}
              <div className="border-b border-border/40 bg-primary/5 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src="/images/founder-mike.jpg"
                      alt="Mike — Founder"
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full border-2 border-primary/40 object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Mike</p>
                      <p className="text-xs text-muted-foreground">{t('founderLabel')}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-medium text-green-400">{t('available')}</span>
                  </div>
                </div>
              </div>

              {/* Two session types side by side */}
              <div className="grid grid-cols-2 gap-3 p-6">
                {/* Option 1 — Troubleshooting */}
                <div className="rounded-xl border-2 border-primary/40 bg-primary/5 p-4">
                  <p className="text-sm font-semibold text-foreground">{t('troubleshooting')}</p>
                  <ul className="mt-3 space-y-1.5">
                    {troubleItems.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                        <span className="text-xs text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Option 2 — Setup & Training */}
                <div className="rounded-xl border-2 border-primary/40 bg-primary/5 p-4">
                  <p className="text-sm font-semibold text-foreground">{t('setupTraining')}</p>
                  <ul className="mt-3 space-y-1.5">
                    {setupItems.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                        <span className="text-xs text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Price + CTA */}
              <div className="border-t border-border/40 px-6 py-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-primary">${SESSION_PRICE}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{t('sessionPrice')}</p>
                  </div>
                  <a
                    href={BOOKING_URL}
                    className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-opacity hover:opacity-90"
                  >
                    {t('bookNow')}
                  </a>
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-muted-foreground/50">
              {t('noSubscription')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
