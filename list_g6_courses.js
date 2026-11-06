const fs = require('fs');

const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

// Find all course cards in index.html and list their H3 titles
const h3Regex = /<h3[^>]*>([\s\S]*?)<\/h3>/g;
const titles = [];
let match;
while ((match = h3Regex.exec(indexHtml)) !== null) {
  const t = match[1].replace(/<[^>]+>/g, '').trim();
  if (t.includes('6') || t.includes('Lớp 6')) {
    titles.push(t);
  }
}
console.log('Grade 6 courses found:', titles);
