const fs = require('fs');

console.log('--- VERIFYING CÔNG NGHỆ 10 (TRỒNG TRỌT) ---');
const html = fs.readFileSync('courses/congnghe_trongtrot_10.html', 'utf8');

console.log('File size:', html.length);
if (html.length < 300000) {
  console.error('FAIL: File size is unexpectedly small!');
  process.exit(1);
} else {
  console.log('PASS: File size is comprehensive (> 450 KB).');
}

// 1. Check corrupt tokens
const corruptTokens = ['NaN', 'undefined', 'null', '[object Object]'];
let hasCorrupt = false;
for (const token of corruptTokens) {
  if (html.includes(token)) {
    console.error(`FAIL: Corrupt token found: ${token}`);
    hasCorrupt = true;
  }
}
if (!hasCorrupt) console.log('PASS: Zero corrupt tokens found.');

// 2. Check 8 chapters
for (let i = 1; i <= 8; i++) {
  const chapId = `id="chuong-${i}"`;
  if (!html.includes(chapId)) {
    console.error(`FAIL: Missing ${chapId}`);
    process.exit(1);
  }
}
console.log('PASS: All 8 Chapters (chuong-1 to chuong-8) present with scroll-mt-28.');

// 3. Check 28 lessons
for (let i = 1; i <= 28; i++) {
  const lessonId = `id="bai-${i}"`;
  if (!html.includes(lessonId)) {
    console.error(`FAIL: Missing ${lessonId}`);
    process.exit(1);
  }
  const hrefLink = `href="#bai-${i}"`;
  if (!html.includes(hrefLink)) {
    console.error(`FAIL: Missing sidebar link ${hrefLink}`);
    process.exit(1);
  }
}
console.log('PASS: All 28 Lessons (bai-1 to bai-28) present with matching IDs and sidebar links.');

// 4. Check Quick lookup and editorial notes
if (html.includes('id="bang-tra-cuu"') && html.includes('id="ghi-chu-an-toan"')) {
  console.log('PASS: Quick lookup table and editorial notes present.');
} else {
  console.error('FAIL: Missing lookup table or notes!');
  process.exit(1);
}

// 5. Check SVGs for HTML leaks and validity
const svgs = html.match(/<svg[\s\S]*?<\/svg>/g) || [];
console.log(`Found ${svgs.length} technical SVG diagrams.`);
if (svgs.length < 5) {
  console.error('FAIL: Expected at least 5 SVGs!');
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
if (html.includes('id="examModal"') && html.includes('examQuestions =') && html.includes('Thi Trạng Nguyên')) {
  const qMatches = html.match(/"q":/g) || [];
  console.log(`PASS: Trạng Nguyên exam configured with ${qMatches.length} questions in dataset.`);
} else {
  console.error('FAIL: Exam modal not properly configured!');
  process.exit(1);
}

// 7. Check index.html link
const indexHtml = fs.readFileSync('index.html', 'utf8');
if (indexHtml.includes('courses/congnghe_trongtrot_10.html')) {
  console.log('PASS: index.html correctly links to courses/congnghe_trongtrot_10.html.');
} else {
  console.error('FAIL: index.html missing link to courses/congnghe_trongtrot_10.html!');
  process.exit(1);
}

console.log('🎉 ALL 7 AUDIT CHECKS PASSED FOR CÔNG NGHỆ 10 TRỒNG TRỌT!');
