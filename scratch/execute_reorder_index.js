const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// List of all 17 Grade 9 cards in the desired order
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

function extractCardContent(comment) {
  const pStart = html.indexOf(comment);
  if (pStart === -1) throw new Error('Missing comment: ' + comment);
  
  let pEnd = html.indexOf('<!-- Course Card:', pStart + comment.length);
  const pNextSection = html.indexOf('<!-- ====================', pStart + comment.length);
  if (pEnd === -1 || (pNextSection !== -1 && pNextSection < pEnd)) {
    pEnd = pNextSection;
  }
  return html.substring(pStart, pEnd).trim();
}

const cardsMap = {};
for (const comment of g9CardComments) {
  cardsMap[comment] = extractCardContent(comment);
}
console.log('Successfully captured all 17 cards.');

// Step 2: Remove the 3 misplaced Công Nghệ 9 cards from Grade 3 area
const cn9Start = html.indexOf('<!-- Course Card: Công Nghệ 9 -->');
const cn9End = html.indexOf('<!-- Course Card: Tin học 3 -->');
if (cn9Start === -1 || cn9End === -1) throw new Error('Cannot find CN9 cut boundaries');
html = html.substring(0, cn9Start) + html.substring(cn9End);
console.log('Removed misplaced CN9 cards from Grade 3.');

// Step 3: Remove the misplaced Tiếng Trung Quốc 9 card from Grade 10 area
const tt9Start = html.indexOf('<!-- Course Card: Tiếng Trung Quốc 9 -->');
const tt9End = html.indexOf('<!-- Course Card: Chuyên Đề Hóa Học 10 -->');
if (tt9Start === -1 || tt9End === -1) throw new Error('Cannot find TT9 cut boundaries');
html = html.substring(0, tt9Start) + html.substring(tt9End);
console.log('Removed misplaced TT9 card from Grade 10.');

// Step 4: Now find the Khối 9 section
const k9StartIdx = html.indexOf('<!-- ==================== KHỐI LỚP 9 ==================== -->');
if (k9StartIdx === -1) throw new Error('Cannot find K9 start');

// Find the second occurrence of KHỐI LỚP 9 comment (duplicate line)
const secondK9 = html.indexOf('<!-- ==================== KHỐI LỚP 9 ==================== -->', k9StartIdx + 30);
const insertionPoint = html.indexOf('\n', secondK9 > -1 ? secondK9 : k9StartIdx) + 1;

// Find start of K10
const k10MarkerPos = html.indexOf('<!-- ==================== KHỐI LỚP 10 ==================== -->');
if (k10MarkerPos === -1) throw new Error('Cannot find K10 marker after K9');

// Find the last </div> before K10 marker
// Look at the original text right before K10 marker:
// ... cards ... \r\n </div>\r\n </div>\r\n ...
// We replace everything between insertionPoint and k10MarkerPos with the 17 cards!
const cardsFormatted = g9CardComments.map(c => `                    ${cardsMap[c]}`).join('\r\n\r\n') + '\r\n\r\n                    ';

html = html.substring(0, insertionPoint) + '\r\n' + cardsFormatted + html.substring(k10MarkerPos);

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Successfully updated index.html with all 17 Grade 9 cards in perfect pedagogical order!');
