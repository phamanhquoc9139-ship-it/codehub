const fs = require('fs');
const raw = JSON.parse(fs.readFileSync('scratch/gdqp10_parsed_raw.json', 'utf8'));

for (let i = 1; i <= 12; i++) {
  const body = raw.lessonContents[i]?.body || '';
  const lines = body.split('\n');
  const bullets = lines.filter(l => /^\s*[-*]\s+/.test(l));
  const boldBullets = lines.filter(l => /^\s*[-*]\s+\*\*/.test(l));
  const plainBullets = bullets.length - boldBullets.length;
  console.log(`Bài ${i}: total lines=${lines.length}, boldBullets=${boldBullets.length}, plainBullets=${plainBullets}`);
}
