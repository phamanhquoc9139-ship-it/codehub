const fs = require('fs');
const content = fs.readFileSync('courses/toan_11.html', 'utf8');

console.log('File size:', content.length, 'bytes');
console.log('Has KaTeX:', content.includes('katex'));
console.log('Has Progress Bar:', content.includes('id="progressBar"'));
console.log('Has Search Bar:', content.includes('id="lessonSearch"'));
console.log('Has Course Exam Modal:', content.includes('courseQuizModal') || content.includes('courseExamForm'));

const articles = (content.match(/<article/gi) || []).length;
console.log('Total articles (lessons):', articles);

const quizButtons = (content.match(/checkQuiz/g) || []).length;
console.log('Quiz button choices:', quizButtons);

// List all lessons with id and title
const regex = /<article id="(bai-\d+)"[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>/g;
let match;
while ((match = regex.exec(content)) !== null) {
  console.log(match[1], ':', match[2].trim().replace(/\s+/g, ' '));
}
