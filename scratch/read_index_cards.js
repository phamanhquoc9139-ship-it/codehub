const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(1065, 1115).join('\n'));
