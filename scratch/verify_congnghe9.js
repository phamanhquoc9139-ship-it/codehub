const fs = require('fs');
const path = require('path');

const congnghe9Path = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_9.html';
const technology9Path = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/technology_9.html';
const indexPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html';

console.log('--- VERIFYING CÔNG NGHỆ 9 ĐỊNH HƯỚNG NGHỀ NGHIỆP ---');

const cn9 = fs.readFileSync(congnghe9Path, 'utf8');
const tech9 = fs.readFileSync(technology9Path, 'utf8');
const indexHtml = fs.readFileSync(indexPath, 'utf8');

let errors = 0;
function assert(cond, msg) {
  if (cond) {
    console.log(`[PASS] ${msg}`);
  } else {
    console.error(`[FAIL] ${msg}`);
    errors++;
  }
}

// 1. Files identical
assert(cn9 === tech9, 'congnghe_9.html and technology_9.html are 100% identical');

// 2. 5 Lessons exist
for (let i = 1; i <= 5; i++) {
  assert(cn9.includes(`id="bai-${i}"`), `Lesson bai-${i} exists in HTML`);
}

// 3. Essential Content Checks
const requiredPhrases = [
  'Nghề nghiệp trong lĩnh vực kĩ thuật và công nghệ',
  'Cơ cấu hệ thống giáo dục quốc dân',
  'Thị trường lao động kĩ thuật, công nghệ tại Việt Nam',
  'Quy trình lựa chọn nghề nghiệp',
  'Dự án: Tự đánh giá mức độ phù hợp của bản thân',
  'Lập trình viên',
  'Phân luồng',
  'Mô hình 9+',
  'Cung lao động',
  'Cầu lao động',
  'Holland',
  'RIASEC',
  'Cây nghề nghiệp',
  'Ikigai',
  'Bảng Tự Đánh Giá Mức Độ Phù Hợp Nghề Nghiệp (10 Tiêu Chí SGK)'
];

requiredPhrases.forEach(phrase => {
  assert(cn9.includes(phrase), `Contains essential content: "${phrase}"`);
});

// 4. Interactive Components
assert(cn9.includes('calculateAssessmentScore'), 'Interactive assessment calculation function exists');
assert(cn9.includes('assessment-checkbox'), 'Assessment checkboxes exist');
assert(cn9.includes('checkLessonQuiz'), 'Lesson quiz handler exists');
assert(cn9.includes('openTermModal'), 'Term modal handler exists');
assert(cn9.includes('openExamModal'), 'Exam modal handler exists');

// 5. Code cleanliness
assert(!cn9.includes('&implies;'), 'No broken &implies; entity');
assert(!cn9.includes('undefined'), 'No accidental undefined in generated text');
assert(!cn9.includes('NaN'), 'No NaN in generated text');

// 6. Index.html card check
assert(indexHtml.includes('courses/congnghe_9.html'), 'index.html contains card link to courses/congnghe_9.html');
assert(indexHtml.includes('Công Nghệ 9'), 'index.html contains Công Nghệ 9 title');

console.log(`\nVerification finished with ${errors} errors.`);
process.exit(errors === 0 ? 0 : 1);
