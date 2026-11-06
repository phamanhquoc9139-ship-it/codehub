const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdcd_7.html', 'utf8');

console.log("gdcd_7 size:", content.length);
console.log("Head snippet:");
console.log(content.substring(0, 1200));

// Xem một bài học mẫu
const idxBai1 = content.indexOf('id="bai-1"');
console.log("Snippet Bài 1:");
console.log(content.substring(idxBai1, idxBai1 + 1000));
