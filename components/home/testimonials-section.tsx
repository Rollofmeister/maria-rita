import { Star } from "lucide-react"

const testimonials = [
  {
    text: "Excelente atendimento e muita atenção aos detalhes. Recomendo para quem busca um dentista confiável.",
    author: "Mariana S.",
    role: "paciente",
  },
  {
    text: "Sempre tive medo de dentista, mas a Dra. Maria Rita me deixou muito tranquila. O consultório é lindo e acolhedor.",
    author: "Fernanda L.",
    role: "paciente",
  },
  {
    text: "Fiz o clareamento dental e o resultado superou minhas expectativas. Profissionalismo e competência do início ao fim.",
    author: "Carlos M.",
    role: "paciente",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Depoimentos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
            O que nossos pacientes dizem
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="flex flex-col p-6 lg:p-8 rounded-xl border border-border bg-card"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <blockquote className="text-sm text-foreground leading-relaxed flex-1">
                {`"${testimonial.text}"`}
              </blockquote>
              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-sm font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
