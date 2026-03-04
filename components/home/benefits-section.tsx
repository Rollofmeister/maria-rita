import { Heart, Cpu, Sofa, Sparkles } from "lucide-react"

const benefits = [
  {
    icon: Heart,
    title: "Atendimento humanizado",
    description:
      "Cada paciente é único. Dedicamos tempo para ouvir suas necessidades e criar um plano de tratamento personalizado.",
  },
  {
    icon: Cpu,
    title: "Equipamentos modernos",
    description:
      "Utilizamos tecnologia de ponta para diagnósticos precisos e tratamentos mais eficazes e confortáveis.",
  },
  {
    icon: Sofa,
    title: "Ambiente confortável",
    description:
      "Nosso consultório foi projetado para proporcionar uma experiência tranquila e acolhedora em cada visita.",
  },
  {
    icon: Sparkles,
    title: "Tratamentos personalizados",
    description:
      "Desenvolvemos planos de tratamento individuais, respeitando as particularidades e objetivos de cada paciente.",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Diferenciais
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
            Por que escolher nossa clínica
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group flex gap-5 p-6 lg:p-8 rounded-xl border border-border bg-card hover:shadow-md hover:border-primary/30 transition-all"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 shrink-0 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
