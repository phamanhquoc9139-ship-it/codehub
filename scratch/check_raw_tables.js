const fs = require('fs');

function checkFile(path) {
  if (!fs.existsSync(path)) return;
  const content = fs.readFileSync(path, 'utf8');
  const count = (content.match(/\|---\|/g) || []).length;
  console.log(path, 'raw table count:', count);
}

checkFile('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdktpl_10.html');
checkFile('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/ktpl_10.html');
checkFile('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdqp_10.html');
checkFile('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/quocphong_10.html');
checkFile('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/vatly_10.html');
