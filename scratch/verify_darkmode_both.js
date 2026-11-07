const fs = require('fs');
const path = require('path');

const files = ['toan_11.html', 'vatly_11.html', 'vatli_11.html'];
files.forEach(f => {
  const p = path.join(__dirname, '..', 'courses', f);
  const content = fs.readFileSync(p, 'utf8');
  console.log('=== CHECK', f, '===');
  console.log('Size:', (Buffer.byteLength(content, 'utf8') / 1024).toFixed(1), 'KB');
  console.log('Has theme-toggle btn:', content.includes('id="theme-toggle"'));
  console.log('Has theme-icon:', content.includes('id="theme-icon"'));
  console.log('Has toggleDarkMode fn:', content.includes('function toggleDarkMode()'));
  console.log('Has initTheme fn:', content.includes('function initTheme()'));
  console.log('Has immediate head script:', content.includes("localStorage.getItem('theme')"));
  console.log('Has darkMode class config:', content.includes("darkMode: 'class'"));
  console.log('Dark class count:', (content.match(/dark:/g) || []).length);
  console.log('Has undefined leak:', content.includes('undefined'));
  console.log('Has NaN leak:', content.includes('NaN'));
  console.log('Has KaTeX loaded:', content.includes('katex.min.js'));
});
