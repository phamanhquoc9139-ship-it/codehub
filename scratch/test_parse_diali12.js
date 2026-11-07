// scratch/test_parse_diali12.js
const fs = require('fs');

const raw = fs.readFileSync('scratch/user_request_diali12.md', 'utf8');

const regex = /## (Bài \d+[^\n]+)/g;
let match;
const lessons = [];

while ((match = regex.exec(raw)) !== null) {
  lessons.push({
    title: match[1],
    index: match.index
  });
}

console.log('Total lessons matched:', lessons.length);
lessons.forEach((l, idx) => {
  const nextIdx = (idx + 1 < lessons.length) ? lessons[idx+1].index : raw.indexOf('## Thuật ngữ và công thức');
  const body = raw.slice(l.index, nextIdx).trim();
  const titleClean = l.title.replace(/^Bài \d+\.\s*/, '');
  console.log(`Bài ${idx + 1}: ${titleClean} (${body.length} chars)`);
});
