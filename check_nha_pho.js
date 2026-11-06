const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/congnghe_6_data.js', 'utf8');
const lines = content.split('\n');
lines.forEach((l, i) => {
    if (l.includes('Nhà mặt phố')) {
        console.log(`Line ${i+1}: ${l}`);
    }
});
