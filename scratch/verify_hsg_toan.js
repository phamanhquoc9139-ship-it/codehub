const fs = require('fs');
const html = fs.readFileSync('courses/hsg_toan_thpt.html', 'utf8');

const divOpen = (html.match(/<div(\s|>)/gi) || []).length;
const divClose = (html.match(/<\/div>/gi) || []).length;
console.log('div balance:', divOpen, divClose);

const formOpen = (html.match(/<form(\s|>)/gi) || []).length;
const formClose = (html.match(/<\/form>/gi) || []).length;
console.log('form balance:', formOpen, formClose);

const quizzes = (html.match(/checkQuiz\(/gi) || []).length;
console.log('checkQuiz calls:', quizzes);

console.log('Modal exists:', html.includes('id="courseQuizModal"'));
console.log('Timer exists:', html.includes('id="examTimer"'));
console.log('Size:', html.length, 'bytes');

let missing = 0;
for (let i = 1; i <= 10; i++) {
  if (!html.includes('name="eq' + i + '"')) {
    console.error('Missing exam question', i);
    missing++;
  }
}
if (missing === 0) {
  console.log('All 10 VMO exam questions verified!');
}
