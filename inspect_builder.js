const fs = require('fs');

if (fs.existsSync('C:/Users/ADMIN/.gemini/antigravity/scratch/generate_congnghe_html.js')) {
    console.log('--- generate_congnghe_html.js ---');
    const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/generate_congnghe_html.js', 'utf8');
    const lines = content.split('\n');
    lines.forEach((l, i) => {
        if (l.includes('list-disc') || l.includes('$0') || l.includes('replace')) {
            console.log(`Line ${i + 1}: ${l}`);
        }
    });
}

if (fs.existsSync('C:/Users/ADMIN/.gemini/antigravity/scratch/build_congnghe_6.js')) {
    console.log('--- build_congnghe_6.js ---');
    const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/build_congnghe_6.js', 'utf8');
    const lines = content.split('\n');
    lines.forEach((l, i) => {
        if (l.includes('list-disc') || l.includes('$0') || l.includes('replace')) {
            console.log(`Line ${i + 1}: ${l}`);
        }
    });
}
