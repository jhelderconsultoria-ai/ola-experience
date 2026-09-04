// Capa fotografica do carrossel do episodio 2, mesmo padrao do episodio 3.
import path from 'path';
import sharp from 'sharp';

const SRC = path.resolve('INSTAGRAM OLÁ/conteudo-inicial/02-cozinha-raw.png');
const LOGO_PATH = path.resolve('INSTAGRAM OLÁ/conteudo-inicial/marca-ola-experience-caminho-transparente.png');
const OUT = path.resolve('INSTAGRAM OLÁ/conteudo-inicial/carrossel-02-final-de-semana/01-capa.png');

const W = 1080, H = 1080;
const CREAM = '#F3E9D8';
const TERRACOTA = '#C97B4A';

async function main() {
  // Cena limpa gerada direto pro episodio 2 (sem texto/logo gravado).
  const cropped = await sharp(SRC)
    .resize(W, H, { fit: 'cover', position: 'centre' })
    .toBuffer();

  const logoW = 220; // mesma proporcao da logo na arte 01 (~21% da largura)
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
      .headline { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 48px; font-weight: 700; fill: ${CREAM}; }
      .badge { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 24px; font-weight: 700; fill: ${CREAM}; }
      .arrow { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 24px; font-weight: 700; letter-spacing: 3px; fill: ${TERRACOTA}; }
    </style>
    <rect x="70" y="88" width="70" height="6" fill="${TERRACOTA}"/>
    <text x="70" y="76" class="eyebrow">FAMÍLIA HORIZONTE · EPISÓDIO 01</text>
    <text x="${W - 70}" y="76" text-anchor="end" class="badge">1/6</text>
    <text x="50%" y="${H - 290}" text-anchor="middle" class="headline">
      <tspan x="50%" dy="0">O final de semana passou.</tspan>
      <tspan x="50%" dy="58">O que ficou dele?</tspan>
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
