const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdcd_6.html', 'utf8');

const headEnd = content.indexOf('</head>');
console.log('--- HEAD SCRIPT IN GDCD 6 ---');
console.log(content.slice(headEnd - 800, headEnd));

const scriptStart = content.indexOf('<script>\n    // Dark mode handler');
console.log('--- SCRIPT IN GDCD 6 ---');
console.log(content.slice(scriptStart, scriptStart + 800));
