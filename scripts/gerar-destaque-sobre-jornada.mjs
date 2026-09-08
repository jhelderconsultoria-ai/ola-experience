// Gera os 6 frames de Story + 1 capa-conceito pro Destaque "Sobre a Jornada"
// (Squad Posicionamento Arcane, 08/09/2026). Mesmo sistema visual dos cards
// de Frase (SVG + sharp), formato vertical de Story (1080x1920).
//
// Uso: node scripts/gerar-destaque-sobre-jornada.mjs
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { pathToFileURL } from 'url';

const OUT_DIR = path.resolve('INSTAGRAM OLÁ/Temporada Jornada Olá/destaque-sobre-a-jornada');
const LOGO_CLARO = path.resolve('INSTAGRAM OLÁ/conteudo-inicial/marca-ola-experience-caminho-transparente.png');
const W = 1080, H = 1920;

const PALETA = { bg: '#1A3C30', texto: '#F3E9D8', textoMudo: '#C9C2AE', destaque: '#C97B4A' };

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function storySvg({ eyebrow, lines, footer, badge, fontSize = 64 }) {
  const p = PALETA;
  const lineHeight = fontSize + 20;
  const startY = H / 2 - ((lines.length - 1) * lineHeight) / 2;
  const textSpans = lines
    .map((l, i) => `<tspan x="50%" y="${startY + i * lineHeight}">${esc(l)}</tspan>`)
    .join('');

  return `
  <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <style>
      .eyebrow { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 30px; font-weight: 700; letter-spacing: 6px; fill: ${p.destaque}; }
      .headline { font-family: 'Arial', 'Helvetica', sans-serif; font-size: ${fontSize}px; font-weight: 700; fill: ${p.texto}; }
      .footer { font-family: 'Georgia', 'Times New Roman', serif; font-size: 34px; letter-spacing: 2px; fill: ${p.textoMudo}; }
      .badge { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 26px; font-weight: 700; fill: ${p.textoMudo}; }
    </style>
    <rect width="${W}" height="${H}" fill="${p.bg}"/>
    <rect x="80" y="130" width="80" height="7" fill="${p.destaque}"/>
    <text x="80" y="116" class="eyebrow">${esc(eyebrow)}</text>
    <text text-anchor="middle" class="headline">${textSpans}</text>
    ${footer ? `<text x="50%" y="${H - 260}" text-anchor="middle" class="footer">${esc(footer)}</text>` : ''}
    ${badge ? `<text x="${W - 80}" y="116" text-anchor="end" class="badge">${esc(badge)}</text>` : ''}
  </svg>`;
}

const FRAMES = [
  {
    file: '01-abertura.png',
    eyebrow: 'OLÁ EXPERIENCE',
    lines: ['Cada família,', 'uma jornada.'],
    badge: '1/6',
    fontSize: 76,
  },
  {
    file: '02-quem-ajudamos.png',
    eyebrow: 'SOBRE A JORNADA',
    lines: ['Ajudamos famílias', 'ocupadas a sair', 'do "depois".'],
    badge: '2/6',
    fontSize: 62,
  },
  {
    file: '03-pilares.png',
    eyebrow: 'PELOS 5 PILARES',
    lines: ['🚀 Alimentação', '🧠 Cognitivo', '❤️ Cardio', '💪 Força', '💰 Bolso'],
    badge: '3/6',
    fontSize: 56,
  },
  {
    file: '04-crenca.png',
    eyebrow: 'A GENTE ACREDITA',
    lines: ['Cansaço não é fraqueza.', 'É sinal de que ninguém', 'cuidou de si primeiro.'],
    badge: '4/6',
    fontSize: 54,
  },
  {
    file: '05-convite.png',
    eyebrow: 'A JORNADA REAL',
    lines: ['Acompanhe a', 'Família Horizonte,', 'episódio a episódio.'],
    badge: '5/6',
    fontSize: 60,
  },
  {
    file: '06-cta.png',
    eyebrow: 'VEM COM A GENTE',
    lines: ['Link na bio', '↓'],
    footer: 'Um domingo de cada vez.',
    badge: '6/6',
    fontSize: 72,
  },
];

async function gerarFrame(frame, logoBuf, logoW, logoH) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const svg = Buffer.from(storySvg(frame));
  const outPath = path.join(OUT_DIR, frame.file);
  await sharp({ create: { width: W, height: H, channels: 3, background: PALETA.bg } })
    .composite([
      { input: svg, top: 0, left: 0 },
      { input: logoBuf, top: H - logoH - 90, left: Math.round((W - logoW) / 2) },
    ])
    .png()
    .toFile(outPath);
  console.log('OK', outPath);
}

async function gerarCapaConceito(logoBuf, logoW, logoH) {
  // Capa do destaque: quadrada (Instagram recorta em círculo), palavra "JORNADA" + logo.
  const CW = 1080, CH = 1080;
  const svg = Buffer.from(`
  <svg width="${CW}" height="${CH}" xmlns="http://www.w3.org/2000/svg">
    <style>
      .word { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 92px; font-weight: 700; letter-spacing: 6px; fill: ${PALETA.texto}; }
    </style>
    <rect width="${CW}" height="${CH}" fill="${PALETA.bg}"/>
    <text x="50%" y="${CH / 2 - 40}" text-anchor="middle" class="word">JORNADA</text>
  </svg>`);
  const outPath = path.join(OUT_DIR, '00-capa-conceito.png');
  await sharp({ create: { width: CW, height: CH, channels: 3, background: PALETA.bg } })
    .composite([
      { input: svg, top: 0, left: 0 },
      { input: logoBuf, top: CH - logoH - 70, left: Math.round((CW - logoW) / 2) },
    ])
    .png()
    .toFile(outPath);
  console.log('OK', outPath);
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const logoW = 260;
  const logoMeta = await sharp(LOGO_CLARO).metadata();
  const logoH = Math.round((logoW * logoMeta.height) / logoMeta.width);
  const logoBuf = await sharp(LOGO_CLARO).resize(logoW).toBuffer();

  await gerarCapaConceito(logoBuf, logoW, logoH);
  for (const frame of FRAMES) {
    await gerarFrame(frame, logoBuf, logoW, logoH);
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((e) => {
    console.error('FATAL', e);
    process.exit(1);
  });
}
