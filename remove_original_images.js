const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'public');
const validExtensions = new Set(['.png', '.jpg', '.jpeg']);

function getAllOriginalImages(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllOriginalImages(fullPath));
    } else {
      const ext = path.extname(file).toLowerCase();
      if (validExtensions.has(ext)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

function removeConvertedImages() {
  const originals = getAllOriginalImages(targetDir);
  console.log(`Checking ${originals.length} original images for WebP counterparts...`);

  let removedCount = 0;
  for (const filePath of originals) {
    const ext = path.extname(filePath);
    const webpPath = filePath.slice(0, -ext.length) + '.webp';

    if (fs.existsSync(webpPath) && fs.statSync(webpPath).size > 0) {
      try {
        fs.unlinkSync(filePath);
        console.log(`✓ Removed original: ${path.relative(__dirname, filePath)}`);
        removedCount++;
      } catch (err) {
        console.error(`✗ Error removing ${filePath}:`, err.message);
      }
    } else {
      console.warn(`⚠ Skipped (no valid WebP found): ${path.relative(__dirname, filePath)}`);
    }
  }

  console.log(`\nDone! Successfully removed ${removedCount} original images.`);
}

removeConvertedImages();
