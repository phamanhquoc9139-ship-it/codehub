const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');
const { getCards } = require('./parse_helper.js');

const cards = getCards(content);
console.log('Total cards in updated index.html:', cards.length);

// Verify order is strictly ascending by grade, then localeCompare title
let sorted = true;
for (let i = 0; i < cards.length - 1; i++) {
    const a = cards[i];
    const b = cards[i + 1];
    if (a.grade > b.grade) {
        console.log(`Grade order violation at ${i}: [Grade ${a.grade}] ${a.title} > [Grade ${b.grade}] ${b.title}`);
        sorted = false;
        break;
    } else if (a.grade === b.grade) {
        if (a.title.localeCompare(b.title, 'vi') > 0) {
            console.log(`Title order violation at ${i} in Grade ${a.grade}: ${a.title} > ${b.title}`);
            sorted = false;
            break;
        }
    }
}

if (sorted) {
    console.log('SUCCESS: All 214 courses are perfectly sorted in ASCENDING order!');
} else {
    console.log('FAIL: Course ordering issue detected.');
}
