const fs = require('fs');

const svgsData = {
  1: `<svg class="w-full h-auto rounded-xl shadow-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="barGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0d9488" />
      <stop offset="100%" stop-color="#14b8a6" />
    </linearGradient>
    <linearGradient id="barGradMean" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" />
      <stop offset="100%" stop-color="#fbbf24" />
    </linearGradient>
  </defs>

  <!-- Title Badge -->
  <rect x="25" y="15" width="460" height="30" rx="6" fill="#0f766e" />
  <text x="35" y="35" fill="#ffffff" font-size="13" font-weight="bold" font-family="sans-serif">BẢNG PHÂN BỐ XÁC SUẤT, KÌ VỌNG E(X) VÀ ĐỘ LỆCH CHUẨN σ(X)</text>

  <!-- Left: Discrete Probability Histogram -->
  <g transform="translate(40, 65)">
    <rect width="400" height="270" rx="12" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="20" y="25" fill="#0f766e" class="dark:fill-teal-400" font-size="12" font-weight="bold" font-family="sans-serif">Đồ thị cột Phân bố Xác suất Rời rạc</text>

    <!-- Axes -->
    <line x1="45" y1="210" x2="370" y2="210" stroke="#475569" stroke-width="2" />
    <polygon points="370,210 362,206 362,214" fill="#475569" />
    <text x="350" y="230" fill="#475569" font-size="11" font-weight="bold">Giá trị xᵢ</text>

    <line x1="45" y1="210" x2="45" y2="45" stroke="#475569" stroke-width="2" />
    <polygon points="45,45 41,53 49,53" fill="#475569" />
    <text x="20" y="45" fill="#475569" font-size="11" font-weight="bold">P(X=xᵢ)</text>

    <!-- Y-axis ticks -->
    <line x1="40" y1="170" x2="45" y2="170" stroke="#475569" stroke-width="1.5" />
    <text x="20" y="174" fill="#64748b" font-size="10">0.1</text>
    <line x1="40" y1="130" x2="45" y2="130" stroke="#475569" stroke-width="1.5" />
    <text x="20" y="134" fill="#64748b" font-size="10">0.2</text>
    <line x1="40" y1="90" x2="45" y2="90" stroke="#475569" stroke-width="1.5" />
    <text x="20" y="94" fill="#64748b" font-size="10">0.3</text>
    <line x1="40" y1="50" x2="45" y2="50" stroke="#475569" stroke-width="1.5" />
    <text x="20" y="54" fill="#64748b" font-size="10">0.4</text>

    <!-- Probability Bars -->
    <!-- x = 1, p = 0.1 (h = 40) -->
    <rect x="75" y="170" width="35" height="40" rx="3" fill="url(#barGrad1)" />
    <text x="83" y="162" fill="#0f766e" font-size="10" font-weight="bold">0.10</text>
    <text x="88" y="226" fill="#1e293b" class="dark:fill-slate-300" font-size="11" font-weight="bold">1</text>

    <!-- x = 2, p = 0.25 (h = 100) -->
    <rect x="135" y="110" width="35" height="100" rx="3" fill="url(#barGrad1)" />
    <text x="143" y="102" fill="#0f766e" font-size="10" font-weight="bold">0.25</text>
    <text x="148" y="226" fill="#1e293b" class="dark:fill-slate-300" font-size="11" font-weight="bold">2</text>

    <!-- x = 3, p = 0.35 (h = 140) -->
    <rect x="195" y="70" width="35" height="140" rx="3" fill="url(#barGrad1)" />
    <text x="203" y="62" fill="#0f766e" font-size="10" font-weight="bold">0.35</text>
    <text x="208" y="226" fill="#1e293b" class="dark:fill-slate-300" font-size="11" font-weight="bold">3</text>

    <!-- x = 4, p = 0.20 (h = 80) -->
    <rect x="255" y="130" width="35" height="80" rx="3" fill="url(#barGrad1)" />
    <text x="263" y="122" fill="#0f766e" font-size="10" font-weight="bold">0.20</text>
    <text x="268" y="226" fill="#1e293b" class="dark:fill-slate-300" font-size="11" font-weight="bold">4</text>

    <!-- x = 5, p = 0.10 (h = 40) -->
    <rect x="315" y="170" width="35" height="40" rx="3" fill="url(#barGrad1)" />
    <text x="323" y="162" fill="#0f766e" font-size="10" font-weight="bold">0.10</text>
    <text x="328" y="226" fill="#1e293b" class="dark:fill-slate-300" font-size="11" font-weight="bold">5</text>

    <!-- Expected Value Line (E(X) = 2.95) -->
    <line x1="210" y1="40" x2="210" y2="210" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,3" />
    <polygon points="210,40 206,48 214,48" fill="#ef4444" />
    <text x="215" y="48" fill="#b91c1c" font-size="11" font-weight="bold">E(X) ≈ 2,95</text>

    <text x="30" y="255" fill="#64748b" font-size="10">Điều kiện chuẩn hóa: Σ pᵢ = 0.1 + 0.25 + 0.35 + 0.2 + 0.1 = 1,00</text>
  </g>

  <!-- Right: Formulas & Dispersion Interval -->
  <g transform="translate(460, 65)">
    <rect width="300" height="270" rx="12" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="20" y="25" fill="#0f766e" class="dark:fill-teal-400" font-size="12" font-weight="bold" font-family="sans-serif">Công thức & Khoảng biến thiên 1-Sigma</text>

    <!-- Formula E(X) -->
    <rect x="15" y="45" width="270" height="50" rx="6" fill="#e6fffa" stroke="#2dd4bf" class="dark:fill-teal-950/40 dark:stroke-teal-800" />
    <text x="25" y="65" fill="#0f766e" class="dark:fill-teal-300" font-size="11" font-weight="bold">Kì vọng (Giá trị trung bình):</text>
    <text x="25" y="83" fill="#047857" class="dark:fill-emerald-400" font-size="12" font-weight="bold">E(X) = Σ xᵢ · pᵢ</text>

    <!-- Formula V(X) & Sigma -->
    <rect x="15" y="105" width="270" height="65" rx="6" fill="#fef3c7" stroke="#f59e0b" class="dark:fill-amber-950/40 dark:stroke-amber-800" />
    <text x="25" y="125" fill="#b45309" class="dark:fill-amber-300" font-size="11" font-weight="bold">Phương sai & Độ lệch chuẩn:</text>
    <text x="25" y="145" fill="#b45309" class="dark:fill-amber-300" font-size="11.5" font-weight="bold">V(X) = Σ xᵢ² · pᵢ − [E(X)]²</text>
    <text x="25" y="162" fill="#b45309" class="dark:fill-amber-300" font-size="11.5" font-weight="bold">σ(X) = √V(X) (Đo độ rủi ro)</text>

    <!-- Interval Diagram -->
    <g transform="translate(15, 185)">
      <rect width="270" height="70" rx="6" fill="#fee2e2" stroke="#f87171" class="dark:fill-rose-950/40 dark:stroke-rose-800" />
      <text x="12" y="20" fill="#991b1b" class="dark:fill-rose-300" font-size="10.5" font-weight="bold">Khoảng biến thiên tập trung [E − σ; E + σ]:</text>
      <line x1="20" y1="45" x2="250" y2="45" stroke="#991b1b" stroke-width="2" />
      <circle cx="135" cy="45" r="4" fill="#b91c1c" />
      <text x="125" y="38" fill="#b91c1c" font-size="9" font-weight="bold">E(X)</text>
      <line x1="55" y1="40" x2="55" y2="50" stroke="#991b1b" stroke-width="2" />
      <text x="35" y="60" fill="#991b1b" font-size="9">E − σ</text>
      <line x1="215" y1="40" x2="215" y2="50" stroke="#991b1b" stroke-width="2" />
      <text x="195" y="60" fill="#991b1b" font-size="9">E + σ</text>
    </g>
  </g>
</svg>`,

  2: `<svg class="w-full h-auto rounded-xl shadow-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gBinom" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#1d4ed8" />
    </linearGradient>
  </defs>

  <!-- Title Badge -->
  <rect x="25" y="15" width="460" height="30" rx="6" fill="#1e40af" />
  <text x="35" y="35" fill="#ffffff" font-size="13" font-weight="bold" font-family="sans-serif">PHÂN BỐ NHỊ THỨC B(n, p) VÀ CÔNG THỨC BERNOULLI</text>

  <!-- Left: Binomial Bell Histogram (n=10, p=0.5) -->
  <g transform="translate(40, 65)">
    <rect width="420" height="270" rx="12" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="20" y="25" fill="#1e40af" class="dark:fill-sky-400" font-size="12" font-weight="bold" font-family="sans-serif">Đồ thị hình chuông rời rạc B(10; 0,5)</text>

    <!-- Axes -->
    <line x1="40" y1="210" x2="390" y2="210" stroke="#475569" stroke-width="2" />
    <polygon points="390,210 382,206 382,214" fill="#475569" />
    <text x="370" y="228" fill="#475569" font-size="11" font-weight="bold">k (số lần)</text>

    <line x1="40" y1="210" x2="40" y2="45" stroke="#475569" stroke-width="2" />
    <polygon points="40,45 36,53 44,53" fill="#475569" />
    <text x="15" y="45" fill="#475569" font-size="11" font-weight="bold">P(X=k)</text>

    <!-- Bars for k = 0 to 10 (Scaled: max P(5)=0.246 -> h=135) -->
    <!-- k=0 (0.001) -->
    <rect x="55" y="208" width="22" height="2" fill="url(#gBinom)" />
    <!-- k=1 (0.010) -->
    <rect x="85" y="204" width="22" height="6" fill="url(#gBinom)" />
    <!-- k=2 (0.044) -->
    <rect x="115" y="186" width="22" height="24" fill="url(#gBinom)" />
    <!-- k=3 (0.117) -->
    <rect x="145" y="146" width="22" height="64" fill="url(#gBinom)" />
    <!-- k=4 (0.205) -->
    <rect x="175" y="98" width="22" height="112" fill="url(#gBinom)" />
    <!-- k=5 (0.246 - Peak) -->
    <rect x="205" y="75" width="22" height="135" fill="#ef4444" rx="2" />
    <text x="202" y="68" fill="#b91c1c" font-size="9.5" font-weight="bold">0.246</text>
    <!-- k=6 (0.205) -->
    <rect x="235" y="98" width="22" height="112" fill="url(#gBinom)" />
    <!-- k=7 (0.117) -->
    <rect x="265" y="146" width="22" height="64" fill="url(#gBinom)" />
    <!-- k=8 (0.044) -->
    <rect x="295" y="186" width="22" height="24" fill="url(#gBinom)" />
    <!-- k=9 (0.010) -->
    <rect x="325" y="204" width="22" height="6" fill="url(#gBinom)" />
    <!-- k=10 (0.001) -->
    <rect x="355" y="208" width="22" height="2" fill="url(#gBinom)" />

    <!-- X labels -->
    <text x="63" y="225" font-size="10" fill="#475569">0</text>
    <text x="123" y="225" font-size="10" fill="#475569">2</text>
    <text x="183" y="225" font-size="10" fill="#475569">4</text>
    <text x="213" y="225" font-size="10" fill="#b91c1c" font-weight="bold">5</text>
    <text x="243" y="225" font-size="10" fill="#475569">6</text>
    <text x="303" y="225" font-size="10" fill="#475569">8</text>
    <text x="360" y="225" font-size="10" fill="#475569">10</text>

    <!-- Bell curve overlay -->
    <path d="M 55,208 C 115,190 175,100 216,75 C 255,100 315,190 375,208" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="3,2" />

    <text x="30" y="255" fill="#64748b" font-size="10.5">Đỉnh xác suất đối xứng quanh giá trị kì vọng: E(X) = n·p = 10 × 0,5 = 5</text>
  </g>

  <!-- Right: Bernoulli Law & Summary Properties -->
  <g transform="translate(480, 65)">
    <rect width="280" height="270" rx="12" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="20" y="25" fill="#1e40af" class="dark:fill-sky-400" font-size="12" font-weight="bold" font-family="sans-serif">Công thức Bernoulli Tổng quát</text>

    <!-- Formula Box -->
    <rect x="15" y="45" width="250" height="65" rx="6" fill="#e0f2fe" stroke="#38bdf8" class="dark:fill-slate-700 dark:stroke-slate-600" />
    <text x="25" y="68" fill="#0369a1" class="dark:fill-sky-300" font-size="11" font-weight="bold">Công thức Bernoulli:</text>
    <text x="25" y="92" fill="#0284c7" class="dark:fill-sky-200" font-size="12" font-weight="bold">P(X = k) = C(n, k) · pᵏ · (1 − p)ⁿ⁻ᵏ</text>

    <!-- Properties Box -->
    <rect x="15" y="125" width="250" height="120" rx="6" fill="#ffffff" stroke="#cbd5e1" class="dark:fill-slate-900 dark:stroke-slate-700" />
    <text x="25" y="148" fill="#1e293b" class="dark:fill-slate-100" font-size="11" font-weight="bold">Bộ ba Số đặc trưng:</text>
    
    <text x="25" y="172" fill="#059669" font-size="11" font-weight="bold">• Kì vọng: E(X) = n · p</text>
    <text x="25" y="194" fill="#b45309" font-size="11" font-weight="bold">• Phương sai: V(X) = n · p · (1 − p)</text>
    <text x="25" y="216" fill="#7c3aed" font-size="11" font-weight="bold">• Độ lệch chuẩn: σ(X) = √[np(1−p)]</text>
    <text x="25" y="234" fill="#64748b" font-size="9.5">Xác suất ít nhất 1: P(X ≥ 1) = 1 − (1 − p)ⁿ</text>
  </g>
</svg>`,

  3: `<svg class="w-full h-auto rounded-xl shadow-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="polyFeasible" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.15" />
    </linearGradient>
  </defs>

  <!-- Title Badge -->
  <rect x="25" y="15" width="460" height="30" rx="6" fill="#1e40af" />
  <text x="35" y="35" fill="#ffffff" font-size="13" font-weight="bold" font-family="sans-serif">QUY HOẠCH TUYẾN TÍNH 2 BIẾN VÀ ĐỊNH LÍ ĐIỂM CỰC BIÊN</text>

  <!-- Left: Polygon Feasible Region on Oxy -->
  <g transform="translate(40, 65)">
    <rect width="400" height="270" rx="12" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="20" y="25" fill="#1e40af" class="dark:fill-sky-400" font-size="12" font-weight="bold" font-family="sans-serif">Miền nghiệm Đa giác lồi & Điểm cực biên</text>

    <!-- Axes Oxy -->
    <line x1="50" y1="210" x2="360" y2="210" stroke="#475569" stroke-width="2" />
    <polygon points="360,210 352,206 352,214" fill="#475569" />
    <text x="345" y="228" fill="#475569" font-size="12" font-weight="bold">x</text>

    <line x1="50" y1="210" x2="50" y2="40" stroke="#475569" stroke-width="2" />
    <polygon points="50,40 46,48 54,48" fill="#475569" />
    <text x="35" y="48" fill="#475569" font-size="12" font-weight="bold">y</text>

    <!-- Feasible Region Polygon: O(50,210) -> A(230,210) -> B(190,100) -> C(100,70) -> D(50,140) -->
    <polygon points="50,210 230,210 190,100 100,70 50,140" fill="url(#polyFeasible)" stroke="#0284c7" stroke-width="2.5" />

    <!-- Boundary lines extended -->
    <line x1="260" y1="210" x2="160" y2="20" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2,2" />
    <line x1="20" y1="180" x2="220" y2="40" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2,2" />

    <!-- Extreme Points / Vertices -->
    <!-- O -->
    <circle cx="50" cy="210" r="5" fill="#1e293b" />
    <text x="35" y="225" font-size="11" font-weight="bold">O</text>
    <!-- A -->
    <circle cx="230" cy="210" r="5" fill="#2563eb" />
    <text x="235" y="225" font-size="11" font-weight="bold" fill="#2563eb">A</text>
    <!-- B (Optimal Max Point) -->
    <circle cx="190" cy="100" r="7" fill="#ef4444" stroke="#ffffff" stroke-width="2" />
    <text x="200" y="98" font-size="12" font-weight="black" fill="#b91c1c">B (Max F*)</text>
    <!-- C -->
    <circle cx="100" cy="70" r="5" fill="#2563eb" />
    <text x="95" y="60" font-size="11" font-weight="bold" fill="#2563eb">C</text>
    <!-- D -->
    <circle cx="50" cy="140" r="5" fill="#2563eb" />
    <text x="30" y="145" font-size="11" font-weight="bold" fill="#2563eb">D</text>

    <!-- Objective function contour lines Ax + By = c -->
    <line x1="80" y1="230" x2="250" y2="120" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,2" />
    <line x1="120" y1="210" x2="290" y2="100" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,2" />
    <!-- Gradient vector arrow -->
    <line x1="130" y1="170" x2="165" y2="115" stroke="#ef4444" stroke-width="2.5" />
    <polygon points="165,115 156,120 162,125" fill="#ef4444" />
    <text x="170" y="130" fill="#b91c1c" font-size="10" font-weight="bold">Tăng F</text>

    <text x="20" y="255" fill="#64748b" font-size="10.5">Miền phương án chấp nhận được D là đa giác lồi tô màu xanh</text>
  </g>

  <!-- Right: Theorem & Evaluation Table -->
  <g transform="translate(460, 65)">
    <rect width="300" height="270" rx="12" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="20" y="25" fill="#1e40af" class="dark:fill-sky-400" font-size="12" font-weight="bold" font-family="sans-serif">Định lí Điểm cực biên & Bảng tính</text>

    <rect x="15" y="45" width="270" height="60" rx="6" fill="#e0f2fe" stroke="#38bdf8" class="dark:fill-slate-700 dark:stroke-slate-600" />
    <text x="25" y="68" fill="#0369a1" class="dark:fill-sky-300" font-size="11" font-weight="bold">Định lí Điểm cực biên:</text>
    <text x="25" y="88" fill="#0284c7" class="dark:fill-sky-200" font-size="10.5">Giá trị Max / Min của F(x, y) = Ax + By</text>
    <text x="25" y="100" fill="#0284c7" class="dark:fill-sky-200" font-size="10.5">luôn đạt tại ít nhất một đỉnh của miền nghiệm!</text>

    <!-- Table of vertices -->
    <g transform="translate(15, 120)">
      <rect width="270" height="130" rx="6" fill="#ffffff" stroke="#cbd5e1" class="dark:fill-slate-900 dark:stroke-slate-700" />
      <text x="15" y="22" fill="#1e293b" class="dark:fill-slate-100" font-size="11" font-weight="bold">Bảng đối chiếu giá trị các đỉnh:</text>
      
      <text x="15" y="46" font-size="10.5" fill="#475569">• Đỉnh O (0; 0) ⇒ F(O) = 0</text>
      <text x="15" y="66" font-size="10.5" fill="#475569">• Đỉnh A (4; 0) ⇒ F(A) = 12</text>
      <text x="15" y="86" font-size="11" fill="#b91c1c" font-weight="bold">• Đỉnh B (3; 2) ⇒ F(B) = 13 (Cực đại Max!)</text>
      <text x="15" y="106" font-size="10.5" fill="#475569">• Đỉnh C (1; 3) ⇒ F(C) = 9</text>
      <text x="15" y="124" font-size="10.5" fill="#475569">• Đỉnh D (0; 2) ⇒ F(D) = 4</text>
    </g>
  </g>
</svg>`,

  4: `<svg class="w-full h-auto rounded-xl shadow-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
  <!-- Title Badge -->
  <rect x="25" y="15" width="460" height="30" rx="6" fill="#1e40af" />
  <text x="35" y="35" fill="#ffffff" font-size="13" font-weight="bold" font-family="sans-serif">TỐI ƯU HÓA BẰNG ĐẠO HÀM VÀ MÔ HÌNH KINH TẾ VI MÔ</text>

  <!-- Left: Revenue, Cost & Profit Curves -->
  <g transform="translate(40, 65)">
    <rect width="390" height="270" rx="12" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="20" y="25" fill="#1e40af" class="dark:fill-sky-400" font-size="12" font-weight="bold" font-family="sans-serif">Đồ thị Doanh thu R(x), Chi phí C(x) & Lợi nhuận Π(x)</text>

    <!-- Axes -->
    <line x1="45" y1="210" x2="350" y2="210" stroke="#475569" stroke-width="2" />
    <polygon points="350,210 342,206 342,214" fill="#475569" />
    <text x="330" y="228" fill="#475569" font-size="11" font-weight="bold">Sản lượng x</text>

    <line x1="45" y1="210" x2="45" y2="40" stroke="#475569" stroke-width="2" />
    <polygon points="45,40 41,48 49,48" fill="#475569" />
    <text x="15" y="45" fill="#475569" font-size="11" font-weight="bold">Tiền ($)</text>

    <!-- Revenue Curve R(x) (Inverted Parabola) -->
    <path d="M 45,210 C 100,80 200,60 330,210" fill="none" stroke="#2563eb" stroke-width="2.5" />
    <text x="225" y="65" fill="#2563eb" font-size="10.5" font-weight="bold">R(x) Doanh thu</text>

    <!-- Cost Curve C(x) (S-curve cubic) -->
    <path d="M 45,170 C 130,150 200,120 310,50" fill="none" stroke="#ea580c" stroke-width="2.5" />
    <text x="300" y="45" fill="#ea580c" font-size="10.5" font-weight="bold">C(x) Chi phí</text>

    <!-- Profit Curve Pi(x) = R(x) - C(x) -->
    <path d="M 45,210 C 90,210 140,110 180,110 C 220,110 260,210 300,240" fill="none" stroke="#16a34a" stroke-width="3" />
    
    <!-- Optimal production x* line -->
    <line x1="180" y1="50" x2="180" y2="210" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,3" />
    <circle cx="180" cy="110" r="5" fill="#16a34a" />
    <text x="165" y="100" fill="#15803d" font-size="10.5" font-weight="bold">Max Π*</text>
    <text x="175" y="225" fill="#b91c1c" font-size="11" font-weight="bold">x*</text>

    <!-- Parallel Tangents (R' = C') -->
    <line x1="140" y1="80" x2="220" y2="70" stroke="#2563eb" stroke-width="1.5" />
    <line x1="140" y1="135" x2="220" y2="125" stroke="#ea580c" stroke-width="1.5" />

    <text x="20" y="255" fill="#64748b" font-size="10.5">Tiếp tuyến R(x) và C(x) song song nhau tại x* ⇒ Doanh thu biên = Chi phí biên</text>
  </g>

  <!-- Right: Boat Rowing Problem Diagram -->
  <g transform="translate(450, 65)">
    <rect width="310" height="270" rx="12" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="20" y="25" fill="#1e40af" class="dark:fill-sky-400" font-size="12" font-weight="bold" font-family="sans-serif">Bài toán Chèo thuyền Cập bờ ven biển</text>

    <!-- Shoreline -->
    <line x1="30" y1="130" x2="280" y2="130" stroke="#b45309" stroke-width="3" />
    <text x="220" y="125" fill="#b45309" font-size="10" font-weight="bold">Bờ biển</text>

    <!-- Sea water color -->
    <rect x="30" y="132" width="250" height="60" fill="#38bdf8" fill-opacity="0.15" />
    <text x="40" y="155" fill="#0284c7" font-size="10">Biển (vận tốc v₁)</text>

    <!-- Point A (Island/Sea) -->
    <circle cx="60" cy="180" r="5" fill="#ef4444" />
    <text x="50" y="195" font-size="11" font-weight="bold" fill="#b91c1c">A</text>

    <!-- Point P (Projection) -->
    <circle cx="60" cy="130" r="4" fill="#475569" />
    <text x="55" y="120" font-size="10">P</text>
    <line x1="60" y1="180" x2="60" y2="130" stroke="#475569" stroke-width="1.5" stroke-dasharray="2,2" />
    <text x="65" y="160" font-size="9" fill="#475569">h</text>

    <!-- Optimal landing point Q -->
    <circle cx="150" cy="130" r="5" fill="#16a34a" />
    <text x="145" y="120" font-size="11" font-weight="bold" fill="#15803d">Q</text>
    <line x1="60" y1="130" x2="150" y2="130" stroke="#16a34a" stroke-width="2" />
    <text x="100" y="142" font-size="9.5" fill="#15803d">x</text>

    <!-- Rowing path AQ -->
    <line x1="60" y1="180" x2="150" y2="130" stroke="#0284c7" stroke-width="2.5" />
    <text x="85" y="172" font-size="9" fill="#0284c7">√(h² + x²)</text>

    <!-- Walking path QB to Destination B -->
    <circle cx="260" cy="130" r="5" fill="#ef4444" />
    <text x="255" y="120" font-size="11" font-weight="bold" fill="#b91c1c">B</text>
    <line x1="150" y1="130" x2="260" y2="130" stroke="#ea580c" stroke-width="2.5" />
    <text x="190" y="145" font-size="9.5" fill="#ea580c">d − x</text>

    <!-- Optimization Law Box -->
    <rect x="20" y="200" width="270" height="58" rx="6" fill="#e0f2fe" stroke="#38bdf8" class="dark:fill-slate-700 dark:stroke-slate-600" />
    <text x="30" y="222" fill="#0369a1" class="dark:fill-sky-300" font-size="11" font-weight="bold">Thời gian: T(x) = AQ/v₁ + QB/v₂</text>
    <text x="30" y="242" fill="#0284c7" class="dark:fill-sky-200" font-size="10.5" font-weight="bold">T'(x) = 0 ⇔ sin α / v₁ = 1 / v₂ (Snell–Descartes!)</text>
  </g>
</svg>`,

  5: `<svg class="w-full h-auto rounded-xl shadow-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
  <!-- Title Badge -->
  <rect x="25" y="15" width="460" height="30" rx="6" fill="#d97706" />
  <text x="35" y="35" fill="#ffffff" font-size="13" font-weight="bold" font-family="sans-serif">TĂNG TRƯỞNG LÃI ĐƠN VS LÃI KÉP & LÃI SUẤT THỰC SAU LẠM PHÁT</text>

  <!-- Left: Growth Comparison Curve -->
  <g transform="translate(40, 65)">
    <rect width="390" height="270" rx="12" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="20" y="25" fill="#d97706" class="dark:fill-amber-400" font-size="12" font-weight="bold" font-family="sans-serif">Đồ thị So sánh Lãi đơn vs Lãi kép theo thời gian t</text>

    <!-- Axes -->
    <line x1="45" y1="210" x2="350" y2="210" stroke="#475569" stroke-width="2" />
    <polygon points="350,210 342,206 342,214" fill="#475569" />
    <text x="330" y="228" fill="#475569" font-size="11" font-weight="bold">Năm t</text>

    <line x1="45" y1="210" x2="45" y2="40" stroke="#475569" stroke-width="2" />
    <polygon points="45,40 41,48 49,48" fill="#475569" />
    <text x="15" y="45" fill="#475569" font-size="11" font-weight="bold">Tổng tiền A</text>

    <!-- Initial Capital P line -->
    <line x1="45" y1="180" x2="330" y2="180" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3" />
    <text x="25" y="184" fill="#64748b" font-size="10">Vốn P</text>

    <!-- Simple Interest Line A = P(1 + rt) (Linear) -->
    <line x1="45" y1="180" x2="330" y2="110" stroke="#2563eb" stroke-width="2.5" />
    <text x="270" y="102" fill="#2563eb" font-size="10.5" font-weight="bold">Lãi đơn (Tuyến tính)</text>

    <!-- Compound Interest Curve A = P(1 + r)^t (Exponential) -->
    <path d="M 45,180 C 130,170 230,120 330,45" fill="none" stroke="#16a34a" stroke-width="3" />
    <text x="250" y="40" fill="#15803d" font-size="11" font-weight="bold">Lãi kép (Hàm số mũ!)</text>

    <!-- Divergence Gap -->
    <line x1="260" y1="125" x2="260" y2="78" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="2,2" />
    <text x="268" y="105" fill="#b91c1c" font-size="9.5" font-weight="bold">Chênh lệch khổng lồ</text>

    <text x="20" y="255" fill="#64748b" font-size="10.5">Thời gian càng dài, hiệu ứng 'lãi mẹ đẻ lãi con' càng bùng nổ theo hàm mũ</text>
  </g>

  <!-- Right: Formulas & Fisher Inflation Model -->
  <g transform="translate(450, 65)">
    <rect width="310" height="270" rx="12" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="20" y="25" fill="#d97706" class="dark:fill-amber-400" font-size="12" font-weight="bold" font-family="sans-serif">Hệ thống Công thức Tài chính Cốt lõi</text>

    <!-- Compound Formula Box -->
    <rect x="15" y="45" width="280" height="65" rx="6" fill="#fef3c7" stroke="#f59e0b" class="dark:fill-amber-950/40 dark:stroke-amber-800" />
    <text x="25" y="68" fill="#b45309" class="dark:fill-amber-300" font-size="11" font-weight="bold">Lãi kép ghép n kì/năm:</text>
    <text x="25" y="92" fill="#b45309" class="dark:fill-amber-300" font-size="12.5" font-weight="bold">A = P · (1 + r / n)ⁿᵗ</text>

    <!-- Inflation & Real Rate Box -->
    <rect x="15" y="125" width="280" height="120" rx="6" fill="#fee2e2" stroke="#f87171" class="dark:fill-rose-950/40 dark:stroke-rose-800" />
    <text x="25" y="148" fill="#991b1b" class="dark:fill-rose-300" font-size="11" font-weight="bold">Tác động Lạm phát & Lãi suất thực:</text>
    
    <text x="25" y="172" fill="#7f1d1d" class="dark:fill-rose-200" font-size="11">• Sức mua sau t năm: P_t = P · (1 − g)ᵗ</text>
    <text x="25" y="195" fill="#991b1b" class="dark:fill-rose-300" font-size="11.5" font-weight="bold">• Công thức Fisher: r_thực = (1+r)/(1+g) − 1</text>
    <text x="25" y="218" fill="#991b1b" font-size="11">• Gần đúng (khi g nhỏ): r_thực ≈ r − g</text>
    <text x="25" y="234" fill="#64748b" font-size="9.5">Ví dụ: Lãi danh nghĩa 8%, lạm phát 3% ⇒ r_thực ≈ 5%</text>
  </g>
</svg>`,

  6: `<svg class="w-full h-auto rounded-xl shadow-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
  <!-- Title Badge -->
  <rect x="25" y="15" width="460" height="30" rx="6" fill="#d97706" />
  <text x="35" y="35" fill="#ffffff" font-size="13" font-weight="bold" font-family="sans-serif">MÔ HÌNH VAY TRẢ GÓP ĐỀU (AMORTIZATION) VÀ DƯ NỢ TÍN DỤNG</text>

  <!-- Left: Payment Structure Bar Chart (Principal vs Interest) -->
  <g transform="translate(40, 65)">
    <rect width="400" height="270" rx="12" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="20" y="25" fill="#d97706" class="dark:fill-amber-400" font-size="12" font-weight="bold" font-family="sans-serif">Cơ cấu Khoản trả đều P = Tiền gốc + Tiền lãi</text>

    <!-- Legend -->
    <rect x="180" y="15" width="12" height="12" fill="#3b82f6" rx="2" />
    <text x="198" y="25" font-size="10" fill="#2563eb" font-weight="bold">Trả gốc (Tăng dần)</text>
    <rect x="290" y="15" width="12" height="12" fill="#ef4444" rx="2" />
    <text x="308" y="25" font-size="10" fill="#dc2626" font-weight="bold">Trả lãi (Giảm dần)</text>

    <!-- Stacked Bars for Kì 1, Kì 6, Kì 12, Kì 18, Kì 24 (Fixed total height H = 140) -->
    <!-- Kì 1: Interest 100, Principal 40 -->
    <g transform="translate(60, 65)">
      <rect x="0" y="0" width="35" height="100" fill="#ef4444" rx="2" />
      <rect x="0" y="100" width="35" height="40" fill="#3b82f6" rx="2" />
      <text x="8" y="155" font-size="10" fill="#475569">Kì 1</text>
    </g>

    <!-- Kì 6: Interest 80, Principal 60 -->
    <g transform="translate(125, 65)">
      <rect x="0" y="0" width="35" height="80" fill="#ef4444" rx="2" />
      <rect x="0" y="80" width="35" height="60" fill="#3b82f6" rx="2" />
      <text x="8" y="155" font-size="10" fill="#475569">Kì 6</text>
    </g>

    <!-- Kì 12: Interest 60, Principal 80 -->
    <g transform="translate(190, 65)">
      <rect x="0" y="0" width="35" height="60" fill="#ef4444" rx="2" />
      <rect x="0" y="60" width="35" height="80" fill="#3b82f6" rx="2" />
      <text x="5" y="155" font-size="10" fill="#475569">Kì 12</text>
    </g>

    <!-- Kì 18: Interest 35, Principal 105 -->
    <g transform="translate(255, 65)">
      <rect x="0" y="0" width="35" height="35" fill="#ef4444" rx="2" />
      <rect x="0" y="35" width="35" height="105" fill="#3b82f6" rx="2" />
      <text x="5" y="155" font-size="10" fill="#475569">Kì 18</text>
    </g>

    <!-- Kì 24: Interest 10, Principal 130 -->
    <g transform="translate(320, 65)">
      <rect x="0" y="0" width="35" height="10" fill="#ef4444" rx="2" />
      <rect x="0" y="10" width="35" height="130" fill="#3b82f6" rx="2" />
      <text x="5" y="155" font-size="10" fill="#475569">Kì 24</text>
    </g>

    <!-- Base line -->
    <line x1="50" y1="205" x2="370" y2="205" stroke="#475569" stroke-width="1.5" />

    <text x="20" y="250" fill="#64748b" font-size="10.5">Tổng số tiền trả mỗi kì P là cố định; tiền lãi giảm dần theo dư nợ thực tế</text>
  </g>

  <!-- Right: Amortization Formula & Credit Rules -->
  <g transform="translate(460, 65)">
    <rect width="300" height="270" rx="12" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="20" y="25" fill="#d97706" class="dark:fill-amber-400" font-size="12" font-weight="bold" font-family="sans-serif">Công thức Trả góp đều & Quy tắc vay</text>

    <!-- Formula Box -->
    <rect x="15" y="45" width="270" height="75" rx="6" fill="#e0f2fe" stroke="#38bdf8" class="dark:fill-slate-700 dark:stroke-slate-600" />
    <text x="25" y="68" fill="#0369a1" class="dark:fill-sky-300" font-size="11" font-weight="bold">Khoản trả góp đều cuối kì P:</text>
    <text x="25" y="95" fill="#0284c7" class="dark:fill-sky-200" font-size="13" font-weight="bold">P = V · i / [1 − (1 + i)⁻ⁿ]</text>
    <text x="25" y="112" fill="#0369a1" font-size="9.5">V: Vốn vay; i: Lãi suất mỗi kì; n: Tổng số kì</text>

    <!-- Warning / Rule Box -->
    <rect x="15" y="135" width="270" height="115" rx="6" fill="#fef2f2" stroke="#f87171" class="dark:fill-rose-950/40 dark:stroke-rose-800" />
    <text x="25" y="158" fill="#991b1b" class="dark:fill-rose-300" font-size="11" font-weight="bold">Quy tắc An toàn Tín dụng:</text>
    <text x="25" y="180" fill="#7f1d1d" class="dark:fill-rose-200" font-size="10.5">• Trả nợ hằng tháng không quá 35%–40% thu nhập.</text>
    <text x="25" y="200" fill="#7f1d1d" class="dark:fill-rose-200" font-size="10.5">• Trả hết 100% sao kê thẻ tín dụng đúng hạn.</text>
    <text x="25" y="220" fill="#7f1d1d" class="dark:fill-rose-200" font-size="10.5">• Giữ điểm tín dụng chuẩn CIC, tránh nợ xấu nhóm 2–5.</text>
    <text x="25" y="240" fill="#64748b" font-size="9.5">Không rơi vào bẫy trả mức tối thiểu kéo dài.</text>
  </g>
</svg>`,

  7: `<svg class="w-full h-auto rounded-xl shadow-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
  <!-- Title Badge -->
  <rect x="25" y="15" width="460" height="30" rx="6" fill="#d97706" />
  <text x="35" y="35" fill="#ffffff" font-size="13" font-weight="bold" font-family="sans-serif">NIÊN KIM TÍCH LŨY (ANNUITY) VÀ QUY TẮC TÀI CHÍNH 80/10/10</text>

  <!-- Left: Annuity Savings Timeline -->
  <g transform="translate(40, 65)">
    <rect width="390" height="270" rx="12" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="20" y="25" fill="#d97706" class="dark:fill-amber-400" font-size="12" font-weight="bold" font-family="sans-serif">Dòng tiền Niên kim Gửi đều đặn cuối mỗi kì</text>

    <!-- Timeline Arrow -->
    <line x1="30" y1="180" x2="360" y2="180" stroke="#475569" stroke-width="2.5" />
    <polygon points="360,180 352,176 352,184" fill="#475569" />
    <text x="345" y="200" fill="#475569" font-size="11" font-weight="bold">Kì n</text>

    <!-- Cash deposit arrows P at periods 1, 2, 3 ... n -->
    <!-- Period 1 -->
    <line x1="60" y1="130" x2="60" y2="175" stroke="#059669" stroke-width="2.5" />
    <polygon points="60,175 56,167 64,167" fill="#059669" />
    <text x="55" y="120" fill="#047857" font-size="11" font-weight="bold">+P</text>
    <text x="55" y="196" fill="#475569" font-size="10">1</text>

    <!-- Period 2 -->
    <line x1="120" y1="130" x2="120" y2="175" stroke="#059669" stroke-width="2.5" />
    <polygon points="120,175 116,167 124,167" fill="#059669" />
    <text x="115" y="120" fill="#047857" font-size="11" font-weight="bold">+P</text>
    <text x="115" y="196" fill="#475569" font-size="10">2</text>

    <!-- Period 3 -->
    <line x1="180" y1="130" x2="180" y2="175" stroke="#059669" stroke-width="2.5" />
    <polygon points="180,175 176,167 184,167" fill="#059669" />
    <text x="175" y="120" fill="#047857" font-size="11" font-weight="bold">+P</text>
    <text x="175" y="196" fill="#475569" font-size="10">3</text>

    <!-- Dots -->
    <text x="235" y="178" fill="#94a3b8" font-size="14" font-weight="bold">...</text>

    <!-- Period n -->
    <line x1="310" y1="130" x2="310" y2="175" stroke="#059669" stroke-width="2.5" />
    <polygon points="310,175 306,167 314,167" fill="#059669" />
    <text x="305" y="120" fill="#047857" font-size="11" font-weight="bold">+P</text>
    <text x="305" y="196" fill="#475569" font-size="10">n</text>

    <!-- Accumulation Formula Banner -->
    <rect x="25" y="50" width="340" height="48" rx="6" fill="#dcfce7" stroke="#10b981" class="dark:fill-emerald-950/40 dark:stroke-emerald-800" />
    <text x="35" y="70" fill="#047857" class="dark:fill-emerald-300" font-size="11" font-weight="bold">Giá trị Tương lai (FV) Niên kim:</text>
    <text x="35" y="88" fill="#065f46" class="dark:fill-emerald-200" font-size="12.5" font-weight="bold">A = P · [(1 + i)ⁿ − 1] / i</text>

    <text x="25" y="250" fill="#64748b" font-size="10.5">Nếu gửi vào ĐẦU mỗi kì: Nhân thêm thừa số (1 + i)</text>
  </g>

  <!-- Right: 80/10/10 Budget Rule Pie Visualization -->
  <g transform="translate(450, 65)">
    <rect width="310" height="270" rx="12" fill="#f8fafc" stroke="#cbd5e1" class="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="20" y="25" fill="#d97706" class="dark:fill-amber-400" font-size="12" font-weight="bold" font-family="sans-serif">Quy tắc Phân bổ Thu nhập 80 / 10 / 10</text>

    <!-- 80% Essential Spending Bar -->
    <g transform="translate(20, 50)">
      <rect width="270" height="36" rx="6" fill="#2563eb" />
      <text x="15" y="23" fill="#ffffff" font-size="11" font-weight="bold">80% — Nhu cầu Thiết yếu (Ăn ở, học tập, nợ)</text>
    </g>

    <!-- 10% Discretionary Spending Bar -->
    <g transform="translate(20, 95)">
      <rect width="135" height="36" rx="6" fill="#f59e0b" />
      <text x="15" y="23" fill="#ffffff" font-size="11" font-weight="bold">10% — Chi linh hoạt, giải trí</text>
    </g>

    <!-- 10% Savings & Investment Bar -->
    <g transform="translate(20, 140)">
      <rect width="135" height="36" rx="6" fill="#10b981" />
      <text x="15" y="23" fill="#ffffff" font-size="11" font-weight="bold">10% — Tiết kiệm & Tích lũy</text>
    </g>

    <!-- Recurrence Formula Box -->
    <rect x="20" y="190" width="270" height="65" rx="6" fill="#f3e8ff" stroke="#c084fc" class="dark:fill-purple-950/40 dark:stroke-purple-800" />
    <text x="30" y="210" fill="#6b21a8" class="dark:fill-purple-300" font-size="11" font-weight="bold">Hệ thức truy hồi Tích lũy:</text>
    <text x="30" y="230" fill="#7e22ce" class="dark:fill-purple-200" font-size="11.5" font-weight="bold">A₀ = Vốn ban đầu; Aₙ = (1+i)·Aₙ₋₁ + P</text>
    <text x="30" y="246" fill="#6b21a8" font-size="9.5">Tạo thói quen tài chính tự do và bền vững suốt đời.</text>
  </g>
</svg>`
};

fs.writeFileSync('scratch/toan12_svgs.js', 'module.exports = ' + JSON.stringify(svgsData, null, 2) + ';\n', 'utf8');
console.log('Successfully generated scratch/toan12_svgs.js with 7 high-quality SVGs!');
