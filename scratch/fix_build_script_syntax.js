const fs = require('fs');
const p = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/build_toan10.js';
let code = fs.readFileSync(p, 'utf8');

// Target the broken chunk
const brokenTarget = `renderMathInElement(feedback, {
          delimiters: [
            {left: '$', right: '$', display: true},
            {left: '
    function checkQuiz(btn, lessonNum, selectedIdx, correctIdx, expText) {`;

const fixedReplacement = `renderMathInElement(feedback, {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false}
          ],
          throwOnError: false
        });
      }
    }

    function checkQuiz(btn, lessonNum, selectedIdx, correctIdx, expText) {`;

if (code.includes(brokenTarget)) {
  code = code.replace(brokenTarget, () => fixedReplacement);
  fs.writeFileSync(p, code, 'utf8');
  console.log('Successfully fixed broken syntax in build_toan10.js!');
} else {
  console.log('brokenTarget not found, checking with index...');
  const idx = code.indexOf('renderMathInElement(feedback');
  console.log(code.slice(idx, idx + 200));
}
