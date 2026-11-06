const fs = require('fs');

const t6 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_6.html', 'utf8');

// Xem bài 15 của toan_6 để xem cấu trúc 1 bài học của toan_6 như thế nào
const idx = t6.indexOf('id="lesson-15"');
if (idx !== -1) {
  console.log(t6.substring(idx, idx + 2500));
}
