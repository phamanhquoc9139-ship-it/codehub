const fs = require('fs');

const svgsData = {
  1: `<svg class="w-full h-auto rounded-xl shadow-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gSinU" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#06b6d4" />
    </linearGradient>
    <linearGradient id="gSinI" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f59e0b" />
      <stop offset="100%" stop-color="#ef4444" />
    </linearGradient>
  </defs>

  <!-- Background Grid -->
  <pattern id="gridAC" width="20" height="20" patternUnits="userSpaceOnUse">
    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#94a3b8" stroke-width="0.5" stroke-opacity="0.2" />
  </pattern>
  <rect width="800" height="360" fill="url(#gridAC)" />

  <!-- Title Badge -->
  <rect x="25" y="15" width="360" height="30" rx="6" fill="#1e40af" />
  <text x="35" y="35" fill="#ffffff" font-size="13" font-weight="bold" font-family="sans-serif">ĐỒ THỊ DÒNG ĐIỆN VÀ ĐIỆN ÁP XOAY CHIỀU HÌNH SIN</text>

  <!-- Left: Phasor Vector Circle Diagram -->
  <g transform="translate(140, 190)">
    <circle cx="0" cy="0" r="85" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3" />
    <!-- Axes -->
    <line x1="-100" y1="0" x2="100" y2="0" stroke="#475569" stroke-width="1.5" />
    <polygon points="100,0 93,-3 93,3" fill="#475569" />
    <text x="105" y="4" fill="#64748b" font-size="11" font-weight="bold" font-family="sans-serif">+x</text>

    <line x1="0" y1="100" x2="0" y2="-100" stroke="#475569" stroke-width="1.5" />
    <polygon points="0,-100 -3,-93 3,-93" fill="#475569" />
    <text x="-4" y="-108" fill="#64748b" font-size="11" font-weight="bold" font-family="sans-serif">+y</text>

    <!-- Vector U0 -->
    <line x1="0" y1="0" x2="68" y2="-52" stroke="#2563eb" stroke-width="3" />
    <polygon points="68,-52 57,-48 62,-41" fill="#2563eb" />
    <text x="74" y="-55" fill="#1d4ed8" font-size="12" font-weight="bold" font-family="sans-serif">U₀ (Điện áp)</text>

    <!-- Vector I0 -->
    <line x1="0" y1="0" x2="52" y2="-20" stroke="#ef4444" stroke-width="2.5" />
    <polygon points="52,-20 42,-18 45,-12" fill="#ef4444" />
    <text x="58" y="-18" fill="#dc2626" font-size="11" font-weight="bold" font-family="sans-serif">I₀ (Dòng điện)</text>

    <!-- Angle Phi Arc -->
    <path d="M 35,-13 A 38 38 0 0 1 30,-23" fill="none" stroke="#059669" stroke-width="2" />
    <text x="38" y="-23" fill="#059669" font-size="11" font-weight="bold" font-family="sans-serif">φ</text>

    <!-- Rotation Arrow -->
    <path d="M 65,-75 A 100 100 0 0 0 20,-95" fill="none" stroke="#6366f1" stroke-width="2" />
    <polygon points="20,-95 28,-92 25,-86" fill="#6366f1" />
    <text x="45" y="-92" fill="#6366f1" font-size="11" font-weight="bold" font-family="sans-serif">ω (rad/s)</text>
  </g>

  <!-- Right: Waveform u(t) and i(t) -->
  <g transform="translate(340, 190)">
    <!-- Time axis -->
    <line x1="0" y1="0" x2="430" y2="0" stroke="#475569" stroke-width="2" />
    <polygon points="430,0 422,-4 422,4" fill="#475569" />
    <text x="415" y="18" fill="#475569" font-size="12" font-weight="bold" font-family="sans-serif">t (s)</text>

    <!-- Y axis -->
    <line x1="0" y1="120" x2="0" y2="-120" stroke="#475569" stroke-width="2" />
    <polygon points="0,-120 -4,-112 4,-112" fill="#475569" />
    <text x="-35" y="-120" fill="#475569" font-size="12" font-weight="bold" font-family="sans-serif">u, i</text>

    <!-- U(t) wave: Peak 80, Period 240px -->
    <path d="M 0,0 C 30,-75 90,-75 120,0 C 150,75 210,75 240,0 C 270,-75 330,-75 360,0 C 380,50 400,60 420,0" fill="none" stroke="url(#gSinU)" stroke-width="3" />
    
    <!-- I(t) wave: Peak 50, shifted right 20px (delay) -->
    <path d="M 0,25 C 20,40 50,-45 80,-45 C 110,-45 140,45 170,45 C 200,45 230,-45 260,-45 C 290,-45 320,45 350,45 C 380,45 400,-25 420,-30" fill="none" stroke="url(#gSinI)" stroke-width="2.5" stroke-dasharray="4,2" />

    <!-- Labels for U0 and U_eff -->
    <line x1="-5" y1="-75" x2="60" y2="-75" stroke="#3b82f6" stroke-width="1" stroke-dasharray="2,2" />
    <text x="-40" y="-72" fill="#1d4ed8" font-size="11" font-weight="bold" font-family="sans-serif">+U₀</text>

    <line x1="-5" y1="-53" x2="60" y2="-53" stroke="#0284c7" stroke-width="1" stroke-dasharray="2,2" />
    <text x="-48" y="-50" fill="#0284c7" font-size="10" font-weight="bold" font-family="sans-serif">U = U₀/√2</text>

    <line x1="-5" y1="75" x2="180" y2="75" stroke="#3b82f6" stroke-width="1" stroke-dasharray="2,2" />
    <text x="-38" y="78" fill="#1d4ed8" font-size="11" font-weight="bold" font-family="sans-serif">−U₀</text>

    <!-- Period T indicator -->
    <line x1="0" y1="95" x2="240" y2="95" stroke="#059669" stroke-width="1.5" />
    <line x1="0" y1="88" x2="0" y2="102" stroke="#059669" stroke-width="1.5" />
    <line x1="240" y1="88" x2="240" y2="102" stroke="#059669" stroke-width="1.5" />
    <text x="100" y="112" fill="#059669" font-size="11" font-weight="bold" font-family="sans-serif">Chu kì T = 0,02 s (50 Hz)</text>
  </g>

  <!-- Legend Card bottom left -->
  <g transform="translate(30, 310)">
    <rect width="740" height="38" rx="6" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <line x1="20" y1="19" x2="55" y2="19" stroke="#2563eb" stroke-width="3" />
    <text x="65" y="23" fill="#1e293b" class="dark:fill-slate-200" font-size="11" font-weight="bold" font-family="sans-serif">Điện áp tức thời u(t) = U₀ cos(ωt + φᵤ)</text>
    
    <line x1="290" y1="19" x2="325" y2="19" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="4,2" />
    <text x="335" y="23" fill="#1e293b" class="dark:fill-slate-200" font-size="11" font-weight="bold" font-family="sans-serif">Cường độ dòng điện i(t) = I₀ cos(ωt + φᵢ)</text>

    <text x="560" y="23" fill="#059669" font-size="11" font-weight="bold" font-family="sans-serif">Độ lệch pha φ = φᵤ − φᵢ</text>
  </g>
</svg>`,

  2: `<svg class="w-full h-auto rounded-xl shadow-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
  <!-- Title Badge -->
  <rect x="25" y="15" width="410" height="30" rx="6" fill="#1e3a8a" />
  <text x="35" y="35" fill="#ffffff" font-size="13" font-weight="bold" font-family="sans-serif">MẠCH RLC NỐI TIẾP VÀ GIẢN ĐỒ VECTOR CỘNG HƯỞNG</text>

  <!-- Left: Schematic Circuit RLC -->
  <g transform="translate(40, 70)">
    <rect width="320" height="180" rx="12" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="20" y="30" fill="#1e40af" class="dark:fill-sky-400" font-size="12" font-weight="bold" font-family="sans-serif">Sơ đồ mạch điện RLC nối tiếp</text>

    <!-- Source Symbol AC -->
    <circle cx="50" cy="100" r="16" fill="none" stroke="#2563eb" stroke-width="2" />
    <path d="M 42,100 C 45,94 48,94 50,100 C 52,106 55,106 58,100" fill="none" stroke="#2563eb" stroke-width="2" />
    <text x="30" y="132" fill="#1e40af" class="dark:fill-sky-300" font-size="11" font-weight="bold" font-family="sans-serif">u(t)</text>

    <!-- Circuit Wire -->
    <path d="M 50,84 L 50,60 L 100,60" fill="none" stroke="#475569" stroke-width="2" />
    
    <!-- Resistor R -->
    <rect x="100" y="52" width="40" height="16" fill="#e2e8f0" stroke="#0284c7" stroke-width="2" />
    <text x="114" y="44" fill="#0284c7" font-size="11" font-weight="bold" font-family="sans-serif">R</text>
    <path d="M 140,60 L 170,60" fill="none" stroke="#475569" stroke-width="2" />

    <!-- Inductor L -->
    <path d="M 170,60 C 175,48 185,48 185,60 C 190,48 200,48 200,60 C 205,48 215,48 215,60" fill="none" stroke="#7c3aed" stroke-width="2.5" />
    <text x="190" y="44" fill="#7c3aed" font-size="11" font-weight="bold" font-family="sans-serif">L</text>
    <path d="M 215,60 L 245,60" fill="none" stroke="#475569" stroke-width="2" />

    <!-- Capacitor C -->
    <line x1="245" y1="48" x2="245" y2="72" stroke="#059669" stroke-width="3" />
    <line x1="253" y1="48" x2="253" y2="72" stroke="#059669" stroke-width="3" />
    <text x="245" y="44" fill="#059669" font-size="11" font-weight="bold" font-family="sans-serif">C</text>

    <!-- Loop back wire -->
    <path d="M 253,60 L 290,60 L 290,140 L 50,140 L 50,116" fill="none" stroke="#475569" stroke-width="2" />

    <!-- Current Arrow i -->
    <polygon points="170,140 180,136 180,144" fill="#ef4444" />
    <text x="185" y="137" fill="#ef4444" font-size="12" font-weight="bold" font-family="sans-serif">i(t)</text>

    <!-- Note -->
    <text x="20" y="168" fill="#64748b" font-size="10" font-family="sans-serif">I = U / Z; Z = √[R² + (Z_L − Z_C)²]</text>
  </g>

  <!-- Right: Fresnel Vector Phasor Diagram & Impedance Triangle -->
  <g transform="translate(400, 70)">
    <rect width="360" height="260" rx="12" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="20" y="30" fill="#1e40af" class="dark:fill-sky-400" font-size="12" font-weight="bold" font-family="sans-serif">Giản đồ Vector Fresnel & Tam giác trở kháng</text>

    <!-- Origin point -->
    <g transform="translate(80, 160)">
      <!-- Axis I reference -->
      <line x1="-20" y1="0" x2="200" y2="0" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3" />

      <!-- Vector U_R (along I) -->
      <line x1="0" y1="0" x2="110" y2="0" stroke="#0284c7" stroke-width="3" />
      <polygon points="110,0 102,-3 102,3" fill="#0284c7" />
      <text x="60" y="18" fill="#0284c7" font-size="11" font-weight="bold" font-family="sans-serif">U_R = I·R</text>

      <!-- Vector U_L (upwards +pi/2) -->
      <line x1="0" y1="0" x2="0" y2="-90" stroke="#7c3aed" stroke-width="3" />
      <polygon points="0,-90 -3,-82 3,-82" fill="#7c3aed" />
      <text x="-35" y="-70" fill="#7c3aed" font-size="11" font-weight="bold" font-family="sans-serif">U_L</text>

      <!-- Vector U_C (downwards -pi/2) -->
      <line x1="0" y1="0" x2="0" y2="50" stroke="#059669" stroke-width="3" />
      <polygon points="0,50 -3,42 3,42" fill="#059669" />
      <text x="-35" y="45" fill="#059669" font-size="11" font-weight="bold" font-family="sans-serif">U_C</text>

      <!-- Net (U_L - U_C) -->
      <line x1="110" y1="0" x2="110" y2="-40" stroke="#a855f7" stroke-width="2" stroke-dasharray="2,2" />
      <text x="115" y="-20" fill="#a855f7" font-size="10" font-weight="bold" font-family="sans-serif">(U_L − U_C)</text>

      <!-- Vector Total U -->
      <line x1="0" y1="0" x2="110" y2="-40" stroke="#ef4444" stroke-width="3.5" />
      <polygon points="110,-40 98,-34 102,-43" fill="#ef4444" />
      <text x="50" y="-30" fill="#ef4444" font-size="12" font-weight="bold" font-family="sans-serif">U = I·Z</text>

      <!-- Phase Angle Phi -->
      <path d="M 35,0 A 35 35 0 0 1 33,-12" fill="none" stroke="#ea580c" stroke-width="2" />
      <text x="40" y="-8" fill="#ea580c" font-size="11" font-weight="bold" font-family="sans-serif">φ</text>
    </g>

    <!-- Resonance Banner -->
    <rect x="20" y="215" width="320" height="32" rx="6" fill="#fef3c7" stroke="#f59e0b" class="dark:fill-amber-950/40 dark:stroke-amber-700" />
    <text x="28" y="235" fill="#b45309" class="dark:fill-amber-300" font-size="11" font-weight="bold" font-family="sans-serif">Khi cộng hưởng: Z_L = Z_C ⇒ φ = 0; Z_min = R; I_max = U/R</text>
  </g>

  <!-- Summary Box Bottom Left -->
  <g transform="translate(40, 260)">
    <rect width="320" height="70" rx="8" fill="#e0f2fe" stroke="#38bdf8" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="15" y="22" fill="#0369a1" class="dark:fill-sky-300" font-size="11" font-weight="bold" font-family="sans-serif">Công thức Trở kháng & Góc lệch pha:</text>
    <text x="15" y="42" fill="#0f172a" class="dark:fill-slate-200" font-size="10" font-family="sans-serif">Z_L = ωL = 2πfL • Z_C = 1/(ωC) = 1/(2πfC)</text>
    <text x="15" y="58" fill="#0f172a" class="dark:fill-slate-200" font-size="10" font-family="sans-serif">tan φ = (Z_L − Z_C)/R • cos φ = R/Z = U_R/U</text>
  </g>
</svg>`,

  3: `<svg class="w-full h-auto rounded-xl shadow-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
  <!-- Title Badge -->
  <rect x="25" y="15" width="450" height="30" rx="6" fill="#1e3a8a" />
  <text x="35" y="35" fill="#ffffff" font-size="13" font-weight="bold" font-family="sans-serif">MÁY BIẾN ÁP LÍ TƯỞNG VÀ SƠ ĐỒ TRUYỀN TẢI ĐIỆN NĂNG</text>

  <!-- Left: Ideal Transformer Core Diagram -->
  <g transform="translate(30, 65)">
    <rect width="360" height="270" rx="12" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="20" y="25" fill="#1e40af" class="dark:fill-sky-400" font-size="12" font-weight="bold" font-family="sans-serif">Cấu tạo Máy biến áp (Lõi thép từ khép kín)</text>

    <!-- Outer core -->
    <rect x="60" y="50" width="230" height="160" rx="6" fill="#cbd5e1" stroke="#475569" stroke-width="3" />
    <!-- Inner core cutout -->
    <rect x="110" y="85" width="130" height="90" rx="4" fill="#f8fafc" stroke="#475569" stroke-width="2" class="dark:fill-slate-800" />

    <!-- Magnetic flux arrow inside core -->
    <path d="M 85,70 L 265,70 L 265,190 L 85,190 Z" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4,3" />
    <polygon points="175,70 183,67 183,73" fill="#2563eb" />
    <text x="155" y="62" fill="#2563eb" font-size="10" font-weight="bold" font-family="sans-serif">Từ thông Φ</text>

    <!-- Primary Coils N1 (Left, Orange) -->
    <g stroke="#ea580c" stroke-width="4" fill="none">
      <path d="M 35,90 L 60,90" />
      <path d="M 60,95 C 50,105 50,115 60,120" />
      <path d="M 60,125 C 50,135 50,145 60,150" />
      <path d="M 60,155 C 50,165 50,175 60,180" />
      <path d="M 60,185 L 35,185" />
    </g>
    <text x="15" y="85" fill="#ea580c" font-size="11" font-weight="bold" font-family="sans-serif">Cuộn sơ cấp</text>
    <text x="15" y="140" fill="#ea580c" font-size="11" font-weight="bold" font-family="sans-serif">U₁, N₁, I₁</text>

    <!-- Secondary Coils N2 (Right, Green) -->
    <g stroke="#059669" stroke-width="4" fill="none">
      <path d="M 290,80 L 325,80" />
      <path d="M 290,85 C 300,92 300,98 290,102" />
      <path d="M 290,105 C 300,112 300,118 290,122" />
      <path d="M 290,125 C 300,132 300,138 290,142" />
      <path d="M 290,145 C 300,152 300,158 290,162" />
      <path d="M 290,165 C 300,172 300,178 290,182" />
      <path d="M 290,185 L 325,185" />
    </g>
    <text x="270" y="70" fill="#059669" font-size="11" font-weight="bold" font-family="sans-serif">Cuộn thứ cấp</text>
    <text x="310" y="140" fill="#059669" font-size="11" font-weight="bold" font-family="sans-serif">U₂, N₂, I₂</text>

    <!-- Formula at bottom -->
    <rect x="50" y="225" width="250" height="32" rx="6" fill="#e0f2fe" stroke="#38bdf8" class="dark:fill-slate-700 dark:stroke-slate-600" />
    <text x="65" y="245" fill="#0284c7" class="dark:fill-sky-300" font-size="11" font-weight="bold" font-family="sans-serif">U₂ / U₁ = N₂ / N₁ = I₁ / I₂ = k</text>
  </g>

  <!-- Right: Transmission Grid System & Loss Equation -->
  <g transform="translate(410, 65)">
    <rect width="360" height="270" rx="12" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="20" y="25" fill="#1e40af" class="dark:fill-sky-400" font-size="12" font-weight="bold" font-family="sans-serif">Hệ thống Lưới điện & Giảm hao phí truyền tải</text>

    <!-- Block 1: Power Plant -->
    <rect x="15" y="55" width="65" height="50" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5" />
    <text x="20" y="75" fill="#b45309" font-size="10" font-weight="bold" font-family="sans-serif">Nhà máy</text>
    <text x="20" y="90" fill="#b45309" font-size="9" font-family="sans-serif">15–20 kV</text>

    <!-- Arrow to Step-Up -->
    <line x1="80" y1="80" x2="98" y2="80" stroke="#64748b" stroke-width="2" marker-end="url(#arr)" />

    <!-- Block 2: Step Up Transformer -->
    <rect x="100" y="55" width="65" height="50" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5" />
    <text x="105" y="75" fill="#b91c1c" font-size="10" font-weight="bold" font-family="sans-serif">Tăng áp</text>
    <text x="105" y="90" fill="#b91c1c" font-size="9" font-family="sans-serif">500 kV</text>

    <!-- Power Line (High Voltage) -->
    <line x1="165" y1="80" x2="260" y2="80" stroke="#ef4444" stroke-width="3" />
    <!-- Transmission Pylon Icon -->
    <path d="M 210,60 L 220,100 M 210,100 L 220,60 M 205,75 L 225,75" stroke="#475569" stroke-width="1.5" />
    <text x="175" y="52" fill="#ef4444" font-size="10" font-weight="bold" font-family="sans-serif">Đường dây 500 kV</text>

    <!-- Block 3: Step Down Transformer -->
    <rect x="260" y="55" width="65" height="50" rx="6" fill="#dcfce7" stroke="#10b981" stroke-width="1.5" />
    <text x="268" y="75" fill="#047857" font-size="10" font-weight="bold" font-family="sans-serif">Hạ áp</text>
    <text x="265" y="90" fill="#047857" font-size="9" font-family="sans-serif">220V dân</text>

    <!-- Formula Box: Joule Heating Loss -->
    <rect x="15" y="125" width="330" height="125" rx="8" fill="#ffffff" stroke="#cbd5e1" class="dark:fill-slate-900 dark:stroke-slate-700" />
    <text x="25" y="148" fill="#b91c1c" font-size="12" font-weight="bold" font-family="sans-serif">Công thức Hao phí nhiệt trên dây truyền tải:</text>
    
    <text x="35" y="175" fill="#1e293b" class="dark:fill-slate-100" font-size="13" font-weight="bold" font-family="sans-serif">ΔP = I² · R = (P² · R) / (U² · cos²φ)</text>
    
    <text x="25" y="200" fill="#0f172a" class="dark:fill-slate-300" font-size="10.5" font-family="sans-serif">• Khi truyền công suất P không đổi, nếu tăng điện áp U lên n lần</text>
    <text x="25" y="218" fill="#059669" font-size="11" font-weight="bold" font-family="sans-serif">⇒ Công suất hao phí ΔP giảm đi n² lần!</text>
    <text x="25" y="236" fill="#64748b" font-size="10" font-family="sans-serif">Ví dụ: Tăng U từ 5kV lên 500kV (100 lần) ⇒ Hao phí giảm 10.000 lần.</text>
  </g>
</svg>`,

  4: `<svg class="w-full h-auto rounded-xl shadow-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
  <!-- Title Badge -->
  <rect x="25" y="15" width="440" height="30" rx="6" fill="#1e3a8a" />
  <text x="35" y="35" fill="#ffffff" font-size="13" font-weight="bold" font-family="sans-serif">CHỈNH LƯU CẦU 4 DIODE VÀ MẠCH NGUỒN ADAPTER</text>

  <!-- Left: Bridge Rectifier Circuit Schema -->
  <g transform="translate(30, 65)">
    <rect width="360" height="270" rx="12" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="20" y="25" fill="#1e40af" class="dark:fill-sky-400" font-size="12" font-weight="bold" font-family="sans-serif">Mạch cầu 4 Diode & Tụ lọc C</text>

    <!-- AC Input on Left -->
    <circle cx="45" cy="120" r="14" fill="none" stroke="#2563eb" stroke-width="2" />
    <path d="M 38,120 C 41,114 43,114 45,120 C 47,126 49,126 52,120" fill="none" stroke="#2563eb" stroke-width="2" />
    <text x="20" y="150" fill="#2563eb" font-size="10" font-weight="bold" font-family="sans-serif">220V AC</text>

    <!-- Connecting wires to bridge -->
    <line x1="59" y1="120" x2="110" y2="120" stroke="#475569" stroke-width="2" />
    <line x1="110" y1="120" x2="110" y2="70" stroke="#475569" stroke-width="2" />
    <line x1="110" y1="70" x2="135" y2="70" stroke="#475569" stroke-width="2" />

    <!-- Diode Diamond Bridge -->
    <!-- D1 (Top Left) -->
    <g transform="translate(145, 90)">
      <polygon points="0,0 16,-10 16,10" fill="#0284c7" />
      <line x1="0" y1="-10" x2="0" y2="10" stroke="#0284c7" stroke-width="2" />
      <text x="-8" y="-14" fill="#0284c7" font-size="9" font-weight="bold">D1</text>
    </g>
    <!-- D2 (Bottom Left) -->
    <g transform="translate(145, 150)">
      <polygon points="16,0 0,-10 0,10" fill="#0284c7" />
      <line x1="16" y1="-10" x2="16" y2="10" stroke="#0284c7" stroke-width="2" />
      <text x="-8" y="22" fill="#0284c7" font-size="9" font-weight="bold">D2</text>
    </g>
    <!-- D3 (Top Right) -->
    <g transform="translate(195, 90)">
      <polygon points="16,0 0,-10 0,10" fill="#0284c7" />
      <line x1="16" y1="-10" x2="16" y2="10" stroke="#0284c7" stroke-width="2" />
      <text x="18" y="-14" fill="#0284c7" font-size="9" font-weight="bold">D3</text>
    </g>
    <!-- D4 (Bottom Right) -->
    <g transform="translate(195, 150)">
      <polygon points="0,0 16,-10 16,10" fill="#0284c7" />
      <line x1="0" y1="-10" x2="0" y2="10" stroke="#0284c7" stroke-width="2" />
      <text x="18" y="22" fill="#0284c7" font-size="9" font-weight="bold">D4</text>
    </g>

    <!-- Bridge connections -->
    <line x1="150" y1="65" x2="200" y2="65" stroke="#ef4444" stroke-width="2" />
    <line x1="200" y1="65" x2="250" y2="65" stroke="#ef4444" stroke-width="2" />
    <text x="210" y="58" fill="#ef4444" font-size="10" font-weight="bold">+ V_out</text>

    <line x1="150" y1="175" x2="250" y2="175" stroke="#1e293b" stroke-width="2" class="dark:stroke-slate-400" />
    <text x="210" y="192" fill="#1e293b" class="dark:fill-slate-300" font-size="10" font-weight="bold">− GND</text>

    <!-- Filter Capacitor C (Parallel) -->
    <g transform="translate(260, 100)">
      <line x1="0" y1="-35" x2="0" y2="0" stroke="#059669" stroke-width="2" />
      <line x1="-12" y1="0" x2="12" y2="0" stroke="#059669" stroke-width="2.5" />
      <line x1="-12" y1="8" x2="12" y2="8" stroke="#059669" stroke-width="2.5" />
      <line x1="0" y1="8" x2="0" y2="75" stroke="#059669" stroke-width="2" />
      <text x="16" y="8" fill="#059669" font-size="10" font-weight="bold">Tụ lọc C</text>
    </g>

    <!-- Load Resistor R_L -->
    <g transform="translate(320, 100)">
      <line x1="0" y1="-35" x2="0" y2="-5" stroke="#475569" stroke-width="2" />
      <rect x="-8" y="-5" width="16" height="40" fill="#e2e8f0" stroke="#475569" stroke-width="1.5" />
      <line x1="0" y1="35" x2="0" y2="75" stroke="#475569" stroke-width="2" />
      <text x="12" y="18" fill="#475569" font-size="10" font-weight="bold">Tải R</text>
    </g>

    <text x="20" y="245" fill="#64748b" font-size="10.5" font-family="sans-serif">Tụ lọc tích năng lượng lúc đỉnh áp và xả lúc tụt áp để làm phẳng.</text>
  </g>

  <!-- Right: Waveform Before vs After Filter -->
  <g transform="translate(410, 65)">
    <rect width="360" height="270" rx="12" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="20" y="25" fill="#1e40af" class="dark:fill-sky-400" font-size="12" font-weight="bold" font-family="sans-serif">Dạng sóng Chỉnh lưu Toàn kì & Điện áp Lọc</text>

    <!-- Graph 1: Full-wave rectified without filter -->
    <g transform="translate(30, 80)">
      <line x1="0" y1="0" x2="300" y2="0" stroke="#94a3b8" stroke-width="1.5" />
      <text x="280" y="15" fill="#64748b" font-size="10">t (s)</text>
      <!-- Pulsating DC half-sines -->
      <path d="M 0,0 C 15,-45 45,-45 60,0 C 75,-45 105,-45 120,0 C 135,-45 165,-45 180,0 C 195,-45 225,-45 240,0 C 255,-45 285,-45 300,0" fill="none" stroke="#ea580c" stroke-width="2" stroke-dasharray="2,2" />
      <text x="10" y="-30" fill="#ea580c" font-size="10" font-weight="bold">Điện áp đập mạch sau cầu (100 Hz)</text>
    </g>

    <!-- Graph 2: Filtered DC voltage line -->
    <g transform="translate(30, 180)">
      <line x1="0" y1="0" x2="300" y2="0" stroke="#94a3b8" stroke-width="1.5" />
      <text x="280" y="15" fill="#64748b" font-size="10">t (s)</text>
      <!-- Background ripple -->
      <path d="M 0,0 C 15,-45 45,-45 60,0 C 75,-45 105,-45 120,0 C 135,-45 165,-45 180,0" fill="none" stroke="#cbd5e1" stroke-width="1" />
      <!-- Filtered smooth DC line -->
      <path d="M 0,-40 L 40,-38 L 60,-45 L 100,-38 L 120,-45 L 160,-38 L 180,-45 L 220,-38 L 240,-45 L 300,-40" fill="none" stroke="#059669" stroke-width="3" />
      <text x="10" y="-50" fill="#059669" font-size="11" font-weight="bold">Điện áp phẳng mịn sau tụ lọc (DC xấp xỉ không đổi)</text>
    </g>

    <rect x="20" y="215" width="320" height="38" rx="6" fill="#e0f2fe" stroke="#38bdf8" class="dark:fill-slate-700 dark:stroke-slate-600" />
    <text x="28" y="238" fill="#0369a1" class="dark:fill-sky-300" font-size="11" font-weight="bold" font-family="sans-serif">Bộ sạc: 220V AC → Biến áp → Cầu Diode → Tụ C → IC ổn áp 5V</text>
  </g>
</svg>`,

  5: `<svg class="w-full h-auto rounded-xl shadow-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
  <!-- Title Badge -->
  <rect x="25" y="15" width="460" height="30" rx="6" fill="#0f766e" />
  <text x="35" y="35" fill="#ffffff" font-size="13" font-weight="bold" font-family="sans-serif">CẤU TẠO ỐNG PHÁT TIA X COOLIDGE VÀ PHỔ BỨC XẠ HÃM</text>

  <!-- Left: Coolidge X-Ray Tube Diagram -->
  <g transform="translate(30, 65)">
    <rect width="400" height="270" rx="12" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="20" y="25" fill="#0f766e" class="dark:fill-teal-400" font-size="12" font-weight="bold" font-family="sans-serif">Sơ đồ Ống Coolidge chân không</text>

    <!-- Glass Vacuum Envelope -->
    <rect x="50" y="55" width="300" height="150" rx="30" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2" class="dark:fill-slate-900 dark:stroke-slate-600" />
    <text x="220" y="75" fill="#64748b" font-size="9" font-family="sans-serif">Chân không cao (10⁻⁶ mmHg)</text>

    <!-- Cathode K (Heated Filament) -->
    <path d="M 30,110 L 80,110 M 30,150 L 80,150" stroke="#ea580c" stroke-width="2" />
    <path d="M 80,110 C 95,115 95,145 80,150" stroke="#ea580c" stroke-width="3" fill="none" />
    <text x="25" y="100" fill="#ea580c" font-size="11" font-weight="bold">Dây tóc Catôt (K)</text>
    <text x="25" y="175" fill="#ea580c" font-size="9">Nung phát e⁻</text>

    <!-- Electron Beam -->
    <g stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="3,2">
      <line x1="95" y1="120" x2="250" y2="120" />
      <line x1="95" y1="130" x2="250" y2="130" />
      <line x1="95" y1="140" x2="250" y2="140" />
    </g>
    <polygon points="245,120 238,117 238,123" fill="#3b82f6" />
    <polygon points="245,130 238,127 238,133" fill="#3b82f6" />
    <polygon points="245,140 238,137 238,143" fill="#3b82f6" />
    <text x="125" y="115" fill="#2563eb" font-size="10" font-weight="bold">Chùm e⁻ năng lượng cao</text>

    <!-- Anode Target (Beveled Tungsten Target) -->
    <path d="M 260,95 L 290,95 L 290,165 L 260,165 L 245,130 Z" fill="#94a3b8" stroke="#475569" stroke-width="2" />
    <text x="280" y="125" fill="#1e293b" class="dark:fill-slate-100" font-size="11" font-weight="bold">Anôt (A)</text>
    <text x="270" y="140" fill="#475569" font-size="9">Bia Wolfram</text>

    <!-- High Voltage Source -->
    <rect x="110" y="185" width="130" height="24" rx="4" fill="#fee2e2" stroke="#ef4444" />
    <text x="120" y="201" fill="#b91c1c" font-size="10" font-weight="bold">Cao thế U_AK (20–150 kV)</text>

    <!-- Emitted X-Ray Beam (Downwards through window) -->
    <g stroke="#0d9488" stroke-width="2" fill="none">
      <path d="M 252,135 L 220,225" />
      <path d="M 255,135 L 255,225" />
      <path d="M 258,135 L 290,225" />
    </g>
    <text x="220" y="250" fill="#0f766e" class="dark:fill-teal-300" font-size="12" font-weight="bold">Chùm Tia X phát ra</text>
  </g>

  <!-- Right: X-Ray Spectrum Curve & Energy Law -->
  <g transform="translate(450, 65)">
    <rect width="320" height="270" rx="12" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="20" y="25" fill="#0f766e" class="dark:fill-teal-400" font-size="12" font-weight="bold" font-family="sans-serif">Phổ Bức xạ Hãm & Vạch Đặc trưng</text>

    <!-- Spectrum Axes -->
    <line x1="40" y1="160" x2="280" y2="160" stroke="#64748b" stroke-width="1.5" />
    <text x="270" y="175" fill="#64748b" font-size="10">Bước sóng λ</text>

    <line x1="40" y1="160" x2="40" y2="45" stroke="#64748b" stroke-width="1.5" />
    <text x="15" y="45" fill="#64748b" font-size="10">Cường độ I</text>

    <!-- Continuous Bremsstrahlung curve -->
    <path d="M 80,160 C 95,70 140,80 180,110 C 220,135 250,150 270,155" fill="none" stroke="#0d9488" stroke-width="2.5" />

    <!-- Characteristic peaks K-alpha, K-beta -->
    <line x1="120" y1="160" x2="120" y2="60" stroke="#ef4444" stroke-width="2.5" />
    <text x="112" y="55" fill="#ef4444" font-size="9" font-weight="bold">K_β</text>

    <line x1="135" y1="160" x2="135" y2="48" stroke="#ef4444" stroke-width="2.5" />
    <text x="130" y="42" fill="#ef4444" font-size="9" font-weight="bold">K_α</text>

    <!-- Lambda min limit -->
    <line x1="80" y1="155" x2="80" y2="165" stroke="#2563eb" stroke-width="2" />
    <text x="70" y="180" fill="#2563eb" font-size="10" font-weight="bold">λ_min</text>

    <!-- Equation Box -->
    <rect x="20" y="195" width="280" height="58" rx="6" fill="#e6fffa" stroke="#2dd4bf" class="dark:fill-slate-900 dark:stroke-teal-800" />
    <text x="30" y="215" fill="#0f766e" class="dark:fill-teal-300" font-size="11" font-weight="bold">Định luật Bảo toàn Năng lượng:</text>
    <text x="30" y="235" fill="#047857" class="dark:fill-emerald-400" font-size="11.5" font-weight="bold">e · U_AK = h · c / λ_min ⇒ λ_min = (h·c)/(e·U_AK)</text>
  </g>
</svg>`,

  6: `<svg class="w-full h-auto rounded-xl shadow-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
  <!-- Title Badge -->
  <rect x="25" y="15" width="460" height="30" rx="6" fill="#0f766e" />
  <text x="35" y="35" fill="#ffffff" font-size="13" font-weight="bold" font-family="sans-serif">NGUYÊN LÍ CHỤP X-QUANG PHẲNG VÀ CẮT LỚP VI TÍNH (CT SCANNER)</text>

  <!-- Left: 2D Plane X-Ray Shadow Projection -->
  <g transform="translate(30, 65)">
    <rect width="350" height="270" rx="12" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="20" y="25" fill="#0f766e" class="dark:fill-teal-400" font-size="12" font-weight="bold" font-family="sans-serif">Chụp X-quang phẳng 2D (Tạo bóng cản quang)</text>

    <!-- X-Ray Source Point -->
    <circle cx="175" cy="55" r="8" fill="#ea580c" />
    <text x="135" y="45" fill="#ea580c" font-size="10" font-weight="bold">Bóng phát tia X</text>

    <!-- Cone Beam -->
    <polygon points="175,55 70,185 280,185" fill="#fdba74" fill-opacity="0.25" stroke="#ea580c" stroke-width="1" stroke-dasharray="3,3" />

    <!-- Patient Body / Bone Model -->
    <ellipse cx="175" cy="120" rx="60" ry="25" fill="#fed7aa" stroke="#fb923c" stroke-width="1.5" />
    <text x="240" y="125" fill="#c2410c" font-size="9">Mô mềm (cản ít)</text>

    <!-- Dense Bone inside -->
    <rect x="160" y="112" width="30" height="16" rx="4" fill="#ffffff" stroke="#475569" stroke-width="2" />
    <text x="163" y="105" fill="#1e293b" class="dark:fill-white" font-size="9" font-weight="bold">Xương</text>

    <!-- Detector Screen / Film at Bottom -->
    <rect x="60" y="190" width="230" height="14" rx="2" fill="#0f172a" />
    <!-- White shadow under bone -->
    <rect x="155" y="190" width="40" height="14" fill="#ffffff" stroke="#94a3b8" />
    <text x="75" y="222" fill="#475569" font-size="10">Vùng đen (mô mềm)</text>
    <text x="145" y="222" fill="#0f766e" font-size="10" font-weight="bold">Trắng (xương cản)</text>

    <text x="20" y="250" fill="#b91c1c" font-size="10.5" font-weight="bold">Nhược điểm: Bị chồng hình giải phẫu trước – sau.</text>
  </g>

  <!-- Right: 3D CT Gantry 360-degree rotation -->
  <g transform="translate(410, 65)">
    <rect width="360" height="270" rx="12" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="20" y="25" fill="#0f766e" class="dark:fill-teal-400" font-size="12" font-weight="bold" font-family="sans-serif">CT Scanner (Vành Gantry quay tròn 360°)</text>

    <!-- Gantry Outer Ring -->
    <circle cx="180" cy="125" r="85" fill="none" stroke="#0f766e" stroke-width="6" stroke-dasharray="10,4" />
    <text x="125" y="38" fill="#0f766e" font-size="10" font-weight="bold">Vành Gantry quay quanh</text>

    <!-- Rotating Tube at 12 o'clock -->
    <rect x="165" y="42" width="30" height="18" rx="4" fill="#ea580c" />
    <text x="150" y="38" fill="#ea580c" font-size="9" font-weight="bold">Bóng X quay</text>

    <!-- Fan beam -->
    <polygon points="180,55 125,185 235,185" fill="#2dd4bf" fill-opacity="0.3" stroke="#0f766e" stroke-width="1" />

    <!-- Detectors at 6 o'clock -->
    <path d="M 120,195 A 80 80 0 0 0 240,195" fill="none" stroke="#2563eb" stroke-width="6" />
    <text x="145" y="215" fill="#2563eb" font-size="9" font-weight="bold">Dãy Detectors</text>

    <!-- Patient Cross section at Center -->
    <circle cx="180" cy="125" r="28" fill="#fef3c7" stroke="#f59e0b" stroke-width="2" />
    <circle cx="180" cy="125" r="8" fill="#ffffff" stroke="#475569" stroke-width="1.5" />
    <text x="165" y="128" fill="#1e293b" font-size="8" font-weight="bold">Tủy sống</text>

    <!-- Rotation Arrows -->
    <path d="M 270,125 A 90 90 0 0 1 245,185" fill="none" stroke="#059669" stroke-width="2" />
    <polygon points="245,185 248,175 255,180" fill="#059669" />
    <text x="272" y="150" fill="#059669" font-size="9" font-weight="bold">360°</text>

    <!-- Equation Box: Attenuation Law -->
    <rect x="20" y="225" width="320" height="32" rx="6" fill="#e0f2fe" stroke="#38bdf8" class="dark:fill-slate-700 dark:stroke-slate-600" />
    <text x="30" y="246" fill="#0369a1" class="dark:fill-sky-300" font-size="11" font-weight="bold">Định luật suy giảm: I = I₀ · e^(−μ·d) • Xóa bỏ hoàn toàn chồng hình</text>
  </g>
</svg>`,

  7: `<svg class="w-full h-auto rounded-xl shadow-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
  <!-- Title Badge -->
  <rect x="25" y="15" width="460" height="30" rx="6" fill="#0f766e" />
  <text x="35" y="35" fill="#ffffff" font-size="13" font-weight="bold" font-family="sans-serif">NGUYÊN LÍ ĐẦU DÒ ÁP ĐIỆN SIÊU ÂM VÀ TẠO ẢNH PHẢN XẠ</text>

  <!-- Left: Piezoelectric Transducer & Sound Propagation -->
  <g transform="translate(30, 65)">
    <rect width="360" height="270" rx="12" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="20" y="25" fill="#0f766e" class="dark:fill-teal-400" font-size="12" font-weight="bold" font-family="sans-serif">Cấu tạo Đầu dò áp điện & Lớp Gel</text>

    <!-- Transducer Handle -->
    <rect x="130" y="45" width="90" height="40" rx="4" fill="#94a3b8" />
    <text x="145" y="68" fill="#ffffff" font-size="10" font-weight="bold">Vỏ đầu dò</text>

    <!-- PZT Piezoelectric Crystal (Active layer) -->
    <rect x="130" y="85" width="90" height="15" fill="#7c3aed" stroke="#6d28d9" stroke-width="1.5" />
    <text x="138" y="96" fill="#ffffff" font-size="9" font-weight="bold">Gốm PZT áp điện</text>

    <!-- Acoustic Gel Layer -->
    <rect x="125" y="100" width="100" height="8" fill="#38bdf8" />
    <text x="235" y="108" fill="#0284c7" font-size="9" font-weight="bold">Lớp Gel (Khử khí)</text>

    <!-- Skin Layer -->
    <rect x="50" y="108" width="250" height="6" fill="#fbcfe8" />
    <text x="20" y="114" fill="#db2777" font-size="9">Da người</text>

    <!-- Soft Tissue (Z1) -->
    <rect x="50" y="114" width="250" height="65" fill="#fef3c7" fill-opacity="0.5" />
    <text x="60" y="135" fill="#b45309" font-size="10">Mô mềm (Z₁ = ρ₁·v₁)</text>

    <!-- Ultrasonic waves traveling down -->
    <g stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3,2">
      <path d="M 140,115 C 160,122 190,122 210,115" />
      <path d="M 135,135 C 160,145 190,145 215,135" />
      <path d="M 130,155 C 160,168 190,168 220,155" />
    </g>

    <!-- Interface boundary with organ (Z2) -->
    <line x1="50" y1="180" x2="300" y2="180" stroke="#b91c1c" stroke-width="2" />
    <rect x="50" y="180" width="250" height="50" fill="#fed7aa" fill-opacity="0.6" />
    <text x="60" y="205" fill="#c2410c" font-size="10" font-weight="bold">Cơ quan / Khối u (Z₂ = ρ₂·v₂)</text>

    <!-- Reflected Echo Wave going back up -->
    <g stroke="#ef4444" stroke-width="2">
      <path d="M 140,170 C 165,160 185,160 210,170" fill="none" />
      <path d="M 145,150 C 165,140 185,140 205,150" fill="none" />
    </g>
    <polygon points="175,135 170,143 180,143" fill="#ef4444" />
    <text x="185" y="142" fill="#ef4444" font-size="9" font-weight="bold">Sóng phản xạ</text>

    <text x="20" y="255" fill="#475569" font-size="10">Độ sâu mặt phản xạ: d = (v · Δt) / 2</text>
  </g>

  <!-- Right: Acoustic Reflection & Doppler Effect -->
  <g transform="translate(410, 65)">
    <rect width="360" height="270" rx="12" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="20" y="25" fill="#0f766e" class="dark:fill-teal-400" font-size="12" font-weight="bold" font-family="sans-serif">Hệ số Phản xạ Âm & Siêu âm Doppler</text>

    <!-- Formula Reflection Coefficient R -->
    <rect x="20" y="45" width="320" height="60" rx="6" fill="#e0f2fe" stroke="#38bdf8" class="dark:fill-slate-700 dark:stroke-slate-600" />
    <text x="30" y="68" fill="#0369a1" class="dark:fill-sky-300" font-size="11" font-weight="bold">Hệ số phản xạ tại mặt phân cách 2 mô:</text>
    <text x="30" y="92" fill="#0284c7" class="dark:fill-sky-200" font-size="13" font-weight="bold">R = [(Z₂ − Z₁) / (Z₂ + Z₁)]²</text>

    <!-- Doppler Blood Flow Illustration -->
    <g transform="translate(20, 120)">
      <rect width="320" height="85" rx="8" fill="#fee2e2" stroke="#fca5a5" class="dark:fill-rose-950/40 dark:stroke-rose-800" />
      <text x="15" y="20" fill="#b91c1c" class="dark:fill-rose-300" font-size="11" font-weight="bold">Siêu âm Doppler Tim & Mạch máu:</text>

      <!-- Blood vessel -->
      <line x1="20" y1="50" x2="300" y2="50" stroke="#dc2626" stroke-width="1.5" />
      <line x1="20" y1="75" x2="300" y2="75" stroke="#dc2626" stroke-width="1.5" />
      
      <!-- Red blood cells moving -->
      <ellipse cx="60" cy="62" rx="8" ry="5" fill="#ef4444" />
      <ellipse cx="100" cy="62" rx="8" ry="5" fill="#ef4444" />
      <ellipse cx="140" cy="62" rx="8" ry="5" fill="#ef4444" />
      <polygon points="160,62 150,58 150,66" fill="#ef4444" />
      <text x="170" y="65" fill="#b91c1c" font-size="10" font-weight="bold">Dòng máu v_máu</text>

      <!-- Doppler formula text -->
      <text x="210" y="32" fill="#047857" font-size="10" font-weight="bold">Δf = 2f₀·(v/c)·cosθ</text>
    </g>

    <rect x="20" y="215" width="320" height="42" rx="6" fill="#fef3c7" stroke="#f59e0b" class="dark:fill-amber-950/40 dark:stroke-amber-700" />
    <text x="28" y="235" fill="#b45309" class="dark:fill-amber-300" font-size="10.5" font-weight="bold">Ưu điểm: Không dùng tia bức xạ ion hóa, an toàn tuyệt đối cho thai phụ.</text>
    <text x="28" y="249" fill="#b45309" class="dark:fill-amber-300" font-size="10">Quan sát theo thời gian thực (Real-time) nhịp đập tim và cử động thai nhi.</text>
  </g>
</svg>`,

  8: `<svg class="w-full h-auto rounded-xl shadow-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
  <!-- Title Badge -->
  <rect x="25" y="15" width="460" height="30" rx="6" fill="#0f766e" />
  <text x="35" y="35" fill="#ffffff" font-size="13" font-weight="bold" font-family="sans-serif">CỘNG HƯỞNG TỪ HẠT NHÂN (MRI) VÀ TIẾN ĐỘNG LARMOR</text>

  <!-- Left: Proton Spin Precession & Resonance -->
  <g transform="translate(30, 65)">
    <rect width="360" height="270" rx="12" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="20" y="25" fill="#0f766e" class="dark:fill-teal-400" font-size="12" font-weight="bold" font-family="sans-serif">Tiến động Larmor của Proton Hydro (¹H)</text>

    <!-- External Magnetic Field B0 -->
    <line x1="50" y1="210" x2="50" y2="50" stroke="#2563eb" stroke-width="4" />
    <polygon points="50,50 44,62 56,62" fill="#2563eb" />
    <text x="30" y="42" fill="#1d4ed8" font-size="12" font-weight="bold">Từ trường B₀</text>
    <text x="30" y="235" fill="#1d4ed8" font-size="10">(1,5T – 3T)</text>

    <!-- Proton Precession Cone -->
    <g transform="translate(190, 140)">
      <!-- Precession Ellipse -->
      <ellipse cx="0" cy="-60" rx="45" ry="15" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,2" />
      
      <!-- Precession rotation arrow -->
      <path d="M 40,-58 A 45 15 0 0 1 0,-45" fill="none" stroke="#7c3aed" stroke-width="2" />
      <polygon points="0,-45 -4,-51 3,-50" fill="#7c3aed" />
      <text x="10" y="-40" fill="#7c3aed" font-size="10" font-weight="bold">ω₀ (Larmor)</text>

      <!-- Proton Sphere -->
      <circle cx="0" cy="0" r="18" fill="#ef4444" stroke="#b91c1c" stroke-width="2" />
      <text x="-5" y="5" fill="#ffffff" font-size="12" font-weight="bold">p⁺</text>

      <!-- Magnetic Moment Vector mu -->
      <line x1="0" y1="0" x2="38" y2="-60" stroke="#ea580c" stroke-width="3" />
      <polygon points="38,-60 28,-54 34,-48" fill="#ea580c" />
      <text x="42" y="-62" fill="#ea580c" font-size="11" font-weight="bold">μ (Spin)</text>
    </g>

    <!-- RF Pulse incoming -->
    <g transform="translate(270, 140)">
      <path d="M 0,-40 C 20,-30 20,-10 0,0 C 20,10 20,30 0,40" fill="none" stroke="#059669" stroke-width="2" />
      <polygon points="-8,0 -16,-4 -16,4" fill="#059669" />
      <text x="-5" y="-45" fill="#059669" font-size="10" font-weight="bold">Xung RF (Radio)</text>
    </g>

    <text x="20" y="255" fill="#475569" font-size="10.5">Tần số Larmor: f₀ = (γ / 2π) · B₀ ≈ 42,58 · B₀ (MHz)</text>
  </g>

  <!-- Right: MRI Scanner Architecture & Safety Zones -->
  <g transform="translate(410, 65)">
    <rect width="360" height="270" rx="12" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="20" y="25" fill="#0f766e" class="dark:fill-teal-400" font-size="12" font-weight="bold" font-family="sans-serif">Hệ thống Siêu dẫn & Quy tắc An toàn Từ</text>

    <!-- Cross section of Superconducting Bore -->
    <g transform="translate(180, 100)">
      <!-- Outer cryostat -->
      <circle cx="0" cy="0" r="65" fill="#f1f5f9" stroke="#64748b" stroke-width="3" />
      <!-- Liquid Helium jacket -->
      <circle cx="0" cy="0" r="50" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" />
      <text x="-40" y="-35" fill="#0284c7" font-size="8">Heli lỏng (-269°C)</text>

      <!-- Patient bore opening -->
      <circle cx="0" cy="0" r="28" fill="#ffffff" stroke="#334155" stroke-width="2" />
      <text x="-18" y="4" fill="#334155" font-size="9" font-weight="bold">Lòng máy</text>
    </g>

    <!-- Warning: Missile Effect -->
    <rect x="20" y="180" width="320" height="75" rx="8" fill="#fef2f2" stroke="#ef4444" class="dark:fill-rose-950/40 dark:stroke-rose-800" />
    <text x="30" y="200" fill="#b91c1c" font-size="11" font-weight="bold">CẢNH BÁO AN TOÀN TỪ TRƯỜNG TUYỆT ĐỐI:</text>
    <text x="30" y="218" fill="#991b1b" font-size="10">• Từ trường B₀ luôn bật 24/7 (ngay cả khi máy nghỉ).</text>
    <text x="30" y="234" fill="#991b1b" font-size="10">• Cấm đưa vật sắt từ (kéo, xe lăn, bình oxy) vào: gây hiệu ứng tên lửa!</text>
    <text x="30" y="248" fill="#991b1b" font-size="10">• Chống chỉ định tuyệt đối: Bệnh nhân mang máy tạo nhịp tim (Pacemaker).</text>
  </g>
</svg>`,

  9: `<svg class="w-full h-auto rounded-xl shadow-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
  <!-- Title Badge -->
  <rect x="25" y="15" width="460" height="30" rx="6" fill="#6b21a8" />
  <text x="35" y="35" fill="#ffffff" font-size="13" font-weight="bold" font-family="sans-serif">HIỆU ỨNG QUANG ĐIỆN VÀ PHƯƠNG TRÌNH NĂNG LƯỢNG EINSTEIN</text>

  <!-- Left: Hertz Zinc Plate Experiment -->
  <g transform="translate(30, 65)">
    <rect width="360" height="270" rx="12" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="20" y="25" fill="#6b21a8" class="dark:fill-purple-400" font-size="12" font-weight="bold" font-family="sans-serif">Thí nghiệm Heinrich Hertz (1887)</text>

    <!-- UV Light Beam -->
    <path d="M 30,50 L 130,90 L 130,120 L 30,80 Z" fill="#c084fc" fill-opacity="0.3" stroke="#9333ea" stroke-width="1.5" />
    <text x="25" y="45" fill="#9333ea" font-size="11" font-weight="bold">Tia tử ngoại (UV)</text>

    <!-- Zinc Plate Zn -->
    <rect x="130" y="80" width="18" height="60" rx="2" fill="#94a3b8" stroke="#475569" stroke-width="2" />
    <text x="125" y="72" fill="#334155" class="dark:fill-slate-200" font-size="11" font-weight="bold">Lá kẽm Zn</text>

    <!-- Photoelectrons flying out -->
    <g fill="#3b82f6">
      <circle cx="160" cy="85" r="4" /><text x="168" y="88" font-size="9" fill="#2563eb">e⁻</text>
      <circle cx="180" cy="105" r="4" /><text x="188" y="108" font-size="9" fill="#2563eb">e⁻</text>
      <circle cx="165" cy="125" r="4" /><text x="173" y="128" font-size="9" fill="#2563eb">e⁻</text>
    </g>

    <!-- Electroscope -->
    <line x1="139" y1="140" x2="139" y2="180" stroke="#475569" stroke-width="3" />
    <circle cx="139" cy="180" r="14" fill="#cbd5e1" stroke="#475569" stroke-width="2" />
    <!-- Metal leaves diverging/closing -->
    <line x1="139" y1="194" x2="128" y2="230" stroke="#ea580c" stroke-width="2.5" />
    <line x1="139" y1="194" x2="150" y2="230" stroke="#ea580c" stroke-width="2.5" />
    <text x="95" y="248" fill="#ea580c" font-size="10" font-weight="bold">Hai lá điện nghiệm cụp lại</text>

    <text x="20" y="258" fill="#64748b" font-size="10">(Chứng tỏ kẽm bị mất bớt electron âm)</text>
  </g>

  <!-- Right: Einstein Equation & Potential Barrier -->
  <g transform="translate(410, 65)">
    <rect width="360" height="270" rx="12" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="20" y="25" fill="#6b21a8" class="dark:fill-purple-400" font-size="12" font-weight="bold" font-family="sans-serif">Phương trình Lượng tử Einstein (Nobel 1921)</text>

    <!-- Energy Conservation Diagram -->
    <rect x="30" y="50" width="300" height="70" rx="8" fill="#f3e8ff" stroke="#c084fc" class="dark:fill-purple-950/40 dark:stroke-purple-800" />
    <text x="45" y="72" fill="#6b21a8" class="dark:fill-purple-300" font-size="13" font-weight="bold">h·f = A + K_max = h·c/λ₀ + ½ m·v_max²</text>
    <text x="45" y="95" fill="#7e22ce" font-size="11">• h·f: Năng lượng photon tới (Lượng tử ε)</text>
    <text x="45" y="110" fill="#7e22ce" font-size="11">• A = h·c/λ₀: Công thoát electron khỏi mạng kim loại</text>

    <!-- Stopping Potential Box -->
    <rect x="30" y="135" width="300" height="70" rx="8" fill="#e0f2fe" stroke="#38bdf8" class="dark:fill-slate-700 dark:stroke-slate-600" />
    <text x="45" y="158" fill="#0369a1" class="dark:fill-sky-300" font-size="12" font-weight="bold">Hiệu điện thế hãm U_h:</text>
    <text x="45" y="180" fill="#0284c7" class="dark:fill-sky-200" font-size="12" font-weight="bold">e · U_h = K_max = ½ m · v_max²</text>
    <text x="45" y="196" fill="#0369a1" font-size="10">U_h là điện thế ngược vừa đủ làm triệt tiêu dòng quang điện.</text>

    <!-- Condition Banner -->
    <rect x="30" y="220" width="300" height="32" rx="6" fill="#dcfce7" stroke="#10b981" class="dark:fill-emerald-950/40 dark:stroke-emerald-700" />
    <text x="40" y="240" fill="#047857" class="dark:fill-emerald-300" font-size="11" font-weight="bold">Điều kiện xảy ra quang điện: λ ≤ λ₀ hay ε ≥ A</text>
  </g>
</svg>`,

  10: `<svg class="w-full h-auto rounded-xl shadow-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
  <!-- Title Badge -->
  <rect x="25" y="15" width="460" height="30" rx="6" fill="#6b21a8" />
  <text x="35" y="35" fill="#ffffff" font-size="13" font-weight="bold" font-family="sans-serif">LƯỠNG TÍNH SÓNG HẠT VÀ THÍ NGHIỆM DAVISSON – GERMER</text>

  <!-- Left: Davisson-Germer Electron Diffraction -->
  <g transform="translate(30, 65)">
    <rect width="360" height="270" rx="12" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="20" y="25" fill="#6b21a8" class="dark:fill-purple-400" font-size="12" font-weight="bold" font-family="sans-serif">Nhiễu xạ Electron trên Tinh thể Niken (1927)</text>

    <!-- Electron Gun -->
    <rect x="30" y="60" width="70" height="25" rx="4" fill="#3b82f6" />
    <text x="35" y="77" fill="#ffffff" font-size="10" font-weight="bold">Súng e⁻</text>

    <!-- Electron beam to crystal -->
    <line x1="100" y1="72" x2="180" y2="150" stroke="#3b82f6" stroke-width="2.5" />
    <polygon points="180,150 172,142 176,138" fill="#3b82f6" />
    <text x="120" y="105" fill="#2563eb" font-size="10" font-weight="bold">Chùm e⁻</text>

    <!-- Nickel Crystal Surface -->
    <rect x="150" y="150" width="160" height="20" fill="#94a3b8" stroke="#475569" stroke-width="2" />
    <!-- Atom dots -->
    <circle cx="165" cy="150" r="5" fill="#334155" />
    <circle cx="195" cy="150" r="5" fill="#334155" />
    <circle cx="225" cy="150" r="5" fill="#334155" />
    <circle cx="255" cy="150" r="5" fill="#334155" />
    <circle cx="285" cy="150" r="5" fill="#334155" />
    <text x="210" y="185" fill="#475569" font-size="10" font-weight="bold">Mặt tinh thể Niken (Ni)</text>

    <!-- Diffracted wave beams -->
    <g stroke="#059669" stroke-width="2" fill="none">
      <path d="M 195,150 L 260,75" />
      <path d="M 225,150 L 290,75" />
    </g>
    <!-- Diffraction peaks at detector -->
    <ellipse cx="275" cy="75" rx="30" ry="10" fill="#dcfce7" stroke="#10b981" />
    <text x="250" y="62" fill="#047857" font-size="9" font-weight="bold">Cực đại nhiễu xạ</text>

    <text x="20" y="245" fill="#1e293b" class="dark:fill-slate-200" font-size="10.5">Khẳng định electron có tính chất sóng giao thoa.</text>
  </g>

  <!-- Right: De Broglie Formula & Electron Microscope -->
  <g transform="translate(410, 65)">
    <rect width="360" height="270" rx="12" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="20" y="25" fill="#6b21a8" class="dark:fill-purple-400" font-size="12" font-weight="bold" font-family="sans-serif">Bước sóng de Broglie & Kính hiển vi điện tử</text>

    <!-- Formula Box -->
    <rect x="20" y="45" width="320" height="70" rx="8" fill="#f3e8ff" stroke="#c084fc" class="dark:fill-purple-950/40 dark:stroke-purple-800" />
    <text x="35" y="70" fill="#6b21a8" class="dark:fill-purple-300" font-size="13" font-weight="bold">Bước sóng de Broglie: λ = h / p = h / (m · v)</text>
    <text x="35" y="95" fill="#7e22ce" font-size="11">• Khi electron gia tốc qua điện thế U: λ ≈ 1,227 / √U (nm)</text>

    <!-- Comparison Microscope Box -->
    <rect x="20" y="130" width="320" height="115" rx="8" fill="#ffffff" stroke="#cbd5e1" class="dark:fill-slate-900 dark:stroke-slate-700" />
    <text x="30" y="152" fill="#1e40af" class="dark:fill-sky-400" font-size="11.5" font-weight="bold">So sánh Giới hạn Phân giải Kính hiển vi:</text>
    
    <text x="30" y="175" fill="#475569" class="dark:fill-slate-300" font-size="10.5">• Kính quang học: Dùng photon ánh sáng (λ ≈ 400–700 nm)</text>
    <text x="40" y="190" fill="#b91c1c" font-size="10">⇒ Độ phóng đại tối đa cỡ 2.000 lần (giới hạn nhiễu xạ).</text>
    
    <text x="30" y="210" fill="#475569" class="dark:fill-slate-300" font-size="10.5">• Kính hiển vi điện tử (TEM/SEM): Dùng electron (λ ≈ 0,004 nm)</text>
    <text x="40" y="226" fill="#047857" font-size="10" font-weight="bold">⇒ Phóng đại tới 2.000.000 lần (nhìn rõ nguyên tử, virus).</text>
  </g>
</svg>`,

  11: `<svg class="w-full h-auto rounded-xl shadow-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
  <!-- Title Badge -->
  <rect x="25" y="15" width="460" height="30" rx="6" fill="#6b21a8" />
  <text x="35" y="35" fill="#ffffff" font-size="13" font-weight="bold" font-family="sans-serif">QUANG PHỔ NGUYÊN TỬ VÀ CÁC MỨC DỪNG BOHR</text>

  <!-- Left: Bohr Orbit Level Transitions Diagram -->
  <g transform="translate(30, 65)">
    <rect width="380" height="270" rx="12" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="20" y="25" fill="#6b21a8" class="dark:fill-purple-400" font-size="12" font-weight="bold" font-family="sans-serif">Sơ đồ Mức Năng lượng & Ba Dãy Quang phổ</text>

    <!-- Energy Levels Horizontal Lines -->
    <!-- n = 1 (K) -->
    <line x1="50" y1="220" x2="340" y2="220" stroke="#1e293b" stroke-width="2" class="dark:stroke-slate-300" />
    <text x="35" y="224" fill="#1e293b" class="dark:fill-slate-300" font-size="10" font-weight="bold">n=1</text>
    <text x="345" y="224" fill="#64748b" font-size="10">E₁ = −13,6 eV (K)</text>

    <!-- n = 2 (L) -->
    <line x1="50" y1="160" x2="340" y2="160" stroke="#1e293b" stroke-width="2" class="dark:stroke-slate-300" />
    <text x="35" y="164" fill="#1e293b" class="dark:fill-slate-300" font-size="10" font-weight="bold">n=2</text>
    <text x="345" y="164" fill="#64748b" font-size="10">E₂ = −3,4 eV (L)</text>

    <!-- n = 3 (M) -->
    <line x1="50" y1="115" x2="340" y2="115" stroke="#1e293b" stroke-width="1.5" class="dark:stroke-slate-300" />
    <text x="35" y="119" fill="#1e293b" class="dark:fill-slate-300" font-size="10" font-weight="bold">n=3</text>
    <text x="345" y="119" fill="#64748b" font-size="10">E₃ = −1,51 eV (M)</text>

    <!-- n = 4 (N) -->
    <line x1="50" y1="85" x2="340" y2="85" stroke="#1e293b" stroke-width="1.5" class="dark:stroke-slate-300" />
    <text x="35" y="89" fill="#1e293b" class="dark:fill-slate-300" font-size="10" font-weight="bold">n=4</text>
    <text x="345" y="89" fill="#64748b" font-size="10">E₄ = −0,85 eV (N)</text>

    <!-- n = infinity -->
    <line x1="50" y1="55" x2="340" y2="55" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,2" />
    <text x="35" y="58" fill="#94a3b8" font-size="9">n=∞</text>
    <text x="345" y="58" fill="#94a3b8" font-size="9">E = 0 eV (Ion hóa)</text>

    <!-- Series 1: Lyman (to n=1) - Purple -->
    <g stroke="#9333ea" stroke-width="2">
      <line x1="90" y1="160" x2="90" y2="218" marker-end="url(#arrP)" />
      <line x1="110" y1="115" x2="110" y2="218" marker-end="url(#arrP)" />
      <line x1="130" y1="85" x2="130" y2="218" marker-end="url(#arrP)" />
    </g>
    <text x="85" y="245" fill="#9333ea" font-size="10" font-weight="bold">Dãy Lyman (Tử ngoại)</text>

    <!-- Series 2: Balmer (to n=2) - 4 visible lines -->
    <!-- H_alpha (red) 3->2 -->
    <line x1="190" y1="115" x2="190" y2="158" stroke="#ef4444" stroke-width="2.5" />
    <text x="182" y="140" fill="#ef4444" font-size="9" font-weight="bold">H_α</text>
    <!-- H_beta (cyan) 4->2 -->
    <line x1="215" y1="85" x2="215" y2="158" stroke="#06b6d4" stroke-width="2.5" />
    <text x="207" y="130" fill="#06b6d4" font-size="9" font-weight="bold">H_β</text>
    <text x="175" y="180" fill="#0284c7" font-size="10" font-weight="bold">Dãy Balmer (Nhìn thấy)</text>

    <!-- Series 3: Paschen (to n=3) - Red/IR -->
    <line x1="280" y1="85" x2="280" y2="113" stroke="#ea580c" stroke-width="2" />
    <text x="250" y="105" fill="#ea580c" font-size="9" font-weight="bold">Dãy Paschen (Hồng ngoại)</text>
  </g>

  <!-- Right: Balmer 4 Visible Emission Lines Spectrum -->
  <g transform="translate(430, 65)">
    <rect width="340" height="270" rx="12" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="20" y="25" fill="#6b21a8" class="dark:fill-purple-400" font-size="12" font-weight="bold" font-family="sans-serif">Quang phổ 4 vạch khả kiến của Hydrogen</text>

    <!-- Spectrum Black Strip -->
    <rect x="20" y="60" width="300" height="60" rx="4" fill="#020617" />
    
    <!-- Red line H_alpha: 656,3 nm -->
    <line x1="260" y1="60" x2="260" y2="120" stroke="#ef4444" stroke-width="4" />
    <text x="245" y="140" fill="#ef4444" font-size="10" font-weight="bold">H_α (Đỏ)</text>
    <text x="245" y="155" fill="#64748b" font-size="9">656,3 nm</text>

    <!-- Green-Blue line H_beta: 486,1 nm -->
    <line x1="170" y1="60" x2="170" y2="120" stroke="#06b6d4" stroke-width="3" />
    <text x="155" y="140" fill="#06b6d4" font-size="10" font-weight="bold">H_β (Lam)</text>
    <text x="155" y="155" fill="#64748b" font-size="9">486,1 nm</text>

    <!-- Indigo line H_gamma: 434,0 nm -->
    <line x1="110" y1="60" x2="110" y2="120" stroke="#3b82f6" stroke-width="2.5" />
    <text x="95" y="140" fill="#3b82f6" font-size="10" font-weight="bold">H_γ (Chàm)</text>
    <text x="95" y="155" fill="#64748b" font-size="9">434,0 nm</text>

    <!-- Violet line H_delta: 410,2 nm -->
    <line x1="60" y1="60" x2="60" y2="120" stroke="#8b5cf6" stroke-width="2.5" />
    <text x="45" y="140" fill="#8b5cf6" font-size="10" font-weight="bold">H_δ (Tím)</text>
    <text x="45" y="155" fill="#64748b" font-size="9">410,2 nm</text>

    <!-- Formula Box: Bohr's 2nd Postulate -->
    <rect x="20" y="180" width="300" height="70" rx="8" fill="#e0f2fe" stroke="#38bdf8" class="dark:fill-slate-700 dark:stroke-slate-600" />
    <text x="30" y="202" fill="#0369a1" class="dark:fill-sky-300" font-size="11" font-weight="bold">Tiên đề II của Niels Bohr:</text>
    <text x="30" y="224" fill="#0284c7" class="dark:fill-sky-200" font-size="12" font-weight="bold">h · f = E_n − E_m  ⇔  λ = h·c / |E_n − E_m|</text>
    <text x="30" y="240" fill="#0369a1" font-size="9.5">Giải thích bản chất gián đoạn của phổ vạch nguyên tử.</text>
  </g>
</svg>`,

  12: `<svg class="w-full h-auto rounded-xl shadow-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
  <!-- Title Badge -->
  <rect x="25" y="15" width="460" height="30" rx="6" fill="#6b21a8" />
  <text x="35" y="35" fill="#ffffff" font-size="13" font-weight="bold" font-family="sans-serif">CẤU TRÚC VÙNG NĂNG LƯỢNG RẮN VÀ NGUYÊN LÍ QUANG TRỞ LDR</text>

  <!-- Left: Comparison of 3 Energy Bands (Metal, Semi, Insulator) -->
  <g transform="translate(30, 65)">
    <rect width="400" height="270" rx="12" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="20" y="25" fill="#6b21a8" class="dark:fill-purple-400" font-size="12" font-weight="bold" font-family="sans-serif">So sánh Vùng Năng lượng ba nhóm vật liệu</text>

    <!-- Metal (Vật dẫn) -->
    <g transform="translate(35, 55)">
      <rect x="0" y="0" width="80" height="50" fill="#3b82f6" fill-opacity="0.7" rx="3" />
      <text x="12" y="28" fill="#ffffff" font-size="10" font-weight="bold">Vùng dẫn</text>
      <!-- Overlap region -->
      <rect x="0" y="40" width="80" height="50" fill="#8b5cf6" fill-opacity="0.7" rx="3" />
      <text x="8" y="75" fill="#ffffff" font-size="10" font-weight="bold">Vùng hóa trị</text>
      <text x="10" y="115" fill="#1d4ed8" font-size="11" font-weight="bold">KIM LOẠI</text>
      <text x="5" y="130" fill="#64748b" font-size="9">E_g = 0 (Chồng lấn)</text>
      <text x="5" y="145" fill="#059669" font-size="9">Dẫn điện cực tốt</text>
    </g>

    <!-- Semiconductor (Bán dẫn) -->
    <g transform="translate(155, 55)">
      <rect x="0" y="0" width="80" height="35" fill="#3b82f6" fill-opacity="0.7" rx="3" />
      <text x="12" y="22" fill="#ffffff" font-size="10" font-weight="bold">Vùng dẫn</text>
      
      <!-- Band gap Eg -->
      <rect x="0" y="38" width="80" height="24" fill="#fef3c7" stroke="#f59e0b" stroke-dasharray="2,2" rx="2" />
      <text x="10" y="54" fill="#b45309" font-size="9" font-weight="bold">Vùng cấm E_g ≈ 1eV</text>
      
      <rect x="0" y="65" width="80" height="35" fill="#8b5cf6" fill-opacity="0.7" rx="3" />
      <text x="8" y="87" fill="#ffffff" font-size="10" font-weight="bold">Vùng hóa trị</text>
      <text x="10" y="115" fill="#0d9488" font-size="11" font-weight="bold">BÁN DẪN</text>
      <text x="5" y="130" fill="#64748b" font-size="9">E_g hẹp (Si, Ge)</text>
      <text x="5" y="145" fill="#0d9488" font-size="9">Dễ kích hoạt nhiệt/sáng</text>
    </g>

    <!-- Insulator (Cách điện) -->
    <g transform="translate(275, 55)">
      <rect x="0" y="0" width="80" height="25" fill="#94a3b8" fill-opacity="0.7" rx="3" />
      <text x="10" y="17" fill="#ffffff" font-size="9" font-weight="bold">Vùng dẫn (trống)</text>
      
      <!-- Wide Band Gap -->
      <rect x="0" y="28" width="80" height="50" fill="#fee2e2" stroke="#ef4444" stroke-dasharray="2,2" rx="2" />
      <text x="8" y="58" fill="#b91c1c" font-size="9" font-weight="bold">Vùng cấm rất rộng</text>
      <text x="15" y="70" fill="#b91c1c" font-size="9">E_g &gt; 5 eV</text>

      <rect x="0" y="82" width="80" height="25" fill="#8b5cf6" fill-opacity="0.7" rx="3" />
      <text x="8" y="98" fill="#ffffff" font-size="9" font-weight="bold">Vùng hóa trị (đầy)</text>
      <text x="8" y="115" fill="#b91c1c" font-size="11" font-weight="bold">CÁCH ĐIỆN</text>
      <text x="5" y="130" fill="#64748b" font-size="9">Không dẫn điện</text>
    </g>
  </g>

  <!-- Right: LDR Photoresistor Operating Mechanism -->
  <g transform="translate(450, 65)">
    <rect width="320" height="270" rx="12" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="20" y="25" fill="#6b21a8" class="dark:fill-purple-400" font-size="12" font-weight="bold" font-family="sans-serif">Cơ chế Quang điện trong của LDR</text>

    <!-- Incoming Photon -->
    <g transform="translate(30, 45)">
      <path d="M 10,10 L 60,45" stroke="#f59e0b" stroke-width="2.5" />
      <polygon points="60,45 50,42 54,36" fill="#f59e0b" />
      <text x="5" y="5" fill="#b45309" font-size="10" font-weight="bold">Photon h·f ≥ E_g</text>

      <!-- Electron jumping up -->
      <line x1="75" y1="100" x2="75" y2="40" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="3,2" />
      <polygon points="75,40 71,48 79,48" fill="#ef4444" />
      
      <!-- Free electron in conduction band -->
      <circle cx="75" cy="30" r="7" fill="#3b82f6" />
      <text x="72" y="34" fill="#ffffff" font-size="9" font-weight="bold">e⁻</text>
      <text x="90" y="34" fill="#2563eb" font-size="9" font-weight="bold">Electron dẫn tự do</text>

      <!-- Hole left behind in valence band -->
      <circle cx="75" cy="110" r="7" fill="#f59e0b" />
      <text x="71" y="114" fill="#ffffff" font-size="9" font-weight="bold">h⁺</text>
      <text x="90" y="114" fill="#d97706" font-size="9" font-weight="bold">Lỗ trống tự do</text>
    </g>

    <!-- Working Rule Box -->
    <rect x="20" y="175" width="280" height="80" rx="6" fill="#e6fffa" stroke="#2dd4bf" class="dark:fill-slate-900 dark:stroke-teal-800" />
    <text x="30" y="195" fill="#0f766e" class="dark:fill-teal-300" font-size="11" font-weight="bold">Nguyên lí hoạt động Quang điện trở:</text>
    <text x="30" y="213" fill="#047857" font-size="10">• Trong tối: Rất ít hạt tải ⇒ R rất lớn (MΩ).</text>
    <text x="30" y="229" fill="#047857" font-size="10">• Khi chiếu sáng: Sinh cặp e⁻ – h⁺ ⇒ R giảm còn vài trăm Ω.</text>
    <text x="30" y="245" fill="#047857" font-size="10" font-weight="bold">⇒ Ứng dụng: Đèn đường tự động, cảm biến báo trộm.</text>
  </g>
</svg>`
};

fs.writeFileSync('scratch/ly12_svgs.js', 'module.exports = ' + JSON.stringify(svgsData, null, 2) + ';\n', 'utf8');
console.log('Successfully generated scratch/ly12_svgs.js with 12 high-quality SVGs!');
