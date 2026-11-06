const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_9.html', 'utf8');

const idx1 = content.indexOf('id="bai-1"');
const idx2 = content.indexOf('id="bai-2"');
const bai1 = content.slice(idx1, idx2);
const qIdx = bai1.indexOf('Câu 1:');
console.log(bai1.slice(qIdx - 500, qIdx + 200));
