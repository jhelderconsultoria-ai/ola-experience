// Gera os QR codes do "Mapa do Hoje": 6 por dia + checklist + certificado.
// Apontam pro dominio ja configurado no GitHub Pages (docs/CNAME = olaexperience.tv).
import fs from 'fs';
import path from 'path';
import QRCode from 'qrcode';

const BASE = 'https://olaexperience.tv/mapa-do-hoje';
const OUT_DIR = path.resolve('docs/mapa-do-hoje/qr');
fs.mkdirSync(OUT_DIR, { recursive: true });

const alvos = [
  { nome: 'dia1', url: `${BASE}/dia1.html` },
  { nome: 'dia2', url: `${BASE}/dia2.html` },
  { nome: 'dia3', url: `${BASE}/dia3.html` },
  { nome: 'dia4', url: `${BASE}/dia4.html` },
  { nome: 'dia5', url: `${BASE}/dia5.html` },
  { nome: 'dia6', url: `${BASE}/dia6.html` },
  { nome: 'checklist', url: `${BASE}/checklist.html` },
  { nome: 'certificado', url: `${BASE}/certificado.html` },
];

async function main() {
  for (const a of alvos) {
    const outPath = path.join(OUT_DIR, `qr-${a.nome}.png`);
    await QRCode.toFile(outPath, a.url, {
      width: 480,
      margin: 2,
      color: { dark: '#10241c', light: '#F3E9D8' },
    });
    console.log('OK', a.nome, '->', a.url);
  }
}

main().catch((e) => {
  console.error('FATAL', e);
  process.exit(1);
});
