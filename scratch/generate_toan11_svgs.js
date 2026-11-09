const fs = require('fs');

const svgsData = {
  // SVG 1: Phép biến hình & Co giãn trục
  1: `<svg class="w-full h-auto rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-900 text-white" viewBox="0 0 900 480" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arr1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
  </defs>
  <rect x="20" y="20" width="860" height="40" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="450" y="46" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#38bdf8" text-anchor="middle">
    BÀI 1: PHÉP BIẾN HÌNH TRONG MẶT PHẲNG &amp; PHÉP CO GIÃN TRỤC
  </text>
  <g transform="translate(40, 80)">
    <rect x="0" y="0" width="380" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="190" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f1f5f9" text-anchor="middle">1. Ánh xạ Điểm M ↦ M' = f(M)</text>
    <ellipse cx="100" cy="170" rx="65" ry="95" fill="#1e293b" stroke="#475569" stroke-dasharray="3,3"/>
    <text x="100" y="60" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#94a3b8" text-anchor="middle">Hình ban đầu (H)</text>
    <circle cx="100" cy="140" r="5" fill="#f43f5e"/>
    <text x="85" y="145" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#f43f5e">M</text>
    <ellipse cx="280" cy="170" rx="65" ry="95" fill="#1e293b" stroke="#38bdf8" stroke-dasharray="3,3"/>
    <text x="280" y="60" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#38bdf8" text-anchor="middle">Hình ảnh f(H)</text>
    <circle cx="280" cy="140" r="5" fill="#38bdf8"/>
    <text x="295" y="145" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#38bdf8">M'</text>
    <path d="M 115 135 Q 190 90 265 135" fill="none" stroke="#fbbf24" stroke-width="2.5" marker-end="url(#arr1)"/>
    <text x="190" y="100" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fbbf24" text-anchor="middle">Quy tắc f duy nhất</text>
    <rect x="25" y="275" width="330" height="65" rx="8" fill="#1e293b" stroke="#475569"/>
    <text x="190" y="300" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#f1f5f9" text-anchor="middle">Điểm bất động: f(M) = M</text>
    <text x="190" y="322" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">Phép đồng nhất: e(M) = M với mọi điểm M trong mặt phẳng</text>
  </g>
  <g transform="translate(460, 80)">
    <rect x="0" y="0" width="400" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="200" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f1f5f9" text-anchor="middle">2. Co Giãn Trục: Biến Đường Tròn Thành Elip</text>
    <line x1="40" y1="180" x2="360" y2="180" stroke="#64748b" stroke-width="1.5"/>
    <line x1="200" y1="40" x2="200" y2="300" stroke="#64748b" stroke-width="1.5"/>
    <text x="365" y="185" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">x</text>
    <text x="205" y="55" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">y</text>
    <circle cx="200" cy="180" r="70" fill="none" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4,4"/>
    <text x="235" y="105" font-family="system-ui, sans-serif" font-size="11" fill="#f43f5e">Đường tròn: x² + y² = R²</text>
    <ellipse cx="200" cy="180" rx="70" ry="110" fill="none" stroke="#38bdf8" stroke-width="3"/>
    <text x="285" y="80" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#38bdf8">Elip: x² + y²/k² = R²</text>
    <path d="M 200 110 L 200 70" stroke="#38bdf8" stroke-width="2" marker-end="url(#arr1)"/>
    <text x="210" y="90" font-family="system-ui, sans-serif" font-size="10" fill="#38bdf8">k = 1,6</text>
    <rect x="25" y="295" width="350" height="50" rx="6" fill="#1e293b" stroke="#475569"/>
    <text x="200" y="315" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#fbbf24" text-anchor="middle">f(x; y) = (x; ky) với k &gt; 0</text>
    <text x="200" y="333" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">0 &lt; k &lt; 1: Co về trục Ox • k &gt; 1: Giãn xa trục Ox</text>
  </g>
</svg>`,

  // SVG 2: Phép tịnh tiến
  2: `<svg class="w-full h-auto rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-900 text-white" viewBox="0 0 900 480" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arr2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
  </defs>
  <rect x="20" y="20" width="860" height="40" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="450" y="46" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#38bdf8" text-anchor="middle">
    BÀI 2: PHÉP TỊNH TIẾN T_u⃗ &amp; BẢO TOÀN KHOẢNG CÁCH
  </text>
  <g transform="translate(40, 80)">
    <rect x="0" y="0" width="390" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="195" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f1f5f9" text-anchor="middle">1. Tịnh Tiến Tam Giác: ΔABC ↦ ΔA'B'C'</text>
    <polygon points="60,200 130,100 160,220" fill="rgba(244,63,94,0.2)" stroke="#f43f5e" stroke-width="2"/>
    <text x="50" y="215" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#f43f5e">A</text>
    <text x="130" y="90" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#f43f5e">B</text>
    <text x="170" y="235" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#f43f5e">C</text>
    <polygon points="220,150 290,50 320,170" fill="rgba(56,189,248,0.2)" stroke="#38bdf8" stroke-width="2"/>
    <text x="210" y="165" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#38bdf8">A'</text>
    <text x="290" y="40" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#38bdf8">B'</text>
    <text x="330" y="185" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#38bdf8">C'</text>
    <line x1="60" y1="200" x2="220" y2="150" stroke="#fbbf24" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arr2)"/>
    <line x1="130" y1="100" x2="290" y2="50" stroke="#fbbf24" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arr2)"/>
    <line x1="160" y1="220" x2="320" y2="170" stroke="#fbbf24" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arr2)"/>
    <text x="180" y="100" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fbbf24">u⃗ = (160; -50)</text>
    <rect x="25" y="275" width="340" height="70" rx="8" fill="#1e293b" stroke="#475569"/>
    <text x="195" y="295" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#38bdf8" text-anchor="middle">Tọa độ: x' = x + a,  y' = y + b</text>
    <text x="195" y="315" font-family="system-ui, sans-serif" font-size="11" fill="#34d399" text-anchor="middle">Bảo toàn: A'B' = AB, B'C' = BC, C'A' = CA</text>
    <text x="195" y="333" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Biến đường tròn (I; R) thành đường tròn (I'; R) cùng bán kính</text>
  </g>
  <g transform="translate(460, 80)">
    <rect x="0" y="0" width="400" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="200" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f1f5f9" text-anchor="middle">2. Họa Tiết Lát Mặt Phẳng Tuần Hoàn</text>
    <g transform="translate(40, 60)">
      <polygon points="40,20 80,20 100,55 80,90 40,90 20,55" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
      <polygon points="100,20 140,20 160,55 140,90 100,90 80,55" fill="#065f46" stroke="#10b981" stroke-width="1.5"/>
      <polygon points="160,20 200,20 220,55 200,90 160,90 140,55" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
      <polygon points="220,20 260,20 280,55 260,90 220,90 200,55" fill="#065f46" stroke="#10b981" stroke-width="1.5"/>
      <polygon points="70,72 110,72 130,107 110,142 70,142 50,107" fill="#065f46" stroke="#10b981" stroke-width="1.5"/>
      <polygon points="130,72 170,72 190,107 170,142 130,142 110,107" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
      <polygon points="190,72 230,72 250,107 230,142 190,142 170,107" fill="#065f46" stroke="#10b981" stroke-width="1.5"/>
      <polygon points="250,72 290,72 310,107 290,142 250,142 230,107" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
      <polygon points="40,125 80,125 100,160 80,195 40,195 20,160" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
      <polygon points="100,125 140,125 160,160 140,195 100,195 80,160" fill="#065f46" stroke="#10b981" stroke-width="1.5"/>
      <polygon points="160,125 200,125 220,160 200,195 160,195 140,160" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
      <polygon points="220,125 260,125 280,160 260,195 220,195 200,160" fill="#065f46" stroke="#10b981" stroke-width="1.5"/>
    </g>
    <rect x="25" y="285" width="350" height="60" rx="8" fill="#1e293b" stroke="#475569"/>
    <text x="200" y="308" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fbbf24" text-anchor="middle">Lát mặt phẳng tuần hoàn (Tessellation)</text>
    <text x="200" y="328" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">Tịnh tiến ô cơ sở theo 2 vectơ u⃗₁ = (a; 0) và u⃗₂ = (a/2; a√3/2)</text>
  </g>
</svg>`,

  // SVG 3: Phép đối xứng trục & Tối ưu Heron
  3: `<svg class="w-full h-auto rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-900 text-white" viewBox="0 0 900 480" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arr3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
  </defs>
  <rect x="20" y="20" width="860" height="40" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="450" y="46" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#38bdf8" text-anchor="middle">
    BÀI 3: PHÉP ĐỐI XỨNG TRỤC Đ_d &amp; BÀI TOÁN TỐI ƯU ĐƯỜNG ĐI HERON
  </text>
  <g transform="translate(40, 80)">
    <rect x="0" y="0" width="380" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="190" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f1f5f9" text-anchor="middle">1. Định Nghĩa &amp; Trục Trung Trực</text>
    <line x1="190" y1="50" x2="190" y2="260" stroke="#f59e0b" stroke-width="3"/>
    <text x="198" y="70" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#fbbf24">Trục d</text>
    <circle cx="80" cy="150" r="5" fill="#f43f5e"/>
    <text x="65" y="155" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#f43f5e">M</text>
    <circle cx="300" cy="150" r="5" fill="#38bdf8"/>
    <text x="315" y="155" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#38bdf8">M'</text>
    <line x1="80" y1="150" x2="300" y2="150" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4,4"/>
    <circle cx="190" cy="150" r="3" fill="#ffffff"/>
    <text x="195" y="142" font-family="system-ui, sans-serif" font-size="10" fill="#ffffff">H</text>
    <rect x="180" y="140" width="10" height="10" fill="none" stroke="#94a3b8" stroke-width="1"/>
    <line x1="130" y1="145" x2="130" y2="155" stroke="#38bdf8" stroke-width="1.5"/>
    <line x1="135" y1="145" x2="135" y2="155" stroke="#38bdf8" stroke-width="1.5"/>
    <line x1="245" y1="145" x2="245" y2="155" stroke="#38bdf8" stroke-width="1.5"/>
    <line x1="250" y1="145" x2="250" y2="155" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="25" y="275" width="330" height="70" rx="8" fill="#1e293b" stroke="#475569"/>
    <text x="190" y="295" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#38bdf8" text-anchor="middle">Đ_Ox: (x; y) ↦ (x; -y)  •  Đ_Oy: (x; y) ↦ (-x; y)</text>
    <text x="190" y="315" font-family="system-ui, sans-serif" font-size="11" fill="#34d399" text-anchor="middle">Bảo toàn khoảng cách: M'N' = MN (Phép dời hình)</text>
    <text x="190" y="333" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Đảo hướng quay trong mặt phẳng</text>
  </g>
  <g transform="translate(450, 80)">
    <rect x="0" y="0" width="410" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="205" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f1f5f9" text-anchor="middle">2. Bài Toán Tối Ưu Quãng Đường Heron</text>
    <line x1="30" y1="200" x2="380" y2="200" stroke="#f59e0b" stroke-width="3"/>
    <text x="350" y="190" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fbbf24">Bờ sông d</text>
    <circle cx="80" cy="100" r="5" fill="#f43f5e"/>
    <text x="75" y="85" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#f43f5e">A (Làng 1)</text>
    <circle cx="340" cy="120" r="5" fill="#f43f5e"/>
    <text x="330" y="105" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#f43f5e">B (Làng 2)</text>
    <circle cx="80" cy="300" r="5" fill="#38bdf8"/>
    <text x="65" y="315" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#38bdf8">A' = Đ_d(A)</text>
    <line x1="80" y1="100" x2="80" y2="300" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/>
    <line x1="80" y1="300" x2="340" y2="120" stroke="#34d399" stroke-width="2.5"/>
    <circle cx="210" cy="200" r="5" fill="#fbbf24"/>
    <text x="210" y="225" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fbbf24">M (Trạm bơm tối ưu)</text>
    <line x1="80" y1="100" x2="210" y2="200" stroke="#f43f5e" stroke-width="2"/>
    <rect x="25" y="275" width="360" height="70" rx="8" fill="#1e293b" stroke="#475569"/>
    <text x="205" y="295" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fbbf24" text-anchor="middle">MA + MB = MA' + MB ≥ A'B</text>
    <text x="205" y="315" font-family="system-ui, sans-serif" font-size="11" fill="#34d399" text-anchor="middle">Đạt nhỏ nhất khi M = A'B ∩ d (Thẳng hàng)</text>
    <text x="205" y="333" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Cơ sở của định luật phản xạ ánh sáng (Góc tới = Góc phản xạ)</text>
  </g>
</svg>`,

  // SVG 4: Phép quay & Đối xứng tâm
  4: `<svg class="w-full h-auto rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-900 text-white" viewBox="0 0 900 480" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arr4" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
  </defs>
  <rect x="20" y="20" width="860" height="40" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="450" y="46" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#38bdf8" text-anchor="middle">
    BÀI 4: PHÉP QUAY Q_(O, α) &amp; PHÉP ĐỐI XỨNG TÂM Đ_I (QUAY 180°)
  </text>
  <g transform="translate(40, 80)">
    <rect x="0" y="0" width="380" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="190" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f1f5f9" text-anchor="middle">1. Phép Quay Tâm O Góc α = 60°</text>
    <circle cx="190" cy="180" r="6" fill="#fbbf24"/>
    <text x="190" y="205" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#fbbf24" text-anchor="middle">Tâm O</text>
    <circle cx="190" cy="180" r="110" fill="none" stroke="#475569" stroke-dasharray="3,3"/>
    <circle cx="290" cy="150" r="5" fill="#f43f5e"/>
    <text x="305" y="155" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#f43f5e">M</text>
    <line x1="190" y1="180" x2="290" y2="150" stroke="#f43f5e" stroke-width="1.8"/>
    <circle cx="215" cy="75" r="5" fill="#38bdf8"/>
    <text x="225" y="70" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#38bdf8">M' = Q_(O,α)(M)</text>
    <line x1="190" y1="180" x2="215" y2="75" stroke="#38bdf8" stroke-width="1.8"/>
    <path d="M 235 166 A 45 45 0 0 0 200 135" fill="none" stroke="#38bdf8" stroke-width="2" marker-end="url(#arr4)"/>
    <text x="235" y="145" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#38bdf8">α = 60°</text>
    <rect x="25" y="275" width="330" height="70" rx="8" fill="#1e293b" stroke="#475569"/>
    <text x="190" y="295" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#38bdf8" text-anchor="middle">x' = x cos α - y sin α,  y' = x sin α + y cos α</text>
    <text x="190" y="315" font-family="system-ui, sans-serif" font-size="11" fill="#34d399" text-anchor="middle">Quay +90°: x' = -y, y' = x  •  Quay -90°: x' = y, y' = -x</text>
    <text x="190" y="333" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Bảo toàn khoảng cách: M'N' = MN</text>
  </g>
  <g transform="translate(460, 80)">
    <rect x="0" y="0" width="400" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="200" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f1f5f9" text-anchor="middle">2. Phép Đối Xứng Tâm I (Quay 180°)</text>
    <circle cx="200" cy="160" r="5" fill="#fbbf24"/>
    <text x="200" y="185" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fbbf24" text-anchor="middle">Tâm I(a; b)</text>
    <polygon points="100,100 160,80 140,140" fill="rgba(244,63,94,0.2)" stroke="#f43f5e" stroke-width="2"/>
    <text x="85" y="100" font-family="system-ui, sans-serif" font-size="11" fill="#f43f5e">A</text>
    <text x="165" y="75" font-family="system-ui, sans-serif" font-size="11" fill="#f43f5e">B</text>
    <text x="145" y="155" font-family="system-ui, sans-serif" font-size="11" fill="#f43f5e">C</text>
    <polygon points="300,220 240,240 260,180" fill="rgba(56,189,248,0.2)" stroke="#38bdf8" stroke-width="2"/>
    <text x="310" y="225" font-family="system-ui, sans-serif" font-size="11" fill="#38bdf8">A'</text>
    <text x="230" y="255" font-family="system-ui, sans-serif" font-size="11" fill="#38bdf8">B'</text>
    <text x="250" y="175" font-family="system-ui, sans-serif" font-size="11" fill="#38bdf8">C'</text>
    <line x1="100" y1="100" x2="300" y2="220" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3,3"/>
    <line x1="160" y1="80" x2="240" y2="240" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3,3"/>
    <line x1="140" y1="140" x2="260" y2="180" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3,3"/>
    <rect x="25" y="275" width="350" height="70" rx="8" fill="#1e293b" stroke="#475569"/>
    <text x="200" y="295" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#38bdf8" text-anchor="middle">Tọa độ: x' = 2a - x,  y' = 2b - y</text>
    <text x="200" y="315" font-family="system-ui, sans-serif" font-size="11" fill="#34d399" text-anchor="middle">Biến đường thẳng thành đường thẳng song song hoặc trùng</text>
    <text x="200" y="333" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Hình có tâm đối xứng: Hình bình hành, lục giác đều, đường tròn</text>
  </g>
</svg>`,

  // SVG 5: Phép dời hình & Hai hình bằng nhau
  5: `<svg class="w-full h-auto rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-900 text-white" viewBox="0 0 900 480" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arr5" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
  </defs>
  <rect x="20" y="20" width="860" height="40" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="450" y="46" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#38bdf8" text-anchor="middle">
    BÀI 5: PHÉP DỜI HÌNH &amp; KHÁI NIỆM HAI HÌNH BẰNG NHAU (H ≅ H')
  </text>
  <g transform="translate(40, 80)">
    <rect x="0" y="0" width="390" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="195" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f1f5f9" text-anchor="middle">1. Định Nghĩa: Bảo Toàn Mọi Khoảng Cách</text>
    <path d="M 60 120 C 70 80, 110 90, 120 120 C 130 150, 90 180, 70 160 Z" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
    <text x="90" y="140" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#93c5fd" text-anchor="middle">Hình H</text>
    <path d="M 260 100 C 270 60, 310 70, 320 100 C 330 130, 290 160, 270 140 Z" fill="#065f46" stroke="#10b981" stroke-width="2" transform="rotate(35, 290, 120)"/>
    <text x="290" y="130" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#6ee7b7" text-anchor="middle">Hình H'</text>
    <path d="M 140 130 Q 195 90 250 120" fill="none" stroke="#fbbf24" stroke-width="2.5" marker-end="url(#arr5)"/>
    <text x="195" y="95" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fbbf24" text-anchor="middle">Phép dời hình f</text>
    <rect x="25" y="275" width="340" height="70" rx="8" fill="#1e293b" stroke="#475569"/>
    <text x="195" y="295" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#38bdf8" text-anchor="middle">M'N' = MN (Khoảng cách không đổi)</text>
    <text x="195" y="315" font-family="system-ui, sans-serif" font-size="11" fill="#34d399" text-anchor="middle">Hai hình bằng nhau: Có phép dời hình biến H thành H'</text>
    <text x="195" y="333" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Bảo toàn diện tích S' = S, góc, chu vi và hình dạng</text>
  </g>
  <g transform="translate(460, 80)">
    <rect x="0" y="0" width="400" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="200" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f1f5f9" text-anchor="middle">2. Hợp Thành Các Phép Dời Hình Cơ Bản</text>
    <rect x="30" y="60" width="100" height="40" rx="6" fill="#1e293b" stroke="#3b82f6"/>
    <text x="80" y="85" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Tịnh tiến T_u</text>
    <rect x="150" y="60" width="100" height="40" rx="6" fill="#1e293b" stroke="#10b981"/>
    <text x="200" y="85" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Quay Q_(O,α)</text>
    <rect x="270" y="60" width="100" height="40" rx="6" fill="#1e293b" stroke="#f43f5e"/>
    <text x="320" y="85" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Đối xứng Đ_d</text>
    <path d="M 80 100 L 80 150 L 170 150" fill="none" stroke="#64748b" stroke-width="1.5" marker-end="url(#arr5)"/>
    <path d="M 200 100 L 200 150" fill="none" stroke="#64748b" stroke-width="1.5" marker-end="url(#arr5)"/>
    <path d="M 320 100 L 320 150 L 230 150" fill="none" stroke="#64748b" stroke-width="1.5" marker-end="url(#arr5)"/>
    <rect x="110" y="160" width="180" height="60" rx="10" fill="#312e81" stroke="#6366f1" stroke-width="2"/>
    <text x="200" y="185" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">HỢP THÀNH f = f₂ ∘ f₁</text>
    <text x="200" y="205" font-family="system-ui, sans-serif" font-size="11" fill="#c7d2fe" text-anchor="middle">Vẫn là một Phép Dời Hình</text>
    <rect x="25" y="275" width="350" height="70" rx="8" fill="#1e293b" stroke="#475569"/>
    <text x="200" y="295" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fbbf24" text-anchor="middle">Định lí Phân rã</text>
    <text x="200" y="315" font-family="system-ui, sans-serif" font-size="11" fill="#34d399" text-anchor="middle">Mọi phép dời hình trong mặt phẳng đều là hợp thành</text>
    <text x="200" y="333" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">của không quá 3 phép đối xứng trục liên tiếp</text>
  </g>
</svg>`,

  // SVG 6: Phép vị tự
  6: `<svg class="w-full h-auto rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-900 text-white" viewBox="0 0 900 480" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arr6" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
  </defs>
  <rect x="20" y="20" width="860" height="40" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="450" y="46" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#38bdf8" text-anchor="middle">
    BÀI 6: PHÉP VỊ TỰ V_(I, k) &amp; TỈ SỐ DIỆN TÍCH S' = k² · S
  </text>
  <g transform="translate(40, 80)">
    <rect x="0" y="0" width="390" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="195" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f1f5f9" text-anchor="middle">1. Vị Tự Tâm O, Tỉ Số Dương k = 2</text>
    <circle cx="50" cy="220" r="5" fill="#fbbf24"/>
    <text x="50" y="245" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#fbbf24">Tâm O</text>
    <polygon points="120,200 160,140 180,210" fill="rgba(244,63,94,0.2)" stroke="#f43f5e" stroke-width="2"/>
    <text x="145" y="180" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#f43f5e">S</text>
    <polygon points="190,180 270,60 310,200" fill="rgba(56,189,248,0.2)" stroke="#38bdf8" stroke-width="2.5"/>
    <text x="245" y="140" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#38bdf8">S' = 4S</text>
    <line x1="50" y1="220" x2="310" y2="200" stroke="#64748b" stroke-dasharray="3,3"/>
    <line x1="50" y1="220" x2="270" y2="60" stroke="#64748b" stroke-dasharray="3,3"/>
    <line x1="50" y1="220" x2="190" y2="180" stroke="#64748b" stroke-dasharray="3,3"/>
    <rect x="25" y="275" width="340" height="70" rx="8" fill="#1e293b" stroke="#475569"/>
    <text x="195" y="295" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#38bdf8" text-anchor="middle">OM'⃗ = k · OM⃗  (k = 2)</text>
    <text x="195" y="315" font-family="system-ui, sans-serif" font-size="11" fill="#34d399" text-anchor="middle">Độ dài nhân |k| = 2  •  Diện tích nhân k² = 4</text>
    <text x="195" y="333" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Đường tròn (O; R) ↦ (O'; 2R)</text>
  </g>
  <g transform="translate(460, 80)">
    <rect x="0" y="0" width="400" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="200" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f1f5f9" text-anchor="middle">2. Vị Tự Tâm O, Tỉ Số Âm k = -1,5</text>
    <circle cx="200" cy="160" r="5" fill="#fbbf24"/>
    <text x="200" y="185" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fbbf24" text-anchor="middle">Tâm O</text>
    <polygon points="120,120 160,80 150,140" fill="rgba(244,63,94,0.2)" stroke="#f43f5e" stroke-width="2"/>
    <text x="135" y="115" font-family="system-ui, sans-serif" font-size="11" fill="#f43f5e">Hình H</text>
    <polygon points="320,220 260,280 275,190" fill="rgba(56,189,248,0.2)" stroke="#38bdf8" stroke-width="2"/>
    <text x="290" y="240" font-family="system-ui, sans-serif" font-size="11" fill="#38bdf8">H' (Lộn ngược)</text>
    <line x1="120" y1="120" x2="320" y2="220" stroke="#64748b" stroke-dasharray="3,3"/>
    <line x1="160" y1="80" x2="260" y2="280" stroke="#64748b" stroke-dasharray="3,3"/>
    <line x1="150" y1="140" x2="275" y2="190" stroke="#64748b" stroke-dasharray="3,3"/>
    <rect x="25" y="275" width="350" height="70" rx="8" fill="#1e293b" stroke="#475569"/>
    <text x="200" y="295" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#38bdf8" text-anchor="middle">k &lt; 0: Ảnh nằm về phía đối diện tâm</text>
    <text x="200" y="315" font-family="system-ui, sans-serif" font-size="11" fill="#fbbf24" text-anchor="middle">Tọa độ: x' = a + k(x - a),  y' = b + k(y - b)</text>
    <text x="200" y="333" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">k = -1: Phép đối xứng tâm  •  k = 1: Phép đồng nhất</text>
  </g>
</svg>`,

  // SVG 7: Phép đồng dạng & Fractal Bông tuyết Koch
  7: `<svg class="w-full h-auto rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-900 text-white" viewBox="0 0 900 480" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="860" height="40" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="450" y="46" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#38bdf8" text-anchor="middle">
    BÀI 7: PHÉP ĐỒNG DẠNG &amp; HÌNH HỌC FRACTAL BÔNG TUYẾT KOCH
  </text>
  <g transform="translate(40, 80)">
    <rect x="0" y="0" width="390" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="195" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f1f5f9" text-anchor="middle">1. Tam Giác Đồng Dạng Tỉ Số k</text>
    <polygon points="60,200 120,100 150,210" fill="rgba(244,63,94,0.2)" stroke="#f43f5e" stroke-width="2"/>
    <text x="50" y="215" font-family="system-ui, sans-serif" font-size="11" fill="#f43f5e">A</text>
    <text x="120" y="90" font-family="system-ui, sans-serif" font-size="11" fill="#f43f5e">B</text>
    <text x="160" y="225" font-family="system-ui, sans-serif" font-size="11" fill="#f43f5e">C</text>
    <text x="105" y="170" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#f43f5e">S, P</text>
    <polygon points="200,210 320,10 380,230" fill="rgba(56,189,248,0.2)" stroke="#38bdf8" stroke-width="2.5"/>
    <text x="185" y="225" font-family="system-ui, sans-serif" font-size="12" fill="#38bdf8">A'</text>
    <text x="320" y="5" font-family="system-ui, sans-serif" font-size="12" fill="#38bdf8">B'</text>
    <text x="390" y="245" font-family="system-ui, sans-serif" font-size="12" fill="#38bdf8">C'</text>
    <text x="295" y="150" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#38bdf8">S' = k²S, P' = kP</text>
    <rect x="25" y="275" width="340" height="70" rx="8" fill="#1e293b" stroke="#475569"/>
    <text x="195" y="295" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#38bdf8" text-anchor="middle">A'B'/AB = B'C'/BC = C'A'/CA = k</text>
    <text x="195" y="315" font-family="system-ui, sans-serif" font-size="11" fill="#34d399" text-anchor="middle">Góc tương ứng bằng nhau: Â' = Â, B̂' = B̂, Ĉ' = Ĉ</text>
    <text x="195" y="333" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Hợp thành: Phép đồng dạng = Phép vị tự ∘ Phép dời hình</text>
  </g>
  <g transform="translate(460, 80)">
    <rect x="0" y="0" width="400" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="200" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f1f5f9" text-anchor="middle">2. Bông Tuyết Koch (Koch Snowflake)</text>
    <g transform="translate(110, 60)">
      <polygon points="90,10 170,150 10,150" fill="rgba(99,102,241,0.2)" stroke="#818cf8" stroke-width="1.5"/>
      <polygon points="90,190 170,50 10,50" fill="rgba(56,189,248,0.2)" stroke="#38bdf8" stroke-width="1.5"/>
    </g>
    <text x="200" y="240" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fbbf24" text-anchor="middle">Cấu trúc Tự Đồng Dạng (Fractal)</text>
    <rect x="25" y="260" width="350" height="85" rx="8" fill="#1e293b" stroke="#475569"/>
    <text x="200" y="280" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#f43f5e" text-anchor="middle">Chu vi: P_n = 3a (4/3)ⁿ⁻¹ ⟶ ∞ (Dài vô hạn!)</text>
    <text x="200" y="302" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399" text-anchor="middle">Diện tích: S_n ⟶ 8/5 S_tam_giác (Hữu hạn!)</text>
    <text x="200" y="325" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Mô phỏng: Đường bờ biển, tia sét, tinh thể băng, mạng phế quản</text>
  </g>
</svg>`,

  // SVG 8: Đồ thị cơ bản & Định lí Bắt tay
  8: `<svg class="w-full h-auto rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-900 text-white" viewBox="0 0 900 480" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="860" height="40" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="450" y="46" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#38bdf8" text-anchor="middle">
    BÀI 8: LÍ THUYẾT ĐỒ THỊ CƠ BẢN, ĐỒ THỊ K_n &amp; ĐỊNH LÍ BẮT TAY
  </text>
  <g transform="translate(40, 80)">
    <rect x="0" y="0" width="390" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="195" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f1f5f9" text-anchor="middle">1. Đồ Thị G = (V, E) &amp; Bậc Của Đỉnh</text>
    <line x1="80" y1="80" x2="220" y2="80" stroke="#64748b" stroke-width="2"/>
    <line x1="80" y1="80" x2="80" y2="200" stroke="#64748b" stroke-width="2"/>
    <line x1="220" y1="80" x2="220" y2="200" stroke="#64748b" stroke-width="2"/>
    <line x1="80" y1="200" x2="220" y2="200" stroke="#64748b" stroke-width="2"/>
    <line x1="80" y1="80" x2="220" y2="200" stroke="#64748b" stroke-width="2"/>
    <line x1="220" y1="80" x2="310" y2="140" stroke="#64748b" stroke-width="2"/>
    <line x1="220" y1="200" x2="310" y2="140" stroke="#64748b" stroke-width="2"/>
    <circle cx="80" cy="80" r="14" fill="#1e3a8a" stroke="#38bdf8" stroke-width="2"/>
    <text x="80" y="85" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">A(3)</text>
    <circle cx="220" cy="80" r="14" fill="#1e3a8a" stroke="#38bdf8" stroke-width="2"/>
    <text x="220" y="85" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">B(4)</text>
    <circle cx="80" cy="200" r="14" fill="#1e3a8a" stroke="#38bdf8" stroke-width="2"/>
    <text x="80" y="205" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">C(2)</text>
    <circle cx="220" cy="200" r="14" fill="#1e3a8a" stroke="#38bdf8" stroke-width="2"/>
    <text x="220" y="205" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">D(3)</text>
    <circle cx="310" cy="140" r="14" fill="#1e3a8a" stroke="#38bdf8" stroke-width="2"/>
    <text x="310" y="145" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">E(2)</text>
    <circle cx="350" cy="220" r="12" fill="#334155" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="350" y="224" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">F(0)</text>
    <text x="350" y="245" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Cô lập</text>
    <rect x="25" y="265" width="340" height="80" rx="8" fill="#1e293b" stroke="#475569"/>
    <text x="195" y="285" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fbbf24" text-anchor="middle">Định lí Bắt tay: ∑ deg(v) = 2|E|</text>
    <text x="195" y="305" font-family="system-ui, sans-serif" font-size="11" fill="#38bdf8" text-anchor="middle">Tổng bậc = 3 + 4 + 2 + 3 + 2 + 0 = 14 = 2 × 7 cạnh</text>
    <text x="195" y="325" font-family="system-ui, sans-serif" font-size="10" fill="#34d399" text-anchor="middle">Hệ quả: Số đỉnh có bậc lẻ luôn là một số chẵn (A, D: 2 đỉnh lẻ)</text>
  </g>
  <g transform="translate(460, 80)">
    <rect x="0" y="0" width="400" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="200" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f1f5f9" text-anchor="middle">2. Đồ Thị Đầy Đủ K₅ (5 Đỉnh, 10 Cạnh)</text>
    <g transform="translate(200, 150)">
      <circle cx="0" cy="-80" r="10" fill="#0284c7" stroke="#38bdf8"/>
      <circle cx="76" cy="-25" r="10" fill="#0284c7" stroke="#38bdf8"/>
      <circle cx="47" cy="65" r="10" fill="#0284c7" stroke="#38bdf8"/>
      <circle cx="-47" cy="65" r="10" fill="#0284c7" stroke="#38bdf8"/>
      <circle cx="-76" cy="-25" r="10" fill="#0284c7" stroke="#38bdf8"/>
      <line x1="0" y1="-80" x2="76" y2="-25" stroke="#38bdf8" stroke-width="1.8"/>
      <line x1="76" y1="-25" x2="47" y2="65" stroke="#38bdf8" stroke-width="1.8"/>
      <line x1="47" y1="65" x2="-47" y2="65" stroke="#38bdf8" stroke-width="1.8"/>
      <line x1="-47" y1="65" x2="-76" y2="-25" stroke="#38bdf8" stroke-width="1.8"/>
      <line x1="-76" y1="-25" x2="0" y2="-80" stroke="#38bdf8" stroke-width="1.8"/>
      <line x1="0" y1="-80" x2="47" y2="65" stroke="#f59e0b" stroke-width="1.5"/>
      <line x1="0" y1="-80" x2="-47" y2="65" stroke="#f59e0b" stroke-width="1.5"/>
      <line x1="76" y1="-25" x2="-47" y2="65" stroke="#f59e0b" stroke-width="1.5"/>
      <line x1="76" y1="-25" x2="-76" y2="-25" stroke="#f59e0b" stroke-width="1.5"/>
      <line x1="47" y1="65" x2="-76" y2="-25" stroke="#f59e0b" stroke-width="1.5"/>
    </g>
    <rect x="25" y="275" width="350" height="70" rx="8" fill="#1e293b" stroke="#475569"/>
    <text x="200" y="295" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fbbf24" text-anchor="middle">Số cạnh K_n: |E| = n(n - 1) / 2</text>
    <text x="200" y="315" font-family="system-ui, sans-serif" font-size="11" fill="#38bdf8" text-anchor="middle">Với n = 5: |E| = 5 × 4 / 2 = 10 cạnh • Mỗi đỉnh có bậc 4</text>
    <text x="200" y="333" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Ứng dụng: Lập lịch thi đấu vòng tròn, mạng lưới kết nối máy chủ</text>
  </g>
</svg>`,

  // SVG 9: Euler vs Hamilton
  9: `<svg class="w-full h-auto rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-900 text-white" viewBox="0 0 900 480" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="860" height="40" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="450" y="46" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#38bdf8" text-anchor="middle">
    BÀI 9: ĐƯỜNG ĐI EULER (QUA MỌI CẠNH) vs HAMILTON (QUA MỌI ĐỈNH)
  </text>
  <g transform="translate(40, 80)">
    <rect x="0" y="0" width="390" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="195" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#38bdf8" text-anchor="middle">1. Bài Toán 7 Cây Cầu Königsberg (Euler 1736)</text>
    <rect x="130" y="110" width="130" height="60" rx="20" fill="#065f46"/>
    <text x="195" y="145" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Đảo A (deg = 5)</text>
    <rect x="30" y="50" width="100" height="40" rx="10" fill="#1e3a8a"/>
    <text x="80" y="75" font-family="system-ui, sans-serif" font-size="11" fill="#ffffff" text-anchor="middle">Bờ B (deg = 3)</text>
    <rect x="260" y="50" width="100" height="40" rx="10" fill="#1e3a8a"/>
    <text x="310" y="75" font-family="system-ui, sans-serif" font-size="11" fill="#ffffff" text-anchor="middle">Bờ C (deg = 3)</text>
    <rect x="145" y="210" width="100" height="40" rx="10" fill="#1e3a8a"/>
    <text x="195" y="235" font-family="system-ui, sans-serif" font-size="11" fill="#ffffff" text-anchor="middle">Đảo D (deg = 3)</text>
    <line x1="80" y1="90" x2="150" y2="120" stroke="#f59e0b" stroke-width="4"/>
    <line x1="100" y1="90" x2="165" y2="120" stroke="#f59e0b" stroke-width="4"/>
    <line x1="310" y1="90" x2="240" y2="120" stroke="#f59e0b" stroke-width="4"/>
    <line x1="290" y1="90" x2="225" y2="120" stroke="#f59e0b" stroke-width="4"/>
    <line x1="80" y1="90" x2="310" y2="90" stroke="#f59e0b" stroke-width="4"/>
    <line x1="165" y1="170" x2="175" y2="210" stroke="#f59e0b" stroke-width="4"/>
    <line x1="225" y1="170" x2="215" y2="210" stroke="#f59e0b" stroke-width="4"/>
    <rect x="25" y="275" width="340" height="70" rx="8" fill="#1e293b" stroke="#475569"/>
    <text x="195" y="295" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#f43f5e" text-anchor="middle">Cả 4 đỉnh đều mang bậc LẺ (5, 3, 3, 3)!</text>
    <text x="195" y="315" font-family="system-ui, sans-serif" font-size="11" fill="#38bdf8" text-anchor="middle">Euler: Chỉ có đường đi khi có đúng 0 hoặc 2 đỉnh lẻ</text>
    <text x="195" y="333" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">⟹ Không thể đi qua mỗi cây cầu đúng 1 lần!</text>
  </g>
  <g transform="translate(460, 80)">
    <rect x="0" y="0" width="400" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="200" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#34d399" text-anchor="middle">2. Chu Trình Hamilton &amp; Định Lí Dirac</text>
    <g transform="translate(200, 150)">
      <circle cx="-60" cy="-60" r="12" fill="#10b981"/>
      <text x="-60" y="-55" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">1</text>
      <circle cx="60" cy="-60" r="12" fill="#10b981"/>
      <text x="60" y="-55" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">2</text>
      <circle cx="90" cy="20" r="12" fill="#10b981"/>
      <text x="90" y="25" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">3</text>
      <circle cx="0" cy="70" r="12" fill="#10b981"/>
      <text x="0" y="75" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">4</text>
      <circle cx="-90" cy="20" r="12" fill="#10b981"/>
      <text x="-90" y="25" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">5</text>
      <path d="M -60 -60 L 60 -60 L 90 20 L 0 70 L -90 20 Z" fill="none" stroke="#34d399" stroke-width="3"/>
      <line x1="-60" y1="-60" x2="90" y2="20" stroke="#475569" stroke-width="1.5" stroke-dasharray="3,3"/>
      <line x1="60" y1="-60" x2="-90" y2="20" stroke="#475569" stroke-width="1.5" stroke-dasharray="3,3"/>
    </g>
    <rect x="25" y="260" width="350" height="85" rx="8" fill="#1e293b" stroke="#475569"/>
    <text x="200" y="280" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#34d399" text-anchor="middle">Chu trình Hamilton: 1 ⟶ 2 ⟶ 3 ⟶ 4 ⟶ 5 ⟶ 1</text>
    <text x="200" y="300" font-family="system-ui, sans-serif" font-size="11" fill="#fbbf24" text-anchor="middle">Định lí Dirac: n ≥ 3, deg(v) ≥ n/2 ⟹ Có chu trình Hamilton</text>
    <text x="200" y="320" font-family="system-ui, sans-serif" font-size="11" fill="#38bdf8" text-anchor="middle">Định lí Ore: deg(u) + deg(v) ≥ n với mọi cặp không kề</text>
    <text x="200" y="338" font-family="system-ui, sans-serif" font-size="9" fill="#94a3b8" text-anchor="middle">Ứng dụng: Bài toán người du lịch TSP, tối ưu lịch bay phi công</text>
  </g>
</svg>`,

  // SVG 10: Dijkstra & Người đưa thư
  10: `<svg class="w-full h-auto rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-900 text-white" viewBox="0 0 900 480" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arr10" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
  </defs>
  <rect x="20" y="20" width="860" height="40" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="450" y="46" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#38bdf8" text-anchor="middle">
    BÀI 10: THUẬT TOÁN DIJKSTRA TÌM ĐƯỜNG NGẮN NHẤT &amp; BÀI TOÁN NGƯỜI ĐƯA THƯ
  </text>
  <g transform="translate(40, 80)">
    <rect x="0" y="0" width="390" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="195" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f1f5f9" text-anchor="middle">1. Thuật Toán Gắn Nhãn Dijkstra (S ↦ T)</text>
    <line x1="60" y1="160" x2="160" y2="80" stroke="#64748b" stroke-width="2"/>
    <text x="100" y="110" font-family="system-ui, sans-serif" font-size="11" fill="#f59e0b">4</text>
    <line x1="60" y1="160" x2="160" y2="240" stroke="#38bdf8" stroke-width="3"/>
    <text x="100" y="215" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#38bdf8">2</text>
    <line x1="160" y1="240" x2="160" y2="80" stroke="#38bdf8" stroke-width="3"/>
    <text x="170" y="165" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#38bdf8">1</text>
    <line x1="160" y1="80" x2="270" y2="80" stroke="#38bdf8" stroke-width="3"/>
    <text x="215" y="70" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#38bdf8">3</text>
    <line x1="160" y1="240" x2="270" y2="240" stroke="#64748b" stroke-width="2"/>
    <text x="215" y="255" font-family="system-ui, sans-serif" font-size="11" fill="#f59e0b">5</text>
    <line x1="270" y1="80" x2="350" y2="160" stroke="#38bdf8" stroke-width="3"/>
    <text x="320" y="110" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#38bdf8">2</text>
    <line x1="270" y1="240" x2="350" y2="160" stroke="#64748b" stroke-width="2"/>
    <text x="320" y="215" font-family="system-ui, sans-serif" font-size="11" fill="#f59e0b">1</text>
    <circle cx="60" cy="160" r="16" fill="#1e3a8a" stroke="#38bdf8" stroke-width="2"/>
    <text x="60" y="165" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">S[0]</text>
    <circle cx="160" cy="240" r="16" fill="#1e3a8a" stroke="#38bdf8" stroke-width="2"/>
    <text x="160" y="245" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">B[2]</text>
    <circle cx="160" cy="80" r="16" fill="#1e3a8a" stroke="#38bdf8" stroke-width="2"/>
    <text x="160" y="85" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">A[3]</text>
    <circle cx="270" cy="80" r="16" fill="#1e3a8a" stroke="#38bdf8" stroke-width="2"/>
    <text x="270" y="85" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">C[6]</text>
    <circle cx="270" cy="240" r="16" fill="#334155" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="270" y="245" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">D[7]</text>
    <circle cx="350" cy="160" r="16" fill="#065f46" stroke="#10b981" stroke-width="2.5"/>
    <text x="350" y="165" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">T[8]</text>
    <rect x="25" y="285" width="340" height="60" rx="8" fill="#1e293b" stroke="#475569"/>
    <text x="195" y="308" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#34d399" text-anchor="middle">Đường ngắn nhất: S ⟶ B ⟶ A ⟶ C ⟶ T</text>
    <text x="195" y="328" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">Tổng trọng số = 2 + 1 + 3 + 2 = 8 (nhanh nhất!)</text>
  </g>
  <g transform="translate(460, 80)">
    <rect x="0" y="0" width="400" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="200" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#fbbf24" text-anchor="middle">2. Bài Toán Người Đưa Thư (Chinese Postman)</text>
    <rect x="50" y="70" width="300" height="150" rx="12" fill="#1e293b" stroke="#475569"/>
    <circle cx="80" cy="100" r="12" fill="#ef4444"/>
    <text x="80" y="105" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">A(3)</text>
    <circle cx="320" cy="190" r="12" fill="#ef4444"/>
    <text x="320" y="195" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">B(3)</text>
    <path d="M 80 100 Q 200 40 320 190" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4,4"/>
    <text x="200" y="90" font-family="system-ui, sans-serif" font-size="11" fill="#fde047" text-anchor="middle">Đoạn lặp lại d_min(A, B) = 2,5 km</text>
    <rect x="25" y="245" width="350" height="100" rx="8" fill="#1e293b" stroke="#475569"/>
    <text x="200" y="268" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fbbf24" text-anchor="middle">Công thức Quãng đường Tối ưu:</text>
    <text x="200" y="290" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#38bdf8" text-anchor="middle">L_min = ∑ w(e) + d_min(A, B)</text>
    <text x="200" y="312" font-family="system-ui, sans-serif" font-size="11" fill="#34d399" text-anchor="middle">Ví dụ: L = 18 km + 2,5 km = 20,5 km</text>
    <text x="200" y="332" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Chỉ cần lặp lại đường ngắn nhất nối giữa 2 đỉnh bậc lẻ!</text>
  </g>
</svg>`,

  // SVG 11: Hình chiếu vuông góc & Trục đo
  11: `<svg class="w-full h-auto rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-900 text-white" viewBox="0 0 900 480" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="860" height="40" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="450" y="46" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#38bdf8" text-anchor="middle">
    BÀI 11: BA HÌNH CHIẾU VUÔNG GÓC &amp; HÌNH CHIẾU TRỤC ĐO VUÔNG GÓC ĐỀU
  </text>
  <g transform="translate(40, 80)">
    <rect x="0" y="0" width="390" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="195" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f1f5f9" text-anchor="middle">1. Bố Trí 3 Hình Chiếu Vuông Góc (TCVN)</text>
    <rect x="70" y="60" width="100" height="80" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
    <text x="120" y="105" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">H.C ĐỨNG</text>
    <rect x="220" y="60" width="70" height="80" fill="#065f46" stroke="#10b981" stroke-width="2"/>
    <text x="255" y="105" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">H.C CẠNH</text>
    <rect x="70" y="180" width="100" height="60" fill="#701a75" stroke="#d946ef" stroke-width="2"/>
    <text x="120" y="215" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">H.C BẰNG</text>
    <line x1="170" y1="100" x2="220" y2="100" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3,3"/>
    <line x1="120" y1="140" x2="120" y2="180" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3,3"/>
    <rect x="25" y="265" width="340" height="80" rx="8" fill="#1e293b" stroke="#475569"/>
    <text x="195" y="285" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fbbf24" text-anchor="middle">Quy tắc dóng thẳng hàng:</text>
    <text x="195" y="305" font-family="system-ui, sans-serif" font-size="11" fill="#38bdf8" text-anchor="middle">• H.C Bằng đặt ngay DƯỚI H.C Đứng (dóng chiều dài)</text>
    <text x="195" y="325" font-family="system-ui, sans-serif" font-size="11" fill="#34d399" text-anchor="middle">• H.C Cạnh đặt ngay BÊN PHẢI H.C Đứng (dóng chiều cao)</text>
  </g>
  <g transform="translate(460, 80)">
    <rect x="0" y="0" width="400" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="200" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f1f5f9" text-anchor="middle">2. Trục Đo Vuông Góc Đều (3 Trục 120°)</text>
    <g transform="translate(200, 150)">
      <line x1="0" y1="0" x2="0" y2="-90" stroke="#ef4444" stroke-width="2.5"/>
      <text x="10" y="-85" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#ef4444">O'z' (Cao)</text>
      <line x1="0" y1="0" x2="-80" y2="46" stroke="#38bdf8" stroke-width="2.5"/>
      <text x="-115" y="60" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#38bdf8">O'x' (Dài)</text>
      <line x1="0" y1="0" x2="80" y2="46" stroke="#34d399" stroke-width="2.5"/>
      <text x="85" y="60" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#34d399">O'y' (Rộng)</text>
      <path d="M 0 -40 A 40 40 0 0 1 35 20" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
      <text x="35" y="-10" font-family="system-ui, sans-serif" font-size="10" fill="#fbbf24">120°</text>
      <path d="M 35 20 A 40 40 0 0 1 -35 20" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
      <text x="0" y="40" font-family="system-ui, sans-serif" font-size="10" fill="#fbbf24">120°</text>
      <path d="M -35 20 A 40 40 0 0 1 0 -40" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
      <text x="-45" y="-10" font-family="system-ui, sans-serif" font-size="10" fill="#fbbf24">120°</text>
    </g>
    <rect x="25" y="265" width="350" height="80" rx="8" fill="#1e293b" stroke="#475569"/>
    <text x="200" y="285" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fbbf24" text-anchor="middle">Ba góc trục đo: x'O'y' = y'O'z' = z'O'x' = 120°</text>
    <text x="200" y="305" font-family="system-ui, sans-serif" font-size="11" fill="#38bdf8" text-anchor="middle">Hệ số biến dạng quy ước: p = q = r = 1</text>
    <text x="200" y="325" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Hình khối 3D trực quan, dễ hình dung cấu tạo không gian</text>
  </g>
</svg>`,

  // SVG 12: Bản vẽ kĩ thuật tiêu chuẩn
  12: `<svg class="w-full h-auto rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-900 text-white" viewBox="0 0 900 480" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="860" height="40" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="450" y="46" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#38bdf8" text-anchor="middle">
    BÀI 12: TIÊU CHUẨN BẢN VẼ KĨ THUẬT, 5 NÉT VẼ &amp; GHI KÍCH THƯỚC
  </text>
  <g transform="translate(40, 80)">
    <rect x="0" y="0" width="390" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="195" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f1f5f9" text-anchor="middle">1. Khổ Giấy, Khung Bản Vẽ &amp; Khung Tên</text>
    <rect x="30" y="55" width="330" height="200" fill="#1e293b" stroke="#64748b" stroke-width="1"/>
    <text x="45" y="75" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">Mép giấy A4 (297 × 210)</text>
    <rect x="50" y="70" width="295" height="170" fill="#0f172a" stroke="#38bdf8" stroke-width="2.5"/>
    <text x="25" y="160" font-family="system-ui, sans-serif" font-size="9" fill="#f59e0b" transform="rotate(-90, 25, 160)">20 mm (gáy)</text>
    <text x="200" y="65" font-family="system-ui, sans-serif" font-size="9" fill="#94a3b8" text-anchor="middle">10 mm</text>
    <rect x="205" y="195" width="140" height="45" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>
    <text x="275" y="215" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#fbbf24" text-anchor="middle">KHUNG TÊN</text>
    <text x="275" y="230" font-family="system-ui, sans-serif" font-size="9" fill="#cbd5e1" text-anchor="middle">Góc dưới cùng bên phải</text>
    <rect x="25" y="275" width="340" height="70" rx="8" fill="#1e293b" stroke="#475569"/>
    <text x="195" y="295" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#38bdf8" text-anchor="middle">Đơn vị đo mặc định: Milimét (mm)</text>
    <text x="195" y="315" font-family="system-ui, sans-serif" font-size="11" fill="#34d399" text-anchor="middle">Tỉ lệ: Nguyên hình (1:1), Thu nhỏ (1:2, 1:5), Phóng to (2:1, 5:1)</text>
    <text x="195" y="333" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Khung tên: Tên chi tiết, vật liệu, tỉ lệ, người vẽ, người duyệt</text>
  </g>
  <g transform="translate(460, 80)">
    <rect x="0" y="0" width="400" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="200" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f1f5f9" text-anchor="middle">2. Bảng 5 Loại Nét Vẽ Chuẩn TCVN</text>
    <g transform="translate(30, 50)">
      <line x1="0" y1="20" x2="120" y2="20" stroke="#ffffff" stroke-width="3"/>
      <text x="140" y="24" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#ffffff">Liền đậm: Cạnh thấy, bao thấy</text>
      <line x1="0" y1="55" x2="120" y2="55" stroke="#94a3b8" stroke-width="1.2"/>
      <text x="140" y="59" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1">Liền mảnh: Đường kích thước, dóng</text>
      <line x1="0" y1="90" x2="120" y2="90" stroke="#f43f5e" stroke-width="2" stroke-dasharray="6,4"/>
      <text x="140" y="94" font-family="system-ui, sans-serif" font-size="11" fill="#f87171">Đứt mảnh: Cạnh khuất, bao khuất</text>
      <line x1="0" y1="125" x2="120" y2="125" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="14,3,2,3"/>
      <text x="140" y="129" font-family="system-ui, sans-serif" font-size="11" fill="#7dd3fc">Gạch dài chấm mảnh: Tâm, trục</text>
      <path d="M 0 160 Q 30 150 60 160 T 120 160" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
      <text x="140" y="164" font-family="system-ui, sans-serif" font-size="11" fill="#fde047">Lượn sóng: Giới hạn cắt xén</text>
    </g>
    <rect x="25" y="245" width="350" height="100" rx="8" fill="#1e293b" stroke="#475569"/>
    <text x="200" y="268" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fbbf24" text-anchor="middle">Quy Tắc Ghi Kích Thước:</text>
    <text x="200" y="290" font-family="system-ui, sans-serif" font-size="11" fill="#38bdf8" text-anchor="middle">Đường dóng nhô qua mũi tên kích thước 2 - 4 mm</text>
    <text x="200" y="310" font-family="system-ui, sans-serif" font-size="11" fill="#34d399" text-anchor="middle">Kí hiệu đường kính: ⌀ (ví dụ: ⌀20)  •  Bán kính: R (ví dụ: R15)</text>
    <text x="200" y="330" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Nguyên tắc: Đầy đủ kích thước, không thừa không thiếu</text>
  </g>
</svg>`
};

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/toan11_svgs.js', 'module.exports = ' + JSON.stringify(svgsData, null, 2) + ';', 'utf8');
console.log('Successfully generated scratch/toan11_svgs.js with 12 detailed vector SVGs.');
