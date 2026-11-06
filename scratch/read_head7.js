const fs = require('fs');

const t7 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html', 'utf8');

const headEnd = t7.indexOf('</head>');
console.log('toan_7 HEAD:\n', t7.substring(0, headEnd + 7));
