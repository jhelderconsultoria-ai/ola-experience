# Rascunho de E-mail — Renato Lacerda (Somar Empresas)

> Rascunho pra revisão do Jorge Helder antes de enviar. Assunto: Código de Serviço da OLA no eNotas/NFS-e — dúvida sobre alíquota.

**Para:** Renato Lacerda (Somar Empresas — comunicacoes@somarempresas.com.br)
**De:** jhelder.consultoria@gmail.com
**Assunto:** OLA — Dúvida sobre Código de Serviço pra emissão de nota do novo produto digital

---

Olá, Renato, tudo bem?

Estou finalizando a configuração do eNotas pra emitir nota fiscal automática das vendas de um novo produto digital da OLA (um e-book, vendido pela Hotmart, chamado "Mapa do Hoje"). Numa venda de teste, a nota falhou ao emitir com o erro "Necessário corrigir o serviço municipal padrão, mais especificamente o Código de Serviço".

Investigando na Ficha de Dados Cadastrais (FDC) da OLA e direto na tela de emissão de NFS-e da prefeitura (entrei com o certificado digital A1), descobri que o código que eu tinha configurado (`02961 — Disponibilização de conteúdos de imagem e texto pela internet`) nunca esteve entre os serviços habilitados no nosso cadastro. Os códigos que a OLA realmente tem liberados hoje são todos ligados às atividades históricas da empresa — turismo, esportes, eventos, saúde, etc. (nenhum de TI ou conteúdo digital).

Pra resolver rápido, troquei o código padrão pro que pareceu mais próximo entre os já habilitados: **05762 — Serviços de instrução, treinamento, orientação pedagógica e educacional, avaliação de conhecimentos de qualquer natureza (item 8.02)**, com ISS de **5%** (o código anterior seria 2,90%, mas nunca funcionou de verdade). Reprocessei a nota de teste com esse código e por enquanto está "em emissão", sem o erro anterior.

Minhas dúvidas pra você:

1. O código **05762 (instrução/treinamento, ISS 5%)** é o mais adequado pro Mapa do Hoje (um e-book/guia de organização familiar, PDF + checklist), ou você recomendaria outro código entre os que já estão no nosso cadastro?
2. Vale a pena incluir um CNAE/código de serviço específico de conteúdo digital ou TI no cadastro da OLA na prefeitura? Isso me deixaria com uma alíquota mais próxima de 2,90% em vez de 5%. O Mapa do Hoje é o primeiro de uma linha — a ideia é lançar vários produtos digitais e escalar essa frente, então mesmo o trâmite dando um pouco de trabalho agora, 2 pontos percentuais de ISS a menos em cada venda futura fazem diferença real no lucro com o volume crescendo. Faz sentido resolver isso na raiz do cadastro em vez de conviver com os 5%?
3. Esse código de serviço tem algum impacto na apuração do Lucro Presumido da empresa que eu deva saber?

Anexei a Ficha de Dados Cadastrais completa (com todos os CNAEs e códigos de tributo/ISS habilitados) e a tabela oficial da prefeitura de códigos de serviço, caso ajude a conferir.

Qualquer detalhe que precisar, me chama.

Abraço,
Jorge Helder

---

## Anexos sugeridos

- `Ficha de Dados Cadastrais (FDC) - CCM Prefeitura SP.md`
- `Tabela de Codigos de Servico ISS - Anexo 1 IN SF-SUREM 08-2011.pdf`

## Referências

- `Passo a Passo - Configuracao eNotas.md` (seção 6 — correção do Código de Serviço)
- `LANÇAMENTO DE PRODUTOS/mapa-do-hoje/fluxo-e-pendencias.md`
