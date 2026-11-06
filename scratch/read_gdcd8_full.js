const fs = require('fs');

const idx = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const pos = idx.indexOf('<!-- Course Card: Giáo Dục Công Dân 8 -->');
console.log(idx.substring(pos, pos + 1800));
