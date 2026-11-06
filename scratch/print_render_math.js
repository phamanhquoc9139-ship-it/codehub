const fs = require('fs');

const toan = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_10.html', 'utf8');

const lastScript = toan.lastIndexOf('<script>');
const scriptContent = toan.slice(lastScript);
const lines = scriptContent.split('\n');
console.log(lines.slice(280, 315).join('\n'));
