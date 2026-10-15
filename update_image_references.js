const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const publicDir = path.join(__dirname, 'public');

function getAllFiles(dir, extensions) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(fullPath, extensions));
    } else {
      const ext = path.extname(file).toLowerCase();
      if (extensions.has(ext)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

const codeFiles = getAllFiles(srcDir, new Set(['.ts', '.tsx', '.js', '.jsx', '.css']));

let totalChanges = 0;
let modifiedFiles = 0;

for (const file of codeFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Replace image paths matching /(path/to/name).(png|jpg|jpeg)
  // Check if public/(path/to/name).webp exists
  content = content.replace(/(["'`\/])([\w\d_\-\/]+)\.(png|jpe?g)(["'`\?#])/gi, (match, prefix, imagePath, ext, suffix) => {
    // Normalise path
    const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
    const targetWebp = path.join(publicDir, cleanPath + '.webp');
    
    if (fs.existsSync(targetWebp)) {
      totalChanges++;
      return `${prefix}${imagePath}.webp${suffix}`;
    }
    return match;
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    modifiedFiles++;
    console.log(`Updated: ${path.relative(__dirname, file)}`);
  }
}

console.log(`\nFinished! Updated ${totalChanges} image references across ${modifiedFiles} files.`);
