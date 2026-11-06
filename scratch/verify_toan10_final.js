const fs = require('fs');

const content = fs.readFileSync('courses/toan_10.html', 'utf8');

// 1. Script syntax check
const scripts = content.match(/<script[\s\S]*?<\/script>/g) || [];
console.log('Total scripts found:', scripts.length);
scripts.forEach((s, i) => {
  if (s.includes('src=')) {
    console.log(`Script ${i}: External script -> ${s.match(/src="([^"]+)"/)[1]}`);
    return;
  }
  const code = s.replace(/<script[^>]*>/, '').replace(/<\/script>/, '');
  try {
    new Function(code);
    console.log(`Script ${i}: VALID syntax (${code.length} chars)`);
  } catch (e) {
    console.error(`Script ${i}: SYNTAX ERROR: ${e.message}`);
  }
});

// 2. KaTeX delimiter check
const renderMathMatch = content.match(/function renderMath[\s\S]*?function ensureMathRendered/);
if (renderMathMatch) {
  console.log('renderMath block:\n', renderMathMatch[0]);
} else {
  console.error('ERROR: renderMath block not found!');
}

// 3. Check Bai 1 formulas
const bai1Idx = content.indexOf('id="bai-1"');
const bai2Idx = content.indexOf('id="bai-2"');
const bai1Content = content.slice(bai1Idx, bai2Idx);
console.log('Bai 1 has $P, Q, R, ...$:', bai1Content.includes('$P, Q, R, ...$'));
console.log('Bai 1 has $x, y, ...$:', bai1Content.includes('$x, y, ...$'));
console.log('Bai 1 has $\\overline{P}$:', bai1Content.includes('$\\overline{P}$'));

// 4. Check for any multiline $$ containing newline
const multilineCount = (content.match(/\$\$\s*\n/g) || []).length;
console.log('Multiline $$ count:', multilineCount);

console.log('Done verifying toan_10.html!');
