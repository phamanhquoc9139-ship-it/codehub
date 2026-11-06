const fs = require('fs');

const f = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/generate_math7_like_math6.js', 'utf8');

const idx = f.indexOf('1. Tóm tắt lý thuyết bài học');
console.log('Snippet in generate_math7_like_math6:');
console.log(f.substring(idx - 200, idx + 2000));
