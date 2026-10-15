const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDir = path.join(__dirname, 'public');
const validExtensions = new Set(['.png', '.jpg', '.jpeg']);

function getAllImageFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllImageFiles(fullPath));
    } else {
      const ext = path.extname(file).toLowerCase();
      if (validExtensions.has(ext)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

async function convertAllImages() {
  const images = getAllImageFiles(targetDir);
  console.log(`Found ${images.length} images to convert to WebP...`);

  let convertedCount = 0;
  for (const filePath of images) {
    const ext = path.extname(filePath);
    const outputPath = filePath.slice(0, -ext.length) + '.webp';

    try {
      await sharp(filePath)
        .webp({ quality: 85 })
        .toFile(outputPath);

      const oldSize = (fs.statSync(filePath).size / (1024 * 1024)).toFixed(2);
      const newSize = (fs.statSync(outputPath).size / (1024 * 1024)).toFixed(2);
      console.log(`✓ Converted: ${path.relative(__dirname, filePath)} (${oldSize} MB) -> ${path.basename(outputPath)} (${newSize} MB)`);
      convertedCount++;
    } catch (err) {
      console.error(`✗ Error converting ${filePath}:`, err.message);
    }
  }

  console.log(`\nDone! Successfully converted ${convertedCount}/${images.length} images to WebP.`);
}

convertAllImages();
