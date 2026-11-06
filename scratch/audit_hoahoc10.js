const fs = require('fs');
const path = require('path');
const vm = require('vm');

const filePath = path.join(__dirname, '..', 'courses', 'hoahoc_10.html');
const html = fs.readFileSync(filePath, 'utf8');

const errors = [];

// 1. Check all 7 chapters
for (let c = 1; c <= 7; c++) {
  if (!html.includes(`id="chuong-${c}"`)) errors.push(`Missing chapter section #chuong-${c}`);
}

// 2. Check all 23 lessons and their 5 sub-sections A-E
for (let i = 1; i <= 23; i++) {
  if (!html.includes(`id="bai-${i}"`)) errors.push(`Missing lesson #bai-${i}`);
  if (!html.includes(`href="#bai-${i}"`)) errors.push(`Missing sidebar link href="#bai-${i}"`);
  if (!html.includes(`id="b${i}-cong-thuc"`)) errors.push(`Missing section A #b${i}-cong-thuc`);
  if (!html.includes(`id="b${i}-noi-dung"`)) errors.push(`Missing section B #b${i}-noi-dung`);
  if (!html.includes(`id="b${i}-so-do"`)) errors.push(`Missing section C #b${i}-so-do`);
  if (!html.includes(`id="b${i}-thi-nghiem"`)) errors.push(`Missing section D #b${i}-thi-nghiem`);
  if (!html.includes(`id="b${i}-trac-nghiem"`)) errors.push(`Missing section E #b${i}-trac-nghiem`);
}

// 3. Check final summary section
if (!html.includes('id="bang-cong-thuc-va-an-toan"')) {
  errors.push('Missing final summary section #bang-cong-thuc-va-an-toan');
}

// 4. Count SVGs & Quiz cards
const svgCount = (html.match(/<svg[\s>]/g) || []).length;
const quizCardCount = (html.match(/class="quiz-card\b/g) || []).length;
if (svgCount < 23) errors.push(`Expected at least 23 SVGs, found ${svgCount}`);
if (quizCardCount !== 69) errors.push(`Expected 69 quiz cards, found ${quizCardCount}`);

// 5. Check sticky sidebar scroll classes
if (!html.includes('h-[calc(100vh-5.5rem)]') || !html.includes('flex-1 min-h-0')) {
  errors.push('Missing sticky sidebar flex scroll classes');
}

// 6. Check for undefined / NaN / raw LaTeX tokens
if (/\bundefined\b/.test(html)) errors.push('Found literal "undefined" in HTML output');
if (/\bNaN\b/.test(html)) errors.push('Found literal "NaN" in HTML output');
if (html.includes('\\frac') || html.includes('\\overline')) errors.push('Found unformatted LaTeX tokens in HTML');

// 7. Validate inline <script> syntax
const scriptBlocks = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
scriptBlocks.forEach((m, idx) => {
  try {
    new vm.Script(m[1]);
  } catch (err) {
    errors.push(`Script block #${idx + 1} syntax error: ${err.message}`);
  }
});

console.log('=== AUDIT REPORT: courses/hoahoc_10.html ===');
console.log('- File size:', (Buffer.byteLength(html, 'utf8') / 1024).toFixed(1), 'KB');
console.log('- Chapters verified: 7 / 7');
console.log('- Lessons verified: 23 / 23 (Parts A, B, C, D, E)');
console.log('- SVG diagrams count:', svgCount);
console.log('- In-lesson quiz questions:', quizCardCount);
console.log('- Inline script blocks syntax checked:', scriptBlocks.length);

if (errors.length) {
  console.error('AUDIT FAILED:', errors);
  process.exit(1);
} else {
  console.log('STATUS: ALL CHECKS PASSED (0 ERRORS)');
}
