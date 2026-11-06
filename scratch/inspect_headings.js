const fs = require('fs');
const text = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/mithuat9_user_request_full.txt', 'utf8');

const lines = text.split('\n');
const headings = lines.filter(l => l.startsWith('#') || l.startsWith('## ') || l.startsWith('### '));
headings.forEach(h => console.log(h));
