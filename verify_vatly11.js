const fs = require('fs');

console.log('=== VERIFYING courses/vatly_11.html ===');
const html = fs.readFileSync('courses/vatly_11.html', 'utf8');

const divOpen = (html.match(/<div\b/g) || []).length;
const divClose = (html.match(/<\/div>/g) || []).length;
const artOpen = (html.match(/<article\b/g) || []).length;
const artClose = (html.match(/<\/article>/g) || []).length;
const secOpen = (html.match(/<section\b/g) || []).length;
const secClose = (html.match(/<\/section>/g) || []).length;
const formOpen = (html.match(/<form\b/g) || []).length;
const formClose = (html.match(/<\/form>/g) || []).length;

console.log('File size:', html.length, 'bytes');
console.log(`<div>: ${divOpen} open, ${divClose} close, diff = ${divOpen - divClose}`);
console.log(`<article>: ${artOpen} open, ${artClose} close, diff = ${artOpen - artClose}`);
console.log(`<section>: ${secOpen} open, ${secClose} close, diff = ${secOpen - secClose}`);
console.log(`<form>: ${formOpen} open, ${formClose} close, diff = ${formOpen - formClose}`);

const hasKaTeX = html.includes('katex.min.css') && html.includes('auto-render.min.js') && html.includes('renderAllMath()');
console.log('KaTeX integrated:', hasKaTeX);

const hasProgress = html.includes('id="progressBar"');
console.log('Progress Bar present:', hasProgress);

const hasSearch = html.includes('id="lessonSearch"');
console.log('Lesson Search present:', hasSearch);

const hasModal = html.includes('id="courseQuizModal"');
console.log('Course Quiz Modal present:', hasModal);

const hasExamForm = html.includes('id="courseExamForm"');
console.log('Course Exam Form present:', hasExamForm);

const quizButtons = (html.match(/checkQuiz\(this/g) || []).length;
console.log('Total Quiz Option Buttons:', quizButtons);

const quizCards = (html.match(/Câu hỏi tự kiểm tra/g) || []).length;
console.log('Total Lesson Quiz Cards:', quizCards);

const examRadios = (html.match(/name="eq\d+"/g) || []).length;
console.log('Exam Radio Options:', examRadios);

console.log('\n=== VERIFYING index.html ===');
const indexHtml = fs.readFileSync('index.html', 'utf8');
const indexDivOpen = (indexHtml.match(/<div\b/g) || []).length;
const indexDivClose = (indexHtml.match(/<\/div>/g) || []).length;
console.log('index.html div balance:', indexDivOpen, indexDivClose, 'diff =', indexDivOpen - indexDivClose);
console.log('index.html contains vatly_11.html:', indexHtml.includes('courses/vatly_11.html'));
