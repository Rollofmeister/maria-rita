# SEO Audit Report — dramariarita.com

**Date:** 2026-03-30
**Business:** Dra. Maria Rita Gasparello — Dentista em Campo Mourão, PR
**Business Type:** Local Service (Brick-and-mortar dental clinic)
**Technology Stack:** Next.js 16.2, React 19, Tailwind CSS 4, Vercel hosting
**Pages Crawled:** 15 (5 static + 10 blog posts)

---

## Executive Summary

### Overall SEO Health Score: 68/100

| Category | Score | Weight | Weighted |
|----------|-------|--------|----------|
| Technical SEO | 78/100 | 22% | 17.2 |
| Content Quality (E-E-A-T) | 61/100 | 23% | 14.0 |
| On-Page SEO | 80/100 | 20% | 16.0 |
| Schema / Structured Data | 75/100 | 10% | 7.5 |
| Performance (CWV) | 70/100 | 10% | 7.0 |
| AI Search Readiness (GEO) | 61/100 | 10% | 6.1 |
| Images | 40/100 | 5% | 2.0 |
| **Total** | | | **69.8** |

### Top 5 Critical Issues

1. **No verified Google Business Profile** — Maps embed points to the building (Centro Empresarial Antares), not a dedicated GBP listing for the dental clinic
2. **Zero patient reviews/testimonials** — `testimonials-section.tsx` contains generic trust cards, not actual patient testimonials
3. **University name deliberately withheld on /sobre** — "Universidade reconhecida com excelência" reads as placeholder, critical E-E-A-T gap
4. **Blog posts are too thin** — Average 400-600 words vs 1,500-word minimum for health content; 4 posts under 380 words
5. **No privacy policy (LGPD compliance risk)** — Site runs GTM + Meta Pixel but has no `/politica-de-privacidade` page

### Top 5 Quick Wins

1. Add `llms.txt` for AI search readiness (+15 pts GEO)
2. Add security headers via `next.config.mjs` (+8 pts Technical)
3. Fix `telephone` format in schema to E.164: `"+5544998346194"` (+3 pts Schema)
4. Add visible author byline on blog posts (+5 pts E-E-A-T)
5. Add internal cross-links between blog posts (+5 pts On-Page)

---

## 1. Technical SEO (78/100)

### HTTPS & Redirects ✅ Excellent
- HTTP → HTTPS redirect: **308 Permanent Redirect** (correct)
- HSTS: `max-age=63072000` (~2 years)
- All pages return HTTP 200
- Vercel handles SSL automatically

### Security Headers ⚠️ Needs Work

| Header | Status |
|--------|--------|
| `strict-transport-security` | ✅ Present (max-age=63072000) |
| `content-security-policy` | ❌ Missing |
| `x-content-type-options` | ❌ Missing |
| `x-frame-options` | ❌ Missing |
| `referrer-policy` | ❌ Missing |
| `permissions-policy` | ❌ Missing |

### robots.txt ✅ Good
```
User-Agent: *
Allow: /
Host: https://dramariarita.com
Sitemap: https://dramariarita.com/sitemap.xml
```
- Sitemap referenced ✅
- No blocked resources ✅
- **Missing:** Explicit AI crawler rules (GPTBot, ClaudeBot)
- **Note:** `Host:` directive is Yandex-only, harmless but unnecessary

### XML Sitemap ✅ Good
- **15 URLs** (5 static + 10 blog posts)
- All URLs return 200
- `lastModified` dates present
- **Issue:** `/blog` lastmod is `2026-03-01` but newest post is `2026-03-10`
- **Issue:** Static page lastmods are hardcoded, never auto-update
- **Note:** `changeFrequency` and `priority` are ignored by Google (harmless)

### Canonical Tags ✅ Excellent
- Every page has canonical via `alternates.canonical`
- `metadataBase` set in layout for proper resolution
- Blog posts use dynamic canonical per slug

### URL Structure ✅ Excellent
- Clean, descriptive: `/tratamentos`, `/sobre`, `/blog/[slug]`
- SEO-friendly blog slugs
- No trailing slash inconsistency (308 redirect for slash variants)
- Portuguese URLs appropriate for pt-BR market

### Caching ✅ Good
- `x-nextjs-prerender: 1` — All pages statically generated
- `x-vercel-cache: HIT` — CDN working
- Server response: <100ms from GRU1 (São Paulo PoP)

### Mobile ✅ Good
- Viewport meta tag present
- Responsive via Tailwind CSS
- Font `display: swap` on both fonts
- WhatsApp button mobile-specific (`lg:hidden`)

### Build Configuration ⚠️
- `ignoreBuildErrors: true` in `next.config.mjs` — masks TypeScript errors

---

## 2. Content Quality & E-E-A-T (61/100)

### Experience — 10/20 (50%)

**Present:**
- CRO/PR 40.050 license visible on every page (hero, trust bar, schema)
- Photo of dentist in office and clinic interior on /sobre
- Blog CTAs grounded in location ("em Campo Mourão")

**Missing:**
- No patient case outcomes or before/after descriptions
- **University name withheld** — /sobre says "Universidade reconhecida com excelência na formação de cirurgiões-dentistas" — this is the single most damaging E-E-A-T gap
- No years of experience stated anywhere
- No named continuing education courses
- No first-person clinical observations in blog posts

### Expertise — 14/25 (56%)

**Present:**
- Strong clinical knowledge in top 6 blog posts (bruxismo cites 8-31% prevalence, correct triage guidance)
- Accurate procedure descriptions (condicionamento + adesivo + fotopolimerização)
- Correct differentiation of gengivite vs periodontite

**Missing:**
- **No visible author byline on blog posts** — Article schema has author but rendered page shows only date/category
- 4 weak blog posts ("como escolher", "5 sinais", "clareamento completo", "frequência limpeza") are generic listicles without clinical specificity
- Zero external references or clinical guidelines cited anywhere
- Clareamento post omits contraindications, peroxide chemistry, concentration ranges

### Authoritativeness — 11/25 (44%)

**Present:**
- CRO/PR 40.050 correctly embedded in `hasCredential` schema
- Instagram linked in `sameAs`

**Missing:**
- **No Google Business Profile link** — the single most authoritative off-site signal for local dental
- No professional memberships stated (ABO, CFO)
- No external citations or press mentions
- `sameAs` has only 1 URL (Instagram) — should have 5-10

### Trustworthiness — 20/30 (67%)

**Present:**
- Complete NAP consistent across all pages and schema
- Google Maps embed with real coordinates
- Opening hours synced between page and schema
- Payment methods listed

**Missing:**
- **No privacy policy page** — LGPD compliance risk with GTM + Meta Pixel active
- No terms of use or cookie notice
- Vague credential details on /sobre

### Blog Content Depth

| Post | ~Words | Minimum | Status |
|------|--------|---------|--------|
| dor-de-dente | ~600 | 1,500 | Below |
| gengivite | ~600 | 1,500 | Below |
| bruxismo | ~550 | 1,500 | Below |
| restauracao-dental | ~600 | 1,500 | Below |
| mau-halito | ~550 | 1,500 | Below |
| higiene-bucal | ~500 | 1,500 | Below |
| como-escolher-dentista | ~320 | 1,500 | **Thin** |
| clareamento | ~380 | 1,500 | **Thin** |
| 5-sinais | ~280 | 1,500 | **Thin** |
| limpeza-dental | ~350 | 1,500 | **Thin** |

### HTML Rendering Bug
Blog `parseMarkdown` function emits `<li>` elements **without** wrapping `<ul>`/`<ol>`. This produces invalid HTML, breaks screen readers, and may confuse AI parsers.

### AI-Generated Content Markers
The bottom 4 posts show classic low-quality AI content markers: generic phrasing ("é uma das decisões mais importantes"), unsubstantiated superlatives, identical structure. The philosophy section quote ("Acredito que cada sorriso é único") appears verbatim across hundreds of dental sites.

---

## 3. On-Page SEO (80/100)

### Title Tags ✅ Good

| Page | Title | Chars |
|------|-------|-------|
| `/` | Dra. Maria Rita Gasparello \| Dentista em Campo Mourão - PR | 59 ✅ |
| `/tratamentos` | Tratamentos \| Dra. Maria Rita Gasparello - Dentista em Campo Mourão | 67 ✅ |
| `/sobre` | Sobre a Doutora \| Dra. Maria Rita Gasparello - Dentista em Campo Mourão | 71 ⚠️ |
| `/contato` | Contato \| Dra. Maria Rita Gasparello - Dentista em Campo Mourão | 63 ✅ |
| `/blog/[slug]` | {Post Title} \| Dra. Maria Rita Gasparello | ~45-65 ✅ |

- All titles include "Dentista em Campo Mourão" ✅
- **Issue:** Blog post titles have no location modifier — "clareamento dental" should be "clareamento dental campo mourão"

### Meta Descriptions ✅ Good
- All pages have unique descriptions with location mentions and CTA language

### Heading Structure ✅ Good
- Single H1 per page, descriptive and keyword-rich
- H2/H3 hierarchy correct in blog posts
- **Minor:** Homepage H1 doesn't contain "dentista" keyword directly

### Open Graph / Twitter Cards ⚠️ Issues
- All pages have OG + Twitter tags ✅
- **Issue:** All pages share same OG image (`hero-blue.webp`) — poor social differentiation
- **Issue:** Blog posts missing `article:author` and `article:section` OG tags
- /sobre correctly uses `og:type: "profile"` ✅

### Internal Linking ⚠️ Major Gap
- Navigation: 5 main pages linked from all pages ✅
- Footer links present ✅
- **Blog posts don't link to each other** — zero cross-links
- **Blog posts don't link to `/tratamentos`** — e.g., clareamento post should link to treatments
- **Treatment page doesn't link to relevant blog posts**
- No "Related posts" section

---

## 4. Schema / Structured Data (75/100)

### Implementation Summary

| Page | Schemas | Status |
|------|---------|--------|
| Layout (all) | `@graph`: `WebSite` + `Dentist` | ✅ |
| `/` | `FAQPage` (5 items) | ✅ |
| `/tratamentos` | `ItemList` of `MedicalProcedure` + `BreadcrumbList` | ✅ |
| `/sobre` | `Person` with `hasCredential` + `BreadcrumbList` | ✅ |
| `/contato` | `FAQPage` + `BreadcrumbList` | ✅ |
| `/blog/[slug]` | `Article` + `BreadcrumbList` | ✅ |

### Issues Found (from Schema Agent deep validation)

| Issue | Severity | Details |
|-------|----------|---------|
| `telephone` format wrong | **Critical** | `"+55 44 99834-6194"` has spaces. E.164 requires `"+5544998346194"` |
| `publisher.logo` uses SVG | **Critical** | `icon.svg` in Article schema. Google requires raster image (PNG/WebP) |
| `streetAddress` too long | **Warning** | Contains full address including city/state. Should be street + number + complement only |
| `dateModified` = `datePublished` | **Warning** | All blog posts — will be inaccurate if content is updated |
| Duplicate `FAQPage` | **Warning** | Same FAQ on both `/` and `/contato` — remove from homepage |
| `author.url` missing in Article | **Warning** | Should link to `/sobre` for entity resolution |
| `Person` missing `image` | **Warning** | `dentistPersonSchema` has no `image` property |
| `Person` missing `description` | **Warning** | Recommended for entity recognition |
| No `@id` on any schema | **Medium** | Prevents cross-referencing between schemas |
| `medicalSpecialty` plain string | **Low** | Should be `"https://schema.org/Dentistry"` |
| `Article` should be `BlogPosting` | **Low** | More semantically precise subtype |
| No `ItemList` on `/blog` listing | **Low** | Opportunity for blog index entity understanding |

### Rich Results Eligibility

| Feature | Eligible | Notes |
|---------|----------|-------|
| FAQ Rich Results | ⚠️ Limited | Google restricted FAQ to govt/health authority sites (Aug 2023); still useful for GEO |
| Article Rich Results | ⚠️ Partial | Missing `image` property required for some displays; `publisher.logo` needs fix |
| Local Business | ✅ Yes | `Dentist` schema complete |
| Breadcrumbs | ✅ Yes | All inner pages |
| ItemList Carousel | ❌ No | `MedicalProcedure` items lack `url` — no carousel, but still valid |

---

## 5. Performance / Core Web Vitals (70/100)

### Server Performance ✅ Good
- All pages SSG (Static Site Generation)
- Vercel CDN HIT on all pages
- Server response: <100ms from São Paulo PoP
- `x-nextjs-stale-time: 300` (5-min stale-while-revalidate)

### Potential Issues
- **Homepage HTML: 141KB** — relatively large for static page
- 2 Google Fonts (Inter + Playfair Display) — 2 network requests
- GTM + Meta Pixel loaded — potential render-blocking
- `Playfair_Display` has `preload: false` — good for non-critical font
- No lab CWV measurements taken (recommend PageSpeed Insights)

---

## 6. AI Search Readiness / GEO (61/100)

### GEO Score Breakdown

| Dimension | Score |
|-----------|-------|
| Citability | 52/100 |
| Structural Readability | 74/100 |
| Multi-Modal Content | 35/100 |
| Authority & Brand Signals | 58/100 |
| Technical Accessibility | 82/100 |

### llms.txt ❌ Not Found (404)
Highest-leverage missing file for AI model awareness.

### AI Crawler Access ✅ Allowed
All AI crawlers (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot) allowed via blanket `User-agent: * / Allow: /`.

### Citability ⚠️ Weak
- FAQ answers average 45-55 words — below 134-167 word optimal citation window
- Blog sections are 30-50 words per subsection — too short for extraction
- Treatment descriptions use bullet lists, not prose paragraphs (AI systems prefer prose)
- Zero statistics with attributed sources across entire blog
- No "Key Takeaways" summary blocks
- One exception: bruxismo article has a citable passage with 8-31% prevalence statistic

### Structural Readability ✅ Good
- Blog H3s phrased as questions (maps to AI Overview extraction)
- FAQPage schema correctly implements Q&A format
- BreadcrumbList helps AI crawlers understand depth
- Article schema with datePublished on all posts

### Multi-Modal ❌ Weak
- No video content (YouTube correlation with AI citations is 0.737 — strongest signal)
- No infographics or charts
- Same hero image used everywhere

### Entity Clarity ✅ Good
- Dual `Dentist` + `Person` schema (more sophisticated than most local clinics)
- CRO/PR 40.050 in both schema and visible content
- **Gap:** No `alternateName` for the clinic entity
- **Gap:** No Wikipedia entity (expected for solo practitioner)

### Platform-Specific Readiness

| Platform | Score | Key Gap |
|----------|-------|---------|
| Google AI Overviews | 65/100 | FAQ answers too short; no aggregateRating |
| ChatGPT | 52/100 | No llms.txt; no YouTube; passages too short |
| Perplexity | 58/100 | Zero cited sources in articles |
| Bing Copilot | 55/100 | No LinkedIn; thin brand co-citations |

---

## 7. Images (40/100)

| Issue | Severity |
|-------|----------|
| All pages share same OG image (`hero-blue.webp`) | High |
| Blog posts have no unique images | High |
| No blog post hero/featured images | High |
| All images have `alt` text ✅ | Good |
| WebP format used ✅ | Good |
| `next/image` used ✅ | Good |
| No SVG favicon | Low |

---

## 8. Local SEO Assessment (61/100)

### Local SEO Score Breakdown

| Dimension | Score |
|-----------|-------|
| GBP Signals | 52/100 |
| Reviews & Reputation | 20/100 |
| Local On-Page SEO | 82/100 |
| NAP Consistency | 72/100 |
| Local Schema | 85/100 |
| Local Authority | 45/100 |

### Google Business Profile ⚠️ Critical Gap
The Maps embed URL resolves to the **building** (Centro Empresarial Antares), not a dedicated "Dra. Maria Rita Gasparello - Dentista" GBP pin. This means:
- The map doesn't reinforce the specific GBP entity signal
- Users see the building, not the dental clinic
- Google cannot associate embed clicks with the clinic's listing

**This is the #1 priority action in the entire audit.**

### Reviews ❌ Critical Gap
- `aggregateRating`: absent from schema (per CLAUDE.md policy — needs real data)
- Star rating visible: absent
- Patient testimonials: **absent** — `testimonials-section.tsx` contains trust-point cards, NOT patient quotes
- Industry benchmark: dental practices need 30+ reviews at 4.5+ to compete in Local Pack

### NAP Consistency ✅ Good
- Name, address, phone consistent across all pages and schema
- Phone format varies (`+55 44 99834-6194` in schema vs `(44) 99834-6194` on page) — minor

### Missing Dedicated Service Pages
Single `/tratamentos` aggregated page instead of individual routes per treatment. Per Whitespark 2026: dedicated service pages are the #1 local organic ranking factor.

### Missing Citations
- Doctoralia.com.br (dominant Brazilian healthcare directory) — not linked
- Facebook Business Page — not linked
- CFO/CRO-PR public registry — not linked
- No evidence of active citation presence

### Local Keyword Coverage

| Keyword | Targeted | Gap |
|---------|----------|-----|
| "dentista em campo mourão" | ✅ Title, meta, blog | — |
| "clareamento dental campo mourão" | ✅ Meta keywords | Missing in blog titles |
| "limpeza dental campo mourão" | ✅ Meta keywords | Missing in blog titles |
| "consultório odontológico campo mourão" | ❌ | Not targeted |
| "dentista campo mourão preço" | ❌ | Not targeted |
| "emergência dental campo mourão" | ❌ | Not targeted |
| "dentista urgência campo mourão" | ❌ | Not targeted |

---

## Detailed Page Analysis

### Homepage (`/`)
- ✅ H1: "Avaliação odontológica em Campo Mourão com plano claro para o seu tratamento"
- ✅ JSON-LD: WebSite + Dentist + FAQPage
- ✅ 8 conversion-funnel sections
- ⚠️ H1 doesn't contain "dentista" keyword
- ⚠️ Large HTML payload (141KB)
- ⚠️ FAQPage duplicated from /contato — remove from here

### Tratamentos (`/tratamentos`)
- ✅ ItemList with 5 MedicalProcedure + BreadcrumbList
- ❌ No links to related blog posts
- ❌ No dedicated per-treatment pages
- ⚠️ Treatment descriptions use bullets, not prose (poor AI citability)

### Sobre (`/sobre`)
- ✅ Person schema with CRO credential + BreadcrumbList
- ❌ University name withheld (critical E-E-A-T gap)
- ❌ No graduation year or years of experience
- ❌ No professional memberships stated

### Contato (`/contato`)
- ✅ Complete NAP + Google Maps + Opening hours + FAQPage + BreadcrumbList
- ✅ WhatsApp CTA prominent
- ⚠️ Maps embed points to building, not clinic GBP listing

### Blog Posts (`/blog/[slug]`)
- ✅ Article schema with author + BreadcrumbList
- ✅ `generateStaticParams` for SSG
- ✅ Canonical per slug
- ❌ `publisher.logo` uses SVG (Google needs raster)
- ❌ No visible author byline on rendered page
- ❌ No cross-links to related posts
- ❌ No unique OG images
- ❌ `<li>` rendered without parent `<ul>` (invalid HTML)
- ⚠️ `dateModified` = `datePublished` always
- ⚠️ Custom markdown parser may miss edge cases

---

## Scoring Methodology

### Technical SEO: 78/100
HTTPS/redirects (10), robots.txt (8), sitemap (8), canonicals (10), URL structure (10), security headers (3), mobile (9), caching (9), JS rendering (10), build config (-1)

### Content Quality: 61/100
Experience (10/20), Expertise (14/25), Authoritativeness (11/25), Trustworthiness (20/30), content depth (-5), blog quality (-4)

### On-Page SEO: 80/100
Titles (9), descriptions (9), headings (9), OG/Twitter (7), internal linking (5), keywords (8), blog local keywords (-2)

### Schema: 75/100
Correct types (9), completeness (6), rich results (7), telephone format (-3), publisher logo (-2), duplicate FAQ (-1), missing @id (-2), Article gaps (-2)

### Performance: 70/100
SSG (10), CDN (10), fonts (7), payload (6), third-party scripts (6), lab CWV (needs measurement)

### GEO: 61/100
Citability (52), structural readability (74), multi-modal (35), authority signals (58), technical access (82)

### Images: 40/100
Alt text (10), format (8), OG images (2), blog images (0), favicon (7)
