# Plano de teste — Reels (Olá Experience)

**Criado:** 07/09/2026
**Status:** Aprovado (abordagem + episódios) em 07/09/2026. Primeiro Reel (T1E06) já renderizado, aguardando revisão do Jorge antes de publicar.
**Contexto:** campanha ativa é 100% carrossel (foto ou texto); Reels tende a ampliar alcance de não-seguidores muito além do que carrossel consegue hoje (ver `agents/companion/data/contexto-dinamico.md`).

## Abordagem recomendada — "Reels de arquivo" (sem custo de ferramenta)

Reaproveitar arte já aprovada dos episódios publicados em vez de gerar vídeo novo por IA:

1. Pegar as 3-4 imagens de um episódio já no ar (raw + slides do carrossel).
2. Montar um vídeo curto com zoom/pan lento em cada imagem (efeito Ken Burns) + transições simples, via `ffmpeg` (já instalado no projeto, `ffmpeg-static` no `package.json` — sem custo extra).
3. Sobrepor o mesmo texto/headline já usado no carrossel.
4. Áudio: escolher música da biblioteca de tendências do próprio Instagram no momento de postar (gratuito, sem precisar gerar áudio). **Critério de escolha (07/09/2026, ideia do Jorge):** o Instagram da Família Horizonte também constrói terreno pro Zai Cantor — cujo estilo musical será "pop família suave" (ver `ZAI CANTOR/plano-de-negocios.md`). Priorizar músicas de tendência nessa mesma linha (pop suave, acústico, clima acolhedor de família) em vez de qualquer trend do momento, pra já criar familiaridade sonora com o público antes do Zai estrear.

**Por que essa e não gerar vídeo com IA (Kling):** o crédito do Kling já zerou 2x nesta campanha e reativar tem custo recorrente. A abordagem de arquivo usa só o que já foi pago/produzido, zero risco financeiro extra — bate com a regra de evolução incremental (reusar antes de criar).

## Conteúdo do teste

Reaproveitar 3 episódios que já têm arte aprovada e resultado conhecido como carrossel:
- T1E06 — "Cada pessoa tem seu ritmo" (o mais turbinado, maior alcance pago)
- T1E11 — "Cinco minutos só meus"
- T1E15 — "Não precisa ser só a gente" (abertura do Bloco Cardio)

Usar episódios já validados reduz risco (arte já aprovada, sem gerar nada novo) e isola a variável real do teste: **o formato Reels amplia alcance de conteúdo que já sabemos que performa bem?**

## Cadência

1 Reel por semana, por 3 semanas, dentro da janela atual da campanha de 60 dias — entra como conteúdo **extra**, não substitui nenhum Arte/Frase já agendado (mesma lógica usada com a Frase diária de setembro).

## Métrica de comparação

Reportar no ritual semanal de segunda-feira (já existente):
- Alcance de não-seguidores do Reel vs. média dos últimos carrosséis
- Contas atingidas e visualizadores únicos
- Seguidores ganhos na semana do teste vs. semana equivalente sem Reels

## Decisão pendente do Jorge

1. ~~Aprovar a abordagem "Reels de arquivo" (sem custo) em vez de recarregar Kling.~~ — aprovado 07/09/2026.
2. ~~Confirmar os 3 episódios escolhidos (ou trocar algum).~~ — aprovado 07/09/2026.
3. ~~Dar sinal verde pra eu montar o primeiro Reel.~~ — feito.
4. **Revisar e aprovar a publicação** do primeiro Reel (T1E06) antes de postar — vídeo enviado, aguardando "publica". **Confirmado pelo Jorge (07/09/2026): não publicar antes de testarmos.**

## Log

- 07/09/2026 — Companion: renderizado o primeiro Reel de teste (T1E06 "Cada um no seu próprio ritmo"), 9s, 1080x1920, sem áudio embutido (áudio de tendência a escolher no momento de postar). Script reutilizável: `scripts/gerar-reel-teste-t1e06.mjs` — compõe cada imagem num canvas 1080x1920 (fundo desfocado + arte original centralizada, sem cortar personagem) via `sharp`, aplica zoom/pan (Ken Burns) via `ffmpeg` (zoompan) em cada trecho e concatena. Fonte: capa + arte-bruta + slide de mensagem + fechamento do próprio episódio, zero custo de geração nova. Arquivo final em `REELS FAMÍLIA HORIZONTE/T1E06-ritmo/reel-t1e06-teste.mp4`, enviado ao Jorge pra revisão. **Organização (07/09/2026, pedido do Jorge):** criada pasta própria na raiz do repositório, `REELS FAMÍLIA HORIZONTE/`, com uma subpasta por episódio (nome igual ao slug do episódio, ex. `T1E06-ritmo/`) — separado das pastas de carrossel em `INSTAGRAM OLÁ/`, mesmo padrão de "projeto próprio na raiz" já usado em `ZAI CANTOR/`.
