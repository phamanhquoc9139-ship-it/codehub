// scratch/sinhhoc12_diagrams.js
// 8 Sơ đồ SVG trực quan độ phân giải cao cho Sinh học 12

const diagrams = {
  // Sơ đồ 1: Chạc tái bản DNA chữ Y và các enzyme
  dnaReplicationFork: `
  <div class="my-6 p-4 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center shadow-inner overflow-x-auto">
    <div class="flex items-center justify-between gap-2 mb-3 text-xs text-slate-400 font-mono border-b border-slate-800 pb-2">
      <span class="text-emerald-400 font-bold uppercase"><i class="fas fa-project-diagram mr-1.5"></i> Sơ đồ 1: Cơ chế tái bản DNA tại chạc sao chép chữ Y</span>
      <span>Nguyên tắc bán bảo toàn & bổ sung</span>
    </div>
    <div class="w-full flex justify-center">
      <svg viewBox="0 0 800 360" class="w-full max-w-2xl h-auto drop-shadow-md">
        <!-- Background grid/glow -->
        <defs>
          <linearGradient id="dnaGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#10b981" />
            <stop offset="100%" stop-color="#06b6d4" />
          </linearGradient>
          <linearGradient id="dnaGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#f59e0b" />
            <stop offset="100%" stop-color="#ef4444" />
          </linearGradient>
        </defs>

        <!-- Unwound template strands -->
        <path d="M 50 180 Q 200 180, 320 180" stroke="#64748b" stroke-width="8" fill="none" stroke-linecap="round"/>
        <!-- Fork split -->
        <path d="M 320 180 Q 420 180, 520 80 L 750 80" stroke="#3b82f6" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path d="M 320 180 Q 420 180, 520 280 L 750 280" stroke="#3b82f6" stroke-width="6" fill="none" stroke-linecap="round"/>

        <!-- Helicase enzyme -->
        <polygon points="310,140 360,180 310,220" fill="#ec4899" opacity="0.9"/>
        <text x="325" y="185" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Helicase</text>

        <!-- Leading Strand (Continuous) -->
        <path d="M 400 95 L 720 95" stroke="#10b981" stroke-width="5" stroke-dasharray="8 0" stroke-linecap="round"/>
        <polygon points="730,95 715,90 715,100" fill="#10b981" />
        <rect x="560" y="55" width="160" height="26" rx="6" fill="#10b981" opacity="0.2" stroke="#10b981"/>
        <text x="640" y="72" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">Mạch dẫn đầu (5′ → 3′ liên tục)</text>

        <!-- Lagging Strand (Okazaki fragments) -->
        <!-- Okazaki 1 -->
        <path d="M 440 265 L 520 265" stroke="#f59e0b" stroke-width="5" stroke-linecap="round"/>
        <polygon points="435,265 448,260 448,270" fill="#f59e0b"/>
        <!-- Primer 1 -->
        <rect x="520" y="260" width="22" height="10" rx="3" fill="#ef4444" />

        <!-- Okazaki 2 -->
        <path d="M 560 265 L 660 265" stroke="#f59e0b" stroke-width="5" stroke-linecap="round"/>
        <polygon points="555,265 568,260 568,270" fill="#f59e0b"/>
        <!-- Primer 2 -->
        <rect x="660" y="260" width="22" height="10" rx="3" fill="#ef4444" />

        <!-- Ligase -->
        <circle cx="540" cy="265" r="16" fill="#8b5cf6" opacity="0.85"/>
        <text x="540" y="269" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Ligase</text>

        <rect x="430" y="300" width="280" height="26" rx="6" fill="#f59e0b" opacity="0.2" stroke="#f59e0b"/>
        <text x="570" y="317" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">Mạch muộn (Đoạn Okazaki gián đoạn 5′ → 3′)</text>

        <!-- Labels -->
        <text x="760" y="85" fill="#94a3b8" font-size="12" font-weight="bold">3′</text>
        <text x="760" y="285" fill="#94a3b8" font-size="12" font-weight="bold">5′</text>
        <text x="35" y="185" fill="#94a3b8" font-size="12" font-weight="bold">DNA mẹ</text>
        <text x="400" y="30" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">Chạc chữ Y đang mở (DNA polymerase tổng hợp theo chiều 5′ → 3′)</text>
      </svg>
    </div>
  </div>
  `,

  // Sơ đồ 2: Mô hình cấu trúc và cơ chế Operon Lac
  operonLac: `
  <div class="my-6 p-4 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center shadow-inner overflow-x-auto">
    <div class="flex items-center justify-between gap-2 mb-3 text-xs text-slate-400 font-mono border-b border-slate-800 pb-2">
      <span class="text-indigo-400 font-bold uppercase"><i class="fas fa-toggle-on mr-1.5"></i> Sơ đồ 2: Cơ chế đóng/mở Operon Lac ở vi khuẩn E. coli</span>
      <span>Jacob & Monod (1961)</span>
    </div>
    <div class="w-full flex justify-center">
      <svg viewBox="0 0 800 300" class="w-full max-w-2xl h-auto drop-shadow-md">
        <!-- Operon Track -->
        <rect x="60" y="110" width="680" height="36" rx="8" fill="#1e293b" stroke="#475569" stroke-width="2"/>
        
        <!-- Gene lacI -->
        <rect x="70" y="114" width="90" height="28" rx="5" fill="#6366f1"/>
        <text x="115" y="132" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Gene lacI</text>

        <!-- Promoter P -->
        <rect x="210" y="114" width="70" height="28" rx="5" fill="#0ea5e9"/>
        <text x="245" y="132" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Vùng P</text>

        <!-- Operator O -->
        <rect x="290" y="114" width="70" height="28" rx="5" fill="#f59e0b"/>
        <text x="325" y="132" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Vùng O</text>

        <!-- Structural Genes Z, Y, A -->
        <rect x="370" y="114" width="110" height="28" rx="5" fill="#10b981"/>
        <text x="425" y="132" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Gene Z</text>

        <rect x="490" y="114" width="110" height="28" rx="5" fill="#10b981"/>
        <text x="545" y="132" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Gene Y</text>

        <rect x="610" y="114" width="110" height="28" rx="5" fill="#10b981"/>
        <text x="665" y="132" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Gene A</text>

        <!-- Legend Brackets -->
        <path d="M 210 95 L 210 85 L 465 85 L 720 85 L 720 95" stroke="#cbd5e1" stroke-width="1.5" fill="none"/>
        <text x="465" y="75" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">CỤM OPERON LAC</text>

        <!-- Case 1: No Lactose -->
        <path d="M 115 145 L 115 200 Q 115 220, 200 220 L 310 220" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4 4" fill="none"/>
        <circle cx="325" cy="180" r="18" fill="#f43f5e"/>
        <text x="325" y="184" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Protein ức chế</text>
        <path d="M 325 162 L 325 142" stroke="#f43f5e" stroke-width="3" marker-end="url(#arrow)"/>

        <!-- Annotation Cards -->
        <rect x="60" y="240" width="310" height="42" rx="8" fill="#f43f5e" opacity="0.15" stroke="#f43f5e"/>
        <text x="215" y="258" fill="#fda4af" font-size="10.5" font-weight="bold" text-anchor="middle">Môi trường KHÔNG CÓ lactose:</text>
        <text x="215" y="273" fill="#ffffff" font-size="10" text-anchor="middle">Protein ức chế gắn vào O → Chặn RNA polymerase → Không phiên mã</text>

        <rect x="430" y="240" width="310" height="42" rx="8" fill="#10b981" opacity="0.15" stroke="#10b981"/>
        <text x="585" y="258" fill="#6ee7b7" font-size="10.5" font-weight="bold" text-anchor="middle">Môi trường CÓ lactose (chất cảm ứng):</text>
        <text x="585" y="273" fill="#ffffff" font-size="10" text-anchor="middle">Lactose liên kết protein ức chế → Biến đổi cấu hình → Mở phiên mã Z, Y, A</text>
      </svg>
    </div>
  </div>
  `,

  // Sơ đồ 3: Cấu trúc siêu hiển vi của NST nhân thực
  chromosomeStructure: `
  <div class="my-6 p-4 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center shadow-inner overflow-x-auto">
    <div class="flex items-center justify-between gap-2 mb-3 text-xs text-slate-400 font-mono border-b border-slate-800 pb-2">
      <span class="text-teal-400 font-bold uppercase"><i class="fas fa-layer-group mr-1.5"></i> Sơ đồ 3: Các mức độ đóng gói siêu hiển vi của Nhiễm sắc thể</span>
      <span>Từ chuỗi xoắn kép DNA đến Chromatid $700\text{ nm}$</span>
    </div>
    <div class="w-full flex justify-center">
      <svg viewBox="0 0 800 240" class="w-full max-w-2xl h-auto drop-shadow-md">
        <!-- Step 1: DNA Double Helix -->
        <circle cx="80" cy="100" r="30" fill="#3b82f6" opacity="0.2" stroke="#3b82f6" stroke-width="2"/>
        <text x="80" y="105" fill="#60a5fa" font-size="11" font-weight="bold" text-anchor="middle">DNA ($2\text{ nm}$)</text>
        <text x="80" y="160" fill="#94a3b8" font-size="10" text-anchor="middle">Xoắn kép</text>

        <!-- Arrow 1 -->
        <path d="M 120 100 L 160 100" stroke="#64748b" stroke-width="3" marker-end="url(#arr)"/>

        <!-- Step 2: Nucleosome -->
        <circle cx="220" cy="100" r="38" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="2"/>
        <text x="220" y="96" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">Nucleosome</text>
        <text x="220" y="114" fill="#ffffff" font-size="9" text-anchor="middle">($11\text{ nm}$)</text>
        <text x="220" y="160" fill="#94a3b8" font-size="10" text-anchor="middle">8 Histone + 146 bp</text>

        <!-- Arrow 2 -->
        <path d="M 270 100 L 310 100" stroke="#64748b" stroke-width="3"/>

        <!-- Step 3: Solenoid -->
        <circle cx="370" cy="100" r="38" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" stroke-width="2"/>
        <text x="370" y="96" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">Sợi nhiễm sắc</text>
        <text x="370" y="114" fill="#ffffff" font-size="9" text-anchor="middle">($30\text{ nm}$)</text>
        <text x="370" y="160" fill="#94a3b8" font-size="10" text-anchor="middle">Cuộn xoắn cấp 1</text>

        <!-- Arrow 3 -->
        <path d="M 420 100 L 460 100" stroke="#64748b" stroke-width="3"/>

        <!-- Step 4: Supercoil -->
        <circle cx="520" cy="100" r="38" fill="#8b5cf6" opacity="0.2" stroke="#8b5cf6" stroke-width="2"/>
        <text x="520" y="96" fill="#a78bfa" font-size="11" font-weight="bold" text-anchor="middle">Sợi siêu xoắn</text>
        <text x="520" y="114" fill="#ffffff" font-size="9" text-anchor="middle">($300\text{ nm}$)</text>
        <text x="520" y="160" fill="#94a3b8" font-size="10" text-anchor="middle">Vùng xếp cuộn</text>

        <!-- Arrow 4 -->
        <path d="M 570 100 L 610 100" stroke="#64748b" stroke-width="3"/>

        <!-- Step 5: Chromatid -->
        <circle cx="680" cy="100" r="44" fill="#ec4899" opacity="0.25" stroke="#ec4899" stroke-width="2"/>
        <text x="680" y="96" fill="#f472b6" font-size="12" font-weight="black" text-anchor="middle">Chromatid</text>
        <text x="680" y="114" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">($700\text{ nm}$)</text>
        <text x="680" y="160" fill="#94a3b8" font-size="10" text-anchor="middle">Kì giữa phân bào</text>
      </svg>
    </div>
  </div>
  `,

  // Sơ đồ 4: Tháp năng lượng sinh thái và hiệu suất sinh thái
  ecologicalPyramid: `
  <div class="my-6 p-4 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center shadow-inner overflow-x-auto">
    <div class="flex items-center justify-between gap-2 mb-3 text-xs text-slate-400 font-mono border-b border-slate-800 pb-2">
      <span class="text-amber-400 font-bold uppercase"><i class="fas fa-cubes mr-1.5"></i> Sơ đồ 4: Tháp năng lượng và hiệu suất truyền năng lượng</span>
      <span>Tiêu hao hô hấp ~90%, chuyển giao ~10%</span>
    </div>
    <div class="w-full flex justify-center">
      <svg viewBox="0 0 700 280" class="w-full max-w-xl h-auto drop-shadow-md">
        <!-- Apex Predator Level -->
        <polygon points="300,50 400,50 440,95 260,95" fill="#ef4444" opacity="0.85"/>
        <text x="350" y="77" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Bậc 4: Động vật ăn thịt đầu bảng (10 kcal)</text>

        <!-- Secondary Consumer Level -->
        <polygon points="260,98 440,98 490,150 210,150" fill="#f59e0b" opacity="0.85"/>
        <text x="350" y="128" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Bậc 3: Động vật ăn thịt bậc 1 (100 kcal)</text>

        <!-- Primary Consumer Level -->
        <polygon points="210,153 490,153 550,210 150,210" fill="#06b6d4" opacity="0.85"/>
        <text x="350" y="186" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Bậc 2: Động vật ăn cỏ (1.000 kcal)</text>

        <!-- Producer Level -->
        <polygon points="150,213 550,213 620,270 80,270" fill="#10b981" opacity="0.85"/>
        <text x="350" y="246" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Bậc 1: Sinh vật sản xuất (Thực vật) - 10.000 kcal</text>

        <!-- Side Loss Arrows -->
        <path d="M 560 240 Q 640 240, 650 200" stroke="#f43f5e" stroke-width="2.5" fill="none" stroke-dasharray="3 3"/>
        <text x="650" y="190" fill="#f87171" font-size="10" font-weight="bold">Mất nhiệt hô hấp (~90%)</text>
        
        <path d="M 500 180 Q 580 180, 590 140" stroke="#f43f5e" stroke-width="2" fill="none" stroke-dasharray="3 3"/>
        <path d="M 450 120 Q 520 120, 530 85" stroke="#f43f5e" stroke-width="1.5" fill="none" stroke-dasharray="3 3"/>
      </svg>
    </div>
  </div>
  `
};

module.exports = diagrams;
