const fs = require('fs');
const p = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/build_toan10.js';
let code = fs.readFileSync(p, 'utf8');

// Add allExamQuestions right before building mainContentHtml
const anchor = 'let mainContentHtml = \'\';';
const prepCode = `
  const allExamQuestions = [];
  Object.keys(reviewQuizzes).forEach(k => {
    reviewQuizzes[k].forEach(q => {
      allExamQuestions.push({
        lesson: k,
        ...q
      });
    });
  });
`;

code = code.replace(anchor, prepCode + '\n  ' + anchor);

// Clean up inside template string where allExamQuestions was mistakenly defined
code = code.replace(
  `const allExamQuestions = [];
    Object.keys(reviewQuizzes).forEach(k => {
      reviewQuizzes[k].forEach(q => {
        allExamQuestions.push({
          lesson: k,
          ...q
        });
      });
    });

    const examPool = \${JSON.stringify(allExamQuestions)};`,
  `const examPool = \${JSON.stringify(allExamQuestions)};`
);

fs.writeFileSync(p, code, 'utf8');
console.log('Fixed allExamQuestions definition in build_toan10.js!');
