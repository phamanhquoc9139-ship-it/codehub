const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

// Find filter buttons
const filterArea = content.match(/<div class="flex flex-wrap[^"]*"[\s\S]*?<\/div>/g);
if (filterArea) {
    console.log('--- FILTER BARS FOUND ---');
    filterArea.slice(0, 3).forEach((fa, i) => console.log(`[${i}]:\n${fa}\n`));
}

// Find course count stat badge if any
const statBadges = content.match(/<span[^>]*>[^<]*khóa học[^<]*<\/span>/gi);
console.log('Stat badges:', statBadges);
