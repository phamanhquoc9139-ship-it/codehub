const fs = require('fs');

const f1 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_6.html', 'utf8');
const f2 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/technology_6.html', 'utf8');

console.log('Occurrences of $0 in congnghe_6.html:', (f1.match(/\$0/g) || []).length);
console.log('Occurrences of $0 in technology_6.html:', (f2.match(/\$0/g) || []).length);

// Check lesson 1 section 1 in congnghe_6.html
const l1Idx = f1.indexOf('1. Vai trò của nhà ở');
if (l1Idx !== -1) {
    console.log('\n--- Lesson 1 Section 1 Snippet ---');
    console.log(f1.slice(l1Idx, l1Idx + 1200));
}
