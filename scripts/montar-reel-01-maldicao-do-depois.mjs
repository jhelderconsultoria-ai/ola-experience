// Monta o video do Reel 01 a partir dos frames PNG: zoom lento (Ken Burns) por frame + crossfade entre eles.
import path from 'path';
import { execFileSync } from 'child_process';
import ffmpegPath from 'ffmpeg-static';

const DIR = path.resolve('INSTAGRAM OLÁ/Temporada Jornada Olá/Temporada 1/REEL01-maldicao-do-depois');
const FRAMES_DIR = path.join(DIR, 'frames');
const CLIPS_DIR = path.join(DIR, 'clips');
const AUDIO_PATH = path.join(DIR, 'audio', 'steps-into-the-dawn.m4a');
const OUT = path.join(DIR, 'reel-01-maldicao-do-depois.mp4');

const FPS = 25;
const W = 1080, H = 1920;

const frames = [
  { name: '01-hook', dur: 3.5 },
  { name: '02-intro', dur: 4.5 },
  { name: '03-tentativas', dur: 5.5 },
  { name: '04-virada', dur: 5.5 },
  { name: '05-cta', dur: 6.5 },
];

const XFADE = 0.6;

function run(args) {
  execFileSync(ffmpegPath, args, { stdio: 'inherit' });
}

import fs from 'fs';
fs.mkdirSync(CLIPS_DIR, { recursive: true });

// 1) cada frame -> clipe com zoom lento
for (const f of frames) {
  const totalFrames = Math.round(f.dur * FPS);
  const zoomEnd = 1.08;
  const zoomExpr = `min(zoom+${((zoomEnd - 1) / totalFrames).toFixed(6)},${zoomEnd})`;
  const inPath = path.join(FRAMES_DIR, `${f.name}.png`);
  const outPath = path.join(CLIPS_DIR, `${f.name}.mp4`);
  run([
    '-y',
    '-loop', '1',
    '-i', inPath,
    '-vf', `scale=${W * 2}:${H * 2},zoompan=z='${zoomExpr}':d=${totalFrames}:s=${W}x${H}:fps=${FPS},format=yuv420p`,
    '-t', String(f.dur),
    '-r', String(FPS),
    outPath,
  ]);
  console.log('clip OK', f.name);
}

// 2) concatena com xfade sequencial
let filter = '';
let lastLabel = '0:v';
let offset = 0;
const inputs = [];
frames.forEach((f, i) => {
  inputs.push('-i', path.join(CLIPS_DIR, `${f.name}.mp4`));
});

for (let i = 1; i < frames.length; i++) {
  const prevDur = frames[i - 1].dur;
  offset += (i === 1 ? prevDur : frames[i - 1].dur) - XFADE;
  const nextLabel = `v${i}`;
  filter += `[${lastLabel}][${i}:v]xfade=transition=fade:duration=${XFADE}:offset=${offset.toFixed(2)}[${nextLabel}];`;
  lastLabel = nextLabel;
}
// corrige offset acumulado corretamente (recalcular do zero, simples e robusto)
filter = '';
lastLabel = '0:v';
let cumulative = frames[0].dur;
for (let i = 1; i < frames.length; i++) {
  const off = cumulative - XFADE;
  const nextLabel = `v${i}`;
  filter += `[${lastLabel}][${i}:v]xfade=transition=fade:duration=${XFADE}:offset=${off.toFixed(2)}[${nextLabel}];`;
  lastLabel = nextLabel;
  cumulative += frames[i].dur - XFADE;
}
filter = filter.replace(/;$/, '');

const totalDur = cumulative; // duração final do vídeo após os xfades
const fadeOutStart = Math.max(0, totalDur - 1.2);

// audio: corta na duração do vídeo, aplica fade in/out, volume moderado (não compete com o texto)
const audioFilter = `[${inputs.length / 2}:a]atrim=0:${totalDur.toFixed(2)},afade=t=in:st=0:d=0.6,afade=t=out:st=${fadeOutStart.toFixed(2)}:d=1.2,volume=0.3[aout]`;

run([
  '-y',
  ...inputs,
  '-i', AUDIO_PATH,
  '-filter_complex', `${filter};${audioFilter}`,
  '-map', `[${lastLabel}]`,
  '-map', '[aout]',
  '-r', String(FPS),
  '-pix_fmt', 'yuv420p',
  '-c:a', 'aac',
  '-b:a', '128k',
  '-shortest',
  OUT,
]);

console.log('REEL PRONTO:', OUT, '— duracao video:', totalDur.toFixed(2) + 's');
