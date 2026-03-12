import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ShieldCheck, Sparkles, Droplets, PaintBucket, HeartPulse, Phone, ArrowRight } from "lucide-react"
import { TrackedExternalLink } from "@/components/tracked-external-link"
import { buildWhatsAppUrl } from "@/lib/whatsapp"
import { absoluteUrl, siteName, breadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Tratamentos | Dra. Maria Rita Gasparello - Dentista em Campo Mourão",
  description: "Conheça nossos tratamentos odontológicos: prevenção, limpeza, clareamento dental, restaurações e cuidados preventivos em Campo Mourão - PR.",
  alternates: {
    canonical: "/tratamentos",
  },
  openGraph: {
    title: "Tratamentos Odontológicos em Campo Mourão - PR",
    description: "Conheça nossos tratamentos odontológicos: prevenção, limpeza, clareamento dental, restaurações e cuidados preventivos em Campo Mourão - PR.",
    url: absoluteUrl("/tratamentos"),
    siteName,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: absoluteUrl("/images/hero-blue.webp"),
        width: 1200,
        height: 630,
        alt: "Tratamentos odontológicos em Campo Mourão - Dra. Maria Rita Gasparello",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tratamentos Odontológicos em Campo Mourão - PR",
    description: "Conheça nossos tratamentos odontológicos: prevenção, limpeza, clareamento dental, restaurações e cuidados preventivos em Campo Mourão - PR.",
    images: [absoluteUrl("/images/hero-blue.webp")],
  },
}

const treatments = [
  {
    icon: ShieldCheck,
    title: "Prevenção odontológica",
    description: "A prevenção é a base de uma saúde bucal duradoura. Realizamos avaliações completas e periódicas para identificar problemas em estágio inicial, evitando tratamentos mais complexos no futuro.",
    details: [
      "Exame clínico detalhado",
      "Radiografias digitais",
      "Orientação de higiene bucal personalizada",
      "Plano preventivo individualizado",
    ],
  },
  {
    icon: Droplets,
    title: "Limpeza e profilaxia",
    description: "A limpeza profissional remove o tártaro e a placa bacteriana que a escovação diária não consegue eliminar. Recomendamos a profilaxia a cada 6 meses para manter seus dentes e gengivas saudáveis.",
    details: [
      "Remoção de tártaro e placa bacteriana",
      "Polimento dental profissional",
      "Aplicação de flúor",
      "Avaliação gengival completa",
    ],
  },
  {
    icon: Sparkles,
    title: "Clareamento dental",
    description: "Devolvemos a brancura natural dos seus dentes com técnicas seguras e eficazes. O clareamento dental é um procedimento estético que pode ser realizado em consultório ou em casa, sob supervisão profissional.",
    details: [
      "Clareamento em consultório",
      "Clareamento caseiro supervisionado",
      "Avaliação de sensibilidade prévia",
      "Resultados visíveis e duradouros",
    ],
  },
  {
    icon: PaintBucket,
    title: "Restaurações dentárias",
    description: "Restauramos a forma e função dos dentes comprometidos por cáries ou fraturas. Utilizamos materiais estéticos de alta qualidade que se integram naturalmente à sua dentição.",
    details: [
      "Resina composta de alta qualidade",
      "Restaurações estéticas e funcionais",
      "Tratamento de cáries",
      "Reconstrução de dentes fraturados",
    ],
  },
  {
    icon: HeartPulse,
    title: "Cuidados preventivos para adultos",
    description: "Adultos precisam de acompanhamento odontológico regular. Oferecemos programas de manutenção que incluem avaliações periódicas, limpezas profissionais e orientações específicas para cada fase da vida.",
    details: [
      "Acompanhamento periodontal",
      "Manutenção de tratamentos anteriores",
      "Prevenção de doenças gengivais",
      "Orientação nutricional para saúde bucal",
    ],
  },
]

const treatmentsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Tratamentos Odontológicos - Dra. Maria Rita Gasparello",
  description: "Serviços odontológicos em Campo Mourão - PR",
  itemListElement: treatments.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "MedicalProcedure",
      name: t.title,
      description: t.description,
    },
  })),
}

export default function TratamentosPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(treatmentsSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              breadcrumbSchema([
                { name: "Início", url: absoluteUrl("/") },
                { name: "Tratamentos", url: absoluteUrl("/tratamentos") },
              ])
            ),
          }}
        />
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                Tratamentos
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance">
                Tratamentos odontológicos modernos e seguros
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Oferecemos uma gama completa de tratamentos focados em prevenção e bem-estar. 
                Cada procedimento é realizado com equipamentos modernos e técnicas atualizadas 
                para garantir o melhor resultado.
              </p>
            </div>
          </div>
        </section>

        {/* Treatments List */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-col gap-12 lg:gap-16">
              {treatments.map((treatment, index) => (
                <div
                  key={treatment.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start ${
                    index !== treatments.length - 1 ? "pb-12 lg:pb-16 border-b border-border" : ""
                  }`}
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                        <treatment.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-2xl font-serif font-bold text-foreground">
                        {treatment.title}
                      </h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {treatment.description}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                      O que inclui
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {treatment.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-3">
                          <ArrowRight className="h-4 w-4 text-primary shrink-0" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-foreground">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-background text-balance">
              Agende sua avaliação
            </h2>
            <p className="mt-4 text-background/70 max-w-lg mx-auto leading-relaxed">
              O primeiro passo para um sorriso saudável é uma avaliação completa.
              Fale no WhatsApp e encontre o melhor horário para começar.
            </p>
            <TrackedExternalLink
              href={buildWhatsAppUrl("avaliacao", "tratamentos_cta")}
              eventName="whatsapp_click"
              eventData={{ source: "tratamentos_cta", intent: "avaliacao" }}
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-teal-light transition-colors"
            >
              <Phone className="h-5 w-5" />
              Agendar avaliação pelo WhatsApp
            </TrackedExternalLink>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
