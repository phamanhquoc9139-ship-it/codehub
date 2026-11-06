const fs = require('fs');

const raw = fs.readFileSync('scratch/user_ktpl10_prompt.txt', 'utf8');

const b1Start = raw.indexOf('### Bài 1.');
const b2Start = raw.indexOf('### Bài 2.');
console.log('--- Bài 1 raw text snippet ---');
console.log(raw.slice(b1Start, b2Start));

const b7Start = raw.indexOf('### Bài 7.');
const b8Start = raw.indexOf('### Bài 8.');
console.log('--- Bài 7 raw text snippet ---');
console.log(raw.slice(b7Start, b8Start));
