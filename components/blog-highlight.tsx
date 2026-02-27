"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"

interface LatestPost {
  title: string
  subtitle: string
  url: string
  thumbnail: string
  author: string
  date: string
  site: { name: string; url: string }
}

export function BlogHighlight() {
  const [post, setPost] = useState<LatestPost | null>(null)

  useEffect(() => {
    fetch("https://blog.augmentedmike.com/latest.json")
      .then((r) => r.json())
      .then(setPost)
      .catch(() => {})
  }, [])

  if (!post) return null

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-6 rounded-2xl border border-border/40 bg-card p-5 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
        >
          <img
            src={post.thumbnail}
            alt={`Latest comic — ${post.title}`}
            className="h-24 w-24 shrink-0 rounded-xl object-cover"
          />
          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium uppercase tracking-widest text-primary">
              {post.site.name}&apos;s Blog
            </p>
            <p className="mt-1 text-base font-semibold text-foreground">
              {post.title}
            </p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              &ldquo;{post.subtitle}&rdquo;
            </p>
            <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
              Read the blog <ArrowRight className="h-3 w-3" />
            </span>
          </div>
        </a>
      </div>
    </section>
  )
}
