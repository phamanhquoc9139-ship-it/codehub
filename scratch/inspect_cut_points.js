const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
const index = fs.readFileSync(indexPath, 'utf8');

// 1. Surrounding of CN9
const cn9Start = index.indexOf('<!-- Course Card: Công Nghệ 9 -->');
const cn9End = index.indexOf('<!-- Course Card: Tin học 3 -->');
console.log('CN9 block length:', cn9End - cn9Start);

// 2. Surrounding of TT9
const tt9Start = index.indexOf('<!-- Course Card: Tiếng Trung Quốc 9 -->');
const tt9End = index.indexOf('<!-- Course Card: Chuyên Đề Hóa Học 10 -->');
console.log('TT9 block length:', tt9End - tt9Start);

// 3. Khối 9 container
const k9Start = index.indexOf('<!-- ==================== KHỐI LỚP 9 ==================== -->');
const k10Start = index.indexOf('<!-- ==================== KHỐI LỚP 10 ==================== -->');
console.log('K9 section start to K10 section start length:', k10Start - k9Start);
console.log('Context at K9 start:\n', index.substring(k9Start - 100, k9Start + 200));
console.log('Context at K10 start:\n', index.substring(k10Start - 100, k10Start + 200));
