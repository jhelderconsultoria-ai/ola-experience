# OLA Movimento Fiscal do Mês

> Notas fiscais (NFS-e) emitidas pela OLA, organizadas por mês. Uma subpasta por mês, nomeada "{MÊS} {ANO}" (ex.: `SETEMBRO 2026`). Fica dentro de `SOMAR CONTABILIDADE/` (fora do HOTMART de propósito) porque reúne **todo** o movimento fiscal do mês, não só as vendas da Hotmart — inclui também as NFS-e de locação de veículos que o Jorge Helder emite manualmente no site da prefeitura.

## Rotina mensal

**Todo dia 1 do mês:**
1. Entrar no site da prefeitura (`nfe.prefeitura.sp.gov.br`, login com certificado digital A1)
2. Ir em **Consulta de Notas** → **NFS-e EMITIDAS** (ou **Talão Fiscal Eletrônico** / exportação)
3. Filtrar pelo mês anterior completo (Período: Notas, data de emissão) — pega TODAS as notas do período (Hotmart + locação de veículos, tudo junto no mesmo export)
4. Exportar (CSV/PDF) e salvar direto na subpasta do mês correspondente aqui dentro (`SOMAR CONTABILIDADE/OLA MOVIMENTO FISCAL DO MÊS/{MÊS} {ANO}/`)

**Todo dia 2 do mês:**
5. Enviar a exportação por e-mail pra Somar Contabilidade (Renato Lacerda) — direto dessa pasta, sem precisar juntar arquivo de lugar nenhum

## Subpastas

- `SETEMBRO 2026`
- `OUTUBRO 2026`
- `NOVEMBRO 2026`
- `DEZEMBRO 2026`

## Formatos de exportação disponíveis (site da prefeitura, seção "Exportação de NFS-e")

**TIPO:**
- Planilha (CSV) — **usar essa por padrão**, os formatos TXT abaixo saem de linha em 01/08/2026 (Reforma Tributária/CNPJ alfanumérico)
- TXT
- TXT (Tabulado)
- TXT Retorno

**LAYOUT:** 7 versões (V.001 a V.007) — estruturas de coluna diferentes. Qual usar depende do sistema da Somar Contabilidade — perguntar pro Renato Lacerda.

## Pendência

**E-mail(s) da Somar Contabilidade ainda não confirmado(s) com o Jorge Helder** — hoje só temos `comunicacoes@somarempresas.com.br` (usado no rascunho pro Renato Lacerda). Confirmar antes do primeiro envio real (~02/10/2026) se é esse mesmo o e-mail certo pra receber o movimento fiscal mensal, ou se tem outro contato específico.

## Referências

- Rotina irmã (faturamento Hotmart, toda sexta): `../../HOTMART/FINANCEIRO/FATURAMENTO/registro-vendas.md`
- Rascunho de e-mail já usado com o contador: `../../HOTMART/Rascunho E-mail - Renato Lacerda (Codigo de Servico).md`
