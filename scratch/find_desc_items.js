const p1 = require('./diali12_data_part1.js');
const p2 = require('./diali12_data_part2.js');
const p3 = require('./diali12_data_part3.js');

const allLessons = { ...p1, ...p2, ...p3 };

for (let i = 1; i <= 35; i++) {
  const l = allLessons[i];
  if (!l || !l.sections) continue;
  l.sections.forEach((sec, sIdx) => {
    (sec.items || []).forEach((it, itIdx) => {
      if (typeof it === 'object' && it !== null) {
        if (!it.points && it.desc) {
          console.log(`Lesson ${i}, Section ${sIdx}, Item ${itIdx} has 'desc' and NO 'points':`, it.title);
        } else if (!it.points && !it.desc) {
          console.log(`Lesson ${i}, Section ${sIdx}, Item ${itIdx} has NEITHER 'points' nor 'desc':`, it);
        }
      }
    });
  });
}
