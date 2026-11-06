const fs = require('fs');

const path = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tinhoc_10.html';
const content = fs.readFileSync(path, 'utf8');

const matches = content.match(/.{0,50}2\^10.{0,50}/g);
console.log('Matches for 2^10 in tinhoc_10.html:', matches);

const dPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/tinhoc10_data.js';
const dContent = fs.readFileSync(dPath, 'utf8');
const dMatches = dContent.match(/.{0,50}2\^10.{0,50}/g);
console.log('Matches for 2^10 in tinhoc10_data.js:', dMatches);
