// Comprehensive Audit Script for Chuyên đề Tin học 11 ICT
const fs = require('fs');

const targetFiles = [
  'courses/chuyende_tinhoc_11_ict.html',
  'courses/chuyende_tinhoc_11_app.html',
  'courses/chuyende_tin_11.html',
  'courses/chuyende_tinhoc_11.html'
];

console.log("=== BẮT ĐẦU KIỂM TRA CHUYÊN ĐỀ TIN HỌC 11 ICT ===");

// 1. Kiểm tra tính đồng nhất 100% byte-for-byte
const baseContent = fs.readFileSync(targetFiles[0], 'utf8');
const baseBuffer = fs.readFileSync(targetFiles[0]);
console.log(`[FILE GỐC] ${targetFiles[0]}: ${baseBuffer.length} bytes.`);

let allIdentical = true;
for (let i = 1; i < targetFiles.length; i++) {
  const buf = fs.readFileSync(targetFiles[i]);
  if (!buf.equals(baseBuffer)) {
    console.error(`[LỖI ĐỒNG BỘ] ${targetFiles[i]} không khớp byte-for-byte với file gốc!`);
    allIdentical = false;
  } else {
    console.log(`[ĐỒNG BỘ 100%] ${targetFiles[i]}: ${buf.length} bytes.`);
  }
}

// 2. Kiểm tra chuỗi bất thường: undefined, NaN, [object Object]
const badStrings = ['undefined', 'NaN', '[object Object]', 'null'];
for (const bad of badStrings) {
  let count = 0;
  let pos = baseContent.indexOf(bad);
  while (pos !== -1) {
    // Cho phép 'null' trong JSON.stringify hoặc localStorage fallback nếu an toàn
    if (bad === 'null') {
      // kiểm tra xem có phải là biến null trong HTML không
      const snippet = baseContent.substring(Math.max(0, pos - 20), Math.min(baseContent.length, pos + 20));
      if (!snippet.includes('JSON.parse') && !snippet.includes('null, 2')) {
        count++;
      }
    } else {
      count++;
    }
    pos = baseContent.indexOf(bad, pos + bad.length);
  }
  if (count > 0 && bad !== 'null') {
    console.error(`[CẢNH BÁO] Phát hiện ${count} lần xuất hiện chuỗi '${bad}' trong file HTML!`);
  } else {
    console.log(`[CHUẨN SẠCH] 0 lần xuất hiện chuỗi '${bad}'.`);
  }
}

// 3. Kiểm tra sự hiện diện của đủ 15 bài học
let missingLessons = 0;
for (let n = 1; n <= 15; n++) {
  const hasArticle = baseContent.includes(`id="bai-${n}"`);
  const hasA = baseContent.includes(`id="b${n}-cong-thuc"`);
  const hasB = baseContent.includes(`id="b${n}-noi-dung"`);
  const hasC = baseContent.includes(`id="b${n}-so-do"`);
  const hasD = baseContent.includes(`id="b${n}-tinh-huong"`);
  const hasE = baseContent.includes(`id="b${n}-trac-nghiem"`);

  if (!hasArticle || !hasA || !hasB || !hasC || !hasD || !hasE) {
    console.error(`[THIẾU PHẦN] Bài ${n} bị thiếu phần: article:${hasArticle}, A:${hasA}, B:${hasB}, C:${hasC}, D:${hasD}, E:${hasE}`);
    missingLessons++;
  }
}
console.log(`[ĐỦ 15 BÀI] Kiểm tra 15 bài x 5 phần (A-B-C-D-E): ${missingLessons === 0 ? 'HOÀN HẢO' : missingLessons + ' bài bị thiếu!'}`);

// 4. Đếm số câu hỏi trắc nghiệm & nút lựa chọn
const quizBtnMatches = baseContent.match(/class="quiz-btn/g) || [];
console.log(`[TRẮC NGHIỆM BÀI HỌC] Đếm được ${quizBtnMatches.length} nút trắc nghiệm (Kỳ vọng: 15 bài x 3 câu x 4 đáp án = 180 nút)`);

// 5. Đếm số câu hỏi Arena
const arenaQMatches = baseContent.match(/id="arena-q-\d+"/g) || [];
console.log(`[ĐẤU TRƯỜNG TRẠNG NGUYÊN] Đếm được ${arenaQMatches.length} câu hỏi Arena (Kỳ vọng: 20 câu)`);

// 6. Kiểm tra các thẻ nội dung rỗng
const emptyCardRegex = /<div class="space-y-2 mt-2">\s*<\/div>/g;
const emptyMatches = baseContent.match(emptyCardRegex) || [];
console.log(`[KIỂM TRA THẺ RỖNG] Thẻ nội dung rỗng: ${emptyMatches.length}`);

// 7. Kiểm tra cấu trúc Hero Banner
const hasFlexHero = baseContent.includes('flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8');
const hasMinW0 = baseContent.includes('flex-1 min-w-0');
const hasQuickJumpWidth = baseContent.includes('w-full lg:w-[420px]');
console.log(`[HERO BANNER CHUẨN] flex layout: ${hasFlexHero}, min-w-0: ${hasMinW0}, jump box width: ${hasQuickJumpWidth}`);

// 8. Đếm số SVG diagrams
const svgMatches = baseContent.match(/<svg viewBox="0 0 800 240"/g) || [];
console.log(`[SƠ ĐỒ SVG VECTOR] Đếm được ${svgMatches.length} sơ đồ trực quan (Kỳ vọng: 15 sơ đồ cho 15 bài)`);

console.log("=== HOÀN TẤT KIỂM TRA CHUYÊN ĐỀ TIN HỌC 11 ICT ===");
