const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_7.html', 'utf8');

const idx = content.indexOf('id="bai-1"');
console.log('=== ID BAI 1 CONTEXT ===');
console.log(content.slice(idx - 300, idx + 400));
