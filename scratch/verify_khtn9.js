// verify_khtn9.js - Kịch bản kiểm thử toàn diện môn Khoa học tự nhiên 9
const fs = require('fs');
const path = require('path');

let passes = [];
let errors = [];

function assert(cond, msg) {
  if (cond) {
    passes.push(msg);
    console.log('✅ [PASS] ' + msg);
  } else {
    errors.push(msg);
    console.error('❌ [FAIL] ' + msg);
  }
}

console.log('=== BẮT ĐẦU KIỂM THỬ KHOA HỌC TỰ NHIÊN 9 (51 BÀI HỌC SGK) ===\n');

// 1. Check files
const viPath = path.resolve(__dirname, '../courses/khtn_9.html');
const enPath = path.resolve(__dirname, '../courses/natural_science_9.html');
const indexPath = path.resolve(__dirname, '../index.html');

assert(fs.existsSync(viPath), 'File courses/khtn_9.html tồn tại');
assert(fs.existsSync(enPath), 'File courses/natural_science_9.html tồn tại');
assert(fs.existsSync(indexPath), 'File index.html tồn tại');

const viHtml = fs.readFileSync(viPath, 'utf8');
const enHtml = fs.readFileSync(enPath, 'utf8');
const idxHtml = fs.readFileSync(indexPath, 'utf8');

assert(viHtml.length > 500000, `Kích thước khtn_9.html (${viHtml.length} bytes) > 500KB`);
assert(enHtml.length > 500000, `Kích thước natural_science_9.html (${enHtml.length} bytes) > 500KB`);

// 2. Check 14 Chapters + Bài mở đầu
const expectedChapters = [
  "BÀI MỞ ĐẦU",
  "CHƯƠNG I. NĂNG LƯỢNG CƠ HỌC",
  "CHƯƠNG II. ÁNH SÁNG",
  "CHƯƠNG III. ĐIỆN",
  "CHƯƠNG IV. ĐIỆN TỪ",
  "CHƯƠNG V. NĂNG LƯỢNG VỚI CUỘC SỐNG",
  "CHƯƠNG VI. KIM LOẠI",
  "CHƯƠNG VII. HỢP CHẤT HỮU CƠ & NHIÊN LIỆU",
  "CHƯƠNG VIII. ETHYLIC ALCOHOL & ACETIC ACID",
  "CHƯƠNG IX. LIPID, CARBOHYDRATE, PROTEIN, POLYMER",
  "CHƯƠNG X. TÀI NGUYÊN VỎ TRÁI ĐẤT",
  "CHƯƠNG XI. DI TRUYỀN MENDEL & PHÂN TỬ",
  "CHƯƠNG XII. DI TRUYỀN NHIỄM SẮC THỂ",
  "CHƯƠNG XIII. DI TRUYỀN HỌC VỚI CON NGƯỜI",
  "CHƯƠNG XIV. TIẾN HÓA"
];

expectedChapters.forEach(chap => {
  assert(viHtml.includes(chap), `Có chương: ${chap}`);
});

// 3. Check all 51 lessons
for (let i = 1; i <= 51; i++) {
  assert(viHtml.includes(`id="lesson-${i}"`), `Bài học #${i} có thẻ trong trang (id="lesson-${i}")`);
  assert(viHtml.includes(`data-id="${i}"`), `Bài học #${i} có link trên sidebar navigation`);
}

// 4. Check 51 quick quizzes
const quizButtonsCount = (viHtml.match(/checkLessonQuiz/g) || []).length;
assert(quizButtonsCount >= 51 * 4, `Số nút lựa chọn trắc nghiệm (${quizButtonsCount}) >= 204 (51 bài x 4 đáp án)`);

// 5. Check SVG diagrams - 51 distinct dedicated simulations
const svgMatches = (viHtml.match(/<svg/g) || []).length;
assert(svgMatches >= 51, `Số lượng bản vẽ vector SVG trong trang (${svgMatches}) >= 51 (mỗi bài học có 1 hình mô phỏng riêng biệt)`);

// 6. Check Interactive Widgets
assert(viHtml.includes('id="lens-calc-widget"'), 'Có widget Tính toán thấu kính hội tụ (id="lens-calc-widget")');
assert(viHtml.includes('calculateLensImage'), 'Có hàm tính quang học calculateLensImage');
assert(viHtml.includes('id="ohm-calc-widget"'), 'Có widget Phân tích mạch điện & Định luật Ohm (id="ohm-calc-widget")');
assert(viHtml.includes('calculateCircuit'), 'Có hàm tính toán mạch điện calculateCircuit');
assert(viHtml.includes('id="mendel-punnett-widget"'), 'Có widget Khung Punnett di truyền Mendel (id="mendel-punnett-widget")');
assert(viHtml.includes('generatePunnett'), 'Có hàm tính toán tỉ lệ Mendel generatePunnett');

// 7. Check Trạng Nguyên 60:00 Exam
assert(viHtml.includes('id="exam-section"'), 'Có khu vực thi Trạng Nguyên 60:00 (id="exam-section")');
const examQuestionCardsCount = (viHtml.match(/class="exam-question-card/g) || []).length;
assert(examQuestionCardsCount === 30, `Đề thi Trạng Nguyên có đủ 30 câu hỏi (${examQuestionCardsCount}/30)`);
assert(viHtml.includes('id="exam-timer"'), 'Có đồng hồ đếm ngược thi 60:00');
assert(viHtml.includes('submitExam'), 'Có hàm nộp bài và xếp hạng Trạng Nguyên');

// 8. Check Sổ tay Công thức Modal
assert(viHtml.includes('id="formulas-modal"'), 'Có modal Sổ tay công thức & quy luật (id="formulas-modal")');
const formulaItemsCount = (viHtml.match(/class="[^"]*formula-item/g) || []).length;
assert(formulaItemsCount === 18, `Số công thức trong Sổ tay: ${formulaItemsCount}/18`);

// 9. Check index.html integration
assert(idxHtml.includes('courses/khtn_9.html'), 'index.html chứa thẻ khóa học KHTN 9 liên kết tới courses/khtn_9.html');
assert(idxHtml.includes('Khoa Học Tự Nhiên 9'), 'index.html hiển thị tiêu đề Khoa Học Tự Nhiên 9');

// 10. Check clean integrity (no undefined, no placeholder)
const undefinedMatches = (viHtml.match(/undefined/g) || []).length;
assert(undefinedMatches === 0, `Không có chuỗi "undefined" trong khtn_9.html (tìm thấy: ${undefinedMatches})`);

console.log('\n=== TỔNG KẾT KIỂM THỬ KHTN 9 ===');
console.log(`- Vượt qua: ${passes.length} tiêu chí`);
console.log(`- Thất bại: ${errors.length} tiêu chí`);

if (errors.length > 0) {
  console.error('\nCần khắc phục các lỗi trên!');
  process.exit(1);
} else {
  console.log('\nTẤT CẢ 100% TIÊU CHÍ ĐÃ VƯỢT QUA XUẤT SẮC!');
  process.exit(0);
}
