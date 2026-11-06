const fs = require('fs');
const path = require('path');

const pTiengAnh = path.resolve('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tienganh_9.html');
const pEnglish = path.resolve('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/english_9.html');
const pIndex = path.resolve('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html');

console.log('=== VERIFYING TIẾNG ANH 9 ===');

const c1 = fs.readFileSync(pTiengAnh, 'utf8');
const c2 = fs.readFileSync(pEnglish, 'utf8');

console.log('1. File existence & sync:');
console.log(' - tienganh_9.html exists:', fs.existsSync(pTiengAnh), 'Size:', c1.length);
console.log(' - english_9.html exists:', fs.existsSync(pEnglish), 'Size:', c2.length);
console.log(' - 100% Identical:', c1 === c2);

console.log('2. Cleanliness checks:');
console.log(' - Contains undefined:', c1.includes('undefined'));
console.log(' - Contains NaN:', c1.includes('NaN'));
console.log(' - Contains [object Object]:', c1.includes('[object Object]'));

console.log('3. Curriculum Structure:');
const units = (c1.match(/class="lesson-section/g) || []).length;
console.log(' - Total lesson sections (12 Units + 4 Reviews):', units);

for (let i = 1; i <= 12; i++) {
  const hasUnit = c1.includes(`id="unit-${i}"`);
  console.log(`   * Unit ${i}: ${hasUnit ? 'OK' : 'MISSING'}`);
}
for (let r = 1; r <= 4; r++) {
  const hasRev = c1.includes(`id="review-${r}"`);
  console.log(`   * Review ${r}: ${hasRev ? 'OK' : 'MISSING'}`);
}

const svgMindmaps = (c1.match(/Sơ đồ Tư duy Khái niệm/g) || []).length;
console.log(' - Total Concept Mindmap SVGs:', svgMindmaps);

const audioButtons = (c1.match(/speakWord\(/g) || []).length;
console.log(' - Total Vocab Audio Pronunciation Buttons:', audioButtons);

const miniQuizzes = (c1.match(/Mini-Quiz Củng Cố Kiến Thức/g) || []).length;
console.log(' - Total Mini-Quizzes:', miniQuizzes);

console.log('4. Modals & Systems:');
const hasGlossaryModal = c1.includes('id="glossaryModal"');
const hasHandbookModal = c1.includes('id="handbookModal"');
const hasExamModal = c1.includes('id="examModal"');
console.log(' - Glossary Modal (Tra từ vựng):', hasGlossaryModal);
console.log(' - Handbook Modal (Sổ tay cốt lõi):', hasHandbookModal);
console.log(' - Trạng Nguyên Exam Modal (60:00 timer):', hasExamModal);

const examQuestionsCount = (c1.match(/name="exam-q-/g) || []).length / 4;
console.log(' - Trạng Nguyên Exam Questions integrated:', examQuestionsCount);

console.log('5. Index Card:');
const indexContent = fs.readFileSync(pIndex, 'utf8');
const hasCard = indexContent.includes('courses/tienganh_9.html');
console.log(' - Tiếng Anh 9 card in index.html:', hasCard);

console.log('=== VERIFICATION COMPLETE ===');
