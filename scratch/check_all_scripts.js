const fs = require('fs');
const path = require('path');
const vm = require('vm');

const coursesDir = path.join(__dirname, '../courses');
const files = fs.readdirSync(coursesDir).filter(f => f.endsWith('.html'));

console.log(`Checking ${files.length} html files for JS syntax errors...`);
let errCount = 0;

for (const f of files) {
  const content = fs.readFileSync(path.join(coursesDir, f), 'utf8');
  const scripts = content.match(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi) || [];
  scripts.forEach((s, idx) => {
    const code = s.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '');
    try {
      new vm.Script(code);
    } catch (err) {
      console.error(`ERROR in ${f} (Script ${idx + 1}):`, err.message);
      errCount++;
    }
  });
}

console.log(`Total syntax errors found: ${errCount}`);
