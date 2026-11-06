const fs = require('fs');
const gdcd = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdcd_8.html', 'utf8');

console.log('--- GDCD 8 STATS ---');
console.log('Length:', gdcd.length);
console.log('Head slice:', gdcd.slice(0, 1500));
console.log('Script section end:', gdcd.slice(gdcd.lastIndexOf('<script>'), gdcd.lastIndexOf('<script>') + 1500));
