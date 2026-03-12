import { faqs } from "@/lib/faq-data"
import { clinicAddress, clinicGeo } from "@/lib/clinic-info"

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
  geo: {
    "@type": "GeoCoordinates",
    latitude: clinicGeo.latitude,
    longitude: clinicGeo.longitude,
  },
  openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-12:00"],
  areaServed: {
    "@type": "City",
    name: "Campo Mourao",
  },
  sameAs: ["https://instagram.com/dra.mariaritagas"],
}

export const dentistPersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dra. Maria Rita Gasparello",
  honorificPrefix: "Dra.",
  jobTitle: "Cirurgiã-Dentista",
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    recognizedBy: {
      "@type": "Organization",
      name: "Conselho Regional de Odontologia do Paraná",
      alternateName: "CRO/PR",
    },
    identifier: "40.050",
  },
  worksFor: {
    "@type": "Dentist",
    name: "Dra. Maria Rita Gasparello",
    url: siteUrl,
  },
  sameAs: ["https://instagram.com/dra.mariaritagas"],
  url: absoluteUrl("/sobre"),
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  inLanguage: "pt-BR",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
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
