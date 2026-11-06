const fs = require('fs');
const content = fs.readFileSync('courses/toan_8.html', 'utf8');
const idx = content.lastIndexOf('renderMathInElement');
console.log(content.substring(idx - 100, idx + 600));
