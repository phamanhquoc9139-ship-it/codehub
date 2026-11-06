const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');
const { getCards } = require('./parse_helper.js');
const cards = getCards(content);

console.log('Total cards:', cards.length);

const tieuhoc = cards.filter(c => {
    const title = c.title.toLowerCase();
    const isOlympicHsg = title.includes('hsg') || title.includes('olympic') || title.includes('cấp 3');
    const hasTieuhoc = [' 1', ' 2', ' 3', ' 4', ' 5'].some(n => title.includes(n));
    const notThpt = !title.includes('10') && !title.includes('11') && !title.includes('12');
    return hasTieuhoc && notThpt && !isOlympicHsg;
});
console.log('Tiểu học count:', tieuhoc.length);

const thcs = cards.filter(c => {
    const title = c.title.toLowerCase();
    const isOlympicHsg = title.includes('hsg') || title.includes('olympic') || title.includes('cấp 3');
    const hasThcs = [' 6', ' 7', ' 8', ' 9'].some(n => title.includes(n));
    const notThpt = !title.includes('10') && !title.includes('11') && !title.includes('12');
    return hasThcs && notThpt && !isOlympicHsg;
});
console.log('THCS count:', thcs.length);

const g10 = cards.filter(c => {
    const title = c.title.toLowerCase();
    return title.includes(' 10') || title.includes('(10)');
});
console.log('Lớp 10 count:', g10.length);

const g11 = cards.filter(c => {
    const title = c.title.toLowerCase();
    return title.includes(' 11') || title.includes('(11)');
});
console.log('Lớp 11 count:', g11.length);

const g12 = cards.filter(c => {
    const title = c.title.toLowerCase();
    return title.includes(' 12') || title.includes('(12)');
});
console.log('Lớp 12 count:', g12.length);

const hsg = cards.filter(c => {
    const title = c.title.toLowerCase();
    return title.includes('hsg') || title.includes('olympic');
});
console.log('HSG & Olympic count:', hsg.length);
