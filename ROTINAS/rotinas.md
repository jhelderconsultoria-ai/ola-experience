# Rotinas — OLA Experience

> Toda ação recorrente (diária, semanal, mensal, quinzenal) da operação, num lugar só. Código pra registrar uma rotina nova aqui: **"ROTINA"**.

## Diárias

### Rotina de manutenção do Instagram
**Quando:** toda vez que acessar o Instagram @olaexperienceoficial na sessão.
**O quê:** marcações, DMs, comentários sem resposta, status de anúncio turbinado.
**Detalhe completo:** `INSTAGRAM OLÁ/PROJETO-INSTAGRAM-OLA.md`.

### Avisar pendências no 1º acesso do dia
**Quando:** primeira mensagem do Jorge Helder numa sessão nova.
**O quê:** avisar de cara as pendências em geral antes de qualquer outra coisa, sem esperar ele perguntar. Ver seção "Pendências em aberto" em `agents/companion/data/contexto-dinamico.md`.

## Semanais

### Faturamento Hotmart
**Quando:** toda sexta-feira.
**O quê:** buscar vendas no painel da Hotmart e atualizar `HOTMART/FINANCEIRO/FATURAMENTO/registro-vendas.md` (bruto, líquido, taxa de cada venda).

## Mensais

### Movimento fiscal do mês
**Quando:** dia 1 (exportar) e dia 2 (enviar) de cada mês.
**O quê:** dia 1, exportar TODAS as NFS-e emitidas no mês anterior direto do site da prefeitura (`nfe.prefeitura.sp.gov.br`) — Hotmart + locação de veículos (emissão manual) juntas no mesmo export — e salvar em `SOMAR CONTABILIDADE/OLA MOVIMENTO FISCAL DO MÊS/{MÊS} {ANO}/`; dia 2, enviar essa exportação por e-mail pra Somar Contabilidade (Renato Lacerda), direto dessa pasta.
**Detalhe completo:** `SOMAR CONTABILIDADE/OLA MOVIMENTO FISCAL DO MÊS/README.md`.
**Pendência:** confirmar e-mail certo da Somar antes do primeiro envio real (~02/10/2026).

### Faturamento pro contador (exportação mensal Hotmart)
**Quando:** todo dia 1 do mês.
**O quê:** exportar relatório do mês anterior da Hotmart (Relatórios → Vendas → Exportar) e salvar em `HOTMART/FINANCEIRO/FATURAMENTO/para-somar-contabilidade/`, pronto pra enviar pro contador.
**Detalhe completo:** `HOTMART/FINANCEIRO/FATURAMENTO/registro-vendas.md`.

## Quinzenais

### Backup no pendrive
**Quando:** a cada 15 dias.
**O quê:** perguntar se o Jorge Helder já atualizou a cópia manual do projeto no pendrive.

## Padrão institucional

### Público padrão pra turbinar Reels (tráfego pago)
**Quando:** toda vez que for turbinar/impulsionar um Reel ou post, de qualquer criativo, qualquer fase do projeto.
**O quê:** usar **"Pessoas semelhantes aos seguidores"** (Lookalike/Advantage+) como público padrão — não escolher interesse específico por criativo (ex.: "Família e Fé", "Fitness e Corrida"). Motivo (Squad Tráfego Arcane, Método Andromeda): família de verdade é diversa (profissões variadas, com ou sem pet) e não cabe num interesse único; interesse estreito sai mais caro (Lei 1 dos Públicos: quanto maior o público, mais barato) e já mostrou fadiga nos testes anteriores. Pet entra como elemento de cenário no criativo, não como filtro de público.
**Validação obrigatória antes de confiar no padrão:** no próximo turbo real, ANTES de finalizar, confirmar na tela de "Turbinar" que a opção "Pessoas semelhantes aos seguidores" está de fato disponível e selecionável (não só na teoria) — print ou confirmação direta na tela. Depois de rodar, comparar custo/resultado desse turbo contra os turbos anteriores com interesse específico e registrar o resultado real aqui (ou no contexto-dinamico.md) antes de declarar o padrão validado.
**Exceção:** só testar público de interesse específico em paralelo (não substituindo o padrão) se houver dado real justificando o teste.

## Sob demanda (código dispara)

### Weekly review (Companion)
**Quando:** 7+ dias desde o último review (força em 14+ dias).
**O quê:** cockpit + memória + inbox + consolidação, 20 min.

---

## Como adicionar uma rotina nova

Toda vez que o Jorge Helder disser **"ROTINA"**, registrar aqui: nome, frequência (quando), o que fazer, e onde fica o detalhe completo (se for em outro arquivo). Seguir o mesmo formato das entradas acima.
