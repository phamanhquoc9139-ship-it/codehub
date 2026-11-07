const fs = require('fs');
const s = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/build_sinhhoc11.js', 'utf8');
const lines = s.split('\n');
console.log('Lines 150 to 280 of build_sinhhoc11.js:');
for (let i = 150; i < 280; i++) console.log((i+1) + ': ' + lines[i]);
