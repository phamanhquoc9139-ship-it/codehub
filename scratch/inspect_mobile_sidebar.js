const fs = require('fs');
const content = fs.readFileSync('courses/tiengtrung_10.html', 'utf8');

const asideIdx = content.indexOf('<aside');
console.log('aside in tiengtrung_10.html:');
console.log(content.substring(asideIdx, asideIdx + 600));

// Also check mobile sidebar drawer:
const mobileDrawerIdx = content.indexOf('id="mobileSidebar"');
if (mobileDrawerIdx !== -1) {
  console.log('mobileSidebar in tiengtrung_10.html:');
  console.log(content.substring(mobileDrawerIdx - 100, mobileDrawerIdx + 500));
}
