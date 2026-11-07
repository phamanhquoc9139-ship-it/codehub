const p1 = require('./diali12_data_part1.js');
const p2 = require('./diali12_data_part2.js');
const p3 = require('./diali12_data_part3.js');

const allLessons = { ...p1, ...p2, ...p3 };
let totalItems = 0;
let emptyItems = 0;

for (let i = 1; i <= 35; i++) {
  const l = allLessons[i];
  if (!l || !l.sections) continue;
  l.sections.forEach((sec, sIdx) => {
    (sec.items || []).forEach((it, itIdx) => {
      totalItems++;
      if (typeof it === 'object' && it !== null) {
        const hasPoints = Array.isArray(it.points) && it.points.length > 0;
        const hasDesc = typeof it.desc === 'string' && it.desc.trim().length > 0;
        if (!hasPoints && !hasDesc) {
          console.log(`EMPTY ITEM: Lesson ${i}, Sec ${sIdx}, Item ${itIdx}:`, it);
          emptyItems++;
        }
      } else if (typeof it === 'string' && it.trim().length === 0) {
        console.log(`EMPTY STRING ITEM: Lesson ${i}, Sec ${sIdx}, Item ${itIdx}`);
        emptyItems++;
      }
    });
  });
}

console.log(`Total items checked: ${totalItems}, Empty items: ${emptyItems}`);
