const fs = require('fs');
const content = fs.readFileSync('courses/antigravity.html', 'utf8');

const openDivs = (content.match(/<div(\s|>)/gi) || []).length;
const closeDivs = (content.match(/<\/div>/gi) || []).length;
const openForms = (content.match(/<form(\s|>)/gi) || []).length;
const closeForms = (content.match(/<\/form>/gi) || []).length;
const checkQuizCalls = (content.match(/checkQuiz\(/gi) || []).length;
const eqRadios = (content.match(/name="eq\d+"/gi) || []).length;

console.log({
  openDivs,
  closeDivs,
  openForms,
  closeForms,
  checkQuizCalls,
  eqRadios,
  fileSize: content.length
});

const checks = ['examTimer', 'courseExamForm', 'examResultBox', 'examSolutionsReview', 'theme-toggle', 'mobile-drawer', 'drawer-backdrop'];
checks.forEach(id => {
  console.log(id, content.includes('id="' + id + '"'));
});
