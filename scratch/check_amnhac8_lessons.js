const fs = require('fs');
const content = fs.readFileSync('courses/amnhac_8.html', 'utf8');

console.log('File size:', content.length);
// Check which lessons are present
for (let i = 1; i <= 16; i++) {
  const hasLesson = content.includes(`id="bai-${i}"`) || content.includes(`id="lesson-${i}"`) || content.includes(`Bài ${i}`);
  console.log(`Bài ${i}: ${hasLesson}`);
}
