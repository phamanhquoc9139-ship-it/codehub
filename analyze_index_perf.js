const fs = require('fs');
const path = require('path');

const base = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform';
const html = fs.readFileSync(path.join(base, 'index.html'), 'utf8');

console.log('index.html total bytes:', html.length, '(' + (html.length / 1024).toFixed(1) + ' KiB)');
console.log('index.html total lines:', html.split('\n').length);

// Find all <script and <link tags
const scripts = [...html.matchAll(/<script[^>]*>/gi)].map(m => m[0]);
console.log('\n--- <script> tags in index.html (' + scripts.length + ') ---');
scripts.forEach((s, i) => console.log((i+1) + ':', s));

const links = [...html.matchAll(/<link[^>]*>/gi)].map(m => m[0]);
console.log('\n--- <link> tags in index.html (' + links.length + ') ---');
links.forEach((l, i) => console.log((i+1) + ':', l));

// Check DOM size of #courses-grid
const gridStart = html.indexOf('id="courses-grid"');
const playgroundStart = html.indexOf('<!-- Playground Section -->');
console.log('\n#courses-grid HTML bytes:', playgroundStart - gridStart, '(' + ((playgroundStart - gridStart)/1024).toFixed(1) + ' KiB)');

// Count total course cards inside #courses-grid
const gridChunk = html.substring(gridStart, playgroundStart);
const cardHeaders = gridChunk.match(/<h3[^>]*>/gi) || [];
console.log('Course cards in #courses-grid (<h3> count):', cardHeaders.length);

// Count total DOM elements roughly
const openTags = html.match(/<[a-zA-Z0-9]+(\s|>|\/)/g) || [];
console.log('Estimated total HTML elements in index.html:', openTags.length);

// Check local CSS & JS file sizes
for (const rel of ['styles/index.css', 'scripts/app.js', 'scripts/supabase-config.js', 'scripts/auth-ui.js', 'scripts/activity-tracker.js', 'scripts/pptx-presenter.js']) {
  const p = path.join(base, rel);
  if (fs.existsSync(p)) {
    const content = fs.readFileSync(p, 'utf8');
    console.log(rel, '->', content.length, 'bytes (' + content.split('\n').length + ' lines)');
  }
}
