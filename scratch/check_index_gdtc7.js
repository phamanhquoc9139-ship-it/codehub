const fs = require('fs');

const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const matches = indexHtml.match(/.{0,100}(?:gdtc_7|pe_7|Giáo Dục Thể Chất 7).{0,100}/gi) || [];
console.log('Matches for gdtc_7 in index.html:');
matches.forEach(m => console.log('---', m.replace(/\s+/g, ' ')));
