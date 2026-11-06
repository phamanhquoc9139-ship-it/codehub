const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/generate_congnghe_html.js', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(900).join('\n'));
