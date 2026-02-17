import Image from "next/image"

const testimonials = [
  {
    stat: "14 hrs/week",
    statLabel: "saved on admin",
    quote:
      "I was spending two hours every morning on supplier emails, reorders, and invoices. My AI handles all of it now. I got my mornings back.",
    name: "Maria Gonzalez",
    role: "Bakery Owner, Portland",
    image: "/images/avatar-1.png",
  },
  {
    stat: "3× faster",
    statLabel: "bid turnaround",
    quote:
      "I run 600 acres by myself. My AI pulls weather forecasts, preps equipment maintenance reminders, and drafts bids for me. I used to spend a full day on bids. Now it's two hours.",
    name: "Tom Bridger",
    role: "Cattle Rancher, Montana",
    image: "/images/avatar-2.png",
  },
  {
    stat: "+40%",
    statLabel: "client capacity",
    quote:
      "I plugged it in and it worked. My AI handles intake forms, first-draft proposals, and follow-up emails. I took on 8 new clients last month without hiring anyone.",
    name: "Priya Sharma",
    role: "Marketing Consultant, Austin",
    image: "/images/avatar-3.png",
  },
]

export function Testimonials() {
  return (
    <section className="border-y border-border/40 bg-card/30 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Testimonials
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Early access users are already using MiniClaw.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-border/40 bg-card p-8"
            >
              {/* Stat callout */}
              <div className="mb-6 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-primary">{testimonial.stat}</span>
                <span className="text-sm text-muted-foreground">{testimonial.statLabel}</span>
              </div>
              <blockquote className="flex-1 text-pretty leading-relaxed text-muted-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-border/40 pt-6">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={44}
                  height={44}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
