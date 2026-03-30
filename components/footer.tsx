import Link from "next/link"
import Image from "next/image"
import { Instagram, MapPin, Phone } from "lucide-react"
import { TrackedExternalLink } from "@/components/tracked-external-link"
import { FooterSignature } from "@/components/footer-signature"
import { buildWhatsAppUrl } from "@/lib/whatsapp"
import { clinicAddress } from "@/lib/clinic-info"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex" aria-label="Voltar para a pagina inicial">
              <Image
                src="/logo-maria-rita-new.webp"
                alt="Maria Rita Gasparello"
                width={220}
                height={92}
                sizes="220px"
                className="h-16 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm text-background/70 leading-relaxed">
              Odontologia preventiva e tratamentos modernos em Campo Mourão - PR.
            </p>
            <p className="mt-2 text-xs text-background/50">
              CRO/PR 40.050
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-background/80">
              Navegação
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/", label: "Início" },
                { href: "/tratamentos", label: "Tratamentos" },
                { href: "/sobre", label: "Sobre a Doutora" },
                { href: "/blog", label: "Blog" },
                { href: "/contato", label: "Contato" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-background/80">
              Tratamentos
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                "Prevenção odontológica",
                "Limpeza e profilaxia",
                "Clareamento dental",
                "Restaurações dentárias",
                "Cuidados preventivos",
              ].map((item) => (
                <li key={item} className="text-sm text-background/70">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-background/80">
              Contato
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-teal-light shrink-0" />
                <span className="text-sm text-background/70">
                  {clinicAddress.street}
                  <br />
                  {clinicAddress.complement}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-teal-light shrink-0" />
                <TrackedExternalLink
                  href={buildWhatsAppUrl("consulta-geral", "footer_telefone")}
                  eventName="whatsapp_click"
                  eventData={{ source: "footer_telefone", intent: "consulta-geral" }}
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  (44) 99834-6194
                </TrackedExternalLink>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="h-4 w-4 mt-0.5 text-teal-light shrink-0" />
                <a
                  href="https://instagram.com/dra.mariaritagas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  @dra.mariaritagas
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-background/50">
              {'© 2026 Dra. Maria Rita Gasparello. Todos os direitos reservados.'}
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/politica-de-privacidade"
                className="text-xs text-background/50 hover:text-background/70 transition-colors"
              >
                Política de Privacidade
              </Link>
              <p className="text-xs text-background/50">
                CRO/PR 40.050 — Responsável Técnica: Dra. Maria Rita Gasparello
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <FooterSignature />
          </div>
        </div>
      </div>
    </footer>
  )
}
