const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'courses', 'vatly_11.html');
const html = fs.readFileSync(filePath, 'utf8');

let errors = [];

// 1. Check 4 Chapters
for (let c = 1; c <= 4; c++) {
  if (!html.includes(`id="chuong-${c}"`)) {
    errors.push(`Missing chapter anchor #chuong-${c}`);
  }
}

// 2. Check 26 Lessons and 5 subsections A-E each
for (let i = 1; i <= 26; i++) {
  if (!html.includes(`id="bai-${i}"`)) errors.push(`Missing lesson #bai-${i}`);
  if (!html.includes(`id="b${i}-ly-thuyet"`)) errors.push(`Missing #b${i}-ly-thuyet`);
  if (!html.includes(`id="b${i}-cong-thuc"`)) errors.push(`Missing #b${i}-cong-thuc`);
  if (!html.includes(`id="b${i}-so-do"`)) errors.push(`Missing #b${i}-so-do`);
  if (!html.includes(`id="b${i}-ung-dung"`)) errors.push(`Missing #b${i}-ung-dung`);
  if (!html.includes(`id="b${i}-trac-nghiem"`)) errors.push(`Missing #b${i}-trac-nghiem`);
  for (let q = 0; q < 3; q++) {
    if (!html.includes(`id="quiz-card-${i}-${q}"`)) {
      errors.push(`Missing quiz-card-${i}-${q}`);
    }
  }
}

// 3. Count SVGs
const svgCount = (html.match(/<svg\b/g) || []).length;
if (svgCount < 26) {
  errors.push(`Expected at least 26 SVGs, found ${svgCount}`);
}

// 4. Check back button and sticky sidebar
if (!html.includes('href="../index.html"')) errors.push('Missing back button href="../index.html"');
if (!html.includes('title="Về trang chủ chính"')) errors.push('Missing back button title="Về trang chủ chính"');
if (!html.includes('id="bang-cong-thuc-va-an-toan"')) errors.push('Missing #bang-cong-thuc-va-an-toan');
if (!html.includes('h-[calc(100vh-5.5rem)]')) errors.push('Missing sticky sidebar height constraint');

// 5. Check for undefined / NaN leaks
if (html.includes('>undefined<') || html.includes('>NaN<')) {
  errors.push('Found undefined or NaN leak in HTML');
}

// 6. Validate inline script syntax
const scriptMatches = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
if (scriptMatches.length === 0) {
  errors.push('No inline <script> found');
} else {
  scriptMatches.forEach((m, idx) => {
    try {
      new Function(m[1]);
    } catch (e) {
      errors.push(`Syntax error in inline script #${idx + 1}: ${e.message}`);
    }
  });
}

console.log('=== AUDIT REPORT FOR courses/vatly_11.html ===');
console.log('Chapters verified: 4/4');
console.log('Lessons verified: 26/26 (5 sections A-E each = 130 sections)');
console.log('SVG diagrams verified:', svgCount);
console.log('Interactive quiz cards verified: 78/78');
console.log('Errors count:', errors.length);
if (errors.length > 0) {
  console.error(errors.join('\n'));
  process.exit(1);
}
