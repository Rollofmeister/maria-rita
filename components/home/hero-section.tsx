import Image from "next/image"
import { ArrowRight, Phone, Clock3, ShieldCheck } from "lucide-react"
import { TrackedExternalLink } from "@/components/tracked-external-link"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-background pt-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="animate-fade-in-up">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                CRO/PR 40.050
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Avaliação odontológica em Campo Mourão com plano claro para o seu tratamento.
              </h1>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg animate-fade-in-up animation-delay-200">
              Atendimento com horário marcado em Campo Mourão para prevenção, limpeza,
              clareamento e restaurações. Você entende os próximos passos antes de iniciar
              qualquer procedimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
              <TrackedExternalLink
                href={buildWhatsAppUrl("avaliacao", "home_hero_principal")}
                eventName="whatsapp_click"
                eventData={{ source: "home_hero_principal", intent: "avaliacao" }}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-teal-dark transition-colors"
              >
                <Phone className="h-4 w-4" />
                Agendar avaliação pelo WhatsApp
              </TrackedExternalLink>
              <a
                href="/tratamentos"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              >
                Conheça os tratamentos
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-muted-foreground animate-fade-in-up animation-delay-600">
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-primary" />
                Retorno no WhatsApp em horário comercial
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-primary" />
                Atendimento com horário marcado
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                CRO/PR 40.050
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in-up animation-delay-200">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/hero-blue.webp"
                alt="Dra. Maria Rita Gasparello - Dentista em Campo Mourão"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating credential card */}
            <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-card rounded-xl p-4 shadow-lg border border-border animate-fade-in-up animation-delay-600">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10">
                  <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">Cirurgiã-Dentista</p>
                  <p className="text-xs text-muted-foreground">CRO/PR 40.050</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
