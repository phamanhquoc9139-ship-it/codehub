const { chapters } = require('./congnghe_6_data.js');
const fs = require('fs');

const testParserContent = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/test_parser.js', 'utf8');
eval(testParserContent);

let totalLessons = 0;
let totalLength = 0;
let errors = 0;

chapters.forEach(ch => {
    ch.lessons.forEach(l => {
        totalLessons++;
        const rendered = renderMarkdown(l.knowledge);
        totalLength += rendered.length;
        if (rendered.includes('$0')) {
            console.log(`ERROR: Lesson ${l.id} (${l.title}) contains $0!`);
            errors++;
        }
    });
});

console.log(`Rendered ${totalLessons} lessons, total HTML length: ${totalLength}, errors: ${errors}`);
