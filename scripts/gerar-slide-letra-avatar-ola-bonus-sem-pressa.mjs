// Slide 05 do carrossel OLÁ BÔNUS: letra completa de "Sem Pressa" com o
// retrato circular do Zai (mesmo padrao de adicionar-avatar-carrossel-*.mjs).
import path from 'path';
import sharp from 'sharp';

const SRC = path.resolve('INSTAGRAM OLÁ/POSTAGENS EXTRAS/casa-na-montanha-sem-pressa/arte-bruta/close-zai-montanha-raw.png');
const OUT = path.resolve('INSTAGRAM OLÁ/POSTAGENS EXTRAS/casa-na-montanha-sem-pressa/carrossel/05-letra.png');
const LOGO_PATH = path.resolve('INSTAGRAM OLÁ/conteudo-inicial/marca-ola-experience-caminho-transparente.png');

const W = 1080, H = 1080;
const BG = '#3B4A2A'; // oliva
const CREAM = '#F3E9D8';
const CREAM_MUTED = '#C9C2AE';
const TERRACOTA = '#C97B4A';

const AVATAR_SIZE = 100;
const AVATAR_LEFT = 70;
const AVATAR_TOP = 24;

// Caixa de rosto conferida a olho na arte 941x1672 (close-zai-montanha-raw.png).
const FACE_BOX = { left: 250, top: 350, size: 500 };

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

// Letra completa de "Sem Pressa" (ZAI CANTOR/zai-poesias.md), com os dois
// refrãos — a musica e curta o suficiente pra caber inteira num slide so.
const LETRA = [
  { t: 'Eu não preciso correr' },
  { t: 'Pra provar que eu sou capaz' },
  { t: 'Ninguém aqui mede meu valor' },
  { t: 'Pelo tanto que eu já fiz' },
  { t: '' },
  { t: 'Sem pressa, sem pressa', d: true },
  { t: 'Eu cresço do meu jeito', d: true },
  { t: 'Sem pressa, sem pressa', d: true },
  { t: 'Vida é um passo, não é um salto', d: true },
  { t: '' },
  { t: 'Um dia eu ainda canto' },
  { t: 'Isso tudo em voz mais alta' },
  { t: 'Hoje eu só escrevo baixinho' },
  { t: 'E confio que isso não falta' },
  { t: '' },
  { t: 'Sem pressa, sem pressa', d: true },
  { t: 'Eu cresço do meu jeito', d: true },
  { t: 'Sem pressa, sem pressa', d: true },
  { t: 'Vida é um passo, não é um salto', d: true },
];

function buildSvg() {
  const eyebrowX = AVATAR_LEFT + AVATAR_SIZE + 22;
  const titleY = AVATAR_TOP + AVATAR_SIZE / 2 - 6;
  const subtitleY = AVATAR_TOP + AVATAR_SIZE / 2 + 26;

  const lyricsTop = AVATAR_TOP + AVATAR_SIZE + 76;
  const lineHeight = 40;
  const tspans = LETRA.map((l, i) => {
    const y = lyricsTop + i * lineHeight;
    const cls = l.d ? 'lyricRefrao' : 'lyricVerso';
    return `<text x="90" y="${y}" class="${cls}">${esc(l.t)}</text>`;
  }).join('\n');

  return `
  <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <style>
      .eyebrow { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 22px; font-weight: 700; letter-spacing: 3px; fill: ${TERRACOTA}; }
      .subtitle { font-family: 'Georgia', 'Times New Roman', serif; font-style: italic; font-size: 22px; fill: ${CREAM_MUTED}; }
      .lyricVerso { font-family: 'Georgia', 'Times New Roman', serif; font-size: 34px; fill: ${CREAM}; }
      .lyricRefrao { font-family: 'Georgia', 'Times New Roman', serif; font-size: 34px; font-weight: 700; font-style: italic; fill: ${TERRACOTA}; }
      .badge { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 24px; font-weight: 700; fill: ${CREAM_MUTED}; }
    </style>
    <rect width="${W}" height="${H}" fill="${BG}"/>
    <text x="${eyebrowX}" y="${titleY}" class="eyebrow">ZAI, 15 ANOS</text>
    <text x="${eyebrowX}" y="${subtitleY}" class="subtitle">"Sem Pressa"</text>
    <text x="${W - 70}" y="76" text-anchor="end" class="badge">5/6</text>
    ${tspans}
  </svg>`;
}

async function main() {
  const logoW = 200;
  const logoMeta = await sharp(LOGO_PATH).metadata();
  const logoH = Math.round((logoW * logoMeta.height) / logoMeta.width);
  const logoBuf = await sharp(LOGO_PATH).resize(logoW).toBuffer();

  const avatarBuf = await makeAvatar();
  const svg = Buffer.from(buildSvg());

  await sharp({ create: { width: W, height: H, channels: 3, background: BG } })
    .composite([
      { input: svg, top: 0, left: 0 },
      { input: avatarBuf, top: AVATAR_TOP, left: AVATAR_LEFT },
      { input: logoBuf, top: H - logoH - 24, left: Math.round((W - logoW) / 2) },
    ])
    .png()
    .toFile(OUT);

  console.log('OK', OUT);
}

main().catch((e) => {
  console.error('FATAL', e);
  process.exit(1);
});
