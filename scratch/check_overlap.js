const fs = require('fs');
const content = fs.readFileSync('scratch/generate_math7_like_math6.js', 'utf8');

const regex = /(\d+):\s*`(<svg[\s\S]*?<\/svg>)`/g;
let match;
while ((match = regex.exec(content)) !== null) {
  const id = match[1];
  const svg = match[2];
  
  // Kiểm tra xem có group transform không
  const groupMatches = [...svg.matchAll(/<g\s+transform=["']translate\((\d+),\s*(\d+)\)["']>([\s\S]*?)<\/g>/g)];
  const globalTexts = [...svg.matchAll(/<text\s+([^>]*?)>([\s\S]*?)<\/text>/g)];
  
  // Tính tọa độ tuyệt đối của tất cả text
  const allTexts = [];
  
  // Global texts (ngoài group)
  for (const gt of globalTexts) {
    const rawAttrs = gt[1];
    const textContent = gt[2].trim().replace(/<[^>]+>/g, '');
    const xM = rawAttrs.match(/x=["'](\d+(?:\.\d+)?)["']/);
    const yM = rawAttrs.match(/y=["'](\d+(?:\.\d+)?)["']/);
    if (xM && yM) {
      allTexts.push({
        text: textContent,
        x: parseFloat(xM[1]),
        y: parseFloat(yM[1]),
        raw: gt[0]
      });
    }
  }

  // So sánh các cặp text xem có bị đè nhau về cả x và y không
  for (let i = 0; i < allTexts.length; i++) {
    for (let j = i + 1; j < allTexts.length; j++) {
      const t1 = allTexts[i];
      const t2 = allTexts[j];
      const dy = Math.abs(t1.y - t2.y);
      if (dy < 12) {
        console.log(`[Bài ${id}] Nghi vấn trùng y (${dy.toFixed(1)}px):`);
        console.log(`   1: y=${t1.y}, x=${t1.x} -> "${t1.text}"`);
        console.log(`   2: y=${t2.y}, x=${t2.x} -> "${t2.text}"`);
      }
    }
  }
}
