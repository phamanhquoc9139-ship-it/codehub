const fs = require('fs');

const html8 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_8.html', 'utf8');

console.log("=== KIỂM TRA MÔN CÔNG NGHỆ 8 ===");
console.log("File size:", html8.length, "bytes");

// Đếm số bài học
let lessonCount = 0;
for (let i = 1; i <= 20; i++) {
  if (html8.includes(`id="bai-${i}"`)) {
    lessonCount++;
  } else {
    console.log(`Missing bai-${i}!`);
  }
}
console.log(`Lessons verified: ${lessonCount}/20`);

// Đếm số SVG
const svgCount = (html8.match(/<svg/g) || []).length;
console.log(`Total SVGs in page: ${svgCount}`);

// Kiểm tra modal và Trạng Nguyên
console.log("Has Handbook modal:", html8.includes('id="handbookModal"'));
console.log("Has Trang Nguyen Exam:", html8.includes('id="trangNguyenModal"'));
console.log("Has Exam Timer 60:00:", html8.includes('id="examTimer"'));
console.log("Has 5 Chapter Filters:", html8.includes('filterChapter(\'I\')') && html8.includes('filterChapter(\'V\')'));
