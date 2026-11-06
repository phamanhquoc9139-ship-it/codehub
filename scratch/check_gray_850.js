const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_7.html', 'utf8');

const matches = content.match(/gray-850/g);
console.log('Total occurrences of gray-850:', matches ? matches.length : 0);
