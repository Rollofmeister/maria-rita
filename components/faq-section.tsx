import { ChevronDown } from "lucide-react"
import { faqs } from "@/lib/faq-data"

export function FAQSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            FAQ
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
            Perguntas frequentes
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-border bg-card overflow-hidden"
            >
              <summary className="faq-summary flex cursor-pointer items-center justify-between p-5 text-left lg:p-6">
                <span className="text-sm lg:text-base font-medium text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                />
              </summary>
              <div className="px-5 pb-5 lg:px-6 lg:pb-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
