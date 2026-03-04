import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { blogPosts } from "@/lib/blog-data"
import { ArrowRight, Clock, Calendar } from "lucide-react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

export const metadata: Metadata = {
  title: "Blog | Dra. Maria Rita Gasparello - Dentista em Campo Mourão",
  description: "Dicas de saúde bucal, informações sobre tratamentos odontológicos e novidades. Blog da Dra. Maria Rita Gasparello, dentista em Campo Mourão.",
  alternates: {
    canonical: "/blog",
  },
}

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                Blog
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance">
                Dicas e informações sobre saúde bucal
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Artigos educativos para ajudar você a manter sua saúde bucal em dia. 
                Conteúdo produzido com base em evidências científicas e experiência clínica.
              </p>
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col p-6 lg:p-8 rounded-xl border border-border bg-card hover:shadow-md hover:border-primary/30 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors text-balance">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {format(new Date(post.date), "d 'de' MMMM, yyyy", { locale: ptBR })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
