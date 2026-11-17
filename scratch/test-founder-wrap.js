const fs = require('fs');
const path = require('path');

const cDir = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses';
const files = ['math_lab.html', 'physics_lab.html', 'chemistry_lab.html'];

let allPass = true;

files.forEach(f => {
  const c = fs.readFileSync(path.join(cDir, f), 'utf8');
  console.log('=== Checking ' + f + ' ===');

  // Check CSS
  const hasNowrapCSS = c.includes('.lab-footer-founder-name') && c.includes('white-space: nowrap !important');
  if (hasNowrapCSS) {
    console.log('  [PASS] CSS .lab-footer-founder-name has white-space: nowrap !important');
  } else {
    console.error('  [FAIL] Missing white-space: nowrap in CSS!');
    allPass = false;
  }

  // Check footer
  const fStart = c.indexOf('<footer');
  const fEnd = c.indexOf('</footer>') + 9;
  const footerHTML = c.substring(fStart, fEnd);

  const targetStr = '<span class="lab-footer-founder-name whitespace-nowrap">Phạm Anh Quốc</span>';
  let occurrences = 0;
  let pos = 0;
  while ((pos = footerHTML.indexOf(targetStr, pos)) !== -1) {
    occurrences++;
    pos += targetStr.length;
  }
  if (occurrences === 2) {
    console.log('  [PASS] Exactly 2 occurrences of wrapped "Phạm Anh Quốc" in footer.');
  } else {
    console.error('  [FAIL] Expected 2 occurrences of wrapped founder name, got: ' + occurrences);
    allPass = false;
  }

  // Check responsive layout
  const hasResponsiveBreakdown = footerHTML.includes('block sm:inline') && footerHTML.includes('flex-col lg:flex-row');
  if (hasResponsiveBreakdown) {
    console.log('  [PASS] Responsive layout on small screens configured (block sm:inline & flex-col lg:flex-row).');
  } else {
    console.error('  [FAIL] Responsive layout classes missing in copyright section!');
    allPass = false;
  }
});

console.log(allPass ? '\nALL FOUNDER NAME WRAPPING TESTS PASSED!' : '\nTESTS FAILED!');
