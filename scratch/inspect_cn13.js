const fs = require('fs');
const cn = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_7.html', 'utf8');

console.log('--- 27529 to 33774 ---');
console.log(cn.substring(27529, 31000));
console.log('--- NEXT CHUNK ---');
console.log(cn.substring(31000, 33774));
