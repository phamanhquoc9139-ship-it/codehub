const fs = require('fs');
const path = require('path');

const coursesDir = path.join(__dirname, '../courses');
const files = fs.readdirSync(coursesDir).filter(f => f.endsWith('.html'));

console.log('=== CHECKING KATEX SCRIPT SYNTAX ===');
for (const f of files) {
  const content = fs.readFileSync(path.join(coursesDir, f), 'utf8');
  if (content.includes("renderMathInElement")) {
    if (content.includes("{ left: '\n") || content.includes("{ left: '\r\n")) {
      console.log(`BROKEN KATEX in: ${f}`);
    }
  }
}

console.log('\n=== CHECKING URANIUM-235 IN HOAHOC 10 ===');
const hoa10 = fs.readFileSync(path.join(coursesDir, 'chuyende_hoahoc_10.html'), 'utf8');
const uIdx = hoa10.indexOf('Uranium-235');
if (uIdx !== -1) {
  console.log(hoa10.substring(uIdx, uIdx + 1200));
}

console.log('\n=== CHECKING TABLE IN TOAN 10 ===');
const toan10 = fs.readFileSync(path.join(coursesDir, 'chuyende_toan_10.html'), 'utf8');
const tblIdx = toan10.indexOf('BẢNG TỔNG KẾT TOÀN DIỆN 8 BÀI HỌC');
if (tblIdx !== -1) {
  console.log(toan10.substring(tblIdx, tblIdx + 1500));
}
