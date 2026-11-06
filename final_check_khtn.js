const { getCards } = require('./parse_helper.js');
const fs = require('fs');

const cards = getCards();
console.log('Total cards in index.html:', cards.length);

const g6 = cards.filter(c => c.grade === 6);
console.log('Grade 6 courses (' + g6.length + '):');
g6.forEach(c => console.log(' - ' + c.title + ' -> ' + c.link));

const gthcs = cards.filter(c => c.grade >= 6 && c.grade <= 9);
console.log('Total THCS (6-9) cards:', gthcs.length);

const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');
const btnAllMatch = indexHtml.match(/id="btn-filter-all"[^>]*>([^<]+)<\/button>/);
console.log('btnAll text:', btnAllMatch ? btnAllMatch[1] : 'not found');

const btnThcsMatch = indexHtml.match(/id="btn-filter-thcs"[^>]*>([^<]+)<\/button>/);
console.log('btnThcs text:', btnThcsMatch ? btnThcsMatch[1] : 'not found');

const badgeMatch = indexHtml.match(/id="filter-result-badge"[^>]*>([^<]+)<\/span>/);
console.log('badge text:', badgeMatch ? badgeMatch[1] : 'not found');
