const fs = require('fs');
const vm = require('vm');

const html = fs.readFileSync('courses/tiengnga_7.html', 'utf8');

// Check script syntax
const scripts = html.match(/<script[\s\S]*?<\/script>/gi) || [];
console.log('Scripts found:', scripts.length);
scripts.forEach((s, i) => {
  const code = s.replace(/<script[\s\S]*?>/i, '').replace(/<\/script>/i, '');
  if (!s.includes('src=') && code.trim().length > 0) {
    try {
      new vm.Script(code);
      console.log('Script ' + i + ': VALID SYNTAX');
    } catch (e) {
      console.error('Script ' + i + ' ERROR:', e.message);
    }
  }
});

// Check component counts
console.log('Sections:', (html.match(/class="lesson-section/g) || []).length);
console.log('SVG Mindmaps:', (html.match(/CONCEPT MINDMAP VECTOR/g) || []).length);
console.log('Quiz questions:', (html.match(/checkAnswer\(/g) || []).length);
console.log('Speak buttons:', (html.match(/speakWord\(/g) || []).length);
console.log('Exam questions count in modal:', (html.match(/ДẤU TRƯỜNG TRẠNG NGUYÊN/g) || []).length);
