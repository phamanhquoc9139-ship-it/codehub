const fs = require('fs');

const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const occurrences = [];
['khtn_6', 'gdcd_6', 'congnghe_6', 'gdtc_6', 'hdtnhn_6'].forEach(id => {
  const idx = indexHtml.indexOf(id);
  console.log(`${id} at index: ${idx}`);
  if (idx !== -1) {
    console.log(indexHtml.substring(idx - 150, idx + 250));
    console.log('-----------------------------------');
  }
});
