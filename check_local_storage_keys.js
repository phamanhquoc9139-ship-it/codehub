const fs = require('fs');
const glob = ['index.html', 'courses/congnghe_6.html', 'courses/amnhac_6.html', 'courses/toan_5.html'];

glob.forEach(f => {
    const p = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/' + f;
    if (fs.existsSync(p)) {
        const c = fs.readFileSync(p, 'utf8');
        const m = c.match(/localStorage[^;\n)]+/g);
        console.log(`File ${f}:`, m ? [...new Set(m)] : 'None');
    }
});
