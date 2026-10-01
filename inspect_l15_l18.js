const t4 = require('./make_topic4.js');

const l15 = t4.find(l => l.num === 15);
console.log('=== L15 SECTIONS ===');
l15.sections.forEach((s, idx) => {
  const opens = (s.content.match(/<div\b/g) || []).length;
  const closes = (s.content.match(/<\/div>/g) || []).length;
  console.log(`Sec ${idx + 1}: opens=${opens}, closes=${closes}`);
  if (opens !== closes) console.log(s.content);
});

console.log('=== L15 QUIZZES ===');
l15.quizzes.forEach((q, idx) => {
  const str = JSON.stringify(q);
  const opens = (str.match(/<div\b/g) || []).length;
  const closes = (str.match(/<\/div>/g) || []).length;
  if (opens !== closes) console.log(`Quiz ${idx + 1}: opens=${opens}, closes=${closes}`);
});

const l18 = t4.find(l => l.num === 18);
console.log('=== L18 SECTIONS ===');
l18.sections.forEach((s, idx) => {
  const opens = (s.content.match(/<div\b/g) || []).length;
  const closes = (s.content.match(/<\/div>/g) || []).length;
  console.log(`Sec ${idx + 1}: opens=${opens}, closes=${closes}`);
  if (opens !== closes) console.log(s.content);
});

console.log('=== L18 QUIZZES ===');
l18.quizzes.forEach((q, idx) => {
  const str = JSON.stringify(q);
  const opens = (str.match(/<div\b/g) || []).length;
  const closes = (str.match(/<\/div>/g) || []).length;
  if (opens !== closes) console.log(`Quiz ${idx + 1}: opens=${opens}, closes=${closes}`);
});
