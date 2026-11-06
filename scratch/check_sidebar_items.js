const fs = require('fs');

const tt = fs.readFileSync('courses/tiengtrung_10.html', 'utf8');

const navStart = tt.indexOf('id="sidebar-nav"');
const navEnd = tt.indexOf('</nav>', navStart);
const navHtml = tt.substring(navStart, navEnd);

const links = navHtml.match(/href="([^"]+)"/g);
console.log('Links in sidebar-nav:', links);
console.log('Count:', links ? links.length : 0);
