const fs = require('fs');

const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const k7Idx = indexHtml.indexOf('KHỐI LỚP 7');
const k8Idx = indexHtml.indexOf('KHỐI LỚP 8', k7Idx);

console.log('KHỐI LỚP 7 section substring:');
const k7Section = indexHtml.substring(k7Idx, k8Idx);
const cardTitles = k7Section.match(/<h3[^>]*>([\s\S]*?)<\/h3>/g) || [];
console.log('Cards in Khối Lớp 7:', cardTitles.map(t => t.replace(/<[^>]+>/g, '').trim()));
