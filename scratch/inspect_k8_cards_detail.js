const fs = require('fs');
const path = require('path');

const index = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

const p8 = index.indexOf('<!-- ==================== KHỐI LỚP 8 ==================== -->');
const p9 = index.indexOf('<!-- ==================== KHỐI LỚP 9 ==================== -->');
const chunk8 = index.substring(p8, p9);

// Find each card in chunk8
const cardReg = /<div onclick="[^"]*courses\/([^"]+)\.html"[^>]*>[\s\S]*?<h3[^>]*>(.*?)<\/h3>/g;
let m;
console.log('--- KHỐI 8 CARDS IN ORDER ---');
while ((m = cardReg.exec(chunk8)) !== null) {
  console.log(`${m[1]}.html -> ${m[2].trim()}`);
}
