const quizzes = require('./tinhoc10_quizzes.js');

for (let i = 1; i <= 34; i++) {
  const qList = quizzes[i];
  if (!qList) {
    console.error(`Lesson ${i} has NO quiz list!`);
    continue;
  }
  qList.forEach((q, idx) => {
    if (!q.question) console.error(`L${i} Q${idx} missing question`);
    if (!Array.isArray(q.options)) console.error(`L${i} Q${idx} options is not array`);
    else {
      q.options.forEach((opt, oIdx) => {
        if (opt === undefined || opt === null) {
          console.error(`L${i} Q${idx} option ${oIdx} is undefined!`);
        }
      });
    }
  });
}
console.log('Finished quiz check');
