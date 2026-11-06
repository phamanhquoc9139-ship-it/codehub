const fs = require('fs');

const builder = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/build_gdtc_7_page.js', 'utf8');

const lines = builder.split('\n');
lines.forEach((l, i) => {
  if (l.includes('topicsData.map') || l.includes('topicsData.forEach') || l.includes('section id=') || l.includes('renderTopic') || l.includes('svg-mindmap')) {
    console.log(`${i+1}: ${l.slice(0, 80)}`);
  }
});
