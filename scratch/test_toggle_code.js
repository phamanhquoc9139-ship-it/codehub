const fs = require('fs');

const nv7 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/nguvan_7.html', 'utf8');

// Check that toggleDarkMode is properly formed
console.log('--- toggleDarkMode definition ---');
const idx = nv7.indexOf('function toggleDarkMode');
console.log(nv7.substring(idx, idx + 250));

// Check button
console.log('--- Button in header ---');
const btnIdx = nv7.indexOf('onclick="toggleDarkMode()"');
console.log(nv7.substring(btnIdx - 20, btnIdx + 200));

// Check literature_7.html
const lit7 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/literature_7.html', 'utf8');
console.log('literature_7.html size matches:', nv7.length === lit7.length);
