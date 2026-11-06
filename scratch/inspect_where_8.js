const fs = require('fs');
const path = require('path');

const index = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

const list = ['nguvan_8', 'khtn_8', 'lsdl_8', 'mithuat_8', 'amnhac_8', 'hdtn_8'];
list.forEach(item => {
  const p = index.indexOf(item);
  console.log(item, 'pos:', p);
});
