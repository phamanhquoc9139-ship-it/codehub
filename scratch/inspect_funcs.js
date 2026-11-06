const fs = require('fs');
const gdcd = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdcd_8.html', 'utf8');

const m = gdcd.match(/function\s+(?:check|select|answer)\w*[\s\S]*?\{[\s\S]*?\n    \}/g);
if (m) {
  console.log('Found functions:', m.map(f => f.slice(0, 50).replace(/\n/g, ' ')));
} else {
  console.log('No matching functions with regex');
}
