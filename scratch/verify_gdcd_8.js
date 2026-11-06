const fs = require('fs');

const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdcd_8.html', 'utf8');

console.log("=== KIỂM TRA MÔN GDCD 8 ===");
console.log("File size:", html.length, "bytes");

// Kiểm tra 10 bài học
let lessonCount = 0;
for (let i = 1; i <= 10; i++) {
  if (html.includes(`id="bai-${i}"`)) {
    lessonCount++;
  } else {
    console.log(`Missing bai-${i}`);
  }
}
console.log(`Lessons verified: ${lessonCount}/10`);

// Đếm số SVG
const svgCount = (html.match(/<svg/g) || []).length;
console.log(`Total SVGs in page: ${svgCount}`);

// Kiểm tra tính năng
console.log("Has 4 Mach badges:", html.includes('Mạch 1: Giáo dục đạo đức') && html.includes('Mạch 4: Giáo dục pháp luật'));
console.log("Has SMART model in Bai 6:", html.includes('S - SPECIFIC'));
console.log("Has Domestic Violence in Bai 7:", html.includes('4 HÌNH THỨC BẠO LỰC GIA ĐÌNH'));
console.log("Has Budget 50/30/20 in Bai 8:", html.includes('1. THIẾT YẾU (50%)'));
console.log("Has Hotline in Modal:", html.includes('111') && html.includes('114'));
console.log("Has Trang Nguyen Exam 60:00:", html.includes('id="section-exam"') && html.includes('id="examTimer"'));
