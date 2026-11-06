const fs = require('fs');
const vm = require('vm');

const htmlPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tiengtrung_10.html';
const content = fs.readFileSync(htmlPath, 'utf8');

console.log('=== AUDIT TIẾNG TRUNG QUỐC 10 ===');
console.log('File size:', (content.length / 1024).toFixed(1), 'KB');

// 1. Units check
const expectedUnits = [
  'bai-1', 'bai-2', 'bai-3', 'bai-r1',
  'bai-4', 'bai-5', 'bai-r2',
  'bai-6', 'bai-7', 'bai-8', 'bai-r3',
  'bai-9', 'bai-10', 'bai-r4'
];

let missingUnits = 0;
expectedUnits.forEach(u => {
  if (!content.includes(`id="${u}"`)) {
    console.error(`Missing unit id="${u}"!`);
    missingUnits++;
  }
});
console.log(`Units check: ${missingUnits === 0 ? 'ALL 14/14 units present (10 lessons + 4 reviews)' : missingUnits + ' missing'}`);

// 2. SVG diagrams check
const svgMatches = content.match(/<svg[\s\S]*?<\/svg>/gi) || [];
console.log(`SVG diagrams count: ${svgMatches.length} / 14`);

// 3. Quiz check
const quizItemMatches = content.match(/class="quiz-item\b/gi) || [];
console.log(`Quiz item count: ${quizItemMatches.length} (expected >= 42)`);

const quizOptMatches = content.match(/class="quiz-opt\b/gi) || [];
console.log(`Quiz options count: ${quizOptMatches.length} (expected >= 168)`);

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

// 5. Modals check
const modals = ['modal-grammar', 'modal-hanzi', 'modal-exam'];
modals.forEach(m => {
  console.log(`Modal ${m} present:`, content.includes(`id="${m}"`));
});

// 6. Speech check
const speakCalls = content.match(/speakChinese\(/g) || [];
console.log(`speakChinese audio calls: ${speakCalls.length}`);

// 7. Pinyin toggle check
console.log('Pinyin toggle button present:', content.includes('id="pinyin-toggle-btn"'));
console.log('pinyin-text classes count:', (content.match(/class="[^"]*pinyin-text[^"]*"/g) || []).length);

// 8. JS Syntax check
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
