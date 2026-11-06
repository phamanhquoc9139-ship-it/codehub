const fs = require('fs');
const cn = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_7.html', 'utf8');

console.log('=== CARD 1: SEARCH & FILTER ===');
console.log(cn.substring(10150, 10350));

console.log('=== CARD 2: LESSONS LIST ===');
console.log(cn.substring(13320, 13550));
