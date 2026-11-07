const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'courses', 'van_11.html');
const content = fs.readFileSync(filePath, 'utf8');

console.log('Auditing courses/van_11.html...');
console.log('File size:', content.length, 'bytes');

let errors = 0;

// 1. Check lessons 1 to 9
for (let i = 1; i <= 9; i++) {
  if (!content.includes(`id="bai-${i}"`)) {
    console.error(`Error: Missing lesson #bai-${i}`);
    errors++;
  }
  if (!content.includes(`id="btn-read-${i}"`)) {
    console.error(`Error: Missing mark read button for lesson ${i}`);
    errors++;
  }
  if (!content.includes(`HÌNH MINH HỌA & SƠ ĐỒ TRỌNG TÂM BÀI ${i}`)) {
    console.error(`Error: Missing SVG diagram block for lesson ${i}`);
    errors++;
  }
}

// 2. Check special sections
const sections = ['on-tap-hk1', 'on-tap-hk2', 'khung-ki-nang', 'so-hoa-noi-dung'];
sections.forEach(sec => {
  if (!content.includes(`id="${sec}"`)) {
    console.error(`Error: Missing section #${sec}`);
    errors++;
  }
});

// 3. Check modals and controls
const controls = ['theme-toggle', 'theme-icon', 'search-modal', 'arena-modal', 'exam-timer', 'scroll-top-btn'];
controls.forEach(ctl => {
  if (!content.includes(`id="${ctl}"`)) {
    console.error(`Error: Missing control #${ctl}`);
    errors++;
  }
});

// 4. Check exact string leaks
const leaks = ['undefined', 'NaN', '[object Object]'];
leaks.forEach(leak => {
  let count = 0;
  let pos = content.indexOf(leak);
  while (pos !== -1) {
    count++;
    pos = content.indexOf(leak, pos + 1);
  }
  if (count > 0) {
    console.error(`Error: Found ${count} exact occurrences of "${leak}"`);
    errors++;
  }
});

// 5. Check SVGs for illegal tags inside SVG
const svgMatches = content.match(/<svg[\s\S]*?<\/svg>/gi) || [];
console.log('Found SVG count:', svgMatches.length);
if (svgMatches.length !== 9) {
  console.error(`Error: Expected 9 SVGs, found ${svgMatches.length}`);
  errors++;
}
svgMatches.forEach((s, idx) => {
  const illegal = s.match(/<(strong|b|div|p|span)[\s>]/gi);
  if (illegal) {
    console.error(`Error: Illegal tags in SVG ${idx + 1}:`, illegal);
    errors++;
  }
});

if (errors === 0) {
  console.log('ALL AUDIT CHECKS PASSED PERFECTLY! 100% CLEAN.');
} else {
  console.error(`Audit finished with ${errors} issues.`);
  process.exit(1);
}
