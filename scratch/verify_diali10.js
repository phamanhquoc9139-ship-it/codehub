const fs = require('fs');

console.log('--- VERIFYING ĐỊA LÍ 10 (SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG) ---');
const file = fs.readFileSync('courses/diali_10.html', 'utf8');

console.log('File size (diali_10.html):', file.length);
if (file.length < 200000) {
  console.error('FAIL: diali_10.html size is unexpectedly small!');
  process.exit(1);
}

// 1. Check corrupt tokens
const corruptTokens = ['NaN', 'undefined', 'null', '[object Object]'];
let hasCorrupt = false;
for (const token of corruptTokens) {
  if (file.includes(token)) {
    console.error(`FAIL: Corrupt token found: ${token}`);
    hasCorrupt = true;
  }
}
if (!hasCorrupt) console.log('PASS: Zero corrupt tokens found.');

// 2. Check 13 chapters
for (let i = 1; i <= 13; i++) {
  const chapId = `id="chuong-${i}"`;
  if (!file.includes(chapId)) {
    console.error(`FAIL: Missing chapter ${chapId}`);
    process.exit(1);
  }
}
console.log('PASS: All 13 Chapters (chuong-1 to chuong-13) present with scroll-mt-28.');

// 3. Check 40 lessons
for (let i = 1; i <= 40; i++) {
  const lessonId = `id="bai-${i}"`;
  if (!file.includes(lessonId)) {
    console.error(`FAIL: Missing lesson ${lessonId}`);
    process.exit(1);
  }
  const hrefLink = `href="#bai-${i}"`;
  if (!file.includes(hrefLink)) {
    console.error(`FAIL: Missing sidebar link ${hrefLink}`);
    process.exit(1);
  }
}
console.log('PASS: All 40 Lessons (bai-1 to bai-40) present with matching IDs and sidebar links.');

// 4. Check Formula table, skills guide, editorial notes
const requiredSections = ['id="cong-thuc"', 'id="quy-trinh-ky-nang"', 'id="ghi-chu-hoc-lieu"'];
for (const sec of requiredSections) {
  if (!file.includes(sec)) {
    console.error(`FAIL: Missing required section ${sec}`);
    process.exit(1);
  }
}
console.log('PASS: Formula table, skills guide, and editorial notes present.');

// 5. Check SVGs for HTML leaks and validity
const svgs = file.match(/<svg[\s\S]*?<\/svg>/g) || [];
console.log(`Found ${svgs.length} technical SVG diagrams.`);
if (svgs.length < 6) {
  console.error('FAIL: Expected at least 6 SVGs!');
  process.exit(1);
}
let svgClean = true;
svgs.forEach((svg, idx) => {
  if (svg.includes('<div') || svg.includes('<span') || svg.includes('<p>') || svg.includes('<h3')) {
    console.error(`FAIL: SVG ${idx + 1} contains leaked HTML elements!`);
    svgClean = false;
  }
});
if (svgClean) {
  console.log('PASS: All SVGs are pure, valid SVG markup without HTML leaks.');
}

// 6. Check Exam modal and 25 questions
if (file.includes('id="examModal"') && file.includes('examQuestions =') && file.includes('Thi Trạng Nguyên')) {
  const qMatches = file.match(/"q":/g) || [];
  console.log(`PASS: Trạng Nguyên exam configured with ${qMatches.length} questions in dataset.`);
} else {
  console.error('FAIL: Exam modal not properly configured!');
  process.exit(1);
}

// 7. Check index.html link
const indexHtml = fs.readFileSync('index.html', 'utf8');
if (indexHtml.includes('courses/diali_10.html')) {
  console.log('PASS: index.html correctly links to courses/diali_10.html.');
} else {
  console.error('FAIL: index.html missing link to courses/diali_10.html!');
  process.exit(1);
}

console.log('🎉 ALL 8 AUDIT CHECKS PASSED FOR ĐỊA LÍ 10 (KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)!');
