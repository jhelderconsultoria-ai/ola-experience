// Reel 01 "A Maldição do Depois" — frames 1080x1920 (9:16), mesmo padrão visual dos carrosséis.
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const OUT_DIR = path.resolve('INSTAGRAM OLÁ/Temporada Jornada Olá/Temporada 1/REEL01-maldicao-do-depois/frames');
fs.mkdirSync(OUT_DIR, { recursive: true });

const LOGO_PATH = path.resolve('INSTAGRAM OLÁ/conteudo-inicial/marca-ola-experience-caminho-transparente.png');
const ARTE_HOOK_PATH = path.resolve('INSTAGRAM OLÁ/Temporada Jornada Olá/Temporada 1/T1E00-chamada-postado-04-09-2026/arte-bruta/01-familia-ola-apresentacao-marca-v3.png');

const W = 1080, H = 1920;
const BG = '#1A3C30';
const CREAM = '#F3E9D8';
const CREAM_MUTED = '#C9C2AE';
const TERRACOTA = '#C97B4A';

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function textSvg({ eyebrow, lines, lineFontSize = 64, footer, footerFontSize = 34, dark = false }) {
  const fg = dark ? BG : CREAM;
  const lineHeight = lineFontSize + 22;
  const startY = H / 2 - ((lines.length - 1) * lineHeight) / 2;
  const textSpans = lines
    .map((l, i) => `<tspan x="50%" y="${startY + i * lineHeight}">${esc(l)}</tspan>`)
    .join('');

  return `
  <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <style>
      .eyebrow { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 30px; font-weight: 700; letter-spacing: 5px; fill: ${TERRACOTA}; }
      .headline { font-family: 'Arial', 'Helvetica', sans-serif; font-size: ${lineFontSize}px; font-weight: 700; fill: ${fg}; }
      .footer { font-family: 'Georgia', 'Times New Roman', serif; font-size: ${footerFontSize}px; letter-spacing: 1px; fill: ${dark ? '#4A4A3A' : CREAM_MUTED}; }
    </style>
    ${eyebrow ? `<rect x="70" y="${startY - 190}" width="70" height="6" fill="${TERRACOTA}"/>
    <text x="70" y="${startY - 202}" class="eyebrow">${esc(eyebrow)}</text>` : ''}
    <text text-anchor="middle" class="headline">${textSpans}</text>
    ${footer ? `<text x="50%" y="${H - 260}" text-anchor="middle" class="footer">${esc(footer)}</text>` : ''}
  </svg>`;
}

async function frameSolid({ name, eyebrow, lines, lineFontSize, footer, footerFontSize, dark, logo }) {
  const bg = dark ? CREAM : BG;
  const svg = Buffer.from(textSvg({ eyebrow, lines, lineFontSize, footer, footerFontSize, dark }));
  const composites = [{ input: svg, top: 0, left: 0 }];
  if (logo) composites.push(logo);
  await sharp({ create: { width: W, height: H, channels: 3, background: bg } })
    .composite(composites)
    .png()
    .toFile(path.join(OUT_DIR, `${name}.png`));
  console.log('OK', name);
}

async function frameHook(logo) {
  // arte real cropada 9:16, faixa inferior BG com o texto do hook
  const arteBuf = await sharp(ARTE_HOOK_PATH)
    .resize(W, Math.round(H * 0.62), { fit: 'cover', position: 'attention' })
    .toBuffer();
  const arteH = Math.round(H * 0.62);
  const faixaH = H - arteH;

  const svg = `
  <svg width="${W}" height="${faixaH}" xmlns="http://www.w3.org/2000/svg">
    <style>
      .headline { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 66px; font-weight: 700; fill: ${CREAM}; }
      .sub { font-family: 'Georgia', 'Times New Roman', serif; font-size: 32px; fill: ${CREAM_MUTED}; }
    </style>
    <rect width="${W}" height="${faixaH}" fill="${BG}"/>
    <text x="50%" y="130" text-anchor="middle" class="headline">A MALDIÇÃO</text>
    <text x="50%" y="210" text-anchor="middle" class="headline">DO DEPOIS</text>
    <text x="50%" y="280" text-anchor="middle" class="sub">Não é falta de tempo.</text>
  </svg>`;

  const composites = [
    { input: arteBuf, top: 0, left: 0 },
    { input: Buffer.from(svg), top: arteH, left: 0 },
  ];
  if (logo) composites.push(logo);

  await sharp({ create: { width: W, height: H, channels: 3, background: BG } })
    .composite(composites)
    .png()
    .toFile(path.join(OUT_DIR, '01-hook.png'));
  console.log('OK 01-hook');
}

async function main() {
  const logoW = 200;
  const logoMeta = await sharp(LOGO_PATH).metadata();
  const logoH = Math.round((logoW * logoMeta.height) / logoMeta.width);
  const logoBuf = await sharp(LOGO_PATH).resize(logoW).toBuffer();
  const logo = { input: logoBuf, top: H - logoH - 100, left: Math.round((W - logoW) / 2) };

  await frameHook(logo);

  await frameSolid({
    name: '02-intro',
    eyebrow: 'A MENTIRA',
    lines: ['É a mentira de que', 'só vale começar', 'quando sobrar o', 'momento perfeito.'],
    lineFontSize: 58,
  });

  await frameSolid({
    name: '03-tentativas',
    eyebrow: 'VOCÊ JÁ TENTOU',
    lines: ['"Segunda eu', 'começo." O app', 'que abandonou.', 'As férias que', 'nunca chegam.'],
    lineFontSize: 50,
  });

  await frameSolid({
    name: '04-virada',
    eyebrow: 'A CRENÇA',
    lines: ['Família não muda', 'de uma vez.', 'Muda um domingo', 'de cada vez.'],
    lineFontSize: 58,
    dark: true,
  });

  await frameSolid({
    name: '05-cta',
    lines: ['Marca aqui quem', 'vive dizendo', '"depois eu cuido', 'disso".'],
    lineFontSize: 56,
    footer: 'Olá Experience — cada família, uma jornada.',
    footerFontSize: 32,
    logo,
  });
}

main().catch((e) => {
  console.error('FATAL', e);
  process.exit(1);
});
