const fs = require('fs');
const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html', 'utf8');

const idx15 = html.indexOf('id="lesson-15"');
const end15 = html.indexOf('id="lesson-16"');
const lesson15Html = html.substring(idx15, end15);

console.log("=== BÀI 15 HTML CURRENT ===");
console.log(lesson15Html);
