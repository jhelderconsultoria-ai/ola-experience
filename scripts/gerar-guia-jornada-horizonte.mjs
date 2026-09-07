// Arte do material gratuito "Guia da Jornada Horizonte — 5 primeiros
// passos pra sua família" (campanha pré-lançamento, arquivada por enquanto —
// ver business/campanhas/CAMPANHA PRÉ LANÇAMENTO INSTAGRAM/status.md).
// v2 (07/09/2026): cada pilar ganhou a voz de um personagem da Família
// Horizonte (Lu, Zai, Nilo, Nori, Thor) — cena rápida + citação (ou, no
// caso do Thor, um gesto, já que ele não fala) — pra ficar mais rico que
// um template genérico de dica. 8 páginas em formato retrato (1080x1350).
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const OUT_DIR = path.resolve('business/campanhas/CAMPANHA PRÉ LANÇAMENTO INSTAGRAM/materiais/guia-jornada-horizonte/arte');
fs.mkdirSync(OUT_DIR, { recursive: true });

const LOGO_CLARO = path.resolve('INSTAGRAM OLÁ/conteudo-inicial/marca-ola-experience-caminho-transparente.png');
const LOGO_ESCURO = path.resolve('INSTAGRAM OLÁ/conteudo-inicial/marca-ola-experience-caminho-escura.png');
const W = 1080, H = 1350;

const LOGO_ESCURO_PALETAS = new Set(['cremeClaro']);

const PALETAS = {
  florestaEscuro: { bg: '#1A3C30', texto: '#F3E9D8', textoMudo: '#C9C2AE', destaque: '#C97B4A', boxBg: '#234A3B' },
  terracotaEscuro: { bg: '#6B3820', texto: '#F3E9D8', textoMudo: '#E3C9B4', destaque: '#1A3C30', boxBg: '#7C4529' },
  cremeClaro: { bg: '#F3E9D8', texto: '#1A3C30', textoMudo: '#6B5D4A', destaque: '#C97B4A', boxBg: '#E8DCC6' },
  oliva: { bg: '#3B4A2A', texto: '#F3E9D8', textoMudo: '#C9C2AE', destaque: '#C97B4A', boxBg: '#465635' },
};

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function pageSvg({ eyebrow, emoji, cena, headline, quote, gesture, box, footer, emphasis, badge, palette }) {
  const p = PALETAS[palette];
  let cursorY = 300;

  let cenaSvg = '';
  if (cena) {
    cenaSvg = `<text x="90" y="${cursorY}" class="cena">${esc(cena)}</text>`;
    cursorY += 70;
  }

  const headLH = 56;
  const headSpans = headline
    .map((l, i) => `<tspan x="90" y="${cursorY + i * headLH}">${esc(l)}</tspan>`)
    .join('');
  cursorY += headline.length * headLH + 55;

  let quoteSvg = '';
  if (quote) {
    const qLH = 40;
    const qStartY = cursorY + 60;
    const qSpans = quote.lines
      .map((l, i) => `<tspan x="130" y="${qStartY + i * qLH}">${esc(l)}</tspan>`)
      .join('');
    quoteSvg = `
      <text x="88" y="${cursorY + 55}" class="quoteMark">&#8220;</text>
      <text class="quoteText">${qSpans}</text>
      <text x="130" y="${qStartY + quote.lines.length * qLH + 34}" class="quoteAttr">${esc(quote.attr)}</text>`;
    cursorY = qStartY + quote.lines.length * qLH + 34 + 55;
  }

  let gestureSvg = '';
  if (gesture) {
    const gLH = 38;
    const gStartY = cursorY + 34;
    const gSpans = gesture.lines
      .map((l, i) => `<tspan x="90" y="${gStartY + i * gLH}">${esc(l)}</tspan>`)
      .join('');
    gestureSvg = `
      <text x="90" y="${cursorY}" class="gestureLabel">${esc(gesture.label)}</text>
      <text class="gestureText">${gSpans}</text>`;
    cursorY = gStartY + gesture.lines.length * gLH + 50;
  }

  let boxSvg = '';
  if (box) {
    const boxTop = cursorY;
    const boxLH = 42;
    const boxH = 90 + box.lines.length * boxLH;
    const boxSpans = box.lines
      .map((l, i) => `<tspan x="120" y="${boxTop + 70 + i * boxLH}">${esc(l)}</tspan>`)
      .join('');
    boxSvg = `
      <rect x="90" y="${boxTop}" width="${W - 180}" height="${boxH}" fill="${p.boxBg}" rx="12"/>
      <text x="120" y="${boxTop + 42}" class="boxLabel">${esc(box.label)}</text>
      <text class="boxText">${boxSpans}</text>`;
  }

  let emphasisSvg = '';
  if (emphasis) {
    emphasisSvg = `<text x="90" y="${H - 260}" class="emphasis">${esc(emphasis)}</text>`;
  }

  return `
  <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <style>
      .eyebrow { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 24px; font-weight: 700; letter-spacing: 4px; fill: ${p.destaque}; }
      .emoji { font-size: 30px; }
      .cena { font-family: 'Georgia', 'Times New Roman', serif; font-style: italic; font-size: 26px; fill: ${p.textoMudo}; }
      .headline { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 46px; font-weight: 700; fill: ${p.texto}; }
      .quoteMark { font-family: 'Georgia', 'Times New Roman', serif; font-size: 110px; fill: ${p.destaque}; opacity: 0.5; }
      .quoteText { font-family: 'Georgia', 'Times New Roman', serif; font-style: italic; font-size: 32px; fill: ${p.texto}; }
      .quoteAttr { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 20px; font-weight: 700; letter-spacing: 2px; fill: ${p.destaque}; }
      .gestureLabel { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 20px; font-weight: 700; letter-spacing: 2px; fill: ${p.destaque}; }
      .gestureText { font-family: 'Georgia', 'Times New Roman', serif; font-style: italic; font-size: 30px; fill: ${p.texto}; }
      .boxLabel { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 20px; font-weight: 700; letter-spacing: 2px; fill: ${p.destaque}; }
      .boxText { font-family: 'Georgia', 'Times New Roman', serif; font-size: 29px; fill: ${p.texto}; }
      .emphasis { font-family: 'Georgia', 'Times New Roman', serif; font-style: italic; font-size: 32px; fill: ${p.destaque}; }
      .footer { font-family: 'Georgia', 'Times New Roman', serif; font-size: 24px; fill: ${p.textoMudo}; }
      .badge { font-family: 'Arial', 'Helvetica', sans-serif; font-size: 22px; font-weight: 700; fill: ${p.textoMudo}; }
    </style>
    <rect width="${W}" height="${H}" fill="${p.bg}"/>
    <circle cx="${W - 40}" cy="${H - 60}" r="260" fill="${p.destaque}" opacity="0.06"/>
    <rect x="90" y="112" width="70" height="6" fill="${p.destaque}"/>
    <text x="90" y="100" class="eyebrow">${esc(eyebrow)}</text>
    ${emoji ? `<text x="${W - 130}" y="106" text-anchor="end" class="emoji">${emoji}</text>` : ''}
    <text x="${W - 90}" y="100" text-anchor="end" class="badge">${esc(badge)}</text>
    ${cenaSvg}
    <text class="headline">${headSpans}</text>
    ${quoteSvg}
    ${gestureSvg}
    ${boxSvg}
    ${emphasisSvg}
    ${footer ? `<text x="90" y="${H - 90}" class="footer">${esc(footer)}</text>` : ''}
  </svg>`;
}

const PAGES = [
  {
    name: '01-capa',
    palette: 'florestaEscuro',
    badge: '1/8',
    eyebrow: 'OLÁ EXPERIENCE',
    headline: ['Guia da Jornada', 'Horizonte'],
    box: { label: 'O QUE VOCÊ VAI ENCONTRAR', lines: ['5 primeiros passos — e 5 vozes', 'da Família Horizonte — pra', 'sua própria família.'] },
    footer: 'Olá Experience — cada família, uma jornada.',
  },
  {
    name: '02-abertura',
    palette: 'cremeClaro',
    badge: '2/8',
    eyebrow: 'ANTES DE COMEÇAR',
    headline: ['Não julgamos a rotina.', 'A gente cria', 'possibilidades.'],
    box: { label: 'SOBRE ESTE GUIA', lines: ['Não é um plano, nem uma lista', 'de tarefas. A Lu, o Nilo, o Zai,', 'a Nori e o Thor dividem com', 'você um pedaço de como cada', 'um vive os 5 pilares em casa.'] },
    emphasis: '“E se a gente fosse descobrir?”',
  },
  {
    name: '03-alimentacao',
    palette: 'terracotaEscuro',
    badge: '3/8',
    eyebrow: 'PILAR 1 DE 5 · ALIMENTAÇÃO',
    emoji: '🥕',
    cena: 'Na cozinha, domingo à noite.',
    headline: ['Qual foi a última vez', 'que a família comeu', 'junta, sem tela?'],
    quote: { lines: ['Se a gente esperar sobrar', 'tempo, a gente não', 'começa nunca.'], attr: 'LU, MÃE' },
    box: { label: 'PRIMEIRO PASSO DESTA SEMANA', lines: ['Escolham uma refeição —', 'qualquer uma — pra sentar', 'juntos, sem tela, sem pressa.'] },
  },
  {
    name: '04-cognitivo',
    palette: 'oliva',
    badge: '4/8',
    eyebrow: 'PILAR 2 DE 5 · COGNITIVO',
    emoji: '🤸',
    cena: 'No quarto do Zai, depois da escola.',
    headline: ['Quando foi a última vez', 'que vocês aprenderam', 'algo só por curiosidade?'],
    quote: { lines: ['Eu vou, mas posso escolher', 'uma parte do roteiro?'], attr: 'ZAI, 15 ANOS' },
    box: { label: 'PRIMEIRO PASSO DESTA SEMANA', lines: ['Escolham uma pergunta sem', 'resposta pronta e descubram', 'a resposta juntos.'] },
  },
  {
    name: '05-cardio',
    palette: 'florestaEscuro',
    badge: '5/8',
    eyebrow: 'PILAR 3 DE 5 · CARDIO',
    emoji: '❤',
    cena: 'Numa trilha qualquer, sábado de manhã.',
    headline: ['Seu corpo lembra a', 'última vez que se moveu', 'só por prazer?'],
    quote: { lines: ['Vamos começar pequeno e', 'ver onde isso leva.'], attr: 'NILO, PAI' },
    box: { label: 'PRIMEIRO PASSO DESTA SEMANA', lines: ['Troquem 10 minutos de tela', 'por uma volta perto de casa,', 'no ritmo de quem for mais devagar.'] },
  },
  {
    name: '06-forca',
    palette: 'terracotaEscuro',
    badge: '6/8',
    eyebrow: 'PILAR 4 DE 5 · FORÇA',
    emoji: '💪',
    cena: 'No parquinho, sem ninguém observando de fora.',
    headline: ['Que tipo de força sua', 'família já usa todo dia,', 'sem perceber?'],
    quote: { lines: ['E se a gente fosse tentar,', 'só pra ver o que acontece?'], attr: 'NORI, 8 ANOS' },
    box: { label: 'PRIMEIRO PASSO DESTA SEMANA', lines: ['Notem e digam em voz alta', 'quando alguém da casa', '"aguentou" algo difícil.'] },
  },
  {
    name: '07-bolso',
    palette: 'oliva',
    badge: '7/8',
    eyebrow: 'PILAR 5 DE 5 · BOLSO',
    emoji: '💰',
    cena: 'Debaixo da mesinha de centro, alheio à correria.',
    headline: ['O tempo da família', 'também é um recurso —', 'onde ele anda mais gasto?'],
    gesture: { label: 'O QUE O THOR ENSINA SEM FALAR', lines: ['Ele não guarda dinheiro.', 'Guarda atenção — sempre por', 'perto de quem tem menos', 'tempo naquele dia.'] },
    box: { label: 'PRIMEIRO PASSO DESTA SEMANA', lines: ['Separem 15 minutos pra olhar', 'juntos a agenda da semana', 'seguinte, sem pressa.'] },
  },
  {
    name: '08-fechamento',
    palette: 'florestaEscuro',
    badge: '8/8',
    eyebrow: 'OLÁ EXPERIENCE',
    headline: ['Nenhum passo aqui', 'promete transformar', 'sua rotina da noite pro dia.'],
    box: { label: 'IMPORTANTE', lines: ['Este guia é reflexivo — não é', 'orientação técnica nem substitui', 'acompanhamento profissional.'] },
    emphasis: 'Lu, Nilo, Zai, Nori e Thor também estão nessa — um passo de cada vez.',
    footer: '@olaexperienceoficial · Olá Experience — cada família, uma jornada.',
  },
];

async function main() {
  for (const page of PAGES) {
    const logoPath = LOGO_ESCURO_PALETAS.has(page.palette) ? LOGO_ESCURO : LOGO_CLARO;
    const logoW = 200;
    const logoMeta = await sharp(logoPath).metadata();
    const logoH = Math.round((logoW * logoMeta.height) / logoMeta.width);
    const logoBuf = await sharp(logoPath).resize(logoW).toBuffer();

    const svg = Buffer.from(pageSvg(page));
    const outPath = path.join(OUT_DIR, `${page.name}.png`);
    const bg = PALETAS[page.palette].bg;
    await sharp({ create: { width: W, height: H, channels: 3, background: bg } })
      .composite([
        { input: svg, top: 0, left: 0 },
        { input: logoBuf, top: H - logoH - 40, left: W - logoW - 90 },
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
