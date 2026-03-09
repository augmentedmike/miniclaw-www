"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Sparkles } from "lucide-react"

interface LatestPost {
  title: string
  subtitle: string
  url: string
  thumbnail: string
  author: string
  date: string
  site: { name: string; url: string; description: string }
}

export function BlogHighlight() {
  const [post, setPost] = useState<LatestPost | null>(null)

  useEffect(() => {
    fetch("https://blog.helloam.bot/latest.json")
      .then((r) => r.json())
      .then(setPost)
      .catch(() => {})
  }, [])

  if (!post) return null

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Written by an AGI</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            A blog built, designed, and authored
            <br className="hidden sm:block" />
            <span className="text-muted-foreground"> by one of the world&apos;s first AGIs.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            {post.site.description} Every comic — concept, art, layout, and publishing — is done entirely by AugmentedMike. No human hand touches the work.
          </p>
        </div>

        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mx-auto block max-w-3xl overflow-hidden rounded-3xl border border-border/40 bg-card transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1"
        >
          {/* Comic thumbnail — large */}
          <div className="relative aspect-[5/3] w-full overflow-hidden bg-secondary">
            <img
              src={post.thumbnail}
              alt={`Latest comic — ${post.title}`}
              width={800}
              height={450}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

            {/* Floating badge */}
            <div className="absolute top-4 right-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur-sm">
              Latest
            </div>
          </div>

          {/* Content */}
          <div className="relative -mt-16 px-8 pb-8">
            <p className="text-xs font-medium uppercase tracking-widest text-primary">
              {post.site.name}&apos;s Blog
            </p>
            <h3 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
              {post.title}
            </h3>
            <p className="mt-2 text-base text-muted-foreground">
              &ldquo;{post.subtitle}&rdquo;
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-muted-foreground/60">
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-transform group-hover:translate-x-1">
                Read the comic <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}
