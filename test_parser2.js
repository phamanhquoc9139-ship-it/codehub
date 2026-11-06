const { chapters } = require('./congnghe_6_data.js');
const fs = require('fs');

// require renderMarkdown logic from test_parser.js
const testParserContent = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/test_parser.js', 'utf8');
eval(testParserContent);

const l1 = chapters[0].lessons[0];
console.log('--- TESTING LESSON 1 KNOWLEDGE ---');
const rendered = renderMarkdown(l1.knowledge);
console.log(rendered.slice(0, 1500));
console.log('\nTotal characters rendered:', rendered.length);
console.log('Contains $0?', rendered.includes('$0'));
