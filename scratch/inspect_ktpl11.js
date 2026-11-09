const fs = require('fs');
const path = require('path');
const baseDir = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform';

const ktpl11Path = path.join(baseDir, 'courses/ktpl_11.html');
if (fs.existsSync(ktpl11Path)) {
  const stat = fs.statSync(ktpl11Path);
  console.log('ktpl_11.html size:', stat.size, 'mtime:', stat.mtime);
  const content = fs.readFileSync(ktpl11Path, 'utf8');
  console.log('Preview:', content.substring(0, 500));
} else {
  console.log('ktpl_11.html does not exist');
}
