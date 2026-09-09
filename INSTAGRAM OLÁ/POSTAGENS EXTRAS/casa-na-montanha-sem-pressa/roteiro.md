# OLÁ BÔNUS — "A noite que a família parou de correr"

> Código: OLÁ BÔNUS (não é episódio numerado da Temporada). Produzido com o Squad Conteúdo Arcane
> (Sage + Rico) em 08-09/09/2026, a pedido do Jorge — primeiro vídeo com movimento real
> (image-to-video + lip-sync via Kling), não é lançamento do Zai Cantor, é um momento de família.

## Núcleo (Sage)

**Tese central:** "A noite que a família parou de correr" — não é o Zai mostrando talento, é a
família inteira suspendendo a correria por uma noite. Amarra direto com o núcleo de influência
da marca (dor = Correria, inimigo = A Maldição do Depois) sem soar propaganda do Zai.

**Trilha:** "Sem Pressa" (letra em `ZAI CANTOR/zai-poesias.md`, inédita até esta produção).
Voz gerada no Suno reusando a voz de referência da faixa do T1E16 ("Isso Ainda Vai Dar Certo")
via feature "Voice" do Suno (voz salva como "Zai - Voz Familia Horizonte"). Faixa final aprovada
pelo Jorge: **1:22** (`audio/sem-pressa-zai-1m22s.mp3`).

## Cenário

Casa na montanha, clima frio, todo mundo agasalhado (casacos de lã, cores de inverno) —
inclusive o Thor, de casaquinho. Lareira acesa. Ninguém no celular.

## Roteiro (Reels, sem texto na tela, CTA só na legenda)

| Tempo | Cena | Câmera/movimento | Emoção |
|---|---|---|---|
| 0-4s | HOOK: exterior da casa na montanha, neve leve, luz quente vazando das janelas ao entardecer | plano fixo, leve zoom-in lento | acolhimento/curiosidade |
| 4-12s | Família toda dentro, agasalhada, Thor com casaquinho, perto da lareira acesa | plano aberto, câmera parada | aconchego |
| 12-20s | Zai pega o violão, começa baixinho — 1ª estrofe ("Eu não preciso correr...") | close no rosto do Zai cantando (lip-sync), leve profundidade de campo | intimidade |
| 20-32s | Refrão ("Sem pressa, sem pressa...") — corta pra família reagindo: Nilo e Lu se olham, Nori deitada no colo, Thor cochilando | plano família + cutaways curtos | ternura |
| 32-40s | 2ª estrofe — volta pro Zai, mais solto, sorrindo de leve | close Zai | vulnerabilidade/orgulho contido |
| 40-52s | Refrão final — plano geral da família toda junto perto do fogo | plano aberto, leve zoom-out | plenitude/calma |
| 52-56s | Logo Olá Experience, fade | estático | fechamento |

**Loopings:** abre "por que estão tão quietos?" (12s) → fecha na reação da família (20-32s).
Abre "o Zai vai se abrir mais?" (32s) → fecha no plano final de união (52s).

## Produção (Mack)

- 2 artes-base novas via Codex: (1) plano aberto da família na sala da casa de montanha,
  (2) close do Zai tocando violão — ambas com as âncoras físicas de todo personagem (bíblia
  `biblia-familia-ola.md`), Thor incluso com coleira terracota.
- Motion suave via Kling image-to-video (chamas oscilando, respiração, sem gestos bruscos).
- Lip-sync via Kling só no close do Zai, usando `audio/sem-pressa-zai-1m22s.mp3`.
- Créditos Kling: plano Standard ativo (741 no saldo em 09/09/2026), assinatura mensal.

## Status

- [x] Tema/tese definida (Sage)
- [x] Roteiro aprovado (Rico)
- [x] Trilha gerada e aprovada (1:22, arquivo real 1:21)
- [x] V1 (descartada como versão final) — feedback do Jorge: ficou distante da referência @reflexodivinotv (personagens precisam conversar entre si) e o lip-sync do Zai não batia com o ritmo/letra
- [x] Correção técnica: lip-sync do Zai refeito 2x — primeiro corrigindo o corte de áudio (tinha 1,45s de silêncio no início que fazia a boca mexer sem cantar), depois reposicionado pro trecho 20-30s da música pra bater com a posição dele na timeline final
- [x] V2 — nova estrutura com família conversando (pedido do Jorge + referência extra @ericarejane.terapeuta pra gestos naturais ao falar):
  - Nova arte "chegada" (família entra e se acomoda no sofá, Thor no chão olhando pro Zai) + Kling motion
  - Nova arte "família no sofá com Zai já tocando" (mesma composição exata da chegada, continuidade) + Kling motion
  - Closes falando de Nilo, Lu e Nori (arte + Kling motion + lip-sync com falas geradas por TTS pt-BR: Nilo=Microsoft Daniel, Lu=Microsoft Maria, Nori=Maria com pitch-shift)
  - Falas: Nilo "Sem pressa mesmo, filho. A gente tem a noite inteira.", Lu "Isso... isso é tudo que eu queria sentir hoje.", Nori "Eu não quero que essa noite acabe."
  - Áudio final: música "Sem Pressa" tocando integralmente, com ducking (abaixa pra 18%) durante os 30s de falas da família, falas por cima
  - Timeline (81,5s): chegada → família tocando → Zai canta (lip-sync) → Nilo fala → Lu fala → Nori fala → reprise família → logo
  - `video/OLA-BONUS-v2-COMPACTO.mp4` (16,6MB) enviado pro Jorge revisar
- **Lição registrada:** o prompt de imagem com "boca aberta falando" bloqueou a geração da Lu 6x seguidas na moderação da OpenAI (categoria "other") — trocar por "sorrindo"/expressão sem menção à boca aberta resolveu na hora. Evitar essa frase em prompts de close futuros.
- [x] V2 rejeitada — 2 erros apontados: (1) música tocava antes do Zai começar a tocar violão (cena de chegada quebrava o sincronismo); (2) falas dos personagens ficavam com a boca aberta sem áudio depois que a frase curta terminava (o clipe Kling de 10s continuava "falando" além da duração real do áudio de TTS).
- [x] V3 — simplificação pedida pelo Jorge: sem cena de chegada, cena única já com todos sentados e o Zai já na posição de tocar; família e Thor só contemplam com amor/carinho (sem falar, boca fechada); tudo sincronizado desde o quadro 1. Removidas as falas de Nilo/Lu/Nori.
  - Áudio "performance" = faixa "Sem Pressa" cortada no ponto exato onde a voz/violão entra (corta os 1,45s de silêncio inicial), 80,07s.
  - Faixa dividida em 8 blocos de 10s; cada bloco vira 1 clipe Kling lip-sync alternando plano geral (2 motion-bases únicas: `familia-sofa-tocando` e depois `performance-wide`, reenquadrado mais amplo por pedido do Jorge) e close do Zai — reusando os MESMOS 2 vídeos-base de motion e rodando lip-sync 4x em cada um (economiza gerações de motion, technique válida pq o lip-sync resincroniza só a boca).
  - Janela trocada: montanha + lua cheia + noite amena, sem neve (pedido do Jorge).
  - Vídeo final 86,3s (80s de performance + 6s de logo), `video/OLA-BONUS-v3-COMPACTO.mp4` enviado pro Jorge.
  - Pendência aceita pro Jorge decidir se vale a pena: Thor balançar o rabo só no início (pedido, não aplicado ainda pra não perder o progresso já gerado).
- [x] V4 — só ajuste do rabo do Thor na abertura (aprovado em separado, mas o resto do V3 foi rejeitado no mesmo lote).
- [x] V4 rejeitado — 3 erros: (1) família toda balançando pra frente fora de ritmo; (2) violão do Zai com dedilhado rápido demais, sem relação com o andamento calmo da música; (3) boca do Zai abrindo antes da voz realmente entrar. Causa raiz: o Kling gera o movimento (corpo/violão) só a partir do texto do prompt, sem receber a música como referência — só o lip-sync recebe áudio de verdade, e só controla a boca, não o corpo. O prompt anterior deixava espaço demais pra "movimento natural", o que o Kling interpretou como balanço/dedilhado genérico dessincronizado.
- [x] V5 — bases de movimento REFEITAS do zero, com instrução de "quase parado" (família só respira/pisca, sem balançar; violão do Zai quase estático, sem dedilhado visível; nenhuma "atuação de cantar" pré-animada no Zai, boca só se move via lip-sync). Reaproveitado o mesmo pipeline de 8 blocos de 10s alternando wide/close. `video/OLA-BONUS-v5-COMPACTO.mp4` enviado pro Jorge.
- **Lição de produção registrada:** Kling image-to-video não recebe áudio como referência de ritmo — qualquer "movimento natural" pedido por texto sai sem sincronia real com a música. Só a boca (via lip-sync, que recebe áudio de verdade) pode ser considerada realmente sincronizada. Prompts de motion daqui pra frente devem pedir movimento mínimo/quase estático nos elementos que não são lip-sync, e nunca pré-animar "cantando" no vídeo-base — a boca deve ficar neutra ali, deixando 100% do trabalho de sincronia pro lip-sync.
- [x] V5 ainda apontado como "não ideal" pelo Jorge — desafio central: ritmo da música x ritmo do dedilhado das mãos do Zai no violão. Causa raiz confirmada: Kling image-to-video não recebe áudio como referência, só o lip-sync (boca) é realmente sincronizado.
- **Consultada a Mack (produção, Squad Conteúdo Arcane) a pedido do Jorge:** princípio-chave — corte rápido no ritmo esconde imperfeição de movimento, plano longo demais escancara dessincronia. Não precisa gastar mais crédito Kling: é reedição do material já gerado (os 8 blocos calm-seg-0 a calm-seg-7 em `video-build-v5`, ainda em `AppData/Local/Temp/.../scratchpad/video-build-v5/`, não copiados pro projeto ainda).
- **PRÓXIMO PASSO (não iniciado ainda):** recortar cada bloco de 10s em pedaços de ~2,5-3s (tamanho de frase da letra) alternando ângulos wide/close, criando sensação de ritmo pelo CORTE em vez de pela mão parada — monta v6 só com ffmpeg, sem nova geração Kling.
- **Pivô 09/09/2026:** vídeo (Kling motion + lip-sync) parado. Dados mostraram que o formato carrossel estático (T1E16) performa muito acima do vídeo (2.000 views orgânicos vs base de 63 seguidores). Decidido: publicar hoje como carrossel no molde do T1E16 ("OLÁ TRILHA"), com a música "Sem Pressa" reservada pra um Reel futuro (pan/zoom simples nas artes já aprovadas, sem lip-sync).
  - Confirmado por teste direto: Instagram não permite áudio original em post/carrossel (só catálogo licenciado) nem em Stories via web — áudio próprio só entra embutido num arquivo de vídeo (Reels).
  - Carrossel gerado com o molde fixo do T1E16 (`scripts/gerar-carrossel-ola-bonus-sem-pressa.mjs`, `gerar-capa-carrossel-ola-bonus-sem-pressa.mjs`, `gerar-slide-letra-avatar-ola-bonus-sem-pressa.mjs`), 6 slides, capa fotográfica com `performance-wide-raw-v2.png`.
  - Ajuste de fonte no slide 4/6 (footer encurtado pra bater com o tamanho do slide 2/6, regra de sizing já estabelecida no projeto).
- [x] Legenda da publicação (`carrossel/legenda.md`)
- [x] **Publicado em 09/09/2026** — carrossel "OLÁ TRILHA — Sem Pressa" no ar em @olaexperienceoficial.
- [x] Reel com áudio real de "Sem Pressa" gerado em 09/09/2026 — pan/zoom (Ken Burns via ffmpeg, mesma técnica do teste T1E06), sem Kling/lip-sync, zero custo de geração nova. 7 artes já aprovadas da produção do vídeo anterior (`arte-bruta/`) + card de fechamento do carrossel, 85s, 1080x1920, áudio `sem-pressa-zai-1m22s.mp3` (81,55s) embutido direto no arquivo via ffmpeg — **esse é o formato que o Instagram aceita** (áudio autoral só é permitido quando já está dentro do vídeo real; a trava anterior era tentar anexar a faixa a post/carrossel/Stories via web). Timeline: chegada (0-8s) → família no sofá (8-20s) → close Zai verso 1 (20-36s) → close Lu refrão (36-46s) → close Nori refrão (46-56s) → close Nilo verso 2 (56-66s) → plano geral performance (66-81,55s) → logo (81,55-85s, sem áudio). Arquivo: `reel-pan-zoom/OLA-BONUS-sem-pressa-REEL.mp4`. Script: `scripts/gerar-reel-sem-pressa.mjs`.
- **Correção (09/09/2026):** Jorge apontou que as artes reaproveitadas eram poses de "atuação" feitas originalmente pra animação Kling (boca do Zai aberta cantando, mão em posição de dedilhado ativo, Thor de boca aberta) — em still de pan/zoom (sem lip-sync), isso lê como o mesmo problema de dessincronia das versões de vídeo antigas. Corrigido via edição de imagem (Codex `image_gen`, preservando cena/roupa/identidade, mudando só a pose): `close-zai-montanha-raw-v2-parado.png` (boca fechada, mão em repouso) e `familia-sofa-tocando-raw-v3-parado.png` (Zai idem + Thor de boca fechada e rabo parado no chão). Reel regenerado com essas versões.
- **Ajuste 2 (09/09/2026):** Jorge pediu pra tirar todo close/zoom em personagem — o zoom aproximado expõe imperfeições da arte. Timeline refeita 100% em plano aberto/distante, só as 3 cenas largas (chegada 0-25s, família no sofá 25-53s, plano geral da performance 53-81,55s) + logo, todas estáticas (sem zoom, `zoomTo: 1.0`). Fechas close-zai/lu/nori/nilo tiradas do vídeo.
- [x] Publicado em 09/09/2026 — https://www.instagram.com/reel/DdE0WOMBMra/ — e **removido do ar no mesmo dia**, a pedido do Jorge: a arte ainda precisa de outra correção. Legenda ficou salva em `reel-pan-zoom/legenda.md` pra reusar quando republicar.
- **Ajuste 3 (09/09/2026):** Jorge apontou que a versão publicada ainda tinha a cena de "chegada" (violão largado ao lado do Zai, ele ainda sem tocar) antes da cena de tocar de verdade — pediu pra tirar, o vídeo deve começar já com o Zai tocando. Timeline refeita: só `familia-sofa-tocando-raw-v3-parado` (0-40s) → `performance-wide-raw-v2` (40-81,55s) → logo (81,55-85s). Cena de chegada removida do vídeo.
- **Nova regra de nomenclatura (09/09/2026):** daqui pra frente toda arte/vídeo versionado leva `--v<N>--<AAAAMMDD>-<HHMM>` no próprio nome do arquivo (ver `business/processos/nomenclatura-artes-versionadas.md`) — resolve a confusão de "é esse mesmo arquivo?" que aconteceu nesta produção.
- **Arquivo atual (a revisar):** `reel-pan-zoom/OLA-BONUS-sem-pressa-REEL--v4--20260909-1507.mp4` — v4 = sem a cena de chegada, só as 2 cenas com o Zai já tocando.
- **Causa raiz da confusão de arquivos (09/09/2026):** o Jorge estava conferindo `video/OLA-BONUS-v5-FINAL.mp4` — o vídeo Kling antigo e abandonado (gerado de madrugada, antes do pivô pra carrossel/Reel pan-zoom), sem relação com o Reel atual. Pasta renomeada pra `video-DESCARTADO-kling-v1-a-v5/` pra não confundir de novo. Confirmado que agora ambos estão olhando `reel-pan-zoom/OLA-BONUS-sem-pressa-REEL--v4--20260909-1507.mp4`.
- [x] **Aprovado e republicado em 09/09/2026** — https://www.instagram.com/reel/DdE5OEhBVla/ (v4: sem cena de chegada, sem zoom, poses corrigidas). Rótulo de IA desligado, texto alternativo preenchido.

## Bug do carrossel de feed "OLÁ TRILHA — Sem Pressa" (09/09/2026)

**Problema:** o carrossel de feed (publicado de manhã, antes do Reel) tinha o "1/6" e "ARRASTE →" desenhados na própria imagem, mas o Instagram nunca reconheceu como multi-imagem de verdade — sem seta, sem ponto de navegação real, travado em 1/6. Jorge reportou.
**Causa raiz confirmada:** só a imagem `01-capa.png` foi enviada na publicação original (upload de arquivo único), não as 6 juntas — o post virou uma foto simples com uma legenda de carrossel, não um carrossel real.
**Correção:** post excluído e republicado selecionando as 6 imagens (`01-capa.png` a `06-fechamento.png`) juntas no mesmo upload. Confirmado depois: seta real de navegação funcionando, `img_index` mudando na URL ao avançar (1→2), ícone de múltiplas fotos aparecendo na grade do perfil. Nova publicação: https://www.instagram.com/p/DdE7JYsFrMT/. Texto alternativo escrito pra cada um dos 6 slides, rótulo de IA conferido desligado.
**Lição:** ao publicar carrossel de feed, sempre selecionar/anexar TODAS as imagens da pasta de uma vez no mesmo upload — nunca uma por vez — e depois de publicar, testar de fato a navegação (clicar a seta dentro da imagem, checar se o `img_index` da URL muda) antes de considerar o post ok.
