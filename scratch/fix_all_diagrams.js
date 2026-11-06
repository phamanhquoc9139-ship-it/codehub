// scratch/fix_all_diagrams.js
const fs = require('fs');

let diagrams = require('./vatly10_diagrams.js');

// Helper to remove \u20D7
function cleanText(str) {
  if (!str) return '';
  return str.replace(/\u20D7/g, '');
}

// Clean all diagrams of \u20D7
for (const key of Object.keys(diagrams)) {
  diagrams[key] = cleanText(diagrams[key]);
}

// Specially refine Bài 28: Động lượng và Xung lượng của lực
function wrapDiagram(title, sub, svgContent) {
  return `
    <div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-xs">
        <span class="font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
          <i class="fa-solid fa-chart-line"></i> ${title}
        </span>
        <span class="text-slate-400 font-medium">${sub}</span>
      </div>
      <div class="w-full overflow-x-auto flex justify-center py-2">
        ${svgContent.trim()}
      </div>
    </div>
  `;
}

diagrams[28] = wrapDiagram(
  'Vectơ Động lượng p = m·v và Xung lượng của lực F·Δt = Δp',
  'Động lượng chất điểm',
  `<svg viewBox="0 0 720 170" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Mũi tên đỏ cho Lực F -->
      <marker id="arrB28Red" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <path d="M 0 0 L 7 3.5 L 0 7 z" fill="#ef4444" />
      </marker>
      <!-- Mũi tên xanh cho Động lượng p -->
      <marker id="arrB28Cyan" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <path d="M 0 0 L 7 3.5 L 0 7 z" fill="#38bdf8" />
      </marker>
    </defs>

    <!-- Quả bóng (khối lượng m) tại vị trí (180, 85), bán kính 22px -->
    <g transform="translate(0, 0)">
      <!-- Lực F tác dụng đẩy bóng (Mũi tên đỏ từ x=70 đến x=155) -->
      <line x1="70" y1="85" x2="150" y2="85" stroke="#ef4444" stroke-width="4" marker-end="url(#arrB28Red)"/>
      <text x="110" y="70" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">Lực F tác dụng</text>

      <!-- Quả bóng -->
      <circle cx="180" cy="85" r="22" fill="#84cc16" stroke="#bef264" stroke-width="2"/>
      <text x="180" y="90" fill="#0f172a" font-size="13" font-weight="black" text-anchor="middle">m</text>
      <text x="180" y="125" fill="#a3e635" font-size="10" font-weight="bold" text-anchor="middle">Chất điểm</text>

      <!-- Vectơ động lượng p = m·v (Mũi tên xanh từ x=205 đến x=325) -->
      <line x1="205" y1="85" x2="315" y2="85" stroke="#38bdf8" stroke-width="4" marker-end="url(#arrB28Cyan)"/>
      <text x="260" y="70" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Động lượng p = m · v</text>
    </g>

    <!-- Khung định lý xung lượng lực bên phải -->
    <rect x="360" y="25" width="330" height="120" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="525" y="52" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">ĐỊNH LÝ XUNG LƯỢNG LỰC</text>
    <text x="385" y="82" fill="#facc15" font-size="14" font-weight="bold">F · Δt = Δp = p₂ - p₁</text>
    <text x="385" y="108" fill="#cbd5e1" font-size="11">• Lực F tỉ lệ nghịch với thời gian va chạm Δt</text>
    <text x="385" y="128" fill="#34d399" font-size="10">Ứng dụng túi khí ô tô: Kéo dài Δt để giảm chấn thương</text>
  </svg>`
);

// Save cleaned vatly10_diagrams.js
fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/vatly10_diagrams.js', 'module.exports = ' + JSON.stringify(diagrams, null, 2) + ';', 'utf8');

console.log('Successfully cleaned all \\u20D7 combining arrows and refined Bài 28!');
