const fs = require('fs');
const c = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdtc_7.html', 'utf8');
const idx = c.indexOf('0 0 850 360');
console.log(c.slice(idx - 20, idx + 1000));
