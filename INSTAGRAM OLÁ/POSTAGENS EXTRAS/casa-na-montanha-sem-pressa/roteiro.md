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
- [ ] Legenda da publicação
- [ ] Publicado — pausado a pedido do Jorge (foi descansar), retomar no próximo passo acima
