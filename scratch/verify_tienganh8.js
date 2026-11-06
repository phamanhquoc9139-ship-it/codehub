const fs = require('fs');
const path = require('path');

const pTiengAnh = path.resolve('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tienganh_8.html');
const pEnglish = path.resolve('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/english_8.html');
const pIndex = path.resolve('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html');

console.log('=== VERIFYING TIẾNG ANH 8 ===');

const c1 = fs.readFileSync(pTiengAnh, 'utf8');
const c2 = fs.readFileSync(pEnglish, 'utf8');

console.log('1. File existence & sync:');
console.log(' - tienganh_8.html exists:', fs.existsSync(pTiengAnh), 'Size:', c1.length);
console.log(' - english_8.html exists:', fs.existsSync(pEnglish), 'Size:', c2.length);
console.log(' - 100% Identical:', c1 === c2);

console.log('2. Curriculum Structure:');
const units = (c1.match(/class="lesson-section/g) || []).length;
console.log(' - Total lesson sections (12 Units + 4 Reviews):', units);

const svgMindmaps = (c1.match(/CONCEPT MINDMAP VECTOR/g) || []).length;
console.log(' - Total Concept Mindmap SVGs:', svgMindmaps);

const audioButtons = (c1.match(/speakWord\(/g) || []).length;
console.log(' - Total Vocab Audio Pronunciation Buttons:', audioButtons);

const miniQuizzes = (c1.match(/Mini-Quiz Củng Cố Kiến Thức/g) || []).length;
console.log(' - Total Mini-Quizzes:', miniQuizzes);

console.log('3. Modals & Systems:');
const hasGlossaryModal = c1.includes('id="glossaryModal"');
const hasHandbookModal = c1.includes('id="handbookModal"');
const hasExamModal = c1.includes('id="examModal"');
console.log(' - Glossary Modal (Tra từ vựng):', hasGlossaryModal);
console.log(' - Handbook Modal (Sổ tay ngữ pháp & phát âm):', hasHandbookModal);
console.log(' - Trạng Nguyên Exam Modal (60:00 timer):', hasExamModal);

const examQuestionsCount = (c1.match(/examQuestionsData = /g) || []).length;
console.log(' - Trạng Nguyên Exam Questions integrated:', examQuestionsCount > 0);

console.log('4. Index Card:');
const indexContent = fs.readFileSync(pIndex, 'utf8');
const hasCard = indexContent.includes('courses/tienganh_8.html') && indexContent.includes('Tiếng Anh 8');
console.log(' - Tiếng Anh 8 card in index.html:', hasCard);

console.log('=== VERIFICATION COMPLETE ===');
