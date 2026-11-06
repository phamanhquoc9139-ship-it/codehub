const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Function to extract a course card by its comment
function extractCard(startComment) {
  const pStart = html.indexOf(startComment);
  if (pStart === -1) {
    console.error('Cannot find comment:', startComment);
    return null;
  }
  
  // Card starts at pStart. Now find where the card ends.
  // The card has an opening <div and closing </div>
  // Let's find the next <!-- Course Card: or the closing </div> of this card
  // A safe way: look for the next "<!-- Course Card:" or "<!-- ===================="
  let pEnd = html.indexOf('<!-- Course Card:', pStart + startComment.length);
  const pNextSection = html.indexOf('<!-- ====================', pStart + startComment.length);
  
  if (pEnd === -1 || (pNextSection !== -1 && pNextSection < pEnd)) {
    pEnd = pNextSection;
  }
  
  // If neither found, look for </div>\n                    </div>\n                    </div>
  if (pEnd === -1) {
    console.error('Cannot find end of card for:', startComment);
    return null;
  }
  
  const cardHTML = html.substring(pStart, pEnd);
  return { cardHTML, pStart, pEnd };
}

// List of Grade 9 course comments
const g9CardComments = [
  '<!-- Course Card: Toán 9 -->',
  '<!-- Course Card: Ngữ Văn 9 -->',
  '<!-- Course Card: Tiếng Anh 9 -->',
  '<!-- Course Card: Khoa Học Tự Nhiên 9 -->',
  '<!-- Course Card: Lịch Sử và Địa Lí 9 -->',
  '<!-- Course Card: Giáo Dục Công Dân 9 -->',
  '<!-- Course Card: Tin học 9 -->',
  '<!-- Course Card: Công Nghệ 9 -->',
  '<!-- Course Card: Công Nghệ 9 — Chế Biến Thực Phẩm -->',
  '<!-- Course Card: Công Nghệ 9 — Trồng Cây Ăn Quả -->',
  '<!-- Course Card: Âm Nhạc 9 -->',
  '<!-- Course Card: Mĩ Thuật 9 -->',
  '<!-- Course Card: Giáo Dục Thể Chất 9 -->',
  '<!-- Course Card: Hoạt Động Trải Nghiệm, Hướng Nghiệp 9 -->',
  '<!-- Course Card: Tiếng Nhật 9 -->',
  '<!-- Course Card: Tiếng Pháp 9 -->',
  '<!-- Course Card: Tiếng Trung Quốc 9 -->'
];

console.log('Testing extraction for all 17 Grade 9 cards...');
const extracted = {};

g9CardComments.forEach(comment => {
  const res = extractCard(comment);
  if (res) {
    console.log('Extracted:', comment, 'size:', res.cardHTML.length);
    extracted[comment] = res.cardHTML.trim();
  } else {
    console.error('FAILED for:', comment);
  }
});
