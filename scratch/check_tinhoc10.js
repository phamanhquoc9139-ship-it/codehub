const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tinhoc_10.html', 'utf8');

console.log('File size:', content.length);
console.log('Title/Header snippet:');
console.log(content.slice(0, 1200));

console.log('\nFind lessons count:');
const lessons = content.match(/id="bai-\d+"/g) || [];
console.log('Lessons count:', lessons.length, lessons.slice(0, 5));
