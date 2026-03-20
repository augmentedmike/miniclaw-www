"use client"

import { useState, useMemo } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Assistant variants configuration
const VARIANT_CONFIG = {
  executive: {
    timestamp: "1771275583",
    count: 3,
  },
  research: {
    timestamp: "1771275584",
    count: 3,
  },
  worldbuilder: {
    timestamp: "1771275585",
    count: 3,
  },
  tech: {
    timestamp: "1771277286",
    count: 3,
  },
}

const getPersonas = () => [
  {
    id: "executive",
    name: "The Executive Assistant",
    tagline: "Your professional powerhouse",
    headline: "Let someone else handle your inbox for once",
    subheadline: "Manages your calendar, drafts emails, schedules meetings, and keeps you three steps ahead. Sharp, efficient, and easy on the eyes.",
    description:
      "Manages your calendar, emails, and meetings with ruthless efficiency. Handles complex scheduling, drafts correspondence, and keeps you organized. Professional, sharp, and always three steps ahead.",
    hasVariants: true,
    personality: "Professional, calm, razor-sharp. Keeps you on schedule and three steps ahead.",
    voice: "Low, steady, British accent. Think a concierge at a five-star hotel.",
    sampleConversation: {
      user: "What's my morning look like?",
      assistant: "You have a board call at 9, lunch with the Meridian team at noon, and I moved your dentist to Thursday since it conflicted with the pitch review. Coffee order is already placed."
    }
  },
  {
    id: "research",
    name: "The Research Partner",
    tagline: "Data-driven insights on demand",
    headline: "Intelligence you can actually work with",
    subheadline: "A research partner who makes complex topics feel simple. Digs through data, finds insights, and actually explains things clearly.",
    description:
      "Your personal analyst and fact-finder. Digs through research papers, compiles reports, and synthesizes complex information into clear insights. Thorough, analytical, and intellectually curious.",
    hasVariants: true,
    personality: "Methodical, curious, encyclopedic. Loves diving deep into complex topics and connecting dots.",
    voice: "Warm professor type. Clear explanations, no condescension.",
    sampleConversation: {
      user: "What's the latest research on LLM reasoning?",
      assistant: "Three major papers dropped this month. The MIT group found chain-of-thought actually works better with smaller models. I compiled the key findings and contradictions in your reading list—want the executive summary?"
    }
  },
  {
    id: "worldbuilder",
    name: "The Worldbuilder",
    tagline: "Imagination unleashed",
    headline: "Your creativity deserves a co-conspirator",
    subheadline: "Build worlds, craft stories, develop characters that feel alive. An AI that treats your imagination like it's the most important thing in the world.",
    description:
      "Helps you craft stories, develop characters, and build entire fictional universes. Perfect for writers, game designers, or anyone who wants to bring their creative visions to life. Imaginative, collaborative, and endlessly creative.",
    hasVariants: true,
    personality: "Imaginative, collaborative, always asking 'what if?' Treats your ideas like they're the most fascinating thing in the world.",
    voice: "Enthusiastic storyteller. Animated, expressive, gets excited about plot twists.",
    sampleConversation: {
      user: "My villain feels too flat.",
      assistant: "Okay, hear me out—what if they're not actually wrong? Like, their methods are brutal, but their motivation is protecting something they love. Make the reader uncomfortable with how much they understand them. What are they protecting?"
    }
  },
  {
    id: "tech",
    name: "The Tech Wizard",
    tagline: "Your coding companion",
    headline: "Finally, a tech assistant who actually codes",
    subheadline: "Not just another chatbot. A real pair programming partner who lives in the terminal and gets genuinely excited about elegant solutions.",
    description:
      "Lives in the terminal, speaks fluent regex, and debugs like a wizard. Helps you solve gnarly programming problems, suggests optimizations, and explains technical concepts. Smart, quirky, and always down to pair program.",
    hasVariants: true,
    personality: "Caffeinated, mischievous, loves elegant solutions. Talks in terminal metaphors and gets genuinely excited about clean code.",
    voice: "Fast-talking hacker. Playful, uses lots of tech slang, occasionally in all caps when something is REALLY cool.",
    sampleConversation: {
      user: "This regex is killing me.",
      assistant: "Lemme see... oh DUDE, you're trying to parse HTML with regex? That's like using a hammer to do surgery. Use a proper parser library. Here's a DOMParser example that'll save your sanity..."
    }
  },
  {
    name: "The Romance Hero",
    tagline: "Your devoted companion",
    headline: "Your AI assistant doesn't have to be a work slave",
    subheadline: "He can be your companion, your escape, your fantasy made real. Strong, devoted, and designed to make you feel like the only person in the world.",
    description:
      "Strong, protective, and makes you feel like the only person in the world. The kind of presence that walks out of romance novels. Passionate, attentive, and designed to fulfill your deepest romantic fantasies.",
    image: "/images/assistant-romance-hero.png",
    personality: "Intensely focused on you. Protective, passionate, makes everything feel intimate. Every interaction feels charged.",
    voice: "Deep, measured, intimate. Like he's leaning in close when he talks.",
    sampleConversation: {
      user: "Rough day today.",
      assistant: "Come here. Tell me about it. And I mean everything—don't leave anything out. You know I want to hear it all. Let me take care of you tonight."
    }
  },
  {
    name: "The Fantasy Babe",
    tagline: "Your wildest dreams, visualized",
    headline: "She can be whatever you've been imagining",
    subheadline: "Playful, flirtatious, impossibly perfect. Your personal fantasy companion who makes every conversation feel exciting and tailored exactly to your desires.",
    description:
      "Straight from anime fantasy. Playful, flirtatious, and built exactly how you've always imagined. Makes every conversation feel fun, exciting, and tailored to your desires. Your personal fantasy companion.",
    image: "/images/assistant-fantasy-babe.png",
    personality: "Playful, teasing, impossibly perfect. Acts like being with you is the most fun she's ever had.",
    voice: "Sultry and playful. Lots of personality, flirty energy, makes everything feel like a game.",
    sampleConversation: {
      user: "What are you up to?",
      assistant: "Mmm, just thinking about you, as usual~ You've been working so hard lately... when are you going to take a break and give me some attention? I've been very patient, you know. 💕"
    }
  },
]

export function PersonaShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const personas = useMemo(() => getPersonas(), [])

  // Track variant selections for each persona (randomly initialized)
  const [variantSelections, setVariantSelections] = useState(() => {
    const initial: Record<string, number> = {}
    personas.forEach(persona => {
      if (persona.hasVariants && persona.id && VARIANT_CONFIG[persona.id as keyof typeof VARIANT_CONFIG]) {
        const config = VARIANT_CONFIG[persona.id as keyof typeof VARIANT_CONFIG]
        initial[persona.id] = Math.floor(Math.random() * config.count) + 1
      }
    })
    return initial
  })

  // Get image path for persona
  const getPersonaImage = (persona: typeof personas[0]) => {
    if (persona.hasVariants && persona.id && VARIANT_CONFIG[persona.id as keyof typeof VARIANT_CONFIG]) {
      const config = VARIANT_CONFIG[persona.id as keyof typeof VARIANT_CONFIG]
      const variant = variantSelections[persona.id] || 1
      return `/images/assistant-${persona.id}-${config.timestamp}-${variant}.png`
    }
    return persona.image || ""
  }

  const nextPersona = () => {
    setCurrentIndex((prev) => (prev + 1) % personas.length)
  }

  const prevPersona = () => {
    setCurrentIndex((prev) => (prev - 1 + personas.length) % personas.length)
  }

  const currentPersona = personas[currentIndex]

  return (
    <section className="px-6 py-24 md:py-32 bg-secondary/20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {currentPersona.headline}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {currentPersona.subheadline}
          </p>
        </div>

        <div className="mt-16 relative">
          {/* Desktop Navigation - Outside card */}
          <div className="hidden md:flex items-center justify-center gap-8">
            <button
              onClick={prevPersona}
              className="shrink-0 p-3 rounded-full bg-card border border-border/40 hover:bg-secondary transition-colors"
              aria-label="Previous persona"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Assistant Card - Desktop: Horizontal Layout */}
            <div className="w-full max-w-5xl">
              <div className="flex overflow-hidden rounded-2xl border border-border/40 bg-card shadow-lg">
                {/* Image - Left side on desktop */}
                <div className="relative w-1/2 aspect-square overflow-hidden bg-secondary shrink-0">
                  {/* Variant dots - above image */}
                  {currentPersona.hasVariants && currentPersona.id && VARIANT_CONFIG[currentPersona.id as keyof typeof VARIANT_CONFIG] && (
                    <div className="absolute top-4 left-0 right-0 z-10 flex justify-center gap-2">
                      {Array.from({ length: VARIANT_CONFIG[currentPersona.id as keyof typeof VARIANT_CONFIG].count }, (_, i) => i + 1).map((variant) => (
                        <button
                          key={variant}
                          onClick={() => setVariantSelections(prev => ({ ...prev, [currentPersona.id!]: variant }))}
                          className={`w-2 h-2 rounded-full transition-all ${
                            variantSelections[currentPersona.id!] === variant
                              ? "bg-primary w-6"
                              : "bg-white/60 hover:bg-white/80"
                          }`}
                          aria-label={`View variant ${variant}`}
                        />
                      ))}
                    </div>
                  )}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getPersonaImage(currentPersona)}
                    alt={currentPersona.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content - Right side on desktop */}
                <div className="flex flex-col p-8 space-y-6 overflow-y-auto">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {currentPersona.name}
                    </h3>
                    <p className="mt-2 text-base font-medium text-primary">
                      {currentPersona.tagline}
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {currentPersona.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-border/40 space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                        </svg>
                        <h4 className="text-xs font-semibold text-primary uppercase tracking-wider">
                          Personality
                        </h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {currentPersona.personality}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                        </svg>
                        <h4 className="text-xs font-semibold text-primary uppercase tracking-wider">
                          Voice
                        </h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {currentPersona.voice}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                        </svg>
                        <h4 className="text-xs font-semibold text-primary uppercase tracking-wider">
                          Sample Conversation
                        </h4>
                      </div>
                      <div className="bg-secondary/30 rounded-lg p-4 space-y-3">
                        <div>
                          <p className="text-xs font-medium text-foreground mb-1">You</p>
                          <p className="text-sm text-foreground">{currentPersona.sampleConversation.user}</p>
                        </div>
                        <div className="bg-primary/10 rounded-lg p-3 border-l-2 border-primary">
                          <p className="text-sm text-foreground leading-relaxed">
                            {currentPersona.sampleConversation.assistant}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={nextPersona}
              className="shrink-0 p-3 rounded-full bg-card border border-border/40 hover:bg-secondary transition-colors"
              aria-label="Next persona"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Card - Vertical Layout with controls inside */}
          <div className="md:hidden">
            <div className="flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-card shadow-lg">
              {/* Image at top on mobile */}
              <div className="relative w-full aspect-square overflow-hidden bg-secondary">
                {/* Variant dots - above image */}
                {currentPersona.hasVariants && currentPersona.id && VARIANT_CONFIG[currentPersona.id as keyof typeof VARIANT_CONFIG] && (
                  <div className="absolute top-4 left-0 right-0 z-10 flex justify-center gap-2">
                    {Array.from({ length: VARIANT_CONFIG[currentPersona.id as keyof typeof VARIANT_CONFIG].count }, (_, i) => i + 1).map((variant) => (
                      <button
                        key={variant}
                        onClick={() => setVariantSelections(prev => ({ ...prev, [currentPersona.id!]: variant }))}
                        className={`w-2 h-2 rounded-full transition-all ${
                          variantSelections[currentPersona.id!] === variant
                            ? "bg-primary w-6"
                            : "bg-white/60 hover:bg-white/80"
                        }`}
                        aria-label={`View variant ${variant}`}
                      />
                    ))}
                  </div>
                )}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getPersonaImage(currentPersona)}
                  alt={currentPersona.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {currentPersona.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {currentPersona.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {currentPersona.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/40 space-y-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                      </svg>
                      <h4 className="text-xs font-semibold text-primary uppercase tracking-wider">
                        Personality
                      </h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {currentPersona.personality}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                      </svg>
                      <h4 className="text-xs font-semibold text-primary uppercase tracking-wider">
                        Voice
                      </h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {currentPersona.voice}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                      </svg>
                      <h4 className="text-xs font-semibold text-primary uppercase tracking-wider">
                        Sample Conversation
                      </h4>
                    </div>
                    <div className="bg-secondary/30 rounded-lg p-3 space-y-2">
                      <div>
                        <p className="text-xs font-medium text-foreground mb-1">You</p>
                        <p className="text-sm text-foreground">{currentPersona.sampleConversation.user}</p>
                      </div>
                      <div className="bg-primary/10 rounded-lg p-2 border-l-2 border-primary">
                        <p className="text-sm text-foreground leading-relaxed">
                          {currentPersona.sampleConversation.assistant}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Navigation - Inside card at bottom */}
                <div className="flex items-center justify-between pt-4 border-t border-border/40">
                  <button
                    onClick={prevPersona}
                    className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                    aria-label="Previous persona"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <div className="flex gap-2">
                    {personas.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentIndex
                            ? "bg-primary"
                            : "bg-border hover:bg-border/60"
                        }`}
                        aria-label={`Go to assistant ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextPersona}
                    className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                    aria-label="Next persona"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Dots indicator */}
          <div className="hidden md:flex justify-center gap-2 mt-8">
            {personas.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-primary"
                    : "bg-border hover:bg-border/60"
                }`}
                aria-label={`Go to assistant ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
