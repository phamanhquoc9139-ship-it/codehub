// 33 Hình minh họa SVG trực quan cho 33 bài Toán 11 - Kết nối tri thức với cuộc sống

const diagrams = {
  1: `<svg viewBox="0 0 560 280" class="w-full h-auto">
    <rect width="560" height="280" rx="16" fill="#f8fafc" stroke="#e2e8f0"/>
    <!-- Unit circle -->
    <line x1="40" y1="140" x2="300" y2="140" stroke="#475569" stroke-width="1.8"/>
    <line x1="170" y1="20" x2="170" y2="260" stroke="#475569" stroke-width="1.8"/>
    <circle cx="170" cy="140" r="95" fill="#eef2ff" fill-opacity="0.45" stroke="#4f46e5" stroke-width="2.2"/>
    <!-- Angle alpha & Point M -->
    <line x1="170" y1="140" x2="237" y2="73" stroke="#dc2626" stroke-width="2.5"/>
    <line x1="237" y1="73" x2="237" y2="140" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="4 3"/>
    <line x1="237" y1="73" x2="170" y2="73" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4 3"/>
    <path d="M 202 140 A 32 32 0 0 0 193 117" fill="none" stroke="#dc2626" stroke-width="2"/>
    <circle cx="237" cy="73" r="5" fill="#dc2626"/>
    <circle cx="265" cy="140" r="4" fill="#4f46e5"/>
    <text x="272" y="155" font-size="11" font-weight="bold" fill="#1e293b">A(1;0)</text>
    <text x="244" y="68" font-size="12" font-weight="bold" fill="#dc2626">M(cos α; sin α)</text>
    <text x="206" y="128" font-size="12" font-weight="bold" fill="#dc2626">α</text>
    <text x="220" y="156" font-size="11" font-weight="bold" fill="#0284c7">cos α</text>
    <text x="132" y="77" font-size="11" font-weight="bold" fill="#16a34a">sin α</text>
    <text x="176" y="32" font-size="11" font-weight="bold" fill="#334155">sin (Oy)</text>
    <text x="275" y="133" font-size="11" font-weight="bold" fill="#334155">cos (Ox)</text>
    <!-- Quadrant sign box -->
    <rect x="325" y="28" width="215" height="224" rx="12" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="432" y="50" text-anchor="middle" font-size="12" font-weight="bold" fill="#312e81">DẤU THEO 4 GÓC PHẦN TƯ</text>
    <rect x="338" y="62" width="90" height="72" rx="8" fill="#dcfce7" stroke="#86efac"/>
    <text x="383" y="82" text-anchor="middle" font-size="11" font-weight="bold" fill="#166534">Góc II (π/2; π)</text>
    <text x="383" y="100" text-anchor="middle" font-size="11" fill="#15803d">sin α &gt; 0</text>
    <text x="383" y="116" text-anchor="middle" font-size="10" fill="#64748b">cos, tan, cot &lt; 0</text>
    <rect x="436" y="62" width="90" height="72" rx="8" fill="#dbeafe" stroke="#93c5fd"/>
    <text x="481" y="82" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">Góc I (0; π/2)</text>
    <text x="481" y="100" text-anchor="middle" font-size="11" fill="#1d4ed8">Tất cả &gt; 0</text>
    <text x="481" y="116" text-anchor="middle" font-size="10" fill="#64748b">sin, cos, tan, cot +</text>
    <rect x="338" y="142" width="90" height="72" rx="8" fill="#fef3c7" stroke="#fcd34d"/>
    <text x="383" y="162" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">Góc III (π; 3π/2)</text>
    <text x="383" y="180" text-anchor="middle" font-size="11" fill="#b45309">tan, cot &gt; 0</text>
    <text x="383" y="196" text-anchor="middle" font-size="10" fill="#64748b">sin, cos &lt; 0</text>
    <rect x="436" y="142" width="90" height="72" rx="8" fill="#fce7f3" stroke="#f9a8d4"/>
    <text x="481" y="162" text-anchor="middle" font-size="11" font-weight="bold" fill="#9d174d">Góc IV (3π/2; 2π)</text>
    <text x="481" y="180" text-anchor="middle" font-size="11" fill="#be185d">cos α &gt; 0</text>
    <text x="481" y="196" text-anchor="middle" font-size="10" fill="#64748b">sin, tan, cot &lt; 0</text>
    <text x="432" y="236" text-anchor="middle" font-size="11" font-weight="bold" fill="#4f46e5">sin²α + cos²α = 1 • 180° = π rad</text>
  </svg>`,

  2: `<svg viewBox="0 0 560 250" class="w-full h-auto">
    <rect width="560" height="250" rx="16" fill="#f8fafc" stroke="#e2e8f0"/>
    <rect x="195" y="16" width="170" height="44" rx="10" fill="#4f46e5" stroke="#3730a3"/>
    <text x="280" y="35" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">CÔNG THỨC CỘNG (GỐC)</text>
    <text x="280" y="51" text-anchor="middle" font-size="10.5" fill="#e0e7ff">sin(a±b), cos(a±b), tan(a±b)</text>
    <!-- Arrows -->
    <line x1="225" y1="60" x2="115" y2="95" stroke="#6366f1" stroke-width="2"/>
    <line x1="335" y1="60" x2="445" y2="95" stroke="#6366f1" stroke-width="2"/>
    <!-- Left branch: Double & Power reduction -->
    <rect x="24" y="95" width="190" height="58" rx="10" fill="#eff6ff" stroke="#93c5fd"/>
    <text x="119" y="115" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#1e40af">CÔNG THỨC NHÂN ĐÔI (b = a)</text>
    <text x="119" y="132" text-anchor="middle" font-size="10.5" fill="#1e293b">sin 2a = 2 sin a cos a</text>
    <text x="119" y="146" text-anchor="middle" font-size="10.5" fill="#1e293b">cos 2a = 2cos²a - 1 = 1 - 2sin²a</text>
    <line x1="119" y1="153" x2="119" y2="176" stroke="#2563eb" stroke-width="2"/>
    <rect x="24" y="176" width="190" height="56" rx="10" fill="#f0fdf4" stroke="#86efac"/>
    <text x="119" y="196" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#166534">CÔNG THỨC HẠ BẬC (Bậc 2 → 1)</text>
    <text x="119" y="213" text-anchor="middle" font-size="10.5" fill="#1e293b">sin²a = (1 - cos 2a)/2</text>
    <text x="119" y="226" text-anchor="middle" font-size="10.5" fill="#1e293b">cos²a = (1 + cos 2a)/2</text>
    <!-- Right branch: Sum to Product & Product to Sum -->
    <rect x="346" y="95" width="190" height="58" rx="10" fill="#fef3c7" stroke="#fcd34d"/>
    <text x="441" y="115" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#92400e">TỔNG THÀNH TÍCH</text>
    <text x="441" y="132" text-anchor="middle" font-size="10.5" fill="#1e293b">cos a + cos b = 2cos((a+b)/2)cos((a-b)/2)</text>
    <text x="441" y="146" text-anchor="middle" font-size="10.5" fill="#1e293b">sin a + sin b = 2sin((a+b)/2)cos((a-b)/2)</text>
    <line x1="441" y1="153" x2="441" y2="176" stroke="#d97706" stroke-width="2"/>
    <rect x="346" y="176" width="190" height="56" rx="10" fill="#fdf2f8" stroke="#f9a8d4"/>
    <text x="441" y="196" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#9d174d">TÍCH THÀNH TỔNG</text>
    <text x="441" y="213" text-anchor="middle" font-size="10.5" fill="#1e293b">cos a cos b = ½[cos(a-b) + cos(a+b)]</text>
    <text x="441" y="226" text-anchor="middle" font-size="10.5" fill="#1e293b">sin a cos b = ½[sin(a-b) + sin(a+b)]</text>
  </svg>`,

  3: `<svg viewBox="0 0 560 250" class="w-full h-auto">
    <rect width="560" height="250" rx="16" fill="#f8fafc" stroke="#e2e8f0"/>
    <!-- Left: sin x and cos x -->
    <line x1="25" y1="125" x2="325" y2="125" stroke="#475569" stroke-width="1.5"/>
    <line x1="95" y1="30" x2="95" y2="220" stroke="#475569" stroke-width="1.5"/>
    <line x1="25" y1="65" x2="325" y2="65" stroke="#cbd5e1" stroke-dasharray="4 3"/>
    <line x1="25" y1="185" x2="325" y2="185" stroke="#cbd5e1" stroke-dasharray="4 3"/>
    <!-- y = sin x (indigo) -->
    <path d="M 35 185 Q 65 185 95 125 T 155 65 T 215 125 T 275 185 T 315 145" fill="none" stroke="#4f46e5" stroke-width="2.6"/>
    <!-- y = cos x (emerald dashed) -->
    <path d="M 35 125 Q 65 65 95 65 T 155 125 T 215 185 T 275 125 T 315 75" fill="none" stroke="#10b981" stroke-width="2.2" stroke-dasharray="5 3"/>
    <text x="102" y="60" font-size="11" font-weight="bold" fill="#334155">1</text>
    <text x="102" y="198" font-size="11" font-weight="bold" fill="#334155">-1</text>
    <text x="148" y="140" font-size="10" fill="#334155">π/2</text>
    <text x="210" y="140" font-size="10" fill="#334155">π</text>
    <text x="265" y="140" font-size="10" fill="#334155">3π/2</text>
    <text x="175" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#312e81">y = sin x (nét liền) &amp; y = cos x (nét đứt), T = 2π</text>
    <!-- Right: y = tan x with vertical asymptotes -->
    <line x1="355" y1="125" x2="535" y2="125" stroke="#475569" stroke-width="1.5"/>
    <line x1="445" y1="30" x2="445" y2="220" stroke="#475569" stroke-width="1.5"/>
    <line x1="395" y1="35" x2="395" y2="215" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4 3"/>
    <line x1="495" y1="35" x2="495" y2="215" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4 3"/>
    <path d="M 403 210 C 415 150, 430 130, 445 125 C 460 120, 475 100, 487 40" fill="none" stroke="#d97706" stroke-width="2.5"/>
    <text x="445" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">y = tan x (TCĐ: x = ±π/2)</text>
    <text x="380" y="232" font-size="10" fill="#dc2626">-π/2</text>
    <text x="485" y="232" font-size="10" fill="#dc2626">π/2</text>
  </svg>`,

  4: `<svg viewBox="0 0 560 250" class="w-full h-auto">
    <rect width="560" height="250" rx="16" fill="#f8fafc" stroke="#e2e8f0"/>
    <!-- Left circle: sin x = m -->
    <line x1="35" y1="130" x2="245" y2="130" stroke="#475569" stroke-width="1.5"/>
    <line x1="140" y1="25" x2="140" y2="235" stroke="#475569" stroke-width="1.5"/>
    <circle cx="140" cy="130" r="80" fill="#eef2ff" fill-opacity="0.4" stroke="#4f46e5" stroke-width="2"/>
    <line x1="45" y1="85" x2="235" y2="85" stroke="#dc2626" stroke-width="2"/>
    <line x1="140" y1="130" x2="206" y2="85" stroke="#4f46e5" stroke-width="2"/>
    <line x1="140" y1="130" x2="74" y2="85" stroke="#4f46e5" stroke-width="2"/>
    <circle cx="206" cy="85" r="4.5" fill="#dc2626"/>
    <circle cx="74" cy="85" r="4.5" fill="#dc2626"/>
    <text x="140" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#312e81">sin x = m (|m| ≤ 1): x = α + k2π; π - α + k2π</text>
    <text x="212" y="78" font-size="11" font-weight="bold" fill="#dc2626">α</text>
    <text x="42" y="78" font-size="11" font-weight="bold" fill="#dc2626">π - α</text>
    <text x="145" y="81" font-size="11" font-weight="bold" fill="#dc2626">y = m</text>
    <!-- Right circle: cos x = m -->
    <line x1="315" y1="130" x2="525" y2="130" stroke="#475569" stroke-width="1.5"/>
    <line x1="420" y1="25" x2="420" y2="235" stroke="#475569" stroke-width="1.5"/>
    <circle cx="420" cy="130" r="80" fill="#f0fdf4" fill-opacity="0.5" stroke="#10b981" stroke-width="2"/>
    <line x1="468" y1="35" x2="468" y2="225" stroke="#0284c7" stroke-width="2"/>
    <line x1="420" y1="130" x2="468" y2="66" stroke="#059669" stroke-width="2"/>
    <line x1="420" y1="130" x2="468" y2="194" stroke="#059669" stroke-width="2"/>
    <circle cx="468" cy="66" r="4.5" fill="#0284c7"/>
    <circle cx="468" cy="194" r="4.5" fill="#0284c7"/>
    <text x="420" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">cos x = m (|m| ≤ 1): x = ±α + k2π</text>
    <text x="476" y="64" font-size="11" font-weight="bold" fill="#0284c7">+α</text>
    <text x="476" y="202" font-size="11" font-weight="bold" fill="#0284c7">-α</text>
    <text x="473" y="144" font-size="11" font-weight="bold" fill="#0284c7">x = m</text>
  </svg>`,

  5: `<svg viewBox="0 0 560 240" class="w-full h-auto">
    <rect width="560" height="240" rx="16" fill="#f8fafc" stroke="#e2e8f0"/>
    <line x1="55" y1="200" x2="510" y2="200" stroke="#334155" stroke-width="2"/>
    <line x1="55" y1="200" x2="55" y2="30" stroke="#334155" stroke-width="2"/>
    <!-- Upper bound M -->
    <line x1="55" y1="55" x2="500" y2="55" stroke="#ef4444" stroke-width="1.8" stroke-dasharray="6 4"/>
    <text x="515" y="59" font-size="11" font-weight="bold" fill="#dc2626">Chặn trên M</text>
    <!-- Lower bound m -->
    <line x1="55" y1="165" x2="500" y2="165" stroke="#0284c7" stroke-width="1.8" stroke-dasharray="6 4"/>
    <text x="515" y="169" font-size="11" font-weight="bold" fill="#0284c7">Chặn dưới m</text>
    <!-- Discrete points u_n -->
    <circle cx="110" cy="155" r="5.5" fill="#4f46e5"/>
    <circle cx="175" cy="118" r="5.5" fill="#4f46e5"/>
    <circle cx="240" cy="95" r="5.5" fill="#4f46e5"/>
    <circle cx="305" cy="82" r="5.5" fill="#4f46e5"/>
    <circle cx="370" cy="74" r="5.5" fill="#4f46e5"/>
    <circle cx="435" cy="68" r="5.5" fill="#4f46e5"/>
    <text x="110" y="143" text-anchor="middle" font-size="11" font-weight="bold" fill="#312e81">u₁</text>
    <text x="175" y="106" text-anchor="middle" font-size="11" font-weight="bold" fill="#312e81">u₂</text>
    <text x="240" y="83" text-anchor="middle" font-size="11" font-weight="bold" fill="#312e81">u₃</text>
    <text x="305" y="70" text-anchor="middle" font-size="11" font-weight="bold" fill="#312e81">u₄</text>
    <text x="370" y="62" text-anchor="middle" font-size="11" font-weight="bold" fill="#312e81">u₅</text>
    <text x="435" y="52" text-anchor="middle" font-size="11" font-weight="bold" fill="#312e81">u₆</text>
    <text x="110" y="218" text-anchor="middle" font-size="11" fill="#475569">n=1</text>
    <text x="175" y="218" text-anchor="middle" font-size="11" fill="#475569">n=2</text>
    <text x="240" y="218" text-anchor="middle" font-size="11" fill="#475569">n=3</text>
    <text x="305" y="218" text-anchor="middle" font-size="11" fill="#475569">n=4</text>
    <text x="370" y="218" text-anchor="middle" font-size="11" fill="#475569">n=5</text>
    <text x="435" y="218" text-anchor="middle" font-size="11" fill="#475569">n=6</text>
    <text x="280" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">Dãy số tăng (uₙ₊₁ &gt; uₙ) và bị chặn (m ≤ uₙ ≤ M, ∀n ∈ ℕ*)</text>
  </svg>`,

  6: `<svg viewBox="0 0 560 240" class="w-full h-auto">
    <rect width="560" height="240" rx="16" fill="#f8fafc" stroke="#e2e8f0"/>
    <!-- Staircase bars for AP -->
    <rect x="45" y="155" width="46" height="55" rx="6" fill="#6366f1"/>
    <rect x="105" y="130" width="46" height="80" rx="6" fill="#6366f1"/>
    <rect x="165" y="105" width="46" height="105" rx="6" fill="#6366f1"/>
    <rect x="225" y="80" width="46" height="130" rx="6" fill="#6366f1"/>
    <rect x="285" y="55" width="46" height="155" rx="6" fill="#4f46e5"/>
    <text x="68" y="226" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">u₁</text>
    <text x="128" y="226" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">u₂=u₁+d</text>
    <text x="188" y="226" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">u₃=u₁+2d</text>
    <text x="248" y="226" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">u₄=u₁+3d</text>
    <text x="308" y="226" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">u₅=u₁+4d</text>
    <text x="128" y="122" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">+d</text>
    <text x="188" y="97" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">+d</text>
    <text x="248" y="72" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">+d</text>
    <text x="308" y="47" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">+d</text>
    <!-- Formula summary box -->
    <rect x="355" y="38" width="185" height="172" rx="12" fill="#ffffff" stroke="#c7d2fe" stroke-width="1.5"/>
    <text x="447" y="64" text-anchor="middle" font-size="12" font-weight="bold" fill="#312e81">CẤP SỐ CỘNG (CSC)</text>
    <text x="447" y="92" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#1e293b">uₙ = u₁ + (n - 1)d</text>
    <text x="447" y="122" text-anchor="middle" font-size="11" fill="#0f766e">uₖ = (uₖ₋₁ + uₖ₊₁) / 2</text>
    <text x="447" y="152" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#dc2626">Sₙ = n(u₁ + uₙ) / 2</text>
    <text x="447" y="176" text-anchor="middle" font-size="10.5" fill="#475569">= n[2u₁ + (n - 1)d] / 2</text>
  </svg>`,

  7: `<svg viewBox="0 0 560 240" class="w-full h-auto">
    <rect width="560" height="240" rx="16" fill="#f8fafc" stroke="#e2e8f0"/>
    <!-- Geometric progression bars -->
    <rect x="45" y="190" width="42" height="20" rx="4" fill="#0ea5e9"/>
    <rect x="105" y="170" width="42" height="40" rx="4" fill="#0ea5e9"/>
    <rect x="165" y="130" width="42" height="80" rx="4" fill="#0284c7"/>
    <rect x="225" y="50" width="42" height="160" rx="4" fill="#0369a1"/>
    <text x="66" y="226" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">u₁</text>
    <text x="126" y="226" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">u₂=u₁q</text>
    <text x="186" y="226" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">u₃=u₁q²</text>
    <text x="246" y="226" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">u₄=u₁q³</text>
    <text x="126" y="160" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">×q</text>
    <text x="186" y="120" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">×q</text>
    <text x="246" y="40" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">×q</text>
    <!-- Right card -->
    <rect x="305" y="34" width="235" height="178" rx="12" fill="#ffffff" stroke="#bae6fd" stroke-width="1.5"/>
    <text x="422" y="58" text-anchor="middle" font-size="12" font-weight="bold" fill="#075985">CẤP SỐ NHÂN (CSN)</text>
    <text x="422" y="86" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#1e293b">uₙ = u₁ · qⁿ⁻¹ (n ≥ 2)</text>
    <text x="422" y="114" text-anchor="middle" font-size="11" fill="#0f766e">uₖ² = uₖ₋₁ · uₖ₊₁</text>
    <text x="422" y="144" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#dc2626">Sₙ = u₁(1 - qⁿ) / (1 - q) (q ≠ 1)</text>
    <text x="422" y="172" text-anchor="middle" font-size="11" font-weight="bold" fill="#4f46e5">Lãi kép: Aₙ = P(1 + r)ⁿ</text>
  </svg>`,

  8: `<svg viewBox="0 0 560 250" class="w-full h-auto">
    <rect width="560" height="250" rx="16" fill="#f8fafc" stroke="#e2e8f0"/>
    <line x1="60" y1="205" x2="500" y2="205" stroke="#334155" stroke-width="2"/>
    <line x1="60" y1="205" x2="60" y2="30" stroke="#334155" stroke-width="2"/>
    <!-- Contiguous Histogram columns -->
    <rect x="90" y="155" width="70" height="50" fill="#99f6e4" stroke="#0d9488" stroke-width="1.5"/>
    <rect x="160" y="95" width="70" height="110" fill="#5eead4" stroke="#0d9488" stroke-width="1.5"/>
    <rect x="230" y="55" width="70" height="150" fill="#2dd4bf" stroke="#0d9488" stroke-width="1.5"/>
    <rect x="300" y="115" width="70" height="90" fill="#5eead4" stroke="#0d9488" stroke-width="1.5"/>
    <rect x="370" y="165" width="70" height="40" fill="#99f6e4" stroke="#0d9488" stroke-width="1.5"/>
    <!-- Frequency polygon connecting midpoints c_i -->
    <polyline points="125,155 195,95 265,55 335,115 405,165" fill="none" stroke="#dc2626" stroke-width="2.5"/>
    <circle cx="125" cy="155" r="4" fill="#dc2626"/>
    <circle cx="195" cy="95" r="4" fill="#dc2626"/>
    <circle cx="265" cy="55" r="4" fill="#dc2626"/>
    <circle cx="335" cy="115" r="4" fill="#dc2626"/>
    <circle cx="405" cy="165" r="4" fill="#dc2626"/>
    <text x="90" y="222" text-anchor="middle" font-size="10.5" fill="#334155">a₁</text>
    <text x="160" y="222" text-anchor="middle" font-size="10.5" fill="#334155">a₂</text>
    <text x="230" y="222" text-anchor="middle" font-size="10.5" fill="#334155">a₃</text>
    <text x="300" y="222" text-anchor="middle" font-size="10.5" fill="#334155">a₄</text>
    <text x="370" y="222" text-anchor="middle" font-size="10.5" fill="#334155">a₅</text>
    <text x="440" y="222" text-anchor="middle" font-size="10.5" fill="#334155">a₆</text>
    <text x="265" y="43" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">(c₃; n₃)</text>
    <text x="280" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f766e">Biểu đồ Histogram (cột liền nhau) &amp; Đa giác tần số nối các giá trị đại diện cᵢ = (aᵢ + aᵢ₊₁)/2</text>
  </svg>`,

  9: `<svg viewBox="0 0 560 250" class="w-full h-auto">
    <rect width="560" height="250" rx="16" fill="#f8fafc" stroke="#e2e8f0"/>
    <!-- Left: Mode graphical interpolation -->
    <rect x="45" y="115" width="65" height="90" fill="#bae6fd" stroke="#0284c7" stroke-width="1.5"/>
    <rect x="110" y="55" width="75" height="150" fill="#38bdf8" stroke="#0284c7" stroke-width="2"/>
    <rect x="185" y="130" width="65" height="75" fill="#bae6fd" stroke="#0284c7" stroke-width="1.5"/>
    <line x1="110" y1="115" x2="185" y2="55" stroke="#dc2626" stroke-width="2"/>
    <line x1="110" y1="55" x2="185" y2="130" stroke="#dc2626" stroke-width="2"/>
    <line x1="143" y1="88" x2="143" y2="205" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 3"/>
    <circle cx="143" cy="88" r="4.5" fill="#dc2626"/>
    <text x="143" y="222" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">Mₒ</text>
    <text x="110" y="222" text-anchor="middle" font-size="10.5" fill="#334155">L</text>
    <text x="185" y="222" text-anchor="middle" font-size="10.5" fill="#334155">L+h</text>
    <text x="148" y="34" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1">Nội suy Mốt Mₒ trong lớp tần số lớn nhất</text>
    <!-- Right: Formulas summary card -->
    <rect x="280" y="32" width="255" height="186" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="407" y="56" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f766e">3 SỐ ĐẶC TRƯNG XU THẾ TRUNG TÂM</text>
    <text x="407" y="84" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#1e293b">1. Trung bình: x̄ = (∑ nᵢ cᵢ) / n</text>
    <text x="407" y="114" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#4f46e5">2. Trung vị: Mₑ = L + [(n/2 - F)/f]·h</text>
    <text x="407" y="132" text-anchor="middle" font-size="10" fill="#64748b">(F: tần số tích lũy nhóm đứng trước)</text>
    <text x="407" y="162" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#dc2626">3. Mốt: Mₒ = L + [d₁/(d₁ + d₂)]·h</text>
    <text x="407" y="180" text-anchor="middle" font-size="10" fill="#64748b">(d₁ = fₘ - f_trước; d₂ = fₘ - f_sau)</text>
  </svg>`,

  10: `<svg viewBox="0 0 560 260" class="w-full h-auto">
    <rect width="560" height="260" rx="16" fill="#f8fafc" stroke="#e2e8f0"/>
    <!-- Pyramid S.ABCD and cross section MNPQ -->
    <polygon points="150,155 245,95 365,125 280,195" fill="#fef3c7" fill-opacity="0.55" stroke="#d97706" stroke-width="2"/>
    <line x1="255" y1="30" x2="110" y2="205" stroke="#334155" stroke-width="2"/>
    <line x1="255" y1="30" x2="285" y2="230" stroke="#334155" stroke-width="2"/>
    <line x1="255" y1="30" x2="430" y2="180" stroke="#334155" stroke-width="2"/>
    <line x1="255" y1="30" x2="235" y2="145" stroke="#475569" stroke-width="1.5" stroke-dasharray="5 4"/>
    <line x1="110" y1="205" x2="285" y2="230" stroke="#334155" stroke-width="2"/>
    <line x1="285" y1="230" x2="430" y2="180" stroke="#334155" stroke-width="2"/>
    <line x1="110" y1="205" x2="235" y2="145" stroke="#475569" stroke-width="1.5" stroke-dasharray="5 4"/>
    <line x1="235" y1="145" x2="430" y2="180" stroke="#475569" stroke-width="1.5" stroke-dasharray="5 4"/>
    <line x1="150" y1="155" x2="245" y2="95" stroke="#d97706" stroke-width="2" stroke-dasharray="5 3"/>
    <text x="255" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">S</text>
    <text x="95" y="212" font-size="12" font-weight="bold" fill="#1e293b">A</text>
    <text x="285" y="248" font-size="12" font-weight="bold" fill="#1e293b">B</text>
    <text x="442" y="185" font-size="12" font-weight="bold" fill="#1e293b">C</text>
    <text x="225" y="138" font-size="12" font-weight="bold" fill="#475569">D</text>
    <text x="132" y="154" font-size="11" font-weight="bold" fill="#b45309">M</text>
    <text x="292" y="202" font-size="11" font-weight="bold" fill="#b45309">N</text>
    <text x="378" y="126" font-size="11" font-weight="bold" fill="#b45309">P</text>
    <text x="252" y="92" font-size="11" font-weight="bold" fill="#b45309">Q</text>
    <text x="465" y="65" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#92400e">Thiết diện MNPQ</text>
    <text x="465" y="84" text-anchor="middle" font-size="10.5" fill="#475569">(Cạnh thấy: nét liền</text>
    <text x="465" y="100" text-anchor="middle" font-size="10.5" fill="#475569">Cạnh khuất: nét đứt)</text>
  </svg>`,

  11: `<svg viewBox="0 0 560 250" class="w-full h-auto">
    <rect width="560" height="250" rx="16" fill="#f8fafc" stroke="#e2e8f0"/>
    <!-- Left: Skew lines vs Parallel lines -->
    <polygon points="30,195 190,195 235,115 75,115" fill="#e0f2fe" stroke="#38bdf8" stroke-width="1.5"/>
    <line x1="65" y1="175" x2="205" y2="135" stroke="#0284c7" stroke-width="2.5"/>
    <line x1="125" y1="40" x2="125" y2="155" stroke="#dc2626" stroke-width="2.5"/>
    <line x1="125" y1="155" x2="125" y2="225" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 3"/>
    <circle cx="125" cy="155" r="4" fill="#dc2626"/>
    <text x="195" y="130" font-size="12" font-weight="bold" fill="#0284c7">b ⊂ (P)</text>
    <text x="135" y="55" font-size="12" font-weight="bold" fill="#dc2626">a</text>
    <text x="132" y="238" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#1e293b">Hai đường thẳng chéo nhau a và b</text>
    <!-- Right: Intersection of two planes containing parallel lines -->
    <line x1="330" y1="45" x2="505" y2="45" stroke="#dc2626" stroke-width="2.5"/>
    <polygon points="330,45 505,45 465,165 290,165" fill="#eef2ff" fill-opacity="0.7" stroke="#6366f1" stroke-width="1.5"/>
    <polygon points="330,45 505,45 535,185 360,185" fill="#fef3c7" fill-opacity="0.6" stroke="#d97706" stroke-width="1.5"/>
    <line x1="305" y1="145" x2="455" y2="145" stroke="#4f46e5" stroke-width="2.2"/>
    <line x1="370" y1="170" x2="520" y2="170" stroke="#b45309" stroke-width="2.2"/>
    <text x="418" y="36" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#dc2626">Giao tuyến d = (P) ∩ (Q) // a // b</text>
    <text x="380" y="138" font-size="11" font-weight="bold" fill="#4f46e5">a ⊂ (P)</text>
    <text x="450" y="163" font-size="11" font-weight="bold" fill="#b45309">b ⊂ (Q)</text>
  </svg>`,

  12: `<svg viewBox="0 0 560 240" class="w-full h-auto">
    <rect width="560" height="240" rx="16" fill="#f8fafc" stroke="#e2e8f0"/>
    <!-- Plane (P) -->
    <polygon points="65,195 365,195 435,115 135,115" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
    <!-- Plane (Q) containing d -->
    <polygon points="145,50 385,50 365,155 125,155" fill="#eef2ff" fill-opacity="0.65" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="4 3"/>
    <!-- Line d outside (P) -->
    <line x1="125" y1="50" x2="405" y2="50" stroke="#dc2626" stroke-width="2.8"/>
    <!-- Line a inside (P) -->
    <line x1="105" y1="155" x2="385" y2="155" stroke="#059669" stroke-width="2.8"/>
    <text x="265" y="40" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">d ⊄ (P) và d // a</text>
    <text x="255" y="174" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">a = (P) ∩ (Q) ⊂ (P)</text>
    <text x="95" y="185" font-size="12" font-weight="bold" fill="#047857">(P)</text>
    <text x="455" y="110" text-anchor="middle" font-size="12" font-weight="bold" fill="#312e81">d // a ⊂ (P) ⇒ d // (P)</text>
  </svg>`,

  13: `<svg viewBox="0 0 560 250" class="w-full h-auto">
    <rect width="560" height="250" rx="16" fill="#f8fafc" stroke="#e2e8f0"/>
    <!-- Three parallel planes (Thales in 3D) -->
    <polygon points="60,70 300,70 345,35 105,35" fill="#dbeafe" fill-opacity="0.7" stroke="#3b82f6" stroke-width="1.5"/>
    <polygon points="60,140 300,140 345,105 105,105" fill="#e0e7ff" fill-opacity="0.7" stroke="#6366f1" stroke-width="1.5"/>
    <polygon points="60,210 300,210 345,175 105,175" fill="#ede9fe" fill-opacity="0.7" stroke="#8b5cf6" stroke-width="1.5"/>
    <!-- Two secant lines d1, d2 -->
    <line x1="130" y1="22" x2="175" y2="225" stroke="#dc2626" stroke-width="2.4"/>
    <line x1="275" y1="22" x2="230" y2="225" stroke="#059669" stroke-width="2.4"/>
    <circle cx="137" cy="52" r="4" fill="#dc2626"/>
    <circle cx="152" cy="122" r="4" fill="#dc2626"/>
    <circle cx="168" cy="192" r="4" fill="#dc2626"/>
    <circle cx="268" cy="52" r="4" fill="#059669"/>
    <circle cx="253" cy="122" r="4" fill="#059669"/>
    <circle cx="237" cy="192" r="4" fill="#059669"/>
    <text x="122" y="55" font-size="11" font-weight="bold" fill="#dc2626">A</text>
    <text x="137" y="125" font-size="11" font-weight="bold" fill="#dc2626">B</text>
    <text x="153" y="195" font-size="11" font-weight="bold" fill="#dc2626">C</text>
    <text x="278" y="55" font-size="11" font-weight="bold" fill="#059669">A'</text>
    <text x="263" y="125" font-size="11" font-weight="bold" fill="#059669">B'</text>
    <text x="247" y="195" font-size="11" font-weight="bold" fill="#059669">C'</text>
    <!-- Right card -->
    <rect x="365" y="45" width="175" height="160" rx="12" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="452" y="72" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#312e81">ĐỊNH LÍ THALES 3D</text>
    <text x="452" y="96" text-anchor="middle" font-size="11" fill="#1e293b">(P) // (Q) // (R)</text>
    <text x="452" y="124" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">AB / A'B' = BC / B'C'</text>
    <text x="452" y="148" text-anchor="middle" font-size="12" font-weight="bold" fill="#059669">= AC / A'C'</text>
    <text x="452" y="180" text-anchor="middle" font-size="10.5" fill="#475569">Thiết diện // đáy: S'/S = k²</text>
  </svg>`,

  14: `<svg viewBox="0 0 560 240" class="w-full h-auto">
    <rect width="560" height="240" rx="16" fill="#f8fafc" stroke="#e2e8f0"/>
    <!-- Plane (P) -->
    <polygon points="50,205 420,205 490,130 120,130" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
    <!-- Direction line l -->
    <line x1="65" y1="35" x2="105" y2="115" stroke="#dc2626" stroke-width="2.2"/>
    <text x="65" y="28" font-size="12" font-weight="bold" fill="#dc2626">Phương chiếu l</text>
    <!-- Segment AB and midpoint I in space -->
    <line x1="160" y1="50" x2="340" y2="70" stroke="#4f46e5" stroke-width="3"/>
    <circle cx="160" cy="50" r="4.5" fill="#4f46e5"/>
    <circle cx="250" cy="60" r="4.5" fill="#dc2626"/>
    <circle cx="340" cy="70" r="4.5" fill="#4f46e5"/>
    <!-- Projection rays parallel to l -->
    <line x1="160" y1="50" x2="215" y2="160" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
    <line x1="250" y1="60" x2="305" y2="170" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
    <line x1="340" y1="70" x2="395" y2="180" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
    <!-- Projected segment A'B' on (P) -->
    <line x1="215" y1="160" x2="395" y2="180" stroke="#059669" stroke-width="3"/>
    <circle cx="215" cy="160" r="4.5" fill="#059669"/>
    <circle cx="305" cy="170" r="4.5" fill="#dc2626"/>
    <circle cx="395" cy="180" r="4.5" fill="#059669"/>
    <text x="155" y="40" font-size="12" font-weight="bold" fill="#4f46e5">A</text>
    <text x="250" y="48" font-size="12" font-weight="bold" fill="#dc2626">I</text>
    <text x="345" y="60" font-size="12" font-weight="bold" fill="#4f46e5">B</text>
    <text x="210" y="182" font-size="12" font-weight="bold" fill="#059669">A'</text>
    <text x="302" y="192" font-size="12" font-weight="bold" fill="#dc2626">I'</text>
    <text x="398" y="198" font-size="12" font-weight="bold" fill="#059669">B'</text>
    <text x="310" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">Phép chiếu song song bảo toàn tính thẳng hàng, song song &amp; tỉ số IA/IB = I'A'/I'B'</text>
  </svg>`,

  15: `<svg viewBox="0 0 560 240" class="w-full h-auto">
    <rect width="560" height="240" rx="16" fill="#f8fafc" stroke="#e2e8f0"/>
    <!-- Left: Convergence to L -->
    <line x1="40" y1="195" x2="320" y2="195" stroke="#334155" stroke-width="1.8"/>
    <line x1="40" y1="195" x2="40" y2="30" stroke="#334155" stroke-width="1.8"/>
    <line x1="40" y1="110" x2="320" y2="110" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 3"/>
    <circle cx="70" cy="45" r="4.5" fill="#4f46e5"/>
    <circle cx="105" cy="155" r="4.5" fill="#4f46e5"/>
    <circle cx="140" cy="80" r="4.5" fill="#4f46e5"/>
    <circle cx="175" cy="130" r="4.5" fill="#4f46e5"/>
    <circle cx="210" cy="98" r="4.5" fill="#4f46e5"/>
    <circle cx="245" cy="117" r="4.5" fill="#4f46e5"/>
    <circle cx="280" cy="106" r="4.5" fill="#4f46e5"/>
    <circle cx="305" cy="112" r="4.5" fill="#4f46e5"/>
    <text x="26" y="114" font-size="12" font-weight="bold" fill="#dc2626">L</text>
    <text x="180" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#312e81">lim uₙ = L khi n → +∞</text>
    <!-- Right: Geometric series square 1/2 + 1/4 + 1/8 + ... = 1 -->
    <rect x="360" y="40" width="160" height="160" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
    <rect x="360" y="40" width="80" height="160" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
    <rect x="440" y="40" width="80" height="80" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
    <rect x="440" y="120" width="40" height="80" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
    <rect x="480" y="120" width="40" height="40" fill="#fce7f3" stroke="#db2777" stroke-width="1.5"/>
    <text x="400" y="125" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">1/2</text>
    <text x="480" y="85" text-anchor="middle" font-size="13" font-weight="bold" fill="#166534">1/4</text>
    <text x="460" y="165" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">1/8</text>
    <text x="500" y="144" text-anchor="middle" font-size="10" font-weight="bold" fill="#9d174d">1/16</text>
    <text x="440" y="222" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#1e293b">CSN lùi vô hạn: S = u₁/(1 - q) = 1</text>
  </svg>`,

  16: `<svg viewBox="0 0 560 250" class="w-full h-auto">
    <rect width="560" height="250" rx="16" fill="#f8fafc" stroke="#e2e8f0"/>
    <line x1="40" y1="150" x2="520" y2="150" stroke="#334155" stroke-width="1.8"/>
    <line x1="180" y1="25" x2="180" y2="230" stroke="#334155" stroke-width="1.8"/>
    <!-- Vertical asymptote x = x0 -->
    <line x1="280" y1="25" x2="280" y2="230" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 4"/>
    <!-- Horizontal asymptote y = L -->
    <line x1="40" y1="95" x2="520" y2="95" stroke="#0284c7" stroke-width="2" stroke-dasharray="5 4"/>
    <!-- Hyperbola branches -->
    <path d="M 50 110 Q 245 115 268 220" fill="none" stroke="#4f46e5" stroke-width="2.8"/>
    <path d="M 292 30 Q 315 80 510 88" fill="none" stroke="#4f46e5" stroke-width="2.8"/>
    <text x="288" y="222" font-size="11.5" font-weight="bold" fill="#dc2626">TCĐ: x = x₀ (f(x) → ±∞)</text>
    <text x="430" y="84" font-size="11.5" font-weight="bold" fill="#0284c7">TCN: y = L (x → ±∞)</text>
    <text x="280" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">Giới hạn tại một điểm, Giới hạn tại vô cực &amp; Tiệm cận của đồ thị</text>
  </svg>`,

  17: `<svg viewBox="0 0 560 250" class="w-full h-auto">
    <rect width="560" height="250" rx="16" fill="#f8fafc" stroke="#e2e8f0"/>
    <!-- Left: Discontinuous vs Continuous -->
    <line x1="30" y1="185" x2="250" y2="185" stroke="#334155" stroke-width="1.8"/>
    <line x1="55" y1="35" x2="55" y2="215" stroke="#334155" stroke-width="1.8"/>
    <path d="M 65 155 Q 110 115 145 115" fill="none" stroke="#dc2626" stroke-width="2.5"/>
    <path d="M 145 75 Q 190 75 235 45" fill="none" stroke="#dc2626" stroke-width="2.5"/>
    <circle cx="145" cy="115" r="4.5" fill="#ffffff" stroke="#dc2626" stroke-width="2"/>
    <circle cx="145" cy="75" r="4.5" fill="#dc2626"/>
    <line x1="145" y1="75" x2="145" y2="185" stroke="#94a3b8" stroke-dasharray="4 3"/>
    <text x="145" y="202" text-anchor="middle" font-size="11" font-weight="bold" fill="#334155">x₀</text>
    <text x="145" y="28" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#dc2626">Gián đoạn khi lim trái ≠ lim phải</text>
    <!-- Right: Intermediate Value Theorem f(a)f(b) < 0 -->
    <line x1="295" y1="135" x2="535" y2="135" stroke="#334155" stroke-width="1.8"/>
    <line x1="320" y1="35" x2="320" y2="220" stroke="#334155" stroke-width="1.8"/>
    <path d="M 350 195 C 395 190, 435 75, 495 55" fill="none" stroke="#059669" stroke-width="2.8"/>
    <line x1="350" y1="135" x2="350" y2="195" stroke="#64748b" stroke-dasharray="4 3"/>
    <line x1="495" y1="135" x2="495" y2="55" stroke="#64748b" stroke-dasharray="4 3"/>
    <circle cx="350" cy="195" r="4.5" fill="#059669"/>
    <circle cx="495" cy="55" r="4.5" fill="#059669"/>
    <circle cx="422" cy="135" r="5.5" fill="#dc2626"/>
    <text x="350" y="126" text-anchor="middle" font-size="11" font-weight="bold" fill="#334155">a</text>
    <text x="495" y="152" text-anchor="middle" font-size="11" font-weight="bold" fill="#334155">b</text>
    <text x="422" y="155" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#dc2626">c (f(c)=0)</text>
    <text x="350" y="212" text-anchor="middle" font-size="10.5" fill="#065f46">f(a) &lt; 0</text>
    <text x="495" y="45" text-anchor="middle" font-size="10.5" fill="#065f46">f(b) &gt; 0</text>
    <text x="420" y="28" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#065f46">Liên tục trên [a;b] &amp; f(a)f(b) &lt; 0 ⇒ ∃c ∈ (a;b)</text>
  </svg>`,

  18: `<svg viewBox="0 0 560 230" class="w-full h-auto">
    <rect width="560" height="230" rx="16" fill="#f8fafc" stroke="#e2e8f0"/>
    <rect x="30" y="25" width="235" height="180" rx="12" fill="#ecfdf5" stroke="#6ee7b7" stroke-width="1.5"/>
    <text x="147" y="50" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">QUY TẮC LŨY THỪA SỐ MŨ THỰC</text>
    <text x="147" y="76" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#1e293b">a^(m/n) = ⁿ√(aᵐ) (a &gt; 0, n ≥ 2)</text>
    <text x="147" y="102" text-anchor="middle" font-size="11" fill="#0f766e">a^α · a^β = a^(α+β) • a^α / a^β = a^(α-β)</text>
    <text x="147" y="128" text-anchor="middle" font-size="11" fill="#0f766e">(a^α)^β = a^(α·β) • (ab)^α = a^α · b^α</text>
    <text x="147" y="154" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">a⁰ = 1 • a⁻ⁿ = 1 / aⁿ (a ≠ 0)</text>
    <text x="147" y="182" text-anchor="middle" font-size="10.5" fill="#475569">Luôn có aˣ &gt; 0 với mọi a &gt; 0, x ∈ ℝ</text>
    <!-- Right comparison box -->
    <rect x="295" y="25" width="235" height="180" rx="12" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
    <text x="412" y="50" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">SO SÁNH LŨY THỪA CÙNG CƠ SỐ</text>
    <rect x="312" y="66" width="200" height="54" rx="8" fill="#ffffff" stroke="#60a5fa"/>
    <text x="412" y="86" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#1d4ed8">Khi cơ số a &gt; 1 (Cùng chiều):</text>
    <text x="412" y="106" text-anchor="middle" font-size="11.5" fill="#1e293b">a^α &gt; a^β ⇔ α &gt; β</text>
    <rect x="312" y="132" width="200" height="54" rx="8" fill="#fff1f2" stroke="#fda4af"/>
    <text x="412" y="152" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#be123c">Khi 0 &lt; a &lt; 1 (Đảo chiều):</text>
    <text x="412" y="172" text-anchor="middle" font-size="11.5" fill="#1e293b">a^α &gt; a^β ⇔ α &lt; β</text>
  </svg>`,

  19: `<svg viewBox="0 0 560 230" class="w-full h-auto">
    <rect width="560" height="230" rx="16" fill="#f8fafc" stroke="#e2e8f0"/>
    <rect x="130" y="18" width="300" height="48" rx="12" fill="#4f46e5"/>
    <text x="280" y="39" text-anchor="middle" font-size="13" font-weight="bold" fill="#ffffff">α = logₐ b ⇔ a^α = b</text>
    <text x="280" y="56" text-anchor="middle" font-size="10.5" fill="#e0e7ff">Điều kiện bắt buộc: Cơ số 0 &lt; a ≠ 1 và Đối số b &gt; 0</text>
    <!-- 3 Cards below -->
    <rect x="20" y="85" width="165" height="125" rx="10" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="102" y="108" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0f766e">TÍCH &amp; THƯƠNG</text>
    <text x="102" y="134" text-anchor="middle" font-size="11" fill="#1e293b">logₐ(MN) = logₐM + logₐN</text>
    <text x="102" y="160" text-anchor="middle" font-size="11" fill="#1e293b">logₐ(M/N) = logₐM - logₐN</text>
    <text x="102" y="186" text-anchor="middle" font-size="10.5" fill="#64748b">(với M &gt; 0, N &gt; 0)</text>
    <rect x="197" y="85" width="165" height="125" rx="10" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="280" y="108" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#4f46e5">LŨY THỪA Ở ĐỐI/CƠ SỐ</text>
    <text x="280" y="134" text-anchor="middle" font-size="11" fill="#1e293b">logₐ(M^α) = α · logₐM</text>
    <text x="280" y="160" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">log_(a^α)(b) = (1/α) · logₐb</text>
    <text x="280" y="186" text-anchor="middle" font-size="11" fill="#0f766e">a^(logₐb) = b</text>
    <rect x="375" y="85" width="165" height="125" rx="10" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="457" y="108" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#b45309">ĐỔI CƠ SỐ</text>
    <text x="457" y="134" text-anchor="middle" font-size="11" fill="#1e293b">logₐb = log_c(b) / log_c(a)</text>
    <text x="457" y="160" text-anchor="middle" font-size="11" fill="#1e293b">logₐb = 1 / log_b(a)</text>
    <text x="457" y="186" text-anchor="middle" font-size="10.5" fill="#64748b">log x = log₁₀x • ln x = logₑx</text>
  </svg>`,

  20: `<svg viewBox="0 0 560 260" class="w-full h-auto">
    <rect width="560" height="260" rx="16" fill="#f8fafc" stroke="#e2e8f0"/>
    <!-- Left plot: a > 1 -->
    <line x1="35" y1="165" x2="255" y2="165" stroke="#334155" stroke-width="1.6"/>
    <line x1="110" y1="25" x2="110" y2="240" stroke="#334155" stroke-width="1.6"/>
    <!-- y = x symmetry line -->
    <line x1="50" y1="225" x2="235" y2="40" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
    <!-- y = a^x (a > 1) -->
    <path d="M 40 160 Q 95 155 110 130 Q 130 95 165 30" fill="none" stroke="#4f46e5" stroke-width="2.6"/>
    <!-- y = log_a x (a > 1) -->
    <path d="M 115 235 Q 120 180 145 165 Q 180 145 245 110" fill="none" stroke="#059669" stroke-width="2.6"/>
    <circle cx="110" cy="130" r="4" fill="#4f46e5"/>
    <circle cx="145" cy="165" r="4" fill="#059669"/>
    <text x="82" y="132" font-size="10.5" font-weight="bold" fill="#4f46e5">(0;1)</text>
    <text x="145" y="182" font-size="10.5" font-weight="bold" fill="#059669">(1;0)</text>
    <text x="175" y="45" font-size="11" font-weight="bold" fill="#4f46e5">y = aˣ</text>
    <text x="220" y="102" font-size="11" font-weight="bold" fill="#059669">y = logₐx</text>
    <text x="235" y="55" font-size="10" fill="#64748b">y = x</text>
    <text x="145" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">Khi a &gt; 1: Cả hai hàm ĐỒNG BIẾN</text>
    <!-- Right plot: 0 < a < 1 -->
    <line x1="305" y1="165" x2="525" y2="165" stroke="#334155" stroke-width="1.6"/>
    <line x1="380" y1="25" x2="380" y2="240" stroke="#334155" stroke-width="1.6"/>
    <!-- y = a^x (0 < a < 1) -->
    <path d="M 325 35 Q 360 100 380 130 Q 410 158 515 162" fill="none" stroke="#dc2626" stroke-width="2.6"/>
    <!-- y = log_a x (0 < a < 1) -->
    <path d="M 385 35 Q 392 135 415 165 Q 445 195 515 225" fill="none" stroke="#d97706" stroke-width="2.6"/>
    <circle cx="380" cy="130" r="4" fill="#dc2626"/>
    <circle cx="415" cy="165" r="4" fill="#d97706"/>
    <text x="335" y="55" font-size="11" font-weight="bold" fill="#dc2626">y = aˣ</text>
    <text x="485" y="212" font-size="11" font-weight="bold" fill="#d97706">y = logₐx</text>
    <text x="415" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">Khi 0 &lt; a &lt; 1: Cả hai hàm NGHỊCH BIẾN</text>
  </svg>`,

  21: `<svg viewBox="0 0 560 230" class="w-full h-auto">
    <rect width="560" height="230" rx="16" fill="#f8fafc" stroke="#e2e8f0"/>
    <rect x="25" y="22" width="245" height="186" rx="12" fill="#eef2ff" stroke="#a5b4fc" stroke-width="1.5"/>
    <text x="147" y="46" text-anchor="middle" font-size="12" font-weight="bold" fill="#312e81">BẤT PHƯƠNG TRÌNH MŨ a^f(x) &gt; a^g(x)</text>
    <rect x="40" y="62" width="215" height="56" rx="8" fill="#ffffff" stroke="#818cf8"/>
    <text x="147" y="82" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">Nếu cơ số a &gt; 1 (Giữ nguyên chiều):</text>
    <text x="147" y="104" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">f(x) &gt; g(x)</text>
    <rect x="40" y="130" width="215" height="60" rx="8" fill="#fff1f2" stroke="#fda4af"/>
    <text x="147" y="150" text-anchor="middle" font-size="11" font-weight="bold" fill="#be123c">Nếu 0 &lt; a &lt; 1 (ĐẢO CHIỀU):</text>
    <text x="147" y="174" text-anchor="middle" font-size="12" font-weight="bold" fill="#be123c">f(x) &lt; g(x)</text>
    <!-- Right: Log inequalities -->
    <rect x="290" y="22" width="245" height="186" rx="12" fill="#ecfdf5" stroke="#6ee7b7" stroke-width="1.5"/>
    <text x="412" y="46" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">BPT LÔGARIT logₐf(x) &gt; logₐg(x)</text>
    <rect x="305" y="62" width="215" height="56" rx="8" fill="#ffffff" stroke="#34d399"/>
    <text x="412" y="82" text-anchor="middle" font-size="11" font-weight="bold" fill="#047857">Nếu cơ số a &gt; 1 (Giữ chiều + ĐK):</text>
    <text x="412" y="104" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">f(x) &gt; g(x) &gt; 0</text>
    <rect x="305" y="130" width="215" height="60" rx="8" fill="#fff1f2" stroke="#fda4af"/>
    <text x="412" y="150" text-anchor="middle" font-size="11" font-weight="bold" fill="#be123c">Nếu 0 &lt; a &lt; 1 (ĐẢO CHIỀU + Chặn 0):</text>
    <text x="412" y="174" text-anchor="middle" font-size="12" font-weight="bold" fill="#be123c">0 &lt; f(x) &lt; g(x)</text>
  </svg>`,

  22: `<svg viewBox="0 0 560 250" class="w-full h-auto">
    <rect width="560" height="250" rx="16" fill="#f8fafc" stroke="#e2e8f0"/>
    <!-- Left: Angle between skew lines a, b via point O -->
    <line x1="45" y1="60" x2="210" y2="40" stroke="#4f46e5" stroke-width="2.5"/>
    <line x1="55" y1="195" x2="215" y2="145" stroke="#059669" stroke-width="2.5"/>
    <circle cx="130" cy="125" r="4" fill="#dc2626"/>
    <line x1="70" y1="132" x2="205" y2="116" stroke="#4f46e5" stroke-width="2" stroke-dasharray="5 3"/>
    <line x1="75" y1="142" x2="205" y2="102" stroke="#059669" stroke-width="2" stroke-dasharray="5 3"/>
    <text x="130" y="114" font-size="11.5" font-weight="bold" fill="#dc2626">O</text>
    <text x="55" y="50" font-size="12" font-weight="bold" fill="#4f46e5">a</text>
    <text x="65" y="182" font-size="12" font-weight="bold" fill="#059669">b</text>
    <text x="212" y="120" font-size="11" font-weight="bold" fill="#4f46e5">a' // a</text>
    <text x="212" y="102" font-size="11" font-weight="bold" fill="#059669">b' // b</text>
    <text x="135" y="228" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#1e293b">Góc (a, b) = (a', b') ∈ [0°; 90°]</text>
    <!-- Right: Cube ABCD.A'B'C'D' with skew perpendicular edges -->
    <polygon points="310,185 430,185 475,140 355,140" fill="#e0f2fe" fill-opacity="0.4" stroke="#475569" stroke-width="1.5"/>
    <polygon points="310,75 430,75 475,30 355,30" fill="#e0f2fe" fill-opacity="0.4" stroke="#475569" stroke-width="1.5"/>
    <line x1="310" y1="75" x2="310" y2="185" stroke="#475569" stroke-width="1.5"/>
    <line x1="430" y1="75" x2="430" y2="185" stroke="#475569" stroke-width="1.5"/>
    <line x1="475" y1="30" x2="475" y2="140" stroke="#dc2626" stroke-width="3"/>
    <line x1="355" y1="30" x2="355" y2="140" stroke="#475569" stroke-width="1.5" stroke-dasharray="4 3"/>
    <line x1="310" y1="185" x2="430" y2="185" stroke="#dc2626" stroke-width="3"/>
    <text x="300" y="198" font-size="11" font-weight="bold" fill="#dc2626">A</text>
    <text x="432" y="198" font-size="11" font-weight="bold" fill="#dc2626">B</text>
    <text x="485" y="145" font-size="11" font-weight="bold" fill="#dc2626">C</text>
    <text x="485" y="32" font-size="11" font-weight="bold" fill="#dc2626">C'</text>
    <text x="405" y="228" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#dc2626">AB ⊥ CC' (Chéo nhau và vuông góc)</text>
  </svg>`,

  23: `<svg viewBox="0 0 560 250" class="w-full h-auto">
    <rect width="560" height="250" rx="16" fill="#f8fafc" stroke="#e2e8f0"/>
    <!-- Left: d perp (P) -->
    <polygon points="25,195 235,195 275,125 65,125" fill="#ecfdf5" stroke="#10b981" stroke-width="1.8"/>
    <line x1="85" y1="175" x2="225" y2="145" stroke="#047857" stroke-width="2"/>
    <line x1="95" y1="140" x2="215" y2="180" stroke="#047857" stroke-width="2"/>
    <line x1="155" y1="35" x2="155" y2="160" stroke="#dc2626" stroke-width="2.8"/>
    <rect x="155" y="148" width="10" height="10" fill="none" stroke="#dc2626" stroke-width="1.5"/>
    <text x="165" y="50" font-size="12" font-weight="bold" fill="#dc2626">d</text>
    <text x="228" y="145" font-size="11" font-weight="bold" fill="#065f46">a</text>
    <text x="220" y="184" font-size="11" font-weight="bold" fill="#065f46">b</text>
    <text x="150" y="225" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#1e293b">d ⊥ a, d ⊥ b (a ∩ b ⊂ (P)) ⇒ d ⊥ (P)</text>
    <!-- Right: Theorem of 3 perpendiculars -->
    <polygon points="300,195 510,195 545,125 335,125" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.8"/>
    <line x1="380" y1="45" x2="380" y2="155" stroke="#475569" stroke-width="2" stroke-dasharray="4 3"/>
    <line x1="380" y1="45" x2="465" y2="165" stroke="#dc2626" stroke-width="2.5"/>
    <line x1="380" y1="155" x2="465" y2="165" stroke="#0284c7" stroke-width="2.5"/>
    <line x1="435" y1="190" x2="495" y2="140" stroke="#1e293b" stroke-width="2.5"/>
    <text x="375" y="38" font-size="12" font-weight="bold" fill="#1e293b">S</text>
    <text x="365" y="160" font-size="11" font-weight="bold" fill="#475569">H</text>
    <text x="472" y="172" font-size="11" font-weight="bold" fill="#dc2626">M</text>
    <text x="502" y="142" font-size="12" font-weight="bold" fill="#1e293b">a ⊂ (P)</text>
    <text x="425" y="95" font-size="11" font-weight="bold" fill="#dc2626">b (xiên)</text>
    <text x="415" y="152" font-size="11" font-weight="bold" fill="#0284c7">b' (chiếu)</text>
    <text x="425" y="225" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#1e40af">Định lí 3 đường vuông góc: a ⊥ b ⇔ a ⊥ b'</text>
  </svg>`,

  24: `<svg viewBox="0 0 560 240" class="w-full h-auto">
    <rect width="560" height="240" rx="16" fill="#f8fafc" stroke="#e2e8f0"/>
    <polygon points="65,195 425,195 495,120 135,120" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
    <!-- Right triangle AHB -->
    <polygon points="195,45 195,165 365,165" fill="#fef3c7" fill-opacity="0.7" stroke="#d97706" stroke-width="1.5"/>
    <line x1="195" y1="45" x2="195" y2="165" stroke="#dc2626" stroke-width="2.5"/>
    <line x1="195" y1="45" x2="365" y2="165" stroke="#4f46e5" stroke-width="2.8"/>
    <line x1="195" y1="165" x2="365" y2="165" stroke="#059669" stroke-width="2.8"/>
    <rect x="195" y="153" width="12" height="12" fill="none" stroke="#dc2626" stroke-width="1.8"/>
    <path d="M 330 165 A 35 35 0 0 1 336 145" fill="none" stroke="#dc2626" stroke-width="2"/>
    <circle cx="195" cy="45" r="4.5" fill="#dc2626"/>
    <circle cx="195" cy="165" r="4.5" fill="#dc2626"/>
    <circle cx="365" cy="165" r="4.5" fill="#4f46e5"/>
    <text x="195" y="35" text-anchor="middle" font-size="13" font-weight="bold" fill="#dc2626">A (Đỉnh)</text>
    <text x="175" y="182" font-size="12" font-weight="bold" fill="#dc2626">H (Chân vuông góc)</text>
    <text x="375" y="172" font-size="12" font-weight="bold" fill="#4f46e5">B (Giao điểm)</text>
    <text x="315" y="158" font-size="12" font-weight="bold" fill="#dc2626">α</text>
    <text x="290" y="95" font-size="11.5" font-weight="bold" fill="#4f46e5">Đường xiên AB</text>
    <text x="280" y="182" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#059669">Hình chiếu HB</text>
    <text x="280" y="222" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">Góc (AB, (P)) = (AB, HB) = ∠ABH = α • sin α = AH/AB, tan α = AH/HB</text>
  </svg>`,

  25: `<svg viewBox="0 0 560 250" class="w-full h-auto">
    <rect width="560" height="250" rx="16" fill="#f8fafc" stroke="#e2e8f0"/>
    <!-- Left: Angle between (SBC) and (ABC) -->
    <polygon points="55,180 245,215 295,145" fill="#f1f5f9" stroke="#475569" stroke-width="1.8"/>
    <line x1="55" y1="45" x2="55" y2="180" stroke="#dc2626" stroke-width="2.5"/>
    <line x1="55" y1="45" x2="245" y2="215" stroke="#334155" stroke-width="2"/>
    <line x1="55" y1="45" x2="295" y2="145" stroke="#334155" stroke-width="2"/>
    <!-- AH perp BC and SH perp BC -->
    <line x1="55" y1="180" x2="270" y2="180" stroke="#0284c7" stroke-width="2.2" stroke-dasharray="4 3"/>
    <line x1="55" y1="45" x2="270" y2="180" stroke="#4f46e5" stroke-width="2.5"/>
    <rect x="55" y="168" width="10" height="10" fill="none" stroke="#dc2626" stroke-width="1.5"/>
    <text x="55" y="36" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">S</text>
    <text x="40" y="185" font-size="12" font-weight="bold" fill="#1e293b">A</text>
    <text x="245" y="232" font-size="12" font-weight="bold" fill="#1e293b">B</text>
    <text x="305" y="148" font-size="12" font-weight="bold" fill="#1e293b">C</text>
    <text x="282" y="185" font-size="12" font-weight="bold" fill="#4f46e5">H (AH ⊥ BC)</text>
    <text x="225" y="172" font-size="11.5" font-weight="bold" fill="#dc2626">φ = ∠SHA</text>
    <!-- Right explanation box -->
    <rect x="340" y="40" width="200" height="170" rx="12" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="440" y="65" text-anchor="middle" font-size="12" font-weight="bold" fill="#312e81">GÓC GIỮA HAI MẶT PHẲNG</text>
    <text x="440" y="92" text-anchor="middle" font-size="11" fill="#1e293b">1. Tìm giao tuyến c = BC</text>
    <text x="440" y="116" text-anchor="middle" font-size="11" fill="#0284c7">2. Từ chân đường cao A, kẻ AH ⊥ BC</text>
    <text x="440" y="140" text-anchor="middle" font-size="11" fill="#4f46e5">3. Suy ra SH ⊥ BC (ĐL 3 đường VG)</text>
    <text x="440" y="168" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#dc2626">⇒ ((SBC), (ABC)) = ∠SHA</text>
    <text x="440" y="190" text-anchor="middle" font-size="11" fill="#059669">tan φ = SA / AH</text>
  </svg>`,

  26: `<svg viewBox="0 0 560 250" class="w-full h-auto">
    <rect width="560" height="250" rx="16" fill="#f8fafc" stroke="#e2e8f0"/>
    <!-- Pyramid with 2-stroke distance construction from A to (SBC) -->
    <polygon points="65,185 255,220 310,145" fill="#f1f5f9" stroke="#475569" stroke-width="1.8"/>
    <line x1="65" y1="40" x2="65" y2="185" stroke="#334155" stroke-width="2.2"/>
    <line x1="65" y1="40" x2="255" y2="220" stroke="#334155" stroke-width="2"/>
    <line x1="65" y1="40" x2="310" y2="145" stroke="#334155" stroke-width="2"/>
    <!-- Stroke 1: AE perp BC -->
    <line x1="65" y1="185" x2="282" y2="182" stroke="#0284c7" stroke-width="2.2" stroke-dasharray="4 3"/>
    <line x1="65" y1="40" x2="282" y2="182" stroke="#0284c7" stroke-width="2.2"/>
    <!-- Stroke 2: AH perp SE -->
    <line x1="65" y1="185" x2="185" y2="118" stroke="#dc2626" stroke-width="3"/>
    <circle cx="185" cy="118" r="4.5" fill="#dc2626"/>
    <text x="65" y="30" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">S</text>
    <text x="48" y="190" font-size="12" font-weight="bold" fill="#dc2626">A</text>
    <text x="255" y="236" font-size="12" font-weight="bold" fill="#1e293b">B</text>
    <text x="320" y="150" font-size="12" font-weight="bold" fill="#1e293b">C</text>
    <text x="294" y="186" font-size="11.5" font-weight="bold" fill="#0284c7">E (AE ⊥ BC)</text>
    <text x="195" y="112" font-size="12" font-weight="bold" fill="#dc2626">H (AH ⊥ SE)</text>
    <!-- Right formula box -->
    <rect x="340" y="36" width="202" height="178" rx="12" fill="#ffffff" stroke="#fecdd3" stroke-width="1.5"/>
    <text x="441" y="60" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#be123c">BÀI TOÁN GỐC KHOẢNG CÁCH</text>
    <text x="441" y="84" text-anchor="middle" font-size="11" fill="#1e293b">Tính d(A, (SBC)) khi SA ⊥ (ABC):</text>
    <text x="441" y="108" text-anchor="middle" font-size="11" fill="#0284c7">• Nét 1: Kẻ AE ⊥ BC (tại E)</text>
    <text x="441" y="130" text-anchor="middle" font-size="11" fill="#dc2626">• Nét 2: Kẻ AH ⊥ SE ⇒ AH ⊥ (SBC)</text>
    <text x="441" y="158" text-anchor="middle" font-size="12" font-weight="bold" fill="#be123c">1/AH² = 1/SA² + 1/AE²</text>
    <text x="441" y="186" text-anchor="middle" font-size="10.5" fill="#475569">Đổi điểm: d(M)/d(A) = MI / AI</text>
  </svg>`,

  27: `<svg viewBox="0 0 560 240" class="w-full h-auto">
    <rect width="560" height="240" rx="16" fill="#f8fafc" stroke="#e2e8f0"/>
    <!-- 1. Prism V = Bh -->
    <polygon points="35,175 115,190 155,155 75,140" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/>
    <polygon points="35,65 115,80 155,45 75,30" fill="#eff6ff" stroke="#2563eb" stroke-width="1.8"/>
    <line x1="35" y1="65" x2="35" y2="175" stroke="#2563eb" stroke-width="1.8"/>
    <line x1="115" y1="80" x2="115" y2="190" stroke="#2563eb" stroke-width="1.8"/>
    <line x1="155" y1="45" x2="155" y2="155" stroke="#2563eb" stroke-width="1.8"/>
    <line x1="75" y1="30" x2="75" y2="140" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4 3"/>
    <text x="95" y="218" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">Lăng trụ: V = B · h</text>
    <!-- 2. Pyramid V = 1/3 Bh -->
    <polygon points="210,180 295,195 340,150" fill="#dcfce7" stroke="#16a34a" stroke-width="1.8"/>
    <line x1="275" y1="40" x2="210" y2="180" stroke="#16a34a" stroke-width="1.8"/>
    <line x1="275" y1="40" x2="295" y2="195" stroke="#16a34a" stroke-width="1.8"/>
    <line x1="275" y1="40" x2="340" y2="150" stroke="#16a34a" stroke-width="1.8"/>
    <line x1="275" y1="40" x2="275" y2="172" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 3"/>
    <text x="285" y="115" font-size="11" font-weight="bold" fill="#dc2626">h</text>
    <text x="275" y="218" text-anchor="middle" font-size="12" font-weight="bold" fill="#166534">Khối chóp: V = ⅓ B · h</text>
    <!-- 3. Frustum V = h/3 (B1 + B2 + sqrt(B1B2)) -->
    <polygon points="385,180 485,195 525,155 425,140" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
    <polygon points="415,80 475,90 500,65 440,55" fill="#fffbeb" stroke="#d97706" stroke-width="1.8"/>
    <line x1="415" y1="80" x2="385" y2="180" stroke="#d97706" stroke-width="1.8"/>
    <line x1="475" y1="90" x2="485" y2="195" stroke="#d97706" stroke-width="1.8"/>
    <line x1="500" y1="65" x2="525" y2="155" stroke="#d97706" stroke-width="1.8"/>
    <line x1="440" y1="55" x2="425" y2="140" stroke="#d97706" stroke-width="1.5" stroke-dasharray="4 3"/>
    <text x="455" y="218" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#92400e">Chóp cụt: V = (h/3)(B₁+B₂+√(B₁B₂))</text>
  </svg>`,

  28: `<svg viewBox="0 0 560 230" class="w-full h-auto">
    <rect width="560" height="230" rx="16" fill="#f8fafc" stroke="#e2e8f0"/>
    <!-- Left Venn: Union & Intersection -->
    <rect x="25" y="25" width="245" height="175" rx="12" fill="#ffffff" stroke="#94a3b8" stroke-width="1.8"/>
    <text x="42" y="45" font-size="12" font-weight="bold" fill="#334155">Ω</text>
    <circle cx="115" cy="115" r="55" fill="#6366f1" fill-opacity="0.28" stroke="#4f46e5" stroke-width="2"/>
    <circle cx="180" cy="115" r="55" fill="#10b981" fill-opacity="0.28" stroke="#059669" stroke-width="2"/>
    <text x="82" y="118" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#312e81">A \ B</text>
    <text x="147" y="118" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#dc2626">A ∩ B</text>
    <text x="212" y="118" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#065f46">B \ A</text>
    <text x="147" y="190" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">Hợp A ∪ B (Ít nhất 1) • Giao A ∩ B (Cả 2)</text>
    <!-- Right Venn: Mutually Exclusive vs Independent -->
    <rect x="290" y="25" width="245" height="175" rx="12" fill="#ffffff" stroke="#94a3b8" stroke-width="1.8"/>
    <circle cx="355" cy="100" r="42" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
    <circle cx="465" cy="100" r="42" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
    <text x="355" y="104" text-anchor="middle" font-size="12" font-weight="bold" fill="#b91c1c">A</text>
    <text x="465" y="104" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">B</text>
    <text x="412" y="166" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#dc2626">Xung khắc: A ∩ B = ∅ ⇒ P(AB) = 0</text>
    <text x="412" y="186" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#4f46e5">Độc lập: P(A ∩ B) = P(A) · P(B)</text>
  </svg>`,

  29: `<svg viewBox="0 0 560 220" class="w-full h-auto">
    <rect width="560" height="220" rx="16" fill="#f8fafc" stroke="#e2e8f0"/>
    <rect x="30" y="25" width="500" height="170" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="280" y="54" text-anchor="middle" font-size="13" font-weight="bold" fill="#312e81">CÔNG THỨC CỘNG XÁC SUẤT (NGUYÊN LÍ BÙ TRỪ)</text>
    <rect x="55" y="75" width="210" height="52" rx="10" fill="#eef2ff" stroke="#818cf8"/>
    <text x="160" y="96" text-anchor="middle" font-size="11" font-weight="bold" fill="#3730a3">Hai biến cố bất kì:</text>
    <text x="160" y="116" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</text>
    <rect x="295" y="75" width="210" height="52" rx="10" fill="#ecfdf5" stroke="#34d399"/>
    <text x="400" y="96" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">Hai biến cố xung khắc (A ∩ B = ∅):</text>
    <text x="400" y="116" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">P(A ∪ B) = P(A) + P(B)</text>
    <text x="280" y="162" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#dc2626">Biến cố đối: P("Ít nhất một xảy ra") = 1 - P("Cả hai cùng không xảy ra") = 1 - P(Ā ∩ B̄)</text>
  </svg>`,

  30: `<svg viewBox="0 0 560 250" class="w-full h-auto">
    <rect width="560" height="250" rx="16" fill="#f8fafc" stroke="#e2e8f0"/>
    <!-- Probability Tree Diagram -->
    <circle cx="55" cy="125" r="8" fill="#1e293b"/>
    <!-- Level 1 branches -->
    <line x1="63" y1="125" x2="185" y2="65" stroke="#4f46e5" stroke-width="2.5"/>
    <line x1="63" y1="125" x2="185" y2="185" stroke="#64748b" stroke-width="2.5"/>
    <rect x="185" y="48" width="46" height="32" rx="8" fill="#4f46e5"/>
    <text x="208" y="69" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">A</text>
    <rect x="185" y="168" width="46" height="32" rx="8" fill="#475569"/>
    <text x="208" y="189" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">Ā</text>
    <text x="115" y="82" font-size="11" font-weight="bold" fill="#4f46e5">P(A)</text>
    <text x="115" y="172" font-size="11" font-weight="bold" fill="#475569">P(Ā)</text>
    <!-- Level 2 branches -->
    <line x1="231" y1="64" x2="345" y2="36" stroke="#059669" stroke-width="2.2"/>
    <line x1="231" y1="64" x2="345" y2="92" stroke="#dc2626" stroke-width="2.2"/>
    <line x1="231" y1="184" x2="345" y2="156" stroke="#059669" stroke-width="2.2"/>
    <line x1="231" y1="184" x2="345" y2="212" stroke="#dc2626" stroke-width="2.2"/>
    <text x="285" y="42" font-size="10.5" font-weight="bold" fill="#059669">P(B)</text>
    <text x="285" y="92" font-size="10.5" font-weight="bold" fill="#dc2626">P(B̄)</text>
    <text x="285" y="162" font-size="10.5" font-weight="bold" fill="#059669">P(B)</text>
    <text x="285" y="212" font-size="10.5" font-weight="bold" fill="#dc2626">P(B̄)</text>
    <!-- Leaf nodes -->
    <rect x="350" y="20" width="190" height="32" rx="8" fill="#ecfdf5" stroke="#34d399"/>
    <text x="445" y="40" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#065f46">P(AB) = P(A) · P(B)</text>
    <rect x="350" y="76" width="190" height="32" rx="8" fill="#fef3c7" stroke="#fcd34d"/>
    <text x="445" y="96" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#92400e">P(AB̄) = P(A) · P(B̄)</text>
    <rect x="350" y="140" width="190" height="32" rx="8" fill="#fef3c7" stroke="#fcd34d"/>
    <text x="445" y="160" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#92400e">P(ĀB) = P(Ā) · P(B)</text>
    <rect x="350" y="196" width="190" height="32" rx="8" fill="#fff1f2" stroke="#fda4af"/>
    <text x="445" y="216" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#be123c">P(ĀB̄) = P(Ā) · P(B̄)</text>
  </svg>`,

  31: `<svg viewBox="0 0 560 250" class="w-full h-auto">
    <rect width="560" height="250" rx="16" fill="#f8fafc" stroke="#e2e8f0"/>
    <line x1="45" y1="205" x2="500" y2="205" stroke="#334155" stroke-width="1.8"/>
    <line x1="75" y1="25" x2="75" y2="225" stroke="#334155" stroke-width="1.8"/>
    <!-- Curve y = f(x) -->
    <path d="M 90 190 Q 210 170 370 40" fill="none" stroke="#4f46e5" stroke-width="3"/>
    <!-- Secant line M0M -->
    <line x1="120" y1="186" x2="375" y2="32" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 4"/>
    <!-- Tangent line M0T at M0 -->
    <line x1="95" y1="196" x2="385" y2="80" stroke="#dc2626" stroke-width="2.6"/>
    <circle cx="195" cy="156" r="5" fill="#dc2626"/>
    <circle cx="325" cy="78" r="5" fill="#4f46e5"/>
    <line x1="195" y1="156" x2="195" y2="205" stroke="#64748b" stroke-dasharray="4 3"/>
    <line x1="325" y1="78" x2="325" y2="205" stroke="#64748b" stroke-dasharray="4 3"/>
    <text x="195" y="222" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#dc2626">x₀</text>
    <text x="325" y="222" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#4f46e5">x₀ + Δx</text>
    <text x="172" y="146" font-size="12" font-weight="bold" fill="#dc2626">M₀(x₀; f(x₀))</text>
    <text x="335" y="75" font-size="12" font-weight="bold" fill="#4f46e5">M</text>
    <text x="415" y="88" font-size="11.5" font-weight="bold" fill="#dc2626">Tiếp tuyến: y = f'(x₀)(x - x₀) + f(x₀)</text>
    <text x="290" y="24" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">f'(x₀) = lim (Δy / Δx) = Hệ số góc tiếp tuyến k = tan α</text>
  </svg>`,

  32: `<svg viewBox="0 0 560 220" class="w-full h-auto">
    <rect width="560" height="220" rx="16" fill="#f8fafc" stroke="#e2e8f0"/>
    <!-- Chain rule pipeline -->
    <rect x="35" y="30" width="130" height="54" rx="12" fill="#4f46e5"/>
    <text x="100" y="54" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">Biến độc lập x</text>
    <text x="100" y="72" text-anchor="middle" font-size="10.5" fill="#e0e7ff">Tốc độ u'(x)</text>
    <line x1="165" y1="57" x2="215" y2="57" stroke="#4f46e5" stroke-width="2.5"/>
    <rect x="215" y="30" width="130" height="54" rx="12" fill="#0284c7"/>
    <text x="280" y="54" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">Hàm trung gian u(x)</text>
    <text x="280" y="72" text-anchor="middle" font-size="10.5" fill="#e0f2fe">Tốc độ f'(u)</text>
    <line x1="345" y1="57" x2="395" y2="57" stroke="#0284c7" stroke-width="2.5"/>
    <rect x="395" y="30" width="130" height="54" rx="12" fill="#dc2626"/>
    <text x="460" y="54" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">Hàm hợp y = f(u)</text>
    <text x="460" y="72" text-anchor="middle" font-size="11" font-weight="bold" fill="#fef2f2">y'ₓ = f'(u) · u'(x)</text>
    <!-- Bottom summary box -->
    <rect x="35" y="104" width="490" height="96" rx="12" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="280" y="128" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">QUY TẮC ĐẠO HÀM HÀM HỢP: LUÔN NHÂN THÊM u'(x)</text>
    <text x="280" y="154" text-anchor="middle" font-size="11.5" fill="#312e81">(uⁿ)' = n·uⁿ⁻¹·u' • (√u)' = u'/(2√u) • (sin u)' = u'·cos u • (cos u)' = -u'·sin u</text>
    <text x="280" y="180" text-anchor="middle" font-size="11.5" fill="#065f46">(eᵘ)' = u'·eᵘ • (aᵘ)' = u'·aᵘ·ln a • (ln u)' = u'/u • (logₐu)' = u'/(u·ln a)</text>
  </svg>`,

  33: `<svg viewBox="0 0 560 220" class="w-full h-auto">
    <rect width="560" height="220" rx="16" fill="#f8fafc" stroke="#e2e8f0"/>
    <!-- 3-stage derivative pipeline: s(t) -> v(t) -> a(t) -->
    <rect x="25" y="45" width="150" height="130" rx="14" fill="#eef2ff" stroke="#818cf8" stroke-width="2"/>
    <text x="100" y="75" text-anchor="middle" font-size="13" font-weight="bold" fill="#312e81">1. LI ĐỘ / QUÃNG ĐƯỜNG</text>
    <text x="100" y="108" text-anchor="middle" font-size="15" font-weight="bold" fill="#4f46e5">s = s(t)</text>
    <text x="100" y="138" text-anchor="middle" font-size="11" fill="#475569">Đơn vị: m, cm, km</text>
    <text x="100" y="158" text-anchor="middle" font-size="10.5" fill="#64748b">VD: x = A cos(ωt + φ)</text>
    <line x1="175" y1="110" x2="205" y2="110" stroke="#4f46e5" stroke-width="3"/>
    <rect x="205" y="45" width="150" height="130" rx="14" fill="#ecfdf5" stroke="#34d399" stroke-width="2"/>
    <text x="280" y="75" text-anchor="middle" font-size="13" font-weight="bold" fill="#065f46">2. VẬN TỐC (CẤP 1)</text>
    <text x="280" y="108" text-anchor="middle" font-size="15" font-weight="bold" fill="#059669">v(t) = s'(t)</text>
    <text x="280" y="138" text-anchor="middle" font-size="11" fill="#475569">Đơn vị: m/s, cm/s</text>
    <text x="280" y="158" text-anchor="middle" font-size="10.5" fill="#64748b">v = -ωA sin(ωt + φ)</text>
    <line x1="355" y1="110" x2="385" y2="110" stroke="#059669" stroke-width="3"/>
    <rect x="385" y="45" width="150" height="130" rx="14" fill="#fff1f2" stroke="#fda4af" stroke-width="2"/>
    <text x="460" y="75" text-anchor="middle" font-size="13" font-weight="bold" fill="#be123c">3. GIA TỐC (CẤP 2)</text>
    <text x="460" y="108" text-anchor="middle" font-size="15" font-weight="bold" fill="#dc2626">a(t) = v'(t) = s''(t)</text>
    <text x="460" y="138" text-anchor="middle" font-size="11" fill="#475569">Đơn vị: m/s², cm/s²</text>
    <text x="460" y="158" text-anchor="middle" font-size="10.5" fill="#64748b">a = -ω²x(t)</text>
  </svg>`
};

module.exports = { diagrams };
