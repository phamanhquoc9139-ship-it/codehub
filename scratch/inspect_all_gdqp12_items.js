const d = require('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/gdqp12_data.js');

for (let id = 1; id <= 9; id++) {
  const les = d[String(id)];
  if (!les) {
    console.error(`Lesson ${id} missing!`);
    continue;
  }
  console.log(`Bài ${id}: ${les.title}`);
  les.sections.forEach((sec, sIdx) => {
    console.log(`  Section ${sIdx + 1}: ${sec.heading}`);
    sec.items.forEach((item, iIdx) => {
      const pCount = item.points ? item.points.length : (item.desc ? 1 : 0);
      if (pCount === 0) {
        console.error(`    [EMPTY ITEM] Item ${iIdx + 1} (${item.title}) has NO points or desc!`);
      } else {
        console.log(`    Item ${iIdx + 1}: ${item.title} (${pCount} points)`);
      }
    });
  });
  console.log(`  Quiz: ${les.quiz ? les.quiz.length : 0} questions\n`);
}
