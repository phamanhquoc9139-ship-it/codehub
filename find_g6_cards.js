const fs = require('fs');

const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

// Find all cards around grade 6 courses
const khtnIdx = indexHtml.indexOf('courses/khtn_6.html');
console.log('khtn_6 position:', khtnIdx);
if (khtnIdx !== -1) {
  // Let's print from 200 chars before khtn_6 to 1500 chars after khtn_6
  console.log(indexHtml.substring(khtnIdx - 200, khtnIdx + 1500));
}
