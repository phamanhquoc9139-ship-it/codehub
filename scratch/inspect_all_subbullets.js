const fs = require('fs');

const rawData = JSON.parse(fs.readFileSync('scratch/ktpl10_parsed_raw.json', 'utf8'));
const { lessonContents } = rawData;

for (let i = 1; i <= 21; i++) {
  const body = lessonContents[i].body;
  const subBullets = body.split('\n').filter(l => l.startsWith('  -') || l.startsWith('    -'));
  console.log(`Bài ${i}: ${lessonContents[i].title} - Sub-bullets count: ${subBullets.length}`);
  if (subBullets.length > 0) {
    console.log('  Samples:', subBullets.slice(0, 2));
  }
}
