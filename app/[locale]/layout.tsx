import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { routing, type Locale } from '@/i18n/routing'
import Script from 'next/script'
import { DM_Sans, Space_Mono } from 'next/font/google'

import './globals.css'
import { SmoothScroll } from '@/components/smooth-scroll'
import WebMCPPolyfill from '@/components/webmcp-polyfill'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })

  const localeAlternates: Record<string, string> = {}
  for (const loc of routing.locales) {
    localeAlternates[loc] = loc === routing.defaultLocale
      ? 'https://miniclaw.bot'
      : `https://miniclaw.bot/${loc}`
  }

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: locale === routing.defaultLocale
        ? 'https://miniclaw.bot'
        : `https://miniclaw.bot/${locale}`,
      languages: localeAlternates,
    },
    other: {
      'model-context': 'supported',
      'model-context-version': '1.0',
      'model-context-site': 'miniclaw.bot',
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: locale === routing.defaultLocale
        ? 'https://miniclaw.bot'
        : `https://miniclaw.bot/${locale}`,
      siteName: 'MiniClaw',
      type: 'website',
      images: [
        {
          url: '/og-image-square.png',
          width: 1200,
          height: 1200,
          alt: t('ogAlt'),
        },
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: t('ogAlt'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: t('title'),
      description: t('description'),
      images: ['/og-image.png'],
    },
  }
}

function getJsonLd(locale: string, t: (key: string) => string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://miniclaw.bot/#organization',
        name: 'MiniClaw',
        url: 'https://miniclaw.bot',
        logo: {
          '@type': 'ImageObject',
          url: 'https://miniclaw.bot/og-image-square.png',
        },
        description: t('orgDescription'),
        sameAs: [
          'https://github.com/augmentedmike/miniclaw-os',
          'https://helloam.bot',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://miniclaw.bot/#website',
        url: 'https://miniclaw.bot',
        name: 'miniclaw.bot',
        publisher: {
          '@id': 'https://miniclaw.bot/#organization',
        },
        inLanguage: locale,
        potentialAction: [],
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://miniclaw.bot/#product',
        name: 'MiniClaw',
        alternateName: ['MiniClaw OS', 'miniclaw.bot'],
        applicationCategory: 'DeveloperApplication',
        applicationSubCategory: 'Agentic OS, AI Agent Platform',
        operatingSystem: 'macOS',
        url: 'https://miniclaw.bot',
        description: t('productDescription'),
        keywords: t('productKeywords'),
        softwareVersion: '1.0',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/PreOrder',
          description: t('offerDescription'),
        },
        publisher: {
          '@id': 'https://miniclaw.bot/#organization',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://miniclaw.bot/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: t('breadcrumbHome'),
            item: 'https://miniclaw.bot',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: t('breadcrumbInstall'),
            item: 'https://miniclaw.bot/install',
          },
        ],
      },
    ],
  }
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params

  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  const messages = await getMessages()
  const t = await getTranslations({ locale, namespace: 'jsonLd' })
  const jsonLd = getJsonLd(locale, (key: string) => t(key))

  return (
    <html lang={locale} className={`${dmSans.variable} ${spaceMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {routing.locales.map((loc) => (
          <link
            key={loc}
            rel="alternate"
            hrefLang={loc}
            href={loc === routing.defaultLocale
              ? 'https://miniclaw.bot'
              : `https://miniclaw.bot/${loc}`}
          />
        ))}
        <link rel="alternate" hrefLang="x-default" href="https://miniclaw.bot" />
        <meta name="model-context" content="supported" />
        <meta name="model-context-version" content="1.0" />
        <meta name="model-context-site" content="miniclaw.bot" />
        <link rel="modelcontext" href="/.well-known/modelcontext" />
        <link rel="webmcp" href="/.well-known/webmcp" />
        <link rel="webmcp-manifest" href="/.well-known/webmcp.json" />
      </head>
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <WebMCPPolyfill />
          <SmoothScroll />
          {children}
        </NextIntlClientProvider>
        <Script src="/webmcp-tools.js" strategy="beforeInteractive" />
        <Script src="/webmcp-init-miniclaw.js" strategy="beforeInteractive" />
      </body>
    </html>
  )
}
