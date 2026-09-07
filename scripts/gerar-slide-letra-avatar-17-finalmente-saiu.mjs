// Slide 05 do carrossel do T1E16: letra completa de "Isso ainda vai dar
// certo" com o retrato circular do Zai (mesmo padrao de
// adicionar-avatar-carrossel-*.mjs dos episodios anteriores).
import path from 'path';
import sharp from 'sharp';

const SRC = path.resolve('INSTAGRAM OLÁ/Temporada Jornada Olá/Temporada 1/T1E16-finalmente-saiu-postado-07-09-2026/arte-bruta/17-finalmente-saiu-raw.png');
const OUT = path.resolve('INSTAGRAM OLÁ/Temporada Jornada Olá/Temporada 1/T1E16-finalmente-saiu-postado-07-09-2026/carrossel/05-letra.png');
const LOGO_PATH = path.resolve('INSTAGRAM OLÁ/conteudo-inicial/marca-ola-experience-caminho-transparente.png');

const W = 1080, H = 1080;
const BG = '#3B4A2A'; // oliva
const CREAM = '#F3E9D8';
const CREAM_MUTED = '#C9C2AE';
const TERRACOTA = '#C97B4A';

const AVATAR_SIZE = 100;
const AVATAR_LEFT = 70;
const AVATAR_TOP = 24;

// Caixa de rosto conferida a olho na arte 1536x1024 (17-finalmente-saiu-raw.png,
// regenerada em 07/09/2026 com os pijamas fofos — posicao mudou da versao anterior).
const FACE_BOX = { left: 465, top: 140, size: 235 };

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

// Letra condensada (sem repetir o refrao pela 2a vez) pra caber legivel num
// slide so. Linhas de refrao marcadas com destaque:true pra usar a cor
// terracota e diferenciar visualmente de verso.
const LETRA = [
  { t: 'Eu não sei o dia certo' },
  { t: 'Não sei a hora, nem sei como' },
  { t: 'Mas eu sinto uma certeza' },
  { t: 'Que não cabe no peito sozinho' },
  { t: '' },
  { t: 'Tem noite que eu não durmo' },
  { t: 'Tem sonho que ainda dói' },
  { t: 'Mas toda vez que eu erro um acorde' },
  { t: 'Uma voz me diz: "continua, depois"' },
  { t: '' },
  { t: 'Isso ainda vai dar certo', d: true },
  { t: 'Pra quem segura e não solta a mão', d: true },
  { t: 'Pra quem chora e ainda assim agradece', d: true },
  { t: 'Pra quem cai e se levanta, então', d: true },
  { t: 'Eu não sei o caminho inteiro', d: true },
  { t: 'Só sei que eu não ando só', d: true },
  { t: '' },
  { t: 'E se hoje não der certo' },
  { t: 'Amanhã eu tento outra vez' },
  { t: 'A fé não promete um caminho fácil' },
  { t: 'Promete que eu não ando só nele' },
];

function buildSvg() {
  const eyebrowX = AVATAR_LEFT + AVATAR_SIZE + 22;
  const titleY = AVATAR_TOP + AVATAR_SIZE / 2 - 6;
  const subtitleY = AVATAR_TOP + AVATAR_SIZE / 2 + 26;

  const lyricsTop = AVATAR_TOP + AVATAR_SIZE + 56;
  const lineHeight = 34;
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
      .lyricVerso { font-family: 'Georgia', 'Times New Roman', serif; font-size: 25px; fill: ${CREAM}; }
      .lyricRefrao { font-family: 'Georgia', 'Times New Roman', serif; font-size: 25px; font-weight: 700; font-style: italic; fill: ${TERRACOTA}; }
      .badge { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 24px; font-weight: 700; fill: ${CREAM_MUTED}; }
    </style>
    <rect width="${W}" height="${H}" fill="${BG}"/>
    <text x="${eyebrowX}" y="${titleY}" class="eyebrow">ZAI, 15 ANOS</text>
    <text x="${eyebrowX}" y="${subtitleY}" class="subtitle">"Isso ainda vai dar certo"</text>
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
