const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/generate_congnghe_html.js', 'utf8');

console.log('Script length:', content.length);
console.log('Has calculator modal?', content.includes('calcModal') || content.includes('Máy tính'));
console.log('Has trang nguyen modal?', content.includes('trangNguyenModal') || content.includes('Trạng Nguyên'));
console.log('Where does it write files?', content.match(/fs\.writeFileSync[^\n]+/g));
