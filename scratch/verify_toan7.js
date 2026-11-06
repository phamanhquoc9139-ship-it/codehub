const fs = require('fs');
const vm = require('vm');

const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html', 'utf8');

console.log('File size:', html.length, 'bytes');
const lessonCards = (html.match(/class="lesson-card/g) || []).length;
console.log('Lesson count:', lessonCards);
const svgCount = (html.match(/<svg/g) || []).length;
console.log('SVG count:', svgCount);
const quizCount = (html.match(/id="quiz_/g) || []).length;
console.log('Quiz count:', quizCount);

// Extract and test script tags
const scriptMatches = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
console.log('Inline script tags found:', scriptMatches.length);
scriptMatches.forEach((m, idx) => {
  try {
    new vm.Script(m[1]);
    console.log('Script ' + (idx + 1) + ' is valid JS');
  } catch(e) {
    console.error('Script ' + (idx + 1) + ' error:', e.message);
  }
});
