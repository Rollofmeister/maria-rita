import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { blogPosts } from "@/lib/blog-data"
import { ArrowLeft, Calendar, Clock, Phone } from "lucide-react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { TrackedExternalLink } from "@/components/tracked-external-link"
import { buildWhatsAppUrl } from "@/lib/whatsapp"
import { absoluteUrl, siteName, breadcrumbSchema } from "@/lib/seo"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return { title: "Post não encontrado" }
  return {
    title: `${post.title} | Dra. Maria Rita Gasparello`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      locale: "pt_BR",
      url: absoluteUrl(`/blog/${post.slug}`),
      siteName,
      publishedTime: post.date,
      authors: ["Dra. Maria Rita Gasparello"],
      section: post.category,
      images: [
        {
          url: absoluteUrl("/images/hero-blue.webp"),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [absoluteUrl("/images/hero-blue.webp")],
    },
  }
}

function parseMarkdown(content: string) {
  const lines = content.trim().split("\n")
  const elements: { type: string; content: string }[] = []

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) continue
    if (trimmed.startsWith("### ")) {
      elements.push({ type: "h3", content: trimmed.replace("### ", "") })
    } else if (trimmed.startsWith("## ")) {
      elements.push({ type: "h2", content: trimmed.replace("## ", "") })
    } else if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
      elements.push({ type: "bold", content: trimmed.replace(/\*\*/g, "") })
    } else if (trimmed.startsWith("- ")) {
      elements.push({ type: "li", content: trimmed.replace("- ", "") })
    } else if (trimmed.startsWith("**")) {
      const parts = trimmed.split("**")
      elements.push({ type: "bold-text", content: trimmed })
    } else {
      elements.push({ type: "p", content: trimmed })
    }
  }

  return elements
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) notFound()

  const elements = parseMarkdown(post.content)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": absoluteUrl(`/blog/${post.slug}#article`),
    headline: post.title,
    description: post.excerpt,
    url: absoluteUrl(`/blog/${post.slug}`),
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "pt-BR",
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    author: {
      "@type": "Person",
      name: "Dra. Maria Rita Gasparello",
      url: absoluteUrl("/sobre"),
      sameAs: ["https://instagram.com/dra.mariaritagas"],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        identifier: "CRO/PR 40.050",
      },
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/hero-blue.webp"),
        width: 1200,
        height: 630,
      },
    },
    image: [absoluteUrl("/images/hero-blue.webp")],
    articleSection: post.category,
    keywords: ["dentista em campo mourão", post.category.toLowerCase(), "saúde bucal", "odontologia"],
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              breadcrumbSchema([
                { name: "Início", url: absoluteUrl("/") },
                { name: "Blog", url: absoluteUrl("/blog") },
                { name: post.title, url: absoluteUrl(`/blog/${post.slug}`) },
              ])
            ),
          }}
        />
        {/* Article Header */}
        <section className="py-12 lg:py-20 bg-secondary">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar ao blog
            </Link>
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance leading-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-sm font-medium text-foreground/80">
              Por <Link href="/sobre" className="text-primary hover:underline">Dra. Maria Rita Gasparello</Link>
              <span className="text-muted-foreground font-normal"> — CRO/PR 40.050</span>
            </p>
            <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {format(new Date(post.date), "d 'de' MMMM 'de' yyyy", { locale: ptBR })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readTime} de leitura
              </span>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <section className="py-12 lg:py-20 bg-background">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <article className="flex flex-col gap-5">
              {(() => {
                const rendered: React.ReactNode[] = []
                let i = 0
                while (i < elements.length) {
                  const el = elements[i]
                  if (el.type === "li") {
                    const listItems: { content: string; idx: number }[] = []
                    while (i < elements.length && elements[i].type === "li") {
                      listItems.push({ content: elements[i].content, idx: i })
                      i++
                    }
                    rendered.push(
                      <ul key={`ul-${listItems[0].idx}`} className="flex flex-col gap-2 ml-6 list-disc">
                        {listItems.map((item) => (
                          <li key={item.idx} className="text-muted-foreground leading-relaxed">
                            {item.content}
                          </li>
                        ))}
                      </ul>
                    )
                  } else {
                    switch (el.type) {
                      case "h2":
                        rendered.push(
                          <h2 key={i} className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-4">
                            {el.content}
                          </h2>
                        )
                        break
                      case "h3":
                        rendered.push(
                          <h3 key={i} className="font-serif text-xl md:text-2xl font-bold text-foreground mt-2">
                            {el.content}
                          </h3>
                        )
                        break
                      case "bold":
                        rendered.push(
                          <p key={i} className="font-semibold text-foreground">
                            {el.content}
                          </p>
                        )
                        break
                      case "bold-text":
                        rendered.push(
                          <p key={i} className="text-muted-foreground leading-relaxed">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: el.content.replace(
                                  /\*\*(.*?)\*\*/g,
                                  '<strong class="text-foreground font-semibold">$1</strong>'
                                ),
                              }}
                            />
                          </p>
                        )
                        break
                      default:
                        rendered.push(
                          <p key={i} className="text-muted-foreground leading-relaxed">
                            {el.content}
                          </p>
                        )
                    }
                    i++
                  }
                }
                return rendered
              })()}
            </article>

            {/* CTA in article */}
            <div className="mt-12 p-8 rounded-xl bg-secondary border border-border text-center">
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                Agende sua avaliação
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Fale no WhatsApp e receba orientação inicial para cuidar da sua saúde
                bucal em Campo Mourão.
              </p>
              <TrackedExternalLink
                href={buildWhatsAppUrl("avaliacao", `blog_artigo_${post.slug}`)}
                eventName="whatsapp_click"
                eventData={{ source: `blog_artigo_${post.slug}`, slug: post.slug, intent: "avaliacao" }}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-teal-dark transition-colors"
              >
                <Phone className="h-4 w-4" />
                Agendar avaliação pelo WhatsApp
              </TrackedExternalLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
