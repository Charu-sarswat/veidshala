const fs = require('fs');
const zlib = require('zlib');

// Read current a7_cropped.png
const b = fs.readFileSync('public/a7_cropped.png');
let off = 8, ch = [];
while (off < b.length) {
  let l = b.readUInt32BE(off), t = b.toString('ascii', off + 4, off + 8);
  if (t === 'IDAT') ch.push(b.subarray(off + 8, off + 8 + l));
  off += 12 + l;
}
const raw = zlib.inflateSync(Buffer.concat(ch));
const W = 2172, H = 355, stride = 1 + W * 4;

// Get defiltered pixels into RGBA buffer [y][x]
const pixels = Buffer.alloc(W * H * 4);
for (let y = 0; y < H; y++) {
  // raw has filter byte 0 at start of each line
  raw.copy(pixels, y * W * 4, y * stride + 1, (y + 1) * stride);
}

// Background color is sampled from center (say x=1086, y=177)
const bgIdx = (177 * W + 1086) * 4;
const bgR = pixels[bgIdx];
const bgG = pixels[bgIdx + 1];
const bgB = pixels[bgIdx + 2];
const bgA = 255;
console.log('Detected bg color:', bgR, bgG, bgB);

// Create new blank image of same dimensions (2172 x 355) filled with bg color
const newPixels = Buffer.alloc(W * H * 4);
for (let i = 0; i < W * H; i++) {
  newPixels[i * 4] = bgR;
  newPixels[i * 4 + 1] = bgG;
  newPixels[i * 4 + 2] = bgB;
  newPixels[i * 4 + 3] = bgA;
}

// Left leaf: x from 0 to 450, y from 0 to 355
// Right leaf: x from 1650 to 2172, y from 0 to 355
// We want to scale the leaves by scaleFactor (e.g. 0.72)
const scale = 0.72;

// Function to get pixel with bilinear interpolation
function getPixel(srcX, srcY) {
  if (srcX < 0 || srcX >= W - 1 || srcY < 0 || srcY >= H - 1) {
    return [bgR, bgG, bgB, bgA];
  }
  const x0 = Math.floor(srcX), y0 = Math.floor(srcY);
  const x1 = x0 + 1, y1 = y0 + 1;
  const fx = srcX - x0, fy = srcY - y0;
  
  const i00 = (y0 * W + x0) * 4;
  const i10 = (y0 * W + x1) * 4;
  const i01 = (y1 * W + x0) * 4;
  const i11 = (y1 * W + x1) * 4;
  
  let rgba = [];
  for (let c = 0; c < 4; c++) {
    const top = pixels[i00 + c] * (1 - fx) + pixels[i10 + c] * fx;
    const bot = pixels[i01 + c] * (1 - fx) + pixels[i11 + c] * fx;
    rgba.push(Math.round(top * (1 - fy) + bot * fy));
  }
  return rgba;
}

// 1. Draw scaled Left Leaves (anchor to bottom-left corner)
// Original left leaf height ~ 355, width ~ 450.
// Scaled height ~ 255, width ~ 324.
// Anchor at y = H - scaledH, x = 0
const leftScaledW = Math.round(450 * scale);
const leftScaledH = Math.round(H * scale);
const leftOffsetY = H - leftScaledH; // sit at bottom
const leftOffsetX = 0; // sit at left

for (let dy = 0; dy < leftScaledH; dy++) {
  for (let dx = 0; dx < leftScaledW; dx++) {
    const srcX = dx / scale;
    const srcY = dy / scale;
    const targetX = leftOffsetX + dx;
    const targetY = leftOffsetY + dy;
    if (targetX < W && targetY < H) {
      const col = getPixel(srcX, srcY);
      const outIdx = (targetY * W + targetX) * 4;
      newPixels[outIdx] = col[0];
      newPixels[outIdx + 1] = col[1];
      newPixels[outIdx + 2] = col[2];
      newPixels[outIdx + 3] = col[3];
    }
  }
}

// 2. Draw scaled Right Leaves (anchor to right edge, centered vertically or aligned to right)
// Original right leaf from x = 1650 to 2172 (width 522), y from 0 to 355 (height 355)
const rightW = W - 1650;
const rightScaledW = Math.round(rightW * scale);
const rightScaledH = Math.round(H * scale);
const rightOffsetX = W - rightScaledW;
const rightOffsetY = Math.round((H - rightScaledH) / 2); // vertically centered with breathing room

for (let dy = 0; dy < rightScaledH; dy++) {
  for (let dx = 0; dx < rightScaledW; dx++) {
    const srcX = 1650 + dx / scale;
    const srcY = dy / scale;
    const targetX = rightOffsetX + dx;
    const targetY = rightOffsetY + dy;
    if (targetX < W && targetY < H && targetX >= 0 && targetY >= 0) {
      const col = getPixel(srcX, srcY);
      const outIdx = (targetY * W + targetX) * 4;
      newPixels[outIdx] = col[0];
      newPixels[outIdx + 1] = col[1];
      newPixels[outIdx + 2] = col[2];
      newPixels[outIdx + 3] = col[3];
    }
  }
}

// Format back to PNG with filter 0
const outRaw = Buffer.alloc(H * (1 + W * 4));
for (let y = 0; y < H; y++) {
  outRaw[y * (1 + W * 4)] = 0; // filter 0
  newPixels.copy(outRaw, y * (1 + W * 4) + 1, y * W * 4, (y + 1) * W * 4);
}

const deflated = zlib.deflateSync(outRaw);

function crc32(buf) {
  let table = [];
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    table[i] = c;
  }
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = table[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const typeAndData = Buffer.concat([typeBuf, data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(typeAndData), 0);
  return Buffer.concat([len, typeAndData, crc]);
}

const ihdrData = Buffer.alloc(13);
ihdrData.writeUInt32BE(W, 0);
ihdrData.writeUInt32BE(H, 4);
ihdrData[8] = 8;
ihdrData[9] = 6;
ihdrData[10] = 0;
ihdrData[11] = 0;
ihdrData[12] = 0;

const pngSignature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
const ihdrChunk = makeChunk('IHDR', ihdrData);
const idatChunk = makeChunk('IDAT', deflated);
const iendChunk = makeChunk('IEND', Buffer.alloc(0));

const finalPng = Buffer.concat([pngSignature, ihdrChunk, idatChunk, iendChunk]);
fs.writeFileSync('public/a7_cropped.png', finalPng);
console.log('Successfully scaled down leaves in public/a7_cropped.png! Bytes:', finalPng.length);
