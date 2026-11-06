const fs = require('fs');

const path = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/grade_10.html';
const content = fs.readFileSync(path, 'utf8');

const idx = content.indexOf('Kilobyte (KB)');
console.log(content.slice(idx, idx + 250));
