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
      .footer { font-family: 'Georgia', 'Times New Roman', serif; font-size: 32px; letter-spacing: 2px; fill: ${p.textoMudo}; }
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
  {
    id: '2026-09-14',
    eixo: 'dentro de casa',
    palette: 'terracotaEscuro',
    tema: 'Casa bagunçada não é casa mal cuidada',
    slides: [
      { eyebrow: 'OLÁ EXPERIENCE', lines: ['Uma casa bagunçada', 'não é uma casa', 'mal cuidada.'], badge: '1/3', showArrow: true },
      { eyebrow: 'NA PRÁTICA', lines: ['Livro aberto na mesa,', 'brinquedo no meio da sala —', 'é sinal de vida acontecendo.'], badge: '2/3', showArrow: true },
      { eyebrow: 'CADA FAMÍLIA, UMA JORNADA', lines: ['Casa de gente viva', 'não fica em ordem.'], footer: 'Fica em movimento.', badge: '3/3', showArrow: false },
    ],
  },
  {
    id: '2026-09-16',
    eixo: 'mundo lá fora',
    palette: 'cremeClaro',
    tema: 'Notificação não é urgência',
    slides: [
      { eyebrow: 'OLÁ EXPERIENCE', lines: ['Nem toda notificação', 'precisa de resposta', 'na hora.'], badge: '1/3', showArrow: true },
      { eyebrow: 'NA PRÁTICA', lines: ['O celular vibra.', 'A criança na sua frente', 'também está pedindo atenção.'], badge: '2/3', showArrow: true },
      { eyebrow: 'CADA FAMÍLIA, UMA JORNADA', lines: ['Presença não compete', 'com tela.'], footer: 'Ela só precisa de prioridade.', badge: '3/3', showArrow: false },
    ],
  },
  {
    id: '2026-09-18',
    eixo: 'dentro de casa',
    palette: 'oliva',
    tema: 'Cada um ajuda do seu jeito',
    slides: [
      { eyebrow: 'OLÁ EXPERIENCE', lines: ['Nem todo mundo ajuda', 'do mesmo jeito.', 'E tudo bem.'], badge: '1/3', showArrow: true },
      { eyebrow: 'NA PRÁTICA', lines: ['Um lava a louça.', 'Outro conta piada', 'no meio da bagunça.'], badge: '2/3', showArrow: true },
      { eyebrow: 'CADA FAMÍLIA, UMA JORNADA', lines: ['Cooperação não tem', 'um formato só.'], footer: 'Tem o formato de cada casa.', badge: '3/3', showArrow: false },
    ],
  },
  {
    id: '2026-09-19',
    eixo: 'mundo lá fora',
    palette: 'florestaEscuro',
    tema: 'Feed perfeito, vida real',
    slides: [
      { eyebrow: 'OLÁ EXPERIENCE', lines: ['O feed é editado.', 'A vida, não.'], badge: '1/3', showArrow: true },
      { eyebrow: 'NA PRÁTICA', lines: ['Ninguém filma', 'a segunda tentativa', 'de sair de casa a tempo.'], badge: '2/3', showArrow: true },
      { eyebrow: 'CADA FAMÍLIA, UMA JORNADA', lines: ['Sua versão real', 'já é suficiente.'], footer: 'Ninguém vive de rascunho editado.', badge: '3/3', showArrow: false },
    ],
  },
  {
    id: '2026-09-21',
    eixo: 'dentro de casa',
    palette: 'terracotaEscuro',
    tema: 'Ouvir sem resposta pronta',
    slides: [
      { eyebrow: 'OLÁ EXPERIENCE', lines: ['Às vezes seu filho', 'só quer ser ouvido.', 'Não corrigido.'], badge: '1/3', showArrow: true },
      { eyebrow: 'NA PRÁTICA', lines: ['Antes de explicar,', 'antes de resolver,', 'só escuta até o fim.'], badge: '2/3', showArrow: true },
      { eyebrow: 'CADA FAMÍLIA, UMA JORNADA', lines: ['Nem todo problema', 'pede solução na hora.'], footer: 'Alguns só pedem companhia.', badge: '3/3', showArrow: false },
    ],
  },
  {
    id: '2026-09-23',
    eixo: 'mundo lá fora',
    palette: 'cremeClaro',
    tema: 'Ritmo do trabalho não é ritmo de casa',
    slides: [
      { eyebrow: 'OLÁ EXPERIENCE', lines: ['O trabalho tem prazo.', 'A infância, não.'], badge: '1/3', showArrow: true },
      { eyebrow: 'NA PRÁTICA', lines: ['O e-mail pode esperar', 'cinco minutos.', 'A pergunta da sua filha, não.'], badge: '2/3', showArrow: true },
      { eyebrow: 'CADA FAMÍLIA, UMA JORNADA', lines: ['Levar o ritmo do escritório', 'pra dentro de casa cansa.'], footer: 'Casa tem o próprio compasso.', badge: '3/3', showArrow: false },
    ],
  },
  {
    id: '2026-09-25',
    eixo: 'dentro de casa',
    palette: 'oliva',
    tema: 'Elogiar o esforço, não só o resultado',
    slides: [
      { eyebrow: 'OLÁ EXPERIENCE', lines: ['A nota não conta', 'a história toda.'], badge: '1/3', showArrow: true },
      { eyebrow: 'NA PRÁTICA', lines: ['Ele tentou de novo', 'depois de errar três vezes.', 'Isso também merece elogio.'], badge: '2/3', showArrow: true },
      { eyebrow: 'CADA FAMÍLIA, UMA JORNADA', lines: ['Criança que aprende', 'a tentar de novo'], footer: 'Aprende mais que criança que só acerta.', badge: '3/3', showArrow: false },
    ],
  },
  {
    id: '2026-09-26',
    eixo: 'mundo lá fora',
    palette: 'florestaEscuro',
    tema: 'Curtir não é se importar',
    slides: [
      { eyebrow: 'OLÁ EXPERIENCE', lines: ['Um coração na tela', 'não substitui', 'uma pergunta de verdade.'], badge: '1/3', showArrow: true },
      { eyebrow: 'NA PRÁTICA', lines: ['"Como foi seu dia?"', 'vale mais', 'que qualquer curtida.'], badge: '2/3', showArrow: true },
      { eyebrow: 'CADA FAMÍLIA, UMA JORNADA', lines: ['Cuidado de verdade', 'não cabe num ícone.'], footer: 'Cabe numa conversa.', badge: '3/3', showArrow: false },
    ],
  },
  {
    id: '2026-09-28',
    eixo: 'dentro de casa',
    palette: 'terracotaEscuro',
    tema: 'Silêncio também é comunicação',
    slides: [
      { eyebrow: 'OLÁ EXPERIENCE', lines: ['Nem toda conversa', 'em família', 'precisa de palavras.'], badge: '1/3', showArrow: true },
      { eyebrow: 'NA PRÁTICA', lines: ['Um filme junto no sofá.', 'Ninguém fala muito.', 'Todo mundo está presente.'], badge: '2/3', showArrow: true },
      { eyebrow: 'CADA FAMÍLIA, UMA JORNADA', lines: ['Silêncio compartilhado', 'também é intimidade.'], footer: 'Nem tudo precisa virar assunto.', badge: '3/3', showArrow: false },
    ],
  },
  {
    id: '2026-09-30',
    eixo: 'mundo lá fora',
    palette: 'cremeClaro',
    tema: 'A pressa dos outros não é sua régua',
    slides: [
      { eyebrow: 'OLÁ EXPERIENCE', lines: ['O vizinho já viajou.', 'O colega já mudou de casa.', 'E a sua família?'], badge: '1/3', showArrow: true },
      { eyebrow: 'NA PRÁTICA', lines: ['Comparar o capítulo 3 da sua vida', 'com o capítulo 20', 'de outra família não é justo.'], badge: '2/3', showArrow: true },
      { eyebrow: 'CADA FAMÍLIA, UMA JORNADA', lines: ['Sua jornada tem', 'o tempo dela.'], footer: 'Não o tempo dos outros.', badge: '3/3', showArrow: false },
    ],
  },
  {
    id: '2026-09-06',
    eixo: 'dentro de casa',
    palette: 'terracotaEscuro',
    tema: 'A rotina também pode ter alegria',
    slides: [
      { eyebrow: 'OLÁ EXPERIENCE', lines: ['A rotina não é', 'inimiga da alegria.'], badge: '1/3', showArrow: true },
      { eyebrow: 'NA PRÁTICA', lines: ['O mesmo caminho pra escola,', 'a mesma música no carro —', 'vira ritual, não vira tédio.'], badge: '2/3', showArrow: true },
      { eyebrow: 'CADA FAMÍLIA, UMA JORNADA', lines: ['Repetição também', 'pode ser carinho.'], footer: 'Nem toda rotina cansa.', badge: '3/3', showArrow: false },
    ],
  },
  {
    id: '2026-09-08',
    eixo: 'mundo lá fora',
    palette: 'cremeClaro',
    tema: 'Ninguém vê o que você segura sozinho',
    slides: [
      { eyebrow: 'OLÁ EXPERIENCE', lines: ['Tem coisa que você segura', 'e ninguém vê.'], badge: '1/3', showArrow: true },
      { eyebrow: 'NA PRÁTICA', lines: ['A lista mental do que não pode', 'esquecer, o que já resolveu', 'antes de alguém notar.'], badge: '2/3', showArrow: true },
      { eyebrow: 'CADA FAMÍLIA, UMA JORNADA', lines: ['Cuidar em silêncio', 'também é trabalho.'], footer: 'Merece ser visto, não só feito.', badge: '3/3', showArrow: false },
    ],
  },
  {
    id: '2026-09-10',
    eixo: 'dentro de casa',
    palette: 'oliva',
    tema: 'Pedir ajuda não é fraqueza',
    slides: [
      { eyebrow: 'OLÁ EXPERIENCE', lines: ['Pedir ajuda', 'não é fraqueza.'], badge: '1/3', showArrow: true },
      { eyebrow: 'NA PRÁTICA', lines: ['É saber que sozinho', 'ninguém dá conta', 'de tudo, sempre.'], badge: '2/3', showArrow: true },
      { eyebrow: 'CADA FAMÍLIA, UMA JORNADA', lines: ['Família que se ajuda', 'não é família fraca.'], footer: 'É família que confia.', badge: '3/3', showArrow: false },
    ],
  },
  {
    id: '2026-09-13',
    eixo: 'mundo lá fora',
    palette: 'florestaEscuro',
    tema: 'Nem tudo que é rápido é melhor',
    slides: [
      { eyebrow: 'OLÁ EXPERIENCE', lines: ['Nem tudo que é rápido', 'é melhor.'], badge: '1/3', showArrow: true },
      { eyebrow: 'NA PRÁTICA', lines: ['O micro-ondas esquenta rápido.', 'A confiança de um filho', 'não tem atalho.'], badge: '2/3', showArrow: true },
      { eyebrow: 'CADA FAMÍLIA, UMA JORNADA', lines: ['Algumas coisas', 'só o tempo resolve.'], footer: 'E tudo bem esperar.', badge: '3/3', showArrow: false },
    ],
  },
  {
    id: '2026-09-15',
    eixo: 'dentro de casa',
    palette: 'terracotaEscuro',
    tema: 'Brincar também é conversa',
    slides: [
      { eyebrow: 'OLÁ EXPERIENCE', lines: ['Brincar também é', 'uma forma de conversar.'], badge: '1/3', showArrow: true },
      { eyebrow: 'NA PRÁTICA', lines: ['Enquanto joga bola', 'ou monta o quebra-cabeça,', 'a criança conta o que sente.'], badge: '2/3', showArrow: true },
      { eyebrow: 'CADA FAMÍLIA, UMA JORNADA', lines: ['Nem toda confidência', 'chega sentado.'], footer: 'Às vezes chega brincando.', badge: '3/3', showArrow: false },
    ],
  },
  {
    id: '2026-09-17',
    eixo: 'mundo lá fora',
    palette: 'cremeClaro',
    tema: 'A pressão de ser exemplo o tempo todo',
    slides: [
      { eyebrow: 'OLÁ EXPERIENCE', lines: ['Ninguém precisa ser', 'exemplo o tempo todo.'], badge: '1/3', showArrow: true },
      { eyebrow: 'NA PRÁTICA', lines: ['Também vale o dia', 'que você só sobreviveu', 'sem se cobrar mais que isso.'], badge: '2/3', showArrow: true },
      { eyebrow: 'CADA FAMÍLIA, UMA JORNADA', lines: ['Referência boa', 'também erra.'], footer: 'E continua sendo referência.', badge: '3/3', showArrow: false },
    ],
  },
  {
    id: '2026-09-20',
    eixo: 'dentro de casa',
    palette: 'oliva',
    tema: 'Cada fase pede uma presença diferente',
    slides: [
      { eyebrow: 'OLÁ EXPERIENCE', lines: ['Cada fase da vida', 'pede um tipo', 'de presença diferente.'], badge: '1/3', showArrow: true },
      { eyebrow: 'NA PRÁTICA', lines: ['O bebê pede colo.', 'O adolescente pede', 'espaço com porta aberta.'], badge: '2/3', showArrow: true },
      { eyebrow: 'CADA FAMÍLIA, UMA JORNADA', lines: ['Presença não é', 'sempre igual.'], footer: 'Ela muda junto com quem cresce.', badge: '3/3', showArrow: false },
    ],
  },
  {
    id: '2026-09-22',
    eixo: 'mundo lá fora',
    palette: 'florestaEscuro',
    tema: 'Descansar também rende',
    slides: [
      { eyebrow: 'OLÁ EXPERIENCE', lines: ['Descansar', 'também rende.'], badge: '1/3', showArrow: true },
      { eyebrow: 'NA PRÁTICA', lines: ['O corpo parado', 'ainda está trabalhando —', 'só que por dentro.'], badge: '2/3', showArrow: true },
      { eyebrow: 'CADA FAMÍLIA, UMA JORNADA', lines: ['Produtividade não é', 'o único jeito de valer o dia.'], footer: 'Descanso também é conquista.', badge: '3/3', showArrow: false },
    ],
  },
  {
    id: '2026-09-24',
    eixo: 'dentro de casa',
    palette: 'terracotaEscuro',
    tema: 'Repetir não é fracassar',
    slides: [
      { eyebrow: 'OLÁ EXPERIENCE', lines: ['Repetir a mesma', 'conversa de novo', 'não é fracasso.'], badge: '1/3', showArrow: true },
      { eyebrow: 'NA PRÁTICA', lines: ['Às vezes o filho', 'só precisa ouvir', 'a mesma coisa outra vez.'], badge: '2/3', showArrow: true },
      { eyebrow: 'CADA FAMÍLIA, UMA JORNADA', lines: ['Ensinar é', 'processo, não evento.'], footer: 'Repetir também é cuidar.', badge: '3/3', showArrow: false },
    ],
  },
  {
    id: '2026-09-27',
    eixo: 'mundo lá fora',
    palette: 'cremeClaro',
    tema: 'Nem toda opinião on-line precisa de resposta',
    slides: [
      { eyebrow: 'OLÁ EXPERIENCE', lines: ['Nem toda opinião', 'na internet', 'precisa da sua resposta.'], badge: '1/3', showArrow: true },
      { eyebrow: 'NA PRÁTICA', lines: ['Cada notificação de discussão', 'é um convite —', 'não uma obrigação.'], badge: '2/3', showArrow: true },
      { eyebrow: 'CADA FAMÍLIA, UMA JORNADA', lines: ['Proteger sua paz', 'também é cuidado.'], footer: 'Nem toda briga é sua.', badge: '3/3', showArrow: false },
    ],
  },
  {
    id: '2026-09-29',
    eixo: 'dentro de casa',
    palette: 'oliva',
    tema: 'Amor também é logística',
    slides: [
      { eyebrow: 'OLÁ EXPERIENCE', lines: ['Amor também', 'é logística.'], badge: '1/3', showArrow: true },
      { eyebrow: 'NA PRÁTICA', lines: ['Marcar a consulta,', 'lembrar do lanche,', 'separar o uniforme — é cuidado.'], badge: '2/3', showArrow: true },
      { eyebrow: 'CADA FAMÍLIA, UMA JORNADA', lines: ['Nem todo carinho', 'parece romântico.'], footer: 'Às vezes parece agenda cheia.', badge: '3/3', showArrow: false },
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
