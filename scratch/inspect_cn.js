const fs = require('fs');
const cn = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_7.html', 'utf8');

const filterIdx = cn.indexOf('LỌC THEO CHƯƠNG');
console.log('=== FILTER AREA ===');
console.log(cn.substring(filterIdx - 100, filterIdx + 600));

const phuongthucIdx = cn.indexOf('3 PHƯƠNG THỨC TRỒNG TRỌT');
console.log('=== PHUONG THUC AREA ===');
console.log(cn.substring(phuongthucIdx - 150, phuongthucIdx + 500));

const noidungIdx = cn.indexOf('NỘI DUNG KIẾN THỨC TRỌNG TÂM');
console.log('=== NOI DUNG AREA ===');
console.log(cn.substring(noidungIdx - 150, noidungIdx + 800));
