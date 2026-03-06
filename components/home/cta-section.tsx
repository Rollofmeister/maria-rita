import { Phone } from "lucide-react"
import { TrackedExternalLink } from "@/components/tracked-external-link"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

export function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-foreground">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-background text-balance">
          Pronto para começar seu tratamento com segurança?
        </h2>
        <p className="mt-4 text-background/70 max-w-lg mx-auto leading-relaxed">
          Fale no WhatsApp, receba orientação inicial e encontre o melhor horário para sua avaliação.
        </p>
        <TrackedExternalLink
          href={buildWhatsAppUrl("avaliacao", "home_cta_final")}
          eventName="whatsapp_click"
          eventData={{ source: "home_cta_final", intent: "avaliacao" }}
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-teal-light transition-colors"
        >
          <Phone className="h-5 w-5" />
          Agendar avaliação pelo WhatsApp
        </TrackedExternalLink>
      </div>
    </section>
  )
}
