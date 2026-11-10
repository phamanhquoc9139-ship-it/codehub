const fs = require('fs');
const c = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tienganh_10.html', 'utf8');
const idx = c.indexOf('<aside');
console.log(c.substring(idx - 350, idx + 800));
