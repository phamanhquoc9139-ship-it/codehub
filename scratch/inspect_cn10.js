const fs = require('fs');
const cn = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_7.html', 'utf8');

const headerIdx = cn.indexOf('<header');
const mainIdx = cn.indexOf('<main');
console.log('--- HEADER TO MAIN ---');
console.log(cn.substring(headerIdx, headerIdx + 3000));
