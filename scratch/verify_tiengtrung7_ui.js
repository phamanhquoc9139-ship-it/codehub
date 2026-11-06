const fs = require('fs');
const html = fs.readFileSync('courses/tiengtrung_7.html', 'utf8');

console.log('Sections:', (html.match(/class="lesson-section/g) || []).length);
console.log('SVG Mindmaps:', (html.match(/CONCEPT MINDMAP VECTOR/g) || []).length);
console.log('Quiz questions:', (html.match(/checkAnswer\(/g) || []).length);
console.log('Speak buttons:', (html.match(/speakWord\(/g) || []).length);
console.log('Exam questions data count:', (html.match(/ĐẤU TRƯỜNG TRẠNG NGUYÊN/g) || []).length);
