const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
const index = fs.readFileSync(indexPath, 'utf8');

// Inspect around congnghe_9 pos 98224
console.log('--- CONG NGHE 9 SNIPPET ---');
console.log(index.substring(98150, 99500));

// Inspect around tiengtrung_9 pos 375551
console.log('\n--- TIENG TRUNG 9 SNIPPET ---');
console.log(index.substring(375450, 377000));
