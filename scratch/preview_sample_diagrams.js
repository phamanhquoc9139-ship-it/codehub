const fs = require('fs');
const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/vatly_10.html', 'utf8');

function checkLesson(num) {
  const start = html.indexOf(`id="bai-${num}"`);
  const nextStart = html.indexOf(`id="bai-${num+1}"`);
  const chunk = html.substring(start, nextStart);
  const diagStart = chunk.indexOf('Sơ đồ minh họa');
  console.log(`Bài ${num} diagram preview:`, chunk.substring(diagStart - 30, diagStart + 120));
}

checkLesson(1);
checkLesson(4);
checkLesson(12);
checkLesson(15);
checkLesson(27);
checkLesson(31);
checkLesson(33);
