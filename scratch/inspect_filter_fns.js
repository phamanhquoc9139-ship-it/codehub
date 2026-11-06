const fs = require('fs');
const content = fs.readFileSync('courses/tiengtrung_10.html', 'utf8');

// Check filterSidebar
const filterIdx = content.indexOf('function filterSidebar');
console.log('--- filterSidebar ---');
console.log(content.substring(filterIdx, filterIdx + 500));

// Check toggleBookmarkFilter
const bmIdx = content.indexOf('function toggleBookmarkFilter');
console.log('--- toggleBookmarkFilter ---');
console.log(content.substring(bmIdx, bmIdx + 500));
