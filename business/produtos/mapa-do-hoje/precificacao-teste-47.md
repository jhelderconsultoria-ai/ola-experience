# Mapa do Hoje — Estratégia de Precificação (dois caminhos prontos)

> Análise feita com o Squad Low Ticket Arcane (Vol. 1 e 2, Método Maxxima) em 11/09/2026. Preparado pra executar assim que o Hotmart/eNotas liberar o lançamento — ver `fluxo-e-pendencias.md`.

## Contexto da decisão

Jorge Helder considerou baixar o preço pra R$15-19 (achando outros produtos mais baratos na Hotmart e por ser o primeiro lançamento, sem custo fixo interno). O Arcane recomendou **não** ir abaixo de R$37 — nessa faixa o produto entra em "Underlands" (não aguenta tráfego pago de forma lucrativa; o gargalo é o custo de aquisição por clique/venda, não a despesa fixa). Preço mínimo viável do método: R$37. Padrão: R$67 (já configurado). Próximo degrau de teste, se quiser mais barato: R$47.

Decidido: manter R$67 como preço de tabela, e deixar pronto um teste controlado a R$47 via cupom — sem mexer no preço oficial, sem "Síndrome do Reset" (mudar tudo de uma vez sem dado).

## Caminho 1 — Preço de tabela R$67 (já ativo, nada a fazer)

Já configurado na Hotmart desde o cadastro do produto (ID 8497819). Não precisa de ação — é o caminho padrão se o Jorge decidir só lançar direto sem testar preço menor.

## Caminho 2 — Cupom de teste R$47

**Como criar quando chegar a hora** (Hotmart → produto "O Mapa do Hoje" → aba **Cupons**):

- **Valor:** desconto que leve o preço final pra R$47 (de R$67 → desconto de ~R$20, ou definir direto como preço fixo se a Hotmart permitir)
- **Validade sugerida:** 7 a 14 dias corridos (tempo mínimo pro Funil 3X ter dado confiável — método pede 2-3 dias completos mínimo antes de qualquer decisão)
- **Não anunciar publicamente "baixamos o preço"** — cupom roda como teste controlado, não como desvalorização do produto de tabela

**Thresholds de tráfego pago pra rodar o teste a R$47** (Funil 3X, Vol. 2 do método):

| Métrica | Teto | Diagnostica |
|---|---|---|
| Custo por visualização da página | R$1,88 | Criativo do anúncio |
| Custo por iniciar checkout | R$10,81 | Página de vendas |
| **Custo por venda (CPA)** | **R$21,15** | Oferta/preço |

- **Orçamento de tráfego sugerido:** R$21,15/dia por conjunto de anúncio
- **ROI alvo:** ≥ 2,0 (cada R$1 investido precisa voltar R$2) — abaixo de 1,8, desligar o anúncio
- **Regra de tempo:** não decidir nada nas primeiras 48h-3 dias rodando (Fase 3D do método)

## Decisão pós-teste

- Cupom R$47 performou consistente (ROI ≥ 2,0, métricas dentro dos tetos) → considerar mudar o preço de tabela permanentemente.
- Não performou → manter R$67 de tabela, sem prejuízo (cupom só afetou quem comprou durante a janela de teste).

## Referências

- Fluxo geral do produto: `fluxo-e-pendencias.md`
- Squad Low Ticket Arcane, Vol. 1 (Modelo de Negócio e Oferta) e Vol. 2 (Funil 3X e Diagnóstico)
