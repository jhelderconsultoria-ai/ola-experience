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

## 07/09/2026 — Familia Horizonte passa a mostrar convivio social com outras pessoas

**Contexto:** Ate o T1E14, a serie mostrou quase so o nucleo familiar (5 pessoas + Thor) interagindo entre si. Unica excecao foi o T1E04 (Nori brincando com outras criancas no parquinho, sem personagens nomeados). Jorge apontou que isso e uma lacuna real — todo ser humano precisa de convivio social com outras pessoas, nao so em familia.
**Decisao:** A partir do Bloco Cardio (T1E15-19), pelo menos um episodio mostra a familia convivendo com amigos/vizinhos/outra familia numa atividade em conjunto. Personagens secundarios recorrentes (amigo do Zai, coleguinha da Nori, casal vizinho, etc.) podem ser introduzidos aos poucos, documentados na primeira aparicao — sem precisar de ficha completa antes de existir.
**Racional:** Reforca autenticidade e identificacao do publico; convivio social e parte real de uma vida equilibrada, e a serie ja tem guardrail de nao promover isolamento (tecnologia nunca e vilã, mas tambem nao pode ser o unico vinculo mostrado).
**Impacto:** `biblia-familia-ola.md` ganhou secao "Convivio social — amigos e outras pessoas". T1E15 (proximo a ser roteirizado) passa a incluir amigos/vizinhos na cena. Elemento pode se repetir em blocos futuros (Forca, Bolso) sempre que fizer sentido.

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

## 05/09/2026 — Campanha de 60 dias: cadencia diaria (3x Arte + 4x Frase por semana)

**Contexto:** Jorge estava numa fase de energia/criatividade alta e cogitou aumentar a cadencia de 2x/semana pra mais posts. Depois de discutir riscos (sustentabilidade, capacidade de producao, esgotar roteiro), Jorge decidiu um formato especifico: 60 dias (07/09 a 05/11/2026), todo dia da semana com post, sendo 3x/semana com a familia em cena (mesmo padrao de hoje, mantendo numeracao Temporada+Episodio) e 4x/semana carrossel so de frases (mesmo padrao de marca, cores mais variadas, arte mais leve, nome Ola sempre no rodape). No dia 60, parar e analisar resultados no Instagram antes de decidir o proximo bloco.
**Decisao:** Cadencia muda de 2x/semana pra 7x/semana por 60 dias, dividida 3 Arte + 4 Frase. Calendario completo com datas, dias da semana e conteudo (onde ja definido) em `business/campanhas/instagram/campanha-60-dias-cotidiano.md`.
**Racional:** Aproveitar o momento de energia criativa do Jorge sem sacrificar a narrativa da serie — os dias de "Arte" preservam a Familia Horizonte como espinha dorsal, os dias de "Frase" tem custo de producao muito menor (sem gerar imagem nova, sem risco de guardrail pesado) e absorvem o volume extra.
**Impacto:** Gap identificado — so 9 episodios de Arte estavam roteirizados (T1E05-08 + T2E01-05), cobrindo as 3 primeiras semanas; faltam roteiros pra mais posts de Arte e Frase. Precisa resolver o roteiro antes de 17/09/2026 pra nao furar a cadencia.

## 05/09/2026 — Temporada 2 adiada pro pos-campanha; Temporada 1 expande pra cobrir os 60 dias

**Contexto:** Ao montar o calendario da campanha de 60 dias, ficou claro que usar T2E01-05 (avos) dentro da janela misturava a Temporada 2 antes da hora. Jorge decidiu que a Temporada 1 deve se expandir pra cobrir os 60 dias inteiros, e a Temporada 2 (avos Dora e Beto, incluindo os "4 pilares" na voz do Beto) so comeca depois do checkpoint do dia 60 (a partir de 06/11/2026).
**Decisao:** Todos os 26 slots de Arte da campanha (T1E05 a T1E30) sao Temporada 1. T2E01-05 e os pilares do Beto (S1-S5) saem do calendario da campanha e ficam guardados pra abrir a Temporada 2 depois. Calendario atualizado em `business/campanhas/instagram/campanha-60-dias-cotidiano.md`.
**Racional:** Nao faz sentido abrir a Temporada 2 (personagens novos, arco proprio da Dora) no meio de uma campanha cuja proposta e cotidiano/reflexao — melhor fechar a Temporada 1 primeiro (ou expandi-la de forma coerente) e estrear os avos com atencao total, nao encaixados no calendario por necessidade de preencher vaga.
**Impacto:** A Temporada 1, originalmente desenhada como arco fechado de 8 episodios (`TEMPORADA-1-FAMILIA-HORIZONTE.md`), agora precisa cobrir 30 episodios (T1E01-30). Isso mudou o formato da temporada — ver decisao seguinte pra estrutura resolvida.

## 05/09/2026 — T1E09-30 estruturado ao redor dos 4 pilares; bio ajustada; rotulo de IA do perfil ativado

**Contexto:** Com a Temporada 1 expandida pra 30 episodios, faltava decidir como estruturar T1E09 em diante. Jorge fechou pela opcao dos 4 pilares (Cognitivo, Cardio, Forca, Bolso — ja usados na bio) contados pela propria Familia Horizonte, com os avos revisitando os mesmos pilares por outro angulo na Temporada 2 depois do dia 60. Junto, Jorge pediu pra ajustar a bio (trocar a hashtag `#vidaativa` por `#familiahorizonte`, mais consistente com a hashtag usada em todo post da serie) e ativar o rotulo de perfil "Criador de conteudo de IA" (complementa o rotulo por post ja usado).
**Decisao:** T1E09-30 dividido em 4 blocos de 5 episodios (Cognitivo T1E09-13, Cardio T1E14-18, Forca T1E19-23, Bolso T1E24-28) + 2 de fechamento (T1E29-30). Bio do perfil atualizada e rotulo de IA do perfil ativado — ambos aplicados direto no Instagram via Claude in Chrome.
**Racional:** A bio ja prometia "os 4 pilares que ninguem te ensinou" antes mesmo do conteudo entregar isso de fato — a estrutura por pilares faz a serie cumprir a promessa da propria bio, cria fio condutor claro pros 22 episodios novos, e ainda reserva material pra Temporada 2 revisitar os mesmos pilares sem repetir conteudo (angulo dos avos, nao dos pais/filhos).
**Impacto:** Documentado em `TEMPORADA-1-FAMILIA-HORIZONTE.md` e `business/campanhas/instagram/campanha-60-dias-cotidiano.md`. Proximo roteiro a escrever: T1E06 ("Preparar tambem faz parte", ainda antes do bloco Cognitivo comecar em T1E09).

## 05/09/2026 — Novo personagem fixo: Thor, o cachorro da familia (golden retriever, 4 anos)

**Contexto:** Depois de fechar a estrutura de pilares e escrever T1E09-10, Jorge pediu pra inserir um novo integrante fixo na familia: um cachorro golden retriever chamado Thor, 4 anos, porte forte, o mais proximo possivel da aparencia real da raca. Pediu pra quebrar de proposito a sequencia tematica do Bloco Cognitivo e dedicar o T1E11 ao momento dos pais (Lu e Nilo) dando o Thor de presente pra Nori. Pediu tambem pra criar a ficha de referencia do personagem antes de escrever a cena do episodio.
**Decisao:** Thor entra como personagem fixo na biblia da familia (`biblia-familia-ola.md`), com ancora visual fixa (coleira de couro terracota com placa redonda) pra garantir reconhecimento em episodios futuros. Ficha de referencia em `personagens/thor-referencia.txt` (pasta nova, compartilhada entre temporadas, mesmo nivel da biblia). T1E11 vira "Um presente de quatro patas" — chegada do Thor — quebrando de proposito a sequencia do Bloco Cognitivo (que seguia T1E09, T1E10, T1E12, T1E13).
**Racional:** A chegada de um pet fixo e um marco emocional genuino da familia, nao um "conteudo de pilar" — faz mais sentido como quebra intencional do que forcado dentro do tema Cognitivo. Ancora visual fixa (coleira) e essencial pra ele ser reconhecivel nas proximas aparicoes, do mesmo jeito que cada personagem humano tem uma ancora (cabelo, acessorio) que nunca muda.
**Impacto:** Bloco Cognitivo (T1E09-13) agora tem 4 episodios de pilar + 1 quebra (T1E11) em vez de 5 episodios de pilar. Thor deve ser considerado nas cenas seguintes onde fizer sentido (ja fica reforcado o pilar Cardio nos passeios). Ordem de geracao de imagem: ficha de referencia do Thor primeiro, cena do episodio depois — nao gerar a cena sem a referencia do personagem pronta. Ficha final aprovada depois de 3 tentativas (v1 fotorrealista, v2 estilo melhor mas sem nome/expressao, v3 aprovada — nome THOR legivel na placa e olhar carinhoso/fofo).

## 05/09/2026 — Descoberta: Claude Code pode chamar o Codex CLI direto, sem passar pelo Jorge

**Contexto:** Ao pedir a imagem do Thor, o Claude tentou entregar so o prompt em texto (como sempre fez ate aqui, achando que nao tinha acesso a geracao de imagem). O Jorge pediu pra "abrir o Codex" direto. Investigando, o Claude achou o Codex CLI instalado localmente (`codex` no PATH, autenticado via ChatGPT) e descobriu que consegue chama-lo via Bash com `codex exec`, e que o Codex tem uma ferramenta de geracao de imagem embutida (`image_gen.imagegen`).
**Decisao:** A partir de agora, o Claude Code gera as artes dos episodios diretamente via `codex exec`, sem depender do Jorge copiar/colar prompt em outra ferramenta. Usado com sucesso pra gerar a ficha de referencia do Thor (3 iteracoes ate aprovar).
**Racional:** Elimina o maior gargalo do processo de producao ("falta gerar a arte via Codex" aparecia em todo episodio pendente) — agora a geracao pode acontecer na mesma sessao, com o Claude ja revisando e iterando o resultado antes de mostrar pro Jorge.
**Impacto:** Todos os episodios pendentes (T1E05 a T1E11) que so tinham prompt escrito agora podem ter a arte gerada direto. Cuidado documentado em `contexto-dinamico.md`: nunca digitar caminho com acento errado na instrucao do Codex (criou pasta duplicada sem acento na primeira tentativa), e reforcar "renderizacao 3D animada, NAO fotografia" no prompt pra manter o estilo Pixar da serie em vez de sair fotorrealista.

## 05/09/2026 — Renumeracao em cascata: Thor vira T1E05, publicado ainda hoje

**Contexto:** Depois de aprovar a arte do Thor e do episodio de chegada dele, Jorge pediu pra publicar esse episodio ainda hoje (05/09/2026, mesmo dia do T1E04). Isso significava inserir o episodio do Thor antes dos episodios ja roteirizados (ritmo, preparar, natureza, quando-vamos, curiosidade-junto, cinco-minutos), que ate entao ocupavam T1E05 a T1E10.
**Decisao:** Episodio do Thor vira **T1E05** ("Um presente de quatro patas"), publicado hoje, fora da janela formal da campanha de 60 dias (que comeca 07/09). Todos os episodios seguintes foram renumerados **+1**: o que era T1E05-30 virou T1E06-31. Isso tambem limpou o Bloco Cognitivo — antes T1E09-13 com uma quebra no meio (T1E11 era o Thor), agora T1E10-14 com as 5 posicoes livres pra conteudo de pilar de verdade, sem quebra.
**Racional:** Publicar o Thor fora de ordem faz sentido dado o pedido do Jorge de tira-lo do ar ainda hoje; renumerar em cascata (em vez de deixar buracos ou numeros fora de ordem) mantem a numeracao Temporada+Episodio continua e sem ambiguidade pro seguidor.
**Impacto:** Temporada 1 agora vai ate T1E31 (era T1E30). Arquivos atualizados: `TEMPORADA-1-FAMILIA-HORIZONTE.md` (reescrito com a nova ordem/numeracao), `campanha-60-dias-cotidiano.md` (calendario todo renumerado), `biblia-familia-ola.md` (referencia do Thor corrigida pra T1E05), `06-thor-chegada-raw.png` renomeado (era `11-thor-chegada-raw.png`).

## 05/09/2026 — T1E05 (Thor) publicado apos 5 rodadas de correcao de arte — checklist de consistencia criado

**Contexto:** A primeira versao da cena de chegada do Thor (gerada via Codex a partir so de descricao em texto) saiu com 4 problemas que o Jorge apontou olhando a imagem: o corpo/pernas da Lu nao batiam com o fisico dela em episodios anteriores (parecia "fora de forma"), o Nilo estava com a mesma camiseta azul-petroleo de sempre (Jorge pediu pra variar o guarda-roupa em toda criacao nova daqui pra frente), a pelagem do Thor estava arrepiada e ele olhava pra longe da Nori em vez de olhar com carinho pra ela, e o Zai ao fundo saiu borrado/sem nitidez.
**Decisao:** Corrigido em rodadas sucessivas de edicao (`image_gen.imagegen` em modo edicao, nao gerar do zero de novo) usando imagens de referencia reais: `03-corredor-raw.png` pra corpo da Lu, a propria ficha `thor-referencia.png` pra pelagem/expressao do Thor, e instrucao explicita de troca de roupa pro Nilo (jaqueta jeans + camiseta cinza, um dos looks ja previstos na biblia). Publicado em https://www.instagram.com/p/Dc6lqL0FgxX/.
**Racional:** Editar a imagem existente preservando o que ja estava certo (composicao, poses, Nori) e mais confiavel do que gerar tudo de novo do zero — evita perder o que ja funcionava enquanto corrige so o que precisa. Usar imagens de referencia reais (nao so descricao em texto) e o jeito certo de garantir consistencia de identidade fisica entre episodios.
**Impacto:** Checklist de consistencia documentado em `contexto-dinamico.md` (Notas Tecnicas) pra aplicar ANTES de mostrar qualquer arte nova pro Jorge daqui pra frente: (1) comparar corpo/rosto com arte anterior real, (2) variar guarda-roupa ativamente usando as opcoes da biblia, (3) comparar animais/personagens com ficha propria com a ficha de referencia, (4) checar nitidez de personagens em segundo plano.

## 05/09/2026 — Producao passa a seguir a ordem do calendario (Arte e Frase intercaladas); primeiras Frases criadas

**Contexto:** Jorge notou que as Frases da campanha (4x/semana) ainda nao tinham sido criadas enquanto varios episodios de Arte ja tinham roteiro pronto — pediu pra producao seguir a ordem real do calendario, criando Frase e Arte alternadamente conforme a data, sem deixar um tipo acumular.
**Decisao:** Criado o formato e o script reutilizavel `scripts/gerar-frases.mjs` (carrossel de 3 slides, sem gerar imagem nova) com 4 paletas de cor variadas (verde-floresta escuro, terracota escuro, creme claro, oliva) — pedido explicito do Jorge de "cores mais variadas" nas Frases. Geradas as 4 primeiras Frases (07/09, 09/09, 11/09, 12/09) em `INSTAGRAM OLÁ/Temporada Jornada Olá/Temporada 1/frases/{data}/`. Descoberto e corrigido no processo: o logo oficial (`marca-ola-experience-caminho-transparente.png`) e todo em tom claro (creme/dourado) e ficava quase invisivel em fundo claro — criado `marca-ola-experience-caminho-escura.png` (mesma logo, recolorida pra verde-floresta preservando a transparencia real) pra usar nas paletas de fundo claro.
**Racional:** Content dos dois formatos (Arte e Frase) precisa avancar junto pra nao acumular gargalo de um lado só — Arte e mais lento (depende de geracao de imagem), Frase e rapida (so texto), entao dava pra Frase ficar sempre atrasada se nao virasse habito deliberado.
**Impacto:** Calendario da campanha atualizado com as 4 Frases prontas. Daqui pra frente, seguir a ordem cronologica real do calendario (nao produzir todo um tipo de uma vez) — documentado em `campanha-60-dias-cotidiano.md` e `contexto-dinamico.md`.

## 05/09/2026 — As 4 primeiras Frases publicadas todas no mesmo dia (antecipado)

**Contexto:** Depois de criar as 4 primeiras Frases (datas 07/09, 09/09, 11/09, 12/09), Jorge pediu pra publicar todas ainda hoje (05/09/2026), em vez de esperar a data de cada uma no calendario.
**Decisao:** Publicadas as 4 no mesmo dia: "Amor nao se mede em atencao igual" (https://www.instagram.com/p/Dc6pAd5FgX4/), "Comparacao com a vida dos outros" (https://www.instagram.com/p/Dc6qXTwlmsv/), "Pais tambem erram" (https://www.instagram.com/p/Dc6qukCFmOZ/) e "Pressa e produtividade" (https://www.instagram.com/p/Dc6rGM-Fq1c/).
**Racional:** Decisao do Jorge — nao foi por gargalo de producao, foi opcao dele de tirar tudo do ar de uma vez.
**Impacto:** Hoje (05/09) acumulou 6 posts publicados (T1E04, T1E05/Thor + as 4 Frases). As datas 07/09, 09/09, 11/09 e 12/09 do calendario ja estao cumpridas — nao repetir. Proximo conteudo a produzir: T1E06 (Arte, publica 08/09) e uma nova Frase pra 14/09 em diante (ainda nao escrita). Perfil chegou a 10 posts, 27 seguidores.

## 05/09/2026 — Rotulo de IA (perfil e por post) removido/desativado; nao ativar mais daqui pra frente

**Contexto:** Jorge pediu pra tirar o rotulo "Criador de conteudo de IA" da bio, e depois pediu pra auditar todos os posts publicados e remover o rotulo de IA onde tivesse, perguntando se isso feria as normas do Instagram. Pesquisa (Meta Transparency Center, About Meta, Instagram Help Center, texto oficial do proprio editor do Instagram) confirmou: a exigencia de disclosure de IA da Meta vale so pra (1) contas com persona sintetica apresentada como pessoa real ("perfil gerado por IA") e (2) video fotorrealista ou audio com voz realista gerado/alterado por IA. Imagem estatica nao entra na obrigacao — o proprio painel de edicao do Instagram diz "Voce precisa rotular alguns conteudos realistas criados com IA". A Familia Horizonte e uma marca com personagens fictícios em estilo 3D/Pixar declaradamente nao-fotorrealista (reforcado nos proprios prompts: "NAO e uma fotografia") — nao se encaixa em nenhum dos dois casos.
**Decisao:** Rotulo de perfil "Criador de conteudo de IA" desativado (via Claude in Chrome, `instagram.com/accounts/edit/`). Testado remover o rotulo por post num post publicado (Frase "Pressa e produtividade", https://www.instagram.com/p/Dc6rGM-Fq1c/): o toggle "Adicionar rotulo de IA" foi desativado e salvo, mas o rotulo "Conteudo de IA" continuou aparecendo no post mesmo apos recarregar a pagina — e ao editar de novo, o toggle sumiu do painel (a Meta assumiu a deteccao automatica via metadado do arquivo, C2PA/IPTC, e isso nao tem controle manual no app). Jorge decidiu parar a auditoria dos posts antigos (nao da pra remover mesmo, e nao e obrigatorio) e adotar como padrao dali pra frente: **nao ativar manualmente** o rotulo de IA (nem por post, nem no perfil) em nenhum conteudo novo. Excecao: o post T1E06 (ritmo, https://www.instagram.com/p/Dc6wW6OFiIF/), que esta com impulsionamento pago em analise na Meta, fica com o rotulo como esta ate o boost sair de analise — so mexer nele depois, a pedido do Jorge, porque ele nao quer que a Track&Field veja o rotulo de IA nesse post especifico (mencao a marca na legenda).
**Racional:** Nao existe exigencia da Meta pra este tipo de conteudo (imagem estilizada, marca ficticia, nao pessoa real) — manter o rotulo era transparencia extra voluntaria, nao obrigacao. Mexer num anuncio em analise (T1E06) pra tirar um rotulo tem risco de reabrir revisao ou confundir o processo de aprovacao — melhor esperar o boost resolver antes de tocar nesse post.
**Impacto:** Publicacoes futuras (T1E07 em diante, Frases futuras) NAO devem ativar o toggle "Adicionar rotulo de IA" ao publicar — mudanca no processo de publicacao que valia desde o T1E04. Pendencia: revisitar o post do T1E06 (tirar o rotulo, se ainda estiver visivel) assim que o impulsionamento sair do status "Em analise".
**Correcao (mesmo dia, ver proxima entrada):** a hipotese de "deteccao automatica por metadado" causando a persistencia do rotulo nesta entrada estava errada — investigacao tecnica seguinte mostrou outra causa.

## 05/09/2026 — Investigacao tecnica do metadado C2PA; rotulo persistente era autodeclaracao de mao unica, nao deteccao

**Contexto:** Jorge pediu pra eu chegar a uma conclusao exata (nao so teoria de blog) sobre o mecanismo do rotulo de IA, e depois pediu pra implementar remocao de metadado no fluxo de geracao. Investigacao direta no arquivo (grep nos bytes do PNG) confirmou que o `image_gen.imagegen` do Codex/OpenAI grava sim um manifesto C2PA completo (`c2pa`, `trainedAlgorithmicMedia`, `OpenAI`, `iptc`, `xmp`) em todo arquivo bruto gerado. Mas ao checar o arquivo que realmente sobe pro Instagram (capa/slides processados via `sharp` nos scripts `gerar-capa-*`/`gerar-carrossel-*`), **nenhum metadado sobrevive** — o `sharp` descarta esses chunks por padrao (nenhum script chama `.withMetadata()`). Ou seja, os arquivos publicados sempre estiveram limpos, inclusive o da Frase "Pressa e produtividade" (que nem tem imagem de IA — e so texto/SVG) onde o rotulo persistiu mesmo assim. Isso descarta a teoria de deteccao automatica por metadado pra explicar aquele caso especifico.
**Decisao:** A explicacao real e mais simples: o Instagram nao permite desdeclarar um rotulo de IA depois que ele foi marcado como "sim" na publicacao (via de mao unica) — nada a ver com metadado do arquivo naquele post especifico. Mesmo assim, a pedido do Jorge, implementada uma camada extra de seguranca: `scripts/limpar-metadados-arte.mjs` (recompoe o PNG via sharp, remove qualquer metadado tecnico) — aplicado retroativamente em todos os arquivos brutos existentes (`artes-base/*.png` e `personagens/thor-referencia.png`). Processo novo: rodar esse script no `*-raw.png` logo apos o Codex gerar, antes de usar nos scripts de capa/carrossel.
**Racional:** Como ja confirmado, esse tipo de conteudo (imagem estilizada, nao pessoa real) nunca precisou de disclosure obrigatorio — entao limpar o metadado nao e "esconder" nada que fosse exigido, e uma camada de higiene tecnica, nao evasao. A causa real do rotulo preso nos posts antigos (autodeclaracao de mao unica) nao tem solucao via metadado mesmo — so republicar do zero resolveria, e isso nao foi pedido.
**Impacto:** Pipeline de geracao de arte ganha um passo novo (opcional mas recomendado): limpar metadado do raw antes de compor o carrossel. Nao muda nada visualmente — os arquivos finais ja saiam limpos antes disso. Reduz a chance de qualquer rotulo automatico futuro a praticamente zero, ja que nem metadado nem autodeclaracao vao estar presentes nos proximos posts. Documentado em `contexto-dinamico.md` (Notas Tecnicas).

## 05/09/2026 — Auditoria completa dos 11 posts: rotulo de IA confirmado irreversivel via app em 6 deles

**Contexto:** Jorge pediu pra tentar remover a frase "Conteudo de IA" (sem excluir a postagem) em todos os posts publicados que tivessem ela, mesmo sabendo do resultado do teste anterior.
**Decisao:** Passado post por post (11 no total, exceto T1E06 que fica intocado por causa do boost em analise). Resultado: **6 posts tinham o rotulo** (post de chamada, Episodio 01, Episodio 02, Episodio 03, Frase "Pressa e produtividade", Frase "Duas criancas") — em todos, o toggle "Adicionar rotulo de IA" foi desativado e a edicao foi salva ("Editado"), mas o rotulo continuou visivel nos 6, sem excecao. **5 posts nunca tiveram o rotulo** (T1E04/parquinho, T1E05/Thor, T1E06/ritmo, Frase "Pais tambem erram", Frase "Comparacao com a vida dos outros"). Nenhuma postagem foi excluida.
**Racional:** Confirma definitivamente (nao so hipotese) que o rotulo autodeclarado na publicacao nao pode ser retirado depois via o editor do Instagram — e via de mao unica, testado em 6 casos reais com o mesmo resultado. Padrao notavel: os posts mais antigos (chamada, Ep01-03) ficaram todos presos com o rotulo, enquanto os mais recentes (T1E04 em diante) majoritariamente nao tinham — possivelmente ligado a quando o rotulo de perfil "Criador de conteudo de IA" estava ativo, mas nao investigado a fundo.
**Impacto:** Os 6 posts antigos vao continuar mostrando "Conteudo de IA" permanentemente, a nao ser que sejam apagados e republicados (nao solicitado). Sem acao pendente — o padrao novo (nao ativar o toggle) ja cobre os posts futuros, que devem sair sem o rotulo.

## 06/09/2026 — Temporada 1 ganha o 5º pilar Alimentação, na frente dos outros 4

**Contexto:** Jorge decidiu acrescentar "Alimentação" como pilar novo na bio (Cognitivo, Cardio, Força, Bolso), com duvida inicial entre "Nutrição" e "Alimentação".

**Decisao:** Nome escolhido: **Alimentação**. Ordem na bio: **Alimentação primeiro**, antes dos outros 4 ("Alimentação. Cognitivo. Cardio. Força. Bolso."). Temporada 1 vai ser **estendida** (mais episodios) pra caber o bloco novo, em vez de encurtar os blocos existentes ou cortar o fechamento. Jorge disse que vai pedir explicitamente pra comecar a criar conteudo da nova estrutura a partir de 07/09/2026 — hoje (06/09) e so a decisao, sem criar episodio novo ainda.

**Racional:** "Nutrição" soa clinico (e area de nutricionista, e o projeto reforca sempre que a familia nao e formada por profissionais de saude) — "Alimentação" e leigo/cotidiano, no mesmo tom de "Bolso". Alimentacao na frente porque, na visao do Jorge, ela e a base ("nao adianta atividade fisica sem uma boa alimentacao").

**Impacto:** Pendente pra 07/09/2026 (nao feito ainda nesta sessao): (1) trocar a bio real do Instagram pra incluir Alimentação; (2) decidir a posicao do bloco Alimentação na ordem REAL dos episodios — T1E10, T1E11 e T1E12 ja existem como abertura do Bloco Cognitivo (T1E10 ja publicado), entao a opcao padrao proposta (ainda sem confirmacao do Jorge) e nao renumerar o que ja foi feito e anexar o bloco Alimentação depois do Bolso, mesmo que a bio liste Alimentação primeiro no texto; (3) atualizar `biblia-familia-ola.md`, `TEMPORADA-1-FAMILIA-HORIZONTE.md`, `TEMPORADA-2-AVOS.md` (eco dos 4 pilares) e o calendario da campanha de 60 dias (que hoje cobre so ate T1E31) pra refletir os episodios extras.

## 06/09/2026 — Bio muda pra gancho de dor ("qualidade de vida") + ritual semanal de analise

**Contexto:** Jorge quis aplicar tecnica de marketing (bio como filtro de intencao de busca no Instagram): citar a dor/sentimento que a pessoa esta sentindo, nao so listar os pilares. Foram testadas varias frases-gancho (cansaco, tempo, tela, correria) antes de fechar.

**Decisao:** Bio trocada pra: "Qualidade de vida ficou pra depois? A gente também vivia assim 👇" seguida da lista de pilares (a frase "Família Horizonte descobrindo os 5 pilares..." foi removida pra caber no limite de 150 caracteres) e dos hashtags. Palavra-chave escolhida: **"qualidade de vida"** (nao "tempo de qualidade") porque cobre tanto pais exaustos (Temporada 1) quanto o publico 60+ que se sente excluido (perfil da Dora, Temporada 2) — termo mais buscado e mais amplo. **Ritual novo: toda segunda-feira, analisar os resultados no Instagram** (Insights: alcance, seguidores, contas atingidas) pra validar se essa bio-gancho esta funcionando — e um teste, nao decisao definitiva.

**Racional:** Bio funciona como "SEO" de busca dentro do Instagram — quem esta sentindo a dor e mais propenso a parar e seguir do que quem so ve uma lista de palavras (pilares). "Qualidade de vida" e termo generico o suficiente pra puxar os dois publicos-alvo da marca (familia nuclear agora, avos na Temporada 2 depois).

**Impacto:** Bio anterior (so pilares + tagline, sem gancho) fica documentada aqui como historico. Toda segunda-feira (a partir de 07/09/2026, ou a segunda seguinte se a sessao nao abrir nesse dia) fazer a analise no Instagram Insights e registrar o resultado aqui ou no `contexto-dinamico.md` — se o gancho nao gerar diferenca perceptivel de seguidores/alcance em algumas semanas, testar outra frase da lista de opcoes discutida na sessao.

## 06/09/2026 — Bio ajustada de novo: gancho vira ponte pra futuro (nao so empatia)

**Contexto:** Apos aplicar a bio "Qualidade de vida ficou pra depois? A gente também vivia assim 👇", Jorge questionou se a segunda parte (so empatia, sem convite) cumpria o objetivo original de criar uma "ponte induzindo" pra quando a Olá comecar a vender servico.

**Decisao:** Trocado o fechamento da frase-gancho pra "Vem ver como a gente tá mudando" (convite ativo, aponta pra frente) em vez de "A gente também vivia assim" (so empatia, sem movimento). Bio final: "Qualidade de vida ficou pra depois? Vem ver como a gente tá mudando 👇" + lista de pilares sem pontuacao entre eles (pra caber no limite) + hashtags. Escolhida entre 4 opcoes pelo motivo de "ficou pra depois" ecoar a frase-assinatura da Lu na biblia ("Se a gente esperar sobrar tempo, nao comeca nunca").

**Racional:** Uma bio que so gera identificacao (empatia) nao prepara audiencia pra uma oferta futura; precisa ter um verbo de movimento/convite ("vem ver", "acompanha") pra funcionar como funil de longo prazo.

**Impacto:** Bio no ar desde 06/09/2026. Mantido o ritual de segunda-feira (ver decisao anterior) pra avaliar se essa versao performa melhor que a anterior.

## 08/09/2026 — Núcleo de Influência formalizado pra Família Horizonte/Olá Experience

**Contexto:** Jorge pediu análise da bíblia usando o Método Audience (Squad Posicionamento Arcane). Achado: a marca tinha solução (5 pilares) e personagens fortes, mas nunca formalizou dor (1 palavra), inimigo externo nem apresentação magnética — elementos centrais do método. A bio atual ("ficou pra depois?") já ecoava um inimigo latente sem nomear (confirma decisão de 06/09 sobre a frase-gancho).
**Decisao:** Núcleo de influência fixado — dor = "Correria", inimigo = "A Maldição do Depois" (nunca a tecnologia, preserva Regra Editorial 1), solução = pequenos começos hoje via 5 pilares, 3 benefícios (presença real sem obrigação / ânimo sem esperar o momento perfeito / mudança pequena que fica), 3 crenças centrais e 4 versões de apresentação magnética. Registrado na bíblia (`INSTAGRAM OLÁ/Temporada Jornada Olá/biblia-familia-ola.md`, seção "Núcleo de Influência").
**Racional:** Jorge reforçou no mesmo dia que quer usar os recursos do Arcane "220%" e criar sempre em conjunto com os agentes, não só consultar de leve. O núcleo dá espinha dorsal estratégica rastreável pra todo roteiro/copy futuro, em vez de cada peça nascer solta.
**Impacto:** Todo conteúdo institucional (bio, destaques, posts fixados, copy de campanha) deveria dali pra frente ser rastreável até esse núcleo. Próximo passo natural (ainda não feito): revisar a bio atual e propor destaques/posts fixados com o Squad Posicionamento Arcane usando esse núcleo como base.
