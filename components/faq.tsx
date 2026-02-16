"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Do I need to know anything about technology to use MiniClaw?",
    answer:
      "Absolutely not. If you can download a file from the internet and double-click it, you can install MiniClaw. We built it specifically for people who don't want to deal with technical setup. No terminal, no coding, no configuration. Just click and go.",
  },
  {
    question: "What can MiniClaw actually help me with?",
    answer:
      "MiniClaw can draft and edit emails, summarize long documents, help you brainstorm ideas, organize your to-do list, answer questions about almost anything, help with spreadsheets and numbers, write social media posts, and much more. Think of it as a very smart assistant sitting right on your desk.",
  },
  {
    question: "Is my data safe? Does it get sent to the cloud?",
    answer:
      "Your data stays on your machine. MiniClaw runs locally by default, which means your files, conversations, and business information never leave your computer unless you explicitly choose to use an online feature. Privacy isn't an add-on — it's the default.",
  },
  {
    question: "What's the difference between the download and the Mac Mini?",
    answer:
      "The download is our free installer that puts MiniClaw on your existing Mac. The Mac Mini option is a brand new Apple Mac Mini (M4 chip) that we ship to you with MiniClaw already installed and configured — you literally just plug it in and start using it. It's for anyone who wants zero setup whatsoever.",
  },
  {
    question: "How much does it cost to run MiniClaw?",
    answer:
      "It depends on the workload you throw at it. MiniClaw itself is free, but the AI models it connects to have usage-based costs. That said, we have customers reporting costs as low as $200 per month, and most light to medium users can expect to stay in that range. Heavy power users may see higher costs, but you're always in control of how much you use.",
  },
  {
    question: "Does MiniClaw work without internet?",
    answer:
      "Yes. Core features like writing assistance, document summarization, and general Q&A work entirely offline. Some advanced features — like web search or real-time data — need an internet connection, but you'll always have a fully functional AI assistant even when you're off the grid.",
  },
  {
    question: "How does MiniClaw update itself?",
    answer:
      "Automatically. When a new version is available and you're connected to the internet, MiniClaw will download and install the update in the background. You don't need to click anything, visit any website, or know what a version number is. It just gets better over time.",
  },
  {
    question: "Can I really customize everything about my assistant?",
    answer:
      "Yes — name, personality, visual appearance, all of it. Want a professional executive assistant named James? Done. Want a sarcastic best friend named Sasha who sends you memes between meetings? Also done. You can even give your assistant a face and visual style. It's your AI — make it whoever you want.",
  },
  {
    question: "Can I use MiniClaw for my business?",
    answer:
      "Absolutely. MiniClaw is already being used by bakery owners, farmers, consultants, contractors, therapists, real estate agents, and more. If you have work that involves writing, thinking, organizing, or communicating — MiniClaw can help.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            FAQ
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Questions? We&apos;ve got answers.
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-border/40"
            >
              <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
