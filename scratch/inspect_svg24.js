const fs = require('fs');
const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html', 'utf8');

const b24 = html.indexOf('id="lesson-24"');
const b25 = html.indexOf('id="lesson-25"');
const card24 = html.slice(b24, b25);
const svg24 = card24.match(/<svg[\s\S]*?<\/svg>/)[0];
console.log('--- SVG LESSON 24 ---');
console.log(svg24);
