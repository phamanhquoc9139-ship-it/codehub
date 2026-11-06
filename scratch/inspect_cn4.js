const fs = require('fs');
const cn = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_7.html', 'utf8');

console.log('--- AROUND POSITION 36000 TO 39000 ---');
console.log(cn.substring(36000, 39000));
