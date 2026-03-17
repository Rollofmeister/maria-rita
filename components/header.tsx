import Link from "next/link"
import Image from "next/image"
import { Phone } from "lucide-react"
import { TrackedExternalLink } from "@/components/tracked-external-link"
import { HeaderMobileMenu } from "@/components/header-mobile-menu"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/tratamentos", label: "Tratamentos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
]

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            href="/"
            className="flex flex-shrink-0 items-center"
            aria-label="Voltar para a pagina inicial"
          >
            <Image
              src="/maria-rita-navbar.webp"
              alt="Maria Rita Gasparello"
              width={368}
              height={100}
              sizes="208px"
              className="h-10 w-auto object-contain lg:h-[3.5rem]"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <TrackedExternalLink
            href={buildWhatsAppUrl("consulta-geral", "header_desktop")}
            eventName="whatsapp_click"
            eventData={{ source: "header_desktop", intent: "consulta-geral" }}
            className="hidden lg:inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-teal-dark transition-colors"
          >
            <Phone className="h-4 w-4" />
            Agendar pelo WhatsApp
          </TrackedExternalLink>

          <HeaderMobileMenu navLinks={navLinks} />
        </div>
      </div>
    </header>
  )
}
