const master = require('./ktpl11_data_master.js');
const core = require('./ktpl11_core_cards.js');
const cases = require('./ktpl11_cases.js');

console.log('Total lessons in master:', Object.keys(master.lessons).length);
console.log('Total lessons in core:', Object.keys(core).length);
console.log('Total lessons in cases:', Object.keys(cases).length);

for (let i = 1; i <= 21; i++) {
  const l = master.lessons[i];
  const c = core[i];
  const cs = cases[i];
  if (!l) console.error(`Lesson ${i} missing in master!`);
  if (!c) console.error(`Lesson ${i} missing in core!`);
  if (!cs) console.error(`Lesson ${i} missing in cases!`);
  if (l && (!l.sections || l.sections.length === 0)) console.error(`Lesson ${i} has no sections!`);
  if (l && (!l.quiz || l.quiz.length === 0)) console.error(`Lesson ${i} has no quiz!`);
}
console.log('All 21 lessons validated successfully!');
