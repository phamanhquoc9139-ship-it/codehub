const fs = require('fs');
const path = require('path');

const toanPath = path.resolve('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_8.html');
const mathPath = path.resolve('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/math_8.html');
const indexPath = path.resolve('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html');
const congNghePath = path.resolve('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_8.html');

let allPassed = true;

function check(name, condition, details = '') {
  if (condition) {
    console.log(`[PASS] ${name}`);
  } else {
    console.error(`[FAIL] ${name}: ${details}`);
    allPassed = false;
  }
}

// 1. Check toan_8.html exists and size > 500KB
check('toan_8.html exists', fs.existsSync(toanPath));
const toanStat = fs.statSync(toanPath);
check('toan_8.html size > 600KB', toanStat.size > 600 * 1024, `Size is ${toanStat.size} bytes`);

// 2. Check math_8.html exists and is identical
check('math_8.html exists', fs.existsSync(mathPath));
const mathStat = fs.statSync(mathPath);
check('math_8.html size matches toan_8.html', mathStat.size === toanStat.size);
const toanContent = fs.readFileSync(toanPath, 'utf-8');
const mathContent = fs.readFileSync(mathPath, 'utf-8');
check('math_8.html content matches toan_8.html', toanContent === mathContent);

// 3. Check 39 lessons exist
let missingLessons = [];
for (let i = 1; i <= 39; i++) {
  if (!toanContent.includes(`id="bai-${i}"`)) {
    missingLessons.push(`bai-${i}`);
  }
}
check('All 39 lessons exist', missingLessons.length === 0, `Missing: ${missingLessons.join(', ')}`);

// 4. Check 10 chapters exist
let missingChapters = [];
for (let c = 1; c <= 10; c++) {
  if (!toanContent.includes(`Chương ${c}:`) && !toanContent.includes(`Chương ${['I','II','III','IV','V','VI','VII','VIII','IX','X'][c-1]}:`)) {
    missingChapters.push(`Chương ${c}`);
  }
}
check('All 10 chapters exist', missingChapters.length === 0, `Missing: ${missingChapters.join(', ')}`);

// 5. Check KaTeX loaded
check('KaTeX CSS included', toanContent.includes('katex.min.css'));
check('KaTeX JS included', toanContent.includes('katex.min.js'));
check('KaTeX auto-render included', toanContent.includes('auto-render.min.js'));

// 6. Check Trang Nguyen Exam questions: each question rendered as exam_q_${idx}
let missingExamQ = 0;
for (let q = 0; q < 40; q++) {
  if (!toanContent.includes(`name="exam_q_${q}"`)) {
    missingExamQ++;
  }
}
check('Trạng Nguyên exam has 40 questions', missingExamQ === 0, `Missing ${missingExamQ} questions`);

// 7. Check diagrams in lessons that have shapes/figures
// All geometry lessons MUST have diagrams:
const geometryLessons = [
  { id: 10, name: 'Tứ giác lồi' },
  { id: 11, name: 'Hình thang cân' },
  { id: 12, name: 'Hình bình hành' },
  { id: 13, name: 'Hình chữ nhật' },
  { id: 14, name: 'Hình thoi và hình vuông' },
  { id: 15, name: 'Định lí Thalès' },
  { id: 16, name: 'Đường trung bình tam giác' },
  { id: 17, name: 'Tính chất đường phân giác' },
  { id: 18, name: 'Cây phân loại dữ liệu' },
  { id: 19, name: 'Bộ 3 biểu đồ thống kê' },
  { id: 20, name: 'Phân tích số liệu biểu đồ' },
  { id: 26, name: 'Chu trình giải bài toán lập PT' },
  { id: 28, name: 'Mặt phẳng tọa độ Oxy' },
  { id: 29, name: 'Đồ thị và hệ số góc đường thẳng' },
  { id: 30, name: 'Xác suất ngẫu nhiên' },
  { id: 31, name: 'Xác suất biến cố' },
  { id: 32, name: 'Xác suất thực nghiệm' },
  { id: 33, name: 'Hai tam giác đồng dạng' },
  { id: 34, name: 'Ba trường hợp đồng dạng tam giác' },
  { id: 35, name: 'Định lí Pythagore' },
  { id: 36, name: 'Đồng dạng tam giác vuông' },
  { id: 37, name: 'Hình đồng dạng phối cảnh' },
  { id: 38, name: 'Hình chóp tam giác đều' },
  { id: 39, name: 'Hình chóp tứ giác đều' }
];

let missingGeomDiagrams = [];
geometryLessons.forEach(l => {
  const lessonId = `bai-${l.id}`;
  const start = toanContent.indexOf(`id="${lessonId}"`);
  const nextStart = l.id < 39 ? toanContent.indexOf(`id="bai-${l.id + 1}"`) : toanContent.indexOf('<!-- Modal');
  const slice = toanContent.slice(start, nextStart);
  if (!slice.includes('Sơ đồ trực quan hình học') && !slice.includes('<svg')) {
    missingGeomDiagrams.push(`Bài ${l.id} (${l.name})`);
  }
});
check('All visual/geometric lessons have dedicated diagrams', missingGeomDiagrams.length === 0, `Missing in: ${missingGeomDiagrams.join(', ')}`);

const totalDiagrams = (toanContent.match(/Sơ đồ trực quan hình học/g) || []).length;
check('Total rendered diagrams >= 25', totalDiagrams >= 25, `Found ${totalDiagrams}`);

// 8. Check no broken entities
check('No &implies; in toan_8.html', !toanContent.includes('&implies;'));

// 9. Check index.html link
const indexContent = fs.readFileSync(indexPath, 'utf-8');
check('index.html contains link to courses/toan_8.html', indexContent.includes('courses/toan_8.html'));

// 10. Check congnghe_8.html
const congNgheContent = fs.readFileSync(congNghePath, 'utf-8');
check('No &implies; in congnghe_8.html', !congNgheContent.includes('&implies;'));
check('congnghe_8.html has proper arrow ⇒', congNgheContent.includes('⇒'));

if (allPassed) {
  console.log(`\n>>> ALL VERIFICATION CHECKS PASSED SUCCESSFULLY! (${totalDiagrams} diagrams rendered) <<<`);
} else {
  console.error('\n>>> SOME CHECKS FAILED! <<<');
  process.exit(1);
}
