import type { MetadataRoute } from "next"
import { blogPosts } from "@/lib/blog-data"
import { absoluteUrl } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: new Date("2026-03-01"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/tratamentos"),
      lastModified: new Date("2026-03-01"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/contato"),
      lastModified: new Date("2026-03-01"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/sobre"),
      lastModified: new Date("2026-02-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/politica-de-privacidade"),
      lastModified: new Date("2026-03-30"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: absoluteUrl("/blog"),
      lastModified: new Date(blogPosts[0].date),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ]

  const postPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.75,
  }))

  return [...staticPages, ...postPages]
}
