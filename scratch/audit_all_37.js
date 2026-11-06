const fs = require('fs');

const t7 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html', 'utf8');

const report = [];

for (let i = 1; i <= 37; i++) {
  const start = t7.indexOf(`id="lesson-${i}"`);
  if (start === -1) {
    report.push(`Lesson ${i}: NOT FOUND!`);
    continue;
  }
  const end = i < 37 ? t7.indexOf(`id="lesson-${i+1}"`) : t7.indexOf('</main>');
  const snippet = t7.substring(start, end);

  const hasSvg = snippet.includes('<svg');
  const hasKatex = snippet.includes('\\(') || snippet.includes('\\[');
  const rawFormulas = snippet.match(/[a-z]\^[0-9a-z]/g) || [];
  const titleMatch = snippet.match(/Bài\s+\d+:\s+([^<]+)/);
  const title = titleMatch ? titleMatch[1].trim() : 'Unknown';

  report.push({
    lesson: i,
    title: title,
    hasSvg: hasSvg,
    hasKatex: hasKatex,
    rawFormulasCount: rawFormulas.length
  });
}

console.table(report);
