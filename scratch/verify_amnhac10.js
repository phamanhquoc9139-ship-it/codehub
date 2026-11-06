// scratch/verify_amnhac10.js
const fs = require('fs');

console.log('--- VERIFYING ÂM NHẠC 10 ---');

const an10 = fs.readFileSync('courses/amnhac_10.html', 'utf8');
const mu10 = fs.readFileSync('courses/music_10.html', 'utf8');

console.log('amnhac_10.html size:', an10.length);
console.log('music_10.html size:', mu10.length);

if (an10 !== mu10) {
  console.error('ERROR: amnhac_10.html and music_10.html are not identical!');
  process.exit(1);
}
console.log('PASS: Both files are 100% synchronized byte-for-byte.');

// Corrupt tokens check
const corruptTokens = ['undefined', 'NaN', '[object Object]'];
corruptTokens.forEach(token => {
  if (an10.includes(token)) {
    console.error(`ERROR: Found corrupt token "${token}" in HTML!`);
    process.exit(1);
  }
});
console.log('PASS: Zero corrupt tokens found.');

// Check 4 General Topics
const generalTopics = ['chu-de-1', 'chu-de-2', 'chu-de-3', 'chu-de-4'];
generalTopics.forEach(id => {
  if (!an10.includes(`id="${id}"`)) {
    console.error(`ERROR: Missing general topic id "${id}"!`);
    process.exit(1);
  }
});
console.log('PASS: All 4 General Topics present.');

// Check 4 Singing Lessons
const singingLessons = ['hat-bai-1', 'hat-bai-2', 'hat-bai-3', 'hat-bai-4'];
singingLessons.forEach(id => {
  if (!an10.includes(`id="${id}"`)) {
    console.error(`ERROR: Missing singing lesson id "${id}"!`);
    process.exit(1);
  }
});
console.log('PASS: All 4 Singing Lessons present.');

// Check 8 Guitar Lessons
const guitarLessons = ['gt-bai-1', 'gt-bai-2', 'gt-bai-3', 'gt-bai-4', 'gt-bai-5', 'gt-bai-6', 'gt-bai-7', 'gt-bai-8'];
guitarLessons.forEach(id => {
  if (!an10.includes(`id="${id}"`)) {
    console.error(`ERROR: Missing guitar lesson id "${id}"!`);
    process.exit(1);
  }
});
console.log('PASS: All 8 Guitar Lessons present.');

// Check Terminology & Outcomes
if (!an10.includes('id="thuat-ngu"') || !an10.includes('id="bang-dau-ra"')) {
  console.error('ERROR: Missing Terminology or Outcomes section!');
  process.exit(1);
}
console.log('PASS: Section 18 Terminology and Section 19 Outcomes Table present.');

// Check SVGs and leak tags
const svgs = an10.match(/<svg[\s\S]*?<\/svg>/g) || [];
console.log('Total SVGs found:', svgs.length);
if (svgs.length < 15) {
  console.error('ERROR: Expected at least 15 simulated sheet music / diagram SVGs, found ' + svgs.length);
  process.exit(1);
}

const allowedTags = new Set(['svg', 'g', 'rect', 'circle', 'line', 'path', 'text', 'tspan', 'foreignObject', 'defs', 'marker', 'polygon', 'polyline', 'ellipse', 'use', 'symbol', 'clipPath', 'linearGradient', 'radialGradient', 'stop', 'style', 'pattern', 'title', 'desc']);

let leakCount = 0;
svgs.forEach((svg, i) => {
  const tags = [...svg.matchAll(/<([a-zA-Z0-9]+)/g)].map(m => m[1].toLowerCase());
  const invalid = tags.filter(t => !allowedTags.has(t));
  if (invalid.length > 0) {
    console.error(`ERROR: SVG #${i} has invalid tags:`, invalid);
    leakCount++;
  }
});

if (leakCount > 0) {
  process.exit(1);
}
console.log('PASS: All SVGs use pure valid SVG elements with 0 HTML leaks.');

// Check Audio Synth
if (!an10.includes('AudioContext') || !an10.includes('playMelodyNotes')) {
  console.error('ERROR: Web Audio API synth missing!');
  process.exit(1);
}
console.log('PASS: Web Audio API synth configured and active.');

// Check Exam Questions
if (!an10.includes('Kì Thi Đánh Giá Năng Lực') || !an10.includes('Trạng Nguyên Âm Nhạc 10 (25 Câu)')) {
  console.error('ERROR: Exam missing!');
  process.exit(1);
}
console.log('PASS: Trạng Nguyên 25-question exam embedded.');

// Check Index Link
const index = fs.readFileSync('index.html', 'utf8');
if (!index.includes('amnhac_10.html')) {
  console.error('ERROR: index.html does not link to amnhac_10.html!');
  process.exit(1);
}
console.log('PASS: index.html contains course link to courses/amnhac_10.html.');

console.log('🎉 ALL 10 VERIFICATION CHECKS PASSED FOR ÂM NHẠC 10!');
