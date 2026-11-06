const fs = require('fs');

const t7 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html', 'utf8');

for (let i = 1; i <= 37; i++) {
  const start = t7.indexOf(`id="lesson-${i}"`);
  const end = i < 37 ? t7.indexOf(`id="lesson-${i+1}"`) : t7.indexOf('</main>');
  const snippet = t7.substring(start, end);
  
  const svgStart = snippet.indexOf('<svg');
  const svgEnd = snippet.indexOf('</svg>', svgStart);
  if (svgStart !== -1 && svgEnd !== -1) {
    const svgCode = snippet.substring(svgStart, svgEnd + 6);
    // Find all <text ...> tags
    const textRegex = /<text\s+([^>]+)>([^<]+)<\/text>/g;
    let m;
    const texts = [];
    while ((m = textRegex.exec(svgCode)) !== null) {
      const attrs = m[1];
      const content = m[2].trim();
      const xMatch = attrs.match(/x="([^"]+)"/);
      const yMatch = attrs.match(/y="([^"]+)"/);
      texts.push({
        text: content,
        x: xMatch ? parseFloat(xMatch[1]) : 0,
        y: yMatch ? parseFloat(yMatch[1]) : 0
      });
    }

    // Check overlaps
    for (let j = 0; j < texts.length; j++) {
      for (let k = j + 1; k < texts.length; k++) {
        const t1 = texts[j];
        const t2 = texts[k];
        if (Math.abs(t1.y - t2.y) < 5 && Math.abs(t1.x - t2.x) < 30) {
          console.log(`POTENTIAL OVERLAP in Lesson ${i}: "${t1.text}" (x=${t1.x},y=${t1.y}) and "${t2.text}" (x=${t2.x},y=${t2.y})`);
        }
      }
    }
  } else {
    console.log(`NO SVG found for Lesson ${i}`);
  }
}
