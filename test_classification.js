const { getCards } = require('./parse_helper.js');

const cards = getCards();
console.log('Cards parsed:', cards.length);

const byGroup = {};
cards.forEach(c => {
  const g = c.groupOrder;
  if (!byGroup[g]) byGroup[g] = [];
  byGroup[g].push(c);
});

Object.keys(byGroup).sort((a,b) => parseInt(a)-parseInt(b)).forEach(g => {
  const list = byGroup[g];
  const label = parseInt(g) <= 12 ? `Lớp ${g}` :
                g == 70 ? 'Lập Trình Nền Tảng' :
                g == 80 ? 'Công Cụ AI' :
                g == 90 ? 'HSG & Olympic' : 'Khác';
  console.log(`=== ${label} (${list.length} môn) ===`);
  list.forEach(c => console.log(`   - [${c.title}] (Clean: ${c.cleanSubject}) -> ${c.link}`));
});
