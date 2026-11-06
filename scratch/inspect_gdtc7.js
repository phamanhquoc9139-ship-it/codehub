const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdtc_7.html', 'utf8');

console.log("gdtc_7 size:", content.length);
console.log("Head snippet:");
console.log(content.substring(0, 1000));

const idxBai1 = content.indexOf('id="bai-1"');
console.log("Snippet Bài 1:");
console.log(content.substring(idxBai1, idxBai1 + 1000));
