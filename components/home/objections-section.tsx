import { CheckCircle2, Clock3, CreditCard, Shield } from "lucide-react"
import { TrackedExternalLink } from "@/components/tracked-external-link"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

const objections = [
  {
    icon: Shield,
    question: "Tenho receio de sentir dor",
    answer:
      "Cada atendimento segue avaliação individual e técnicas atuais para reduzir desconforto, com foco em segurança e tranquilidade durante o procedimento.",
  },
  {
    icon: Clock3,
    question: "Não sei quanto tempo vai levar",
    answer:
      "No primeiro atendimento você recebe um plano claro com etapas, prioridades e previsão de acompanhamento para organizar sua rotina.",
  },
  {
    icon: CreditCard,
    question: "Quais formas de pagamento aceitas?",
    answer:
      "Você pode pagar por PIX, cartões e dinheiro. Em tratamentos extensos, são apresentadas opções de parcelamento conforme o plano.",
  },
]

export function ObjectionsSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Sem dúvidas
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
              Respostas rápidas para decidir com segurança
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl">
              Se você está adiando sua consulta por medo, tempo ou custo, comece por uma avaliação. Você recebe orientação clara antes de qualquer procedimento.
            </p>
            <div className="mt-8 flex items-start gap-3 rounded-xl border border-border bg-secondary p-4">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-foreground">
                Atendimento no WhatsApp em horário comercial. Envie seu nome e melhor período para retorno.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {objections.map((item) => (
              <div
                key={item.question}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-primary/10">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {item.question}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
            <TrackedExternalLink
              href={buildWhatsAppUrl("avaliacao", "home_objecoes")}
              eventName="whatsapp_click"
              eventData={{ source: "home_objections", intent: "avaliacao" }}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-teal-dark transition-colors"
            >
              Tirar dúvidas e agendar avaliação
            </TrackedExternalLink>
          </div>
        </div>
      </div>
    </section>
  )
}
