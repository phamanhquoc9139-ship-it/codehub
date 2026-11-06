const fs = require('fs');

const toan = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_10.html', 'utf8');

const matches = toan.match(/.{0,50}A \\cup B.{0,100}/g);
console.log('Matches for A \\cup B:');
console.log(matches);
