const fs = require('fs');
const path = require('path');

const index = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

const p8 = index.indexOf('<!-- ==================== KHỐI LỚP 8 ==================== -->');
const p9 = index.indexOf('<!-- ==================== KHỐI LỚP 9 ==================== -->');
const chunk8 = index.substring(p8, p9);

const matches = [];
const reg = /courses\/([a-zA-Z0-9_-]+_8)\.html/g;
let m;
while ((m = reg.exec(chunk8)) !== null) {
  matches.push(m[1]);
}
console.log('Courses in Khối 8 in exact DOM order:\n', [...new Set(matches)]);

// And for Khối 9:
const p10 = index.indexOf('<!-- ==================== KHỐI LỚP 10 ==================== -->');
const chunk9 = index.substring(p9, p10 > -1 ? p10 : p9 + 50000);
const matches9 = [];
const reg9 = /courses\/([a-zA-Z0-9_-]+_9)\.html/g;
while ((m = reg9.exec(chunk9)) !== null) {
  matches9.push(m[1]);
}
console.log('\nCourses in Khối 9 in exact DOM order:\n', [...new Set(matches9)]);
