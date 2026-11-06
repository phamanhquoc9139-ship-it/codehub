// Script to fix SVG overlap and enrich all lessons to match the exact 4-box layout of Toan 6 (image 1)
const fs = require('fs');

// 1. CẬP NHẬT SVG TRONG scratch/generate_math7_like_math6.js
let svgFile = fs.readFileSync('scratch/generate_math7_like_math6.js', 'utf8');

// SVG Bài 15 mới: viewBox 500x130, tách bạch rõ ràng, không bao giờ dính chữ
const newSvg15 = `  15: \`<svg viewBox="0 0 500 130" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Tam giác 1: Cạnh huyền - Góc nhọn -->
    <g transform="translate(45, 8)">
      <polygon points="15,75 125,75 15,15" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
      <rect x="15" y="65" width="10" height="10" fill="none" stroke="#2563eb" stroke-width="1.5"/>
      <text x="75" y="38" font-size="10" font-bold fill="#e11d48">Cạnh huyền</text>
      <path d="M 110 75 A 15 15 0 0 1 115 65" fill="none" stroke="#10b981" stroke-width="2.5"/>
      <text x="70" y="96" text-anchor="middle" font-size="11" font-bold fill="#1d4ed8">1. Huyền - Góc nhọn</text>
    </g>
    <!-- Vách ngăn cách -->
    <line x1="250" y1="12" x2="250" y2="92" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4,3"/>
    <!-- Tam giác 2: Cạnh huyền - Cạnh góc vuông -->
    <g transform="translate(295, 8)">
      <polygon points="15,75 125,75 15,15" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
      <rect x="15" y="65" width="10" height="10" fill="none" stroke="#059669" stroke-width="1.5"/>
      <text x="75" y="38" font-size="10" font-bold fill="#e11d48">Cạnh huyền</text>
      <line x1="10" y1="45" x2="20" y2="45" stroke="#f59e0b" stroke-width="2.5"/>
      <text x="70" y="96" text-anchor="middle" font-size="11" font-bold fill="#047857">2. Huyền - Cạnh góc vuông</text>
    </g>
    <!-- Dòng chú thích chân trang hoàn toàn tách biệt ở y=120 -->
    <text x="250" y="120" text-anchor="middle" font-size="10.5" font-medium fill="#475569">Áp dụng định lí Py-ta-go suy ra cạnh góc vuông còn lại bằng nhau (đưa về c-c-c)</text>
  </svg>\`,`;

svgFile = svgFile.replace(/15:\s*`<svg[\s\S]*?<\/svg>`,/, newSvg15);

// Sửa Bài 9 (dời chữ 'c' tránh đè lên dòng chú thích)
const newSvg9 = `  9: \`<svg viewBox="0 0 500 125" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Hai đường thẳng song song và đường thẳng cắt -->
    <line x1="40" y1="38" x2="460" y2="38" stroke="#2563eb" stroke-width="2.5"/><text x="470" y="42" font-size="12" font-bold fill="#2563eb">a</text>
    <line x1="40" y1="80" x2="460" y2="80" stroke="#2563eb" stroke-width="2.5"/><text x="470" y="84" font-size="12" font-bold fill="#2563eb">b</text>
    <line x1="140" y1="12" x2="350" y2="105" stroke="#dc2626" stroke-width="2"/><text x="360" y="105" font-size="12" font-bold fill="#dc2626">c</text>
    <!-- Góc so le trong -->
    <path d="M 185 38 A 15 15 0 0 0 200 45" fill="none" stroke="#059669" stroke-width="2.5"/>
    <path d="M 305 80 A 15 15 0 0 0 290 73" fill="none" stroke="#059669" stroke-width="2.5"/>
    <text x="220" y="30" font-size="11" font-bold fill="#059669">A₃ (so le trong)</text>
    <text x="250" y="94" font-size="11" font-bold fill="#059669">B₁ (so le trong)</text>
    <text x="250" y="120" text-anchor="middle" font-size="10.5" font-bold fill="#1e293b">a // b ⇔ So le trong bằng nhau ⇔ Đồng vị bằng nhau</text>
  </svg>\`,`;

svgFile = svgFile.replace(/9:\s*`<svg[\s\S]*?<\/svg>`,/, newSvg9);

// Sửa Bài 13 (nâng viewBox lên 130 để dòng chú thích thoáng)
const newSvg13 = `  13: \`<svg viewBox="0 0 500 130" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Hai tam giác bằng nhau c-c-c -->
    <g transform="translate(40, 8)">
      <polygon points="20,80 150,80 70,18" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
      <text x="10" y="90" font-size="11" font-bold>B</text><text x="155" y="90" font-size="11" font-bold>C</text><text x="68" y="10" font-size="11" font-bold>A</text>
      <line x1="42" y1="46" x2="48" y2="51" stroke="#ef4444" stroke-width="2"/>
      <line x1="108" y1="46" x2="114" y2="51" stroke="#10b981" stroke-width="2"/>
      <line x1="112" y1="48" x2="118" y2="53" stroke="#10b981" stroke-width="2"/>
      <line x1="82" y1="77" x2="82" y2="83" stroke="#f59e0b" stroke-width="2"/>
    </g>
    <text x="250" y="55" text-anchor="middle" font-size="18" font-black fill="#16a34a">=</text>
    <g transform="translate(280, 8)">
      <polygon points="20,80 150,80 70,18" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
      <text x="10" y="90" font-size="11" font-bold>B'</text><text x="155" y="90" font-size="11" font-bold>C'</text><text x="68" y="10" font-size="11" font-bold>A'</text>
      <line x1="42" y1="46" x2="48" y2="51" stroke="#ef4444" stroke-width="2"/>
      <line x1="108" y1="46" x2="114" y2="51" stroke="#10b981" stroke-width="2"/>
      <line x1="112" y1="48" x2="118" y2="53" stroke="#10b981" stroke-width="2"/>
      <line x1="82" y1="77" x2="82" y2="83" stroke="#f59e0b" stroke-width="2"/>
    </g>
    <text x="250" y="122" text-anchor="middle" font-size="11" font-bold fill="#0f172a">Trường hợp Cạnh - Cạnh - Cạnh (c - c - c): 3 cặp cạnh tương ứng bằng nhau</text>
  </svg>\`,`;

svgFile = svgFile.replace(/13:\s*`<svg[\s\S]*?<\/svg>`,/, newSvg13);

// Sửa Bài 31, 32, 34, 35
svgFile = svgFile.replace(/31:\s*`<svg viewBox="0 0 500 120"[\s\S]*?<\/svg>`,/, `  31: \`<svg viewBox="0 0 500 130" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Quan hệ góc và cạnh đối diện -->
    <polygon points="80,85 410,85 180,18" fill="#f8fafc" stroke="#2563eb" stroke-width="2"/>
    <text x="175" y="12" font-size="12" font-bold>A (Góc tù / Lớn nhất)</text>
    <text x="65" y="95" font-size="11" font-bold>B</text>
    <text x="420" y="95" font-size="11" font-bold>C</text>
    <line x1="80" y1="88" x2="410" y2="88" stroke="#dc2626" stroke-width="3"/>
    <text x="245" y="103" text-anchor="middle" font-size="10.5" font-black fill="#dc2626">Cạnh BC đối diện dài nhất</text>
    <text x="250" y="123" text-anchor="middle" font-size="11" font-bold fill="#1d4ed8">Trong một tam giác: Cạnh đối diện góc lớn hơn là cạnh lớn hơn và ngược lại</text>
  </svg>\`,`);

fs.writeFileSync('scratch/generate_math7_like_math6.js', svgFile, 'utf8');
console.log('✅ Updated scratch/generate_math7_like_math6.js with clean non-overlapping SVGs');
