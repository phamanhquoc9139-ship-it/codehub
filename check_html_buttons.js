const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

console.log('Filter THCS button HTML:');
const m = content.match(/<button onclick="filterCoursesBy\('grade-thcs'\)"[\s\S]*?<\/button>/);
if (m) console.log(m[0]);

console.log('Filter Tất cả button HTML:');
const mAll = content.match(/<button onclick="filterCoursesBy\('all'\)"[\s\S]*?<\/button>/);
if (mAll) console.log(mAll[0]);

console.log('Filter badge HTML:');
const mBadge = content.match(/<span id="filter-result-badge"[\s\S]*?<\/span>/);
if (mBadge) console.log(mBadge[0]);
