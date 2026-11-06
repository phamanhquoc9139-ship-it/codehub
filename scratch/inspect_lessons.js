const fs = require('fs');
const html = fs.readFileSync('courses/gdqp_10.html', 'utf8');

function extractLesson(num) {
  const start = html.indexOf(`id="bai-${num}"`);
  if (start === -1) return '';
  const next = html.indexOf(`id="bai-${num+1}"`, start);
  const end = next !== -1 ? next : html.indexOf('id="section-tra-cuu"', start);
  return html.slice(start, end !== -1 ? end : start + 3000);
}

console.log('--- SAMPLE BAI 1 (first 1000 chars) ---');
console.log(extractLesson(1).slice(0, 1000));

console.log('\n--- SAMPLE BAI 7 (Safety alerts & Diagram) ---');
const l7 = extractLesson(7);
console.log('Has alert callout?', l7.includes('alert') || l7.includes('bg-amber-') || l7.includes('bg-rose-'));
console.log('Has SVG?', l7.includes('<svg'));
console.log(l7.slice(0, 800));

console.log('\n--- SAMPLE BAI 10 (Squad SVG) ---');
const l10 = extractLesson(10);
console.log('Has SVG?', l10.includes('<svg'));

console.log('\n--- SAMPLE BAI 12 (First Aid SVG & Alert) ---');
const l12 = extractLesson(12);
console.log('Has SVG?', l12.includes('<svg'));
console.log('Has alert callout?', l12.includes('alert') || l12.includes('bg-amber-') || l12.includes('bg-rose-'));
