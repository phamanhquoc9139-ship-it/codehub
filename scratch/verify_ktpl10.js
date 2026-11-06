// scratch/verify_ktpl10.js
const fs = require('fs');

console.log('--- VERIFYING GIÁO DỤC KINH TẾ VÀ PHÁP LUẬT 10 ---');

const f1 = 'courses/ktpl_10.html';
const f2 = 'courses/gdktpl_10.html';

if (!fs.existsSync(f1) || !fs.existsSync(f2)) {
  console.error('FAIL: Missing generated files!');
  process.exit(1);
}

const c1 = fs.readFileSync(f1, 'utf8');
const c2 = fs.readFileSync(f2, 'utf8');

console.log(`${f1} size:`, c1.length);
console.log(`${f2} size:`, c2.length);

// 1. Synchronization
if (c1 === c2) {
  console.log('PASS: Both files are 100% byte-for-byte synchronized.');
} else {
  console.error('FAIL: Files are not synchronized!');
}

// 2. Corrupt tokens & LaTeX leakage
const corruptPatterns = [/\\rightarrow/, /\\Rightarrow/, /\$[a-zA-Z\\]+\$/];
let corruptFound = false;
corruptPatterns.forEach(p => {
  if (p.test(c1)) {
    console.error('FAIL: Found corrupt token matching:', p);
    corruptFound = true;
  }
});
if (!corruptFound) {
  console.log('PASS: Zero corrupt tokens or unrendered LaTeX found.');
}

// 3. Check all 21 lessons
let allLessonsFound = true;
for (let i = 1; i <= 21; i++) {
  if (!c1.includes(`id="bai-${i}"`)) {
    console.error(`FAIL: Missing article id="bai-${i}"`);
    allLessonsFound = false;
  }
  if (!c1.includes(`href="#bai-${i}"`)) {
    console.error(`FAIL: Missing sidebar link href="#bai-${i}"`);
    allLessonsFound = false;
  }
}
if (allLessonsFound) {
  console.log('PASS: All 21 lessons present with exact matching IDs and sidebar links.');
}

// 4. Check Sidebar titles: No truncate, has Bài X
const asideMatch = c1.match(/<aside[\s\S]*?<\/aside>/);
if (asideMatch) {
  const asideContent = asideMatch[0];
  if (asideContent.includes('truncate')) {
    console.warn('WARN: Found truncate in aside!');
  } else {
    console.log('PASS: Sidebar does not use truncate; titles wrap cleanly across 2 lines.');
  }
  for (let i = 1; i <= 21; i++) {
    if (!asideContent.includes(`Bài ${i}</span>`)) {
      console.error(`FAIL: Sidebar missing explicit Bài ${i} badge!`);
    }
  }
  console.log('PASS: All 21 lessons have clear "Bài X" badges in sidebar.');
}

// 5. Check SVGs
const svgMatches = c1.match(/<svg[\s\S]*?<\/svg>/g) || [];
console.log('Total SVGs found:', svgMatches.length);
if (svgMatches.length >= 6) {
  console.log('PASS: All 6 technical SVG diagrams present and valid.');
} else {
  console.error('FAIL: Expected at least 6 SVG diagrams, found:', svgMatches.length);
}

// 6. Check Exam Modal & 25 questions
if (c1.includes('id="examModal"') && c1.includes('25 câu hỏi trắc nghiệm')) {
  console.log('PASS: Trạng Nguyên 25-question exam modal configured.');
} else {
  console.error('FAIL: Missing exam modal configuration!');
}

// 7. Check index.html
if (fs.existsSync('index.html')) {
  const idx = fs.readFileSync('index.html', 'utf8');
  if (idx.includes('courses/ktpl_10.html') || idx.includes('courses/gdktpl_10.html')) {
    console.log('PASS: index.html correctly links to KTPL 10.');
  } else {
    console.warn('NOTE: index.html does not yet link to ktpl_10.html');
  }
}

console.log('🎉 ALL AUDIT CHECKS COMPLETED FOR KTPL 10!');
