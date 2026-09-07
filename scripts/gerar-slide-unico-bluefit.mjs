// Slide unico Familia Horizonte na Bluefit, com legenda sobreposta.
// Usa a arte-bruta no tamanho nativo (sem cortar nem colocar faixa solida).
import path from 'path';
import sharp from 'sharp';

const SRC = path.resolve('business/MKT/Bluefit/arte-bruta/slide-unico-raw.png');
const LOGO_PATH = path.resolve('INSTAGRAM OLÁ/conteudo-inicial/marca-ola-experience-caminho-transparente.png');
const OUT = path.resolve('business/MKT/Bluefit/slide-unico/01-familia-bluefit.png');

const CREAM = '#F3E9D8';

async function main() {
  const meta = await sharp(SRC).metadata();
  const W = meta.width, H = meta.height;

  const logoW = Math.round(W * 0.13);
  const logoMeta = await sharp(LOGO_PATH).metadata();
  const logoH = Math.round((logoW * logoMeta.height) / logoMeta.width);
  const logoBuf = await sharp(LOGO_PATH).resize(logoW).toBuffer();

  const scrimH = Math.round(H * 0.26);
  const fontSize = Math.round(W * 0.024);
  const lineGap = Math.round(fontSize * 1.25);
  const margin = Math.round(H * 0.02);
  const logoTop = H - logoH - margin;
  const gapAboveLogo = Math.round(H * 0.025);
  const line2Y = logoTop - gapAboveLogo;
  const textY = line2Y - lineGap;

  const overlay = `
  <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bottom" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0E2C93" stop-opacity="0"/>
        <stop offset="1" stop-color="#0E2C93" stop-opacity="0.85"/>
      </linearGradient>
    </defs>
    <rect x="0" y="${H - scrimH}" width="${W}" height="${scrimH}" fill="url(#bottom)"/>
    <style>
      .quote { font-family: 'Georgia', 'Times New Roman', serif; font-size: ${fontSize}px; font-weight: 700; fill: ${CREAM}; }
    </style>
    <text x="50%" y="${textY}" text-anchor="middle" class="quote">
      <tspan x="50%" dy="0">"Esse é o nosso jeito de cuidar</tspan>
      <tspan x="50%" dy="${lineGap}">da saúde em família."</tspan>
    </text>
  </svg>`;

  await sharp(SRC)
    .composite([
      { input: Buffer.from(overlay), top: 0, left: 0 },
      { input: logoBuf, top: logoTop, left: Math.round((W - logoW) / 2) },
    ])
    .png()
    .toFile(OUT);
  console.log('OK', OUT, `${W}x${H}`);
}

main().catch((e) => {
  console.error('FATAL', e);
  process.exit(1);
});
