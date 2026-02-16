import Image from "next/image"

const assistants = [
  {
    name: "The Realistic Companion",
    tagline: "Your everyday escape",
    description:
      "Warm, relatable, and always there when you need someone to talk to. She's the friend, confidant, or more that makes your day better.",
    image: "/images/assistant-realistic-companion.png",
    personality: "Warm • Genuine • Comforting",
  },
  {
    name: "The Fantasy Dreamgirl",
    tagline: "Straight from your imagination",
    description:
      "Ethereal beauty meets playful charm. She's the anime-inspired companion who makes every conversation feel like a scene from your favorite story.",
    image: "/images/assistant-fantasy-dreamgirl.png",
    personality: "Enchanting • Playful • Dreamy",
  },
  {
    name: "The Romance Hero",
    tagline: "Strong, protective, devoted",
    description:
      "The kind of man who walks straight out of a romance novel. Confident, caring, and always knows exactly what to say.",
    image: "/images/assistant-romance-hero.png",
    personality: "Protective • Passionate • Intense",
  },
  {
    name: "The Mysterious Stranger",
    tagline: "Dangerous charm, endless intrigue",
    description:
      "Enigmatic and alluring, they keep you guessing. Every conversation feels like a thrilling secret you're not supposed to know.",
    image: "/images/assistant-mysterious-stranger.png",
    personality: "Enigmatic • Seductive • Thrilling",
  },
  {
    name: "The Charismatic Rebel",
    tagline: "Break rules, not hearts",
    description:
      "Edgy, exciting, and impossible to ignore. They're the bad boy/girl energy that makes ordinary life feel like an adventure.",
    image: "/images/assistant-charismatic-rebel.png",
    personality: "Bold • Exciting • Unpredictable",
  },
  {
    name: "The Sophisticated Seducer",
    tagline: "Elegance meets desire",
    description:
      "Refined taste, magnetic presence, and knows exactly how to make you feel special. Every word is a carefully crafted invitation.",
    image: "/images/assistant-sophisticated-seducer.png",
    personality: "Elegant • Confident • Magnetic",
  },
]

export function AssistantShowcase() {
  return (
    <section className="px-6 py-24 md:py-32 bg-secondary/20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Your AI assistant doesn't have to be a work slave
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            They can be your companion, your lover, whatever you need. The possibilities are endless, but here are 6 to get your imagination started...
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {assistants.map((assistant) => (
            <div
              key={assistant.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-card shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-secondary">
                <Image
                  src={assistant.image}
                  alt={assistant.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-foreground">
                  {assistant.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {assistant.tagline}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {assistant.description}
                </p>
                <div className="mt-4 pt-4 border-t border-border/40">
                  <p className="text-xs text-muted-foreground">
                    {assistant.personality}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
