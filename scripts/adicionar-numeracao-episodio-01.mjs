// Gera a versao final do episodio 1 ja no formato 4:5 (1080x1350) que o
// Instagram realmente publica — a fonte original (1003x1568) e mais alta
// que 4:5 e o IG corta automaticamente pro topo/rodape, o que apagava a
// logo e o selo. Aqui a arte inteira e encaixada (sem cortes) dentro do
// quadro 4:5, com barras verde-floresta nas laterais, e so entao o selo
// "FAMÍLIA HORIZONTE · EPISÓDIO 01" e adicionado no mesmo padrao visual
// das capas dos episodios 02 e 03.
import path from 'path';
import sharp from 'sharp';

const SRC = path.resolve('INSTAGRAM OLÁ/Temporada Jornada Olá/Temporada 1/T1E00-chamada/arte-bruta/01-familia-ola-apresentacao-marca-v3.png');
const OUT = path.resolve('INSTAGRAM OLÁ/Temporada Jornada Olá/Temporada 1/T1E00-chamada/arte-bruta/01-familia-ola-apresentacao-episodio.png');

const W = 1080, H = 1350; // 4:5 — proporcao maxima em altura que o Instagram aceita no feed
const BG = '#1A3C30';
const TERRACOTA = '#C97B4A';

async function main() {
  const src = await sharp(SRC).metadata();
  const scale = H / src.height;
  const fitW = Math.round(src.width * scale);
  const offsetX = Math.round((W - fitW) / 2);

  const resized = await sharp(SRC).resize(fitW, H).toBuffer();

  const svgOverlay = `
  <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="top" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#000000" stop-opacity="0.45"/>
        <stop offset="1" stop-color="#000000" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <rect x="${offsetX}" y="0" width="${fitW}" height="130" fill="url(#top)"/>
    <style>
      .eyebrow { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 26px; font-weight: 700; letter-spacing: 5px; fill: ${TERRACOTA}; }
    </style>
    <text x="${offsetX + 60}" y="66" class="eyebrow">FAMÍLIA HORIZONTE · EPISÓDIO 01</text>
    <rect x="${offsetX + 60}" y="78" width="70" height="6" fill="${TERRACOTA}"/>
  </svg>`;

  await sharp({ create: { width: W, height: H, channels: 3, background: BG } })
    .composite([
      { input: resized, top: 0, left: offsetX },
      { input: Buffer.from(svgOverlay), top: 0, left: 0 },
    ])
    .png()
    .toFile(OUT);

  console.log('SAVED', OUT, { fitW, offsetX });
}

main().catch((e) => {
  console.error('FATAL', e);
  process.exit(1);
});
