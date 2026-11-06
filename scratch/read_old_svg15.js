const fs = require('fs');

const f = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/build_toan7_fixed.js', 'utf8');

const idx = f.indexOf('15:');
console.log('15: in build_toan7_fixed:');
console.log(f.substring(idx, idx + 1000));
