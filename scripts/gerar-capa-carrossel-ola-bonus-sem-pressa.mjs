// Capa fotografica do carrossel OLÁ BÔNUS "Sem Pressa".
// PADRAO FIXO DE CAPA v2 — ver contexto-dinamico.md (Notas Tecnicas).
import path from 'path';
import sharp from 'sharp';

const SRC = path.resolve('INSTAGRAM OLÁ/POSTAGENS EXTRAS/casa-na-montanha-sem-pressa/arte-bruta/performance-wide-raw-v2.png');
const LOGO_PATH = path.resolve('INSTAGRAM OLÁ/conteudo-inicial/marca-ola-experience-caminho-transparente.png');
const OUT = path.resolve('INSTAGRAM OLÁ/POSTAGENS EXTRAS/casa-na-montanha-sem-pressa/carrossel/01-capa.png');

const W = 1080, H = 1080;
const CREAM = '#F3E9D8';
const TERRACOTA = '#C97B4A';
const BG = '#1A3C30';

const TOP_BAR = 100;
const BOTTOM_BAR = 190;
const PHOTO_BAND_H = H - TOP_BAR - BOTTOM_BAR;

const HEADLINE = 'Sem Pressa';

function fontSizeHeadline(texto) {
  const BASE = 42, MAX_W = 940, CHAR_W = 0.56, MIN = 30;
  const tamanho = Math.min(BASE, Math.floor(MAX_W / (texto.length * CHAR_W)));
  return Math.max(MIN, tamanho);
}
const HEADLINE_SIZE = fontSizeHeadline(HEADLINE);
const HEADLINE_Y = H - BOTTOM_BAR + Math.round(HEADLINE_SIZE * 1.15);

async function main() {
  const resized = await sharp(SRC)
    .resize(W, PHOTO_BAND_H, { fit: 'inside' })
    .toBuffer();
  const resizedMeta = await sharp(resized).metadata();
  const photoTop = TOP_BAR + Math.round((PHOTO_BAND_H - resizedMeta.height) / 2);
  const photoLeft = Math.round((W - resizedMeta.width) / 2);

  const canvas = await sharp({
    create: { width: W, height: H, channels: 3, background: BG },
  })
    .composite([{ input: resized, top: photoTop, left: photoLeft }])
    .png()
    .toBuffer();

  const logoW = 160;
  const logoMeta = await sharp(LOGO_PATH).metadata();
  const logoH = Math.round((logoW * logoMeta.height) / logoMeta.width);
  const logoBuf = await sharp(LOGO_PATH).resize(logoW).toBuffer();

  const svgOverlay = `
  <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <style>
      .eyebrow { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 26px; font-weight: 700; letter-spacing: 5px; fill: ${TERRACOTA}; }
      .headline { font-family: 'Arial', 'Helvetica', sans-serif; font-size: ${HEADLINE_SIZE}px; font-weight: 700; fill: ${CREAM}; }
      .badge { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 24px; font-weight: 700; fill: ${CREAM}; }
      .arrow { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 24px; font-weight: 700; letter-spacing: 3px; fill: ${TERRACOTA}; }
    </style>
    <rect x="0" y="0" width="${W}" height="${TOP_BAR}" fill="${BG}"/>
    <rect x="0" y="${H - BOTTOM_BAR}" width="${W}" height="${BOTTOM_BAR}" fill="${BG}"/>
    <rect x="70" y="88" width="70" height="6" fill="${TERRACOTA}"/>
    <text x="70" y="76" class="eyebrow">FAMÍLIA HORIZONTE · OLÁ BÔNUS</text>
    <text x="${W - 70}" y="76" text-anchor="end" class="badge">1/6</text>
    <text x="50%" y="${HEADLINE_Y}" text-anchor="middle" class="headline">${HEADLINE}</text>
    <text x="${W - 70}" y="${H - 18}" text-anchor="end" class="arrow">ARRASTE &#8594;</text>
  </svg>`;

  await sharp(canvas)
    .composite([
      { input: Buffer.from(svgOverlay), top: 0, left: 0 },
      { input: logoBuf, top: H - logoH - 16, left: Math.round((W - logoW) / 2) },
    ])
    .png()
    .toFile(OUT);

  console.log('SAVED', OUT);
}

main().catch((e) => {
  console.error('FATAL', e);
  process.exit(1);
});
