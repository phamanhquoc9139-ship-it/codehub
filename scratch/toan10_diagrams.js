// scratch/toan10_diagrams.js
// Trọn bộ 30 mô hình toán học SVG cho Toán 10
module.exports = {
  1: `
<div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
  <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-xs">
    <span class="font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
      <i class="fa-solid fa-shapes"></i> Bảng chân trị logic: Mệnh đề kéo theo và tương đương
    </span>
    <span class="text-slate-400 font-medium">Mệnh đề logic</span>
  </div>
  <div class="w-full overflow-x-auto flex justify-center py-2">
    <svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
      <!-- Background Table Card -->
      <rect x="40" y="20" width="640" height="140" rx="12" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
      <!-- Header row -->
      <rect x="40" y="20" width="640" height="36" rx="12" fill="#0f172a"/>
      <line x1="40" y1="56" x2="680" y2="56" stroke="#334155" stroke-width="1.5"/>
      <!-- Vertical dividers -->
      <line x1="140" y1="20" x2="140" y2="160" stroke="#334155" stroke-width="1.5"/>
      <line x1="240" y1="20" x2="240" y2="160" stroke="#334155" stroke-width="1.5"/>
      <line x1="380" y1="20" x2="380" y2="160" stroke="#334155" stroke-width="1.5"/>
      <line x1="530" y1="20" x2="530" y2="160" stroke="#334155" stroke-width="1.5"/>
      <!-- Header labels -->
      <text x="90" y="44" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">Mệnh đề P</text>
      <text x="190" y="44" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">Mệnh đề Q</text>
      <text x="310" y="44" fill="#a855f7" font-size="13" font-weight="bold" text-anchor="middle">P ⇒ Q (Kéo theo)</text>
      <text x="455" y="44" fill="#34d399" font-size="13" font-weight="bold" text-anchor="middle">Q ⇒ P (Đảo)</text>
      <text x="605" y="44" fill="#fbbf24" font-size="13" font-weight="bold" text-anchor="middle">P ⇔ Q (Tương đương)</text>
      <!-- Rows -->
      <!-- Row 1: Đ - Đ -->
      <text x="90" y="80" fill="#22c55e" font-size="12" font-weight="bold" text-anchor="middle">Đúng (Đ)</text>
      <text x="190" y="80" fill="#22c55e" font-size="12" font-weight="bold" text-anchor="middle">Đúng (Đ)</text>
      <text x="310" y="80" fill="#22c55e" font-size="12" font-weight="bold" text-anchor="middle">Đúng (Đ)</text>
      <text x="455" y="80" fill="#22c55e" font-size="12" font-weight="bold" text-anchor="middle">Đúng (Đ)</text>
      <text x="605" y="80" fill="#22c55e" font-size="12" font-weight="bold" text-anchor="middle">Đúng (Đ)</text>
      <line x1="40" y1="92" x2="680" y2="92" stroke="#334155" stroke-width="1"/>
      <!-- Row 2: Đ - S -->
      <text x="90" y="114" fill="#22c55e" font-size="12" font-weight="bold" text-anchor="middle">Đúng (Đ)</text>
      <text x="190" y="114" fill="#ef4444" font-size="12" font-weight="bold" text-anchor="middle">Sai (S)</text>
      <text x="310" y="114" fill="#ef4444" font-size="13" font-weight="bold" text-anchor="middle">SAI (S) ⚠️</text>
      <text x="455" y="114" fill="#22c55e" font-size="12" font-weight="bold" text-anchor="middle">Đúng (Đ)</text>
      <text x="605" y="114" fill="#ef4444" font-size="12" font-weight="bold" text-anchor="middle">Sai (S)</text>
      <line x1="40" y1="126" x2="680" y2="126" stroke="#334155" stroke-width="1"/>
      <!-- Row 3 & 4 note -->
      <text x="90" y="148" fill="#ef4444" font-size="12" font-weight="bold" text-anchor="middle">Sai (S)</text>
      <text x="190" y="148" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle">Đúng / Sai</text>
      <text x="310" y="148" fill="#22c55e" font-size="12" font-weight="bold" text-anchor="middle">Luôn Đúng (Đ)</text>
      <text x="455" y="148" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle">Phụ thuộc Q</text>
      <text x="605" y="148" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle">Đúng khi cùng chân trị</text>
    </svg>
  </div>
</div>`,
  2: `
    <div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-xs">
        <span class="font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
          <i class="fa-solid fa-shapes"></i> Biểu đồ Ven minh họa các phép toán trên tập hợp: Hợp, Giao, Hiệu
        </span>
        <span class="text-slate-400 font-medium">Mệnh đề & Tập hợp</span>
      </div>
      <div class="w-full overflow-x-auto flex justify-center py-2">
        <svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <!-- Hình 1: Hợp A U B -->
    <g transform="translate(30, 20)">
      <circle cx="65" cy="65" r="45" fill="#3b82f6" fill-opacity="0.4" stroke="#3b82f6" stroke-width="2"/>
      <circle cx="125" cy="65" r="45" fill="#3b82f6" fill-opacity="0.4" stroke="#3b82f6" stroke-width="2"/>
      <text x="50" y="45" fill="#ffffff" font-size="12" font-weight="bold">A</text>
      <text x="140" y="45" fill="#ffffff" font-size="12" font-weight="bold">B</text>
      <text x="95" y="135" fill="#60a5fa" font-size="12" font-weight="bold" text-anchor="middle">HỢP: A ∪ B</text>
      <text x="95" y="152" fill="#94a3b8" font-size="10" text-anchor="middle">Phần tử thuộc A hoặc B</text>
    </g>
    <!-- Hình 2: Giao A ∩ B -->
    <g transform="translate(265, 20)">
      <circle cx="65" cy="65" r="45" fill="none" stroke="#64748b" stroke-width="2"/>
      <circle cx="125" cy="65" r="45" fill="none" stroke="#64748b" stroke-width="2"/>
      <!-- Phần giao -->
      <path d="M 95 31.5 A 45 45 0 0 1 95 98.5 A 45 45 0 0 1 95 31.5 Z" fill="#10b981" fill-opacity="0.6" stroke="#10b981" stroke-width="2"/>
      <text x="50" y="45" fill="#ffffff" font-size="12" font-weight="bold">A</text>
      <text x="140" y="45" fill="#ffffff" font-size="12" font-weight="bold">B</text>
      <text x="95" y="135" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">GIAO: A ∩ B</text>
      <text x="95" y="152" fill="#94a3b8" font-size="10" text-anchor="middle">Phần tử thuộc cả A và B</text>
    </g>
    <!-- Hình 3: Hiệu A  B -->
    <g transform="translate(500, 20)">
      <circle cx="65" cy="65" r="45" fill="#f59e0b" fill-opacity="0.4" stroke="#f59e0b" stroke-width="2"/>
      <circle cx="125" cy="65" r="45" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
      <text x="45" y="65" fill="#ffffff" font-size="12" font-weight="bold">A</text>
      <text x="140" y="65" fill="#94a3b8" font-size="12" font-weight="bold">B</text>
      <text x="95" y="135" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">HIỆU: A \ B</text>
      <text x="95" y="152" fill="#94a3b8" font-size="10" text-anchor="middle">Thuộc A nhưng không thuộc B</text>
    </g>
  </svg>
      </div>
    </div>
  `,
  3: `
    <div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-xs">
        <span class="font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
          <i class="fa-solid fa-shapes"></i> Biểu diễn miền nghiệm của bất phương trình ax + by + c ≥ 0 trên mặt phẳng tọa độ
        </span>
        <span class="text-slate-400 font-medium">Nửa mặt phẳng bờ d</span>
      </div>
      <div class="w-full overflow-x-auto flex justify-center py-2">
        <svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrMath" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#94a3b8" />
      </marker>
    </defs>
    <!-- Trục tọa độ -->
    <line x1="80" y1="140" x2="420" y2="140" stroke="#64748b" stroke-width="2" marker-end="url(#arrMath)"/>
    <text x="430" y="145" fill="#94a3b8" font-size="11">x</text>
    <line x1="200" y1="165" x2="200" y2="15" stroke="#64748b" stroke-width="2" marker-end="url(#arrMath)"/>
    <text x="195" y="10" fill="#94a3b8" font-size="11">y</text>
    <text x="185" y="155" fill="#64748b" font-size="11">O(0;0)</text>
    <!-- Đường thẳng d: x + y - 2 = 0 (qua (2,0) và (0,2)) -->
    <line x1="120" y1="20" x2="360" y2="160" stroke="#f59e0b" stroke-width="2.5"/>
    <text x="340" y="70" fill="#fbbf24" font-size="11" font-weight="bold">Bờ d: x + y - 2 = 0</text>
    <!-- Miền nghiệm tô màu xanh -->
    <polygon points="120,20 360,160 410,160 410,20" fill="#3b82f6" fill-opacity="0.2"/>
    <text x="320" y="110" fill="#38bdf8" font-size="11" font-weight="bold">Miền nghiệm (x + y - 2 ≥ 0)</text>
    <!-- Điểm thử O(0,0) nằm ngoài miền nghiệm bị gạch -->
    <circle cx="200" cy="140" r="4" fill="#ef4444"/>
    <text x="125" y="125" fill="#f87171" font-size="10">Điểm O(0;0) không thỏa mãn</text>
    <!-- Khung giải thích bên phải -->
    <rect x="460" y="25" width="240" height="130" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="580" y="50" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">QUY TRÌNH XÁC ĐỊNH</text>
    <text x="475" y="75" fill="#cbd5e1" font-size="10">1. Vẽ đường thẳng bờ d: ax + by + c = 0</text>
    <text x="475" y="98" fill="#cbd5e1" font-size="10">2. Lấy điểm thử O(0;0) (khi c ≠ 0)</text>
    <text x="475" y="121" fill="#cbd5e1" font-size="10">3. Thử tọa độ O vào biểu thức</text>
    <text x="475" y="142" fill="#facc15" font-size="10">≥, ≤: Lấy cả bờ d (nét liền)</text>
  </svg>
      </div>
    </div>
  `,
  4: `
    <div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-xs">
        <span class="font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
          <i class="fa-solid fa-shapes"></i> Bài toán tối ưu tuyến tính: Giá trị cực đại và cực tiểu đạt tại đỉnh đa giác
        </span>
        <span class="text-slate-400 font-medium">Quy hoạch tuyến tính</span>
      </div>
      <div class="w-full overflow-x-auto flex justify-center py-2">
        <svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <!-- Đa giác miền nghiệm ABCD -->
    <polygon points="120,130 220,40 380,50 340,130" fill="#0284c7" fill-opacity="0.25" stroke="#38bdf8" stroke-width="2"/>
    <!-- Đỉnh A -->
    <circle cx="120" cy="130" r="5" fill="#f59e0b"/>
    <text x="100" y="140" fill="#fbbf24" font-size="11" font-weight="bold">A(x_A; y_A)</text>
    <!-- Đỉnh B -->
    <circle cx="220" cy="40" r="5" fill="#f59e0b"/>
    <text x="210" y="30" fill="#fbbf24" font-size="11" font-weight="bold">B(x_B; y_B)</text>
    <!-- Đỉnh C (Điểm tối ưu Max) -->
    <circle cx="380" cy="50" r="7" fill="#10b981"/>
    <text x="395" y="45" fill="#34d399" font-size="12" font-weight="black">C (Đỉnh F_max)</text>
    <!-- Đỉnh D -->
    <circle cx="340" cy="130" r="5" fill="#f59e0b"/>
    <text x="350" y="145" fill="#fbbf24" font-size="11" font-weight="bold">D(x_D; y_D)</text>
    <text x="260" y="95" fill="#e0f2fe" font-size="12" font-weight="bold" text-anchor="middle">Miền đa giác nghiệm</text>
    <!-- Khung định lí bên phải -->
    <rect x="460" y="25" width="240" height="130" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
    <text x="580" y="50" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">ĐỊNH LÍ GIÁ TRỊ TỐI ƯU</text>
    <text x="475" y="78" fill="#cbd5e1" font-size="10">Hàm mục tiêu: F(x; y) = ax + by</text>
    <text x="475" y="102" fill="#cbd5e1" font-size="10">Đạt Max hoặc Min tại một trong các đỉnh</text>
    <text x="475" y="125" fill="#facc15" font-size="11" font-weight="bold">F_max = max{F(A), F(B), F(C), F(D)}</text>
    <text x="475" y="145" fill="#94a3b8" font-size="9">Áp dụng cho miền đa giác lồi đóng và bị chặn</text>
  </svg>
      </div>
    </div>
  `,
  5: `
    <div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-xs">
        <span class="font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
          <i class="fa-solid fa-shapes"></i> Định nghĩa giá trị lượng giác trên nửa đường tròn đơn vị (0° đến 180°)
        </span>
        <span class="text-slate-400 font-medium">Lượng giác lớp 10</span>
      </div>
      <div class="w-full overflow-x-auto flex justify-center py-2">
        <svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrTrig" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#94a3b8" />
      </marker>
    </defs>
    <!-- Trục tọa độ -->
    <line x1="80" y1="140" x2="380" y2="140" stroke="#64748b" stroke-width="2" marker-end="url(#arrTrig)"/>
    <text x="390" y="145" fill="#94a3b8" font-size="11">x (Trục Cos)</text>
    <line x1="230" y1="160" x2="230" y2="20" stroke="#64748b" stroke-width="2" marker-end="url(#arrTrig)"/>
    <text x="225" y="15" fill="#94a3b8" font-size="11">y (Trục Sin)</text>
    <text x="215" y="155" fill="#64748b" font-size="11">O</text>
    <!-- Nửa đường tròn đơn vị R=100px -->
    <path d="M 130 140 A 100 100 0 0 1 330 140" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
    <text x="335" y="155" fill="#38bdf8" font-size="11">1</text>
    <text x="115" y="155" fill="#38bdf8" font-size="11">-1</text>
    <!-- Điểm M(x0, y0) với góc alpha nhọn -->
    <circle cx="290" cy="60" r="5" fill="#f59e0b"/>
    <line x1="230" y1="140" x2="290" y2="60" stroke="#f59e0b" stroke-width="2"/>
    <text x="295" y="55" fill="#fbbf24" font-size="12" font-weight="bold">M(x₀; y₀)</text>
    <!-- Gióng tọa độ xuống Ox và Oy -->
    <line x1="290" y1="60" x2="290" y2="140" stroke="#94a3b8" stroke-dasharray="3,3"/>
    <text x="290" y="155" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">cos α = x₀</text>
    <line x1="290" y1="60" x2="230" y2="60" stroke="#94a3b8" stroke-dasharray="3,3"/>
    <text x="175" y="65" fill="#f87171" font-size="10" font-weight="bold">sin α = y₀</text>
    <!-- Khung hệ thức bên phải -->
    <rect x="440" y="25" width="260" height="135" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="570" y="50" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">HỆ THỨC LƯỢNG GIÁC</text>
    <text x="460" y="75" fill="#cbd5e1" font-size="10">• sin²α + cos²α = 1</text>
    <text x="460" y="95" fill="#cbd5e1" font-size="10">• tan α = sin α / cos α (α ≠ 90°)</text>
    <text x="460" y="115" fill="#cbd5e1" font-size="10">• Góc bù: sin(180° - α) = sin α</text>
    <text x="460" y="135" fill="#facc15" font-size="10">• Góc bù: cos(180° - α) = -cos α</text>
  </svg>
      </div>
    </div>
  `,
  6: `
    <div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-xs">
        <span class="font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
          <i class="fa-solid fa-shapes"></i> Hệ thức lượng trong tam giác tổng quát: Định lí Côsin, Sin và Công thức Heron
        </span>
        <span class="text-slate-400 font-medium">Giải tam giác</span>
      </div>
      <div class="w-full overflow-x-auto flex justify-center py-2">
        <svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <!-- Tam giác ABC -->
    <polygon points="120,140 340,140 200,40" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
    <!-- Đỉnh A -->
    <circle cx="200" cy="40" r="5" fill="#38bdf8"/>
    <text x="200" y="25" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">A</text>
    <!-- Đỉnh B -->
    <circle cx="120" cy="140" r="5" fill="#38bdf8"/>
    <text x="100" y="145" fill="#38bdf8" font-size="13" font-weight="bold">B</text>
    <!-- Đỉnh C -->
    <circle cx="340" cy="140" r="5" fill="#38bdf8"/>
    <text x="355" y="145" fill="#38bdf8" font-size="13" font-weight="bold">C</text>
    <!-- Nhãn cạnh a, b, c -->
    <text x="230" y="158" fill="#fbbf24" font-size="12" font-weight="bold">cạnh a (BC)</text>
    <text x="280" y="85" fill="#fbbf24" font-size="12" font-weight="bold">cạnh b (CA)</text>
    <text x="135" y="85" fill="#fbbf24" font-size="12" font-weight="bold">cạnh c (AB)</text>
    <!-- Bảng công thức bên phải -->
    <rect x="420" y="20" width="280" height="145" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="560" y="45" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">BỘ CÔNG THỨC GIẢI TAM GIÁC</text>
    <text x="440" y="70" fill="#facc15" font-size="11">• Côsin: a² = b² + c² - 2bc cos A</text>
    <text x="440" y="93" fill="#34d399" font-size="11">• Sin: a / sin A = b / sin B = c / sin C = 2R</text>
    <text x="440" y="116" fill="#cbd5e1" font-size="10">• Diện tích: S = ½ bc sin A = pr = abc / (4R)</text>
    <text x="440" y="138" fill="#cbd5e1" font-size="10">• Heron: S = √[p(p - a)(p - b)(p - c)]</text>
  </svg>
      </div>
    </div>
  `,
  7: `
<div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
  <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-xs">
    <span class="font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
      <i class="fa-solid fa-arrow-trend-up"></i> Các yếu tố đặc trưng của vectơ: Điểm đầu, điểm cuối, phương, chiều & độ dài
    </span>
    <span class="text-slate-400 font-medium">Khái niệm vectơ</span>
  </div>
  <div class="w-full overflow-x-auto flex justify-center py-2">
    <svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrV1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M 0 0 L 8 4 L 0 8 z" fill="#38bdf8"/>
        </marker>
        <marker id="arrV2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M 0 0 L 8 4 L 0 8 z" fill="#34d399"/>
        </marker>
        <marker id="arrV3" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M 0 0 L 8 4 L 0 8 z" fill="#f87171"/>
        </marker>
      </defs>
      <!-- Giá của vectơ AB (đường thẳng delta) -->
      <line x1="50" y1="60" x2="350" y2="60" stroke="#475569" stroke-width="1.5" stroke-dasharray="5,5"/>
      <text x="360" y="64" fill="#94a3b8" font-size="11">Giá (Δ₁)</text>
      <!-- Vectơ AB -->
      <line x1="100" y1="60" x2="280" y2="60" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrV1)"/>
      <circle cx="100" cy="60" r="4" fill="#38bdf8"/>
      <text x="95" y="45" fill="#38bdf8" font-size="13" font-weight="bold">A (Gốc)</text>
      <text x="285" y="45" fill="#38bdf8" font-size="13" font-weight="bold">B (Ngọn)</text>
      <text x="185" y="85" fill="#cbd5e1" font-size="12">Vectơ AB có độ dài |AB| = AB</text>

      <!-- Đường thẳng song song delta 2 -->
      <line x1="420" y1="50" x2="680" y2="50" stroke="#475569" stroke-width="1.5" stroke-dasharray="5,5"/>
      <line x1="420" y1="120" x2="680" y2="120" stroke="#475569" stroke-width="1.5" stroke-dasharray="5,5"/>
      <!-- Vectơ cùng hướng -->
      <line x1="450" y1="50" x2="570" y2="50" stroke="#34d399" stroke-width="2.5" marker-end="url(#arrV2)"/>
      <text x="585" y="54" fill="#34d399" font-size="11" font-weight="bold">Vectơ a</text>
      <line x1="450" y1="120" x2="620" y2="120" stroke="#34d399" stroke-width="2.5" marker-end="url(#arrV2)"/>
      <text x="635" y="124" fill="#34d399" font-size="11" font-weight="bold">Vectơ b (Cùng hướng)</text>
      <!-- Vectơ ngược hướng -->
      <line x1="590" y1="85" x2="470" y2="85" stroke="#f87171" stroke-width="2.5" marker-end="url(#arrV3)"/>
      <text x="410" y="89" fill="#f87171" font-size="11" font-weight="bold">Vectơ c (Ngược hướng)</text>
    </svg>
  </div>
</div>`,
  8: `
    <div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-xs">
        <span class="font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
          <i class="fa-solid fa-shapes"></i> Quy tắc ba điểm và Quy tắc hình bình hành của phép cộng vectơ
        </span>
        <span class="text-slate-400 font-medium">Đại số Vectơ</span>
      </div>
      <div class="w-full overflow-x-auto flex justify-center py-2">
        <svg viewBox="0 0 720 170" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrV1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#10b981" />
      </marker>
      <marker id="arrV2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#38bdf8" />
      </marker>
    </defs>
    <!-- Nửa trái: Quy tắc ba điểm nối đuôi -->
    <g transform="translate(40, 20)">
      <circle cx="40" cy="110" r="5" fill="#38bdf8"/>
      <text x="25" y="115" fill="#38bdf8" font-size="12" font-weight="bold">A</text>
      <circle cx="160" cy="110" r="5" fill="#38bdf8"/>
      <text x="165" y="125" fill="#38bdf8" font-size="12" font-weight="bold">B</text>
      <circle cx="120" cy="30" r="5" fill="#38bdf8"/>
      <text x="120" y="20" fill="#38bdf8" font-size="12" font-weight="bold">C</text>
      <!-- AB -->
      <line x1="40" y1="110" x2="150" y2="110" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrV1)"/>
      <text x="95" y="128" fill="#34d399" font-size="10">AB</text>
      <!-- BC -->
      <line x1="160" y1="110" x2="125" y2="38" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrV1)"/>
      <text x="155" y="70" fill="#34d399" font-size="10">BC</text>
      <!-- AC (Tổng) -->
      <line x1="40" y1="110" x2="115" y2="35" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrV2)"/>
      <text x="60" y="65" fill="#38bdf8" font-size="11" font-weight="bold">AC = AB + BC</text>
      <text x="100" y="145" fill="#cbd5e1" font-size="11" font-weight="bold" text-anchor="middle">Quy tắc ba điểm</text>
    </g>
    <!-- Nửa phải: Quy tắc hình bình hành -->
    <g transform="translate(380, 20)">
      <circle cx="40" cy="110" r="5" fill="#38bdf8"/>
      <text x="25" y="115" fill="#38bdf8" font-size="12" font-weight="bold">A</text>
      <line x1="40" y1="110" x2="160" y2="110" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrV1)"/>
      <text x="165" y="115" fill="#38bdf8" font-size="11">B</text>
      <line x1="40" y1="110" x2="100" y2="40" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrV1)"/>
      <text x="95" y="30" fill="#38bdf8" font-size="11">D</text>
      <!-- Cạnh đứt -->
      <line x1="160" y1="110" x2="220" y2="40" stroke="#64748b" stroke-dasharray="3,3"/>
      <line x1="100" y1="40" x2="220" y2="40" stroke="#64748b" stroke-dasharray="3,3"/>
      <text x="230" y="35" fill="#38bdf8" font-size="11">C</text>
      <!-- Đường chéo AC -->
      <line x1="40" y1="110" x2="210" y2="44" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrV2)"/>
      <text x="120" y="65" fill="#38bdf8" font-size="11" font-weight="bold">AC = AB + AD</text>
      <text x="130" y="145" fill="#cbd5e1" font-size="11" font-weight="bold" text-anchor="middle">Quy tắc hình bình hành</text>
    </g>
  </svg>
      </div>
    </div>
  `,
  9: `
<div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
  <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-xs">
    <span class="font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
      <i class="fa-solid fa-arrows-split-up-and-left"></i> Phép nhân vectơ với số thực: Hướng và độ dài k·a
    </span>
    <span class="text-slate-400 font-medium">Tích vectơ với số</span>
  </div>
  <div class="w-full overflow-x-auto flex justify-center py-2">
    <svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrK1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M 0 0 L 8 4 L 0 8 z" fill="#38bdf8"/>
        </marker>
        <marker id="arrK2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M 0 0 L 8 4 L 0 8 z" fill="#34d399"/>
        </marker>
        <marker id="arrK3" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M 0 0 L 8 4 L 0 8 z" fill="#f87171"/>
        </marker>
      </defs>
      <!-- Gốc a -->
      <line x1="80" y1="50" x2="200" y2="50" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrK1)"/>
      <text x="140" y="40" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">Vectơ a (Chuẩn 1x)</text>

      <!-- k = 2 > 0: 2a -->
      <line x1="80" y1="100" x2="320" y2="100" stroke="#34d399" stroke-width="3" marker-end="url(#arrK2)"/>
      <text x="200" y="90" fill="#34d399" font-size="13" font-weight="bold" text-anchor="middle">2·a (k = 2 > 0: Cùng hướng, độ dài gấp 2)</text>

      <!-- k = -1.5 < 0 -->
      <line x1="640" y1="100" x2="460" y2="100" stroke="#f87171" stroke-width="3" marker-end="url(#arrK3)"/>
      <text x="550" y="90" fill="#f87171" font-size="13" font-weight="bold" text-anchor="middle">-1.5·a (k &lt; 0: Ngược hướng, |k| = 1.5)</text>

      <!-- Quy tắc trung điểm & trọng tâm -->
      <rect x="60" y="130" width="600" height="36" rx="8" fill="#1e293b" stroke="#334155"/>
      <text x="360" y="153" fill="#cbd5e1" font-size="11" text-anchor="middle">Hệ quả: I là trung điểm AB ⇔ IA + IB = 0; G là trọng tâm tam giác ABC ⇔ GA + GB + GC = 0</text>
    </svg>
  </div>
</div>`,
  10: `
    <div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-xs">
        <span class="font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
          <i class="fa-solid fa-shapes"></i> Hệ tọa độ Oxy: Tọa độ điểm M(x, y), Vectơ u = xi + yj và độ dài khoảng cách
        </span>
        <span class="text-slate-400 font-medium">Phương pháp tọa độ</span>
      </div>
      <div class="w-full overflow-x-auto flex justify-center py-2">
        <svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrOxy" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#94a3b8" />
      </marker>
      <marker id="arrOM" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#38bdf8" />
      </marker>
    </defs>
    <!-- Trục Ox và Oy -->
    <line x1="60" y1="140" x2="380" y2="140" stroke="#64748b" stroke-width="2" marker-end="url(#arrOxy)"/>
    <text x="390" y="145" fill="#94a3b8" font-size="11">x</text>
    <line x1="120" y1="160" x2="120" y2="20" stroke="#64748b" stroke-width="2" marker-end="url(#arrOxy)"/>
    <text x="115" y="15" fill="#94a3b8" font-size="11">y</text>
    <text x="105" y="155" fill="#64748b" font-size="11">O</text>
    <!-- Vectơ đơn vị i và j -->
    <line x1="120" y1="140" x2="170" y2="140" stroke="#10b981" stroke-width="3" marker-end="url(#arrOM)"/>
    <text x="145" y="155" fill="#34d399" font-size="10" font-weight="bold">i</text>
    <line x1="120" y1="140" x2="120" y2="90" stroke="#10b981" stroke-width="3" marker-end="url(#arrOM)"/>
    <text x="105" y="115" fill="#34d399" font-size="10" font-weight="bold">j</text>
    <!-- Điểm M(x, y) và vectơ OM -->
    <circle cx="280" cy="50" r="5" fill="#f59e0b"/>
    <text x="290" y="45" fill="#fbbf24" font-size="12" font-weight="bold">M(x_M; y_M)</text>
    <line x1="120" y1="140" x2="275" y2="53" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrOM)"/>
    <!-- Nét đứt tọa độ -->
    <line x1="280" y1="50" x2="280" y2="140" stroke="#64748b" stroke-dasharray="3,3"/>
    <text x="280" y="155" fill="#cbd5e1" font-size="10" text-anchor="middle">x_M</text>
    <line x1="280" y1="50" x2="120" y2="50" stroke="#64748b" stroke-dasharray="3,3"/>
    <text x="95" y="55" fill="#cbd5e1" font-size="10">y_M</text>
    <!-- Bảng công thức bên phải -->
    <rect x="420" y="20" width="280" height="145" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="560" y="45" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">CÔNG THỨC TỌA ĐỘ VECTƠ</text>
    <text x="440" y="72" fill="#facc15" font-size="11">• AB = (x_B - x_A; y_B - y_A)</text>
    <text x="440" y="95" fill="#cbd5e1" font-size="11">• Độ dài: |u| = √(x² + y²)</text>
    <text x="440" y="118" fill="#34d399" font-size="11">• Trung điểm: M((x_A+x_B)/2; (y_A+y_B)/2)</text>
    <text x="440" y="140" fill="#cbd5e1" font-size="10">• Trọng tâm: G((x_A+x_B+x_C)/3; (y_A+y_B+y_C)/3)</text>
  </svg>
      </div>
    </div>
  `,
  11: `
<div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
  <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-xs">
    <span class="font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
      <i class="fa-solid fa-angles-right"></i> Tích vô hướng a·b = |a||b|cosθ và phân loại góc
    </span>
    <span class="text-slate-400 font-medium">Tích vô hướng</span>
  </div>
  <div class="w-full overflow-x-auto flex justify-center py-2">
    <svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrD1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" fill="#38bdf8"/>
        </marker>
        <marker id="arrD2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" fill="#34d399"/>
        </marker>
      </defs>
      <!-- Case 1: Góc nhọn -->
      <g transform="translate(60, 20)">
        <line x1="30" y1="120" x2="160" y2="120" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arrD1)"/>
        <line x1="30" y1="120" x2="120" y2="40" stroke="#34d399" stroke-width="2.5" marker-end="url(#arrD2)"/>
        <path d="M 70 120 A 40 40 0 0 0 62 90" fill="none" stroke="#fbbf24" stroke-width="2"/>
        <text x="75" y="105" fill="#fbbf24" font-size="11">θ &lt; 90°</text>
        <text x="95" y="145" fill="#38bdf8" font-size="12" font-weight="bold">a · b &gt; 0</text>
        <text x="95" y="160" fill="#94a3b8" font-size="10">(Góc nhọn: cosθ &gt; 0)</text>
      </g>
      <!-- Case 2: Góc vuông -->
      <g transform="translate(280, 20)">
        <line x1="30" y1="120" x2="160" y2="120" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arrD1)"/>
        <line x1="30" y1="120" x2="30" y2="30" stroke="#34d399" stroke-width="2.5" marker-end="url(#arrD2)"/>
        <rect x="30" y="100" width="20" height="20" fill="none" stroke="#f87171" stroke-width="1.5"/>
        <text x="95" y="145" fill="#f87171" font-size="12" font-weight="bold">a · b = 0 ⇔ a ⊥ b</text>
        <text x="95" y="160" fill="#94a3b8" font-size="10">(Vuông góc: cos 90° = 0)</text>
      </g>
      <!-- Case 3: Góc tù -->
      <g transform="translate(500, 20)">
        <line x1="120" y1="120" x2="200" y2="120" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arrD1)"/>
        <line x1="120" y1="120" x2="30" y2="50" stroke="#34d399" stroke-width="2.5" marker-end="url(#arrD2)"/>
        <path d="M 160 120 A 40 40 0 0 0 70 80" fill="none" stroke="#fbbf24" stroke-width="2"/>
        <text x="110" y="90" fill="#fbbf24" font-size="11">θ &gt; 90°</text>
        <text x="120" y="145" fill="#f87171" font-size="12" font-weight="bold">a · b &lt; 0</text>
        <text x="120" y="160" fill="#94a3b8" font-size="10">(Góc tù: cosθ &lt; 0)</text>
      </g>
    </svg>
  </div>
</div>`,
  12: `
<div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
  <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-xs">
    <span class="font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
      <i class="fa-solid fa-ruler-combined"></i> Khoảng sai số tuyệt đối và độ chính xác phép đo
    </span>
    <span class="text-slate-400 font-medium">Số gần đúng & sai số</span>
  </div>
  <div class="w-full overflow-x-auto flex justify-center py-2">
    <svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrNum" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" fill="#64748b"/>
        </marker>
      </defs>
      <!-- Trục số thực -->
      <line x1="60" y1="90" x2="660" y2="90" stroke="#64748b" stroke-width="2" marker-end="url(#arrNum)"/>
      <text x="670" y="94" fill="#94a3b8" font-size="12">Ox</text>
      <!-- Khoảng sai số [a - d; a + d] -->
      <rect x="220" y="65" width="280" height="50" rx="8" fill="#3b82f6" fill-opacity="0.18" stroke="#3b82f6" stroke-dasharray="4,4"/>
      <!-- Vạch a - d -->
      <line x1="220" y1="60" x2="220" y2="120" stroke="#f87171" stroke-width="2.5"/>
      <text x="220" y="140" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">a - d</text>
      <!-- Vạch a + d -->
      <line x1="500" y1="60" x2="500" y2="120" stroke="#34d399" stroke-width="2.5"/>
      <text x="500" y="140" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">a + d</text>
      <!-- Điểm a (Số gần đúng) -->
      <circle cx="360" cy="90" r="5" fill="#38bdf8"/>
      <line x1="360" y1="50" x2="360" y2="130" stroke="#38bdf8" stroke-width="2"/>
      <text x="360" y="40" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">Số gần đúng a</text>
      <!-- Nhãn khoảng d -->
      <text x="290" y="58" fill="#f87171" font-size="11" text-anchor="middle">← Độ chính xác d →</text>
      <text x="430" y="58" fill="#34d399" font-size="11" text-anchor="middle">← Độ chính xác d →</text>
      <text x="360" y="170" fill="#cbd5e1" font-size="11" text-anchor="middle">Giá trị đúng ā nằm trong đoạn: ā ∈ [a - d; a + d] với sai số tuyệt đối Δa ≤ d</text>
    </svg>
  </div>
</div>`,
  13: `
<div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
  <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-xs">
    <span class="font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
      <i class="fa-solid fa-chart-pie"></i> Vị trí các số đặc trưng đo xu thế trung tâm trên mẫu số liệu
    </span>
    <span class="text-slate-400 font-medium">Xu thế trung tâm</span>
  </div>
  <div class="w-full overflow-x-auto flex justify-center py-2">
    <svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
      <!-- Dãy số đã sắp xếp -->
      <rect x="50" y="60" width="620" height="40" rx="8" fill="#1e293b" stroke="#334155"/>
      <text x="60" y="50" fill="#94a3b8" font-size="11">Dãy số liệu mẫu đã sắp xếp thứ tự không giảm:</text>
      <text x="80" y="85" fill="#64748b" font-size="12">x₁</text>
      <text x="140" y="85" fill="#64748b" font-size="12">x₂</text>
      <text x="200" y="85" fill="#64748b" font-size="12">...</text>
      <text x="630" y="85" fill="#64748b" font-size="12">xₙ</text>

      <!-- Trung vị Me / Q2 -->
      <line x1="360" y1="40" x2="360" y2="120" stroke="#f59e0b" stroke-width="3"/>
      <circle cx="360" cy="80" r="6" fill="#f59e0b"/>
      <text x="360" y="30" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">Trung vị Me (Q₂)</text>
      <text x="360" y="140" fill="#f59e0b" font-size="10" text-anchor="middle">Chia đôi mẫu số liệu (50%)</text>

      <!-- Tứ phân vị Q1 -->
      <line x1="210" y1="45" x2="210" y2="115" stroke="#38bdf8" stroke-width="2"/>
      <circle cx="210" cy="80" r="5" fill="#38bdf8"/>
      <text x="210" y="35" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Q₁ (25%)</text>

      <!-- Tứ phân vị Q3 -->
      <line x1="510" y1="45" x2="510" y2="115" stroke="#34d399" stroke-width="2"/>
      <circle cx="510" cy="80" r="5" fill="#34d399"/>
      <text x="510" y="35" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">Q₃ (75%)</text>

      <!-- Khoảng tứ phân vị Delta Q -->
      <line x1="210" y1="155" x2="510" y2="155" stroke="#a855f7" stroke-width="2"/>
      <text x="360" y="172" fill="#a855f7" font-size="11" font-weight="bold" text-anchor="middle">Khoảng tứ phân vị: ΔQ = Q₃ - Q₁</text>
    </svg>
  </div>
</div>`,
  14: `
    <div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-xs">
        <span class="font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
          <i class="fa-solid fa-shapes"></i> Biểu đồ hộp (Box-plot) biểu diễn mẫu số liệu và xác định giá trị bất thường
        </span>
        <span class="text-slate-400 font-medium">Thống kê mô tả</span>
      </div>
      <div class="w-full overflow-x-auto flex justify-center py-2">
        <svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <!-- Trục số -->
    <line x1="60" y1="130" x2="660" y2="130" stroke="#64748b" stroke-width="2"/>
    <!-- Giá trị min -->
    <line x1="120" y1="70" x2="120" y2="90" stroke="#94a3b8" stroke-width="2"/>
    <text x="120" y="110" fill="#94a3b8" font-size="10" text-anchor="middle">x_min</text>
    <!-- Râu trái nối min đến Q1 -->
    <line x1="120" y1="80" x2="220" y2="80" stroke="#94a3b8" stroke-width="1.5"/>
    <!-- Hộp chữ nhật từ Q1 đến Q3 -->
    <rect x="220" y="50" width="260" height="60" rx="4" fill="#3b82f6" fill-opacity="0.25" stroke="#3b82f6" stroke-width="2"/>
    <!-- Vạch Q1 -->
    <line x1="220" y1="50" x2="220" y2="110" stroke="#38bdf8" stroke-width="2"/>
    <text x="220" y="40" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Q₁ (25%)</text>
    <!-- Vạch Trung vị Q2 (Median) -->
    <line x1="330" y1="50" x2="330" y2="110" stroke="#f59e0b" stroke-width="3"/>
    <text x="330" y="40" fill="#fbbf24" font-size="12" font-weight="black" text-anchor="middle">Q₂ (Trung vị)</text>
    <!-- Vạch Q3 -->
    <line x1="480" y1="50" x2="480" y2="110" stroke="#38bdf8" stroke-width="2"/>
    <text x="480" y="40" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Q₃ (75%)</text>
    <!-- Râu phải nối Q3 đến max -->
    <line x1="480" y1="80" x2="560" y2="80" stroke="#94a3b8" stroke-width="1.5"/>
    <line x1="560" y1="70" x2="560" y2="90" stroke="#94a3b8" stroke-width="2"/>
    <text x="560" y="110" fill="#94a3b8" font-size="10" text-anchor="middle">x_max</text>
    <!-- Khoảng tứ phân vị Delta Q -->
    <line x1="220" y1="120" x2="480" y2="120" stroke="#10b981" stroke-width="2"/>
    <text x="350" y="145" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">Khoảng tứ phân vị Δ_Q = Q₃ - Q₁ (50% dữ liệu trung tâm)</text>
    <!-- Điểm ngoại lai (Outlier) -->
    <circle cx="630" cy="80" r="5" fill="#ef4444"/>
    <text x="630" y="65" fill="#f87171" font-size="10" text-anchor="middle">Giá trị bất thường</text>
  </svg>
      </div>
    </div>
  `,
  15: `
<div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
  <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-xs">
    <span class="font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
      <i class="fa-solid fa-chart-line"></i> Đồ thị hàm số y = f(x), tập xác định D và tập giá trị
    </span>
    <span class="text-slate-400 font-medium">Hàm số & đồ thị</span>
  </div>
  <div class="w-full overflow-x-auto flex justify-center py-2">
    <svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrOxy" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" fill="#64748b"/>
        </marker>
      </defs>
      <!-- Trục tọa độ -->
      <line x1="80" y1="140" x2="640" y2="140" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrOxy)"/>
      <text x="650" y="144" fill="#94a3b8" font-size="12">x</text>
      <line x1="160" y1="160" x2="160" y2="20" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrOxy)"/>
      <text x="156" y="15" fill="#94a3b8" font-size="12">y</text>
      <text x="145" y="155" fill="#64748b" font-size="12">O</text>

      <!-- Đường cong đồ thị y = f(x) -->
      <path d="M 190 120 C 260 30, 360 40, 480 110 S 580 30, 620 20" fill="none" stroke="#38bdf8" stroke-width="3"/>
      <text x="500" y="80" fill="#38bdf8" font-size="13" font-weight="bold">(C): y = f(x)</text>

      <!-- Tập xác định D trên trục hoành -->
      <rect x="190" y="137" width="430" height="6" fill="#34d399"/>
      <text x="400" y="160" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">Tập xác định D trên trục hoành Ox</text>

      <!-- Điểm M(x0, y0) -->
      <circle cx="310" cy="46" r="4" fill="#f59e0b"/>
      <line x1="310" y1="46" x2="310" y2="140" stroke="#f59e0b" stroke-dasharray="3,3"/>
      <line x1="310" y1="46" x2="160" y2="46" stroke="#f59e0b" stroke-dasharray="3,3"/>
      <text x="310" y="153" fill="#f59e0b" font-size="10" text-anchor="middle">x₀</text>
      <text x="140" y="50" fill="#f59e0b" font-size="10" text-anchor="end">y₀ = f(x₀)</text>
    </svg>
  </div>
</div>`,
  16: `
    <div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-xs">
        <span class="font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
          <i class="fa-solid fa-shapes"></i> Đồ thị hàm số bậc hai y = ax² + bx + c: Đỉnh, trục đối xứng và bề lõm
        </span>
        <span class="text-slate-400 font-medium">Hàm số bậc hai</span>
      </div>
      <div class="w-full overflow-x-auto flex justify-center py-2">
        <svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrPb" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#94a3b8" />
      </marker>
    </defs>
    <!-- Trục tọa độ -->
    <line x1="60" y1="130" x2="380" y2="130" stroke="#64748b" stroke-width="2" marker-end="url(#arrPb)"/>
    <text x="390" y="135" fill="#94a3b8" font-size="11">x</text>
    <line x1="160" y1="165" x2="160" y2="20" stroke="#64748b" stroke-width="2" marker-end="url(#arrPb)"/>
    <text x="155" y="15" fill="#94a3b8" font-size="11">y</text>
    <!-- Đường Parabol bề lõm quay lên a > 0 -->
    <path d="M 120 30 Q 250 190 360 30" fill="none" stroke="#38bdf8" stroke-width="3"/>
    <!-- Đỉnh I -->
    <circle cx="245" cy="120" r="5" fill="#f59e0b"/>
    <text x="245" y="145" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">Đỉnh I(-b/2a; -Δ/4a)</text>
    <!-- Trục đối xứng x = -b/2a -->
    <line x1="245" y1="15" x2="245" y2="165" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="4,4"/>
    <text x="250" y="25" fill="#f43f5e" font-size="10">Trục x = -b/2a</text>
    <!-- Bảng tóm tắt bên phải -->
    <rect x="420" y="20" width="280" height="145" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="560" y="45" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">ĐẶC TRƯNG PARABOL (P)</text>
    <text x="440" y="70" fill="#facc15" font-size="11">• Đỉnh I(-b/2a; -Δ/4a) với Δ = b² - 4ac</text>
    <text x="440" y="93" fill="#cbd5e1" font-size="10">• a > 0: Bề lõm lên trên, y_min = -Δ/4a</text>
    <text x="440" y="115" fill="#cbd5e1" font-size="10">• a < 0: Bề lõm xuống dưới, y_max = -Δ/4a</text>
    <text x="440" y="138" fill="#34d399" font-size="10">• Giao trục tung Oy tại điểm (0; c)</text>
  </svg>
      </div>
    </div>
  `,
  17: `
    <div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-xs">
        <span class="font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
          <i class="fa-solid fa-shapes"></i> Quy tắc xét dấu tam thức bậc hai f(x) = ax² + bx + c (Quy tắc "Trong trái - Ngoài cùng")
        </span>
        <span class="text-slate-400 font-medium">Dấu của tam thức</span>
      </div>
      <div class="w-full overflow-x-auto flex justify-center py-2">
        <svg viewBox="0 0 720 160" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <!-- Khung bảng xét dấu -->
    <rect x="40" y="25" width="640" height="115" rx="10" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
    <line x1="40" y1="75" x2="680" y2="75" stroke="#475569" stroke-width="1.5"/>
    <line x1="140" y1="25" x2="140" y2="140" stroke="#475569" stroke-width="1.5"/>
    <!-- Cột đầu -->
    <text x="90" y="55" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle">x</text>
    <text x="90" y="115" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">f(x)</text>
    <!-- Dòng x -->
    <text x="180" y="55" fill="#94a3b8" font-size="11">-∞</text>
    <text x="300" y="55" fill="#ffffff" font-size="12" font-weight="bold">x₁</text>
    <text x="500" y="55" fill="#ffffff" font-size="12" font-weight="bold">x₂</text>
    <text x="630" y="55" fill="#94a3b8" font-size="11">+∞</text>
    <!-- Dòng f(x) -->
    <text x="300" y="115" fill="#f59e0b" font-size="13" font-weight="bold">0</text>
    <text x="500" y="115" fill="#f59e0b" font-size="13" font-weight="bold">0</text>
    <text x="220" y="115" fill="#10b981" font-size="11" font-weight="bold">CÙNG DẤU a</text>
    <text x="385" y="115" fill="#ef4444" font-size="12" font-weight="black">TRÁI DẤU a</text>
    <text x="575" y="115" fill="#10b981" font-size="11" font-weight="bold">CÙNG DẤU a</text>
  </svg>
      </div>
    </div>
  `,
  18: `
<div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
  <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-xs">
    <span class="font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
      <i class="fa-solid fa-code-compare"></i> Tương giao hình học phương trình chứa căn √(ax²+bx+c) = dx+e
    </span>
    <span class="text-slate-400 font-medium">PT quy về bậc hai</span>
  </div>
  <div class="w-full overflow-x-auto flex justify-center py-2">
    <svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrPt" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" fill="#64748b"/>
        </marker>
      </defs>
      <!-- Trục Oxy -->
      <line x1="100" y1="130" x2="620" y2="130" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrPt)"/>
      <line x1="220" y1="160" x2="220" y2="20" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrPt)"/>
      <text x="630" y="134" fill="#94a3b8" font-size="11">x</text>
      <text x="216" y="15" fill="#94a3b8" font-size="11">y</text>

      <!-- Đường cong y = √(f(x)) -->
      <path d="M 180 130 Q 300 10, 480 130" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
      <text x="300" y="35" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">y = √(f(x)) (y ≥ 0)</text>

      <!-- Đường thẳng y = g(x) cắt tại giao điểm -->
      <line x1="200" y1="150" x2="520" y2="30" stroke="#f59e0b" stroke-width="2"/>
      <text x="530" y="40" fill="#f59e0b" font-size="12" font-weight="bold">y = g(x)</text>

      <!-- Giao điểm thỏa mãn g(x) >= 0 -->
      <circle cx="430" cy="65" r="5" fill="#22c55e"/>
      <line x1="430" y1="65" x2="430" y2="130" stroke="#22c55e" stroke-dasharray="3,3"/>
      <text x="430" y="145" fill="#22c55e" font-size="11" font-weight="bold" text-anchor="middle">Nghiệm x*</text>

      <!-- Ghi chú điều kiện g(x) >= 0 -->
      <rect x="520" y="100" width="170" height="50" rx="8" fill="#1e293b" stroke="#334155"/>
      <text x="605" y="122" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">Điều kiện bắt buộc:</text>
      <text x="605" y="138" fill="#cbd5e1" font-size="10" text-anchor="middle">g(x) ≥ 0 để loại nghiệm ngoại lai</text>
    </svg>
  </div>
</div>`,
  19: `
<div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
  <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-xs">
    <span class="font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
      <i class="fa-solid fa-compass-drafting"></i> Vectơ chỉ phương u và vectơ pháp tuyến n của đường thẳng Δ
    </span>
    <span class="text-slate-400 font-medium">PT đường thẳng Oxy</span>
  </div>
  <div class="w-full overflow-x-auto flex justify-center py-2">
    <svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrU" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" fill="#38bdf8"/>
        </marker>
        <marker id="arrN" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" fill="#f87171"/>
        </marker>
      </defs>
      <!-- Đường thẳng Delta -->
      <line x1="80" y1="140" x2="620" y2="40" stroke="#cbd5e1" stroke-width="2.5"/>
      <text x="635" y="44" fill="#cbd5e1" font-size="14" font-weight="bold">Δ: ax + by + c = 0</text>

      <!-- Điểm M0 trên Delta -->
      <circle cx="280" cy="103" r="5" fill="#f59e0b"/>
      <text x="270" y="125" fill="#f59e0b" font-size="12" font-weight="bold">M₀(x₀; y₀)</text>

      <!-- Vectơ chỉ phương u song song Delta -->
      <line x1="330" y1="94" x2="450" y2="72" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrU)"/>
      <text x="390" y="65" fill="#38bdf8" font-size="12" font-weight="bold">VTCP u = (u₁; u₂)</text>

      <!-- Vectơ pháp tuyến n vuông góc Delta -->
      <line x1="280" y1="103" x2="228" y2="20" stroke="#f87171" stroke-width="3" marker-end="url(#arrN)"/>
      <text x="180" y="30" fill="#f87171" font-size="12" font-weight="bold">VTPT n = (a; b)</text>
      <!-- Góc vuông -->
      <rect x="268" y="85" width="12" height="12" fill="none" stroke="#f87171" stroke-width="1.5" transform="rotate(-10.5 268 85)"/>

      <!-- Liên hệ u và n -->
      <rect x="480" y="110" width="200" height="46" rx="8" fill="#1e293b" stroke="#334155"/>
      <text x="580" y="130" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">u · n = 0 ⇔ u ⊥ n</text>
      <text x="580" y="146" fill="#94a3b8" font-size="10" text-anchor="middle">Nếu n = (a; b) ⇒ u = (-b; a) hoặc (b; -a)</text>
    </svg>
  </div>
</div>`,
  20: `
<div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
  <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-xs">
    <span class="font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
      <i class="fa-solid fa-vector-square"></i> Khoảng cách d(M₀, Δ) và góc φ giữa hai đường thẳng
    </span>
    <span class="text-slate-400 font-medium">Khoảng cách & Góc</span>
  </div>
  <div class="w-full overflow-x-auto flex justify-center py-2">
    <svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
      <!-- Đường thẳng Delta -->
      <line x1="80" y1="120" x2="420" y2="120" stroke="#64748b" stroke-width="2.5"/>
      <text x="430" y="124" fill="#94a3b8" font-size="12">Δ: ax + by + c = 0</text>

      <!-- Điểm M0 -->
      <circle cx="250" cy="40" r="5" fill="#f59e0b"/>
      <text x="250" y="30" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">M₀(x₀; y₀)</text>

      <!-- Khoảng cách d vuông góc -->
      <line x1="250" y1="40" x2="250" y2="120" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="4,4"/>
      <rect x="250" y="105" width="14" height="15" fill="none" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="270" y="85" fill="#38bdf8" font-size="12" font-weight="bold">d(M₀, Δ)</text>
      <circle cx="250" cy="120" r="4" fill="#38bdf8"/>
      <text x="250" y="140" fill="#cbd5e1" font-size="10" text-anchor="middle">H (Hình chiếu)</text>

      <!-- Góc giữa hai đường thẳng giao nhau -->
      <g transform="translate(480, 20)">
        <line x1="20" y1="120" x2="180" y2="30" stroke="#34d399" stroke-width="2"/>
        <text x="190" y="35" fill="#34d399" font-size="11">Δ₁</text>
        <line x1="20" y1="30" x2="180" y2="120" stroke="#fbbf24" stroke-width="2"/>
        <text x="190" y="125" fill="#fbbf24" font-size="11">Δ₂</text>
        <path d="M 120 75 A 30 30 0 0 0 115 65" fill="none" stroke="#f87171" stroke-width="2"/>
        <text x="135" y="70" fill="#f87171" font-size="12" font-weight="bold">φ ≤ 90°</text>
        <text x="100" y="145" fill="#94a3b8" font-size="10" text-anchor="middle">cosφ = |n₁·n₂| / (|n₁||n₂|)</text>
      </g>
    </svg>
  </div>
</div>`,
  21: `
    <div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-xs">
        <span class="font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
          <i class="fa-solid fa-shapes"></i> Đường tròn tâm I(a; b), bán kính R và Tiếp tuyến tại điểm M₀
        </span>
        <span class="text-slate-400 font-medium">Phương pháp tọa độ Oxy</span>
      </div>
      <div class="w-full overflow-x-auto flex justify-center py-2">
        <svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <!-- Đường tròn tâm I -->
    <circle cx="220" cy="90" r="60" fill="#0284c7" fill-opacity="0.15" stroke="#38bdf8" stroke-width="2.5"/>
    <circle cx="220" cy="90" r="5" fill="#38bdf8"/>
    <text x="210" y="115" fill="#38bdf8" font-size="12" font-weight="bold">I(a; b)</text>
    <!-- Bán kính IM0 -->
    <line x1="220" y1="90" x2="265" y2="48" stroke="#f59e0b" stroke-width="2"/>
    <circle cx="265" cy="48" r="5" fill="#f59e0b"/>
    <text x="275" y="45" fill="#fbbf24" font-size="11" font-weight="bold">M₀(x₀; y₀)</text>
    <text x="235" y="65" fill="#fbbf24" font-size="10">R</text>
    <!-- Tiếp tuyến delta vuông góc tại M0 -->
    <line x1="225" y1="6" x2="305" y2="90" stroke="#10b981" stroke-width="2.5"/>
    <text x="315" y="95" fill="#34d399" font-size="11" font-weight="bold">Tiếp tuyến Δ</text>
    <!-- Khung phương trình bên phải -->
    <rect x="420" y="20" width="280" height="145" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="560" y="45" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">PHƯƠNG TRÌNH ĐƯỜNG TRÒN</text>
    <text x="440" y="70" fill="#facc15" font-size="11">• Chính tắc: (x - a)² + (y - b)² = R²</text>
    <text x="440" y="93" fill="#cbd5e1" font-size="10">• Khai triển: x² + y² - 2ax - 2by + c = 0</text>
    <text x="440" y="115" fill="#cbd5e1" font-size="10">• Điều kiện: a² + b² - c > 0 ⟹ R = √(a²+b²-c)</text>
    <text x="440" y="138" fill="#34d399" font-size="10">• Tiếp tuyến: (x₀ - a)(x - x₀) + (y₀ - b)(y - y₀) = 0</text>
  </svg>
      </div>
    </div>
  `,
  22: `
    <div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-xs">
        <span class="font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
          <i class="fa-solid fa-shapes"></i> Ba đường Conic: Elip (tổng khoảng cách), Hypebol (hiệu khoảng cách) và Parabol
        </span>
        <span class="text-slate-400 font-medium">Đường Conic</span>
      </div>
      <div class="w-full overflow-x-auto flex justify-center py-2">
        <svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <!-- Elip -->
    <g transform="translate(30, 20)">
      <ellipse cx="90" cy="70" rx="75" ry="45" fill="none" stroke="#38bdf8" stroke-width="2"/>
      <circle cx="50" cy="70" r="3" fill="#ef4444"/>
      <circle cx="130" cy="70" r="3" fill="#ef4444"/>
      <text x="90" y="135" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">1. ELIP (E)</text>
      <text x="90" y="152" fill="#94a3b8" font-size="9" text-anchor="middle">x²/a² + y²/b² = 1 (b² = a² - c²)</text>
    </g>
    <!-- Hypebol -->
    <g transform="translate(265, 20)">
      <path d="M 50 25 Q 75 70 50 115" fill="none" stroke="#f59e0b" stroke-width="2"/>
      <path d="M 130 25 Q 105 70 130 115" fill="none" stroke="#f59e0b" stroke-width="2"/>
      <line x1="30" y1="25" x2="150" y2="115" stroke="#64748b" stroke-dasharray="2,2"/>
      <line x1="30" y1="115" x2="150" y2="25" stroke="#64748b" stroke-dasharray="2,2"/>
      <text x="90" y="135" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">2. HYPEBOL (H)</text>
      <text x="90" y="152" fill="#94a3b8" font-size="9" text-anchor="middle">x²/a² - y²/b² = 1 (b² = c² - a²)</text>
    </g>
    <!-- Parabol -->
    <g transform="translate(500, 20)">
      <path d="M 140 25 Q 40 70 140 115" fill="none" stroke="#10b981" stroke-width="2"/>
      <circle cx="75" cy="70" r="3" fill="#ef4444"/>
      <text x="75" y="60" fill="#ef4444" font-size="9">F(p/2;0)</text>
      <line x1="35" y1="20" x2="35" y2="120" stroke="#f43f5e" stroke-dasharray="2,2"/>
      <text x="90" y="135" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">3. PARABOL (P)</text>
      <text x="90" y="152" fill="#94a3b8" font-size="9" text-anchor="middle">y² = 2px (Đường chuẩn x = -p/2)</text>
    </g>
  </svg>
      </div>
    </div>
  `,
  23: `
<div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
  <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-xs">
    <span class="font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
      <i class="fa-solid fa-network-wired"></i> Sơ đồ cây (Tree Diagram) mô hình hóa quy tắc cộng & quy tắc nhân
    </span>
    <span class="text-slate-400 font-medium">Quy tắc đếm</span>
  </div>
  <div class="w-full overflow-x-auto flex justify-center py-2">
    <svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
      <!-- Gốc -->
      <circle cx="80" cy="90" r="14" fill="#3b82f6"/>
      <text x="80" y="94" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Bắt đầu</text>

      <!-- Nhánh công đoạn 1: Lựa chọn A (2 cách: A1, A2) -->
      <line x1="94" y1="85" x2="220" y2="50" stroke="#38bdf8" stroke-width="2"/>
      <line x1="94" y1="95" x2="220" y2="130" stroke="#38bdf8" stroke-width="2"/>
      <rect x="220" y="35" width="80" height="30" rx="6" fill="#1e293b" stroke="#38bdf8"/>
      <text x="260" y="54" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Bước 1: A₁</text>
      <rect x="220" y="115" width="80" height="30" rx="6" fill="#1e293b" stroke="#38bdf8"/>
      <text x="260" y="134" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Bước 1: A₂</text>

      <!-- Nhánh công đoạn 2: Lựa chọn B (mỗi cái 2 cách B1, B2) -->
      <line x1="300" y1="50" x2="420" y2="35" stroke="#34d399" stroke-width="1.5"/>
      <line x1="300" y1="50" x2="420" y2="65" stroke="#34d399" stroke-width="1.5"/>
      <text x="440" y="40" fill="#34d399" font-size="10">B₁ (Kết quả A₁B₁)</text>
      <text x="440" y="70" fill="#34d399" font-size="10">B₂ (Kết quả A₁B₂)</text>

      <line x1="300" y1="130" x2="420" y2="115" stroke="#34d399" stroke-width="1.5"/>
      <line x1="300" y1="130" x2="420" y2="145" stroke="#34d399" stroke-width="1.5"/>
      <text x="440" y="120" fill="#34d399" font-size="10">B₁ (Kết quả A₂B₁)</text>
      <text x="440" y="150" fill="#34d399" font-size="10">B₂ (Kết quả A₂B₂)</text>

      <!-- Card công thức tổng kết -->
      <rect x="560" y="30" width="140" height="120" rx="10" fill="#1e293b" stroke="#334155"/>
      <text x="630" y="55" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">Quy tắc nhân:</text>
      <text x="630" y="75" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">N = m × n cách</text>
      <text x="630" y="105" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Quy tắc cộng:</text>
      <text x="630" y="125" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">N = m + n cách</text>
      <text x="630" y="140" fill="#94a3b8" font-size="9" text-anchor="middle">(Phương án độc lập)</text>
    </svg>
  </div>
</div>`,
  24: `
<div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
  <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-xs">
    <span class="font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
      <i class="fa-solid fa-cubes"></i> Tiêu chí phân biệt: Hoán vị (Pn), Chỉnh hợp (Aₙᵏ) và Tổ hợp (Cₙᵏ)
    </span>
    <span class="text-slate-400 font-medium">Đại số tổ hợp</span>
  </div>
  <div class="w-full overflow-x-auto flex justify-center py-2">
    <svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
      <!-- Cột 1: Hoán vị -->
      <g transform="translate(40, 20)">
        <rect x="0" y="0" width="190" height="140" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="95" y="30" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">HOÁN VỊ (Pn)</text>
        <text x="95" y="55" fill="#cbd5e1" font-size="11" text-anchor="middle">Đổi chỗ cả n phần tử</text>
        <rect x="25" y="70" width="140" height="32" rx="6" fill="#0f172a"/>
        <text x="95" y="91" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">Pₙ = n!</text>
        <text x="95" y="125" fill="#f59e0b" font-size="10" text-anchor="middle">CÓ PHÂN BIỆT THỨ TỰ</text>
      </g>
      <!-- Cột 2: Chỉnh hợp -->
      <g transform="translate(265, 20)">
        <rect x="0" y="0" width="190" height="140" rx="10" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
        <text x="95" y="30" fill="#34d399" font-size="13" font-weight="bold" text-anchor="middle">CHỈNH HỢP (Aₙᵏ)</text>
        <text x="95" y="55" fill="#cbd5e1" font-size="11" text-anchor="middle">Chọn k từ n VÀ XẾP VỊ TRÍ</text>
        <rect x="20" y="70" width="150" height="32" rx="6" fill="#0f172a"/>
        <text x="95" y="91" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">Aₙᵏ = n! / (n - k)!</text>
        <text x="95" y="125" fill="#f59e0b" font-size="10" text-anchor="middle">CÓ PHÂN BIỆT THỨ TỰ</text>
      </g>
      <!-- Cột 3: Tổ hợp -->
      <g transform="translate(490, 20)">
        <rect x="0" y="0" width="190" height="140" rx="10" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
        <text x="95" y="30" fill="#a855f7" font-size="13" font-weight="bold" text-anchor="middle">TỔ HỢP (Cₙᵏ)</text>
        <text x="95" y="55" fill="#cbd5e1" font-size="11" text-anchor="middle">Chỉ chọn nhóm k từ n</text>
        <rect x="15" y="70" width="160" height="32" rx="6" fill="#0f172a"/>
        <text x="95" y="91" fill="#a855f7" font-size="12" font-weight="bold" text-anchor="middle">Cₙᵏ = n! / [k!(n - k)!]</text>
        <text x="95" y="125" fill="#94a3b8" font-size="10" text-anchor="middle">KHÔNG PHÂN BIỆT THỨ TỰ</text>
      </g>
    </svg>
  </div>
</div>`,
  25: `
    <div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-xs">
        <span class="font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
          <i class="fa-solid fa-shapes"></i> Tam giác Pascal và Khai triển nhị thức Newton (a + b)ⁿ
        </span>
        <span class="text-slate-400 font-medium">Đại số tổ hợp</span>
      </div>
      <div class="w-full overflow-x-auto flex justify-center py-2">
        <svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <!-- Tam giác Pascal bên trái -->
    <g transform="translate(60, 20)">
      <text x="140" y="20" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">1 (n=0)</text>
      <text x="140" y="45" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">1   1 (n=1)</text>
      <text x="140" y="70" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">1   2   1 (n=2)</text>
      <text x="140" y="95" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">1   3   3   1 (n=3)</text>
      <text x="140" y="120" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">1   4   6   4   1 (n=4)</text>
      <text x="140" y="145" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">1   5  10  10   5   1 (n=5)</text>
    </g>
    <!-- Khung công thức khai triển bên phải -->
    <rect x="370" y="20" width="330" height="145" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="535" y="45" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">CÔNG THỨC NHỊ THỨC NEWTON</text>
    <text x="390" y="70" fill="#facc15" font-size="11">(a+b)⁴ = a⁴ + 4a³b + 6a²b² + 4ab³ + b⁴</text>
    <text x="390" y="95" fill="#34d399" font-size="11">(a+b)⁵ = a⁵ + 5a⁴b + 10a³b² + 10a²b³ + 5ab⁴ + b⁵</text>
    <text x="390" y="120" fill="#cbd5e1" font-size="10">Số hạng thứ k+1: T_(k+1) = C_n^k · a^(n-k) · b^k</text>
    <text x="390" y="140" fill="#94a3b8" font-size="9">Tổng các hệ số: C_n^0 + C_n^1 + ... + C_n^n = 2ⁿ</text>
  </svg>
      </div>
    </div>
  `,
  26: `
    <div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-xs">
        <span class="font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
          <i class="fa-solid fa-shapes"></i> Không gian mẫu Ω và Xác suất cổ điển P(A) = n(A) / n(Ω)
        </span>
        <span class="text-slate-400 font-medium">Xác suất cổ điển</span>
      </div>
      <div class="w-full overflow-x-auto flex justify-center py-2">
        <svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <!-- Không gian mẫu Omega -->
    <rect x="60" y="25" width="300" height="135" rx="10" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
    <text x="80" y="48" fill="#94a3b8" font-size="13" font-weight="bold">Không gian mẫu Ω</text>
    <!-- Biến cố A -->
    <circle cx="150" cy="95" r="45" fill="#0284c7" fill-opacity="0.3" stroke="#38bdf8" stroke-width="2"/>
    <text x="150" y="100" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">Biến cố A</text>
    <!-- Biến cố đối A ngang -->
    <text x="270" y="95" fill="#94a3b8" font-size="11">Biến cố đối Ā</text>
    <text x="270" y="112" fill="#94a3b8" font-size="10">P(Ā) = 1 - P(A)</text>
    <!-- Khung công thức xác suất bên phải -->
    <rect x="400" y="20" width="300" height="145" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
    <text x="550" y="45" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">CÔNG THỨC XÁC SUẤT CỔ ĐIỂN</text>
    <text x="420" y="72" fill="#facc15" font-size="12" font-weight="bold">P(A) = n(A) / n(Ω)</text>
    <text x="420" y="95" fill="#cbd5e1" font-size="10">• Điều kiện: Các kết quả của phép thử đồng khả năng</text>
    <text x="420" y="115" fill="#cbd5e1" font-size="10">• 0 ≤ P(A) ≤ 1; P(Ω) = 1; P(∅) = 0</text>
    <text x="420" y="138" fill="#38bdf8" font-size="10">• Công thức cộng: P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</text>
  </svg>
      </div>
    </div>
  `,
  27: `
<div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
  <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-xs">
    <span class="font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
      <i class="fa-solid fa-dice-five"></i> Biểu diễn xác suất biến cố đối và công thức cộng xác suất
    </span>
    <span class="text-slate-400 font-medium">Thực hành xác suất</span>
  </div>
  <div class="w-full overflow-x-auto flex justify-center py-2">
    <svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
      <!-- Không gian mẫu Omega -->
      <rect x="60" y="20" width="300" height="140" rx="12" fill="#1e293b" stroke="#475569" stroke-width="2"/>
      <text x="80" y="45" fill="#94a3b8" font-size="13" font-weight="bold">Không gian mẫu Ω</text>
      <!-- Biến cố A -->
      <circle cx="180" cy="95" r="45" fill="#3b82f6" fill-opacity="0.3" stroke="#38bdf8" stroke-width="2"/>
      <text x="180" y="92" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">Biến cố A</text>
      <text x="180" y="108" fill="#cbd5e1" font-size="10" text-anchor="middle">P(A) = n(A)/n(Ω)</text>
      <!-- Biến cố đối A ngang -->
      <text x="290" y="130" fill="#f87171" font-size="12" font-weight="bold">Biến cố đối Ā</text>
      <text x="210" y="152" fill="#fbbf24" font-size="11">P(A) + P(Ā) = 1 ⇔ P(A) = 1 - P(Ā)</text>

      <!-- Biến cố hợp & giao bên phải -->
      <rect x="400" y="20" width="280" height="140" rx="12" fill="#1e293b" stroke="#475569" stroke-width="2"/>
      <circle cx="490" cy="85" r="40" fill="#3b82f6" fill-opacity="0.25" stroke="#38bdf8" stroke-width="1.5"/>
      <circle cx="560" cy="85" r="40" fill="#10b981" fill-opacity="0.25" stroke="#34d399" stroke-width="1.5"/>
      <text x="470" y="85" fill="#38bdf8" font-size="11" font-weight="bold">A</text>
      <text x="580" y="85" fill="#34d399" font-size="11" font-weight="bold">B</text>
      <text x="525" y="85" fill="#fbbf24" font-size="9" font-weight="bold" text-anchor="middle">A ∩ B</text>
      <text x="540" y="145" fill="#cbd5e1" font-size="10" font-weight="bold" text-anchor="middle">P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</text>
    </svg>
  </div>
</div>`,
  28: `
<div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
  <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-xs">
    <span class="font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
      <i class="fa-solid fa-coins"></i> Mô hình toán học tài chính: Hàm bậc thang tính tiền điện và đường cong lãi kép
    </span>
    <span class="text-slate-400 font-medium">Toán tài chính</span>
  </div>
  <div class="w-full overflow-x-auto flex justify-center py-2">
    <svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrFin" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" fill="#64748b"/>
        </marker>
      </defs>
      <!-- Đồ thị bậc thang tiền điện -->
      <line x1="60" y1="140" x2="350" y2="140" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrFin)"/>
      <line x1="80" y1="150" x2="80" y2="20" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrFin)"/>
      <text x="360" y="144" fill="#94a3b8" font-size="10">Sản lượng (kWh)</text>
      <text x="76" y="15" fill="#94a3b8" font-size="10">Đơn giá (đ)</text>

      <!-- Các bậc thang -->
      <line x1="80" y1="120" x2="130" y2="120" stroke="#38bdf8" stroke-width="2.5"/>
      <circle cx="130" cy="120" r="3" fill="#38bdf8"/>
      <text x="105" y="113" fill="#38bdf8" font-size="9" text-anchor="middle">Bậc 1</text>
      <line x1="130" y1="100" x2="190" y2="100" stroke="#34d399" stroke-width="2.5"/>
      <circle cx="190" cy="100" r="3" fill="#34d399"/>
      <text x="160" y="93" fill="#34d399" font-size="9" text-anchor="middle">Bậc 2</text>
      <line x1="190" y1="75" x2="260" y2="75" stroke="#f59e0b" stroke-width="2.5"/>
      <circle cx="260" cy="75" r="3" fill="#f59e0b"/>
      <text x="225" y="68" fill="#f59e0b" font-size="9" text-anchor="middle">Bậc 3</text>
      <line x1="260" y1="45" x2="330" y2="45" stroke="#f87171" stroke-width="2.5"/>
      <text x="295" y="38" fill="#f87171" font-size="9" text-anchor="middle">Bậc 4...</text>
      <text x="190" y="165" fill="#cbd5e1" font-size="10" text-anchor="middle">Hàm từng khúc tính giá điện lũy tiến</text>

      <!-- Đồ thị lãi kép bên phải -->
      <line x1="420" y1="140" x2="680" y2="140" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrFin)"/>
      <line x1="440" y1="150" x2="440" y2="20" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrFin)"/>
      <text x="690" y="144" fill="#94a3b8" font-size="10">Kì hạn n</text>
      <text x="436" y="15" fill="#94a3b8" font-size="10">Số tiền Tn</text>
      <path d="M 440 120 Q 540 110, 660 30" fill="none" stroke="#a855f7" stroke-width="3"/>
      <text x="560" y="55" fill="#a855f7" font-size="11" font-weight="bold">Tₙ = P·(1 + r)ⁿ</text>
      <text x="560" y="165" fill="#cbd5e1" font-size="10" text-anchor="middle">Tăng trưởng lũy thừa theo lãi kép</text>
    </svg>
  </div>
</div>`,
  29: `
<div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
  <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-xs">
    <span class="font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
      <i class="fa-solid fa-share-nodes"></i> Mô hình đồ thị mạng xã hội (Graph Network): Nút người dùng và Cạnh quan hệ
    </span>
    <span class="text-slate-400 font-medium">Mạng xã hội</span>
  </div>
  <div class="w-full overflow-x-auto flex justify-center py-2">
    <svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
      <!-- Cạnh nối quan hệ -->
      <line x1="360" y1="90" x2="200" y2="50" stroke="#3b82f6" stroke-width="2"/>
      <line x1="360" y1="90" x2="220" y2="135" stroke="#3b82f6" stroke-width="2"/>
      <line x1="360" y1="90" x2="500" y2="50" stroke="#3b82f6" stroke-width="2"/>
      <line x1="360" y1="90" x2="520" y2="130" stroke="#3b82f6" stroke-width="2"/>
      <line x1="360" y1="90" x2="360" y2="25" stroke="#3b82f6" stroke-width="2"/>
      <line x1="200" y1="50" x2="100" y2="90" stroke="#475569" stroke-width="1.5" stroke-dasharray="3,3"/>
      <line x1="220" y1="135" x2="100" y2="90" stroke="#475569" stroke-width="1.5" stroke-dasharray="3,3"/>
      <line x1="500" y1="50" x2="620" y2="85" stroke="#475569" stroke-width="1.5" stroke-dasharray="3,3"/>
      <line x1="520" y1="130" x2="620" y2="85" stroke="#475569" stroke-width="1.5" stroke-dasharray="3,3"/>

      <!-- Nút trung tâm có ảnh hưởng lớn (Hub) -->
      <circle cx="360" cy="90" r="22" fill="#3b82f6" stroke="#60a5fa" stroke-width="3"/>
      <text x="360" y="94" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Hub K</text>
      <text x="360" y="125" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Bậc deg(K) = 5 (Ảnh hưởng lớn)</text>

      <!-- Các nút thành viên -->
      <circle cx="200" cy="50" r="14" fill="#1e293b" stroke="#34d399" stroke-width="2"/>
      <text x="200" y="54" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">U₁</text>

      <circle cx="220" cy="135" r="14" fill="#1e293b" stroke="#34d399" stroke-width="2"/>
      <text x="220" y="139" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">U₂</text>

      <circle cx="360" cy="25" r="14" fill="#1e293b" stroke="#34d399" stroke-width="2"/>
      <text x="360" y="29" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">U₃</text>

      <circle cx="500" cy="50" r="14" fill="#1e293b" stroke="#34d399" stroke-width="2"/>
      <text x="500" y="54" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">U₄</text>

      <circle cx="520" cy="130" r="14" fill="#1e293b" stroke="#34d399" stroke-width="2"/>
      <text x="520" y="134" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">U₅</text>

      <circle cx="100" cy="90" r="12" fill="#0f172a" stroke="#64748b" stroke-width="1.5"/>
      <circle cx="620" cy="85" r="12" fill="#0f172a" stroke="#64748b" stroke-width="1.5"/>

      <!-- Chú thích -->
      <rect x="520" y="10" width="180" height="34" rx="6" fill="#1e293b" stroke="#334155"/>
      <text x="610" y="26" fill="#fbbf24" font-size="9" text-anchor="middle">Khoảng cách trung bình &amp;</text>
      <text x="610" y="38" fill="#fbbf24" font-size="9" text-anchor="middle">Độ trung tâm Closeness/Degree</text>
    </svg>
  </div>
</div>`,
  30: `
    <div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-xs">
        <span class="font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
          <i class="fa-solid fa-shapes"></i> Mô hình Bắt – Đánh dấu – Thả – Bắt lại (Lincoln - Petersen) ước tính số lượng cá thể N
        </span>
        <span class="text-slate-400 font-medium">Thực hành trải nghiệm</span>
      </div>
      <div class="w-full overflow-x-auto flex justify-center py-2">
        <svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <!-- Bước 1: Bắt m cá thể đánh dấu -->
    <g transform="translate(30, 25)">
      <rect width="180" height="125" rx="10" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="90" y="30" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">LẦN 1: ĐÁNH DẤU</text>
      <circle cx="50" cy="65" r="8" fill="#eab308"/>
      <circle cx="90" cy="65" r="8" fill="#eab308"/>
      <circle cx="130" cy="65" r="8" fill="#eab308"/>
      <text x="90" y="100" fill="#cbd5e1" font-size="10" text-anchor="middle">Bắt m cá thể, đánh dấu</text>
      <text x="90" y="118" fill="#38bdf8" font-size="10" text-anchor="middle">rồi thả lại vào tự nhiên</text>
    </g>
    <!-- Bước 2: Bắt lại n cá thể -->
    <g transform="translate(235, 25)">
      <rect width="180" height="125" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
      <text x="90" y="30" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">LẦN 2: BẮT LẠI</text>
      <circle cx="50" cy="65" r="8" fill="#eab308"/>
      <circle cx="90" cy="65" r="8" fill="#64748b"/>
      <circle cx="130" cy="65" r="8" fill="#64748b"/>
      <text x="90" y="100" fill="#cbd5e1" font-size="10" text-anchor="middle">Bắt n cá thể, thấy có</text>
      <text x="90" y="118" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">r cá thể có mang dấu</text>
    </g>
    <!-- Khung công thức bên phải -->
    <rect x="440" y="25" width="260" height="125" rx="12" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="570" y="50" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">CÔNG THỨC TỈ LỆ</text>
    <text x="570" y="80" fill="#34d399" font-size="13" font-weight="bold" text-anchor="middle">r / n ≈ m / N</text>
    <text x="570" y="108" fill="#facc15" font-size="14" font-weight="black" text-anchor="middle">⟹ N ≈ (m · n) / r</text>
    <text x="570" y="132" fill="#94a3b8" font-size="9" text-anchor="middle">Điều kiện: Quần thể ổn định & lấy mẫu ngẫu nhiên</text>
  </svg>
      </div>
    </div>
  `,
};
