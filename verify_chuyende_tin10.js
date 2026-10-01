const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'courses', 'chuyende_tinhoc_10_ict.html');
const content = fs.readFileSync(filePath, 'utf8');

console.log('File size:', content.length, 'bytes');

const countMatches = (regex) => (content.match(regex) || []).length;

const openDivs = countMatches(/<div\b[^>]*>/gi);
const closeDivs = countMatches(/<\/div>/gi);
console.log(`Divs: open=${openDivs}, close=${closeDivs}, diff=${openDivs - closeDivs}`);

const openArticles = countMatches(/<article\b[^>]*>/gi);
const closeArticles = countMatches(/<\/article>/gi);
console.log(`Articles: open=${openArticles}, close=${closeArticles}, diff=${openArticles - closeArticles}`);

const openSections = countMatches(/<section\b[^>]*>/gi);
const closeSections = countMatches(/<\/section>/gi);
console.log(`Sections: open=${openSections}, close=${closeSections}, diff=${openSections - closeSections}`);

const quizItems = countMatches(/class="[^"]*quiz-item[^"]*"/gi);
console.log(`Quiz items found: ${quizItems}`);

const lessonArticles = countMatches(/id="bai-\d+"/gi);
console.log(`Lesson articles found: ${lessonArticles}`);

const chudeSections = countMatches(/id="chude-\d+"/gi);
console.log(`Chude sections found: ${chudeSections}`);

const examModal = content.includes('id="courseQuizModal"');
console.log(`Exam modal (courseQuizModal) exists: ${examModal}`);

const examForm = content.includes('id="courseExamForm"');
console.log(`Course exam form exists: ${examForm}`);

