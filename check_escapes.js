const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/build_gdcd_6.js', 'utf8');

// Check for \n inside template strings
const lines = content.split('\n');
lines.forEach((l, idx) => {
    if (l.includes('\\n')) {
        console.log(`Line ${idx + 1}: ${l}`);
    }
});
