const fs = require('fs');
const code = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/build_toan10.js', 'utf8');

const lines = code.split('\n');
console.log(lines.slice(1205, 1230).map((l, i) => `${1206 + i}: ${l}`).join('\n'));
