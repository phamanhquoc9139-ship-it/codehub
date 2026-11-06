const fs = require('fs');
const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_9.html', 'utf8');
const matches = [];
let re = /class="[^"]*rounded-2xl[^"]*"[^>]*>\s*(\$|\\\[)/g;
let m;
while ((m = re.exec(html)) !== null && matches.length < 3) {
  matches.push(m.index);
}
console.log('Matches:', matches.length);
for (const idx of matches) {
  console.log('--- MATCH ---');
  console.log(html.substring(idx - 50, idx + 350));
}
