const fs = require('fs');
const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const lines = html.split('\n');
console.log(lines.slice(270, 345).join('\n'));
