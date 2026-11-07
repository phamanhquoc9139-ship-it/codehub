// Tiếng Anh 12 - Global Success: Interactive SVG Vector Diagrams

const diagrams = {
  unit1: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-indigo-50/80 to-blue-50/80 dark:from-slate-900/80 dark:to-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 shadow-sm">
      <div class="flex items-center justify-between mb-3">
        <span class="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Sơ đồ dòng thời gian: Past Simple vs. Past Continuous
        </span>
        <span class="text-[11px] px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200 font-medium">Timeline Model</span>
      </div>
      <div class="w-full overflow-x-auto">
        <svg viewBox="0 0 760 220" class="w-full min-w-[640px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="arrow-u1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#4f46e5"/>
            </marker>
            <linearGradient id="ongoingGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.2"/>
              <stop offset="50%" stop-color="#3b82f6" stop-opacity="0.8"/>
              <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.2"/>
            </linearGradient>
          </defs>
          <!-- Time Axis -->
          <line x1="50" y1="140" x2="710" y2="140" stroke="#4f46e5" stroke-width="3" marker-end="url(#arrow-u1)"/>
          <text x="710" y="132" fill="#4f46e5" font-size="12" font-weight="bold" text-anchor="end">TIME / TƯƠNG LAI</text>
          
          <!-- Key Points on axis -->
          <circle cx="160" cy="140" r="5" fill="#6366f1"/>
          <text x="160" y="165" font-size="12" font-weight="600" fill="#475569" class="dark:fill-slate-300" text-anchor="middle">Quá khứ xa</text>
          
          <circle cx="600" cy="140" r="6" fill="#10b981"/>
          <text x="600" y="165" font-size="12" font-weight="bold" fill="#059669" class="dark:fill-emerald-400" text-anchor="middle">NOW (Hiện tại)</text>
          
          <!-- Ongoing background action (Past Continuous) -->
          <rect x="220" y="50" width="260" height="36" rx="18" fill="url(#ongoingGrad)" stroke="#3b82f6" stroke-width="2"/>
          <text x="350" y="73" font-size="12" font-weight="bold" fill="#1e40af" class="dark:fill-blue-200" text-anchor="middle">
            Past Continuous: was/were + V-ing (Hành động đang diễn ra)
          </text>
          <text x="350" y="102" font-size="11" font-style="italic" fill="#3b82f6" text-anchor="middle">
            "While Steve Jobs was studying at Reed College..."
          </text>
          
          <!-- Interruption Arrow (Past Simple) -->
          <line x1="380" y1="17" x2="380" y2="132" stroke="#ef4444" stroke-width="3" stroke-dasharray="4,4"/>
          <circle cx="380" cy="140" r="7" fill="#ef4444"/>
          <polygon points="380,135 373,118 387,118" fill="#ef4444"/>
          
          <rect x="300" y="8" width="220" height="26" rx="6" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5" class="dark:fill-red-950/60"/>
          <text x="410" y="25" font-size="11" font-weight="bold" fill="#b91c1c" class="dark:fill-red-300" text-anchor="middle">
            Past Simple (Hành động xen vào: dropped out)
          </text>
          
          <!-- Summary card -->
          <g transform="translate(520, 35)">
            <rect width="180" height="80" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" class="dark:fill-slate-800 dark:border-slate-700"/>
            <text x="12" y="22" font-size="11" font-weight="bold" fill="#1e293b" class="dark:fill-slate-200">Công thức kết hợp:</text>
            <text x="12" y="42" font-size="11" fill="#2563eb" font-weight="600">While + S + was/were + V-ing,</text>
            <text x="12" y="60" font-size="11" fill="#dc2626" font-weight="600">S + V2/ed (chen ngang)</text>
          </g>
        </svg>
      </div>
    </div>
  `,

  unit2: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-amber-50/80 to-emerald-50/80 dark:from-slate-900/80 dark:to-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 shadow-sm">
      <div class="flex items-center justify-between mb-3">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
          Sơ đồ phân loại mạo từ: A / An, The & Zero Article (Ø)
        </span>
        <span class="text-[11px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 font-medium">Article Map</span>
      </div>
      <div class="w-full overflow-x-auto">
        <svg viewBox="0 0 760 210" class="w-full min-w-[640px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
          <!-- Column 1: A / An -->
          <g transform="translate(20, 15)">
            <rect width="220" height="180" rx="14" fill="#f0fdf4" stroke="#22c55e" stroke-width="2" class="dark:fill-slate-800/90 dark:border-emerald-500/60"/>
            <rect width="220" height="36" rx="14" fill="#22c55e"/>
            <text x="110" y="24" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">A / AN (Bất định)</text>
            <text x="16" y="60" font-size="11" font-weight="bold" fill="#15803d" class="dark:fill-emerald-400">Danh từ đếm được số ít</text>
            <text x="16" y="80" font-size="11" fill="#334155" class="dark:fill-slate-300">• Chưa xác định / Nhắc lần đầu</text>
            <text x="16" y="100" font-size="11" fill="#334155" class="dark:fill-slate-300">• Mang nghĩa "một" tổng quát</text>
            <text x="16" y="120" font-size="11" fill="#334155" class="dark:fill-slate-300">• **a** + phụ âm: a festival</text>
            <text x="16" y="140" font-size="11" fill="#334155" class="dark:fill-slate-300">• **an** + nguyên âm: an ethnic group</text>
            <text x="16" y="165" font-size="10.5" font-style="italic" fill="#16a34a" class="dark:fill-emerald-300">Ex: Melbourne is a diverse city.</text>
          </g>
          
          <!-- Column 2: THE -->
          <g transform="translate(270, 15)">
            <rect width="220" height="180" rx="14" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" class="dark:fill-slate-800/90 dark:border-blue-500/60"/>
            <rect width="220" height="36" rx="14" fill="#3b82f6"/>
            <text x="110" y="24" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">THE (Xác định)</text>
            <text x="16" y="60" font-size="11" font-weight="bold" fill="#1d4ed8" class="dark:fill-blue-400">Số ít, số nhiều & không đếm được</text>
            <text x="16" y="80" font-size="11" fill="#334155" class="dark:fill-slate-300">• Người nghe & nói đều biết rõ</text>
            <text x="16" y="100" font-size="11" fill="#334155" class="dark:fill-slate-300">• Vật thể độc nhất: the Earth, the sun</text>
            <text x="16" y="120" font-size="11" fill="#334155" class="dark:fill-slate-300">• So sánh nhất: the best, the first</text>
            <text x="16" y="140" font-size="11" fill="#334155" class="dark:fill-slate-300">• Đã nhắc tới lần thứ 2 trở đi</text>
            <text x="16" y="165" font-size="10.5" font-style="italic" fill="#2563eb" class="dark:fill-blue-300">Ex: The culture of Vietnam.</text>
          </g>

          <!-- Column 3: Zero Article Ø -->
          <g transform="translate(520, 15)">
            <rect width="220" height="180" rx="14" fill="#faf5ff" stroke="#a855f7" stroke-width="2" class="dark:fill-slate-800/90 dark:border-purple-500/60"/>
            <rect width="220" height="36" rx="14" fill="#a855f7"/>
            <text x="110" y="24" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">Ø (Zero Article - Không mạo từ)</text>
            <text x="16" y="60" font-size="11" font-weight="bold" fill="#7e22ce" class="dark:fill-purple-400">Chung chung & Danh từ riêng</text>
            <text x="16" y="80" font-size="11" fill="#334155" class="dark:fill-slate-300">• N số nhiều/không đếm nói chung</text>
            <text x="16" y="100" font-size="11" fill="#334155" class="dark:fill-slate-300">• Tên riêng quốc gia đơn: Ø Vietnam</text>
            <text x="16" y="120" font-size="11" fill="#334155" class="dark:fill-slate-300">• Tên thành phố, ngôn ngữ, thể thao</text>
            <text x="16" y="140" font-size="11" fill="#334155" class="dark:fill-slate-300">• Bữa ăn, ngày tháng nói chung</text>
            <text x="16" y="165" font-size="10.5" font-style="italic" fill="#9333ea" class="dark:fill-purple-300">Ex: Ø Music unites people.</text>
          </g>
        </svg>
      </div>
    </div>
  `,

  unit3: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-teal-50/80 to-emerald-50/80 dark:from-slate-900/80 dark:to-teal-950/40 border border-teal-200 dark:border-teal-800/60 shadow-sm">
      <div class="flex items-center justify-between mb-3">
        <span class="text-xs font-bold uppercase tracking-wider text-teal-800 dark:text-teal-300 flex items-center gap-1.5">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
          Sơ đồ thời gian phân hủy rác thải & Vòng tuần hoàn 3R (Reduce - Reuse - Recycle)
        </span>
        <span class="text-[11px] px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-200 font-medium">3R Green Model</span>
      </div>
      <div class="w-full overflow-x-auto">
        <svg viewBox="0 0 760 190" class="w-full min-w-[640px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
          <!-- 3R Circle Diagram on Left -->
          <g transform="translate(15, 10)">
            <rect width="250" height="170" rx="12" fill="#f0fdfa" stroke="#14b8a6" stroke-width="1.5" class="dark:fill-slate-800 dark:border-teal-600"/>
            <text x="125" y="26" font-size="12" font-weight="bold" fill="#0f766e" class="dark:fill-teal-300" text-anchor="middle">Chiến Lược Sống Xanh 3R</text>
            
            <circle cx="125" cy="100" r="48" fill="none" stroke="#2dd4bf" stroke-width="3" stroke-dasharray="6,4"/>
            <!-- 3 nodes -->
            <circle cx="125" cy="55" r="16" fill="#14b8a6"/>
            <text x="125" y="59" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">REDUCE</text>
            
            <circle cx="85" cy="125" r="16" fill="#0d9488"/>
            <text x="85" y="129" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">REUSE</text>
            
            <circle cx="165" cy="125" r="16" fill="#047857"/>
            <text x="165" y="129" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">RECYCLE</text>

            <text x="125" y="162" font-size="10" font-style="italic" fill="#0f766e" class="dark:fill-teal-300" text-anchor="middle">which protects our planet</text>
          </g>

          <!-- Decomposition Timeline on Right -->
          <g transform="translate(285, 10)">
            <rect width="460" height="170" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" class="dark:fill-slate-800 dark:border-slate-700"/>
            <text x="20" y="26" font-size="12" font-weight="bold" fill="#1e293b" class="dark:fill-slate-200">Thời gian phân hủy ngoài tự nhiên (Decomposition Time):</text>
            
            <!-- Banana peel: 2-5 weeks -->
            <rect x="20" y="44" width="80" height="18" rx="4" fill="#fef08a"/>
            <text x="26" y="57" font-size="10.5" font-weight="bold" fill="#854d0e">Vỏ chuối: 2-4 tuần</text>
            
            <!-- Paper bag: 2-6 weeks -->
            <rect x="20" y="70" width="130" height="18" rx="4" fill="#fed7aa"/>
            <text x="26" y="83" font-size="10.5" font-weight="bold" fill="#9a3412">Túi giấy: 1-2 tháng</text>
            
            <!-- Plastic bag: 20 years -->
            <rect x="20" y="96" width="220" height="18" rx="4" fill="#fca5a5"/>
            <text x="26" y="109" font-size="10.5" font-weight="bold" fill="#991b1b">Túi nilon: 20 năm</text>
            
            <!-- Plastic bottle: 450 years -->
            <rect x="20" y="122" width="360" height="18" rx="4" fill="#ef4444"/>
            <text x="26" y="135" font-size="10.5" font-weight="bold" fill="#ffffff">Chai nhựa PET: 450 năm</text>

            <text x="20" y="158" font-size="10.5" fill="#64748b" class="dark:fill-slate-400">
              Grammar Focus: <tspan fill="#0d9488" font-weight="bold">We recycle plastic, which reduces landfill waste.</tspan>
            </text>
          </g>
        </svg>
      </div>
    </div>
  `,

  unit4: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-cyan-50/80 to-blue-50/80 dark:from-slate-900/80 dark:to-cyan-950/40 border border-cyan-200 dark:border-cyan-800/60 shadow-sm">
      <div class="flex items-center justify-between mb-3">
        <span class="text-xs font-bold uppercase tracking-wider text-cyan-800 dark:text-cyan-300 flex items-center gap-1.5">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
          Mô hình so sánh kép: The more... The more... trong đô thị hóa (Urbanisation)
        </span>
        <span class="text-[11px] px-2 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-900/60 text-cyan-800 dark:text-cyan-200 font-medium">Double Comparatives</span>
      </div>
      <div class="w-full overflow-x-auto">
        <svg viewBox="0 0 760 190" class="w-full min-w-[640px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
          <!-- Graph axes -->
          <line x1="80" y1="150" x2="680" y2="150" stroke="#0891b2" stroke-width="2.5"/>
          <line x1="80" y1="150" x2="80" y2="25" stroke="#0891b2" stroke-width="2.5"/>
          
          <text x="680" y="142" font-size="11" font-weight="bold" fill="#0891b2" text-anchor="end">Mức độ Đô thị hóa (Urban development) ➔</text>
          <text x="85" y="32" font-size="11" font-weight="bold" fill="#0891b2">Chi phí & Mật độ (Cost & Density) ⬆</text>
          
          <!-- Curve -->
          <path d="M 80 140 Q 300 135 480 80 T 660 35" fill="none" stroke="#06b6d4" stroke-width="4"/>
          
          <!-- Callout points -->
          <circle cx="260" cy="130" r="5" fill="#0284c7"/>
          <circle cx="480" cy="80" r="5" fill="#0284c7"/>
          <circle cx="650" cy="38" r="6" fill="#ef4444"/>

          <!-- Formula Card -->
          <g transform="translate(180, 20)">
            <rect width="400" height="54" rx="8" fill="#ffffff" stroke="#06b6d4" stroke-width="1.5" class="dark:fill-slate-800"/>
            <text x="200" y="24" font-size="12" font-weight="bold" fill="#0e7490" class="dark:fill-cyan-300" text-anchor="middle">
              The + comparative + S1 + V1, the + comparative + S2 + V2
            </text>
            <text x="200" y="44" font-size="11" font-style="italic" fill="#475569" class="dark:fill-slate-300" text-anchor="middle">
              "The more people move to cities, the more crowded public transport becomes."
            </text>
          </g>

          <text x="260" y="170" font-size="11" fill="#64748b" text-anchor="middle">Vùng ven</text>
          <text x="480" y="170" font-size="11" fill="#64748b" text-anchor="middle">Đô thị loại 2</text>
          <text x="650" y="170" font-size="11" font-weight="bold" fill="#ef4444" text-anchor="middle">Siêu đô thị (Megacity)</text>
        </svg>
      </div>
    </div>
  `,

  unit5: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-violet-50/80 to-purple-50/80 dark:from-slate-900/80 dark:to-purple-950/40 border border-purple-200 dark:border-purple-800/60 shadow-sm">
      <div class="flex items-center justify-between mb-3">
        <span class="text-xs font-bold uppercase tracking-wider text-purple-800 dark:text-purple-300 flex items-center gap-1.5">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path></svg>
          Sơ đồ cấu trúc câu: Simple, Compound & Complex Sentences
        </span>
        <span class="text-[11px] px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-800 dark:text-purple-200 font-medium">Sentence Architecture</span>
      </div>
      <div class="w-full overflow-x-auto">
        <svg viewBox="0 0 760 190" class="w-full min-w-[640px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
          <!-- Type 1: Simple -->
          <g transform="translate(15, 15)">
            <rect width="225" height="160" rx="12" fill="#faf5ff" stroke="#a855f7" stroke-width="2" class="dark:fill-slate-800/90 dark:border-purple-500"/>
            <text x="112" y="28" font-size="13" font-weight="bold" fill="#7e22ce" class="dark:fill-purple-300" text-anchor="middle">1. SIMPLE SENTENCE</text>
            <rect x="20" y="42" width="185" height="30" rx="6" fill="#a855f7"/>
            <text x="112" y="62" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">1 Mệnh đề độc lập (S + V)</text>
            <text x="18" y="95" font-size="10.5" fill="#334155" class="dark:fill-slate-300">• Chỉ có 1 ý tưởng hoàn chỉnh</text>
            <text x="18" y="115" font-size="10.5" fill="#334155" class="dark:fill-slate-300">• Có thể có chủ ngữ/vị ngữ ghép</text>
            <text x="18" y="145" font-size="10" font-style="italic" fill="#7e22ce" class="dark:fill-purple-300">Ex: She applied for the job.</text>
          </g>

          <!-- Type 2: Compound -->
          <g transform="translate(265, 15)">
            <rect width="225" height="160" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" class="dark:fill-slate-800/90 dark:border-blue-500"/>
            <text x="112" y="28" font-size="13" font-weight="bold" fill="#1e40af" class="dark:fill-blue-300" text-anchor="middle">2. COMPOUND SENTENCE</text>
            <rect x="15" y="42" width="80" height="30" rx="6" fill="#3b82f6"/>
            <text x="55" y="62" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">Clause 1</text>
            
            <circle cx="112" cy="57" r="14" fill="#f59e0b"/>
            <text x="112" y="61" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">FANBOYS</text>

            <rect x="130" y="42" width="80" height="30" rx="6" fill="#3b82f6"/>
            <text x="170" y="62" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">Clause 2</text>
            
            <text x="18" y="95" font-size="10.5" fill="#334155" class="dark:fill-slate-300">• Nối bằng: for, and, nor, but, or, yet, so</text>
            <text x="18" y="115" font-size="10.5" fill="#334155" class="dark:fill-slate-300">• Hai mệnh đề ngang hàng nhau</text>
            <text x="18" y="145" font-size="10" font-style="italic" fill="#1d4ed8" class="dark:fill-blue-300">Ex: He worked hard, and he won.</text>
          </g>

          <!-- Type 3: Complex -->
          <g transform="translate(515, 15)">
            <rect width="230" height="160" rx="12" fill="#fdf2f8" stroke="#ec4899" stroke-width="2" class="dark:fill-slate-800/90 dark:border-pink-500"/>
            <text x="115" y="28" font-size="13" font-weight="bold" fill="#be185d" class="dark:fill-pink-300" text-anchor="middle">3. COMPLEX SENTENCE</text>
            <rect x="15" y="42" width="95" height="30" rx="6" fill="#ec4899"/>
            <text x="62" y="62" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">Independent</text>

            <rect x="120" y="42" width="95" height="30" rx="6" fill="#f43f5e"/>
            <text x="167" y="62" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">Subordinate</text>

            <text x="18" y="95" font-size="10.5" fill="#334155" class="dark:fill-slate-300">• Chứa liên từ phụ thuộc (although...)</text>
            <text x="18" y="115" font-size="10.5" fill="#334155" class="dark:fill-slate-300">• Mệnh đề phụ không thể đứng riêng</text>
            <text x="18" y="145" font-size="10" font-style="italic" fill="#be185d" class="dark:fill-pink-300">Ex: Although tired, he finished it.</text>
          </g>
        </svg>
      </div>
    </div>
  `,

  unit6: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-blue-50/80 to-indigo-50/80 dark:from-slate-900/80 dark:to-blue-950/40 border border-blue-200 dark:border-blue-800/60 shadow-sm">
      <div class="flex items-center justify-between mb-3">
        <span class="text-xs font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300 flex items-center gap-1.5">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          Sơ đồ chuyển đổi thể sai khiến (Causatives): Active vs. Passive
        </span>
        <span class="text-[11px] px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200 font-medium">Causative Flow</span>
      </div>
      <div class="w-full overflow-x-auto">
        <svg viewBox="0 0 760 190" class="w-full min-w-[640px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
          <!-- Active Box -->
          <g transform="translate(20, 15)">
            <rect width="330" height="160" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" class="dark:fill-slate-800/90 dark:border-blue-500"/>
            <text x="165" y="28" font-size="13" font-weight="bold" fill="#1e40af" class="dark:fill-blue-300" text-anchor="middle">ACTIVE CAUSATIVE (Nhờ ai làm gì)</text>
            
            <rect x="15" y="44" width="300" height="38" rx="8" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5" class="dark:fill-slate-900"/>
            <text x="25" y="68" font-size="11.5" font-weight="bold" fill="#2563eb">HAVE: S + have + O(người) + <tspan fill="#dc2626">V(bare)</tspan></text>
            
            <rect x="15" y="92" width="300" height="38" rx="8" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5" class="dark:fill-slate-900"/>
            <text x="25" y="116" font-size="11.5" font-weight="bold" fill="#2563eb">GET: S + get + O(người) + <tspan fill="#16a34a">to-V</tspan></text>
            
            <text x="20" y="150" font-size="10.5" font-style="italic" fill="#64748b" class="dark:fill-slate-400">Ex: She had the technician install AI software.</text>
          </g>

          <!-- Middle Transformation Arrow -->
          <g transform="translate(365, 80)">
            <path d="M 0 15 L 25 15" stroke="#6366f1" stroke-width="3"/>
            <polygon points="30,15 20,9 20,21" fill="#6366f1"/>
            <text x="15" y="38" font-size="10" font-weight="bold" fill="#6366f1" text-anchor="middle">PASSIVE</text>
          </g>

          <!-- Passive Box -->
          <g transform="translate(410, 15)">
            <rect width="330" height="160" rx="12" fill="#f0fdf4" stroke="#16a34a" stroke-width="2" class="dark:fill-slate-800/90 dark:border-emerald-500"/>
            <text x="165" y="28" font-size="13" font-weight="bold" fill="#15803d" class="dark:fill-emerald-300" text-anchor="middle">PASSIVE CAUSATIVE (Việc được làm)</text>
            
            <rect x="15" y="55" width="300" height="52" rx="8" fill="#ffffff" stroke="#86efac" stroke-width="1.5" class="dark:fill-slate-900"/>
            <text x="165" y="76" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">
              S + have / get + O(vật) + <tspan fill="#dc2626">V3/ed</tspan>
            </text>
            <text x="165" y="96" font-size="11" fill="#047857" text-anchor="middle">(+ by + O_người nếu cần)</text>
            
            <text x="20" y="135" font-size="10.5" font-style="italic" fill="#16a34a" class="dark:fill-emerald-400">Ex: She had the AI software installed.</text>
            <text x="20" y="155" font-size="10" font-weight="bold" fill="#b91c1c" class="dark:fill-red-400">★ Quy tắc vàng: Cứ tân ngữ là VẬT thì luôn dùng V3/ed!</text>
          </g>
        </svg>
      </div>
    </div>
  `,

  unit7: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-rose-50/80 to-amber-50/80 dark:from-slate-900/80 dark:to-rose-950/40 border border-rose-200 dark:border-rose-800/60 shadow-sm">
      <div class="flex items-center justify-between mb-3">
        <span class="text-xs font-bold uppercase tracking-wider text-rose-800 dark:text-rose-300 flex items-center gap-1.5">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
          Mô hình mệnh đề kết quả: So...that đối chiếu Such...that
        </span>
        <span class="text-[11px] px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-900/60 text-rose-800 dark:text-rose-200 font-medium">Result Balance</span>
      </div>
      <div class="w-full overflow-x-auto">
        <svg viewBox="0 0 760 185" class="w-full min-w-[640px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
          <!-- SO THAT side -->
          <g transform="translate(20, 15)">
            <rect width="340" height="155" rx="12" fill="#fff1f2" stroke="#f43f5e" stroke-width="2" class="dark:fill-slate-800/90 dark:border-rose-500"/>
            <text x="170" y="28" font-size="13" font-weight="bold" fill="#be123c" class="dark:fill-rose-300" text-anchor="middle">CẤU TRÚC: SO ... THAT</text>
            <rect x="15" y="42" width="310" height="32" rx="6" fill="#ffffff" stroke="#fda4af" stroke-width="1.5" class="dark:fill-slate-900"/>
            <text x="25" y="63" font-size="11.5" font-weight="bold" fill="#e11d48">S + be/V + SO + <tspan fill="#2563eb">ADJ / ADV</tspan> + THAT + clause</text>
            
            <rect x="15" y="82" width="310" height="32" rx="6" fill="#ffffff" stroke="#fda4af" stroke-width="1.5" class="dark:fill-slate-900"/>
            <text x="25" y="103" font-size="11" font-weight="bold" fill="#e11d48">SO many/few + N(đếm) | SO much/little + N(ko đếm)</text>
            
            <text x="20" y="142" font-size="10.5" font-style="italic" fill="#be123c" class="dark:fill-rose-300">Ex: The fake news was SO viral THAT everyone believed it.</text>
          </g>

          <!-- SUCH THAT side -->
          <g transform="translate(400, 15)">
            <rect width="340" height="155" rx="12" fill="#fffbeb" stroke="#f59e0b" stroke-width="2" class="dark:fill-slate-800/90 dark:border-amber-500"/>
            <text x="170" y="28" font-size="13" font-weight="bold" fill="#b45309" class="dark:fill-amber-300" text-anchor="middle">CẤU TRÚC: SUCH ... THAT</text>
            <rect x="15" y="42" width="310" height="32" rx="6" fill="#ffffff" stroke="#fde68a" stroke-width="1.5" class="dark:fill-slate-900"/>
            <text x="25" y="63" font-size="11.5" font-weight="bold" fill="#d97706">S + V + SUCH + <tspan fill="#2563eb">(a/an) + ADJ + NOUN</tspan> + THAT</text>
            
            <rect x="15" y="82" width="310" height="32" rx="6" fill="#ffffff" stroke="#fde68a" stroke-width="1.5" class="dark:fill-slate-900"/>
            <text x="25" y="103" font-size="11" font-weight="bold" fill="#d97706">Trọng tâm: Phải có CỤM DANH TỪ theo sau Such</text>
            
            <text x="20" y="142" font-size="10.5" font-style="italic" fill="#b45309" class="dark:fill-amber-300">Ex: It was SUCH sensational news THAT millions clicked.</text>
          </g>
        </svg>
      </div>
    </div>
  `,

  unit8: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-emerald-50/80 to-lime-50/80 dark:from-slate-900/80 dark:to-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 shadow-sm">
      <div class="flex items-center justify-between mb-3">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
          Tháp phân cấp Danh lục Đỏ IUCN & Mệnh đề điều kiện (Provided that / Unless)
        </span>
        <span class="text-[11px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 font-medium">IUCN Red List</span>
      </div>
      <div class="w-full overflow-x-auto">
        <svg viewBox="0 0 760 190" class="w-full min-w-[640px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
          <!-- IUCN Pyramid on Left -->
          <g transform="translate(20, 15)">
            <text x="140" y="18" font-size="11.5" font-weight="bold" fill="#047857" class="dark:fill-emerald-300" text-anchor="middle">CÁC CẤP ĐỘ NGUY CẤP (IUCN)</text>
            
            <!-- Tier 1: EX -->
            <polygon points="140,28 100,55 180,55" fill="#18181b"/>
            <text x="140" y="47" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">EX: Tuyệt chủng</text>
            
            <!-- Tier 2: CR -->
            <polygon points="100,58 75,88 205,88 180,58" fill="#dc2626"/>
            <text x="140" y="78" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">CR: Cực kỳ nguy cấp (Sao la)</text>
            
            <!-- Tier 3: EN -->
            <polygon points="75,91 50,121 230,121 205,91" fill="#ea580c"/>
            <text x="140" y="111" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">EN: Nguy cấp (Hổ Đông Dương)</text>
            
            <!-- Tier 4: VU / LC -->
            <polygon points="50,124 20,158 260,158 230,124" fill="#65a30d"/>
            <text x="140" y="146" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">VU & LC: Sắp nguy cấp / Ít quan ngại</text>
          </g>

          <!-- Grammar Rules on Right -->
          <g transform="translate(320, 15)">
            <rect width="420" height="155" rx="12" fill="#ffffff" stroke="#10b981" stroke-width="1.5" class="dark:fill-slate-800 dark:border-emerald-600"/>
            <text x="20" y="26" font-size="12" font-weight="bold" fill="#065f46" class="dark:fill-emerald-300">Quy tắc liên từ điều kiện nâng cao (Unit 8):</text>
            
            <rect x="20" y="38" width="380" height="34" rx="6" fill="#f0fdf4" stroke="#a7f3d0" stroke-width="1" class="dark:fill-slate-900"/>
            <text x="28" y="59" font-size="11" font-weight="bold" fill="#047857">PROVIDED THAT / AS LONG AS = Miễn là, Với điều kiện là</text>
            
            <rect x="20" y="78" width="380" height="34" rx="6" fill="#fef2f2" stroke="#fecaca" stroke-width="1" class="dark:fill-slate-900"/>
            <text x="28" y="99" font-size="11" font-weight="bold" fill="#b91c1c">UNLESS = IF NOT (Trừ khi, Nếu không thì)</text>

            <text x="20" y="132" font-size="10.5" font-style="italic" fill="#334155" class="dark:fill-slate-300">
              "Tigers will survive <tspan fill="#047857" font-weight="bold">provided that</tspan> we end illegal trade."
            </text>
            <text x="20" y="148" font-size="10.5" font-style="italic" fill="#334155" class="dark:fill-slate-300">
              "<tspan fill="#b91c1c" font-weight="bold">Unless</tspan> we act now, more species will become extinct."
            </text>
          </g>
        </svg>
      </div>
    </div>
  `,

  unit9: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-indigo-50/80 to-purple-50/80 dark:from-slate-900/80 dark:to-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 shadow-sm">
      <div class="flex items-center justify-between mb-3">
        <span class="text-xs font-bold uppercase tracking-wider text-indigo-800 dark:text-indigo-300 flex items-center gap-1.5">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          Giải phẫu cấu trúc cụm động từ 3 từ (Three-word Phrasal Verbs)
        </span>
        <span class="text-[11px] px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200 font-medium">Phrasal Structure</span>
      </div>
      <div class="w-full overflow-x-auto">
        <svg viewBox="0 0 760 185" class="w-full min-w-[640px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
          <!-- 4 Block anatomy -->
          <g transform="translate(40, 20)">
            <!-- Verb Block -->
            <rect x="0" y="0" width="130" height="54" rx="8" fill="#4f46e5"/>
            <text x="65" y="24" font-size="11" font-weight="bold" fill="#c7d2fe" text-anchor="middle">1. ĐỘNG TỪ CHÍNH</text>
            <text x="65" y="44" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">VERB</text>

            <text x="145" y="32" font-size="18" font-weight="bold" fill="#6366f1">+</text>

            <!-- Adverb Block -->
            <rect x="160" y="0" width="130" height="54" rx="8" fill="#0891b2"/>
            <text x="225" y="24" font-size="11" font-weight="bold" fill="#a5f3fc" text-anchor="middle">2. TRẠNG TỪ</text>
            <text x="225" y="44" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">ADVERB</text>

            <text x="305" y="32" font-size="18" font-weight="bold" fill="#0891b2">+</text>

            <!-- Preposition Block -->
            <rect x="320" y="0" width="150" height="54" rx="8" fill="#7c3aed"/>
            <text x="395" y="24" font-size="11" font-weight="bold" fill="#ddd6fe" text-anchor="middle">3. GIỚI TỪ</text>
            <text x="395" y="44" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">PREPOSITION</text>

            <text x="485" y="32" font-size="18" font-weight="bold" fill="#7c3aed">+</text>

            <!-- Object Block -->
            <rect x="500" y="0" width="160" height="54" rx="8" fill="#059669"/>
            <text x="580" y="24" font-size="11" font-weight="bold" fill="#a7f3d0" text-anchor="middle">4. TÂN NGỮ</text>
            <text x="580" y="44" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">OBJECT (N / V-ing)</text>
          </g>

          <!-- Core Examples List -->
          <g transform="translate(40, 95)">
            <rect width="680" height="75" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" class="dark:fill-slate-800 dark:border-slate-700"/>
            <text x="20" y="24" font-size="11" font-weight="bold" fill="#1e293b" class="dark:fill-slate-200">Ví dụ cụ thể & Lưu ý tuyệt đối không tách rời tân ngữ:</text>
            <text x="20" y="46" font-size="11" fill="#4f46e5" font-weight="600">• come up with <tspan fill="#475569" class="dark:fill-slate-300">an idea</tspan> | • keep up with <tspan fill="#475569" class="dark:fill-slate-300">changes</tspan> | • look forward to <tspan fill="#475569" class="dark:fill-slate-300">hearing</tspan></text>
            <text x="20" y="65" font-size="11" fill="#7c3aed" font-weight="600">• put up with <tspan fill="#475569" class="dark:fill-slate-300">noise</tspan> | • run out of <tspan fill="#475569" class="dark:fill-slate-300">battery</tspan> | • cut down on <tspan fill="#475569" class="dark:fill-slate-300">expenses</tspan></text>
          </g>
        </svg>
      </div>
    </div>
  `,

  unit10: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-blue-50/80 to-teal-50/80 dark:from-slate-900/80 dark:to-teal-950/40 border border-teal-200 dark:border-teal-800/60 shadow-sm">
      <div class="flex items-center justify-between mb-3">
        <span class="text-xs font-bold uppercase tracking-wider text-teal-800 dark:text-teal-300 flex items-center gap-1.5">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
          Sơ đồ câu tường thuật theo mục đích giao tiếp (Reported Speech: to-V & V-ing)
        </span>
        <span class="text-[11px] px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-200 font-medium">Reporting Map</span>
      </div>
      <div class="w-full overflow-x-auto">
        <svg viewBox="0 0 760 190" class="w-full min-w-[640px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
          <!-- Branch 1: Verb + O + to-V -->
          <g transform="translate(15, 15)">
            <rect width="230" height="160" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" class="dark:fill-slate-800/90 dark:border-blue-500"/>
            <text x="115" y="28" font-size="12" font-weight="bold" fill="#1e40af" class="dark:fill-blue-300" text-anchor="middle">1. Verb + Object + to-V</text>
            <text x="18" y="52" font-size="11" font-weight="bold" fill="#2563eb">• tell / ask sb to-V</text>
            <text x="18" y="72" font-size="11" font-weight="bold" fill="#2563eb">• advise / encourage sb to-V</text>
            <text x="18" y="92" font-size="11" font-weight="bold" fill="#2563eb">• warn sb (not) to-V</text>
            <text x="18" y="112" font-size="11" font-weight="bold" fill="#2563eb">• remind sb to-V</text>
            <text x="18" y="142" font-size="10" font-style="italic" fill="#64748b" class="dark:fill-slate-400">Ex: He advised me to study daily.</text>
          </g>

          <!-- Branch 2: Verb + to-V -->
          <g transform="translate(265, 15)">
            <rect width="230" height="160" rx="12" fill="#f0fdf4" stroke="#16a34a" stroke-width="2" class="dark:fill-slate-800/90 dark:border-emerald-500"/>
            <text x="115" y="28" font-size="12" font-weight="bold" fill="#15803d" class="dark:fill-emerald-300" text-anchor="middle">2. Verb + to-V (Không cần O)</text>
            <text x="18" y="52" font-size="11" font-weight="bold" fill="#059669">• offer to-V (Đề nghị giúp)</text>
            <text x="18" y="72" font-size="11" font-weight="bold" fill="#059669">• promise to-V (Hứa hẹn)</text>
            <text x="18" y="92" font-size="11" font-weight="bold" fill="#059669">• refuse to-V (Từ chối)</text>
            <text x="18" y="112" font-size="11" font-weight="bold" fill="#059669">• agree to-V (Đồng ý)</text>
            <text x="18" y="142" font-size="10" font-style="italic" fill="#64748b" class="dark:fill-slate-400">Ex: She offered to guide me.</text>
          </g>

          <!-- Branch 3: Verb + V-ing -->
          <g transform="translate(515, 15)">
            <rect width="230" height="160" rx="12" fill="#faf5ff" stroke="#a855f7" stroke-width="2" class="dark:fill-slate-800/90 dark:border-purple-500"/>
            <text x="115" y="28" font-size="12" font-weight="bold" fill="#7e22ce" class="dark:fill-purple-300" text-anchor="middle">3. Verb + (Prep) + V-ing</text>
            <text x="18" y="52" font-size="11" font-weight="bold" fill="#9333ea">• suggest + V-ing</text>
            <text x="18" y="72" font-size="11" font-weight="bold" fill="#9333ea">• apologize for + V-ing</text>
            <text x="18" y="92" font-size="11" font-weight="bold" fill="#9333ea">• thank sb for + V-ing</text>
            <text x="18" y="112" font-size="11" font-weight="bold" fill="#9333ea">• congratulate sb on + V-ing</text>
            <text x="18" y="142" font-size="10" font-style="italic" fill="#64748b" class="dark:fill-slate-400">Ex: He apologized for being late.</text>
          </g>
        </svg>
      </div>
    </div>
  `
};

module.exports = diagrams;
