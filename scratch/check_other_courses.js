const fs = require('fs');

const coursesToCheck = [
  'courses/chuyende_ly_12.html',
  'courses/chuyende_toan_12.html'
];

coursesToCheck.forEach(cPath => {
  const fullPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/' + cPath;
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf8');
    const hasKatex = content.includes('katex.min.css');
    const hasRawCode = content.includes('font-mono text-xs sm:text-sm border border-sky-700');
    console.log(cPath, '- KaTeX:', hasKatex, '- Raw Code Math:', hasRawCode);
  }
});
