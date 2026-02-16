import Image from "next/image"

const capabilities = [
  {
    capability: "Answer Customer Questions 24/7",
    description:
      "Your business never sleeps. It handles order status, returns, FAQs, and password resets while you're off the clock. Real customers, real answers, zero overtime.",
    image: "/images/showcase-support.png",
  },
  {
    capability: "Inbox Zero Every Single Day",
    description:
      "It reads every email, unsubscribes from junk, drafts replies you can edit, and flags what needs your attention. Reclaim 10+ hours a week.",
    image: "/images/showcase-inbox.png",
  },
  {
    capability: "Turn Meetings Into Action Items",
    description:
      "Record any meeting and get a summary with key decisions, next steps, and who's responsible. No more 'wait, what did we decide?'",
    image: "/images/showcase-meetings.png",
  },
  {
    capability: "Your Social Media Manager",
    description:
      "Post daily content, maintain your brand voice, and keep your audience engaged. It writes, schedules, and even suggests trending topics.",
    image: "/images/showcase-social.png",
  },
  {
    capability: "Find & Email Your Next 100 Customers",
    description:
      "Tell it your ideal customer. It researches leads, writes personalized outreach, and updates your CRM. Sales on autopilot.",
    image: "/images/showcase-leads.png",
  },
  {
    capability: "Get Financial Reports Without Spreadsheets",
    description:
      "Cash flow, profit forecasts, break-even analysis — in plain English. Just ask 'How much did we make last month?' and get the answer.",
    image: "/images/showcase-finance.png",
  },
  {
    capability: "Control Your Home With Your Voice",
    description:
      "'Turn on the lights.' 'Lock the door.' 'Set temperature to 72.' Your entire home responds to you like magic.",
    image: "/images/showcase-smarthome.png",
  },
  {
    capability: "Never Miss Your Medication Again",
    description:
      "Daily reminders, refill alerts, and health tracking. It can even notify family if something seems off. Peace of mind, automated.",
    image: "/images/showcase-health.png",
  },
  {
    capability: "Plan Your Dream Vacation in Minutes",
    description:
      "Tell it where you want to go. It searches flights, compares hotels, books reservations, and builds a day-by-day itinerary.",
    image: "/images/showcase-vacation.png",
  },
  {
    capability: "Know What People Say About Your Business",
    description:
      "It monitors Reddit, Twitter, and review sites for your brand mentions — then tells you what people love and what needs fixing.",
    image: "/images/showcase-mentions.png",
  },
  {
    capability: "Your Morning Briefing, Personalized",
    description:
      "Weather, calendar, top news, and your to-do list — waiting before your first cup of coffee. Every morning, automatically.",
    image: "/images/showcase-briefing.png",
  },
  {
    capability: "Research Anything While You Work",
    description:
      "Need to know about a competitor? Industry trend? New market? It researches, summarizes, and sends you a report. Like having an analyst on staff.",
    image: "/images/showcase-research.png",
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
            smart glasses. MiniClaw makes it all plug-and-play.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, index) => (
            <div
              key={item.capability}
              className={`flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-card ${
                index >= 6 ? "hidden md:flex" : ""
              }`}
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
          With MiniClaw, all of these scenarios work out of the box — no
          terminal commands, no config files, no YouTube tutorials required.
          Just plug in and go.
        </p>
      </div>
    </section>
  )
}
