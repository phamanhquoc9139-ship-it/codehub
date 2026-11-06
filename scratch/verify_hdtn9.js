// verify_hdtn9.js - Kịch bản kiểm thử toàn diện môn Hoạt động trải nghiệm, hướng nghiệp 9 theo đúng Mục lục SGK Kết nối tri thức
const fs = require('fs');
const path = require('path');

let errors = [];
let passes = [];

function assert(condition, message) {
  if (condition) {
    passes.push(message);
    console.log('✅ [PASS] ' + message);
  } else {
    errors.push(message);
    console.error('❌ [FAIL] ' + message);
  }
}

console.log('=== BẮT ĐẦU KIỂM THỬ HOẠT ĐỘNG TRẢI NGHIỆM, HƯỚNG NGHIỆP 9 (THEO MỤC LỤC SGK) ===\n');

// 1. Check file existence & size
const viPath = path.resolve(__dirname, '../courses/hdtn_9.html');
const viAliasPath = path.resolve(__dirname, '../courses/hdtnhn_9.html');
const enPath = path.resolve(__dirname, '../courses/career_experience_9.html');
const indexPath = path.resolve(__dirname, '../index.html');

assert(fs.existsSync(viPath), 'File courses/hdtn_9.html tồn tại');
assert(fs.existsSync(viAliasPath), 'File courses/hdtnhn_9.html tồn tại');
assert(fs.existsSync(enPath), 'File courses/career_experience_9.html tồn tại');
assert(fs.existsSync(indexPath), 'File index.html tồn tại');

const viHtml = fs.readFileSync(viPath, 'utf8');
const viAliasHtml = fs.readFileSync(viAliasPath, 'utf8');
const enHtml = fs.readFileSync(enPath, 'utf8');
const idxHtml = fs.readFileSync(indexPath, 'utf8');

assert(viHtml.length > 300000, `Kích thước hdtn_9.html (${viHtml.length} bytes) > 300KB`);
assert(viAliasHtml.length > 300000, `Kích thước hdtnhn_9.html (${viAliasHtml.length} bytes) > 300KB`);
assert(enHtml.length > 300000, `Kích thước career_experience_9.html (${enHtml.length} bytes) > 300KB`);

// 2. Check 9 Chủ đề theo đúng thứ tự tuần tự SGK (Chủ đề 1 -> Chủ đề 9)
const expectedTopics = [
  { id: 'topic-cd1', title: 'EM VỚI NHÀ TRƯỜNG', page: 'Trang 4' },
  { id: 'topic-cd2', title: 'KHÁM PHÁ BẢN THÂN', page: 'Trang 11' },
  { id: 'topic-cd3', title: 'TRÁCH NHIỆM VỚI BẢN THÂN', page: 'Trang 16' },
  { id: 'topic-cd4', title: 'RÈN LUYỆN BẢN THÂN', page: 'Trang 22' },
  { id: 'topic-cd5', title: 'EM VỚI GIA ĐÌNH', page: 'Trang 27' },
  { id: 'topic-cd6', title: 'EM VỚI CỘNG ĐỒNG', page: 'Trang 34' },
  { id: 'topic-cd7', title: 'EM VỚI THIÊN NHIÊN VÀ MÔI TRƯỜNG', page: 'Trang 41' },
  { id: 'topic-cd8', title: 'KHÁM PHÁ THẾ GIỚI NGHỀ NGHIỆP', page: 'Trang 48' },
  { id: 'topic-cd9', title: 'HIỂU BẢN THÂN – CHỌN ĐÚNG NGHỀ', page: 'Trang 53' }
];

let lastPos = -1;
let inOrder = true;
expectedTopics.forEach((t, idx) => {
  assert(viHtml.includes(`id="${t.id}"`), `Chủ đề ${idx + 1} (${t.id} - ${t.title}) có section trong HTML`);
  assert(viHtml.includes(`data-id="${t.id}"`), `Chủ đề ${idx + 1} (${t.id}) có link trong sidebar TOC`);
  assert(viHtml.includes(t.page), `Chủ đề ${idx + 1} có số trang ${t.page}`);

  const curPos = viHtml.indexOf(`id="${t.id}"`);
  if (curPos < lastPos) {
    inOrder = false;
  }
  lastPos = curPos;
});
assert(inOrder, 'Thứ tự các section Chủ đề 1 đến Chủ đề 9 trong HTML hiển thị đúng tuần tự SGK');

// 3. Check 20 Bài học / Hoạt động chuẩn SGK Kết nối tri thức
const expectedLessons = [
  // Chủ đề 1
  'hdtn-cd1-hd1', 'hdtn-cd1-hd2', 'hdtn-cd1-hd3',
  // Chủ đề 2
  'hdtn-cd2-hd1', 'hdtn-cd2-hd2',
  // Chủ đề 3
  'hdtn-cd3-hd1', 'hdtn-cd3-hd2',
  // Chủ đề 4
  'hdtn-cd4-hd1', 'hdtn-cd4-hd2',
  // Chủ đề 5
  'hdtn-cd5-hd1', 'hdtn-cd5-hd2', 'hdtn-cd5-hd3',
  // Chủ đề 6
  'hdtn-cd6-hd1', 'hdtn-cd6-hd2', 'hdtn-cd6-hd3',
  // Chủ đề 7
  'hdtn-cd7-hd1', 'hdtn-cd7-hd2',
  // Chủ đề 8
  'hdtn-cd8-hd1',
  // Chủ đề 9
  'hdtn-cd9-hd1', 'hdtn-cd9-hd2'
];

expectedLessons.forEach((lid, lIdx) => {
  assert(viHtml.includes(`id="${lid}"`), `Bài học ${lIdx + 1} (${lid}) có thẻ trong HTML`);
});

const lessonSubLinksCount = (viHtml.match(/class="lesson-sub-link/g) || []).length;
assert(lessonSubLinksCount === 20, `Sidebar TOC hiển thị đủ ${lessonSubLinksCount}/20 bài học chi tiết theo mục lục SGK`);

// 4. Check Appendix Glossary: Một số thuật ngữ dùng trong sách (Trang 61)
assert(viHtml.includes('MỘT SỐ THUẬT NGỮ DÙNG TRONG SÁCH'), 'Sidebar có mục Một số thuật ngữ dùng trong sách');
assert(viHtml.includes('Trang 61'), 'Có dẫn chiếu Trang 61 cho mục Thuật ngữ');

// 5. Check SVG diagrams and simulation boxes
const viSvgCount = (viHtml.match(/<svg/g) || []).length;
assert(viSvgCount >= 29, `Số lượng thẻ SVG trong trang (${viSvgCount}) >= 29 (9 sơ đồ tổng quan + 20 hình mô phỏng bài học)`);

const lessonSimBoxCount = (viHtml.match(/class="lesson-simulation-box/g) || []).length;
assert(lessonSimBoxCount === 20, `Số hộp mô phỏng kĩ năng từng bài học (lesson-simulation-box): ${lessonSimBoxCount}/20 bài`);

// 6. Check that NO invalid HTML tags exist inside SVG
const svgBlocks = viHtml.match(/<svg[\s\S]*?<\/svg>/g) || [];
let invalidTagInSvg = 0;
svgBlocks.forEach(svg => {
  if (svg.includes('<div') || svg.includes('</div>') || svg.includes('<span') || svg.includes('</span>') || svg.includes('<p>') || svg.includes('</p>')) {
    invalidTagInSvg++;
  }
});
assert(invalidTagInSvg === 0, `Không có thẻ HTML không hợp lệ (div, span, p) bên trong bất kì thẻ SVG nào (tìm thấy: ${invalidTagInSvg})`);

// 7. Check Interactive Widgets
assert(viHtml.includes('id="budget-planner-widget"'), 'Có widget Quản lí ngân sách cá nhân (id="budget-planner-widget")');
assert(viHtml.includes('calculatePersonalBudget'), 'Có hàm tính toán cân đối ngân sách calculatePersonalBudget');
assert(viHtml.includes('id="budget-res-diff"'), 'Hiển thị kết quả chênh lệch cân đối tài chính');

assert(viHtml.includes('id="career-decision-widget"'), 'Có widget Bảng tự đánh giá chọn hướng đi sau THCS (id="career-decision-widget")');

// 8. Check 12 terms in Handbook Modal
assert(viHtml.includes('id="handbook-modal"'), 'Có modal Sổ tay thuật ngữ (id="handbook-modal")');
const termCardCount = (viHtml.match(/class="term-card/g) || []).length;
assert(termCardCount === 12, `Số lượng thuật ngữ trong sổ tay: ${termCardCount}/12`);

// 9. Check 25 questions in Trạng Nguyên Exam Modal
assert(viHtml.includes('id="exam-modal"'), 'Có modal Thi Trạng Nguyên (id="exam-modal")');
const examItemCount = (viHtml.match(/class="exam-question-item/g) || []).length;
assert(examItemCount === 25, `Số câu hỏi trong đề thi Trạng Nguyên: ${examItemCount}/25`);
assert(viHtml.includes('exam-timer'), 'Có đồng hồ đếm ngược thời gian thi Trạng Nguyên');
assert(viHtml.includes('submitExam'), 'Có hàm nộp bài & xếp hạng danh hiệu Trạng Nguyên');

// 10. Check 36 quick quizzes (4 questions per topic x 9 topics)
const quizItemCount = (viHtml.match(/id="quiz-topic-cd/g) || []).length;
assert(quizItemCount === 36, `Tổng số câu hỏi củng cố trong 9 chủ đề: ${quizItemCount}/36`);

// 11. Check index.html integration
assert(idxHtml.includes('courses/hdtn_9.html'), 'index.html chứa thẻ khóa học HĐTN, HN 9 liên kết tới courses/hdtn_9.html');
assert(idxHtml.includes('HĐ Trải Nghiệm, Hướng Nghiệp 9'), 'index.html hiển thị tiêu đề HĐ Trải Nghiệm, Hướng Nghiệp 9');

// 12. Check clean integrity (no undefined, no phone numbers)
const undefinedMatches = (viHtml.match(/undefined/g) || []).length;
assert(undefinedMatches === 0, `Không có chuỗi "undefined" trong hdtn_9.html (tìm thấy: ${undefinedMatches})`);

const enUndefinedMatches = (enHtml.match(/undefined/g) || []).length;
assert(enUndefinedMatches === 0, `Không có chuỗi "undefined" trong career_experience_9.html (tìm thấy: ${enUndefinedMatches})`);

const enSvgCount = (enHtml.match(/<svg/g) || []).length;
assert(enSvgCount >= 29, `career_experience_9.html có đủ ${enSvgCount} thẻ SVG (>= 29)`);

const enSimBoxCount = (enHtml.match(/class="lesson-simulation-box/g) || []).length;
assert(enSimBoxCount === 20, `career_experience_9.html có đủ 20/20 hộp mô phỏng (lesson-simulation-box)`);

const phonePattern = /(0\d{9,10}|\+84\d{9,10}|09\d{8}|08\d{8}|07\d{8}|03\d{8}|05\d{8})/g;
const viMatches = viHtml.match(phonePattern) || [];
assert(viMatches.length === 0, `Không có số điện thoại cá nhân trong hdtn_9.html (tìm thấy: ${viMatches.length})`);

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
