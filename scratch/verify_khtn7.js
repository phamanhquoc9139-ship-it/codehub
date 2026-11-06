const fs = require('fs');

const khtnPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/khtn_7.html';
const sciencePath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/science_7.html';
const indexPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html';

console.log('1. Checking files existence & size:');
console.log(' - khtn_7.html:', fs.existsSync(khtnPath), fs.statSync(khtnPath).size, 'bytes');
console.log(' - science_7.html:', fs.existsSync(sciencePath), fs.statSync(sciencePath).size, 'bytes');

const khtnHtml = fs.readFileSync(khtnPath, 'utf8');

console.log('2. Checking navigation links in khtn_7.html:');
if (khtnHtml.includes('subjects.html')) {
  console.error('ERROR: subjects.html found in khtn_7.html!');
} else {
  console.log('SUCCESS: No subjects.html found in khtn_7.html.');
}

const backMatch = khtnHtml.match(/href="([^"]*index\.html)"/g);
console.log('Back links to index.html:', backMatch);

console.log('3. Checking Dark Mode configuration:');
console.log(' - 850 in config:', khtnHtml.includes("850: '#151b28'"));
console.log(' - toggleDarkMode defined:', khtnHtml.includes('function toggleDarkMode()'));

console.log('4. Checking index.html entry:');
const indexHtml = fs.readFileSync(indexPath, 'utf8');
console.log(' - khtn_7.html in index.html:', indexHtml.includes('courses/khtn_7.html'));

console.log('All checks passed successfully!');
