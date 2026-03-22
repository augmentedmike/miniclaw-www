import type { MetadataRoute } from 'next'

const locales = ['en', 'es', 'zh-CN']
const baseUrl = 'https://miniclaw.bot'

function localizedUrls(path: string) {
  const languages: Record<string, string> = {}
  for (const locale of locales) {
    languages[locale] = locale === 'en' ? `${baseUrl}${path}` : `${baseUrl}/${locale}${path}`
  }
  return languages
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const routes = ['', '/compare', '/invest', '/install']

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: path === '' ? 'weekly' as const : 'monthly' as const,
    priority: path === '' ? 1 : path === '/compare' ? 0.8 : 0.6,
    alternates: {
      languages: localizedUrls(path),
    },
  }))
}
