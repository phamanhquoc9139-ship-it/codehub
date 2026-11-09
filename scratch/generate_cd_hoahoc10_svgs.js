// scratch/generate_cd_hoahoc10_svgs.js
// Generates 11 custom SVG diagrams for 11 lessons of Chuyên đề Hóa học 10

const fs = require('fs');

const svgs = {};

// SVG 1: VSEPR & Lai hóa orbital
svgs[1] = `
<svg class="w-full h-auto rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-950/40 bg-gradient-to-br from-emerald-50/40 via-white to-teal-50/30 dark:from-slate-900 dark:via-slate-850 dark:to-emerald-950/20" viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
    <linearGradient id="gradBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#1d4ed8" />
    </linearGradient>
    <linearGradient id="gradOrange" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f97316" />
      <stop offset="100%" stop-color="#ea580c" />
    </linearGradient>
  </defs>

  <!-- Title banner -->
  <rect x="20" y="15" width="760" height="34" rx="8" fill="#10b981" fill-opacity="0.1" stroke="#10b981" stroke-width="1"/>
  <text x="400" y="37" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#047857" class="dark:fill-emerald-400">MÔ HÌNH VSEPR DỰ ĐOÁN HÌNH HỌC PHÂN TỬ VÀ THUYẾT LAI HÓA ORBITAL</text>

  <!-- Card 1: CO2 (AX2 Đường thẳng) -->
  <g transform="translate(30, 65)">
    <rect width="135" height="150" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" class="dark:fill-slate-800 dark:stroke-slate-700"/>
    <text x="67" y="24" font-size="12" font-weight="bold" text-anchor="middle" fill="#0f172a" class="dark:fill-slate-100">CO₂ (AX₂)</text>
    <text x="67" y="40" font-size="11" text-anchor="middle" fill="#64748b">Đường thẳng 180°</text>
    <!-- Molecule line -->
    <line x1="25" y1="85" x2="110" y2="85" stroke="#94a3b8" stroke-width="3"/>
    <circle cx="25" cy="85" r="14" fill="url(#gradOrange)"/>
    <text x="25" y="89" font-size="10" font-weight="bold" fill="#fff" text-anchor="middle">O</text>
    <circle cx="67" cy="85" r="16" fill="#334155"/>
    <text x="67" y="90" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">C</text>
    <circle cx="110" cy="85" r="14" fill="url(#gradOrange)"/>
    <text x="110" y="89" font-size="10" font-weight="bold" fill="#fff" text-anchor="middle">O</text>
    <rect x="15" y="122" width="105" height="18" rx="4" fill="#f1f5f9" class="dark:fill-slate-700"/>
    <text x="67" y="135" font-size="10" font-weight="bold" fill="#047857" text-anchor="middle" class="dark:fill-emerald-400">Lai hóa sp | μ = 0</text>
  </g>

  <!-- Card 2: BF3 (AX3 Tam giác phẳng) -->
  <g transform="translate(180, 65)">
    <rect width="135" height="150" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" class="dark:fill-slate-800 dark:stroke-slate-700"/>
    <text x="67" y="24" font-size="12" font-weight="bold" text-anchor="middle" fill="#0f172a" class="dark:fill-slate-100">BF₃ (AX₃)</text>
    <text x="67" y="40" font-size="11" text-anchor="middle" fill="#64748b">Tam giác phẳng 120°</text>
    <!-- Triangle layout -->
    <line x1="67" y1="85" x2="67" y2="55" stroke="#94a3b8" stroke-width="2.5"/>
    <line x1="67" y1="85" x2="35" y2="105" stroke="#94a3b8" stroke-width="2.5"/>
    <line x1="67" y1="85" x2="100" y2="105" stroke="#94a3b8" stroke-width="2.5"/>
    <circle cx="67" cy="85" r="15" fill="#ca8a04"/>
    <text x="67" y="89" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">B</text>
    <circle cx="67" cy="55" r="10" fill="url(#gradEmerald)"/>
    <circle cx="35" cy="105" r="10" fill="url(#gradEmerald)"/>
    <circle cx="100" cy="105" r="10" fill="url(#gradEmerald)"/>
    <rect x="15" y="122" width="105" height="18" rx="4" fill="#f1f5f9" class="dark:fill-slate-700"/>
    <text x="67" y="135" font-size="10" font-weight="bold" fill="#047857" text-anchor="middle" class="dark:fill-emerald-400">Lai hóa sp² | μ = 0</text>
  </g>

  <!-- Card 3: CH4 (AX4 Tứ diện) -->
  <g transform="translate(330, 65)">
    <rect width="135" height="150" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" class="dark:fill-slate-800 dark:stroke-slate-700"/>
    <text x="67" y="24" font-size="12" font-weight="bold" text-anchor="middle" fill="#0f172a" class="dark:fill-slate-100">CH₄ (AX₄)</text>
    <text x="67" y="40" font-size="11" text-anchor="middle" fill="#64748b">Tứ diện đều 109,5°</text>
    <line x1="67" y1="85" x2="67" y2="52" stroke="#94a3b8" stroke-width="2.5"/>
    <line x1="67" y1="85" x2="35" y2="105" stroke="#94a3b8" stroke-width="2.5"/>
    <line x1="67" y1="85" x2="95" y2="108" stroke="#94a3b8" stroke-width="2.5"/>
    <line x1="67" y1="85" x2="62" y2="112" stroke="#94a3b8" stroke-width="2.5" stroke-dasharray="2 2"/>
    <circle cx="67" cy="85" r="15" fill="#334155"/>
    <text x="67" y="90" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">C</text>
    <circle cx="67" cy="52" r="9" fill="#93c5fd"/>
    <circle cx="35" cy="105" r="9" fill="#93c5fd"/>
    <circle cx="95" cy="108" r="9" fill="#93c5fd"/>
    <circle cx="62" cy="112" r="7" fill="#60a5fa"/>
    <rect x="15" y="122" width="105" height="18" rx="4" fill="#f1f5f9" class="dark:fill-slate-700"/>
    <text x="67" y="135" font-size="10" font-weight="bold" fill="#047857" text-anchor="middle" class="dark:fill-emerald-400">Lai hóa sp³ | μ = 0</text>
  </g>

  <!-- Card 4: NH3 (AX3E Tháp tam giác) -->
  <g transform="translate(480, 65)">
    <rect width="135" height="150" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" class="dark:fill-slate-800 dark:stroke-slate-700"/>
    <text x="67" y="24" font-size="12" font-weight="bold" text-anchor="middle" fill="#0f172a" class="dark:fill-slate-100">NH₃ (AX₃E)</text>
    <text x="67" y="40" font-size="11" text-anchor="middle" fill="#64748b">Tháp tam giác ~107°</text>
    <!-- Lone pair bubble on top -->
    <ellipse cx="67" cy="56" rx="12" ry="7" fill="#fde047" fill-opacity="0.6" stroke="#eab308" stroke-width="1.5" stroke-dasharray="2 2"/>
    <circle cx="63" cy="56" r="2" fill="#854d0e"/>
    <circle cx="71" cy="56" r="2" fill="#854d0e"/>
    <line x1="67" y1="85" x2="35" y2="108" stroke="#94a3b8" stroke-width="2.5"/>
    <line x1="67" y1="85" x2="98" y2="108" stroke="#94a3b8" stroke-width="2.5"/>
    <line x1="67" y1="85" x2="67" y2="114" stroke="#94a3b8" stroke-width="2.5"/>
    <circle cx="67" cy="85" r="15" fill="url(#gradBlue)"/>
    <text x="67" y="89" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">N</text>
    <circle cx="35" cy="108" r="9" fill="#93c5fd"/>
    <circle cx="98" cy="108" r="9" fill="#93c5fd"/>
    <circle cx="67" cy="114" r="9" fill="#93c5fd"/>
    <rect x="15" y="122" width="105" height="18" rx="4" fill="#fee2e2" class="dark:fill-rose-950/40"/>
    <text x="67" y="135" font-size="10" font-weight="bold" fill="#b91c1c" text-anchor="middle" class="dark:fill-rose-400">1 Cặp e tự do | μ ≠ 0</text>
  </g>

  <!-- Card 5: H2O (AX2E2 Góc/Chữ V) -->
  <g transform="translate(630, 65)">
    <rect width="135" height="150" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" class="dark:fill-slate-800 dark:stroke-slate-700"/>
    <text x="67" y="24" font-size="12" font-weight="bold" text-anchor="middle" fill="#0f172a" class="dark:fill-slate-100">H₂O (AX₂E₂)</text>
    <text x="67" y="40" font-size="11" text-anchor="middle" fill="#64748b">Dạng góc ~104,5°</text>
    <!-- 2 lone pair bubbles -->
    <ellipse cx="50" cy="56" rx="10" ry="6" fill="#fde047" fill-opacity="0.6" stroke="#eab308" stroke-width="1.2" stroke-dasharray="2 2"/>
    <ellipse cx="84" cy="56" rx="10" ry="6" fill="#fde047" fill-opacity="0.6" stroke="#eab308" stroke-width="1.2" stroke-dasharray="2 2"/>
    <line x1="67" y1="85" x2="35" y2="108" stroke="#94a3b8" stroke-width="2.5"/>
    <line x1="67" y1="85" x2="98" y2="108" stroke="#94a3b8" stroke-width="2.5"/>
    <circle cx="67" cy="85" r="15" fill="url(#gradOrange)"/>
    <text x="67" y="90" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">O</text>
    <circle cx="35" cy="108" r="9" fill="#93c5fd"/>
    <circle cx="98" cy="108" r="9" fill="#93c5fd"/>
    <rect x="15" y="122" width="105" height="18" rx="4" fill="#fee2e2" class="dark:fill-rose-950/40"/>
    <text x="67" y="135" font-size="10" font-weight="bold" fill="#b91c1c" text-anchor="middle" class="dark:fill-rose-400">2 Cặp e tự do | μ ≠ 0</text>
  </g>

  <!-- Bottom Panel: Quy luật lực đẩy & Góc liên kết -->
  <rect x="30" y="235" width="735" height="105" rx="12" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" class="dark:fill-slate-800/60 dark:stroke-slate-700"/>
  <text x="50" y="260" font-size="12" font-weight="bold" fill="#047857" class="dark:fill-emerald-400">QUY LUẬT LỰC ĐẨY VSEPR & SỰ THU HẸP GÓC LIÊN KẾT:</text>
  <text x="50" y="282" font-size="11.5" fill="#334155" class="dark:fill-slate-300">• Thứ tự lực đẩy: Lực đẩy (Cặp tự do - Cặp tự do) > (Cặp tự do - Cặp liên kết) > (Cặp liên kết - Cặp liên kết).</text>
  <text x="50" y="302" font-size="11.5" fill="#334155" class="dark:fill-slate-300">• Dãy biến đổi góc khi cùng lai hóa sp³: CH₄ (109,5°, 0 cặp e) > NH₃ (107°, 1 cặp e) > H₂O (104,5°, 2 cặp e).</text>
  <text x="50" y="322" font-size="11.5" fill="#334155" class="dark:fill-slate-300">• Tính phân cực: Phân tử đối xứng có mômen lưỡng cực triệt tiêu (μ = 0, CO₂, BF₃, CH₄); phân tử bất đối xứng (μ ≠ 0, H₂O, NH₃, SO₂).</text>
</svg>
`;

// SVG 2: Phản ứng hạt nhân, tia phóng xạ & Phân hạch
svgs[2] = `
<svg class="w-full h-auto rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-950/40 bg-gradient-to-br from-emerald-50/40 via-white to-teal-50/30 dark:from-slate-900 dark:via-slate-850 dark:to-emerald-950/20" viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
  <!-- Title -->
  <rect x="20" y="15" width="760" height="34" rx="8" fill="#10b981" fill-opacity="0.1" stroke="#10b981" stroke-width="1"/>
  <text x="400" y="37" font-size="14" font-weight="bold" text-anchor="middle" fill="#047857" class="dark:fill-emerald-400">PHÓNG XẠ TỰ NHIÊN, KHẢ NĂNG ĐÂM XUYÊN VÀ PHẢN ỨNG PHÂN HẠCH DÂY CHUYỀN</text>

  <!-- Left: Radiation penetration -->
  <g transform="translate(30, 65)">
    <rect width="360" height="275" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" class="dark:fill-slate-800 dark:stroke-slate-700"/>
    <text x="180" y="24" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle" class="dark:fill-slate-100">Khả năng đâm xuyên của các tia phóng xạ</text>
    
    <!-- Source box -->
    <rect x="20" y="55" width="45" height="160" rx="8" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5" class="dark:fill-slate-700"/>
    <circle cx="42" cy="85" r="10" fill="#ef4444"/>
    <text x="42" y="89" font-size="10" font-weight="bold" fill="#fff" text-anchor="middle">α</text>
    <circle cx="42" cy="135" r="10" fill="#3b82f6"/>
    <text x="42" y="139" font-size="10" font-weight="bold" fill="#fff" text-anchor="middle">β</text>
    <circle cx="42" cy="185" r="10" fill="#10b981"/>
    <text x="42" y="189" font-size="10" font-weight="bold" fill="#fff" text-anchor="middle">γ</text>

    <!-- Barriers -->
    <!-- Paper -->
    <rect x="130" y="55" width="10" height="160" rx="2" fill="#fed7aa" stroke="#f97316"/>
    <text x="135" y="230" font-size="10" font-weight="bold" fill="#ea580c" text-anchor="middle">Giấy mỏng</text>
    <!-- Aluminum -->
    <rect x="210" y="55" width="16" height="160" rx="2" fill="#cbd5e1" stroke="#64748b"/>
    <text x="218" y="230" font-size="10" font-weight="bold" fill="#475569" text-anchor="middle">Nhôm (vài mm)</text>
    <!-- Lead -->
    <rect x="300" y="55" width="28" height="160" rx="2" fill="#64748b" stroke="#334155"/>
    <text x="314" y="230" font-size="10" font-weight="bold" fill="#1e293b" text-anchor="middle" class="dark:fill-slate-300">Chì / Bê tông</text>

    <!-- Beams -->
    <!-- Alpha stops at paper -->
    <line x1="65" y1="85" x2="130" y2="85" stroke="#ef4444" stroke-width="4"/>
    <polygon points="128,81 133,85 128,89" fill="#ef4444"/>
    <text x="95" y="78" font-size="9" font-weight="bold" fill="#ef4444">Ion hóa mạnh</text>

    <!-- Beta passes paper, stops at Al -->
    <line x1="65" y1="135" x2="210" y2="135" stroke="#3b82f6" stroke-width="3" stroke-dasharray="4 2"/>
    <polygon points="208,131 213,135 208,139" fill="#3b82f6"/>
    <text x="170" y="128" font-size="9" font-weight="bold" fill="#3b82f6">Trung bình</text>

    <!-- Gamma passes paper, Al, stops inside Pb -->
    <path d="M 65 185 Q 85 175 105 185 T 145 185 T 185 185 T 225 185 T 265 185 T 310 185" fill="none" stroke="#10b981" stroke-width="2.5"/>
    <polygon points="308,181 314,185 308,189" fill="#10b981"/>
    <text x="250" y="178" font-size="9" font-weight="bold" fill="#10b981">Đâm xuyên cực mạnh</text>

    <text x="180" y="258" font-size="10" fill="#64748b" text-anchor="middle">Chu kì bán rã: N(t) = N₀ · 2^(-t/T) | Ví dụ Sr-90: T = 28 năm</text>
  </g>

  <!-- Right: Nuclear Fission Chain Reaction -->
  <g transform="translate(410, 65)">
    <rect width="360" height="275" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" class="dark:fill-slate-800 dark:stroke-slate-700"/>
    <text x="180" y="24" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle" class="dark:fill-slate-100">Cơ chế phân hạch dây chuyền hạt nhân ²³⁵U</text>

    <!-- Incoming neutron -->
    <circle cx="35" cy="115" r="7" fill="#64748b"/>
    <text x="35" y="118" font-size="8" fill="#fff" text-anchor="middle">n</text>
    <line x1="45" y1="115" x2="80" y2="115" stroke="#64748b" stroke-width="2" stroke-dasharray="3 2"/>

    <!-- Target U-235 -->
    <circle cx="105" cy="115" r="22" fill="#0284c7"/>
    <text x="105" y="115" font-size="9" font-weight="bold" fill="#fff" text-anchor="middle">²³⁵U</text>
    <text x="105" y="126" font-size="7" fill="#e0f2fe" text-anchor="middle">hấp thụ n</text>

    <!-- Fission explosion -->
    <line x1="128" y1="115" x2="165" y2="115" stroke="#f59e0b" stroke-width="3"/>
    <circle cx="175" cy="115" r="8" fill="#f59e0b" fill-opacity="0.4"/>

    <!-- 2 Fission Fragments -->
    <!-- Fragment 1: Ba-141 or Xe-138 -->
    <line x1="175" y1="115" x2="245" y2="75" stroke="#0ea5e9" stroke-width="2"/>
    <circle cx="245" cy="75" r="16" fill="#0369a1"/>
    <text x="245" y="78" font-size="8" font-weight="bold" fill="#fff" text-anchor="middle">¹³⁸Xe</text>

    <!-- Fragment 2: Sr-95 -->
    <line x1="175" y1="115" x2="245" y2="155" stroke="#0ea5e9" stroke-width="2"/>
    <circle cx="245" cy="155" r="14" fill="#0369a1"/>
    <text x="245" y="158" font-size="8" font-weight="bold" fill="#fff" text-anchor="middle">⁹⁵Sr</text>

    <!-- 3 Neutrons released -->
    <line x1="175" y1="115" x2="250" y2="105" stroke="#64748b" stroke-width="1.5" stroke-dasharray="2 2"/>
    <circle cx="255" cy="105" r="5" fill="#64748b"/>
    <line x1="175" y1="115" x2="250" y2="115" stroke="#64748b" stroke-width="1.5" stroke-dasharray="2 2"/>
    <circle cx="255" cy="115" r="5" fill="#64748b"/>
    <line x1="175" y1="115" x2="250" y2="125" stroke="#64748b" stroke-width="1.5" stroke-dasharray="2 2"/>
    <circle cx="255" cy="125" r="5" fill="#64748b"/>
    <text x="295" y="118" font-size="10" font-weight="bold" fill="#f59e0b">+ 3n + Năng lượng</text>

    <!-- Cascade branch -->
    <line x1="262" y1="105" x2="310" y2="70" stroke="#f59e0b" stroke-width="1.5"/>
    <circle cx="320" cy="70" r="12" fill="#0284c7" fill-opacity="0.8"/>
    <text x="320" y="73" font-size="7" fill="#fff" text-anchor="middle">²³⁵U</text>

    <line x1="262" y1="125" x2="310" y2="160" stroke="#f59e0b" stroke-width="1.5"/>
    <circle cx="320" cy="160" r="12" fill="#0284c7" fill-opacity="0.8"/>
    <text x="320" y="163" font-size="7" fill="#fff" text-anchor="middle">²³⁵U</text>

    <!-- Law banner -->
    <rect x="20" y="200" width="320" height="60" rx="8" fill="#f0fdf4" stroke="#86efac" class="dark:fill-slate-700/60 dark:stroke-emerald-900"/>
    <text x="180" y="218" font-size="10.5" font-weight="bold" fill="#166534" text-anchor="middle" class="dark:fill-emerald-300">ĐỊNH LUẬT BẢO TOÀN PHẢN ỨNG HẠT NHÂN:</text>
    <text x="180" y="235" font-size="10" fill="#14532d" text-anchor="middle" class="dark:fill-emerald-400">Σ A(trước) = Σ A(sau) | Σ Z(trước) = Σ Z(sau)</text>
    <text x="180" y="249" font-size="9" fill="#15803d" text-anchor="middle" class="dark:fill-emerald-500">Ứng dụng: I-131 (tuyến giáp), Co-60 (xạ trị), C-14 (định tuổi)</text>
  </g>
</svg>
`;

// SVG 3: Giản đồ năng lượng hoạt hóa Ea & Arrhenius
svgs[3] = `
<svg class="w-full h-auto rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-950/40 bg-gradient-to-br from-emerald-50/40 via-white to-teal-50/30 dark:from-slate-900 dark:via-slate-850 dark:to-emerald-950/20" viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="15" width="760" height="34" rx="8" fill="#10b981" fill-opacity="0.1" stroke="#10b981" stroke-width="1"/>
  <text x="400" y="37" font-size="14" font-weight="bold" text-anchor="middle" fill="#047857" class="dark:fill-emerald-400">GIẢN ĐỒ NĂNG LƯỢNG HOẠT HÓA (Eₐ) VÀ VAI TRÒ CỦA CHẤT XÚC TÁC</text>

  <!-- Energy Profile Chart -->
  <g transform="translate(60, 65)">
    <!-- Axes -->
    <line x1="50" y1="230" x2="450" y2="230" stroke="#64748b" stroke-width="2"/>
    <polygon points="450,227 458,230 450,233" fill="#64748b"/>
    <text x="430" y="248" font-size="11" fill="#64748b">Tiến trình phản ứng</text>

    <line x1="50" y1="230" x2="50" y2="20" stroke="#64748b" stroke-width="2"/>
    <polygon points="47,20 50,12 53,20" fill="#64748b"/>
    <text x="15" y="25" font-size="11" fill="#64748b" transform="rotate(-90 20 25)">Thế năng (kJ/mol)</text>

    <!-- Reactant level -->
    <line x1="50" y1="160" x2="130" y2="160" stroke="#0284c7" stroke-width="3"/>
    <text x="80" y="152" font-size="11" font-weight="bold" fill="#0284c7">Chất đầu</text>

    <!-- Uncatalyzed curve (Red) -->
    <path d="M 130 160 C 180 160, 200 40, 240 40 C 280 40, 310 200, 370 200" fill="none" stroke="#ef4444" stroke-width="3"/>
    <text x="240" y="32" font-size="10" font-weight="bold" fill="#ef4444" text-anchor="middle">Trạng thái chuyển tiếp (không xúc tác)</text>

    <!-- Catalyzed curve (Green dashed) -->
    <path d="M 130 160 C 170 160, 195 95, 230 95 C 265 95, 300 200, 370 200" fill="none" stroke="#10b981" stroke-width="3" stroke-dasharray="6 3"/>
    <text x="230" y="87" font-size="10" font-weight="bold" fill="#10b981" text-anchor="middle">Đường có xúc tác</text>

    <!-- Product level -->
    <line x1="370" y1="200" x2="430" y2="200" stroke="#0284c7" stroke-width="3"/>
    <text x="385" y="215" font-size="11" font-weight="bold" fill="#0284c7">Sản phẩm</text>

    <!-- Ea lines -->
    <!-- Ea uncatalyzed -->
    <line x1="285" y1="40" x2="330" y2="40" stroke="#ef4444" stroke-width="1" stroke-dasharray="2 2"/>
    <line x1="320" y1="40" x2="320" y2="160" stroke="#ef4444" stroke-width="1.5"/>
    <polygon points="317,45 320,38 323,45" fill="#ef4444"/>
    <polygon points="317,155 320,162 323,155" fill="#ef4444"/>
    <text x="330" y="105" font-size="11" font-weight="bold" fill="#ef4444">Eₐ</text>

    <!-- Ea catalyzed -->
    <line x1="245" y1="95" x2="275" y2="95" stroke="#10b981" stroke-width="1" stroke-dasharray="2 2"/>
    <line x1="270" y1="95" x2="270" y2="160" stroke="#10b981" stroke-width="1.5"/>
    <polygon points="267,100 270,93 273,100" fill="#10b981"/>
    <polygon points="267,155 270,162 273,155" fill="#10b981"/>
    <text x="280" y="130" font-size="11" font-weight="bold" fill="#10b981">E'ₐ &lt; Eₐ</text>

    <!-- Delta H -->
    <line x1="130" y1="160" x2="450" y2="160" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3"/>
    <line x1="410" y1="160" x2="410" y2="200" stroke="#0369a1" stroke-width="2"/>
    <polygon points="407,165 410,158 413,165" fill="#0369a1"/>
    <polygon points="407,195 410,202 413,195" fill="#0369a1"/>
    <text x="420" y="185" font-size="10" font-weight="bold" fill="#0369a1">ΔrH &lt; 0 (Tỏa nhiệt)</text>
  </g>

  <!-- Right Panel: Arrhenius Equation & Rules -->
  <g transform="translate(540, 65)">
    <rect width="215" height="260" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" class="dark:fill-slate-800 dark:stroke-slate-700"/>
    <text x="107" y="25" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle" class="dark:fill-slate-100">Phương trình Arrhenius</text>

    <rect x="15" y="40" width="185" height="50" rx="8" fill="#f0fdf4" stroke="#86efac" class="dark:fill-slate-700/60 dark:stroke-emerald-800"/>
    <text x="107" y="62" font-size="13" font-weight="bold" fill="#047857" text-anchor="middle" class="dark:fill-emerald-300">k = A · e^(-Eₐ / RT)</text>
    <text x="107" y="78" font-size="9" fill="#15803d" text-anchor="middle" class="dark:fill-emerald-400">R = 8,314 J·mol⁻¹·K⁻¹ | T (Kelvin)</text>

    <rect x="15" y="100" width="185" height="65" rx="8" fill="#f8fafc" stroke="#e2e8f0" class="dark:fill-slate-700/30 dark:stroke-slate-600"/>
    <text x="107" y="118" font-size="10.5" font-weight="bold" fill="#0284c7" text-anchor="middle">So sánh 2 nhiệt độ:</text>
    <text x="107" y="138" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">ln(k₂/k₁) = (Eₐ/R)(1/T₁ - 1/T₂)</text>
    <text x="107" y="153" font-size="8.5" fill="#64748b" text-anchor="middle">T₂ &gt; T₁ ⟹ k₂ &gt; k₁ (phản ứng nhanh hơn)</text>

    <text x="15" y="182" font-size="9.5" font-weight="bold" fill="#334155" class="dark:fill-slate-300">Lưu ý bản chất xúc tác:</text>
    <text x="15" y="198" font-size="9" fill="#64748b" class="dark:fill-slate-400">• Hạ thấp năng lượng hoạt hóa Eₐ</text>
    <text x="15" y="212" font-size="9" fill="#64748b" class="dark:fill-slate-400">• KHÔNG đổi nhiệt phản ứng ΔrH</text>
    <text x="15" y="226" font-size="9" fill="#64748b" class="dark:fill-slate-400">• KHÔNG đổi vị trí cân bằng</text>
    <text x="15" y="240" font-size="9" fill="#64748b" class="dark:fill-slate-400">• Xúc tác dị thể (Pt, V₂O₅), đồng thể (NO)</text>
  </g>
</svg>
`;

// SVG 4: Entropy & Gibbs
svgs[4] = `
<svg class="w-full h-auto rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-950/40 bg-gradient-to-br from-emerald-50/40 via-white to-teal-50/30 dark:from-slate-900 dark:via-slate-850 dark:to-emerald-950/20" viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="15" width="760" height="34" rx="8" fill="#10b981" fill-opacity="0.1" stroke="#10b981" stroke-width="1"/>
  <text x="400" y="37" font-size="14" font-weight="bold" text-anchor="middle" fill="#047857" class="dark:fill-emerald-400">ENTROPY (S) VÀ TIÊU CHUẨN TỰ DIỄN BIẾN THEO NĂNG LƯỢNG TỰ DO GIBBS (ΔG)</text>

  <!-- Left: Entropy of phases -->
  <g transform="translate(30, 65)">
    <rect width="360" height="260" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" class="dark:fill-slate-800 dark:stroke-slate-700"/>
    <text x="180" y="24" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle" class="dark:fill-slate-100">Quy luật biến thiên Entropy (S) theo trạng thái tập hợp</text>

    <!-- 3 Phase Boxes -->
    <!-- Solid -->
    <rect x="20" y="45" width="95" height="90" rx="8" fill="#f8fafc" stroke="#94a3b8" class="dark:fill-slate-700"/>
    <text x="67" y="65" font-size="11" font-weight="bold" fill="#0284c7" text-anchor="middle">RẮN (Solid)</text>
    <circle cx="45" cy="85" r="5" fill="#64748b"/><circle cx="67" cy="85" r="5" fill="#64748b"/><circle cx="89" cy="85" r="5" fill="#64748b"/>
    <circle cx="45" cy="105" r="5" fill="#64748b"/><circle cx="67" cy="105" r="5" fill="#64748b"/><circle cx="89" cy="105" r="5" fill="#64748b"/>
    <text x="67" y="125" font-size="9" fill="#64748b" text-anchor="middle">Trật tự cao | S nhỏ</text>

    <!-- Liquid -->
    <rect x="135" y="45" width="95" height="90" rx="8" fill="#f0f9ff" stroke="#38bdf8" class="dark:fill-slate-700"/>
    <text x="182" y="65" font-size="11" font-weight="bold" fill="#0284c7" text-anchor="middle">LỎNG (Liquid)</text>
    <circle cx="155" cy="90" r="5" fill="#0284c7"/><circle cx="180" cy="80" r="5" fill="#0284c7"/><circle cx="205" cy="95" r="5" fill="#0284c7"/>
    <circle cx="165" cy="110" r="5" fill="#0284c7"/><circle cx="195" cy="115" r="5" fill="#0284c7"/>
    <text x="182" y="125" font-size="9" fill="#0369a1" text-anchor="middle">Tự do hơn | S vừa</text>

    <!-- Gas -->
    <rect x="250" y="45" width="95" height="90" rx="8" fill="#ecfdf5" stroke="#34d399" class="dark:fill-slate-700"/>
    <text x="297" y="65" font-size="11" font-weight="bold" fill="#059669" text-anchor="middle">KHÍ (Gas)</text>
    <circle cx="265" cy="80" r="5" fill="#10b981"/><circle cx="320" cy="90" r="5" fill="#10b981"/>
    <circle cx="280" cy="110" r="5" fill="#10b981"/><circle cx="330" cy="115" r="5" fill="#10b981"/>
    <text x="297" y="125" font-size="9" fill="#047857" text-anchor="middle">Hỗn loạn cực đại | S lớn</text>

    <!-- Arrow -->
    <line x1="30" y1="150" x2="330" y2="150" stroke="#10b981" stroke-width="2.5"/>
    <polygon points="330,147 337,150 330,153" fill="#10b981"/>
    <text x="180" y="165" font-size="10" font-weight="bold" fill="#047857" text-anchor="middle">Chiều tăng dần độ hỗn loạn: S(khí) &gt; S(lỏng) &gt; S(rắn)</text>

    <rect x="20" y="180" width="325" height="65" rx="6" fill="#f8fafc" stroke="#e2e8f0" class="dark:fill-slate-700/50 dark:stroke-slate-600"/>
    <text x="30" y="200" font-size="10" font-weight="bold" fill="#334155" class="dark:fill-slate-200">Biến thiên entropy phản ứng (ΔrS°):</text>
    <text x="30" y="218" font-size="9.5" fill="#475569" class="dark:fill-slate-300">ΔrS° = Σ ν·S°(sản phẩm) - Σ ν·S°(chất đầu)</text>
    <text x="30" y="234" font-size="9" fill="#64748b" class="dark:fill-slate-400">Phản ứng sinh thêm khí (Δn khí &gt; 0) ⟹ ΔrS° &gt; 0</text>
  </g>

  <!-- Right: Gibbs & Spontaneity Matrix -->
  <g transform="translate(410, 65)">
    <rect width="360" height="260" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" class="dark:fill-slate-800 dark:stroke-slate-700"/>
    <text x="180" y="24" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle" class="dark:fill-slate-100">Hàm thế đẳng áp Gibbs: ΔG = ΔH - T·ΔS</text>

    <!-- Matrix Table -->
    <rect x="20" y="40" width="320" height="150" rx="8" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-700/60 dark:stroke-slate-600"/>
    <line x1="20" y1="70" x2="340" y2="70" stroke="#cbd5e1" stroke-width="1"/>
    <line x1="20" y1="100" x2="340" y2="100" stroke="#cbd5e1" stroke-width="1"/>
    <line x1="20" y1="130" x2="340" y2="130" stroke="#cbd5e1" stroke-width="1"/>
    <line x1="20" y1="160" x2="340" y2="160" stroke="#cbd5e1" stroke-width="1"/>
    <line x1="80" y1="40" x2="80" y2="190" stroke="#cbd5e1" stroke-width="1"/>
    <line x1="140" y1="40" x2="140" y2="190" stroke="#cbd5e1" stroke-width="1"/>

    <!-- Table header -->
    <text x="50" y="58" font-size="10" font-weight="bold" fill="#475569" text-anchor="middle">ΔH</text>
    <text x="110" y="58" font-size="10" font-weight="bold" fill="#475569" text-anchor="middle">ΔS</text>
    <text x="240" y="58" font-size="10" font-weight="bold" fill="#475569" text-anchor="middle">Tính tự diễn biến của phản ứng</text>

    <!-- Row 1 -->
    <text x="50" y="88" font-size="12" font-weight="bold" fill="#16a34a" text-anchor="middle">-</text>
    <text x="110" y="88" font-size="12" font-weight="bold" fill="#16a34a" text-anchor="middle">+</text>
    <text x="240" y="88" font-size="10" font-weight="bold" fill="#16a34a" text-anchor="middle">Luôn tự diễn biến (mọi nhiệt độ)</text>

    <!-- Row 2 -->
    <text x="50" y="118" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">+</text>
    <text x="110" y="118" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">-</text>
    <text x="240" y="118" font-size="10" font-weight="bold" fill="#dc2626" text-anchor="middle">KHÔNG tự diễn biến (mọi T)</text>

    <!-- Row 3 -->
    <text x="50" y="148" font-size="12" font-weight="bold" fill="#ea580c" text-anchor="middle">-</text>
    <text x="110" y="148" font-size="12" font-weight="bold" fill="#ea580c" text-anchor="middle">-</text>
    <text x="240" y="148" font-size="10" fill="#ea580c" text-anchor="middle">Tự phát ở nhiệt độ THẤP (T &lt; ΔH/ΔS)</text>

    <!-- Row 4 -->
    <text x="50" y="178" font-size="12" font-weight="bold" fill="#0284c7" text-anchor="middle">+</text>
    <text x="110" y="178" font-size="12" font-weight="bold" fill="#0284c7" text-anchor="middle">+</text>
    <text x="240" y="178" font-size="10" fill="#0284c7" text-anchor="middle">Tự phát ở nhiệt độ CAO (T &gt; ΔH/ΔS)</text>

    <!-- Real-world example CaCO3 -->
    <rect x="20" y="200" width="320" height="48" rx="6" fill="#fef3c7" stroke="#fcd34d" class="dark:fill-amber-950/40 dark:stroke-amber-800"/>
    <text x="180" y="218" font-size="9.5" font-weight="bold" fill="#92400e" text-anchor="middle" class="dark:fill-amber-300">Ví dụ nung vôi: CaCO₃(s) ⟶ CaO(s) + CO₂(g)</text>
    <text x="180" y="234" font-size="8.5" fill="#78350f" text-anchor="middle" class="dark:fill-amber-400">ΔH &gt; 0, ΔS &gt; 0 ⟹ Chỉ tự phân hủy khi T &gt; 1111 K (~838°C)</text>
  </g>
</svg>
`;

// SVG 5: Tam giác cháy & Phân loại nổ
svgs[5] = `
<svg class="w-full h-auto rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-950/40 bg-gradient-to-br from-emerald-50/40 via-white to-teal-50/30 dark:from-slate-900 dark:via-slate-850 dark:to-emerald-950/20" viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="15" width="760" height="34" rx="8" fill="#10b981" fill-opacity="0.1" stroke="#10b981" stroke-width="1"/>
  <text x="400" y="37" font-size="14" font-weight="bold" text-anchor="middle" fill="#047857" class="dark:fill-emerald-400">TAM GIÁC CHÁY (FIRE TRIANGLE) VÀ CÁC LOẠI PHẢN ỨNG NỔ</text>

  <!-- Left: Fire Triangle -->
  <g transform="translate(40, 65)">
    <rect width="340" height="260" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" class="dark:fill-slate-800 dark:stroke-slate-700"/>
    <text x="170" y="24" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle" class="dark:fill-slate-100">Tam giác cháy (Cần 3 yếu tố đồng thời)</text>

    <!-- Triangle Path -->
    <polygon points="170,55 70,205 270,205" fill="#fef2f2" stroke="#ef4444" stroke-width="4" class="dark:fill-rose-950/20"/>

    <!-- Inside fire icon -->
    <circle cx="170" cy="145" r="22" fill="#fef08a" stroke="#f59e0b" stroke-width="2"/>
    <text x="170" y="150" font-size="14" font-weight="bold" fill="#ea580c" text-anchor="middle">🔥 CHÁY</text>

    <!-- 3 Vertex Nodes -->
    <!-- Top: Heat -->
    <circle cx="170" cy="55" r="20" fill="#ef4444"/>
    <text x="170" y="59" font-size="9" font-weight="bold" fill="#fff" text-anchor="middle">NGUỒN</text>
    <text x="170" y="40" font-size="11" font-weight="bold" fill="#b91c1c" text-anchor="middle">NHIỆT</text>

    <!-- Bottom Left: Fuel -->
    <circle cx="70" cy="205" r="20" fill="#f97316"/>
    <text x="70" y="209" font-size="9" font-weight="bold" fill="#fff" text-anchor="middle">CHẤT</text>
    <text x="70" y="235" font-size="11" font-weight="bold" fill="#c2410c" text-anchor="middle">CHÁY</text>

    <!-- Bottom Right: Oxygen -->
    <circle cx="270" cy="205" r="20" fill="#0284c7"/>
    <text x="270" y="209" font-size="9" font-weight="bold" fill="#fff" text-anchor="middle">OXYGEN</text>
    <text x="270" y="235" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">&gt; 14% vol</text>

    <text x="170" y="252" font-size="10" font-weight="bold" fill="#b91c1c" text-anchor="middle">Dập tắt: Loại bỏ ít nhất 1 trong 3 yếu tố</text>
  </g>

  <!-- Right: 4 Types of Explosions -->
  <g transform="translate(410, 65)">
    <rect width="360" height="260" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" class="dark:fill-slate-800 dark:stroke-slate-700"/>
    <text x="180" y="24" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle" class="dark:fill-slate-100">Phân loại 4 dạng phản ứng nổ</text>

    <!-- 4 cards -->
    <!-- Nổ vật lí -->
    <g transform="translate(20, 40)">
      <rect width="150" height="90" rx="8" fill="#f8fafc" stroke="#94a3b8" class="dark:fill-slate-700"/>
      <text x="75" y="20" font-size="11" font-weight="bold" fill="#0284c7" text-anchor="middle">1. NỔ VẬT LÍ</text>
      <text x="75" y="38" font-size="9" fill="#64748b" text-anchor="middle">Áp suất giãn nở nứt vỡ</text>
      <text x="75" y="52" font-size="9" fill="#64748b" text-anchor="middle">KHÔNG có phản ứng hóa học</text>
      <text x="75" y="75" font-size="8.5" font-weight="bold" fill="#475569" text-anchor="middle">Ví dụ: Lốp xe quá căng, nồi áp suất</text>
    </g>

    <!-- Nổ hóa học -->
    <g transform="translate(190, 40)">
      <rect width="150" height="90" rx="8" fill="#fef2f2" stroke="#fca5a5" class="dark:fill-rose-950/30 dark:stroke-rose-800"/>
      <text x="75" y="20" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="middle">2. NỔ HÓA HỌC</text>
      <text x="75" y="38" font-size="9" fill="#64748b" text-anchor="middle">Phản ứng tỏa nhiệt cực nhanh</text>
      <text x="75" y="52" font-size="9" fill="#64748b" text-anchor="middle">Tạo sóng áp suất tàn phá</text>
      <text x="75" y="75" font-size="8.5" font-weight="bold" fill="#b91c1c" text-anchor="middle">Ví dụ: Nổ gas LPG, thuốc nổ TNT</text>
    </g>

    <!-- Nổ hạt nhân -->
    <g transform="translate(20, 145)">
      <rect width="150" height="95" rx="8" fill="#faf5ff" stroke="#d8b4fe" class="dark:fill-purple-950/30 dark:stroke-purple-800"/>
      <text x="75" y="20" font-size="11" font-weight="bold" fill="#7c3aed" text-anchor="middle">3. NỔ HẠT NHÂN</text>
      <text x="75" y="38" font-size="9" fill="#64748b" text-anchor="middle">Phân hạch dây chuyền</text>
      <text x="75" y="52" font-size="9" fill="#64748b" text-anchor="middle">hoặc nhiệt hạch Mặt Trời</text>
      <text x="75" y="75" font-size="8.5" font-weight="bold" fill="#6d28d9" text-anchor="middle">Năng lượng E = Δm·c² khổng lồ</text>
    </g>

    <!-- Nổ bụi -->
    <g transform="translate(190, 145)">
      <rect width="150" height="95" rx="8" fill="#fefce8" stroke="#fde047" class="dark:fill-amber-950/30 dark:stroke-amber-800"/>
      <text x="75" y="20" font-size="11" font-weight="bold" fill="#d97706" text-anchor="middle">4. NỔ BỤI (Dust)</text>
      <text x="75" y="38" font-size="9" fill="#64748b" text-anchor="middle">Bụi mịn lơ lửng + khí kín</text>
      <text x="75" y="52" font-size="9" fill="#64748b" text-anchor="middle">Diện tích bề mặt cực lớn</text>
      <text x="75" y="75" font-size="8.5" font-weight="bold" fill="#b45309" text-anchor="middle">Ví dụ: Bột mì, đường, mùn cưa, than</text>
    </g>
  </g>
</svg>
`;

// SVG 6: Thang 3 nhiệt độ
svgs[6] = `
<svg class="w-full h-auto rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-950/40 bg-gradient-to-br from-emerald-50/40 via-white to-teal-50/30 dark:from-slate-900 dark:via-slate-850 dark:to-emerald-950/20" viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="15" width="760" height="34" rx="8" fill="#10b981" fill-opacity="0.1" stroke="#10b981" stroke-width="1"/>
  <text x="400" y="37" font-size="14" font-weight="bold" text-anchor="middle" fill="#047857" class="dark:fill-emerald-400">PHÂN BIỆT ĐIỂM CHỚP CHÁY – NHIỆT ĐỘ NGỌN LỬA – NHIỆT ĐỘ TỰ BỐC CHÁY</text>

  <!-- 3 Comparison Columns -->
  <!-- Col 1: Điểm chớp cháy -->
  <g transform="translate(40, 65)">
    <rect width="220" height="260" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" class="dark:fill-slate-800 dark:stroke-slate-700"/>
    <rect x="0" y="0" width="220" height="42" rx="12" fill="#fee2e2" class="dark:fill-rose-950/50"/>
    <text x="110" y="26" font-size="12" font-weight="bold" fill="#b91c1c" text-anchor="middle" class="dark:fill-rose-400">1. ĐIỂM CHỚP CHÁY</text>
    
    <text x="110" y="65" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle" class="dark:fill-slate-100">Flash Point</text>
    <text x="20" y="88" font-size="10" fill="#475569" class="dark:fill-slate-300">• Điều kiện: BẮT BUỘC có mồi lửa.</text>
    <text x="20" y="105" font-size="10" fill="#475569" class="dark:fill-slate-300">• Hiện tượng: Hơi bùng cháy rồi tắt.</text>
    <text x="20" y="122" font-size="10" fill="#475569" class="dark:fill-slate-300">• Ý nghĩa: Đánh giá nguy cơ bay hơi của chất lỏng dễ cháy.</text>

    <!-- Standard rule -->
    <rect x="15" y="140" width="190" height="50" rx="6" fill="#fef2f2" stroke="#fca5a5" class="dark:fill-slate-700 dark:stroke-rose-800"/>
    <text x="110" y="160" font-size="10.5" font-weight="bold" fill="#dc2626" text-anchor="middle">Ngưỡng: 37,8°C (100°F)</text>
    <text x="110" y="176" font-size="9" fill="#991b1b" text-anchor="middle" class="dark:fill-rose-300">&lt; 37,8°C: Chất lỏng dễ cháy</text>

    <text x="20" y="210" font-size="9.5" font-weight="bold" fill="#334155" class="dark:fill-slate-300">Số liệu tiêu biểu:</text>
    <text x="20" y="226" font-size="9" fill="#64748b" class="dark:fill-slate-400">• Xăng: ~ -43°C (cực nguy hiểm)</text>
    <text x="20" y="240" font-size="9" fill="#64748b" class="dark:fill-slate-400">• Cồn ethanol: ~ 13°C</text>
    <text x="20" y="254" font-size="9" fill="#64748b" class="dark:fill-slate-400">• Dầu diesel: 52°C - 96°C</text>
  </g>

  <!-- Col 2: Nhiệt độ ngọn lửa -->
  <g transform="translate(290, 65)">
    <rect width="220" height="260" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" class="dark:fill-slate-800 dark:stroke-slate-700"/>
    <rect x="0" y="0" width="220" height="42" rx="12" fill="#fef3c7" class="dark:fill-amber-950/50"/>
    <text x="110" y="26" font-size="12" font-weight="bold" fill="#b45309" text-anchor="middle" class="dark:fill-amber-400">2. NHIỆT ĐỘ NGỌN LỬA</text>

    <text x="110" y="65" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle" class="dark:fill-slate-100">Flame Temperature</text>
    <text x="20" y="88" font-size="10" fill="#475569" class="dark:fill-slate-300">• Điều kiện: Đoạn nhiệt ở 1 atm.</text>
    <text x="20" y="105" font-size="10" fill="#475569" class="dark:fill-slate-300">• Hiện tượng: Nhiệt độ cao nhất do phản ứng cháy tự sinh ra.</text>
    <text x="20" y="130" font-size="10" fill="#475569" class="dark:fill-slate-300">• Ý nghĩa: Đánh giá khả năng cấp nhiệt công nghiệp và sức tàn phá.</text>

    <rect x="15" y="150" width="190" height="40" rx="6" fill="#fffbeb" stroke="#fde68a" class="dark:fill-slate-700 dark:stroke-amber-800"/>
    <text x="110" y="168" font-size="9.5" font-weight="bold" fill="#b45309" text-anchor="middle" class="dark:fill-amber-300">Cháy trong O₂ tinh khiết</text>
    <text x="110" y="182" font-size="8.5" fill="#92400e" text-anchor="middle" class="dark:fill-amber-400">cao hơn nhiều cháy trong không khí</text>

    <text x="20" y="210" font-size="9.5" font-weight="bold" fill="#334155" class="dark:fill-slate-300">Số liệu tiêu biểu:</text>
    <text x="20" y="226" font-size="9" fill="#64748b" class="dark:fill-slate-400">• Cồn trong không khí: ~ 2082°C</text>
    <text x="20" y="240" font-size="9" fill="#64748b" class="dark:fill-slate-400">• Đèn hàn C₂H₂ + O₂: ~ 3410 K</text>
    <text x="20" y="254" font-size="9" fill="#64748b" class="dark:fill-slate-400">• Đốt gỗ thông thường: ~ 600 - 800°C</text>
  </g>

  <!-- Col 3: Nhiệt độ tự bốc cháy -->
  <g transform="translate(540, 65)">
    <rect width="220" height="260" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" class="dark:fill-slate-800 dark:stroke-slate-700"/>
    <rect x="0" y="0" width="220" height="42" rx="12" fill="#e0f2fe" class="dark:fill-sky-950/50"/>
    <text x="110" y="26" font-size="11.5" font-weight="bold" fill="#0369a1" text-anchor="middle" class="dark:fill-sky-400">3. NHIỆT ĐỘ TỰ BỐC CHÁY</text>

    <text x="110" y="65" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle" class="dark:fill-slate-100">Autoignition Temperature</text>
    <text x="20" y="88" font-size="10" fill="#475569" class="dark:fill-slate-300">• Điều kiện: KHÔNG CẦN mồi lửa.</text>
    <text x="20" y="105" font-size="10" fill="#475569" class="dark:fill-slate-300">• Hiện tượng: Tự phát hỏa do tích tụ nhiệt nội tại từ môi trường.</text>
    <text x="20" y="130" font-size="10" fill="#475569" class="dark:fill-slate-300">• Ý nghĩa: Xác định ngưỡng nhiệt độ tối đa cho phép tồn trữ an toàn.</text>

    <rect x="15" y="150" width="190" height="40" rx="6" fill="#f0f9ff" stroke="#bae6fd" class="dark:fill-slate-700 dark:stroke-sky-800"/>
    <text x="110" y="168" font-size="9.5" font-weight="bold" fill="#0284c7" text-anchor="middle">Động cơ Diesel nén tự nổ</text>
    <text x="110" y="182" font-size="8.5" fill="#0369a1" text-anchor="middle">dựa trên nhiệt độ tự bốc cháy</text>

    <text x="20" y="210" font-size="9.5" font-weight="bold" fill="#334155" class="dark:fill-slate-300">Số liệu tiêu biểu:</text>
    <text x="20" y="226" font-size="9" fill="#64748b" class="dark:fill-slate-400">• Phosphorus trắng: 30°C - 34°C</text>
    <text x="20" y="240" font-size="9" fill="#64748b" class="dark:fill-slate-400">• Dầu diesel: ~ 210°C (&lt; xăng)</text>
    <text x="20" y="254" font-size="9" fill="#64748b" class="dark:fill-slate-400">• Xăng: ~ 280°C</text>
  </g>
</svg>
`;

// SVG 7: Enthalpy phản ứng cháy & Đồ thị v = k[O2]
svgs[7] = `
<svg class="w-full h-auto rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-950/40 bg-gradient-to-br from-emerald-50/40 via-white to-teal-50/30 dark:from-slate-900 dark:via-slate-850 dark:to-emerald-950/20" viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="15" width="760" height="34" rx="8" fill="#10b981" fill-opacity="0.1" stroke="#10b981" stroke-width="1"/>
  <text x="400" y="37" font-size="14" font-weight="bold" text-anchor="middle" fill="#047857" class="dark:fill-emerald-400">TÍNH TOÁN NHIỆT LƯỢNG CHÁY VÀ ẢNH HƯỞNG CỦA NỒNG ĐỘ OXYGEN</text>

  <!-- Left: Combustion enthalpy cards -->
  <g transform="translate(30, 65)">
    <rect width="360" height="260" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" class="dark:fill-slate-800 dark:stroke-slate-700"/>
    <text x="180" y="24" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle" class="dark:fill-slate-100">Enthalpy cháy chuẩn của các nhiên liệu chính</text>

    <!-- Fuel 1: Methane -->
    <rect x="20" y="42" width="320" height="42" rx="6" fill="#f8fafc" stroke="#e2e8f0" class="dark:fill-slate-700 dark:stroke-slate-600"/>
    <text x="35" y="60" font-size="11" font-weight="bold" fill="#0284c7">Methane (CH₄):</text>
    <text x="35" y="74" font-size="9" fill="#64748b">CH₄ + 2O₂ ⟶ CO₂ + 2H₂O</text>
    <text x="320" y="66" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="end">ΔrH° = -890,3 kJ/mol</text>

    <!-- Fuel 2: Propane -->
    <rect x="20" y="92" width="320" height="42" rx="6" fill="#f8fafc" stroke="#e2e8f0" class="dark:fill-slate-700 dark:stroke-slate-600"/>
    <text x="35" y="110" font-size="11" font-weight="bold" fill="#0284c7">Propane (C₃H₈):</text>
    <text x="35" y="124" font-size="9" fill="#64748b">C₃H₈ + 5O₂ ⟶ 3CO₂ + 4H₂O</text>
    <text x="320" y="116" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="end">ΔrH° = -2220 kJ/mol</text>

    <!-- Fuel 3: Butane -->
    <rect x="20" y="142" width="320" height="42" rx="6" fill="#f8fafc" stroke="#e2e8f0" class="dark:fill-slate-700 dark:stroke-slate-600"/>
    <text x="35" y="160" font-size="11" font-weight="bold" fill="#0284c7">Butane (C₄H₁₀):</text>
    <text x="35" y="174" font-size="9" fill="#64748b">C₄H₁₀ + 13/2 O₂ ⟶ 4CO₂ + 5H₂O</text>
    <text x="320" y="166" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="end">ΔrH° = -2878 kJ/mol</text>

    <!-- Gas mixture formula -->
    <rect x="20" y="194" width="320" height="52" rx="6" fill="#fef2f2" stroke="#fca5a5" class="dark:fill-rose-950/40 dark:stroke-rose-800"/>
    <text x="180" y="214" font-size="10.5" font-weight="bold" fill="#b91c1c" text-anchor="middle">Hỗn hợp gas LPG (Propane : Butane = 2 : 3)</text>
    <text x="180" y="232" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle" class="dark:fill-rose-300">ΔH(gas) = 0,4 · ΔH(C₃H₈) + 0,6 · ΔH(C₄H₁₀)</text>
  </g>

  <!-- Right: Reaction rate vs %O2 -->
  <g transform="translate(410, 65)">
    <rect width="360" height="260" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" class="dark:fill-slate-800 dark:stroke-slate-700"/>
    <text x="180" y="24" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle" class="dark:fill-slate-100">Động học tốc độ cháy theo nồng độ O₂: v = k·[O₂]</text>

    <!-- Graph axes -->
    <line x1="50" y1="200" x2="320" y2="200" stroke="#64748b" stroke-width="1.5"/>
    <polygon points="320,197 327,200 320,203" fill="#64748b"/>
    <text x="270" y="218" font-size="9.5" fill="#64748b">Nồng độ O₂ (%)</text>

    <line x1="50" y1="200" x2="50" y2="45" stroke="#64748b" stroke-width="1.5"/>
    <polygon points="47,45 50,38 53,45" fill="#64748b"/>
    <text x="25" y="45" font-size="9.5" fill="#64748b" transform="rotate(-90 25 45)">Tốc độ v</text>

    <!-- Linear line v = k[O2] -->
    <line x1="50" y1="200" x2="300" y2="60" stroke="#059669" stroke-width="3"/>

    <!-- Key point: 14% O2 threshold -->
    <line x1="180" y1="200" x2="180" y2="127" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3 3"/>
    <line x1="50" y1="127" x2="180" y2="127" stroke="#ef4444" stroke-width="1" stroke-dasharray="3 3"/>
    <circle cx="180" cy="127" r="5" fill="#ef4444"/>
    <text x="180" y="215" font-size="9.5" font-weight="bold" fill="#ef4444" text-anchor="middle">14% O₂</text>
    <text x="40" y="130" font-size="9" fill="#ef4444" text-anchor="end">v₁₄</text>

    <!-- Key point: 21% O2 normal -->
    <line x1="250" y1="200" x2="250" y2="88" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3 3"/>
    <line x1="50" y1="88" x2="250" y2="88" stroke="#0284c7" stroke-width="1" stroke-dasharray="3 3"/>
    <circle cx="250" cy="88" r="5" fill="#0284c7"/>
    <text x="250" y="215" font-size="9.5" font-weight="bold" fill="#0284c7" text-anchor="middle">21% O₂</text>
    <text x="40" y="92" font-size="9" fill="#0284c7" text-anchor="end">v₂₁</text>

    <!-- Extinction Zone shading -->
    <rect x="50" y="45" width="130" height="155" fill="#fee2e2" fill-opacity="0.3"/>
    <text x="115" y="170" font-size="9" font-weight="bold" fill="#b91c1c" text-anchor="middle">VÙNG TẮT CHÁY (&lt; 14% O₂)</text>

    <text x="180" y="240" font-size="10" font-weight="bold" fill="#047857" text-anchor="middle">Tỉ số tốc độ: v₂₁ / v₁₄ = 21 / 14 = 1,5 lần</text>
  </g>
</svg>
`;

// SVG 8: Ma trận chất chữa cháy & Quy trình 114
svgs[8] = `
<svg class="w-full h-auto rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-950/40 bg-gradient-to-br from-emerald-50/40 via-white to-teal-50/30 dark:from-slate-900 dark:via-slate-850 dark:to-emerald-950/20" viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="15" width="760" height="34" rx="8" fill="#10b981" fill-opacity="0.1" stroke="#10b981" stroke-width="1"/>
  <text x="400" y="37" font-size="14" font-weight="bold" text-anchor="middle" fill="#047857" class="dark:fill-emerald-400">MA TRẬN CHẤT CHỮA CHÁY VÀ QUY TRÌNH ỨNG PHÓ KHẨN CẤP 114</text>

  <!-- Left: Fire Extinguishing Matrix -->
  <g transform="translate(30, 65)">
    <rect width="400" height="260" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" class="dark:fill-slate-800 dark:stroke-slate-700"/>
    <text x="200" y="24" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle" class="dark:fill-slate-100">Bảng chọn chất chữa cháy theo từng loại đám cháy</text>

    <!-- Table -->
    <rect x="15" y="40" width="370" height="155" rx="6" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-700/60 dark:stroke-slate-600"/>
    <line x1="15" y1="70" x2="385" y2="70" stroke="#cbd5e1" stroke-width="1"/>
    <line x1="15" y1="100" x2="385" y2="100" stroke="#cbd5e1" stroke-width="1"/>
    <line x1="15" y1="130" x2="385" y2="130" stroke="#cbd5e1" stroke-width="1"/>
    <line x1="15" y1="165" x2="385" y2="165" stroke="#cbd5e1" stroke-width="1"/>
    <line x1="85" y1="40" x2="85" y2="195" stroke="#cbd5e1" stroke-width="1"/>
    <line x1="160" y1="40" x2="160" y2="195" stroke="#cbd5e1" stroke-width="1"/>
    <line x1="235" y1="40" x2="235" y2="195" stroke="#cbd5e1" stroke-width="1"/>
    <line x1="310" y1="40" x2="310" y2="195" stroke="#cbd5e1" stroke-width="1"/>

    <!-- Headers -->
    <text x="50" y="58" font-size="10" font-weight="bold" fill="#475569" text-anchor="middle">Đám cháy</text>
    <text x="122" y="58" font-size="10" font-weight="bold" fill="#0284c7" text-anchor="middle">Nước (H₂O)</text>
    <text x="197" y="58" font-size="10" font-weight="bold" fill="#64748b" text-anchor="middle">Khí CO₂</text>
    <text x="272" y="58" font-size="10" font-weight="bold" fill="#d97706" text-anchor="middle">Bọt Foam</text>
    <text x="347" y="58" font-size="10" font-weight="bold" fill="#16a34a" text-anchor="middle">Bột khô</text>

    <!-- Row A -->
    <text x="50" y="88" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle" class="dark:fill-slate-200">A (Rắn)</text>
    <text x="122" y="88" font-size="11" font-weight="bold" fill="#16a34a" text-anchor="middle">RẤT TỐT</text>
    <text x="197" y="88" font-size="10" fill="#475569" text-anchor="middle">Dùng được</text>
    <text x="272" y="88" font-size="10" fill="#475569" text-anchor="middle">Tốt</text>
    <text x="347" y="88" font-size="10" fill="#16a34a" text-anchor="middle">Tốt</text>

    <!-- Row B -->
    <text x="50" y="118" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle" class="dark:fill-slate-200">B (Xăng dầu)</text>
    <text x="122" y="118" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="middle">CẤM 🚫</text>
    <text x="197" y="118" font-size="11" font-weight="bold" fill="#16a34a" text-anchor="middle">RẤT TỐT</text>
    <text x="272" y="118" font-size="11" font-weight="bold" fill="#16a34a" text-anchor="middle">RẤT TỐT</text>
    <text x="347" y="118" font-size="10" fill="#16a34a" text-anchor="middle">Tốt</text>

    <!-- Row D -->
    <text x="50" y="148" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle" class="dark:fill-slate-200">D (Kim loại)</text>
    <text x="122" y="148" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="middle">CẤM 🚫</text>
    <text x="197" y="148" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="middle">CẤM 🚫</text>
    <text x="272" y="148" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="middle">CẤM 🚫</text>
    <text x="347" y="148" font-size="9" font-weight="bold" fill="#d97706" text-anchor="middle">Bột loại D</text>

    <!-- Row E -->
    <text x="50" y="182" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle" class="dark:fill-slate-200">E (Có điện)</text>
    <text x="122" y="182" font-size="9" fill="#dc2626" text-anchor="middle">Cấm khi có điện</text>
    <text x="197" y="182" font-size="11" font-weight="bold" fill="#16a34a" text-anchor="middle">RẤT TỐT</text>
    <text x="272" y="182" font-size="9" fill="#dc2626" text-anchor="middle">Hạn chế</text>
    <text x="347" y="182" font-size="10" fill="#16a34a" text-anchor="middle">Tốt</text>

    <!-- Warning bottom -->
    <rect x="15" y="205" width="370" height="42" rx="6" fill="#fee2e2" stroke="#fca5a5" class="dark:fill-rose-950/40 dark:stroke-rose-800"/>
    <text x="200" y="222" font-size="9.5" font-weight="bold" fill="#b91c1c" text-anchor="middle">CẢNH BÁO: Kim loại mạnh (Mg, Al) nổ khi gặp H₂O và phản ứng với CO₂</text>
    <text x="200" y="238" font-size="9" fill="#991b1b" text-anchor="middle" class="dark:fill-rose-300">2Mg + CO₂ ⟶ 2MgO + C (tỏa nhiệt làm cháy dữ dội hơn)</text>
  </g>

  <!-- Right: 4 Emergency Steps 114 -->
  <g transform="translate(450, 65)">
    <rect width="320" height="260" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" class="dark:fill-slate-800 dark:stroke-slate-700"/>
    <text x="160" y="24" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle" class="dark:fill-slate-100">Quy trình ứng phó khẩn cấp 4 bước</text>

    <!-- Step 1 -->
    <rect x="15" y="40" width="290" height="42" rx="6" fill="#fef2f2" stroke="#fca5a5" class="dark:fill-slate-700"/>
    <circle cx="35" cy="61" r="12" fill="#ef4444"/>
    <text x="35" y="65" font-size="10" font-weight="bold" fill="#fff" text-anchor="middle">1</text>
    <text x="58" y="56" font-size="10" font-weight="bold" fill="#b91c1c" class="dark:fill-rose-400">BÁO ĐỘNG NGAY LẬP TỨC</text>
    <text x="58" y="70" font-size="8.5" fill="#64748b" class="dark:fill-slate-400">Hô hoán to, nhấn chuông báo cháy tòa nhà</text>

    <!-- Step 2 -->
    <rect x="15" y="90" width="290" height="42" rx="6" fill="#fffbeb" stroke="#fde68a" class="dark:fill-slate-700"/>
    <circle cx="35" cy="111" r="12" fill="#f59e0b"/>
    <text x="35" y="115" font-size="10" font-weight="bold" fill="#fff" text-anchor="middle">2</text>
    <text x="58" y="106" font-size="10" font-weight="bold" fill="#b45309" class="dark:fill-amber-400">CẮT CẦU DAO ĐIỆN AN TOÀN</text>
    <text x="58" y="120" font-size="8.5" fill="#64748b" class="dark:fill-slate-400">Dùng vật cách điện ngắt nguồn tổng khu vực</text>

    <!-- Step 3 -->
    <rect x="15" y="140" width="290" height="42" rx="6" fill="#f0f9ff" stroke="#bae6fd" class="dark:fill-slate-700"/>
    <circle cx="35" cy="161" r="12" fill="#0284c7"/>
    <text x="35" y="165" font-size="10" font-weight="bold" fill="#fff" text-anchor="middle">3</text>
    <text x="58" y="156" font-size="10" font-weight="bold" fill="#0369a1" class="dark:fill-sky-400">CHỮA CHÁY TẠI CHỖ (KHI CÒN NHỎ)</text>
    <text x="58" y="170" font-size="8.5" fill="#64748b" class="dark:fill-slate-400">Dùng bình xách tay, chăn ướt, cát khi có lối thoát</text>

    <!-- Step 4 -->
    <rect x="15" y="190" width="290" height="52" rx="6" fill="#f0fdf4" stroke="#86efac" class="dark:fill-slate-700"/>
    <circle cx="35" cy="216" r="14" fill="#10b981"/>
    <text x="35" y="220" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">4</text>
    <text x="58" y="208" font-size="10.5" font-weight="bold" fill="#047857" class="dark:fill-emerald-400">GỌI 114 VÀ THOÁT NẠN KHẨN CẤP</text>
    <text x="58" y="223" font-size="8.5" fill="#15803d" class="dark:fill-emerald-300">Khăn ướt bịt mũi miệng, cúi thấp người men chân tường</text>
    <text x="58" y="235" font-size="8" fill="#64748b">Cấp cứu gọi 115 | Không bao giờ quay lại lấy tài sản</text>
  </g>
</svg>
`;

// SVG 9: ChemSketch 2D to 3D Viewer
svgs[9] = `
<svg class="w-full h-auto rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-950/40 bg-gradient-to-br from-emerald-50/40 via-white to-teal-50/30 dark:from-slate-900 dark:via-slate-850 dark:to-emerald-950/20" viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="15" width="760" height="34" rx="8" fill="#10b981" fill-opacity="0.1" stroke="#10b981" stroke-width="1"/>
  <text x="400" y="37" font-size="14" font-weight="bold" text-anchor="middle" fill="#047857" class="dark:fill-emerald-400">QUY TRÌNH VẼ CẤU TRÚC 2D BẰNG CHEMSKETCH VÀ MÔ HÌNH HÓA 3D VIEW</text>

  <!-- Step 1: 2D Draw -->
  <g transform="translate(30, 65)">
    <rect width="220" height="260" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" class="dark:fill-slate-800 dark:stroke-slate-700"/>
    <text x="110" y="24" font-size="11.5" font-weight="bold" fill="#0284c7" text-anchor="middle">Bước 1: Vẽ 2D ChemSketch</text>

    <!-- Mock canvas -->
    <rect x="15" y="40" width="190" height="120" rx="6" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-700"/>
    <!-- Menu bar mock -->
    <rect x="15" y="40" width="190" height="18" fill="#e2e8f0" class="dark:fill-slate-600"/>
    <text x="25" y="53" font-size="8" fill="#64748b">File  Edit  Tools  Template</text>
    <!-- Drawn molecule: H2SO4 -->
    <line x1="110" y1="90" x2="110" y2="65" stroke="#334155" stroke-width="2.5"/>
    <line x1="110" y1="90" x2="110" y2="125" stroke="#334155" stroke-width="2.5"/>
    <line x1="110" y1="90" x2="70" y2="90" stroke="#334155" stroke-width="2"/>
    <line x1="110" y1="90" x2="150" y2="90" stroke="#334155" stroke-width="2"/>
    <text x="110" y="95" font-size="12" font-weight="bold" fill="#ca8a04" text-anchor="middle">S</text>
    <text x="110" y="62" font-size="10" font-weight="bold" fill="#ef4444" text-anchor="middle">O</text>
    <text x="110" y="136" font-size="10" font-weight="bold" fill="#ef4444" text-anchor="middle">O</text>
    <text x="55" y="94" font-size="9" fill="#0f172a" text-anchor="middle" class="dark:fill-slate-200">HO-</text>
    <text x="165" y="94" font-size="9" fill="#0f172a" text-anchor="middle" class="dark:fill-slate-200">-OH</text>

    <text x="20" y="180" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Chọn C, N, O, S từ bảng tuần hoàn</text>
    <text x="20" y="196" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Đổi hóa trị Valence S = 6</text>
    <text x="20" y="212" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Bổ sung cặp electron tự do Lewis</text>
    <text x="20" y="228" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Dùng lệnh Clean Structure căn góc</text>
    <text x="20" y="248" font-size="9" font-weight="bold" fill="#047857" class="dark:fill-emerald-400">Lưu file gốc định dạng: .sk2</text>
  </g>

  <!-- Arrow 1 to 2 -->
  <g transform="translate(260, 185)">
    <line x1="0" y1="0" x2="20" y2="0" stroke="#10b981" stroke-width="3"/>
    <polygon points="20,-4 28,0 20,4" fill="#10b981"/>
    <text x="14" y="-10" font-size="9" font-weight="bold" fill="#047857" text-anchor="middle">3D Optimize</text>
  </g>

  <!-- Step 2: 3D Viewer -->
  <g transform="translate(295, 65)">
    <rect width="220" height="260" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" class="dark:fill-slate-800 dark:stroke-slate-700"/>
    <text x="110" y="24" font-size="11.5" font-weight="bold" fill="#059669" text-anchor="middle">Bước 2: ACD/3D Viewer</text>

    <!-- 3D Black screen mock -->
    <rect x="15" y="40" width="190" height="120" rx="6" fill="#0f172a" stroke="#334155"/>
    <!-- Ball and stick 3D model -->
    <circle cx="110" cy="100" r="16" fill="#eab308"/>
    <text x="110" y="104" font-size="10" font-weight="bold" fill="#fff" text-anchor="middle">S</text>
    <!-- 4 bonds in 3D -->
    <line x1="110" y1="100" x2="70" y2="70" stroke="#94a3b8" stroke-width="3"/>
    <circle cx="70" cy="70" r="11" fill="#ef4444"/>
    <line x1="110" y1="100" x2="150" y2="70" stroke="#94a3b8" stroke-width="3"/>
    <circle cx="150" cy="70" r="11" fill="#ef4444"/>
    <line x1="110" y1="100" x2="80" y2="135" stroke="#94a3b8" stroke-width="3"/>
    <circle cx="80" cy="135" r="11" fill="#ef4444"/>
    <line x1="110" y1="100" x2="145" y2="135" stroke="#94a3b8" stroke-width="3"/>
    <circle cx="145" cy="135" r="11" fill="#ef4444"/>

    <text x="20" y="180" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Chế độ: Balls and Sticks / Wireframe</text>
    <text x="20" y="196" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Đo Bond Length (độ dài liên kết, Å)</text>
    <text x="20" y="212" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Đo Bond Angle (góc liên kết, độ °)</text>
    <text x="20" y="228" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Đo Dihedral Angle (góc nhị diện)</text>
    <text x="20" y="248" font-size="9" font-weight="bold" fill="#0284c7">Căn chỉnh góc nhìn trực quan 360°</text>
  </g>

  <!-- Arrow 2 to 3 -->
  <g transform="translate(525, 185)">
    <line x1="0" y1="0" x2="20" y2="0" stroke="#10b981" stroke-width="3"/>
    <polygon points="20,-4 28,0 20,4" fill="#10b981"/>
    <text x="14" y="-10" font-size="9" font-weight="bold" fill="#047857" text-anchor="middle">Copy/Paste</text>
  </g>

  <!-- Step 3: Embed in Office -->
  <g transform="translate(560, 65)">
    <rect width="210" height="260" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" class="dark:fill-slate-800 dark:stroke-slate-700"/>
    <text x="105" y="24" font-size="11.5" font-weight="bold" fill="#7c3aed" text-anchor="middle">Bước 3: Nhúng vào Office</text>

    <!-- Word doc mock -->
    <rect x="15" y="40" width="180" height="120" rx="6" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-700"/>
    <rect x="25" y="52" width="160" height="8" rx="2" fill="#2563eb" fill-opacity="0.8"/>
    <rect x="25" y="65" width="140" height="4" rx="1" fill="#94a3b8"/>
    <rect x="25" y="73" width="150" height="4" rx="1" fill="#94a3b8"/>
    <rect x="40" y="85" width="130" height="60" rx="4" fill="#e0f2fe" stroke="#38bdf8"/>
    <text x="105" y="118" font-size="9" font-weight="bold" fill="#0369a1" text-anchor="middle">OLE ChemSketch Object</text>

    <text x="15" y="180" font-size="9" font-weight="bold" fill="#2563eb">• Cách 1: Đối tượng nhúng OLE</text>
    <text x="25" y="195" font-size="8.5" fill="#64748b">Copy ⟶ Paste trực tiếp vào Word.</text>
    <text x="25" y="208" font-size="8.5" fill="#15803d">Double-click để sửa lại bất kì lúc nào!</text>
    
    <text x="15" y="224" font-size="9" font-weight="bold" fill="#ea580c">• Cách 2: Paste Special dạng ảnh</text>
    <text x="25" y="238" font-size="8.5" fill="#64748b">Chọn Windows Metafile (WMF/EMF).</text>
    <text x="25" y="250" font-size="8.5" fill="#64748b">Nhẹ máy, không vỡ hạt, không chỉnh sửa.</text>
  </g>
</svg>
`;

// SVG 10: Yenka Simulation CaCO3 + HCl
svgs[10] = `
<svg class="w-full h-auto rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-950/40 bg-gradient-to-br from-emerald-50/40 via-white to-teal-50/30 dark:from-slate-900 dark:via-slate-850 dark:to-emerald-950/20" viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="15" width="760" height="34" rx="8" fill="#10b981" fill-opacity="0.1" stroke="#10b981" stroke-width="1"/>
  <text x="400" y="37" font-size="14" font-weight="bold" text-anchor="middle" fill="#047857" class="dark:fill-emerald-400">PHÒNG THÍ NGHIỆM ẢO YENKA: ĐO ĐỒ THỊ TỐC ĐỘ PHẢN ỨNG TẠO KHÍ CO₂</text>

  <!-- Left: Virtual Lab Apparatus Mock -->
  <g transform="translate(30, 65)">
    <rect width="360" height="260" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" class="dark:fill-slate-800 dark:stroke-slate-700"/>
    <text x="180" y="24" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle" class="dark:fill-slate-100">Mô phỏng: 2HCl(aq) + CaCO₃(s) ⟶ CaCl₂ + CO₂↑ + H₂O</text>

    <!-- Yenka workspace mock -->
    <rect x="20" y="40" width="320" height="150" rx="8" fill="#f8fafc" stroke="#e2e8f0" class="dark:fill-slate-700/60"/>

    <!-- Conical Flask -->
    <path d="M 90 150 L 50 175 C 45 178, 45 185, 55 185 L 125 185 C 135 185, 135 178, 130 175 L 90 150 Z" fill="#e0f2fe" stroke="#38bdf8" stroke-width="1.5"/>
    <!-- Liquid inside -->
    <path d="M 60 172 L 55 183 L 125 183 L 120 172 Z" fill="#93c5fd" fill-opacity="0.6"/>
    <!-- CaCO3 chunks -->
    <rect x="75" y="177" width="8" height="5" rx="1" fill="#cbd5e1"/>
    <rect x="90" y="176" width="10" height="6" rx="1" fill="#cbd5e1"/>
    <rect x="105" y="178" width="7" height="4" rx="1" fill="#cbd5e1"/>
    <!-- Bubbles -->
    <circle cx="85" cy="168" r="2" fill="#38bdf8"/>
    <circle cx="95" cy="164" r="2.5" fill="#38bdf8"/>
    <circle cx="102" cy="169" r="1.5" fill="#38bdf8"/>

    <!-- Delivery Tube -->
    <path d="M 90 148 L 90 120 L 190 120 L 190 160" fill="none" stroke="#64748b" stroke-width="3"/>

    <!-- Gas Syringe -->
    <rect x="185" y="155" width="120" height="24" rx="4" fill="#ffffff" stroke="#64748b" stroke-width="1.5" class="dark:fill-slate-800"/>
    <rect x="187" y="158" width="60" height="18" fill="#e0f2fe" fill-opacity="0.7"/>
    <!-- Plunger -->
    <rect x="247" y="156" width="8" height="22" fill="#334155"/>
    <line x1="255" y1="167" x2="330" y2="167" stroke="#334155" stroke-width="4"/>
    <text x="215" y="170" font-size="9" font-weight="bold" fill="#0369a1" text-anchor="middle">CO₂ khí</text>

    <!-- Real-time formula -->
    <rect x="20" y="200" width="320" height="45" rx="6" fill="#f0fdf4" stroke="#86efac" class="dark:fill-slate-700/60 dark:stroke-emerald-800"/>
    <text x="180" y="218" font-size="10.5" font-weight="bold" fill="#047857" text-anchor="middle" class="dark:fill-emerald-300">Tốc độ trung bình: v̄(CO₂) = ΔV / Δt</text>
    <text x="180" y="233" font-size="9" fill="#15803d" text-anchor="middle" class="dark:fill-emerald-400">Ví dụ: ΔV = 36 mL trong 30 s ⟹ v̄ = 1,2 mL/s</text>
  </g>

  <!-- Right: V(CO2) vs Time Graph with Concentration Comparison -->
  <g transform="translate(410, 65)">
    <rect width="360" height="260" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" class="dark:fill-slate-800 dark:stroke-slate-700"/>
    <text x="180" y="24" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle" class="dark:fill-slate-100">Đồ thị thể tích CO₂ (mL) theo thời gian (s)</text>

    <!-- Axes -->
    <line x1="50" y1="190" x2="320" y2="190" stroke="#64748b" stroke-width="1.5"/>
    <polygon points="320,187 327,190 320,193" fill="#64748b"/>
    <text x="290" y="206" font-size="9.5" fill="#64748b">Thời gian t (s)</text>

    <line x1="50" y1="190" x2="50" y2="40" stroke="#64748b" stroke-width="1.5"/>
    <polygon points="47,40 50,33 53,40" fill="#64748b"/>
    <text x="25" y="45" font-size="9.5" fill="#64748b" transform="rotate(-90 25 45)">V(CO₂) mL</text>

    <!-- Curve 1: 2.0 M HCl (fastest, Red) -->
    <path d="M 50 190 Q 90 70 160 70 L 310 70" fill="none" stroke="#dc2626" stroke-width="2.5"/>
    <text x="230" y="65" font-size="9" font-weight="bold" fill="#dc2626">HCl 2,0 M (dốc nhất, nhanh nhất)</text>

    <!-- Curve 2: 1.0 M HCl (medium, Green) -->
    <path d="M 50 190 Q 130 90 220 90 L 310 90" fill="none" stroke="#10b981" stroke-width="2.5"/>
    <text x="230" y="103" font-size="9" font-weight="bold" fill="#10b981">HCl 1,0 M</text>

    <!-- Curve 3: 0.5 M HCl (slowest, Blue) -->
    <path d="M 50 190 Q 180 120 280 120 L 310 120" fill="none" stroke="#0284c7" stroke-width="2.5"/>
    <text x="230" y="133" font-size="9" font-weight="bold" fill="#0284c7">HCl 0,5 M (thoai thoải)</text>

    <!-- Key rule banner -->
    <rect x="20" y="210" width="320" height="40" rx="6" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-700/60 dark:stroke-slate-600"/>
    <text x="180" y="225" font-size="9" font-weight="bold" fill="#334155" text-anchor="middle" class="dark:fill-slate-200">Độ dốc ban đầu lớn ⟹ Tốc độ ban đầu lớn nhất</text>
    <text x="180" y="240" font-size="8.5" fill="#64748b" text-anchor="middle" class="dark:fill-slate-400">Đường cong nằm ngang ⟹ Phản ứng kết thúc hoàn toàn</text>
  </g>
</svg>
`;

// SVG 11: MOPAC AM1 Z-matrix to Geometry
svgs[11] = `
<svg class="w-full h-auto rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-950/40 bg-gradient-to-br from-emerald-50/40 via-white to-teal-50/30 dark:from-slate-900 dark:via-slate-850 dark:to-emerald-950/20" viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="15" width="760" height="34" rx="8" fill="#10b981" fill-opacity="0.1" stroke="#10b981" stroke-width="1"/>
  <text x="400" y="37" font-size="14" font-weight="bold" text-anchor="middle" fill="#047857" class="dark:fill-emerald-400">HÓA HỌC TÍNH TOÁN: MA TRẬN Z-MATRIX, MÃ MOPAC VÀ TỐI ƯU HÓA HÌNH HỌC</text>

  <!-- Step 1: Input .mop code -->
  <g transform="translate(30, 65)">
    <rect width="230" height="260" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" class="dark:fill-slate-800 dark:stroke-slate-700"/>
    <text x="115" y="24" font-size="11.5" font-weight="bold" fill="#0284c7" text-anchor="middle">1. Tệp tin đầu vào water.mop</text>

    <!-- Code Editor Mock -->
    <rect x="15" y="40" width="200" height="150" rx="6" fill="#1e293b"/>
    <rect x="15" y="40" width="200" height="18" fill="#334155"/>
    <circle cx="27" cy="49" r="3" fill="#ef4444"/><circle cx="37" cy="49" r="3" fill="#eab308"/><circle cx="47" cy="49" r="3" fill="#10b981"/>
    <text x="115" y="52" font-size="8" fill="#cbd5e1" text-anchor="middle">Z-Matrix Input</text>

    <!-- Code lines -->
    <text x="25" y="75" font-family="monospace" font-size="9" font-weight="bold" fill="#38bdf8">AM1 OPT</text>
    <text x="25" y="90" font-family="monospace" font-size="8" fill="#94a3b8">Water H2O calculation</text>
    <text x="25" y="103" font-family="monospace" font-size="8" fill="#94a3b8">Chuyen de Hoa hoc 10 KNTT</text>
    <text x="25" y="122" font-family="monospace" font-size="8" fill="#fde047">O  0.00 0  0.00 0  0.00 0</text>
    <text x="25" y="140" font-family="monospace" font-size="8" fill="#fde047">H  0.97 1  0.00 0  0.00 0  1</text>
    <text x="25" y="158" font-family="monospace" font-size="8" fill="#fde047">H  0.97 1  104.5 1  0.00 0  1 2</text>

    <text x="15" y="205" font-size="9" fill="#334155" class="dark:fill-slate-300">• AM1: Phương pháp bán kinh nghiệm</text>
    <text x="15" y="219" font-size="9" fill="#334155" class="dark:fill-slate-300">• OPT: Yêu cầu tối ưu hóa hình học</text>
    <text x="15" y="233" font-size="9" fill="#334155" class="dark:fill-slate-300">• Cờ 1: Cho phép biến đổi tối ưu</text>
    <text x="15" y="247" font-size="9" fill="#334155" class="dark:fill-slate-300">• Cờ 0: Cố định thông số hình học</text>
  </g>

  <!-- Arrow 1 to 2 -->
  <g transform="translate(270, 185)">
    <line x1="0" y1="0" x2="16" y2="0" stroke="#10b981" stroke-width="3"/>
    <polygon points="16,-4 24,0 16,4" fill="#10b981"/>
    <text x="12" y="-10" font-size="8.5" font-weight="bold" fill="#047857" text-anchor="middle">Run MOPAC</text>
  </g>

  <!-- Step 2: MOPAC Engine & Output -->
  <g transform="translate(300, 65)">
    <rect width="230" height="260" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" class="dark:fill-slate-800 dark:stroke-slate-700"/>
    <text x="115" y="24" font-size="11.5" font-weight="bold" fill="#059669" text-anchor="middle">2. Tệp kết quả water.out</text>

    <!-- Out log mock -->
    <rect x="15" y="40" width="200" height="150" rx="6" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-700"/>
    <text x="25" y="60" font-family="monospace" font-size="8" fill="#15803d">GEOMETRY OPTIMIZATION COMPLETED</text>
    <line x1="25" y1="68" x2="200" y2="68" stroke="#e2e8f0"/>

    <text x="25" y="85" font-size="8.5" fill="#64748b">FINAL HEAT OF FORMATION:</text>
    <text x="25" y="100" font-family="monospace" font-size="9" font-weight="bold" fill="#dc2626">ΔfH° = -247,9 kJ/mol</text>
    <text x="25" y="115" font-size="8" fill="#64748b">(Thực nghiệm: -241,8 kJ/mol | Sai số ~2,5%)</text>

    <line x1="25" y1="124" x2="200" y2="124" stroke="#e2e8f0"/>
    <text x="25" y="140" font-size="8.5" fill="#64748b">ĐỘ DÀI LIÊN KẾT O-H TỐI ƯU:</text>
    <text x="25" y="155" font-family="monospace" font-size="9" font-weight="bold" fill="#0284c7">r(O-H) = 0,96 - 0,97 Å</text>

    <text x="25" y="172" font-size="8.5" fill="#64748b">GÓC LIÊN KẾT H-O-H TỐI ƯU:</text>
    <text x="25" y="185" font-family="monospace" font-size="9" font-weight="bold" fill="#0284c7">∠(H-O-H) = 103,5° - 104,5°</text>

    <rect x="15" y="200" width="200" height="48" rx="6" fill="#ecfdf5" stroke="#a7f3d0" class="dark:fill-emerald-950/40 dark:stroke-emerald-800"/>
    <text x="115" y="218" font-size="9.5" font-weight="bold" fill="#047857" text-anchor="middle" class="dark:fill-emerald-300">Độ chính xác cao cho phân tử nhỏ</text>
    <text x="115" y="234" font-size="8.5" fill="#15803d" text-anchor="middle" class="dark:fill-emerald-400">Tiết kiệm thời gian so với Ab initio</text>
  </g>

  <!-- Arrow 2 to 3 -->
  <g transform="translate(540, 185)">
    <line x1="0" y1="0" x2="16" y2="0" stroke="#10b981" stroke-width="3"/>
    <polygon points="16,-4 24,0 16,4" fill="#10b981"/>
    <text x="12" y="-10" font-size="8.5" font-weight="bold" fill="#047857" text-anchor="middle">Avogadro</text>
  </g>

  <!-- Step 3: Avogadro 3D & Trends -->
  <g transform="translate(570, 65)">
    <rect width="200" height="260" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" class="dark:fill-slate-800 dark:stroke-slate-700"/>
    <text x="100" y="24" font-size="11.5" font-weight="bold" fill="#7c3aed" text-anchor="middle">3. Dãy CH₄ - NH₃ - H₂O</text>

    <!-- Avogadro screen mock -->
    <rect x="15" y="40" width="170" height="95" rx="6" fill="#0f172a" stroke="#334155"/>
    <text x="100" y="55" font-size="8" fill="#94a3b8" text-anchor="middle">Avogadro 3D Rendering</text>
    <!-- Visual H2O -->
    <circle cx="100" cy="85" r="14" fill="#ef4444"/>
    <text x="100" y="89" font-size="9" font-weight="bold" fill="#fff" text-anchor="middle">O</text>
    <line x1="100" y1="85" x2="70" y2="105" stroke="#94a3b8" stroke-width="2.5"/>
    <circle cx="70" cy="105" r="8" fill="#93c5fd"/>
    <line x1="100" y1="85" x2="130" y2="105" stroke="#94a3b8" stroke-width="2.5"/>
    <circle cx="130" cy="105" r="8" fill="#93c5fd"/>

    <text x="15" y="152" font-size="9" font-weight="bold" fill="#334155" class="dark:fill-slate-200">Xu hướng biến đổi trong dãy:</text>
    <text x="15" y="170" font-size="8.5" fill="#64748b" class="dark:fill-slate-400">• Độ dài liên kết X-H giảm dần:</text>
    <text x="25" y="184" font-size="8.5" font-weight="bold" fill="#0284c7">C-H (1,11Å) &gt; N-H (1,00Å) &gt; O-H (0,97Å)</text>
    
    <text x="15" y="204" font-size="8.5" fill="#64748b" class="dark:fill-slate-400">• Góc liên kết thu hẹp dần:</text>
    <text x="25" y="218" font-size="8.5" font-weight="bold" fill="#dc2626">CH₄ (109,5°) &gt; NH₃ (107°) &gt; H₂O (104,5°)</text>

    <text x="15" y="244" font-size="8" fill="#15803d" class="dark:fill-emerald-400">Xuất file MOPAC trực tiếp qua Extension</text>
  </g>
</svg>
`;

fs.writeFileSync('scratch/cd_hoahoc10_svgs.js', 'module.exports = ' + JSON.stringify(svgs, null, 2) + ';\n', 'utf8');
console.log('Generated cd_hoahoc10_svgs.js with 11 SVGs successfully!');
