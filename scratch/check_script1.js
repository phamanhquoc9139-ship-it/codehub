const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_10.html', 'utf8');

const scriptRegex = /<script(?![^>]*src=)([\s\S]*?)<\/script>/gi;
let m;
let scriptIdx = 0;
while ((m = scriptRegex.exec(content)) !== null) {
  scriptIdx++;
  if (scriptIdx === 1) {
    const scriptContent = m[1];
    const lines = scriptContent.split('\n');
    console.log('Script 1 first 5 lines:');
    console.log(lines.slice(0, 5).join('\n'));
  }
}
