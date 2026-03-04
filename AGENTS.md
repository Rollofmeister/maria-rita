# AGENTS.md - Projeto Dental

## Objetivo do Produto
Manter o site da clínica com foco em **conversão para WhatsApp**, sem perder clareza clínica, confiança e consistência visual.

## Premissas Obrigatórias de Manutenção
1. Priorizar decisões de **conversão**: proposta de valor específica, CTA claro e redução de fricção.
2. Evitar copy genérica; sempre explicitar benefício prático, localidade e próximo passo.
3. Não inventar prova social, credenciais ou números sem fonte confirmada.
4. Preservar identidade visual atual (tom profissional, limpo, legível em mobile e desktop).
5. Toda mudança de CTA deve considerar rastreamento e intenção do usuário.

## Padrões Técnicos Obrigatórios
1. Links de WhatsApp devem ser gerados por `buildWhatsAppUrl` em [lib/whatsapp.ts](/home/luiz/Documents/dental/lib/whatsapp.ts).
2. Links externos de conversão devem usar `TrackedExternalLink` em [components/tracked-external-link.tsx](/home/luiz/Documents/dental/components/tracked-external-link.tsx).
3. Eventos devem usar o nome `whatsapp_click` e `eventData` com `source` + `intent`.
4. Em novas seções comerciais, manter ao menos um CTA primário de ação direta.

## Checklist para Qualquer Alteração
1. A seção responde: "por que escolher", "o que acontece agora" e "como agendar"?
2. O CTA tem intenção adequada (`avaliacao`, `primeira-consulta`, etc.)?
3. O clique do CTA está rastreado?
4. A copy reduz objeções (dor, tempo, pagamento, confiança)?
5. A leitura no mobile permanece objetiva e escaneável?

## Skill Local do Projeto
Use a skill local abaixo sempre que a tarefa envolver copy, layout de landing pages, CTAs ou funil de agendamento:
- `conversion-guardian`: [skills/conversion-guardian/SKILL.md](/home/luiz/Documents/dental/skills/conversion-guardian/SKILL.md)
