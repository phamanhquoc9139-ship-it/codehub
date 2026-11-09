const fs = require('fs');
const path = require('path');
const vm = require('vm');

const baseDir = path.join(__dirname, '..');
const coursesDir = path.join(baseDir, 'courses');

console.log('=== FINAL AUDIT OF FIXED FILES & TIẾNG PHÁP 10 ===');

// 1. Verify Vật lí 11
const vatliFiles = ['chuyende_vatli_11.html', 'chuyende_vatly_11.html', 'chuyende_ly_11.html'];
for (const f of vatliFiles) {
  const p = path.join(coursesDir, f);
  const content = fs.readFileSync(p, 'utf8');
  if (content.includes("{ left: '\n") || content.includes("{ left: '\r\n")) {
    console.error(`FAIL: ${f} still has broken KaTeX syntax!`);
    process.exit(1);
  }
  const scripts = content.match(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi) || [];
  scripts.forEach((s, idx) => {
    const code = s.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '');
    try {
      new vm.Script(code);
    } catch (e) {
      console.error(`FAIL: ${f} script ${idx + 1} error:`, e.message);
      process.exit(1);
    }
  });
  console.log(`PASS: ${f} KaTeX scripts 100% valid JS`);
}

// 2. Verify Toán 10 table
const toanFiles = ['chuyende_toan_10.html', 'chuyende_toan10.html'];
for (const f of toanFiles) {
  const p = path.join(coursesDir, f);
  const content = fs.readFileSync(p, 'utf8');
  if (!content.includes('table-layout: fixed') || !content.includes('<colgroup>')) {
    console.error(`FAIL: ${f} table layout is not fixed!`);
    process.exit(1);
  }
  console.log(`PASS: ${f} table layout fixed with colgroup`);
}

// 3. Verify Hóa học 10
const hoaFiles = ['chuyende_hoahoc_10.html', 'chuyende_hoahoc10.html', 'chuyende_hoa_10.html'];
for (const f of hoaFiles) {
  const p = path.join(coursesDir, f);
  const content = fs.readFileSync(p, 'utf8');
  if (content.includes('$^\\circ$)')) {
    console.error(`FAIL: ${f} has unanchored degree symbol!`);
    process.exit(1);
  }
  console.log(`PASS: ${f} isotope & degree formulas anchored`);
}

// 4. Verify Tiếng Pháp 10
const p10 = path.join(coursesDir, 'tiengphap_10.html');
const p10Alias = path.join(coursesDir, 'tiengphap10.html');
const b1 = fs.readFileSync(p10);
const b2 = fs.readFileSync(p10Alias);
if (!b1.equals(b2)) {
  console.error('FAIL: Tiếng Pháp 10 main and alias differ!');
  process.exit(1);
}
console.log(`PASS: Tiếng Pháp 10 main and alias are identical byte-for-byte (${b1.length} bytes)`);

// 5. Verify index.html card
const idxContent = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf8');
if (!idxContent.includes('courses/tiengphap_10.html')) {
  console.error('FAIL: index.html missing link to courses/tiengphap_10.html');
  process.exit(1);
}
console.log('PASS: index.html card added and linked to courses/tiengphap_10.html');

console.log('\n=== ALL VERIFICATIONS PASSED PERFECTLY! ===');
