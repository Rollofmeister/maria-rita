# SEO Action Plan — dramariarita.com

**Generated:** 2026-03-30
**Current Score:** 68/100
**Target Score:** 85/100

Consolidado a partir de 7 agentes especialistas: Technical SEO, Content/E-E-A-T, Schema, Sitemap, GEO/AI, Local SEO, e Codebase Explorer.

---

## Critical (Corrigir Imediatamente)

### 1. Verificar e reivindicar o Google Business Profile (GBP)
**Impact:** Local SEO +20 pts | **Effort:** 1-2 horas + tempo de verificação Google

O embed do Maps aponta para o **prédio** (Centro Empresarial Antares), não para um pin dedicado "Dra. Maria Rita Gasparello - Dentista". Sem GBP verificado, o site **não pode aparecer no Local Pack**.

**Ações:**
1. Criar/reivindicar listing no Google Business Profile com categoria "Dentista"
2. Após verificação, atualizar `clinicMapEmbedUrl` e `clinicMapLink` em `lib/clinic-info.ts` com o place ID da listagem
3. Adicionar URL do GBP ao array `sameAs` em `lib/seo.ts`

### 2. Adicionar nome real da universidade no /sobre
**Impact:** E-E-A-T +8 pts | **Effort:** 5 min

"Universidade reconhecida com excelência na formação de cirurgiões-dentistas" é o gap de E-E-A-T mais prejudicial do site. Quality raters de Google especificamente sinalizam vagueza de credenciais em páginas de profissionais médicos.

**Arquivo:** `app/sobre/page.tsx` — substituir pelo nome real da instituição.

### 3. Criar página de Política de Privacidade
**Impact:** Trust +5 pts, LGPD compliance | **Effort:** 1 hora

O site roda GTM + Meta Pixel mas não tem `/politica-de-privacidade`. Sob LGPD isso é risco legal e red flag de confiança.

**Ação:** Criar `app/politica-de-privacidade/page.tsx` com metadata e link no footer.

### 4. Corrigir formato de telefone no schema (E.164)
**Impact:** Schema +3 pts | **Effort:** 5 min

**Arquivo:** `lib/seo.ts`, linha do `telephone`

```diff
- telephone: "+55 44 99834-6194",
+ telephone: "+5544998346194",
```

### 5. Corrigir `publisher.logo` no Article schema
**Impact:** Schema +2 pts, Article Rich Results | **Effort:** 10 min

`icon.svg` não é aceito. Google exige imagem raster (PNG/WebP) de no mínimo 60px de altura.

**Arquivo:** `app/blog/[slug]/page.tsx`

```diff
- url: absoluteUrl("/icon.svg"),
+ url: absoluteUrl("/images/hero-blue.webp"),
+ width: 1200,
+ height: 630,
```

### 6. Adicionar security headers
**Impact:** Technical +8 pts | **Effort:** 15 min

**Arquivo:** `next.config.mjs`

```js
headers: async () => [
  {
    source: '/(.*)',
    headers: [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
    ],
  },
],
```

### 7. Criar `llms.txt`
**Impact:** GEO/AI +15 pts | **Effort:** 20 min

**Arquivo:** `public/llms.txt`

```
# Dra. Maria Rita Gasparello

> Cirurgiã-dentista em Campo Mourão, PR. CRO/PR 40.050. Atendimento humanizado
> com foco em odontologia preventiva, limpeza, clareamento e restaurações.

## Páginas principais

- [Sobre a dentista](/sobre): Formação, filosofia de trabalho e localização
- [Tratamentos](/tratamentos): Prevenção, limpeza, clareamento, restaurações
- [Blog](/blog): Artigos educativos sobre saúde bucal
- [Contato](/contato): Endereço, horários e agendamento pelo WhatsApp

## Informações de contato

- Telefone/WhatsApp: +55 44 99834-6194
- Endereço: Av. Cap. Índio Bandeira, 1400, Sala 303, Campo Mourão - PR, 87300-005
- Horário: Segunda a sexta 08h-18h, sábado 08h-12h
```

---

## High Priority (Corrigir em 1 Semana)

### 8. Adicionar byline de autora visível nos blog posts
**Impact:** E-E-A-T +5 pts | **Effort:** 30 min

O Article schema tem `author.name` mas a página renderizada **não mostra o nome da autora**. Adicionar entre o título e a data:

"Dra. Maria Rita Gasparello, CRO/PR 40.050"

**Arquivo:** `app/blog/[slug]/page.tsx`

### 9. Adicionar `author.url` no Article schema
**Impact:** Schema +2 pts, entity resolution | **Effort:** 10 min

**Arquivo:** `app/blog/[slug]/page.tsx`

```ts
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
```

### 10. Remover FAQPage duplicado da homepage
**Impact:** Schema +1 pt, content quality | **Effort:** 5 min

O mesmo `faqPageSchema` aparece em `/` e `/contato`. Remover do `app/page.tsx`, manter apenas em `/contato`.

### 11. Corrigir `streetAddress` no schema
**Impact:** Schema +1 pt, citation matching | **Effort:** 5 min

**Arquivo:** `lib/seo.ts`

```diff
- streetAddress: "Av. Cap. Índio Bandeira, 1400 - Centro, Campo Mourão - PR, 87300-005, Sala 303, 3º andar",
+ streetAddress: "Av. Cap. Índio Bandeira, 1400, Sala 303, 3º andar",
```

### 12. Adicionar `@id` em todos os schemas
**Impact:** Schema +3 pts | **Effort:** 30 min

**Arquivo:** `lib/seo.ts`

```ts
localBusinessSchema: { "@id": "https://dramariarita.com/#dentist", ... }
websiteSchema: { "@id": "https://dramariarita.com/#website", ... }
dentistPersonSchema: { "@id": "https://dramariarita.com/#person", ... }
```

### 13. Adicionar cross-links entre blog posts
**Impact:** On-Page +5 pts, Content +3 pts | **Effort:** 1 hora

Adicionar seção "Leia também" no final de cada post + links contextuais para `/tratamentos`.

| Post | Linkar para |
|------|-------------|
| dor-de-dente | restauracao-dental, 5-sinais |
| gengivite | higiene-bucal, limpeza-dental |
| bruxismo | restauracao-dental, 5-sinais |
| restauracao-dental | dor-de-dente, clareamento |
| mau-halito | higiene-bucal, gengivite |
| higiene-bucal | limpeza-dental, gengivite |
| como-escolher-dentista | 5-sinais, limpeza-dental |
| clareamento | como-escolher-dentista, limpeza-dental |
| 5-sinais | dor-de-dente, gengivite |
| limpeza-dental | higiene-bucal, gengivite |

### 14. Adicionar `image` e `description` no Person schema
**Impact:** Schema +2 pts, Knowledge Panel | **Effort:** 10 min

**Arquivo:** `lib/seo.ts` — `dentistPersonSchema`

```ts
image: absoluteUrl("/images/hero-new.webp"),
description: "Cirurgiã-Dentista em Campo Mourão, PR. CRO/PR 40.050. Especialista em odontologia preventiva, clareamento dental e restaurações.",
```

### 15. Corrigir `lastmod` do /blog no sitemap
**Impact:** Sitemap accuracy | **Effort:** 5 min

**Arquivo:** `app/sitemap.ts`

```diff
- lastModified: new Date("2026-03-01"),
+ lastModified: new Date(blogPosts[0].date),
```

---

## Medium Priority (Corrigir em 1 Mês)

### 16. Expandir os 4 blog posts finos para 1.000+ palavras
**Impact:** Content +10 pts, GEO +5 pts | **Effort:** 4-6 horas

Posts abaixo de 400 palavras com conteúdo genérico:
- **como-escolher-dentista** (~320 palavras) — adicionar critérios específicos, perguntas para fazer na primeira consulta
- **5-sinais** (~280 palavras) — expandir cada sinal com explicação clínica
- **clareamento** (~380 palavras) — adicionar contraindicações, química do peróxido, concentrações
- **limpeza-dental** (~350 palavras) — diferenciar supragengival/subgengival, ultrassom vs manual

**Arquivo:** `lib/blog-data.ts`

### 17. Adicionar 1 estatística com fonte por blog post
**Impact:** GEO +8 pts (all platforms) | **Effort:** 3 horas

Nenhum dos 10 posts cita fonte externa. AI systems usam evidência citada como multiplicador de confiança.

Exemplo: "Segundo a Organização Mundial da Saúde, as doenças bucais afetam cerca de 3,5 bilhões de pessoas no mundo (OMS, 2023)."

### 18. Expandir FAQ answers para 134-167 palavras cada
**Impact:** GEO +5 pts (Google AI Overviews) | **Effort:** 2 horas

Respostas atuais em `lib/faq-data.ts` têm 45-55 palavras. A janela ideal de citação para AI é 134-167 palavras.

### 19. Gerar OG images únicos por blog post
**Impact:** Images +15 pts, Social sharing | **Effort:** 2 horas

Usar `@vercel/og` / Satori para gerar imagens dinâmicas com título do post e branding.

### 20. Converter bullet lists de tratamentos para prosa
**Impact:** GEO +3 pts (citability) | **Effort:** 2 horas

Descrições em `/tratamentos` usam bullets curtos. AI systems extraem parágrafos em prosa, não listas fragmentadas. Adicionar 2-3 frases introdutórias em prosa (80-120 palavras) antes dos bullets.

**Arquivo:** `app/tratamentos/page.tsx`

### 21. Criar páginas dedicadas por tratamento
**Impact:** Local SEO +8 pts | **Effort:** 4-6 horas

Substituir/complementar `/tratamentos` com rotas individuais:
- `/tratamentos/clareamento-dental`
- `/tratamentos/limpeza-dental`
- `/tratamentos/restauracoes-dentarias`
- `/tratamentos/prevencao-odontologica`

Cada com `MedicalProcedure` schema, keyword local no H1, e CTA único. Per Whitespark 2026: #1 fator de ranking orgânico local.

### 22. Adicionar `article:author` e `article:section` OG tags
**Impact:** On-Page +2 pts | **Effort:** 15 min

**Arquivo:** `app/blog/[slug]/page.tsx` — `generateMetadata`

```ts
openGraph: {
  // ...existing
  authors: ['Dra. Maria Rita Gasparello'],
  section: post.category,
}
```

### 23. Explicitar AI crawlers no robots.txt
**Impact:** GEO +3 pts | **Effort:** 10 min

**Arquivo:** `app/robots.ts`

```ts
rules: [
  { userAgent: '*', allow: '/' },
  { userAgent: 'GPTBot', allow: '/' },
  { userAgent: 'ClaudeBot', allow: '/' },
  { userAgent: 'Google-Extended', allow: '/' },
],
```

### 24. Corrigir bug de `<li>` sem `<ul>` no parseMarkdown
**Impact:** Accessibility, AI parsing | **Effort:** 30 min

**Arquivo:** `app/blog/[slug]/page.tsx` — a função `parseMarkdown` emite `<li>` sem wrapper `<ul>`. HTML inválido que quebra screen readers.

### 25. Expandir `sameAs` com diretórios verificados
**Impact:** Local SEO +3 pts, GEO +3 pts | **Effort:** 30 min (após criação dos perfis)

**Arquivo:** `lib/seo.ts` — arrays `sameAs`

Adicionar: Google Business Profile, Doctoralia.com.br, LinkedIn, CFO/CRO-PR registry URL.

---

## Low Priority (Backlog)

### 26. Criar perfil no Doctoralia.com.br
Diretório dominante de saúde no Brasil. Citation source + canal de agendamento.

### 27. Adicionar location modifiers nos títulos dos blog posts
"clareamento-dental-tudo-que-voce-precisa-saber" → "clareamento-dental-campo-mourao". **Atenção:** mudança de slug requer 301 redirects se já indexado.

### 28. Implementar estratégia de reviews
Coletar 10+ avaliações reais no Google. Depois adicionar `aggregateRating` ao schema (só com dados confirmados, per CLAUDE.md).

### 29. Reconstruir testimonials-section.tsx com depoimentos reais
O componente atual contém trust cards genéricos, não citações de pacientes.

### 30. Criar conteúdo para keywords não cobertas
- "Emergência dental campo mourão" (alta intenção de conversão)
- "Dentista campo mourão preço"
- "Implante dental campo mourão"
- "Odontologia para gestantes"

### 31. Mudar `Article` para `BlogPosting` no schema
Subtipo mais preciso semanticamente.

### 32. Remover `changeFrequency` e `priority` do sitemap
Google ignora ambos. Simplifica código.

### 33. Separar `dateModified` de `datePublished` nos blog posts
Adicionar campo `updatedAt?: string` na interface `BlogPost` em `lib/blog-data.ts`.

### 34. Adicionar "praticando desde YYYY" no /sobre
Sinal de experiência temporal mais simples possível.

### 35. Adicionar observações clínicas de primeira pessoa nos posts
"Na minha prática, a saburra lingual não tratada é a causa mais frequente de halitose..." — sinal direto de Experience (primeiro E do E-E-A-T).

### 36. Substituir `openingHours` string por `openingHoursSpecification` estruturado
Schema.org prefere o formato com `dayOfWeek`, `opens`, `closes`.

### 37. Remover `ignoreBuildErrors: true` do next.config.mjs
Corrigir os erros TypeScript subjacentes e remover flag.

---

## Roadmap de Implementação

| Semana | Tarefas | Ganho Esperado |
|--------|---------|----------------|
| **Semana 1** | #1 GBP, #2 Universidade, #3 Privacidade, #4 Telefone, #5 Logo, #6 Headers, #7 llms.txt | +15 pts → 83/100 |
| **Semana 2** | #8-15 (Schema fixes, byline, cross-links, Person image) | +7 pts → 90/100 |
| **Semana 3** | #16-20 (Blog expansion, FAQ expansion, OG images, prose) | +8 pts → 92/100 |
| **Semana 4** | #21-25 (Service pages, OG tags, robots, sameAs, li bug) | +5 pts → 93/100 |
| **Ongoing** | #26-37 (Backlog — citations, reviews, new content) | +2-5 pts → 95/100 |

**Score Projetado Após Todas as Mudanças: ~90-95/100**

---

## Resumo de Arquivos a Alterar

| Arquivo | Itens |
|---------|-------|
| `lib/seo.ts` | #4, #11, #12, #14, #25, #31, #36 |
| `app/blog/[slug]/page.tsx` | #5, #8, #9, #22, #24 |
| `next.config.mjs` | #6, #37 |
| `public/llms.txt` | #7 (criar) |
| `app/page.tsx` | #10 |
| `app/sitemap.ts` | #15, #32 |
| `lib/blog-data.ts` | #13, #16, #17, #33 |
| `lib/faq-data.ts` | #18 |
| `app/tratamentos/page.tsx` | #20, #21 |
| `app/robots.ts` | #23 |
| `lib/clinic-info.ts` | #1 (após GBP) |
| `app/sobre/page.tsx` | #2, #34 |
| `app/politica-de-privacidade/page.tsx` | #3 (criar) |
| `components/home/testimonials-section.tsx` | #29 |
| `components/footer.tsx` | #3 (link privacidade) |
