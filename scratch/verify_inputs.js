const fs = require('fs');

const d = require('./tinhoc10_data.js');
const diag = require('./tinhoc10_diagrams.js');
const q = require('./tinhoc10_quizzes.js');

console.log('tinhoc10_data lessons count:', d.lessons.length);
console.log('tinhoc10_data topics count:', d.topics.length);
console.log('tinhoc10_data pythonCheatsheet sections:', d.pythonCheatsheet.length);
console.log('tinhoc10_data commonMistakes count:', d.commonMistakes.length);
console.log('tinhoc10_diagrams keys count:', Object.keys(diag).length);
console.log('tinhoc10_quizzes keys count:', Object.keys(q).length);

// Check if all lessons 1 to 34 have diagrams and quizzes
let missingDiag = 0;
let missingQuiz = 0;
for (let i = 1; i <= 34; i++) {
  if (!diag[i]) {
    console.error(`Missing diagram for lesson ${i}`);
    missingDiag++;
  }
  if (!q[i] || q[i].length !== 3) {
    console.error(`Missing quiz for lesson ${i}`);
    missingQuiz++;
  }
}
console.log(`Diagram check: ${missingDiag === 0 ? 'ALL 34 OK' : missingDiag + ' missing'}`);
console.log(`Quiz check: ${missingQuiz === 0 ? 'ALL 34 OK (102 questions)' : missingQuiz + ' missing'}`);
