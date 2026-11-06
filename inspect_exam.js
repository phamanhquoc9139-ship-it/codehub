const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/lsdl_8.html', 'utf8');

const examIdx = content.indexOf('id="exam-section"');
if (examIdx !== -1) {
  console.log('--- FOUND EXAM SECTION & SCRIPTS ---');
  console.log(content.substring(examIdx, examIdx + 3500));
}
