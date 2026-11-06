const fs = require('fs');

['courses/ktpl_10.html', 'courses/gdktpl_10.html'].forEach(path => {
  if (fs.existsSync(path)) {
    const c = fs.readFileSync(path, 'utf8');
    const idx = c.indexOf('id="bai-19"');
    console.log(`=== ${path} (size: ${c.length}) ===`);
    console.log(`bai-19 index: ${idx}`);
    if (idx !== -1) {
      console.log(c.substring(idx, idx + 1000));
    }
    console.log('Sidebar truncate in ' + path + ':', (c.match(/truncate/g) || []).length);
    console.log('|---| count in ' + path + ':', (c.match(/\|---\|/g) || []).length);
    console.log('Raw ** count in ' + path + ':', (c.match(/\*\*[^*]+\*\*/g) || []).length);
  }
});
