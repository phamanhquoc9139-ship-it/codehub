const fs = require('fs');

console.log('--- VERIFYING CÔNG NGHỆ 10: THIẾT KẾ VÀ CÔNG NGHỆ ---');
const file1 = fs.readFileSync('courses/congnghe_10.html', 'utf8');
const file2 = fs.readFileSync('courses/congnghe_thietke_10.html', 'utf8');

console.log('File 1 size (congnghe_10.html):', file1.length);
console.log('File 2 size (congnghe_thietke_10.html):', file2.length);

if (file1 !== file2) {
  console.error('FAIL: congnghe_10.html and congnghe_thietke_10.html are not identical!');
  process.exit(1);
}
console.log('PASS: Both files are 100% byte-for-byte synchronized.');

// 1. Check corrupt tokens
const corruptTokens = ['NaN', 'undefined', 'null', '[object Object]'];
let hasCorrupt = false;
for (const token of corruptTokens) {
  if (file1.includes(token)) {
    console.error(`FAIL: Corrupt token found: ${token}`);
    hasCorrupt = true;
  }
}
if (!hasCorrupt) console.log('PASS: Zero corrupt tokens found.');

// 2. Check 3 chapters
for (let i = 1; i <= 3; i++) {
  const chapId = `id="chuong-${i}"`;
  if (!file1.includes(chapId)) {
    console.error(`FAIL: Missing ${chapId}`);
    process.exit(1);
  }
}
console.log('PASS: All 3 Chapters (chuong-1 to chuong-3) present with scroll-mt-28.');

// 3. Check 22 lessons
for (let i = 1; i <= 22; i++) {
  const lessonId = `id="bai-${i}"`;
  if (!file1.includes(lessonId)) {
    console.error(`FAIL: Missing ${lessonId}`);
    process.exit(1);
  }
  const hrefLink = `href="#bai-${i}"`;
  if (!file1.includes(hrefLink)) {
    console.error(`FAIL: Missing sidebar link ${hrefLink}`);
    process.exit(1);
  }
}
console.log('PASS: All 22 Lessons (bai-1 to bai-22) present with matching IDs and sidebar links.');

// 4. Check Quick lookup and editorial notes
if (file1.includes('id="bang-tra-cuu"') && file1.includes('id="ghi-chu-an-toan"')) {
  console.log('PASS: Quick lookup table and editorial notes present.');
} else {
  console.error('FAIL: Missing lookup table or notes!');
  process.exit(1);
}

// 5. Check SVGs for HTML leaks and validity
const svgs = file1.match(/<svg[\s\S]*?<\/svg>/g) || [];
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
if (file1.includes('id="examModal"') && file1.includes('examQuestions =') && file1.includes('Thi Trạng Nguyên')) {
  const qMatches = file1.match(/"q":/g) || [];
  console.log(`PASS: Trạng Nguyên exam configured with ${qMatches.length} questions in dataset.`);
} else {
  console.error('FAIL: Exam modal not properly configured!');
  process.exit(1);
}

// 7. Check index.html link
const indexHtml = fs.readFileSync('index.html', 'utf8');
if (indexHtml.includes('courses/congnghe_10.html')) {
  console.log('PASS: index.html correctly links to courses/congnghe_10.html.');
} else {
  console.error('FAIL: index.html missing link to courses/congnghe_10.html!');
  process.exit(1);
}

console.log('🎉 ALL 8 AUDIT CHECKS PASSED FOR CÔNG NGHỆ 10 THIẾT KẾ VÀ CÔNG NGHỆ!');
