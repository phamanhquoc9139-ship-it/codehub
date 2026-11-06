const fs = require('fs');

const f = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdtc_7.html', 'utf8');

const sections = f.match(/<section[^>]+>/g);
console.log('Sections in gdtc_7:', sections);
