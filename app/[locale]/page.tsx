import { getTranslations } from "next-intl/server"
import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { CompanionIntro } from "@/components/companion-intro"
import { PluginsGrid } from "@/components/plugins-grid"
import { Personalize } from "@/components/personalize"
import { Showcase } from "@/components/showcase"
import { MiniClawArchitecture } from "@/components/miniclaw-architecture"
import { KanbanSection } from "@/components/kanban-section"
import { PortabilitySection } from "@/components/portability-section"
import { YourData } from "@/components/your-data"
import { BlogHighlight } from "@/components/blog-highlight"
import { LiveSupport } from "@/components/live-support"
import { FAQ } from "@/components/faq"
import { OpenSource } from "@/components/open-source"
import { Footer } from "@/components/footer"

export default async function Page() {
  const t = await getTranslations('hero')

  const homeSlides = [
    {
      headline: t('slide1.headline'),
      headlineSub: t('slide1.headlineSub'),
      description: t('slide1.description'),
      emphasisWord: t('slide1.emphasisWord'),
      proofs: [t('slide1.proof1'), t('slide1.proof2'), t('slide1.proof3'), t('slide1.proof4')],
    },
    {
      headline: t('slide2.headline'),
      headlineSub: t('slide2.headlineSub'),
      description: t('slide2.description'),
      emphasisWord: t('slide2.emphasisWord'),
      proofs: [t('slide2.proof1'), t('slide2.proof2'), t('slide2.proof3'), t('slide2.proof4')],
    },
    {
      headline: t('slide3.headline'),
      headlineSub: t('slide3.headlineSub'),
      description: t('slide3.description'),
      emphasisWord: t('slide3.emphasisWord'),
      proofs: [t('slide3.proof1'), t('slide3.proof2'), t('slide3.proof3'), t('slide3.proof4')],
    },
    {
      headline: t('slide4.headline'),
      headlineSub: t('slide4.headlineSub'),
      description: t('slide4.description'),
      emphasisWord: t('slide4.emphasisWord'),
      proofs: [t('slide4.proof1'), t('slide4.proof2'), t('slide4.proof3'), t('slide4.proof4')],
    },
  ]

  const softwareAppJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'MiniClaw',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'macOS',
    url: 'https://miniclaw.bot',
    description: t('slide1.description'),
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    publisher: {
      '@type': 'Organization',
      name: 'MiniClaw',
      url: 'https://miniclaw.bot',
    },
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />
      <Navbar />
      <PageHero slides={homeSlides} />
      <CompanionIntro />
      <PortabilitySection />
      <YourData />
      <PluginsGrid />
      <KanbanSection />
      <Personalize />
      <MiniClawArchitecture />
      <Showcase />
      <BlogHighlight />
      <LiveSupport />
      <FAQ />
      <OpenSource />
      <Footer />
    </main>
  )
}
