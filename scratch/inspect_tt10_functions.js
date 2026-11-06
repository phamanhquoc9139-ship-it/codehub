const fs = require('fs');
const content = fs.readFileSync('courses/tiengtrung_10.html', 'utf8');

// Find all function declarations in scripts
const fnMatches = content.match(/function\s+([a-zA-Z0-9_]+)\s*\(/g) || [];
console.log('Functions in tiengtrung_10.html:', fnMatches);

// Find all event listeners
const eventMatches = content.match(/addEventListener\([^)]+\)/g) || [];
console.log('Event listeners:', eventMatches);
