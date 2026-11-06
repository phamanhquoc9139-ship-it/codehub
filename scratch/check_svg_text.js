const fs = require('fs');
const content = fs.readFileSync('scratch/generate_math7_like_math6.js', 'utf8');

// Trích xuất tất cả SVG
const regex = /(\d+):\s*`(<svg[\s\S]*?<\/svg>)`/g;
let match;
const svgs = {};
while ((match = regex.exec(content)) !== null) {
  svgs[match[1]] = match[2];
}

console.log('Total SVGs found:', Object.keys(svgs).length);

// Kiểm tra từng SVG xem có phần tử text nào gần nhau về y không
for (const [id, svg] of Object.entries(svgs)) {
  const textMatches = [...svg.matchAll(/<text[^>]*x=["']([^"']+)["'][^>]*y=["']([^"']+)["'][^>]*>([\s\S]*?)<\/text>/g)];
  // Kiểm tra xem có text nào ở viewBox
  const vbMatch = svg.match(/viewBox=["']0 0 (\d+) (\d+)["']/);
  const vbH = vbMatch ? parseInt(vbMatch[2]) : 120;
  
  // Kiểm tra các text có y sát đáy
  for (const tm of textMatches) {
    const y = parseFloat(tm[2]);
    const txt = tm[3].trim().replace(/<[^>]+>/g, '');
    if (y >= vbH - 10) {
      console.log(`Bài ${id}: Text sát đáy: y=${y}/${vbH} -> "${txt}"`);
    }
  }
}
