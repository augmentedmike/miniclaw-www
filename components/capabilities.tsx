import {
  Headset,
  TrendingUp,
  Search,
  Megaphone,
  UserPlus,
  FileText,
  CalendarCheck,
} from "lucide-react"

const capabilities = [
  {
    icon: Headset,
    title: "Customer Support",
    stat: "85-90% cost savings",
    description:
      "Handles tickets, responds to inquiries 24/7, and resolves common issues like order status or refunds. Response times go from minutes to seconds.",
  },
  {
    icon: TrendingUp,
    title: "Sales & Lead Gen",
    stat: "Never miss a deal",
    description:
      "Qualifies leads, scores prospects, books meetings, updates your CRM, and extracts contact info from websites. Your pipeline stays full while you sleep.",
  },
  {
    icon: Search,
    title: "Competitor Analysis",
    stat: "Real-time monitoring",
    description:
      "Tracks competitor prices, products, reviews, and availability across the web. Generates market intelligence reports and alerts you when things change.",
  },
  {
    icon: Megaphone,
    title: "Marketing Automation",
    stat: "Set it and forget it",
    description:
      "Monitors ad performance, pauses underperformers, runs A/B tests, tracks social mentions, and creates content schedules from comment insights.",
  },
  {
    icon: UserPlus,
    title: "Onboarding & Ops",
    stat: "Fully automated",
    description:
      "Sends welcome emails, creates CRM entries in Notion, notifies your team on Slack, and schedules follow-ups. New customer? Already handled.",
  },
  {
    icon: FileText,
    title: "Research & Reporting",
    stat: "Daily briefings",
    description:
      "Scrapes industry news, financial data, SEC filings, and job postings. Compiles and formats reports so your team stays ahead on trends.",
  },
  {
    icon: CalendarCheck,
    title: "Internal Task Management",
    stat: "Hours saved daily",
    description:
      "Manages calendars, emails, task updates in Trello and Jira, daily pipeline audits, and financial summaries from your spreadsheets.",
  },
]

export function Capabilities() {
  return (
    <section id="capabilities" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            What it does
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            One assistant.{" "}
            <span className="text-muted-foreground">Seven departments.</span>
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            MiniClaw handles the work that buries your team — support tickets,
            lead gen, competitor tracking, marketing, onboarding, research, and
            daily ops. Autonomously.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card p-8 transition-all hover:border-primary/20 hover:bg-card/80"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                  <cap.icon className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
                  {cap.stat}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {cap.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {cap.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom note spanning full width */}
        <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
          <p className="text-lg font-medium text-foreground">
            And that's just what people are doing{" "}
            <span className="text-primary">today.</span>
          </p>
          <p className="mt-2 text-muted-foreground">
            MiniClaw connects to thousands of apps and APIs. If you can
            describe it, your assistant can probably do it.
          </p>
        </div>
      </div>
    </section>
  )
}
