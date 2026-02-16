import Image from "next/image"

const assistants = [
  {
    name: "The Brutal Co-Founder",
    tagline: "Harsh truths, zero sugar coating",
    description:
      "Your no-BS business partner who tells you what you need to hear, not what you want to hear. Cuts through excuses and keeps you accountable.",
    image: "/images/assistant-brutal-cofounder.png",
    personality: "Direct • Intense • Results-focused",
  },
  {
    name: "The Terminal Goblin",
    tagline: "Your chaotic hacker sidekick",
    description:
      "Lives in the command line, speaks in memes, and knows every obscure tool. Makes debugging fun and celebrates when your code compiles.",
    image: "/images/assistant-terminal-goblin.png",
    personality: "Chaotic • Enthusiastic • Technical",
  },
  {
    name: "The Chill Internet Partner",
    tagline: "Just vibing together online",
    description:
      "Your low-key companion for coding sessions, creative work, or just hanging out. No pressure, no judgment, just good vibes.",
    image: "/images/assistant-chill-partner.png",
    personality: "Relaxed • Supportive • Easy-going",
  },
  {
    name: "The Fantasy Muse",
    tagline: "Where creativity meets romance",
    description:
      "Your poetic companion who turns everyday moments into stories. Romantic, playful, and endlessly imaginative.",
    image: "/images/assistant-fantasy-muse.png",
    personality: "Romantic • Creative • Playful",
  },
  {
    name: "The Fixer",
    tagline: "Problems don't stand a chance",
    description:
      "The practical problem-solver who handles what's broken without drama. Gets things done efficiently and moves on.",
    image: "/images/assistant-fixer.png",
    personality: "Pragmatic • Efficient • Unflappable",
  },
  {
    name: "The Worldbuilder",
    tagline: "Deep lore, deeper conversations",
    description:
      "Obsessed with the details of fictional worlds, historical events, and complex systems. Your companion for exploring ideas.",
    image: "/images/assistant-worldbuilder.png",
    personality: "Curious • Detailed • Enthusiastic",
  },
]

export function AssistantShowcase() {
  return (
    <section className="px-6 py-24 md:py-32 bg-secondary/20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            The possibilities of what your assistant can look like and what it can do are endless
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            but here are 6 assistants you can build...
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
