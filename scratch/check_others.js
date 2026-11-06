const fs = require('fs');
const khtn = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/khtn_7.html', 'utf8');
const lsdl = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/lichsu_diali_7.html', 'utf8');

console.log('=== KHTN LESSON SECTION CLASSES ===');
const m1 = khtn.match(/<section[^>]*class="([^"]*)"/g);
if (m1) console.log(m1.slice(0, 3));

console.log('=== LSDL LESSON SECTION CLASSES ===');
const m2 = lsdl.match(/<section[^>]*class="([^"]*)"/g);
if (m2) console.log(m2.slice(0, 3));

console.log('=== KHTN SIDEBAR CLASSES ===');
const s1 = khtn.match(/<aside[^>]*>[\s\S]{1,500}/);
if (s1) console.log(s1[0].substring(0, 300));
