import { useTranslations } from 'next-intl'

export default function NotFound() {
  const t = useTranslations('notFound')

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-xl text-muted-foreground">{t('message')}</p>
      <a href="/" className="mt-8 text-primary hover:underline">
        {t('backHome')}
      </a>
    </div>
  )
}
