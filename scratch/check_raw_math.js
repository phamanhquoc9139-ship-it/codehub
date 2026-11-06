const fs = require('fs');
const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html', 'utf8');

const regex = /x\^[a-z0-9]/g;
let match;
const snippets = [];
while ((match = regex.exec(html)) !== null) {
  const start = Math.max(0, match.index - 50);
  const end = Math.min(html.length, match.index + 80);
  snippets.push(html.slice(start, end).replace(/\n/g, ' '));
}
console.log('Total raw x^:', snippets.length);
snippets.slice(0, 10).forEach((s, i) => console.log(`[${i}]: ${s}`));
