import { faqs } from "@/lib/faq-data"
import { clinicAddress } from "@/lib/clinic-info"

const fallbackSiteUrl = "http://localhost:3000"

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl
).replace(/\/$/, "")

export const siteName = "Dra. Maria Rita Gasparello"

export function absoluteUrl(path = ""): string {
  if (!path) return siteUrl
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Dra. Maria Rita Gasparello",
  image: absoluteUrl("/images/hero-blue.webp"),
  url: siteUrl,
  telephone: "+55 44 99834-6194",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${clinicAddress.street}, ${clinicAddress.complement}`,
    addressLocality: "Campo Mourao",
    addressRegion: "PR",
    postalCode: "87300-005",
    addressCountry: "BR",
  },
  areaServed: {
    "@type": "City",
    name: "Campo Mourao",
  },
  sameAs: ["https://instagram.com/dra.mariaritagas"],
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  inLanguage: "pt-BR",
}

export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}
