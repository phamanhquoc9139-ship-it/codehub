const fs = require('fs');
const path = require('path');

const t = fs.readFileSync(path.join(__dirname, '..', 'courses', 'toan_9.html'), 'utf8');

// Replace all $...$ and $$...$$ with placeholders
let textWithoutMath = t.replace(/\$\$[\s\S]*?\$\$/g, 'MATH_BLOCK');
textWithoutMath = textWithoutMath.replace(/\$[^\$]+?\$/g, 'MATH_INLINE');

// Now check if any raw LaTeX commands leaked out into plain HTML text
const latexKeywords = ['\\begin{cases}', '\\neq', '\\quad', '\\pm', '\\sqrt{', '\\frac{', '\\ge', '\\le', '\\iff'];
let leakFound = false;

latexKeywords.forEach(kw => {
  let pos = 0;
  while ((pos = textWithoutMath.indexOf(kw, pos)) !== -1) {
    // Exclude if it's inside script tag or SVG
    const scriptStart = textWithoutMath.lastIndexOf('<script', pos);
    const scriptEnd = textWithoutMath.lastIndexOf('</script>', pos);
    const isInsideScript = scriptStart > scriptEnd;
    
    const svgStart = textWithoutMath.lastIndexOf('<svg', pos);
    const svgEnd = textWithoutMath.lastIndexOf('</svg>', pos);
    const isInsideSvg = svgStart > svgEnd;

    if (!isInsideScript && !isInsideSvg) {
      console.warn(`WARNING: Leak of "${kw}" outside math delimiters at pos ${pos}:\n`, textWithoutMath.substring(pos - 30, pos + 50));
      leakFound = true;
    }
    pos += kw.length;
  }
});

if (!leakFound) {
  console.log('PERFECT: Zero raw LaTeX leaks outside KaTeX math delimiters in toan_9.html!');
}
