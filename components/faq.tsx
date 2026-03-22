"use client"

import { useTranslations } from "next-intl"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqKeys = [
  { q: 'q1', a: 'a1' },
  { q: 'q2', a: 'a2' },
  { q: 'q3', a: 'a3' },
  { q: 'q4', a: 'a4' },
  { q: 'q5', a: 'a5' },
  { q: 'q6', a: 'a6' },
  { q: 'q7', a: 'a7' },
  { q: 'q8', a: 'a8' },
  { q: 'q9', a: 'a9' },
  { q: 'q10', a: 'a10' },
  { q: 'q11', a: 'a11' },
  { q: 'q12', a: 'a12' },
]

export function FAQ() {
  const t = useTranslations('faq')

  return (
    <section id="faq" aria-label="Frequently Asked Questions" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            {t('label')}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {t('heading')}
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12">
          {faqKeys.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-border/40"
            >
              <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
                {t(faq.q)}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {t(faq.a)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
