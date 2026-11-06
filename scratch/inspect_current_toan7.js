const fs = require('fs');

const html7 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html', 'utf8');

const idx3 = html7.indexOf('id="lesson-3"');
const end3 = html7.indexOf('id="lesson-4"');
console.log("=== FULL LESSON 3 IN TOAN_7.HTML ===");
console.log(html7.substring(idx3, end3));
