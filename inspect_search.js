const fs = require('fs');

const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

// Find search input
const inputIdx = indexHtml.indexOf('id="search"');
console.log('Search input context:');
if (inputIdx !== -1) {
  console.log(indexHtml.substring(inputIdx - 100, inputIdx + 300));
} else {
  // search by input type="text"
  const textInputs = [...indexHtml.matchAll(/<input[^>]*type="text"[^>]*>/g)];
  console.log('Text inputs:', textInputs.map(m => m[0]));
}

// Search for search function in scripts
const scriptIdx = indexHtml.indexOf('function filter');
console.log('Filter functions:');
const matches = [...indexHtml.matchAll(/function\s+([a-zA-Z0-9_]*search[a-zA-Z0-9_]*|[a-zA-Z0-9_]*filter[a-zA-Z0-9_]*)/gi)];
console.log('Search/filter functions found:', matches.map(m => m[0]));
