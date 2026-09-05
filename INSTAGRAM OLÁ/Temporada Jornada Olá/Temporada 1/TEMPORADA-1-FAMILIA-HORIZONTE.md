# Temporada 1 — Família Horizonte

> 9 episódios. Cadência: terça e sábado, 2x/semana (~9 posts por bloco de 30 dias). Personagens: Lu, Nilo, Zai e Nori — perfis completos em `../biblia-familia-ola.md` (pasta anterior, compartilhada entre temporadas).

> **Numeração:** cada temporada reinicia o episódio em 1 (formato série — Temporada + Episódio, como Netflix). Os episódios 01, 02 e 03 já publicados mantêm o rótulo antigo (`FAMÍLIA HORIZONTE · EPISÓDIO 0X`) pra não exigir repostagem. A partir do **episódio 04**, o rótulo na tela passa a ser `FAMÍLIA HORIZONTE · T1E0X`.

## Por que essa temporada

Mostrar uma família comum, cansada e cheia de tecnologia, descobrindo que dá pra viver melhor sem virada radical nem culpa. Cada episódio é um passo pequeno, não uma transformação — a mudança real é perceber que existem outros caminhos disponíveis.

**Arco:** rotina fragmentada → primeiras experiências pequenas → cada um encontra motivação própria → prova de que a família consegue criar novas possibilidades → continuidade (dias difíceis continuam existindo, mas agora há outro caminho).

## Episódios

**Ep. 1 — "Juntos, mas envolvidos em rotinas diferentes"**
Apresentação da família — todos na sala, cada um no próprio aparelho, juntos fisicamente mas ausentes uns dos outros. Publicado como post de chamada (sem numeração de episódio, funciona como convite pros episódios que vêm), não como carrossel.
**Status:** publicado em 04/09/2026 — post único (sem carrossel), arte em `artes-base/01-familia-ola-apresentacao-chamada.png`.

**Ep. 01 — "O final de semana passou"**
A Lu cuidou de todo mundo, o Nilo prometeu (de novo) que ia ser diferente, o Zai registrou tudo no celular, a Nori guardou uma folha. Cenário: cozinha, domingo à noite.
**Status:** publicado em 04/09/2026 — carrossel em `carrossel-02-final-de-semana/`.

**Ep. 02 — "Vamos fazer alguma coisa?"**
A família decide sair de casa. Cada um reage diferente ao convite — a Lu já sabe que se esperar não começa nunca, o Nilo prefere começar pequeno, o Zai só topa se puder escolher parte do roteiro, a Nori pergunta o que sempre movimenta todo mundo. Cenário: corredor/porta de entrada.
**Status:** publicado em 04/09/2026 — carrossel em `carrossel-03-vamos-fazer/`.

**Ep. 03 — "Uma volta pelo quarteirão"** (era "A primeira caminhada" na lista original — renomeado pra não sugerir que a família nunca tinha caminhado junta antes)
A primeira caminhada de fato: uma volta simples pelo bairro, de manhã. Cenário: rua arborizada.
**Status:** publicado em 04/09/2026 — carrossel em `carrossel-04-primeira-caminhada/`. (Nota: em 05/09/2026 o Claude questionou esse status por só achar a capa gerada no disco local — Jorge confirmou que foi publicado sim.)

**Ep. 04 — "O parquinho é de todo mundo"** (era "Dez minutos de presença" na lista original — renomeado porque o tema mudou de rumo, de atenção plena em família pra inclusão entre crianças) — rótulo na tela: **T1E04**
Cenário: parque, de dia, luz clara/fria (não o tom âmbar dos episódios anteriores — testando a variação de iluminação por horário/atividade). A Nori brinca com outras crianças no parquinho, entre elas algumas com deficiência física e uma criança com síndrome de Down. Dois cachorros golden retriever correm animados ao redor do grupo, brincando junto com as crianças. A cena mostra todas brincando juntas, como iguais — ninguém de fora observando, ninguém "incluindo" ninguém como favor. A mensagem é sobre pertencimento, não sobre ajuda.

Diretrizes específicas deste episódio:
- Legenda simples e direta (ex.: "brincar não tem porta fechada pra ninguém"), sem linguagem clínica, sem explicar que as crianças "precisam" de interação — a cena fala sozinha.
- Nenhum personagem (incluindo a Nori) é retratado como quem "ajuda" ou "inclui" as outras crianças — todas estão apenas brincando, no mesmo nível.
- Geração de imagem exige conferência visual extra antes de aprovar, em especial a criança com síndrome de Down — checar que não saiu estereotipada/caricata antes de seguir pro carrossel.
- Nori mantém a descrição física e o guarda-roupa já estabelecidos (ver `../biblia-familia-ola.md`) para não perder consistência com os episódios anteriores.
**Status:** publicado em 05/09/2026 — https://www.instagram.com/p/Dc6OmgtlhkH/ (carrossel com 4 slides, legenda com hashtags de descoberta, rotulo de conteudo de IA ativado, texto alternativo em todos os slides). Publicado via Claude in Chrome (extensao conectada nesta sessao). Guardrail visual da crianca com sindrome de Down checado e aprovado antes da publicacao.

**Correcoes pos-publicacao (mesmo dia):** a primeira versao (link antigo, apagado) tinha dois problemas na capa — (1) o script `gerar-capa-carrossel-05.mjs` usava `fit:'cover'` pra converter a arte 1536x1024 em quadrado 1080x1080, cortando simetricamente as laterais e descartando os dois meninos das pontas (camiseta azul e camiseta coral) que apareciam na arte original; corrigido pra `fit:'contain'` com padding verde-floresta, mantendo as 6 criancas e os 2 caes visiveis. (2) O `FACE_BOX` do avatar da Nori em `adicionar-avatar-carrossel-05.mjs` (estimado a olho) estava descentralizado, cortando o topo da cabeca; ajustado de `{left:370,top:240,size:190}` pra `{left:335,top:160,size:250}`. Post original apagado e republicado com as correcoes.

**Ep. 05 — "Cada pessoa tem seu ritmo"** — rótulo na tela: **T1E05**
Ainda não definido cenário/roteiro. Ideia da lista original: reconhecer que a jornada de cada integrante da família avança num tempo diferente.
**Status:** pendente.

**Ep. 06 — "Preparar também faz parte"** — rótulo na tela: **T1E06**
Ainda não definido cenário/roteiro. Ideia da lista original: os bastidores/preparação antes de uma experiência maior (provavelmente a primeira saída na natureza do Ep. 07).
**Status:** pendente.

**Ep. 07 — "A primeira experiência na natureza"** — rótulo na tela: **T1E07**
Ainda não definido cenário/roteiro. Marca a saída do ambiente doméstico/urbano pra um contato mais direto com a natureza.
**Status:** pendente.

**Ep. 08 — "Quando vamos novamente?"** — rótulo na tela: **T1E08**
Ainda não definido cenário/roteiro. Fechamento da temporada — a pergunta que confirma que a experiência valeu a pena e que a família quer repetir.
**Status:** pendente.

## Guardrails (herdados do projeto)

- Tecnologia nunca é tratada como vilã.
- Cansaço não é confundido com preguiça.
- Pais também erram e aprendem com os filhos; filhos participam das decisões.
- Sem padrão corporal ideal nem promessa de transformação "antes e depois".
- Nenhuma aventura é apresentada como tratamento ou cura.
- Temas técnicos/clínicos ficam pra profissionais habilitados, nunca pros personagens.

## Depois da Temporada 1

Continuidade natural: Temporada 2 (avós Dora e Beto), já planejada em `../Temporada 2/TEMPORADA-2-AVOS.md`.
