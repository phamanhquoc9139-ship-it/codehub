const fs = require('fs');

const svgsData = {
  // SVG 1: Tương tác hấp dẫn & Đại bác Newton
  1: `<svg class="w-full h-auto rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-900 text-white" viewBox="0 0 900 480" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="earthGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="50%" stop-color="#1d4ed8"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <radialGradient id="sunGlow1" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
    </radialGradient>
    <marker id="arr1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
    <marker id="arrRed1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f87171"/>
    </marker>
    <marker id="arrGreen1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399"/>
    </marker>
  </defs>

  <!-- Title Banner -->
  <rect x="20" y="20" width="860" height="40" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="450" y="46" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#38bdf8" text-anchor="middle">
    BÀI 1: TƯƠNG TÁC HẤP DẪN NEWTON &amp; MÔ HÌNH ĐẠI BÁC BẮN VỆ TINH
  </text>

  <!-- Left: Gravitational Law between 2 spheres -->
  <g transform="translate(40, 80)">
    <rect x="0" y="0" width="380" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="190" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f1f5f9" text-anchor="middle">1. Lực Hấp Dẫn Giữa Hai Vật m₁ &amp; m₂</text>
    
    <!-- Mass 1 -->
    <circle cx="80" cy="140" r="45" fill="url(#earthGrad1)" stroke="#60a5fa" stroke-width="2"/>
    <text x="80" y="145" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle">m₁</text>
    <text x="80" y="205" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">Vật nguồn 1</text>
    
    <!-- Mass 2 -->
    <circle cx="290" cy="140" r="30" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
    <text x="290" y="145" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">m₂</text>
    <text x="290" y="190" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">Vật nguồn 2</text>

    <!-- Center line & Distance r -->
    <line x1="80" y1="140" x2="290" y2="140" stroke="#64748b" stroke-dasharray="4,4"/>
    <circle cx="80" cy="140" r="3" fill="#f8fafc"/>
    <circle cx="290" cy="140" r="3" fill="#f8fafc"/>

    <!-- Force Vectors -->
    <line x1="80" y1="140" x2="160" y2="140" stroke="#f87171" stroke-width="3" marker-end="url(#arrRed1)"/>
    <text x="125" y="125" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#f87171">F₁₂</text>

    <line x1="290" y1="140" x2="210" y2="140" stroke="#f87171" stroke-width="3" marker-end="url(#arrRed1)"/>
    <text x="235" y="125" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#f87171">F₂₁</text>

    <!-- Distance indicator -->
    <line x1="80" y1="230" x2="290" y2="230" stroke="#38bdf8" stroke-width="1.5"/>
    <line x1="80" y1="225" x2="80" y2="235" stroke="#38bdf8" stroke-width="1.5"/>
    <line x1="290" y1="225" x2="290" y2="235" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="185" y="222" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#38bdf8" text-anchor="middle">Khoảng cách tâm r</text>

    <!-- Formula Box -->
    <rect x="25" y="260" width="330" height="75" rx="8" fill="#1e293b" stroke="#475569"/>
    <text x="190" y="285" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#fbbf24" text-anchor="middle">F = G · (m₁ · m₂) / r²</text>
    <text x="190" y="308" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">G ≈ 6,67 × 10⁻¹¹ N·m²/kg² (Cân xoắn Cavendish 1798)</text>
    <text x="190" y="324" font-family="system-ui, sans-serif" font-size="11" fill="#34d399" text-anchor="middle">Tăng cự li k lần ⟹ Lực giảm k² lần</text>
  </g>

  <!-- Right: Newton's Cannon & Orbits -->
  <g transform="translate(460, 80)">
    <rect x="0" y="0" width="400" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="200" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f1f5f9" text-anchor="middle">2. Ý Tưởng Đại Bác Newton &amp; Vận Tốc Vũ Trụ</text>

    <!-- Earth Center & Circle -->
    <circle cx="200" cy="200" r="75" fill="url(#earthGrad1)" stroke="#3b82f6" stroke-width="2"/>
    <text x="200" y="195" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">Trái Đất</text>
    <text x="200" y="215" font-family="system-ui, sans-serif" font-size="11" fill="#93c5fd" text-anchor="middle">R ≈ 6371 km</text>

    <!-- Mountain & Cannon on Top -->
    <path d="M 195 125 L 200 112 L 205 125 Z" fill="#64748b"/>
    <circle cx="200" cy="112" r="3" fill="#fbbf24"/>

    <!-- Trajectory A: Slow (Parabolic fall) -->
    <path d="M 200 112 Q 240 112 250 145" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="3,3"/>
    <text x="260" y="145" font-family="system-ui, sans-serif" font-size="10" fill="#ef4444">A: v &lt; v₁ (rơi)</text>

    <!-- Trajectory B: Circular Orbit (v1 = 7.9 km/s) -->
    <circle cx="200" cy="200" r="88" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
    <circle cx="200" cy="112" r="5" fill="#38bdf8"/>
    <line x1="200" y1="112" x2="250" y2="112" stroke="#38bdf8" stroke-width="2" marker-end="url(#arr1)"/>
    <text x="285" y="108" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#38bdf8">v₁ ≈ 7,9 km/s</text>

    <!-- Trajectory C: Elliptical Orbit -->
    <ellipse cx="215" cy="200" rx="115" ry="98" fill="none" stroke="#34d399" stroke-width="1.8" stroke-dasharray="5,4"/>
    <text x="345" y="190" font-family="system-ui, sans-serif" font-size="10" fill="#34d399">C: v₁ &lt; v &lt; v₂</text>

    <!-- Trajectory D: Escape Hyperbola -->
    <path d="M 200 112 C 260 112 360 90 380 40" fill="none" stroke="#f59e0b" stroke-width="2"/>
    <text x="360" y="30" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" fill="#f59e0b">D: v₂ = 11,2 km/s (Thoát ly)</text>

    <!-- Legend Box -->
    <rect x="20" y="295" width="360" height="50" rx="6" fill="#1e293b" stroke="#475569"/>
    <text x="35" y="315" font-family="system-ui, sans-serif" font-size="11" fill="#93c5fd">• Quỹ đạo LEO: h = 200-2000 km, T ≈ 90-120 phút (ISS, Hubble)</text>
    <text x="35" y="333" font-family="system-ui, sans-serif" font-size="11" fill="#fde047">• Quỹ đạo GEO: h = 35.786 km, T = 24 giờ (Vinasat-1 đứng yên)</text>
  </g>
</svg>`,

  // SVG 2: Cường độ trường g & Đường sức & Chồng chất
  2: `<svg class="w-full h-auto rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-900 text-white" viewBox="0 0 900 480" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="fieldGrad2" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.4"/>
      <stop offset="70%" stop-color="#1e40af" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0"/>
    </radialGradient>
    <marker id="arrIn2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#60a5fa"/>
    </marker>
    <marker id="arrRes2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b"/>
    </marker>
  </defs>

  <!-- Title Banner -->
  <rect x="20" y="20" width="860" height="40" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="450" y="46" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#38bdf8" text-anchor="middle">
    BÀI 2: VECTOR CƯỜNG ĐỘ TRƯỜNG HẤP DẪN g⃗ &amp; NGUYÊN LÍ CHỒNG CHẤT
  </text>

  <!-- Left: Radial Field Lines towards Earth Center -->
  <g transform="translate(40, 80)">
    <rect x="0" y="0" width="380" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="190" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f1f5f9" text-anchor="middle">1. Đường Sức Xuyên Tâm Hướng Về Khối Cầu</text>

    <!-- Field Glow -->
    <circle cx="190" cy="175" r="140" fill="url(#fieldGrad2)"/>

    <!-- Earth -->
    <circle cx="190" cy="175" r="55" fill="#1d4ed8" stroke="#60a5fa" stroke-width="2"/>
    <text x="190" y="172" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">M (Tâm)</text>
    <text x="190" y="190" font-family="system-ui, sans-serif" font-size="11" fill="#bfdbfe" text-anchor="middle">g₀ = GM/R²</text>

    <!-- Radial field lines inward -->
    <line x1="60" y1="175" x2="125" y2="175" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrIn2)"/>
    <line x1="320" y1="175" x2="255" y2="175" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrIn2)"/>
    <line x1="190" y1="45" x2="190" y2="110" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrIn2)"/>
    <line x1="190" y1="305" x2="190" y2="240" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrIn2)"/>
    <line x1="95" y1="80" x2="145" y2="130" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrIn2)"/>
    <line x1="285" y1="80" x2="235" y2="130" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrIn2)"/>
    <line x1="95" y1="270" x2="145" y2="220" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrIn2)"/>
    <line x1="285" y1="270" x2="235" y2="220" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrIn2)"/>

    <text x="190" y="325" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">Đường sức dày ở gần mặt đất, thưa dần ra xa</text>
    <text x="190" y="345" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#38bdf8" text-anchor="middle">g(r) = GM / r² = GM / (R + h)² [N/kg hoặc m/s²]</text>
  </g>

  <!-- Right: Superposition Vector Addition -->
  <g transform="translate(460, 80)">
    <rect x="0" y="0" width="400" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="200" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f1f5f9" text-anchor="middle">2. Nguyên Lí Chồng Chất: g⃗ = g⃗₁ + g⃗₂</text>

    <!-- Source Body 1 -->
    <circle cx="80" cy="220" r="35" fill="#2563eb" stroke="#93c5fd" stroke-width="1.5"/>
    <text x="80" y="225" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">M₁</text>
    <text x="80" y="270" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">Trái Đất</text>

    <!-- Source Body 2 -->
    <circle cx="330" cy="220" r="22" fill="#475569" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="330" y="225" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">M₂</text>
    <text x="330" y="255" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">Mặt Trăng</text>

    <!-- Point P in space -->
    <circle cx="190" cy="110" r="4" fill="#f43f5e"/>
    <text x="190" y="98" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#f43f5e" text-anchor="middle">Điểm P</text>

    <!-- Vector g1 from P towards M1 -->
    <line x1="190" y1="110" x2="135" y2="165" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arrIn2)"/>
    <text x="140" y="135" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#38bdf8">g⃗₁</text>

    <!-- Vector g2 from P towards M2 -->
    <line x1="190" y1="110" x2="250" y2="157" stroke="#34d399" stroke-width="2.5" marker-end="url(#arrIn2)"/>
    <text x="235" y="130" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#34d399">g⃗₂</text>

    <!-- Parallelogram dashed lines -->
    <line x1="135" y1="165" x2="195" y2="212" stroke="#64748b" stroke-dasharray="3,3"/>
    <line x1="250" y1="157" x2="195" y2="212" stroke="#64748b" stroke-dasharray="3,3"/>

    <!-- Resultant Vector g -->
    <line x1="190" y1="110" x2="195" y2="210" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrRes2)"/>
    <text x="210" y="195" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#f59e0b">g⃗ = g⃗₁+g⃗₂</text>

    <!-- Info Box -->
    <rect x="25" y="285" width="350" height="60" rx="8" fill="#1e293b" stroke="#475569"/>
    <text x="200" y="308" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fbbf24" text-anchor="middle">Điểm triệt tiêu trường (g = 0):</text>
    <text x="200" y="328" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">Nằm giữa 2 thiên thể: r₁ / r₂ = √(M₁ / M₂) (lệch về Mặt Trăng)</text>
  </g>
</svg>`,

  // SVG 3: Thế hấp dẫn & Mặt đẳng thế & Giếng thế
  3: `<svg class="w-full h-auto rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-900 text-white" viewBox="0 0 900 480" xmlns="http://www.w3.org/2000/svg">
  <!-- Title Banner -->
  <rect x="20" y="20" width="860" height="40" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="450" y="46" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#38bdf8" text-anchor="middle">
    BÀI 3: THẾ HẤP DẪN φ, MẶT ĐẲNG THẾ VÀ BẢO TOÀN CƠ NĂNG VŨ TRỤ
  </text>

  <!-- Left: Equipotential concentric surfaces -->
  <g transform="translate(40, 80)">
    <rect x="0" y="0" width="380" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="190" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f1f5f9" text-anchor="middle">1. Các Mặt Đẳng Thế Đồng Tâm</text>

    <!-- Concentric Equipotential Spheres -->
    <circle cx="190" cy="180" r="140" fill="none" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="4,4"/>
    <circle cx="190" cy="180" r="105" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4,4"/>
    <circle cx="190" cy="180" r="70" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,4"/>

    <!-- Central Body -->
    <circle cx="190" cy="180" r="40" fill="#2563eb" stroke="#60a5fa" stroke-width="2"/>
    <text x="190" y="185" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">M</text>

    <!-- Labels for Potential Values (negative values) -->
    <text x="190" y="125" font-family="system-ui, sans-serif" font-size="11" fill="#f87171" font-weight="bold" text-anchor="middle">φ₁ = -62,5 MJ/kg (Bề mặt)</text>
    <text x="190" y="90" font-family="system-ui, sans-serif" font-size="11" fill="#fbbf24" font-weight="bold" text-anchor="middle">φ₂ = -31,2 MJ/kg (r = 2R)</text>
    <text x="190" y="55" font-family="system-ui, sans-serif" font-size="11" fill="#34d399" font-weight="bold" text-anchor="middle">φ₃ = -15,6 MJ/kg (r = 4R)</text>

    <!-- Work path -->
    <path d="M 190 75 Q 260 110 260 180" fill="none" stroke="#a855f7" stroke-width="2.5"/>
    <circle cx="190" cy="75" r="4" fill="#a855f7"/>
    <circle cx="260" cy="180" r="4" fill="#a855f7"/>
    <text x="280" y="130" font-family="system-ui, sans-serif" font-size="11" fill="#d8b4fe">A₁₂ = W_t1 - W_t2</text>

    <text x="190" y="340" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">Mặt đẳng thế luôn vuông góc với các đường sức</text>
  </g>

  <!-- Right: Potential Well Curve & Escape Energy -->
  <g transform="translate(460, 80)">
    <rect x="0" y="0" width="400" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="200" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f1f5f9" text-anchor="middle">2. Giếng Thế Hấp Dẫn &amp; Năng Lượng Thoát Ly</text>

    <!-- Axes -->
    <line x1="50" y1="80" x2="370" y2="80" stroke="#94a3b8" stroke-width="1.5"/>
    <line x1="60" y1="40" x2="60" y2="310" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="360" y="70" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">Khoảng cách r</text>
    <text x="70" y="55" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">W_t (Joule)</text>
    <text x="45" y="75" font-family="system-ui, sans-serif" font-size="12" fill="#f8fafc">0</text>

    <!-- Potential Curve W_t = -GMm/r -->
    <path d="M 80 270 Q 120 180 200 130 T 360 95" fill="none" stroke="#38bdf8" stroke-width="3"/>

    <!-- Earth Radius R mark -->
    <line x1="80" y1="75" x2="80" y2="275" stroke="#f43f5e" stroke-dasharray="3,3"/>
    <text x="80" y="95" font-family="system-ui, sans-serif" font-size="11" fill="#f43f5e">R_TĐ</text>
    <circle cx="80" cy="270" r="5" fill="#f43f5e"/>
    <text x="135" y="275" font-family="system-ui, sans-serif" font-size="11" fill="#f87171">-GMm/R (Đáy giếng thế)</text>

    <!-- Energy States -->
    <line x1="80" y1="180" x2="350" y2="180" stroke="#ef4444" stroke-width="2"/>
    <text x="260" y="172" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#ef4444">W &lt; 0: Quỹ đạo elip/tròn</text>

    <line x1="80" y1="80" x2="350" y2="80" stroke="#fbbf24" stroke-width="2.5"/>
    <text x="250" y="100" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#fbbf24">W = 0: Thoát ly v₂ = 11,2 km/s</text>

    <!-- Formula Summary -->
    <rect x="25" y="295" width="350" height="50" rx="6" fill="#1e293b" stroke="#475569"/>
    <text x="200" y="315" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#38bdf8" text-anchor="middle">Bảo toàn cơ năng: ½mv² - GMm/r = Hằng số</text>
    <text x="200" y="333" font-family="system-ui, sans-serif" font-size="11" fill="#34d399" text-anchor="middle">v₂ = √(2GM/R) = √2 · v₁ (Vận tốc vũ trụ cấp 2)</text>
  </g>
</svg>`,

  // SVG 4: Sơ đồ khối Thu Phát & Dạng sóng AM / FM
  4: `<svg class="w-full h-auto rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-900 text-white" viewBox="0 0 900 480" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrBlk4" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
  </defs>

  <!-- Title Banner -->
  <rect x="20" y="20" width="860" height="40" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="450" y="46" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#38bdf8" text-anchor="middle">
    BÀI 4: SƠ ĐỒ KHỐI THU PHÁT VÔ TUYẾN &amp; DẠNG SÓNG BIẾN ĐIỆU AM / FM
  </text>

  <!-- Top: Block Diagram of Transmitter and Receiver -->
  <g transform="translate(40, 80)">
    <rect x="0" y="0" width="820" height="175" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="410" y="25" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#f1f5f9" text-anchor="middle">HỆ THỐNG TRUYỀN THÔNG VÔ TUYẾN TOÀN TRÌNH</text>

    <!-- Transmitter Blocks -->
    <rect x="20" y="45" width="85" height="40" rx="6" fill="#1e3a8a" stroke="#3b82f6"/>
    <text x="62" y="68" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">Micro</text>

    <line x1="105" y1="65" x2="135" y2="65" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrBlk4)"/>

    <rect x="140" y="45" width="95" height="40" rx="6" fill="#1e3a8a" stroke="#3b82f6"/>
    <text x="187" y="62" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">Mạch Biến Điệu</text>
    <text x="187" y="77" font-family="system-ui, sans-serif" font-size="9" fill="#93c5fd" text-anchor="middle">(Modulator)</text>

    <!-- Carrier Oscillator -->
    <rect x="140" y="105" width="95" height="35" rx="6" fill="#334155" stroke="#64748b"/>
    <text x="187" y="126" font-family="system-ui, sans-serif" font-size="10" fill="#f8fafc" text-anchor="middle">Sóng mang fc</text>
    <line x1="187" y1="105" x2="187" y2="90" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrBlk4)"/>

    <line x1="235" y1="65" x2="265" y2="65" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrBlk4)"/>

    <rect x="270" y="45" width="95" height="40" rx="6" fill="#1e3a8a" stroke="#3b82f6"/>
    <text x="317" y="68" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">Khuếch đại RF</text>

    <!-- Tx Antenna -->
    <path d="M 385 65 L 405 65 L 405 45 M 395 35 L 405 45 L 415 35" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
    <text x="405" y="25" font-family="system-ui, sans-serif" font-size="10" fill="#38bdf8" text-anchor="middle">Anten Phát</text>

    <!-- Waves in Space -->
    <path d="M 420 50 Q 435 40 450 50 Q 465 60 480 50" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="3,3"/>
    <text x="450" y="70" font-family="system-ui, sans-serif" font-size="10" fill="#fbbf24" text-anchor="middle">Không gian</text>

    <!-- Rx Antenna -->
    <path d="M 495 65 L 515 65 L 515 45 M 505 35 L 515 45 L 525 35" fill="none" stroke="#10b981" stroke-width="2.5"/>
    <text x="515" y="25" font-family="system-ui, sans-serif" font-size="10" fill="#10b981" text-anchor="middle">Anten Thu</text>

    <!-- Receiver Blocks -->
    <rect x="535" y="45" width="90" height="40" rx="6" fill="#065f46" stroke="#10b981"/>
    <text x="580" y="62" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">Chọn sóng</text>
    <text x="580" y="76" font-family="system-ui, sans-serif" font-size="9" fill="#a7f3d0" text-anchor="middle">Khung LC cộng hưởng</text>

    <line x1="625" y1="65" x2="645" y2="65" stroke="#34d399" stroke-width="2" marker-end="url(#arrBlk4)"/>

    <rect x="650" y="45" width="90" height="40" rx="6" fill="#065f46" stroke="#10b981"/>
    <text x="695" y="62" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">Tách sóng</text>
    <text x="695" y="76" font-family="system-ui, sans-serif" font-size="9" fill="#a7f3d0" text-anchor="middle">(Demodulator)</text>

    <line x1="740" y1="65" x2="760" y2="65" stroke="#34d399" stroke-width="2" marker-end="url(#arrBlk4)"/>

    <!-- Speaker -->
    <path d="M 765 55 L 775 55 L 790 45 L 790 85 L 775 75 L 765 75 Z" fill="#b45309" stroke="#f59e0b"/>
    <text x="780" y="105" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" fill="#fbbf24" text-anchor="middle">Loa</text>
  </g>

  <!-- Bottom Left: AM Waveform -->
  <g transform="translate(40, 275)">
    <rect x="0" y="0" width="395" height="175" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="197" y="25" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#38bdf8" text-anchor="middle">Biến Điệu Biên Độ (AM - Amplitude Modulation)</text>
    <!-- Envelope (audio) -->
    <path d="M 30 75 Q 80 40 130 75 T 230 75 T 330 75" fill="none" stroke="#f87171" stroke-width="1.8" stroke-dasharray="3,3"/>
    <path d="M 30 115 Q 80 150 130 115 T 230 115 T 330 115" fill="none" stroke="#f87171" stroke-width="1.8" stroke-dasharray="3,3"/>
    <!-- Fast carrier oscillating inside envelope -->
    <path d="M 30 95 L 40 60 L 50 130 L 60 50 L 70 140 L 80 45 L 90 145 L 100 55 L 110 135 L 120 70 L 130 120 L 140 80 L 150 110 L 160 85 L 170 105 L 180 80 L 190 110 L 200 65 L 210 125 L 220 50 L 230 140 L 240 55 L 250 135 L 260 70 L 270 120 L 280 80 L 290 110 L 300 90 L 310 100 L 320 92 L 330 95" fill="none" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="197" y="160" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">Tần số sóng mang KHÔNG ĐỔI • Biên độ thay đổi theo âm thanh</text>
  </g>

  <!-- Bottom Right: FM Waveform -->
  <g transform="translate(465, 275)">
    <rect x="0" y="0" width="395" height="175" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="197" y="25" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#34d399" text-anchor="middle">Biến Điệu Tần Số (FM - Frequency Modulation)</text>
    <!-- Constant Envelope limits -->
    <line x1="30" y1="55" x2="360" y2="55" stroke="#64748b" stroke-dasharray="2,2"/>
    <line x1="30" y1="135" x2="360" y2="135" stroke="#64748b" stroke-dasharray="2,2"/>
    <!-- FM wave: dense then sparse then dense -->
    <path d="M 30 95 Q 35 55 40 95 Q 45 135 50 95 Q 55 55 60 95 Q 65 135 70 95 Q 75 55 80 95 Q 90 135 100 95 Q 115 55 130 95 Q 145 135 160 95 Q 175 55 190 95 Q 200 135 210 95 Q 215 55 220 95 Q 225 135 230 95 Q 235 55 240 95 Q 245 135 250 95 Q 260 55 270 95 Q 285 135 300 95 Q 315 55 330 95 Q 345 135 360 95" fill="none" stroke="#34d399" stroke-width="2"/>
    <text x="197" y="160" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">Biên độ KHÔNG ĐỔI • Tần số biến thiên (Dày = Âm lớn, Thưa = Âm nhỏ)</text>
  </g>
</svg>`,

  // SVG 5: Tín hiệu Tương tự vs Số & Quy trình ADC/PCM
  5: `<svg class="w-full h-auto rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-900 text-white" viewBox="0 0 900 480" xmlns="http://www.w3.org/2000/svg">
  <!-- Title Banner -->
  <rect x="20" y="20" width="860" height="40" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="450" y="46" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#38bdf8" text-anchor="middle">
    BÀI 5: TÍN HIỆU TƯƠNG TỰ vs SỐ &amp; QUY TRÌNH CHUYỂN ĐỔI ADC / PCM
  </text>

  <!-- Left: Analog to Digital Sampling & Quantization -->
  <g transform="translate(40, 80)">
    <rect x="0" y="0" width="410" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="205" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f1f5f9" text-anchor="middle">1. Lấy Mẫu (Sampling) &amp; Lượng Tử Hóa</text>

    <!-- Axes -->
    <line x1="50" y1="260" x2="380" y2="260" stroke="#64748b" stroke-width="1.5"/>
    <line x1="60" y1="60" x2="60" y2="270" stroke="#64748b" stroke-width="1.5"/>
    <text x="375" y="280" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Thời gian t</text>
    <text x="70" y="75" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Biên độ (V)</text>

    <!-- Quantization levels grid lines -->
    <line x1="60" y1="80" x2="370" y2="80" stroke="#334155" stroke-dasharray="2,2"/>
    <text x="45" y="84" font-family="system-ui, sans-serif" font-size="10" fill="#64748b">111 (7)</text>
    <line x1="60" y1="110" x2="370" y2="110" stroke="#334155" stroke-dasharray="2,2"/>
    <text x="45" y="114" font-family="system-ui, sans-serif" font-size="10" fill="#64748b">110 (6)</text>
    <line x1="60" y1="140" x2="370" y2="140" stroke="#334155" stroke-dasharray="2,2"/>
    <text x="45" y="144" font-family="system-ui, sans-serif" font-size="10" fill="#64748b">101 (5)</text>
    <line x1="60" y1="170" x2="370" y2="170" stroke="#334155" stroke-dasharray="2,2"/>
    <text x="45" y="174" font-family="system-ui, sans-serif" font-size="10" fill="#64748b">100 (4)</text>
    <line x1="60" y1="200" x2="370" y2="200" stroke="#334155" stroke-dasharray="2,2"/>
    <text x="45" y="204" font-family="system-ui, sans-serif" font-size="10" fill="#64748b">011 (3)</text>
    <line x1="60" y1="230" x2="370" y2="230" stroke="#334155" stroke-dasharray="2,2"/>
    <text x="45" y="234" font-family="system-ui, sans-serif" font-size="10" fill="#64748b">010 (2)</text>

    <!-- Original Analog Curve -->
    <path d="M 60 220 Q 120 70 200 120 T 360 240" fill="none" stroke="#f43f5e" stroke-width="2.5"/>

    <!-- Sample pulses at Ts intervals -->
    <line x1="90" y1="260" x2="90" y2="140" stroke="#38bdf8" stroke-width="2"/>
    <circle cx="90" cy="140" r="4" fill="#38bdf8"/>
    <text x="90" y="275" font-family="system-ui, sans-serif" font-size="9" fill="#38bdf8" text-anchor="middle">Ts</text>

    <line x1="130" y1="260" x2="130" y2="80" stroke="#38bdf8" stroke-width="2"/>
    <circle cx="130" cy="80" r="4" fill="#38bdf8"/>
    <text x="130" y="275" font-family="system-ui, sans-serif" font-size="9" fill="#38bdf8" text-anchor="middle">2Ts</text>

    <line x1="170" y1="260" x2="170" y2="110" stroke="#38bdf8" stroke-width="2"/>
    <circle cx="170" cy="110" r="4" fill="#38bdf8"/>
    <text x="170" y="275" font-family="system-ui, sans-serif" font-size="9" fill="#38bdf8" text-anchor="middle">3Ts</text>

    <line x1="210" y1="260" x2="210" y2="140" stroke="#38bdf8" stroke-width="2"/>
    <circle cx="210" cy="140" r="4" fill="#38bdf8"/>
    <text x="210" y="275" font-family="system-ui, sans-serif" font-size="9" fill="#38bdf8" text-anchor="middle">4Ts</text>

    <line x1="250" y1="260" x2="250" y2="170" stroke="#38bdf8" stroke-width="2"/>
    <circle cx="250" cy="170" r="4" fill="#38bdf8"/>
    <text x="250" y="275" font-family="system-ui, sans-serif" font-size="9" fill="#38bdf8" text-anchor="middle">5Ts</text>

    <line x1="290" y1="260" x2="290" y2="200" stroke="#38bdf8" stroke-width="2"/>
    <circle cx="290" cy="200" r="4" fill="#38bdf8"/>
    <text x="290" y="275" font-family="system-ui, sans-serif" font-size="9" fill="#38bdf8" text-anchor="middle">6Ts</text>

    <!-- Info note -->
    <rect x="20" y="300" width="370" height="45" rx="6" fill="#1e293b" stroke="#475569"/>
    <text x="205" y="318" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#fbbf24" text-anchor="middle">Định lí Nyquist-Shannon: fs ≥ 2 · f_max</text>
    <text x="205" y="335" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Ví dụ âm thanh CD: fs = 44,1 kHz (lớn hơn 2 × 20 kHz)</text>
  </g>

  <!-- Right: PCM 3 Steps & Binary Stream -->
  <g transform="translate(470, 80)">
    <rect x="0" y="0" width="390" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="195" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f1f5f9" text-anchor="middle">2. Quy Trình 3 Bước Điều Chế Mã Xung (PCM)</text>

    <!-- 3 Flow Steps -->
    <rect x="25" y="55" width="340" height="45" rx="8" fill="#1e3a8a" stroke="#3b82f6"/>
    <text x="45" y="77" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#ffffff">Bước 1: Lấy mẫu (Sampling)</text>
    <text x="45" y="92" font-family="system-ui, sans-serif" font-size="10" fill="#bfdbfe">Đo biên độ tức thời sau mỗi khoảng Ts = 1/fs</text>

    <rect x="25" y="115" width="340" height="45" rx="8" fill="#065f46" stroke="#10b981"/>
    <text x="45" y="137" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#ffffff">Bước 2: Lượng tử hóa (Quantization)</text>
    <text x="45" y="152" font-family="system-ui, sans-serif" font-size="10" fill="#a7f3d0">Làm tròn về 2ⁿ mức rời rạc (n = 8 bit ⟹ 256 mức)</text>

    <rect x="25" y="175" width="340" height="45" rx="8" fill="#701a75" stroke="#d946ef"/>
    <text x="45" y="197" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#ffffff">Bước 3: Mã hóa (Encoding)</text>
    <text x="45" y="212" font-family="system-ui, sans-serif" font-size="10" fill="#f5d0fe">Chuyển chỉ số mức thành từ mã nhị phân các bit 0 và 1</text>

    <!-- Bit stream square wave -->
    <rect x="25" y="235" width="340" height="65" rx="6" fill="#1e293b" stroke="#475569"/>
    <text x="195" y="252" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#38bdf8" text-anchor="middle">Chuỗi Xung Nhị Phân Đầu Ra:</text>
    <path d="M 40 285 L 65 285 L 65 265 L 90 265 L 90 285 L 115 285 L 115 265 L 165 265 L 165 285 L 190 285 L 190 265 L 215 265 L 215 285 L 240 285 L 240 265 L 290 265 L 290 285 L 340 285" fill="none" stroke="#22c55e" stroke-width="2.5"/>
    <text x="52" y="297" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">0</text>
    <text x="77" y="260" font-family="system-ui, sans-serif" font-size="10" fill="#22c55e">1</text>
    <text x="102" y="297" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">0</text>
    <text x="127" y="260" font-family="system-ui, sans-serif" font-size="10" fill="#22c55e">1</text>
    <text x="152" y="260" font-family="system-ui, sans-serif" font-size="10" fill="#22c55e">1</text>
    <text x="177" y="297" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">0</text>

    <!-- Formula Bitrate -->
    <text x="195" y="325" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#fbbf24" text-anchor="middle">Bitrate = fs × n × số kênh</text>
    <text x="195" y="342" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Trạm lặp số (regenerator) tái sinh xung vuông chống nhiễu tuyệt đối</text>
  </g>
</svg>`,

  // SVG 6: Môi trường Truyền Dẫn & Suy Giảm Decibel (dB)
  6: `<svg class="w-full h-auto rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-900 text-white" viewBox="0 0 900 480" xmlns="http://www.w3.org/2000/svg">
  <!-- Title Banner -->
  <rect x="20" y="20" width="860" height="40" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="450" y="46" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#38bdf8" text-anchor="middle">
    BÀI 6: CÁC MÔI TRƯỜNG TRUYỀN DẪN &amp; SUY GIẢM TÍN HIỆU DECIBEL (dB)
  </text>

  <!-- Left: Physical Media Types -->
  <g transform="translate(40, 80)">
    <rect x="0" y="0" width="410" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="205" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f1f5f9" text-anchor="middle">1. Cấu Trúc Các Môi Trường Truyền Dẫn</text>

    <!-- Media 1: Twisted Pair -->
    <rect x="20" y="50" width="370" height="65" rx="8" fill="#1e293b" stroke="#475569"/>
    <text x="35" y="70" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#38bdf8">Cáp xoắn đôi (Twisted Pair / UTP, STP)</text>
    <!-- Twisted wires drawing -->
    <path d="M 35 95 Q 60 85 85 95 Q 110 105 135 95 Q 160 85 185 95" fill="none" stroke="#f59e0b" stroke-width="3"/>
    <path d="M 35 95 Q 60 105 85 95 Q 110 85 135 95 Q 160 105 185 95" fill="none" stroke="#3b82f6" stroke-width="3"/>
    <text x="200" y="98" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">Xoắn chặt triệt tiêu nhiễu chéo (crosstalk), L &lt; 100m</text>

    <!-- Media 2: Coaxial Cable -->
    <rect x="20" y="125" width="370" height="65" rx="8" fill="#1e293b" stroke="#475569"/>
    <text x="35" y="145" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#38bdf8">Cáp đồng trục (Coaxial Cable)</text>
    <!-- Coaxial layers -->
    <rect x="35" y="160" width="140" height="18" rx="4" fill="#334155"/>
    <rect x="55" y="163" width="100" height="12" rx="2" fill="#64748b"/>
    <circle cx="165" cy="169" r="4" fill="#b45309"/>
    <text x="190" y="173" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">Lõi đồng + Điện môi + Lưới chống nhiễu</text>

    <!-- Media 3: Optical Fiber -->
    <rect x="20" y="200" width="370" height="75" rx="8" fill="#1e293b" stroke="#475569"/>
    <text x="35" y="220" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#34d399">Cáp sợi quang (Optical Fiber)</text>
    <!-- Light reflection inside fiber -->
    <rect x="35" y="235" width="150" height="26" rx="4" fill="#0f766e" stroke="#14b8a6"/>
    <line x1="35" y1="235" x2="185" y2="235" stroke="#5eead4" stroke-width="1.5"/>
    <line x1="35" y1="261" x2="185" y2="261" stroke="#5eead4" stroke-width="1.5"/>
    <!-- Light ray bouncing -->
    <path d="M 35 248 L 65 238 L 95 258 L 125 238 L 155 258 L 185 248" fill="none" stroke="#facc15" stroke-width="2"/>
    <text x="195" y="245" font-family="system-ui, sans-serif" font-size="10" fill="#5eead4">Phản xạ toàn phần</text>
    <text x="195" y="260" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">α cực thấp: ~0,2 dB/km ở 1550 nm</text>

    <!-- Wireless note -->
    <text x="205" y="320" font-family="system-ui, sans-serif" font-size="11" fill="#fbbf24" text-anchor="middle">Sóng vô tuyến không dây: Suy hao tỉ lệ bình phương cự li r²</text>
    <text x="205" y="338" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Bị hấp thụ bởi hơi nước, mưa giông, vật cản bê tông</text>
  </g>

  <!-- Right: Attenuation Curve in dB -->
  <g transform="translate(470, 80)">
    <rect x="0" y="0" width="390" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="195" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f1f5f9" text-anchor="middle">2. Độ Suy Giảm Công Suất Decibel (dB, dBm)</text>

    <!-- Attenuation chart -->
    <line x1="50" y1="240" x2="360" y2="240" stroke="#64748b" stroke-width="1.5"/>
    <line x1="60" y1="50" x2="60" y2="250" stroke="#64748b" stroke-width="1.5"/>
    <text x="330" y="260" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Chiều dài L (km)</text>
    <text x="70" y="65" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Công suất P (mW)</text>

    <!-- Exponential decay curve -->
    <path d="M 60 80 Q 110 170 200 215 T 350 238" fill="none" stroke="#f43f5e" stroke-width="3"/>

    <circle cx="60" cy="80" r="4" fill="#38bdf8"/>
    <text x="80" y="85" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#38bdf8">P_vào</text>

    <circle cx="200" cy="215" r="4" fill="#fbbf24"/>
    <text x="220" y="210" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#fbbf24">P_ra = P_vào / 10 (10 dB)</text>

    <!-- Formulas Table Box -->
    <rect x="25" y="270" width="340" height="75" rx="8" fill="#1e293b" stroke="#475569"/>
    <text x="195" y="290" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#38bdf8" text-anchor="middle">A(dB) = 10 · log₁₀(P_vào / P_ra)  |  A = α · L</text>
    <text x="195" y="310" font-family="system-ui, sans-serif" font-size="11" fill="#34d399" text-anchor="middle">Công suất theo dBm: P(dBm) = 10 · log₁₀(P / 1 mW)</text>
    <text x="195" y="330" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">1 mW = 0 dBm  •  1 W = 1000 mW = +30 dBm  •  Giảm ½ = 3 dB</text>
  </g>
</svg>`,

  // SVG 7: Cảm biến & Mạch phân áp & Mạch cầu
  7: `<svg class="w-full h-auto rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-900 text-white" viewBox="0 0 900 480" xmlns="http://www.w3.org/2000/svg">
  <!-- Title Banner -->
  <rect x="20" y="20" width="860" height="40" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="450" y="46" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#38bdf8" text-anchor="middle">
    BÀI 7: ĐẶC TUYẾN CẢM BIẾN (LDR, NTC) &amp; MẠCH CẦU PHÂN ÁP
  </text>

  <!-- Left: Sensor Characteristic Curves (LDR & NTC) -->
  <g transform="translate(40, 80)">
    <rect x="0" y="0" width="390" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="195" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f1f5f9" text-anchor="middle">1. Đường Đặc Tuyến Điện Trở Cảm Biến</text>

    <!-- Axes -->
    <line x1="50" y1="240" x2="350" y2="240" stroke="#64748b" stroke-width="1.5"/>
    <line x1="60" y1="50" x2="60" y2="250" stroke="#64748b" stroke-width="1.5"/>
    <text x="290" y="260" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Ánh sáng / Nhiệt độ</text>
    <text x="70" y="65" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Điện trở R (Ω)</text>

    <!-- LDR curve: sharp drop -->
    <path d="M 70 80 Q 90 200 180 225 T 340 235" fill="none" stroke="#f59e0b" stroke-width="3"/>
    <text x="190" y="160" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#f59e0b">LDR (Quang trở)</text>
    <text x="75" y="75" font-family="system-ui, sans-serif" font-size="10" fill="#fde047">R_tối ~ 1 MΩ</text>
    <text x="260" y="225" font-family="system-ui, sans-serif" font-size="10" fill="#fde047">R_sáng ~ 1 kΩ</text>

    <!-- NTC curve -->
    <path d="M 70 120 Q 130 190 220 220 T 340 238" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="4,3"/>
    <text x="230" y="195" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#ef4444">NTC (Nhiệt điện trở âm)</text>

    <!-- Rules Box -->
    <rect x="25" y="275" width="340" height="70" rx="8" fill="#1e293b" stroke="#475569"/>
    <text x="195" y="295" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#fbbf24" text-anchor="middle">QUY TẮC CỐT LÕI CẢM BIẾN:</text>
    <text x="195" y="315" font-family="system-ui, sans-serif" font-size="11" fill="#93c5fd" text-anchor="middle">• Chiếu sáng mạnh ⟹ Điện trở LDR GIẢM</text>
    <text x="195" y="333" font-family="system-ui, sans-serif" font-size="11" fill="#fca5a5" text-anchor="middle">• Nhiệt độ tăng cao ⟹ Điện trở NTC GIẢM</text>
  </g>

  <!-- Right: Voltage Divider Schematic -->
  <g transform="translate(450, 80)">
    <rect x="0" y="0" width="410" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="205" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f1f5f9" text-anchor="middle">2. Mạch Cầu Phân Áp Biến Đổi Điện Trở Thành Điện Áp</text>

    <!-- Circuit schematic -->
    <!-- Vs positive rail -->
    <line x1="80" y1="60" x2="160" y2="60" stroke="#ef4444" stroke-width="2.5"/>
    <circle cx="80" cy="60" r="4" fill="#ef4444"/>
    <text x="65" y="55" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#ef4444">+Vs</text>

    <line x1="120" y1="60" x2="120" y2="90" stroke="#f8fafc" stroke-width="2"/>

    <!-- Resistor R1 -->
    <rect x="105" y="90" width="30" height="50" fill="#334155" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="120" y="120" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">R₁</text>

    <line x1="120" y1="140" x2="120" y2="175" stroke="#f8fafc" stroke-width="2"/>
    <circle cx="120" cy="175" r="4" fill="#38bdf8"/>

    <!-- Output tap U_ra -->
    <line x1="120" y1="175" x2="220" y2="175" stroke="#38bdf8" stroke-width="2.5"/>
    <circle cx="220" cy="175" r="4" fill="#38bdf8"/>
    <text x="235" y="180" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#38bdf8">U_ra</text>

    <line x1="120" y1="175" x2="120" y2="205" stroke="#f8fafc" stroke-width="2"/>

    <!-- Sensor R2 (LDR with light arrows) -->
    <rect x="105" y="205" width="30" height="50" fill="#334155" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="120" y="235" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#fbbf24" text-anchor="middle">LDR</text>
    <!-- Light arrows striking LDR -->
    <line x1="75" y1="205" x2="95" y2="220" stroke="#facc15" stroke-width="2"/>
    <line x1="75" y1="225" x2="95" y2="240" stroke="#facc15" stroke-width="2"/>

    <line x1="120" y1="255" x2="120" y2="280" stroke="#f8fafc" stroke-width="2"/>

    <!-- Ground rail (GND) -->
    <line x1="80" y1="280" x2="160" y2="280" stroke="#64748b" stroke-width="2.5"/>
    <line x1="100" y1="287" x2="140" y2="287" stroke="#64748b" stroke-width="2"/>
    <line x1="110" y1="294" x2="130" y2="294" stroke="#64748b" stroke-width="1.5"/>
    <text x="65" y="285" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">GND</text>

    <!-- Formula & Logic Box -->
    <rect x="250" y="80" width="145" height="180" rx="8" fill="#1e293b" stroke="#475569"/>
    <text x="322" y="105" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#38bdf8" text-anchor="middle">Công thức:</text>
    <text x="322" y="130" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fbbf24" text-anchor="middle">U_ra = Vs · R₂</text>
    <text x="322" y="148" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fbbf24" text-anchor="middle">───────</text>
    <text x="322" y="165" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fbbf24" text-anchor="middle">R₁ + R₂</text>
    <text x="322" y="200" font-family="system-ui, sans-serif" font-size="10" fill="#34d399" text-anchor="middle">Trời TỐI: R_LDR ↑</text>
    <text x="322" y="220" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" fill="#38bdf8" text-anchor="middle">⟹ U_ra TĂNG VỌT</text>
    <text x="322" y="240" font-family="system-ui, sans-serif" font-size="9" fill="#94a3b8" text-anchor="middle">(Kích hoạt đèn đêm)</text>

    <text x="205" y="335" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">Mạch cầu Wheatstone cân bằng: R₁ / R₂ = R₃ / R₄ (Đo biến thiên cực nhỏ)</text>
  </g>
</svg>`,

  // SVG 8: Op-Amp So Sánh & Relay & Diode Dập Xung & LED
  8: `<svg class="w-full h-auto rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-900 text-white" viewBox="0 0 900 480" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrOp8" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
  </defs>

  <!-- Title Banner -->
  <rect x="20" y="20" width="860" height="40" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="450" y="46" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#38bdf8" text-anchor="middle">
    BÀI 8: OP-AMP SO SÁNH, RELAY CÁCH LY CÓ DIODE BẢO VỆ &amp; MẠCH LED
  </text>

  <!-- Left: Op-Amp Comparator Mode -->
  <g transform="translate(40, 80)">
    <rect x="0" y="0" width="390" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="195" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f1f5f9" text-anchor="middle">1. Op-Amp Chế Độ So Sánh (Comparator)</text>

    <!-- Op-Amp Triangle -->
    <path d="M 120 100 L 260 175 L 120 250 Z" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2.5"/>

    <!-- Inverting Input V- -->
    <line x1="40" y1="130" x2="120" y2="130" stroke="#f87171" stroke-width="2.5"/>
    <text x="135" y="136" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#ffffff">−</text>
    <circle cx="40" cy="130" r="4" fill="#f87171"/>
    <text x="30" y="115" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#f87171">V₋ (V_ref)</text>

    <!-- Non-inverting Input V+ -->
    <line x1="40" y1="220" x2="120" y2="220" stroke="#38bdf8" stroke-width="2.5"/>
    <text x="135" y="226" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#ffffff">+</text>
    <circle cx="40" cy="220" r="4" fill="#38bdf8"/>
    <text x="30" y="245" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#38bdf8">V₊ (V_cb)</text>

    <!-- Output V_out -->
    <line x1="260" y1="175" x2="350" y2="175" stroke="#22c55e" stroke-width="3"/>
    <circle cx="350" cy="175" r="4" fill="#22c55e"/>
    <text x="330" y="160" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#22c55e">V_out</text>

    <!-- Comparator Rules Box -->
    <rect x="25" y="270" width="340" height="75" rx="8" fill="#1e293b" stroke="#475569"/>
    <text x="195" y="292" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#22c55e" text-anchor="middle">• V₊ &gt; V₋ ⟹ V_out ≈ +V_CC (Mức cao, BẬT tải)</text>
    <text x="195" y="312" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#ef4444" text-anchor="middle">• V₊ &lt; V₋ ⟹ V_out ≈ 0 V (Mức thấp, TẮT tải)</text>
    <text x="195" y="332" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">R_in → ∞ (không hút dòng từ cảm biến) • A_v → ∞</text>
  </g>

  <!-- Right: Relay with Flyback Diode & LED circuit -->
  <g transform="translate(450, 80)">
    <rect x="0" y="0" width="410" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <text x="205" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f1f5f9" text-anchor="middle">2. Mạch Relay Có Diode Dập Xung &amp; Mạch LED</text>

    <!-- Top: Relay Circuit with Flyback Diode -->
    <rect x="20" y="50" width="370" height="150" rx="8" fill="#1e293b" stroke="#475569"/>
    <text x="35" y="70" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fbbf24">Relay 12V + Diode bảo vệ 1N4007</text>

    <!-- Relay Coil -->
    <rect x="60" y="85" width="45" height="35" rx="4" fill="#334155" stroke="#94a3b8"/>
    <text x="82" y="106" font-family="system-ui, sans-serif" font-size="10" fill="#ffffff" text-anchor="middle">Cuộn L</text>

    <!-- Flyback Diode parallel reverse -->
    <line x1="145" y1="80" x2="145" y2="125" stroke="#f8fafc" stroke-width="1.5"/>
    <polygon points="138,105 152,105 145,95" fill="#f59e0b"/>
    <line x1="138" y1="95" x2="152" y2="95" stroke="#f59e0b" stroke-width="2"/>
    <text x="160" y="105" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" fill="#f59e0b">Diode D</text>

    <!-- Parallel connection lines -->
    <line x1="82" y1="80" x2="145" y2="80" stroke="#f8fafc" stroke-width="1.5"/>
    <line x1="82" y1="85" x2="82" y2="80" stroke="#f8fafc" stroke-width="1.5"/>
    <line x1="82" y1="120" x2="82" y2="125" stroke="#f8fafc" stroke-width="1.5"/>
    <line x1="82" y1="125" x2="145" y2="125" stroke="#f8fafc" stroke-width="1.5"/>

    <line x1="145" y1="80" x2="145" y2="65" stroke="#ef4444" stroke-width="2"/>
    <text x="160" y="70" font-family="system-ui, sans-serif" font-size="10" fill="#ef4444">+12V</text>

    <!-- Transistor driver -->
    <circle cx="82" cy="155" r="16" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="82" y="159" font-family="system-ui, sans-serif" font-size="9" fill="#38bdf8" text-anchor="middle">NPN</text>
    <line x1="82" y1="125" x2="82" y2="139" stroke="#f8fafc" stroke-width="1.5"/>

    <!-- Relay Contact Switch to 220V Bulb -->
    <rect x="230" y="80" width="145" height="100" rx="6" fill="#0f172a" stroke="#64748b"/>
    <text x="302" y="100" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#38bdf8" text-anchor="middle">Tiếp Điểm NO (Cách ly)</text>
    <circle cx="270" cy="140" r="12" fill="#fbbf24" stroke="#f59e0b"/>
    <text x="270" y="144" font-family="system-ui, sans-serif" font-size="9" font-weight="bold" fill="#000000" text-anchor="middle">Đèn</text>
    <text x="330" y="145" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#ef4444">220V AC</text>

    <!-- Bottom: LED Limiting Resistor -->
    <rect x="20" y="215" width="370" height="130" rx="8" fill="#1e293b" stroke="#475569"/>
    <text x="35" y="235" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#22c55e">Mạch LED &amp; Tính Điện Trở Hạn Dòng R</text>

    <!-- Formula -->
    <text x="205" y="260" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#38bdf8" text-anchor="middle">R = (U_ra - U_LED) / I_LED</text>
    <text x="205" y="282" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">Ví dụ: Nguồn 5V, LED đỏ (U_LED = 2V), I = 15 mA:</text>
    <text x="205" y="302" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fbbf24" text-anchor="middle">R = (5 - 2) / 0,015 = 200 Ω  (chọn trở 220 Ω)</text>
    <text x="205" y="325" font-family="system-ui, sans-serif" font-size="10" fill="#f87171" text-anchor="middle">Bắt buộc phải có R để tránh cháy nổ tiếp giáp p-n của LED!</text>
  </g>
</svg>`,

  // SVG 9: 3 Ứng dụng thực tế Bài 9 (Đèn đêm, Báo rò gas, Vòi cảm ứng)
  9: `<svg class="w-full h-auto rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-900 text-white" viewBox="0 0 900 480" xmlns="http://www.w3.org/2000/svg">
  <!-- Title Banner -->
  <rect x="20" y="20" width="860" height="40" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="450" y="46" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#38bdf8" text-anchor="middle">
    BÀI 9: BA MẠCH ĐIỀU KHIỂN TỰ ĐỘNG THỰC TẾ &amp; QUY TẮC AN TOÀN
  </text>

  <!-- App 1: Smart Night Light (LDR) -->
  <g transform="translate(30, 80)">
    <rect x="0" y="0" width="265" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <rect x="15" y="15" width="235" height="35" rx="6" fill="#1e3a8a"/>
    <text x="132" y="37" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#38bdf8" text-anchor="middle">1. Đèn Tự Bật Khi Trời Tối</text>

    <!-- Schematic icon mini -->
    <rect x="20" y="65" width="225" height="100" rx="6" fill="#1e293b" stroke="#475569"/>
    <text x="132" y="85" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#fde047" text-anchor="middle">Cảm biến LDR ở nhánh dưới</text>
    <text x="132" y="105" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Trời tối ⟹ R_LDR tăng vọt</text>
    <text x="132" y="125" font-family="system-ui, sans-serif" font-size="10" fill="#38bdf8" text-anchor="middle">⟹ V₊ &gt; V₋ ⟹ Op-Amp lên cao</text>
    <text x="132" y="145" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" fill="#22c55e" text-anchor="middle">⟹ Kích Relay BẬT ĐÈN</text>

    <!-- Light Bulb graphic -->
    <circle cx="132" cy="210" r="30" fill="#fef08a" stroke="#facc15" stroke-width="2"/>
    <text x="132" y="215" font-family="system-ui, sans-serif" font-size="20" text-anchor="middle">💡</text>

    <!-- Text steps -->
    <rect x="15" y="260" width="235" height="85" rx="6" fill="#1e293b"/>
    <text x="25" y="280" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Cảm biến: LDR + Trở 10k</text>
    <text x="25" y="298" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• So sánh: Op-Amp LM358</text>
    <text x="25" y="316" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Chấp hành: Relay 12V + Diode</text>
    <text x="25" y="334" font-family="system-ui, sans-serif" font-size="10" fill="#38bdf8">• Tự tắt khi trời hừng sáng</text>
  </g>

  <!-- App 2: Gas Leak Alarm (MQ-2) -->
  <g transform="translate(315, 80)">
    <rect x="0" y="0" width="270" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <rect x="15" y="15" width="240" height="35" rx="6" fill="#7f1d1d"/>
    <text x="135" y="37" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fca5a5" text-anchor="middle">2. Báo Rò Khí Gas Cháy Nổ</text>

    <!-- Schematic icon mini -->
    <rect x="20" y="65" width="230" height="100" rx="6" fill="#1e293b" stroke="#475569"/>
    <text x="135" y="85" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#f87171" text-anchor="middle">Cảm biến khí gas MQ-2</text>
    <text x="135" y="105" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Có gas rò ⟹ R_mq2 giảm</text>
    <text x="135" y="125" font-family="system-ui, sans-serif" font-size="10" fill="#38bdf8" text-anchor="middle">⟹ V_cb tăng vượt V_ref</text>
    <text x="135" y="145" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" fill="#f87171" text-anchor="middle">⟹ HÚ CÒI BUZZER + LED ĐỎ</text>

    <!-- Alarm graphic -->
    <circle cx="135" cy="210" r="30" fill="#991b1b" stroke="#ef4444" stroke-width="2"/>
    <text x="135" y="215" font-family="system-ui, sans-serif" font-size="20" text-anchor="middle">🚨</text>

    <!-- Text steps -->
    <rect x="15" y="260" width="240" height="85" rx="6" fill="#1e293b"/>
    <text x="25" y="280" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Cảm biến: Đầu dò SnO₂ MQ-2</text>
    <text x="25" y="298" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Báo động: Còi chip Buzzer</text>
    <text x="25" y="316" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Chỉ thị: LED đỏ nhấp nháy</text>
    <text x="25" y="334" font-family="system-ui, sans-serif" font-size="10" fill="#ef4444">• Cách ly nguồn chống tia lửa</text>
  </g>

  <!-- App 3: Touchless Faucet (IR Reflection) -->
  <g transform="translate(605, 80)">
    <rect x="0" y="0" width="265" height="360" rx="12" fill="#0f172a" stroke="#334155"/>
    <rect x="15" y="15" width="235" height="35" rx="6" fill="#065f46"/>
    <text x="132" y="37" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#6ee7b7" text-anchor="middle">3. Vòi Nước Cảm Ứng Hồng Ngoại</text>

    <!-- Schematic icon mini -->
    <rect x="20" y="65" width="225" height="100" rx="6" fill="#1e293b" stroke="#475569"/>
    <text x="132" y="85" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399" text-anchor="middle">Cặp LED thu phát hồng ngoại (IR)</text>
    <text x="132" y="105" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Đưa tay vào ⟹ Tia IR phản xạ</text>
    <text x="132" y="125" font-family="system-ui, sans-serif" font-size="10" fill="#38bdf8" text-anchor="middle">⟹ Photodiode thu sinh tín hiệu</text>
    <text x="132" y="145" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" fill="#38bdf8" text-anchor="middle">⟹ MỞ VAN ĐIỆN TỪ (NƯỚC CHẢY)</text>

    <!-- Water tap graphic -->
    <circle cx="132" cy="210" r="30" fill="#0e7490" stroke="#06b6d4" stroke-width="2"/>
    <text x="132" y="215" font-family="system-ui, sans-serif" font-size="20" text-anchor="middle">🚰</text>

    <!-- Text steps -->
    <rect x="15" y="260" width="235" height="85" rx="6" fill="#1e293b"/>
    <text x="25" y="280" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Phát: LED IR phát chùm tia</text>
    <text x="25" y="298" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Thu: Photodiode đón tia dội</text>
    <text x="25" y="316" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Tự ngắt ngay khi rút tay ra</text>
    <text x="25" y="334" font-family="system-ui, sans-serif" font-size="10" fill="#34d399">• An toàn: Nguồn DC 12V an toàn</text>
  </g>
</svg>`
};

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/ly11_svgs.js', 'module.exports = ' + JSON.stringify(svgsData, null, 2) + ';', 'utf8');
console.log('Successfully generated scratch/ly11_svgs.js with 9 detailed vector SVGs.');
