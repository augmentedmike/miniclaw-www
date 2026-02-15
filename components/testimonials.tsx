import Image from "next/image"

const testimonials = [
  {
    quote:
      "I was genuinely shocked. I downloaded it, clicked install, and two minutes later I was using AI to draft my weekly supplier emails. No one had to explain anything to me.",
    name: "Maria Gonzalez",
    role: "Bakery Owner, Portland",
    image: "/images/avatar-1.png",
  },
  {
    quote:
      "I run 600 acres by myself most days. I don't have time to learn software. ClawDaddy just sits on my desk and helps me with invoices, weather reports, and equipment manuals. Best purchase I've made this year.",
    name: "Tom Bridger",
    role: "Cattle Rancher, Montana",
    image: "/images/avatar-2.png",
  },
  {
    quote:
      "I ordered the ClawMini option because I didn't want to deal with anything. It showed up, I plugged it in, and it worked. That's exactly what I needed — technology that stays out of my way.",
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
            People like you are already using ClawDaddy.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-border/40 bg-card p-8"
            >
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
