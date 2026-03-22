import Image from "next/image"
import { ArrowRight, Lock, CheckCircle, Zap } from "lucide-react"
import { useTranslations } from "next-intl"

export function KanbanSection() {
  const t = useTranslations('kanban')

  const stages = [
    {
      label: t('backlog'),
      color: "bg-zinc-500",
      description: "Ideas and requests queue here. Nothing starts until criteria are written.",
    },
    {
      label: t('inProgress'),
      color: "bg-blue-500",
      description: "Agent is actively working. Research, implementation, tests — all logged.",
    },
    {
      label: t('inReview'),
      color: "bg-yellow-500",
      description: "Work is done. Acceptance criteria are checked before anything moves forward.",
    },
    {
      label: t('shipped'),
      color: "bg-green-500",
      description: "Done. Committed. Permanent record of every decision and every change.",
    },
  ]

  const gates = [
    {
      icon: Lock,
      title: t('gate1'),
      description:
        "A ticket can't move to In Progress until Problem, Research Plan, Implementation Plan, and Acceptance Criteria are all filled in. No skipping, no rubber-stamping.",
    },
    {
      icon: Zap,
      title: t('gate2'),
      description:
        "Every 15 minutes, the dispatch loop scans the board, selects the highest-priority ready ticket, and runs an agent cycle. No one tells it to. It just does.",
    },
    {
      icon: CheckCircle,
      title: t('gate3'),
      description:
        "Every ticket gets a full audit trail: commits linked, steps logged, criteria checked. You review the result before it ships. Full autonomy with a human in the loop.",
    },
  ]

  return (
    <section id="kanban" aria-label="Kanban Task Management" className="px-6 py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            {t('label')}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {t('heading')}
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            {t('description')}
          </p>
        </div>

        {/* Main screenshot */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-border/40 shadow-2xl shadow-black/20">
          <Image
            src="/images/mc-board-screenshot.png"
            alt="MiniClaw Brain Board — kanban with Backlog, In Progress, In Review, and Shipped columns"
            width={1400}
            height={900}
            className="w-full"
            priority
          />
        </div>

        {/* Pipeline stages */}
        <div className="mt-16">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {stages.map((stage, i) => (
              <div key={stage.label} className="relative flex flex-col gap-3 rounded-xl border border-border/40 bg-card p-5">
                {i < stages.length - 1 && (
                  <ArrowRight className="absolute -right-2 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-muted-foreground/40 lg:block" />
                )}
                <div className={`h-1.5 w-10 rounded-full ${stage.color}`} />
                <p className="font-semibold text-foreground">{stage.label}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Second screenshot */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-border/40 shadow-xl shadow-black/10">
          <Image
            src="/images/board/card-detail.png"
            alt="MiniClaw board showing card detail — priority tags, acceptance criteria, agent assignment"
            width={1400}
            height={900}
            className="w-full"
          />
        </div>

        {/* Gates explanation */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {gates.map((gate) => (
            <div
              key={gate.title}
              className="rounded-2xl border border-border/40 bg-card p-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <gate.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{gate.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{gate.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
