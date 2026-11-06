const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdcd_6.html', 'utf8');

console.log('Contains dark:hidden moon icon:', content.includes('fa-moon dark:hidden'));
console.log('Contains dark:inline sun icon:', content.includes('fa-sun hidden dark:inline'));
console.log('Contains toggleDarkMode function:', content.includes('function toggleDarkMode()'));
console.log('Contains head dark mode script:', content.includes("localStorage.theme === 'dark'"));

// Verify there are no raw unescaped newlines in alert or strings
const scriptIdx = content.indexOf('<script>\n    // Dark mode handler');
const scriptContent = content.slice(scriptIdx);
console.log('Contains syntax issues in alert:', scriptContent.includes("'\n\n'"));
