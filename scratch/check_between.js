const fs = require('fs');
const cn = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_7.html', 'utf8');

console.log('=== FROM CARD 1 TO CARD 2 ===');
console.log(cn.substring(10150, 13450));
