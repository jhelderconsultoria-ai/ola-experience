// Capa fotografica do carrossel do episodio 3 (primeira caminhada), mesmo
// padrao visual dos episodios 01 e 02.
import path from 'path';
import sharp from 'sharp';

const SRC = path.resolve('INSTAGRAM OLÁ/Temporada Jornada Olá/Temporada 1/artes-base/04-caminhada-raw.png');
const LOGO_PATH = path.resolve('INSTAGRAM OLÁ/conteudo-inicial/marca-ola-experience-caminho-transparente.png');
const OUT = path.resolve('INSTAGRAM OLÁ/Temporada Jornada Olá/Temporada 1/carrossel-04-primeira-caminhada/01-capa.png');

const W = 1080, H = 1080;
const CREAM = '#F3E9D8';
const TERRACOTA = '#C97B4A';

async function main() {
  const cropped = await sharp(SRC).resize(W, H, { fit: 'cover', position: 'centre' }).toBuffer();

  const logoW = 220;
  const logoMeta = await sharp(LOGO_PATH).metadata();
  const logoH = Math.round((logoW * logoMeta.height) / logoMeta.width);
  const logoBuf = await sharp(LOGO_PATH).resize(logoW).toBuffer();

  const svgOverlay = `
  <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="top" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#000000" stop-opacity="0.55"/>
        <stop offset="1" stop-color="#000000" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="bottom" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#000000" stop-opacity="0"/>
        <stop offset="1" stop-color="#000000" stop-opacity="0.6"/>
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="${W}" height="300" fill="url(#top)"/>
    <rect x="0" y="${H - 340}" width="${W}" height="340" fill="url(#bottom)"/>
    <style>
      .eyebrow { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 26px; font-weight: 700; letter-spacing: 5px; fill: ${TERRACOTA}; }
      .headline { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 54px; font-weight: 700; fill: ${CREAM}; }
      .badge { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 24px; font-weight: 700; fill: ${CREAM}; }
      .arrow { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 24px; font-weight: 700; letter-spacing: 3px; fill: ${TERRACOTA}; }
    </style>
    <rect x="70" y="88" width="70" height="6" fill="${TERRACOTA}"/>
    <text x="70" y="76" class="eyebrow">FAMÍLIA HORIZONTE · EPISÓDIO 03</text>
    <text x="${W - 70}" y="76" text-anchor="end" class="badge">1/6</text>
    <text x="50%" y="${H - 290}" text-anchor="middle" class="headline">
      <tspan x="50%" dy="0">Uma volta</tspan>
      <tspan x="50%" dy="58">pelo quarteirão</tspan>
    </text>
    <text x="${W - 70}" y="${H - 34}" text-anchor="end" class="arrow">ARRASTE &#8594;</text>
  </svg>`;

  await sharp(cropped)
    .composite([
      { input: Buffer.from(svgOverlay), top: 0, left: 0 },
      { input: logoBuf, top: H - logoH - 24, left: Math.round((W - logoW) / 2) },
    ])
    .png()
    .toFile(OUT);

  console.log('SAVED', OUT);
}

main().catch((e) => {
  console.error('FATAL', e);
  process.exit(1);
});
