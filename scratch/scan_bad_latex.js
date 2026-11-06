const fs = require('fs');
let html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html', 'utf8');

// Tìm các lỗi dạng (\t riangle), (	riangle), (
const badPatterns = [
  { regex: /\triangle/g, name: '\\triangle broken by tab' },
  { regex: /\rightarrow/g, name: '\\rightarrow broken by CR' },
  { regex: /\times/g, name: '\\times' },
  { regex: /\theta/g, name: '\\theta' },
  { regex: /\text/g, name: '\\text broken by tab' },
  { regex: /\tau/g, name: '\\tau' },
  { regex: /\tan/g, name: '\\tan' },
  { regex: /\cdot/g, name: '\\cdot' },
  { regex: /\frac/g, name: '\\frac' },
  { regex: /\left/g, name: '\\left' },
  { regex: /\right/g, name: '\\right' },
  { regex: /\circ/g, name: '\\circ' },
  { regex: /\alpha/g, name: '\\alpha' },
  { regex: /\beta/g, name: '\\beta' },
  { regex: /\gamma/g, name: '\\gamma' },
  { regex: /\pm/g, name: '\\pm' },
  { regex: /\sqrt/g, name: '\\sqrt' },
  { regex: /\widehat/g, name: '\\widehat' },
  { regex: /\overparen/g, name: '\\overparen' },
  { regex: /\parallel/g, name: '\\parallel' },
  { regex: /\perp/g, name: '\\perp' }
];

console.log("Checking bad patterns:");
badPatterns.forEach(bp => {
  const matches = html.match(bp.regex);
  if (matches) {
    console.log(`- ${bp.name}: found ${matches.length} matches`);
  }
});
