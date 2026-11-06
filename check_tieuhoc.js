const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');
const { getCards } = require('./parse_helper.js');
const cards = getCards(content);

cards.forEach(c => {
    const title = c.title.toLowerCase();
    const isOlympicHsg = title.includes('hsg') || title.includes('olympic') || title.includes('cấp 3');
    const hasTieuhoc = [' 1', ' 2', ' 3', ' 4', ' 5'].some(n => title.includes(n));
    const notThpt = !title.includes('10') && !title.includes('11') && !title.includes('12');
    if (hasTieuhoc && notThpt && !isOlympicHsg) {
        if (c.grade > 5) {
            console.log('Unexpected match:', c.grade, c.title);
        }
    }
});
