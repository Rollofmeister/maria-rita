import { ShieldCheck, ClipboardCheck, MessageCircle } from "lucide-react"

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Registro profissional ativo",
    description: "Atendimento com responsabilidade técnica e CRO/PR 40.050 visível no site.",
  },
  {
    icon: ClipboardCheck,
    title: "Conduta clínica com clareza",
    description: "Antes de iniciar, você recebe explicação de etapas, prioridades e próximos passos.",
  },
  {
    icon: MessageCircle,
    title: "Canal direto no WhatsApp",
    description: "Contato para dúvidas e agendamento com retorno em horário comercial.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Confiança
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
            Como cuidamos da sua decisão com segurança
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {trustPoints.map((item) => (
            <div
              key={item.title}
              className="flex flex-col p-6 lg:p-8 rounded-xl border border-border bg-card"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 mb-5">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
