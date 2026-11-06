const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_10.html', 'utf8');

const scriptRegex = /<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi;
let m;
let scriptIdx = 0;
while ((m = scriptRegex.exec(content)) !== null) {
  scriptIdx++;
  if (scriptIdx === 2) {
    const lines = m[1].split('\n');
    console.log(lines.slice(125, 155).map((l, i) => `${126 + i}: ${l}`).join('\n'));
  }
}
