const d = require('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/gdqp12_data.js');
console.log('Keys:', Object.keys(d));
console.log('Lesson 1:', {
  id: d['1'].id,
  title: d['1'].title,
  sub: d['1'].sub,
  sectionsCount: d['1'].sections.length,
  quizCount: d['1'].quiz.length
});
d['1'].sections.forEach(s => {
  console.log(`  Section: ${s.heading} (${s.items ? s.items.length : 0} items)`);
});
console.log('Lesson 6 (AK):', {
  id: d['6'].id,
  title: d['6'].title,
  sectionsCount: d['6'].sections.length,
  quizCount: d['6'].quiz.length
});
d['6'].sections.forEach(s => {
  console.log(`  Section: ${s.heading} (${s.items ? s.items.length : 0} items)`);
});
