import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { absoluteUrl, siteName, breadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Política de Privacidade | Dra. Maria Rita Gasparello",
  description: "Política de privacidade do site da Dra. Maria Rita Gasparello. Saiba como tratamos seus dados pessoais conforme a LGPD.",
  alternates: {
    canonical: "/politica-de-privacidade",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              breadcrumbSchema([
                { name: "Início", url: absoluteUrl("/") },
                { name: "Política de Privacidade", url: absoluteUrl("/politica-de-privacidade") },
              ])
            ),
          }}
        />
        <section className="py-12 lg:py-20 bg-secondary">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Política de Privacidade
            </h1>
            <p className="mt-4 text-muted-foreground">
              Última atualização: março de 2026
            </p>
          </div>
        </section>

        <section className="py-12 lg:py-20 bg-background">
          <div className="mx-auto max-w-3xl px-4 lg:px-8 flex flex-col gap-8">
            <div>
              <h2 className="font-serif text-xl font-bold text-foreground mb-3">
                1. Responsável pelo tratamento dos dados
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Dra. Maria Rita Gasparello, cirurgiã-dentista inscrita no CRO/PR sob o número 40.050, com consultório
                localizado na Av. Cap. Índio Bandeira, 1400, Sala 303, 3º andar, Campo Mourão — PR, CEP 87300-005.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-foreground mb-3">
                2. Dados que coletamos
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Este site coleta dados de forma automática e voluntária:
              </p>
              <ul className="list-disc ml-6 flex flex-col gap-2 text-muted-foreground leading-relaxed">
                <li>
                  <strong className="text-foreground">Dados de navegação:</strong> informações coletadas automaticamente por meio de cookies e ferramentas de
                  análise (Google Tag Manager, Google Analytics, Meta Pixel), como páginas visitadas, tempo de permanência, tipo de dispositivo e localização
                  aproximada.
                </li>
                <li>
                  <strong className="text-foreground">Dados de contato:</strong> quando você nos envia uma mensagem pelo WhatsApp, coletamos seu nome e número
                  de telefone para fins de agendamento e atendimento.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-foreground mb-3">
                3. Finalidade do tratamento
              </h2>
              <ul className="list-disc ml-6 flex flex-col gap-2 text-muted-foreground leading-relaxed">
                <li>Agendamento e comunicação com pacientes</li>
                <li>Melhoria da experiência de navegação no site</li>
                <li>Análise de desempenho e audiência do site</li>
                <li>Veiculação de anúncios relevantes em plataformas de terceiros</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-foreground mb-3">
                4. Base legal (LGPD)
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                O tratamento de dados pessoais realizado por este site está fundamentado no consentimento do titular (Art. 7º, I da LGPD)
                e no legítimo interesse do controlador para melhoria dos serviços prestados (Art. 7º, IX da LGPD).
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-foreground mb-3">
                5. Compartilhamento de dados
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Os dados coletados podem ser compartilhados com as seguintes plataformas, exclusivamente para as finalidades descritas
                nesta política: Google (Analytics, Tag Manager), Meta (Facebook Pixel) e Vercel (hospedagem e analytics). Não comercializamos
                nem cedemos seus dados pessoais a terceiros para finalidades alheias às aqui descritas.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-foreground mb-3">
                6. Seus direitos como titular
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:
              </p>
              <ul className="list-disc ml-6 flex flex-col gap-2 text-muted-foreground leading-relaxed">
                <li>Confirmar a existência de tratamento de dados</li>
                <li>Acessar seus dados pessoais</li>
                <li>Solicitar correção de dados incompletos ou desatualizados</li>
                <li>Solicitar a eliminação de dados desnecessários ou tratados em desconformidade</li>
                <li>Revogar o consentimento a qualquer momento</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Para exercer seus direitos, entre em contato pelo WhatsApp (44) 99834-6194.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-foreground mb-3">
                7. Cookies
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Este site utiliza cookies para melhorar sua experiência de navegação e para fins analíticos. Ao continuar navegando,
                você concorda com o uso de cookies conforme descrito nesta política. Você pode desativar os cookies nas configurações
                do seu navegador, mas isso pode afetar a funcionalidade do site.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-foreground mb-3">
                8. Alterações nesta política
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Esta política pode ser atualizada periodicamente. A data da última atualização será sempre indicada no topo desta página.
                Recomendamos que você a consulte regularmente.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
