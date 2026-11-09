const fs = require('fs');

const c = fs.readFileSync('courses/chuyende_tinhoc_10_ict.html', 'utf8');
const bàiMatches = c.match(/Bài \d+/g);
console.log("Bài matches:", [...new Set(bàiMatches)]);
console.log("Contains 'bai-1':", c.includes('bai-1'));
console.log("Contains 'bai-15':", c.includes('bai-15'));
console.log("Contains 'Chuyên đề 1':", c.includes('Chuyên đề 1'));
console.log("Contains 'Chuyên đề 2':", c.includes('Chuyên đề 2'));
console.log("Contains 'Chuyên đề 3':", c.includes('Chuyên đề 3'));
