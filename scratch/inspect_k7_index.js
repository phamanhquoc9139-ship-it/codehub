const fs = require('fs');

const idx = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const p = idx.indexOf('KHỐI LỚP 7');
console.log('--- KHỐI LỚP 7 in index.html ---');
console.log(idx.substring(p, p + 1500));
