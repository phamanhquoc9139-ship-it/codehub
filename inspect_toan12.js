const fs = require('fs');
const content = fs.readFileSync('courses/toan_12.html', 'utf8');

const regex = /<article id="(bai-\d+)"[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>/g;
let match;
while ((match = regex.exec(content)) !== null) {
  console.log(match[1], ':', match[2].trim().replace(/\s+/g, ' '));
}
