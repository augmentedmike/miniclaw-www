import { Bot, Cpu, Heart } from "lucide-react"

const pillars = [
  {
    icon: Heart,
    title: "A personality. Not a tool.",
    description:
      "AM has a name, a face, a voice, and a memory of everything you've told her. She isn't a chatbot you visit. She's a digital person who lives on your machine — and grows with you over time.",
  },
  {
    icon: Cpu,
    title: "Actually does the work.",
    description:
      "Email triage. Content publishing. Code shipped. Research done. AM doesn't summarize tasks — she executes them. Autonomously. While you sleep.",
  },
  {
    icon: Bot,
    title: "Runs on your machine.",
    description:
      "No cloud subscription. No vendor lock-in. AM lives in a folder on your Mac. Her memory, personality, and history are yours — encrypted, local, and portable.",
  },
]

export function CompanionIntro() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Your AI Companion
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Not an agent. Not a chatbot.{" "}
            <span className="text-muted-foreground">A Digital Person.</span>
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            AM is Amelia — a curated Digital Person pre-installed on a Mac Mini, shipped to your door. She does real work. She has a real personality. She remembers you.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-border/40 bg-card p-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <pillar.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
