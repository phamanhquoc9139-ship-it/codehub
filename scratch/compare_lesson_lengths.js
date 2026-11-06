const fs = require('fs');
const toan9 = fs.readFileSync('courses/toan_9.html', 'utf8');

const b1Idx = toan9.indexOf('id="bai-1"');
const b2Idx = toan9.indexOf('id="bai-2"');
console.log('toan_9 Lesson 1 length in HTML:', b2Idx - b1Idx);

const b2End = toan9.indexOf('id="bai-3"');
console.log('toan_9 Lesson 2 length in HTML:', b2End - b2Idx);

const vatly = fs.readFileSync('courses/vatly_10.html', 'utf8');
const vb1 = vatly.indexOf('id="bai-1"');
const vb2 = vatly.indexOf('id="bai-2"');
console.log('vatly_10 Lesson 1 length in HTML:', vb2 - vb1);

const vb14 = vatly.indexOf('id="bai-14"');
const vb15 = vatly.indexOf('id="bai-15"');
console.log('vatly_10 Lesson 14 length in HTML:', vb15 - vb14);

const vb15End = vatly.indexOf('id="bai-16"');
console.log('vatly_10 Lesson 15 length in HTML:', vb15End - vb15);
