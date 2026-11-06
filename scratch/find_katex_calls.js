const fs = require('fs');

const toan = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_10.html', 'utf8');

const lastScript = toan.lastIndexOf('<script>');
const scriptContent = toan.slice(lastScript);

// Search for renderMath or katex in scriptContent
const lines = scriptContent.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('renderMath') || l.includes('katex') || l.includes('ensureMath')) {
    console.log(`Line ${idx}: ${l}`);
  }
});
