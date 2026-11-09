const fs = require('fs');
const path = require('path');
const vm = require('vm');

const vatliFiles = ['chuyende_vatli_11.html', 'chuyende_vatly_11.html', 'chuyende_ly_11.html'];
const coursesDir = path.join(__dirname, '../courses');

const targetReplacement = `function renderMathOnPage() {
      if (typeof renderMathInElement === 'function') {
        renderMathInElement(document.body, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '\\\\[', right: '\\\\]', display: true },
            { left: '\\\\(', right: '\\\\)', display: false },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      }
    }
    `;

for (const f of vatliFiles) {
  const p = path.join(coursesDir, f);
  if (!fs.existsSync(p)) continue;
  let content = fs.readFileSync(p, 'utf8');

  const startMarker = 'function renderMathOnPage()';
  const endMarker = "window.addEventListener('DOMContentLoaded', renderMathOnPage);";

  const sIdx = content.indexOf(startMarker);
  const eIdx = content.indexOf(endMarker);

  if (sIdx !== -1 && eIdx !== -1 && sIdx < eIdx) {
    content = content.substring(0, sIdx) + targetReplacement + content.substring(eIdx);
    fs.writeFileSync(p, content, 'utf8');
    console.log(`Successfully replaced renderMathOnPage in ${f}`);
  } else {
    console.error(`Markers not found in ${f}: sIdx=${sIdx}, eIdx=${eIdx}`);
  }

  // Validate scripts
  const scripts = content.match(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi) || [];
  scripts.forEach((s, i) => {
    const code = s.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '');
    try {
      new vm.Script(code);
      console.log(`  ${f} Script ${i + 1}: VALID JS`);
    } catch (e) {
      console.error(`  ${f} Script ${i + 1} ERROR:`, e.message);
    }
  });
}

// Make sure chuyende_vatly_11.html and chuyende_ly_11.html are identical byte-for-byte with chuyende_vatli_11.html
const mainContent = fs.readFileSync(path.join(coursesDir, 'chuyende_vatli_11.html'));
fs.writeFileSync(path.join(coursesDir, 'chuyende_vatly_11.html'), mainContent);
fs.writeFileSync(path.join(coursesDir, 'chuyende_ly_11.html'), mainContent);
console.log('All Vật lí 11 aliases synced byte-for-byte!');
