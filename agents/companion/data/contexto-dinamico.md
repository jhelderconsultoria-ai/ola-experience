# Contexto Dinamico

> Estado atual da empresa e do expert. Atualizado a cada sessao significativa.

## Status Geral

Olá Experience em fase pre-operacional (nao pode anunciar atendimento ainda — falta formacao/registro do Jorge em Educacao Fisica). Foco atual e 100% construcao de presenca no Instagram @olaexperienceoficial com a narrativa da Familia Horizonte.

## Campanhas Ativas

- **Instagram Olá Experience** — bio, foto de perfil, arte 01 e carrossel do episodio 3 ("Vamos fazer alguma coisa?") publicados. Arte 02 (video animado, Kling) foi publicada e depois excluida por pedido do expert (musica sintetizada nao agradou). Linha editorial migrou de video/imagem gerada por IA pra carrossel de texto (mais rapido, sem depender de credito Kling). Temporada 2 ("A gente ainda tem tempo" — arco da avo Dora e do avo Beto, os 4 pilares) planejada em `INSTAGRAM OLÁ/TEMPORADA-2-AVOS.md`, ainda nao comecou a publicar.
- **Cadencia de postagem:** terca e sabado, 2x/semana, decidida pelo expert.
- **Automacao de postagem:** expert avaliou ir direto pra API oficial da Meta (publicacao 100% automatica) mas decidiu adiar — nao tem Facebook ainda. Por enquanto opera em modo semi-automatico: eu deixo arte/legenda prontas com antecedencia, expert so confirma "publica" no dia.

## Prioridades do Momento

1. Preparar com antecedencia os proximos episodios (4-9 da Temporada 1, depois Temporada 2) em carrossel, prontos pra confirmar e publicar terca/sabado.
2. Reavaliar automacao total (API Meta) quando o expert tiver Facebook/Business Manager — precisa: Pagina do Facebook, App de desenvolvedor Meta, token de longa duracao (System User), e um jeito de hospedar imagem publicamente (API nao aceita arquivo local).
3. Comprar credito Kling se video voltar a ser usado (saldo zerou 2x nesta sessao) — hoje fora de uso, prioridade baixa.

## Onde Parou

Episodio 3 (carrossel) publicado e corrigido (ver Notas Tecnicas — canvas precisou virar quadrado). Bio atualizada pra formato "enigmatico" com os 4 pilares nomeados + #JornadaOlá. Proximo passo e episodio 4 da Temporada 1 ("A primeira caminhada") quando o expert pedir.

## Notas Tecnicas

- MCP `@mindstone/mcp-server-kling` instalado local (nao via npx) porque foi patchado pra autenticar com `KLING_API_KEY` unica (Bearer token) — a Kling migrou do esquema antigo (access+secret key/JWT) pro novo. Patch vive em `node_modules/@mindstone/mcp-server-kling/dist/{auth,client,tools/configure}.js` e **se perde** se o pacote for reinstalado do zero — reaplicar se `npm install` limpar o node_modules.
- `sharp`, `ffmpeg-static` e `@mindstone/mcp-server-kling` estao declarados em `package.json` (devDependencies) especificamente pra evitar que um `npm install` de um derrube o outro (aconteceu 2x nesta sessao, agravado pelo OneDrive sincronizando no meio da escrita).
- Pasta do projeto fica dentro do OneDrive — escritas rapidas de varios arquivos (ex: os 6 slides do carrossel) podem sumir temporariamente por sincronizacao; se sumir, e so regenerar via script (nada e feito manualmente, tudo reprodutivel).
- Carrosseis do Instagram devem ser gerados em **1080x1080 (quadrado)**, nao 1080x1350 (4:5) — o Instagram corta todo carrossel pra quadrado no upload independente da proporcao enviada, e isso cortava titulo/avatar/logo antes de eu descobrir. Os scripts em `scripts/gerar-carrossel-03-vamos-fazer.mjs`, `scripts/gerar-capa-carrossel-03.mjs` e `scripts/adicionar-avatares-carrossel-03.mjs` ja usam W=1080,H=1080 — manter esse padrao em episodios futuros.
- O arquivo `marca-ola-experience-caminho.png` (assinatura-mae) **nao tem transparencia real** — o fundo e um checker cinza solido gravado nos pixels (hasAlpha:false), nao alpha channel. Colar ele direto em cima de qualquer fundo colorido vira uma caixa cinza apagada. Use sempre `marca-ola-experience-caminho-transparente.png` (gerado nesta sessao, fundo removido por saturacao/diff de cor) pra qualquer composicao futura.

---

*Ultima atualizacao: 04/09/2026*
