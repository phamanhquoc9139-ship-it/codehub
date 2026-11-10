const fs = require('fs');
const path = require('path');
const d = path.join(__dirname, '..', 'courses');
fs.readdirSync(d).filter(f => f.endsWith('.html')).forEach(f => {
    let c = fs.readFileSync(path.join(d, f), 'utf8');
    const oldStr = '<div class="mt-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-8 text-center border border-indigo-100 dark:border-indigo-800">';
    const newStr = '<div class="col-span-12 lg:col-span-9 lg:col-start-4 mt-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-8 text-center border border-indigo-100 dark:border-indigo-800">';
    if (c.includes(oldStr)) {
        fs.writeFileSync(path.join(d, f), c.replaceAll(oldStr, newStr), 'utf8');
        console.log('Fixed CSS in ' + f);
    }
});
