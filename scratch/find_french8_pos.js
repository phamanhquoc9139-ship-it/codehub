const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const target1 = '<!-- Course Card: Tiếng Nhật 8 -->';
const target2 = '<!-- Course Card: Tin học 8 -->';

console.log('Pos Tiếng Nhật 8:', content.indexOf(target1));
console.log('Pos Tin học 8:', content.indexOf(target2));
