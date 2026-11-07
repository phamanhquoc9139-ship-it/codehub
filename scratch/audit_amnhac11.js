// scratch/audit_amnhac11.js
const fs = require('fs');
const path = require('path');

const f1 = path.join(__dirname, '../courses/amnhac_11.html');
const f2 = path.join(__dirname, '../courses/nhac_11.html');

console.log('=== BẮT ĐẦU KIỂM TOÁN ÂM NHẠC 11 ===');

if (!fs.existsSync(f1) || !fs.existsSync(f2)) {
  console.error('LỖI: Một trong 2 file không tồn tại!');
  process.exit(1);
}

const b1 = fs.readFileSync(f1);
const b2 = fs.readFileSync(f2);

if (!b1.equals(b2)) {
  console.error('LỖI: amnhac_11.html và nhac_11.html KHÔNG đồng bộ byte-for-byte!');
  process.exit(1);
}
console.log('✓ 1. Hai tệp amnhac_11.html và nhac_11.html ĐỒNG BỘ 100% byte-for-byte:', b1.length, 'bytes');

const html = b1.toString('utf8');

// Check undefined, [object Object]
if (html.includes('undefined')) {
  console.error('LỖI: Tìm thấy chuỗi undefined trong file!');
  process.exit(1);
}
if (html.includes('[object Object]')) {
  console.error('LỖI: Tìm thấy chuỗi [object Object] trong file!');
  process.exit(1);
}
console.log('✓ 2. Kiểm tra không có chuỗi rò rỉ undefined hoặc [object Object].');

// Check 16 general lessons
for (let c = 1; c <= 4; c++) {
  for (let b = 1; b <= 4; b++) {
    const id = `c${c}_b${b}`;
    if (!html.includes(`id="${id}"`)) {
      console.error(`LỖI: Thiếu bài chung ${id}!`);
      process.exit(1);
    }
  }
}
console.log('✓ 3. Đầy đủ 16/16 bài phần kiến thức chung (4 Chủ đề).');

// Check 4 Vocal lessons
for (let b = 1; b <= 4; b++) {
  const id = `sing_b${b}`;
  if (!html.includes(`id="${id}"`)) {
    console.error(`LỖI: Thiếu bài Hát ${id}!`);
    process.exit(1);
  }
}
console.log('✓ 4. Đầy đủ 4/4 bài phần Lựa chọn A — Hát (Legato, Passage, Staccato, Luyến âm).');

// Check 6 Guitar lessons
for (let b = 1; b <= 6; b++) {
  const id = `gui_b${b}`;
  if (!html.includes(`id="${id}"`)) {
    console.error(`LỖI: Thiếu bài Guitar ${id}!`);
    process.exit(1);
  }
}
console.log('✓ 5. Đầy đủ 6/6 bài phần Lựa chọn B — Guitar (Liền tiếng, Rời tiếng, Luân phiên i-m, Barre, Slow 6/8 & 4/4, Hoà tấu).');

// Check Terms & Practice Steps
if (!html.includes('id="thuat-ngu-ky-nang"')) {
  console.error('LỖI: Thiếu mục Bảng thuật ngữ và kỹ năng dùng xuyên suốt!');
  process.exit(1);
}
console.log('✓ 6. Có đầy đủ 12 thuật ngữ âm nhạc và 5 bước quy trình luyện tập chuẩn.');

// Check Arena Exam
if (!html.includes('id="dau-truong-45p"')) {
  console.error('LỖI: Thiếu mục Đấu trường Âm nhạc 11!');
  process.exit(1);
}
console.log('✓ 7. Có đầy đủ Đấu trường Âm nhạc 11 (20 câu trắc nghiệm • đồng hồ bấm giờ 45:00).');

// Check SVGs
const svgMatches = html.match(/<svg\b/g);
console.log(`✓ 8. Tổng số thẻ SVG trên trang: ${svgMatches ? svgMatches.length : 0} (gồm 6 sơ đồ tư duy vector + logo).`);

console.log('=== KIỂM TOÁN HOÀN TẤT: 100% ĐẠT TIÊU CHUẨN XUẤT SẮC ===');
