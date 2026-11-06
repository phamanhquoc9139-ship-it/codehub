const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_9.html', 'utf8');

const idx1 = content.indexOf('id="bai-1"');
const idx2 = content.indexOf('id="bai-2"');
console.log('Bai 1 length in toan_9:', idx2 - idx1);
console.log(content.slice(idx2 - 1500, idx2));
