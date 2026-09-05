// Remove metadado tecnico (C2PA/IPTC/XMP/EXIF) de um PNG gerado por IA,
// recompondo a imagem via sharp (que descarta esses chunks por padrao,
// desde que .withMetadata() nunca seja chamado).
//
// Uso: node scripts/limpar-metadados-arte.mjs <caminho-do-arquivo.png>
// Sobrescreve o proprio arquivo com uma versao sem metadado.
import sharp from 'sharp';

const MARCADORES = ['c2pa', 'C2PA', 'trainedAlgorithmicMedia', 'OpenAI', 'iptc', 'xmp'];

function acharMarcadores(buffer) {
  const texto = buffer.toString('latin1');
  return MARCADORES.filter((m) => texto.includes(m));
}

async function limpar(caminho) {
  const fs = await import('fs');
  const antes = fs.readFileSync(caminho);
  const achadosAntes = acharMarcadores(antes);

  const limpo = await sharp(antes).png().toBuffer();
  fs.writeFileSync(caminho, limpo);

  const achadosDepois = acharMarcadores(fs.readFileSync(caminho));

  console.log(caminho);
  console.log('  antes:', achadosAntes.length ? achadosAntes.join(', ') : 'sem metadado');
  console.log('  depois:', achadosDepois.length ? 'AINDA TEM: ' + achadosDepois.join(', ') : 'limpo');
}

const caminho = process.argv[2];
if (!caminho) {
  console.error('Uso: node scripts/limpar-metadados-arte.mjs <caminho-do-arquivo.png>');
  process.exit(1);
}

limpar(caminho).catch((e) => {
  console.error('FATAL', e);
  process.exit(1);
});
