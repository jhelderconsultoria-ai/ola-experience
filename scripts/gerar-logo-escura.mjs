// Gera uma versao escura (verde-floresta) do logo, pra usar em fundos claros
// (ex.: paleta "cremeClaro" das Frases) — o logo original e todo em tom
// creme/dourado e fica quase invisivel em fundo claro.
import path from 'path';
import sharp from 'sharp';

const SRC = path.resolve('INSTAGRAM OLÁ/conteudo-inicial/marca-ola-experience-caminho-transparente.png');
const OUT = path.resolve('INSTAGRAM OLÁ/conteudo-inicial/marca-ola-experience-caminho-escura.png');
const COR = { r: 0x1a, g: 0x3c, b: 0x30 }; // verde-floresta oficial

async function main() {
  const meta = await sharp(SRC).metadata();
  const alpha = await sharp(SRC).ensureAlpha().extractChannel('alpha').raw().toBuffer();

  await sharp({
    create: { width: meta.width, height: meta.height, channels: 3, background: COR },
  })
    .joinChannel(alpha, { raw: { width: meta.width, height: meta.height, channels: 1 } })
    .png()
    .toFile(OUT);
  console.log('SAVED', OUT);
}

main().catch((e) => {
  console.error('FATAL', e);
  process.exit(1);
});
