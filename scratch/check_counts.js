const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

// 1. Total HTML files in courses/
const filesInCourses = fs.readdirSync('courses').filter(f => f.endsWith('.html'));
console.log('1. Files in courses/ directory:', filesInCourses.length);

// 2. Count course cards in index.html
// Let's find all cards or links to courses/
const courseLinks = [];
const regex = /href=["']courses\/([^"']+)["']/g;
let match;
while ((match = regex.exec(indexHtml)) !== null) {
  courseLinks.push(match[1]);
}
console.log('2. Total course links in index.html:', courseLinks.length);
const uniqueCourseLinks = [...new Set(courseLinks)];
console.log('3. Unique course links in index.html:', uniqueCourseLinks.length);

// Check if any file in courses/ is missing from index.html
const missingInIndex = filesInCourses.filter(f => !uniqueCourseLinks.includes(f));
console.log('4. Files in courses/ not linked in index.html:', missingInIndex);

// Check if any link in index.html points to a non-existent file
const brokenLinks = uniqueCourseLinks.filter(f => !filesInCourses.includes(f));
console.log('5. Links in index.html that do not exist in courses/:', brokenLinks);

// 3. Search for numbers in the hero/stats section of index.html
const lines = indexHtml.split('\n');
lines.forEach((line, i) => {
  if (line.includes('143') || line.includes('Tổng Số Môn') || line.includes('TỔNG MÔN HỌC') || line.includes('Khối Lớp 10') || line.includes('Tin Học & AI')) {
    console.log(`Line ${i + 1}: ${line.trim()}`);
  }
});
