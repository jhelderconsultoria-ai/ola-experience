# Suas Customizações — Sobrevivem a Updates

> Este arquivo é SEU. O update do Auroq OS (e do Pack Arcane) **nunca** sobrescreve ele.
> Tudo que você quer que valha pra sempre — regras de comportamento, preferências,
> overrides — escreve AQUI, não no CLAUDE.md nem nas outras rules.

## Por que aqui e não no CLAUDE.md?

O `CLAUDE.md` e as outras rules (`agent-authority.md`, `natural-language-first.md`, etc.)
são **framework** — toda atualização do Auroq atualiza elas pra trazer melhorias. Se você
editar uma delas direto, sua mudança é perdida no próximo update.

Este arquivo (`custom-do-aluno.md`) e o `settings.local.json` são os únicos lugares de
config que o update **preserva**. Coloque suas regras aqui.

## Como escrever uma regra

Linguagem natural, direto. O Auroq carrega este arquivo automaticamente junto com as
outras rules. Exemplos:

- "Quando eu pedir pra rodar algo, executa direto sem ficar pedindo confirmação a cada passo."
- "Nunca commita sem eu mandar."
- "Responde sempre em português, casual."

## Suas regras

- **Usar o MCP `arcane` a fundo (220%, nas palavras do Jorge) em tudo que for criado ou avaliado a partir de 08/09/2026 — não só consultar de leve, CRIAR JUNTO com os agentes o tempo todo.** Vale em todos os projetos, presentes e futuros, sem distinção: Instagram Família Horizonte (8000), Zai Cantor (8001) e qualquer outro que vier depois. Motivo dado pelo Jorge: ele paga caro pelo Pack Arcane especificamente por essas ferramentas (Squad Conteúdo Arcane, Squad Carrossel Arcane, Squad Posicionamento Arcane, Squad Anúncios Arcane, etc.) e quer usar o valor todo, não deixar parado.
  - **Antes de criar** algo do zero (post, roteiro, copy, criativo, bíblia, estratégia): `catalogo_listar`/`busca` pra achar o squad certo, `squad_ativar` pra assumir a persona dele de verdade (não só ler por cima), e seguir a task/workflow dele passo a passo com os dados reais do projeto (bíblia, bio, posts publicados, métricas) — igual foi feito na análise da bíblia e no núcleo de influência em 08/09/2026.
  - **Depois de criar ou publicar**, reavaliar o resultado com o agente certo (ex.: Aria pra diagnóstico de post publicado) antes de considerar fechado.
  - Isso é reforço explícito do Gate 1 (REUSE) da rule `evolucao-incremental.md` — a diferença agora é que não basta consultar, tem que criar em conjunto e depois reavaliar.
