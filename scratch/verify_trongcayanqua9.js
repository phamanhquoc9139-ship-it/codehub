const fs = require('fs');

const basePath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/';

function checkFile(relPath, requiredSubstrings) {
  const full = basePath + relPath;
  if (!fs.existsSync(full)) {
    console.error(`FAIL: ${relPath} does not exist`);
    return false;
  }
  const content = fs.readFileSync(full, 'utf8');
  let ok = true;
  requiredSubstrings.forEach(sub => {
    if (!content.includes(sub)) {
      console.error(`FAIL in ${relPath}: Missing substring: "${sub.substring(0, 60)}..."`);
      ok = false;
    }
  });
  if (ok) {
    console.log(`PASS: ${relPath} (${content.length} bytes, all ${requiredSubstrings.length} checks passed)`);
  }
  return ok;
}

let allOk = true;

const orchardChecks = [
  'Mô đun: Trồng Cây Ăn Quả',
  'Giới thiệu chung về cây ăn quả',
  'Nhân giống vô tính cây ăn quả',
  'Kĩ thuật trồng và chăm sóc cây ăn quả có múi',
  'Kĩ thuật trồng và chăm sóc cây nhãn',
  'Kĩ thuật trồng và chăm sóc cây xoài',
  'Kĩ thuật trồng và chăm sóc cây sầu riêng',
  'Kĩ thuật trồng và chăm sóc cây chuối',
  'Dự án: Trồng cây ăn quả',
  'orchard-project-calculator',
  'calc-mode-perennial',
  'calc-mode-annual',
  'orchard-net-profit',
  'terms-modal',
  'exam-modal',
  'quick-review-table',
  'safety-guidelines',
  'Bốn nguyên tắc vàng (4 Đúng)',
  'C₁ = B₁ − A₁',
  'D = C₂ − (A₂ + B₂)',
  'Holland R'
];

allOk = checkFile('courses/congnghe_trongcayanqua_9.html', orchardChecks) && allOk;
allOk = checkFile('courses/technology_fruitcultivation_9.html', orchardChecks) && allOk;

const indexChecks = [
  'courses/congnghe_trongcayanqua_9.html',
  'Công Nghệ 9 — Trồng Cây Ăn Quả'
];
allOk = checkFile('index.html', indexChecks) && allOk;

if (allOk) {
  console.log('\n=== ALL ORCHARD 9 VERIFICATIONS PASSED 100% ===');
} else {
  console.error('\n=== SOME VERIFICATIONS FAILED ===');
  process.exit(1);
}
