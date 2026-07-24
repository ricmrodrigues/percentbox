import sharp from "sharp";
import fs from "fs";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const toIco = require("to-ico");

/** Full-bleed square icon — no rounded corners (stays sharp at 16–48px). */
function svgIcon() {
  // Design in fixed 512 viewBox, then resize with sharp
  return Buffer.from(`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
      <stop stop-color="#10B981"/>
      <stop offset="1" stop-color="#0D9488"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" fill="url(#g)"/>
  <g fill="#ffffff">
    <circle cx="164" cy="164" r="70"/>
    <circle cx="164" cy="164" r="32" fill="url(#g)"/>
    <circle cx="348" cy="348" r="70"/>
    <circle cx="348" cy="348" r="32" fill="url(#g)"/>
    <rect x="236" y="90" width="40" height="332" rx="20" transform="rotate(35 256 256)"/>
  </g>
</svg>`);
}

async function pngAt(size) {
  return sharp(svgIcon())
    .resize(size, size, { fit: "fill", kernel: sharp.kernel.lanczos3 })
    .png({ compressionLevel: 9 })
    .toBuffer();
}

const sizes = [16, 32, 48, 96, 180, 192, 512];
const pngBufs = {};

for (const s of sizes) {
  pngBufs[s] = await pngAt(s);
  const meta = await sharp(pngBufs[s]).metadata();
  console.log(`png ${s}:`, meta.width, meta.height);
}

fs.writeFileSync("public/favicon-16.png", pngBufs[16]);
fs.writeFileSync("public/favicon-32.png", pngBufs[32]);
fs.writeFileSync("public/favicon-48.png", pngBufs[48]);
fs.writeFileSync("public/favicon-96.png", pngBufs[96]);
fs.writeFileSync("public/favicon.png", pngBufs[48]);
fs.writeFileSync("public/icon-192.png", pngBufs[192]);
fs.writeFileSync("public/icon-512.png", pngBufs[512]);
fs.writeFileSync("public/logo.png", pngBufs[512]);
fs.writeFileSync("public/apple-icon.png", pngBufs[180]);
fs.writeFileSync("src/app/apple-icon.png", pngBufs[180]);
fs.writeFileSync("src/app/icon.png", pngBufs[32]);

// Also keep clean SVG for browsers that prefer it
fs.writeFileSync(
  "public/icon.svg",
  `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
      <stop stop-color="#10B981"/>
      <stop offset="1" stop-color="#0D9488"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" fill="url(#g)"/>
  <g fill="#ffffff">
    <circle cx="164" cy="164" r="70"/>
    <circle cx="164" cy="164" r="32" fill="url(#g)"/>
    <circle cx="348" cy="348" r="70"/>
    <circle cx="348" cy="348" r="32" fill="url(#g)"/>
    <rect x="236" y="90" width="40" height="332" rx="20" transform="rotate(35 256 256)"/>
  </g>
</svg>
`
);

// Prefer PNG-only for Google; write a minimal valid ICO (16+32+48)
try {
  const ico = await toIco([pngBufs[16], pngBufs[32], pngBufs[48]]);
  fs.writeFileSync("public/favicon.ico", ico);
  console.log("ico bytes", ico.length);
} catch (e) {
  console.warn("to-ico failed, using 48png as primary only:", e.message);
  // Fallback: copy 32png as favicon.ico is invalid for some clients — skip ico
  fs.copyFileSync("public/favicon-48.png", "public/favicon.ico");
}

console.log("done");
