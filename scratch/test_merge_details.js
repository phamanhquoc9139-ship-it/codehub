const p1 = require('./khtn8_data_part1.js');
const p2 = require('./khtn8_data_part2.js');
const p3 = require('./khtn8_data_part3.js');

const d1 = require('./khtn8_detail_p1.js');
const d2 = require('./khtn8_detail_p2.js');
const d3 = require('./khtn8_detail_p3.js');

const allDetails = { ...d1, ...d2, ...d3 };
const all = [...p1, ...p2, ...p3];

console.log('Total lessons in base data:', all.length);
console.log('Total details in detail objects:', Object.keys(allDetails).length);

let missing = 0;
all.forEach(l => {
  const d = allDetails[l.id];
  if (!d) {
    console.error(`Lesson ${l.id} missing details!`);
    missing++;
  } else {
    if (!d.objective || !d.experimentDetails || !d.exampleProblem || !d.commonMistakes) {
      console.error(`Lesson ${l.id} has incomplete details!`);
      missing++;
    }
  }
});

console.log('Check finished. Missing/incomplete:', missing);
