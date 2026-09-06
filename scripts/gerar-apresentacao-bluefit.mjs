// Carrossel de proposta de parceria Olá Experience x Bluefit (5 slides).
// Cada slide de depoimento usa um recorte da propria arte gerada (efeito
// "video de depoimento"), com scrim escuro embaixo pra legibilidade do texto.
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const OUT_DIR = path.resolve('business/MKT/Bluefit/apresentacao');
fs.mkdirSync(OUT_DIR, { recursive: true });

const SRC = path.resolve('business/MKT/Bluefit/arte-bruta/bluefit-parceria-raw.png');
const LOGO_PATH = path.resolve('INSTAGRAM OLÁ/conteudo-inicial/marca-ola-experience-caminho-transparente.png');

const W = 1080, H = 1080;
const BLUEFIT_BLUE = '#153FCC';
const BLUEFIT_BLUE_DARK = '#0E2C93';
const CREAM_MUTED = '#D8E0FA';

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

async function loadLogo() {
  const logoW = 190;
  const logoMeta = await sharp(LOGO_PATH).metadata();
  const logoH = Math.round((logoW * logoMeta.height) / logoMeta.width);
  const logoBuf = await sharp(LOGO_PATH).resize(logoW).toBuffer();
  return { logoBuf, logoW, logoH };
}

async function cropPhoto(region) {
  return sharp(SRC).extract(region).resize(W, W).toBuffer();
}

async function fullPhoto() {
  return sharp(SRC).resize(W, H, { fit: 'cover' }).toBuffer();
}

function overlaySvg({ eyebrow, badge, quoteMark, lines, footer, headlineSize, topScrim, bottomScrim, arrow }) {
  const lineHeight = headlineSize ? headlineSize + 12 : 62;
  const blockH = H - (topScrim ?? 300) - (bottomScrim ?? 360);
  const centerY = (topScrim ?? 300) + blockH / 2 + 40;
  const textSpans = lines
    .map((l, i) => `<tspan x="50%" y="${centerY + (i - (lines.length - 1) / 2) * lineHeight}">${esc(l)}</tspan>`)
    .join('');

  return `
  <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="top" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${BLUEFIT_BLUE_DARK}" stop-opacity="0.82"/>
        <stop offset="1" stop-color="${BLUEFIT_BLUE_DARK}" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="bottom" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${BLUEFIT_BLUE_DARK}" stop-opacity="0"/>
        <stop offset="1" stop-color="${BLUEFIT_BLUE_DARK}" stop-opacity="0.92"/>
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="${W}" height="${topScrim ?? 300}" fill="url(#top)"/>
    <rect x="0" y="${H - (bottomScrim ?? 360)}" width="${W}" height="${bottomScrim ?? 360}" fill="url(#bottom)"/>
    <style>
      .eyebrow { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 25px; font-weight: 700; letter-spacing: 5px; fill: #FFFFFF; }
      .headline { font-family: 'Arial', 'Helvetica', sans-serif; font-size: ${headlineSize ?? 50}px; font-weight: 800; fill: #FFFFFF; }
      .quote { font-family: 'Georgia', 'Times New Roman', serif; font-size: 110px; fill: #FFFFFF; opacity: 0.55; }
      .footer { font-family: 'Georgia', 'Times New Roman', serif; font-size: 29px; letter-spacing: 1px; fill: ${CREAM_MUTED}; }
      .badge { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 24px; font-weight: 700; fill: #FFFFFF; }
      .arrow { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 24px; font-weight: 700; letter-spacing: 3px; fill: #FFFFFF; }
    </style>
    <rect x="70" y="88" width="70" height="6" fill="#FFFFFF"/>
    <text x="70" y="76" class="eyebrow">${esc(eyebrow)}</text>
    <text x="${W - 70}" y="76" text-anchor="end" class="badge">${esc(badge)}</text>
    ${quoteMark ? `<text x="66" y="${(topScrim ?? 300) + 110}" class="quote">&#8220;</text>` : ''}
    <text text-anchor="middle" class="headline">${textSpans}</text>
    ${footer ? `<text x="70" y="${H - 150}" text-anchor="start" class="footer">${esc(footer)}</text>` : ''}
    ${arrow ? `<text x="${W - 70}" y="${H - 34}" text-anchor="end" class="arrow">ARRASTE &#8594;</text>` : ''}
  </svg>`;
}

async function buildPhotoSlide({ name, photoBuf, logoBuf, logoW, logoH, ...svgOpts }) {
  const svg = Buffer.from(overlaySvg(svgOpts));
  await sharp(photoBuf)
    .composite([
      { input: svg, top: 0, left: 0 },
      { input: logoBuf, top: H - logoH - 22, left: Math.round((W - logoW) / 2) },
    ])
    .png()
    .toFile(path.join(OUT_DIR, `${name}.png`));
  console.log('OK', name);
}

async function main() {
  const { logoBuf, logoW, logoH } = await loadLogo();
  const wide = await fullPhoto();
  const nilo = await cropPhoto({ left: 0, top: 30, width: 620, height: 620 });
  const lu = await cropPhoto({ left: 500, top: 30, width: 620, height: 620 });
  const trainer = await cropPhoto({ left: 780, top: 0, width: 756, height: 756 });

  await buildPhotoSlide({
    name: '01-capa',
    photoBuf: wide,
    logoBuf, logoW, logoH,
    eyebrow: 'FAMÍLIA HORIZONTE',
    badge: '1/5',
    lines: ['A Família Horizonte', 'já é cliente BlueFit.'],
    headlineSize: 46,
    topScrim: 280,
    bottomScrim: 380,
    arrow: true,
  });

  await buildPhotoSlide({
    name: '02-nilo',
    photoBuf: nilo,
    logoBuf, logoW, logoH,
    eyebrow: 'NILO, 41 ANOS',
    badge: '2/5',
    quoteMark: true,
    lines: ['"Equipamento novo,', 'espaço de sobra.', 'Dá vontade de vir todo dia."'],
    headlineSize: 42,
    topScrim: 230,
    bottomScrim: 400,
    arrow: true,
  });

  await buildPhotoSlide({
    name: '03-lu',
    photoBuf: lu,
    logoBuf, logoW, logoH,
    eyebrow: 'LU, 38 ANOS',
    badge: '3/5',
    quoteMark: true,
    lines: ['"Me senti acolhida', 'desde o 1º dia — e o preço', 'cabe no nosso orçamento."'],
    headlineSize: 40,
    topScrim: 130,
    bottomScrim: 420,
    arrow: true,
  });

  await buildPhotoSlide({
    name: '04-professor',
    photoBuf: trainer,
    logoBuf, logoW, logoH,
    eyebrow: 'NILO E LU · SOBRE OS PROFESSORES',
    badge: '4/5',
    quoteMark: true,
    lines: ['"Eles sabem nosso nome', 'e nosso objetivo.', 'A gente não é só mais um."'],
    headlineSize: 40,
    topScrim: 340,
    bottomScrim: 380,
    arrow: true,
  });

  await buildPhotoSlide({
    name: '05-convite',
    photoBuf: wide,
    logoBuf, logoW, logoH,
    eyebrow: 'O CONVITE',
    badge: '5/5',
    lines: ['Queremos continuar', 'essa história com vocês.'],
    headlineSize: 42,
    topScrim: 280,
    bottomScrim: 420,
    footer: 'Vamos conversar?',
    arrow: false,
  });
}

main().catch((e) => {
  console.error('FATAL', e);
  process.exit(1);
});
