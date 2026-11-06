const fs = require('fs');
const vm = require('vm');

const htmlPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tinhoc_10.html';
const content = fs.readFileSync(htmlPath, 'utf8');

console.log('=== AUDIT TIN HỌC 10 ===');
console.log('File size:', (content.length / 1024).toFixed(1), 'KB');

// 1. Lessons check
let missingLessons = 0;
for (let i = 1; i <= 34; i++) {
  if (!content.includes(`id="bai-${i}"`)) {
    console.error(`Missing lesson id="bai-${i}"!`);
    missingLessons++;
  }
}
console.log(`Lessons check: ${missingLessons === 0 ? '34/34 lessons present' : missingLessons + ' missing'}`);

// 2. SVG diagrams check
const svgMatches = content.match(/<svg[\s\S]*?<\/svg>/gi) || [];
console.log(`SVG diagrams count: ${svgMatches.length} / 34`);

// 3. Quizzes check
const quizItemMatches = content.match(/class="quiz-item\b/gi) || [];
console.log(`Quiz questions count: ${quizItemMatches.length} / 102`);

const quizOptMatches = content.match(/class="quiz-opt\b/gi) || [];
console.log(`Quiz option buttons count: ${quizOptMatches.length} / 408 (4 per question)`);

// 4. Undefined check
const undefinedMatches = content.match(/undefined/gi) || [];
console.log(`"undefined" occurrences: ${undefinedMatches.length}`);
if (undefinedMatches.length > 0) {
  const lines = content.split('\n');
  lines.forEach((l, idx) => {
    if (l.includes('undefined')) {
      console.log(`Line ${idx + 1}: ${l.trim().slice(0, 100)}`);
    }
  });
}

// 5. Triple bar glyph check
const tripleBarMatches = content.match(/≡/g) || [];
console.log(`Triple-bar "≡" occurrences: ${tripleBarMatches.length}`);

// 6. Modals check
const modals = ['modal-formulas', 'modal-mistakes', 'modal-search', 'modal-exam'];
modals.forEach(m => {
  console.log(`Modal ${m} present:`, content.includes(`id="${m}"`));
});

// 7. JS Syntax check
const scriptRegex = /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi;
let match;
let scriptIdx = 0;
while ((match = scriptRegex.exec(content)) !== null) {
  scriptIdx++;
  const code = match[1];
  try {
    new vm.Script(code);
    console.log(`Inline Script ${scriptIdx}: Syntax VALID (${code.length} chars)`);
  } catch (err) {
    console.error(`Inline Script ${scriptIdx} SYNTAX ERROR:`, err.message);
  }
}

console.log('=== AUDIT COMPLETE ===');
