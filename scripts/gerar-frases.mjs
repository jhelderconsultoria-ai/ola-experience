// Gerador dos carrosseis de "Frase" da campanha de 60 dias (4x/semana, sem
// gerar imagem nova — so texto). Paletas variam a cada post (pedido do
// Jorge), sempre com o logo Ola no rodape no mesmo lugar/estilo dos episodios.
//
// Uso: node scripts/gerar-frases.mjs [id1 id2 ...]
// Sem argumentos, gera todas as frases da lista FRASES abaixo.
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const OUT_ROOT = path.resolve('INSTAGRAM OLÁ/Temporada Jornada Olá/Temporada 1/frases');
const LOGO_CLARO = path.resolve('INSTAGRAM OLÁ/conteudo-inicial/marca-ola-experience-caminho-transparente.png');
const LOGO_ESCURO = path.resolve('INSTAGRAM OLÁ/conteudo-inicial/marca-ola-experience-caminho-escura.png');
const W = 1080, H = 1080;

// Paletas de fundo claro usam o logo escuro (verde-floresta); fundos escuros
// usam o logo claro (creme/dourado) — senao o logo some no contraste errado.
const LOGO_ESCURO_PALETAS = new Set(['cremeClaro']);

// Paletas de marca — variam a cor de fundo, mantendo o logo e o contraste legivel.
const PALETAS = {
  florestaEscuro: { bg: '#1A3C30', texto: '#F3E9D8', textoMudo: '#C9C2AE', destaque: '#C97B4A' },
  terracotaEscuro: { bg: '#6B3820', texto: '#F3E9D8', textoMudo: '#E3C9B4', destaque: '#1A3C30' },
  cremeClaro: { bg: '#F3E9D8', texto: '#1A3C30', textoMudo: '#6B5D4A', destaque: '#C97B4A' },
  oliva: { bg: '#3B4A2A', texto: '#F3E9D8', textoMudo: '#C9C2AE', destaque: '#C97B4A' },
};

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function slideSvg({ eyebrow, lines, footer, badge, showArrow, palette }) {
  const p = PALETAS[palette];
  const lineHeight = 76;
  const startY = H / 2 - ((lines.length - 1) * lineHeight) / 2;
  const textSpans = lines
    .map((l, i) => `<tspan x="50%" y="${startY + i * lineHeight}">${esc(l)}</tspan>`)
    .join('');

  return `
  <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <style>
      .eyebrow { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 26px; font-weight: 700; letter-spacing: 5px; fill: ${p.destaque}; }
      .headline { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 52px; font-weight: 700; fill: ${p.texto}; }
      .footer { font-family: 'Georgia', 'Times New Roman', serif; font-size: 24px; letter-spacing: 2px; fill: ${p.textoMudo}; }
      .badge { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 24px; font-weight: 700; fill: ${p.textoMudo}; }
      .arrow { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 24px; font-weight: 700; letter-spacing: 3px; fill: ${p.destaque}; }
    </style>
    <rect width="${W}" height="${H}" fill="${p.bg}"/>
    <rect x="70" y="88" width="70" height="6" fill="${p.destaque}"/>
    <text x="70" y="76" class="eyebrow">${esc(eyebrow)}</text>
    <text text-anchor="middle" class="headline">${textSpans}</text>
    ${footer ? `<text x="${showArrow ? 70 : W / 2}" y="${H - 190}" text-anchor="${showArrow ? 'start' : 'middle'}" class="footer">${esc(footer)}</text>` : ''}
    ${badge ? `<text x="${W - 70}" y="76" text-anchor="end" class="badge">${esc(badge)}</text>` : ''}
    ${showArrow ? `<text x="${W - 70}" y="${H - 190}" text-anchor="end" class="arrow">ARRASTE &#8594;</text>` : ''}
  </svg>`;
}

// Cada frase: 3 slides (abertura, mensagem, fechamento). Eixo alterna
// dentro-de-casa / mundo-la-fora conforme o calendario da campanha.
const FRASES = [
  {
    id: '2026-09-07',
    eixo: 'dentro de casa',
    palette: 'terracotaEscuro',
    tema: 'Amor não se mede em atenção igual',
    slides: [
      { eyebrow: 'OLÁ EXPERIENCE', lines: ['Duas crianças.', 'Duas formas diferentes', 'de precisar de você.'], badge: '1/3', showArrow: true },
      { eyebrow: 'NA PRÁTICA', lines: ['Um pede colo.', 'Outro pede espaço.', 'Nenhum dos dois está errado.'], badge: '2/3', showArrow: true },
      { eyebrow: 'CADA FAMÍLIA, UMA JORNADA', lines: ['Presença não é dar', 'o mesmo pra todos.'], footer: 'É dar o que cada um precisa.', badge: '3/3', showArrow: false },
    ],
  },
  {
    id: '2026-09-09',
    eixo: 'mundo lá fora',
    palette: 'cremeClaro',
    tema: 'Comparação com a vida dos outros',
    slides: [
      { eyebrow: 'OLÁ EXPERIENCE', lines: ['A vida dos outros', 'parece sempre', 'mais organizada.'], badge: '1/3', showArrow: true },
      { eyebrow: 'NA PRÁTICA', lines: ['Ninguém posta a louça suja,', 'a bagunça do quarto,', 'o dia que não rendeu nada.'], badge: '2/3', showArrow: true },
      { eyebrow: 'CADA FAMÍLIA, UMA JORNADA', lines: ['Sua família não está', 'atrasada.'], footer: 'Só não está em vitrine.', badge: '3/3', showArrow: false },
    ],
  },
  {
    id: '2026-09-11',
    eixo: 'dentro de casa',
    palette: 'oliva',
    tema: 'Pais também erram',
    slides: [
      { eyebrow: 'OLÁ EXPERIENCE', lines: ['Você vai errar.', 'Seu filho também', 'vai ver você errar.'], badge: '1/3', showArrow: true },
      { eyebrow: 'NA PRÁTICA', lines: ['E tudo bem —', 'porque ele também aprende', 'que errar não é o fim de nada.'], badge: '2/3', showArrow: true },
      { eyebrow: 'CADA FAMÍLIA, UMA JORNADA', lines: ['Pais perfeitos', 'não existem.'], footer: 'Pais presentes, sim.', badge: '3/3', showArrow: false },
    ],
  },
  {
    id: '2026-09-12',
    eixo: 'mundo lá fora',
    palette: 'florestaEscuro',
    tema: 'Pressa e produtividade',
    slides: [
      { eyebrow: 'OLÁ EXPERIENCE', lines: ['A correria não pergunta', 'se você está pronto.'], badge: '1/3', showArrow: true },
      { eyebrow: 'NA PRÁTICA', lines: ['Dez minutos de presença', 'valem mais que um dia', 'inteiro de pressa sem sentido.'], badge: '2/3', showArrow: true },
      { eyebrow: 'CADA FAMÍLIA, UMA JORNADA', lines: ['Não precisa ser', 'tudo hoje.'], footer: 'Precisa ser real, aos poucos.', badge: '3/3', showArrow: false },
    ],
  },
];

async function gerarFrase(frase) {
  const outDir = path.join(OUT_ROOT, frase.id);
  fs.mkdirSync(outDir, { recursive: true });

  const logoPath = LOGO_ESCURO_PALETAS.has(frase.palette) ? LOGO_ESCURO : LOGO_CLARO;
  const logoW = 220;
  const logoMeta = await sharp(logoPath).metadata();
  const logoH = Math.round((logoW * logoMeta.height) / logoMeta.width);
  const logoBuf = await sharp(logoPath).resize(logoW).toBuffer();

  for (let i = 0; i < frase.slides.length; i++) {
    const slide = frase.slides[i];
    const svg = Buffer.from(slideSvg({ ...slide, palette: frase.palette }));
    const outPath = path.join(outDir, `0${i + 1}.png`);
    const bg = PALETAS[frase.palette].bg;
    await sharp({ create: { width: W, height: H, channels: 3, background: bg } })
      .composite([
        { input: svg, top: 0, left: 0 },
        { input: logoBuf, top: H - logoH - 24, left: Math.round((W - logoW) / 2) },
      ])
      .png()
      .toFile(outPath);
    console.log('OK', outPath);
  }
}

async function main() {
  const ids = process.argv.slice(2);
  const alvo = ids.length ? FRASES.filter((f) => ids.includes(f.id)) : FRASES;
  for (const frase of alvo) {
    await gerarFrase(frase);
  }
}

main().catch((e) => {
  console.error('FATAL', e);
  process.exit(1);
});
