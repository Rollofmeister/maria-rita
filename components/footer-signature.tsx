"use client"

import { useEffect, useRef } from "react"

export function FooterSignature() {
  const signatureRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let isActive = true

    async function loadSignature() {
      const target = signatureRef.current
      if (!target) {
        return
      }

      const { mountLSSignature } = await import("ls-signature-footer")
      if (!isActive) {
        return
      }

      mountLSSignature(target, {
        name: "Luiz Siewerdt",
        role: "Design e desenvolvimento do site",
        textColor: "rgba(255,255,255,0.80)",
        mutedColor: "rgba(255,255,255,0.58)",
        logoBackground: "#0d9488",
        logoColor: "#ffffff",
        fontFamily: "Inter, Inter Fallback, system-ui, sans-serif",
      })
    }

    loadSignature()

    return () => {
      isActive = false
    }
  }, [])

  return <div ref={signatureRef} aria-label="Assinatura do projeto" />
}
