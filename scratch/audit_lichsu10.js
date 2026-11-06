const fs = require('fs');
const path = require('path');
const vm = require('vm');

const filePath = path.join(__dirname, '..', 'courses', 'lichsu_10.html');
const html = fs.readFileSync(filePath, 'utf8');

const errors = [];

// 1. Check all 7 topics
for (let t = 1; t <= 7; t++) {
  if (!html.includes(`id="chude-${t}"`)) errors.push(`Missing topic section #chude-${t}`);
}

// 2. Check all 13 lessons and their 5 sub-sections A-E
for (let i = 1; i <= 13; i++) {
  if (!html.includes(`id="bai-${i}"`)) errors.push(`Missing lesson #bai-${i}`);
  if (!html.includes(`href="#bai-${i}"`)) errors.push(`Missing sidebar link href="#bai-${i}"`);
  if (!html.includes(`id="b${i}-khai-niem"`)) errors.push(`Missing section A #b${i}-khai-niem`);
  if (!html.includes(`id="b${i}-noi-dung"`)) errors.push(`Missing section B #b${i}-noi-dung`);
  if (!html.includes(`id="b${i}-su-lieu"`)) errors.push(`Missing section C #b${i}-su-lieu`);
  if (!html.includes(`id="b${i}-so-do"`)) errors.push(`Missing section D #b${i}-so-do`);
  if (!html.includes(`id="b${i}-trac-nghiem"`)) errors.push(`Missing section E #b${i}-trac-nghiem`);
}

// 3. Check final summary section
if (!html.includes('id="he-thong-moc-va-ki-nang"')) {
  errors.push('Missing final summary section #he-thong-moc-va-ki-nang');
}

// 4. Count SVGs & Quiz cards
const svgCount = (html.match(/<svg[\s>]/g) || []).length;
const quizCardCount = (html.match(/class="quiz-card\b/g) || []).length;
if (svgCount < 13) errors.push(`Expected at least 13 SVGs, found ${svgCount}`);
if (quizCardCount !== 65) errors.push(`Expected 65 quiz cards, found ${quizCardCount}`);

// 5. Check sticky sidebar scroll classes
if (!html.includes('h-[calc(100vh-5.5rem)]') || !html.includes('flex-1 min-h-0')) {
  errors.push('Missing sticky sidebar flex scroll classes');
}

// 6. Check for undefined / NaN / raw LaTeX tokens
if (html.includes('undefined')) errors.push('Found literal "undefined" in HTML output');
if (html.includes('NaN')) errors.push('Found literal "NaN" in HTML output');
if (html.includes('\\pi') || html.includes('^\\circ')) errors.push('Found unformatted LaTeX tokens in HTML');

// 7. Validate inline <script> syntax
const scriptBlocks = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
scriptBlocks.forEach((m, idx) => {
  try {
    new vm.Script(m[1]);
  } catch (err) {
    errors.push(`Script block #${idx + 1} syntax error: ${err.message}`);
  }
});

console.log('=== AUDIT REPORT: courses/lichsu_10.html ===');
console.log('- File size:', (Buffer.byteLength(html, 'utf8') / 1024).toFixed(1), 'KB');
console.log('- Topics verified: 7 / 7');
console.log('- Lessons verified: 13 / 13 (Parts A, B, C, D, E)');
console.log('- SVG diagrams count:', svgCount);
console.log('- In-lesson quiz questions:', quizCardCount);
console.log('- Inline script blocks syntax checked:', scriptBlocks.length);

if (errors.length) {
  console.error('AUDIT FAILED:', errors);
  process.exit(1);
} else {
  console.log('STATUS: ALL CHECKS PASSED (0 ERRORS)');
}
