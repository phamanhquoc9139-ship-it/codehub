const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_6.html', 'utf8');

const matches = content.match(/\$0/g);
console.log('Number of $0 occurrences in congnghe_6.html:', matches ? matches.length : 0);

// Also check technology_6.html
if (fs.existsSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/technology_6.html')) {
    const content2 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/technology_6.html', 'utf8');
    const matches2 = content2.match(/\$0/g);
    console.log('Number of $0 occurrences in technology_6.html:', matches2 ? matches2.length : 0);
}

// Find line numbers and context where $0 occurs
const lines = content.split('\n');
lines.forEach((line, idx) => {
    if (line.includes('$0')) {
        console.log(`Line ${idx + 1}: ${line.trim()}`);
    }
});
