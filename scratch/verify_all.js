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

// 1. Check Music files
const musicChecks = [
  'NÉT NHẠC HÁT BÈ: BẢY SẮC CẦU VỒNG',
  'Bè 1: Giai điệu chính (Soprano',
  'Bè 2: Bè hoà âm đi kèm (Alto',
  'viewBox="0 0 650 250"',
  'staff-bai3-be1',
  'staff-bai3-be2',
  'staff-bai3'
];
allOk = checkFile('courses/amnhac_9.html', musicChecks) && allOk;
allOk = checkFile('courses/music_9.html', musicChecks) && allOk;

// 2. Check Food Processing 9 files
const foodChecks = [
  'Mô đun: Chế Biến Thực Phẩm',
  'Chương I — Dinh dưỡng và thực phẩm',
  'Chương II — Tổ chức và chế biến món ăn',
  'Bài 1', 'Bài 2', 'Bài 3', 'Bài 4', 'Bài 5', 'Bài 6', 'Bài 7',
  'Thành phần dinh dưỡng trong thực phẩm',
  'Lựa chọn và bảo quản thực phẩm',
  'Một số ngành nghề liên quan đến chế biến thực phẩm',
  'An toàn lao động và an toàn vệ sinh thực phẩm',
  'Dự án: Tính toán chi phí bữa ăn theo thực đơn',
  'Chế biến thực phẩm có sử dụng nhiệt',
  'Chế biến thực phẩm không sử dụng nhiệt',
  'meal-cost-calculator',
  'calc-diners',
  'calc-grand-total',
  'terms-modal',
  'exam-modal',
  '70 °C'
];
allOk = checkFile('courses/congnghe_chebienthucpham_9.html', foodChecks) && allOk;
allOk = checkFile('courses/technology_foodprocessing_9.html', foodChecks) && allOk;

// 3. Check index.html
const indexChecks = [
  'courses/congnghe_chebienthucpham_9.html',
  'Công Nghệ 9 — Chế Biến Thực Phẩm'
];
allOk = checkFile('index.html', indexChecks) && allOk;

if (allOk) {
  console.log('\n=== ALL VERIFICATIONS PASSED PERFECTLY (100%) ===');
} else {
  console.error('\n=== SOME VERIFICATIONS FAILED ===');
  process.exit(1);
}
