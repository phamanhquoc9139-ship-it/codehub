// toan12_lesson_diagrams.js - 19 Dedicated Mathematical SVGs for Lessons 1 through 19
const svgs = require('./toan12_svgs.js');

module.exports = {
  // BÀI 1: TÍNH ĐƠN ĐIỆU VÀ CỰC TRỊ
  diagram_bai1: `
  <div class="my-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
    <div class="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide mb-3 flex items-center gap-2">
      <span>📊</span> Hình minh họa Bài 1: Chiều Biến Thiên, Đổi Dấu Đạo Hàm & Điểm Cực Trị
    </div>
    <svg viewBox="0 0 720 280" class="w-full h-auto max-w-2xl mx-auto rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#64748b"/>
        </marker>
      </defs>
      <!-- Axes -->
      <line x1="40" y1="230" x2="680" y2="230" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arr1)"/>
      <line x1="80" y1="260" x2="80" y2="20" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arr1)"/>
      <text x="670" y="248" font-size="12" font-weight="bold" fill="#64748b">x</text>
      <text x="65" y="30" font-size="12" font-weight="bold" fill="#64748b">y</text>
      <text x="68" y="245" font-size="11" fill="#94a3b8">O</text>

      <!-- Smooth cubic-like curve y = f(x) with Local Max at x1=240 and Local Min at x2=460 -->
      <path d="M 100 210 C 160 160, 200 60, 240 60 C 280 60, 320 210, 460 210 C 530 210, 580 120, 640 40" fill="none" stroke="#4f46e5" stroke-width="3"/>
      <text x="645" y="45" font-size="12" font-weight="bold" fill="#4f46e5">y = f(x)</text>

      <!-- Increasing zone 1: x < 240 -->
      <text x="140" y="110" font-size="11" font-weight="bold" fill="#16a34a">Đồng biến (f' > 0)</text>
      
      <!-- Local Maximum at (240, 60) -->
      <line x1="180" y1="60" x2="300" y2="60" stroke="#ef4444" stroke-width="1.8" stroke-dasharray="4,3"/>
      <line x1="240" y1="60" x2="240" y2="230" stroke="#94a3b8" stroke-dasharray="3,3"/>
      <circle cx="240" cy="60" r="5" fill="#ef4444"/>
      <text x="240" y="45" text-anchor="middle" font-size="12" font-weight="bold" fill="#ef4444">CỰC ĐẠI (f' đổi dấu + sang -)</text>
      <text x="240" y="245" text-anchor="middle" font-size="11" font-weight="bold" fill="#64748b">x_CĐ</text>

      <!-- Decreasing zone: 240 < x < 460 -->
      <text x="350" y="130" text-anchor="middle" font-size="11" font-weight="bold" fill="#ea580c">Nghịch biến (f' < 0)</text>

      <!-- Local Minimum at (460, 210) -->
      <line x1="400" y1="210" x2="520" y2="210" stroke="#059669" stroke-width="1.8" stroke-dasharray="4,3"/>
      <line x1="460" y1="210" x2="460" y2="230" stroke="#94a3b8" stroke-dasharray="3,3"/>
      <circle cx="460" cy="210" r="5" fill="#059669"/>
      <text x="460" y="195" text-anchor="middle" font-size="12" font-weight="bold" fill="#059669">CỰC TIỂU (f' đổi dấu - sang +)</text>
      <text x="460" y="245" text-anchor="middle" font-size="11" font-weight="bold" fill="#64748b">x_CT</text>

      <!-- Increasing zone 2: x > 460 -->
      <text x="540" y="110" font-size="11" font-weight="bold" fill="#16a34a">Đồng biến (f' > 0)</text>
    </svg>
  </div>
  `,

  // BÀI 2: GIÁ TRỊ LỚN NHẤT & NHỎ NHẤT (BÀI TOÁN TỐI ƯU CẮT BÌA LÀM HỘP)
  diagram_bai2: `
  <div class="my-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
    <div class="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide mb-3 flex items-center gap-2">
      <span>📦</span> Hình minh họa Bài 2: Mô Hình Bài Toán Tối Ưu Cắt Bìa Gấp Hộp Thể Tích Lớn Nhất
    </div>
    <svg viewBox="0 0 720 250" class="w-full h-auto max-w-2xl mx-auto rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800" xmlns="http://www.w3.org/2000/svg">
      <!-- LEFT: FLAT SHEET WITH 4 CORNERS CUT OUT -->
      <g transform="translate(40, 30)">
        <text x="130" y="15" text-anchor="middle" font-size="12" font-weight="bold" fill="#475569">1. Tấm bìa chữ nhật a × b cắt 4 góc vuông x</text>
        <rect x="0" y="30" width="260" height="160" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
        <rect x="0" y="30" width="40" height="40" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,3"/>
        <rect x="220" y="30" width="40" height="40" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,3"/>
        <rect x="0" y="150" width="40" height="40" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,3"/>
        <rect x="220" y="150" width="40" height="40" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,3"/>
        <rect x="40" y="70" width="180" height="80" fill="#fde68a" stroke="#b45309" stroke-width="1.5" stroke-dasharray="4,3"/>
        <text x="20" y="55" text-anchor="middle" font-size="11" font-weight="bold" fill="#ef4444">x</text>
        <text x="130" y="115" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">Đáy: (a - 2x) × (b - 2x)</text>
      </g>

      <!-- RIGHT: 3D FOLDED OPEN BOX -->
      <g transform="translate(380, 30)">
        <text x="150" y="15" text-anchor="middle" font-size="12" font-weight="bold" fill="#2563eb">2. Hộp không nắp thể tích V(x) = x(a - 2x)(b - 2x)</text>
        <polygon points="60,140 220,140 220,90 60,90" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="1.5"/>
        <polygon points="220,140 270,100 270,50 220,90" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.5"/>
        <polygon points="60,90 220,90 270,50 110,50" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5" fill-opacity="0.6"/>
        <line x1="45" y1="90" x2="45" y2="140" stroke="#ef4444" stroke-width="1.5"/>
        <line x1="40" y1="90" x2="50" y2="90" stroke="#ef4444"/>
        <line x1="40" y1="140" x2="50" y2="140" stroke="#ef4444"/>
        <text x="35" y="120" text-anchor="end" font-size="11" font-weight="bold" fill="#ef4444">x (Chiều cao)</text>
        <text x="140" y="160" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">a - 2x</text>
        <text x="260" y="130" font-size="11" font-weight="bold" fill="#1e40af">b - 2x</text>

        <rect x="20" y="175" width="280" height="35" rx="6" fill="#f0fdf4" stroke="#86efac" stroke-width="1"/>
        <text x="160" y="197" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">Giải V'(x) = 0 để tìm x cho thể tích lớn nhất (Max)</text>
      </g>
    </svg>
  </div>
  `,

  // BÀI 3: ĐƯỜNG TIỆM CẬN (ĐỨNG, NGANG, XIÊN)
  diagram_bai3: `
  <div class="my-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
    <div class="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide mb-3 flex items-center gap-2">
      <span>📐</span> Hình minh họa Bài 3: Ba Loại Đường Tiệm Cận (Đứng x = a, Ngang y = b, Xiên y = ax + b)
    </div>
    <svg viewBox="0 0 720 260" class="w-full h-auto max-w-2xl mx-auto rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(30, 20)">
        <text x="150" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#475569">1. Tiệm cận đứng x = a & Ngang y = b</text>
        <line x1="20" y1="180" x2="280" y2="180" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="70" y1="210" x2="70" y2="40" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="140" y1="40" x2="140" y2="210" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,3"/>
        <text x="145" y="55" font-size="11" font-weight="bold" fill="#ef4444">TCĐ: x = a</text>
        <line x1="20" y1="110" x2="280" y2="110" stroke="#10b981" stroke-width="2" stroke-dasharray="4,3"/>
        <text x="210" y="103" font-size="11" font-weight="bold" fill="#10b981">TCN: y = b</text>
        <path d="M 30 118 Q 100 125 125 150 T 135 210" fill="none" stroke="#6366f1" stroke-width="2.5"/>
        <path d="M 145 40 Q 155 95 180 102 T 270 108" fill="none" stroke="#6366f1" stroke-width="2.5"/>
      </g>
      <g transform="translate(380, 20)">
        <text x="150" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#475569">2. Tiệm cận xiên y = ax + b (Hàm bậc 2/1)</text>
        <line x1="20" y1="180" x2="280" y2="180" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="120" y1="210" x2="120" y2="40" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="120" y1="40" x2="120" y2="210" stroke="#ef4444" stroke-width="1.8" stroke-dasharray="4,3"/>
        <line x1="30" y1="190" x2="270" y2="60" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="5,3"/>
        <text x="170" y="80" font-size="11" font-weight="bold" fill="#8b5cf6">TCX: y = ax + b</text>
        <path d="M 30 205 Q 80 180 110 210" fill="none" stroke="#6366f1" stroke-width="2.5"/>
        <path d="M 130 50 Q 150 110 270 65" fill="none" stroke="#6366f1" stroke-width="2.5"/>
        <text x="150" y="235" text-anchor="middle" font-size="11" font-style="italic" fill="#64748b">lim [f(x) - (ax + b)] = 0 khi x → ±∞</text>
      </g>
    </svg>
  </div>
  `,

  // BÀI 4: KHẢO SÁT VÀ VẼ ĐỒ THỊ
  diagram_bai4: `
  <div class="my-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
    <div class="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide mb-3 flex items-center gap-2">
      <span>📈</span> Hình minh họa Bài 4: Đồ Thị Hàm Đa Thức Bậc Ba & Tâm Đối Xứng (Điểm Uốn U)
    </div>
    <svg viewBox="0 0 720 260" class="w-full h-auto max-w-2xl mx-auto rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="140" x2="680" y2="140" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="220" y1="240" x2="220" y2="20" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="670" y="155" font-size="12" font-weight="bold" fill="#64748b">x</text>
      <text x="205" y="30" font-size="12" font-weight="bold" fill="#64748b">y</text>
      <text x="205" y="155" font-size="11" fill="#94a3b8">O</text>

      <path d="M 120 240 C 180 180, 180 80, 220 80 C 260 80, 320 140, 360 140 C 400 140, 460 200, 500 200 C 540 200, 560 100, 600 20" fill="none" stroke="#4f46e5" stroke-width="3"/>
      
      <circle cx="220" cy="80" r="5" fill="#ef4444"/>
      <text x="210" y="65" text-anchor="end" font-size="11" font-weight="bold" fill="#ef4444">Cực đại (0; 2)</text>

      <circle cx="360" cy="140" r="6" fill="#8b5cf6"/>
      <circle cx="360" cy="140" r="9" fill="none" stroke="#8b5cf6" stroke-width="1.5"/>
      <text x="360" y="125" text-anchor="middle" font-size="12" font-weight="extrabold" fill="#8b5cf6">TÂM ĐỐI XỨNG U(1; 0)</text>

      <circle cx="500" cy="200" r="5" fill="#059669"/>
      <text x="510" y="215" font-size="11" font-weight="bold" fill="#059669">Cực tiểu (2; -2)</text>

      <text x="360" y="245" text-anchor="middle" font-size="11" font-style="italic" fill="#64748b">Mọi điểm trên đồ thị luôn đối xứng qua điểm uốn U (-b/3a; f(-b/3a))</text>
    </svg>
  </div>
  `,

  // BÀI 5: ỨNG DỤNG ĐẠO HÀM THỰC TIỄN
  diagram_bai5: `
  <div class="my-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
    <div class="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide mb-3 flex items-center gap-2">
      <span>🚀</span> Hình minh họa Bài 5: Ứng Dụng Vật Lý (v = s', a = v') & Tối Ưu Lợi Nhuận (R' = C')
    </div>
    <svg viewBox="0 0 720 240" class="w-full h-auto max-w-2xl mx-auto rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(30, 20)">
        <text x="140" y="15" text-anchor="middle" font-size="12" font-weight="bold" fill="#2563eb">1. Chuyển động học: v(t) = s'(t)</text>
        <line x1="20" y1="160" x2="260" y2="160" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="50" y1="190" x2="50" y2="30" stroke="#94a3b8" stroke-width="1.5"/>
        <text x="250" y="175" font-size="11" fill="#64748b">Thời gian t</text>
        <path d="M 50 160 Q 130 50 210 160" fill="none" stroke="#2563eb" stroke-width="2.5"/>
        <circle cx="130" cy="105" r="4" fill="#2563eb"/>
        <text x="130" y="90" text-anchor="middle" font-size="10" font-weight="bold" fill="#2563eb">v_max (khi gia tốc a=0)</text>
        <circle cx="210" cy="160" r="4" fill="#ef4444"/>
        <text x="210" y="180" text-anchor="middle" font-size="10" font-weight="bold" fill="#ef4444">Đổi chiều (v=0)</text>
      </g>
      <g transform="translate(370, 20)">
        <text x="150" y="15" text-anchor="middle" font-size="12" font-weight="bold" fill="#059669">2. Tối ưu kinh tế: Doanh thu R vs Chi phí C</text>
        <line x1="20" y1="160" x2="280" y2="160" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="50" y1="190" x2="50" y2="30" stroke="#94a3b8" stroke-width="1.5"/>
        <path d="M 50 130 Q 150 110 260 50" fill="none" stroke="#ea580c" stroke-width="2"/>
        <text x="265" y="55" font-size="10" font-weight="bold" fill="#ea580c">Chi phí C(x)</text>
        <path d="M 50 160 Q 150 40 260 90" fill="none" stroke="#16a34a" stroke-width="2"/>
        <text x="265" y="95" font-size="10" font-weight="bold" fill="#16a34a">Doanh thu R(x)</text>
        <line x1="140" y1="67" x2="140" y2="117" stroke="#7c3aed" stroke-width="2.5"/>
        <text x="145" y="95" font-size="10" font-weight="bold" fill="#7c3aed">Lợi nhuận Max (R' = C')</text>
      </g>
    </svg>
  </div>
  `,

  // BÀI 6: VECTƠ KHÔNG GIAN
  diagram_bai6: `
  <div class="my-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
    <div class="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide mb-3 flex items-center gap-2">
      <span>📐</span> Hình minh họa Bài 6: Ba Quy Tắc Vectơ Không Gian (Tam Giác, Hình Bình Hành & Hình Hộp)
    </div>
    <svg viewBox="0 0 720 200" class="w-full h-auto max-w-2xl mx-auto rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(40, 30)">
        <text x="90" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">Quy tắc tam giác</text>
        <line x1="20" y1="120" x2="100" y2="50" stroke="#2563eb" stroke-width="2"/>
        <line x1="100" y1="50" x2="160" y2="120" stroke="#059669" stroke-width="2"/>
        <line x1="20" y1="120" x2="160" y2="120" stroke="#dc2626" stroke-width="2.5"/>
        <text x="90" y="140" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">AB + BC = AC</text>
      </g>
      <g transform="translate(260, 30)">
        <text x="90" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#7c3aed">Quy tắc hình bình hành</text>
        <line x1="20" y1="120" x2="110" y2="120" stroke="#3b82f6" stroke-width="2"/>
        <line x1="20" y1="120" x2="70" y2="60" stroke="#10b981" stroke-width="2"/>
        <line x1="20" y1="120" x2="160" y2="60" stroke="#7c3aed" stroke-width="2.5"/>
        <text x="90" y="140" text-anchor="middle" font-size="11" font-weight="bold" fill="#7c3aed">AB + AD = AC</text>
      </g>
      <g transform="translate(480, 30)">
        <text x="90" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#d97706">Quy tắc hình hộp 3D</text>
        <line x1="30" y1="120" x2="110" y2="120" stroke="#3b82f6" stroke-width="2"/>
        <line x1="30" y1="120" x2="70" y2="80" stroke="#10b981" stroke-width="2"/>
        <line x1="30" y1="120" x2="30" y2="50" stroke="#ef4444" stroke-width="2"/>
        <line x1="30" y1="120" x2="150" y2="50" stroke="#8b5cf6" stroke-width="3"/>
        <text x="90" y="140" text-anchor="middle" font-size="11" font-weight="bold" fill="#8b5cf6">AB + AD + AA' = AC'</text>
      </g>
    </svg>
  </div>
  `,

  // BÀI 7: HỆ TRỤC TỌA ĐỘ OXYZ - EMBED SVG3 TRỰC TIẾP
  diagram_bai7: `
  <div class="my-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
    <div class="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide mb-3 flex items-center gap-2">
      <span>🧭</span> Hình minh họa Bài 7: Hệ Trục Oxyz, Vectơ Đơn Vị & Hình Chiếu Điểm M(x; y; z)
    </div>
    ${svgs.svg3_oxyz_coordinate_system}
  </div>
  `,

  // BÀI 8: PHÉP TOÁN VECTƠ & GÓC
  diagram_bai8: `
  <div class="my-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
    <div class="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide mb-3 flex items-center gap-2">
      <span>📐</span> Hình minh họa Bài 8: Tích Vô Hướng, Độ Dài & Góc θ Giữa Hai Vectơ Trong Không Gian
    </div>
    <svg viewBox="0 0 680 180" class="w-full h-auto max-w-xl mx-auto rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800" xmlns="http://www.w3.org/2000/svg">
      <line x1="120" y1="120" x2="320" y2="120" stroke="#2563eb" stroke-width="3"/>
      <text x="330" y="125" font-size="13" font-weight="bold" fill="#2563eb">a (x₁, y₁, z₁)</text>
      <line x1="120" y1="120" x2="260" y2="40" stroke="#059669" stroke-width="3"/>
      <text x="270" y="45" font-size="13" font-weight="bold" fill="#059669">b (x₂, y₂, z₂)</text>
      <path d="M 170 120 A 50 50 0 0 0 155 92" fill="none" stroke="#dc2626" stroke-width="2"/>
      <text x="180" y="105" font-size="13" font-weight="bold" fill="#dc2626">θ</text>
      <circle cx="120" cy="120" r="4" fill="#334155"/>
      <text x="105" y="135" font-size="12" font-weight="bold" fill="#334155">O</text>
      
      <rect x="420" y="30" width="230" height="110" rx="6" fill="#f8fafc" class="dark:fill-slate-800" stroke="#cbd5e1" stroke-width="1"/>
      <text x="435" y="55" font-size="11" font-weight="bold" fill="#1e293b" class="dark:fill-slate-100">• a · b = x₁x₂ + y₁y₂ + z₁z₂</text>
      <text x="435" y="80" font-size="11" font-weight="bold" fill="#1e293b" class="dark:fill-slate-100">• |a| = √(x₁² + y₁² + z₁²)</text>
      <text x="435" y="105" font-size="11" font-weight="bold" fill="#dc2626">• cos θ = (a · b) / (|a||b|)</text>
      <text x="435" y="125" font-size="10" fill="#64748b">• a ⊥ b ⇔ a · b = 0</text>
    </svg>
  </div>
  `,

  // BÀI 9: KHOẢNG BIẾN THIÊN & TỨ PHÂN VỊ - EMBED SVG4 TRỰC TIẾP
  diagram_bai9: `
  <div class="my-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
    <div class="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide mb-3 flex items-center gap-2">
      <span>📊</span> Hình minh họa Bài 9: Biểu Đồ Ghép Nhóm, Vị Trí Q1, Q2, Q3 & Khoảng Tứ Phân Vị ΔQ
    </div>
    ${svgs.svg4_grouped_data_quartiles}
  </div>
  `,

  // BÀI 10: PHƯƠNG SAI & ĐỘ LỆCH CHUẨN
  diagram_bai10: `
  <div class="my-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
    <div class="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide mb-3 flex items-center gap-2">
      <span>📈</span> Hình minh họa Bài 10: Ý Nghĩa Độ Lệch Chuẩn s & Phân Phối Chuẩn (Chuông Gauss)
    </div>
    <svg viewBox="0 0 700 220" class="w-full h-auto max-w-xl mx-auto rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="180" x2="650" y2="180" stroke="#94a3b8" stroke-width="1.5"/>
      <path d="M 70 178 C 190 178, 250 160, 300 90 C 330 40, 370 40, 400 90 C 450 160, 510 178, 630 178" fill="#dbeafe" class="dark:fill-indigo-950/40" stroke="#2563eb" stroke-width="2.5"/>
      <line x1="350" y1="40" x2="350" y2="180" stroke="#dc2626" stroke-width="2"/>
      <text x="350" y="198" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">x̄ (Trung bình)</text>
      <line x1="280" y1="100" x2="280" y2="180" stroke="#059669" stroke-width="1.5" stroke-dasharray="3,3"/>
      <line x1="420" y1="100" x2="420" y2="180" stroke="#059669" stroke-width="1.5" stroke-dasharray="3,3"/>
      <text x="280" y="198" text-anchor="middle" font-size="11" font-weight="bold" fill="#059669">x̄ - s</text>
      <text x="420" y="198" text-anchor="middle" font-size="11" font-weight="bold" fill="#059669">x̄ + s</text>
      <text x="350" y="125" text-anchor="middle" font-size="12" font-weight="bold" fill="#15803d">≈ 68.3% dữ liệu tập trung ở [x̄ - s; x̄ + s]</text>
    </svg>
  </div>
  `,

  // BÀI 11: NGUYÊN HÀM
  diagram_bai11: `
  <div class="my-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
    <div class="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide mb-3 flex items-center gap-2">
      <span>∫</span> Hình minh họa Bài 11: Họ Đường Cong Nguyên Hàm F(x) + C Tịnh Tiến Dọc Oy
    </div>
    <svg viewBox="0 0 680 200" class="w-full h-auto max-w-xl mx-auto rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="160" x2="640" y2="160" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="120" y1="190" x2="120" y2="20" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="630" y="175" font-size="12" fill="#64748b">x</text>
      <text x="105" y="30" font-size="12" fill="#64748b">y</text>
      
      <path d="M 80 160 Q 240 180 340 130 T 600 40" fill="none" stroke="#93c5fd" stroke-width="2"/>
      <text x="605" y="45" font-size="10" fill="#60a5fa">y = F(x) + 2</text>
      
      <path d="M 80 130 Q 240 150 340 100 T 600 10" fill="none" stroke="#3b82f6" stroke-width="2.5"/>
      <text x="605" y="15" font-size="10" font-weight="bold" fill="#2563eb">y = F(x) + C (Họ nguyên hàm)</text>
      
      <path d="M 80 190 Q 240 210 340 160 T 600 70" fill="none" stroke="#93c5fd" stroke-width="2"/>
      <text x="605" y="75" font-size="10" fill="#60a5fa">y = F(x) - 1</text>

      <text x="340" y="185" text-anchor="middle" font-size="11" font-style="italic" fill="#64748b">Tại cùng một hoành độ x₀, các tiếp tuyến luôn song song vì có cùng hệ số góc f(x₀)</text>
    </svg>
  </div>
  `,

  // BÀI 12: TÍCH PHÂN NEWTON-LEIBNIZ
  diagram_bai12: `
  <div class="my-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
    <div class="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide mb-3 flex items-center gap-2">
      <span>📈</span> Hình minh họa Bài 12: Định Nghĩa Tích Phân Xác Định & Dải Vi Phân Riemann
    </div>
    <svg viewBox="0 0 680 200" class="w-full h-auto max-w-xl mx-auto rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="160" x2="640" y2="160" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="80" y1="190" x2="80" y2="30" stroke="#94a3b8" stroke-width="1.5"/>
      <path d="M 180 160 L 180 100 Q 330 40 480 80 L 480 160 Z" fill="#bfdbfe" class="dark:fill-indigo-950/50" stroke="none"/>
      <path d="M 120 120 Q 330 30 550 90" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
      <line x1="180" y1="100" x2="180" y2="160" stroke="#1d4ed8" stroke-width="1.5" stroke-dasharray="3,3"/>
      <line x1="480" y1="80" x2="480" y2="160" stroke="#1d4ed8" stroke-width="1.5" stroke-dasharray="3,3"/>
      <text x="180" y="178" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">a</text>
      <text x="480" y="178" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">b</text>
      <text x="330" y="125" text-anchor="middle" font-size="13" font-weight="extrabold" fill="#1e40af">S = ∫ₐᵇ f(x) dx = F(b) - F(a)</text>
    </svg>
  </div>
  `,

  // BÀI 13: ỨNG DỤNG HÌNH HỌC TÍCH PHÂN - EMBED SVG5 TRỰC TIẾP
  diagram_bai13: `
  <div class="my-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
    <div class="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide mb-3 flex items-center gap-2">
      <span>🎨</span> Hình minh họa Bài 13: Diện Tích Giữa Hai Đồ Thị & Thể Tích Tròn Xoay Quanh Ox
    </div>
    ${svgs.svg5_integral_area_and_revolution}
  </div>
  `,

  // BÀI 14: PHƯƠNG TRÌNH MẶT PHẲNG - EMBED SVG6 TRỰC TIẾP
  diagram_bai14: `
  <div class="my-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
    <div class="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide mb-3 flex items-center gap-2">
      <span>📐</span> Hình minh họa Bài 14: Mặt Phẳng (P), Vectơ Pháp Tuyến n = [u, v] & Khoảng Cách d(M, P)
    </div>
    ${svgs.svg6_cross_product_and_distance}
  </div>
  `,

  // BÀI 15: PHƯƠNG TRÌNH ĐƯỜNG THẲNG
  diagram_bai15: `
  <div class="my-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
    <div class="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide mb-3 flex items-center gap-2">
      <span>📏</span> Hình minh họa Bài 15: Đường Thẳng Trong Không Gian & Bốn Vị Trí Tương Đối
    </div>
    <svg viewBox="0 0 700 180" class="w-full h-auto max-w-xl mx-auto rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(30, 20)">
        <text x="60" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">1. Song song</text>
        <line x1="10" y1="50" x2="110" y2="50" stroke="#2563eb" stroke-width="2"/>
        <line x1="10" y1="80" x2="110" y2="80" stroke="#2563eb" stroke-width="2"/>
        <text x="60" y="115" text-anchor="middle" font-size="10" fill="#64748b">u₁ cùng phương u₂</text>
      </g>
      <g transform="translate(190, 20)">
        <text x="60" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#059669">2. Cắt nhau</text>
        <line x1="10" y1="40" x2="110" y2="90" stroke="#059669" stroke-width="2"/>
        <line x1="10" y1="90" x2="110" y2="40" stroke="#059669" stroke-width="2"/>
        <circle cx="60" cy="65" r="3.5" fill="#ef4444"/>
        <text x="60" y="115" text-anchor="middle" font-size="10" fill="#64748b">1 điểm chung</text>
      </g>
      <g transform="translate(350, 20)">
        <text x="60" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#7c3aed">3. Chéo nhau</text>
        <line x1="10" y1="50" x2="110" y2="50" stroke="#7c3aed" stroke-width="2"/>
        <line x1="45" y1="30" x2="75" y2="100" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,2"/>
        <text x="60" y="115" text-anchor="middle" font-size="10" fill="#64748b">Không cùng mp</text>
      </g>
      <g transform="translate(510, 20)">
        <text x="60" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309">4. Trùng nhau</text>
        <line x1="10" y1="65" x2="110" y2="65" stroke="#b45309" stroke-width="3"/>
        <text x="60" y="115" text-anchor="middle" font-size="10" fill="#64748b">Vô số điểm chung</text>
      </g>
    </svg>
  </div>
  `,

  // BÀI 16: CÔNG THỨC TÍNH GÓC - EMBED SVG7 TRỰC TIẾP
  diagram_bai16: `
  <div class="my-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
    <div class="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide mb-3 flex items-center gap-2">
      <span>📐</span> Hình minh họa Bài 16: Ba Công Thức Tính Góc (Đường - Đường: cos, Đường - Mặt: sin, Mặt - Mặt: cos)
    </div>
    ${svgs.svg7_spatial_angles}
  </div>
  `,

  // BÀI 17: MẶT CẦU & VỊ TRÍ TƯƠNG ĐỐI
  diagram_bai17: `
  <div class="my-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
    <div class="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide mb-3 flex items-center gap-2">
      <span>🌐</span> Hình minh họa Bài 17: Mặt Cầu Tâm I(a; b; c) Bán Kính R & Mặt Phẳng Cắt Theo Đường Tròn r
    </div>
    <svg viewBox="0 0 680 220" class="w-full h-auto max-w-xl mx-auto rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800" xmlns="http://www.w3.org/2000/svg">
      <circle cx="250" cy="110" r="80" fill="#f0f9ff" class="dark:fill-slate-800" stroke="#0284c7" stroke-width="2"/>
      <ellipse cx="250" cy="110" rx="80" ry="25" fill="none" stroke="#0284c7" stroke-width="1" stroke-dasharray="4,3"/>
      <circle cx="250" cy="110" r="4" fill="#dc2626"/>
      <text x="240" y="105" font-size="12" font-weight="bold" fill="#dc2626">I(a; b; c)</text>
      <line x1="250" y1="110" x2="330" y2="110" stroke="#0284c7" stroke-width="2"/>
      <text x="285" y="100" font-size="11" font-weight="bold" fill="#0284c7">R</text>

      <line x1="250" y1="110" x2="250" y2="50" stroke="#ef4444" stroke-width="2" stroke-dasharray="3,3"/>
      <circle cx="250" cy="50" r="3.5" fill="#ef4444"/>
      <text x="235" y="75" font-size="11" font-weight="bold" fill="#ef4444">d</text>
      <text x="260" y="45" font-size="11" font-weight="bold" fill="#ef4444">H (Tâm đường tròn)</text>
      <ellipse cx="250" cy="50" rx="55" ry="16" fill="#bae6fd" fill-opacity="0.5" stroke="#0284c7" stroke-width="2"/>
      <line x1="250" y1="50" x2="305" y2="50" stroke="#059669" stroke-width="2"/>
      <text x="280" y="42" font-size="10" font-weight="bold" fill="#059669">r</text>

      <rect x="420" y="40" width="230" height="120" rx="6" fill="#f8fafc" class="dark:fill-slate-800" stroke="#cbd5e1" stroke-width="1"/>
      <text x="435" y="65" font-size="11" font-weight="bold" fill="#1e293b" class="dark:fill-slate-100">• (x - a)² + (y - b)² + (z - c)² = R²</text>
      <text x="435" y="90" font-size="11" font-weight="bold" fill="#ef4444">• d = d(I, P)</text>
      <text x="435" y="115" font-size="11" font-weight="bold" fill="#059669">• d < R: Cắt theo đường tròn</text>
      <text x="445" y="135" font-size="11" font-weight="bold" fill="#059669">bán kính r = √(R² - d²)</text>
    </svg>
  </div>
  `,

  // BÀI 18: XÁC SUẤT CÓ ĐIỀU KIỆN
  diagram_bai18: `
  <div class="my-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
    <div class="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide mb-3 flex items-center gap-2">
      <span>🎲</span> Hình minh họa Bài 18: Biểu Đồ Venn Thu Hẹp Không Gian Mẫu Khi Biến Cố B Đã Xảy Ra
    </div>
    <svg viewBox="0 0 680 180" class="w-full h-auto max-w-xl mx-auto rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="20" width="340" height="140" rx="8" fill="#f8fafc" class="dark:fill-slate-800" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="55" y="40" font-size="13" font-weight="bold" fill="#64748b">Ω (Không gian mẫu ban đầu)</text>
      
      <ellipse cx="230" cy="95" rx="100" ry="50" fill="#dbeafe" class="dark:fill-blue-950/40" stroke="#3b82f6" stroke-width="2"/>
      <text x="290" y="80" font-size="12" font-weight="bold" fill="#2563eb">B</text>

      <ellipse cx="140" cy="95" rx="70" ry="45" fill="none" stroke="#ef4444" stroke-width="2"/>
      <text x="90" y="80" font-size="12" font-weight="bold" fill="#ef4444">A</text>

      <path d="M 175 60 A 70 45 0 0 1 175 130 A 100 50 0 0 1 175 60 Z" fill="#c084fc" fill-opacity="0.7"/>
      <text x="175" y="100" text-anchor="middle" font-size="11" font-weight="extrabold" fill="#581c87">A ∩ B</text>

      <rect x="410" y="30" width="240" height="110" rx="6" fill="#f5f3ff" class="dark:fill-purple-950/40" stroke="#c084fc" stroke-width="1"/>
      <text x="530" y="60" text-anchor="middle" font-size="13" font-weight="extrabold" fill="#7c3aed">P(A | B) = P(A ∩ B) / P(B)</text>
      <text x="425" y="90" font-size="11" fill="#475569" class="dark:fill-slate-300">• B đã xảy ra → B thành không gian mẫu</text>
      <text x="425" y="115" font-size="11" fill="#475569" class="dark:fill-slate-300">• Phần A xảy ra trong B là A ∩ B</text>
    </svg>
  </div>
  `,

  // BÀI 19: XÁC SUẤT TOÀN PHẦN VÀ BAYES - EMBED SVG8 TRỰC TIẾP
  diagram_bai19: `
  <div class="my-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
    <div class="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide mb-3 flex items-center gap-2">
      <span>🌳</span> Hình minh họa Bài 19: Sơ Đồ Cây Xác Suất Toàn Phần & Công Thức Bayes Đảo Chiều
    </div>
    ${svgs.svg8_bayes_probability_tree}
  </div>
  `
};
