const fs = require('fs');
const path = require('path');

const index = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

function getCoursesInChunk(startComment, endComment) {
  const p1 = index.indexOf(startComment);
  const p2 = index.indexOf(endComment, p1 + startComment.length);
  const chunk = index.substring(p1, p2);
  const regex = /<!-- Course Card: (.*?) -->/g;
  let match;
  const list = [];
  while ((match = regex.exec(chunk)) !== null) {
    list.push(match[1]);
  }
  return list;
}

console.log('KHỐI LỚP 7:');
console.log(getCoursesInChunk('<!-- ==================== KHỐI LỚP 7 ==================== -->', '<!-- ==================== KHỐI LỚP 8 ==================== -->'));

console.log('\nKHỐI LỚP 8:');
console.log(getCoursesInChunk('<!-- ==================== KHỐI LỚP 8 ==================== -->', '<!-- ==================== KHỐI LỚP 9 ==================== -->'));

console.log('\nKHỐI LỚP 9:');
console.log(getCoursesInChunk('<!-- ==================== KHỐI LỚP 9 ==================== -->', '<!-- ==================== KHỐI LỚP 10 ==================== -->'));
