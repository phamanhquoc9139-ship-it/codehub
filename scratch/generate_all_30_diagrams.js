// scratch/generate_all_30_diagrams.js
const fs = require('fs');
const path = require('path');

const diagPath = path.join(__dirname, 'toan10_diagrams.js');
const diag = require(diagPath);

// 1. Lesson 1: Bảng chân trị logic & Mệnh đề kéo theo
diag[1] = `
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
</div>`;

// 2. Lesson 7: Các khái niệm mở đầu về vectơ
diag[7] = `
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
</div>`;

// 3. Lesson 9: Tích của một vectơ với một số
diag[9] = `
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
</div>`;

// 4. Lesson 11: Tích vô hướng của hai vectơ
diag[11] = `
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
</div>`;

// 5. Lesson 12: Số gần đúng và sai số
diag[12] = `
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
</div>`;

// 6. Lesson 13: Các số đặc trưng đo xu thế trung tâm
diag[13] = `
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
</div>`;

// 7. Lesson 15: Hàm số và đồ thị
diag[15] = `
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
</div>`;

// 8. Lesson 18: Phương trình quy về phương trình bậc hai
diag[18] = `
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
</div>`;

// 9. Lesson 19: Phương trình đường thẳng
diag[19] = `
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
</div>`;

// 10. Lesson 20: Vị trí tương đối giữa hai đường thẳng. Góc và khoảng cách
diag[20] = `
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
</div>`;

// 11. Lesson 23: Quy tắc đếm
diag[23] = `
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
</div>`;

// 12. Lesson 24: Hoán vị, chỉnh hợp và tổ hợp
diag[24] = `
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
</div>`;

// 13. Lesson 27: Thực hành tính xác suất
diag[27] = `
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
</div>`;

// 14. Lesson 28: Hoạt động tài chính
diag[28] = `
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
</div>`;

// 15. Lesson 29: Mạng xã hội: Liên kết và ảnh hưởng
diag[29] = `
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
</div>`;

// Write back to toan10_diagrams.js
let outCode = '// scratch/toan10_diagrams.js\n// Trọn bộ 30 mô hình toán học SVG cho Toán 10\nmodule.exports = {\n';
for (let i = 1; i <= 30; i++) {
  outCode += `  ${i}: \`${diag[i]}\`,\n`;
}
outCode += '};\n';

fs.writeFileSync(diagPath, outCode, 'utf8');
console.log('Successfully generated all 30 diagrams in toan10_diagrams.js!');
