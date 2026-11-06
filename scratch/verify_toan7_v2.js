const fs = require('fs');
const vm = require('vm');

const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html', 'utf8');

console.log('File size:', html.length, 'bytes');
const cards = (html.match(/class="lesson-card/g) || []).length;
console.log('Lesson cards:', cards);
const svgs = (html.match(/<svg/g) || []).length;
console.log('SVG count:', svgs);
const quizzes = (html.match(/class="quiz-item/g) || []).length;
console.log('Quiz items:', quizzes);
console.log('Exam section exists:', html.includes('id="math-exam-section"'));
console.log('Formula modal exists:', html.includes('id="formulaModal"'));
console.log('Sidebar volume filter exists:', html.includes('filterVolume'));

const scriptMatches = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
console.log('Script tags count:', scriptMatches.length);
scriptMatches.forEach((m, idx) => {
  try {
    new vm.Script(m[1]);
    console.log('Script ' + (idx + 1) + ' is valid');
  } catch(e) {
    console.error('Script ' + (idx + 1) + ' error:', e.message);
  }
});
