const fs = require('fs');
const path = require('path');

const targets = [
  'PHÉP HỢP',
  'MỆNH ĐỀ PHỦ ĐỊNH',
  'XUNG LƯỢNG',
  'Định lý xung lượng lực',
  'Túi khí xe hơi',
  'túi khí xe hơi',
  'chia hết cho 3',
  'MỆNH ĐỀ CHỨA BIẾN',
  'NỘI DUNG ĐỊNH LUẬT BẢO TOÀN ĐỘNG LƯỢNG'
];

function walk(dir) {
  let files = [];
  try {
    const list = fs.readdirSync(dir);
    for (const item of list) {
      if (item === 'node_modules' || item === '.git' || item === '.system_generated') continue;
      const full = path.join(dir, item);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) {
        files = files.concat(walk(full));
      } else {
        files.push(full);
      }
    }
  } catch(e) {}
  return files;
}

const allFiles = walk('.');
console.log(`Scanning ${allFiles.length} files...`);

for (const file of allFiles) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    for (const t of targets) {
      if (content.toLowerCase().includes(t.toLowerCase())) {
        console.log(`MATCH "${t}" in: ${file}`);
      }
    }
  } catch(e) {}
}
