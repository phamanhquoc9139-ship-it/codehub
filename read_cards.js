const fs = require('fs');
const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

// Inspect a few cards from lines 350 to 450
const lines = html.split('\n');
console.log(lines.slice(345, 420).join('\n'));
