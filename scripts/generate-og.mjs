/**
 * Generates public/og.png (1200x630) — the social share card.
 * Renders the same wave-interference field as the hero, plus name/title.
 * Run: npm run og
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = dirname(dirname(fileURLToPath(import.meta.url)));

const W = 1200;
const H = 630;
const SPACING = 17;

const sources = [
  { fx: 0.16, fy: 0.24, k: 0.030, amp: 1.0 },
  { fx: 0.85, fy: 0.16, k: 0.023, amp: 0.85 },
  { fx: 0.58, fy: 0.98, k: 0.017, amp: 0.75 },
];
const AMP_TOTAL = sources.reduce((s, w) => s + w.amp, 0) * 0.82;
const T = 2.4;

let dots = "";
for (let y = SPACING / 2; y < H; y += SPACING) {
  for (let x = SPACING / 2; x < W; x += SPACING) {
    let v = 0;
    for (const s of sources) {
      const d = Math.hypot(x - s.fx * W, y - s.fy * H);
      v += s.amp * Math.sin(d * s.k - T);
    }
    const m = Math.max(-1, Math.min(1, v / AMP_TOTAL));
    const g = Math.pow(Math.abs(m), 1.45);
    // fade dots toward the left-center where the text sits
    const fade = Math.min(1, Math.hypot((x - 330) / 620, (y - 330) / 420));
    const alpha = (0.05 + g * 0.55) * Math.pow(fade, 2.2);
    if (alpha < 0.02) continue;
    const r = (0.8 + g * 1.9).toFixed(2);
    const color = m > 0 ? "124,227,207" : "158,152,245";
    dots += `<circle cx="${x}" cy="${y}" r="${r}" fill="rgba(${color},${alpha.toFixed(3)})"/>`;
  }
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#5fd4c2"/>
      <stop offset="0.55" stop-color="#8f8aef"/>
      <stop offset="1" stop-color="#c98fd6"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#0a0b0f"/>
  ${dots}
  <text x="80" y="210" font-family="Georgia, 'Times New Roman', serif" font-size="34" fill="#70717a" letter-spacing="6">MICROSOFT STATION Q</text>
  <text x="76" y="330" font-family="Georgia, 'Times New Roman', serif" font-size="96" fill="#e9e7e2">Tatiane Santos<tspan fill="#70717a" font-style="italic" font-size="56">, Ph.D.</tspan></text>
  <text x="80" y="410" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="44" fill="url(#grad)">Quantum engineer &amp; AI scientist</text>
  <rect x="80" y="470" width="380" height="2" fill="url(#grad)" opacity="0.6"/>
  <text x="80" y="530" font-family="'Courier New', monospace" font-size="26" fill="#a6a5a0">tatianep.github.io/home</text>
</svg>`;

await sharp(Buffer.from(svg))
  .png({ compressionLevel: 9 })
  .toFile(join(root, "public", "og.png"));

console.log("public/og.png written");

// Favicon PNG fallbacks, rendered from the SVG mark.
import { readFile } from "node:fs/promises";
const faviconSvg = await readFile(join(root, "public", "favicon.svg"));

for (const [name, size] of [
  ["favicon-32.png", 32],
  ["apple-touch-icon.png", 180],
]) {
  await sharp(faviconSvg, { density: 300 })
    .resize(size, size)
    .png()
    .toFile(join(root, "public", name));
  console.log(`public/${name} written`);
}
