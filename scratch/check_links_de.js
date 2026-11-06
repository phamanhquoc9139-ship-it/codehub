const fs = require('fs');

const files = [
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tiengduc_6.html',
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/german_6.html'
];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log('--- File:', f);
  const hrefs = content.match(/href="([^"]+)"/g) || [];
  const uniqueHrefs = [...new Set(hrefs)];
  console.log('Hrefs:', uniqueHrefs);

  const onclicks = content.match(/onclick="([^"]+)"/g) || [];
  console.log('Onclicks count:', onclicks.length);
  const winLocs = content.match(/window\.location[^\n;]+/g) || [];
  console.log('Window locations:', winLocs);
});
