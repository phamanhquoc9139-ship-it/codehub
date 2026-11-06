const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tiengtrung_8.html', 'utf8');

console.log('Audio utterance zh-CN:', content.includes('zh-CN'));

// Check modals
const ids = content.match(/id="([^"]+)"/g) || [];
const modalIds = ids.filter(id => id.toLowerCase().includes('modal'));
console.log('Modal IDs:', [...new Set(modalIds)]);

// Check sections
const sections = content.match(/<section[^>]+id="([^"]+)"/g) || [];
console.log('Sections (first 20):', sections.slice(0, 20));

// Check SVGs
const svgs = (content.match(/<svg/g) || []).length;
console.log('Total SVGs:', svgs);
