const fs = require('fs');
const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_12.html', 'utf8');

const p = html.indexOf('id="bai-7"');
console.log('Index of id="bai-7":', p);
console.log(html.slice(p, p + 2000));
