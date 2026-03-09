import type { Metadata, Viewport } from 'next'
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
  title: 'MiniClaw — Your AI. Persona + Skills + Memory.',
  description:
    'OpenClaw for humans. Build an AI with a real personality, memory, and powerful skills — no terminal, no config files, no tech degree required. Just plug in and go.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'MiniClaw — Your AI. Persona + Skills + Memory.',
    description:
      'OpenClaw for humans. Build an AI with a real personality, memory, and powerful skills — no terminal, no config files, no tech degree required. Just plug in and go.',
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
      'OpenClaw for humans. Build an AI with a real personality, memory, and powerful skills — no terminal, no config files, no tech degree required. Just plug in and go.',
    images: ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceMono.variable}`}>
      <body className="font-sans antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}
