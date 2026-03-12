---
name: seo-auditor
description: Auditar o site da Dra. Maria Rita Gasparello para SEO local e indexação no Google. Use quando a tarefa envolver metadata, Schema.org, sitemap, robots, canonicals, performance de indexação ou estratégia de palavras-chave.
---

# SEO Auditor — Dra. Maria Rita Gasparello

## Objetivo estratégico
Aparecer no **Google Local Pack** ("dentista perto de mim") e nos resultados orgânicos para buscas com intenção local em Campo Mourão - PR. SEO local precede SEO orgânico genérico em prioridade.

## Palavras-chave alvo

### Primárias (intenção transacional)
- dentista em campo mourão
- dentista campo mourão
- clínica odontológica campo mourão

### Secundárias (por tratamento)
- clareamento dental campo mourão
- limpeza dental campo mourão
- restauração dentária campo mourão
- prevenção odontológica campo mourão

### Long-tail (blog / topo de funil)
- como escolher um dentista em campo mourão
- clareamento dental é seguro
- com que frequência fazer limpeza dental
- sinais de que precisa ir ao dentista

## Schemas esperados por rota

| Rota | Schemas obrigatórios |
|------|----------------------|
| `/` (home) | `WebSite` + `Dentist` (via layout) |
| `/tratamentos` | `Dentist` (herda layout) + `ItemList` de `MedicalProcedure` |
| `/sobre` | `Dentist` (herda layout) + `Person` (dentista) |
| `/contato` | `Dentist` (herda layout) + `FAQPage` |
| `/blog/[slug]` | `Dentist` (herda layout) + `Article` |

## Fluxo de auditoria

1. **Metadata por página**: título (~55 chars), descrição (~155 chars), keyword local explícita, canonical correto.
2. **Schema.org**: validar com [schema.org/validator](https://validator.schema.org/). Verificar se `Dentist` em `lib/seo.ts` tem `geo`, `openingHours`, `telephone`, `address` preenchidos.
3. **Sitemap**: confirmar que `/sitemap.xml` inclui todas as rotas e posts de blog. `lastModified` deve ser dinâmico por post.
4. **Robots**: confirmar que `Allow: /` está sem bloqueios indevidos.
5. **Core Web Vitals**: `images: { unoptimized: true }` em `next.config.mjs` — avaliar impacto em LCP se o site for hospedado em CDN que não otimize imagens.
6. **Conteúdo**: cada página de tratamento e post de blog menciona "Campo Mourão" ao menos uma vez no corpo do texto.
7. **Links internos**: verificar se a home linka para `/tratamentos`, `/sobre`, `/contato`, `/blog`.

## Checklist por tipo de página

### Home (`/`)
- [ ] H1 contém keyword local ("Campo Mourão" ou "dentista")
- [ ] Metadata herda corretamente do `layout.tsx`
- [ ] `Dentist` + `WebSite` schemas injetados via layout

### Tratamentos (`/tratamentos`)
- [ ] Canonical `/tratamentos`
- [ ] H1 descreve o serviço com keyword local
- [ ] `ItemList` de `MedicalProcedure` injetado
- [ ] Cada tratamento tem `name` e `description` únicos

### Sobre (`/sobre`)
- [ ] Canonical `/sobre`
- [ ] `Person` schema com `hasCredential` (CRO/PR 40.050) injetado
- [ ] Nome completo da dentista no H1

### Contato (`/contato`)
- [ ] Canonical `/contato`
- [ ] `FAQPage` schema injetado (já existe)
- [ ] Endereço e telefone visíveis no HTML (não só no mapa)
- [ ] Horários de atendimento visíveis no HTML

### Blog post (`/blog/[slug]`)
- [ ] Canonical `/blog/[slug]`
- [ ] `Article` schema injetado com `datePublished`, `author`, `headline`
- [ ] Título contém keyword de cauda longa
- [ ] Corpo menciona "Campo Mourão" pelo menos uma vez

## Regras de implementação

1. Schemas ficam em `lib/seo.ts` quando são reutilizáveis; inline na página quando dependem de dados locais.
2. Nunca adicionar `aggregateRating` sem dados reais de avaliações verificáveis.
3. Nunca adicionar `priceRange` sem confirmação do cliente.
4. `openingHours` deve estar sincronizado com o array `hours` em `app/contato/page.tsx`.
5. Sempre usar `absoluteUrl()` de `lib/seo.ts` para URLs em schemas — nunca hardcode.

## O que NÃO mudar (já está correto)
- Canonicals por página: todas as rotas exportam o próprio canonical
- Robots: `Allow: /` com sitemap referenciado
- Sitemap: dinâmico cobrindo estáticas + posts de blog
- OG tags e Twitter cards: presentes no layout raiz e em posts de blog
- `Article` schema nos posts de blog: já injetado em `app/blog/[slug]/page.tsx`
- `FAQPage` schema na página de contato: correto, a FAQ é renderizada lá
