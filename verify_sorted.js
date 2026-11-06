const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');
const { getCards } = require('./parse_helper.js');
const cards = getCards(content);
console.log('Cards count in index.html:', cards.length);

console.log('\n--- FIRST 15 CARDS ---');
cards.slice(0, 15).forEach((c, i) => {
    console.log((i + 1) + '. [Grade ' + c.grade + '] ' + c.title);
});

console.log('\n--- GRADE BREAKDOWN ---');
const gradeGroups = {};
cards.forEach(c => {
    const key = c.grade;
    gradeGroups[key] = (gradeGroups[key] || 0) + 1;
});
Object.keys(gradeGroups).forEach(k => {
    console.log('Group ' + k + ': ' + gradeGroups[k] + ' courses');
});

console.log('\n--- LỚP 5 & LỚP 6 CARDS ---');
cards.filter(c => c.grade === 5 || c.grade === 6).forEach(c => {
    console.log('[Lớp ' + c.grade + '] ' + c.title);
});

console.log('\n--- LAST 15 CARDS ---');
cards.slice(-15).forEach((c, i) => {
    console.log((cards.length - 15 + i + 1) + '. [Grade ' + c.grade + '] ' + c.title);
});
