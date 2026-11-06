const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/hdtn_9.html', 'utf8');

for (let i = 1; i <= 9; i++) {
  const marker = `<section id="topic-cd${i}"`;
  const pos = content.indexOf(marker);
  if (pos !== -1) {
    const end = content.indexOf('</section>', pos);
    const sectionHtml = content.slice(pos, end);
    const titleMatch = sectionHtml.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
    const pageMatch = sectionHtml.match(/Trang \d+[^<]*/i);
    console.log(`\n=== Topic ${i}: ${titleMatch ? titleMatch[1].trim() : ''} (${pageMatch ? pageMatch[0] : ''}) ===`);
    
    // Find all sub-activities
    const actMatches = sectionHtml.matchAll(/id="(hdtn-cd\d-hd\d)"[\s\S]*?<h4[^>]*>([\s\S]*?)<\/h4>/gi);
    for (const m of actMatches) {
      console.log(`  - [${m[1]}] ${m[2].replace(/<[^>]+>/g, '').trim()}`);
    }
  }
}
