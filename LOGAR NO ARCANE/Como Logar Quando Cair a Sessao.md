# Como logar de novo quando a sessão cair

> Guia bem detalhado, passo a passo, sem pular nada — pra quando o terminal (Claude Code) pedir login de novo sozinho, sem você ter feito nada de errado. Isso acontece de vez em quando (a sessão expira sozinha) — não é o Windows, é só o Claude Code.

## Como reconhecer que é isso

Você abre o terminal normal, como sempre, e em vez de poder digitar direto pra mim, aparece uma dessas frases na tela:

```
Not logged in - Run /login
```
ou
```
Login expired - Please run /login
```

Se você ver qualquer uma dessas duas frases, é isso — segue o passo a passo abaixo.

## Passo a passo bem detalhado

### Passo 1 — Digitar o comando de login

Clique com o mouse dentro da janela do terminal (pra garantir que ele está "ativo", ouvindo o que você digita). Digite exatamente:

```
/login
```

Repare: começa com a barra `/` antes da palavra `login`. Depois de digitar, aperte a tecla **Enter**.

**Obs:** às vezes o terminal já pula direto pra essa etapa sozinho, sem você precisar digitar `/login` — se já estiver vendo uma lista numerada de opções de login na tela, pode pular direto pro Passo 2.

### Passo 2 — Escolher o tipo de conta

Depois do Enter, vai aparecer uma lista numerada parecida com isto:

```
1. Claude account with subscription - Pro, Max, Team, or Enterprise
2. Anthropic Console account - API usage billing
3. 3rd-party platform - Amazon Bedrock, Microsoft Foundry, or Vertex AI
```

Você sempre escolhe a **opção 1** (é a conta com assinatura, a mesma de sempre). Pra escolher: use a seta do teclado pra cima/baixo até a opção 1 ficar marcada (geralmente ela já vem marcada por padrão), e aperte **Enter**.

### Passo 3 — Deixar o navegador abrir (ou abrir você mesmo)

Depois do Enter, duas coisas podem acontecer:

- **O navegador (Chrome, Edge, etc.) abre sozinho** numa aba nova, já na tela de login da Claude. Se isso acontecer, ótimo, pula pro Passo 4.
- **Nada abre sozinho.** Nesse caso, o terminal mostra uma mensagem assim: "Browser didn't open? Use the url below to sign in" e, embaixo, uma linha bem comprida de endereço de internet, começando com `https://claude.com/cai/oauth/authorize...`.
  - Pra usar esse endereço: clique bem no começo dele com o mouse, segure e arraste até o final da linha pra selecionar tudo (ou clique uma vez no início, segure Shift e clique no final).
  - Depois de selecionado (vai ficar destacado/colorido), aperte **Ctrl + C** pra copiar.
  - Abra o navegador que você usa (Chrome, por exemplo), clique na barra de endereço lá em cima, aperte **Ctrl + V** pra colar, e depois **Enter** pra acessar.

### Passo 4 — Fazer login na página que abriu

Na página que abriu no navegador, faça login normal com a **mesma conta Claude de sempre** (mesmo e-mail e senha que você já usa pra entrar no claude.ai).

Se pedir código de verificação (SMS ou e-mail), é o procedimento normal de segurança — confirme como sempre faz.

### Passo 5 — Autorizar o acesso

Depois de logar, a página deve mostrar uma tela perguntando se você autoriza o Claude Code a acessar sua conta (algo como "Authorize" ou um botão de confirmação). Clique pra autorizar/confirmar.

### Passo 6 — Voltar pro terminal

Depois de autorizar, duas coisas podem acontecer:

- **A página do navegador mostra uma mensagem de sucesso e fecha sozinha (ou pede pra fechar a aba).** Nesse caso, não precisa fazer mais nada — volte pra janela do terminal, ele já vai ter reconhecido o login sozinho em alguns segundos.
- **A página mostra um código** (uma sequência de letras/números). Nesse caso: copie esse código (selecione com o mouse e Ctrl+C, igual no Passo 3), volte pra janela do terminal, clique dentro dela, e cole (Ctrl+V) bem onde está escrito "Paste code here if prompted". Depois aperte **Enter**.

Pronto — o terminal volta ao normal e você já pode continuar digitando comigo como sempre.

## Detalhe que pode confundir (mas não é problema)

Junto com a mensagem de login expirado, às vezes aparece um aviso de erro em vermelho/cinza, tipo:

```
UserPromptSubmit hook error
Hook JSON output validation failed - hookSpecificOutput is missing required field "hookEventName"
```

Isso é **um assunto completamente separado, sem relação nenhuma com o login** — é só um aviso técnico de bastidor. Pode ignorar sem medo, ele não impede o login nem atrapalha o uso depois.

## Se travar em algum ponto

Não precisa pedir ajuda pra colega nem tentar caminho alternativo por conta própria — o passo a passo acima é o caminho oficial e o mais simples que existe. Se travar em algum ponto específico dele, é só tirar print (ou copiar o texto) exatamente do que está aparecendo na tela naquele momento e me mostrar — eu identifico exatamente em qual passo você está e te levo adiante a partir dali.

---

*Criado em 12/09/2026, depois de um caso real de sessão expirada logo de manhã, detalhado a pedido do Jorge Helder pra ficar claro mesmo pra quem não é técnico.*
