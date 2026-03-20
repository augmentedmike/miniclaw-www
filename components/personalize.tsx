"use client"

import { useState } from "react"
import Image from "next/image"
import { UserPlus, X } from "lucide-react"

const ALL_AGENTS = [
  { name: "Atlas",   file: "atlas.png"   },
  { name: "Ava",     file: "ava.png"     },
  { name: "Erik",    file: "erik.png"    },
  { name: "Kai",     file: "kai.png"     },
  { name: "Luna",    file: "luna.png"    },
  { name: "Marco",   file: "marco.png"   },
  { name: "Mei",     file: "mei.png"     },
  { name: "Nova",    file: "nova.png"    },
  { name: "Sierra",  file: "sierra.png"  },
  { name: "Zara",    file: "zara.png"    },
]

// Shuffle once at module load so order is random but stable per page visit
function shuffled<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const agents = shuffled(ALL_AGENTS)
const initialIndex = Math.floor(Math.random() * agents.length)

export function Personalize() {
  const [selected, setSelected] = useState(initialIndex)
  const [pickerOpen, setPickerOpen] = useState(false)
  const agent = agents[selected]

  return (
    <section id="customize" aria-label="Customize Your AI" className="relative overflow-hidden bg-[#07070d] px-6 py-24 md:py-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[480px] w-[480px] rounded-full bg-primary/8 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-xl text-center">
        {/* Header */}
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Your Assistant
        </p>
        <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-white md:text-5xl">
          Introducing your AI.
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-white/50">
          Pick a pre-configured persona or upload your own photo and name. Every
          agent does everything — this is just about who shows up for you.
        </p>

        {/* Featured agent */}
        <div className="mt-12 flex flex-col items-center gap-6">
          <button
            className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-2xl shadow-black/60 transition-transform hover:scale-[1.015] focus:outline-none"
            style={{ width: 260, height: 340 }}
            onClick={() => setPickerOpen(!pickerOpen)}
            aria-label="Click to choose your agent"
          >
            <Image
              src={`/images/avatars/${agent.file}`}
              alt={agent.name}
              fill
              className="object-cover transition-opacity duration-300"
              priority
            />
            {/* Name overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/50 to-transparent px-5 pb-5 pt-16">
              <p className="text-2xl font-bold text-white">{agent.name}</p>
            </div>
            {/* Click hint */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
              <span className="rounded-full bg-black/60 px-4 py-2 text-xs font-semibold tracking-wide text-white backdrop-blur-sm">
                {pickerOpen ? "Close" : "Click to change"}
              </span>
            </div>
          </button>


        </div>

        <p className="mt-10 text-sm text-white/20">
          All agents run locally on your machine. No cloud. No shared accounts.
        </p>
      </div>

      {/* Agent picker modal */}
      {pickerOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6 backdrop-blur-sm"
          onClick={() => setPickerOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-[#0f0f1a] p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPickerOpen(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-white/40 transition hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            <p className="mb-1 text-sm font-medium uppercase tracking-widest text-primary">Choose your agent</p>
            <p className="mb-6 text-xs text-white/40">Pick one, or bring your own.</p>

            <div className="grid grid-cols-4 gap-4 sm:grid-cols-5">
              {agents.map((a, i) => (
                <button
                  key={a.name}
                  onClick={() => { setSelected(i); setPickerOpen(false) }}
                  className={`group relative overflow-hidden rounded-2xl transition-all duration-200 hover:scale-105 ${
                    selected === i ? "ring-2 ring-white ring-offset-2 ring-offset-[#0f0f1a]" : "opacity-70 hover:opacity-100"
                  }`}
                  style={{ aspectRatio: "3/4" }}
                >
                  <Image src={`/images/avatars/${a.file}`} alt={a.name} fill className="object-cover" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-2 pb-2 pt-8">
                    <p className="text-center text-xs font-semibold text-white">{a.name}</p>
                  </div>
                </button>
              ))}
              <button
                onClick={() => setPickerOpen(false)}
                className="group flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/20 opacity-60 transition-all hover:opacity-100 hover:scale-105 hover:border-white/50"
                style={{ aspectRatio: "3/4" }}
              >
                <UserPlus className="h-6 w-6 text-white/40 group-hover:text-white/80" />
                <span className="mt-2 text-xs text-white/40 group-hover:text-white/80">Custom</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
