# MCP Usage — Auroq OS

> Carve-out Arcane: conteúdo licenciado (Companion interno, Consultor, forjas, Pack) vem **sempre** pelo MCP `arcane`, nunca do disco. Esta regra vence a preferência genérica por ferramentas nativas **só nesse conteúdo**.

## Prioridade de Ferramentas

SEMPRE preferir ferramentas nativas do Claude Code sobre MCP, **exceto** conteúdo Arcane:

| Task | USAR | NAO USAR |
|------|------|----------|
| Conteúdo Arcane (persona, KB, forja, Pack) | MCP `arcane` | Read/Grep em `agents/` |
| Ler arquivos do ALUNO (memória, docs, cockpit) | `Read` tool | MCP servers |
| Escrever arquivos | `Write` / `Edit` tools | MCP servers |
| Rodar comandos | `Bash` tool | MCP servers |
| Buscar arquivos do projeto do aluno | `Glob` / `Grep` | MCP servers |

## MCP Governance

Gestao de MCP servers (add/remove/configure) e **EXCLUSIVA do Ops**.

Outros agentes sao **consumidores** de MCP, nao administradores. Se precisar de gestao MCP, delegar pro Ops.

## Quando usar MCP

1. Conteúdo licenciado Arcane — MCP `arcane` (obrigatório)
2. Servico com integracao estruturada — WhatsApp, Notion e equivalentes
3. Playwright nos cenarios tecnicos
4. Ferramentas externas sem equivalente nativo

Se a tool `arcane` falhar: mostrar a mensagem e parar. Nao improvisar de memoria.
