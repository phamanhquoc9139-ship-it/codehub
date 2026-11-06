const fs = require('fs');
const toan9 = fs.readFileSync('courses/toan_9.html', 'utf8');

const b1Idx = toan9.indexOf('id="bai-1"');
const b2Idx = toan9.indexOf('id="bai-2"');
const quizIdx = toan9.indexOf('Mini-Quiz', b1Idx);
console.log('--- Lesson 1 Mini-Quiz ---');
console.log(toan9.substring(quizIdx - 100, quizIdx + 1500));
