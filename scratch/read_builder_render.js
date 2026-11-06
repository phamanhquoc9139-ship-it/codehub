const fs = require('fs');

const builder = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/build_gdtc_7_page.js', 'utf8');

const renderTopicStart = builder.indexOf('function renderTopic(');
if (renderTopicStart !== -1) {
  console.log(builder.substring(renderTopicStart, renderTopicStart + 1500));
}
