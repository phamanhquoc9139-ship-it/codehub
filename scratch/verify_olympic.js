const fs = require('fs');
const content = fs.readFileSync('courses/olympic_toan_thpt.html', 'utf8');

const openDivs = (content.match(/<div(\s|>)/gi) || []).length;
const closeDivs = (content.match(/<\/div>/gi) || []).length;
const openForms = (content.match(/<form(\s|>)/gi) || []).length;
const closeForms = (content.match(/<\/form>/gi) || []).length;
const checkAnswerCalls = (content.match(/checkAnswer\(/gi) || []).length;
const qRadios = (content.match(/name="q\d+"/gi) || []).length;
const eqRadios = (content.match(/name="eq\d+"/gi) || []).length;

console.log({
  openDivs,
  closeDivs,
  openForms,
  closeForms,
  checkAnswerCalls,
  qRadios,
  eqRadios,
  length: content.length
});
