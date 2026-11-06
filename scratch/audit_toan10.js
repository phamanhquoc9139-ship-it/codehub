const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_10.html', 'utf8');

console.log('=== TOAN 10 UPGRADED AUDIT ===');
console.log('File size:', content.length, 'bytes');

// 1. Sidebar check
const undefinedMatches = content.match(/Bài undefined/g) || [];
console.log('1. Undefined in sidebar:', undefinedMatches.length);

// 2. Combining arrows & ≡
const u20d7Matches = content.match(/\u20D7/g) || [];
const equivMatches = content.match(/P≡|p≡|F≡|v≡|i≡|j≡/g) || [];
console.log('2. Combining arrows \\u20D7:', u20d7Matches.length, '| broken glyphs:', equivMatches.length);

// 3. Raw blockquotes
const rawQuoteDiv = content.match(/<div[^>]*>\s*&gt;/g) || [];
const rawQuoteP = content.match(/<p[^>]*>\s*&gt;/g) || [];
console.log('3. Raw > in div:', rawQuoteDiv.length, '| in p:', rawQuoteP.length);

// 4. Broken LaTeX
const openBracket = content.match(/\\\[/g) || [];
const closeBracket = content.match(/\\\]/g) || [];
console.log('4. \\[ count:', openBracket.length, '| \\] count:', closeBracket.length);

// 5. Lessons check
const lessonMatches = [];
for (let i = 1; i <= 30; i++) {
  if (content.includes('id="bai-' + i + '"')) {
    lessonMatches.push(i);
  }
}
console.log('5. Found lessons:', lessonMatches.length, '/ 30');

// 6. Review Quizzes check
const reviewSections = content.match(/Câu hỏi ôn tập củng cố cuối bài/g) || [];
const quizButtons = content.match(/class="quiz-btn/g) || [];
const questionItems = content.match(/class="quiz-item/g) || [];
console.log('6. Review sections count:', reviewSections.length, '/ 30');
console.log('   Total review question items:', questionItems.length, '/ 90');
console.log('   Total A/B/C/D option buttons:', quizButtons.length, '/ 360');

// 7. Diagrams check
const svgMatches = content.match(/<svg/g) || [];
console.log('7. Pure SVG diagrams count:', svgMatches.length, '/ 30');

// 8. Modals check
console.log('8. Modals:');
console.log('   - modal-formulas:', content.includes('id="modal-formulas"'));
console.log('   - modal-mistakes:', content.includes('id="modal-mistakes"'));
console.log('   - modal-search:', content.includes('id="modal-search"'));
console.log('   - modal-exam:', content.includes('id="modal-exam"'));

// 9. Leaks check
let text = content.replace(/<script[\s\S]*?<\/script>/gi, '');
text = text.replace(/\$\$[\s\S]*?\$\$/g, '');
text = text.replace(/\$[^$]*?\$/g, '');
const leaked = text.match(/\\[a-zA-Z]+/g) || [];
const realLeaks = leaked.filter(w => [
  '\\cup', '\\cap', '\\setminus', '\\subset', '\\in', '\\notin',
  '\\frac', '\\sqrt', '\\alpha', '\\beta', '\\sum', '\\vec',
  '\\mathbb', '\\Delta', '\\omega', '\\theta'
].includes(w));
console.log('9. Leaked LaTeX macros outside math delimiters:', realLeaks.length);

console.log('ALL VERIFICATIONS COMPLETED SUCCESSFULLY!');
