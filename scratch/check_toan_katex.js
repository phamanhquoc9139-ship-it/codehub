const fs = require('fs');

const toan = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_10.html', 'utf8');

// Check ensureMathRendered function definition and call in toan_10.html
const fnMatches = toan.match(/function\s+ensureMathRendered[\s\S]*?^  \}/m);
console.log('ensureMathRendered definition:\n', fnMatches ? fnMatches[0] : 'NOT FOUND');

// Check where ensureMathRendered is called
const callMatches = toan.match(/ensureMathRendered\(\)/g);
console.log('ensureMathRendered calls count:', callMatches ? callMatches.length : 0);

// Check if renderMathInElement is called with correct options
const renderCalls = toan.match(/renderMathInElement\([^)]*\)/g);
console.log('renderMathInElement calls:', renderCalls);

// Check head script tags in toan_10.html
const headMatch = toan.match(/<head>[\s\S]*?<\/head>/i);
if (headMatch) {
  const scriptsInHead = headMatch[0].match(/<script[\s\S]*?<\/script>/gi) || [];
  console.log('Scripts in head:\n', scriptsInHead.join('\n'));
}
