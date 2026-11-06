const fs = require('fs');

['courses/gdqp_10.html', 'courses/quocphong_10.html', 'courses/vatly_10.html'].forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/class="w-full max-w-\[(\d+)px\] h-auto/g, 'class="w-full max-w-[$1px] min-w-[580px] h-auto');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Added min-w-[580px] to', filePath);
  }
});
