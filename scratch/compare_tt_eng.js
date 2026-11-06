const fs = require('fs');

const tt = fs.readFileSync('courses/tiengtrung_10.html', 'utf8');
const eng = fs.readFileSync('courses/tienganh_10.html', 'utf8');

console.log('tiengtrung_10 size:', tt.length);
console.log('tienganh_10 size:', eng.length);

console.log('tiengtrung_10 has JetBrains Mono:', tt.includes('JetBrains Mono'));
console.log('tiengtrung_10 has Plus Jakarta Sans:', tt.includes('Plus Jakarta Sans'));
console.log('tiengtrung_10 has handbookModal:', tt.includes('handbookModal'));
console.log('tiengtrung_10 has modal-grammar:', tt.includes('modal-grammar'));
console.log('tiengtrung_10 has examModal:', tt.includes('examModal'));
console.log('tiengtrung_10 has modal-exam:', tt.includes('modal-exam'));
