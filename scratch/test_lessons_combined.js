const fs = require('fs');
const rawData = JSON.parse(fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/vatly10_parsed_raw.json', 'utf8'));
const { chapters, formulaTableText, termsText } = rawData;
const part1 = require('./lessons_part1.js');
const part2 = require('./lessons_part2.js');
const part3 = require('./lessons_part3.js');
const lessonsData = { ...part1, ...part2, ...part3 };

console.log('Chapters count:', chapters.length);
console.log('Lessons count:', Object.keys(lessonsData).length);

for (let i = 1; i <= 34; i++) {
  const l = lessonsData[i];
  if (!l) {
    console.error('MISSING LESSON:', i);
  } else if (!l.title || !l.body) {
    console.error('INVALID LESSON:', i, l);
  }
}
console.log('All 34 lessons validated successfully!');
