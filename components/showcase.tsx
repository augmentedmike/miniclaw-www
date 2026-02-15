import Image from "next/image"

const capabilities = [
  {
    capability: "See Something, Buy It — Hands Free",
    description:
      "Wearing Meta Ray-Bans? Just look at something and tell your assistant to order it. It finds it on Amazon and adds it to your cart.",
    image: "/images/showcase-raybans.png",
  },
  {
    capability: "Wake Up to a Personal Briefing Every Morning",
    description:
      "Weather, calendar, top news, and a to-do list — waiting for you before your first cup of coffee. Every single morning, automatically.",
    image: "/images/showcase-briefing.png",
  },
  {
    capability: "Let AI Handle Your Inbox While You Work",
    description:
      "It reads your emails, unsubscribes from junk, drafts replies, and flags what actually matters. Thousands of emails — handled.",
    image: "/images/showcase-inbox.png",
  },
  {
    capability: "A 24/7 Employee That Never Calls In Sick",
    description:
      "It tracks your industry, watches competitors, manages customers, and sends you a report — while you sleep.",
    image: "/images/showcase-employee.png",
  },
  {
    capability: "Plan a Vacation Without Lifting a Finger",
    description:
      "Tell it where you want to go. It searches flights, compares hotels, builds an itinerary, and sends you the options.",
    image: "/images/showcase-vacation.png",
  },
  {
    capability: "Know What People Are Saying About Your Business",
    description:
      "It monitors Reddit, Twitter, and review sites for mentions of your brand — then summarizes what people love and hate.",
    image: "/images/showcase-mentions.png",
  },
]

export function Showcase() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            What You Can Do With OpenClaw
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Your AI assistant.{" "}
            <span className="text-muted-foreground">Your rules.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            OpenClaw isn&apos;t a chatbot you talk to. It&apos;s an assistant
            that gets things done — on your computer, your phone, even your
            smart glasses. ClawDaddy makes it all plug-and-play.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <div
              key={item.capability}
              className="flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-card"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-secondary">
                <Image
                  src={item.image}
                  alt={item.capability}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-sm font-semibold leading-snug text-foreground">
                  {item.capability}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-pretty text-muted-foreground">
          With ClawDaddy, all of these scenarios work out of the box — no
          terminal commands, no config files, no YouTube tutorials required.
          Just plug in and go.
        </p>
      </div>
    </section>
  )
}
