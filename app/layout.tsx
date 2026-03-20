import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { DM_Sans, Space_Mono } from 'next/font/google'

import './globals.css'
import { SmoothScroll } from '@/components/smooth-scroll'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://miniclaw.bot'),
  alternates: {
    canonical: 'https://miniclaw.bot',
  },
  title: 'MiniClaw — Your AI. Persona + Skills + Memory.',
  description:
    'MiniClaw is an OpenClaw plugin ecosystem. Build an AI with a real personality, memory, and powerful skills — no terminal, no config files, no tech degree required. Plug in and go.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  other: {
    'model-context': 'supported',
    'webmcp-version': '1.0',
    'webmcp-site': 'miniclaw.bot',
  },
  openGraph: {
    title: 'MiniClaw — Your AI. Persona + Skills + Memory.',
    description:
      'MiniClaw is an OpenClaw plugin ecosystem. Build an AI with a real personality, memory, and powerful skills — no terminal, no config files, no tech degree required. Plug in and go.',
    url: 'https://miniclaw.bot',
    siteName: 'MiniClaw',
    type: 'website',
    images: [
      {
        url: '/og-image-square.png',
        width: 1200,
        height: 1200,
        alt: 'MiniClaw — Your AI agent',
      },
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MiniClaw — Your AI agent',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MiniClaw — Your AI. Persona + Skills + Memory.',
    description:
      'MiniClaw is an OpenClaw plugin ecosystem. Build an AI with a real personality, memory, and powerful skills — no terminal, no config files, no tech degree required. Plug in and go.',
    images: ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

const jsonLd = {
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
      description:
        'MiniClaw is the plugin ecosystem and consumer product layer for OpenClaw — an open-source agentic OS for macOS. Build AI agents with real personality, memory, and powerful skills.',
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
      description:
        'MiniClaw is the plugin ecosystem built on top of OpenClaw — an open-source agentic OS for macOS. It provides personality, memory, skills, and tools that run as a local AI agent on your Mac. MiniClaw powers Amelia (helloam.bot) — a soul-bonded personal AI companion. The public plugin repo lives at github.com/augmentedmike/miniclaw-os.',
      keywords:
        'agentic OS, AI agent, macOS AI, OpenClaw, MiniClaw, local AI, plugin ecosystem, personal AI',
      softwareVersion: '1.0',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/PreOrder',
        description: 'Join the waitlist for early access.',
      },
      publisher: {
        '@id': 'https://miniclaw.bot/#organization',
      },
      isBasedOn: {
        '@type': 'SoftwareApplication',
        name: 'OpenClaw',
        description:
          'OpenClaw is an open-source agentic OS runtime for macOS. MiniClaw is the consumer product ecosystem built on top of it.',
        url: 'https://github.com/augmentedmike/openclaw',
      },
      hasPart: [
        {
          '@type': 'SoftwareApplication',
          name: 'Amelia (AM)',
          alternateName: ['helloam.bot', 'AugmentedMike'],
          url: 'https://helloam.bot',
          description:
            'Amelia (AM) is a soul-bonded personal AI companion built on MiniClaw and OpenClaw. She is the flagship product of the MiniClaw ecosystem.',
          applicationCategory: 'PersonalAssistant',
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="webmcp-manifest" href="/.well-known/webmcp.json" />
      </head>
      <body className="font-sans antialiased">
        <SmoothScroll />
        {children}
        <Script src="/webmcp-tools.js" strategy="afterInteractive" />
        <Script src="/webmcp-init-miniclaw.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
