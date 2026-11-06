const fs = require('fs');
const khtn = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/khtn_7.html', 'utf8');

// Find articles or divs that represent lessons in KHTN
const articleMatch = khtn.match(/<article[^>]*class="([^"]*)"/g);
console.log('KHTN article classes:');
if (articleMatch) console.log(articleMatch.slice(0, 3));

// Check how lessons are structured in KHTN
const bai1Idx = khtn.indexOf('id="bai-1"');
if (bai1Idx !== -1) {
  console.log('KHTN bai-1 context:');
  console.log(khtn.substring(bai1Idx - 50, bai1Idx + 400));
}
