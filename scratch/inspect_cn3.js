const fs = require('fs');
const cn = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_7.html', 'utf8');

console.log('--- AROUND POSITION 27500 TO 29000 ---');
console.log(cn.substring(27500, 29000));
