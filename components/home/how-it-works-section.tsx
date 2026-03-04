import { MessageCircle, ClipboardCheck, FileText, UserCheck } from "lucide-react"

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Contato pelo WhatsApp",
    description: "Entre em contato pelo nosso WhatsApp para agendar sua primeira consulta de forma rápida e prática.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Avaliação odontológica completa",
    description: "Realizamos uma avaliação detalhada da sua saúde bucal utilizando equipamentos modernos e precisos.",
  },
  {
    icon: FileText,
    step: "03",
    title: "Plano de tratamento personalizado",
    description: "Desenvolvemos um plano de tratamento exclusivo, adequado às suas necessidades e objetivos.",
  },
  {
    icon: UserCheck,
    step: "04",
    title: "Acompanhamento profissional",
    description: "Acompanhamos sua evolução em cada etapa, garantindo resultados duradouros e sua total satisfação.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Como funciona
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
            Sua jornada para um sorriso saudável
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((s) => (
            <div key={s.step} className="relative flex flex-col items-center text-center gap-4 p-6">
              <span className="text-5xl font-serif font-bold text-primary/15">
                {s.step}
              </span>
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary text-primary-foreground -mt-4">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
