const fs = require('fs');

const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

console.log('Total characters in index.html:', html.length);

// Check headings
const lines = html.split('\n');
lines.forEach((l, i) => {
  if (l.includes('<h2') || l.includes('<h1') || l.includes('<nav') || l.includes('filter') || l.includes('tab-btn')) {
    if (i < 350) console.log(`${i+1}: ${l.trim()}`);
  }
});
