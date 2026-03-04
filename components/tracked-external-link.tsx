"use client"

import type { ReactNode } from "react"
import { track } from "@vercel/analytics"

interface TrackedExternalLinkProps {
  href: string
  eventName: string
  eventData?: Record<string, string | number | boolean>
  className?: string
  ariaLabel?: string
  children: ReactNode
  target?: "_blank" | "_self"
  rel?: string
}

export function TrackedExternalLink({
  href,
  eventName,
  eventData,
  className,
  ariaLabel,
  children,
  target = "_blank",
  rel = "noopener noreferrer",
}: TrackedExternalLinkProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      aria-label={ariaLabel}
      onClick={() => track(eventName, eventData)}
    >
      {children}
    </a>
  )
}
