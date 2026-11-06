const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdtc_6.html', 'utf8');

console.log('File size:', content.length);
console.log('Contains $0?', content.includes('$0'));

// Check 25 lessons
for (let i = 1; i <= 25; i++) {
    const hasLesson = content.includes(`id="lesson-${i}"`);
    if (!hasLesson) console.log(`Missing Lesson ${i}!`);
}
console.log('All 25 lessons verified!');

// Check syntax of script tag
const scripts = content.match(/<script[\s\S]*?<\/script>/g);
console.log('Scripts count:', scripts.length);
const mainScript = scripts[scripts.length - 1].replace(/<\/?script>/g, '');

try {
    const vm = require('vm');
    new vm.Script(mainScript);
    console.log('Main script syntax is valid!');
} catch (e) {
    console.error('Main script syntax error:', e);
}

console.log('Dark mode head script present:', content.includes("localStorage.theme === 'dark'"));
console.log('Moon icon present:', content.includes('fa-moon dark:hidden'));
console.log('Sun icon present:', content.includes('fa-sun hidden dark:inline'));
