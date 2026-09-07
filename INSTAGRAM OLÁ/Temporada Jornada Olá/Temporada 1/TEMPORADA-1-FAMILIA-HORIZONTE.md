# Temporada 1 — Família Horizonte

> Temporada expandida em 05/09/2026 pra cobrir a campanha de 60 dias (07/09 a 05/11/2026) — vai de T1E01 até **T1E31** (ajustado de T1E30 pra T1E31 em 05/09/2026 com a inserção do episódio do Thor antes do início formal da campanha — ver Ep. 05 abaixo). Cadência atual: 7x/semana (todo dia), sendo 3x/semana Arte (Terça, Quinta, Domingo — episódios desta lista) e 4x/semana Frase (carrossel de texto avulso, fora desta lista). Detalhes da campanha em `../../../business/campanhas/instagram/campanha-60-dias-cotidiano.md`. A Temporada 2 (avós) fica guardada pra começar só depois do checkpoint do dia 60. Personagens: Lu, Nilo, Zai e Nori — perfis completos em `../biblia-familia-ola.md` (pasta anterior, compartilhada entre temporadas).

> **Numeração:** cada temporada reinicia o episódio em 1 (formato série — Temporada + Episódio, como Netflix). Os episódios 01, 02 e 03 já publicados mantêm o rótulo antigo (`FAMÍLIA HORIZONTE · EPISÓDIO 0X`) pra não exigir repostagem. A partir do **episódio 04**, o rótulo na tela passa a ser `FAMÍLIA HORIZONTE · T1E0X`.

## Por que essa temporada

Mostrar uma família comum, cansada e cheia de tecnologia, descobrindo que dá pra viver melhor sem virada radical nem culpa. Cada episódio é um passo pequeno, não uma transformação — a mudança real é perceber que existem outros caminhos disponíveis.

**Arco:** rotina fragmentada → primeiras experiências pequenas → cada um encontra motivação própria → prova de que a família consegue criar novas possibilidades → continuidade (dias difíceis continuam existindo, mas agora há outro caminho).

## Episódios

**Ep. 1 — "Juntos, mas envolvidos em rotinas diferentes"**
Apresentação da família — todos na sala, cada um no próprio aparelho, juntos fisicamente mas ausentes uns dos outros. Publicado como post de chamada (sem numeração de episódio, funciona como convite pros episódios que vêm), não como carrossel.
**Status:** publicado em 04/09/2026 — post único (sem carrossel), arte em `T1E00-chamada-postado-04-09-2026/arte-bruta/01-familia-ola-apresentacao-chamada.png`.

**Ep. 01 — "O final de semana passou"**
A Lu cuidou de todo mundo, o Nilo prometeu (de novo) que ia ser diferente, o Zai registrou tudo no celular, a Nori guardou uma folha. Cenário: cozinha, domingo à noite.
**Status:** publicado em 04/09/2026 — carrossel em `T1E01-final-de-semana-postado-04-09-2026/carrossel/`.

**Ep. 02 — "Vamos fazer alguma coisa?"**
A família decide sair de casa. Cada um reage diferente ao convite — a Lu já sabe que se esperar não começa nunca, o Nilo prefere começar pequeno, o Zai só topa se puder escolher parte do roteiro, a Nori pergunta o que sempre movimenta todo mundo. Cenário: corredor/porta de entrada.
**Status:** publicado em 04/09/2026 — carrossel em `T1E02-vamos-fazer-postado-04-09-2026/carrossel/`.

**Ep. 03 — "Uma volta pelo quarteirão"** (era "A primeira caminhada" na lista original — renomeado pra não sugerir que a família nunca tinha caminhado junta antes)
A primeira caminhada de fato: uma volta simples pelo bairro, de manhã. Cenário: rua arborizada.
**Status:** publicado em 04/09/2026 — carrossel em `T1E03-primeira-caminhada-postado-04-09-2026/carrossel/`. (Nota: em 05/09/2026 o Claude questionou esse status por só achar a capa gerada no disco local — Jorge confirmou que foi publicado sim.)

**Ep. 04 — "O parquinho é de todo mundo"** (era "Dez minutos de presença" na lista original — renomeado porque o tema mudou de rumo, de atenção plena em família pra inclusão entre crianças) — rótulo na tela: **T1E04**
Cenário: parque, de dia, luz clara/fria (não o tom âmbar dos episódios anteriores — testando a variação de iluminação por horário/atividade). A Nori brinca com outras crianças no parquinho, entre elas algumas com deficiência física e uma criança com síndrome de Down. Dois cachorros golden retriever correm animados ao redor do grupo, brincando junto com as crianças. A cena mostra todas brincando juntas, como iguais — ninguém de fora observando, ninguém "incluindo" ninguém como favor. A mensagem é sobre pertencimento, não sobre ajuda.

Diretrizes específicas deste episódio:
- Legenda simples e direta (ex.: "brincar não tem porta fechada pra ninguém"), sem linguagem clínica, sem explicar que as crianças "precisam" de interação — a cena fala sozinha.
- Nenhum personagem (incluindo a Nori) é retratado como quem "ajuda" ou "inclui" as outras crianças — todas estão apenas brincando, no mesmo nível.
- Geração de imagem exige conferência visual extra antes de aprovar, em especial a criança com síndrome de Down — checar que não saiu estereotipada/caricata antes de seguir pro carrossel.
- Nori mantém a descrição física e o guarda-roupa já estabelecidos (ver `../biblia-familia-ola.md`) para não perder consistência com os episódios anteriores.
**Status:** publicado em 05/09/2026 — https://www.instagram.com/p/Dc6OmgtlhkH/ (carrossel com 4 slides, legenda com hashtags de descoberta, rotulo de conteudo de IA ativado, texto alternativo em todos os slides). Publicado via Claude in Chrome (extensao conectada nesta sessao). Guardrail visual da crianca com sindrome de Down checado e aprovado antes da publicacao.

**Correcoes pos-publicacao (mesmo dia):** a primeira versao (link antigo, apagado) tinha dois problemas na capa — (1) o script `gerar-capa-carrossel-05.mjs` usava `fit:'cover'` pra converter a arte 1536x1024 em quadrado 1080x1080, cortando simetricamente as laterais e descartando os dois meninos das pontas (camiseta azul e camiseta coral) que apareciam na arte original; corrigido pra `fit:'contain'` com padding verde-floresta, mantendo as 6 criancas e os 2 caes visiveis. (2) O `FACE_BOX` do avatar da Nori em `adicionar-avatar-carrossel-05.mjs` (estimado a olho) estava descentralizado, cortando o topo da cabeca; ajustado de `{left:370,top:240,size:190}` pra `{left:335,top:160,size:250}`. Post original apagado e republicado com as correcoes.

**Ep. 05 — "Um presente de quatro patas"** — rótulo na tela: **T1E05**
Novo personagem fixo na família: **Thor**, golden retriever, 4 anos (ficha de referência completa em `../personagens/thor-referencia.txt` e `../personagens/thor-referencia.png`, e na bíblia da família). Cenário: sala de casa, tarde ensolarada. A Nori entra na sala e encontra o Thor sentado com um laço no pescoço por cima da coleira fixa (couro terracota, placa redonda) — presente surpresa da Lu e do Nilo. Reação de pura alegria da Nori; o Zai fotografa o momento da porta.

Diretrizes específicas deste episódio:
- Episódio de marco emocional (chegada de um novo integrante fixo) — publicado fora da ordem original de roteiro, a pedido do Jorge, pra sair no ar ainda em 05/09/2026 (mesmo dia do Ep. 04). Por isso entra como T1E05, antes dos episódios já roteirizados de ritmo/preparação/natureza, que foram todos renumerados +1 (ver abaixo).
- Thor precisa manter a coleira de couro terracota com placa redonda (com o nome THOR gravado) em **todo** episódio futuro em que aparecer — é a âncora visual fixa dele.
- Prompt de referência do personagem: `../personagens/thor-referencia.txt` (gerado antes da cena, pra fixar a aparência — 3 iterações até aprovar).
- Prompt da cena: `T1E05-thor-postado-05-09-2026/prompt/prompts-codex-cena-thor-chegada.txt`.
**Status:** publicado em 05/09/2026 — https://www.instagram.com/p/Dc6lqL0FgxX/ (carrossel com 4 slides, legenda com hashtags, rótulo de conteúdo de IA ativado, texto alternativo em todos os slides). Arte gerada e revisada direto via Codex CLI (`codex exec`) chamado pelo Claude Code — novo fluxo, ver nota técnica em `contexto-dinamico.md`.

**Correções pós-geração (mesmo dia, antes de publicar):** o Jorge apontou 4 problemas na primeira versão da cena, corrigidos em rodadas sucessivas de edição via `image_gen.imagegen` (usando imagens de referência de episódios anteriores + a ficha do Thor):
1. Corpo/pernas da Lu fora do padrão de identidade dela — corrigido usando `T1E02-vamos-fazer-postado-04-09-2026/arte-bruta/03-corredor-raw.png` como referência de físico.
2. Nilo repetindo a mesma camiseta azul-petróleo de todos os episódios — trocado por jaqueta jeans + camiseta cinza-clara (um dos looks já previstos na bíblia, "fim de semana casual").
3. Pelagem do Thor com aspecto arrepiado e olhar direcionado pra longe da Nori — corrigido pra pelagem lisa/escovada e cabeça virada com expressão carinhosa pra ela, usando `thor-referencia.png` como referência.
4. Zai (ao fundo) com o rosto borrado/pouco nítido — corrigido pra nitidez igual aos outros personagens.
A placa do Thor ficou legível como "THOR" mas com fonte levemente estilizada — aprovado assim mesmo (detalhe pequeno na cena).

**Ep. 06 — "Cada pessoa tem seu ritmo"** — rótulo na tela: **T1E06** (era T1E05 antes da renumeração de 05/09/2026)
Cenário: trilha arborizada num parque, manhã de sábado, luz clara e quente. A família toda está na mesma trilha, mas cada um no seu próprio ritmo, em pontos diferentes do caminho — a Nori mais à frente, agachada observando uma borboleta/flor; o Nilo pedalando animado logo atrás dela; a Lu caminhando num passo tranquilo e constante no meio da trilha; o Zai mais atrás, fotografando a paisagem no próprio tempo. Ninguém espera, ninguém cobra, ninguém fica "de fora" — a cena passa harmonia, não atraso ou competição.

Diretrizes específicas deste episódio:
- Nenhum personagem é retratado como "mais lento" ou "mais devagar" de forma negativa — reforça a regra de não haver padrão de performance ou comparação entre os personagens.
- Considerar incluir o Thor na cena (já faz parte do cotidiano a partir do Ep. 05) — decidir ao gerar a arte.
- Prompt de imagem pronto em `T1E06-ritmo-postado-05-09-2026/prompt/prompts-codex-cena-ritmo.txt`.
**Status:** publicado em 05/09/2026 — https://www.instagram.com/p/Dc6wW6OFiIF/ (carrossel com 4 slides, legenda em `T1E06-ritmo-postado-05-09-2026/carrossel/legenda.md`, rótulo de conteúdo de IA ativado, texto alternativo em todos os slides). Thor não entrou na cena (decisão tomada na hora de gerar a arte). Vestuário esportivo genérico (sem logos de marca) usado como execução segura da ideia de admiração à Track&Field — menção só na legenda, ver nota abaixo.

**Nota — Track&Field (05/09/2026):** o Jorge propôs usar looks estilo Track&Field nos personagens com o disclosure "inspirado no estilo Track&Field" como "conteúdo editorial/UGC conceitual". Análise jurídica apontou risco real (concorrência desleal, publicidade disfarçada perante o CONAR, mislabeling de UGC) mesmo com disclosure — "inspirado em X" é rótulo de marketing, não blindagem legal. Alternativa adotada: vestuário esportivo 100% genérico (zero imitação visual de produto/marca) + uma linha de admiração textual genuína na legenda ("a gente ama o que a Track&Field representa"), sem marcar a conta oficial nesta publicação. Decisão do Jorge: seguir essa alternativa seguro.

**Ep. 07 — "Preparar também faz parte"** — rótulo na tela: **T1E07** (era T1E06)
Cenário: sala de casa, fim de tarde, luz quente. A família toda senta no chão ao redor de mochilas abertas, se preparando junto pra sair na natureza no dia seguinte (bastidores da experiência do Ep. 08) — a Lu organiza kit de primeiros socorros e lanches, o Nilo confere a bicicleta, o Zai escolhe câmera e fones (participa da decisão, não só carrega), a Nori arruma a própria mochila com lupa e potinho. Uma lista escrita à mão no chão. Ninguém é mandado ou excluído da preparação.

Diretrizes específicas deste episódio:
- Preparação é mostrada como parte da aventura, não burocracia chata antes dela.
- Cada personagem contribui de um jeito próprio (reforça "os filhos participam das decisões").
- Prompt de imagem pronto em `T1E07-preparar-postado-06-09-2026/prompt/prompts-codex-cena-preparar.txt`.
**Status:** publicado em 06/09/2026 (antecipado): https://www.instagram.com/p/Dc7sEV0lk-l/. Pasta renomeada `T1E07-preparar-postado-06-09-2026/`.

**Nota:** T1E07 ("Preparar também faz parte") publicado em 06/09/2026 (antecipado a pedido do Jorge): https://www.instagram.com/p/Dc7sEV0lk-l/.

**Ep. 08 — "A primeira experiência na natureza"** — rótulo na tela: **T1E08** (era T1E07)
Cenário: clareira de mata nativa, beira de um riacho, meio-dia com luz filtrada pelas árvores. A família chega junto (bicicleta do Nilo encostada num tronco — paga o que foi preparado no Ep. 07) e cada um vive a experiência do próprio jeito: a Nori usa a lupa que arrumou na mochila pra examinar algo na água, o Zai fotografa a paisagem com a câmera que escolheu levar, o Nilo acompanha a descoberta da Nori sem tirar o protagonismo dela, a Lu observa sentada numa pedra com uma xícara térmica, presente e sem celular.

Diretrizes específicas deste episódio:
- Paga o setup do Ep. 07 (mochila, câmera, lupa, bicicleta) — reforça que a preparação valeu a pena.
- Acessibilidade, não proeza física — ninguém aparece cansado de forma negativa ou "batalhando" pra chegar ali.
- Prompt de imagem pronto em `T1E08-natureza-postado-06-09-2026/prompt/prompts-codex-cena-natureza.txt` — inclui o Thor na cena (reforço de 06/09/2026: ele passa a aparecer em toda cena de trilha/natureza da família daqui pra frente, ver bíblia).
**Status:** publicado em 06/09/2026 (antecipado): https://www.instagram.com/p/Dc73ur4FtSR/. Pasta renomeada `T1E08-natureza-postado-06-09-2026/`.

**Ep. 09 — "Quando vamos novamente?"** — rótulo na tela: **T1E09** (era T1E08)
Cenário: varanda de casa, fim de tarde, golden hour (luz dourada quente, sol baixo, sombras longas — deliberadamente diferente da luz de meio-dia do Ep. 08 e da luz fria do Ep. 04, pra manter a variação de iluminação por horário coerente com o momento da cena). A família volta da experiência na natureza, ainda com mochilas e bicicleta, sentados nos degraus, cansados de um jeito bom. A Nori pergunta animada "quando vamos de novo?", o Nilo e a Lu trocam um olhar sorrindo, o Zai olha as fotos que tirou com um meio-sorriso discreto.

Diretrizes específicas deste episódio:
- Fecha o arco inicial (Ep. 01-09) sem ser o fechamento final da temporada — a pergunta da Nori é o gancho que abre o bloco Cognitivo (T1E10).
- Continuidade visual: mesma roupa de trilha do Ep. 08.
- Luminosidade sempre compatível com o momento do dia da cena (golden hour aqui, meio-dia no Ep. 08, luz fria testada no Ep. 04) — checar isso em todo prompt novo.
- Prompt de imagem pronto em `T1E09-quando-vamos-postado-06-09-2026/prompt/prompts-codex-cena-quando-vamos.txt` — inclui o Thor deitado nos degraus da varanda (regra de 06/09/2026).
**Status:** publicado em 06/09/2026: https://www.instagram.com/p/Dc73-Y3lk1-/. Pasta renomeada `T1E09-quando-vamos-postado-06-09-2026/`.

## Ep. 10 em diante (T1E10 a T1E31) — estrutura decidida em 05/09/2026, renumerada no mesmo dia

Fechado com o Jorge: T1E10-31 organiza-se ao redor dos **4 pilares da bio** (Cognitivo,
Cardio, Força, Bolso), vividos pela própria Família Horizonte — sem prescrição técnica,
sempre vivência/reflexão. Os avós revisitam os mesmos 4 pilares por outro ângulo na
Temporada 2 (voz do Beto), depois do checkpoint do dia 60 — eco proposital entre as
temporadas, não repetição.

**Blocos (5 episódios por pilar + fechamento):**

- **T1E10-14 — Bloco Cognitivo:** mente, aprendizado, presença mental.
- **T1E15-19 — Bloco Cardio:** movimento, fôlego, natureza (T1E08 já plantou a semente).
- **T1E20-24 — Bloco Força:** força funcional do dia a dia, não estética/academia.
- **T1E25-29 — Bloco Bolso:** cuidado com recursos/tempo como parte da saúde da família.
- **T1E30-31 — Fechamento:** os 4 pilares juntos, ecoando a pergunta "quando vamos
  novamente?" numa escala maior — prepara a virada pra Temporada 2.

Roteiro de cada bloco é escrito episódio a episódio, 1-2 semanas antes da data de
publicação — não tudo de uma vez.

**Nota da renumeração (05/09/2026):** o episódio do Thor (T1E05, "Um presente de quatro
patas") foi inserido antes destes, publicado fora da ordem de roteiro pra sair no mesmo
dia do Ep. 04. Isso empurrou todos os episódios seguintes em +1 (o que era T1E05-30 virou
T1E06-31) e liberou o Bloco Cognitivo pra ter as 5 posições cheias de conteúdo de pilar de
verdade — antes, uma das 5 posições (a antiga T1E11) era ocupada pelo próprio Thor como
"quebra proposital"; agora ele já entrou antes do bloco começar, então o bloco fica limpo.

### Bloco Cognitivo (T1E10-14)

**Ep. 10 — "A mesma tela, de um jeito diferente"** — rótulo na tela: **T1E10** (era T1E09)
Cenário: sala de casa, noite, luz interna quente e aconchegante. A família reunida ao redor de um laptop na mesa, olhando juntos as fotos da experiência na natureza (Ep. 08) — o Zai mostra animado uma foto de um inseto/planta que fotografou e pesquisou, a Nori aponta empolgada fazendo perguntas, o Nilo se debruça curioso, a Lu ri segurando uma xícara. Callback proposital do Ep. 1 (chamada): a mesma cena de "família com aparelho", mas agora todos olhando pra mesma coisa, juntos — tecnologia como ferramenta de curiosidade compartilhada, não de isolamento.

Diretrizes específicas deste episódio:
- Abre o Bloco Cognitivo mostrando aprendizado/curiosidade compartilhada, não uma "aula" ou dica técnica.
- Callback visual intencional ao Ep. 1 — reforça "tecnologia nunca é vilã", mostra o mesmo hábito usado de outro jeito.
- Prompt de imagem pronto em `T1E10-curiosidade-junto-postado-06-09-2026/prompt/prompts-codex-cena-curiosidade-junto.txt`.
**Status:** publicado em 06/09/2026: https://www.instagram.com/p/Dc74NBYFqYT/. Pasta renomeada `T1E10-curiosidade-junto-postado-06-09-2026/`.

**Ep. 11 — "Cinco minutos só meus"** — rótulo na tela: **T1E11** (era T1E10)
Cenário: cozinha de casa, manhã, luz suave e clara (deliberadamente diferente da noite do Ep. 10, do golden hour do Ep. 09 e do meio-dia do Ep. 08). Em primeiro plano nítido, a Lu tira cinco minutos com uma xícara de café e um caderno, presente e tranquila. Ao fundo, desfocado, a correria normal da casa continua (Nilo saindo pro trabalho, Zai passando de fone, Nori correndo animada) — ela não espera a casa ficar em silêncio pra proteger esse espaço pra si mesma.

Diretrizes específicas deste episódio:
- Ilustra a regra da bíblia "autocuidado não precisa ser uma grande mudança, pode começar com pequenos espaços protegidos na rotina" (conflito central da Lu) — sem linguagem clínica, sem "prática de mindfulness", só um momento simples.
- Profundidade de campo (foco na Lu, fundo desfocado) reforça visualmente o contraste calma vs. correria.
- Prompt de imagem pronto em `T1E11-cinco-minutos-postado-06-09-2026/prompt/prompts-codex-cena-cinco-minutos.txt`.
**Status:** publicado antecipadamente em 06/09/2026: https://www.instagram.com/p/Dc9B_WfFjMo/. Arte refeita do zero (v3) depois da v1 (fotorrealista) e v2 (estilizada mas com Nilo/Zai/Nori fora do padrão) terem sido publicadas, rejeitadas e apagadas. Nova versão gerada via Codex CLI com o prompt reescrito do zero — âncoras físicas completas de todo personagem (inclusive os desfocados no fundo) e reforço explícito de estilo 3D não-fotorrealista no início do prompt. Aprovada pelo Jorge com uma ressalva: o cabelo da Lu saiu solto/ondulado em vez de preso (desvio pequeno da âncora fixa dela), aceito nesta arte. Pasta renomeada `T1E11-cinco-minutos-postado-06-09-2026/`.

**Ep. 12 — "Duas horas só nossas"** — rótulo na tela: **T1E12** (movido de T1E30 em 06/09/2026, a pedido do Jorge)
Cenário: academia de bairro genérica, bem cedo da manhã, antes do resto da casa acordar. O Nilo e a Lu treinando juntos — os dois correndo lado a lado na esteira, sincronizados, com expressão de satisfação genuína — sem os filhos, sem o Thor, só os dois. Nenhuma marca, logotipo ou nome de academia aparece em lugar nenhum da cena (paredes, equipamentos, roupas). Callback ao "pequeno espaço protegido na rotina" do Ep. 11 (Lu), agora vivido a dois.

Carrossel de 5 slides — junta três dos quatro pilares na mesma aventura, como ponte de abertura do Bloco Cognitivo:
1. **Capa** — "Duas horas só nossas" (Nilo e Lu correndo juntos na esteira).
2. **Cognitivo** — foco mental, desconectar da lista de tarefas: *"Aqui a mente também descansa. Foco na respiração, não na lista de tarefas."*
3. **Cardio** — fôlego e disposição, efeito sentido, não prometido: *"O fôlego que sobra pro resto do dia. Vinte minutos e o dia fica mais leve."*
4. **Força** — funcional, não estética: *"Força não é sobre estética. É sobre aguentar a correria do dia."*
5. **Fechamento** — *"Duas horas só deles, toda semana."* + assinatura Olá Experience.

Diretrizes específicas deste episódio:
- Nenhuma promessa de resultado ou efeito biológico (nada de "afasta a velhice" ou similar) — só sensação subjetiva de disposição/foco, guardrail 5 e 6 da bíblia.
- Sem citar nome de academia real (nem Bluefit nem qualquer outra) e sem logotipo de marca em nenhuma peça de roupa ou equipamento — mesma regra do guarda-roupa aplicada aqui.
- Guarda-roupa: cor do look ativo rotacionada em relação ao último uso — Nilo em terracota (era amarelo-mostarda no T1E08), Lu em regata verde-musgo + legging terracota + faixa de cabeça (inverte a combinação terracota/verde-oliva do T1E08).
- Hashtags de descoberta sugeridas: `#jornadaolá #familiahorizonte #saudeemfamilia #vidaativa #academia #treino #casalativo #familiaunida #bemestar` — genéricas, sem nome de marca.
- Chamada para interação sugerida: "Vocês têm algum horário que é só de vocês dois, sem os filhos?"
- Prompt de imagem pronto em `T1E12-duas-horas-nossas-postado-06-09-2026/prompt/prompts-codex-cena-duas-horas-nossas.txt`.
**Status:** publicado em 06/09/2026: https://www.instagram.com/p/Dc9D66iFng6/. Pasta renomeada `T1E12-duas-horas-nossas-postado-06-09-2026/`. **Nota de identidade (06/09/2026):** a arte publicada tem o cabelo do Nilo cacheado/volumoso, fora da âncora fixa da bíblia ("nunca crespo/cacheado como o do Zai") — foi feita uma tentativa de correção (cabelo liso), mas saiu fotorrealista demais, e o Jorge pediu explicitamente pra manter a versão original (cacheada) e publicar assim mesmo. Prompt revertido pro texto original; o arquivo `arte-bruta/13-academia-raw.png` foi sobrescrito pela tentativa de correção e não bate mais com o carrossel publicado (só os slides finais preservam a versão certa).

**Ep. 13 — "Ainda não saiu, mas quase"** — rótulo na tela: **T1E13**
Cenário: quarto do Zai, fim de tarde, luz quente e suave. Ele está sentado no chão encostado na cama, violão genérico no colo, tentando formar um acorde — uma folha com anotações de acordes rabiscada a mão jogada ao lado. Expressão de concentração e frustração boa (no meio de uma tentativa, não desistindo). O Nilo está sentado na beirada da cama atrás dele, sem instrumento, só acompanhando com atenção tranquila — não corrige nem pega o violão pra mostrar "o jeito certo", só fica presente. O Thor está deitado no tapete ao lado, cochilando, alheio à música. Ninguém mais na cena.

Diretrizes específicas deste episódio:
- Aprendizado mostrado como processo, não performance — o erro faz parte da cena, não é escondido nem resolvido no mesmo episódio.
- O pai acompanha sem assumir o protagonismo do filho — mesma regra já aplicada com a Nori no Ep. 08, agora com o Zai.
- Eco temático com a Frase publicada no mesmo dia (24/09, "Repetir não é fracassar") — sem citação literal, só o mesmo espírito.
- Zai ganha momento de protagonismo individual (os episódios anteriores sempre o mostraram em grupo ou de passagem).
- Thor presente na cena (não é cena de trilha/natureza, então não é obrigatório por regra, mas reforça presença constante do cachorro no cotidiano da família).
- Violão 100% genérico, sem marca ou logotipo visível.
- Prompt de imagem pronto em `T1E13-ainda-nao-saiu/prompt/prompts-codex-cena-ainda-nao-saiu.txt`.
**Status:** publicado antecipadamente em 07/09/2026 (a pedido do Jorge, calendário previa 24/09): https://www.instagram.com/p/Dc-IFP2jJbi/. Pasta renomeada `T1E13-ainda-nao-saiu-postado-07-09-2026/`.

**Ep. 14 — "Ninguém queria parar de jogar"** — rótulo na tela: **T1E14** (fecha o Bloco Cognitivo)
Cenário: sala de casa, noite de chuva (janela ao fundo com chuva visível, luz interna quente e aconchegante — contraste com o clima frio lá fora). A família toda reunida no chão/tapete ao redor de um jogo de tabuleiro genérico (peças coloridas, dado, cartas — sem nome ou marca real de jogo nenhuma). A Nori está confusa com uma regra e pergunta, o Zai explica pra ela sem tirar a graça do jogo dele mesmo, o Nilo e a Lu jogam juntos, todos genuinamente envolvidos, ninguém com celular na mão. O Thor está deitado embaixo da mesinha de centro, encostado nas pernas de alguém.

Diretrizes específicas deste episódio:
- Fecha o Bloco Cognitivo com o oposto do Ep. 13: ali era aprendizado individual e silencioso, aqui é aprendizado coletivo e barulhento — mente também se exercita brincando junto.
- Callback ao Ep. 10 (tecnologia usada bem) por contraste: aqui a conexão acontece sem nenhuma tela — reforça que nenhum dos dois formatos é "o certo", os dois cabem na família.
- Zai (o mais reservado) ensinando a Nori é um momento de protagonismo pra ele sem ser sozinho — reforça leveza entre irmãos.
- Jogo de tabuleiro 100% genérico — sem nome, logotipo ou marca real visível em nenhuma peça, caixa ou carta.
- **Atenção redobrada de identidade** (pedido explícito do Jorge): com 4 personagens + Thor na mesma cena, comparar CADA um (inclusive os de canto/fundo) com uma arte de referência real antes de aprovar — não só olhar o conjunto por cima. Cabelo do Nilo tem que sair CACHEADO (âncora corrigida em 06/09/2026, ver bíblia) — checar de perto, não só no todo.
- Prompt de imagem pronto em `T1E14-ninguem-queria-parar/prompt/prompts-codex-cena-ninguem-queria-parar.txt`.
**Status:** arte gerada e carrossel montado em `T1E14-ninguem-queria-parar/carrossel/` (06/09/2026) — publica 27/09/2026, ainda não publicado. Auditoria de identidade com os 5 personagens: coleira do Thor precisou de correção (saiu vermelha lisa na 1ª geração, regenerada certa em couro terracota, batendo com `personagens/thor-referencia.png`); cabelo da Lu saiu solto em vez de preso em coque (desvio pequeno, aceito pelo Jorge).

### Bloco Cardio (T1E15-19)

**Ep. 15 — "Não precisa ser só a gente"** — rótulo na tela: **T1E15** (abre o Bloco Cardio)
Cenário: praça arborizada do bairro, sábado de manhã, luz clara e quente. A Família Horizonte se encontra com **amigos/vizinhos** pra uma caminhada/pedalada em grupo — primeira vez que a série mostra a família convivendo socialmente com pessoas fora do núcleo (fecha a lacuna registrada em 07/09/2026, ver `../biblia-familia-ola.md`, seção "Convívio social"). O Nilo pedala ao lado de um amigo, os dois rindo de algo; a Lu caminha conversando animada com uma amiga; o Zai anda de bike/skate com um amigo próximo, na dele, sem precisar dos pais por perto; a Nori corre à frente com uma coleguinha, as duas dando risada; o Thor brinca com outro cachorro do grupo, os dois se perseguindo.

Diretrizes específicas deste episódio:
- Introduz personagens secundários novos — cada um aparece só nesta cena por enquanto, sem nome obrigatório na legenda; se precisar nomear no prompt de imagem, usar nomes simples e genéricos (não reaproveitar nomes já usados na família).
- **Diversidade corporal e etária obrigatória entre os amigos** (reforço de 07/09/2026, ver bíblia): nenhum dos 4 amigos pode ter o mesmo tipo físico "em forma" dos protagonistas — variar conscientemente. Sugestão de elenco pra este episódio: amigo do Nilo com corpo mais robusto/gordo, sem estar "tentando emagrecer" na cena, só curtindo a pedalada no próprio ritmo; amiga da Lu bem mais velha (60+), caminhando com bengala ou passo mais lento, mostrando que a caminhada acomoda o ritmo dela; amigo do Zai magro e alto, estilo despojado (skatista); coleguinha da Nori com um tipo físico diferente da Nori (mais robusta ou mais alta, à escolha na hora de gerar). Objetivo: ninguém no grupo parece "elenco de anúncio de academia" — a cena tem que deixar claro que gente de corpos e ritmos diferentes convive e se movimenta junto, sem competição nem padrão único.
- Cardio mostrado como coisa que já é mais leve/divertida em grupo — fôlego e movimento não são o "assunto" da legenda, o encontro social é o que dá o tom.
- Ninguém do grupo de amigos rouba o protagonismo da Família Horizonte — a cena é sobre eles JUNTOS com outras pessoas, não sobre os amigos.
- Reforçar guarda-roupa ativo/esportivo já estabelecido pra cada personagem da família (rotacionar cor em relação ao último uso), sem logotipo/marca em nenhuma peça — inclusive nos personagens novos.
- Thor mantém a coleira terracota com placa "THOR" como âncora fixa; o cachorro novo do grupo não precisa da mesma coleira (ajuda a diferenciar os dois visualmente).
- Prompt de imagem: escrever com âncora física completa de todos os 5 da família + Thor (regra já existente) e uma descrição simples e consistente de cada personagem novo, incluindo o tipo físico definido acima (pra manter o mesmo visual se ele reaparecer em episódio futuro).
**Status:** arte gerada e carrossel montado em 07/09/2026 — `T1E15-nao-precisa-ser-so-a-gente/carrossel/` (4 slides + legenda). Publica 29/09/2026, ainda não publicado. Cena final: Lu caminha com a esposa do amigo do Nilo (corpo cheio/curvilíneo, diversidade corporal); Nilo caminha em ritmo acelerado com o amigo (corpo robusto, marido da mulher que acompanha a Lu — sem bicicleta, a pedido do Jorge); Zai anda de skate com um amigo da mesma idade/estatura; Nori corre com a coleguinha; grupo de 3 cachorros espalhados pela praça (Thor, vira-lata caramelo, beagle — o poodle branco foi removido a pedido do Jorge, ficaram longe do caminho central).

### Fechamento (T1E30-31)

**Nota (06/09/2026):** o episódio que ocupava o T1E30 ("Duas horas só nossas") foi movido pro T1E12 — ver Bloco Cognitivo acima. Este slot volta a ficar em aberto.

**Ep. 30 e Ep. 31 — Fechamento final**
Ainda não definido — fecha a Temporada 1 juntando os 4 pilares e ecoando "quando vamos novamente?" numa escala maior, preparando a virada pra Temporada 2 (avós). Escrever mais perto da data.
**Status:** pendente.

## Guardrails (herdados do projeto)

- Tecnologia nunca é tratada como vilã.
- Cansaço não é confundido com preguiça.
- Pais também erram e aprendem com os filhos; filhos participam das decisões.
- Sem padrão corporal ideal nem promessa de transformação "antes e depois".
- Nenhuma aventura é apresentada como tratamento ou cura.
- Temas técnicos/clínicos ficam pra profissionais habilitados, nunca pros personagens.

## Depois da Temporada 1

Continuidade natural: Temporada 2 (avós Dora e Beto), já planejada em `../Temporada 2/TEMPORADA-2-AVOS.md` — **não mexer nesse conteúdo agora** (decisão de 05/09/2026: T2 só começa depois do checkpoint do dia 60 da campanha, 06/11/2026 em diante).
