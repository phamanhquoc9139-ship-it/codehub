const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_9.html', 'utf8');

const head = content.slice(0, content.indexOf('</head>'));
console.log(head);
