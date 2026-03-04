const WHATSAPP_BASE_URL = "https://wa.me/5544998346194"

type WhatsAppIntent =
  | "consulta-geral"
  | "avaliacao"
  | "clareamento"
  | "limpeza"
  | "primeira-consulta"
  | "visita-consultorio"

const intentMessages: Record<WhatsAppIntent, string> = {
  "consulta-geral":
    "Olá! Vim pelo site e gostaria de agendar uma consulta. Podem me orientar sobre horários disponíveis?",
  avaliacao:
    "Olá! Vim pelo site e gostaria de agendar uma avaliação odontológica. Qual é o próximo horário disponível?",
  clareamento:
    "Olá! Vim pelo site e tenho interesse em clareamento dental. Gostaria de entender como funciona e agendar avaliação.",
  limpeza:
    "Olá! Vim pelo site e gostaria de agendar uma limpeza dental/profilaxia. Há horários nesta semana?",
  "primeira-consulta":
    "Olá! Vim pelo site e quero agendar minha primeira consulta. Meu nome é ____ e prefiro atendimento no período ____.",
  "visita-consultorio":
    "Olá! Vim pelo site e gostaria de conhecer o consultório e agendar uma consulta.",
}

export function buildWhatsAppUrl(
  intent: WhatsAppIntent,
  source: string
): string {
  const message = `${intentMessages[intent]}\nFonte: ${source}`
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`
}

export { WHATSAPP_BASE_URL }
