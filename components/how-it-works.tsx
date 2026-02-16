import { Download, MousePointerClick, Sparkles } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Download the installer",
    description:
      "Grab the installer for your Mac. It's a regular file — the same kind you'd download from any website. Nothing sketchy, nothing complicated.",
  },
  {
    number: "02",
    icon: MousePointerClick,
    title: "Double-click to install",
    description:
      "Open the file, click install, and wait about 90 seconds. MiniClaw sets up everything it needs automatically. You don't have to touch a thing.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Start talking to MiniClaw",
    description:
      "Open MiniClaw from your desktop and start asking questions, getting help with documents, drafting emails — whatever you need. It just works.",
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-y border-border/40 bg-card/30 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            How it works
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Three steps. That&apos;s the whole process.
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            We&apos;re not kidding when we say it&apos;s easy. Your
            grandma could do this.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col items-start">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute top-10 right-0 hidden h-px w-[calc(100%-2.5rem)] translate-x-1/2 bg-border/60 md:block" />
              )}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                <step.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="mt-6 font-mono text-sm text-primary">
                {step.number}
              </span>
              <h3 className="mt-2 text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
