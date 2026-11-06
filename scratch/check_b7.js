const fs = require('fs');
const raw = JSON.parse(fs.readFileSync('scratch/gdqp10_parsed_raw.json', 'utf8'));
console.log('Bai 7 title:', raw.lessonMeta[7]);
console.log('Bai 7 raw content (first 1000 chars):\n', raw.lessonContents[7].slice(0, 1000));
