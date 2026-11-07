// toan12_svgs.js - 8 High-Resolution SVG diagrams for Toán 12
module.exports = {
  svg1_variation_and_graph: `
  <svg viewBox="0 0 850 420" class="w-full h-auto max-w-4xl mx-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm" xmlns="http://www.w3.org/2000/svg">
    <!-- Background Grid -->
    <defs>
      <pattern id="grid12_1" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" class="text-slate-100 dark:text-slate-800/40" stroke-width="1"/>
      </pattern>
      <marker id="arrow_svg1" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="currentColor" class="text-indigo-600 dark:text-indigo-400"/>
      </marker>
    </defs>
    <rect width="850" height="420" fill="url(#grid12_1)" />
    
    <!-- Title -->
    <text x="425" y="30" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor" class="text-slate-800 dark:text-slate-100">SƠ ĐỒ 1: BẢNG BIẾN THIÊN & ĐỒ THỊ HÀM PHÂN THỨC HỮU TỈ CÓ TIỆM CẬN</text>
    
    <!-- LEFT PANEL: BẢNG BIẾN THIÊN -->
    <g transform="translate(30, 60)">
      <rect width="360" height="320" rx="8" fill="none" stroke="currentColor" class="text-slate-300 dark:text-slate-700" stroke-width="1.5"/>
      <line x1="0" y1="50" x2="360" y2="50" stroke="currentColor" class="text-slate-300 dark:text-slate-700" stroke-width="1.5"/>
      <line x1="0" y1="100" x2="360" y2="100" stroke="currentColor" class="text-slate-300 dark:text-slate-700" stroke-width="1.5"/>
      <line x1="70" y1="0" x2="70" y2="320" stroke="currentColor" class="text-slate-300 dark:text-slate-700" stroke-width="1.5"/>
      
      <!-- Double vertical line at x = 1 (discontinuity) -->
      <line x1="210" y1="50" x2="210" y2="320" stroke="currentColor" class="text-rose-500" stroke-width="2"/>
      <line x1="215" y1="50" x2="215" y2="320" stroke="currentColor" class="text-rose-500" stroke-width="2"/>
      
      <!-- Labels -->
      <text x="35" y="32" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor" class="text-slate-700 dark:text-slate-300">x</text>
      <text x="35" y="82" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor" class="text-slate-700 dark:text-slate-300">y'</text>
      <text x="35" y="210" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor" class="text-slate-700 dark:text-slate-300">y</text>
      
      <!-- Row x values -->
      <text x="95" y="32" text-anchor="middle" font-size="13" fill="currentColor" class="text-slate-600 dark:text-slate-400">-∞</text>
      <text x="212" y="32" text-anchor="middle" font-size="13" font-weight="bold" fill="currentColor" class="text-rose-600 dark:text-rose-400">1</text>
      <text x="330" y="32" text-anchor="middle" font-size="13" fill="currentColor" class="text-slate-600 dark:text-slate-400">+∞</text>
      
      <!-- Row y' values -->
      <text x="145" y="82" text-anchor="middle" font-size="18" font-weight="bold" fill="currentColor" class="text-rose-600">-</text>
      <text x="280" y="82" text-anchor="middle" font-size="18" font-weight="bold" fill="currentColor" class="text-rose-600">-</text>
      
      <!-- Row y arrows & limits -->
      <text x="95" y="130" text-anchor="middle" font-size="12" fill="currentColor" class="text-indigo-600 dark:text-indigo-400">2 (TCN)</text>
      <path d="M 115 135 L 195 285" fill="none" stroke="currentColor" class="text-indigo-600 dark:text-indigo-400" stroke-width="2" marker-end="url(#arrow_svg1)"/>
      <text x="195" y="305" text-anchor="middle" font-size="12" fill="currentColor" class="text-rose-600">-∞</text>
      
      <text x="235" y="130" text-anchor="middle" font-size="12" fill="currentColor" class="text-rose-600">+∞</text>
      <path d="M 245 135 L 315 285" fill="none" stroke="currentColor" class="text-indigo-600 dark:text-indigo-400" stroke-width="2" marker-end="url(#arrow_svg1)"/>
      <text x="330" y="305" text-anchor="middle" font-size="12" fill="currentColor" class="text-indigo-600 dark:text-indigo-400">2 (TCN)</text>
      
      <text x="180" y="315" text-anchor="middle" font-size="11" font-style="italic" fill="currentColor" class="text-slate-500">Nghịch biến trên (-∞; 1) và (1; +∞)</text>
    </g>
    
    <!-- RIGHT PANEL: ĐỒ THỊ HYPERBOL VỚI 2 TIỆM CẬN -->
    <g transform="translate(430, 60)">
      <rect width="390" height="320" rx="8" fill="none" stroke="currentColor" class="text-slate-300 dark:text-slate-700" stroke-width="1.5"/>
      
      <!-- Coordinate Axes -->
      <!-- Ox (y=0 at y_coord = 230) -->
      <line x1="20" y1="230" x2="370" y2="230" stroke="currentColor" class="text-slate-400 dark:text-slate-500" stroke-width="1.5" marker-end="url(#arrow_svg1)"/>
      <text x="365" y="248" font-size="13" font-weight="bold" fill="currentColor" class="text-slate-700 dark:text-slate-300">x</text>
      
      <!-- Oy (x=0 at x_coord = 120) -->
      <line x1="120" y1="300" x2="120" y2="20" stroke="currentColor" class="text-slate-400 dark:text-slate-500" stroke-width="1.5" marker-end="url(#arrow_svg1)"/>
      <text x="105" y="30" font-size="13" font-weight="bold" fill="currentColor" class="text-slate-700 dark:text-slate-300">y</text>
      <text x="108" y="245" font-size="11" fill="currentColor" class="text-slate-500">O</text>
      
      <!-- Asymptotes (Dashed) -->
      <!-- Vertical Asymptote x = 1 (at x_coord = 190) -->
      <line x1="190" y1="20" x2="190" y2="300" stroke="currentColor" class="text-rose-500 dark:text-rose-400" stroke-width="1.8" stroke-dasharray="5,4"/>
      <text x="195" y="45" font-size="11" font-weight="bold" fill="currentColor" class="text-rose-600 dark:text-rose-400">TCĐ: x = 1</text>
      
      <!-- Horizontal Asymptote y = 2 (at y_coord = 140) -->
      <line x1="20" y1="140" x2="370" y2="140" stroke="currentColor" class="text-emerald-600 dark:text-emerald-400" stroke-width="1.8" stroke-dasharray="5,4"/>
      <text x="290" y="132" font-size="11" font-weight="bold" fill="currentColor" class="text-emerald-600 dark:text-emerald-400">TCN: y = 2</text>
      
      <!-- Center of Symmetry I(1; 2) -->
      <circle cx="190" cy="140" r="4.5" fill="currentColor" class="text-purple-600 dark:text-purple-400"/>
      <text x="200" y="155" font-size="11" font-weight="bold" fill="currentColor" class="text-purple-600 dark:text-purple-400">I(1; 2)</text>
      
      <!-- Hyperbola Branch 1: x < 1 -->
      <path d="M 30 148 Q 120 160 150 200 T 178 295" fill="none" stroke="currentColor" class="text-indigo-600 dark:text-indigo-400" stroke-width="2.5"/>
      <!-- Intercept (0; -1) at (120, 275) -->
      <circle cx="120" cy="275" r="3.5" fill="currentColor" class="text-indigo-600"/>
      <text x="80" y="278" font-size="10" fill="currentColor" class="text-slate-600 dark:text-slate-400">(0; -1)</text>
      
      <!-- Hyperbola Branch 2: x > 1 -->
      <path d="M 202 25 Q 220 90 250 120 T 360 133" fill="none" stroke="currentColor" class="text-indigo-600 dark:text-indigo-400" stroke-width="2.5"/>
      
      <text x="195" y="315" text-anchor="middle" font-size="11" font-style="italic" fill="currentColor" class="text-slate-500">Đồ thị y = (2x - 1)/(x - 1) với tâm đối xứng I</text>
    </g>
  </svg>
  `,

  svg2_box_vector_rule: `
  <svg viewBox="0 0 750 380" class="w-full h-auto max-w-3xl mx-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrow_red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#ef4444"/>
      </marker>
      <marker id="arrow_blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#3b82f6"/>
      </marker>
      <marker id="arrow_emerald" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#10b981"/>
      </marker>
      <marker id="arrow_purple" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#8b5cf6"/>
      </marker>
    </defs>
    
    <text x="375" y="32" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor" class="text-slate-800 dark:text-slate-100">SƠ ĐỒ 2: QUY TẮC HÌNH HỘP VECTƠ TRONG KHÔNG GIAN</text>
    <text x="375" y="55" text-anchor="middle" font-size="13" font-weight="semibold" fill="currentColor" class="text-purple-600 dark:text-purple-400">AB + AD + AA' = AC'</text>
    
    <!-- 3D Parallelepiped Box -->
    <!-- Base vertices: A(180, 270), B(430, 270), C(530, 200), D(280, 200) -->
    <!-- Top vertices: A'(180, 140), B'(430, 140), C'(530, 70), D'(280, 70) -->
    
    <!-- Hidden back edges (dashed) -->
    <line x1="280" y1="200" x2="180" y2="270" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
    <line x1="280" y1="200" x2="530" y2="200" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
    <line x1="280" y1="200" x2="280" y2="70" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
    
    <!-- Outer solid edges -->
    <line x1="180" y1="270" x2="430" y2="270" stroke="#64748b" stroke-width="1.5"/>
    <line x1="430" y1="270" x2="530" y2="200" stroke="#64748b" stroke-width="1.5"/>
    <line x1="180" y1="140" x2="430" y2="140" stroke="#64748b" stroke-width="1.5"/>
    <line x1="430" y1="140" x2="530" y2="70" stroke="#64748b" stroke-width="1.5"/>
    <line x1="530" y1="70" x2="280" y2="70" stroke="#64748b" stroke-width="1.5"/>
    <line x1="280" y1="70" x2="180" y2="140" stroke="#64748b" stroke-width="1.5"/>
    <line x1="430" y1="270" x2="430" y2="140" stroke="#64748b" stroke-width="1.5"/>
    <line x1="530" y1="200" x2="530" y2="70" stroke="#64748b" stroke-width="1.5"/>
    
    <!-- BASE VECTORS WITH ARROWS FROM A -->
    <!-- Vector AB (Blue) -->
    <line x1="180" y1="270" x2="420" y2="270" stroke="#3b82f6" stroke-width="3" marker-end="url(#arrow_blue)"/>
    <text x="300" y="295" font-size="13" font-weight="bold" fill="#3b82f6">AB</text>
    
    <!-- Vector AD (Emerald, dashed since AD is hidden) -->
    <line x1="180" y1="270" x2="275" y2="204" stroke="#10b981" stroke-width="3" stroke-dasharray="5,3" marker-end="url(#arrow_emerald)"/>
    <text x="215" y="225" font-size="13" font-weight="bold" fill="#10b981">AD</text>
    
    <!-- Vector AA' (Red) -->
    <line x1="180" y1="270" x2="180" y2="150" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow_red)"/>
    <text x="145" y="205" font-size="13" font-weight="bold" fill="#ef4444">AA'</text>
    
    <!-- RESULTANT MAIN DIAGONAL VECTOR AC' (Purple) -->
    <line x1="180" y1="270" x2="522" y2="76" stroke="#8b5cf6" stroke-width="3.5" marker-end="url(#arrow_purple)"/>
    <text x="350" y="150" font-size="14" font-weight="extrabold" fill="#8b5cf6">AC' (Vectơ đường chéo)</text>
    
    <!-- Vertices points & labels -->
    <circle cx="180" cy="270" r="5" fill="#1e293b"/>
    <text x="160" y="285" font-size="14" font-weight="bold" fill="currentColor" class="text-slate-800 dark:text-slate-100">A</text>
    
    <circle cx="430" cy="270" r="4" fill="#64748b"/>
    <text x="440" y="285" font-size="14" font-weight="bold" fill="currentColor" class="text-slate-700 dark:text-slate-300">B</text>
    
    <circle cx="530" cy="200" r="4" fill="#64748b"/>
    <text x="545" y="205" font-size="14" font-weight="bold" fill="currentColor" class="text-slate-700 dark:text-slate-300">C</text>
    
    <circle cx="280" cy="200" r="4" fill="#94a3b8"/>
    <text x="285" y="195" font-size="14" font-weight="bold" fill="currentColor" class="text-slate-500">D</text>
    
    <circle cx="180" cy="140" r="4" fill="#64748b"/>
    <text x="160" y="135" font-size="14" font-weight="bold" fill="currentColor" class="text-slate-700 dark:text-slate-300">A'</text>
    
    <circle cx="430" cy="140" r="4" fill="#64748b"/>
    <text x="440" y="135" font-size="14" font-weight="bold" fill="currentColor" class="text-slate-700 dark:text-slate-300">B'</text>
    
    <circle cx="530" cy="70" r="5" fill="#8b5cf6"/>
    <text x="545" y="70" font-size="14" font-weight="bold" fill="#8b5cf6">C'</text>
    
    <circle cx="280" cy="70" r="4" fill="#64748b"/>
    <text x="285" y="60" font-size="14" font-weight="bold" fill="currentColor" class="text-slate-700 dark:text-slate-300">D'</text>
    
    <!-- Legend Box -->
    <rect x="520" y="280" width="200" height="85" rx="6" fill="currentColor" class="text-slate-50 dark:text-slate-800/80" stroke="currentColor" stroke-width="1"/>
    <text x="535" y="302" font-size="11" font-weight="bold" fill="#ef4444">■ Chiều cao: AA'</text>
    <text x="535" y="322" font-size="11" font-weight="bold" fill="#3b82f6">■ Chiều dài: AB</text>
    <text x="535" y="342" font-size="11" font-weight="bold" fill="#10b981">■ Chiều rộng: AD</text>
    <text x="535" y="358" font-size="11" font-weight="bold" fill="#8b5cf6">■ Tổng = AC'</text>
  </svg>
  `,

  svg3_oxyz_coordinate_system: `
  <svg viewBox="0 0 750 400" class="w-full h-auto max-w-3xl mx-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrow_axis" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="currentColor" class="text-slate-700 dark:text-slate-300"/>
      </marker>
    </defs>
    
    <text x="375" y="30" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor" class="text-slate-800 dark:text-slate-100">SƠ ĐỒ 3: HỆ TRỤC TỌA ĐỘ Oxyz & HÌNH CHIẾU VUÔNG GÓC ĐIỂM M(x; y; z)</text>
    
    <!-- Origin O at (280, 270) -->
    <!-- Axis Oz: Vertical UP -->
    <line x1="280" y1="270" x2="280" y2="40" stroke="currentColor" class="text-slate-700 dark:text-slate-300" stroke-width="2" marker-end="url(#arrow_axis)"/>
    <text x="270" y="35" font-size="14" font-weight="bold" fill="currentColor" class="text-slate-900 dark:text-slate-100">z (Trục cao)</text>
    
    <!-- Axis Oy: Horizontal RIGHT -->
    <line x1="280" y1="270" x2="680" y2="270" stroke="currentColor" class="text-slate-700 dark:text-slate-300" stroke-width="2" marker-end="url(#arrow_axis)"/>
    <text x="690" y="275" font-size="14" font-weight="bold" fill="currentColor" class="text-slate-900 dark:text-slate-100">y (Trục tung)</text>
    
    <!-- Axis Ox: Oblique DOWN-LEFT (Angle ~ 135 deg) -->
    <line x1="280" y1="270" x2="100" y2="370" stroke="currentColor" class="text-slate-700 dark:text-slate-300" stroke-width="2" marker-end="url(#arrow_axis)"/>
    <text x="80" y="380" font-size="14" font-weight="bold" fill="currentColor" class="text-slate-900 dark:text-slate-100">x (Trục hoành)</text>
    
    <circle cx="280" cy="270" r="4" fill="currentColor" class="text-slate-800 dark:text-slate-200"/>
    <text x="260" y="285" font-size="13" font-weight="bold" fill="currentColor" class="text-slate-600 dark:text-slate-400">O(0;0;0)</text>
    
    <!-- Unit vectors i, j, k -->
    <line x1="280" y1="270" x2="235" y2="295" stroke="#ef4444" stroke-width="3"/>
    <text x="225" y="315" font-size="12" font-weight="bold" fill="#ef4444">i</text>
    
    <line x1="280" y1="270" x2="340" y2="270" stroke="#3b82f6" stroke-width="3"/>
    <text x="330" y="260" font-size="12" font-weight="bold" fill="#3b82f6">j</text>
    
    <line x1="280" y1="270" x2="280" y2="210" stroke="#10b981" stroke-width="3"/>
    <text x="290" y="220" font-size="12" font-weight="bold" fill="#10b981">k</text>
    
    <!-- POINT M(x; y; z) coordinates: x=3 (oblique), y=4 (right), z=4 (up) -->
    <!-- Projections:
         Mx(190, 320)
         My(520, 270)
         Mz(280, 110)
         Mxy(430, 320) = Mx + My offset
         M(430, 160) = Mxy shifted up by z
         Myz(520, 110)
         Mzx(190, 160)
    -->
    
    <!-- Dashed projection box lines -->
    <!-- Floor (Oxy plane) -->
    <line x1="190" y1="320" x2="430" y2="320" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="4,3"/>
    <line x1="520" y1="270" x2="430" y2="320" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,3"/>
    
    <!-- Vertical up to M -->
    <line x1="430" y1="320" x2="430" y2="160" stroke="#10b981" stroke-width="2" stroke-dasharray="4,3"/>
    
    <!-- Wall (Oyz plane) -->
    <line x1="280" y1="110" x2="520" y2="110" stroke="#3b82f6" stroke-width="1.2" stroke-dasharray="4,3"/>
    <line x1="520" y1="270" x2="520" y2="110" stroke="#10b981" stroke-width="1.2" stroke-dasharray="4,3"/>
    <line x1="520" y1="110" x2="430" y2="160" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="4,3"/>
    
    <!-- Wall (Ozx plane) -->
    <line x1="280" y1="110" x2="190" y2="160" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="4,3"/>
    <line x1="190" y1="320" x2="190" y2="160" stroke="#10b981" stroke-width="1.2" stroke-dasharray="4,3"/>
    <line x1="190" y1="160" x2="430" y2="160" stroke="#3b82f6" stroke-width="1.2" stroke-dasharray="4,3"/>
    
    <!-- Projection Points -->
    <circle cx="190" cy="320" r="3.5" fill="#ef4444"/>
    <text x="145" y="335" font-size="11" fill="currentColor" class="text-slate-600 dark:text-slate-400">M_x(x;0;0)</text>
    
    <circle cx="520" cy="270" r="3.5" fill="#3b82f6"/>
    <text x="525" y="285" font-size="11" fill="currentColor" class="text-slate-600 dark:text-slate-400">M_y(0;y;0)</text>
    
    <circle cx="280" cy="110" r="3.5" fill="#10b981"/>
    <text x="215" y="115" font-size="11" fill="currentColor" class="text-slate-600 dark:text-slate-400">M_z(0;0;z)</text>
    
    <circle cx="430" cy="320" r="4" fill="#8b5cf6"/>
    <text x="440" y="335" font-size="12" font-weight="bold" fill="#8b5cf6">M_xy(x;y;0)</text>
    
    <!-- Main Point M(x; y; z) -->
    <circle cx="430" cy="160" r="6" fill="#f59e0b"/>
    <circle cx="430" cy="160" r="8" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="445" y="155" font-size="14" font-weight="extrabold" fill="#d97706">M(x; y; z)</text>
    
    <!-- Vector OM (Position Vector) -->
    <line x1="280" y1="270" x2="424" y2="165" stroke="#d97706" stroke-width="2.5"/>
    <text x="330" y="205" font-size="13" font-weight="bold" fill="#d97706">OM = x.i + y.j + z.k</text>
  </svg>
  `,

  svg4_grouped_data_quartiles: `
  <svg viewBox="0 0 780 380" class="w-full h-auto max-w-3xl mx-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm" xmlns="http://www.w3.org/2000/svg">
    <text x="390" y="30" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor" class="text-slate-800 dark:text-slate-100">SƠ ĐỒ 4: MẪU SỐ LIỆU GHÉP NHÓM & CÔNG THỨC NỘI SUY TỨ PHÂN VỊ [Q1, Q3]</text>
    
    <!-- Histogram Bars -->
    <!-- Classes: [0; 5) m=4, [5; 10) m=14, [10; 15) m=16, [15; 20) m=6. Total n=40 -->
    <!-- Base line y = 260 -->
    <!-- Bar width = 120. Scale: 1 unit freq = 10 px height -->
    
    <!-- Axis lines -->
    <line x1="80" y1="260" x2="680" y2="260" stroke="currentColor" class="text-slate-400" stroke-width="2"/>
    <line x1="80" y1="260" x2="80" y2="60" stroke="currentColor" class="text-slate-400" stroke-width="2"/>
    <text x="70" y="55" font-size="12" fill="currentColor" class="text-slate-500">Tần số (m)</text>
    <text x="680" y="280" font-size="12" fill="currentColor" class="text-slate-500">Thời gian (h)</text>
    
    <!-- Bar 1: [0; 5) m=4 (height 40) -->
    <rect x="110" y="220" width="120" height="40" fill="#93c5fd" stroke="#3b82f6" stroke-width="1.5" class="opacity-80"/>
    <text x="170" y="210" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">m₁ = 4</text>
    
    <!-- Bar 2: [5; 10) m=14 (height 140) -> CONTAINS Q1 (pos 10) -->
    <rect x="230" y="120" width="120" height="140" fill="#fde047" stroke="#eab308" stroke-width="2" class="opacity-80"/>
    <text x="290" y="110" text-anchor="middle" font-size="12" font-weight="bold" fill="#854d0e">m₂ = 14 (Chứa Q₁)</text>
    
    <!-- Bar 3: [10; 15) m=16 (height 160) -> CONTAINS Q2 & Q3 (pos 20, 30) -->
    <rect x="350" y="100" width="120" height="160" fill="#86efac" stroke="#22c55e" stroke-width="2" class="opacity-80"/>
    <text x="410" y="90" text-anchor="middle" font-size="12" font-weight="bold" fill="#15803d">m₃ = 16 (Chứa Q₂ & Q₃)</text>
    
    <!-- Bar 4: [15; 20) m=6 (height 60) -->
    <rect x="470" y="200" width="120" height="60" fill="#cbd5e1" stroke="#64748b" stroke-width="1.5" class="opacity-80"/>
    <text x="530" y="190" text-anchor="middle" font-size="12" font-weight="bold" fill="#334155">m₄ = 6</text>
    
    <!-- Class boundaries on x-axis -->
    <text x="110" y="280" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">0</text>
    <text x="230" y="280" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">5</text>
    <text x="350" y="280" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">10</text>
    <text x="470" y="280" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">15</text>
    <text x="590" y="280" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">20</text>
    
    <!-- Range Indicator R = 20 - 0 = 20 -->
    <line x1="110" y1="305" x2="590" y2="305" stroke="#6366f1" stroke-width="2"/>
    <line x1="110" y1="298" x2="110" y2="312" stroke="#6366f1" stroke-width="2"/>
    <line x1="590" y1="298" x2="590" y2="312" stroke="#6366f1" stroke-width="2"/>
    <text x="350" y="325" text-anchor="middle" font-size="13" font-weight="bold" fill="#4f46e5">Khoảng biến thiên R = a_{k+1} - a₁ = 20 - 0 = 20</text>
    
    <!-- Quartile Markers Q1, Q2, Q3 -->
    <!-- Q1 at 5 + (10 - 4)/14 * 5 = 7.14 -> x ≈ 281 -->
    <line x1="281" y1="120" x2="281" y2="260" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4,2"/>
    <circle cx="281" cy="260" r="4" fill="#dc2626"/>
    <text x="281" y="348" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">Q₁ ≈ 7,14</text>
    
    <!-- Q3 at 10 + (30 - 18)/16 * 5 = 13.75 -> x ≈ 440 -->
    <line x1="440" y1="100" x2="440" y2="260" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4,2"/>
    <circle cx="440" cy="260" r="4" fill="#dc2626"/>
    <text x="440" y="348" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">Q₃ ≈ 13,75</text>
    
    <!-- Interquartile Range Delta_Q = Q3 - Q1 -->
    <line x1="281" y1="360" x2="440" y2="360" stroke="#dc2626" stroke-width="2.5"/>
    <text x="360" y="375" text-anchor="middle" font-size="12" font-weight="extrabold" fill="#dc2626">ΔQ = Q₃ - Q₁ (50% dữ liệu lõi)</text>
  </svg>
  `,

  svg5_integral_area_and_revolution: `
  <svg viewBox="0 0 850 400" class="w-full h-auto max-w-4xl mx-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm" xmlns="http://www.w3.org/2000/svg">
    <text x="425" y="30" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor" class="text-slate-800 dark:text-slate-100">SƠ ĐỒ 5: ỨNG DỤNG TÍCH PHÂN — DIỆN TÍCH HÌNH PHẲNG & THỂ TÍCH TRÒN XOAY</text>
    
    <!-- LEFT PANEL: DIỆN TÍCH GIỮA HAI ĐỒ THỊ S = ∫ |f - g| dx -->
    <g transform="translate(30, 60)">
      <rect width="370" height="310" rx="8" fill="none" stroke="currentColor" class="text-slate-300 dark:text-slate-700" stroke-width="1.5"/>
      <text x="185" y="25" text-anchor="middle" font-size="13" font-weight="bold" fill="currentColor" class="text-indigo-600 dark:text-indigo-400">1. Diện tích S = ∫ₐᵇ |f(x) - g(x)| dx</text>
      
      <!-- Coordinate system -->
      <line x1="20" y1="230" x2="350" y2="230" stroke="currentColor" class="text-slate-400" stroke-width="1.5"/>
      <line x1="50" y1="270" x2="50" y2="40" stroke="currentColor" class="text-slate-400" stroke-width="1.5"/>
      <text x="345" y="248" font-size="12" fill="currentColor">x</text>
      <text x="35" y="50" font-size="12" fill="currentColor">y</text>
      
      <!-- Curve f(x) (Blue upper curve) -->
      <!-- Curve g(x) (Red lower curve) -->
      <!-- Intersections at a=x=100 and b=x=300 -->
      <!-- Shaded area between curves -->
      <path d="M 100 180 Q 200 90 300 180 Q 200 210 100 180 Z" fill="#93c5fd" fill-opacity="0.45" stroke="none"/>
      
      <!-- Upper curve y = f(x) -->
      <path d="M 70 200 Q 200 80 330 200" fill="none" stroke="#2563eb" stroke-width="2.5"/>
      <text x="200" y="80" text-anchor="middle" font-size="12" font-weight="bold" fill="#2563eb">y = f(x)</text>
      
      <!-- Lower curve y = g(x) -->
      <path d="M 70 160 Q 200 220 330 160" fill="none" stroke="#dc2626" stroke-width="2.5"/>
      <text x="200" y="235" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">y = g(x)</text>
      
      <!-- Vertical strip dx at x = 190 -->
      <rect x="190" y="112" width="16" height="84" fill="#3b82f6" fill-opacity="0.5" stroke="#1d4ed8" stroke-width="1"/>
      <text x="198" y="160" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">dx</text>
      
      <!-- Boundary lines at a and b -->
      <line x1="100" y1="180" x2="100" y2="230" stroke="#64748b" stroke-dasharray="3,3"/>
      <line x1="300" y1="180" x2="300" y2="230" stroke="#64748b" stroke-dasharray="3,3"/>
      <text x="100" y="248" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">a</text>
      <text x="300" y="248" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">b</text>
      
      <text x="185" y="295" text-anchor="middle" font-size="11" font-style="italic" fill="currentColor" class="text-slate-500">Miền phẳng tô màu được chia thành các dải vi phân dx</text>
    </g>
    
    <!-- RIGHT PANEL: THỂ TÍCH TRÒN XOAY V = π ∫ [f(x)]² dx -->
    <g transform="translate(440, 60)">
      <rect width="380" height="310" rx="8" fill="none" stroke="currentColor" class="text-slate-300 dark:text-slate-700" stroke-width="1.5"/>
      <text x="190" y="25" text-anchor="middle" font-size="13" font-weight="bold" fill="currentColor" class="text-emerald-600 dark:text-emerald-400">2. Thể tích tròn xoay V = π ∫ₐᵇ [f(x)]² dx</text>
      
      <!-- Axis of revolution Ox -->
      <line x1="20" y1="155" x2="360" y2="155" stroke="currentColor" class="text-slate-400" stroke-width="2"/>
      <text x="355" y="145" font-size="12" font-weight="bold" fill="currentColor">Ox</text>
      
      <!-- Revolution Body profile -->
      <!-- Left disk at x = 80 (radius 30), Right disk at x = 280 (radius 70) -->
      <path d="M 80 125 C 150 110, 220 90, 280 85 L 280 225 C 220 220, 150 200, 80 185 Z" fill="#bbf7d0" fill-opacity="0.35" stroke="#16a34a" stroke-width="1.8"/>
      
      <!-- Left base ellipse -->
      <ellipse cx="80" cy="155" rx="10" ry="30" fill="#86efac" fill-opacity="0.6" stroke="#16a34a" stroke-width="1.5"/>
      <!-- Right base ellipse -->
      <ellipse cx="280" cy="155" rx="20" ry="70" fill="#86efac" fill-opacity="0.6" stroke="#16a34a" stroke-width="1.5"/>
      
      <!-- Circular slice disk at x = 180 (radius r = f(x) = 50) -->
      <ellipse cx="180" cy="155" rx="15" ry="50" fill="#22c55e" fill-opacity="0.75" stroke="#15803d" stroke-width="2"/>
      <!-- Radius line -->
      <line x1="180" y1="155" x2="180" y2="105" stroke="#dc2626" stroke-width="2"/>
      <text x="195" y="130" font-size="11" font-weight="bold" fill="#dc2626">r = f(x)</text>
      
      <text x="80" y="265" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">x = a</text>
      <text x="280" y="265" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">x = b</text>
      
      <text x="190" y="295" text-anchor="middle" font-size="11" font-style="italic" fill="currentColor" class="text-slate-500">Mặt cắt tròn xoay là hình tròn có diện tích S(x) = π[f(x)]²</text>
    </g>
  </svg>
  `,

  svg6_cross_product_and_distance: `
  <svg viewBox="0 0 750 380" class="w-full h-auto max-w-3xl mx-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrow_purple6" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#7c3aed"/>
      </marker>
      <marker id="arrow_blue6" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#2563eb"/>
      </marker>
      <marker id="arrow_emerald6" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#059669"/>
      </marker>
    </defs>
    
    <text x="375" y="30" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor" class="text-slate-800 dark:text-slate-100">SƠ ĐỒ 6: TÍCH CÓ HƯỚNG [u, v] & KHOẢNG CÁCH TỪ ĐIỂM ĐẾN MẶT PHẲNG</text>
    
    <!-- Plane (P) represented as a 3D tilted parallelogram -->
    <!-- Vertices: (80, 260), (480, 260), (620, 170), (220, 170) -->
    <polygon points="80,260 480,260 620,170 220,170" fill="#f8fafc" class="dark:fill-slate-800" stroke="#94a3b8" stroke-width="2"/>
    <text x="120" y="245" font-size="16" font-weight="extrabold" fill="#475569">Mặt phẳng (P): Ax + By + Cz + D = 0</text>
    
    <!-- Base point in plane A(280, 220) -->
    <!-- Direction vector u (Blue) -->
    <line x1="280" y1="220" x2="420" y2="235" stroke="#2563eb" stroke-width="3" marker-end="url(#arrow_blue6)"/>
    <text x="430" y="240" font-size="13" font-weight="bold" fill="#2563eb">u</text>
    
    <!-- Direction vector v (Emerald) -->
    <line x1="280" y1="220" x2="350" y2="185" stroke="#059669" stroke-width="3" marker-end="url(#arrow_emerald6)"/>
    <text x="360" y="185" font-size="13" font-weight="bold" fill="#059669">v</text>
    
    <!-- Normal Vector n = [u, v] (Purple, pointing straight UP perpendicular to plane) -->
    <line x1="280" y1="220" x2="280" y2="70" stroke="#7c3aed" stroke-width="3.5" marker-end="url(#arrow_purple6)"/>
    <text x="290" y="80" font-size="14" font-weight="extrabold" fill="#7c3aed">n = [u, v] ⊥ (P)</text>
    
    <!-- Right angle symbols on plane for normal vector -->
    <path d="M 280 205 L 295 205 L 295 220" fill="none" stroke="#7c3aed" stroke-width="1.5"/>
    
    <!-- External Point M₀(x₀; y₀; z₀) at (510, 80) -->
    <circle cx="510" cy="80" r="5" fill="#dc2626"/>
    <text x="525" y="85" font-size="14" font-weight="bold" fill="#dc2626">M₀(x₀; y₀; z₀)</text>
    
    <!-- Perpendicular projection H onto (P) at (510, 215) -->
    <line x1="510" y1="80" x2="510" y2="215" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="5,3"/>
    <circle cx="510" cy="215" r="4" fill="#dc2626"/>
    <text x="525" y="225" font-size="13" font-weight="bold" fill="#dc2626">H (Hình chiếu vuông góc)</text>
    
    <!-- Distance Label d -->
    <text x="440" y="150" font-size="12" font-weight="bold" fill="#dc2626">d(M₀, P) = |Ax₀+By₀+Cz₀+D| / √(A²+B²+C²)</text>
    
    <!-- Right angle at H -->
    <path d="M 510 200 L 495 200 L 495 215" fill="none" stroke="#dc2626" stroke-width="1.5"/>
  </svg>
  `,

  svg7_spatial_angles: `
  <svg viewBox="0 0 850 360" class="w-full h-auto max-w-4xl mx-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm" xmlns="http://www.w3.org/2000/svg">
    <text x="425" y="28" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor" class="text-slate-800 dark:text-slate-100">SƠ ĐỒ 7: BA CÔNG THỨC TÍNH GÓC TRONG KHÔNG GIAN Oxyz</text>
    
    <!-- 1. GÓC GIỮA 2 ĐƯỜNG THẲNG (COS) -->
    <g transform="translate(20, 50)">
      <rect width="250" height="280" rx="8" fill="none" stroke="currentColor" class="text-slate-300 dark:text-slate-700" stroke-width="1.5"/>
      <text x="125" y="25" text-anchor="middle" font-size="13" font-weight="bold" fill="#2563eb">1. Hai đường thẳng</text>
      
      <!-- Line d1 -->
      <line x1="30" y1="220" x2="220" y2="80" stroke="#2563eb" stroke-width="2.5"/>
      <text x="210" y="75" font-size="12" font-weight="bold" fill="#2563eb">d₁ (u₁)</text>
      
      <!-- Line d2 -->
      <line x1="30" y1="100" x2="220" y2="210" stroke="#059669" stroke-width="2.5"/>
      <text x="210" y="225" font-size="12" font-weight="bold" fill="#059669">d₂ (u₂)</text>
      
      <!-- Angle arc φ -->
      <path d="M 140 145 A 25 25 0 0 0 140 165" fill="none" stroke="#dc2626" stroke-width="2"/>
      <text x="155" y="160" font-size="12" font-weight="bold" fill="#dc2626">φ</text>
      
      <!-- Formula -->
      <text x="125" y="250" text-anchor="middle" font-size="11.5" font-weight="bold" fill="currentColor">cos φ = |u₁ · u₂| / (|u₁||u₂|)</text>
      <text x="125" y="270" text-anchor="middle" font-size="11" fill="currentColor" class="text-slate-500">0° ≤ φ ≤ 90° (Luôn nhọn/vuông)</text>
    </g>
    
    <!-- 2. GÓC GIỮA ĐƯỜNG THẲNG VÀ MẶT PHẲNG (SIN) -->
    <g transform="translate(300, 50)">
      <rect width="250" height="280" rx="8" fill="none" stroke="currentColor" class="text-slate-300 dark:text-slate-700" stroke-width="1.5"/>
      <text x="125" y="25" text-anchor="middle" font-size="13" font-weight="bold" fill="#7c3aed">2. Đường thẳng & Mặt phẳng</text>
      
      <!-- Plane (P) -->
      <polygon points="20,200 200,200 230,160 50,160" fill="#f1f5f9" class="dark:fill-slate-800" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="40" y="195" font-size="11" font-weight="bold" fill="#64748b">(P)</text>
      
      <!-- Normal vector n (Purple) -->
      <line x1="120" y1="180" x2="120" y2="70" stroke="#7c3aed" stroke-width="2.5"/>
      <text x="125" y="80" font-size="12" font-weight="bold" fill="#7c3aed">n ⊥ (P)</text>
      
      <!-- Line d penetrating plane at (120, 180) -->
      <line x1="50" y1="230" x2="190" y2="100" stroke="#ea580c" stroke-width="2.5"/>
      <text x="195" y="95" font-size="12" font-weight="bold" fill="#ea580c">d (u)</text>
      
      <!-- Projection d' in plane -->
      <line x1="120" y1="180" x2="200" y2="180" stroke="#64748b" stroke-dasharray="3,3" stroke-width="2"/>
      
      <!-- Angle θ between line and plane -->
      <path d="M 145 155 A 25 25 0 0 1 155 180" fill="none" stroke="#dc2626" stroke-width="2"/>
      <text x="165" y="170" font-size="12" font-weight="bold" fill="#dc2626">θ</text>
      
      <!-- Formula -->
      <text x="125" y="250" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#dc2626">sin θ = |u · n| / (|u||n|)</text>
      <text x="125" y="270" text-anchor="middle" font-size="11" fill="currentColor" class="text-slate-500">Dùng hàm SIN vì n ⊥ (P)</text>
    </g>
    
    <!-- 3. GÓC GIỮA HAI MẶT PHẲNG (COS) -->
    <g transform="translate(580, 50)">
      <rect width="250" height="280" rx="8" fill="none" stroke="currentColor" class="text-slate-300 dark:text-slate-700" stroke-width="1.5"/>
      <text x="125" y="25" text-anchor="middle" font-size="13" font-weight="bold" fill="#059669">3. Hai mặt phẳng</text>
      
      <!-- Two intersecting planes -->
      <!-- Plane 1 -->
      <polygon points="20,180 180,180 230,130 70,130" fill="#dcfce7" class="dark:fill-slate-800" stroke="#16a34a" stroke-width="1.5"/>
      <!-- Plane 2 tilted -->
      <polygon points="20,180 180,180 150,70 10,70" fill="#bae6fd" class="dark:fill-slate-700" stroke="#0284c7" stroke-width="1.5" fill-opacity="0.6"/>
      
      <!-- Normal vector n1 -->
      <line x1="100" y1="155" x2="100" y2="70" stroke="#16a34a" stroke-width="2.5"/>
      <text x="105" y="80" font-size="11" font-weight="bold" fill="#16a34a">n₁</text>
      
      <!-- Normal vector n2 -->
      <line x1="90" y1="125" x2="160" y2="80" stroke="#0284c7" stroke-width="2.5"/>
      <text x="165" y="85" font-size="11" font-weight="bold" fill="#0284c7">n₂</text>
      
      <!-- Angle γ between two normals -->
      <path d="M 105 110 A 20 20 0 0 1 125 105" fill="none" stroke="#dc2626" stroke-width="2"/>
      <text x="120" y="125" font-size="12" font-weight="bold" fill="#dc2626">γ</text>
      
      <!-- Formula -->
      <text x="125" y="250" text-anchor="middle" font-size="11.5" font-weight="bold" fill="currentColor">cos γ = |n₁ · n₂| / (|n₁||n₂|)</text>
      <text x="125" y="270" text-anchor="middle" font-size="11" fill="currentColor" class="text-slate-500">γ = 90° ⇔ n₁ · n₂ = 0</text>
    </g>
  </svg>
  `,

  svg8_bayes_probability_tree: `
  <svg viewBox="0 0 820 400" class="w-full h-auto max-w-4xl mx-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm" xmlns="http://www.w3.org/2000/svg">
    <text x="410" y="30" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor" class="text-slate-800 dark:text-slate-100">SƠ ĐỒ 8: SƠ ĐỒ CÂY XÁC SUẤT TOÀN PHẦN VÀ CÔNG THỨC BAYES</text>
    
    <!-- Root Node (Population / Prior) -->
    <circle cx="70" cy="200" r="18" fill="#6366f1"/>
    <text x="70" y="205" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">Gốc</text>
    
    <!-- LEVEL 1: PARTITION (Hệ đầy đủ A và Not A) -->
    <!-- Branch to A (Top) -->
    <line x1="88" y1="190" x2="250" y2="110" stroke="#3b82f6" stroke-width="2.5"/>
    <text x="160" y="135" font-size="12" font-weight="bold" fill="#2563eb">P(A) = p</text>
    
    <circle cx="260" cy="110" r="16" fill="#3b82f6"/>
    <text x="260" y="115" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">A</text>
    
    <!-- Branch to Not A (Bottom) -->
    <line x1="88" y1="210" x2="250" y2="290" stroke="#64748b" stroke-width="2.5"/>
    <text x="160" y="270" font-size="12" font-weight="bold" fill="#475569">P(Ā) = 1 - p</text>
    
    <circle cx="260" cy="290" r="16" fill="#64748b"/>
    <text x="260" y="295" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">Ā</text>
    
    <!-- LEVEL 2: CONDITIONAL PROBABILITIES -->
    <!-- From A -> B -->
    <line x1="276" y1="102" x2="470" y2="65" stroke="#10b981" stroke-width="2"/>
    <text x="350" y="75" font-size="11.5" font-weight="bold" fill="#059669">P(B | A)</text>
    <circle cx="480" cy="65" r="14" fill="#10b981"/>
    <text x="480" y="70" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">B</text>
    <text x="560" y="70" font-size="12" font-weight="bold" fill="#047857">P(A ∩ B) = P(A) · P(B | A)</text>
    
    <!-- From A -> Not B -->
    <line x1="276" y1="118" x2="470" y2="155" stroke="#94a3b8" stroke-width="2"/>
    <text x="350" y="150" font-size="11.5" fill="#64748b">P(B̄ | A)</text>
    <circle cx="480" cy="155" r="14" fill="#94a3b8"/>
    <text x="480" y="160" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">B̄</text>
    <text x="560" y="160" font-size="12" fill="#64748b">P(A ∩ B̄) = P(A) · P(B̄ | A)</text>
    
    <!-- From Not A -> B -->
    <line x1="276" y1="282" x2="470" y2="245" stroke="#f59e0b" stroke-width="2"/>
    <text x="350" y="255" font-size="11.5" font-weight="bold" fill="#d97706">P(B | Ā)</text>
    <circle cx="480" cy="245" r="14" fill="#f59e0b"/>
    <text x="480" y="250" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">B</text>
    <text x="560" y="250" font-size="12" font-weight="bold" fill="#b45309">P(Ā ∩ B) = P(Ā) · P(B | Ā)</text>
    
    <!-- From Not A -> Not B -->
    <line x1="276" y1="298" x2="470" y2="335" stroke="#94a3b8" stroke-width="2"/>
    <text x="350" y="330" font-size="11.5" fill="#64748b">P(B̄ | Ā)</text>
    <circle cx="480" cy="335" r="14" fill="#94a3b8"/>
    <text x="480" y="340" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">B̄</text>
    <text x="560" y="340" font-size="12" fill="#64748b">P(Ā ∩ B̄) = P(Ā) · P(B̄ | Ā)</text>
    
    <!-- BOTTOM FORMULA BAR (BAYES & TOTAL PROBABILITY) -->
    <rect x="50" y="365" width="720" height="25" rx="5" fill="#f8fafc" class="dark:fill-slate-800" stroke="#cbd5e1" stroke-width="1"/>
    <text x="410" y="382" text-anchor="middle" font-size="12" font-weight="extrabold" fill="#4338ca">
      Xác suất toàn phần: P(B) = P(A)P(B|A) + P(Ā)P(B|Ā)  |  Bayes: P(A|B) = [P(A)P(B|A)] / P(B)
    </text>
  </svg>
  `
};
