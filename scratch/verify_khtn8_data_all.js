const p1 = require('./khtn8_data_part1.js');
const p2 = require('./khtn8_data_part2.js');
const p3 = require('./khtn8_data_part3.js');

const all = [...p1, ...p2, ...p3];
console.log('Total lessons:', all.length);

let errors = 0;
for (let i = 0; i < 47; i++) {
  const l = all[i];
  if (!l) {
    console.error(`Missing lesson at index ${i}`);
    errors++;
    continue;
  }
  if (l.id !== (i + 1)) {
    console.error(`ID mismatch at index ${i}: expected ${i + 1}, got ${l.id}`);
    errors++;
  }
  if (!l.svg || !l.svg.includes('<svg')) {
    console.error(`Lesson ${l.id} missing SVG`);
    errors++;
  }
  if (!l.quiz || typeof l.quiz.ans !== 'number' || !l.quiz.options || l.quiz.options.length !== 4) {
    console.error(`Lesson ${l.id} invalid quiz`);
    errors++;
  }
}

console.log('Verification finished. Errors:', errors);
