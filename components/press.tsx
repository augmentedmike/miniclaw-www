import { ExternalLink } from "lucide-react"

const coverage = [
  {
    outlet: "CNBC",
    quote:
      "Meet the AI agent generating buzz globally — from Silicon Valley to Beijing, OpenClaw has become one of the most talked-about tools in artificial intelligence this year.",
    url: "https://www.cnbc.com/2026/02/02/openclaw-open-source-ai-agent-rise-controversy-clawdbot-moltbot-moltbook.html",
  },
  {
    outlet: "Tom's Guide",
    quote:
      "OpenClaw is the viral AI assistant that lives on your device. It connects to Telegram, WhatsApp, and other platforms to automate tasks and act as your personal AI agent.",
    url: "https://www.tomsguide.com/ai/openclaw-is-the-viral-ai-assistant-that-lives-on-your-device-what-you-need-to-know",
  },
  {
    outlet: "MacStories",
    quote:
      "Clawdbot showed me what the future of personal AI assistants looks like. After a few weeks, this is the first time I've felt like I'm living in the future since the launch of ChatGPT.",
    url: "https://www.macstories.net/stories/clawdbot-showed-me-what-the-future-of-personal-ai-assistants-looks-like/",
  },
  {
    outlet: "Medium",
    quote:
      "I tested Clawdbot: the most powerful AI assistant you have ever seen — and it's free. It's like having a smart coworker at a desk with a keyboard and mouse.",
    url: "https://medium.com/ai-software-engineer/i-tested-clawdbot-the-most-powerful-ai-assistant-you-have-ever-seen-and-its-free-b5b803771637",
  },
  {
    outlet: "Nature",
    quote:
      "OpenClaw AI chatbots are running amok — these scientists are listening in. The open-source AI agent has captured the attention of researchers worldwide.",
    url: "https://www.nature.com/articles/d41586-026-00370-w",
  },
  {
    outlet: "Fortune",
    quote:
      "OpenClaw has emerged as one of the most talked-about tools in the AI space, with over 80,000 GitHub stars and adoption accelerating across the globe.",
    url: "https://fortune.com/2026/02/12/openclaw-ai-agents-security-risks-beware/",
  },
]

export function Press() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            In The News
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            The world is talking about{" "}
            <span className="text-muted-foreground">OpenClaw.</span>
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            MiniClaw makes it dead simple to run your own OpenClaw assistant.
            Here&apos;s what the press is saying about the technology behind it.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coverage.map((item) => (
            <a
              key={item.outlet}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-border/40 bg-card p-8 transition-colors hover:border-primary/40"
            >
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                {item.outlet}
                <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
              </p>
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-muted-foreground">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
