const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_6.html', 'utf8');

console.log('--- HEAD & NAV ---');
console.log(content.slice(0, 1500));

console.log('--- BOTTOM SCRIPTS & MODALS ---');
console.log(content.slice(-2500));
