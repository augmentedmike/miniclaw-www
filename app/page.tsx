import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { PathPicker } from "@/components/path-picker"
import { Showcase } from "@/components/showcase"
import { MeetBonsai } from "@/components/meet-bonsai"
import { BlogHighlight } from "@/components/blog-highlight"
import { LiveSupport } from "@/components/live-support"
import { FAQ } from "@/components/faq"
import { OpenSource } from "@/components/open-source"
import { Footer } from "@/components/footer"

const homeSlides = [
  {
    headline: "An AI that uses your computer.",
    headlineSub: "Like a human would.",
    description:
      "Research. Data entry. Software development. Project management. Scheduling. Ideation. It speaks with a real voice, remembers everything, and solves problems in ways that are starting to feel like",
    emphasisWord: "AGI.",
    proofs: [
      "Ready in 2 minutes",
      "Zero lines of code",
      "Remembers everything",
      "Stays on your machine",
    ],
  },
  {
    headline: "A full company.",
    headlineSub: "Running on your desk.",
    description:
      "Sales, support, dev, ops — all handled by digital assistants coordinating through Bonsai. They create their own tickets, ship their own code, and fix their own bugs. Around the clock. Without",
    emphasisWord: "you.",
    proofs: [
      "Every department covered",
      "Runs 24/7",
      "Self-healing systems",
      "Autonomous operations",
    ],
  },
  {
    headline: "Not just an assistant.",
    headlineSub: "A relationship.",
    description:
      "Your digital companion remembers your story, knows your moods, and grows with you over time. Coach, confidant, creative partner, or something more. It's your story to write and yours to",
    emphasisWord: "tell.",
    proofs: [
      "Remembers everything",
      "Any look you want",
      "Real voice & personality",
      "Yours. Always.",
    ],
  },
]

export default function Page() {
  return (
    <main>
      <Navbar />
      <PageHero slides={homeSlides} />

      <div className="px-6 py-12 text-center">
        <p className="text-lg italic text-muted-foreground/60">
          &ldquo;We built the boat while sailing the sea.&rdquo;
        </p>
      </div>

      <PathPicker />
      <Showcase />
      <MeetBonsai />
      <BlogHighlight />
      <LiveSupport />
      <FAQ />
      <OpenSource />
      <Footer />
    </main>
  )
}
