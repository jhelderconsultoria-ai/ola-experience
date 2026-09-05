// Post de chamada (sem numero de episodio) — encaixa a arte original
// (1003x1568, mais alta que o 4:5 maximo do Instagram) inteira dentro de
// um quadro 4:5 (1080x1350), sem cortar nada (nem o headline no topo nem
// a logo no rodape), usando barras verde-floresta nas laterais.
import path from 'path';
import sharp from 'sharp';

const SRC = path.resolve('INSTAGRAM OLÁ/Temporada Jornada Olá/Temporada 1/artes-base/01-familia-ola-apresentacao-marca-v3.png');
const LOGO_PATH = path.resolve('INSTAGRAM OLÁ/conteudo-inicial/marca-ola-experience-caminho-transparente.png');
const OUT = path.resolve('INSTAGRAM OLÁ/Temporada Jornada Olá/Temporada 1/artes-base/01-familia-ola-apresentacao-chamada.png');

// Quadrado 1:1 — o Instagram cortou a versao 4:5 pra quadrado de qualquer
// forma (o corte do editor web nao e confiavel pra post unico), entao aqui
// ja entregamos exatamente no formato que ele realmente vai publicar.
const W = 1080, H = 1080;
const BG = '#1A3C30';

async function main() {
  const src = await sharp(SRC).metadata();

  // Remove a logo antiga (gravada em tamanho menor na arte original) clonando
  // um patch de tapete vizinho por cima dela — mesma tecnica de "clone stamp".
  const patch = await sharp(SRC).extract({ left: 680, top: 1295, width: 310, height: 160 }).toBuffer();
  const semLogoAntiga = await sharp(SRC)
    .composite([{ input: patch, left: 350, top: 1295 }])
    .toBuffer();

  const scale = H / src.height;
  const fitW = Math.round(src.width * scale);
  const offsetX = Math.round((W - fitW) / 2);
  const resized = await sharp(semLogoAntiga).resize(fitW, H).toBuffer();

  const logoW = 220; // mesma proporcao da logo nos carrosseis (~20% da largura)
  const logoMeta = await sharp(LOGO_PATH).metadata();
  const logoH = Math.round((logoW * logoMeta.height) / logoMeta.width);
  const logoBuf = await sharp(LOGO_PATH).resize(logoW).toBuffer();

  await sharp({ create: { width: W, height: H, channels: 3, background: BG } })
    .composite([
      { input: resized, top: 0, left: offsetX },
      { input: logoBuf, top: H - logoH - 24, left: Math.round((W - logoW) / 2) },
    ])
    .png()
    .toFile(OUT);

  console.log('SAVED', OUT, { fitW, offsetX });
}

main().catch((e) => {
  console.error('FATAL', e);
  process.exit(1);
});
