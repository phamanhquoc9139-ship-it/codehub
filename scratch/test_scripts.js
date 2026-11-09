const fs = require('fs');
const path = require('path');
const vm = require('vm');

const files = ['chuyende_vatli_11.html', 'chuyende_vatly_11.html', 'chuyende_ly_11.html'];
const coursesDir = path.join(__dirname, '../courses');

for (const f of files) {
  const p = path.join(coursesDir, f);
  if (!fs.existsSync(p)) continue;
  const content = fs.readFileSync(p, 'utf8');
  const scripts = content.match(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi) || [];
  console.log(`File: ${f} has ${scripts.length} inline scripts`);
  scripts.forEach((s, idx) => {
    const code = s.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '');
    try {
      new vm.Script(code);
      console.log(`  Script ${idx + 1}: Valid JS syntax`);
    } catch (err) {
      console.error(`  Script ${idx + 1} SYNTAX ERROR:`, err.message);
    }
  });
}
