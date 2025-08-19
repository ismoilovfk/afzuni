import fs from 'node:fs';
import path from 'node:path';

const outDir = path.join(process.cwd(), 'images', 'generated');
fs.mkdirSync(outDir, { recursive: true });

const heroSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
  <defs>
    <radialGradient id="g1" cx="80%" cy="-10%" r="60%">
      <stop offset="0%" stop-color="#2563eb" stop-opacity="0.50"/>
      <stop offset="100%" stop-color="#f4f7ff" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g2" cx="10%" cy="10%" r="50%">
      <stop offset="0%" stop-color="#22d3ee" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#f4f7ff" stop-opacity="0"/>
    </radialGradient>
    <filter id="noise" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
      <feComponentTransfer>
        <feFuncA type="table" tableValues="0 0 0 0 0 0.2"/>
      </feComponentTransfer>
    </filter>
  </defs>
  <rect width="100%" height="100%" fill="#f4f7ff"/>
  <rect width="100%" height="100%" fill="url(#g1)"/>
  <rect width="100%" height="100%" fill="url(#g2)"/>
  <rect width="100%" height="100%" filter="url(#noise)" opacity="0.08"/>
</svg>`;

fs.writeFileSync(path.join(outDir, 'hero.svg'), heroSvg, 'utf8');

function blob(id, hueA, hueB) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
  <defs>
    <linearGradient id="lg-${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="hsl(${hueA}, 90%, 60%)"/>
      <stop offset="100%" stop-color="hsl(${hueB}, 90%, 55%)"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="#0a0d13"/>
  <g opacity="0.9">
    <path fill="url(#lg-${id})" d="M139 86c51-49 138-61 207-35 76 29 101 106 165 148 52 35 132 43 168 92 36 49 20 121-28 157-48 35-123 33-189 28-79-6-157-16-222-58-64-42-112-115-111-184 1-63 59-101 110-148Z"/>
  </g>
</svg>`;
}

const hues = [
  [190, 280],
  [160, 210],
  [290, 340],
  [200, 240],
  [330, 20],
  [40, 90],
];

hues.forEach((pair, i) => {
  fs.writeFileSync(path.join(outDir, `pattern-${i + 1}.svg`), blob(i + 1, pair[0], pair[1]), 'utf8');
});

console.log(`Generated SVG assets in ${outDir}`);


