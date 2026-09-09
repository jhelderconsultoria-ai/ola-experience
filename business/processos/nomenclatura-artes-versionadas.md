# Nomenclatura de artes e vídeos versionados

> Decidido em 09/09/2026, depois de uma confusão real: o Jorge e o Claude estavam
> olhando pra arquivos diferentes com o mesmo nome, e nem o carimbo de data do
> Windows resolvia (o OneDrive pode tocar o arquivo e mudar a data sem mudar o
> conteúdo). Daqui pra frente, a versão fica no NOME do arquivo, não só na pasta.

## Padrão

```
<slug-da-cena-ou-conteudo>--v<N>--<AAAAMMDD>-<HHMM>.<ext>
```

- **slug**: nome curto e descritivo, igual ao já usado no projeto (`familia-sofa-tocando`, `close-zai-montanha`, `OLA-BONUS-sem-pressa-REEL`).
- **v\<N\>**: incrementa a cada mudança real de conteúdo (pose, cena, corte, ajuste visível) — não incrementa se só recompilou o mesmo conteúdo de novo.
- **AAAAMMDD-HHMM**: data e hora exatas de quando aquela versão foi gerada, direto no nome (24h, sem fuso — hora do sistema).

**Exemplos:**
- `familia-sofa-tocando--v3--20260909-1424.png`
- `OLA-BONUS-sem-pressa-REEL--v4--20260909-1507.mp4`

## Regras

1. Toda vez que uma arte ou vídeo final for corrigido/regenerado, o arquivo novo ganha nome novo com `v<N>` incrementado e o horário real da geração — nunca sobrescrever o arquivo anterior com o mesmo nome.
2. Versões antigas ficam na pasta (não apagar) até o conteúdo estar publicado e aprovado — funciona como histórico, e evita a dúvida "é esse mesmo?".
3. Ao entregar um arquivo pro Jorge pra revisão (chat ou cópia pra área de trabalho), sempre citar o nome completo com versão e horário na mensagem, não só "o vídeo" ou "a arte".
4. Ao publicar de fato, registrar no doc do episódio/postagem qual nome de arquivo exato (com versão) foi o publicado.
5. Vale pra toda arte/vídeo gerado por Codex, Kling ou script de composição (`gerar-*.mjs`) — carrossel, Reel, Frase, qualquer coisa que passe por rodada de correção.

## Por que isso resolve o problema

A data do arquivo no Windows/Explorer pode não refletir o conteúdo real (sincronização
do OneDrive, cópia, recompactação) — já aconteceu de o Jorge olhar um arquivo com
carimbo de hora recente que na verdade não era a versão mais nova. Com a versão e o
horário de geração **dentro do nome**, não tem ambiguidade: se o nome bate, o
conteúdo é aquele; se não bate, não é a mesma versão, ponto.
