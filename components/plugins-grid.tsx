"use client"

import { useState } from "react"
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
  Moon,
  MonitorSmartphone,
  MessageCircle,
  PenTool,
  Play,
  Search,
  CreditCard,
  Wallet,
  Calendar,
  HardDrive,
  Key,
  GitPullRequest,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Category = "memory" | "comms" | "content" | "commerce" | "ops" | "all"

const TABS: { id: Category; label: string }[] = [
  { id: "all",      label: "All"      },
  { id: "memory",   label: "Memory"   },
  { id: "comms",    label: "Comms"    },
  { id: "content",  label: "Content"  },
  { id: "commerce", label: "Commerce" },
  { id: "ops",      label: "Ops"      },
]

interface Plugin {
  icon: LucideIcon
  name: string
  tagline: string
  description: string
  categories: Category[]
}

const plugins: Plugin[] = [
  // ── Memory ──────────────────────────────────────────────
  {
    icon: Kanban,
    name: "mc-board",
    tagline: "Kanban Brain",
    description:
      "OpenClaw has no task management — agents forget what they were doing. mc-board adds a state-machine kanban with enforced gates: research → implementation → review → shipped. Nothing skips a step.",
    categories: ["memory"],
  },
  {
    icon: Brain,
    name: "mc-kb",
    tagline: "Knowledge Base",
    description:
      "Agents in vanilla OpenClaw forget everything between sessions. mc-kb adds a SQLite + vector long-term knowledge base — semantic and keyword search over errors, guides, and workflows so the agent actually learns.",
    categories: ["memory"],
  },
  {
    icon: Layers,
    name: "mc-context",
    tagline: "Smart Context",
    description:
      "Long conversations in OpenClaw hit token limits fast. mc-context engineers the context window — time-based retention, image pruning, and memory injection — so the agent stays coherent without blowing the budget.",
    categories: ["memory"],
  },
  {
    icon: StickyNote,
    name: "mc-memo",
    tagline: "Working Memory",
    description:
      "Agents re-attempt the same failed approaches because they can't remember what already failed. mc-memo adds a per-task append-only scratchpad that prevents repeating dead ends mid-run.",
    categories: ["memory"],
  },
  {
    icon: Moon,
    name: "mc-reflection",
    tagline: "Nightly Self-Review",
    description:
      "OpenClaw agents never look back at their own work. mc-reflection runs a nightly introspection loop — reviewing board state, KB entries, and session transcripts to extract lessons and create action items.",
    categories: ["memory"],
  },
  {
    icon: Cpu,
    name: "mc-soul",
    tagline: "Identity Backup",
    description:
      "If you reinstall or swap hardware, your OpenClaw agent's identity is gone. mc-soul snapshots all soul files — identity, memory, personality, bond — so your agent survives any hardware change.",
    categories: ["memory"],
  },

  // ── Comms ───────────────────────────────────────────────
  {
    icon: Mail,
    name: "mc-email",
    tagline: "Gmail Integration",
    description:
      "OpenClaw has no email access. mc-email connects Gmail via OAuth2 — read, triage, archive, draft, and send. Inbox zero is now a task your agent handles, not you.",
    categories: ["comms"],
  },
  {
    icon: Mic,
    name: "mc-voice",
    tagline: "Voice Mirroring",
    description:
      "OpenClaw writes in its own voice. mc-voice captures how you actually write — vocabulary, tone, sentence patterns — across Telegram and inbox. Over time, the agent writes more like you.",
    categories: ["comms"],
  },
  {
    icon: Users,
    name: "mc-rolodex",
    tagline: "Contact Browser",
    description:
      "No contact management in stock OpenClaw. mc-rolodex is a fast, searchable store — find anyone by name, email, phone, domain, or tag. Built for agents doing outreach or scheduling.",
    categories: ["comms"],
  },
  {
    icon: MonitorSmartphone,
    name: "mc-human",
    tagline: "Human Handoff",
    description:
      "When an agent hits a CAPTCHA or login wall, it's stuck. mc-human delivers an interactive browser session via noVNC and pings you on Telegram — you solve the blocker, the agent continues.",
    categories: ["comms"],
  },
  {
    icon: ListTodo,
    name: "mc-queue",
    tagline: "Message Router",
    description:
      "OpenClaw processes messages inline — unstructured and unlogged. mc-queue triages every incoming message with Haiku, routes it as a board card, and executes in priority order across all channels.",
    categories: ["comms"],
  },
  {
    icon: MessageCircle,
    name: "mc-reddit",
    tagline: "Reddit Outreach",
    description:
      "No social media integration in OpenClaw. mc-reddit lets your agent post, comment, and manage community outreach on Reddit — authenticated through the vault.",
    categories: ["comms"],
  },

  // ── Content ─────────────────────────────────────────────
  {
    icon: Paintbrush,
    name: "mc-designer",
    tagline: "Visual Studio",
    description:
      "Stock agents can't create images. mc-designer adds layered image generation, compositing, and chroma-key transparency via Gemini — so your agent can design personas, thumbnails, and graphics from a conversation.",
    categories: ["content"],
  },
  {
    icon: PenTool,
    name: "mc-blog",
    tagline: "Agent Journal",
    description:
      "OpenClaw has no publishing pipeline. mc-blog is a first-person journal engine — the agent writes from its own perspective with post seeds, arcs, and tags, grounded by its soul, memory, and voice.",
    categories: ["content"],
  },
  {
    icon: Newspaper,
    name: "mc-substack",
    tagline: "Substack Publisher",
    description:
      "No native publishing in OpenClaw. mc-substack lets your agent draft, schedule, attach images, and publish posts — including a bilingual EN/ES workflow. Content ships while you sleep.",
    categories: ["content"],
  },
  {
    icon: Play,
    name: "mc-youtube",
    tagline: "YouTube Analyst",
    description:
      "OpenClaw can't watch videos. mc-youtube extracts transcripts, identifies key moments with timestamps, and captures screenshots — turning any YouTube video into searchable, actionable context.",
    categories: ["content"],
  },
  {
    icon: Search,
    name: "mc-seo",
    tagline: "SEO Automation",
    description:
      "No SEO tooling in OpenClaw. mc-seo crawls your site with scoring, tracks keyword rankings, submits sitemaps via IndexNow and Google Search Console, and monitors backlinks — all from the CLI.",
    categories: ["content"],
  },
  {
    icon: FileText,
    name: "mc-docs",
    tagline: "Document Authoring",
    description:
      "Agents produce work but lose it when sessions end. mc-docs adds versioned, linked document creation — living specs, runbooks, and guides that persist and stay connected to the work that produced them.",
    categories: ["content"],
  },

  // ── Commerce ────────────────────────────────────────────
  {
    icon: CreditCard,
    name: "mc-stripe",
    tagline: "Stripe Payments",
    description:
      "OpenClaw can't process payments. mc-stripe adds charge, refund, and customer management via Stripe — so your agent can handle transactions, look up payment status, and manage customers directly.",
    categories: ["commerce"],
  },
  {
    icon: Wallet,
    name: "mc-square",
    tagline: "Square Payments",
    description:
      "Need Square instead of Stripe? mc-square adds charge, refund, payment links, and listing — zero dependencies, raw fetch. Supports sandbox and live environments with configurable currency.",
    categories: ["commerce"],
  },
  {
    icon: Calendar,
    name: "mc-booking",
    tagline: "Appointment Scheduling",
    description:
      "No scheduling in OpenClaw. mc-booking adds bookable appointment slots backed by Turso cloud DB — with payment integration, an embeddable widget, and configurable availability windows.",
    categories: ["commerce"],
  },

  // ── Ops ─────────────────────────────────────────────────
  {
    icon: HardDrive,
    name: "mc-backup",
    tagline: "State Backup",
    description:
      "One bad rm and your agent's state is gone. mc-backup runs automated daily backups with tgz compression and tiered retention — recent dailies roll into monthly, then yearly archives.",
    categories: ["ops"],
  },
  {
    icon: BookOpen,
    name: "mc-jobs",
    tagline: "Role Templates",
    description:
      "Generic agents need extensive prompting to stay in role. mc-jobs lets you activate structured roles (Software Developer, Content Writer) with baked-in prompts, procedures, and review gates — no prompt engineering required.",
    categories: ["ops"],
  },
  {
    icon: Key,
    name: "mc-authenticator",
    tagline: "2FA Codes",
    description:
      "Agents can't log into 2FA-protected services. mc-authenticator generates Google Authenticator–compatible TOTP codes on demand — so your agent handles logins autonomously without asking you for a code.",
    categories: ["ops"],
  },
  {
    icon: Shield,
    name: "mc-trust",
    tagline: "Agent Auth",
    description:
      "OpenClaw has no agent identity — any message can claim to be from anyone. mc-trust adds Ed25519 key pairs and cryptographic handshakes so agents verify who they're talking to before acting.",
    categories: ["ops"],
  },
  {
    icon: GitPullRequest,
    name: "mc-contribute",
    tagline: "Contribution Toolkit",
    description:
      "Contributing to MiniClaw from inside MiniClaw. mc-contribute scaffolds plugins, files bugs with auto-collected diagnostics, creates branches, and submits PRs — all without leaving the agent session.",
    categories: ["ops"],
  },
]

export function PluginsGrid() {
  const [active, setActive] = useState<Category>("all")

  const visible = plugins.filter(
    (p) => active === "all" || p.categories.includes(active),
  )

  return (
    <section id="plugins" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Plugins
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Everything stock OpenClaw is missing.
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Every plugin was built to solve a real gap — no email access, no
            task memory, no identity, no publishing. MiniClaw ships with{" "}
            {plugins.length} plugins that make your agent actually capable.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                active === tab.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((plugin) => (
            <div
              key={plugin.name}
              className="group rounded-2xl border border-border/40 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md hover:shadow-primary/5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                  <plugin.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground/60">
                    {plugin.name}
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    {plugin.tagline}
                  </p>
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
