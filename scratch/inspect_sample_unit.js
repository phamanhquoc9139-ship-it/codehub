const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tienganh_9.html', 'utf8');

const modalMatches = content.match(/<div[^>]*id="[^"]*modal[^"]*"[^>]*>/gi) || [];
console.log('Modals found:', modalMatches);

// Find a sample unit in tienganh_9
const sampleUnit = content.match(/<article[^>]*id="unit-1"[\s\S]*?<\/article>/i);
if (sampleUnit) {
  console.log('Sample unit length:', sampleUnit[0].length);
  const headings = sampleUnit[0].match(/<h[345][^>]*>[\s\S]*?<\/h[345]>/gi) || [];
  headings.forEach(h => console.log(h.replace(/<[^>]*>/g, '').trim()));
}
