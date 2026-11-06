const fs = require('fs');

const toan = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_10.html', 'utf8');

// Find all occurrences of renderMath or ensureMath in the bottom script
const lastScript = toan.lastIndexOf('<script>');
console.log('Last script snippet:');
console.log(toan.slice(lastScript, lastScript + 3000));
