"use client"

import { MessageCircle } from "lucide-react"
import { TrackedExternalLink } from "@/components/tracked-external-link"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

export function WhatsAppButton() {
  return (
    <TrackedExternalLink
      href={buildWhatsAppUrl("avaliacao", "botao_flutuante")}
      eventName="whatsapp_click"
      eventData={{ source: "botao_flutuante", intent: "avaliacao" }}
      className="fixed inset-x-4 bottom-4 z-50 flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-4 text-white shadow-xl shadow-[#25D366]/25 transition-colors hover:bg-[#20BD5A] lg:hidden"
      aria-label="Agendar avaliacao pelo WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="text-sm font-semibold">
        Agendar avaliacao no WhatsApp
      </span>
    </TrackedExternalLink>
  )
}
