const fs = require('fs');
const index = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const g8Matches = [...index.matchAll(/courses\/[^\"]*_8\.html/g)].map(m => m[0]);
console.log('Grade 8 course links in index.html:', g8Matches);
