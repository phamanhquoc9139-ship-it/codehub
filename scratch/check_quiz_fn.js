const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_9.html', 'utf8');

const fnIdx = content.indexOf('function checkLessonQuiz');
console.log(content.slice(fnIdx, fnIdx + 1000));
