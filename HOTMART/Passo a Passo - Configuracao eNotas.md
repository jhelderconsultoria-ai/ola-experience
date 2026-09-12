# Passo a Passo — Configuração do eNotas (Mapa do Hoje)

> Feito em 11/09/2026, direto em `app.enotas.com.br` (conta já criada e assinatura eNotas Basic ativa). Registro completo de tudo que foi configurado, pra referência futura ou se precisar reconfigurar.

## 1. Dados Municipais (aba "Dados municipais")

| Campo | Valor preenchido |
|---|---|
| Inscrição municipal | 7.545.710-5 |
| Inscrição estadual | (em branco — atividades da OLA são só serviço, não têm circulação de mercadoria, não exige IE) |
| Porte da empresa | ME - Micro Empresa |
| Optante do Simples Nacional | Não |
| Emitir pelo Portal de Gestão NFS-e | Não (emite pela própria Prefeitura de São Paulo — Nota Fiscal Paulistana, onde a OLA já é credenciada e emite há meses pra outro cliente) |
| Regime especial de tributação | Normal |
| Tipo de nota que irá emitir | NFS-e (Serviço) — não marcado NF-e (Produto) |

### Serviço padrão

| Campo | Valor |
|---|---|
| **Serviço municipal** | **02961 \| 1.09** — Disponibilização, sem cessão definitiva, de conteúdos de imagem e texto por meio da internet, respeitada a imunidade de livros, jornais e periódicos |
| **Alíquota ISS** | **2,90%** |

**Como chegamos nesse código:** pesquisado no dropdown de busca do próprio eNotas (campo "Serviço municipal", digitando palavras-chave como "digital", "conteúdo", "licenciamento", "consultoria", "orientação"). Cheguei a considerar dois genéricos de "assessoria/consultoria" (03115 | 17.01, 5% de ISS, e 01899 | 17.03, também 5%), mas troquei pro 02961 depois de consultar o Squad Low Ticket Arcane (Vol. 1 — Modelo de Negócio e Oferta): o Mapa do Hoje é classificado pelo próprio método como "produto ferramental" (PDF + checklist de consumo rápido), não uma consultoria/assessoria continuada — então o código de disponibilização de conteúdo é mais fiel à natureza real do produto, além de ter alíquota mais baixa (2,90% vs 5%).

**Confirmado direto na fonte oficial:** testado no site da própria Prefeitura de São Paulo (`nfe.prefeitura.sp.gov.br`, tela de emissão de NFS-e) — digitando o código `02961`, o sistema preencheu automaticamente o nome "Disponibilização de conteúdos de imagem e texto p/ internet" e mostrou a mesma alíquota de 2,90%. Confirma que o código está ativo e válido (uma fonte externa dizia que poderia ter sido descontinuado em 2024 — não se confirmou).

- Percentual aproximado de tributos: modo "Detalhado" (padrão do sistema) — Municipal 4,09% / Estadual 0,00% / Federal 13,45% (calculado automaticamente pelo eNotas via tabela IBPT, não alterado manualmente).
- Série / Número do próximo RPS / Número do próximo lote: mantidos no padrão "1" (compatível com a faixa de série 1 a 49.999 exigida pra quem usa Certificado Digital A1).
- Tipo de nota padrão para novos produtos: Serviço (NFS-e).
- Campos da "Reforma Tributária" (Código NBS, Classificação Tributária/CST, Indicador de Operação): deixados em branco — não têm asterisco de obrigatório.

Ao salvar, o eNotas perguntou se queria aplicar essa configuração de serviço padrão e percentual de tributos aos produtos já cadastrados — escolhido **"Atualizar Produtos"** (aplica ao "O Mapa do Hoje").

## 2. Certificado Digital A1 (aba "Certificado digital A1")

- Certificado obtido por e-mail do contador (Renato Lacerda, Somar Empresas), arquivo `.pfx`, senha enviada no mesmo e-mail.
- Arquivo baixado em `C:\Users\jheld\OneDrive\Desktop\OLA SERVICOS E NEGOCIOS E PARTICIPACOES LTDA - 489158.pfx` (o Jorge Helder arrastou o arquivo direto na área de upload do eNotas — esse campo roda num iframe que a automação de navegador não alcança, precisou ser feito manualmente).
- Senha digitada manualmente pelo Jorge Helder (nunca inserida por automação).
- Validação automática confirmou: certificado aceito, vencimento **15/07/2027**.

## 3. Conclusão

Ao terminar as duas etapas, o eNotas mostrou: *"A princípio temos todas as informações necessárias à emissão de suas notas fiscais."* Conta em `app.enotas.com.br/empresa` aparece com:

- Plano: **eNotas Emissor Básico (Anual)** — status **Ativo**
- Estatísticas do mês: 0 notas emitidas ainda (esperado, produto não lançado)

## 4. Conexão do canal de venda Hotmart (Gerenciar → Apps → Hotmart)

Configurar a empresa no eNotas (passos 1 e 2) não é o mesmo que conectar o canal de venda — sem esse passo, nenhuma venda da Hotmart dispara emissão de nota. Feito em 11/09/2026:

1. Em `app.enotas.com.br`, menu **Gerenciar → Apps**, card **Hotmart** → "Ativar".
2. Pediu **E-mail** (o de login da conta Hotmart, `jhelder.consultoria@gmail.com`) e **Hottok** (token de webhook — obtido em `app.hotmart.com/tools/webhook`, aba "Autenticação", "Hottok de verificação"). O Hottok foi colado direto pelo Jorge Helder, nunca pela automação (é credencial de API).
3. Perguntas de configuração respondidas:
   - **Você oferece garantia?** Sim, **7 dias** (é lei — Art. 49 do Código de Defesa do Consumidor, direito de arrependimento em compra fora de estabelecimento físico, vale pra produto virtual também).
   - **Podemos emitir suas notas fiscais automaticamente?** Sim.
   - **Em que momento?** **Após a garantia** (não na venda) — resolve o pedido original do Jorge Helder de só emitir depois dos 7 dias.
   - **Podemos enviá-las aos clientes?** Sim (nota vai automaticamente por e-mail pro cliente).
   - **Podemos tentar cancelar as notas fiscais automaticamente das vendas que forem canceladas?** Sim.

**Resumo final confirmado pelo eNotas:** conta conectada, garantia de 7 dias, notas emitidas automaticamente após a garantia e enviadas por e-mail, cancelamento automático em caso de reembolso.

**Nota sobre o e-mail da conexão:** ficou `jhelder.consultoria@gmail.com` (o e-mail de login atual da conta Hotmart) e não `olaexperienceoficial@gmail.com`, porque a troca de e-mail da conta Hotmart (pedida via chat de suporte no mesmo dia) ainda não foi efetivada. Quando a Hotmart confirmar a troca, essa conexão precisa ser refeita com o novo e-mail e um Hottok novo (trocar o e-mail da conta desativa a integração atual).

## Pendências que ficaram de fora dessa configuração

- Refazer a conexão do canal Hotmart com o novo e-mail (`olaexperienceoficial@gmail.com`) assim que a troca de e-mail da conta Hotmart for confirmada pelo suporte.
- Validar com o contador se o código de serviço 02961/1.09 é definitivo ou se ele prefere trocar por outro depois de revisar.

## Referências

- `business/produtos/mapa-do-hoje/fluxo-e-pendencias.md` — visão consolidada do produto (fluxograma + checklist)
- `Dados Cadastrais OLA - extraidos do email.md` — de onde vieram Inscrição Municipal e Porte
- `Rascunho eNotas - Contador.docx` — rascunho original enviado ao contador (parcialmente superado por essa configuração feita direto)
