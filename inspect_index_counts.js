const fs = require('fs');

const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

// Look for course card container or cards
console.log('Total length of index.html:', indexHtml.length);

// Let's find all cards that link to courses/
const cardRegex = /<div[^>]*onclick="window\.location\.href='courses\/([^']+)'"[^>]*>([\s\S]*?)(?=<div[^>]*onclick="window\.location\.href='courses\/|$)/g;
const cards = [...indexHtml.matchAll(/onclick="window\.location\.href='courses\/([^']+)'"/g)].map(m => m[1]);
console.log('Total course cards found with onclick:', cards.length);

// Check counts in index.html
const allBtnMatch = indexHtml.match(/>Tất cả \((\d+)\)</);
console.log('Tất cả button count:', allBtnMatch ? allBtnMatch[1] : 'not found');

const thcsMatch = indexHtml.match(/>THCS 6-9 \((\d+)\)</);
console.log('THCS button count:', thcsMatch ? thcsMatch[1] : 'not found');

const badgeMatch = indexHtml.match(/(\d+)\s*\/\s*(\d+)\s*môn học/);
console.log('Badge count match:', badgeMatch ? badgeMatch[0] : 'not found');
