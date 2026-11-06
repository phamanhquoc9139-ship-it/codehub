const fs = require('fs');

const html1 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tienganh_7.html', 'utf8');
const html2 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/english_7.html', 'utf8');

console.log('tienganh_7.html size:', html1.length);
console.log('english_7.html size:', html2.length);

const sections = [...html1.matchAll(/<section id="([^"]+)"/g)].map(m => m[1]);
console.log('Total sections in tienganh_7.html:', sections.length, sections);

const audioBtns = [...html1.matchAll(/speakWord\(/g)].length;
console.log('Audio pronunciation buttons:', audioBtns);

const svgCount = [...html1.matchAll(/<svg viewBox="0 0 840 210"/g)].length;
console.log('Vector SVG mindmaps count:', svgCount);

console.log('Contains exam questions:', html1.includes('Đấu Trường Trạng Nguyên Tiếng Anh 7'));
console.log('Contains Grammar Handbook:', html1.includes('Sổ Tay Ma Trận Ngữ Pháp Toàn Diện 12 Unit'));
console.log('Contains Phonetics Studio:', html1.includes('Phonetics Studio &amp; IPA Pronunciation'));
