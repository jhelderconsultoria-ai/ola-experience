// Gera as 6 paginas "Dia N desbloqueado" (frase de efeito + cena real) pro site
// docs/mapa-do-hoje/, reaproveitando pergunta/comeco ja aprovados no PDF do produto.
import fs from 'fs';
import path from 'path';

const OUT_DIR = path.resolve('docs/mapa-do-hoje');

const dias = [
  {
    n: 1, pilar: 'Alimentação', emoji: '🥕', foto: 'img/dia1-alimentacao.jpg',
    pergunta: 'Qual foi a última vez que a família comeu junta, sem tela, sem pressa?',
    comeco: 'Escolham uma refeição — qualquer uma — pra fazer só isso: sentar juntos, sem tela, sem pressa.',
    frase: 'A mesa não precisa estar perfeita. Precisa estar cheia de gente que se olha.',
  },
  {
    n: 2, pilar: 'Cognitivo', emoji: '🤸', foto: 'img/dia2-cognitivo.jpg',
    pergunta: 'Quando foi a última vez que vocês aprenderam algo juntos, só por curiosidade?',
    comeco: 'Escolham uma pergunta sem resposta pronta ("por que o céu muda de cor?", "como funciona X?") e descubram juntos.',
    frase: 'Curiosidade também é um jeito de dizer "eu quero saber de você".',
  },
  {
    n: 3, pilar: 'Emocional', emoji: '🧘', foto: 'img/dia3-emocional.jpg',
    pergunta: 'Quando foi a última vez que alguém da casa disse em voz alta o que estava sentindo, sem ser interrompido?',
    comeco: 'Reservem 10 minutos pra cada um dizer, numa palavra só, como o dia foi por dentro — sem ninguém corrigir ou explicar o sentimento do outro.',
    frase: 'Quem é ouvido sem interrupção aprende que pode falar de novo.',
  },
  {
    n: 4, pilar: 'Cardio', emoji: '❤️', foto: 'img/dia4-cardio.jpg',
    pergunta: 'Seu corpo lembra a última vez que se moveu só por prazer, não por obrigação?',
    comeco: 'Troquem 10 minutos de tela por uma volta perto de casa — no ritmo de quem for mais devagar.',
    frase: 'O corpo não pede corrida. Pede só uma volta, no ritmo de quem for mais devagar.',
  },
  {
    n: 5, pilar: 'Força', emoji: '💪', foto: 'img/dia5-forca.jpg', retrato: true,
    pergunta: 'Que tipo de força sua família já usa todo dia, sem perceber?',
    comeco: 'Notem e digam em voz alta, pelo menos uma vez, quando alguém da casa "aguentou" algo difícil.',
    frase: 'A força que sustenta a casa não aparece em foto — mas hoje alguém percebeu ela.',
  },
  {
    n: 6, pilar: 'Bolso', emoji: '💰', foto: 'img/dia6-bolso.jpg',
    pergunta: 'O tempo da sua família também é um recurso — onde ele anda sendo mais gasto?',
    comeco: 'Separem 15 minutos pra olhar juntos a agenda da semana seguinte, sem pressa, só pra saber o que vem por aí.',
    frase: 'Olhar a agenda juntos também é cuidar do dinheiro da família.',
  },
];

function page(d) {
  const prevLink = d.n > 1 ? `<a class="nav" href="dia${d.n - 1}.html">&larr; Dia ${d.n - 1}</a>` : '<span></span>';
  const nextLink = d.n < 6 ? `<a class="nav" href="dia${d.n + 1}.html">Dia ${d.n + 1} &rarr;</a>` : '<a class="nav" href="certificado.html">Certificado &rarr;</a>';

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dia ${d.n} desbloqueado — O Mapa do Hoje</title>
<style>
  :root { --verde: #1A3C30; --verde-escuro: #10241c; --terracota: #C97B4A; --creme: #F3E9D8; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Georgia', 'Times New Roman', serif; background: var(--verde); color: var(--creme); min-height: 100vh; }
  .container { max-width: 480px; margin: 0 auto; padding: 0 0 50px; }
  .foto { width: 100%; max-width: 480px; margin: 0 auto; aspect-ratio: 4/3; overflow: hidden; background: var(--verde-escuro); }
  .foto img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .foto.retrato { aspect-ratio: 3/4; }
  .foto.retrato img { object-fit: contain; }
  .miolo { padding: 28px 24px 0; text-align: center; }
  .eyebrow { font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 12px; letter-spacing: 3px; text-transform: uppercase; color: var(--terracota); font-weight: 700; margin-bottom: 12px; }
  .pilar { font-size: 30px; font-weight: 700; margin-bottom: 4px; }
  .emoji { font-size: 40px; margin-bottom: 6px; }
  .frase { font-style: italic; font-size: 22px; line-height: 1.5; color: var(--creme); margin: 22px 0; padding: 0 6px; }
  .frase::before, .frase::after { content: '"'; color: var(--terracota); }
  .box { background: rgba(243,233,216,.06); border: 1px solid rgba(243,233,216,.16); border-radius: 14px; padding: 18px 20px; margin-top: 18px; text-align: left; }
  .box .label { font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--terracota); font-weight: 700; margin-bottom: 8px; }
  .box p { font-size: 16px; line-height: 1.5; }
  .navbar { display: flex; justify-content: space-between; align-items: center; margin-top: 30px; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 13px; }
  .nav { color: var(--terracota); text-decoration: none; font-weight: 700; }
  .voltar { text-align: center; margin-top: 26px; }
  .voltar a { font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 12px; color: rgba(243,233,216,.6); text-decoration: none; }
  .rodape { text-align: center; margin-top: 36px; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 12px; opacity: .55; font-style: italic; }
</style>
</head>
<body>
  <div class="foto${d.retrato ? ' retrato' : ''}"><img src="${d.foto}" alt="${d.pilar}"></div>
  <div class="container">
    <div class="miolo">
      <div class="eyebrow">Dia ${d.n} de 6 desbloqueado</div>
      <div class="emoji">${d.emoji}</div>
      <div class="pilar">${d.pilar}</div>
      <p class="frase">${d.frase}</p>
      <div class="box">
        <div class="label">Pergunta</div>
        <p>${d.pergunta}</p>
      </div>
      <div class="box">
        <div class="label">Pequeno começo de hoje</div>
        <p>${d.comeco}</p>
      </div>
    </div>
    <div class="navbar">${prevLink}${nextLink}</div>
    <div class="voltar"><a href="checklist.html">&larr; Voltar pro checklist</a></div>
    <div class="rodape">Olá Experience — cada família, uma jornada.</div>
  </div>
</body>
</html>
`;
}

fs.mkdirSync(OUT_DIR, { recursive: true });
for (const d of dias) {
  const outPath = path.join(OUT_DIR, `dia${d.n}.html`);
  fs.writeFileSync(outPath, page(d), 'utf-8');
  console.log('OK', outPath);
}
