const fs = require('fs');

const pKTPL = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/ktpl_10.html';
const htmlKTPL = fs.readFileSync(pKTPL, 'utf8');

console.log('--- KTPL 10 CHECKS ---');
console.log('Has raw markdown table in Bai 19?', htmlKTPL.includes('| Cơ quan/chức danh |'));
console.log('Has ** in Bai 19?', htmlKTPL.includes('**ban hành luật') || htmlKTPL.includes('**'));
console.log('Has truncate class in KTPL?', htmlKTPL.includes('truncate'));
const ktplSidebarMatches = htmlKTPL.match(/<a href="#bai-\d+"[^>]*>[\s\S]*?<\/a>/g);
if (ktplSidebarMatches) {
  console.log('KTPL Sidebar sample (first 3):', ktplSidebarMatches.slice(0, 3));
}

const pTK = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_thietke_10.html';
const htmlTK = fs.readFileSync(pTK, 'utf8');
console.log('\n--- CONG NGHE THIET KE 10 CHECKS ---');
console.log('Has $\\rightarrow$ ?', htmlTK.includes('$\\rightarrow$') || htmlTK.includes('\\rightarrow'));
console.log('Has truncate class in CN TK?', htmlTK.includes('truncate'));
const tkSidebarMatches = htmlTK.match(/<a href="#bai-\d+"[^>]*>[\s\S]*?<\/a>/g);
if (tkSidebarMatches) {
  console.log('CN TK Sidebar sample (first 3):', tkSidebarMatches.slice(0, 3));
}
