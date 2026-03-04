---
name: conversion-guardian
description: Melhorar páginas do projeto dental com foco em conversão para WhatsApp, clareza de proposta de valor, redução de objeções e medição de funil. Use quando houver tarefas de copy, CTA, estrutura de landing page, prova social, FAQ comercial, contato ou otimização de jornada até agendamento.
---

# Conversion Guardian

## Fluxo de execução
1. Identificar a etapa do funil impactada: descoberta, consideração ou decisão.
2. Mapear fricções da página: copy genérica, CTA fraco, falta de prova, objeções não respondidas.
3. Aplicar melhorias com maior impacto primeiro:
- proposta de valor específica;
- CTA primário orientado a ação;
- prova de confiança;
- bloco de objeções;
- reforço de urgência realista.
4. Garantir rastreamento de cliques de conversão.
5. Validar consistência visual e legibilidade mobile.

## Regras de copy
1. Escrever de forma específica e objetiva; evitar frases vagas.
2. Explicitar próximo passo esperado após clique no WhatsApp.
3. Sempre informar benefício ao paciente (resultado, previsibilidade, conforto, segurança).
4. Não inventar dados de prova social ou credenciais.
5. Manter tom humano, profissional e sem exageros promocionais.

## Regras de implementação
1. Gerar links de WhatsApp com `buildWhatsAppUrl(intent, source)` em `lib/whatsapp.ts`.
2. Usar `TrackedExternalLink` para CTAs externos de conversão.
3. Manter evento `whatsapp_click` com `source` e `intent` no `eventData`.
4. Reaproveitar componentes existentes antes de criar novos blocos.

## Intenções padrão de WhatsApp
- `consulta-geral`
- `avaliacao`
- `primeira-consulta`
- `clareamento`
- `limpeza`
- `visita-consultorio`

## Checklist de entrega
1. Existe CTA principal acima da dobra ou no primeiro bloco útil?
2. Existe pelo menos um elemento de confiança verificável?
3. Existe resposta para objeções comuns (dor, tempo, custo/pagamento)?
4. O clique do CTA está rastreado?
5. O texto está curto e escaneável em mobile?
