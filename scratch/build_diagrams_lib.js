// scratch/build_diagrams_lib.js
const fs = require('fs');

const diagrams = {};

// Helper wrapper for diagrams
function wrapDiagram(title, sub, svgContent) {
  return `
    <div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-xs">
        <span class="font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
          <i class="fa-solid fa-chart-line"></i> ${title}
        </span>
        <span class="text-slate-400 font-medium">${sub}</span>
      </div>
      <div class="w-full overflow-x-auto flex justify-center py-2">
        ${svgContent.trim()}
      </div>
    </div>
  `;
}

// ==========================================
// CHƯƠNG 1: MỞ ĐẦU & ĐO LƯỜNG
// ==========================================

// Bài 1: Quy trình phương pháp thực nghiệm trong Vật lí
diagrams[1] = wrapDiagram(
  'Sơ đồ quy trình phương pháp thực nghiệm nghiên cứu Vật lí',
  'Phương pháp khoa học',
  `<svg viewBox="0 0 740 160" class="w-full max-w-[740px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrB1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#38bdf8" />
      </marker>
    </defs>
    <!-- Bước 1 -->
    <g transform="translate(15, 20)">
      <rect width="125" height="110" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
      <rect width="125" height="28" rx="12" fill="#0284c7"/>
      <text x="62" y="19" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">1. QUAN SÁT</text>
      <text x="10" y="55" fill="#94a3b8" font-size="9">• Phát hiện hiện tượng</text>
      <text x="10" y="75" fill="#94a3b8" font-size="9">• Thu thập thông tin</text>
      <text x="10" y="95" fill="#38bdf8" font-size="9">Xác định vấn đề</text>
    </g>
    <line x1="145" y1="75" x2="160" y2="75" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrB1)"/>
    <!-- Bước 2 -->
    <g transform="translate(165, 20)">
      <rect width="125" height="110" rx="12" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
      <rect width="125" height="28" rx="12" fill="#7e22ce"/>
      <text x="62" y="19" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">2. GIẢ THUYẾT</text>
      <text x="10" y="55" fill="#94a3b8" font-size="9">• Suy luận nguyên nhân</text>
      <text x="10" y="75" fill="#94a3b8" font-size="9">• Đề xuất mô hình</text>
      <text x="10" y="95" fill="#c084fc" font-size="9">Dự đoán kết quả</text>
    </g>
    <line x1="295" y1="75" x2="310" y2="75" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrB1)"/>
    <!-- Bước 3 -->
    <g transform="translate(315, 20)">
      <rect width="125" height="110" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
      <rect width="125" height="28" rx="12" fill="#1d4ed8"/>
      <text x="62" y="19" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">3. THÍ NGHIỆM</text>
      <text x="10" y="55" fill="#94a3b8" font-size="9">• Thiết kế bố trí mẫu</text>
      <text x="10" y="75" fill="#94a3b8" font-size="9">• Bố trí dụng cụ đo</text>
      <text x="10" y="95" fill="#60a5fa" font-size="9">Thu thập số liệu</text>
    </g>
    <line x1="445" y1="75" x2="460" y2="75" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrB1)"/>
    <!-- Bước 4 -->
    <g transform="translate(465, 20)">
      <rect width="125" height="110" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
      <rect width="125" height="28" rx="12" fill="#047857"/>
      <text x="62" y="19" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">4. PHÂN TÍCH</text>
      <text x="10" y="55" fill="#94a3b8" font-size="9">• Xử lí sai số đo</text>
      <text x="10" y="75" fill="#94a3b8" font-size="9">• Vẽ đồ thị liên hệ</text>
      <text x="10" y="95" fill="#34d399" font-size="9">Đối chiếu giả thuyết</text>
    </g>
    <line x1="595" y1="75" x2="610" y2="75" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrB1)"/>
    <!-- Bước 5 -->
    <g transform="translate(615, 20)">
      <rect width="115" height="110" rx="12" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
      <rect width="115" height="28" rx="12" fill="#b45309"/>
      <text x="57" y="19" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">5. KẾT LUẬN</text>
      <text x="8" y="55" fill="#94a3b8" font-size="9">• Đúng: Thành quy luật</text>
      <text x="8" y="75" fill="#94a3b8" font-size="9">• Sai: Sửa giả thuyết</text>
      <text x="8" y="95" fill="#fbbf24" font-size="9">Báo cáo khoa học</text>
    </g>
  </svg>`
);

// Bài 2: Biển báo an toàn trong phòng thí nghiệm
diagrams[2] = wrapDiagram(
  'Hệ thống biển cảnh báo an toàn trong phòng thực hành Vật lí',
  'Quy chuẩn an toàn',
  `<svg viewBox="0 0 720 160" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <!-- Cảnh báo 1: Điện cao áp -->
    <g transform="translate(20, 15)">
      <rect width="155" height="130" rx="12" fill="#1e293b" stroke="#eab308" stroke-width="2"/>
      <polygon points="77,25 95,55 60,55" fill="#eab308"/>
      <path d="M 77 30 L 73 45 L 80 45 L 75 53" stroke="#0f172a" stroke-width="2" fill="none"/>
      <text x="77" y="75" fill="#facc15" font-size="11" font-weight="bold" text-anchor="middle">ĐIỆN CAO ÁP</text>
      <text x="10" y="95" fill="#94a3b8" font-size="9">• Nguy cơ điện giật</text>
      <text x="10" y="112" fill="#94a3b8" font-size="9">• Kiểm tra trước khi bật</text>
    </g>
    <!-- Cảnh báo 2: Laser -->
    <g transform="translate(195, 15)">
      <rect width="155" height="130" rx="12" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
      <circle cx="77" cy="40" r="16" fill="#ef4444" opacity="0.2"/>
      <circle cx="77" cy="40" r="6" fill="#ef4444"/>
      <line x1="50" y1="40" x2="105" y2="40" stroke="#ef4444" stroke-width="2" stroke-dasharray="2,2"/>
      <text x="77" y="75" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">BỨC XẠ LASER</text>
      <text x="10" y="95" fill="#94a3b8" font-size="9">• Tổn thương võng mạc</text>
      <text x="10" y="112" fill="#94a3b8" font-size="9">• Không nhìn thẳng vào tia</text>
    </g>
    <!-- Cảnh báo 3: Nhiệt & Cháy nổ -->
    <g transform="translate(370, 15)">
      <rect width="155" height="130" rx="12" fill="#1e293b" stroke="#f97316" stroke-width="2"/>
      <path d="M 77 25 Q 85 40 77 55 Q 70 45 77 25 Z" fill="#f97316"/>
      <text x="77" y="75" fill="#fb923c" font-size="11" font-weight="bold" text-anchor="middle">NGUY CƠ CHÁY NỔ</text>
      <text x="10" y="95" fill="#94a3b8" font-size="9">• Dễ bắt lửa từ nhiệt</text>
      <text x="10" y="112" fill="#94a3b8" font-size="9">• Để xa nguồn phát nhiệt</text>
    </g>
    <!-- Cảnh báo 4: Thủy tinh & Hóa chất -->
    <g transform="translate(545, 15)">
      <rect width="155" height="130" rx="12" fill="#1e293b" stroke="#06b6d4" stroke-width="2"/>
      <path d="M 70 25 L 85 25 L 90 52 L 65 52 Z" fill="none" stroke="#06b6d4" stroke-width="2"/>
      <line x1="68" y1="42" x2="87" y2="42" stroke="#06b6d4" stroke-width="1.5"/>
      <text x="77" y="75" fill="#22d3ee" font-size="11" font-weight="bold" text-anchor="middle">DỤNG CỤ DỄ VỠ</text>
      <text x="10" y="95" fill="#94a3b8" font-size="9">• Ống nghiệm thủy tinh</text>
      <text x="10" y="112" fill="#94a3b8" font-size="9">• Đeo kính và găng bảo hộ</text>
    </g>
  </svg>`
);

// Bài 3: Biểu diễn khoảng sai số của kết quả đo
diagrams[3] = wrapDiagram(
  'Biểu diễn sai số phép đo và khoảng tin cậy giá trị thực',
  'Xử lí phép đo lặp',
  `<svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrB3" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#94a3b8" />
      </marker>
    </defs>
    <!-- Trục số -->
    <line x1="60" y1="90" x2="660" y2="90" stroke="#64748b" stroke-width="2" marker-end="url(#arrB3)"/>
    <text x="670" y="94" fill="#94a3b8" font-size="11">A</text>
    <!-- Vùng sai số -->
    <rect x="230" y="60" width="260" height="60" rx="8" fill="#3b82f6" fill-opacity="0.15" stroke="#3b82f6" stroke-dasharray="4,4"/>
    <!-- Điểm A_tb -->
    <circle cx="360" cy="90" r="6" fill="#38bdf8"/>
    <line x1="360" y1="40" x2="360" y2="130" stroke="#38bdf8" stroke-width="2"/>
    <text x="360" y="30" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">Giá trị trung bình Ā</text>
    <!-- Mốc trái: A_tb - delta A -->
    <line x1="230" y1="70" x2="230" y2="110" stroke="#ef4444" stroke-width="2"/>
    <text x="230" y="145" fill="#f87171" font-size="11" text-anchor="middle">Ā - ΔA</text>
    <!-- Mốc phải: A_tb + delta A -->
    <line x1="490" y1="70" x2="490" y2="110" stroke="#10b981" stroke-width="2"/>
    <text x="490" y="145" fill="#34d399" font-size="11" text-anchor="middle">Ā + ΔA</text>
    <!-- Mũi tên khoảng sai số -->
    <line x1="230" y1="65" x2="360" y2="65" stroke="#f87171" stroke-width="1.5"/>
    <text x="295" y="58" fill="#f87171" font-size="10" text-anchor="middle">ΔA</text>
    <line x1="360" y1="65" x2="490" y2="65" stroke="#34d399" stroke-width="1.5"/>
    <text x="425" y="58" fill="#34d399" font-size="10" text-anchor="middle">ΔA</text>
    <text x="360" y="165" fill="#cbd5e1" font-size="10" text-anchor="middle">Khoảng tin cậy: A ∈ [Ā - ΔA; Ā + ΔA] với sai số tỉ đối δA = (ΔA / Ā) × 100%</text>
  </svg>`
);

// ==========================================
// CHƯƠNG 2: ĐỘNG HỌC CHẤT ĐIỂM
// ==========================================

// Bài 4: So sánh Quãng đường s vs Vectơ Độ dịch chuyển d
diagrams[4] = wrapDiagram(
  'Phân biệt Quãng đường đi được s và Vectơ Độ dịch chuyển d',
  'Khái niệm động học',
  `<svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrB4" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <path d="M 0 0 L 7 3.5 L 0 7 z" fill="#38bdf8" />
      </marker>
    </defs>
    <!-- Điểm đầu A -->
    <circle cx="100" cy="110" r="7" fill="#10b981"/>
    <text x="100" y="135" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">Vị trí đầu (A)</text>
    <!-- Điểm cuối B -->
    <circle cx="580" cy="70" r="7" fill="#ef4444"/>
    <text x="580" y="95" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">Vị trí cuối (B)</text>
    <!-- Quỹ đạo cong - Quãng đường s -->
    <path d="M 100 110 C 180 20, 260 160, 380 40 S 500 140, 580 70" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="5,4"/>
    <text x="320" y="50" fill="#fbbf24" font-size="11" font-weight="bold">Quãng đường s (vô hướng, s ≥ 0)</text>
    <!-- Vectơ độ dịch chuyển d -->
    <line x1="100" y1="110" x2="570" y2="71" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrB4)"/>
    <text x="350" y="115" fill="#38bdf8" font-size="12" font-weight="bold">Vectơ độ dịch chuyển d⃗</text>
    <text x="360" y="160" fill="#94a3b8" font-size="10" text-anchor="middle">Độ dịch chuyển là vectơ nối từ điểm đầu đến điểm cuối; khi chuyển động thẳng một chiều không đổi: s = |d|</text>
  </svg>`
);

// Bài 6: Đồ thị độ dịch chuyển - thời gian (d - t)
diagrams[6] = wrapDiagram(
  'Đồ thị độ dịch chuyển – thời gian (d - t) & Vận tốc v',
  'Phân tích đồ thị',
  `<svg viewBox="0 0 720 200" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrB6" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#94a3b8" />
      </marker>
    </defs>
    <!-- Trục tọa độ -->
    <line x1="70" y1="160" x2="650" y2="160" stroke="#64748b" stroke-width="2" marker-end="url(#arrB6)"/>
    <line x1="70" y1="160" x2="70" y2="30" stroke="#64748b" stroke-width="2" marker-end="url(#arrB6)"/>
    <text x="660" y="164" fill="#94a3b8" font-size="11">t (s)</text>
    <text x="65" y="20" fill="#94a3b8" font-size="11">d (m)</text>
    <!-- Giai đoạn 1: Dốc dương (v > 0) -->
    <line x1="70" y1="160" x2="250" y2="60" stroke="#10b981" stroke-width="3"/>
    <text x="140" y="100" fill="#34d399" font-size="10" font-weight="bold">Dốc dương (v₁ > 0)</text>
    <!-- Giai đoạn 2: Nằm ngang (v = 0) -->
    <line x1="250" y1="60" x2="430" y2="60" stroke="#f59e0b" stroke-width="3"/>
    <text x="340" y="50" fill="#fbbf24" font-size="10" font-weight="bold" text-anchor="middle">Nằm ngang (v₂ = 0: đứng yên)</text>
    <!-- Giai đoạn 3: Dốc âm (v < 0) -->
    <line x1="430" y1="60" x2="600" y2="160" stroke="#ef4444" stroke-width="3"/>
    <text x="525" y="100" fill="#f87171" font-size="10" font-weight="bold">Dốc âm (v₃ < 0)</text>
    <!-- Chú thích chân -->
    <text x="360" y="185" fill="#94a3b8" font-size="10" text-anchor="middle">Hệ số góc của đường biểu diễn: v = Δd / Δt cho biết vận tốc của chuyển động</text>
  </svg>`
);

// Bài 7: Tổng hợp vectơ vận tốc - Thuyền qua sông
diagrams[7] = wrapDiagram(
  'Tổng hợp vận tốc: Quy tắc cộng vectơ v⃗₁₃ = v⃗₁₂ + v⃗₂₃',
  'Tính tương đối của chuyển động',
  `<svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrB7" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#38bdf8" />
      </marker>
      <marker id="arrB7g" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#10b981" />
      </marker>
      <marker id="arrB7y" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#f59e0b" />
      </marker>
    </defs>
    <!-- Hai bờ sông -->
    <line x1="80" y1="40" x2="640" y2="40" stroke="#64748b" stroke-width="2" stroke-dasharray="4,4"/>
    <text x="650" y="44" fill="#64748b" font-size="10">Bờ bên kia (3)</text>
    <line x1="80" y1="150" x2="640" y2="150" stroke="#64748b" stroke-width="2"/>
    <text x="650" y="154" fill="#64748b" font-size="10">Bờ xuất phát</text>
    <!-- Thuyền xuất phát tại A -->
    <circle cx="200" cy="150" r="5" fill="#38bdf8"/>
    <text x="180" y="165" fill="#cbd5e1" font-size="11">A (Thuyền 1)</text>
    <!-- v12: Thuyền so với nước (hướng thẳng đứng sang bờ) -->
    <line x1="200" y1="150" x2="200" y2="55" stroke="#10b981" stroke-width="3" marker-end="url(#arrB7g)"/>
    <text x="140" y="100" fill="#34d399" font-size="11" font-weight="bold">v⃗₁₂ (thuyền/nước)</text>
    <!-- v23: Nước chảy so với bờ (hướng ngang) -->
    <line x1="200" y1="150" x2="350" y2="150" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrB7y)"/>
    <text x="270" y="170" fill="#fbbf24" font-size="11" font-weight="bold">v⃗₂₃ (nước/bờ)</text>
    <!-- Hình bình hành cạnh đứt -->
    <line x1="200" y1="50" x2="350" y2="50" stroke="#475569" stroke-width="1.5" stroke-dasharray="3,3"/>
    <line x1="350" y1="150" x2="350" y2="50" stroke="#475569" stroke-width="1.5" stroke-dasharray="3,3"/>
    <!-- v13: Thuyền so với bờ (đường chéo) -->
    <line x1="200" y1="150" x2="345" y2="55" stroke="#38bdf8" stroke-width="3.5" marker-end="url(#arrB7)"/>
    <text x="290" y="90" fill="#38bdf8" font-size="12" font-weight="black">v⃗₁₃ = v⃗₁₂ + v⃗₂₃</text>
    <text x="500" y="100" fill="#94a3b8" font-size="10">Khi v⃗₁₂ ⊥ v⃗₂₃:<tspan x="500" dy="18" fill="#38bdf8">v₁₃ = √(v₁₂² + v₂₃²)</tspan></text>
  </svg>`
);

// Bài 8: Đồ thị vận tốc - thời gian (v - t) & Độ dịch chuyển diện tích
diagrams[8] = wrapDiagram(
  'Đồ thị vận tốc – thời gian (v - t) & Ý nghĩa diện tích độ dịch chuyển',
  'Chuyển động thẳng biến đổi đều',
  `<svg viewBox="0 0 720 220" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrB8" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#38bdf8" />
      </marker>
      <linearGradient id="areaGradB8" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#0284c7" stop-opacity="0.6"/>
        <stop offset="100%" stop-color="#0284c7" stop-opacity="0.1"/>
      </linearGradient>
    </defs>
    <!-- Trục tọa độ -->
    <line x1="80" y1="180" x2="660" y2="180" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrB8)"/>
    <text x="670" y="185" fill="#38bdf8" font-size="12" font-weight="bold">t (s)</text>
    <line x1="80" y1="180" x2="80" y2="25" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrB8)"/>
    <text x="75" y="18" fill="#38bdf8" font-size="12" font-weight="bold">v (m/s)</text>
    <text x="65" y="195" fill="#64748b" font-size="12">O</text>
    <!-- Diện tích hình thang -->
    <polygon points="80,130 520,50 520,180 80,180" fill="url(#areaGradB8)" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="4,4"/>
    <text x="290" y="135" fill="#e0f2fe" font-size="13" font-weight="bold" text-anchor="middle">Diện tích S = Độ dịch chuyển d</text>
    <text x="290" y="155" fill="#7dd3fc" font-size="11" text-anchor="middle">d = v₀t + ½at² (Hình thang O-v₀-A-t)</text>
    <!-- Đường biểu diễn v = v0 + at -->
    <line x1="80" y1="130" x2="520" y2="50" stroke="#f59e0b" stroke-width="3.5"/>
    <circle cx="80" cy="130" r="4.5" fill="#f59e0b"/>
    <text x="50" y="135" fill="#f59e0b" font-size="11" font-weight="bold">v₀</text>
    <circle cx="520" cy="50" r="4.5" fill="#f59e0b"/>
    <line x1="520" y1="50" x2="520" y2="180" stroke="#64748b" stroke-dasharray="3,3"/>
    <text x="520" y="198" fill="#94a3b8" font-size="11" text-anchor="middle">t</text>
    <line x1="80" y1="50" x2="520" y2="50" stroke="#64748b" stroke-dasharray="3,3"/>
    <text x="50" y="55" fill="#f59e0b" font-size="11" font-weight="bold">v</text>
  </svg>`
);

// Bài 10: Rơi tự do
diagrams[10] = wrapDiagram(
  'Quy luật rơi tự do: Quãng đường tăng theo tỉ lệ bình phương thời gian',
  'Gia tốc trọng trường g',
  `<svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <!-- Mốc thả t=0 -->
    <circle cx="150" cy="30" r="8" fill="#f59e0b"/>
    <text x="180" y="35" fill="#fbbf24" font-size="11">t = 0 (s = 0, v = 0)</text>
    <!-- t=1s -->
    <line x1="150" y1="38" x2="150" y2="60" stroke="#475569" stroke-width="1.5" stroke-dasharray="3,3"/>
    <circle cx="150" cy="60" r="8" fill="#38bdf8"/>
    <text x="180" y="65" fill="#94a3b8" font-size="11">t = 1s: <tspan fill="#38bdf8">s₁ = ½g(1)² = 1 đơn vị</tspan></text>
    <!-- t=2s -->
    <line x1="150" y1="68" x2="150" y2="110" stroke="#475569" stroke-width="1.5" stroke-dasharray="3,3"/>
    <circle cx="150" cy="110" r="8" fill="#38bdf8"/>
    <text x="180" y="115" fill="#94a3b8" font-size="11">t = 2s: <tspan fill="#38bdf8">s₂ = ½g(2)² = 4 đơn vị</tspan></text>
    <!-- t=3s -->
    <line x1="150" y1="118" x2="150" y2="160" stroke="#475569" stroke-width="1.5" stroke-dasharray="3,3"/>
    <circle cx="150" cy="160" r="8" fill="#38bdf8"/>
    <text x="180" y="165" fill="#94a3b8" font-size="11">t = 3s: <tspan fill="#38bdf8">s₃ = ½g(3)² = 9 đơn vị</tspan></text>
    <!-- Bảng công thức bên phải -->
    <rect x="420" y="25" width="260" height="135" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="550" y="52" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">HỆ THỨC RƠI TỰ DO</text>
    <text x="440" y="80" fill="#cbd5e1" font-size="11">• Vận tốc: <tspan fill="#f59e0b">v = g · t</tspan></text>
    <text x="440" y="105" fill="#cbd5e1" font-size="11">• Quãng đường: <tspan fill="#f59e0b">s = ½ g t²</tspan></text>
    <text x="440" y="130" fill="#cbd5e1" font-size="11">• Liên hệ: <tspan fill="#f59e0b">v² = 2gs ⟹ v = √(2gs)</tspan></text>
  </svg>`
);

// Bài 12: Chuyển động ném ngang
diagrams[12] = wrapDiagram(
  'Mô hình chuyển động ném ngang trong trọng trường',
  'Phân tích hai trục Ox và Oy',
  `<svg viewBox="0 0 720 220" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrB12" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#38bdf8" />
      </marker>
    </defs>
    <!-- Trục tọa độ -->
    <line x1="70" y1="40" x2="650" y2="40" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrB12)"/>
    <text x="660" y="45" fill="#38bdf8" font-size="11" font-weight="bold">x (m) [Chuyển động thẳng đều: v_x = v₀]</text>
    <line x1="70" y1="40" x2="70" y2="190" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrB12)"/>
    <text x="75" y="205" fill="#38bdf8" font-size="11" font-weight="bold">y (m) [Rơi tự do: v_y = gt]</text>
    <!-- Điểm ném O -->
    <circle cx="70" cy="40" r="6" fill="#f59e0b"/>
    <text x="50" y="40" fill="#f59e0b" font-size="12" font-weight="bold">O</text>
    <!-- Vectơ v0 -->
    <line x1="70" y1="40" x2="160" y2="40" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrB12)"/>
    <text x="110" y="30" fill="#fbbf24" font-size="11" font-weight="bold">v⃗₀</text>
    <!-- Quỹ đạo Parabol -->
    <path d="M 70 40 Q 280 40 540 180" fill="none" stroke="#38bdf8" stroke-width="3"/>
    <text x="320" y="100" fill="#38bdf8" font-size="11" font-weight="bold">Quỹ đạo: y = (g / 2v₀²) x²</text>
    <!-- Điểm chạm đất -->
    <circle cx="540" cy="180" r="5" fill="#ef4444"/>
    <line x1="540" y1="40" x2="540" y2="180" stroke="#64748b" stroke-dasharray="3,3"/>
    <text x="540" y="30" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">Tầm xa L = v₀√(2h/g)</text>
  </svg>`
);

// ==========================================
// CHƯƠNG 3: ĐỘNG LỰC HỌC CHẤT ĐIỂM
// ==========================================

// Bài 13: Tổng hợp hai lực đồng quy
diagrams[13] = wrapDiagram(
  'Quy tắc hình bình hành: Tổng hợp hai lực đồng quy',
  'Cộng vectơ lực F⃗ = F⃗₁ + F⃗₂',
  `<svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrB13" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#38bdf8" />
      </marker>
    </defs>
    <!-- Điểm đặt O -->
    <circle cx="180" cy="130" r="6" fill="#38bdf8"/>
    <text x="160" y="135" fill="#38bdf8" font-size="12" font-weight="bold">O</text>
    <!-- Lực F1 -->
    <line x1="180" y1="130" x2="380" y2="130" stroke="#10b981" stroke-width="3" marker-end="url(#arrB13)"/>
    <text x="280" y="150" fill="#34d399" font-size="11" font-weight="bold">F⃗₁</text>
    <!-- Lực F2 -->
    <line x1="180" y1="130" x2="280" y2="40" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrB13)"/>
    <text x="215" y="75" fill="#fbbf24" font-size="11" font-weight="bold">F⃗₂</text>
    <!-- Cạnh đứt hình bình hành -->
    <line x1="380" y1="130" x2="480" y2="40" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4"/>
    <line x1="280" y1="40" x2="480" y2="40" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4"/>
    <!-- Hợp lực F (đường chéo) -->
    <line x1="180" y1="130" x2="475" y2="44" stroke="#ef4444" stroke-width="3.5" marker-end="url(#arrB13)"/>
    <text x="360" y="70" fill="#f87171" font-size="12" font-weight="black">Hợp lực F⃗ = F⃗₁ + F⃗₂</text>
    <!-- Khung chú thích -->
    <rect x="520" y="30" width="180" height="120" rx="10" fill="#1e293b" stroke="#475569"/>
    <text x="535" y="55" fill="#cbd5e1" font-size="10">Độ lớn hợp lực:</text>
    <text x="535" y="80" fill="#f87171" font-size="10">F² = F₁² + F₂²</text>
    <text x="555" y="100" fill="#f87171" font-size="10">+ 2F₁F₂ cos α</text>
    <text x="535" y="130" fill="#94a3b8" font-size="10">|F₁ - F₂| ≤ F ≤ F₁ + F₂</text>
  </svg>`
);

// Bài 15: Phân tích lực trên mặt phẳng nghiêng
diagrams[15] = wrapDiagram(
  'Phân tích lực tác dụng lên vật trượt trên mặt phẳng nghiêng',
  'Định luật II Newton',
  `<svg viewBox="0 0 720 230" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrB15" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#f87171" />
      </marker>
    </defs>
    <!-- Mặt phẳng nghiêng góc alpha -->
    <polygon points="100,190 560,190 560,40" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
    <path d="M 170 190 A 70 70 0 0 0 160 167" fill="none" stroke="#f59e0b" stroke-width="2"/>
    <text x="180" y="180" fill="#fbbf24" font-size="12" font-weight="bold">α</text>
    <!-- Vật m trượt trên dốc -->
    <g transform="translate(340, 95) rotate(-18)">
      <rect x="-25" y="-20" width="50" height="40" rx="4" fill="#3b82f6" stroke="#93c5fd" stroke-width="2"/>
      <circle cx="0" cy="0" r="3" fill="#ffffff"/>
      <!-- Lực phản lực N vuông góc mặt dốc -->
      <line x1="0" y1="0" x2="0" y2="-65" stroke="#34d399" stroke-width="2.5" marker-end="url(#arrB15)"/>
      <text x="8" y="-55" fill="#34d399" font-size="11" font-weight="bold">N⃗</text>
      <!-- Lực ma sát Fms ngược chiều chuyển động -->
      <line x1="0" y1="20" x2="50" y2="20" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#arrB15)"/>
      <text x="40" y="38" fill="#fbbf24" font-size="11" font-weight="bold">F⃗_ms</text>
    </g>
    <!-- Trọng lực P thẳng đứng xuống -->
    <line x1="340" y1="95" x2="340" y2="185" stroke="#f87171" stroke-width="3" marker-end="url(#arrB15)"/>
    <text x="350" y="160" fill="#f87171" font-size="12" font-weight="bold">P⃗ = mg⃗</text>
    <!-- Công thức gia tốc bên phải -->
    <rect x="580" y="45" width="130" height="110" rx="10" fill="#1e293b" stroke="#475569"/>
    <text x="590" y="70" fill="#38bdf8" font-size="10" font-weight="bold">Gia tốc trượt xuống:</text>
    <text x="590" y="95" fill="#facc15" font-size="10">a = g(sinα - μ·cosα)</text>
    <text x="590" y="125" fill="#94a3b8" font-size="9">N = P_y = mg·cosα</text>
    <text x="590" y="142" fill="#94a3b8" font-size="9">P_x = mg·sinα</text>
  </svg>`
);

// Bài 16: Định luật III Newton
diagrams[16] = wrapDiagram(
  'Định luật III Newton: Cặp lực và phản lực tương tác trực đối',
  'Tương tác hai vật F⃗_AB = -F⃗_BA',
  `<svg viewBox="0 0 720 160" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrB16a" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#38bdf8" />
      </marker>
      <marker id="arrB16b" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#f87171" />
      </marker>
    </defs>
    <!-- Vật A -->
    <rect x="180" y="45" width="90" height="65" rx="8" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
    <text x="225" y="82" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">VẬT A</text>
    <!-- Vật B -->
    <rect x="450" y="45" width="90" height="65" rx="8" fill="#881337" stroke="#f43f5e" stroke-width="2"/>
    <text x="495" y="82" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">VẬT B</text>
    <!-- Lực F_BA (B tác dụng lên A, hướng sang trái) -->
    <line x1="270" y1="77" x2="140" y2="77" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrB16a)"/>
    <text x="145" y="65" fill="#38bdf8" font-size="12" font-weight="bold">F⃗_BA</text>
    <!-- Lực F_AB (A tác dụng lên B, hướng sang phải) -->
    <line x1="450" y1="77" x2="580" y2="77" stroke="#f87171" stroke-width="3" marker-end="url(#arrB16b)"/>
    <text x="560" y="65" fill="#f87171" font-size="12" font-weight="bold">F⃗_AB</text>
    <!-- Chú thích nguyên lý -->
    <text x="360" y="135" fill="#cbd5e1" font-size="11" text-anchor="middle">Đặc điểm: Cùng giá, cùng độ lớn (|F_AB| = |F_BA|), ngược chiều, đặt vào 2 vật khác nhau nên không triệt tiêu.</text>
  </svg>`
);

// Bài 18: Đồ thị lực ma sát
diagrams[18] = wrapDiagram(
  'Đặc tính lực ma sát nghỉ cực đại và lực ma sát trượt',
  'Lực ma sát F_ms',
  `<svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrB18" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#94a3b8" />
      </marker>
    </defs>
    <!-- Trục tọa độ -->
    <line x1="80" y1="140" x2="620" y2="140" stroke="#64748b" stroke-width="2" marker-end="url(#arrB18)"/>
    <text x="630" y="145" fill="#94a3b8" font-size="11">Lực kéo F_k</text>
    <line x1="80" y1="140" x2="80" y2="25" stroke="#64748b" stroke-width="2" marker-end="url(#arrB18)"/>
    <text x="75" y="18" fill="#94a3b8" font-size="11">F_ms</text>
    <!-- Đường ma sát nghỉ: nghiêng 45 độ Fms = Fk -->
    <line x1="80" y1="140" x2="280" y2="40" stroke="#10b981" stroke-width="3"/>
    <circle cx="280" cy="40" r="5" fill="#f59e0b"/>
    <text x="180" y="80" fill="#34d399" font-size="11" font-weight="bold">Ma sát nghỉ (F_msn = F_k)</text>
    <text x="280" y="25" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">F_msn(max)</text>
    <!-- Giảm nhẹ và chuyển sang ma sát trượt hằng số -->
    <line x1="280" y1="40" x2="310" y2="55" stroke="#ef4444" stroke-width="3"/>
    <line x1="310" y1="55" x2="580" y2="55" stroke="#ef4444" stroke-width="3"/>
    <text x="440" y="45" fill="#f87171" font-size="11" font-weight="bold">Ma sát trượt không đổi: F_mst = μ·N</text>
    <text x="360" y="165" fill="#94a3b8" font-size="10" text-anchor="middle">Lực ma sát nghỉ cực đại luôn lớn hơn lực ma sát trượt: F_msn(max) > F_mst</text>
  </svg>`
);

// Bài 21: Moment lực & Quy tắc Đòn bẩy
diagrams[21] = wrapDiagram(
  'Quy tắc moment lực: Cân bằng của đòn bẩy quanh trục quay',
  'Điều kiện cân bằng tổng quát M = F · d',
  `<svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrB21" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#f59e0b" />
      </marker>
    </defs>
    <!-- Trục quay O (tam giác đỡ) -->
    <polygon points="360,110 345,145 375,145" fill="#64748b"/>
    <circle cx="360" cy="110" r="4" fill="#38bdf8"/>
    <text x="360" y="160" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Trục quay O</text>
    <!-- Thanh đòn bẩy nằm ngang -->
    <rect x="120" y="105" width="480" height="10" rx="3" fill="#cbd5e1"/>
    <!-- Lực F1 bên trái hướng xuống -->
    <line x1="180" y1="110" x2="180" y2="175" stroke="#3b82f6" stroke-width="3" marker-end="url(#arrB21)"/>
    <text x="180" y="190" fill="#60a5fa" font-size="11" font-weight="bold" text-anchor="middle">F⃗₁</text>
    <!-- Cánh tay đòn d1 -->
    <line x1="180" y1="90" x2="360" y2="90" stroke="#60a5fa" stroke-width="1.5" stroke-dasharray="3,3"/>
    <text x="270" y="82" fill="#60a5fa" font-size="11" text-anchor="middle">d₁</text>
    <!-- Lực F2 bên phải hướng xuống -->
    <line x1="520" y1="110" x2="520" y2="155" stroke="#10b981" stroke-width="3" marker-end="url(#arrB21)"/>
    <text x="520" y="170" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">F⃗₂</text>
    <!-- Cánh tay đòn d2 -->
    <line x1="360" y1="90" x2="520" y2="90" stroke="#34d399" stroke-width="1.5" stroke-dasharray="3,3"/>
    <text x="440" y="82" fill="#34d399" font-size="11" text-anchor="middle">d₂</text>
    <!-- Biểu thức cân bằng -->
    <text x="360" y="45" fill="#facc15" font-size="13" font-weight="bold" text-anchor="middle">CÂN BẰNG: F₁ · d₁ = F₂ · d₂ ⟺ M_thuận = M_nghịch</text>
  </svg>`
);

// ==========================================
// CHƯƠNG 4: NĂNG LƯỢNG & CÔNG
// ==========================================

// Bài 23: Công cơ học A = F s cos(alpha)
diagrams[23] = wrapDiagram(
  'Phân loại công cơ học theo góc hợp bởi lực F⃗ và độ dịch chuyển s⃗',
  'A = F · s · cos α',
  `<svg viewBox="0 0 720 160" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <!-- Trường hợp 1: Công phát động (alpha nhọn) -->
    <g transform="translate(20, 15)">
      <rect width="215" height="130" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
      <text x="107" y="28" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">CÔNG PHÁT ĐỘNG (A > 0)</text>
      <text x="107" y="50" fill="#94a3b8" font-size="10" text-anchor="middle">0° ≤ α < 90° (cos α > 0)</text>
      <circle cx="60" cy="95" r="5" fill="#38bdf8"/>
      <line x1="60" y1="95" x2="150" y2="95" stroke="#64748b" stroke-width="2"/>
      <line x1="60" y1="95" x2="135" y2="70" stroke="#10b981" stroke-width="3"/>
      <text x="155" y="99" fill="#94a3b8" font-size="9">s⃗</text>
      <text x="140" y="65" fill="#34d399" font-size="9" font-weight="bold">F⃗</text>
      <text x="107" y="120" fill="#cbd5e1" font-size="9" text-anchor="middle">Lực làm tăng tốc chuyển động</text>
    </g>
    <!-- Trường hợp 2: Không sinh công (alpha vuông) -->
    <g transform="translate(250, 15)">
      <rect width="215" height="130" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="107" y="28" fill="#60a5fa" font-size="11" font-weight="bold" text-anchor="middle">KHÔNG SINH CÔNG (A = 0)</text>
      <text x="107" y="50" fill="#94a3b8" font-size="10" text-anchor="middle">α = 90° (cos 90° = 0)</text>
      <circle cx="80" cy="95" r="5" fill="#38bdf8"/>
      <line x1="80" y1="95" x2="160" y2="95" stroke="#64748b" stroke-width="2"/>
      <line x1="80" y1="95" x2="80" y2="60" stroke="#3b82f6" stroke-width="3"/>
      <text x="165" y="99" fill="#94a3b8" font-size="9">s⃗</text>
      <text x="75" y="55" fill="#60a5fa" font-size="9" font-weight="bold">F⃗ ⊥ s⃗</text>
      <text x="107" y="120" fill="#cbd5e1" font-size="9" text-anchor="middle">Ví dụ: Trọng lực P, Phản lực N</text>
    </g>
    <!-- Trường hợp 3: Công cản (alpha tù) -->
    <g transform="translate(480, 15)">
      <rect width="215" height="130" rx="12" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
      <text x="107" y="28" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">CÔNG CẢN (A < 0)</text>
      <text x="107" y="50" fill="#94a3b8" font-size="10" text-anchor="middle">90° < α ≤ 180° (cos α < 0)</text>
      <circle cx="120" cy="95" r="5" fill="#38bdf8"/>
      <line x1="120" y1="95" x2="190" y2="95" stroke="#64748b" stroke-width="2"/>
      <line x1="120" y1="95" x2="50" y2="75" stroke="#ef4444" stroke-width="3"/>
      <text x="195" y="99" fill="#94a3b8" font-size="9">s⃗</text>
      <text x="40" y="70" fill="#f87171" font-size="9" font-weight="bold">F⃗</text>
      <text x="107" y="120" fill="#cbd5e1" font-size="9" text-anchor="middle">Ví dụ: Lực ma sát, Lực hãm phanh</text>
    </g>
  </svg>`
);

// Bài 27: Bảo toàn cơ năng trong con lắc đơn
diagrams[27] = wrapDiagram(
  'Định luật bảo toàn cơ năng trong dao động con lắc đơn',
  'Cơ năng W = W_đ + W_t = hằng số',
  `<svg viewBox="0 0 720 200" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <!-- Điểm treo O -->
    <circle cx="360" cy="30" r="4" fill="#64748b"/>
    <line x1="330" y1="30" x2="390" y2="30" stroke="#64748b" stroke-width="2"/>
    <!-- Quỹ đạo cong -->
    <path d="M 220 120 Q 360 170 500 120" fill="none" stroke="#475569" stroke-dasharray="3,3"/>
    <!-- Mốc thế năng h=0 tại VTCB -->
    <line x1="180" y1="165" x2="540" y2="165" stroke="#334155" stroke-dasharray="4,4"/>
    <text x="550" y="168" fill="#64748b" font-size="10">Mốc thế năng W_t = 0</text>
    <!-- Vị trí biên trái A (v=0, Wt max) -->
    <line x1="360" y1="30" x2="220" y2="120" stroke="#94a3b8" stroke-width="1.5"/>
    <circle cx="220" cy="120" r="10" fill="#ef4444"/>
    <text x="210" y="105" fill="#f87171" font-size="11" font-weight="bold">Biên A</text>
    <text x="210" y="145" fill="#f87171" font-size="9">W_t(max) = mgh</text>
    <text x="210" y="157" fill="#94a3b8" font-size="9">W_đ = 0 (v = 0)</text>
    <!-- Vị trí cân bằng B (h=0, Wđ max) -->
    <line x1="360" y1="30" x2="360" y2="165" stroke="#94a3b8" stroke-width="1.5"/>
    <circle cx="360" cy="165" r="10" fill="#10b981"/>
    <text x="360" y="185" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">VTCB (h = 0)</text>
    <text x="360" y="125" fill="#34d399" font-size="9" text-anchor="middle">W_đ(max) = ½mv_max²</text>
    <!-- Vị trí biên phải C -->
    <line x1="360" y1="30" x2="500" y2="120" stroke="#94a3b8" stroke-width="1.5"/>
    <circle cx="500" cy="120" r="10" fill="#ef4444"/>
    <text x="510" y="105" fill="#f87171" font-size="11" font-weight="bold">Biên B</text>
    <text x="510" y="145" fill="#f87171" font-size="9">W_t(max) = mgh</text>
  </svg>`
);

// ==========================================
// CHƯƠNG 5: ĐỘNG LƯỢNG & VA CHẠM
// ==========================================

// Bài 29: Bảo toàn động lượng - Hiện tượng súng giật lùi
diagrams[29] = wrapDiagram(
  'Định luật bảo toàn động lượng: Chuyển động bằng phản lực & Hiện tượng giật',
  'Hệ kín p⃗_trước = p⃗_sau = 0',
  `<svg viewBox="0 0 720 160" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrB29a" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#ef4444" />
      </marker>
      <marker id="arrB29b" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#10b981" />
      </marker>
    </defs>
    <!-- Khẩu súng (Khối lượng M) -->
    <rect x="220" y="60" width="140" height="40" rx="6" fill="#334155" stroke="#64748b" stroke-width="2"/>
    <text x="290" y="85" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">SÚNG (Khối lượng M)</text>
    <!-- Vận tốc giật lùi V của súng sang trái -->
    <line x1="220" y1="80" x2="120" y2="80" stroke="#ef4444" stroke-width="3.5" marker-end="url(#arrB29a)"/>
    <text x="135" y="70" fill="#f87171" font-size="12" font-weight="bold">V⃗ (Giật lùi)</text>
    <!-- Viên đạn (Khối lượng m) bay sang phải -->
    <circle cx="430" cy="80" r="12" fill="#eab308"/>
    <text x="430" y="84" fill="#0f172a" font-size="10" font-weight="black" text-anchor="middle">m</text>
    <!-- Vận tốc v của đạn -->
    <line x1="442" y1="80" x2="570" y2="80" stroke="#10b981" stroke-width="3.5" marker-end="url(#arrB29b)"/>
    <text x="530" y="70" fill="#34d399" font-size="12" font-weight="bold">v⃗ (Đạn bay)</text>
    <!-- Biểu thức bảo toàn -->
    <text x="360" y="135" fill="#cbd5e1" font-size="12" text-anchor="middle">Bảo toàn động lượng: M · V⃗ + m · v⃗ = 0 ⟹ V⃗ = - (m / M) · v⃗</text>
  </svg>`
);

// Bài 30: Va chạm đàn hồi vs Va chạm mềm
diagrams[30] = wrapDiagram(
  'Phân biệt Va chạm đàn hồi và Va chạm mềm trong hệ kín',
  'Định luật bảo toàn động lượng & Cơ năng',
  `<svg viewBox="0 0 720 170" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <!-- Nửa trái: Va chạm đàn hồi -->
    <g transform="translate(20, 15)">
      <rect width="325" height="140" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="162" y="25" fill="#60a5fa" font-size="12" font-weight="bold" text-anchor="middle">1. VA CHẠM ĐÀN HỒI</text>
      <circle cx="90" cy="65" r="16" fill="#3b82f6"/>
      <text x="90" y="70" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">m₁</text>
      <circle cx="230" cy="65" r="16" fill="#f59e0b"/>
      <text x="230" y="70" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">m₂</text>
      <text x="162" y="105" fill="#cbd5e1" font-size="10" text-anchor="middle">• Hai vật tách rời nhau sau va chạm</text>
      <text x="162" y="125" fill="#34d399" font-size="10" text-anchor="middle">• Bảo toàn CẢ Động lượng & Cơ năng</text>
    </g>
    <!-- Nửa phải: Va chạm mềm -->
    <g transform="translate(375, 15)">
      <rect width="325" height="140" rx="12" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
      <text x="162" y="25" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">2. VA CHẠM MỀM (DÍNH LIỀN)</text>
      <g transform="translate(140, 50)">
        <circle cx="10" cy="15" r="16" fill="#3b82f6"/>
        <circle cx="34" cy="15" r="16" fill="#f59e0b"/>
        <text x="22" y="19" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">m₁+m₂</text>
      </g>
      <text x="162" y="105" fill="#cbd5e1" font-size="10" text-anchor="middle">• Hai vật dính liền cùng chuyển động v⃗</text>
      <text x="162" y="125" fill="#f87171" font-size="10" text-anchor="middle">• Bảo toàn Động lượng, Cơ năng KHÔNG bảo toàn</text>
    </g>
  </svg>`
);

// ==========================================
// CHƯƠNG 6: CHUYỂN ĐỘNG TRÒN ĐỀU
// ==========================================

// Bài 31: Chuyển động tròn đều
diagrams[31] = wrapDiagram(
  'Vectơ vận tốc tiếp tuyến v⃗ và Vectơ gia tốc hướng tâm a⃗_ht trong chuyển động tròn đều',
  'Động học chuyển động tròn',
  `<svg viewBox="0 0 720 200" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrB31v" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#10b981" />
      </marker>
      <marker id="arrB31a" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#ef4444" />
      </marker>
    </defs>
    <!-- Tâm O và quỹ đạo tròn -->
    <circle cx="260" cy="100" r="70" fill="none" stroke="#475569" stroke-width="2" stroke-dasharray="4,4"/>
    <circle cx="260" cy="100" r="4" fill="#38bdf8"/>
    <text x="245" y="105" fill="#38bdf8" font-size="12" font-weight="bold">O</text>
    <!-- Bán kính r -->
    <line x1="260" y1="100" x2="330" y2="100" stroke="#64748b" stroke-width="1.5"/>
    <text x="290" y="93" fill="#94a3b8" font-size="10">r</text>
    <!-- Chất điểm tại đỉnh cao nhất (260, 30) -->
    <circle cx="260" cy="30" r="6" fill="#38bdf8"/>
    <!-- Vectơ vận tốc tiếp tuyến v (hướng sang trái) -->
    <line x1="260" y1="30" x2="180" y2="30" stroke="#10b981" stroke-width="3" marker-end="url(#arrB31v)"/>
    <text x="190" y="20" fill="#34d399" font-size="11" font-weight="bold">v⃗ (Tiếp tuyến)</text>
    <!-- Vectơ gia tốc hướng tâm a_ht (hướng vào tâm O) -->
    <line x1="260" y1="30" x2="260" y2="75" stroke="#ef4444" stroke-width="3" marker-end="url(#arrB31a)"/>
    <text x="268" y="60" fill="#f87171" font-size="11" font-weight="bold">a⃗_ht</text>
    <!-- Bảng công thức bên phải -->
    <rect x="420" y="25" width="270" height="150" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="555" y="52" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">CÔNG THỨC CHUYỂN ĐỘNG TRÒN ĐỀU</text>
    <text x="440" y="80" fill="#cbd5e1" font-size="11">• Tốc độ góc: <tspan fill="#f59e0b">ω = 2π / T = 2πf</tspan></text>
    <text x="440" y="105" fill="#cbd5e1" font-size="11">• Liên hệ vận tốc: <tspan fill="#f59e0b">v = ω · r</tspan></text>
    <text x="440" y="130" fill="#cbd5e1" font-size="11">• Gia tốc hướng tâm: <tspan fill="#f87171">a_ht = v² / r = ω²r</tspan></text>
    <text x="440" y="155" fill="#cbd5e1" font-size="11">• Lực hướng tâm: <tspan fill="#f87171">F_ht = m · a_ht</tspan></text>
  </svg>`
);

// ==========================================
// CHƯƠNG 7: BIẾN DẠNG VẬT RẮN & ÁP SUẤT
// ==========================================

// Bài 33: Định luật Hooke
diagrams[33] = wrapDiagram(
  'Định luật Hooke: Mối quan hệ giữa lực đàn hồi và độ dãn lò xo',
  'Giới hạn đàn hồi F_đh = k · |Δl|',
  `<svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <!-- Hình ảnh lò xo treo quả cân -->
    <g transform="translate(40, 20)">
      <line x1="20" y1="10" x2="80" y2="10" stroke="#64748b" stroke-width="3"/>
      <!-- Lò xo trạng thái tự nhiên l0 -->
      <path d="M 50 10 L 50 25 L 42 32 L 58 40 L 42 48 L 58 56 L 50 64 L 50 75" fill="none" stroke="#94a3b8" stroke-width="2"/>
      <text x="50" y="95" fill="#94a3b8" font-size="9" text-anchor="middle">l₀ (tự nhiên)</text>
    </g>
    <g transform="translate(130, 20)">
      <line x1="20" y1="10" x2="80" y2="10" stroke="#64748b" stroke-width="3"/>
      <!-- Lò xo bị dãn l = l0 + delta l -->
      <path d="M 50 10 L 50 25 L 40 35 L 60 47 L 40 59 L 60 71 L 40 83 L 60 95 L 50 105 L 50 115" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
      <rect x="35" y="115" width="30" height="25" rx="3" fill="#f59e0b"/>
      <text x="50" y="132" fill="#0f172a" font-size="10" font-weight="bold" text-anchor="middle">P=mg</text>
      <!-- Mũi tên delta l -->
      <line x1="90" y1="75" x2="90" y2="115" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="100" y="98" fill="#38bdf8" font-size="10">Δl</text>
    </g>
    <!-- Đồ thị F_dh theo Delta l bên phải -->
    <g transform="translate(320, 20)">
      <line x1="40" y1="130" x2="350" y2="130" stroke="#64748b" stroke-width="2"/>
      <text x="360" y="134" fill="#94a3b8" font-size="10">Δl (m)</text>
      <line x1="40" y1="130" x2="40" y2="15" stroke="#64748b" stroke-width="2"/>
      <text x="35" y="10" fill="#94a3b8" font-size="10">F_đh (N)</text>
      <!-- Đoạn tỉ lệ thuận: Đường thẳng dốc qua gốc -->
      <line x1="40" y1="130" x2="260" y2="35" stroke="#10b981" stroke-width="3"/>
      <text x="160" y="65" fill="#34d399" font-size="11" font-weight="bold">F_đh = k · |Δl|</text>
      <!-- Điểm giới hạn đàn hồi -->
      <circle cx="260" cy="35" r="4" fill="#ef4444"/>
      <text x="270" y="30" fill="#f87171" font-size="10">Giới hạn đàn hồi</text>
      <path d="M 260 35 Q 310 35 340 50" fill="none" stroke="#ef4444" stroke-dasharray="3,3"/>
    </g>
  </svg>`
);

// Bài 34: Áp suất chất lỏng & Lực đẩy Archimedes
diagrams[34] = wrapDiagram(
  'Áp suất thủy tĩnh ở độ sâu h và Lực đẩy Ácsimét',
  'Cơ học chất lưu',
  `<svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrB34" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#10b981" />
      </marker>
      <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#0284c7" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="#0284c7" stop-opacity="0.6"/>
      </linearGradient>
    </defs>
    <!-- Bình chứa chất lỏng -->
    <rect x="80" y="30" width="260" height="130" rx="8" fill="url(#waterGrad)" stroke="#0284c7" stroke-width="2"/>
    <text x="95" y="48" fill="#38bdf8" font-size="10">Mặt thoáng (Áp suất khí quyển p₀)</text>
    <!-- Vật chìm thể tích V -->
    <rect x="170" y="80" width="80" height="60" rx="4" fill="#f59e0b" stroke="#fbbf24" stroke-width="1.5"/>
    <text x="210" y="115" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">Vật (V)</text>
    <!-- Độ sâu h -->
    <line x1="280" y1="30" x2="280" y2="80" stroke="#e2e8f0" stroke-width="1.5"/>
    <text x="290" y="60" fill="#e2e8f0" font-size="11">Độ sâu h</text>
    <!-- Lực đẩy Acsimet FA hướng thẳng đứng lên -->
    <line x1="210" y1="80" x2="210" y2="25" stroke="#10b981" stroke-width="3.5" marker-end="url(#arrB34)"/>
    <text x="220" y="40" fill="#34d399" font-size="12" font-weight="bold">F⃗_A</text>
    <!-- Bảng công thức bên phải -->
    <rect x="400" y="30" width="280" height="130" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="540" y="55" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">CÔNG THỨC ÁP SUẤT & LỰC ĐẨY</text>
    <text x="420" y="82" fill="#cbd5e1" font-size="11">• Áp suất ở độ sâu h: <tspan fill="#f59e0b">p = p₀ + ρgh</tspan></text>
    <text x="420" y="107" fill="#cbd5e1" font-size="11">• Độ chênh áp suất: <tspan fill="#f59e0b">Δp = ρg · Δh</tspan></text>
    <text x="420" y="132" fill="#cbd5e1" font-size="11">• Lực đẩy Ácsimét: <tspan fill="#10b981">F_A = ρ_lỏng · g · V_chìm</tspan></text>
  </svg>`
);

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/vatly10_diagrams.js', 'module.exports = ' + JSON.stringify(diagrams, null, 2) + ';', 'utf8');
console.log('Successfully generated vatly10_diagrams.js with', Object.keys(diagrams).length, 'diagrams!');
