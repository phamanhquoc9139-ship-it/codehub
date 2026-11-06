const fs = require('fs');

const t6 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_6.html', 'utf8');

const tail = t6.substring(t6.length - 2500);
console.log('toan_6 TAIL:\n', tail);
