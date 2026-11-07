// scratch/sinhhoc11_diagrams.js
// Các sơ đồ SVG trực quan chuẩn hóa cho 7 nhóm sơ đồ bắt buộc và các bài học trọng tâm Sinh học 11
const p1_diagrams = require('./sinhhoc11_lesson_diagrams_p1.js');
const p2_diagrams = require('./sinhhoc11_lesson_diagrams_p2.js');

const lessonDiagrams = {};
for (let i = 1; i <= 15; i++) {
  lessonDiagrams[i] = p1_diagrams[i];
}
for (let i = 16; i <= 29; i++) {
  lessonDiagrams[i] = p2_diagrams[i];
}

const masterGroups = {
  "nhom-1": `<svg viewBox="0 0 880 260" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gAnabolism" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" /><stop offset="100%" stop-color="#059669" />
      </linearGradient>
      <linearGradient id="gCatabolism" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b" /><stop offset="100%" stop-color="#d97706" />
      </linearGradient>
      <linearGradient id="gATP" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#6366f1" /><stop offset="100%" stop-color="#4f46e5" />
      </linearGradient>
      <marker id="arrow11" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 8 5 L 0 9 z" fill="#10b981" />
      </marker>
      <marker id="arrowAmber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 8 5 L 0 9 z" fill="#f59e0b" />
      </marker>
    </defs>
    <rect width="880" height="260" rx="16" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
    
    <!-- Title -->
    <text x="440" y="32" text-anchor="middle" font-weight="bold" font-size="15" fill="#0f172a" class="dark:fill-white">SƠ ĐỒ NHÓM 1: MỐI QUAN HỆ ĐỒNG HÓA - DỊ HÓA & DÒNG NĂNG LƯỢNG ATP</text>
    
    <!-- Box: Đồng hóa -->
    <rect x="40" y="65" width="230" height="155" rx="12" fill="url(#gAnabolism)" />
    <text x="155" y="95" text-anchor="middle" font-weight="bold" font-size="15" fill="#ffffff">ĐỒNG HÓA (Anabolism)</text>
    <text x="155" y="125" text-anchor="middle" font-size="12" fill="#e2e8f0">• Chất đơn giản → Chất phức tạp</text>
    <text x="155" y="148" text-anchor="middle" font-size="12" fill="#e2e8f0">• Tiêu tốn & Tích lũy năng lượng</text>
    <text x="155" y="171" text-anchor="middle" font-size="12" fill="#e2e8f0">• Tạo sinh khối tế bào & cơ thể</text>
    <text x="155" y="198" text-anchor="middle" font-weight="semibold" font-size="11" fill="#a7f3d0">Ví dụ: Quang hợp, tổng hợp protein</text>

    <!-- Center: ATP Cycle -->
    <circle cx="440" cy="142" r="54" fill="url(#gATP)" />
    <text x="440" y="138" text-anchor="middle" font-weight="bold" font-size="18" fill="#ffffff">ATP</text>
    <text x="440" y="158" text-anchor="middle" font-size="11" fill="#c7d2fe">Đồng tiền năng lượng</text>

    <!-- Arrows from Catabolism to ATP -->
    <path d="M 610 115 Q 535 90 495 118" fill="none" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrowAmber)" />
    <text x="560" y="94" font-size="11" font-weight="bold" fill="#d97706" class="dark:fill-amber-400">Nạp năng lượng (+P)</text>

    <!-- Arrows from ATP to Anabolism -->
    <path d="M 385 118 Q 345 90 272 115" fill="none" stroke="#10b981" stroke-width="3" marker-end="url(#arrow11)" />
    <text x="320" y="94" font-size="11" font-weight="bold" fill="#059669" class="dark:fill-emerald-400">Cung cấp ATP (-P)</text>

    <!-- Bottom feedback: Nguyên liệu & ADP -->
    <path d="M 272 175 Q 345 205 385 168" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="4" marker-end="url(#arrow11)" />
    <text x="310" y="212" font-size="11" fill="#64748b" class="dark:fill-slate-400">ADP + Pi hồi chuyển</text>

    <path d="M 495 168 Q 535 205 610 175" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="4" marker-end="url(#arrowAmber)" />
    <text x="535" y="212" font-size="11" fill="#64748b" class="dark:fill-slate-400">Tiền chất & Enzyme xúc tác</text>

    <!-- Box: Dị hóa -->
    <rect x="610" y="65" width="230" height="155" rx="12" fill="url(#gCatabolism)" />
    <text x="725" y="95" text-anchor="middle" font-weight="bold" font-size="15" fill="#ffffff">DỊ HÓA (Catabolism)</text>
    <text x="725" y="125" text-anchor="middle" font-size="12" fill="#fef3c7">• Chất phức tạp → Chất đơn giản</text>
    <text x="725" y="148" text-anchor="middle" font-size="12" fill="#fef3c7">• Giải phóng năng lượng nạp ATP</text>
    <text x="725" y="171" text-anchor="middle" font-size="12" fill="#fef3c7">• Thải chất cặn bã & sinh nhiệt</text>
    <text x="725" y="198" text-anchor="middle" font-weight="semibold" font-size="11" fill="#fde68a">Ví dụ: Hô hấp tế bào, lên men</text>
  </svg>`,

  "nhom-2": `<svg viewBox="0 0 880 260" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
    <rect width="880" height="260" rx="16" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
    <text x="440" y="30" text-anchor="middle" font-weight="bold" font-size="15" fill="#0f172a" class="dark:fill-white">SƠ ĐỒ NHÓM 2: DÒNG MẠCH GỖ, KHÍ KHỔNG, QUANG HỢP (C3/C4/CAM) & HÔ HẤP THỰC VẬT</text>
    
    <!-- 1. Rễ & Mạch gỗ -->
    <g transform="translate(35, 55)">
      <rect width="180" height="180" rx="10" fill="#ecfdf5" class="dark:fill-emerald-950/40" stroke="#10b981" stroke-width="1.5" />
      <text x="90" y="26" text-anchor="middle" font-weight="bold" font-size="13" fill="#065f46" class="dark:fill-emerald-300">1. RỄ & MẠCH GỖ</text>
      <text x="15" y="52" font-size="11" fill="#047857" class="dark:fill-emerald-400">• Lông hút: Hấp thụ H₂O, khoáng</text>
      <text x="15" y="72" font-size="11" fill="#047857" class="dark:fill-emerald-400">• Đai Caspary: Kiểm soát chọn lọc</text>
      <text x="15" y="92" font-size="11" fill="#047857" class="dark:fill-emerald-400">• Mạch gỗ (Xylem): Đi 1 chiều lên</text>
      <text x="15" y="112" font-size="11" fill="#047857" class="dark:fill-emerald-400">• Mạch rây (Phloem): Dẫn sucrose</text>
      <path d="M 90 160 L 90 125" stroke="#10b981" stroke-width="3" marker-end="url(#arrow11)" />
      <text x="90" y="172" text-anchor="middle" font-size="10" font-weight="bold" fill="#059669">Dòng nhựa gỗ đi lên</text>
    </g>

    <!-- 2. Lá & Khí khổng -->
    <g transform="translate(245, 55)">
      <rect width="180" height="180" rx="10" fill="#f0fdf4" class="dark:fill-slate-800/80" stroke="#22c55e" stroke-width="1.5" />
      <text x="90" y="26" text-anchor="middle" font-weight="bold" font-size="13" fill="#15803d" class="dark:fill-green-300">2. THOÁT HƠI NƯỚC</text>
      <text x="15" y="52" font-size="11" fill="#166534" class="dark:fill-green-400">• Khí khổng: Thành trong dày</text>
      <text x="15" y="72" font-size="11" fill="#166534" class="dark:fill-green-400">• Trương nước → Khe khổng mở</text>
      <text x="15" y="92" font-size="11" fill="#166534" class="dark:fill-green-400">• Mất nước / ABA → Khe đóng</text>
      <text x="15" y="112" font-size="11" fill="#166534" class="dark:fill-green-400">• Động lực chính kéo dòng gỗ</text>
      <circle cx="90" cy="148" r="20" fill="#dcfce7" stroke="#22c55e" />
      <ellipse cx="90" cy="148" rx="5" ry="12" fill="#166534" />
      <text x="90" y="175" text-anchor="middle" font-size="10" font-weight="bold" fill="#15803d">Khe khí khổng mở</text>
    </g>

    <!-- 3. Quang hợp C3, C4, CAM -->
    <g transform="translate(455, 55)">
      <rect width="195" height="180" rx="10" fill="#eff6ff" class="dark:fill-blue-950/40" stroke="#3b82f6" stroke-width="1.5" />
      <text x="97" y="26" text-anchor="middle" font-weight="bold" font-size="13" fill="#1e40af" class="dark:fill-blue-300">3. QUANG HỢP (LỤC LẠP)</text>
      <text x="15" y="52" font-size="11" fill="#1d4ed8" class="dark:fill-blue-400">• Pha sáng (Thylakoid): Tạo ATP, NADPH, O₂</text>
      <text x="15" y="72" font-size="11" fill="#1d4ed8" class="dark:fill-blue-400">• Pha tối (Stroma): Calvin khử CO₂</text>
      <text x="15" y="92" font-size="11" fill="#1d4ed8" class="dark:fill-blue-400">• C3: Ôn đới, có quang hô hấp</text>
      <text x="15" y="112" font-size="11" fill="#1d4ed8" class="dark:fill-blue-400">• C4: Tách biệt không gian mô giậu/bao mạch</text>
      <text x="15" y="132" font-size="11" fill="#1d4ed8" class="dark:fill-blue-400">• CAM: Tách biệt thời gian (mở đêm)</text>
      <rect x="25" y="148" width="145" height="22" rx="6" fill="#3b82f6" />
      <text x="97" y="163" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">CO₂ + H₂O + Sáng → C₆H₁₂O₆ + O₂</text>
    </g>

    <!-- 4. Hô hấp thực vật -->
    <g transform="translate(675, 55)">
      <rect width="170" height="180" rx="10" fill="#fffbeb" class="dark:fill-amber-950/40" stroke="#f59e0b" stroke-width="1.5" />
      <text x="85" y="26" text-anchor="middle" font-weight="bold" font-size="13" fill="#92400e" class="dark:fill-amber-300">4. HÔ HẤP (TI THỂ)</text>
      <text x="12" y="52" font-size="11" fill="#b45309" class="dark:fill-amber-400">• Đường phân (Bào tương): 2 ATP</text>
      <text x="12" y="72" font-size="11" fill="#b45309" class="dark:fill-amber-400">• Chu trình Krebs: 2 ATP + CO₂</text>
      <text x="12" y="92" font-size="11" fill="#b45309" class="dark:fill-amber-400">• Chuỗi electron: ~26-28 ATP</text>
      <text x="12" y="112" font-size="11" fill="#b45309" class="dark:fill-amber-400">• Ngập úng → Lên men cồn độc</text>
      <rect x="15" y="148" width="140" height="22" rx="6" fill="#f59e0b" />
      <text x="85" y="163" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">Glucose + O₂ → ~30-32 ATP</text>
    </g>
  </svg>`,

  "nhom-3": `<svg viewBox="0 0 880 260" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
    <rect width="880" height="260" rx="16" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
    <text x="440" y="30" text-anchor="middle" font-weight="bold" font-size="15" fill="#0f172a" class="dark:fill-white">SƠ ĐỒ NHÓM 3: SINH LÍ ĐỘNG VẬT (TIÊU HÓA, HÔ HẤP PHẾ NANG, TIM TUẦN HOÀN & NEPHRON THẬN)</text>

    <!-- 1. Tiêu hóa -->
    <g transform="translate(30, 55)">
      <rect width="190" height="180" rx="10" fill="#fef2f2" class="dark:fill-red-950/40" stroke="#ef4444" stroke-width="1.5" />
      <text x="95" y="26" text-anchor="middle" font-weight="bold" font-size="13" fill="#991b1b" class="dark:fill-red-300">1. TIÊU HÓA & HẤP THỤ</text>
      <text x="12" y="52" font-size="11" fill="#b91c1c" class="dark:fill-red-400">• Miệng: Amylase phân giải tinh bột</text>
      <text x="12" y="72" font-size="11" fill="#b91c1c" class="dark:fill-red-400">• Dạ dày: HCl + Pepsin phân giải protein</text>
      <text x="12" y="92" font-size="11" fill="#b91c1c" class="dark:fill-red-400">• Ruột non: Enzyme tụy, mật nhũ hóa lipid</text>
      <text x="12" y="112" font-size="11" fill="#b91c1c" class="dark:fill-red-400">• Lông ruột: Hấp thu vào máu & bạch huyết</text>
      <text x="12" y="132" font-size="11" fill="#b91c1c" class="dark:fill-red-400">• Ruột già: Tái hấp thu nước, tạo phân</text>
      <rect x="20" y="148" width="150" height="22" rx="6" fill="#ef4444" />
      <text x="95" y="163" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">Diện tích nhung mao > 300 m²</text>
    </g>

    <!-- 2. Hô hấp phế nang -->
    <g transform="translate(240, 55)">
      <rect width="190" height="180" rx="10" fill="#f0f9ff" class="dark:fill-sky-950/40" stroke="#0ea5e9" stroke-width="1.5" />
      <text x="95" y="26" text-anchor="middle" font-weight="bold" font-size="13" fill="#075985" class="dark:fill-sky-300">2. HÔ HẤP & KHÍ MÁU</text>
      <text x="12" y="52" font-size="11" fill="#0369a1" class="dark:fill-sky-400">• 4 hình thức: Da, ống khí, mang, phổi</text>
      <text x="12" y="72" font-size="11" fill="#0369a1" class="dark:fill-sky-400">• Mang cá: Dòng chảy ngược chiều</text>
      <text x="12" y="92" font-size="11" fill="#0369a1" class="dark:fill-sky-400">• Phổi chim: 9 túi khí, thông khí 1 chiều</text>
      <text x="12" y="112" font-size="11" fill="#0369a1" class="dark:fill-sky-400">• Phế nang người: Màng mỏng, ẩm ướt</text>
      <text x="12" y="132" font-size="11" fill="#0369a1" class="dark:fill-sky-400">• Hồng cầu Hb gắn O₂ (HbO₂)</text>
      <rect x="20" y="148" width="150" height="22" rx="6" fill="#0ea5e9" />
      <text x="95" y="163" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">Khuếch tán theo gradient PO₂</text>
    </g>

    <!-- 3. Tim & Tuần hoàn kép -->
    <g transform="translate(450, 55)">
      <rect width="195" height="180" rx="10" fill="#fdf2f8" class="dark:fill-pink-950/40" stroke="#ec4899" stroke-width="1.5" />
      <text x="97" y="26" text-anchor="middle" font-weight="bold" font-size="13" fill="#9d174d" class="dark:fill-pink-300">3. TIM & TUẦN HOÀN KÉP</text>
      <text x="12" y="52" font-size="11" fill="#be185d" class="dark:fill-pink-400">• Tim 4 ngăn: 2 nhĩ, 2 thất riêng biệt</text>
      <text x="12" y="72" font-size="11" fill="#be185d" class="dark:fill-pink-400">• Vòng nhỏ (Phổi): Thất phải → Phổi → Nhĩ trái</text>
      <text x="12" y="92" font-size="11" fill="#be185d" class="dark:fill-pink-400">• Vòng lớn (Mô): Thất trái → ĐM chủ → Nhĩ phải</text>
      <text x="12" y="112" font-size="11" fill="#be185d" class="dark:fill-pink-400">• Chu kì tim 0.8s: Co 0.4s + Dãn 0.4s</text>
      <text x="12" y="132" font-size="11" fill="#be185d" class="dark:fill-pink-400">• Huyết áp giảm: ĐM > Mao mạch > TM</text>
      <rect x="20" y="148" width="155" height="22" rx="6" fill="#ec4899" />
      <text x="97" y="163" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">Nút xoang nhĩ tự động phát nhịp</text>
    </g>

    <!-- 4. Nephron & Nội môi -->
    <g transform="translate(665, 55)">
      <rect width="185" height="180" rx="10" fill="#faf5ff" class="dark:fill-purple-950/40" stroke="#a855f7" stroke-width="1.5" />
      <text x="92" y="26" text-anchor="middle" font-weight="bold" font-size="13" fill="#6b21a8" class="dark:fill-purple-300">4. NEPHRON & NỘI MÔI</text>
      <text x="12" y="52" font-size="11" fill="#7e22ce" class="dark:fill-purple-400">• 1-1.2 triệu nephron/thận</text>
      <text x="12" y="72" font-size="11" fill="#7e22ce" class="dark:fill-purple-400">• Cầu thận: Lọc 180L nước tiểu đầu</text>
      <text x="12" y="92" font-size="11" fill="#7e22ce" class="dark:fill-purple-400">• Ống thận: Tái hấp thu 99% + Tiết cặn</text>
      <text x="12" y="112" font-size="11" fill="#7e22ce" class="dark:fill-purple-400">• Nước tiểu chính thức ~1.5 lít/ngày</text>
      <text x="12" y="132" font-size="11" fill="#7e22ce" class="dark:fill-purple-400">• Hormone ADH, Aldosterone, RAA</text>
      <rect x="20" y="148" width="145" height="22" rx="6" fill="#a855f7" />
      <text x="92" y="163" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">Cân bằng pH, glucose & thẩm thấu</text>
    </g>
  </svg>`,

  "nhom-4": `<svg viewBox="0 0 880 260" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
    <rect width="880" height="260" rx="16" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
    <text x="440" y="30" text-anchor="middle" font-weight="bold" font-size="15" fill="#0f172a" class="dark:fill-white">SƠ ĐỒ NHÓM 4: CẢM ỨNG (HƯỚNG ĐỘNG AUXIN, CUNG PHẢN XẠ, KHE SYNAPSE & TẬP TÍNH)</text>

    <!-- 1. Hướng động cây -->
    <g transform="translate(30, 55)">
      <rect width="190" height="180" rx="10" fill="#f0fdf4" class="dark:fill-emerald-950/40" stroke="#10b981" stroke-width="1.5" />
      <text x="95" y="26" text-anchor="middle" font-weight="bold" font-size="13" fill="#065f46" class="dark:fill-emerald-300">1. CẢM ỨNG THỰC VẬT</text>
      <text x="12" y="52" font-size="11" fill="#047857" class="dark:fill-emerald-400">• Hướng sáng: Auxin dồn phía tối</text>
      <text x="12" y="72" font-size="11" fill="#047857" class="dark:fill-emerald-400">• Tế bào phía tối dãn dài nhanh</text>
      <text x="12" y="92" font-size="11" fill="#047857" class="dark:fill-emerald-400">• Thân: Hướng sáng (+), trọng lực (-)</text>
      <text x="12" y="112" font-size="11" fill="#047857" class="dark:fill-emerald-400">• Rễ: Hướng trọng lực (+), hướng nước</text>
      <text x="12" y="132" font-size="11" fill="#047857" class="dark:fill-emerald-400">• Ứng động: Cụp lá trinh nữ (thể gối)</text>
      <rect x="20" y="148" width="150" height="22" rx="6" fill="#10b981" />
      <text x="95" y="163" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">Uốn cong do chênh lệch Auxin</text>
    </g>

    <!-- 2. Cung phản xạ -->
    <g transform="translate(240, 55)">
      <rect width="190" height="180" rx="10" fill="#fefce8" class="dark:fill-yellow-950/40" stroke="#eab308" stroke-width="1.5" />
      <text x="95" y="26" text-anchor="middle" font-weight="bold" font-size="13" fill="#854d0e" class="dark:fill-yellow-300">2. CUNG PHẢN XẠ 5 KHÂU</text>
      <text x="12" y="52" font-size="11" fill="#a16207" class="dark:fill-yellow-400">1. Thụ thể cảm giác tiếp nhận</text>
      <text x="12" y="72" font-size="11" fill="#a16207" class="dark:fill-yellow-400">2. Neuron hướng tâm (cảm giác)</text>
      <text x="12" y="92" font-size="11" fill="#a16207" class="dark:fill-yellow-400">3. Trung ương thần kinh (Tủy/Não)</text>
      <text x="12" y="112" font-size="11" fill="#a16207" class="dark:fill-yellow-400">4. Neuron li tâm (vận động)</text>
      <text x="12" y="132" font-size="11" fill="#a16207" class="dark:fill-yellow-400">5. Cơ quan đáp ứng (Cơ / Tuyến)</text>
      <rect x="20" y="148" width="150" height="22" rx="6" fill="#eab308" />
      <text x="95" y="163" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">Phản xạ bẩm sinh vs có điều kiện</text>
    </g>

    <!-- 3. Khe Synapse hóa học -->
    <g transform="translate(450, 55)">
      <rect width="200" height="180" rx="10" fill="#f5f3ff" class="dark:fill-indigo-950/40" stroke="#6366f1" stroke-width="1.5" />
      <text x="100" y="26" text-anchor="middle" font-weight="bold" font-size="13" fill="#3730a3" class="dark:fill-indigo-300">3. KHE SYNAPSE HÓA HỌC</text>
      <text x="12" y="52" font-size="11" fill="#4338ca" class="dark:fill-indigo-400">• Cúc tận cùng: Chứa bóng Acetylcholine</text>
      <text x="12" y="72" font-size="11" fill="#4338ca" class="dark:fill-indigo-400">• Ca²⁺ tràn vào → Xuất bào chất dẫn truyền</text>
      <text x="12" y="92" font-size="11" fill="#4338ca" class="dark:fill-indigo-400">• Khuếch tán qua khe gắn thụ thể màng sau</text>
      <text x="12" y="112" font-size="11" fill="#4338ca" class="dark:fill-indigo-400">• Mở kênh Na⁺ phát xung điện màng sau</text>
      <text x="12" y="132" font-size="11" fill="#4338ca" class="dark:fill-indigo-400">• Enzyme phân giải Acetylcholinesterase</text>
      <rect x="20" y="148" width="160" height="22" rx="6" fill="#6366f1" />
      <text x="100" y="163" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">Dẫn truyền 1 chiều tuyệt đối</text>
    </g>

    <!-- 4. Tập tính & Học tập -->
    <g transform="translate(670, 55)">
      <rect width="180" height="180" rx="10" fill="#fff7ed" class="dark:fill-orange-950/40" stroke="#f97316" stroke-width="1.5" />
      <text x="90" y="26" text-anchor="middle" font-weight="bold" font-size="13" fill="#9a3412" class="dark:fill-orange-300">4. TẬP TÍNH & HỌC TẬP</text>
      <text x="12" y="52" font-size="11" fill="#c2410c" class="dark:fill-orange-400">• Tập tính bẩm sinh: Bản năng loài</text>
      <text x="12" y="72" font-size="11" fill="#c2410c" class="dark:fill-orange-400">• Tập tính học được: Rút kinh nghiệm</text>
      <text x="12" y="92" font-size="11" fill="#c2410c" class="dark:fill-orange-400">• Quen nhờn, In vết vịt con</text>
      <text x="12" y="112" font-size="11" fill="#c2410c" class="dark:fill-orange-400">• Điều kiện hóa Pavlov (Chuông-thức ăn)</text>
      <text x="12" y="132" font-size="11" fill="#c2410c" class="dark:fill-orange-400">• Giao tiếp Pheromone, âm thanh</text>
      <rect x="15" y="148" width="150" height="22" rx="6" fill="#f97316" />
      <text x="90" y="163" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">Thích ứng linh hoạt sinh tồn</text>
    </g>
  </svg>`,

  "nhom-5": `<svg viewBox="0 0 880 260" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
    <rect width="880" height="260" rx="16" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
    <text x="440" y="30" text-anchor="middle" font-weight="bold" font-size="15" fill="#0f172a" class="dark:fill-white">SƠ ĐỒ NHÓM 5: SINH TRƯỞNG & PHÁT TRIỂN (MÔ PHÂN SINH, HORMONE THỰC VẬT & BIẾN THÁI)</text>

    <!-- 1. Mô phân sinh & Vòng năm -->
    <g transform="translate(30, 55)">
      <rect width="190" height="180" rx="10" fill="#f0fdfa" class="dark:fill-teal-950/40" stroke="#14b8a6" stroke-width="1.5" />
      <text x="95" y="26" text-anchor="middle" font-weight="bold" font-size="13" fill="#115e59" class="dark:fill-teal-300">1. MÔ PHÂN SINH & GỖ</text>
      <text x="12" y="52" font-size="11" fill="#0f766e" class="dark:fill-teal-400">• MPS đỉnh: Tăng chiều dài thân, rễ</text>
      <text x="12" y="72" font-size="11" fill="#0f766e" class="dark:fill-teal-400">• MPS bên: Tầng sinh mạch & sinh bần</text>
      <text x="12" y="92" font-size="11" fill="#0f766e" class="dark:fill-teal-400">• Vòng năm: 1 dải gỗ sáng (mùa xuân)</text>
      <text x="12" y="112" font-size="11" fill="#0f766e" class="dark:fill-teal-400">  + 1 dải gỗ sẫm (mùa thu đông)</text>
      <text x="12" y="132" font-size="11" fill="#0f766e" class="dark:fill-teal-400">• Đếm vòng sẫm = Tuổi cây</text>
      <rect x="20" y="148" width="150" height="22" rx="6" fill="#14b8a6" />
      <text x="95" y="163" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">Sinh trưởng sơ cấp & thứ cấp</text>
    </g>

    <!-- 2. Hormone cây -->
    <g transform="translate(240, 55)">
      <rect width="190" height="180" rx="10" fill="#fdf4ff" class="dark:fill-fuchsia-950/40" stroke="#d946ef" stroke-width="1.5" />
      <text x="95" y="26" text-anchor="middle" font-weight="bold" font-size="13" fill="#86198f" class="dark:fill-fuchsia-300">2. HỆ HORMONE CÂY</text>
      <text x="12" y="52" font-size="11" fill="#a21caf" class="dark:fill-fuchsia-400">• Auxin: Kéo dài tế bào, ưu thế ngọn</text>
      <text x="12" y="72" font-size="11" fill="#a21caf" class="dark:fill-fuchsia-400">• GA: Dài lóng thân, phá ngủ hạt</text>
      <text x="12" y="92" font-size="11" fill="#a21caf" class="dark:fill-fuchsia-400">• Cytokinin: Phân chia TB, nở chồi bên</text>
      <text x="12" y="112" font-size="11" fill="#a21caf" class="dark:fill-fuchsia-400">• ABA: Đóng khí khổng hạn hán, ngủ hạt</text>
      <text x="12" y="132" font-size="11" fill="#a21caf" class="dark:fill-fuchsia-400">• Ethylene: Khí kích chín quả, rụng lá</text>
      <rect x="20" y="148" width="150" height="22" rx="6" fill="#d946ef" />
      <text x="95" y="163" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">Tương quan kích thích / ức chế</text>
    </g>

    <!-- 3. Biến thái hoàn toàn -->
    <g transform="translate(450, 55)">
      <rect width="200" height="180" rx="10" fill="#fef2f2" class="dark:fill-rose-950/40" stroke="#f43f5e" stroke-width="1.5" />
      <text x="100" y="26" text-anchor="middle" font-weight="bold" font-size="13" fill="#9f1239" class="dark:fill-rose-300">3. BIẾN THÁI HOÀN TOÀN</text>
      <text x="12" y="52" font-size="11" fill="#be123c" class="dark:fill-rose-400">• Chu trình: Trứng → Sâu non → Nhộng → Bướm</text>
      <text x="12" y="72" font-size="11" fill="#be123c" class="dark:fill-rose-400">• Ấu trùng khác biệt hoàn toàn con lớn</text>
      <text x="12" y="92" font-size="11" fill="#be123c" class="dark:fill-rose-400">• Qua giai đoạn kén Nhộng tái cấu trúc</text>
      <text x="12" y="112" font-size="11" fill="#be123c" class="dark:fill-rose-400">• Ecdysone: Kích thích lột xác, hóa nhộng</text>
      <text x="12" y="132" font-size="11" fill="#be123c" class="dark:fill-rose-400">• Juvenile: Duy trì sâu non, ức chế nhộng</text>
      <rect x="20" y="148" width="160" height="22" rx="6" fill="#f43f5e" />
      <text x="100" y="163" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">Gặp ở: Tằm, bướm, ruồi, muỗi, ếch</text>
    </g>

    <!-- 4. Biến thái không hoàn toàn -->
    <g transform="translate(670, 55)">
      <rect width="180" height="180" rx="10" fill="#f8fafc" class="dark:fill-slate-800/80" stroke="#64748b" stroke-width="1.5" />
      <text x="90" y="26" text-anchor="middle" font-weight="bold" font-size="13" fill="#334155" class="dark:fill-slate-300">4. BIẾN THÁI KHÔNG HT</text>
      <text x="12" y="52" font-size="11" fill="#475569" class="dark:fill-slate-400">• Trứng → Ấu trùng (Ấu trùng gần giống lớn)</text>
      <text x="12" y="72" font-size="11" fill="#475569" class="dark:fill-slate-400">• Lột xác nhiều lần → Trưởng thành</text>
      <text x="12" y="92" font-size="11" fill="#475569" class="dark:fill-slate-400">• KHÔNG qua giai đoạn Nhộng</text>
      <text x="12" y="112" font-size="11" fill="#475569" class="dark:fill-slate-400">• Gặp ở: Châu chấu, cào cào, gián, tôm</text>
      <text x="12" y="132" font-size="11" fill="#475569" class="dark:fill-slate-400">• Không biến thái: Người, thú, chim, cá</text>
      <rect x="15" y="148" width="150" height="22" rx="6" fill="#64748b" />
      <text x="90" y="163" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">Thyroxine xúc tác nòng nọc rụng đuôi</text>
    </g>
  </svg>`,

  "nhom-6": `<svg viewBox="0 0 880 260" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
    <rect width="880" height="260" rx="16" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
    <text x="440" y="30" text-anchor="middle" font-weight="bold" font-size="15" fill="#0f172a" class="dark:fill-white">SƠ ĐỒ NHÓM 6: SINH SẢN (CẤU TẠO HOA, THỤ TINH KÉP & ĐIỀU HÒA SINH SẢN ĐỘNG VẬT)</text>

    <!-- 1. Hoa & Thể giao tử -->
    <g transform="translate(30, 55)">
      <rect width="190" height="180" rx="10" fill="#fdf2f8" class="dark:fill-pink-950/40" stroke="#f472b6" stroke-width="1.5" />
      <text x="95" y="26" text-anchor="middle" font-weight="bold" font-size="13" fill="#9d174d" class="dark:fill-pink-300">1. CẤU TẠO HOA</text>
      <text x="12" y="52" font-size="11" fill="#be185d" class="dark:fill-pink-400">• Đài hoa, cánh hoa (tràng hoa)</text>
      <text x="12" y="72" font-size="11" fill="#be185d" class="dark:fill-pink-400">• Nhị (đực): Bao phấn chứa hạt phấn</text>
      <text x="12" y="92" font-size="11" fill="#be185d" class="dark:fill-pink-400">  Hạt phấn chứa 2 tinh tử (n)</text>
      <text x="12" y="112" font-size="11" fill="#be185d" class="dark:fill-pink-400">• Nhụy (cái): Đầu, vòi, bầu chứa noãn</text>
      <text x="12" y="132" font-size="11" fill="#be185d" class="dark:fill-pink-400">  Túi phôi gồm Noãn (n) + Nhân cực (2n)</text>
      <rect x="20" y="148" width="150" height="22" rx="6" fill="#f472b6" />
      <text x="95" y="163" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">Cơ quan sinh sản hữu tính cây</text>
    </g>

    <!-- 2. Thụ tinh kép -->
    <g transform="translate(240, 55)">
      <rect width="210" height="180" rx="10" fill="#f0fdf4" class="dark:fill-emerald-950/40" stroke="#10b981" stroke-width="1.5" />
      <text x="105" y="26" text-anchor="middle" font-weight="bold" font-size="13" fill="#065f46" class="dark:fill-emerald-300">2. HIỆN TƯỢNG THỤ TINH KÉP</text>
      <text x="12" y="52" font-size="11" fill="#047857" class="dark:fill-emerald-400">• Ống phấn dẫn 2 tinh tử vào lỗ noãn:</text>
      <text x="12" y="74" font-size="11" font-weight="bold" fill="#059669">  Tinh tử 1 (n) + Noãn cầu (n)</text>
      <text x="25" y="90" font-size="11" fill="#047857" class="dark:fill-emerald-400">→ Hợp tử (2n) phát triển thành Phôi</text>
      <text x="12" y="112" font-size="11" font-weight="bold" fill="#059669">  Tinh tử 2 (n) + Nhân cực (2n)</text>
      <text x="25" y="128" font-size="11" fill="#047857" class="dark:fill-emerald-400">→ Nội nhũ (3n) dự trữ dưỡng chất</text>
      <rect x="20" y="148" width="170" height="22" rx="6" fill="#10b981" />
      <text x="105" y="163" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">Noãn → Hạt; Bầu nhụy → Quả</text>
    </g>

    <!-- 3. Sinh sản động vật -->
    <g transform="translate(470, 55)">
      <rect width="190" height="180" rx="10" fill="#eff6ff" class="dark:fill-blue-950/40" stroke="#3b82f6" stroke-width="1.5" />
      <text x="95" y="26" text-anchor="middle" font-weight="bold" font-size="13" fill="#1e40af" class="dark:fill-blue-300">3. SINH TINH & SINH TRỨNG</text>
      <text x="12" y="52" font-size="11" fill="#1d4ed8" class="dark:fill-blue-400">• Ống sinh tinh: 1 tế bào mầm 2n qua</text>
      <text x="12" y="72" font-size="11" fill="#1d4ed8" class="dark:fill-blue-400">  giảm phân tạo 4 tinh trùng (n)</text>
      <text x="12" y="92" font-size="11" fill="#1d4ed8" class="dark:fill-blue-400">• Buồng trứng: 1 tế bào mầm 2n qua</text>
      <text x="12" y="112" font-size="11" fill="#1d4ed8" class="dark:fill-blue-400">  giảm phân tạo 1 trứng (n) + 3 thể cực</text>
      <text x="12" y="132" font-size="11" fill="#1d4ed8" class="dark:fill-blue-400">• Thụ tinh trong bảo vệ hợp tử tối đa</text>
      <rect x="20" y="148" width="150" height="22" rx="6" fill="#3b82f6" />
      <text x="95" y="163" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">Đơn tính vs Lưỡng tính thụ tinh chéo</text>
    </g>

    <!-- 4. Điều hòa nội tiết & Tránh thai -->
    <g transform="translate(680, 55)">
      <rect width="170" height="180" rx="10" fill="#fffbeb" class="dark:fill-amber-950/40" stroke="#f59e0b" stroke-width="1.5" />
      <text x="85" y="26" text-anchor="middle" font-weight="bold" font-size="13" fill="#92400e" class="dark:fill-amber-300">4. ĐIỀU HÒA & TRÁNH THAI</text>
      <text x="12" y="52" font-size="11" fill="#b45309" class="dark:fill-amber-400">• Trục: Dưới đồi → Tuyến yên</text>
      <text x="12" y="72" font-size="11" fill="#b45309" class="dark:fill-amber-400">  → Tuyến sinh dục (FSH, LH)</text>
      <text x="12" y="92" font-size="11" fill="#b45309" class="dark:fill-amber-400">• Phản hồi âm (Feedback loop)</text>
      <text x="12" y="112" font-size="11" fill="#b45309" class="dark:fill-amber-400">• Thuốc tránh thai: Ức chế FSH/LH</text>
      <text x="12" y="132" font-size="11" fill="#b45309" class="dark:fill-amber-400">• Bao cao su: Ngừa thai & STDs</text>
      <rect x="15" y="148" width="140" height="22" rx="6" fill="#f59e0b" />
      <text x="85" y="163" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">Kế hoạch hóa gia đình an toàn</text>
    </g>
  </svg>`,

  "nhom-7": `<svg viewBox="0 0 880 260" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
    <rect width="880" height="260" rx="16" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
    <text x="440" y="30" text-anchor="middle" font-weight="bold" font-size="15" fill="#0f172a" class="dark:fill-white">SƠ ĐỒ NHÓM 7: TỔNG HỢP LIÊN HỆ CÁC QUÁ TRÌNH SINH LÍ & CÁC NGÀNH NGHỀ LIÊN QUAN</text>

    <!-- Cây xanh: Rễ Thân Lá -->
    <g transform="translate(35, 55)">
      <rect width="250" height="180" rx="10" fill="#ecfdf5" class="dark:fill-emerald-950/40" stroke="#10b981" stroke-width="1.5" />
      <text x="125" y="26" text-anchor="middle" font-weight="bold" font-size="13" fill="#065f46" class="dark:fill-emerald-300">HỆ THỐNG SINH LÍ Ở CÂY</text>
      <text x="15" y="52" font-size="11" fill="#047857" class="dark:fill-emerald-400">• Rễ: Hút H₂O, khoáng nuôi lá</text>
      <text x="15" y="74" font-size="11" fill="#047857" class="dark:fill-emerald-400">• Thân: Mạch gỗ dẫn lên, mạch rây dẫn xuống</text>
      <text x="15" y="96" font-size="11" fill="#047857" class="dark:fill-emerald-400">• Lá: Quang hợp tạo đường nuôi rễ & thân</text>
      <text x="15" y="118" font-size="11" fill="#047857" class="dark:fill-emerald-400">• Thoát hơi nước: Tạo sức hút kéo nhựa</text>
      <text x="15" y="140" font-size="11" fill="#047857" class="dark:fill-emerald-400">• Hô hấp: Cấp ATP cho rễ hút khoáng</text>
      <rect x="25" y="152" width="200" height="20" rx="5" fill="#10b981" />
      <text x="125" y="166" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">Hệ thống mở thống nhất toàn vẹn</text>
    </g>

    <!-- Động vật & Người -->
    <g transform="translate(315, 55)">
      <rect width="250" height="180" rx="10" fill="#eff6ff" class="dark:fill-blue-950/40" stroke="#3b82f6" stroke-width="1.5" />
      <text x="125" y="26" text-anchor="middle" font-weight="bold" font-size="13" fill="#1e40af" class="dark:fill-blue-300">HỆ THỐNG CƠ QUAN ĐỘNG VẬT</text>
      <text x="15" y="52" font-size="11" fill="#1d4ed8" class="dark:fill-blue-400">• Tiêu hóa: Hấp thu chất dinh dưỡng vào máu</text>
      <text x="15" y="74" font-size="11" fill="#1d4ed8" class="dark:fill-blue-400">• Hô hấp: Lấy O₂ và thải CO₂ qua phế nang</text>
      <text x="15" y="96" font-size="11" fill="#1d4ed8" class="dark:fill-blue-400">• Tuần hoàn: Tim bơm luân chuyển dịch nuôi TB</text>
      <text x="15" y="118" font-size="11" fill="#1d4ed8" class="dark:fill-blue-400">• Bài tiết (Thận): Lọc máu duy trì nội môi</text>
      <text x="15" y="140" font-size="11" fill="#1d4ed8" class="dark:fill-blue-400">• Thần kinh & Thể dịch: Chỉ huy toàn bộ</text>
      <rect x="25" y="152" width="200" height="20" rx="5" fill="#3b82f6" />
      <text x="125" y="166" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">Cơ chế tự điều chỉnh phản hồi âm</text>
    </g>

    <!-- Ngành nghề tương lai -->
    <g transform="translate(595, 55)">
      <rect width="250" height="180" rx="10" fill="#faf5ff" class="dark:fill-purple-950/40" stroke="#a855f7" stroke-width="1.5" />
      <text x="125" y="26" text-anchor="middle" font-weight="bold" font-size="13" fill="#6b21a8" class="dark:fill-purple-300">NGÀNH NGHỀ & ỨNG DỤNG</text>
      <text x="15" y="52" font-size="11" fill="#7e22ce" class="dark:fill-purple-400">• Y học & Dược: Bác sĩ, Dược sĩ, Tế bào gốc</text>
      <text x="15" y="74" font-size="11" fill="#7e22ce" class="dark:fill-purple-400">• Nông - Lâm - Thủy sản: Chọn giống, thú y</text>
      <text x="15" y="96" font-size="11" fill="#7e22ce" class="dark:fill-purple-400">• Công nghệ sinh học: Bioreactor, GMO</text>
      <text x="15" y="118" font-size="11" fill="#7e22ce" class="dark:fill-purple-400">• Đạo đức sinh học: Nguyên tắc 3R</text>
      <text x="15" y="140" font-size="11" fill="#7e22ce" class="dark:fill-purple-400">• Bảo vệ sức khỏe & Đa dạng sinh thái</text>
      <rect x="25" y="152" width="200" height="20" rx="5" fill="#a855f7" />
      <text x="125" y="166" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">Khoa học sự sống phục vụ nhân loại</text>
    </g>
  </svg>`
};

module.exports = {
  masterGroups,
  lessonDiagrams
};
