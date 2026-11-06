const fs = require('fs');
const content = fs.readFileSync('courses/tiengtrung_10.html', 'utf8');

console.log('Has #lessons-container:', content.includes('id="lessons-container"'));
