const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tinhoc_10.html', 'utf8');

const regex = /<h3[^>]*>([\s\S]*?)<\/h3>/gi;
let m;
let titles = [];
while ((m = regex.exec(content)) !== null) {
  const t = m[1].replace(/<[^>]+>/g, '').trim();
  if (t.includes('Bài') || t.includes('Chủ đề')) {
    titles.push(t);
  }
}
console.log('Found titles in current tinhoc_10.html:', titles.length);
titles.slice(0, 35).forEach(t => console.log(t));
