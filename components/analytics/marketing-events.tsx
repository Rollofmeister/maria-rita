"use client"

import { useEffect, useRef } from "react"
import { usePathname, useSearchParams } from "next/navigation"

interface MarketingEventsProps {
  hasGtm: boolean
  hasMetaPixel: boolean
}

type TrackingWindow = Window &
  typeof globalThis & {
    fbq?: (...args: unknown[]) => void
    dataLayer?: Array<Record<string, unknown>>
  }

export function MarketingEvents({ hasGtm, hasMetaPixel }: MarketingEventsProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    const pagePath = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`
    const win = window as TrackingWindow

    if (hasMetaPixel && typeof win.fbq === "function") {
      win.fbq("track", "PageView")
    }

    if (hasGtm) {
      win.dataLayer = win.dataLayer || []
      win.dataLayer.push({
        event: "page_view",
        page_path: pagePath,
      })
    }
  }, [hasGtm, hasMetaPixel, pathname, searchParams])

  return null
}
