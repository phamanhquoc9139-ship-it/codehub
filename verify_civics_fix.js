const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/civics_6.html', 'utf8');

console.log('civics_6.html size:', content.length);
console.log('Contains dark:hidden moon icon:', content.includes('fa-moon dark:hidden'));
console.log('Contains dark:inline sun icon:', content.includes('fa-sun hidden dark:inline'));
console.log('Contains toggleDarkMode function:', content.includes('function toggleDarkMode()'));
console.log('Contains head dark mode script:', content.includes("localStorage.theme === 'dark'"));
