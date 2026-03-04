import { ArrowRight, ShieldCheck, Sparkles, Droplets, PaintBucket, HeartPulse } from "lucide-react"
import Link from "next/link"

const treatments = [
  {
    icon: ShieldCheck,
    title: "Prevenção odontológica",
    description:
      "Cuidados preventivos para manter sua saúde bucal em dia. Avaliações regulares que identificam problemas antes que se tornem graves.",
  },
  {
    icon: Droplets,
    title: "Limpeza e profilaxia",
    description:
      "Limpeza profissional completa para remover tártaro e placa bacteriana, prevenindo cáries e doenças gengivais.",
  },
  {
    icon: Sparkles,
    title: "Clareamento dental",
    description:
      "Técnicas modernas e seguras para devolver a brancura natural dos seus dentes com resultados visíveis.",
  },
  {
    icon: PaintBucket,
    title: "Restaurações dentárias",
    description:
      "Restaurações estéticas que devolvem a forma e função dos dentes, utilizando materiais de alta qualidade.",
  },
  {
    icon: HeartPulse,
    title: "Cuidados preventivos para adultos",
    description:
      "Programas de acompanhamento contínuo para adultos, focando em saúde gengival e manutenção a longo prazo.",
  },
]

export function TreatmentsPreview() {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Tratamentos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
            Cuidados completos para o seu sorriso
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Oferecemos tratamentos modernos com foco em prevenção e bem-estar, sempre com a atenção que você merece.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment) => (
            <div
              key={treatment.title}
              className="group flex flex-col p-6 lg:p-8 rounded-xl bg-card border border-border hover:shadow-md hover:border-primary/30 transition-all"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 mb-5 group-hover:bg-primary/20 transition-colors">
                <treatment.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {treatment.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {treatment.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/tratamentos"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-teal-dark transition-colors"
          >
            Ver todos os tratamentos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
