import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { absoluteUrl, localBusinessSchema, siteName, siteUrl, websiteSchema } from '@/lib/seo'
import { GtmNoScript, MarketingTags } from '@/components/analytics/marketing-tags'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dra. Maria Rita Gasparello | Dentista em Campo Mourão - PR',
  description: 'Odontologia preventiva e tratamentos modernos em Campo Mourão. Atendimento humanizado, equipamentos modernos e ambiente confortável. Agende sua consulta pelo WhatsApp.',
  keywords: 'dentista em campo mourão, clareamento dental campo mourão, tratamento odontológico campo mourão, odontologia preventiva, limpeza dental',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: `${siteName} | Dentista em Campo Mourão`,
    description: 'Odontologia preventiva e tratamentos modernos em Campo Mourão. Agende sua consulta pelo WhatsApp.',
    url: siteUrl,
    siteName,
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: absoluteUrl('/images/dentist-hero.png'),
        width: 1200,
        height: 630,
        alt: `${siteName} - Dentista em Campo Mourão`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} | Dentista em Campo Mourão`,
    description: 'Odontologia preventiva e tratamentos modernos em Campo Mourão. Agende sua consulta pelo WhatsApp.',
    images: [absoluteUrl('/images/dentist-hero.png')],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <GtmNoScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [websiteSchema, localBusinessSchema],
            }),
          }}
        />
        <MarketingTags />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
