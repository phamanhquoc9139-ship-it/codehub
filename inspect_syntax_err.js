const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdcd_6.html', 'utf8');

const idx = content.indexOf('ĐANG KẾT NỐI TỚI');
console.log('--- Context around ĐANG KẾT NỐI TỚI ---');
console.log(content.slice(idx - 100, idx + 400));
