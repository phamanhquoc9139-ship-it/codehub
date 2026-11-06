const fs = require('fs');

// Check grade_10.html for "nhiệt kế"
const grade10 = fs.readFileSync('courses/grade_10.html', 'utf8');
const idxG = grade10.indexOf('nhiệt kế');
if (idxG !== -1) {
  console.log('--- grade_10.html around nhiệt kế ---');
  console.log(grade10.substring(idxG - 100, idxG + 400));
}

// Check vatly_10.html for "Bài 28" or "Động lượng"
const vatly10 = fs.readFileSync('courses/vatly_10.html', 'utf8');
const idxV = vatly10.indexOf('Bài 28');
if (idxV !== -1) {
  console.log('--- vatly_10.html around Bài 28 ---');
  console.log(vatly10.substring(idxV, idxV + 800));
}

// Check toan_10.html for "\cup" and "MỆNH ĐỀ CHỨA BIẾN"
const toan10 = fs.readFileSync('courses/toan_10.html', 'utf8');
const idxT1 = toan10.indexOf('\\cup');
if (idxT1 !== -1) {
  console.log('--- toan_10.html around \\cup ---');
  console.log(toan10.substring(idxT1 - 100, idxT1 + 300));
}
const idxT2 = toan10.indexOf('MỆNH ĐỀ CHỨA BIẾN');
if (idxT2 !== -1) {
  console.log('--- toan_10.html around MỆNH ĐỀ CHỨA BIẾN ---');
  console.log(toan10.substring(idxT2 - 50, idxT2 + 400));
}
