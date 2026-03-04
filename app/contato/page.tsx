import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { FAQSection } from "@/components/faq-section"
import { MapPin, Phone, Mail, Instagram, Clock, MessageCircle } from "lucide-react"
import { TrackedExternalLink } from "@/components/tracked-external-link"
import { buildWhatsAppUrl } from "@/lib/whatsapp"
import { faqPageSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Contato | Dra. Maria Rita Gasparello - Dentista em Campo Mourão",
  description: "Entre em contato com a Dra. Maria Rita Gasparello. Agende sua consulta odontológica em Campo Mourão pelo WhatsApp. Endereço, telefone e horários de atendimento.",
  alternates: {
    canonical: "/contato",
  },
}

const contactInfo = [
  {
    icon: MapPin,
    label: "Endereço",
    value: "Centro, Campo Mourão - PR",
    href: "https://www.google.com/maps/search/dentista+centro+campo+mourao+pr",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "(44) 99834-6194",
    href: buildWhatsAppUrl("consulta-geral", "contato_info_whatsapp"),
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@dramariagasparello.com.br",
    href: "mailto:contato@dramariagasparello.com.br",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@dramariagasparello",
    href: "https://instagram.com/dramariagasparello",
  },
]

const hours = [
  { day: "Segunda a Sexta", time: "08:00 — 18:00" },
  { day: "Sábado", time: "08:00 — 12:00" },
  { day: "Domingo", time: "Fechado" },
]

export default function ContatoPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
        />
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                Contato
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance">
                Estamos prontos para atender você
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Entre em contato pelo WhatsApp para agendar sua consulta de forma rápida e prática. 
                Respondemos em horário comercial e ajudamos você a escolher o melhor horário.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Map */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Info */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
                  Informações de contato
                </h2>
                <div className="flex flex-col gap-6">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-start gap-4 p-4 rounded-xl border border-border bg-card hover:shadow-md hover:border-primary/30 transition-all"
                    >
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 shrink-0 group-hover:bg-primary/20 transition-colors">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">
                          {info.label}
                        </p>
                        <p className="text-sm font-medium text-foreground">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Hours */}
                <div className="mt-10">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
                    <Clock className="h-5 w-5 text-primary" />
                    Horários de atendimento
                  </h3>
                  <div className="flex flex-col gap-3">
                    {hours.map((h) => (
                      <div
                        key={h.day}
                        className="flex items-center justify-between text-sm py-2 border-b border-border last:border-0"
                      >
                        <span className="text-muted-foreground">{h.day}</span>
                        <span className="font-medium text-foreground">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <TrackedExternalLink
                  href={buildWhatsAppUrl("primeira-consulta", "contato_cta_principal")}
                  eventName="whatsapp_click"
                  eventData={{ source: "contact_page", intent: "primeira-consulta" }}
                  className="mt-8 flex items-center justify-center gap-2 w-full rounded-lg bg-primary px-6 py-4 text-base font-semibold text-primary-foreground hover:bg-teal-dark transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  Agendar consulta pelo WhatsApp
                </TrackedExternalLink>
              </div>

              {/* Map */}
              <div className="flex flex-col gap-6">
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Como chegar
                </h2>
                <div className="relative aspect-square lg:aspect-[4/3] rounded-xl overflow-hidden border border-border shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14485.48!2d-52.378!3d-24.046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eff4e2f53bbfa5%3A0xee3e8c5d5a1e0c68!2sCentro%2C%20Campo%20Mour%C3%A3o%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1709577600000!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização do consultório da Dra. Maria Rita Gasparello em Campo Mourão"
                    className="absolute inset-0"
                  />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Estamos na região central de Campo Mourão, com fácil acesso e estacionamento disponível nas proximidades.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
