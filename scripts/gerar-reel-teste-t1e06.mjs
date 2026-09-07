import sharp from 'sharp';
import { execFileSync } from 'node:child_process';
import ffmpegPath from 'ffmpeg-static';
import fs from 'node:fs';
import path from 'node:path';

const W = 1080;
const H = 1920;
const FPS = 30;

const baseDir = 'INSTAGRAM OLÁ/Temporada Jornada Olá/Temporada 1/T1E06-ritmo-postado-05-09-2026';
const outDir = 'REELS FAMÍLIA HORIZONTE/T1E06-ritmo';
fs.mkdirSync(outDir, { recursive: true });

const segments = [
  { file: `${baseDir}/carrossel/01-capa.png`, dur: 2.3, zoomTo: 1.08 },
  { file: `${baseDir}/arte-bruta/07-ritmo-raw.png`, dur: 3.0, zoomTo: 1.15 },
  { file: `${baseDir}/carrossel/03-mensagem.png`, dur: 2.0, zoomTo: 1.06 },
  { file: `${baseDir}/carrossel/04-fechamento.png`, dur: 1.8, zoomTo: 1.0 },
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
  const zoomExpr = `min(zoom+${step.toFixed(6)},${zoomTo})`;
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

const finalPath = path.join(outDir, 'reel-t1e06-teste.mp4');
execFileSync(ffmpegPath, [
  '-y',
  '-f', 'concat',
  '-safe', '0',
  '-i', listPath,
  '-c:v', 'libx264',
  '-pix_fmt', 'yuv420p',
  '-movflags', '+faststart',
  finalPath,
]);

console.log('Reel gerado em:', finalPath);
