const fs = require('fs');
const raw = JSON.parse(fs.readFileSync('scratch/gdqp10_parsed_raw.json', 'utf8'));

for (let i = 1; i <= 12; i++) {
  console.log(`\n================ BÀI ${i}: ${raw.lessonContents[i].title} ================`);
  const lines = raw.lessonContents[i].body.split('\n');
  lines.forEach(l => {
    if (l.startsWith('#') || (l.startsWith('- **') && l.length < 80) || l.startsWith('**')) {
      console.log('  ' + l);
    }
  });
}
