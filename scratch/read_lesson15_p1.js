const fs = require('fs');
const d1 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/toan7_data_p1.js', 'utf8');
const idx = d1.indexOf('Bài 15.');
console.log(d1.substring(idx - 100, idx + 2500));
