import {
  Kanban,
  Paintbrush,
  Mail,
  Brain,
  BookOpen,
  FileText,
  Users,
  Mic,
  Newspaper,
  Shield,
  StickyNote,
  ListTodo,
  Layers,
  Cpu,
} from "lucide-react"

const plugins = [
  {
    icon: Kanban,
    name: "mc-board",
    tagline: "Kanban Brain",
    description:
      "OpenClaw has no task management — agents forget what they were doing. mc-board adds a state-machine kanban with enforced gates: research → implementation → review → shipped. Nothing skips a step.",
  },
  {
    icon: Paintbrush,
    name: "mc-designer",
    tagline: "Visual Studio",
    description:
      "Stock agents can't create images. mc-designer adds layered image generation, compositing, and chroma-key transparency via Gemini — so your agent can design personas, thumbnails, and graphics from a conversation.",
  },
  {
    icon: Mail,
    name: "mc-email",
    tagline: "Gmail Integration",
    description:
      "OpenClaw has no email access. mc-email connects Gmail via OAuth2 — read, triage, archive, draft, and send. Inbox zero is now a task your agent handles, not you.",
  },
  {
    icon: Brain,
    name: "mc-kb",
    tagline: "Knowledge Base",
    description:
      "Agents in vanilla OpenClaw forget everything between sessions. mc-kb adds a SQLite + vector long-term knowledge base — semantic and keyword search over errors, guides, and workflows so the agent actually learns.",
  },
  {
    icon: Newspaper,
    name: "mc-substack",
    tagline: "Substack Publisher",
    description:
      "No native publishing in OpenClaw. mc-substack lets your agent draft, schedule, attach images, and publish posts — including a bilingual EN/ES workflow. Content ships while you sleep.",
  },
  {
    icon: Mic,
    name: "mc-voice",
    tagline: "Voice Mirroring",
    description:
      "OpenClaw writes in its own voice. mc-voice captures how you actually write — vocabulary, tone, sentence patterns — across Telegram and inbox. Over time, the agent writes more like you.",
  },
  {
    icon: Users,
    name: "mc-rolodex",
    tagline: "Contact Browser",
    description:
      "No contact management in stock OpenClaw. mc-rolodex is a fast, searchable store — find anyone by name, email, phone, domain, or tag. Built for agents doing outreach or scheduling.",
  },
  {
    icon: FileText,
    name: "mc-docs",
    tagline: "Document Authoring",
    description:
      "Agents produce work but lose it when sessions end. mc-docs adds versioned, linked document creation — living specs, runbooks, and guides that persist and stay connected to the work that produced them.",
  },
  {
    icon: StickyNote,
    name: "mc-memo",
    tagline: "Working Memory",
    description:
      "Agents re-attempt the same failed approaches because they can't remember what already failed. mc-memo adds a per-task append-only scratchpad that prevents repeating dead ends mid-run.",
  },
  {
    icon: ListTodo,
    name: "mc-queue",
    tagline: "Queue Triage",
    description:
      "OpenClaw does work inline in chat — unstructured and unlogged. mc-queue forces all incoming messages to triage as board cards, then executes them in order. Auditable, logged, prioritized.",
  },
  {
    icon: Shield,
    name: "mc-trust",
    tagline: "Agent Auth",
    description:
      "OpenClaw has no agent identity — any message can claim to be from anyone. mc-trust adds Ed25519 key pairs and cryptographic handshakes so agents verify who they're talking to before acting.",
  },
  {
    icon: Layers,
    name: "mc-context",
    tagline: "Smart Context",
    description:
      "Long conversations in OpenClaw hit token limits fast. mc-context engineers the context window — time-based retention, image pruning, and memory injection — so the agent stays coherent without blowing the budget.",
  },
  {
    icon: BookOpen,
    name: "mc-jobs",
    tagline: "Role Templates",
    description:
      "Generic agents need extensive prompting to stay in role. mc-jobs lets you activate structured roles (Software Developer, Content Writer) with baked-in prompts, procedures, and review gates — no prompt engineering required.",
  },
  {
    icon: Cpu,
    name: "mc-soul",
    tagline: "Workspace Backup",
    description:
      "If you reinstall or swap hardware, your OpenClaw agent's identity is gone. mc-soul snapshots all soul files — identity, memory, personality, bond — so your agent survives any hardware change.",
  },
]

export function PluginsGrid() {
  return (
    <section id="plugins" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Features
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Everything stock OpenClaw is missing.
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Every plugin was built to solve a real gap — no email access, no task memory, no identity, no publishing. MiniClaw ships with {plugins.length} plugins that make your agent actually capable.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {plugins.map((plugin) => (
            <div
              key={plugin.name}
              className="group rounded-2xl border border-border/40 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md hover:shadow-primary/5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                  <plugin.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground/60">{plugin.name}</p>
                  <p className="text-sm font-semibold text-foreground">{plugin.tagline}</p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {plugin.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
