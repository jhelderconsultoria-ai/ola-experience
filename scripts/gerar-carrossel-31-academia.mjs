// Carrossel "Duas horas só nossas" (episodio T1E30, Familia Horizonte,
// fechamento com 3 pilares) — slides de texto, mesma paleta oficial da Ola.
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const OUT_DIR = path.resolve('INSTAGRAM OLÁ/Temporada Jornada Olá/Temporada 1/T1E30-duas-horas-nossas/carrossel');
fs.mkdirSync(OUT_DIR, { recursive: true });

const LOGO_PATH = path.resolve('INSTAGRAM OLÁ/conteudo-inicial/marca-ola-experience-caminho-transparente.png');

const W = 1080, H = 1080;
const BG = '#1A3C30';
const CREAM = '#F3E9D8';
const CREAM_MUTED = '#C9C2AE';
const TERRACOTA = '#C97B4A';

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function slideSvg({ eyebrow, lines, quoteMark, footer, badge, showArrow }) {
  const lineHeight = 76;
  const startY = H / 2 - ((lines.length - 1) * lineHeight) / 2;
  const textSpans = lines
    .map((l, i) => `<tspan x="50%" y="${startY + i * lineHeight}">${esc(l)}</tspan>`)
    .join('');

  return `
  <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <style>
      .eyebrow { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 26px; font-weight: 700; letter-spacing: 5px; fill: ${TERRACOTA}; }
      .headline { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 54px; font-weight: 700; fill: ${CREAM}; }
      .quote { font-family: 'Georgia', 'Times New Roman', serif; font-size: 140px; fill: ${TERRACOTA}; opacity: 0.55; }
      .footer { font-family: 'Georgia', 'Times New Roman', serif; font-size: 32px; letter-spacing: 2px; fill: ${CREAM_MUTED}; }
      .badge { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 24px; font-weight: 700; fill: ${CREAM_MUTED}; }
      .arrow { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 24px; font-weight: 700; letter-spacing: 3px; fill: ${TERRACOTA}; }
    </style>
    <rect width="${W}" height="${H}" fill="${BG}"/>
    <rect x="70" y="88" width="70" height="6" fill="${TERRACOTA}"/>
    <text x="70" y="76" class="eyebrow">${esc(eyebrow)}</text>
    ${quoteMark ? `<text x="68" y="${startY - 120}" class="quote">&#8220;</text>` : ''}
    <text text-anchor="middle" class="headline">${textSpans}</text>
    ${footer ? `<text x="${showArrow ? 70 : W / 2}" y="${H - 190}" text-anchor="${showArrow ? 'start' : 'middle'}" class="footer">${esc(footer)}</text>` : ''}
    ${badge ? `<text x="${W - 70}" y="76" text-anchor="end" class="badge">${esc(badge)}</text>` : ''}
    ${showArrow ? `<text x="${W - 70}" y="${H - 190}" text-anchor="end" class="arrow">ARRASTE &#8594;</text>` : ''}
  </svg>`;
}

const slides = [
  {
    name: '01-capa',
    eyebrow: 'FAMÍLIA HORIZONTE · T1E30',
    lines: ['Duas horas só', 'nossas'],
    badge: '1/5',
    showArrow: true,
  },
  {
    name: '02-cognitivo',
    eyebrow: 'COGNITIVO',
    lines: ['Aqui a mente', 'também descansa.'],
    footer: 'Foco na respiração, não na lista de tarefas.',
    badge: '2/5',
    showArrow: true,
  },
  {
    name: '03-cardio',
    eyebrow: 'CARDIO',
    lines: ['O fôlego que sobra', 'pro resto do dia.'],
    footer: 'Vinte minutos e o dia fica mais leve.',
    badge: '3/5',
    showArrow: true,
  },
  {
    name: '04-forca',
    eyebrow: 'FORÇA',
    lines: ['Força não é', 'sobre estética.'],
    footer: 'É sobre aguentar a correria do dia.',
    badge: '4/5',
    showArrow: true,
  },
  {
    name: '05-fechamento',
    eyebrow: 'OLÁ EXPERIENCE',
    lines: ['Duas horas só', 'deles, toda semana.'],
    footer: 'Olá Experience — cada família, uma jornada.',
    badge: '5/5',
    showArrow: false,
  },
];

async function main() {
  const logoW = 220;
  const logoMeta = await sharp(LOGO_PATH).metadata();
  const logoH = Math.round((logoW * logoMeta.height) / logoMeta.width);
  const logoBuf = await sharp(LOGO_PATH).resize(logoW).toBuffer();

  for (const s of slides) {
    const svg = Buffer.from(slideSvg(s));
    const outPath = path.join(OUT_DIR, `${s.name}.png`);
    await sharp({ create: { width: W, height: H, channels: 3, background: BG } })
      .composite([
        { input: svg, top: 0, left: 0 },
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
