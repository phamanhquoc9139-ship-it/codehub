const fs = require('fs');
const path = require('path');

const base = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform';
const indexHtml = fs.readFileSync(path.join(base, 'index.html'), 'utf8');

// Find filterCoursesBy definition & modes
const fIdx = indexHtml.indexOf('function filterCoursesBy(');
console.log('--- filterCoursesBy ---');
console.log(indexHtml.substring(fIdx, fIdx + 1200));

// Find effectiveFilterMode branches
const eIdx = indexHtml.indexOf('effectiveFilterMode');
console.log('\n--- effectiveFilterMode branches ---');
console.log(indexHtml.substring(eIdx, eIdx + 2000));

// Search for any email or contact info in scripts/ or root html files
const rootFiles = fs.readdirSync(base).filter(f => f.endsWith('.html'));
console.log('\n--- Checking root HTML files for contact/about/privacy/terms ---');
for (const rf of rootFiles) {
  const c = fs.readFileSync(path.join(base, rf), 'utf8');
  if (c.includes('mailto:') || c.includes('chinh sach') || c.includes('dieu khoan') || c.includes('huong dan')) {
    console.log('Found info in:', rf);
  }
}
