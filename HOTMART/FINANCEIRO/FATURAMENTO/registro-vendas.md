# Registro de Vendas — Faturamento Hotmart

> Uma linha por venda: valor bruto, valor líquido recebido e o percentual retido pela Hotmart. Atualizar a cada venda confirmada por e-mail ("Venda realizada").

| Data | Hora | Produto | Transação | Comprador | Valor Bruto | Valor Líquido | Taxa Hotmart (R$) | Taxa Hotmart (%) |
|---|---|---|---|---|---|---|---|---|
| 11/09/2026 | 23:09 | O Mapa do Hoje | HP3708447756 | Jorge Helder (compra de teste) | R$ 67,00 | R$ 59,37 | R$ 7,63 | 11,39% |

## Rotina de atualização

**Toda sexta-feira**, buscar os dados direto no painel da Hotmart e atualizar a tabela acima:

1. Acessar `app.hotmart.com` → menu lateral **Relatórios** → **Vendas** (Relatório de Vendas, atualizado em tempo real).
2. Conferir "Total de vendas" e "Receita líquida" do período.
3. Pra cada venda nova, pegar o valor bruto (preço do produto) e o valor líquido — a diferença é a taxa retida pela Hotmart.
4. Adicionar uma linha na tabela pra cada venda nova, calculando o % da taxa.
5. Alternativa: botão "Exportar relatório" no topo da tela, que baixa um CSV/planilha com todas as vendas do período de uma vez.

**Todo dia 1 do mês**, exportar o relatório do mês anterior (botão "Exportar relatório") e salvar em `para-somar-contabilidade/` — pronto pra enviar pro contador (Renato Lacerda, Somar Empresas).

## Referências

- Fonte de cada linha: e-mail "Venda realizada: [produto]" recebido em jhelder.consultoria@gmail.com (conta de produtor na Hotmart).
- Fluxo do produto: `../../../business/produtos/mapa-do-hoje/fluxo-e-pendencias.md`
