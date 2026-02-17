"use client"

import { useState, useCallback, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// ─────────────────────────────────────────────────────────────────
// IMAGE GUIDE: 30 images needed — same character, 5 role skins each
// Naming: /public/images/persona-[id]-[role].png
// Until role skins are generated, baseImage is shown for all roles.
// Uncomment each image path once the file is in /public/images/.
// ─────────────────────────────────────────────────────────────────

type Role = "designer" | "dev" | "pm" | "hacker" | "date" | "morning"

interface Persona {
  id: string
  name: string
  tagline: string
  baseImage: string
  skins: Partial<Record<Role, string>>
}

function getSkin(p: Persona, role: Role): string {
  return p.skins[role] ?? p.baseImage
}

const personas: Persona[] = [
  {
    id: "ghost",
    name: "Ghost",
    tagline: "Under the radar. Everywhere at once.",
    baseImage: "/images/personas/persona-ghost-base.png",
    skins: {
      designer: "/images/personas/persona-ghost-designer.png",
      dev:      "/images/personas/persona-ghost-dev.png",
      pm:       "/images/personas/persona-ghost-pm.png",
      hacker:   "/images/personas/persona-ghost-hacker.png",
      date:     "/images/personas/persona-ghost-date.png",
      morning:  "/images/personas/persona-ghost-morning.png",
      group:    "/images/personas/persona-ghost-group.jpg",
    },
  },
  {
    id: "senorita-r",
    name: "Anna",
    tagline: "She'll melt you. Then ship your product.",
    baseImage: "/images/personas/persona-senorita-r-base.png",
    skins: {
      designer: "/images/personas/persona-senorita-r-designer.png",
      dev:      "/images/personas/persona-senorita-r-dev.png",
      pm:       "/images/personas/persona-senorita-r-pm.png",
      hacker:   "/images/personas/persona-senorita-r-hacker.png",
      date:     "/images/personas/persona-senorita-r-date.png",
      morning:  "/images/personas/persona-senorita-r-morning.png",
      group:    "/images/personas/persona-senorita-r-group.jpg",
    },
  },
  {
    id: "senorita",
    name: "Anna ✦",
    tagline: "She'll melt you. Then ship your product.",
    baseImage: "/images/personas/persona-senorita-base.png",
    skins: {
      designer: "/images/personas/persona-senorita-designer.png",
      dev:      "/images/personas/persona-senorita-dev.png",
      pm:       "/images/personas/persona-senorita-pm.png",
      hacker:   "/images/personas/persona-senorita-hacker.png",
      date:     "/images/personas/persona-senorita-date.png",
      morning:  "/images/personas/persona-senorita-morning.png",
      group:    "/images/personas/persona-senorita-group.jpg",
    },
  },
  {
    id: "lynx",
    name: "Lynx",
    tagline: "Always in the zone. Never misses a shot.",
    baseImage: "/images/personas/persona-lynx-base.png",
    skins: {
      designer: "/images/personas/persona-lynx-designer.png",
      dev:      "/images/personas/persona-lynx-dev.png",
      pm:       "/images/personas/persona-lynx-pm.png",
      hacker:   "/images/personas/persona-lynx-hacker.png",
      date:     "/images/personas/persona-lynx-date.png",
      morning:  "/images/personas/persona-lynx-morning.png",
      group:    "/images/personas/persona-lynx-group.jpg",
    },
  },
  {
    id: "minjae",
    name: "Minjae",
    tagline: "600 years old. Never wrong. Never forgets.",
    baseImage: "/images/personas/persona-minjae-base.png",
    skins: {
      designer: "/images/personas/persona-minjae-designer.png",
      dev:      "/images/personas/persona-minjae-dev.png",
      pm:       "/images/personas/persona-minjae-pm.png",
      hacker:   "/images/personas/persona-minjae-hacker.png",
      date:     "/images/personas/persona-minjae-date.png",
      morning:  "/images/personas/persona-minjae-morning.png",
      group:    "/images/personas/persona-minjae-group.jpg",
    },
  },
  {
    id: "kael",
    name: "Kael",
    tagline: "Remembers everything. Misses nothing. Built different.",
    baseImage: "/images/personas/persona-kael-base.png",
    skins: {
      designer: "/images/personas/persona-kael-designer.png",
      dev:      "/images/personas/persona-kael-dev.png",
      pm:       "/images/personas/persona-kael-pm.png",
      hacker:   "/images/personas/persona-kael-hacker.png",
      date:     "/images/personas/persona-kael-date.png",
      morning:  "/images/personas/persona-kael-morning.png",
      group:    "/images/personas/persona-kael-group.jpg",
    },
  },
]

const roles: { id: Role; title: string; emoji: string; description: string }[] = [
  {
    id: "designer",
    title: "Designer",
    emoji: "🎨",
    description: "Brand assets, mockups, creative direction. Delivered before the client call.",
  },
  {
    id: "dev",
    title: "Developer",
    emoji: "💻",
    description: "Writing features, reviewing PRs, shipping to production. No handholding required.",
  },
  {
    id: "pm",
    title: "Manager",
    emoji: "📋",
    description: "Sprint planning, deadline tracking, stakeholder wrangling. On time. Under budget.",
  },
  {
    id: "hacker",
    title: "Hacker",
    emoji: "🔒",
    description: "Vulnerability scans, pen tests, security hardening. The one who finds it first.",
  },
  {
    id: "date",
    title: "Date Night",
    emoji: "🥂",
    description: "Dressed to kill. Bond girl energy. The kind of company that makes the whole room look.",
  },
  {
    id: "morning",
    title: "Wakeup",
    emoji: "☀️",
    description: "Good morning. Still stunning. Your AI, first thing.",
  },
]

export function HeroPersonaCard() {
  const [teamIndex, setTeamIndex] = useState(0)
  const [activeRole, setActiveRole] = useState<Role>("designer")
  const [sliding, setSliding] = useState<"left" | "right" | null>(null)
  const autoRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [paused, setPaused] = useState(false)
  const [lightbox, setLightbox] = useState<string | null>(null)
  const [expandedRole, setExpandedRole] = useState<Role | null>(null)

  const persona = personas[teamIndex]

  const goTo = useCallback(
    (next: number) => {
      const direction = next > teamIndex ? "left" : "right"
      setSliding(direction)
      setTimeout(() => {
        setTeamIndex(next)
        setActiveRole("pm")
        setSliding(null)
      }, 200)
    },
    [teamIndex],
  )

  const prev = () => goTo((teamIndex - 1 + personas.length) % personas.length)
  const next = () => goTo((teamIndex + 1) % personas.length)

  // Auto-advance through teams
  useEffect(() => {
    if (paused) return
    autoRef.current = setTimeout(() => {
      goTo((teamIndex + 1) % personas.length)
    }, 5000)
    return () => { if (autoRef.current) clearTimeout(autoRef.current) }
  }, [teamIndex, paused, goTo])

  // ESC closes expanded role view
  useEffect(() => {
    if (!expandedRole) return
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setExpandedRole(null) }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [expandedRole])

  return (
    <>
    <div
      className="relative overflow-hidden rounded-2xl border border-border/40 bg-card shadow-2xl shadow-primary/5"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-border/40 bg-background/50 px-5 py-3">
        <div className="flex items-center gap-3">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
            Your AI
          </p>
          <div className="h-3 w-px bg-border" />
          <p className="text-xs font-semibold text-foreground">{persona.name}</p>
          <span className="text-xs text-muted-foreground/50">{persona.tagline}</span>
        </div>
        {/* Team dots */}
        <div className="flex items-center gap-2">
          {personas.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === teamIndex ? "w-6 bg-primary" : "w-2.5 bg-border hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Expanded single-role full-card view — longest dimension fills, nothing crops */}
      {expandedRole && (
        <div className="relative flex w-full items-center justify-center bg-black/10">
          <img
            src={getSkin(persona, expandedRole)}
            alt={`${persona.name} — ${roles.find(r => r.id === expandedRole)?.title}`}
            className="max-h-[70vh] max-w-full object-contain"
          />
          {/* Role pill */}
          <div className="absolute bottom-4 left-4">
            <div className="flex items-center gap-2 rounded-full border border-primary/30 bg-card/90 px-3 py-1.5 backdrop-blur-sm">
              <span>{roles.find(r => r.id === expandedRole)?.emoji}</span>
              <span className="text-xs font-semibold text-foreground">
                {roles.find(r => r.id === expandedRole)?.title}
              </span>
            </div>
          </div>
          {/* Close button */}
          <button
            onClick={() => setExpandedRole(null)}
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
          >
            ✕
          </button>
        </div>
      )}

      {/* Slide content */}
      <div
        className={`transition-opacity duration-200 ${expandedRole ? "hidden" : ""} ${sliding ? "opacity-0" : "opacity-100"}`}
      >
        {/* Group shot — full-width landscape banner */}
        {activeRole === "group" && getSkin(persona, "group") !== persona.baseImage && (
          <div className="relative w-full overflow-hidden">
            <div className="relative aspect-[21/9] w-full">
              <img
                src={getSkin(persona, "group")}
                alt={`${persona.name} — full team`}
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="flex items-center gap-2 rounded-full border border-primary/30 bg-card/90 px-3 py-1.5 backdrop-blur-sm">
                  <span>🫧</span>
                  <span className="text-xs font-semibold text-foreground">Full Team</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className={`flex flex-col gap-0 md:flex-row ${activeRole === "group" ? "hidden" : ""}`}>
          {/* Featured role image — wider panel */}
          <div className="relative w-full shrink-0 md:w-72">
            <div className="relative aspect-[3/4] w-full overflow-hidden md:aspect-auto md:h-full">
              <img
                src={getSkin(persona, activeRole)}
                alt={`${persona.name} — ${roles.find(r => r.id === activeRole)?.title}`}
                className="h-full w-full cursor-zoom-in object-cover object-top"
                onClick={() => setLightbox(getSkin(persona, activeRole))}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
              <div className="absolute inset-0 hidden bg-gradient-to-r from-transparent to-card md:block" />
              {/* Role pill */}
              <div className="absolute bottom-4 left-4">
                <div className="flex items-center gap-2 rounded-full border border-primary/30 bg-card/90 px-3 py-1.5 backdrop-blur-sm">
                  <span>{roles.find(r => r.id === activeRole)?.emoji}</span>
                  <span className="text-xs font-semibold text-foreground">
                    {roles.find(r => r.id === activeRole)?.title}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Role grid — 3×3 portrait thumbnails */}
          <div className="flex flex-1 flex-col justify-between p-5 md:p-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-primary">
                {persona.name} can wear any hat
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {roles.find(r => r.id === activeRole)?.description}
              </p>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2">
              {roles.map((r) => (
                <button
                  key={r.id}
                  onClick={() => { setActiveRole(r.id); setExpandedRole(r.id) }}
                  className={`group flex flex-col items-center gap-1 rounded-xl border p-1.5 text-center transition-all ${
                    r.id === activeRole
                      ? "border-primary/40 bg-primary/10"
                      : "border-border/40 bg-background/50 hover:border-primary/20 hover:bg-primary/5"
                  }`}
                >
                  <div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg bg-secondary">
                    <img
                      src={getSkin(persona, r.id)}
                      alt={`${persona.name} as ${r.title}`}
                      className="h-full w-full object-cover object-top"
                    />
                    {r.id === activeRole && (
                      <div className="absolute inset-0 ring-2 ring-primary rounded-lg" />
                    )}
                  </div>
                  <span className="text-sm leading-none">{r.emoji}</span>
                  <span className={`text-[10px] font-medium leading-tight ${
                    r.id === activeRole ? "text-primary" : "text-muted-foreground"
                  }`}>
                    {r.title.split(" ")[0]}
                  </span>
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-4 flex items-center justify-between pt-3 border-t border-border/40">
              <p className="text-xs text-muted-foreground/60">
                Same AI.{" "}
                <span className="text-foreground font-medium">Any role you need.</span>
              </p>
              <div className="flex gap-1">
                <button
                  onClick={prev}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={next}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Group shot — role grid below the banner */}
        {activeRole === "group" && (
          <div className="p-5 md:p-6">
            <div className="mb-3">
              <p className="text-xs font-medium uppercase tracking-widest text-primary">
                {persona.name} — every role
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                One AI. Every hat. Pick a role to zoom in.
              </p>
            </div>
            <div className="grid grid-cols-4 gap-2 sm:grid-cols-7">
              {roles.filter(r => r.id !== "group").map((r) => (
                <button
                  key={r.id}
                  onClick={() => setActiveRole(r.id)}
                  className="group flex flex-col items-center gap-1 rounded-xl border border-border/40 bg-background/50 p-1.5 text-center transition-all hover:border-primary/20 hover:bg-primary/5"
                >
                  <div
                    className="relative aspect-[2/3] w-full overflow-hidden rounded-lg bg-secondary"
                    onDoubleClick={(e) => { e.stopPropagation(); setLightbox(getSkin(persona, r.id)) }}
                  >
                    <img
                      src={getSkin(persona, r.id)}
                      alt={`${persona.name} as ${r.title}`}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <span className="text-sm leading-none">{r.emoji}</span>
                  <span className="text-[10px] font-medium leading-tight text-muted-foreground">
                    {r.title.split(" ")[0]}
                  </span>
                </button>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between pt-3 border-t border-border/40">
              <p className="text-xs text-muted-foreground/60">
                Same AI.{" "}
                <span className="text-foreground font-medium">Any role you need.</span>
              </p>
              <div className="flex gap-1">
                <button
                  onClick={prev}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={next}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>

    {/* Lightbox */}
    {lightbox && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        onClick={() => setLightbox(null)}
      >
        <img
          src={lightbox}
          alt="Full size"
          className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
        <button
          onClick={() => setLightbox(null)}
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
        >
          ✕
        </button>
      </div>
    )}
    </>
  )
}
