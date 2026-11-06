const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/tiengtrung10_data.js', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(815, 845).map((l, i) => `${816 + i}: ${l}`).join('\n'));
