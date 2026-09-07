// PROTOTIPO — pagina unica pra aprovar o novo estilo "postal do personagem"
// dos materiais por bloco: arte real do episodio como foto de fundo (full
// bleed no topo) + painel de texto solido embaixo com pergunta, citacao do
// personagem e primeiro passo. Se aprovado, vira o padrao dos materiais
// 1-4 do calendario (ver calendario-materiais.md).
import path from 'path';
import sharp from 'sharp';

const SRC = path.resolve('INSTAGRAM OLÁ/Temporada Jornada Olá/Temporada 1/T1E13-ainda-nao-saiu-postado-07-09-2026/arte-bruta/14-ainda-nao-saiu-raw.png');
const LOGO_PATH = path.resolve('INSTAGRAM OLÁ/conteudo-inicial/marca-ola-experience-caminho-transparente.png');
const OUT = path.resolve('business/campanhas/CAMPANHA PRÉ LANÇAMENTO INSTAGRAM/materiais/prototipo-postal-cognitivo.png');

const W = 1080, H = 1350;
const CREAM = '#F3E9D8';
const TERRACOTA = '#C97B4A';
const BG = '#3B4A2A'; // oliva, cor do bloco Cognitivo neste rascunho

const PHOTO_H = 640;

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

async function main() {
  const photo = await sharp(SRC).resize(W, PHOTO_H, { fit: 'cover', position: 'attention' }).toBuffer();

  const logoW = 190;
  const logoMeta = await sharp(LOGO_PATH).metadata();
  const logoH = Math.round((logoW * logoMeta.height) / logoMeta.width);
  const logoBuf = await sharp(LOGO_PATH).resize(logoW).toBuffer();

  const headline = ['Quando foi a última vez', 'que vocês aprenderam', 'algo só por curiosidade?'];
  const quoteLines = ['Eu vou, mas posso escolher', 'uma parte do roteiro?'];
  const stepLines = ['Escolham uma pergunta sem', 'resposta pronta e descubram', 'a resposta juntos.'];

  const sectionY = PHOTO_H + 90;
  const headSpans = headline.map((l, i) => `<tspan x="90" y="${sectionY + i * 48}">${esc(l)}</tspan>`).join('');
  const quoteBlockTop = sectionY + headline.length * 48 + 55;
  const quoteMarkY = quoteBlockTop + 80;
  const quoteSpans = quoteLines.map((l, i) => `<tspan x="130" y="${quoteBlockTop + 40 + i * 34}">${esc(l)}</tspan>`).join('');
  const attrY = quoteBlockTop + 40 + quoteLines.length * 34 + 26;
  const stepTop = attrY + 34;
  const stepH = 60 + stepLines.length * 36;
  const stepSpans = stepLines.map((l, i) => `<tspan x="120" y="${stepTop + 58 + i * 36}">${esc(l)}</tspan>`).join('');

  const svg = `
  <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <style>
      .tag { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 22px; font-weight: 700; letter-spacing: 3px; fill: ${CREAM}; }
      .badge { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 20px; font-weight: 700; fill: ${CREAM}; }
      .headline { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 44px; font-weight: 700; fill: ${CREAM}; }
      .quoteMark { font-family: 'Georgia', 'Times New Roman', serif; font-size: 100px; fill: ${TERRACOTA}; opacity: 0.55; }
      .quoteText { font-family: 'Georgia', 'Times New Roman', serif; font-style: italic; font-size: 30px; fill: ${CREAM}; }
      .quoteAttr { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 19px; font-weight: 700; letter-spacing: 2px; fill: ${TERRACOTA}; }
      .stepLabel { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 19px; font-weight: 700; letter-spacing: 2px; fill: ${TERRACOTA}; }
      .stepText { font-family: 'Georgia', 'Times New Roman', serif; font-size: 28px; fill: ${CREAM}; }
      .footer { font-family: 'Georgia', 'Times New Roman', serif; font-size: 22px; fill: #C9C2AE; }
    </style>
    <defs>
      <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${BG}" stop-opacity="0"/>
        <stop offset="1" stop-color="${BG}" stop-opacity="1"/>
      </linearGradient>
    </defs>
    <rect x="0" y="${PHOTO_H - 140}" width="${W}" height="140" fill="url(#fade)"/>
    <rect x="40" y="40" width="420" height="56" rx="28" fill="#00000055"/>
    <text x="66" y="76" class="tag">PILAR 2 DE 5 · COGNITIVO 🤸</text>
    <rect x="${W - 100}" y="40" width="60" height="56" rx="28" fill="#00000055"/>
    <text x="${W - 70}" y="76" text-anchor="middle" class="badge">2/8</text>
    <text class="headline">${headSpans}</text>
    <text x="88" y="${quoteMarkY}" class="quoteMark">&#8220;</text>
    <text class="quoteText">${quoteSpans}</text>
    <text x="130" y="${attrY}" class="quoteAttr">ZAI, 15 ANOS</text>
    <rect x="90" y="${stepTop}" width="${W - 180}" height="${stepH}" fill="#00000030" rx="12"/>
    <text x="120" y="${stepTop + 38}" class="stepLabel">PRIMEIRO PASSO DESTA SEMANA</text>
    <text class="stepText">${stepSpans}</text>
    <text x="90" y="${H - 40}" class="footer">Olá Experience — cada família, uma jornada.</text>
  </svg>`;

  await sharp({ create: { width: W, height: H, channels: 3, background: BG } })
    .composite([
      { input: photo, top: 0, left: 0 },
      { input: Buffer.from(svg), top: 0, left: 0 },
      { input: logoBuf, top: H - logoH - 40, left: W - logoW - 60 },
    ])
    .png()
    .toFile(OUT);

  console.log('SAVED', OUT);
}

main().catch((e) => {
  console.error('FATAL', e);
  process.exit(1);
});
