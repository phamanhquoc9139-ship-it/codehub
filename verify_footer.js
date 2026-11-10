const fs = require('fs');
const vm = require('vm');
const path = require('path');

const indexPath = path.join(__dirname, 'cs-learning-platform', 'index.html');
const html = fs.readFileSync(indexPath, 'utf8');

const footerStart = html.indexOf('<footer');
const footerEnd = html.indexOf('</footer>', footerStart) + '</footer>'.length;
if (footerStart === -1 || footerEnd === -1) {
  console.error('Footer element not found!');
  process.exit(1);
}

const footer = html.substring(footerStart, footerEnd);
console.log('Footer byte length:', footer.length);

let errors = 0;

// 1. Required content checks
const requiredTexts = [
  'Nền tảng học tập số tích hợp AI dành cho học sinh từ lớp 1 đến lớp 12.',
  'Khám phá',
  'Tiểu học',
  'THCS',
  'THPT',
  'Tin học &amp; AI',
  'Hỗ trợ',
  'Giới thiệu',
  'Hướng dẫn sử dụng',
  'Chính sách bảo mật',
  'Điều khoản sử dụng',
  'Liên hệ',
  'Email hỗ trợ',
  'Gửi phản hồi và báo lỗi',
  'Cộng đồng',
  'CodeHub. All rights reserved.'
];
for (const txt of requiredTexts) {
  if (!footer.includes(txt)) {
    console.error('Missing required footer text:', txt);
    errors++;
  }
}

// 2. Forbidden fake links/contacts checks
const forbidden = ['href="#"', 'support@codehub.com', 'Facebook', 'facebook.com', 'tel:', 'mailto:'];
for (const bad of forbidden) {
  if (footer.includes(bad)) {
    console.error('Forbidden fake contact/link found in footer:', bad);
    errors++;
  }
}

// 3. Responsive grid check (1 col mobile, 2 cols tablet, 4 cols desktop)
if (!footer.includes('grid-cols-1 sm:grid-cols-2 lg:grid-cols-4')) {
  console.error('Missing responsive 1/2/4 column grid classes!');
  errors++;
}

// 4. Verify all href="#..." inside footer point to real existing IDs in index.html
const hrefMatches = [...footer.matchAll(/href="#([^"]+)"/g)];
for (const m of hrefMatches) {
  const targetId = m[1];
  if (!html.includes(`id="${targetId}"`)) {
    console.error('Broken anchor link in footer: #' + targetId);
    errors++;
  } else {
    console.log('Verified real target anchor: #' + targetId);
  }
}

// 5. Verify filterCoursesBy modes called in footer exist in index.html
for (const mode of ['grade-tieuhoc', 'grade-thcs', 'cat-tinhoc']) {
  if (!html.includes(`'${mode}'`)) {
    console.error('Missing filter mode in index.html:', mode);
    errors++;
  } else {
    console.log('Verified filter mode exists:', mode);
  }
}

// 6. Check HTML tag balance inside footer
for (const tag of ['div', 'ul', 'li', 'nav', 'a']) {
  const opens = (footer.match(new RegExp(`<${tag}(\\s|>)`, 'gi')) || []).length;
  const closes = (footer.match(new RegExp(`</${tag}>`, 'gi')) || []).length;
  if (opens !== closes) {
    console.error(`Tag balance mismatch for <${tag}>: open=${opens}, close=${closes}`);
    errors++;
  }
}

// 7. Validate inline JS syntax inside footer
const scriptMatch = footer.match(/<script>([\s\S]*?)<\/script>/);
if (!scriptMatch) {
  console.error('Missing copyright year script in footer!');
  errors++;
} else {
  try {
    new vm.Script(scriptMatch[1]);
    console.log('Footer inline JS syntax valid.');
  } catch (e) {
    console.error('Footer inline JS syntax error:', e);
    errors++;
  }
}

// 8. Verify existing features of index.html remained untouched
const preserveChecks = [
  ['stat-total-courses 281', html.includes('id="stat-total-courses">281</div>')],
  ['Tin & AI (51)', html.includes('Tin & AI (51)')],
  ['#presentation-studio', html.includes('id="presentation-studio"')],
  ['#playground', html.includes('id="playground"')],
  ['auth-ui.js', html.includes('scripts/auth-ui.js')],
  ['pptx-presenter.js', html.includes('scripts/pptx-presenter.js')]
];
for (const [label, ok] of preserveChecks) {
  if (!ok) {
    console.error('Existing feature damaged/missing:', label);
    errors++;
  } else {
    console.log('Preserved existing feature:', label);
  }
}

if (errors === 0) {
  console.log('\nALL FOOTER CHECKS PASSED!');
} else {
  console.error('\nFailed with', errors, 'errors.');
  process.exit(1);
}
