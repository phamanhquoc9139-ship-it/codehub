const fs = require('fs');
const path = require('path');

const t = fs.readFileSync(path.join(__dirname, '..', 'courses', 'toan_8.html'), 'utf8');
console.log('File size:', t.length);

const modals = t.match(/id="modal-[^"]+"/g) || [];
console.log('Modals found:', modals);

const svgMatches = t.match(/<svg/g) || [];
console.log('SVG count:', svgMatches.length);

console.log('Has KaTeX:', t.includes('katex'));
console.log('Has MathJax:', t.includes('mathjax'));

// Check how quizzes and exams are handled
console.log('Has examQuestions:', t.includes('examQuestions') || t.includes('EXAM_QUESTIONS'));
console.log('Has mini quiz:', t.includes('quiz') || t.includes('Quiz'));

// Inspect chapters structure
const chapters = t.match(/id="chuong-[^"]+"/g) || t.match(/id="chapter-[^"]+"/g) || [];
console.log('Chapters ids:', chapters);

const lessonIds = t.match(/id="bai-[^"]+"/g) || [];
console.log('Lesson ids count:', lessonIds.length, lessonIds.slice(0, 5));
