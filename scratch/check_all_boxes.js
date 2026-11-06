const fs = require('fs');
const content = fs.readFileSync('scratch/build_toan7_perfect_katex.js', 'utf8');

// Trích xuất các bài
for (let i = 1; i <= 37; i++) {
  const m = content.match(new RegExp(`${i}:\\s*\\{[\\s\\S]*?content:\\s*\`([\\s\\S]*?)\`,\\s*quiz:`, 'm'));
  if (m) {
    const c = m[1];
    const hasFormula = c.includes('bg-blue-50');
    const hasMethod = c.includes('bg-emerald-50');
    const hasExample = c.includes('bg-amber-50') || c.includes('Ví dụ minh họa');
    console.log(`Bài ${i}: Formula=${hasFormula}, Method=${hasMethod}, Example=${hasExample}`);
  } else {
    console.log(`Bài ${i}: Not matched!`);
  }
}
