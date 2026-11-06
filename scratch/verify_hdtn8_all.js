const fs = require('fs');

const filePaths = [
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/hdtn_8.html',
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/hdtnhn_8.html'
];

let allPassed = true;

filePaths.forEach(fp => {
  console.log('--- Checking:', fp, '---');
  if (!fs.existsSync(fp)) {
    console.error('File does NOT exist:', fp);
    allPassed = false;
    return;
  }
  const html = fs.readFileSync(fp, 'utf8');
  console.log('File size:', html.length, 'bytes');

  // 1. Check lesson cards
  const lessonCards = (html.match(/class="lesson-card/g) || []).length;
  console.log('Lesson cards count:', lessonCards, '(Expected: 19)');
  if (lessonCards !== 19) allPassed = false;

  // 2. Check SVGs in lesson cards
  const svgs = (html.match(/<svg/g) || []).length;
  console.log('SVGs count:', svgs, '(Expected: >= 19)');
  if (svgs < 19) allPassed = false;

  // 3. Check Mini Quizzes
  const quizzes = (html.match(/class="quiz-item/g) || []).length;
  console.log('Mini quiz items count:', quizzes, '(Expected: 19)');
  if (quizzes !== 19) allPassed = false;

  // 4. Check Exam section
  const hasExam = html.includes('id="exam-section"') && html.includes('examQuestions =') && html.includes('60:00');
  console.log('Exam section & 60:00 timer valid:', hasExam);
  if (!hasExam) allPassed = false;

  // 5. Check Skills Modal
  const hasModal = html.includes('id="skillsModal"') && html.includes('Sổ Tay Kĩ Năng');
  console.log('Skills modal valid:', hasModal);
  if (!hasModal) allPassed = false;

  // 6. Check Topics in sidebar
  const topicGroups = (html.match(/class="mb-4 topic-nav-group"/g) || []).length;
  console.log('Topic nav groups in sidebar:', topicGroups, '(Expected: 9)');
  if (topicGroups !== 9) allPassed = false;

  // 7. Verify script tag syntax by extracting and compiling with node vm
  const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>[\s\S]*?<\/body>/);
  if (scriptMatch) {
    try {
      const vm = require('vm');
      new vm.Script(scriptMatch[1]);
      console.log('Script syntax check: VALID');
    } catch (e) {
      console.error('Script syntax error:', e.message);
      allPassed = false;
    }
  } else {
    console.error('Script tag not found!');
    allPassed = false;
  }
});

// Check index.html
const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');
const hasIndexLink = indexHtml.includes('courses/hdtn_8.html');
console.log('--- Checking index.html ---');
console.log('index.html contains courses/hdtn_8.html:', hasIndexLink);
if (!hasIndexLink) allPassed = false;

if (allPassed) {
  console.log('>>> ALL VERIFICATION TESTS PASSED SUCCESSFULLY! <<<');
} else {
  console.error('>>> SOME VERIFICATION TESTS FAILED! <<<');
}
