const { lessonsData } = require('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/hdtn8_data.js');
let errors = 0;
lessonsData.forEach((l, i) => {
  if (!l.quiz || typeof l.quiz.ans !== 'number' || !l.quiz.options || l.quiz.options.length !== 4) {
    console.log(`Lesson ${i+1} invalid quiz:`, l.quiz);
    errors++;
  }
  if (!l.svg || !l.svg.includes('<svg')) {
    console.log(`Lesson ${i+1} missing SVG!`);
    errors++;
  }
});
console.log('Quiz and SVG verification complete. Errors:', errors);
