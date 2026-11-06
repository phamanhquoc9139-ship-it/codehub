const fs = require('fs');
const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html', 'utf8');

// Find all SVGs in lesson cards
const lessonCards = html.split('id="lesson-');
console.log('Total cards:', lessonCards.length - 1);

for (let i = 1; i < lessonCards.length; i++) {
  const card = lessonCards[i];
  const lessonNum = card.match(/^(\d+)/)[1];
  const svgMatch = card.match(/<svg[\s\S]*?<\/svg>/);
  if (!svgMatch) {
    console.log(`Lesson ${lessonNum}: NO SVG!`);
    continue;
  }
  const svg = svgMatch[0];
  const vbMatch = svg.match(/viewBox="([^"]+)"/);
  const vb = vbMatch ? vbMatch[1] : 'no viewBox';
  const texts = [];
  const textRegex = /<text[^>]*>([\s\S]*?)<\/text>/g;
  let tm;
  while ((tm = textRegex.exec(svg)) !== null) {
    texts.push(tm[1].trim().replace(/<[^>]+>/g, ''));
  }
  // Check if any y coordinates collide
  const yCoords = [];
  const yRegex = /<text[^>]*\sy="(\d+(?:\.\d+)?)"/g;
  let ym;
  while ((ym = yRegex.exec(svg)) !== null) {
    yCoords.push(parseFloat(ym[1]));
  }
  console.log(`Lesson ${lessonNum} (vb: ${vb}) has ${texts.length} texts`);
}
