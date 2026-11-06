// verify_gdtc9.js - Kịch bản kiểm thử toàn diện môn Giáo dục thể chất 9

const fs = require('fs');
const path = require('path');

let errors = [];
let passes = [];

function assert(condition, message) {
  if (condition) {
    passes.push(message);
    console.log(' [PASS] ' + message);
  } else {
    errors.push(message);
    console.error('❌ [FAIL] ' + message);
  }
}

console.log('=== BẮT ĐẦU KIỂM THỬ GIÁO DỤC THỂ CHẤT 9 ===\n');

// 1. Check file existence & size
const viPath = path.resolve(__dirname, '../courses/gdtc_9.html');
const enPath = path.resolve(__dirname, '../courses/physical_education_9.html');
const indexPath = path.resolve(__dirname, '../index.html');

assert(fs.existsSync(viPath), 'File courses/gdtc_9.html tồn tại');
assert(fs.existsSync(enPath), 'File courses/physical_education_9.html tồn tại');
assert(fs.existsSync(indexPath), 'File index.html tồn tại');

const viHtml = fs.readFileSync(viPath, 'utf8');
const enHtml = fs.readFileSync(enPath, 'utf8');
const idxHtml = fs.readFileSync(indexPath, 'utf8');

assert(viHtml.length > 300000, `Kích thước gdtc_9.html (${viHtml.length} bytes) > 300KB`);
assert(enHtml.length > 300000, `Kích thước physical_education_9.html (${enHtml.length} bytes) > 300KB`);

// 2. Check 3 Parts
assert(viHtml.includes('Phần I. Kiến thức chung'), 'Có Phần I. Kiến thức chung');
assert(viHtml.includes('Phần II. Vận động cơ bản'), 'Có Phần II. Vận động cơ bản');
assert(viHtml.includes('Phần III. Thể thao tự chọn'), 'Có Phần III. Thể thao tự chọn');

// 3. Check 8 Topics & 19 Lessons
const expectedTopics = [
  'topic-ktc',
  'topic-chay-100m',
  'topic-nhay-cao',
  'topic-chay-trung-binh',
  'topic-the-duc',
  'topic-cau-long',
  'topic-bong-da',
  'topic-bong-ro'
];

expectedTopics.forEach((id, idx) => {
  assert(viHtml.includes(`id="${id}"`), `Chủ đề ${idx + 1} (${id}) có section trong HTML`);
  assert(viHtml.includes(`data-id="${id}"`), `Chủ đề ${idx + 1} (${id}) có link trong sidebar TOC`);
});

// Check specific Bài 3 of Nhảy cao kiểu nằm nghiêng (Trang 29 SGK)
assert(viHtml.includes('id="bai-nhay-cao-3"'), 'Có Bài 3 nhảy cao kiểu nằm nghiêng (id="bai-nhay-cao-3")');
assert(viHtml.includes('Bài 3. Phối hợp các giai đoạn kĩ thuật nhảy cao kiểu nằm nghiêng'), 'Có tiêu đề Bài 3. Phối hợp các giai đoạn kĩ thuật nhảy cao kiểu nằm nghiêng');

// Check all 19 lessons rendered in sidebar TOC
const lessonSubLinksCount = (viHtml.match(/class="lesson-sub-link/g) || []).length;
assert(lessonSubLinksCount >= 19, `Số lượng bài học hiển thị chi tiết ở Sidebar TOC: ${lessonSubLinksCount}/19 bài`);

// 4. Check SVG diagrams and lesson illustrations
const svgCount = (viHtml.match(/<svg/g) || []).length;
assert(svgCount >= 31, `Số lượng thẻ SVG trong trang (${svgCount}) >= 31 (8 sơ đồ tổng quan + 23 hình mô phỏng bài học)`);

const lessonSimBoxCount = (viHtml.match(/class="lesson-simulation-box/g) || []).length;
assert(lessonSimBoxCount === 23, `Số hộp mô phỏng kĩ thuật từng bài học (lesson-simulation-box): ${lessonSimBoxCount}/23 bài`);

// 5. Check Interactive Sports Nutrition Calculator Widget
assert(viHtml.includes('id="nutrition-calculator-widget"'), 'Có widget Máy tính dinh dưỡng thể thao (id="nutrition-calculator-widget")');
assert(viHtml.includes('calculateNutritionPlan'), 'Có hàm tính toán tự động calculateNutritionPlan');
assert(viHtml.includes('id="calc-sport-type"'), 'Có bộ chọn mục tiêu thể thao');
assert(viHtml.includes('id="calc-res-carbs"'), 'Hiển thị kết quả Carbohydrate');
assert(viHtml.includes('id="calc-res-protein"'), 'Hiển thị kết quả Protein');
assert(viHtml.includes('id="calc-res-lipid"'), 'Hiển thị kết quả Lipid');
assert(viHtml.includes('id="calc-res-water"'), 'Hiển thị lượng nước cần bù');

// 6. Check 12 terms in Sổ tay thuật ngữ modal
assert(viHtml.includes('id="handbook-modal"'), 'Có modal Sổ tay 12 thuật ngữ (id="handbook-modal")');
const termCardCount = (viHtml.match(/class="term-card/g) || []).length;
assert(termCardCount === 12, `Số lượng thuật ngữ trong sổ tay: ${termCardCount}/12`);

// 7. Check 25 questions in Trạng Nguyên exam modal
assert(viHtml.includes('id="exam-modal"'), 'Có modal Thi Trạng Nguyên (id="exam-modal")');
const examItemCount = (viHtml.match(/class="exam-question-item/g) || []).length;
assert(examItemCount === 25, `Số câu hỏi trong đề thi Trạng Nguyên: ${examItemCount}/25`);
assert(viHtml.includes('exam-timer'), 'Có đồng hồ đếm ngược thời gian thi Trạng Nguyên');
assert(viHtml.includes('submitExam'), 'Có hàm nộp bài & xếp hạng danh hiệu Trạng Nguyên');

// 8. Check 32 quizzes (4 per topic)
const quizItemCount = (viHtml.match(/id="quiz-topic-/g) || []).length;
assert(quizItemCount === 32, `Tổng số câu hỏi củng cố trong 8 chủ đề: ${quizItemCount}/32`);

// 9. Check index.html integration
assert(idxHtml.includes('courses/gdtc_9.html'), 'index.html chứa thẻ khóa học GDTC 9 liên kết tới courses/gdtc_9.html');
assert(idxHtml.includes('Giáo Dục Thể Chất 9'), 'index.html hiển thị tiêu đề Giáo Dục Thể Chất 9');

// 10. Check clean integrity (no undefined, no phone numbers)
const undefinedMatches = (viHtml.match(/undefined/g) || []).length;
assert(undefinedMatches === 0, `Không có chuỗi "undefined" trong gdtc_9.html (tìm thấy: ${undefinedMatches})`);

const enUndefinedMatches = (enHtml.match(/undefined/g) || []).length;
assert(enUndefinedMatches === 0, `Không có chuỗi "undefined" trong physical_education_9.html (tìm thấy: ${enUndefinedMatches})`);

const enSvgCount = (enHtml.match(/<svg/g) || []).length;
assert(enSvgCount >= 31, `physical_education_9.html có đủ ${enSvgCount} thẻ SVG (>= 31)`);

const enSimBoxCount = (enHtml.match(/class="lesson-simulation-box/g) || []).length;
assert(enSimBoxCount === 23, `physical_education_9.html có đủ 23/23 hộp mô phỏng (lesson-simulation-box)`);

const phonePattern = /(0\d{9,10}|\+84\d{9,10}|09\d{8}|08\d{8}|07\d{8}|03\d{8}|05\d{8})/g;
const viMatches = viHtml.match(phonePattern) || [];
assert(viMatches.length === 0, `Không có số điện thoại cá nhân trong gdtc_9.html (tìm thấy: ${viMatches.length})`);

console.log('\n=== TỔNG KẾT KIỂM THỬ ===');
console.log(`- Vượt qua: ${passes.length} tiêu chí`);
console.log(`- Thất bại: ${errors.length} tiêu chí`);

if (errors.length > 0) {
  console.error('\nCần khắc phục các lỗi trên!');
  process.exit(1);
} else {
  console.log('\nTẤT CẢ 100% TIÊU CHÍ ĐÃ VƯỢT QUA XUẤT SẮC!');
  process.exit(0);
}
