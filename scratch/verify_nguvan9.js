const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../courses/nguvan_9.html');
const content = fs.readFileSync(filePath, 'utf8');

console.log('File size:', content.length);

const checks = [
  { name: 'Contains undefined', test: () => content.includes('undefined') },
  { name: 'Contains NaN', test: () => content.includes('NaN') },
  { name: 'Contains [object Object]', test: () => content.includes('[object Object]') },
  { name: 'Contains null', test: () => content.includes('null') }
];

checks.forEach(c => {
  const result = c.test();
  console.log(`${c.name}: ${result ? 'FAILED (found)' : 'PASSED (clean)'}`);
});

// Check all 10 lessons + 2 review milestones
for (let i = 1; i <= 10; i++) {
  const hasId = content.includes(`id="bai-${i}"`);
  console.log(`Lesson ${i} article: ${hasId ? 'FOUND' : 'MISSING'}`);
}
console.log(`On tap HKI article: ${content.includes('id="on-tap-hki"') ? 'FOUND' : 'MISSING'}`);
console.log(`On tap HKII article: ${content.includes('id="on-tap-hkii"') ? 'FOUND' : 'MISSING'}`);
console.log(`Trạng Nguyên exam: ${content.includes('id="trang-nguyen-exam"') ? 'FOUND' : 'MISSING'}`);

// Count SVG occurrences
const svgCount = (content.match(/<svg/g) || []).length;
console.log(`Total SVG elements: ${svgCount} (expected >= 12)`);

// Check quiz counts
const quizCount = (content.match(/class="quiz-item/g) || []).length;
console.log(`Total Quiz Cards: ${quizCount} (expected 48)`);

// Check exam questions
const examQCount = (content.match(/name="exam-q-/g) || []).length / 4; // 4 options per question
console.log(`Total Trạng Nguyên exam questions: ${examQCount} (expected 25)`);

// Check literature_9.html
const litContent = fs.readFileSync(path.join(__dirname, '../courses/literature_9.html'), 'utf8');
console.log('literature_9.html size matches:', litContent.length === content.length);
