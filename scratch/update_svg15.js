const fs = require('fs');
const filePath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/generate_math7_like_math6.js';
let genCode = fs.readFileSync(filePath, 'utf8');

const oldSvg15Regex = /15:\s*`<svg viewBox="0 0 500 130"[\s\S]*?<\/svg>`/;

const newSvg15 = `15: \`<svg viewBox="0 0 500 150" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Tam giác 1: Cạnh huyền - Góc nhọn -->
    <g transform="translate(45, 10)">
      <polygon points="15,75 125,75 15,15" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
      <rect x="15" y="65" width="10" height="10" fill="none" stroke="#2563eb" stroke-width="1.5"/>
      <text x="75" y="38" font-size="10" font-bold fill="#e11d48">Cạnh huyền</text>
      <path d="M 110 75 A 15 15 0 0 1 115 65" fill="none" stroke="#10b981" stroke-width="2.5"/>
      <text x="70" y="98" text-anchor="middle" font-size="11" font-bold fill="#1d4ed8">1. Huyền - Góc nhọn</text>
    </g>
    <!-- Vách ngăn cách -->
    <line x1="250" y1="12" x2="250" y2="95" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4,3"/>
    <!-- Tam giác 2: Cạnh huyền - Cạnh góc vuông -->
    <g transform="translate(295, 10)">
      <polygon points="15,75 125,75 15,15" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
      <rect x="15" y="65" width="10" height="10" fill="none" stroke="#059669" stroke-width="1.5"/>
      <text x="75" y="38" font-size="10" font-bold fill="#e11d48">Cạnh huyền</text>
      <line x1="10" y1="45" x2="20" y2="45" stroke="#f59e0b" stroke-width="2.5"/>
      <text x="70" y="98" text-anchor="middle" font-size="11" font-bold fill="#047857">2. Huyền - Cạnh góc vuông</text>
    </g>
    <!-- Hộp ghi chú chân trang có pill nền thanh lịch -->
    <rect x="35" y="118" width="430" height="24" rx="12" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
    <text x="250" y="134" text-anchor="middle" font-size="10.5" font-medium fill="#475569">Áp dụng định lí Py-ta-go suy ra cạnh góc vuông còn lại bằng nhau (đưa về c-c-c)</text>
  </svg>\``;

if (oldSvg15Regex.test(genCode)) {
  genCode = genCode.replace(oldSvg15Regex, newSvg15);
  fs.writeFileSync(filePath, genCode, 'utf8');
  console.log("Successfully updated SVG for Lesson 15!");
} else {
  console.log("Old SVG regex did not match!");
}
