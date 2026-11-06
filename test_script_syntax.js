const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdcd_6.html', 'utf8');

const scripts = content.match(/<script[\s\S]*?<\/script>/g);
const mainScript = scripts[3].replace(/<\/?script>/g, '');

try {
    // Check syntax with vm or Function
    const vm = require('vm');
    new vm.Script(mainScript);
    console.log('Script 3 syntax is valid!');
} catch (e) {
    console.error('Script 3 SYNTAX ERROR:', e);
}
