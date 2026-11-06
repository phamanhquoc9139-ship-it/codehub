const fs = require('fs');
const data = JSON.parse(fs.readFileSync('scratch/vatly10_parsed_raw.json', 'utf8'));

console.log('Chapters:', data.chapters.map(c => ({ num: c.num, title: c.title, lessonCount: c.lessons.length })));
console.log('Chapter 0 Lesson 0:', data.chapters[0].lessons[0]);
