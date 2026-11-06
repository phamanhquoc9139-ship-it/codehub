const fs = require('fs');
const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const lines = html.split('\n');
for (let i = 5150; i < lines.length; i++) {
  if (lines[i].includes('<!--') || lines[i].includes('<section') || lines[i].includes('<div id=')) {
    console.log(`${i+1}: ${lines[i].trim()}`);
  }
}
