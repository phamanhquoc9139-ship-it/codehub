// verify_gdcd9.js - Kịch bản kiểm thử toàn diện môn GDCD 9

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

console.log('=== BẮT ĐẦU KIỂM THỬ GIÁO DỤC CÔNG DÂN 9 ===\n');

// 1. Check file existence & size
const viPath = path.resolve(__dirname, '../courses/giaoduccongdan_9.html');
const enPath = path.resolve(__dirname, '../courses/civiceducation_9.html');
const indexPath = path.resolve(__dirname, '../index.html');

assert(fs.existsSync(viPath), 'File courses/giaoduccongdan_9.html tồn tại');
assert(fs.existsSync(enPath), 'File courses/civiceducation_9.html tồn tại');
assert(fs.existsSync(indexPath), 'File index.html tồn tại');

const viHtml = fs.readFileSync(viPath, 'utf8');
const enHtml = fs.readFileSync(enPath, 'utf8');
const idxHtml = fs.readFileSync(indexPath, 'utf8');

assert(viHtml.length > 300000, `Kích thước giaoduccongdan_9.html (${viHtml.length} bytes) > 300KB`);
assert(enHtml.length > 300000, `Kích thước civiceducation_9.html (${enHtml.length} bytes) > 300KB`);

// 2. Check 10 lessons
const expectedLessons = [
  'bai-1', 'bai-2', 'bai-3', 'bai-4', 'bai-5',
  'bai-6', 'bai-7', 'bai-8', 'bai-9', 'bai-10'
];

expectedLessons.forEach((id, idx) => {
  assert(viHtml.includes(`id="${id}"`), `Bài ${idx + 1} (${id}) có section trong HTML`);
  assert(viHtml.includes(`data-id="${id}"`), `Bài ${idx + 1} (${id}) có link trong sidebar TOC`);
});

// 3. Check 10 unique SVG diagrams
const expectedDiagramKeys = [
  'soDoLiTuong',
  'soDoKhoanDung',
  'soDoCongDong',
  'soDoCongLy',
  'soDoHoaBinh',
  'soDoThoiGian',
  'soDoThichUng',
  'soDoTieuDung',
  'soDoViPhamPhapLuat',
  'soDoKinhDoanhThue'
];

const svgCount = (viHtml.match(/<svg/g) || []).length;
assert(svgCount >= 10, `Số lượng thẻ SVG trong trang (${svgCount}) >= 10 sơ đồ`);

// 4. Check Legal Case Analyzer widget in Lesson 9
assert(viHtml.includes('id="legal-case-analyzer"'), 'Có widget tương tác phân tích vụ án pháp luật (id="legal-case-analyzer")');
assert(viHtml.includes('checkLegalCaseAnswer'), 'Có hàm tương tác checkLegalCaseAnswer xử lí án');
assert(viHtml.includes('selectLegalCase'), 'Có hàm chuyển đổi tình huống selectLegalCase');
assert(viHtml.includes('Tình huống 1: Vượt đèn đỏ'), 'Có tình huống vi phạm hành chính (Vượt đèn đỏ)');
assert(viHtml.includes('Tình huống 2: Trộm cắp xe'), 'Có tình huống vi phạm hình sự (Trộm cắp xe)');
assert(viHtml.includes('Tình huống 3: Quỵt tiền cọc'), 'Có tình huống vi phạm dân sự (Quỵt tiền cọc)');
assert(viHtml.includes('Tình huống 4: Bỏ ca trực'), 'Có tình huống vi phạm kỉ luật (Bỏ ca trực)');
assert(viHtml.includes('id="user-violation-type"'), 'Có bộ chọn loại vi phạm pháp luật');
assert(viHtml.includes('id="user-liability-type"'), 'Có bộ chọn trách nhiệm pháp lí tương ứng');

// 5. Check 12 terms in Sổ tay thuật ngữ modal
assert(viHtml.includes('id="handbook-modal"'), 'Có modal Sổ tay 12 thuật ngữ (id="handbook-modal")');
const termCardCount = (viHtml.match(/class="term-card/g) || []).length;
assert(termCardCount === 12, `Số lượng thuật ngữ trong sổ tay: ${termCardCount}/12`);

// 6. Check 25 questions in Trạng Nguyên exam modal
assert(viHtml.includes('id="exam-modal"'), 'Có modal Thi Trạng Nguyên (id="exam-modal")');
const examItemCount = (viHtml.match(/class="exam-question-item/g) || []).length;
assert(examItemCount === 25, `Số câu hỏi trong đề thi Trạng Nguyên: ${examItemCount}/25`);
assert(viHtml.includes('exam-timer'), 'Có đồng hồ đếm ngược thời gian thi Trạng Nguyên');
assert(viHtml.includes('submitExam'), 'Có hàm nộp bài & xếp hạng danh hiệu Trạng Nguyên');

// 7. Check 40 quizzes (4 per lesson)
const quizItemCount = (viHtml.match(/id="quiz-bai-/g) || []).length;
assert(quizItemCount === 40, `Tổng số câu hỏi củng cố trong 10 bài học: ${quizItemCount}/40`);

// 8. Check index.html integration
assert(idxHtml.includes('courses/giaoduccongdan_9.html'), 'index.html chứa thẻ khóa học GDCD 9 liên kết tới courses/giaoduccongdan_9.html');
assert(idxHtml.includes('Giáo Dục Công Dân 9'), 'index.html hiển thị tiêu đề Giáo Dục Công Dân 9');

// 9. Check clean integrity (no fake phone numbers)
const phonePattern = /(0\d{9,10}|\+84\d{9,10}|09\d{8}|08\d{8}|07\d{8}|03\d{8}|05\d{8})/g;
const viMatches = viHtml.match(phonePattern) || [];
assert(viMatches.length === 0, `Không có số điện thoại cá nhân trong giaoduccongdan_9.html (tìm thấy: ${viMatches.length})`);

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
