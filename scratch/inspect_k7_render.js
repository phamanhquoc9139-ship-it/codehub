const fs = require('fs');
const k7 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/khtn_7.html', 'utf8');

console.log('Has #lessonsContainer or similar:', k7.includes('lessons') || k7.includes('LESSONS'));
const m = k7.match(/<article[\s\S]*?<\/article>/);
if (m) {
  console.log('Sample article:', m[0].slice(0, 300));
} else {
  console.log('No <article> tag found');
}
const sIdx = k7.indexOf('function render');
if (sIdx !== -1) {
  console.log('render function:', k7.slice(sIdx, sIdx + 400));
}
