const fs = require('fs');
const k7 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/khtn_7.html', 'utf8');

console.log('--- KHTN 7 HEAD ---');
console.log(k7.slice(0, 1500));
console.log('--- KHTN 7 SCRIPT ---');
console.log(k7.slice(k7.lastIndexOf('<script>'), k7.lastIndexOf('<script>') + 1500));
