const fs = require('fs');
const cn7 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_7.html', 'utf8');

// Tìm bài 1 trong congnghe_7
const idx1 = cn7.indexOf('id="bai-1"');
const idx2 = cn7.indexOf('id="bai-2"');
console.log("=== BÀI 1 CONG NGHE 7 ===");
console.log(cn7.substring(idx1, idx2));
