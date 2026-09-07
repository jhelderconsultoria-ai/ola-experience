// Capa fotografica do carrossel do episodio T1E14 (ninguem queria parar de jogar).
// PADRAO FIXO DE CAPA — aprovado pelo Jorge em 07/09/2026, ver `contexto-dinamico.md`
// (Notas Tecnicas). Usar este mesmo layout em todo gerar-capa-carrossel-*.mjs novo:
//   - Barra verde SOLIDA no topo: largura total, 100px de altura (eyebrow 26px +
//     tracinho de destaque + badge de pagina).
//   - Barra verde SOLIDA embaixo: largura total, 260px de altura (headline 38px,
//     2 linhas, line-height 44 + logo Ola 180px de largura + "ARRASTE"). O
//     headline SEMPRE fica dentro dessa faixa, nunca em cima da cena.
//   - A foto ocupa so a faixa do meio (1080 x 720) — fit:'inside', nunca corta
//     personagem, com pequena margem verde lateral se a proporcao nao bater exato.
import path from 'path';
import sharp from 'sharp';

const SRC = path.resolve('INSTAGRAM OLÁ/Temporada Jornada Olá/Temporada 1/T1E14-ninguem-queria-parar/arte-bruta/15-ninguem-queria-parar-raw.png');
const LOGO_PATH = path.resolve('INSTAGRAM OLÁ/conteudo-inicial/marca-ola-experience-caminho-transparente.png');
const OUT = path.resolve('INSTAGRAM OLÁ/Temporada Jornada Olá/Temporada 1/T1E14-ninguem-queria-parar/carrossel/01-capa.png');

const W = 1080, H = 1080;
const CREAM = '#F3E9D8';
const TERRACOTA = '#C97B4A';
const BG = '#1A3C30';

const TOP_BAR = 100;
const BOTTOM_BAR = 260;
const PHOTO_BAND_H = H - TOP_BAR - BOTTOM_BAR; // 640

async function main() {
  const resized = await sharp(SRC)
    .resize(W, PHOTO_BAND_H, { fit: 'inside' })
    .toBuffer();
  const resizedMeta = await sharp(resized).metadata();
  const photoTop = TOP_BAR + Math.round((PHOTO_BAND_H - resizedMeta.height) / 2);
  const photoLeft = Math.round((W - resizedMeta.width) / 2);

  const canvas = await sharp({
    create: { width: W, height: H, channels: 3, background: BG },
  })
    .composite([{ input: resized, top: photoTop, left: photoLeft }])
    .png()
    .toBuffer();

  const logoW = 180;
  const logoMeta = await sharp(LOGO_PATH).metadata();
  const logoH = Math.round((logoW * logoMeta.height) / logoMeta.width);
  const logoBuf = await sharp(LOGO_PATH).resize(logoW).toBuffer();

  const svgOverlay = `
  <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <style>
      .eyebrow { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 26px; font-weight: 700; letter-spacing: 5px; fill: ${TERRACOTA}; }
      .headline { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 38px; font-weight: 700; fill: ${CREAM}; }
      .badge { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 24px; font-weight: 700; fill: ${CREAM}; }
      .arrow { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 24px; font-weight: 700; letter-spacing: 3px; fill: ${TERRACOTA}; }
    </style>
    <rect x="0" y="0" width="${W}" height="${TOP_BAR}" fill="${BG}"/>
    <rect x="0" y="${H - BOTTOM_BAR}" width="${W}" height="${BOTTOM_BAR}" fill="${BG}"/>
    <rect x="70" y="88" width="70" height="6" fill="${TERRACOTA}"/>
    <text x="70" y="76" class="eyebrow">FAMÍLIA HORIZONTE · T1E14</text>
    <text x="${W - 70}" y="76" text-anchor="end" class="badge">1/4</text>
    <text x="50%" y="${H - BOTTOM_BAR + 55}" text-anchor="middle" class="headline">
      <tspan x="50%" dy="0">Ninguém queria</tspan>
      <tspan x="50%" dy="44">parar de jogar</tspan>
    </text>
    <text x="${W - 70}" y="${H - 34}" text-anchor="end" class="arrow">ARRASTE &#8594;</text>
  </svg>`;

  await sharp(canvas)
    .composite([
      { input: Buffer.from(svgOverlay), top: 0, left: 0 },
      { input: logoBuf, top: H - logoH - 24, left: Math.round((W - logoW) / 2) },
    ])
    .png()
    .toFile(OUT);

  console.log('SAVED', OUT);
}

main().catch((e) => {
  console.error('FATAL', e);
  process.exit(1);
});
