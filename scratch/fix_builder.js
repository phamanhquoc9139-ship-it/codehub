const fs = require('fs');

let code = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/build_nguvan7_page.js', 'utf8');

// Replace the alert block
const oldAlert = "alert('KẾT QUẢ THI ĐẤU TRƯỜNG TRẠNG NGUYÊN:\\n' +\n            '------------------------------------\\n' +\n            'Điểm số: ' + score + ' / 40 câu đúng (' + Math.round((score / 40) * 10) + '/10 điểm)\\n' +\n            'Danh hiệu đạt được: ' + title + '\\n' +\n            'Hãy cuộn xem lời giải chi tiết cho từng câu hỏi bên dưới!');";

const newAlert = "const resMsg = [\n        'KẾT QUẢ THI ĐẤU TRƯỜNG TRẠNG NGUYÊN:',\n        '------------------------------------',\n        'Điểm số: ' + score + ' / 40 câu đúng (' + Math.round((score / 40) * 10) + '/10 điểm)',\n        'Danh hiệu đạt được: ' + title,\n        'Hãy cuộn xem lời giải chi tiết cho từng câu hỏi bên dưới!'\n      ].join('\\\\n');\n      alert(resMsg);";

if (code.includes(oldAlert)) {
  code = code.replace(oldAlert, newAlert);
  console.log('Replaced oldAlert');
} else {
  // Regex replacement
  code = code.replace(/alert\('KẾT QUẢ THI ĐẤU TRƯỜNG[\s\S]*?bên dưới!'\);/, newAlert);
  console.log('Replaced with regex');
}

// Also ensure updateThemeIcons() is called immediately
code = code.replace(
  "document.addEventListener('DOMContentLoaded', updateThemeIcons);",
  "updateThemeIcons();\n    document.addEventListener('DOMContentLoaded', updateThemeIcons);"
);

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/build_nguvan7_page.js', code, 'utf8');
console.log('Saved build_nguvan7_page.js');
