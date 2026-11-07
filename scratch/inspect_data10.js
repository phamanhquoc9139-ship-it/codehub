const fs = require('fs');
const data = require('./hoahoc10_data.js');

console.log('Chapters in hoahoc10:', data.chapters.length);
console.log('Lessons count in hoahoc10:', Object.keys(data.lessons).length);

const l1 = data.lessons[1];
console.log('Lesson 1 keys:', Object.keys(l1));
console.log('Lesson 1 formulas count:', l1.formulas ? l1.formulas.length : 0);
console.log('Lesson 1 sections count:', l1.sections ? l1.sections.length : 0);
console.log('Lesson 1 experiments count:', l1.experiments ? l1.experiments.length : 0);
console.log('Lesson 1 sample section:', l1.sections ? l1.sections[0] : null);
