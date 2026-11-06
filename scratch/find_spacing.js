const fs = require('fs');

const t7 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html', 'utf8');

const matches = t7.match(/letter-spacing[^\;\}]*/gi) || [];
console.log('letter-spacing matches in toan_7.html:\n', matches);

const trackingMatches = t7.match(/tracking-[a-z]+/gi) || [];
console.log('tracking matches in toan_7.html:\n', [...new Set(trackingMatches)]);
