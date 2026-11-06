const fs = require('fs');

const vatly = fs.readFileSync('courses/vatly_10.html', 'utf8');

console.log('vatly_10.html size:', vatly.length);
console.log('Contains |---|:', vatly.includes('|---|'));
console.log('Contains raw **:', (vatly.match(/\*\*[^*]+\*\*/g) || []).length);
console.log('Sidebar truncate count:', (vatly.match(/truncate/g) || []).length);

const lessonMatches = vatly.match(/id="bai-\d+"/g) || [];
console.log('Lesson id count:', lessonMatches.length);

let missing = [];
for (let i = 1; i <= 34; i++) {
  if (!vatly.includes('id="bai-' + i + '"')) {
    missing.push(i);
  }
}
console.log('Missing lessons:', missing.length === 0 ? 'None (all 34 present)' : missing);

// Check KaTeX presence
console.log('KaTeX script included:', vatly.includes('katex.min.js'));
console.log('Bảng công thức included:', vatly.includes('Bảng công thức tra cứu'));
console.log('Đơn vị và thuật ngữ included:', vatly.includes('Đơn vị và thuật ngữ cốt lõi'));

// Check each text tag inside svg
const textTags = vatly.match(/<text[^>]*>([\s\S]*?)<\/text>/gi) || [];
let badTags = 0;
textTags.forEach((t, i) => {
  const inner = t.replace(/^<text[^>]*>/i, '').replace(/<\/text>$/i, '');
  const tags = inner.match(/<[^>]+>/g) || [];
  const invalid = tags.filter(tag => !tag.startsWith('<tspan') && !tag.startsWith('</tspan>'));
  if (invalid.length > 0) {
    console.log(`Bad tags in text #${i}:`, invalid);
    badTags++;
  }
});
console.log('Total SVG <text> elements:', textTags.length);
console.log('Invalid non-tspan HTML tags inside SVG text:', badTags);
