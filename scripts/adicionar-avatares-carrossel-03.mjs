// Adiciona um retrato circular de cada personagem nos slides de fala
// (02-lu .. 05-nori) do carrossel 03, recortado a olho da arte 02 (sem
// deteccao facial disponivel — ajustar manualmente se sair desalinhado).
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const SRC = path.resolve('INSTAGRAM OLÁ/conteudo-inicial/02-familia-ola-reflexao-final.png');
const OUT_DIR = path.resolve('INSTAGRAM OLÁ/conteudo-inicial/carrossel-03-vamos-fazer');

const W = 1080, H = 1350;
const BG = '#1A3C30';
const CREAM = '#F3E9D8';
const CREAM_MUTED = '#C9C2AE';
const TERRACOTA = '#C97B4A';

const AVATAR_SIZE = 110;
const AVATAR_LEFT = 70;
const AVATAR_TOP = 26;

// Caixas estimadas a olho no recorte 979x1606 de 02-familia-ola-reflexao-final.png.
const FACE_BOXES = {
  lu:   { left: 120, top: 640, size: 170 },
  nilo: { left: 300, top: 480, size: 220 },
  zai:  { left: 780, top: 650, size: 180 },
  nori: { left: 580, top: 860, size: 170 },
};

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

async function makeAvatar(key) {
  const box = FACE_BOXES[key];
  const circleMask = Buffer.from(
    `<svg width="${AVATAR_SIZE}" height="${AVATAR_SIZE}"><circle cx="${AVATAR_SIZE / 2}" cy="${AVATAR_SIZE / 2}" r="${AVATAR_SIZE / 2}" fill="#fff"/></svg>`
  );
  const face = await sharp(SRC)
    .extract({ left: box.left, top: box.top, width: box.size, height: box.size })
    .resize(AVATAR_SIZE, AVATAR_SIZE)
    .composite([{ input: circleMask, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // anel terracota por cima
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
      .headline { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 58px; font-weight: 700; fill: ${CREAM}; }
      .quote { font-family: 'Georgia', 'Times New Roman', serif; font-size: 140px; fill: ${TERRACOTA}; opacity: 0.55; }
      .footer { font-family: 'Georgia', 'Times New Roman', serif; font-size: 24px; letter-spacing: 2px; fill: ${CREAM_MUTED}; }
      .badge { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 24px; font-weight: 700; fill: ${CREAM_MUTED}; }
      .arrow { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 24px; font-weight: 700; letter-spacing: 3px; fill: ${TERRACOTA}; }
    </style>
    <rect width="${W}" height="${H}" fill="${BG}"/>
    <text x="${eyebrowX}" y="${AVATAR_TOP + AVATAR_SIZE / 2 + 9}" class="eyebrow">${esc(eyebrow)}</text>
    <rect x="${accentX}" y="${accentY}" width="70" height="6" fill="${TERRACOTA}"/>
    ${quoteMark ? `<text x="68" y="${startY - 120}" class="quote">&#8220;</text>` : ''}
    <text text-anchor="middle" class="headline">${textSpans}</text>
    ${footer ? `<text x="50%" y="${H - 100}" text-anchor="middle" class="footer">${esc(footer)}</text>` : ''}
    ${badge ? `<text x="${W - 70}" y="76" text-anchor="end" class="badge">${esc(badge)}</text>` : ''}
    ${showArrow ? `<text x="${W - 70}" y="${H - 66}" text-anchor="end" class="arrow">ARRASTE &#8594;</text>` : ''}
  </svg>`;
}

const slides = [
  {
    name: '02-lu', key: 'lu',
    eyebrow: 'LU, 38 ANOS', quoteMark: true,
    lines: ['Se a gente esperar', 'sobrar tempo,', 'não começa nunca.'],
    footer: 'Ela organiza tudo — menos o próprio descanso.',
    badge: '2/6', showArrow: true,
  },
  {
    name: '03-nilo', key: 'nilo',
    eyebrow: 'NILO, 41 ANOS', quoteMark: true,
    lines: ['Vamos começar', 'pequeno e ver', 'onde isso leva.'],
    footer: 'Descanso não é só ficar parado.',
    badge: '3/6', showArrow: true,
  },
  {
    name: '04-zai', key: 'zai',
    eyebrow: 'ZAI, 15 ANOS', quoteMark: true,
    lines: ['Eu vou, mas posso', 'escolher uma parte', 'do roteiro?'],
    footer: 'Ele topa quando participa da escolha.',
    badge: '4/6', showArrow: true,
  },
  {
    name: '05-nori', key: 'nori',
    eyebrow: 'NORI, 8 ANOS', quoteMark: true,
    lines: ['E se a gente', 'fosse descobrir?'],
    footer: 'A pergunta que sempre movimenta todo mundo.',
    badge: '5/6', showArrow: true,
  },
];

const LOGO_PATH = path.resolve('INSTAGRAM OLÁ/conteudo-inicial/marca-ola-experience-caminho.png');

async function main() {
  const logoW = 90;
  const logoMeta = await sharp(LOGO_PATH).metadata();
  const logoH = Math.round((logoW * logoMeta.height) / logoMeta.width);
  const logoBuf = await sharp(LOGO_PATH).resize(logoW).toBuffer();

  for (const s of slides) {
    const avatarBuf = await makeAvatar(s.key);
    const svg = Buffer.from(slideSvg(s));
    const outPath = path.join(OUT_DIR, `${s.name}.png`);
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
}

main().catch((e) => {
  console.error('FATAL', e);
  process.exit(1);
});
