"use client"

import { useLocale, useTranslations } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'

export function LocaleSwitcher() {
  const t = useTranslations('localeSwitcher')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  function onChange(newLocale: string) {
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <div className="relative">
      <select
        value={locale}
        onChange={(e) => onChange(e.target.value)}
        aria-label={t('label')}
        className="appearance-none rounded-lg border border-border bg-background px-3 py-1.5 pr-8 text-xs text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
      >
        {routing.locales.map((loc) => (
          <option key={loc} value={loc}>
            {t(loc)}
          </option>
        ))}
      </select>
      <svg
        className="pointer-events-none absolute right-2 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  )
}
