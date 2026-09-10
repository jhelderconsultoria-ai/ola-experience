# Mapa do Hoje — produto low ticket

**Data:** 10/09/2026
**Status:** oferta + página + material + revisão de pontos concluída. Falta: diagramação final do PDF com artes reaproveitadas, checklist web, QR codes, cadastro do produto na Hotmart (pausado por decisão do Jorge, aguardando aprovação do material).
**Origem:** Jorge trouxe o perfil @opoderdasmetas como referência (2,4 mi seguidores, formato carrossel + funil de quiz), precisando de receita rápida — CNPJ da Olá ativo, mas ainda sem CREF pra vender consultoria/treino.
**Squad usado:** Squad Low Ticket Arcane (Método Maxxima) — Atlas (oferta) + Quinn (copy), via MCP arcane, com aprovação do Jorge em cada etapa.

## Pneu furado (dor)

"Eu sei o que preciso fazer pela minha família — comer melhor, se mexer, cuidar do dinheiro, ter presença — mas nunca é hoje. Sempre fica pro depois, e o depois nunca chega."

Ecoa direto o núcleo de influência já fixado da marca (dor = "Correria", inimigo = "A Maldição do Depois") e a frase da bio ("Ajudamos as famílias a sair do depois pro hoje"). Não é prescrição de exercício — é decisão e ação imediata, fora do território que exige CREF.

## Mecanismo único

Protocolo curto que pega os 6 pilares da Jornada Horizonte (Alimentação, Cognitivo, Cardio, Força, Bolso, Emocional) e obriga a família a escolher **1 pequeno começo por pilar, em 6 dias** — não é curso, é decisão guiada.

## Tipo de perpétuo

**Frio** — conta com 37 seguidores, sem audiência quente. Precisa de tráfego pago desde o dia 1 (Jorge já tem prática com boost via T1E06/T1E16).

## Ruminações (EDI — HIPÓTESE, gerada por inferência do Quinn, não pesquisa de fonte real; Jorge validou como plausível em 10/09)

1. "Toda segunda eu falo que hoje começa, e nunca começa." (Score 4)
2. "Eu vivo apagando incêndio, não sobra tempo pra cuidar da gente." (Score 4)
3. "Meus filhos vão crescer e eu vou ter perdido tudo trabalhando." (Score 5)
4. "Não sei nem por onde começar, então não começo por nada." (Score 4)
5. "Se eu não fizer agora, daqui uns anos vai ser tarde demais." (Score 5)

Ruminação-âncora: #3 e #5 (medo do tempo passando).

## Nome

**Mapa do Hoje** (aprovado por Jorge em 10/09, entre 3 opções da Máquina de Nomes).

## Headline (versão A, aprovada)

> "Descubra como sair do depois pra hoje em 6 dias com o Mapa dos Pequenos Começos"

## Preço

R$ 67 (piso Maxxima pra Perpétuo Frio, acima do mínimo de R$37).

## Reuso identificado (Gate 1)

O "Guia da Jornada Horizonte — 5 primeiros passos pra sua família" (rascunhado em 07/09/2026, arquivado em `business/campanhas/CAMPANHA PRÉ LANÇAMENTO INSTAGRAM/materiais/guia-jornada-horizonte/conteudo.md`) cobre boa parte do conteúdo. Precisa: (1) atualizar de 5 pra 6 pilares (faltava o Emocional), (2) converter de isca gratuita pra produto pago, (3) passar pelos 14 blocos de página do squad.

## Sessão de revisão com a Equipe Olá (10/09/2026, tarde) — pontos do Jorge

Antes de cadastrar o produto na Hotmart, o Jorge parou o fluxo (dados pessoais já preenchidos: nome, nascimento, endereço fiscal via CNPJ, CPF) pra revisar a oferta ponto a ponto com o squad. Nenhum ponto contradisse a base já aprovada — todos foram refinamentos.

1. **Por que 6 dias, não mais?** Corresponde 1:1 aos 6 pilares; regra "fast food" do método (consumo rápido = menos abandono); prazo maior mudaria a categoria do produto (viraria mentoria, não desafio). **Mantido.**
2. **Confirmado: é um "desafio"** — mesma categoria do funil do @opoderdasmetas ("Desafio Progresso"), padrão do método pra Perpétuo Frio.
3. **QR code de interação pra quem completar os 6 dias** — evoluiu em 3 rodadas:
   - Primeira ideia: formulário de depoimento → descartada (baixa adesão hoje em dia).
   - Certificado de conquista pronto pra postar no Stories (zero digitação, template único com espaço pro nome à mão) — gera prova social espontânea, ativa o Bloco 2 (Depoimentos) da página, hoje oculto por falta de comprador.
   - QR code **por dia/pilar** (não só no final): abre frase de efeito + cena real da Família Horizonte praticando aquele pilar — reforça a cada passo, efeito "desbloquear fase".
4. **Preço R$67** — confirmado como ponto de partida padrão do método (Maxxima sempre começa aqui, testa 47/87 depois com dado real do Funil 3X). **Mantido.**
5. **Previsão de custos:** Hotmart não cobra mensalidade nem adesão (só paga se vender) — taxa por venda de R$67 é 9,9% + R$2,49 fixo ≈ R$9,12, líquido R$57,88/venda. Verba de tráfego de teste (Fase Azul): ~R$30/dia, teto de R$900 em 30 dias se não vender nada (pode desligar antes). Ponto de equilíbrio: menos de 1 venda/dia já cobre a verba.
6. **Imagens novas dos personagens praticando cada pilar** — ideia aprovada, mas com meio-termo por tempo: **v1 reaproveita cenas já existentes e aprovadas** dos episódios publicados (T1E08, T1E12, T1E16 como referência); artes 100% exclusivas do desafio ficam pra v2, depois que o produto validar vendas (justifica o tempo de produção).
7. **QR code pro checklist interativo** — em vez do checklist só impresso no PDF, um QR code leva pra uma página web (mesma infra gratuita do GitHub Pages) com os 6 dias, arte de cada pilar ao lado, e marcação de progresso salva no celular da família — sem login, sem servidor.

### Arquitetura final do material (pós-revisão)

- **PDF "O Mapa dos 6 Dias"** — leitura e reflexão (conteúdo já escrito em `material-mapa-do-hoje.md`), com cenas reaproveitadas dos episódios em cada dia.
- **QR code por dia** → frase de efeito + cena daquele pilar (reforço, "desbloquear fase").
- **QR code do checklist** → página web de acompanhamento interativo.
- **QR code de conquista** (só aparece no Dia 6/fechamento) → certificado pronto pra postar, sem formulário.

## 4 cenas bônus geradas (10/09/2026, ~15h)

Geradas via Codex (Squad Conteúdo Arcane / Rico ajudou nos conceitos), com âncoras de identidade + imagens de referência de cada personagem, seguindo a regra editorial 11 (sem polêmica). Todas passaram na auditoria interna (identidade, guarda-roupa sem logotipo, luminosidade, estilo 3D).

**Correção do Thor (10/09/2026, ~15h25):** Jorge Helder apontou que o Thor não batia com a referência real — a plaquinha saiu como disco redondo em vez da plaqueta oval/alongada presa por argola que aparece em `refs-identidade/thor.png`. Causa raiz: a bíblia tinha o texto errado ("placa redonda") em 3 lugares — corrigido na fonte. As 4 artes foram regeradas (v2):

- `bonus-alimentacao-panqueca-raw--v2--20260910-1525.png` — corrigida, aprovação pendente
- `bonus-emocional-medo-nori-raw--v2--20260910-1525.png` — corrigida, aprovação pendente
- `bonus-bolso-planilha-raw--v2--20260910-1525.png` — corrigida, aprovação pendente
- `bonus-forca-compras` — **ainda não corrigida**: 2 tentativas de regenerar bloqueadas pela moderação da OpenAI (`moderation_blocked`, categoria `other`), com e sem imagem de referência. Fica a v1 (`bonus-forca-compras-raw--v1--20260910-1507.png`, plaquinha redonda, desvio pequeno) como única versão disponível até resolver — retomar quando o Jorge Helder decidir (nova tentativa, ou aceitar o desvio nessa cena específica).

**Os 4 publicados no Instagram (10/09/2026, ~16h)** — @olaexperienceoficial, categoria OLÁ BÔNUS, um de cada vez com o Jorge Helder confirmando cada envio. Pastas renomeadas com sufixo `-postado-10-09-2026`. Rótulo de IA conferido desligado em todos. Véspera do lançamento do "Mapa do Hoje" (amanhã, 11/09) — decisão do Atlas: completa a cobertura visual dos 6 pilares na conta antes da oferta ir ao ar.

## Próximos passos (workflow Fase 0 do squad, 16 dias)

1. Máquina de nomes — feito (Mapa do Hoje)
2. Headline 3 partes — feito (versão A)
3. Página 14 blocos — feito, no ar em `docs/mapa-do-hoje/` (ainda não divulgada)
4. Entregáveis 4+3 — feito, conteúdo em `material-mapa-do-hoje.md`
5. Revisão de pontos com a Equipe Olá — feito (esta seção)
6. Diagramar PDF final com cenas reaproveitadas + QR codes (por dia, checklist, conquista) — em andamento
7. Construir a página web do checklist interativo — próximo
8. Produzir o template do certificado de conquista — próximo
9. Setup técnico (Hostinger/Pixel) — @lt-page-master (Cole)
10. 10 criativos PRSA — @lt-creative-director (Jett) + @lt-copywriter (Quinn)
11. Cadastrar o produto na Hotmart (retomar de onde parou) — aguardando aprovação final do Jorge
12. Handoff pra @lt-traffic-ops (Nova) — subir ABO Testadora 1-1-1

Esteira (order bump/upsell/recuperação) mapeada mas **não liga** até a oferta validar (Fase Azul, ROI 2+).
