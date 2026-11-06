const fs = require('fs');

const cn6 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_6.html', 'utf8');
const idx = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');
const gdcd = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdcd_6.html', 'utf8');

console.log('--- CN6 toggleDarkMode search ---');
const cn6Matches = cn6.match(/toggleDarkMode[\s\S]{0,300}/g);
console.log(cn6Matches);

console.log('--- Index toggleDarkMode search ---');
const idxMatches = idx.match(/toggleDarkMode[\s\S]{0,300}/g);
console.log(idxMatches);

console.log('--- GDCD toggleDarkMode search ---');
const gdcdMatches = gdcd.match(/toggleDarkMode[\s\S]{0,300}/g);
console.log(gdcdMatches);
