const fs = require('fs');

const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdtc_8.html', 'utf8');

const lessons = html.match(/id="lesson-[^"]+"/g) || [];
console.log('Total Lesson Cards:', lessons.length);
console.log('Sample lesson IDs:', lessons.slice(0, 8));

const svgs = html.match(/<svg/g) || [];
console.log('Total SVGs in page:', svgs.length);

const quizzes = html.match(/id="quiz_[^"]+"/g) || [];
console.log('Total Mini Quizzes:', quizzes.length);

const hasHandbookModal = html.includes('id="handbookModal"');
console.log('Has Handbook Modal:', hasHandbookModal);

const hasExamArena = html.includes('id="exam-arena"');
console.log('Has Exam Arena:', hasExamArena);
