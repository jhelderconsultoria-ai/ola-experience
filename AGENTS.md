# AGENTS.md — Auroq OS

Sistema operacional de IA. Runtimes oficiais desta versão: Claude Code e Codex. Grok carrega este arquivo, mas o conteúdo ao vivo do MCP `arcane` não está garantido no Grok.

## Ativar

- Claude: `/companion`, `/ops`, `/consultor`, `/squad-forge`, …
- Codex: `$companion`, `$ops`, `$consultor`, `$squad-forge`, … (skills em `.agents/skills/`)

Todo conteúdo Arcane vem pelo MCP `arcane` (catálogos `auroq-core` e `arcane-pack`). Nunca procurar esse conteúdo em `agents/`. Se a tool falhar, mostre a mensagem e pare.

## O que fica no disco

Motor (CLI, hooks, scripts), pastas, git, casca (estes ponteiros) e o que VOCÊ criar (memória, docs, cockpit).

## O que vem ao vivo

Companion interno, Consultor, forjas, Pack. Exige conta ativa e internet.
