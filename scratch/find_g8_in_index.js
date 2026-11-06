const fs = require('fs');
const index = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const m = index.match(/courses\/[^\"]*_8\.html/g) || [];
console.log('Matches for _8.html in index.html:', m);
