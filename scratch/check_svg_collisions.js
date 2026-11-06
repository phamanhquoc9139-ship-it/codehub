const fs = require('fs');
const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html', 'utf8');

const cards = html.split('id="lesson-');
for (let i = 1; i < cards.length; i++) {
  const card = cards[i];
  const num = card.match(/^(\d+)/)[1];
  const svgMatch = card.match(/<svg[\s\S]*?<\/svg>/);
  if (!svgMatch) continue;
  const svg = svgMatch[0];
  
  // Look for multiple text tags with similar x or y
  const textMatches = [...svg.matchAll(/<text[^>]*x="([^"]+)"[^>]*y="([^"]+)"[^>]*>([\s\S]*?)<\/text>/g)];
  for (let j = 0; j < textMatches.length; j++) {
    for (let k = j + 1; k < textMatches.length; k++) {
      const t1 = textMatches[j];
      const t2 = textMatches[k];
      const x1 = parseFloat(t1[1]), y1 = parseFloat(t1[2]);
      const x2 = parseFloat(t2[1]), y2 = parseFloat(t2[2]);
      if (Math.abs(y1 - y2) < 12 && Math.abs(x1 - x2) < 50) {
        console.log(`[Warning] Lesson ${num}: possible collision between "${t1[3].trim()}" (${x1},${y1}) and "${t2[3].trim()}" (${x2},${y2})`);
      }
    }
  }
}
console.log('SVG collision check complete.');
