const fs = require('fs');
const cn = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_7.html', 'utf8');

const headerIdx = cn.indexOf('<header');
console.log('--- REST OF HEADER ---');
console.log(cn.substring(headerIdx + 2000, headerIdx + 5000));
