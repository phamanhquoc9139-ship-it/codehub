const fs = require('fs');
const { getCards } = require('./parse_helper.js');

const cards = getCards();
console.log('Total cards to sort:', cards.length);

// Sorting logic:
// 1. groupOrder: 1 to 12 (Grades 1..12), then 70 (Intro CS), then 80 (AI Tools), then 90 (HSG/Olympic), then 99 (Other)
// 2. cleanSubject alphabetically ascending using Vietnamese locale

cards.sort((a, b) => {
  if (a.groupOrder !== b.groupOrder) {
    return a.groupOrder - b.groupOrder;
  }
  return a.cleanSubject.localeCompare(b.cleanSubject, 'vi', { sensitivity: 'base' });
});

// Print the sorted list to verify
let currentGroup = null;
cards.forEach((c, idx) => {
  if (c.groupOrder !== currentGroup) {
    currentGroup = c.groupOrder;
    const groupName = currentGroup <= 12 ? `--- KHỐI LỚP ${currentGroup} ---` :
                      currentGroup === 70 ? `--- LẬP TRÌNH NỀN TẢNG ---` :
                      currentGroup === 80 ? `--- CÔNG CỤ AI &amp; TRỢ LÝ HỌC TẬP ---` :
                      currentGroup === 90 ? `--- LUYỆN THI HSG &amp; OLYMPIC ---` : `--- KHÁC ---`;
    console.log('\n' + groupName);
  }
  console.log(`${idx + 1}. [${c.title}] -> ${c.link}`);
});
