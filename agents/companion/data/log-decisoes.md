# Log de Decisoes

> Decisoes importantes registradas com racional e contexto. Append-only.

<!-- Formato:
## [DATA] — [TITULO DA DECISAO]
**Contexto:** [o que estava acontecendo]
**Decisao:** [o que foi decidido]
**Racional:** [por que]
**Impacto:** [o que muda]
-->

## 04/09/2026 — Instagram Olá muda de video/imagem 3D pra carrossel de texto

**Contexto:** As artes 01 e 02 (cena 3D fotorreal via Codex/Kling) funcionaram, mas geracao de video/imagem via Kling depende de credito pago (esgotou 2x na sessao) e e lenta.
**Decisao:** Passar a produzir conteudo em formato carrossel de texto (estilo @opoderdasmetas), mantendo a paleta e a Familia Horizonte como fio narrativo, sem depender de geracao de imagem por IA pra cada post.
**Racional:** Corta a dependencia de credito/geracao lenta e acelera o ritmo de publicacao; a arte 01/02 ja fixou a identidade visual, entao o carrossel pode reaproveitar essas imagens so na capa.
**Impacto:** Proximos posts (a partir do carrossel 03) usam o formato novo por padrao. Fica em aberto se video volta a entrar eventualmente.

## 04/09/2026 — Reel da arte 02 removido do Instagram

**Contexto:** Arte 02 foi publicada como Reels com uma trilha instrumental sintetizada localmente (sem MCP de musica real disponivel).
**Decisao:** Expert nao aprovou o resultado sonoro (mesmo apos 3 iteracoes) e pediu pra excluir o post do ar.
**Racional:** Qualidade abaixo do aceitavel pra publicacao da marca.
**Impacto:** Perfil ficou so com a arte 01 publicada. Se video voltar, avaliar fonte de audio real (banco de musica) em vez de sintese.

## 04/09/2026 — Cadencia de postagem definida: terca e sabado

**Contexto:** Expert perguntou quantos episodios tem a temporada e como ficaria o calendario de postagem.
**Decisao:** 2x por semana (terca e sabado). Isso da ~9 posts por bloco de 30 dias — cada bloco de 30 dias passou a ser tratado como uma "temporada".
**Racional:** Ritmo sustentavel ate a formacao/CREF do Jorge (previsao agosto/2027), sem parecer bombardeio nem sumir do feed.
**Impacto:** Temporada 1 (9 episodios da Familia Horizonte) e Temporada 2 (avos, 4 pilares) desenhadas nesse formato. Futuras temporadas devem seguir o mesmo padrao de 30 dias.

## 04/09/2026 — Automacao total da postagem adiada (fica no semi-automatico)

**Contexto:** Expert perguntou se a postagem no Instagram poderia ser 100% automatica (agendada, sem ele precisar abrir a sessao). Levantamos o caminho: API oficial da Meta (Instagram Graph API) exigiria Pagina do Facebook, App de desenvolvedor, token de longa duracao (System User) e hospedagem publica das imagens — tudo isso e configuracao que so o dono da conta autoriza (login/OAuth).
**Decisao:** Adiar a automacao total. Expert nao tem conta no Facebook ainda. Por ora, fica no modo semi-automatico: eu deixo arte e legenda prontas com antecedencia, ele so confirma a publicacao no dia (terca/sabado).
**Racional:** Expert quer amadurecer mais o projeto antes de investir na infraestrutura de API/Business Manager.
**Impacto:** Nenhuma automacao agendada configurada. Revisitar quando o expert tiver Facebook e Business Manager prontos.

## 04/09/2026 — Cada episodio ganha cenario proprio (nao repetir ambiente)

**Contexto:** Episodios 1, 2 e 3 estavam reaproveitando a mesma foto de sala de estar. Expert notou a repeticao e pediu ambientes diferentes por episodio, batendo com o tema de cada um.
**Decisao:** Episodio 1 manteve o cenario original (sala, ja tinha curtidas). Episodios 2 (cozinha, domingo a noite) e 3 (corredor/porta de entrada) ganharam cena nova, gerada via Codex (nao Kling — sem credito, plano diferente) usando a arte 02 como referencia de personagem pra manter consistencia visual.
**Racional:** Cenario repetido enfraquece a narrativa visual da serie; Codex resolve sem gastar credito da Kling (que so tem saldo de video, nao de imagem).
**Impacto:** Padrao daqui pra frente: cada episodio novo (a partir do 4) precisa de cena propria gerada via Codex antes de virar carrossel. Kling fica reservado pra quando houver credito de imagem disponivel.

## 05/09/2026 — Numeracao dos episodios vira "Temporada + Episodio" (formato serie, tipo Netflix)

**Contexto:** Os episodios publicados usam rotulo "EPISODIO 0X" na tela sem indicar a temporada. Como a Jornada Ola vai ter varias temporadas (Temporada 2 dos avos ja planejada), o expert notou que "Episodio 01" repetiria em toda temporada nova e ficaria ambiguo. Perguntado se prefere numeracao continua (unica, sem reiniciar) ou reiniciar por temporada, o expert confirmou que a intencao e seguir o padrao de serie de streaming (tipo Netflix), com cada temporada comecando do episodio 1.
**Decisao:** Cada temporada reinicia a numeracao de episodio em 1. Rotulo na tela passa a ser `T{temporada}E{episodio}` (ex.: T1E04, T2E01). Os 3 episodios da Temporada 1 ja publicados (01, 02 e o post de chamada sem numero) mantem o rotulo antigo "EPISODIO 0X" pra nao exigir apagar e repostar. A partir do **episodio 4** da Temporada 1 em diante, e em toda a Temporada 2, usa o rotulo novo T{X}E{Y}.
**Racional:** Rotulo "Temporada + Episodio" e o padrao reconhecivel de series (Netflix e afins), comunica de cara onde a pessoa esta na historia, e evita colisao entre episodios de temporadas diferentes sem precisar de numeracao continua (que fica confusa conforme a serie cresce).
**Impacto:** `TEMPORADA-2-AVOS.md` renumerado de Ep.10-14 pra Ep.01-05 (a numeracao continua nao tinha sido usada em nenhuma publicacao real, so em planejamento — nao afeta nada ja no ar). `TEMPORADA-1-FAMILIA-HORIZONTE.md` documenta o rotulo T1E0X a partir do episodio 4. Scripts de geracao de capa que ainda vao ser criados (episodio 4 em diante) devem usar o rotulo novo.
**Nota lateral:** ao revisar o arquivo da Temporada 1 pra fazer esse ajuste, encontrei o Ep.03 ("Uma volta pelo quarteirao") marcado como "publicado em 04/09/2026" por engano — so existe a capa gerada (`carrossel-04-primeira-caminhada/01-capa.png`), faltam os slides 2-6, e esse post nao aparece na lista de 3 posts no ar do contexto-dinamico. Corrigi o status pra "pendente" e deixei nota pedindo confirmacao do Jorge.

## 05/09/2026 — Jornada Ola como ativo financeiro (visao de longo prazo)

**Contexto:** O expert comentou que pretende, no futuro proximo, publicar a serie Jornada Ola tambem em video e/ou PDF, ainda na fase de imaginar o formato. Pediu apoio continuo do Companion nessa direcao.
**Decisao:** Tratar a Jornada Ola nao so como conteudo de pre-lancamento do Instagram, mas como um ativo de propriedade intelectual em construcao (serie que pode virar video, PDF ou outro formato distribuivel/monetizavel no futuro). O expert pediu que o Companion sempre ajude a orientar decisoes nessa direcao (ex.: manter consistencia de personagens, numeracao de serie profissional, documentacao organizada por temporada) mesmo quando o pedido imediato for so sobre o Instagram.
**Racional:** Decisoes de estrutura tomadas agora (nomenclatura, numeracao, documentacao por temporada) ficam mais baratas de acertar cedo do que corrigir depois que a serie crescer ou for licenciada/vendida em outro formato.
**Impacto:** Daqui pra frente, ao mexer em qualquer parte da Jornada Ola (nomes, numeracao, estrutura de pastas, documentacao), considerar o objetivo de longo prazo de virar ativo financeiro, nao so o post da vez.

## 05/09/2026 — Ep.03 "Uma volta pelo quarteirao" confirmado como publicado

**Contexto:** Na decisao anterior (numeracao T/E), o Claude questionou o status "publicado" do Ep.03 por so achar a capa gerada no disco local (faltam os slides 2-6 na pasta `carrossel-04-primeira-caminhada/`).
**Decisao:** Jorge confirmou que o Ep.03 foi publicado sim no Instagram. Status revertido pra "publicado em 04/09/2026" no `TEMPORADA-1-FAMILIA-HORIZONTE.md`.
**Racional:** O Jorge tem visibilidade direta do que esta no ar; a duvida era so por falta de arquivo local (possivelmente os slides intermediarios foram descartados apos a publicacao, ou geridos por fora do fluxo de scripts).
**Impacto:** Nenhum ajuste adicional necessario nesse episodio. Fica registrado que nem sempre a pasta local reflete 100% o que foi publicado — quando houver duvida sobre status de publicacao, perguntar ao Jorge antes de assumir.
