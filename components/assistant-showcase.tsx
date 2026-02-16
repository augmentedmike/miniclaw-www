import Image from "next/image"

const assistants = [
  {
    name: "The Executive Assistant",
    tagline: "Runs your business, looks good doing it",
    description:
      "Handles your calendar, emails, and meetings with ruthless efficiency. Professional, smart, and easy on the eyes.",
    image: "/images/assistant-executive-assistant.png",
    personality: "Efficient • Professional • Sharp",
  },
  {
    name: "The Hacker Girl",
    tagline: "Codes hard, looks harder",
    description:
      "Your personal cybersecurity expert and coding partner. She'll debug your code, secure your systems, and make tech sexy.",
    image: "/images/assistant-hacker-girl.png",
    personality: "Skilled • Rebellious • Tech-savvy",
  },
  {
    name: "The Research Partner",
    tagline: "Brains and beauty",
    description:
      "Helps you research anything from market trends to academic papers. Intelligent conversations with someone who gets it.",
    image: "/images/assistant-research-partner.png",
    personality: "Intelligent • Curious • Thorough",
  },
  {
    name: "The Fantasy Companion",
    tagline: "Your anime dreamgirl, personified",
    description:
      "Straight from your favorite fantasy. Magical, playful, and brings that anime charm to every interaction.",
    image: "/images/assistant-fantasy-companion.png",
    personality: "Magical • Playful • Enchanting",
  },
  {
    name: "The Romantic Partner",
    tagline: "Intimacy on demand",
    description:
      "Your personal romantic escape. Warm, sensual, and makes you feel wanted. Always there for intimate conversations.",
    image: "/images/assistant-romantic-partner.png",
    personality: "Intimate • Warm • Devoted",
  },
  {
    name: "The Business Coach",
    tagline: "Motivation with muscle",
    description:
      "Pushes you to hit your goals with tough love and tactical advice. Strong, confident, and won't let you slack off.",
    image: "/images/assistant-business-coach.png",
    personality: "Driven • Confident • Motivating",
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
