const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tiengtrung_9.html', 'utf8');

// Find a sample lesson card
const matchLesson = content.match(/<article id="bai-1"[\s\S]*?<\/article>/);
if (matchLesson) {
  console.log('Sample lesson 1 snippet (first 1500 chars):');
  console.log(matchLesson[0].slice(0, 1500));
}
