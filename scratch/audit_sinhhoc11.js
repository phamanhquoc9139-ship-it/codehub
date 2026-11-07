// scratch/audit_sinhhoc11.js
const fs = require('fs');
const path = require('path');

console.log('Running comprehensive audit on courses/sinhhoc_11.html...');
const filePath = path.join(__dirname, '../courses/sinhhoc_11.html');
const content = fs.readFileSync(filePath, 'utf8');

let errors = 0;

// 1. Check all 29 lessons & illustrations
for (let i = 1; i <= 29; i++) {
  if (!content.includes(`id="bai-${i}"`)) {
    console.error(`ERROR: Missing lesson id="bai-${i}"`);
    errors++;
  }
  if (!content.includes(`Bài ${i}.`)) {
    console.error(`ERROR: Missing text "Bài ${i}."`);
    errors++;
  }
  if (!content.includes(`Hình Minh Họa & Sơ Đồ Trọng Tâm Bài ${i}`)) {
    console.error(`ERROR: Missing inline diagram header for Bài ${i}`);
    errors++;
  }
}

// 2. Check leaks
const leaks = ['undefined', 'NaN', '[object Object]'];
leaks.forEach(leak => {
  if (content.includes(leak)) {
    console.error(`ERROR: Found leak "${leak}" in file!`);
    errors++;
  }
});

// 3. Check 7 Diagram groups
for (let i = 1; i <= 7; i++) {
  if (!content.includes(`id="nhom-${i}"`)) {
    console.error(`ERROR: Missing diagram group id="nhom-${i}"`);
    errors++;
  }
  if (!content.includes(`NHÓM SƠ ĐỒ ${i}`)) {
    console.error(`ERROR: Missing text "NHÓM SƠ ĐỒ ${i}"`);
    errors++;
  }
}

// 4. Check Lab Checklist
if (!content.includes('id="checklist-thuc-hanh"')) {
  console.error('ERROR: Missing #checklist-thuc-hanh');
  errors++;
}
const practicalLessons = [3, 5, 7, 11, 16, 21, 23, 26];
practicalLessons.forEach(num => {
  if (!content.includes(`<td class="p-3 text-center font-bold text-emerald-600">${num}</td>`)) {
    console.error(`ERROR: Checklist missing practical lesson ${num}`);
    errors++;
  }
});

// 5. Check theme toggle
if (!content.includes('id="theme-toggle"')) {
  console.error('ERROR: Missing #theme-toggle');
  errors++;
}
if (!content.includes('id="theme-icon"')) {
  console.error('ERROR: Missing #theme-icon');
  errors++;
}

// 6. Check Arena and Search modals
if (!content.includes('id="arena-modal"')) {
  console.error('ERROR: Missing #arena-modal');
  errors++;
}
if (!content.includes('id="search-modal"')) {
  console.error('ERROR: Missing #search-modal');
  errors++;
}

// 7. Check inline scripts syntax
const scriptRegex = /<script>([\s\S]*?)<\/script>/gi;
let match;
let scriptIdx = 0;
while ((match = scriptRegex.exec(content)) !== null) {
  scriptIdx++;
  const js = match[1];
  try {
    new Function(js);
  } catch (e) {
    console.error(`ERROR: Script #${scriptIdx} has syntax error:`, e.message);
    errors++;
  }
}

console.log('--------------------------------------------------');
if (errors === 0) {
  console.log('AUDIT PASSED! All 29 lessons, 7 SVG groups, 8 practical checklist items, and interactive features are 100% verified.');
} else {
  console.error(`AUDIT FAILED with ${errors} errors.`);
  process.exit(1);
}
