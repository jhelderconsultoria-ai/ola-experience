// Certificado de conquista do "Mapa do Hoje" — formato Stories (1080x1920).
// Zero digitacao: espaco em branco pra familia escrever o nome a mao (papel/caneta na tela).
import path from 'path';
import sharp from 'sharp';

const LOGO_PATH = path.resolve('INSTAGRAM OLÁ/conteudo-inicial/marca-ola-experience-caminho-transparente.png');
const OUT = path.resolve('docs/mapa-do-hoje/img/certificado-mapa-do-hoje.png');

const W = 1080, H = 1920;
const CREAM = '#F3E9D8';
const TERRACOTA = '#C97B4A';
const BG = '#1A3C30';
const BG_ESCURO = '#10241c';

const pilares = [
  { emoji: '🥕', nome: 'Alimentação' },
  { emoji: '🤸', nome: 'Cognitivo' },
  { emoji: '🧘', nome: 'Emocional' },
  { emoji: '❤️', nome: 'Cardio' },
  { emoji: '💪', nome: 'Força' },
  { emoji: '💰', nome: 'Bolso' },
];

function pilaresRow() {
  // Circulos (raio 58) precisam caber dentro da borda interna (x: 80 a 1000),
  // com folga — por isso o intervalo usavel comeca/termina mais pra dentro.
  const total = pilares.length;
  const startX = 160;
  const endX = 920;
  const spacing = (endX - startX) / (total - 1);
  return pilares.map((p, i) => {
    const cx = startX + i * spacing;
    return `
      <circle cx="${cx}" cy="1000" r="58" fill="none" stroke="${TERRACOTA}" stroke-width="3"/>
      <text x="${cx}" y="1020" text-anchor="middle" font-size="52">${p.emoji}</text>
    `;
  }).join('');
}

async function main() {
  const logoW = 200;
  const logoMeta = await sharp(LOGO_PATH).metadata();
  const logoH = Math.round((logoW * logoMeta.height) / logoMeta.width);
  const logoBuf = await sharp(LOGO_PATH).resize(logoW).toBuffer();

  const svg = `
  <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <style>
      .eyebrow { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 30px; font-weight: 700; letter-spacing: 6px; fill: ${TERRACOTA}; }
      .titulo { font-family: 'Georgia', 'Times New Roman', serif; font-size: 84px; font-weight: 700; fill: ${CREAM}; }
      .subtitulo { font-family: 'Georgia', 'Times New Roman', serif; font-size: 38px; fill: ${CREAM}; opacity: .9; }
      .label { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 26px; font-weight: 700; letter-spacing: 3px; fill: ${TERRACOTA}; }
      .rodape { font-family: 'Georgia', 'Times New Roman', serif; font-style: italic; font-size: 30px; fill: ${CREAM}; opacity: .75; }
    </style>
    <rect width="${W}" height="${H}" fill="${BG}"/>
    <rect x="60" y="60" width="${W - 120}" height="${H - 120}" fill="none" stroke="${TERRACOTA}" stroke-width="3"/>
    <rect x="80" y="80" width="${W - 160}" height="${H - 160}" fill="none" stroke="${TERRACOTA}" stroke-width="1" opacity="0.5"/>

    <text x="540" y="230" text-anchor="middle" class="eyebrow">FAMÍLIA HORIZONTE · OLÁ EXPERIENCE</text>

    <text x="540" y="370" text-anchor="middle" class="titulo">Certificado</text>
    <text x="540" y="450" text-anchor="middle" class="titulo">de Conquista</text>

    <text x="540" y="560" text-anchor="middle" class="subtitulo">completou o Mapa do Hoje</text>
    <text x="540" y="610" text-anchor="middle" class="subtitulo">6 dias. 6 pequenos começos.</text>

    <text x="540" y="880" text-anchor="middle" class="label">OS 6 PILARES</text>
    ${pilaresRow()}

    <text x="540" y="1220" text-anchor="middle" class="label">NOME DA FAMÍLIA</text>
    <line x1="180" y1="1340" x2="900" y2="1340" stroke="${CREAM}" stroke-width="3" stroke-dasharray="14 14" opacity="0.6"/>

    <text x="540" y="1720" text-anchor="middle" class="rodape">Olá Experience — cada família, uma jornada.</text>
  </svg>`;

  await sharp({ create: { width: W, height: H, channels: 3, background: BG } })
    .composite([
      { input: Buffer.from(svg), top: 0, left: 0 },
      { input: logoBuf, top: H - logoH - 60, left: Math.round((W - logoW) / 2) },
    ])
    .png()
    .toFile(OUT);

  console.log('SAVED', OUT);
}

main().catch((e) => {
  console.error('FATAL', e);
  process.exit(1);
});
