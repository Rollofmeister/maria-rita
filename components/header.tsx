"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { TrackedExternalLink } from "@/components/tracked-external-link"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/tratamentos", label: "Tratamentos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="font-serif text-lg lg:text-xl font-bold text-foreground tracking-tight">
              Dra. Maria Rita
            </span>
            <span className="text-xs text-muted-foreground -mt-1 tracking-wide uppercase">
              Gasparello
            </span>
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
            Agendar consulta
          </TrackedExternalLink>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <nav className="flex flex-col px-4 py-4 gap-1" aria-label="Navegação mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 text-base font-medium text-foreground hover:text-primary transition-colors border-b border-border last:border-0"
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
              Agendar consulta
            </TrackedExternalLink>
          </nav>
        </div>
      )}
    </header>
  )
}
