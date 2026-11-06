const fs = require('fs');

const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const matches = indexHtml.match(/.{0,100}(?:tiengduc|german|Tiếng Đức|tieng_duc).{0,100}/gi) || [];
console.log('Matches in index.html:');
matches.forEach(m => console.log('---', m.replace(/\s+/g, ' ')));
