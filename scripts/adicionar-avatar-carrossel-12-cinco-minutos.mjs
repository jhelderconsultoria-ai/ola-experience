// Adiciona o retrato circular da Lu no slide de fala (02-lu) do
// carrossel do T1E11 (cinco minutos so meus).
import path from 'path';
import sharp from 'sharp';

const SRC = path.resolve('INSTAGRAM OLÁ/Temporada Jornada Olá/Temporada 1/T1E11-cinco-minutos/arte-bruta/12-cinco-minutos-raw.png');
const OUT_DIR = path.resolve('INSTAGRAM OLÁ/Temporada Jornada Olá/Temporada 1/T1E11-cinco-minutos/carrossel');

const W = 1080, H = 1080;
const BG = '#1A3C30';
const CREAM = '#F3E9D8';
const CREAM_MUTED = '#C9C2AE';
const TERRACOTA = '#C97B4A';

const AVATAR_SIZE = 110;
const AVATAR_LEFT = 70;
const AVATAR_TOP = 26;

// Caixa de rosto conferida a olho na arte 1536x1024 (12-cinco-minutos-raw.png, regenerada em 06/09/2026).
const FACE_BOX = { left: 260, top: 60, size: 380 };

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

async function makeAvatar() {
  const circleMask = Buffer.from(
    `<svg width="${AVATAR_SIZE}" height="${AVATAR_SIZE}"><circle cx="${AVATAR_SIZE / 2}" cy="${AVATAR_SIZE / 2}" r="${AVATAR_SIZE / 2}" fill="#fff"/></svg>`
  );
  const face = await sharp(SRC)
    .extract({ left: FACE_BOX.left, top: FACE_BOX.top, width: FACE_BOX.size, height: FACE_BOX.size })
    .resize(AVATAR_SIZE, AVATAR_SIZE)
    .composite([{ input: circleMask, blend: 'dest-in' }])
    .png()
    .toBuffer();

  const ring = Buffer.from(
    `<svg width="${AVATAR_SIZE}" height="${AVATAR_SIZE}"><circle cx="${AVATAR_SIZE / 2}" cy="${AVATAR_SIZE / 2}" r="${AVATAR_SIZE / 2 - 2}" fill="none" stroke="${TERRACOTA}" stroke-width="3"/></svg>`
  );
  return sharp(face).composite([{ input: ring, top: 0, left: 0 }]).png().toBuffer();
}

function slideSvg({ eyebrow, lines, quoteMark, footer, badge, showArrow }) {
  const lineHeight = 76;
  const startY = H / 2 - ((lines.length - 1) * lineHeight) / 2;
  const textSpans = lines
    .map((l, i) => `<tspan x="50%" y="${startY + i * lineHeight}">${esc(l)}</tspan>`)
    .join('');
  const eyebrowX = AVATAR_LEFT + AVATAR_SIZE + 24;
  const accentX = eyebrowX;
  const accentY = AVATAR_TOP + AVATAR_SIZE - 10;

  return `
  <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <style>
      .eyebrow { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 26px; font-weight: 700; letter-spacing: 4px; fill: ${TERRACOTA}; }
      .headline { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 54px; font-weight: 700; fill: ${CREAM}; }
      .quote { font-family: 'Georgia', 'Times New Roman', serif; font-size: 140px; fill: ${TERRACOTA}; opacity: 0.55; }
      .footer { font-family: 'Georgia', 'Times New Roman', serif; font-size: 32px; letter-spacing: 2px; fill: ${CREAM_MUTED}; }
      .badge { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 24px; font-weight: 700; fill: ${CREAM_MUTED}; }
      .arrow { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 24px; font-weight: 700; letter-spacing: 3px; fill: ${TERRACOTA}; }
    </style>
    <rect width="${W}" height="${H}" fill="${BG}"/>
    <text x="${eyebrowX}" y="${AVATAR_TOP + AVATAR_SIZE / 2 + 9}" class="eyebrow">${esc(eyebrow)}</text>
    <rect x="${accentX}" y="${accentY}" width="70" height="6" fill="${TERRACOTA}"/>
    ${quoteMark ? `<text x="68" y="${startY - 120}" class="quote">&#8220;</text>` : ''}
    <text text-anchor="middle" class="headline">${textSpans}</text>
    ${footer ? `<text x="${showArrow ? 70 : W / 2}" y="${H - 190}" text-anchor="${showArrow ? 'start' : 'middle'}" class="footer">${esc(footer)}</text>` : ''}
    ${badge ? `<text x="${W - 70}" y="76" text-anchor="end" class="badge">${esc(badge)}</text>` : ''}
    ${showArrow ? `<text x="${W - 70}" y="${H - 190}" text-anchor="end" class="arrow">ARRASTE &#8594;</text>` : ''}
  </svg>`;
}

const slide = {
  name: '02-lu',
  eyebrow: 'LU, 38 ANOS',
  quoteMark: true,
  lines: ['Cinco minutos', 'só meus.'],
  footer: 'Não precisa silêncio pra isso.',
  badge: '2/4',
  showArrow: true,
};

const LOGO_PATH = path.resolve('INSTAGRAM OLÁ/conteudo-inicial/marca-ola-experience-caminho-transparente.png');

async function main() {
  const logoW = 220;
  const logoMeta = await sharp(LOGO_PATH).metadata();
  const logoH = Math.round((logoW * logoMeta.height) / logoMeta.width);
  const logoBuf = await sharp(LOGO_PATH).resize(logoW).toBuffer();

  const avatarBuf = await makeAvatar();
  const svg = Buffer.from(slideSvg(slide));
  const outPath = path.join(OUT_DIR, `${slide.name}.png`);
  await sharp({ create: { width: W, height: H, channels: 3, background: BG } })
    .composite([
      { input: svg, top: 0, left: 0 },
      { input: avatarBuf, top: AVATAR_TOP, left: AVATAR_LEFT },
      { input: logoBuf, top: H - logoH - 24, left: Math.round((W - logoW) / 2) },
    ])
    .png()
    .toFile(outPath);
  console.log('OK', outPath);
}

main().catch((e) => {
  console.error('FATAL', e);
  process.exit(1);
});
