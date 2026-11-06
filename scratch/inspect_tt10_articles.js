const fs = require('fs');
const content = fs.readFileSync('courses/tiengtrung_10.html', 'utf8');

// Check lessons
const articles = content.match(/<article[^>]+id="([^"]+)"[^>]*>/g) || [];
console.log('Articles in tiengtrung_10.html:', articles.length);
articles.forEach(a => console.log(a));

// Check quizzes in each article
const quizBlocks = content.match(/checkLessonQuiz\(/g) || [];
console.log('Quiz button calls:', quizBlocks.length);

// Check SVGs in each article
const svgs = content.match(/<svg[^>]+viewBox="([^"]+)"[^>]*>/g) || [];
console.log('SVGs in tiengtrung_10.html:', svgs.length);
svgs.forEach(s => console.log(s));
