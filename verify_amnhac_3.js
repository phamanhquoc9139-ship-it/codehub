const fs = require('fs');
const html = fs.readFileSync('courses/amnhac_3.html', 'utf8');

const openDivs = (html.match(/<div(\s|>)/gi) || []).length;
const closeDivs = (html.match(/<\/div>/gi) || []).length;
const openArticles = (html.match(/<article(\s|>)/gi) || []).length;
const closeArticles = (html.match(/<\/article>/gi) || []).length;
const openSections = (html.match(/<section(\s|>)/gi) || []).length;
const closeSections = (html.match(/<\/section>/gi) || []).length;
const quizCount = (html.match(/class="quiz-item/gi) || []).length;

console.log({
  fileSize: html.length,
  divDiff: openDivs - closeDivs,
  openDivs,
  closeDivs,
  articleDiff: openArticles - closeArticles,
  openArticles,
  closeArticles,
  sectionDiff: openSections - closeSections,
  openSections,
  closeSections,
  quizCount,
  hasBackLink: html.includes('../index.html'),
  hasCourseModal: html.includes('id="courseQuizModal"'),
  hasProgressBar: html.includes('id="progressBar"'),
  hasLessonSearch: html.includes('id="lessonSearch"')
});
