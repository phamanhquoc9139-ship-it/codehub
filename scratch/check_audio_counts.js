const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '../courses/tiengphap_10.html'), 'utf8');
const speakMatches = content.match(/speakFrench\(/g) || [];
const volumeIcons = content.match(/fa-volume-high/g) || [];
const playIcons = content.match(/fa-play/g) || [];

console.log(`speakFrench triggers: ${speakMatches.length}`);
console.log(`fa-volume-high icons: ${volumeIcons.length}`);
console.log(`fa-play sentence icons: ${playIcons.length}`);
