const fs = require('fs');

const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const idx = indexHtml.indexOf('courses/tiengduc_6.html');
if (idx !== -1) {
  console.log(indexHtml.substring(idx - 300, idx + 500));
} else {
  console.log('Not found');
}
