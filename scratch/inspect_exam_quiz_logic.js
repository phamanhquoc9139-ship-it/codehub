const fs = require('fs');
const gdcd = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdcd_8.html', 'utf8');

const quizIdx = gdcd.indexOf('function checkLessonQuiz');
console.log('Quiz function snippet:');
console.log(gdcd.slice(quizIdx, quizIdx + 1200));

const examIdx = gdcd.indexOf('function startExam');
console.log('Exam function snippet:');
console.log(gdcd.slice(examIdx, examIdx + 1200));
