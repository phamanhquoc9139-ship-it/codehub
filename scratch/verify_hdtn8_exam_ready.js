const exam = require('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/hdtn8_exam.js');
console.log('Exam items count:', exam.length);
let examErrors = 0;
exam.forEach((q, i) => {
  if (!q.q || !q.options || q.options.length !== 4 || typeof q.ans !== 'number' || !q.expl) {
    console.log(`Exam question ${i+1} invalid:`, q);
    examErrors++;
  }
});
console.log('Exam verification complete. Errors:', examErrors);
