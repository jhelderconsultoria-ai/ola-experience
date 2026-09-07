# TRACKER — Zai, Cantor Gospel de IA

> Execucao viva do projeto. Todos os agentes leem e atualizam este arquivo.
> Playbook / bíblia de estudo: `plano-de-negocios.md` (fases, orçamento, riscos, critérios de avanço)
> Cockpit: [cockpit](../business/cockpit.md)

**Inicio:** 07/09/2026
**Deadline:** sem deadline
**Dono geral:** Jorge Helder
**Status:** Ativo

---

## OBJETIVO

Transformar o Zai (personagem da série Família Horizonte / Jornada Olá, T1) num
artista musical gospel de IA com identidade e conta própria — no molde do case
real @hikaridejesus (1 milhão de seguidores, "1° cantor gospel de IA do
Brasil"): persona com biografia fixa, música real gerada com voz (não só
letra em texto), distribuição em streaming (Spotify/Apple Music/YouTube) via
agregador digital, Reels de divulgação com a faixa tocando de verdade.

**Decisão de estrutura (07/09/2026):** conta/marca separada da
@olaexperienceoficial — não mistura o personagem-criança da série com a
persona de "artista adulto" do Zai cantor.

**Base já existente:** banco de letras 100% originais em
`ZAI CANTOR/zai-poesias-gospel.md`
(autoria confirmada, checada contra músicas gospel reais — sem cópia), e a
bíblia do personagem Zai na Temporada 1.

---

## FASES

> Numeração e critérios de avanço/parada detalhados em `plano-de-negocios.md`.
> Cada fase só libera orçamento da próxima se passar no critério — dinheiro é limitado.

| # | Fase | Custo | Status | Inicio | Fim |
|---|------|-------|--------|--------|-----|
| 1 | Estudo e Fundação | R$ 0 | Em andamento | 07/09/2026 | |
| 2 | Prova de conceito (free tier) | R$ 0 | Não iniciado | | |
| 3 | Produção paga mínima | ~R$ 50-60 | Não iniciado | | |
| 4 | Distribuição oficial | ~R$ 120-150/ano | Não iniciado | | |
| 5 | Escala e divulgação paga | Variável | Não iniciado | | |

**Fase atual:** 1 — Estudo e Fundação

---

## TAREFAS (fase atual)

| Tarefa | Dono | Status | Depende de | Notas |
|--------|------|--------|------------|-------|
| Escolher ferramenta de geração musical com voz | Jorge | Done 07/09 | — | **Suno** (plano Pro, ~R$ 50/mês). Udio descartado: depois do acordo com a UMG, desativou exportação de áudio — não dá pra baixar a faixa, o que inviabiliza a distribuição em streaming (Fase 4) |
| Escolher agregador de distribuição digital | Jorge | Done 07/09 | — | **DistroKid**. TuneCore bloqueia conteúdo 100% IA; Amuse (recomendação inicial, corrigida) não entrega faixas de IA pro Meta/Instagram — prejudicaria a descoberta via Reels, canal principal do projeto |
| Definir nome artístico e identidade visual do Zai como cantor | Jorge + Claude | Done 07/09 | — | Nome: **Zai Horizonte**. Estilo: fotorrealista (aprovado pelo Jorge após comparação lado a lado com versão 3D). Foto oficial em `identidade-visual/zai-horizonte-retrato-fotorrealista-teste.png` |
| Criar conta Instagram separada para o artista | Jorge | Não iniciado | Nome artístico definido (✓) | @zaihorizonte confirmado livre. Bio, destaques (Spotify/YouTube/Apple Music/Sobre mim), padrão visto no @hikaridejesus |
| Decidir se o rótulo "Criador de conteúdo de IA" fica ativado nessa conta | Jorge | Não iniciado | — | Diferente da decisão na Olá Experience (lá fica desligado — ver `agents/companion/data/log-decisoes.md`, 05/09/2026). Aqui pode fazer sentido deixar ligado, já que "cantor de IA" vira parte da identidade pública do artista, como o @hikaridejesus faz |

**Legenda de status:**
- `Done DD/MM` — concluido com data
- `Em andamento` — alguem ta trabalhando
- `Bloqueado` — depende de algo externo
- `Nao iniciado` — na fila desta fase

---

## BLOCKERS

| Blocker | Desde | Impacta | Acao necessaria |
|---------|-------|---------|-----------------|
| — | | | |

---

## LOG

> Mais recente primeiro. Cada entrada: data — agente/pessoa: o que fez.

- 07/09 — Companion: **agregador de distribuição decidido — DistroKid** (corrigindo a recomendação inicial de Amuse). Pesquisa mostrou: TuneCore bloqueia conteúdo 100% gerado por IA; Amuse aceita IA mas não entrega a faixa pro Meta (Instagram/Facebook), prejudicando descoberta via Reels — canal principal de divulgação do projeto. DistroKid aceita IA sem essa exclusão, só exige comprovação de direito comercial (já garantida pelo Suno Pro). Mais uma das 4 tarefas pendentes da Fase 1 concluída — falta só criar a conta Instagram e confirmar o rótulo de IA.
- 07/09 — Companion: **ferramenta de geração musical decidida — Suno** (plano Pro, ~R$ 50/mês). Descartado o Udio: pesquisa mostrou que a plataforma desativou a exportação de áudio depois do acordo com a Universal Music Group — dá pra ouvir dentro do app mas não pra baixar, o que inviabiliza a Fase 4 (distribuição em streaming). Não era mais questão de qualidade de voz, era viabilidade técnica. Uma das 4 tarefas pendentes da Fase 1 concluída.
- 07/09 — Companion: **foto de perfil oficial aprovada pelo Jorge** — versão fotorrealista (`identidade-visual/zai-horizonte-retrato-fotorrealista-teste.png`), testada lado a lado com a versão 3D estilizada. Jorge escolheu a fotorrealista pelo efeito de "parecer humano real" (mesmo impacto que teve ao ver o @hikaridejesus pela primeira vez). Identidade preservada na comparação: mesmo tom de pele, cabelo cacheado escuro volumoso, sobrancelhas grossas, formato de olho castanho. Tarefa de identidade visual da Fase 1 concluída.
- 07/09 — Companion: gerado o retrato de artista do Zai Horizonte — jovem adulto (19-20 anos), estilo 3D estilizado consistente com o padrão adulto já usado na série (Nilo/Lu), identidade facial/capilar herdada do Zai original via recorte de referência do T1E16. A pedido do Jorge, o conteúdo criativo (arte) mora numa pasta própria na raiz do repositório, `ZAI CANTOR/identidade-visual/` — mesmo padrão já usado pela série (`INSTAGRAM OLÁ/`). Foto de perfil já aprovada (ver entrada mais recente do log). **Atualização (07/09):** a pedido do Jorge, tracker e plano de negócios também foram movidos pra dentro de `ZAI CANTOR/` — projeto inteiro (gestão + criativo) agora mora numa única pasta na raiz, fora de `business/`.
- 07/09 — Companion: nome artístico decidido — **Zai Horizonte** ("Horizonte" é o sobrenome narrativo oficial da família na bíblia da série, reforça a ponte com a origin story). Checagem feita antes de fechar (regra do checklist): existe cantor real ativo chamado só "Zai" (MPB, Bahia, single "Imenso", 2025) — "Zai" sozinho colidiria; "Zai Horizonte" não colidiu com nada na pesquisa. Tarefa de identidade artística na Fase 1 do tracker marcada como parcialmente resolvida.
- 07/09 — Companion: decisão narrativa do Jorge registrada — o Zai da Família Horizonte (15 anos) é o "antes" do Zai Cantor; os episódios já publicados (T1E13 "Ainda não saiu, mas quase" e T1E16 "Finalmente Saiu") viram a origin story real do compositor, não uma bio inventada. O Zai Cantor é essa mesma pessoa anos depois, adulto — resolve o risco de gerar imagem fotorrealista de um personagem nominalmente adolescente (levantado antes) e dá gancho de campanha genuíno pro lançamento ("veja onde tudo começou"). Falta só decidir estilo visual final (3D estilizado, recomendado, vs. fotorrealismo com idade ajustada). Registrado na seção 1 e na pergunta em aberto (seção 8) do plano.
- 07/09 — Companion: regra fixada a pedido do Jorge — checklist obrigatório antes de qualquer letra nova do Zai virar oficial (pesquisar título e letra contra obras existentes, checar melodia gerada, documentar autoria em `zai-poesias-gospel.md`, não avançar pra produção sem isso). Registrado na seção 6.5 do plano.
- 07/09 — Companion: aprofundada a seção jurídica do plano a pedido do Jorge (foco em risco e prejuízo financeiro). Achados principais: (1) no Brasil, obra 100% gerada por IA sem participação humana documentada NÃO tem proteção autoral (Lei 9.610/98) — reforça a importância de documentar decisões humanas em cada composição, como já é feito com as letras; (2) o maior risco financeiro real está no contrato da Suno — a responsabilidade por qualquer semelhança com obra de terceiro é do usuário, não da empresa; (3) ECAD já aceita cadastro de obras com IA, mas confirma que obra só-IA não é protegida — não é pendência urgente, só relevante se a música tocar em locais públicos de terceiros. Resumo prático de mitigação adicionado na seção 6.5 do plano.
- 07/09 — Companion: criado `plano-de-negocios.md` a pedido do Jorge — plano em 5 fases com portão de decisão entre cada uma (orçamento só libera se a fase anterior validar), orçamento total estimado ~R$170-210 até ter música publicada em streaming, riscos mapeados (processos judiciais contra Suno/Udio, disclosure obrigatório de IA no Spotify, guardrail de conteúdo religioso). Pesquisa de ferramentas feita com opinião de usuários experientes (não só marketing dos sites): Udio soa mais humano em voz, Suno é mais fácil pra quem começa; Amuse recomendado como distribuidora por integrar automático com TikTok/Instagram. Perguntas em aberto pra Fase 1: nome artístico do Zai, qual letra vira o primeiro single de teste.
- 07/09 — Companion: projeto criado a pedido do Jorge, a partir de análise do perfil real @hikaridejesus (Instagram) como referência de "cantor gospel de IA" — mapeado o que esse case tem (persona com biografia, distribuição multi-plataforma, formato de Reel com áudio real + frase de destaque) e o que falta pro Zai (áudio real gerado com voz, agregador de distribuição, decisão de conta separada). Jorge decidiu: conta separada da Olá Experience, e Fase 1 foca em escolher ferramentas antes de produzir qualquer coisa.

---

## MÉTRICAS (se aplicável)

| Métrica | Baseline | Meta | Atual |
|---------|----------|------|-------|
| Seguidores (conta do Zai) | 0 | — | 0 |
| Singles lançados | 0 | — | 0 |

---

## RETRO (preencher ao concluir)

> Companion preenche com o expert quando o projeto termina.

1. **Deu o resultado esperado?**
2. **O que funcionou?**
3. **O que faria diferente?**
