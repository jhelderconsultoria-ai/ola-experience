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

## 5. Primeira venda de teste (11/09/2026) — erro e correção

- Feita compra de teste real do Mapa do Hoje (R$67,00, comprador Jorge Helder, transação Hotmart HP3708447756), com emissão temporariamente configurada "Na venda" (em vez de "Após a garantia") só pra validar o fluxo.
- A nota fiscal **falhou ao emitir**. Erro no eNotas: *"Erro assinatura do RPS com tamanho inválido '89', esperado '86'"*.
- **Causa raiz (confirmada pelo artigo oficial do eNotas):** a Inscrição Municipal estava cadastrada com pontuação (`7.545.710-5`) — precisa ser só números, sem ponto/traço/espaço (`75457105`). Isso quebra o cálculo da assinatura digital do RPS (a cadeia de caracteres assinada precisa ter exatamente 86 posições).
- **Correção aplicada:** trocado o campo Inscrição Municipal em Empresa → Alterar cadastro → Dados municipais para `75457105`, e reprocessada a nota pendente em Vendas → (expandir a venda) → ícone de reprocessar.
- Nota voltou ao status **"Em emissão"** (processamento assíncrono com a prefeitura de SP, pode levar alguns minutos).
- **Lembrete:** depois de confirmar que essa nota saiu certo, voltar a configuração de emissão de "Na venda" para **"Após a garantia"** (Gerenciar → Apps → Hotmart → alterar), que é a config definitiva decidida pelo Jorge Helder.

## 6. Segundo erro e correção — Código de Serviço (12/09/2026)

- Depois da correção da Inscrição Municipal, a nota voltou a falhar com um novo erro: **"NFS-e - Necessário corrigir o serviço municipal padrão, mais especificamente o Código de Serviço."**
- **Causa raiz:** o código `02961 | 1.09` (disponibilização de conteúdo digital) nunca esteve entre os serviços realmente habilitados para a OLA emitir NFS-e. A empresa foi aberta originalmente para outras atividades (locação de automóveis, depois expandida pra turismo, esportes, eventos, saúde) e só tem códigos de serviço cadastrados nessas áreas — confirmado consultando a Ficha de Dados Cadastrais (FDC) pública em `ccm.prefeitura.sp.gov.br` e, com o certificado digital A1, a tela real de emissão de NFS-e em `nfe.prefeitura.sp.gov.br` (Ambiente Restrito → Emissão de NFS-e), que lista os 33 códigos de serviço de fato disponíveis no dropdown — nenhum sobre conteúdo digital/ebook.
- **Correção aplicada:** trocado o Serviço municipal padrão (Empresa → Alterar cadastro → Dados municipais) de `02961 | 1.09` para **`05762 | 8.02 - Serviços de instrução, treinamento, orientação pedagógica e educacional, avaliação de conhecimentos de qualquer natureza`**, alíquota ISS **5,00%** (subiu de 2,90%). Foi o código mais próximo do Mapa do Hoje entre os já habilitados no cadastro da OLA. Aplicado também ao produto (opção "Atualizar Produtos").
- Nota da venda de teste (HP3708447756) reprocessada — status voltou para **"Em emissão"**, sem o erro de Código de Serviço. Confirmação final da emissão pendente (processamento assíncrono com a prefeitura).
- **Achado paralelo:** a Prefeitura de SP encerrou vários códigos de serviço antigos em 31/12/2025 (Reforma Tributária, LC 214/2025) e migrou automaticamente os contribuintes para novos códigos — não afetou diretamente essa correção, mas explica por que a FDC mostra códigos que não batem exatamente com a tabela clássica de 2011. Detalhes em `Ficha de Dados Cadastrais (FDC) - CCM Prefeitura SP.md`.

## Pendências que ficaram de fora dessa configuração

- Confirmar (depois de um tempo) se a nota HP3708447756 realmente completou a emissão com o código 05762, ou se surge algum novo erro.
- Depois de confirmado, voltar "momento de emissão" de "Na venda" para "Após a garantia".
- Refazer a conexão do canal Hotmart com o novo e-mail (`olaexperienceoficial@gmail.com`) assim que a troca de e-mail da conta Hotmart for confirmada pelo suporte.
- **Validar com o contador (Renato Lacerda)** se o código 05762 (5% ISS) é o mais adequado, ou se ele recomenda incluir um código de serviço específico de conteúdo digital no cadastro da empresa — isso reduziria a alíquota de volta pra perto de 2,90-2,90%. Ver `Ficha de Dados Cadastrais (FDC) - CCM Prefeitura SP.md`.

## Referências

- `business/produtos/mapa-do-hoje/fluxo-e-pendencias.md` — visão consolidada do produto (fluxograma + checklist)
- `Dados Cadastrais OLA - extraidos do email.md` — de onde vieram Inscrição Municipal e Porte
- `Rascunho eNotas - Contador.docx` — rascunho original enviado ao contador (parcialmente superado por essa configuração feita direto)
