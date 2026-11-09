const fs = require('fs');

const files = fs.readdirSync('courses');
for (const f of files) {
  if (!f.endsWith('.html')) continue;
  const content = fs.readFileSync('courses/' + f, 'utf8');
  if (content.includes('w-84') || content.includes('w-76')) {
    console.log("Found w-84 or w-76 in:", f);
  }
}
