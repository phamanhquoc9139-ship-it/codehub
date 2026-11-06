// scratch/add_all_34_diagrams.js
const fs = require('fs');

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

// Load existing 21 diagrams
const diagrams = require('./vatly10_diagrams.js');

// Bài 5: Vectơ Vận tốc tức thời tiếp tuyến quỹ đạo
diagrams[5] = wrapDiagram(
  'Vectơ vận tốc tức thời v⃗ có phương tiếp tuyến với quỹ đạo cong',
  'Động học: Vận tốc tức thời',
  `<svg viewBox="0 0 720 170" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrB5" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#10b981" />
      </marker>
    </defs>
    <!-- Quỹ đạo cong S -->
    <path d="M 80 130 C 200 30, 340 160, 480 50 S 620 120, 660 60" fill="none" stroke="#475569" stroke-width="2.5" stroke-dasharray="5,4"/>
    <text x="670" y="65" fill="#64748b" font-size="11">Quỹ đạo (C)</text>
    <!-- Điểm M1 -->
    <circle cx="210" cy="85" r="5" fill="#38bdf8"/>
    <line x1="210" y1="85" x2="280" y2="105" stroke="#10b981" stroke-width="3" marker-end="url(#arrB5)"/>
    <text x="210" y="75" fill="#38bdf8" font-size="11" font-weight="bold">M₁</text>
    <text x="270" y="125" fill="#34d399" font-size="11" font-weight="bold">v⃗₁</text>
    <!-- Điểm M2 (đỉnh dốc) -->
    <circle cx="370" cy="115" r="5" fill="#38bdf8"/>
    <line x1="370" y1="115" x2="445" y2="70" stroke="#10b981" stroke-width="3" marker-end="url(#arrB5)"/>
    <text x="360" y="135" fill="#38bdf8" font-size="11" font-weight="bold">M₂</text>
    <text x="440" y="60" fill="#34d399" font-size="11" font-weight="bold">v⃗₂</text>
    <text x="360" y="155" fill="#cbd5e1" font-size="10" text-anchor="middle">Vectơ vận tốc tức thời v⃗ = Δd⃗ / Δt khi Δt ⟶ 0 có phương trùng tiếp tuyến quỹ đạo và chiều theo chiều chuyển động</text>
  </svg>`
);

// Bài 9: Phân loại Nhanh dần đều vs Chậm dần đều
diagrams[9] = wrapDiagram(
  'So sánh Vectơ gia tốc a⃗ và vận tốc v⃗: Chuyển động nhanh dần vs chậm dần',
  'Chuyển động biến đổi đều',
  `<svg viewBox="0 0 720 160" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrB9v" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#10b981" />
      </marker>
      <marker id="arrB9a" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#38bdf8" />
      </marker>
      <marker id="arrB9c" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#ef4444" />
      </marker>
    </defs>
    <!-- Bên trái: Nhanh dần đều -->
    <g transform="translate(20, 15)">
      <rect width="325" height="130" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
      <text x="162" y="25" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">1. NHANH DẦN ĐỀU (a · v > 0)</text>
      <!-- Xe -->
      <rect x="70" y="55" width="60" height="30" rx="4" fill="#047857"/>
      <circle cx="85" cy="85" r="6" fill="#64748b"/>
      <circle cx="115" cy="85" r="6" fill="#64748b"/>
      <!-- Vectơ v -->
      <line x1="130" y1="65" x2="200" y2="65" stroke="#10b981" stroke-width="3" marker-end="url(#arrB9v)"/>
      <text x="195" y="58" fill="#34d399" font-size="10" font-weight="bold">v⃗</text>
      <!-- Vectơ a cùng chiều -->
      <line x1="130" y1="80" x2="230" y2="80" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrB9a)"/>
      <text x="225" y="73" fill="#38bdf8" font-size="10" font-weight="bold">a⃗ (Cùng chiều)</text>
      <text x="162" y="115" fill="#cbd5e1" font-size="10" text-anchor="middle">a⃗ ↑↑ v⃗ ⟹ Tốc độ tăng đều theo thời gian</text>
    </g>
    <!-- Bên phải: Chậm dần đều -->
    <g transform="translate(375, 15)">
      <rect width="325" height="130" rx="12" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
      <text x="162" y="25" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">2. CHẬM DẦN ĐỀU (a · v < 0)</text>
      <!-- Xe -->
      <rect x="190" y="55" width="60" height="30" rx="4" fill="#881337"/>
      <circle cx="205" cy="85" r="6" fill="#64748b"/>
      <circle cx="235" cy="85" r="6" fill="#64748b"/>
      <!-- Vectơ v sang phải -->
      <line x1="250" y1="65" x2="310" y2="65" stroke="#10b981" stroke-width="3" marker-end="url(#arrB9v)"/>
      <text x="300" y="58" fill="#34d399" font-size="10" font-weight="bold">v⃗</text>
      <!-- Vectơ a ngược chiều (sang trái) -->
      <line x1="190" y1="80" x2="110" y2="80" stroke="#ef4444" stroke-width="3" marker-end="url(#arrB9c)"/>
      <text x="110" y="73" fill="#f87171" font-size="10" font-weight="bold">a⃗ (Ngược chiều)</text>
      <text x="162" y="115" fill="#cbd5e1" font-size="10" text-anchor="middle">a⃗ ↑↓ v⃗ ⟹ Tốc độ giảm đều theo thời gian</text>
    </g>
  </svg>`
);

// Bài 11: Thí nghiệm đo gia tốc rơi tự do
diagrams[11] = wrapDiagram(
  'Bố trí thí nghiệm đo gia tốc rơi tự do g bằng cổng quang điện kép',
  'Thực hành thí nghiệm đo',
  `<svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <!-- Giá đỡ thẳng đứng có thước mm -->
    <rect x="140" y="20" width="16" height="145" fill="#334155" stroke="#64748b"/>
    <line x1="140" y1="35" x2="156" y2="35" stroke="#94a3b8"/>
    <line x1="140" y1="75" x2="156" y2="75" stroke="#94a3b8"/>
    <line x1="140" y1="125" x2="156" y2="125" stroke="#94a3b8"/>
    <!-- Nam châm điện giữ bi -->
    <rect x="180" y="25" width="25" height="15" rx="3" fill="#ef4444"/>
    <circle cx="192" cy="46" r="6" fill="#cbd5e1"/>
    <text x="215" y="37" fill="#f87171" font-size="10">Nam châm điện</text>
    <!-- Cổng quang E1 -->
    <rect x="175" y="70" width="35" height="10" rx="2" fill="#3b82f6"/>
    <line x1="175" y1="75" x2="210" y2="75" stroke="#ef4444" stroke-dasharray="2,2"/>
    <text x="220" y="78" fill="#38bdf8" font-size="10">Cổng quang 1 (s₁)</text>
    <!-- Cổng quang E2 -->
    <rect x="175" y="130" width="35" height="10" rx="2" fill="#3b82f6"/>
    <line x1="175" y1="135" x2="210" y2="135" stroke="#ef4444" stroke-dasharray="2,2"/>
    <text x="220" y="138" fill="#38bdf8" font-size="10">Cổng quang 2 (s₂)</text>
    <!-- Đồng hồ hiện số bên phải -->
    <rect x="380" y="30" width="280" height="120" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="520" y="55" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">ĐỒNG HỒ ĐO THỜI GIAN HIỆN SỐ</text>
    <rect x="420" y="65" width="200" height="35" rx="6" fill="#0f172a" stroke="#334155"/>
    <text x="520" y="90" fill="#34d399" font-family="monospace" font-size="20" font-weight="bold" text-anchor="middle">0.2857 s</text>
    <text x="520" y="125" fill="#cbd5e1" font-size="11" text-anchor="middle">Xác định: g = 2h / t² ⟹ Đo lặp & tính sai số</text>
  </svg>`
);

// Bài 14: Hiện tượng Quán tính
diagrams[14] = wrapDiagram(
  'Định luật I Newton: Quán tính – xu hướng bảo toàn trạng thái chuyển động',
  'Hiện tượng phanh gấp',
  `<svg viewBox="0 0 720 160" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrB14" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#f87171" />
      </marker>
    </defs>
    <!-- Sàn xe phanh gấp -->
    <rect x="80" y="100" width="250" height="15" rx="3" fill="#475569"/>
    <!-- Khối hộp trượt về trước -->
    <rect x="150" y="60" width="50" height="40" rx="4" fill="#3b82f6" stroke="#93c5fd" stroke-width="2"/>
    <line x1="200" y1="80" x2="270" y2="80" stroke="#f87171" stroke-width="3" marker-end="url(#arrB14)"/>
    <text x="215" y="70" fill="#f87171" font-size="11" font-weight="bold">Xu hướng lao về trước</text>
    <text x="205" y="135" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">Xe phanh gấp: Vật giữ vận tốc cũ do quán tính</text>
    <!-- Khung nguyên lý bên phải -->
    <rect x="380" y="25" width="300" height="115" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="530" y="50" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">ĐỊNH LUẬT I NEWTON</text>
    <text x="400" y="75" fill="#cbd5e1" font-size="11">• F⃗_hl = 0: Đứng yên tiếp tục đứng yên</text>
    <text x="400" y="100" fill="#cbd5e1" font-size="11">• Đang chuyển động ⟹ Chuyển động thẳng đều</text>
    <text x="400" y="125" fill="#facc15" font-size="10">Khối lượng m đặc trưng cho mức quán tính của vật</text>
  </svg>`
);

// Bài 17: Trọng lực và Lực căng dây
diagrams[17] = wrapDiagram(
  'Cân bằng của vật treo: Trọng lực P⃗ và Lực căng dây T⃗',
  'Tương tác lực cơ học',
  `<svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrB17" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#38bdf8" />
      </marker>
      <marker id="arrB17p" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#f87171" />
      </marker>
    </defs>
    <!-- Trần treo -->
    <line x1="160" y1="20" x2="260" y2="20" stroke="#64748b" stroke-width="3"/>
    <line x1="210" y1="20" x2="210" y2="75" stroke="#94a3b8" stroke-width="2"/>
    <!-- Vật m -->
    <circle cx="210" cy="95" r="20" fill="#3b82f6"/>
    <text x="210" y="100" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">m</text>
    <!-- Lực căng dây T hướng lên -->
    <line x1="210" y1="75" x2="210" y2="28" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrB17)"/>
    <text x="220" y="50" fill="#38bdf8" font-size="12" font-weight="bold">T⃗ (Lực căng)</text>
    <!-- Trọng lực P hướng xuống -->
    <line x1="210" y1="115" x2="210" y2="165" stroke="#f87171" stroke-width="3" marker-end="url(#arrB17p)"/>
    <text x="220" y="150" fill="#f87171" font-size="12" font-weight="bold">P⃗ = mg⃗</text>
    <!-- Khung định luật cân bằng -->
    <rect x="360" y="30" width="310" height="120" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="515" y="55" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">ĐIỀU KIỆN CÂN BẰNG ĐIỂM</text>
    <text x="380" y="82" fill="#cbd5e1" font-size="11">T⃗ + P⃗ = 0 ⟹ T⃗ = - P⃗</text>
    <text x="380" y="107" fill="#cbd5e1" font-size="11">Độ lớn: T = P = m · g</text>
    <text x="380" y="132" fill="#facc15" font-size="10">Dây không dãn, khối lượng dây không đáng kể</text>
  </svg>`
);

// Bài 19: Lực cản và Lực nâng khí động học
diagrams[19] = wrapDiagram(
  'Biên dạng khí động học cánh máy bay: Nguyên lý sinh lực nâng F⃗_nâng',
  'Chất lưu & Khí động lực học',
  `<svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrB19" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#10b981" />
      </marker>
    </defs>
    <!-- Dòng khí trên (nhanh, áp suất p1 thấp) -->
    <path d="M 120 40 Q 250 20 380 60" fill="none" stroke="#38bdf8" stroke-width="2"/>
    <text x="250" y="35" fill="#38bdf8" font-size="10">Dòng khí trên: Vận tốc lớn ⟹ Áp suất thấp (p₁)</text>
    <!-- Mặt cánh cong trên, phẳng dưới -->
    <path d="M 140 100 Q 240 50 360 95 L 360 105 Q 240 100 140 100 Z" fill="#475569" stroke="#94a3b8" stroke-width="2"/>
    <!-- Dòng khí dưới (chậm, áp suất p2 cao) -->
    <path d="M 120 120 Q 250 120 380 120" fill="none" stroke="#38bdf8" stroke-width="2"/>
    <text x="250" y="135" fill="#38bdf8" font-size="10">Dòng khí dưới: Vận tốc nhỏ ⟹ Áp suất cao (p₂)</text>
    <!-- Lực nâng thẳng đứng lên F_nang -->
    <line x1="260" y1="80" x2="260" y2="15" stroke="#10b981" stroke-width="3.5" marker-end="url(#arrB19)"/>
    <text x="270" y="30" fill="#34d399" font-size="12" font-weight="black">LỰC NÂNG F⃗_nâng</text>
    <!-- Khung giải thích bên phải -->
    <rect x="420" y="30" width="260" height="120" rx="12" fill="#1e293b" stroke="#475569"/>
    <text x="550" y="55" fill="#facc15" font-size="11" font-weight="bold" text-anchor="middle">Định luật Bernoulli:</text>
    <text x="440" y="82" fill="#cbd5e1" font-size="10">p₂ > p₁ ⟹ Chênh lệch áp suất</text>
    <text x="440" y="105" fill="#34d399" font-size="11" font-weight="bold">F_nâng = (p₂ - p₁) · S</text>
    <text x="440" y="130" fill="#94a3b8" font-size="10">Giúp máy bay duy trì độ cao trên không</text>
  </svg>`
);

// Bài 20: Khối lượng riêng & Trọng lượng riêng
diagrams[20] = wrapDiagram(
  'Xác định khối lượng riêng: Đo khối lượng m và thể tích V',
  'Đại lượng cơ bản ρ = m / V',
  `<svg viewBox="0 0 720 160" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <!-- Cân điện tử bên trái đo khối lượng m -->
    <g transform="translate(60, 25)">
      <rect x="20" y="70" width="120" height="40" rx="6" fill="#1e293b" stroke="#64748b"/>
      <rect x="45" y="80" width="70" height="20" rx="3" fill="#0f172a"/>
      <text x="80" y="95" fill="#34d399" font-family="monospace" font-size="13" font-weight="bold" text-anchor="middle">245.0 g</text>
      <!-- Vật đặt trên đĩa cân -->
      <rect x="55" y="35" width="50" height="35" rx="4" fill="#f59e0b"/>
      <text x="80" y="58" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">Vật m</text>
      <text x="80" y="125" fill="#cbd5e1" font-size="10" text-anchor="middle">1. Cân khối lượng m</text>
    </g>
    <!-- Ống đong đo thể tích V -->
    <g transform="translate(260, 20)">
      <rect x="40" y="15" width="45" height="105" rx="3" fill="#0284c7" fill-opacity="0.3" stroke="#0284c7" stroke-width="2"/>
      <line x1="40" y1="45" x2="60" y2="45" stroke="#38bdf8"/>
      <line x1="40" y1="75" x2="60" y2="75" stroke="#38bdf8"/>
      <text x="95" y="50" fill="#38bdf8" font-size="10">V₂ = 85 ml</text>
      <text x="95" y="80" fill="#94a3b8" font-size="10">V₁ = 50 ml</text>
      <text x="62" y="135" fill="#cbd5e1" font-size="10" text-anchor="middle">2. Đo thể tích V = V₂ - V₁</text>
    </g>
    <!-- Khung công thức bên phải -->
    <rect x="460" y="25" width="220" height="110" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="570" y="50" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">KHỐI LƯỢNG RIÊNG</text>
    <text x="480" y="78" fill="#facc15" font-size="12" font-weight="bold">ρ = m / V (kg/m³)</text>
    <text x="480" y="103" fill="#cbd5e1" font-size="11">Trọng lượng riêng: d = ρ·g</text>
    <text x="480" y="122" fill="#94a3b8" font-size="10">Nước nguyên chất: 1000 kg/m³</text>
  </svg>`
);

// Bài 22: Ngẫu lực
diagrams[22] = wrapDiagram(
  'Ngẫu lực: Cặp lực song song, ngược chiều, cùng độ lớn làm quay vật',
  'Mô hình vô lăng & tay lái xe',
  `<svg viewBox="0 0 720 170" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrB22" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#38bdf8" />
      </marker>
    </defs>
    <!-- Vòng tròn vô lăng -->
    <circle cx="240" cy="85" r="55" fill="none" stroke="#475569" stroke-width="8"/>
    <circle cx="240" cy="85" r="8" fill="#38bdf8"/>
    <!-- Lực F1 bên trái hướng lên -->
    <line x1="185" y1="85" x2="185" y2="25" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrB22)"/>
    <text x="165" y="35" fill="#38bdf8" font-size="11" font-weight="bold">F⃗₁</text>
    <!-- Lực F2 bên phải hướng xuống -->
    <line x1="295" y1="85" x2="295" y2="145" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrB22)"/>
    <text x="305" y="140" fill="#38bdf8" font-size="11" font-weight="bold">F⃗₂</text>
    <!-- Khoảng cách d giữa 2 giá lực -->
    <line x1="185" y1="85" x2="295" y2="85" stroke="#f59e0b" stroke-dasharray="3,3"/>
    <text x="240" y="78" fill="#fbbf24" font-size="10" text-anchor="middle">d (cánh tay đòn ngẫu lực)</text>
    <!-- Khung chú thích bên phải -->
    <rect x="390" y="25" width="280" height="120" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="530" y="50" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">MOMENT CỦA NGẪU LỰC</text>
    <text x="410" y="80" fill="#facc15" font-size="13" font-weight="bold">M = F · d</text>
    <text x="410" y="105" fill="#cbd5e1" font-size="10">• F = F₁ = F₂ là độ lớn mỗi lực</text>
    <text x="410" y="125" fill="#cbd5e1" font-size="10">• d là khoảng cách giữa hai giá của hai lực</text>
  </svg>`
);

// Bài 24: Sơ đồ dòng năng lượng & Hiệu suất
diagrams[24] = wrapDiagram(
  'Sơ đồ chuyển hóa năng lượng & Hiệu suất cơ học H',
  'Định luật bảo toàn & Chuyển hóa năng lượng',
  `<svg viewBox="0 0 720 170" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrB24g" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#10b981" />
      </marker>
      <marker id="arrB24r" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#ef4444" />
      </marker>
      <marker id="arrB24b" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#38bdf8" />
      </marker>
    </defs>
    <!-- Khối thiết bị ở giữa -->
    <rect x="260" y="50" width="160" height="70" rx="10" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
    <text x="340" y="80" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">HỆ THỐNG / MÁY</text>
    <text x="340" y="100" fill="#94a3b8" font-size="10" text-anchor="middle">(Động cơ, Tuabin...)</text>
    <!-- Năng lượng toàn phần vào bên trái -->
    <line x1="60" y1="85" x2="250" y2="85" stroke="#38bdf8" stroke-width="6" marker-end="url(#arrB24b)"/>
    <text x="140" y="72" fill="#38bdf8" font-size="11" font-weight="bold">W_toàn phần (100%)</text>
    <!-- Năng lượng có ích ra bên phải -->
    <line x1="420" y1="70" x2="620" y2="70" stroke="#10b981" stroke-width="4.5" marker-end="url(#arrB24g)"/>
    <text x="520" y="58" fill="#34d399" font-size="11" font-weight="bold">W_có ích (Công A)</text>
    <!-- Năng lượng hao phí rẽ xuống dưới -->
    <path d="M 340 120 L 340 150 L 520 150" fill="none" stroke="#ef4444" stroke-width="3" marker-end="url(#arrB24r)"/>
    <text x="420" y="142" fill="#f87171" font-size="10" font-weight="bold">W_hao phí (Tỏa nhiệt, ma sát)</text>
    <!-- Công thức hiệu suất -->
    <text x="360" y="25" fill="#facc15" font-size="12" font-weight="bold" text-anchor="middle">HIỆU SUẤT: H = (A_có ích / A_toàn phần) × 100%</text>
  </svg>`
);

// Bài 25: Động năng
diagrams[25] = wrapDiagram(
  'Đồ thị động năng W_đ theo bình phương vận tốc v²',
  'W_đ = ½ m · v²',
  `<svg viewBox="0 0 720 160" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrB25" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#94a3b8" />
      </marker>
    </defs>
    <!-- Trục tọa độ -->
    <line x1="90" y1="130" x2="380" y2="130" stroke="#64748b" stroke-width="2" marker-end="url(#arrB25)"/>
    <text x="390" y="135" fill="#94a3b8" font-size="10">v (m/s)</text>
    <line x1="90" y1="130" x2="90" y2="20" stroke="#64748b" stroke-width="2" marker-end="url(#arrB25)"/>
    <text x="85" y="15" fill="#94a3b8" font-size="10">W_đ (J)</text>
    <!-- Đường Parabol bậc 2 -->
    <path d="M 90 130 Q 230 130 350 30" fill="none" stroke="#38bdf8" stroke-width="3"/>
    <text x="240" y="60" fill="#38bdf8" font-size="12" font-weight="bold">W_đ = ½ m · v²</text>
    <!-- Khung định lý động năng bên phải -->
    <rect x="420" y="25" width="270" height="115" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="555" y="50" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">ĐỊNH LÝ BIẾN THIÊN ĐỘNG NĂNG</text>
    <text x="440" y="80" fill="#facc15" font-size="12" font-weight="bold">A = ΔW_đ = ½mv₂² - ½mv₁²</text>
    <text x="440" y="105" fill="#cbd5e1" font-size="10">• Ngoại lực sinh công dương ⟹ Động năng tăng</text>
    <text x="440" y="125" fill="#cbd5e1" font-size="10">• Ngoại lực sinh công âm ⟹ Động năng giảm</text>
  </svg>`
);

// Bài 26: Thế năng trọng trường
diagrams[26] = wrapDiagram(
  'Thế năng trọng trường W_t = mgz phụ thuộc vào việc chọn mốc thế năng',
  'Tương tác hấp dẫn',
  `<svg viewBox="0 0 720 170" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <!-- Mặt đất -->
    <line x1="80" y1="140" x2="400" y2="140" stroke="#64748b" stroke-width="3"/>
    <text x="410" y="145" fill="#64748b" font-size="10">Mặt đất (z = 0)</text>
    <!-- Mặt bàn ở độ cao h1 -->
    <rect x="120" y="90" width="120" height="10" rx="2" fill="#475569"/>
    <line x1="140" y1="100" x2="140" y2="140" stroke="#475569" stroke-width="2"/>
    <line x1="220" y1="100" x2="220" y2="140" stroke="#475569" stroke-width="2"/>
    <text x="250" y="98" fill="#fbbf24" font-size="10">Mặt bàn (Mốc thế năng chọn)</text>
    <!-- Vật ở độ cao z -->
    <circle cx="180" cy="45" r="12" fill="#ef4444"/>
    <text x="180" y="50" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">m</text>
    <line x1="180" y1="57" x2="180" y2="90" stroke="#38bdf8" stroke-dasharray="3,3"/>
    <text x="190" y="75" fill="#38bdf8" font-size="11">Độ cao z</text>
    <!-- Khung so sánh bên phải -->
    <rect x="440" y="25" width="250" height="120" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="565" y="50" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">ĐẶC ĐIỂM THẾ NĂNG</text>
    <text x="460" y="78" fill="#facc15" font-size="12" font-weight="bold">W_t = m · g · z</text>
    <text x="460" y="103" fill="#cbd5e1" font-size="10">• Trên mốc: z > 0 ⟹ W_t > 0</text>
    <text x="460" y="122" fill="#cbd5e1" font-size="10">• Dưới mốc: z < 0 ⟹ W_t < 0</text>
    <text x="460" y="138" fill="#94a3b8" font-size="9">Độ giảm thế năng = Công của trọng lực</text>
  </svg>`
);

// Bài 28: Động lượng và Xung lượng của lực
diagrams[28] = wrapDiagram(
  'Vectơ Động lượng p⃗ = m·v⃗ và Xung lượng của lực F⃗·Δt = Δp⃗',
  'Động lượng chất điểm',
  `<svg viewBox="0 0 720 160" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrB28" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#38bdf8" />
      </marker>
    </defs>
    <!-- Quả bóng tennis bị vợt đập -->
    <g transform="translate(100, 30)">
      <circle cx="80" cy="55" r="20" fill="#a3e635"/>
      <text x="80" y="60" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">m</text>
      <!-- Lực đập F -->
      <line x1="30" y1="55" x2="70" y2="55" stroke="#ef4444" stroke-width="4" marker-end="url(#arrB28)"/>
      <text x="40" y="42" fill="#f87171" font-size="12" font-weight="bold">F⃗ tác dụng</text>
      <!-- Động lượng p = mv -->
      <line x1="100" y1="55" x2="200" y2="55" stroke="#38bdf8" stroke-width="4" marker-end="url(#arrB28)"/>
      <text x="145" y="42" fill="#38bdf8" font-size="12" font-weight="bold">p⃗ = m · v⃗</text>
    </g>
    <!-- Khung định luật biến thiên động lượng -->
    <rect x="380" y="25" width="300" height="115" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="530" y="50" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">ĐỊNH LÝ XUNG LƯỢNG LỰC</text>
    <text x="400" y="80" fill="#facc15" font-size="13" font-weight="bold">F⃗ · Δt = Δp⃗ = p⃗₂ - p⃗₁</text>
    <text x="400" y="105" fill="#cbd5e1" font-size="10">• Lực F càng lớn khi thời gian va chạm Δt càng ngắn</text>
    <text x="400" y="125" fill="#34d399" font-size="10">Ứng dụng túi khí xe hơi: Kéo dài Δt để giảm lực F</text>
  </svg>`
);

// Bài 32: Lực hướng tâm - Xe vào khúc cua nghiêng
diagrams[32] = wrapDiagram(
  'Lực hướng tâm giữ xe chuyển động tròn: Phân tích lực tại khúc cua nghiêng',
  'Ứng dụng lực hướng tâm',
  `<svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrB32" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#ef4444" />
      </marker>
    </defs>
    <!-- Mặt đường nghiêng góc theta -->
    <polygon points="100,150 380,150 380,60" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
    <text x="160" y="142" fill="#f59e0b" font-size="12" font-weight="bold">θ</text>
    <!-- Ô tô trên đường nghiêng -->
    <g transform="translate(260, 100) rotate(-18)">
      <rect x="-25" y="-15" width="50" height="30" rx="5" fill="#3b82f6"/>
      <circle cx="0" cy="0" r="3" fill="#ffffff"/>
      <!-- Phản lực N vuông góc mặt đường -->
      <line x1="0" y1="0" x2="0" y2="-60" stroke="#34d399" stroke-width="2.5"/>
      <text x="6" y="-50" fill="#34d399" font-size="11" font-weight="bold">N⃗</text>
    </g>
    <!-- Trọng lực P -->
    <line x1="260" y1="100" x2="260" y2="160" stroke="#94a3b8" stroke-width="2.5"/>
    <text x="270" y="150" fill="#94a3b8" font-size="11">P⃗</text>
    <!-- Hợp lực hướng tâm F_ht hướng vào tâm cua (sang trái) -->
    <line x1="260" y1="100" x2="160" y2="100" stroke="#ef4444" stroke-width="3.5" marker-end="url(#arrB32)"/>
    <text x="170" y="90" fill="#f87171" font-size="12" font-weight="black">F⃗_ht = N⃗ + P⃗</text>
    <!-- Khung công thức bên phải -->
    <rect x="420" y="30" width="260" height="120" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="550" y="55" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">CÔNG THỨC KHÚC CUA AN TOÀN</text>
    <text x="440" y="85" fill="#facc15" font-size="12" font-weight="bold">F_ht = m · v² / r = mg · tan θ</text>
    <text x="440" y="112" fill="#34d399" font-size="11" font-weight="bold">v_an toàn = √(g · r · tan θ)</text>
    <text x="440" y="132" fill="#94a3b8" font-size="10">Không phụ thuộc vào khối lượng m của xe</text>
  </svg>`
);

// Save back to vatly10_diagrams.js
fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/vatly10_diagrams.js', 'module.exports = ' + JSON.stringify(diagrams, null, 2) + ';', 'utf8');
console.log('Successfully completed diagrams for all lessons! Total count:', Object.keys(diagrams).length);
