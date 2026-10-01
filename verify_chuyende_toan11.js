const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'courses', 'chuyende_toan_11.html');
const content = fs.readFileSync(filePath, 'utf8');

console.log('File size:', content.length, 'bytes');

// Check tags
const countOpen = (tag) => (content.match(new RegExp(`<${tag}[\\s>]`, 'gi')) || []).length;
const countClose = (tag) => (content.match(new RegExp(`</${tag}>`, 'gi')) || []).length;

const tags = ['div', 'article', 'section', 'header', 'footer', 'main', 'aside', 'form', 'p', 'ul', 'li', 'button'];
tags.forEach(t => {
  const open = countOpen(t);
  const close = countClose(t);
  console.log(`${t}: open=${open}, close=${close}, diff=${open - close}`);
});

// Check lessons
const articleCount = (content.match(/class="lesson-card/g) || []).length;
console.log('Article lesson cards:', articleCount);

// Check quiz items
const quizItemCount = (content.match(/class="quiz-item/g) || []).length;
console.log('Quiz items:', quizItemCount);

// Check KaTeX
const hasKatex = content.includes('katex.min.js') && content.includes('auto-render.min.js');
console.log('Has KaTeX scripts:', hasKatex);

// Check exam modal
const hasExam = content.includes('id="courseQuizModal"') && content.includes('id="courseExamForm"');
console.log('Has Course Exam Modal:', hasExam);
