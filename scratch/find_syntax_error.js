const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_10.html', 'utf8');

const scriptRegex = /<script(?![^>]*src=)([\s\S]*?)<\/script>/gi;
let m;
let scriptIdx = 0;
while ((m = scriptRegex.exec(content)) !== null) {
  scriptIdx++;
  if (scriptIdx === 2) {
    const scriptContent = m[1];
    const lines = scriptContent.split('\n');
    for (let i = 1; i <= lines.length; i++) {
      const codeChunk = lines.slice(0, i).join('\n');
      try {
        new Function(codeChunk);
      } catch (err) {
        if (!err.message.includes('Unexpected end of input')) {
          console.log(`Error at line ${i}: ${err.message}`);
          console.log('Line content:', lines[i - 1]);
          console.log('Surrounding lines:');
          console.log(lines.slice(Math.max(0, i - 5), Math.min(lines.length, i + 5)).join('\n'));
          break;
        }
      }
    }
  }
}
