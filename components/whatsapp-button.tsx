"use client"

import { MessageCircle } from "lucide-react"
import { track } from "@vercel/analytics"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

export function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppUrl("consulta-geral", "botao_flutuante")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-white shadow-lg shadow-[#25D366]/30 hover:bg-[#20BD5A] transition-all hover:scale-105 group"
      aria-label="Agendar consulta pelo WhatsApp"
      onClick={() => track("whatsapp_click", { source: "floating_button", intent: "consulta-geral" })}
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline text-sm font-medium">
        Agendar consulta
      </span>
    </a>
  )
}
