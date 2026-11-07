const fs = require('fs');
const html10 = fs.readFileSync('courses/hoahoc_10.html', 'utf8');
const html11 = fs.readFileSync('courses/hoahoc_11.html', 'utf8');
const html12 = fs.readFileSync('courses/hoahoc_12.html', 'utf8');

console.log('hoahoc_10 length:', html10.length);
console.log('hoahoc_11 length:', html11.length);
console.log('hoahoc_12 length:', html12.length);

function checkFeatures(name, html) {
  console.log(`\n=== Checking ${name} ===`);
  const lessons = [];
  const re = /id="bai-(\d+)"/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    lessons.push(parseInt(m[1]));
  }
  console.log(`Found ${lessons.length} lessons:`, lessons.join(', '));
  
  // Check models / reaction models / svgs
  const modelMatches = html.match(/id="b\d+-so-do"/g) || [];
  console.log(`Cards with id="bX-so-do": ${modelMatches.length}`);
  
  const phanC = (html.match(/Phần C/g) || []).length;
  console.log(`Occurrences of 'Phần C': ${phanC}`);

  const hasEmptyDashes = (html.match(/<div class="flex-1">---<\/div>/g) || []).length;
  console.log(`Occurrences of empty '---': ${hasEmptyDashes}`);

  const hasLeakedHeaders = (html.match(/# Chương/g) || []).length;
  console.log(`Occurrences of '# Chương': ${hasLeakedHeaders}`);
}

checkFeatures('hoahoc_10', html10);
checkFeatures('hoahoc_11', html11);
checkFeatures('hoahoc_12', html12);
