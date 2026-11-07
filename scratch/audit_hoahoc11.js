// scratch/audit_hoahoc11.js
const fs = require('fs');
const path = require('path');

const targetFiles = [
  'courses/hoahoc_11.html',
  'courses/hoa_11.html'
];

targetFiles.forEach(relPath => {
  const fullPath = path.resolve(__dirname, '..', relPath);
  console.log(`\n========================================`);
  console.log(`AUDITING ${relPath}`);
  console.log(`========================================`);

  if (!fs.existsSync(fullPath)) {
    console.error(`File NOT FOUND: ${fullPath}`);
    return;
  }

  const html = fs.readFileSync(fullPath, 'utf8');
  console.log(`Size: ${html.length.toLocaleString()} bytes`);

  // 1. Leaks check
  const leakWords = ['undefined', 'NaN', '[object Object]'];
  leakWords.forEach(w => {
    const count = html.split(w).length - 1;
    console.log(`Occurrences of "${w}": ${count}`);
  });

  // 2. 25 Lessons
  let lessonsFound = 0;
  for (let i = 1; i <= 25; i++) {
    if (html.includes(`id="bai-${i}"`)) lessonsFound++;
    else console.warn(`Missing Bài ${i}`);
  }
  console.log(`Lessons (bai-1 to bai-25): ${lessonsFound}/25`);

  // 3. 6 Chapters
  let chaptersFound = 0;
  for (let i = 1; i <= 6; i++) {
    if (html.includes(`id="chu-de-${i}"`)) chaptersFound++;
    else console.warn(`Missing Chương ${i}`);
  }
  console.log(`Chapters (chu-de-1 to chu-de-6): ${chaptersFound}/6`);

  // 4. Special sections
  console.log(`Section #bang-cong-thuc: ${html.includes('id="bang-cong-thuc"')}`);
  console.log(`Section #thi-nghiem-an-toan: ${html.includes('id="thi-nghiem-an-toan"')}`);
  console.log(`Modal #arena-modal: ${html.includes('id="arena-modal"')}`);
  console.log(`Modal #search-modal: ${html.includes('id="search-modal"')}`);
  console.log(`Control #theme-toggle: ${html.includes('id="theme-toggle"')}`);

  // 5. Check SVGs
  const svgs = [...html.matchAll(/<svg[\s\S]*?<\/svg>/g)];
  console.log(`Total SVGs: ${svgs.length}`);

  svgs.forEach((s, idx) => {
    const raw = s[0];
    if (/<(b|strong|div|p|span|br)[\s\/>]/i.test(raw)) {
      console.warn(`SVG ${idx} contains illegal HTML tag!`);
    }
    const unescapedAmp = raw.match(/&(?!(amp|lt|gt|quot|apos);)[a-zA-Z0-9#]*/g);
    if (unescapedAmp) console.warn(`SVG ${idx} has unescaped ampersand:`, unescapedAmp);
  });

  // 6. Check run-on bullets in content (before search index script)
  const bodyText = html.substring(0, html.indexOf('const SEARCH_INDEX ='));
  const runOnBullets = bodyText.match(/•[^<•]+•[^<•]+/g);
  console.log(`Run-on bullets in content: ${runOnBullets ? runOnBullets.length : 0}`);
  if (runOnBullets) {
    console.log('Sample run-on bullets:', runOnBullets.slice(0, 5));
  }
});

// Compare sync
const f1 = fs.readFileSync(path.resolve(__dirname, '..', 'courses/hoahoc_11.html'), 'utf8');
const f2 = fs.readFileSync(path.resolve(__dirname, '..', 'courses/hoa_11.html'), 'utf8');
console.log(`\nExact sync check (hoahoc_11 === hoa_11): ${f1 === f2}`);
