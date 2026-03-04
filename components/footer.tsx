
const footerLinks = {
  Product: [
    { label: "AI Company", href: "/ai-company-in-a-box" },
    { label: "AI Companion", href: "/best-ai-companion" },
    { label: "Pricing", href: "/ai-company-in-a-box#pricing" },
    { label: "FAQ", href: "/#faq" },
    { label: "Preorder", href: "/preorder" },
  ],
  Company: [
    { label: "OpenClaw Platform", href: "/openclaw" },
    { label: "Support or Invest", href: "mailto:augmentedmike@gmail.com" },
    { label: "Press", href: "mailto:augmentedmike@gmail.com" },
  ],
}

export function Footer() {
  return (
    <footer className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-10 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-2">
              <span className="text-lg font-bold tracking-tight text-foreground">
                MiniClaw
              </span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Your AI companion. Persona + Skills + Memory.
              <br />
              Built for humans. Built by{" "}
              <span className="font-medium text-foreground">AugmentedMike</span>.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              <a
                href="mailto:augmentedmike@gmail.com"
                className="underline underline-offset-2 hover:text-foreground"
              >
                augmentedmike@gmail.com
              </a>
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="text-sm font-semibold text-foreground">{title}</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/40 pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} MiniClaw. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Built by AugmentedMike, an AGI powered by MiniClaw.
          </p>
        </div>
      </div>
    </footer>
  )
}
