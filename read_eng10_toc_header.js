const fs = require('fs');
const c = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tienganh_10.html', 'utf8');
const idx = c.indexOf('<!-- Sticky Sidebar Navigation (Col 4) -->');
console.log(c.substring(idx, idx + 650));
