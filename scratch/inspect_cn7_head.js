const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_7.html', 'utf8');

const head = content.slice(0, 1500);
console.log('=== HEAD CONFIG ===');
console.log(head);
