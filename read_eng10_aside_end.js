const fs = require('fs');
const c = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tienganh_10.html', 'utf8');
const start = c.indexOf('<aside');
const end = c.indexOf('</aside>', start);
console.log('aside length:', end - start);
console.log(c.substring(end - 200, end + 400));
