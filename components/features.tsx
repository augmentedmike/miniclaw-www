import {
  MousePointerClick,
  ShieldCheck,
  Zap,
  MessageSquare,
  RefreshCw,
  Wifi,
} from "lucide-react"

const features = [
  {
    icon: MousePointerClick,
    title: "One-click install",
    description:
      "Double-click the installer. That's it. No terminal, no command line, no dev environment. We handle every dependency behind the scenes.",
  },
  {
    icon: Zap,
    title: "Ready in under 2 minutes",
    description:
      "From download to your first AI conversation in less time than it takes to make a coffee. Seriously.",
  },
  {
    icon: MessageSquare,
    title: "Talk like a human",
    description:
      "Ask your assistant to draft emails, summarize documents, brainstorm ideas, or crunch numbers. You pick the name, the personality, and the look. No special syntax — just plain English.",
  },
  {
    icon: ShieldCheck,
    title: "Private by default",
    description:
      "Your data stays on your machine. MiniClaw runs locally, so your conversations, files, and business info never leave your computer.",
  },
  {
    icon: RefreshCw,
    title: "Automatic updates",
    description:
      "MiniClaw keeps itself up to date. New models, new features, zero effort from you. Just like your phone apps, but smarter.",
  },
  {
    icon: Wifi,
    title: "Works offline too",
    description:
      "Lost your internet? MiniClaw still works. Core features run entirely on your hardware so you're never left stranded.",
  },
]

export function Features() {
  return (
    <section id="features" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Features
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Built for real people,{" "}
            <span className="text-muted-foreground">not engineers.</span>
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Everything you need from an AI assistant, without the learning curve
            that usually comes with it.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border/40 bg-card p-8 transition-all hover:border-primary/20 hover:bg-card/80"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
