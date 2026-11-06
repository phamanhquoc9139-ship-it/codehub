const fs = require('fs');

const t6 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_6.html', 'utf8');

console.log('toan_6.html length:', t6.length);

// Xem head của toan_6.html (css, katex, fonts, scripts)
const headEnd = t6.indexOf('</head>');
console.log('toan_6 HEAD:\n', t6.substring(0, headEnd + 7));
