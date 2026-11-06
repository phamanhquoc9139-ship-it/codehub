const fs = require('fs');
const content = fs.readFileSync('courses/vatly_10.html', 'utf8');

const idx = content.indexOf('Bài 28: Động lượng');
if (idx !== -1) {
  console.log('--- vatly_10.html around Bài 28: Động lượng ---');
  const slice = content.substring(idx - 50, idx + 2500);
  console.log(slice);
} else {
  console.log('Not found "Bài 28: Động lượng"');
  // let search for "Định lý xung lượng lực"
  const idx2 = content.indexOf('Định lý xung lượng lực');
  if (idx2 !== -1) {
    console.log('--- around Định lý xung lượng lực ---');
    console.log(content.substring(idx2 - 300, idx2 + 1000));
  }
}
