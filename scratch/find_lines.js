const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');

lines.forEach((line, i) => {
  if (line.includes('id="courses-grid"')) {
    console.log('courses-grid starts at line:', i + 1);
  }
  if (line.includes('id="no-courses-found"')) {
    console.log('no-courses-found at line:', i + 1);
  }
});
