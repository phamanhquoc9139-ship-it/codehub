const fs = require('fs');
const path = require('path');

const targetFiles = [
  'courses/lichsu_11.html',
  'courses/su_11.html'
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

  // 1. Check leaks
  const leakWords = ['undefined', 'NaN', '[object Object]'];
  leakWords.forEach(w => {
    const count = html.split(w).length - 1;
    console.log(`Occurrences of "${w}": ${count}`);
  });

  // 2. Check 13 lessons
  let lessonsFound = 0;
  for (let i = 1; i <= 13; i++) {
    if (html.includes(`id="bai-${i}"`)) lessonsFound++;
    else console.warn(`Missing Bài ${i}`);
  }
  console.log(`Lessons (bai-1 to bai-13): ${lessonsFound}/13`);

  // 3. Check 6 topics
  let topicsFound = 0;
  for (let i = 1; i <= 6; i++) {
    if (html.includes(`id="chu-de-${i}"`)) topicsFound++;
    else console.warn(`Missing Chủ đề ${i}`);
  }
  console.log(`Topics (chu-de-1 to chu-de-6): ${topicsFound}/6`);

  // 4. Special sections
  console.log(`Section #bang-moc-thoi-gian: ${html.includes('id="bang-moc-thoi-gian"')}`);
  console.log(`Section #thuat-ngu-can-nam: ${html.includes('id="thuat-ngu-can-nam"')}`);
  console.log(`Section #khai-thac-hinh-anh: ${html.includes('id="khai-thac-hinh-anh"')}`);
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

  // 6. Check run-on bullets in content
  const bodyText = html.substring(0, html.indexOf('const SEARCH_INDEX ='));
  const runOnBullets = bodyText.match(/•[^<•]+•[^<•]+/g);
  console.log(`Run-on bullets in content: ${runOnBullets ? runOnBullets.length : 0}`);
  if (runOnBullets) {
    console.log('Sample run-on bullets:', runOnBullets);
  }
});
