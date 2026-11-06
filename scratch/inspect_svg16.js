const fs = require('fs');
const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html', 'utf8');

const b16 = html.indexOf('id="lesson-16"');
const b17 = html.indexOf('id="lesson-17"');
const card16 = html.slice(b16, b17);
const svg16 = card16.match(/<svg[\s\S]*?<\/svg>/)[0];
console.log('--- SVG LESSON 16 ---');
console.log(svg16);
