const fs = require('fs');
const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_9.html', 'utf8');
const idx = html.indexOf('function ensureMathRendered');
console.log(html.substring(idx, idx + 600));
