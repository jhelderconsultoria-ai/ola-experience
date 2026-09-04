// Substitui a capa em card verde liso do carrossel 03 por uma capa fotografica:
// recorta a cena da familia (sem o titulo/logo da arte 02 ja gravados nela) e
// aplica o titulo e o rodape no mesmo padrao visual dos demais slides do carrossel.
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const SRC = path.resolve('INSTAGRAM OLÁ/conteudo-inicial/02-familia-ola-reflexao-final.png');
const LOGO_PATH = path.resolve('INSTAGRAM OLÁ/conteudo-inicial/marca-ola-experience-caminho.png');
const OUT = path.resolve('INSTAGRAM OLÁ/conteudo-inicial/carrossel-03-vamos-fazer/01-capa.png');

const W = 1080, H = 1350;
const CREAM = '#F3E9D8';
const TERRACOTA = '#C97B4A';

async function main() {
  // Faixa central da arte 02 (sem o titulo do topo nem o logo/tagline do rodape,
  // que pertencem ao episodio 2): recorta y=340..1300 da imagem original 979x1606.
  const cropped = await sharp(SRC)
    .extract({ left: 0, top: 340, width: 979, height: 960 })
    .resize(W, H, { fit: 'cover', position: 'centre' })
    .toBuffer();

  const logoW = 90;
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
    <rect x="0" y="0" width="${W}" height="320" fill="url(#top)"/>
    <rect x="0" y="${H - 260}" width="${W}" height="260" fill="url(#bottom)"/>
    <style>
      .eyebrow { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 26px; font-weight: 700; letter-spacing: 5px; fill: ${TERRACOTA}; }
      .headline { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 58px; font-weight: 700; fill: ${CREAM}; }
      .badge { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 24px; font-weight: 700; fill: ${CREAM}; }
      .arrow { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 24px; font-weight: 700; letter-spacing: 3px; fill: ${TERRACOTA}; }
    </style>
    <rect x="70" y="88" width="70" height="6" fill="${TERRACOTA}"/>
    <text x="70" y="76" class="eyebrow">FAMÍLIA HORIZONTE · EPISÓDIO 03</text>
    <text x="${W - 70}" y="76" text-anchor="end" class="badge">1/6</text>
    <text x="50%" y="${H - 190}" text-anchor="middle" class="headline">
      <tspan x="50%" dy="0">Vamos fazer</tspan>
      <tspan x="50%" dy="66">alguma coisa?</tspan>
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
