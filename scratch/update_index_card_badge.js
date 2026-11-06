const fs = require('fs');

const indexPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html';
let content = fs.readFileSync(indexPath, 'utf8');

const oldDesc = `Tích hợp Bấm giờ thể thao, Đếm nhịp &amp; Trạng Nguyên 60:00.`;
const newDesc = `Tích hợp 8 Bộ hình minh họa kĩ thuật SVG, Bấm giờ thể thao, Đếm nhịp 30 nhịp &amp; Trạng Nguyên 60:00.`;

if (content.includes(oldDesc)) {
  content = content.replace(oldDesc, newDesc);
  fs.writeFileSync(indexPath, content, 'utf8');
  console.log('Updated index.html description for GDTC 7');
} else {
  console.log('Old description not found');
}
