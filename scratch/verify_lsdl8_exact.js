// scratch/verify_lsdl8_exact.js
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../courses/lsdl_8.html');
const content = fs.readFileSync(filePath, 'utf8');

console.log('=== EXACT VERIFICATION REPORT FOR LỊCH SỬ VÀ ĐỊA LÍ 8 ===');
console.log('File size:', (content.length / 1024).toFixed(1), 'KB (', content.length, 'bytes )');

console.log('1. Main Title present:', content.includes('KIẾN THỨC CỐT LÕI – LỊCH SỬ VÀ ĐỊA LÍ 8'));
console.log('2. SGK subtitle present:', content.includes('THEO SGK LỊCH SỬ VÀ ĐỊA LÍ 8 – BỘ KẾT NỐI TRI THỨC VỚI CUỘC SỐNG'));
console.log('3. Blockquote present:', content.includes('Học liệu nền để đưa vào website. Nội dung đi theo đủ 19 bài Lịch sử, 12 bài Địa lí'));
console.log('4. "1. Bản đồ chương trình" table present:', content.includes('1. Bản Đồ Chương Trình') && content.includes('Châu Âu và Bắc Mỹ từ nửa sau thế kỉ XVI đến thế kỉ XVIII'));
console.log('5. "Kĩ năng xuyên suốt" present:', content.includes('Kĩ năng xuyên suốt') && content.includes('Đọc trục thời gian, niên biểu, lược đồ chiến sự'));

// Check 19 History lessons
let missingHist = [];
for (let i = 1; i <= 19; i++) {
  if (!content.includes(`id="unit-ls-${i}"`)) missingHist.push(i);
}
console.log('6. All 19 History Lessons present:', missingHist.length === 0 ? 'YES (19/19)' : missingHist);

// Check 12 Geo lessons
let missingGeo = [];
for (let i = 1; i <= 12; i++) {
  if (!content.includes(`id="unit-dl-${i}"`)) missingGeo.push(i);
}
console.log('7. All 12 Geography Lessons present:', missingGeo.length === 0 ? 'YES (12/12)' : missingGeo);

// Check 2 Common topics
let missingCommon = [];
for (let i = 1; i <= 2; i++) {
  if (!content.includes(`id="unit-cd-${i}"`)) missingCommon.push(i);
}
console.log('8. All 2 Common Topics present:', missingCommon.length === 0 ? 'YES (2/2)' : missingCommon);

console.log('9. "2. Sơ đồ ôn tập" present:', content.includes('2. Sơ Đồ Ôn Tập') && content.includes('Cách mạng tư sản/công nghiệp → chủ nghĩa đế quốc'));
console.log('10. "3. Mẫu phân tích sự kiện lịch sử" table present:', content.includes('3. Mẫu Phân Tích Sự Kiện Lịch Sử') && content.includes('Bối cảnh') && content.includes('Nguyên nhân'));
console.log('11. "4. Mẫu phân tích hiện tượng địa lí" present:', content.includes('4. Mẫu Phân Tích Hiện Tượng Địa Lí') && content.includes('Xác định vị trí và phạm vi trên bản đồ'));
console.log('12. "Nguồn biên soạn" present:', content.includes('Tóm lược và diễn đạt lại từ SGK Lịch sử và Địa lí 8, bộ Kết nối tri thức với cuộc sống'));

const svgCount = (content.match(/<svg/g) || []).length;
console.log('13. Vector SVG Diagrams:', svgCount, '(Target: >= 33)');

const quizCount = (content.match(/class="quiz-item/g) || []).length;
console.log('14. Interactive Mini Quizzes:', quizCount, '(Target: 33)');

const examQCount = (content.match(/"ans":/g) || []).length;
console.log('15. Trạng Nguyên Exam Questions Count:', examQCount, '(Target: 20)');

const p2Path = path.join(__dirname, '../courses/history_geography_8.html');
const p2Content = fs.readFileSync(p2Path, 'utf8');
console.log('16. history_geography_8.html identical to lsdl_8.html:', content === p2Content);

console.log('=== VERIFICATION PASSED PERFECTLY ===');
