import sharp from 'sharp';
import { execFileSync } from 'node:child_process';
import ffmpegPath from 'ffmpeg-static';
import fs from 'node:fs';
import path from 'node:path';

const W = 1080;
const H = 1920;
const FPS = 30;

const baseDir = 'INSTAGRAM OLÁ/POSTAGENS EXTRAS/casa-na-montanha-sem-pressa';
const outDir = `${baseDir}/reel-pan-zoom`;
fs.mkdirSync(outDir, { recursive: true });

const audioPath = `${baseDir}/audio/sem-pressa-zai-1m22s.mp3`;

// Ajuste 3 (09/09/2026, pedido do Jorge): tirar a cena de "chegada" (violão largado,
// ainda sem tocar) — o vídeo já começa com o Zai tocando, sem esse intervalo antes.
// Só as 2 cenas largas com o Zai já tocando, sem zoom em personagem.
const segments = [
  { file: `${baseDir}/arte-bruta/familia-sofa-tocando-raw-v3-parado.png`, dur: 40, zoomTo: 1.0 },
  { file: `${baseDir}/arte-bruta/performance-wide-raw-v2.png`, dur: 41.55, zoomTo: 1.0 },
  { file: `${baseDir}/carrossel/06-fechamento.png`, dur: 3.45, zoomTo: 1.0 },
];

async function composeCanvas(file, idx) {
  const bg = await sharp(file)
    .resize(W, H, { fit: 'cover' })
    .blur(40)
    .modulate({ brightness: 0.55 })
    .toBuffer();

  const fg = await sharp(file)
    .resize({ width: W, height: H, fit: 'inside' })
    .toBuffer();
  const fgMeta = await sharp(fg).metadata();

  const canvas = await sharp(bg)
    .composite([{
      input: fg,
      top: Math.round((H - fgMeta.height) / 2),
      left: Math.round((W - fgMeta.width) / 2),
    }])
    .png()
    .toBuffer();

  const outPath = path.join(outDir, `seg-${idx}.png`);
  fs.writeFileSync(outPath, canvas);
  return outPath;
}

function renderSegmentVideo(pngPath, dur, zoomTo, idx) {
  const frames = Math.round(dur * FPS);
  const step = (zoomTo - 1) / frames;
  const outPath = path.join(outDir, `seg-${idx}.mp4`);
  const zoomExpr = step > 0 ? `min(zoom+${step.toFixed(6)},${zoomTo})` : '1';
  const vf = `zoompan=z='${zoomExpr}':d=${frames}:s=${W}x${H}:fps=${FPS}:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)'`;
  execFileSync(ffmpegPath, [
    '-y',
    '-loop', '1',
    '-i', pngPath,
    '-vf', vf,
    '-t', String(dur),
    '-pix_fmt', 'yuv420p',
    outPath,
  ]);
  return outPath;
}

const clipPaths = [];
for (let i = 0; i < segments.length; i++) {
  const seg = segments[i];
  const png = await composeCanvas(seg.file, i);
  const clip = renderSegmentVideo(png, seg.dur, seg.zoomTo, i);
  clipPaths.push(clip);
}

const listPath = path.join(outDir, 'concat-list.txt');
fs.writeFileSync(listPath, clipPaths.map(p => `file '${path.resolve(p).replace(/'/g, "'\\''")}'`).join('\n'));

const videoOnlyPath = path.join(outDir, 'video-mudo.mp4');
execFileSync(ffmpegPath, [
  '-y',
  '-f', 'concat',
  '-safe', '0',
  '-i', listPath,
  '-c:v', 'libx264',
  '-pix_fmt', 'yuv420p',
  videoOnlyPath,
]);

// Nomenclatura versionada (business/processos/nomenclatura-artes-versionadas.md):
// <slug>--v<N>--<AAAAMMDD>-<HHMM>.<ext> — subir VERSAO manualmente a cada mudança real de conteúdo.
const VERSAO = 4;
const agora = new Date();
const carimbo = agora.getFullYear()
  + String(agora.getMonth() + 1).padStart(2, '0')
  + String(agora.getDate()).padStart(2, '0')
  + '-' + String(agora.getHours()).padStart(2, '0')
  + String(agora.getMinutes()).padStart(2, '0');
const finalPath = path.join(outDir, `OLA-BONUS-sem-pressa-REEL--v${VERSAO}--${carimbo}.mp4`);
execFileSync(ffmpegPath, [
  '-y',
  '-i', videoOnlyPath,
  '-i', path.resolve(audioPath),
  '-map', '0:v:0',
  '-map', '1:a:0',
  '-c:v', 'copy',
  '-c:a', 'aac',
  '-b:a', '192k',
  '-movflags', '+faststart',
  finalPath,
]);

console.log('Reel gerado em:', finalPath);
