import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { FAQSection } from "@/components/faq-section"
import { MapPin, Phone, Mail, Instagram, Clock, MessageCircle } from "lucide-react"
import { TrackedExternalLink } from "@/components/tracked-external-link"
import { buildWhatsAppUrl } from "@/lib/whatsapp"
import { faqPageSchema, absoluteUrl, siteName, breadcrumbSchema } from "@/lib/seo"
import { clinicAddress, clinicMapEmbedUrl, clinicMapLink } from "@/lib/clinic-info"

export const metadata: Metadata = {
  title: "Contato | Dra. Maria Rita Gasparello - Dentista em Campo Mourão",
  description: "Entre em contato com a Dra. Maria Rita Gasparello. Agende sua consulta odontológica em Campo Mourão pelo WhatsApp. Endereço, telefone e horários de atendimento.",
  alternates: {
    canonical: "/contato",
  },
  openGraph: {
    title: "Contato — Dra. Maria Rita Gasparello | Dentista em Campo Mourão",
    description: "Entre em contato com a Dra. Maria Rita Gasparello. Agende sua consulta odontológica em Campo Mourão pelo WhatsApp. Endereço, telefone e horários de atendimento.",
    url: absoluteUrl("/contato"),
    siteName,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: absoluteUrl("/images/hero-blue.webp"),
        width: 1200,
        height: 630,
        alt: "Consultório Dra. Maria Rita Gasparello - Campo Mourão",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contato — Dra. Maria Rita Gasparello | Dentista em Campo Mourão",
    description: "Entre em contato com a Dra. Maria Rita Gasparello. Agende sua consulta odontológica em Campo Mourão pelo WhatsApp. Endereço, telefone e horários de atendimento.",
    images: [absoluteUrl("/images/hero-blue.webp")],
  },
}

const contactInfo = [
  {
    icon: MapPin,
    label: "Endereço",
    value: clinicAddress.full,
    href: clinicMapLink,
    isWhatsApp: false,
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "(44) 99834-6194",
    href: buildWhatsAppUrl("consulta-geral", "contato_info_whatsapp"),
    isWhatsApp: true,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@dramariarita.com",
    href: "mailto:contato@dramariarita.com",
    isWhatsApp: false,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@dra.mariaritagas",
    href: "https://instagram.com/dra.mariaritagas",
    isWhatsApp: false,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              breadcrumbSchema([
                { name: "Início", url: absoluteUrl("/") },
                { name: "Contato", url: absoluteUrl("/contato") },
              ])
            ),
          }}
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
                    info.isWhatsApp ? (
                      <TrackedExternalLink
                        key={info.label}
                        href={info.href}
                        eventName="whatsapp_click"
                        eventData={{ source: "contato_info_whatsapp", intent: "consulta-geral" }}
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
                      </TrackedExternalLink>
                    ) : (
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
                    )
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
                  href={buildWhatsAppUrl("avaliacao", "contato_cta_principal")}
                  eventName="whatsapp_click"
                  eventData={{ source: "contato_cta_principal", intent: "avaliacao" }}
                  className="mt-8 flex items-center justify-center gap-2 w-full rounded-lg bg-primary px-6 py-4 text-base font-semibold text-primary-foreground hover:bg-teal-dark transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  Agendar avaliação pelo WhatsApp
                </TrackedExternalLink>
              </div>

              {/* Map */}
              <div className="flex flex-col gap-6">
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Como chegar
                </h2>
                <div className="relative aspect-square lg:aspect-[4/3] rounded-xl overflow-hidden border border-border shadow-sm">
                  <iframe
                    title="Mapa do consultório"
                    src={clinicMapEmbedUrl}
                    className="absolute inset-0 h-full w-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {clinicAddress.building}. {clinicAddress.street} {clinicAddress.complement}.
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
