const fs = require('fs');

const f = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdtc_7.html', 'utf8');

const topics = f.match(/<section id="([^"]+)" class="topic-section[^"]*">/g);
console.log('Topic sections:', topics);
