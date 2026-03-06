"use client"

import { MessageCircle } from "lucide-react"
import { TrackedExternalLink } from "@/components/tracked-external-link"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

export function WhatsAppButton() {
  return (
    <TrackedExternalLink
      href={buildWhatsAppUrl("consulta-geral", "botao_flutuante")}
      eventName="whatsapp_click"
      eventData={{ source: "botao_flutuante", intent: "consulta-geral" }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-white shadow-lg shadow-[#25D366]/30 hover:bg-[#20BD5A] transition-all hover:scale-105 group"
      aria-label="Agendar consulta pelo WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline text-sm font-medium">
        Agendar consulta
      </span>
    </TrackedExternalLink>
  )
}
