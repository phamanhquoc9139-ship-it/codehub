const fs = require('fs');
const raw = JSON.parse(fs.readFileSync('scratch/gdqp10_parsed_raw.json', 'utf8'));

[7, 9, 10, 12].forEach(num => {
  console.log(`\n=== BÀI ${num} ===`);
  const lines = raw.lessonContents[num].body.split('\n');
  lines.forEach(l => {
    if (l.startsWith('#') || l.startsWith('-')) console.log(l.slice(0, 100));
  });
});
