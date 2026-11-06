const fs = require('fs');
const rawData = JSON.parse(fs.readFileSync('scratch/ktpl10_parsed_raw.json', 'utf8'));
const { lessonContents } = rawData;

for (let i = 1; i <= 21; i++) {
  if (lessonContents[i].body.includes('|')) {
    console.log(`=== Bài ${i}: ${lessonContents[i].title} ===`);
    const lines = lessonContents[i].body.split('\n').filter(l => l.trim().startsWith('|'));
    lines.forEach(l => console.log('  ', l));
  }
}
