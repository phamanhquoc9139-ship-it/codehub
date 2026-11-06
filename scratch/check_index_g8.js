const fs = require('fs');
const index = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const hasHdtn8 = index.includes('courses/hdtn_8.html') || index.includes('courses/hdtnhn_8.html');
console.log('index.html already has hdtn_8:', hasHdtn8);

// Find Grade 8 section
const g8Idx = index.indexOf('id="grade-8"') !== -1 ? index.indexOf('id="grade-8"') : index.indexOf('Khối 8');
console.log('Grade 8 section index:', g8Idx);

if (g8Idx !== -1) {
  console.log(index.slice(g8Idx, g8Idx + 1500));
}
