const fs = require('fs');

const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tiengduc_6.html', 'utf8');

// check inside unit-1
const unit1Match = content.match(/<section id="unit-1"[\s\S]*?<\/section>/);
if (unit1Match) {
  const u1 = unit1Match[0];
  console.log('Unit 1 length:', u1.length);
  // find sub-headings or topics inside unit 1
  const h4s = u1.match(/<h4[^>]*>[\s\S]*?<\/h4>/g) || [];
  console.log('Unit 1 h4s:');
  h4s.forEach(h => console.log('  -', h.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()));
}
