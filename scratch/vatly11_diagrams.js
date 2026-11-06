const diagrams = {
  1: `<svg viewBox="0 0 800 300" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="300" rx="16" fill="#eef2ff" stroke="#c7d2fe" stroke-width="2"/>
    <text x="400" y="30" text-anchor="middle" font-size="15" font-weight="800" fill="#312e81">BÀI 1: HÌNH CHIẾU CHUYỂN ĐỘNG TRÒN ĐỀU &amp; ĐỒ THỊ DAO ĐỘNG ĐIỀU HÒA x = A cos(ωt + φ₀)</text>
    <!-- Left: Circle projection -->
    <g transform="translate(150, 165)">
      <circle cx="0" cy="0" r="85" fill="#fff" stroke="#6366f1" stroke-width="2.5"/>
      <line x1="-105" y1="0" x2="105" y2="0" stroke="#475569" stroke-width="1.5"/>
      <line x1="0" y1="-100" x2="0" y2="100" stroke="#94a3b8" stroke-dasharray="4 4"/>
      <line x1="0" y1="0" x2="60" y2="-60" stroke="#e11d48" stroke-width="2.5"/>
      <circle cx="60" cy="-60" r="6" fill="#e11d48"/>
      <text x="72" y="-64" font-size="12" font-weight="bold" fill="#e11d48">M(t)</text>
      <line x1="60" y1="-60" x2="60" y2="0" stroke="#e11d48" stroke-dasharray="4 3" stroke-width="1.5"/>
      <circle cx="60" cy="0" r="6" fill="#4f46e5"/>
      <text x="60" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#4f46e5">P (x)</text>
      <text x="-94" y="18" font-size="11" font-weight="bold" fill="#334155">-A</text>
      <text x="88" y="18" font-size="11" font-weight="bold" fill="#334155">+A</text>
      <text x="26" y="-12" font-size="11" font-weight="bold" fill="#be123c">ωt+φ₀</text>
    </g>
    <!-- Right: Sine wave x-t -->
    <g transform="translate(340, 65)">
      <rect width="425" height="200" rx="12" fill="#fff" stroke="#a5b4fc" stroke-width="1.5"/>
      <line x1="35" y1="100" x2="405" y2="100" stroke="#334155" stroke-width="1.5"/>
      <line x1="35" y1="20" x2="35" y2="180" stroke="#334155" stroke-width="1.5"/>
      <path d="M 35 40 Q 80 40, 102 100 T 170 160 T 238 100 T 306 40 T 374 100" fill="none" stroke="#4f46e5" stroke-width="3"/>
      <line x1="35" y1="40" x2="306" y2="40" stroke="#e11d48" stroke-dasharray="4 4"/>
      <text x="170" y="32" text-anchor="middle" font-size="12" font-weight="bold" fill="#e11d48">Chu kì T (f = 1/T)</text>
      <text x="18" y="44" font-size="11" font-weight="bold" fill="#4f46e5">+A</text>
      <text x="18" y="104" font-size="11" font-weight="bold" fill="#334155">0</text>
      <text x="18" y="164" font-size="11" font-weight="bold" fill="#4f46e5">-A</text>
      <text x="398" y="116" font-size="12" font-weight="bold" fill="#334155">t (s)</text>
      <text x="48" y="24" font-size="12" font-weight="bold" fill="#334155">x</text>
    </g>
  </svg>`,

  2: `<svg viewBox="0 0 800 300" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="300" rx="16" fill="#eef2ff" stroke="#c7d2fe" stroke-width="2"/>
    <text x="400" y="30" text-anchor="middle" font-size="15" font-weight="800" fill="#312e81">BÀI 2: ĐỒ THỊ HAI DAO ĐỘNG CÙNG TẦN SỐ LỆCH PHA Δφ = φ₁ − φ₂ = 2π·Δt / T</text>
    <g transform="translate(45, 50)">
      <rect width="710" height="225" rx="12" fill="#fff" stroke="#818cf8" stroke-width="1.5"/>
      <line x1="45" y1="115" x2="675" y2="115" stroke="#334155" stroke-width="1.5"/>
      <line x1="45" y1="20" x2="45" y2="205" stroke="#334155" stroke-width="1.5"/>
      <!-- Wave 1 (solid indigo) -->
      <path d="M 45 45 C 95 45, 115 185, 165 185 C 215 185, 235 45, 285 45 C 335 45, 355 185, 405 185 C 455 185, 475 45, 525 45 C 575 45, 595 185, 645 185" fill="none" stroke="#4f46e5" stroke-width="3"/>
      <!-- Wave 2 (dashed rose, delayed by Δt) -->
      <path d="M 45 115 C 70 45, 95 45, 105 45 C 155 45, 175 185, 225 185 C 275 185, 295 45, 345 45 C 395 45, 415 185, 465 185 C 515 185, 535 45, 585 45" fill="none" stroke="#e11d48" stroke-width="2.5" stroke-dasharray="6 4"/>
      <line x1="285" y1="25" x2="285" y2="115" stroke="#4f46e5" stroke-dasharray="3 3"/>
      <line x1="345" y1="25" x2="345" y2="115" stroke="#e11d48" stroke-dasharray="3 3"/>
      <text x="315" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#b91c1c">↔ Δt (Lệch pha Δφ)</text>
      <text x="530" y="34" font-size="12" font-weight="bold" fill="#4f46e5">x₁(t) sớm pha hơn x₂(t)</text>
      <text x="580" y="68" font-size="12" font-weight="bold" fill="#e11d48">x₂(t) trễ pha hơn</text>
      <text x="22" y="50" font-size="11" font-weight="bold" fill="#4f46e5">+A</text>
      <text x="22" y="188" font-size="11" font-weight="bold" fill="#4f46e5">-A</text>
      <text x="665" y="132" font-size="12" font-weight="bold" fill="#334155">t</text>
    </g>
  </svg>`,

  3: `<svg viewBox="0 0 800 300" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="300" rx="16" fill="#eef2ff" stroke="#c7d2fe" stroke-width="2"/>
    <text x="400" y="30" text-anchor="middle" font-size="15" font-weight="800" fill="#312e81">BÀI 3: QUAN HỆ PHA &amp; ĐỒ THỊ ĐỘC LẬP THỜI GIAN CỦA LI ĐỘ x, VẬN TỐC v, GIA TỐC a</text>
    <!-- 3 Cards -->
    <g transform="translate(30, 55)">
      <rect width="230" height="215" rx="12" fill="#fff" stroke="#6366f1" stroke-width="2"/>
      <text x="115" y="28" text-anchor="middle" font-size="13" font-weight="bold" fill="#4338ca">1. Tại Vị trí cân bằng (x = 0)</text>
      <text x="115" y="62" text-anchor="middle" font-size="12" fill="#047857" font-weight="bold">• Tốc độ cực đại: |v| = ωA</text>
      <text x="115" y="92" text-anchor="middle" font-size="12" fill="#334155">• Gia tốc bằng 0: a = 0</text>
      <text x="115" y="122" text-anchor="middle" font-size="12" fill="#334155">• Hợp lực kéo về: F = 0</text>
      <rect x="20" y="148" width="190" height="46" rx="8" fill="#eef2ff"/>
      <text x="115" y="175" text-anchor="middle" font-size="11" font-weight="bold" fill="#3730a3">v sớm pha π/2 so với x</text>
    </g>
    <g transform="translate(285, 55)">
      <rect width="230" height="215" rx="12" fill="#fff" stroke="#6366f1" stroke-width="2"/>
      <text x="115" y="28" text-anchor="middle" font-size="13" font-weight="bold" fill="#4338ca">2. Tại Hai vị trí biên (x = ±A)</text>
      <text x="115" y="62" text-anchor="middle" font-size="12" fill="#334155">• Vận tốc bằng 0: v = 0</text>
      <text x="115" y="92" text-anchor="middle" font-size="12" fill="#be123c" font-weight="bold">• Độ lớn gia tốc CĐ: |a| = ω²A</text>
      <text x="115" y="122" text-anchor="middle" font-size="12" fill="#334155">• Vectơ a luôn hướng về VTCB O</text>
      <rect x="20" y="148" width="190" height="46" rx="8" fill="#fff1f2"/>
      <text x="115" y="175" text-anchor="middle" font-size="11" font-weight="bold" fill="#be123c">a = −ω²x (ngược pha với x)</text>
    </g>
    <g transform="translate(540, 55)">
      <rect width="230" height="215" rx="12" fill="#fff" stroke="#6366f1" stroke-width="2"/>
      <text x="115" y="28" text-anchor="middle" font-size="13" font-weight="bold" fill="#4338ca">3. Độc lập thời gian (Elip)</text>
      <ellipse cx="115" cy="110" rx="75" ry="42" fill="#f5f3ff" stroke="#7c3aed" stroke-width="2.5"/>
      <line x1="25" y1="110" x2="205" y2="110" stroke="#475569" stroke-width="1"/>
      <line x1="115" y1="55" x2="115" y2="165" stroke="#475569" stroke-width="1"/>
      <text x="198" y="125" font-size="10" font-weight="bold" fill="#334155">x</text>
      <text x="122" y="64" font-size="10" font-weight="bold" fill="#334155">v</text>
      <text x="115" y="192" text-anchor="middle" font-size="12" font-weight="bold" fill="#5b21b6">x² + v²/ω² = A²</text>
    </g>
  </svg>`,

  4: `<svg viewBox="0 0 800 300" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="300" rx="16" fill="#eef2ff" stroke="#c7d2fe" stroke-width="2"/>
    <text x="400" y="30" text-anchor="middle" font-size="15" font-weight="800" fill="#312e81">BÀI 4: SƠ ĐỒ PHƯƠNG PHÁP GIẢI BÀI TẬP ĐỒ THỊ &amp; VÒNG TRÒN LƯỢNG GIÁC</text>
    <g transform="translate(30, 58)">
      <rect width="170" height="210" rx="12" fill="#fff" stroke="#818cf8" stroke-width="2"/>
      <text x="85" y="30" text-anchor="middle" font-size="12" font-weight="bold" fill="#4f46e5">BƯỚC 1: BIÊN ĐỘ A</text>
      <text x="85" y="65" text-anchor="middle" font-size="11" fill="#334155">Đọc đỉnh cao nhất</text>
      <text x="85" y="88" text-anchor="middle" font-size="11" fill="#334155">trên trục tung:</text>
      <text x="85" y="118" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e1b4b">A, v_max = ωA</text>
      <text x="85" y="142" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e1b4b">hoặc a_max = ω²A</text>
      <rect x="16" y="162" width="138" height="30" rx="6" fill="#e0e7ff"/>
      <text x="85" y="181" text-anchor="middle" font-size="10" font-weight="bold" fill="#3730a3">Chú ý đơn vị cm / m</text>
    </g>
    <g transform="translate(220, 58)">
      <rect width="170" height="210" rx="12" fill="#fff" stroke="#818cf8" stroke-width="2"/>
      <text x="85" y="30" text-anchor="middle" font-size="12" font-weight="bold" fill="#4f46e5">BƯỚC 2: CHU KÌ T &amp; ω</text>
      <text x="85" y="65" text-anchor="middle" font-size="11" fill="#334155">• Biên → VTCB: T/4</text>
      <text x="85" y="90" text-anchor="middle" font-size="11" fill="#334155">• Biên (+) → Biên (-): T/2</text>
      <text x="85" y="115" text-anchor="middle" font-size="11" fill="#334155">• 2 đỉnh liên tiếp: T</text>
      <rect x="16" y="162" width="138" height="30" rx="6" fill="#e0e7ff"/>
      <text x="85" y="181" text-anchor="middle" font-size="11" font-weight="bold" fill="#3730a3">ω = 2π / T (rad/s)</text>
    </g>
    <g transform="translate(410, 58)">
      <rect width="170" height="210" rx="12" fill="#fff" stroke="#818cf8" stroke-width="2"/>
      <text x="85" y="30" text-anchor="middle" font-size="12" font-weight="bold" fill="#4f46e5">BƯỚC 3: PHA ĐẦU φ₀</text>
      <text x="85" y="65" text-anchor="middle" font-size="11" fill="#334155">Tại t = 0: cos φ₀ = x₀/A</text>
      <text x="85" y="95" text-anchor="middle" font-size="11" font-weight="bold" fill="#047857">• Đồ thị đi lên (v&gt;0): φ₀ &lt; 0</text>
      <text x="85" y="122" text-anchor="middle" font-size="11" font-weight="bold" fill="#be123c">• Đồ thị đi xuống (v&lt;0): φ₀ &gt; 0</text>
      <rect x="16" y="162" width="138" height="30" rx="6" fill="#e0e7ff"/>
      <text x="85" y="181" text-anchor="middle" font-size="10" font-weight="bold" fill="#3730a3">Chọn φ₀ ∈ [−π, π]</text>
    </g>
    <g transform="translate(600, 58)">
      <rect width="170" height="210" rx="12" fill="#fff" stroke="#818cf8" stroke-width="2"/>
      <text x="85" y="30" text-anchor="middle" font-size="12" font-weight="bold" fill="#4f46e5">BƯỚC 4: TÍNH (x, v, a)</text>
      <text x="85" y="65" text-anchor="middle" font-size="11" fill="#334155">• x = ±A/2 ⇒ |v| = √3/2 v_max</text>
      <text x="85" y="92" text-anchor="middle" font-size="11" fill="#334155">• x = ±A√2/2 ⇒ |v| = √2/2 v_max</text>
      <text x="85" y="119" text-anchor="middle" font-size="11" fill="#334155">• x = ±A√3/2 ⇒ |v| = 1/2 v_max</text>
      <rect x="16" y="162" width="138" height="30" rx="6" fill="#e0e7ff"/>
      <text x="85" y="181" text-anchor="middle" font-size="10" font-weight="bold" fill="#3730a3">Máy tính chế độ RAD</text>
    </g>
  </svg>`,

  5: `<svg viewBox="0 0 800 300" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="300" rx="16" fill="#eef2ff" stroke="#c7d2fe" stroke-width="2"/>
    <text x="400" y="30" text-anchor="middle" font-size="15" font-weight="800" fill="#312e81">BÀI 5: ĐỒ THỊ CHUYỂN HÓA ĐỘNG NĂNG W_đ, THẾ NĂNG W_t VÀ BẢO TOÀN CƠ NĂNG W</text>
    <g transform="translate(60, 50)">
      <rect width="680" height="225" rx="12" fill="#fff" stroke="#818cf8" stroke-width="1.5"/>
      <!-- Axes -->
      <line x1="80" y1="185" x2="600" y2="185" stroke="#334155" stroke-width="1.5"/>
      <line x1="340" y1="20" x2="340" y2="205" stroke="#334155" stroke-width="1.5"/>
      <!-- Total energy W line -->
      <line x1="140" y1="45" x2="540" y2="45" stroke="#059669" stroke-width="3" stroke-dasharray="8 4"/>
      <text x="550" y="49" font-size="12" font-weight="bold" fill="#059669">W = W_đ + W_t = ½kA²</text>
      <!-- Potential energy W_t = 1/2 k x^2 (upward parabola) -->
      <path d="M 140 45 Q 340 325, 540 45" fill="none" stroke="#e11d48" stroke-width="3"/>
      <text x="530" y="95" font-size="12" font-weight="bold" fill="#e11d48">Thế năng W_t = ½kx²</text>
      <!-- Kinetic energy W_d = W - 1/2 k x^2 (downward parabola) -->
      <path d="M 140 185 Q 340 -95, 540 185" fill="none" stroke="#4f46e5" stroke-width="3"/>
      <text x="155" y="95" font-size="12" font-weight="bold" fill="#4f46e5">Động năng W_đ = ½mv²</text>
      <!-- Labels -->
      <text x="140" y="205" text-anchor="middle" font-size="12" font-weight="bold" fill="#334155">-A</text>
      <text x="340" y="205" text-anchor="middle" font-size="12" font-weight="bold" fill="#334155">0 (VTCB)</text>
      <text x="540" y="205" text-anchor="middle" font-size="12" font-weight="bold" fill="#334155">+A</text>
      <text x="590" y="202" font-size="12" font-weight="bold" fill="#334155">x</text>
      <text x="355" y="32" font-size="12" font-weight="bold" fill="#334155">Năng lượng</text>
    </g>
  </svg>`,

  6: `<svg viewBox="0 0 800 300" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="300" rx="16" fill="#eef2ff" stroke="#c7d2fe" stroke-width="2"/>
    <text x="400" y="30" text-anchor="middle" font-size="15" font-weight="800" fill="#312e81">BÀI 6: DAO ĐỘNG TẮT DẦN &amp; ĐƯỜNG CONG CỘNG HƯỞNG (f = f₀)</text>
    <!-- Left: Damped oscillation -->
    <g transform="translate(30, 50)">
      <rect width="355" height="225" rx="12" fill="#fff" stroke="#818cf8" stroke-width="1.5"/>
      <text x="177" y="24" text-anchor="middle" font-size="12" font-weight="bold" fill="#4338ca">1. Dao động tắt dần (Biên độ giảm dần)</text>
      <line x1="25" y1="120" x2="335" y2="120" stroke="#334155" stroke-width="1.5"/>
      <line x1="25" y1="35" x2="25" y2="205" stroke="#334155" stroke-width="1.5"/>
      <path d="M 25 45 Q 150 95, 330 115" fill="none" stroke="#94a3b8" stroke-dasharray="4 4"/>
      <path d="M 25 195 Q 150 145, 330 125" fill="none" stroke="#94a3b8" stroke-dasharray="4 4"/>
      <path d="M 25 45 C 45 45, 55 185, 75 185 C 95 185, 105 65, 125 65 C 145 65, 155 165, 175 165 C 195 165, 205 85, 225 85 C 245 85, 255 145, 275 145 C 295 145, 305 105, 325 118" fill="none" stroke="#4f46e5" stroke-width="2.5"/>
      <text x="325" y="138" font-size="11" font-weight="bold" fill="#334155">t</text>
    </g>
    <!-- Right: Resonance curve -->
    <g transform="translate(415, 50)">
      <rect width="355" height="225" rx="12" fill="#fff" stroke="#818cf8" stroke-width="1.5"/>
      <text x="177" y="24" text-anchor="middle" font-size="12" font-weight="bold" fill="#be123c">2. Đường cong Cộng hưởng (A cực đại khi f = f₀)</text>
      <line x1="35" y1="190" x2="335" y2="190" stroke="#334155" stroke-width="1.5"/>
      <line x1="35" y1="35" x2="35" y2="195" stroke="#334155" stroke-width="1.5"/>
      <!-- Low damping -->
      <path d="M 35 165 Q 145 160, 175 45 Q 205 160, 320 182" fill="none" stroke="#e11d48" stroke-width="3"/>
      <!-- High damping -->
      <path d="M 35 170 Q 145 165, 175 115 Q 205 165, 320 185" fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5 3"/>
      <line x1="175" y1="45" x2="175" y2="190" stroke="#e11d48" stroke-dasharray="3 3"/>
      <text x="175" y="208" text-anchor="middle" font-size="12" font-weight="bold" fill="#be123c">f = f₀ (Cộng hưởng)</text>
      <text x="245" y="65" font-size="10.5" font-weight="bold" fill="#e11d48">Lực cản nhỏ (nhọn)</text>
      <text x="255" y="132" font-size="10.5" font-weight="bold" fill="#4f46e5">Lực cản lớn (tù)</text>
      <text x="22" y="48" font-size="11" font-weight="bold" fill="#334155">A</text>
      <text x="325" y="206" font-size="11" font-weight="bold" fill="#334155">f</text>
    </g>
  </svg>`,

  7: `<svg viewBox="0 0 800 300" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="300" rx="16" fill="#eef2ff" stroke="#c7d2fe" stroke-width="2"/>
    <text x="400" y="30" text-anchor="middle" font-size="15" font-weight="800" fill="#312e81">BÀI 7: TRỤC PHÂN BỐ NĂNG LƯỢNG ĐẶC BIỆT (W_đ = n W_t ⇒ x = ± A / √(n+1))</text>
    <g transform="translate(50, 65)">
      <rect width="700" height="200" rx="14" fill="#fff" stroke="#818cf8" stroke-width="2"/>
      <line x1="60" y1="100" x2="640" y2="100" stroke="#1e1b4b" stroke-width="3"/>
      <!-- Tick marks -->
      <circle cx="80" cy="100" r="6" fill="#e11d48"/><text x="80" y="78" text-anchor="middle" font-size="12" font-weight="bold" fill="#e11d48">-A</text><text x="80" y="130" text-anchor="middle" font-size="10" fill="#475569">W_đ = 0</text>
      <circle cx="165" cy="100" r="5" fill="#7c3aed"/><text x="165" y="78" text-anchor="middle" font-size="11" font-weight="bold" fill="#7c3aed">-A√3/2</text><text x="165" y="130" text-anchor="middle" font-size="10" fill="#475569">W_t = 3W_đ</text>
      <circle cx="220" cy="100" r="6" fill="#059669"/><text x="220" y="55" text-anchor="middle" font-size="11" font-weight="bold" fill="#059669">-A/√2</text><text x="220" y="148" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#059669">W_đ = W_t</text>
      <circle cx="275" cy="100" r="5" fill="#2563eb"/><text x="275" y="78" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">-A/2</text><text x="275" y="130" text-anchor="middle" font-size="10" fill="#475569">W_đ = 3W_t</text>
      <circle cx="350" cy="100" r="7" fill="#1e1b4b"/><text x="350" y="75" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e1b4b">O (0)</text><text x="350" y="130" text-anchor="middle" font-size="10" font-weight="bold" fill="#4f46e5">W_đ max = W</text>
      <circle cx="425" cy="100" r="5" fill="#2563eb"/><text x="425" y="78" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">+A/2</text><text x="425" y="130" text-anchor="middle" font-size="10" fill="#475569">W_đ = 3W_t</text>
      <circle cx="480" cy="100" r="6" fill="#059669"/><text x="480" y="55" text-anchor="middle" font-size="11" font-weight="bold" fill="#059669">+A/√2</text><text x="480" y="148" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#059669">W_đ = W_t</text>
      <circle cx="535" cy="100" r="5" fill="#7c3aed"/><text x="535" y="78" text-anchor="middle" font-size="11" font-weight="bold" fill="#7c3aed">+A√3/2</text><text x="535" y="130" text-anchor="middle" font-size="10" fill="#475569">W_t = 3W_đ</text>
      <circle cx="620" cy="100" r="6" fill="#e11d48"/><text x="620" y="78" text-anchor="middle" font-size="12" font-weight="bold" fill="#e11d48">+A</text><text x="620" y="130" text-anchor="middle" font-size="10" fill="#475569">W_t max = W</text>
      <text x="350" y="180" text-anchor="middle" font-size="12" font-weight="bold" fill="#312e81">Cứ sau Δt = T/4 thì Động năng lại bằng Thế năng (W_đ = W_t = W/2)</text>
    </g>
  </svg>`,

  8: `<svg viewBox="0 0 800 300" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="300" rx="16" fill="#f0f9ff" stroke="#bae6fd" stroke-width="2"/>
    <text x="400" y="30" text-anchor="middle" font-size="15" font-weight="800" fill="#0c4a6e">BÀI 8: MÔ TẢ SÓNG HÌNH SIN – BƯỚC SÓNG λ = vT = v/f &amp; ĐỘ LỆCH PHA Δφ = 2π·Δx / λ</text>
    <g transform="translate(45, 50)">
      <rect width="710" height="225" rx="12" fill="#fff" stroke="#38bdf8" stroke-width="1.5"/>
      <line x1="45" y1="115" x2="675" y2="115" stroke="#334155" stroke-width="1.5"/>
      <line x1="45" y1="25" x2="45" y2="205" stroke="#334155" stroke-width="1.5"/>
      <path d="M 45 115 Q 90 35, 135 115 T 225 115 T 315 115 T 405 115 T 495 115 T 585 115" fill="none" stroke="#0284c7" stroke-width="3.5"/>
      <!-- Wavelength marker -->
      <line x1="90" y1="52" x2="90" y2="25" stroke="#e11d48" stroke-width="1.5"/>
      <line x1="270" y1="52" x2="270" y2="25" stroke="#e11d48" stroke-width="1.5"/>
      <line x1="90" y1="35" x2="270" y2="35" stroke="#e11d48" stroke-width="2"/>
      <text x="180" y="28" text-anchor="middle" font-size="13" font-weight="bold" fill="#e11d48">Bước sóng λ = v·T = v/f</text>
      <!-- Amplitude -->
      <line x1="45" y1="55" x2="90" y2="55" stroke="#059669" stroke-dasharray="3 3"/>
      <text x="25" y="60" font-size="12" font-weight="bold" fill="#059669">+A</text>
      <text x="25" y="178" font-size="12" font-weight="bold" fill="#059669">-A</text>
      <text x="355" y="202" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1">Sóng truyền pha dao động &amp; năng lượng; phần tử môi trường chỉ dao động tại chỗ!</text>
      <text x="655" y="132" font-size="12" font-weight="bold" fill="#334155">x</text>
      <text x="58" y="34" font-size="12" font-weight="bold" fill="#334155">u</text>
    </g>
  </svg>`,

  9: `<svg viewBox="0 0 800 300" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="300" rx="16" fill="#f0f9ff" stroke="#bae6fd" stroke-width="2"/>
    <text x="400" y="30" text-anchor="middle" font-size="15" font-weight="800" fill="#0c4a6e">BÀI 9: SO SÁNH SÓNG NGANG (u ⊥ v) VÀ SÓNG DỌC (u ∥ v – NÉN &amp; DÃN)</text>
    <g transform="translate(30, 52)">
      <rect width="355" height="220" rx="12" fill="#fff" stroke="#38bdf8" stroke-width="2"/>
      <text x="177" y="28" text-anchor="middle" font-size="13" font-weight="bold" fill="#0284c7">1. SÓNG NGANG (Trên dây, mặt nước)</text>
      <path d="M 30 115 Q 75 55, 120 115 T 210 115 T 300 115" fill="none" stroke="#0284c7" stroke-width="3"/>
      <text x="177" y="172" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0c4a6e">Phương dao động u ⊥ Phương truyền v</text>
      <text x="177" y="195" text-anchor="middle" font-size="11" fill="#475569">Truyền trong chất rắn &amp; bề mặt chất lỏng</text>
    </g>
    <g transform="translate(415, 52)">
      <rect width="355" height="220" rx="12" fill="#fff" stroke="#38bdf8" stroke-width="2"/>
      <text x="177" y="28" text-anchor="middle" font-size="13" font-weight="bold" fill="#0369a1">2. SÓNG DỌC (Lò xo, Sóng âm không khí)</text>
      <!-- Compression & Rarefaction bars -->
      <g stroke="#0369a1" stroke-width="2.5">
        <line x1="40" y1="75" x2="40" y2="135"/><line x1="46" y1="75" x2="46" y2="135"/><line x1="52" y1="75" x2="52" y2="135"/><line x1="58" y1="75" x2="58" y2="135"/>
        <line x1="80" y1="75" x2="80" y2="135"/><line x1="105" y1="75" x2="105" y2="135"/><line x1="130" y1="75" x2="130" y2="135"/>
        <line x1="155" y1="75" x2="155" y2="135"/><line x1="161" y1="75" x2="161" y2="135"/><line x1="167" y1="75" x2="167" y2="135"/><line x1="173" y1="75" x2="173" y2="135"/>
        <line x1="195" y1="75" x2="195" y2="135"/><line x1="220" y1="75" x2="220" y2="135"/><line x1="245" y1="75" x2="245" y2="135"/>
        <line x1="270" y1="75" x2="270" y2="135"/><line x1="276" y1="75" x2="276" y2="135"/><line x1="282" y1="75" x2="282" y2="135"/><line x1="288" y1="75" x2="288" y2="135"/>
      </g>
      <text x="50" y="152" text-anchor="middle" font-size="10" font-weight="bold" fill="#e11d48">Nén</text>
      <text x="105" y="152" text-anchor="middle" font-size="10" font-weight="bold" fill="#059669">Dãn</text>
      <text x="164" y="152" text-anchor="middle" font-size="10" font-weight="bold" fill="#e11d48">Nén</text>
      <text x="177" y="175" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0c4a6e">Phương dao động u ∥ Phương truyền v</text>
      <text x="177" y="195" text-anchor="middle" font-size="11" fill="#475569">Truyền trong Rắn, Lỏng, Khí (Âm: 20Hz–20kHz)</text>
    </g>
  </svg>`,

  10: `<svg viewBox="0 0 800 300" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="300" rx="16" fill="#f0f9ff" stroke="#bae6fd" stroke-width="2"/>
    <text x="400" y="30" text-anchor="middle" font-size="15" font-weight="800" fill="#0c4a6e">BÀI 10: THỰC HÀNH ĐO TẦN SỐ SÓNG ÂM BẰNG DAO ĐỘNG KÍ ĐIỆN TỬ</text>
    <g transform="translate(30, 60)">
      <rect width="160" height="195" rx="12" fill="#fff" stroke="#38bdf8" stroke-width="2"/>
      <text x="80" y="38" text-anchor="middle" font-size="12" font-weight="bold" fill="#0284c7">1. Âm thoa &amp; Búa</text>
      <text x="80" y="75" text-anchor="middle" font-size="11" fill="#334155">Gõ nhẹ bằng búa</text>
      <text x="80" y="96" text-anchor="middle" font-size="11" fill="#334155">cao su phát ra</text>
      <text x="80" y="117" text-anchor="middle" font-size="11" fill="#334155">sóng âm chuẩn f</text>
      <rect x="16" y="145" width="128" height="30" rx="6" fill="#e0f2fe"/>
      <text x="80" y="164" text-anchor="middle" font-size="10" font-weight="bold" fill="#0369a1">Hộp cộng hưởng</text>
    </g>
    <text x="205" y="158" text-anchor="middle" font-size="20" font-weight="bold" fill="#0284c7">➔</text>
    <g transform="translate(220, 60)">
      <rect width="175" height="195" rx="12" fill="#fff" stroke="#38bdf8" stroke-width="2"/>
      <text x="87" y="38" text-anchor="middle" font-size="12" font-weight="bold" fill="#0284c7">2. Micro &amp; Khuếch đại</text>
      <text x="87" y="75" text-anchor="middle" font-size="11" fill="#334155">Chuyển dao động âm</text>
      <text x="87" y="96" text-anchor="middle" font-size="11" fill="#334155">thành tín hiệu điện</text>
      <text x="87" y="117" text-anchor="middle" font-size="11" fill="#334155">cùng tần số f</text>
      <rect x="16" y="145" width="143" height="30" rx="6" fill="#e0f2fe"/>
      <text x="87" y="164" text-anchor="middle" font-size="10" font-weight="bold" fill="#0369a1">Tăng biên độ điện áp</text>
    </g>
    <text x="410" y="158" text-anchor="middle" font-size="20" font-weight="bold" fill="#0284c7">➔</text>
    <g transform="translate(425, 60)">
      <rect width="345" height="195" rx="12" fill="#0f172a" stroke="#0284c7" stroke-width="3"/>
      <text x="172" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#38bdf8">3. MÀN HÌNH DAO ĐỘNG KÍ (OSCILLOSCOPE)</text>
      <line x1="25" y1="95" x2="320" y2="95" stroke="#334155" stroke-width="1"/>
      <path d="M 30 95 Q 60 40, 90 95 T 150 95 T 210 95 T 270 95" fill="none" stroke="#10b981" stroke-width="3"/>
      <text x="172" y="155" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#a7f3d0">T = Δt / N = (Số ô ngang 1 chu kì) × SEC/DIV</text>
      <text x="172" y="178" text-anchor="middle" font-size="12" font-weight="bold" fill="#fde047">Tần số sóng âm: f = 1 / T = N / Δt (Hz)</text>
    </g>
  </svg>`,

  11: `<svg viewBox="0 0 800 300" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="300" rx="16" fill="#f0f9ff" stroke="#bae6fd" stroke-width="2"/>
    <text x="400" y="30" text-anchor="middle" font-size="15" font-weight="800" fill="#0c4a6e">BÀI 11: THANG SÓNG ĐIỆN TỪ TRONG CHÂN KHÔNG (c = λ·f = 3×10⁸ m/s, E ⊥ B ⊥ v)</text>
    <g transform="translate(25, 55)">
      <rect width="750" height="215" rx="12" fill="#fff" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="375" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#334155">Chiều bước sóng λ giảm dần  ➔  Chiều tần số f và năng lượng tăng dần</text>
      <!-- 7 Spectrum boxes -->
      <g transform="translate(18, 45)">
        <rect x="0" y="0" width="98" height="110" rx="8" fill="#dbeafe"/><text x="49" y="42" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">1. Sóng</text><text x="49" y="58" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">Vô tuyến</text><text x="49" y="88" text-anchor="middle" font-size="9.5" fill="#475569">Radio, TV</text>
        <rect x="103" y="0" width="98" height="110" rx="8" fill="#e0f2fe"/><text x="152" y="42" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1">2. Sóng</text><text x="152" y="58" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1">Vi ba</text><text x="152" y="88" text-anchor="middle" font-size="9.5" fill="#475569">Radar, Wifi</text>
        <rect x="206" y="0" width="98" height="110" rx="8" fill="#fee2e2"/><text x="255" y="42" text-anchor="middle" font-size="11" font-weight="bold" fill="#b91c1c">3. Tia</text><text x="255" y="58" text-anchor="middle" font-size="11" font-weight="bold" fill="#b91c1c">Hồng ngoại</text><text x="255" y="88" text-anchor="middle" font-size="9.5" fill="#475569">Nhiệt, Remote</text>
        <rect x="309" y="0" width="98" height="110" rx="8" fill="#fef9c3" stroke="#eab308"/><text x="358" y="38" text-anchor="middle" font-size="11" font-weight="bold" fill="#854d0e">4. Ánh sáng</text><text x="358" y="54" text-anchor="middle" font-size="11" font-weight="bold" fill="#854d0e">nhìn thấy</text><text x="358" y="88" text-anchor="middle" font-size="9.5" fill="#854d0e">0,38–0,76 μm</text>
        <rect x="412" y="0" width="98" height="110" rx="8" fill="#ede9fe"/><text x="461" y="42" text-anchor="middle" font-size="11" font-weight="bold" fill="#5b21b6">5. Tia</text><text x="461" y="58" text-anchor="middle" font-size="11" font-weight="bold" fill="#5b21b6">Tử ngoại UV</text><text x="461" y="88" text-anchor="middle" font-size="9.5" fill="#475569">Diệt khuẩn</text>
        <rect x="515" y="0" width="98" height="110" rx="8" fill="#fae8ff"/><text x="564" y="42" text-anchor="middle" font-size="11" font-weight="bold" fill="#86198f">6. Tia X</text><text x="564" y="58" text-anchor="middle" font-size="11" font-weight="bold" fill="#86198f">(Rơnghen)</text><text x="564" y="88" text-anchor="middle" font-size="9.5" fill="#475569">Chụp X-quang</text>
        <rect x="618" y="0" width="98" height="110" rx="8" fill="#fce7f3"/><text x="667" y="42" text-anchor="middle" font-size="11" font-weight="bold" fill="#9d174d">7. Tia</text><text x="667" y="58" text-anchor="middle" font-size="11" font-weight="bold" fill="#9d174d">Gamma (γ)</text><text x="667" y="88" text-anchor="middle" font-size="9.5" fill="#475569">Hạt nhân</text>
      </g>
      <text x="375" y="188" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0369a1">Sóng điện từ là sóng ngang, truyền được trong chân không với tốc độ c = 3,0×10⁸ m/s</text>
    </g>
  </svg>`,

  12: `<svg viewBox="0 0 800 300" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="300" rx="16" fill="#f0f9ff" stroke="#bae6fd" stroke-width="2"/>
    <text x="400" y="30" text-anchor="middle" font-size="15" font-weight="800" fill="#0c4a6e">BÀI 12: GIAO THOA HAI NGUỒN KẾT HỢP CÙNG PHA &amp; GIAO THOA ÁNH SÁNG KHE YOUNG</text>
    <!-- Left: Water wave interference -->
    <g transform="translate(30, 52)">
      <rect width="355" height="220" rx="12" fill="#fff" stroke="#38bdf8" stroke-width="2"/>
      <text x="177" y="26" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#0284c7">1. Giao thoa sóng cơ (2 nguồn cùng pha)</text>
      <circle cx="110" cy="175" r="6" fill="#e11d48"/><text x="110" y="198" text-anchor="middle" font-size="11" font-weight="bold" fill="#e11d48">S₁</text>
      <circle cx="245" cy="175" r="6" fill="#e11d48"/><text x="245" y="198" text-anchor="middle" font-size="11" font-weight="bold" fill="#e11d48">S₂</text>
      <circle cx="205" cy="65" r="5" fill="#0284c7"/><text x="220" y="65" font-size="12" font-weight="bold" fill="#0284c7">M</text>
      <line x1="110" y1="175" x2="205" y2="65" stroke="#0284c7" stroke-width="2"/><text x="142" y="115" font-size="11" font-weight="bold" fill="#0369a1">d₁</text>
      <line x1="245" y1="175" x2="205" y2="65" stroke="#0284c7" stroke-width="2"/><text x="235" y="120" font-size="11" font-weight="bold" fill="#0369a1">d₂</text>
      <line x1="177.5" y1="45" x2="177.5" y2="185" stroke="#059669" stroke-width="2" stroke-dasharray="4 3"/>
      <text x="177" y="138" font-size="11" font-weight="bold" fill="#059669">• Cực đại: d₂ − d₁ = kλ</text>
      <text x="177" y="156" font-size="11" font-weight="bold" fill="#be123c">• Cực tiểu: d₂ − d₁ = (k+0,5)λ</text>
    </g>
    <!-- Right: Young's double slit -->
    <g transform="translate(415, 52)">
      <rect width="355" height="220" rx="12" fill="#fff" stroke="#38bdf8" stroke-width="2"/>
      <text x="177" y="26" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#0284c7">2. Thí nghiệm hai khe Young (i = λD / a)</text>
      <line x1="65" y1="45" x2="65" y2="85" stroke="#334155" stroke-width="4"/>
      <line x1="65" y1="95" x2="65" y2="125" stroke="#334155" stroke-width="4"/>
      <line x1="65" y1="135" x2="65" y2="175" stroke="#334155" stroke-width="4"/>
      <text x="45" y="93" font-size="11" font-weight="bold" fill="#e11d48">F₁</text>
      <text x="45" y="135" font-size="11" font-weight="bold" fill="#e11d48">F₂</text>
      <text x="45" y="115" font-size="10" fill="#475569">a</text>
      <line x1="285" y1="45" x2="285" y2="175" stroke="#1e293b" stroke-width="3"/>
      <line x1="65" y1="110" x2="285" y2="110" stroke="#94a3b8" stroke-dasharray="4 3"/>
      <line x1="65" y1="90" x2="285" y2="65" stroke="#f59e0b" stroke-width="2"/>
      <line x1="65" y1="130" x2="285" y2="65" stroke="#f59e0b" stroke-width="2"/>
      <text x="305" y="68" font-size="11" font-weight="bold" fill="#b45309">x_k = k·i</text>
      <text x="305" y="114" font-size="11" font-weight="bold" fill="#059669">O (k=0)</text>
      <text x="175" y="168" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1">↔ Khoảng cách hai khe tới màn: D</text>
      <text x="177" y="198" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#be123c">Khoảng vân: i = λD / a  ⇒  λ = ia / D</text>
    </g>
  </svg>`,

  13: `<svg viewBox="0 0 800 300" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="300" rx="16" fill="#f0f9ff" stroke="#bae6fd" stroke-width="2"/>
    <text x="400" y="30" text-anchor="middle" font-size="15" font-weight="800" fill="#0c4a6e">BÀI 13: SÓNG DỪNG TRÊN DÂY HAI ĐẦU CỐ ĐỊNH &amp; MỘT ĐẦU CỐ ĐỊNH – MỘT ĐẦU TỰ DO</text>
    <g transform="translate(30, 52)">
      <rect width="355" height="220" rx="12" fill="#fff" stroke="#38bdf8" stroke-width="2"/>
      <text x="177" y="26" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#0284c7">1. Hai đầu cố định: L = n·(λ/2)</text>
      <path d="M 35 105 Q 82 45, 130 105 T 225 105 T 320 105" fill="none" stroke="#0284c7" stroke-width="3"/>
      <path d="M 35 105 Q 82 165, 130 105 T 225 105 T 320 105" fill="none" stroke="#0284c7" stroke-width="2.5" stroke-dasharray="5 3"/>
      <circle cx="35" cy="105" r="5" fill="#e11d48"/><circle cx="130" cy="105" r="5" fill="#e11d48"/><circle cx="225" cy="105" r="5" fill="#e11d48"/><circle cx="320" cy="105" r="5" fill="#e11d48"/>
      <text x="82" y="109" text-anchor="middle" font-size="10" font-weight="bold" fill="#059669">Bụng</text>
      <text x="130" y="132" text-anchor="middle" font-size="10" font-weight="bold" fill="#e11d48">Nút</text>
      <text x="177" y="168" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0c4a6e">Số bụng = n ; Số nút = n + 1 (n = 1, 2, 3...)</text>
      <text x="177" y="192" text-anchor="middle" font-size="11" fill="#475569">Hai nút liên tiếp cách nhau λ/2</text>
    </g>
    <g transform="translate(415, 52)">
      <rect width="355" height="220" rx="12" fill="#fff" stroke="#38bdf8" stroke-width="2"/>
      <text x="177" y="26" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#0284c7">2. Một cố định – Một tự do: L = (2n+1)·λ/4</text>
      <path d="M 45 105 Q 105 45, 165 105 Q 225 165, 285 105 Q 315 75, 330 65" fill="none" stroke="#0284c7" stroke-width="3"/>
      <path d="M 45 105 Q 105 165, 165 105 Q 225 45, 285 105 Q 315 135, 330 145" fill="none" stroke="#0284c7" stroke-width="2.5" stroke-dasharray="5 3"/>
      <circle cx="45" cy="105" r="5" fill="#e11d48"/><text x="45" y="132" text-anchor="middle" font-size="10" font-weight="bold" fill="#e11d48">Nút</text>
      <circle cx="330" cy="65" r="5" fill="#059669"/><text x="315" y="52" font-size="10" font-weight="bold" fill="#059669">Bụng tự do</text>
      <text x="177" y="168" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0c4a6e">Số bụng = Số nút = n + 1 (n = 0, 1, 2...)</text>
      <text x="177" y="192" text-anchor="middle" font-size="11" fill="#475569">Nút và bụng kề nhau cách nhau λ/4</text>
    </g>
  </svg>`,

  14: `<svg viewBox="0 0 800 300" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="300" rx="16" fill="#f0f9ff" stroke="#bae6fd" stroke-width="2"/>
    <text x="400" y="30" text-anchor="middle" font-size="15" font-weight="800" fill="#0c4a6e">BÀI 14: TỔNG HỢP PHƯƠNG PHÁP GIẢI BÀI TẬP CHƯƠNG SÓNG</text>
    <g transform="translate(30, 55)">
      <rect width="230" height="215" rx="12" fill="#fff" stroke="#38bdf8" stroke-width="2"/>
      <text x="115" y="28" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#0284c7">1. Đại lượng Truyền sóng</text>
      <text x="115" y="62" text-anchor="middle" font-size="11.5" fill="#334155">• λ = v·T = v/f</text>
      <text x="115" y="90" text-anchor="middle" font-size="11.5" fill="#334155">• Δφ = 2π·Δx / λ</text>
      <text x="115" y="118" text-anchor="middle" font-size="11.5" fill="#334155">• v_truyền ≠ v_phần tử (ωA)</text>
      <rect x="18" y="148" width="194" height="44" rx="8" fill="#e0f2fe"/>
      <text x="115" y="174" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1">N đỉnh sóng liên tiếp: (N−1)λ</text>
    </g>
    <g transform="translate(285, 55)">
      <rect width="230" height="215" rx="12" fill="#fff" stroke="#38bdf8" stroke-width="2"/>
      <text x="115" y="28" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#0284c7">2. Giao thoa Sóng &amp; Young</text>
      <text x="115" y="62" text-anchor="middle" font-size="11.5" fill="#334155">• Cực đại: Δd = kλ</text>
      <text x="115" y="90" text-anchor="middle" font-size="11.5" fill="#334155">• Cực tiểu: Δd = (k+0,5)λ</text>
      <text x="115" y="118" text-anchor="middle" font-size="11.5" fill="#334155">• Khoảng vân: i = λD / a</text>
      <rect x="18" y="148" width="194" height="44" rx="8" fill="#e0f2fe"/>
      <text x="115" y="174" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1">x_sáng = ki ; x_tối = (k+0,5)i</text>
    </g>
    <g transform="translate(540, 55)">
      <rect width="230" height="215" rx="12" fill="#fff" stroke="#38bdf8" stroke-width="2"/>
      <text x="115" y="28" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#0284c7">3. Sóng dừng Dây &amp; Ống khí</text>
      <text x="115" y="62" text-anchor="middle" font-size="11.5" fill="#334155">• 2 đầu cố định: L = n·λ/2</text>
      <text x="115" y="90" text-anchor="middle" font-size="11.5" fill="#334155">• 1 cố định-1 tự do: (2n+1)λ/4</text>
      <text x="115" y="118" text-anchor="middle" font-size="11.5" fill="#334155">• Nút-Nút: λ/2 ; Nút-Bụng: λ/4</text>
      <rect x="18" y="148" width="194" height="44" rx="8" fill="#e0f2fe"/>
      <text x="115" y="174" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1">f_1 = v / (2L) (Mode cơ bản)</text>
    </g>
  </svg>`,

  15: `<svg viewBox="0 0 800 300" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="300" rx="16" fill="#f0f9ff" stroke="#bae6fd" stroke-width="2"/>
    <text x="400" y="30" text-anchor="middle" font-size="15" font-weight="800" fill="#0c4a6e">BÀI 15: THỰC HÀNH ĐO TỐC ĐỘ TRUYỀN ÂM BẰNG ỐNG CỘNG HƯỞNG PÍT-TÔNG</text>
    <g transform="translate(45, 55)">
      <rect width="710" height="215" rx="12" fill="#fff" stroke="#38bdf8" stroke-width="2"/>
      <!-- Tube -->
      <rect x="110" y="55" width="480" height="65" fill="#f8fafc" stroke="#0284c7" stroke-width="2.5"/>
      <!-- Speaker at left open end -->
      <rect x="55" y="65" width="45" height="45" rx="6" fill="#0369a1"/>
      <text x="77" y="92" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Loa f</text>
      <!-- Piston position 1 -->
      <line x1="240" y1="55" x2="240" y2="120" stroke="#e11d48" stroke-width="4" stroke-dasharray="5 3"/>
      <text x="240" y="45" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#e11d48">Vị trí l₁ (Âm to lần 1)</text>
      <!-- Piston position 2 -->
      <rect x="460" y="55" width="16" height="65" fill="#0f172a"/>
      <line x1="476" y1="87" x2="590" y2="87" stroke="#0f172a" stroke-width="4"/>
      <text x="468" y="45" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0f172a">Vị trí l₂ (Âm to lần 2)</text>
      <!-- Standing wave inside -->
      <path d="M 110 62 Q 175 87, 240 87 Q 350 87, 460 87" fill="none" stroke="#0284c7" stroke-width="2"/>
      <!-- Distance d = l2 - l1 = lambda/2 -->
      <line x1="240" y1="142" x2="460" y2="142" stroke="#059669" stroke-width="2.5"/>
      <text x="350" y="162" text-anchor="middle" font-size="13" font-weight="bold" fill="#059669">d = l₂ − l₁ = λ / 2  ⇒  λ = 2(l₂ − l₁)</text>
      <text x="355" y="192" text-anchor="middle" font-size="13.5" font-weight="800" fill="#be123c">Công thức tính tốc độ âm: v = λ·f = 2·(l₂ − l₁)·f  (≈ 340 m/s trong không khí)</text>
    </g>
  </svg>`,

  16: `<svg viewBox="0 0 800 300" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="300" rx="16" fill="#fffbeb" stroke="#fde68a" stroke-width="2"/>
    <text x="400" y="30" text-anchor="middle" font-size="15" font-weight="800" fill="#92400e">BÀI 16: ĐỊNH LUẬT COULOMB – LỰC TƯƠNG TÁC GIỮA HAI ĐIỆN TÍCH ĐIỂM F = k|q₁q₂| / (ε·r²)</text>
    <g transform="translate(35, 52)">
      <rect width="350" height="220" rx="12" fill="#fff" stroke="#f59e0b" stroke-width="2"/>
      <text x="175" y="28" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#b45309">1. Hai điện tích cùng dấu (q₁·q₂ &gt; 0): ĐẨY NHAU</text>
      <line x1="35" y1="105" x2="315" y2="105" stroke="#94a3b8" stroke-dasharray="4 3"/>
      <circle cx="110" cy="105" r="18" fill="#ef4444"/><text x="110" y="110" text-anchor="middle" font-size="13" font-weight="bold" fill="#fff">+q₁</text>
      <circle cx="240" cy="105" r="18" fill="#ef4444"/><text x="240" y="110" text-anchor="middle" font-size="13" font-weight="bold" fill="#fff">+q₂</text>
      <line x1="92" y1="105" x2="40" y2="105" stroke="#b91c1c" stroke-width="3"/><text x="58" y="92" font-size="11" font-weight="bold" fill="#b91c1c">F₂₁</text>
      <line x1="258" y1="105" x2="310" y2="105" stroke="#b91c1c" stroke-width="3"/><text x="285" y="92" font-size="11" font-weight="bold" fill="#b91c1c">F₁₂</text>
      <text x="175" y="155" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#334155">↔ Khoảng cách r (m)</text>
      <text x="175" y="190" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#92400e">r tăng 2 lần ⇒ F giảm 4 lần</text>
    </g>
    <g transform="translate(415, 52)">
      <rect width="350" height="220" rx="12" fill="#fff" stroke="#f59e0b" stroke-width="2"/>
      <text x="175" y="28" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#b45309">2. Hai điện tích trái dấu (q₁·q₂ &lt; 0): HÚT NHAU</text>
      <line x1="35" y1="105" x2="315" y2="105" stroke="#94a3b8" stroke-dasharray="4 3"/>
      <circle cx="95" cy="105" r="18" fill="#ef4444"/><text x="95" y="110" text-anchor="middle" font-size="13" font-weight="bold" fill="#fff">+q₁</text>
      <circle cx="255" cy="105" r="18" fill="#2563eb"/><text x="255" y="110" text-anchor="middle" font-size="13" font-weight="bold" fill="#fff">-q₂</text>
      <line x1="113" y1="105" x2="160" y2="105" stroke="#059669" stroke-width="3"/><text x="140" y="92" font-size="11" font-weight="bold" fill="#059669">F₂₁</text>
      <line x1="237" y1="105" x2="190" y2="105" stroke="#059669" stroke-width="3"/><text x="210" y="92" font-size="11" font-weight="bold" fill="#059669">F₁₂</text>
      <text x="175" y="155" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#334155">F₁₂ = F₂₁ = k·|q₁q₂| / (ε·r²)</text>
      <text x="175" y="190" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#92400e">k = 9×10⁹ N·m²/C² (Chân không ε = 1)</text>
    </g>
  </svg>`,

  17: `<svg viewBox="0 0 800 300" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="300" rx="16" fill="#fffbeb" stroke="#fde68a" stroke-width="2"/>
    <text x="400" y="30" text-anchor="middle" font-size="15" font-weight="800" fill="#92400e">BÀI 17: VECTƠ CƯỜNG ĐỘ ĐIỆN TRƯỜNG E = k|Q|/r² &amp; ĐƯỜNG SỨC ĐIỆN</text>
    <g transform="translate(35, 52)">
      <rect width="350" height="220" rx="12" fill="#fff" stroke="#f59e0b" stroke-width="2"/>
      <text x="175" y="28" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#b45309">1. Điện tích dương (Q &gt; 0): Đường sức đi ra xa Q</text>
      <circle cx="135" cy="115" r="20" fill="#ef4444"/><text x="135" y="120" text-anchor="middle" font-size="13" font-weight="bold" fill="#fff">+Q</text>
      <line x1="155" y1="115" x2="295" y2="115" stroke="#ef4444" stroke-width="2.5"/>
      <line x1="135" y1="95" x2="135" y2="45" stroke="#ef4444" stroke-width="2"/>
      <line x1="135" y1="135" x2="135" y2="185" stroke="#ef4444" stroke-width="2"/>
      <line x1="115" y1="115" x2="55" y2="115" stroke="#ef4444" stroke-width="2"/>
      <circle cx="235" cy="115" r="5" fill="#1e293b"/><text x="235" y="102" font-size="12" font-weight="bold" fill="#1e293b">M</text>
      <text x="275" y="102" font-size="12" font-weight="bold" fill="#b91c1c">E_M ➔</text>
      <text x="175" y="202" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#92400e">Q &gt; 0: Vectơ E hướng ra xa Q</text>
    </g>
    <g transform="translate(415, 52)">
      <rect width="350" height="220" rx="12" fill="#fff" stroke="#f59e0b" stroke-width="2"/>
      <text x="175" y="28" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#b45309">2. Điện tích âm (Q &lt; 0): Đường sức hướng vào Q</text>
      <circle cx="135" cy="115" r="20" fill="#2563eb"/><text x="135" y="120" text-anchor="middle" font-size="13" font-weight="bold" fill="#fff">-Q</text>
      <line x1="155" y1="115" x2="295" y2="115" stroke="#2563eb" stroke-width="2.5"/>
      <line x1="135" y1="95" x2="135" y2="45" stroke="#2563eb" stroke-width="2"/>
      <line x1="135" y1="135" x2="135" y2="185" stroke="#2563eb" stroke-width="2"/>
      <line x1="115" y1="115" x2="55" y2="115" stroke="#2563eb" stroke-width="2"/>
      <circle cx="245" cy="115" r="5" fill="#1e293b"/><text x="245" y="102" font-size="12" font-weight="bold" fill="#1e293b">M</text>
      <text x="195" y="102" font-size="12" font-weight="bold" fill="#1d4ed8">⬅ E_M</text>
      <text x="175" y="202" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#1e40af">Q &lt; 0: Vectơ E hướng về phía Q</text>
    </g>
  </svg>`,

  18: `<svg viewBox="0 0 800 300" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="300" rx="16" fill="#fffbeb" stroke="#fde68a" stroke-width="2"/>
    <text x="400" y="30" text-anchor="middle" font-size="15" font-weight="800" fill="#92400e">BÀI 18: ĐIỆN TRƯỜNG ĐỀU GIỮA HAI BẢN PHẲNG (E = U/d) &amp; QUỸ ĐẠO PARABOL CỦA ĐIỆN TÍCH</text>
    <g transform="translate(50, 50)">
      <rect width="700" height="225" rx="12" fill="#fff" stroke="#f59e0b" stroke-width="2"/>
      <!-- Top positive plate -->
      <rect x="120" y="35" width="440" height="16" rx="4" fill="#ef4444"/>
      <text x="340" y="26" text-anchor="middle" font-size="12" font-weight="bold" fill="#b91c1c">Bản tích điện Dương (+ + + + + + + +)</text>
      <!-- Bottom negative plate -->
      <rect x="120" y="175" width="440" height="16" rx="4" fill="#2563eb"/>
      <text x="340" y="210" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">Bản tích điện Âm (− − − − − − − −)</text>
      <!-- Uniform field lines downward -->
      <g stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 3">
        <line x1="160" y1="51" x2="160" y2="175"/><line x1="250" y1="51" x2="250" y2="175"/><line x1="340" y1="51" x2="340" y2="175"/><line x1="430" y1="51" x2="430" y2="175"/><line x1="520" y1="51" x2="520" y2="175"/>
      </g>
      <!-- Parabolic trajectory of electron (q < 0) curving upward toward + plate -->
      <circle cx="110" cy="115" r="7" fill="#059669"/>
      <text x="72" y="119" font-size="12" font-weight="bold" fill="#059669">q &lt; 0 (v₀)</text>
      <path d="M 110 115 Q 290 115, 460 55" fill="none" stroke="#059669" stroke-width="3.5"/>
      <text x="415" y="102" font-size="12" font-weight="bold" fill="#059669">Quỹ đạo Parabol (a = |q|E/m)</text>
      <text x="625" y="115" text-anchor="middle" font-size="13" font-weight="bold" fill="#b45309">E = U / d (V/m)</text>
    </g>
  </svg>`,

  19: `<svg viewBox="0 0 800 300" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="300" rx="16" fill="#fffbeb" stroke="#fde68a" stroke-width="2"/>
    <text x="400" y="30" text-anchor="middle" font-size="15" font-weight="800" fill="#92400e">BÀI 19: CÔNG CỦA LỰC ĐIỆN TRƯỜNG ĐỀU A_MN = qEd = W_tM − W_tN (KHÔNG PHỤ THUỘC ĐƯỜNG ĐI)</text>
    <g transform="translate(50, 50)">
      <rect width="700" height="225" rx="12" fill="#fff" stroke="#f59e0b" stroke-width="2"/>
      <!-- Field lines left to right -->
      <g stroke="#fbbf24" stroke-width="2">
        <line x1="60" y1="55" x2="640" y2="55"/><line x1="60" y1="110" x2="640" y2="110"/><line x1="60" y1="165" x2="640" y2="165"/>
      </g>
      <text x="615" y="45" font-size="12" font-weight="bold" fill="#b45309">Chiều đường sức E ➔</text>
      <!-- Points M, N, H -->
      <circle cx="170" cy="145" r="6" fill="#e11d48"/><text x="155" y="165" font-size="13" font-weight="bold" fill="#e11d48">M</text>
      <circle cx="470" cy="65" r="6" fill="#0284c7"/><text x="470" y="50" font-size="13" font-weight="bold" fill="#0284c7">N</text>
      <circle cx="470" cy="145" r="5" fill="#475569"/><text x="485" y="152" font-size="12" font-weight="bold" fill="#475569">H</text>
      <line x1="170" y1="145" x2="470" y2="65" stroke="#e11d48" stroke-width="3"/>
      <path d="M 170 145 Q 280 30, 470 65" fill="none" stroke="#059669" stroke-width="2.5" stroke-dasharray="6 4"/>
      <line x1="470" y1="65" x2="470" y2="145" stroke="#475569" stroke-dasharray="4 3"/>
      <line x1="170" y1="145" x2="470" y2="145" stroke="#1e293b" stroke-width="2.5"/>
      <text x="320" y="165" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1e293b">Hình chiếu dọc đường sức: d = MH = s·cos α</text>
      <text x="350" y="202" text-anchor="middle" font-size="13" font-weight="bold" fill="#92400e">A_MN = q·E·d = W_tM − W_tN (Chỉ phụ thuộc điểm đầu M và điểm cuối N)</text>
    </g>
  </svg>`,

  20: `<svg viewBox="0 0 800 300" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="300" rx="16" fill="#fffbeb" stroke="#fde68a" stroke-width="2"/>
    <text x="400" y="30" text-anchor="middle" font-size="15" font-weight="800" fill="#92400e">BÀI 20: ĐIỆN THẾ V = W_t/q, HIỆU ĐIỆN THẾ U_MN = V_M − V_N &amp; LIÊN HỆ A_MN = q·U_MN</text>
    <g transform="translate(35, 55)">
      <rect width="230" height="215" rx="12" fill="#fff" stroke="#f59e0b" stroke-width="2"/>
      <text x="115" y="30" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#b45309">1. Điện thế tại điểm M</text>
      <text x="115" y="70" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">V_M = W_tM / q = A_M∞ / q</text>
      <text x="115" y="102" text-anchor="middle" font-size="11" fill="#475569">• Đại lượng vô hướng (V)</text>
      <text x="115" y="126" text-anchor="middle" font-size="11" fill="#475569">• Phụ thuộc mốc chọn (đất/∞)</text>
      <rect x="18" y="152" width="194" height="42" rx="8" fill="#fef3c7"/>
      <text x="115" y="177" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#92400e">Thế năng: W_tM = q·V_M</text>
    </g>
    <g transform="translate(285, 55)">
      <rect width="230" height="215" rx="12" fill="#fff" stroke="#f59e0b" stroke-width="2"/>
      <text x="115" y="30" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#b45309">2. Hiệu điện thế U_MN</text>
      <text x="115" y="70" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">U_MN = V_M − V_N</text>
      <text x="115" y="102" text-anchor="middle" font-size="11" fill="#475569">• Không phụ thuộc mốc chọn</text>
      <text x="115" y="126" text-anchor="middle" font-size="11" fill="#475569">• Đơn vị: 1 V = 1 J / C</text>
      <rect x="18" y="152" width="194" height="42" rx="8" fill="#fef3c7"/>
      <text x="115" y="177" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#be123c">Công: A_MN = q·U_MN</text>
    </g>
    <g transform="translate(535, 55)">
      <rect width="230" height="215" rx="12" fill="#fff" stroke="#f59e0b" stroke-width="2"/>
      <text x="115" y="30" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#b45309">3. Liên hệ E và U</text>
      <text x="115" y="70" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">E = U_MN / d  (V/m)</text>
      <text x="115" y="102" text-anchor="middle" font-size="11" fill="#475569">• Điện thế giảm dần theo</text>
      <text x="115" y="124" text-anchor="middle" font-size="11" fill="#475569">chiều đường sức điện</text>
      <rect x="18" y="152" width="194" height="42" rx="8" fill="#fef3c7"/>
      <text x="115" y="177" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#047857">E hướng từ V cao → V thấp</text>
    </g>
  </svg>`,

  21: `<svg viewBox="0 0 800 300" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="300" rx="16" fill="#fffbeb" stroke="#fde68a" stroke-width="2"/>
    <text x="400" y="30" text-anchor="middle" font-size="15" font-weight="800" fill="#92400e">BÀI 21: TỤ ĐIỆN (Q = CU), GHÉP TỤ NỐI TIẾP – SONG SONG &amp; NĂNG LƯỢNG W = ½CU²</text>
    <g transform="translate(30, 52)">
      <rect width="235" height="220" rx="12" fill="#fff" stroke="#f59e0b" stroke-width="2"/>
      <text x="117" y="28" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#b45309">1. Ghép Nối tiếp (C₁ nt C₂)</text>
      <line x1="25" y1="80" x2="75" y2="80" stroke="#1e293b" stroke-width="2.5"/>
      <line x1="75" y1="60" x2="75" y2="100" stroke="#e11d48" stroke-width="3.5"/>
      <line x1="87" y1="60" x2="87" y2="100" stroke="#2563eb" stroke-width="3.5"/>
      <line x1="87" y1="80" x2="145" y2="80" stroke="#1e293b" stroke-width="2.5"/>
      <line x1="145" y1="60" x2="145" y2="100" stroke="#e11d48" stroke-width="3.5"/>
      <line x1="157" y1="60" x2="157" y2="100" stroke="#2563eb" stroke-width="3.5"/>
      <line x1="157" y1="80" x2="210" y2="80" stroke="#1e293b" stroke-width="2.5"/>
      <text x="117" y="132" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#334155">• Q = Q₁ = Q₂ ; U = U₁ + U₂</text>
      <text x="117" y="160" text-anchor="middle" font-size="12" font-weight="bold" fill="#be123c">1/C_bộ = 1/C₁ + 1/C₂</text>
      <text x="117" y="192" text-anchor="middle" font-size="10.5" fill="#475569">Điện dung tương đương giảm</text>
    </g>
    <g transform="translate(282, 52)">
      <rect width="235" height="220" rx="12" fill="#fff" stroke="#f59e0b" stroke-width="2"/>
      <text x="117" y="28" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#b45309">2. Ghép Song song (C₁ ∥ C₂)</text>
      <line x1="55" y1="62" x2="110" y2="62" stroke="#1e293b" stroke-width="2"/>
      <line x1="110" y1="48" x2="110" y2="76" stroke="#e11d48" stroke-width="3.5"/>
      <line x1="122" y1="48" x2="122" y2="76" stroke="#2563eb" stroke-width="3.5"/>
      <line x1="122" y1="62" x2="180" y2="62" stroke="#1e293b" stroke-width="2"/>
      <line x1="55" y1="98" x2="110" y2="98" stroke="#1e293b" stroke-width="2"/>
      <line x1="110" y1="84" x2="110" y2="112" stroke="#e11d48" stroke-width="3.5"/>
      <line x1="122" y1="84" x2="122" y2="112" stroke="#2563eb" stroke-width="3.5"/>
      <line x1="122" y1="98" x2="180" y2="98" stroke="#1e293b" stroke-width="2"/>
      <line x1="55" y1="62" x2="55" y2="98" stroke="#1e293b" stroke-width="2"/>
      <line x1="180" y1="62" x2="180" y2="98" stroke="#1e293b" stroke-width="2"/>
      <text x="117" y="138" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#334155">• U = U₁ = U₂ ; Q = Q₁ + Q₂</text>
      <text x="117" y="165" text-anchor="middle" font-size="12" font-weight="bold" fill="#047857">C_bộ = C₁ + C₂</text>
      <text x="117" y="192" text-anchor="middle" font-size="10.5" fill="#475569">Điện dung tương đương tăng</text>
    </g>
    <g transform="translate(535, 52)">
      <rect width="235" height="220" rx="12" fill="#fff" stroke="#f59e0b" stroke-width="2"/>
      <text x="117" y="28" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#b45309">3. Năng lượng Điện trường</text>
      <text x="117" y="72" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">W = ½QU = ½CU² = Q²/(2C)</text>
      <text x="117" y="105" text-anchor="middle" font-size="11" fill="#475569">• 1 μF = 10⁻⁶ F</text>
      <text x="117" y="128" text-anchor="middle" font-size="11" fill="#475569">• 1 nF = 10⁻⁹ F ; 1 pF = 10⁻¹² F</text>
      <rect x="16" y="152" width="203" height="46" rx="8" fill="#fef2f2"/>
      <text x="117" y="179" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#b91c1c">An toàn: Phải xả tụ trước khi chạm!</text>
    </g>
  </svg>`,

  22: `<svg viewBox="0 0 800 300" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="300" rx="16" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="2"/>
    <text x="400" y="30" text-anchor="middle" font-size="15" font-weight="800" fill="#065f46">BÀI 22: CƯỜNG ĐỘ DÒNG ĐIỆN I = Δq/Δt &amp; TỐC ĐỘ TRÔI ELECTRON TRONG KIM LOẠI I = n·S·v·e</text>
    <g transform="translate(45, 52)">
      <rect width="710" height="220" rx="12" fill="#fff" stroke="#34d399" stroke-width="2"/>
      <!-- Wire cylinder -->
      <rect x="110" y="55" width="480" height="80" rx="12" fill="#f1f5f9" stroke="#059669" stroke-width="2.5"/>
      <ellipse cx="110" cy="95" rx="16" ry="40" fill="#cbd5e1" stroke="#059669" stroke-width="2"/>
      <ellipse cx="590" cy="95" rx="16" ry="40" fill="#e2e8f0" stroke="#059669" stroke-width="2"/>
      <!-- Electrons moving left, Current I right -->
      <circle cx="200" cy="80" r="8" fill="#2563eb"/><text x="200" y="84" text-anchor="middle" font-size="10" font-weight="bold" fill="#fff">e⁻</text>
      <line x1="190" y1="80" x2="155" y2="80" stroke="#2563eb" stroke-width="2.5"/>
      <circle cx="340" cy="108" r="8" fill="#2563eb"/><text x="340" y="112" text-anchor="middle" font-size="10" font-weight="bold" fill="#fff">e⁻</text>
      <line x1="330" y1="108" x2="295" y2="108" stroke="#2563eb" stroke-width="2.5"/>
      <circle cx="480" cy="82" r="8" fill="#2563eb"/><text x="480" y="86" text-anchor="middle" font-size="10" font-weight="bold" fill="#fff">e⁻</text>
      <line x1="470" y1="82" x2="435" y2="82" stroke="#2563eb" stroke-width="2.5"/>
      <text x="350" y="42" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#e11d48">Chiều quy ước dòng điện I và điện trường E  ➔</text>
      <text x="350" y="162" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1d4ed8">⬅ Chiều dịch chuyển có hướng của electron tự do (tốc độ trôi v)</text>
      <text x="355" y="195" text-anchor="middle" font-size="13" font-weight="800" fill="#065f46">I = Δq / Δt = n · S · v · e   |   1 Ah = 3 600 C  ;  1 mAh = 3,6 C</text>
    </g>
  </svg>`,

  23: `<svg viewBox="0 0 800 300" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="300" rx="16" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="2"/>
    <text x="400" y="30" text-anchor="middle" font-size="15" font-weight="800" fill="#065f46">BÀI 23: ĐƯỜNG ĐẶC TRƯNG VÔN – AMPE (I = U/R), DÂY TÓC ĐÈN &amp; NHIỆT ĐIỆN TRỞ NTC / PTC</text>
    <g transform="translate(30, 52)">
      <rect width="355" height="220" rx="12" fill="#fff" stroke="#34d399" stroke-width="2"/>
      <text x="177" y="26" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#047857">1. Đặc trưng I–U: Điện trở thuần vs Đèn sợi đốt</text>
      <line x1="40" y1="185" x2="325" y2="185" stroke="#334155" stroke-width="1.5"/>
      <line x1="40" y1="40" x2="40" y2="190" stroke="#334155" stroke-width="1.5"/>
      <!-- Ohmic resistor R1 (steeper -> smaller R) -->
      <line x1="40" y1="185" x2="220" y2="48" stroke="#059669" stroke-width="3"/>
      <text x="200" y="45" font-size="11" font-weight="bold" fill="#059669">Vật dẫn R = const</text>
      <!-- Filament lamp (curves down because R increases with T) -->
      <path d="M 40 185 Q 140 105, 305 95" fill="none" stroke="#e11d48" stroke-width="3"/>
      <text x="255" y="118" font-size="11" font-weight="bold" fill="#e11d48">Dây tóc bóng đèn (T↑ ⇒ R↑)</text>
      <text x="25" y="50" font-size="11" font-weight="bold" fill="#334155">I</text>
      <text x="315" y="202" font-size="11" font-weight="bold" fill="#334155">U</text>
    </g>
    <g transform="translate(415, 52)">
      <rect width="355" height="220" rx="12" fill="#fff" stroke="#34d399" stroke-width="2"/>
      <text x="177" y="26" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#047857">2. Phụ thuộc hình học &amp; Nhiệt độ</text>
      <text x="177" y="65" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">R = ρ · l / S   (Ω)</text>
      <text x="177" y="98" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#0f766e">R = R₀ · [1 + α(t − t₀)]</text>
      <text x="177" y="132" text-anchor="middle" font-size="11" fill="#334155">• Kim loại &amp; PTC: Nhiệt độ tăng ⇒ R tăng</text>
      <text x="177" y="156" text-anchor="middle" font-size="11" fill="#334155">• Nhiệt điện trở NTC: Nhiệt độ tăng ⇒ R giảm</text>
      <rect x="22" y="172" width="311" height="32" rx="6" fill="#d1fae5"/>
      <text x="177" y="192" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">Siêu dẫn: Khi T &lt; T_c thì điện trở R = 0</text>
    </g>
  </svg>`,

  24: `<svg viewBox="0 0 800 300" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="300" rx="16" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="2"/>
    <text x="400" y="30" text-anchor="middle" font-size="15" font-weight="800" fill="#065f46">BÀI 24: NGUỒN ĐIỆN (E, r) &amp; ĐỊNH LUẬT OHM ĐỐI VỚI TOÀN MẠCH I = E / (R + r)</text>
    <g transform="translate(45, 52)">
      <rect width="710" height="220" rx="12" fill="#fff" stroke="#34d399" stroke-width="2"/>
      <!-- Circuit loop -->
      <rect x="85" y="45" width="260" height="130" fill="none" stroke="#1e293b" stroke-width="2.5"/>
      <!-- Source E, r at top -->
      <rect x="165" y="25" width="100" height="40" rx="6" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
      <line x1="205" y1="32" x2="205" y2="58" stroke="#e11d48" stroke-width="3.5"/>
      <line x1="217" y1="38" x2="217" y2="52" stroke="#1e293b" stroke-width="4"/>
      <text x="215" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">Nguồn (E, r)</text>
      <!-- External resistor R at bottom -->
      <rect x="165" y="160" width="100" height="30" fill="#fff" stroke="#1e293b" stroke-width="2.5"/>
      <text x="215" y="180" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">Tải ngoài R</text>
      <!-- Formulas on right -->
      <text x="520" y="62" text-anchor="middle" font-size="13" font-weight="bold" fill="#065f46">1. Suất điện động: E = A_lạ / q</text>
      <text x="520" y="96" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#be123c">2. Định luật Ohm toàn mạch: I = E / (R + r)</text>
      <text x="520" y="130" text-anchor="middle" font-size="13" font-weight="bold" fill="#1d4ed8">3. Hiệu điện thế hai cực: U = I·R = E − I·r</text>
      <rect x="380" y="152" width="280" height="42" rx="8" fill="#fef2f2" stroke="#fca5a5"/>
      <text x="520" y="177" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#b91c1c">Đoản mạch (R ≈ 0): I_max = E / r (Nguy cơ cháy nổ!)</text>
    </g>
  </svg>`,

  25: `<svg viewBox="0 0 800 300" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="300" rx="16" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="2"/>
    <text x="400" y="30" text-anchor="middle" font-size="15" font-weight="800" fill="#065f46">BÀI 25: NĂNG LƯỢNG ĐIỆN (A = UIt), CÔNG SUẤT ĐIỆN (P = UI) &amp; ĐỊNH LUẬT JOULE – LENZ</text>
    <g transform="translate(30, 55)">
      <rect width="230" height="215" rx="12" fill="#fff" stroke="#34d399" stroke-width="2"/>
      <text x="115" y="28" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#047857">1. Đoạn mạch bất kì</text>
      <text x="115" y="65" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">A = W = qU = U·I·t  (J)</text>
      <text x="115" y="100" text-anchor="middle" font-size="13" font-weight="bold" fill="#0284c7">P = A / t = U · I  (W)</text>
      <rect x="18" y="135" width="194" height="58" rx="8" fill="#ecfdf5"/>
      <text x="115" y="160" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#065f46">1 số điện = 1 kWh</text>
      <text x="115" y="180" text-anchor="middle" font-size="11" font-weight="bold" fill="#047857">= 3 600 000 J = 3,6×10⁶ J</text>
    </g>
    <g transform="translate(285, 55)">
      <rect width="230" height="215" rx="12" fill="#fff" stroke="#34d399" stroke-width="2"/>
      <text x="115" y="28" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#047857">2. Thuần điện trở R (Joule)</text>
      <text x="115" y="65" text-anchor="middle" font-size="13" font-weight="bold" fill="#be123c">Q = I²·R·t = (U²/R)·t</text>
      <text x="115" y="100" text-anchor="middle" font-size="13" font-weight="bold" fill="#be123c">P = I²·R = U² / R</text>
      <rect x="18" y="135" width="194" height="58" rx="8" fill="#fff1f2"/>
      <text x="115" y="160" text-anchor="middle" font-size="11" font-weight="bold" fill="#9f1239">Từ nhãn (U_đm − P_đm):</text>
      <text x="115" y="180" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#be123c">R = U_đm² / P_đm</text>
    </g>
    <g transform="translate(540, 55)">
      <rect width="230" height="215" rx="12" fill="#fff" stroke="#34d399" stroke-width="2"/>
      <text x="115" y="28" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#047857">3. Nguồn điện &amp; Hiệu suất</text>
      <text x="115" y="65" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">A_ng = E·I·t ; P_ng = E·I</text>
      <text x="115" y="100" text-anchor="middle" font-size="13" font-weight="bold" fill="#059669">H = U / E = R / (R + r)</text>
      <rect x="18" y="135" width="194" height="58" rx="8" fill="#ecfdf5"/>
      <text x="115" y="160" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">Đèn LED tiết kiệm điện</text>
      <text x="115" y="180" text-anchor="middle" font-size="10.5" fill="#047857">hơn đèn sợi đốt 6–8 lần</text>
    </g>
  </svg>`,

  26: `<svg viewBox="0 0 800 300" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="300" rx="16" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="2"/>
    <text x="400" y="30" text-anchor="middle" font-size="15" font-weight="800" fill="#065f46">BÀI 26: THỰC HÀNH ĐO SUẤT ĐIỆN ĐỘNG E VÀ ĐIỆN TRỞ TRONG r CỦA PIN ĐIỆN HÓA</text>
    <!-- Left: Circuit setup -->
    <g transform="translate(30, 52)">
      <rect width="355" height="220" rx="12" fill="#fff" stroke="#34d399" stroke-width="2"/>
      <text x="177" y="26" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#047857">1. Sơ đồ mắc Vôn kế &amp; Ampe kế</text>
      <text x="177" y="65" text-anchor="middle" font-size="11.5" fill="#334155">• Vôn kế mắc SONG SONG hai cực pin</text>
      <text x="177" y="92" text-anchor="middle" font-size="11.5" fill="#334155">• Ampe kế mắc NỐI TIẾP với biến trở R</text>
      <text x="177" y="119" text-anchor="middle" font-size="11.5" fill="#334155">• Có điện trở bảo vệ R₀ và khóa K</text>
      <rect x="20" y="145" width="315" height="52" rx="8" fill="#fef2f2"/>
      <text x="177" y="168" text-anchor="middle" font-size="11" font-weight="bold" fill="#b91c1c">An toàn: Ngắt khóa K ngay sau mỗi lần đọc!</text>
      <text x="177" y="186" text-anchor="middle" font-size="10.5" fill="#991b1b">Pin cũ có nội trở r lớn hơn rất nhiều pin mới</text>
    </g>
    <!-- Right: Linear graph U = E - rI -->
    <g transform="translate(415, 52)">
      <rect width="355" height="220" rx="12" fill="#fff" stroke="#34d399" stroke-width="2"/>
      <text x="177" y="26" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#047857">2. Đồ thị thực nghiệm U = E − r·I</text>
      <line x1="50" y1="185" x2="325" y2="185" stroke="#334155" stroke-width="1.5"/>
      <line x1="50" y1="38" x2="50" y2="195" stroke="#334155" stroke-width="1.5"/>
      <!-- New battery line -->
      <line x1="50" y1="60" x2="295" y2="125" stroke="#059669" stroke-width="3"/>
      <circle cx="50" cy="60" r="5" fill="#e11d48"/>
      <text x="30" y="64" font-size="12" font-weight="bold" fill="#e11d48">E</text>
      <text x="235" y="95" font-size="11" font-weight="bold" fill="#059669">Pin mới (r nhỏ, ít dốc)</text>
      <!-- Old battery line (steeper) -->
      <line x1="50" y1="72" x2="210" y2="180" stroke="#e11d48" stroke-width="2.5" stroke-dasharray="5 3"/>
      <text x="175" y="168" font-size="11" font-weight="bold" fill="#e11d48">Pin cũ (r lớn, rất dốc)</text>
      <text x="195" y="206" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#065f46">r = |ΔU / ΔI| = (U₁ − U₂) / (I₂ − I₁)</text>
    </g>
  </svg>`
};

module.exports = { diagrams };
