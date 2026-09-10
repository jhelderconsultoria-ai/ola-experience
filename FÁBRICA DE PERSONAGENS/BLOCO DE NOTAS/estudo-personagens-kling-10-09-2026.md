# Bloco de Notas — Fábrica de Personagens (estudo Kling)

**Data:** 10/09/2026
**Status:** estudo em andamento, só o Nilo autorizado até agora

## Motivação

Jorge notou dificuldade em colocar os personagens da Família Horizonte falando em vídeo com qualidade — hipótese inicial: por terem sido criados no Codex (que só gera imagem estática) em vez de ferramentas mais avançadas de vídeo.

## Causa raiz identificada

Não é o Codex ser "fraco" — é que ferramentas de vídeo com fala (lip-sync/avatar) foram treinadas pra rostos **fotorrealistas** ou personas específicas, não pra ilustração 3D estilo Pixar/Dreamworks exagerada como a nossa. Confirmado analisando um Reel de referência que o Jorge mandou (perfil `profetica_ia`, 11,3 mil curtidas): o personagem que fala lá tem estilo **semi-realista/pintura de fantasia**, bem mais próximo do humano real do que do nosso traço — é esse meio-termo que os modelos de lip-sync conseguem animar bem.

## Ferramentas avaliadas (Pack Arcane)

- **HeyGen Arcane** — descartada. É clone de **pessoa real** (exige gravar 15s de vídeo seu + fotos reais). Não tem opção de treinar a partir de ilustração.
- **Higgsfield / IA Vídeos Arcane** — descartada pro nosso caso. O padrão de qualidade deles é o oposto: o guia inteiro é sobre **combater** o viés de parecer ilustração/modelo e forçar "gente real de foto de celular". Alimentar um personagem 3D estilizado nesse pipeline vai contra o que a ferramenta foi calibrada pra fazer.
- **Kling** — escolhida pro teste. O lip-sync do Kling funciona em cima de **qualquer vídeo já gerado**, não precisa treinar avatar antes — mais flexível pra estilo customizado.

## Descoberta de custo — API vs Consumidor

- **API do Kling** (a que o MCP `kling` deste projeto usa): pacote mínimo pra comprar é **$700 = 5.000 units, validade 180 dias**, sem opção de mensalidade nem teste pequeno. Desproporcional pro estudo (5 retratos custariam só ~$5,60 disso).
- **Plano consumidor** (site `kling.ai`, fora da API): **Standard $10/mês, cancela quando quiser, 660 créditos/mês**. Tamanho certo pro estudo.
- Ao logar na conta consumidora (mesmo login/e-mail já usado no Kling), **o plano Standard já estava ativo** (726-751 créditos) — não precisou comprar nada agora.

## Decisão de escopo

- **Hoje (10/09/2026): só o Nilo.** Jorge autoriza explicitamente antes de qualquer outro personagem (Lu, Zai, Nori, Thor).
- Geração feita manualmente pelo navegador (Claude in Chrome), direto no site `kling.ai/app/omni`, não pelo MCP (que é a API cara). Conta e pagamento são sempre do Jorge; a parte de clicar/gerar/baixar é feita pelo Claude.
- Ainda **não testamos** as etapas de vídeo (image-to-video + lip-sync) — isso é o próximo passo natural, só depois que o "rosto" do Nilo for aprovado num estilo específico.

## Processo usado pra gerar o Nilo

1. Referência: `INSTAGRAM OLÁ/personagens/refs-identidade/nilo.png` (já existia na biblioteca do projeto).
2. Prompt reaproveitando a âncora de identidade da bíblia (`biblia-familia-ola.md`): pele morena, barba curta aparada, cabelo escuro curto e cacheado, 41 anos.
3. Modelos testados: **IMAGE 3.0 Omni** e **IMAGE O1** (ambos dentro do Kling Omni).
4. 9 iterações geradas, evolução guiada pelo feedback do Jorge:
   - `teste1` — primeira tentativa, Jorge achou "zoiudo" (olhos grandes demais, estilo anime).
   - `teste2-natural` / `teste3-zoiudo` — mesma leva (IMAGE 3.0 Omni), resultado inconsistente entre as 2 imagens.
   - `teste4` / `teste5-imageO1` — troca de modelo, traço mais pintado/suave.
   - `teste6` / `teste7-empatia` — prompt ajustado pra "cria empatia no primeiro olhar", expressão mais calorosa e "cara de gente boa".
   - `teste8` / `teste9-olhos-pequenos` — ajuste final pedindo olhos **pequenos como na referência real**, resultado mais próximo do Nilo atual até agora. **Melhores candidatos.**

## Ressalva técnica

As imagens geradas saem com marca d'água "KlingAI 3.0 Omni" no canto — o plano Standard promete remoção de marca d'água como benefício, mas não veio removida nos testes. Precisa investigar antes de considerar usar essas imagens em produção (provavelmente uma configuração de exportação/plano que não foi ativada nesse teste).

## Próximos passos (aguardando decisão do Jorge)

- Revisar as 9 opções do Nilo com calma, escolher se algum já serve ou se precisa mais 1 rodada de ajuste.
- Só depois: autorização explícita pra testar a Lu.
- Mais adiante: testar image-to-video + lip-sync em cima da versão aprovada do Nilo, pra ver se o estilo escolhido realmente resolve o problema original (personagem falando com qualidade).
- Resolver a questão da marca d'água antes de qualquer uso real.
