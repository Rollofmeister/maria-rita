"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Phone, X } from "lucide-react"
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
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative lg:hidden">
      <button
        onClick={() => setIsOpen((current) => !current)}
        className="p-2 text-foreground"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen ? (
        <div className="absolute left-0 right-0 top-full animate-fade-in border-t border-border bg-background">
          <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Navegação mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
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
      ) : null}
    </div>
  )
}
