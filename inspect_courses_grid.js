const fs = require('fs');
const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const gridStart = html.indexOf('id="courses-grid"');
const gridOpenEnd = html.indexOf('>', gridStart) + 1;
const noCoursesIdx = html.indexOf('id="noCoursesFound"');
const gridBody = html.substring(gridOpenEnd, noCoursesIdx);

const h3Matches = [...gridBody.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log('Total <h3> before noCoursesFound:', h3Matches.length);
console.log('Last 10 titles:', h3Matches.slice(-10));
console.log('First 10 titles:', h3Matches.slice(0, 10));

// Check what follows noCoursesFound until Playground
const pgStart = html.indexOf('<!-- Playground Section -->');
console.log('\nAfter noCoursesFound until Playground:', html.substring(noCoursesIdx, pgStart).trim());
