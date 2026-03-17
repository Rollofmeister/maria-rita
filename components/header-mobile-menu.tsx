import Link from "next/link"
import { Menu, Phone } from "lucide-react"
import { TrackedExternalLink } from "@/components/tracked-external-link"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

interface NavLink {
  href: string
  label: string
}

interface HeaderMobileMenuProps {
  navLinks: NavLink[]
}

export function HeaderMobileMenu({ navLinks }: HeaderMobileMenuProps) {
  return (
    <details className="group relative lg:hidden">
      <summary
        className="list-none cursor-pointer p-2 text-foreground [&::-webkit-details-marker]:hidden"
        aria-label="Abrir menu"
      >
        <Menu className="h-6 w-6" />
      </summary>

      <div className="absolute right-0 top-full z-50 mt-2 hidden w-[min(22rem,calc(100vw-2rem))] rounded-xl border border-border bg-background shadow-lg group-open:block">
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Navegação mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-b border-border py-3 text-base font-medium text-foreground transition-colors hover:text-primary last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <TrackedExternalLink
            href={buildWhatsAppUrl("consulta-geral", "header_mobile")}
            eventName="whatsapp_click"
            eventData={{ source: "header_mobile", intent: "consulta-geral" }}
            className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
          >
            <Phone className="h-4 w-4" />
            Agendar pelo WhatsApp
          </TrackedExternalLink>
        </nav>
      </div>
    </details>
  )
}
