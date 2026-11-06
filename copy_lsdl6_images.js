const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/ADMIN/.gemini/antigravity/scratch/lsdl6_docx/word/media';
const destDir = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/assets/img/lsdl6';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);
files.forEach(f => {
  fs.copyFileSync(path.join(srcDir, f), path.join(destDir, f));
  console.log(`Copied ${f} to assets/img/lsdl6/`);
});
