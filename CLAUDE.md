# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Dental clinic website for **Dra. Maria Rita Gasparello** (Campo Mourão, PR), built with Next.js App Router. The primary goal of every page and component is to drive patient appointments via WhatsApp.

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # ESLint across codebase
npm start        # Run production server
```

No test framework is configured.

## Architecture

- **`app/`** — Next.js App Router pages (home, blog, tratamentos, sobre, contato). `layout.tsx` includes fonts, analytics, and LocalBusiness schema.
- **`components/home/`** — The home page is assembled from 8 conversion-funnel sections (hero → trust → benefits → treatments → objections → testimonials → how-it-works → cta).
- **`components/ui/`** — shadcn/ui primitives; do not edit these directly.
- **`lib/`** — Centralized utilities: `whatsapp.ts` (URL builder), `clinic-info.ts` (address/maps), `seo.ts` (structured data), `blog-data.ts`, `faq-data.ts`, `utils.ts` (shadcn `cn` helper).
- **`components/analytics/`** — GTM + Meta Pixel tags and marketing event helpers.
- **Shared components:** `header.tsx`, `footer.tsx`, `whatsapp-button.tsx` (floating mobile CTA, fixed bottom, lg:hidden), `faq-section.tsx`.

## Mandatory Technical Patterns

1. **WhatsApp links** must always be built with `buildWhatsAppUrl(intent, source)` from `lib/whatsapp.ts`. Never construct WhatsApp URLs inline.
2. **External conversion CTAs** must use `TrackedExternalLink` from `components/tracked-external-link.tsx`.
3. **Analytics events** must use event name `whatsapp_click` with `eventData: { source, intent }`.
4. **Reuse existing components** before creating new ones.

### WhatsApp intent values
`avaliacao` | `consulta-geral` | `primeira-consulta` | `clareamento` | `limpeza` | `visita-consultorio`

## Product Rules (from AGENTS.md)

- Prioritize **conversion** decisions: specific value prop, clear CTA, friction reduction.
- Avoid generic copy; always state a practical benefit, location reference, and next step.
- Never fabricate social proof, credentials, or numbers without a confirmed source.
- Every CTA change must consider tracking and user intent.

## Checklist for Any Change

1. Does the section answer "why choose", "what happens now", and "how to schedule"?
2. Does the CTA have the right intent (`avaliacao`, `primeira-consulta`, etc.)?
3. Is the CTA click tracked?
4. Does the copy reduce objections (pain, time, payment, trust)?
5. Is mobile readability maintained (short, scannable text)?

## Local Skills

For tasks involving copy, landing page layout, CTAs, or scheduling funnel:
```
/conversion-guardian
```
Defined in `skills/conversion-guardian/SKILL.md`.

For tasks involving metadata, Schema.org, sitemap, robots, canonicals, or SEO strategy:
```
/seo-auditor
```
Defined in `skills/seo-auditor/SKILL.md`.

For tasks involving building or redesigning UI components, pages, or visual interfaces:
```
/frontend-design
```
Defined in `skills/frontend-design/SKILL.md`.

## SEO Strategy

**Primary goal:** rank in Google Local Pack for searches in Campo Mourão - PR (local SEO precedes organic SEO in priority).

**Target keywords:** "dentista em campo mourão", "clareamento dental campo mourão", "limpeza dental campo mourão" and long-tail variants on blog posts.

### Schema.org per route

| Route | Schemas |
|-------|---------|
| `/` | `WebSite` + `Dentist` (via layout) |
| `/tratamentos` | layout schemas + `ItemList` of `MedicalProcedure` |
| `/sobre` | layout schemas + `Person` (with CRO/PR credential) |
| `/contato` | layout schemas + `FAQPage` |
| `/blog/[slug]` | layout schemas + `Article` |

### Key SEO files
- `lib/seo.ts` — all reusable schemas and SEO helpers (`localBusinessSchema`, `dentistPersonSchema`, `faqPageSchema`, `websiteSchema`)
- `lib/clinic-info.ts` — geo coordinates, address, map URLs
- `app/sitemap.ts` — auto-generated sitemap (static pages + blog posts)
- `app/robots.ts` — robots rules

### Rules
- Always use `absoluteUrl()` from `lib/seo.ts` for URLs inside schemas.
- `openingHours` in `localBusinessSchema` must stay in sync with the `hours` array in `app/contato/page.tsx`.
- Never add `aggregateRating` or `priceRange` without confirmed real data from the client.

## Environment Variables

```
NEXT_PUBLIC_GTM_ID         # Google Tag Manager ID
NEXT_PUBLIC_META_PIXEL_ID  # Facebook/Meta Pixel ID
```

Canonical site URL is fixed in `lib/seo.ts` as `https://dramariarita.com`.
