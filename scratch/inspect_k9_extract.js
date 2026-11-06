const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
const index = fs.readFileSync(indexPath, 'utf8');

// Find all cards related to Grade 9
const p9Start = index.indexOf('<!-- ==================== KHỐI LỚP 9 ==================== -->');
const p10Start = index.indexOf('<!-- ==================== KHỐI LỚP 10 ==================== -->');

console.log('p9Start:', p9Start, 'p10Start:', p10Start);

// Also check where tiengtrung_9 is
const pTT = index.indexOf('courses/tiengtrung_9.html');
console.log('tiengtrung_9 pos:', pTT);

// Also check where congnghe_9 is
const pCN = index.indexOf('courses/congnghe_9.html');
console.log('congnghe_9 pos:', pCN);
