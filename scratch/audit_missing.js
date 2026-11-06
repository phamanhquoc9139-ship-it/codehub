const fs = require('fs');

const rawPrompt = fs.readFileSync('scratch/user_gdqp10_prompt.txt', 'utf8');
const html = fs.readFileSync('courses/gdqp_10.html', 'utf8');

// For each lesson, check headings present in rawPrompt vs HTML
for (let i = 1; i <= 12; i++) {
  const bStart = rawPrompt.indexOf(`## Bài ${i}.`);
  const bNext = i < 12 ? rawPrompt.indexOf(`## Bài ${i+1}.`) : rawPrompt.indexOf('## Bảng ôn tập nhanh');
  const bText = rawPrompt.slice(bStart, bNext);

  // Extract all lines starting with ### or **
  const headings = bText.split('\n')
    .filter(l => l.startsWith('### ') || /^\*\*[^*]+\*\*[:\s]*$/.test(l.trim()))
    .map(l => l.replace(/^###\s+/, '').replace(/\*\*/g, '').trim());

  const missing = [];
  headings.forEach(h => {
    // Check if a significant keyword from heading is in the HTML
    const keyword = h.split(/[:\s–—]+/)[0];
    if (keyword.length > 3 && !html.includes(keyword)) {
      missing.push(h);
    }
  });

  console.log(`Bài ${i}: total headings=${headings.length}, missing=${missing.length}`);
  if (missing.length > 0) {
    console.log(`  Missing in Bài ${i}:`, missing);
  }
}
