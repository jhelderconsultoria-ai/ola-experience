# Contexto Dinamico

> Estado atual da empresa e do expert. Atualizado a cada sessao significativa.

## Status Geral

Olá Experience em fase pre-operacional (nao pode anunciar atendimento ainda — falta formacao/registro do Jorge em Educacao Fisica). Foco atual e 100% construcao de presenca no Instagram @olaexperienceoficial com a narrativa da Familia Horizonte.

## Campanhas Ativas

- **Instagram Olá Experience** — bio, foto de perfil e arte 01 publicados (03/09). Arte 02 (video animado, Kling) foi publicada e depois excluida por pedido do expert (musica sintetizada nao agradou). Carrossel 03 "Vamos fazer alguma coisa?" (6 slides, texto + avatar dos personagens) pronto e aguardando aprovacao de legenda pra publicar.

## Prioridades do Momento

1. Aprovar legenda e publicar o carrossel 03.
2. Decidir se a linha segue em formato carrossel-texto (mais rapido, sem depender de credito Kling) ou volta a intercalar com video/imagem gerada.
3. Comprar credito Kling se video voltar a ser usado (saldo zerou 2x nesta sessao).

## Onde Parou

Carrossel 03 gerado e revisado (`INSTAGRAM OLÁ/conteudo-inicial/carrossel-03-vamos-fazer/`, script reaproveitavel em `scripts/gerar-carrossel-03-vamos-fazer.mjs` + `scripts/adicionar-avatares-carrossel-03.mjs` + `scripts/gerar-capa-carrossel-03.mjs`). Falta so escrever a legenda e publicar.

## Notas Tecnicas

- MCP `@mindstone/mcp-server-kling` instalado local (nao via npx) porque foi patchado pra autenticar com `KLING_API_KEY` unica (Bearer token) — a Kling migrou do esquema antigo (access+secret key/JWT) pro novo. Patch vive em `node_modules/@mindstone/mcp-server-kling/dist/{auth,client,tools/configure}.js` e **se perde** se o pacote for reinstalado do zero — reaplicar se `npm install` limpar o node_modules.
- `sharp`, `ffmpeg-static` e `@mindstone/mcp-server-kling` estao declarados em `package.json` (devDependencies) especificamente pra evitar que um `npm install` de um derrube o outro (aconteceu 2x nesta sessao, agravado pelo OneDrive sincronizando no meio da escrita).
- Pasta do projeto fica dentro do OneDrive — escritas rapidas de varios arquivos (ex: os 6 slides do carrossel) podem sumir temporariamente por sincronizacao; se sumir, e so regenerar via script (nada e feito manualmente, tudo reprodutivel).

---

*Ultima atualizacao: 04/09/2026*
