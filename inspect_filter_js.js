const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const jsMatch = content.match(/function filterCoursesBy[\s\S]*?<\/script>/);
if (jsMatch) {
    console.log(jsMatch[0].slice(0, 3000));
} else {
    console.log('filterCoursesBy function not found directly');
}
