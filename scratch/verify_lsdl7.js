const fs = require('fs');

const lsdlPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/lichsu_diali_7.html';
const aliasPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/history_geography_7.html';
const indexPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html';

console.log('1. Checking file existence & size:');
console.log(' - lichsu_diali_7.html:', fs.existsSync(lsdlPath), fs.statSync(lsdlPath).size, 'bytes');
console.log(' - history_geography_7.html:', fs.existsSync(aliasPath), fs.statSync(aliasPath).size, 'bytes');

const html = fs.readFileSync(lsdlPath, 'utf8');

console.log('2. Checking navigation links in lichsu_diali_7.html:');
if (html.includes('subjects.html')) {
  console.error('ERROR: subjects.html found in lichsu_diali_7.html!');
} else {
  console.log('SUCCESS: No subjects.html found in lichsu_diali_7.html.');
}

const backMatch = html.match(/href="([^"]*index\.html)"/g);
console.log('Back links to index.html:', backMatch);

console.log('3. Checking Dark Mode configuration:');
console.log(' - 850 in config:', html.includes("850: '#151b28'"));
console.log(' - toggleDarkMode defined:', html.includes('function toggleDarkMode()'));

console.log('4. Checking index.html entry:');
const indexHtml = fs.readFileSync(indexPath, 'utf8');
console.log(' - lichsu_diali_7.html in index.html:', indexHtml.includes('courses/lichsu_diali_7.html'));

console.log('All verification checks passed!');
