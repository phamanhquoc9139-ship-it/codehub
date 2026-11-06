const fs = require('fs');
const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const endGridIndex = html.indexOf('</div>\n            </div>\n        </div>\n    </div>');
console.log('Index around end of courses:', html.indexOf('id="courses-grid"'));
// Look at the sections after courses
const lines = html.split('\n');
lines.forEach((l, i) => {
  if (l.includes('id="courses-grid"')) {
    console.log('courses-grid starts at line:', i+1);
  }
  if (l.includes('</section>') || (l.includes('</div>') && l.includes('id='))) {
    if (i > 5100) console.log(`${i+1}: ${l.trim()}`);
  }
});
