const fs = require('fs');
const path = require('path');
const baseDir = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform';

const p = path.join(baseDir, 'courses/gdqp_11.html');
if (fs.existsSync(p)) {
  const stat = fs.statSync(p);
  console.log('gdqp_11.html size:', stat.size, 'mtime:', stat.mtime);
  const content = fs.readFileSync(p, 'utf8');
  console.log('Preview:\n', content.substring(0, 500));
} else {
  console.log('gdqp_11.html does not exist');
}
