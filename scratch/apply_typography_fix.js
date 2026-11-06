const fs = require('fs');

const filePaths = [
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html',
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/math_7.html'
];

filePaths.forEach(fp => {
  if (!fs.existsSync(fp)) return;
  let html = fs.readFileSync(fp, 'utf8');

  // 1. Add Google Font Inter if not present
  if (!html.includes('family=Inter')) {
    html = html.replace('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome', 
`<link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome`);
  }

  // 2. Refine CSS for absolute crystal-clear typography, anti-squish, anti-overlap
  const refinedStyle = `<style>
    .glass-header {
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }
    .katex-display {
      margin: 0.6em 0 !important;
      overflow-x: auto;
      overflow-y: hidden;
      padding: 4px 0;
    }
    .katex {
      font-size: 1.05em;
    }
    /* Đảm bảo KaTeX không bao giờ bị ảnh hưởng bởi letter-spacing */
    .katex, .katex * {
      letter-spacing: normal !important;
    }
  
    /* Chống dính chữ tuyệt đối & hiển thị sắc nét tiếng Việt chuẩn typography */
    body {
      font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    p, li, h1, h2, h3, h4 {
      letter-spacing: 0.005em !important;
      word-spacing: normal !important;
      line-height: 1.65 !important;
    }
    .lesson-card p, .lesson-card li {
      line-height: 1.7 !important;
    }
    svg text {
      letter-spacing: normal !important;
      font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
      user-select: none;
    }
  </style>`;

  html = html.replace(/<style>[\s\S]*?<\/style>/, refinedStyle);

  // 3. Perfect SVG for Lesson 15 with generous padding and no possibility of text overlap
  const oldSvg15Regex = /<svg viewBox="0 0 500 1[25]0"[\s\S]*?<\/svg>/;
  const perfectSvg15 = `<svg viewBox="0 0 500 160" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Tam giác 1: Cạnh huyền - Góc nhọn -->
    <g transform="translate(45, 10)">
      <polygon points="15,75 125,75 15,15" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
      <rect x="15" y="65" width="10" height="10" fill="none" stroke="#2563eb" stroke-width="1.5"/>
      <text x="75" y="38" font-size="10.5" font-weight="bold" fill="#e11d48">Cạnh huyền</text>
      <path d="M 110 75 A 15 15 0 0 1 115 65" fill="none" stroke="#10b981" stroke-width="2.5"/>
      <text x="70" y="100" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#1d4ed8">1. Huyền - Góc nhọn</text>
    </g>
    <!-- Vách ngăn cách -->
    <line x1="250" y1="12" x2="250" y2="100" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4,3"/>
    <!-- Tam giác 2: Cạnh huyền - Cạnh góc vuông -->
    <g transform="translate(295, 10)">
      <polygon points="15,75 125,75 15,15" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
      <rect x="15" y="65" width="10" height="10" fill="none" stroke="#059669" stroke-width="1.5"/>
      <text x="75" y="38" font-size="10.5" font-weight="bold" fill="#e11d48">Cạnh huyền</text>
      <line x1="10" y1="45" x2="20" y2="45" stroke="#f59e0b" stroke-width="2.5"/>
      <text x="70" y="100" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#047857">2. Huyền - Cạnh góc vuông</text>
    </g>
    <!-- Hộp ghi chú chân trang có pill nền thanh lịch, tách biệt hoàn toàn không chạm chữ phía trên -->
    <rect x="25" y="124" width="450" height="26" rx="13" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
    <text x="250" y="141" text-anchor="middle" font-size="10.5" font-weight="600" fill="#334155">💡 Áp dụng định lí Py-ta-go suy ra cạnh góc vuông còn lại bằng nhau (đưa về c-c-c)</text>
  </svg>`;

  // Replace inside lesson 15
  const b15Idx = html.indexOf('id="lesson-15"');
  if (b15Idx !== -1) {
    const b16Idx = html.indexOf('id="lesson-16"');
    const lesson15Part = html.slice(b15Idx, b16Idx);
    const updated15Part = lesson15Part.replace(/<svg viewBox="0 0 500 (?:150|120)"[\s\S]*?<\/svg>/, perfectSvg15);
    html = html.slice(0, b15Idx) + updated15Part + html.slice(b16Idx);
  }

  fs.writeFileSync(fp, html, 'utf8');
  console.log('Successfully updated:', fp, '(size:', html.length, ')');
});
