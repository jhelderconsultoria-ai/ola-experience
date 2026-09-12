// Capa quadrada (600x600) do produto "O Mapa do Hoje" pra Hotmart.
import path from 'path';
import sharp from 'sharp';

const LOGO_PATH = path.resolve('INSTAGRAM OLÁ/conteudo-inicial/marca-ola-experience-caminho-transparente.png');
const FOTO_PATH = path.resolve('LANÇAMENTO DE PRODUTOS/mapa-do-hoje/assets-pdf/dia1-alimentacao.jpg');
const OUT = path.resolve('LANÇAMENTO DE PRODUTOS/mapa-do-hoje/capa-produto-mapa-do-hoje--v1--20260910.png');

const W = 1200, H = 1200;
const CREAM = '#F3E9D8';
const TERRACOTA = '#C97B4A';
const BG = '#1A3C30';
const BG_ESCURO = '#10241c';

async function main() {
  const fotoBand = 700;
  const foto = await sharp(FOTO_PATH).resize(W, fotoBand, { fit: 'cover' }).toBuffer();

  const logoW = 220;
  const logoMeta = await sharp(LOGO_PATH).metadata();
  const logoH = Math.round((logoW * logoMeta.height) / logoMeta.width);
  const logoBuf = await sharp(LOGO_PATH).resize(logoW).toBuffer();

  const svg = `
  <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <style>
      .eyebrow { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 28px; font-weight: 700; letter-spacing: 5px; fill: ${TERRACOTA}; }
      .titulo { font-family: 'Georgia', 'Times New Roman', serif; font-size: 92px; font-weight: 700; fill: ${CREAM}; }
      .sub { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 30px; fill: ${CREAM}; opacity: .85; }
    </style>
    <text x="80" y="800" class="eyebrow">FAMÍLIA HORIZONTE · OLÁ EXPERIENCE</text>
    <text x="78" y="900" class="titulo">O MAPA</text>
    <text x="78" y="990" class="titulo">DO HOJE</text>
    <text x="80" y="1035" class="sub">6 dias. 6 pilares. 6 pequenos começos.</text>
  </svg>`;

  await sharp({ create: { width: W, height: H, channels: 3, background: BG } })
    .composite([
      { input: foto, top: 0, left: 0 },
      { input: Buffer.from(`<svg width="${W}" height="${fotoBand + 40}"><rect x="0" y="0" width="${W}" height="${fotoBand + 40}" fill="${BG}" opacity="0"/><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="60%" stop-color="${BG}" stop-opacity="0"/><stop offset="100%" stop-color="${BG}" stop-opacity="1"/></linearGradient><rect x="0" y="0" width="${W}" height="${fotoBand + 40}" fill="url(#g)"/></svg>`), top: 0, left: 0 },
      { input: Buffer.from(svg), top: 0, left: 0 },
      { input: logoBuf, top: H - logoH - 55, left: Math.round((W - logoW) / 2) },
    ])
    .png()
    .toFile(OUT);

  // Versao 600x600 exigida pela Hotmart
  await sharp(OUT).resize(600, 600).toFile(OUT.replace('.png', '-600.png'));

  console.log('SAVED', OUT);
  console.log('SAVED', OUT.replace('.png', '-600.png'));
}

main().catch((e) => {
  console.error('FATAL', e);
  process.exit(1);
});
