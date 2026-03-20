export function LogosBar() {
  const stats = [
    { value: "12,000+", label: "downloads this month" },
    { value: "4.9", label: "average rating" },
    { value: "2 min", label: "average setup time" },
    { value: "0", label: "lines of code needed" },
  ]

  return (
    <section className="border-y border-border/40 bg-card/50">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4 md:py-16">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center text-center">
            <span className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {stat.value}
            </span>
            <span className="mt-1 text-sm text-muted-foreground">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
