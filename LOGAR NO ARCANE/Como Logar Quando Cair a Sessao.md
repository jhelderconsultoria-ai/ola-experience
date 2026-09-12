# Como logar de novo quando a sessão cair

> Guia rápido pra quando o terminal (Claude Code) pedir login de novo, sozinho, sem você ter feito nada de errado. Isso acontece de vez em quando (sessão expira) — não é o Windows, é só o Claude Code.

## Como reconhecer que é isso

Na tela do terminal aparece algo assim:

```
Not logged in - Run /login
```
ou
```
Login expired - Please run /login
```

## Passo a passo

1. No terminal, digite `/login` e aperte Enter (se ele já não tiver aberto o menu de login sozinho).
2. Escolha a opção **1. Claude account with subscription** (é a conta com assinatura, a de sempre).
3. Vai aparecer uma URL longa, começando com `https://claude.com/cai/oauth/authorize...`. O navegador costuma abrir sozinho — se não abrir, copia essa URL e cola no navegador manualmente.
4. Faz login normal com a conta Claude (e-mail/senha de sempre).
5. Autoriza o acesso na página que abrir.
6. Se depois disso o navegador mostrar um código, copia esse código e cola de volta no terminal, no campo que diz "Paste code here if prompted". Se o navegador só mostrar sucesso e fechar, o terminal detecta sozinho — não precisa fazer nada a mais.

Pronto, volta ao normal.

## Detalhe que pode confundir

Junto com a mensagem de login expirado, às vezes aparece um aviso de erro tipo:

```
UserPromptSubmit hook error
Hook JSON output validation failed - hookSpecificOutput is missing required field "hookEventName"
```

Isso é **outro assunto, sem relação com o login** — pode ignorar, não impede nada.

## Se pedir ajuda de novo

Não precisa pedir ajuda de colega nem tentar caminho alternativo — o passo a passo acima é o caminho oficial e mais simples. Se travar em algum ponto específico dele, é só copiar o que aparece na tela e mostrar aqui.

---

*Criado em 12/09/2026, depois de um caso real de sessão expirada logo de manhã.*
