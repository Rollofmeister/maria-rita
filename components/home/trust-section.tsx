import { Award, Users, Clock, Shield } from "lucide-react"

const stats = [
  {
    icon: Award,
    label: "CRO/PR 40.050",
    description: "Registro profissional",
  },
  {
    icon: Clock,
    label: "Plano por etapas",
    description: "Você sabe o que vem agora",
  },
  {
    icon: Users,
    label: "Atendimento humanizado",
    description: "Escuta ativa em cada consulta",
  },
  {
    icon: Shield,
    label: "Biossegurança rigorosa",
    description: "Protocolos clínicos atualizados",
  },
]

export function TrustSection() {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-center text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
          Atendimento odontológico em Campo Mourão focado em prevenção, conforto e resultados duradouros.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center gap-3 p-6 rounded-xl bg-card shadow-sm border border-border"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xl font-bold text-foreground">{stat.label}</span>
              <span className="text-sm text-muted-foreground">{stat.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
