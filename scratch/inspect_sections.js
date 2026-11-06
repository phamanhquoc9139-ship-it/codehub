const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tiengtrung_9.html', 'utf8');

const matchLesson = content.match(/<article id="bai-1"[\s\S]*?<\/article>/);
if (matchLesson) {
  const l = matchLesson[0];
  console.log('Headings in Lesson 1:');
  const headings = l.match(/<h[45][^>]*>[\s\S]*?<\/h[45]>/gi) || [];
  headings.forEach(h => console.log(h.replace(/\s+/g, ' ').replace(/<[^>]*>/g, '').trim()));
}
