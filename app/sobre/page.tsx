import type { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { GraduationCap, Heart, Award, Phone } from "lucide-react"
import { TrackedExternalLink } from "@/components/tracked-external-link"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

export const metadata: Metadata = {
  title: "Sobre a Doutora | Dra. Maria Rita Gasparello - Dentista em Campo Mourão",
  description: "Conheça a Dra. Maria Rita Gasparello, cirurgiã-dentista em Campo Mourão - PR. Formação, especialização e filosofia de atendimento.",
  alternates: {
    canonical: "/sobre",
  },
}

export default function SobrePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/dentist-about.webp"
                  alt="Dra. Maria Rita Gasparello em seu consultório"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                  Sobre a Doutora
                </span>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance">
                  Dra. Maria Rita Gasparello
                </h1>
                <p className="mt-2 text-sm text-primary font-medium">
                  CRO/PR 40.050 — Cirurgiã-Dentista
                </p>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Com experiência especializada em odontologia preventiva e cuidado individualizado, a Dra. Maria Rita Gasparello 
                  dedica-se a oferecer atendimento humanizado e de excelência em Campo Mourão. 
                  Sua abordagem combina técnicas modernas com um cuidado genuíno pelo bem-estar 
                  de cada paciente.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Acredita que a prevenção é o melhor caminho para uma saúde bucal duradoura e 
                  trabalha incansavelmente para que cada paciente se sinta acolhido, informado 
                  e confiante durante todo o processo de tratamento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Values */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Education */}
              <div className="flex flex-col gap-4 p-8 rounded-xl border border-border bg-card">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-serif font-bold text-foreground">
                  Formação Acadêmica
                </h2>
                <ul className="flex flex-col gap-3">
                  <li className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Graduação em Odontologia</span>
                    <br />
                    Universidade reconhecida com excelência na formação de cirurgiões-dentistas
                  </li>
                  <li className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Especialização em Odontologia Preventiva</span>
                    <br />
                    Foco em prevenção, diagnóstico precoce e tratamentos conservadores
                  </li>
                  <li className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Atualização contínua</span>
                    <br />
                    Participação regular em congressos e cursos de aperfeiçoamento
                  </li>
                </ul>
              </div>

              {/* Philosophy */}
              <div className="flex flex-col gap-4 p-8 rounded-xl border border-border bg-card">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-serif font-bold text-foreground">
                  Filosofia de Trabalho
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {`"Acredito que cada sorriso é único e merece um cuidado personalizado. 
                  Minha missão é proporcionar saúde bucal com conforto e confiança, 
                  construindo relacionamentos duradouros com meus pacientes."`}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  O atendimento é pautado por três pilares fundamentais: escuta ativa, 
                  transparência nos procedimentos e compromisso com os melhores resultados.
                </p>
              </div>

              {/* Values */}
              <div className="flex flex-col gap-4 p-8 rounded-xl border border-border bg-card">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-serif font-bold text-foreground">
                  Compromissos
                </h2>
                <ul className="flex flex-col gap-3">
                  {[
                    "Atendimento ético e humanizado",
                    "Uso de materiais e equipamentos de primeira linha",
                    "Transparência em todos os procedimentos",
                    "Educação do paciente sobre saúde bucal",
                    "Ambiente acolhedor e seguro",
                    "Biossegurança rigorosa",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Clinic Interior */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                Nosso espaço
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
                Um ambiente pensado para o seu conforto
              </h2>
            </div>
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/clinic-interior.jpg"
                alt="Interior do consultório odontológico da Dra. Maria Rita Gasparello"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <p className="mt-8 text-center text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Nosso consultório foi projetado para oferecer uma experiência tranquila e acolhedora. 
              Cada detalhe foi pensado para proporcionar conforto e segurança durante todo o seu atendimento.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-foreground">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-background text-balance">
              Venha nos conhecer
            </h2>
            <p className="mt-4 text-background/70 max-w-lg mx-auto leading-relaxed">
              Agende uma visita e conheça de perto nosso consultório e nossa equipe. 
              Estamos prontos para cuidar do seu sorriso.
            </p>
            <TrackedExternalLink
              href={buildWhatsAppUrl("visita-consultorio", "sobre_cta")}
              eventName="whatsapp_click"
              eventData={{ source: "about_page", intent: "visita-consultorio" }}
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-teal-light transition-colors"
            >
              <Phone className="h-5 w-5" />
              Agendar uma visita
            </TrackedExternalLink>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
