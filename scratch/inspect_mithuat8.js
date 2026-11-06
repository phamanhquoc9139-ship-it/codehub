const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/mithuat_8.html', 'utf8');
const lines = content.split('\n');
console.log('Total lines:', lines.length);

const themeLines = lines.filter(l => l.includes('id="theme-') || l.includes('id="bai-') || l.includes('id="exam-') || l.includes('id="glossary-modal"'));
console.log('Sample IDs:');
themeLines.forEach(l => console.log('  ', l.trim()));
