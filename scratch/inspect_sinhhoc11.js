const fs = require('fs');
const s = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/sinhhoc_11.html', 'utf8');
console.log('sinhhoc_11.html length:', s.length);

const lines = s.split('\n');
console.log('Header/Hero lines (1-80):');
for (let i = 0; i < 70; i++) console.log((i+1) + ': ' + lines[i]);
