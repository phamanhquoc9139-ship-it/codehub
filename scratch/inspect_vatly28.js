const fs = require('fs');

const vatly = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/vatly_10.html', 'utf8');

const idx = vatly.indexOf('id="bai-28"');
console.log('Context of bai-28 in vatly_10.html:');
console.log(vatly.slice(idx, idx + 2000));
