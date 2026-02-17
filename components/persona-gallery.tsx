"use client"

import Image from "next/image"

const personas = [
  {
    name: "Alex",
    title: "Executive Assistant",
    image: "/images/assistant-executive-1771275583-1.png",
  },
  {
    name: "Maya",
    title: "Research Partner",
    image: "/images/assistant-research-1771275584-1.png",
  },
  {
    name: "Kai",
    title: "Tech Genius",
    image: "/images/assistant-tech-1771277286-1.png",
  },
  {
    name: "Luna",
    title: "Creative Worldbuilder",
    image: "/images/assistant-worldbuilder-1771275585-1.png",
  },
  {
    name: "Nova",
    title: "Hacker Girl",
    image: "/images/assistant-hacker-girl.png",
  },
  {
    name: "Zara",
    title: "Fantasy Companion",
    image: "/images/assistant-fantasy-companion.png",
  },
  {
    name: "Marcus",
    title: "Business Coach",
    image: "/images/assistant-business-coach.png",
  },
  {
    name: "Echo",
    title: "Terminal Goblin",
    image: "/images/assistant-terminal-goblin.png",
  },
  {
    name: "Dante",
    title: "Charismatic Rebel",
    image: "/images/assistant-charismatic-rebel.png",
  },
  {
    name: "Iris",
    title: "Fantasy Muse",
    image: "/images/assistant-fantasy-muse.png",
  },
  {
    name: "River",
    title: "Chill Partner",
    image: "/images/assistant-chill-partner.png",
  },
  {
    name: "Phoenix",
    title: "Mysterious Stranger",
    image: "/images/assistant-mysterious-stranger.png",
  },
]

export function PersonaGallery() {
  return (
    <section id="your-ai" className="relative overflow-hidden px-6 py-24 md:py-32">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            Here are some agents your fellow humans have been building:
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Each one unique, all powered by the same cutting-edge AI
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-6">
          {personas.map((persona) => (
            <div
              key={persona.name}
              className="group relative overflow-hidden rounded-xl border border-border/40 bg-card transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden bg-muted">
                <Image
                  src={persona.image}
                  alt={`${persona.name} - ${persona.title}`}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Name overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-3 text-center">
                <h3 className="font-semibold text-white">{persona.name}</h3>
                <p className="text-xs text-white/80">{persona.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground">
            Ready to build yours?{" "}
            <a href="#download" className="font-semibold text-primary underline-offset-4 hover:underline">
              Get started free
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
