// scratch/hoa12_all_30_models.js
// Master dictionary of all 30 Chemical Reaction Models for Chemistry Grade 12

const p1 = require('./make_models_part1.js');
const p2 = require('./make_models_part2.js');

const all30Models = {};

for (let i = 1; i <= 15; i++) {
  if (!p1[i]) throw new Error(`Missing model ${i} in part 1`);
  all30Models[i] = p1[i];
}

for (let i = 16; i <= 30; i++) {
  if (!p2[i]) throw new Error(`Missing model ${i} in part 2`);
  all30Models[i] = p2[i];
}

console.log('Successfully compiled all 30 chemical reaction models (Lessons 1 to 30)!');

module.exports = all30Models;
