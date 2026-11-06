// scratch/sinhhoc10_diagrams_p2.js
const fs = require('fs');
const diagramsP1 = require('./sinhhoc10_diagrams_p1.js');

const diagramsP2 = {
  14: `<svg viewBox="0 0 760 280" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="760" height="280" rx="16" fill="#f0fdf4" class="dark:fill-slate-900"/>
    <text x="380" y="25" text-anchor="middle" font-size="13.5" font-weight="800" fill="#065f46">SƠ ĐỒ LIÊN KẾT HÔ HẤP TẾ BÀO – LÊN MEN &amp; QUANG HỢP TRONG TẾ BÀO NHÂN THỰC</text>
    <!-- Left Box: Cellular Respiration & Fermentation -->
    <rect x="18" y="42" width="352" height="222" rx="12" fill="#ffffff" stroke="#e11d48" stroke-width="2"/>
    <text x="194" y="62" text-anchor="middle" font-size="11" font-weight="800" fill="#be123c">1. PHÂN GIẢI CHẤT HỮU CƠ (HÔ HẤP &amp; LÊN MEN)</text>
    <rect x="32" y="74" width="324" height="40" rx="8" fill="#ffe4e6" stroke="#f43f5e"/>
    <text x="194" y="91" text-anchor="middle" font-size="9.5" font-weight="800" fill="#be123c">① ĐƯỜNG PHÂN (Tại Tế bào chất / Bào tương)</text>
    <text x="194" y="106" text-anchor="middle" font-size="9" fill="#334155">1 Glucose (6C) → 2 Pyruvate (3C) + 2 NADH + <tspan font-weight="800" fill="#be123c">2 ATP</tspan></text>
    <!-- Branch left: Aerobic in Mitochondria -->
    <rect x="32" y="124" width="200" height="126" rx="8" fill="#fff1f2" stroke="#e11d48" stroke-width="1.5"/>
    <text x="132" y="142" text-anchor="middle" font-size="9.5" font-weight="800" fill="#9f1239">Có O₂: HÔ HẤP HIẾU KHÍ (Ti thể)</text>
    <text x="132" y="160" text-anchor="middle" font-size="8.5" fill="#334155">② Oxy hoá Pyruvate → Acetyl-CoA</text>
    <text x="132" y="176" text-anchor="middle" font-size="8.5" fill="#334155">&amp; Chu trình Krebs (Chất nền): <tspan font-weight="700">2 ATP</tspan></text>
    <text x="132" y="194" text-anchor="middle" font-size="8.5" fill="#334155">③ Chuỗi truyền e⁻ (Màng trong):</text>
    <text x="132" y="210" text-anchor="middle" font-size="9" font-weight="800" fill="#be123c">O₂ nhận e⁻ → H₂O + 26–28 ATP</text>
    <text x="132" y="234" text-anchor="middle" font-size="9.5" font-weight="800" fill="#047857">Tổng: 30 – 32 ATP / 1 Glucose</text>
    <!-- Branch right: Fermentation -->
    <rect x="240" y="124" width="116" height="126" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
    <text x="298" y="142" text-anchor="middle" font-size="9.5" font-weight="800" fill="#b45309">Thiếu O₂: LÊN MEN</text>
    <text x="298" y="160" text-anchor="middle" font-size="8.5" fill="#334155">Tại Bào tương</text>
    <text x="298" y="178" text-anchor="middle" font-size="8.5" fill="#334155">Tái sinh NAD⁺:</text>
    <text x="298" y="195" text-anchor="middle" font-size="8.5" font-weight="700" fill="#92400e">• Lactate (Sữa chua)</text>
    <text x="298" y="211" text-anchor="middle" font-size="8.5" font-weight="700" fill="#92400e">• Ethanol + CO₂</text>
    <text x="298" y="234" text-anchor="middle" font-size="9.5" font-weight="800" fill="#b45309">Tổng: Chỉ 2 ATP</text>

    <!-- Right Box: Photosynthesis -->
    <rect x="386" y="42" width="356" height="222" rx="12" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
    <text x="564" y="62" text-anchor="middle" font-size="11" font-weight="800" fill="#15803d">2. TỔNG HỢP CHẤT HỮU CƠ: QUANG HỢP (LỤC LẠP)</text>
    <!-- Light Reactions -->
    <rect x="402" y="76" width="150" height="132" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="1.8"/>
    <text x="477" y="96" text-anchor="middle" font-size="10" font-weight="800" fill="#15803d">PHA SÁNG</text>
    <text x="477" y="112" text-anchor="middle" font-size="8.5" font-weight="700" fill="#047857">(Màng Thylakoid)</text>
    <text x="477" y="132" text-anchor="middle" font-size="8.5" fill="#334155">• Diệp lục hấp thu ánh sáng</text>
    <text x="477" y="148" text-anchor="middle" font-size="8.5" fill="#334155">• Quang phân li H₂O</text>
    <text x="477" y="166" text-anchor="middle" font-size="9" font-weight="800" fill="#0284c7">→ Giải phóng khí O₂↑</text>
    <text x="477" y="186" text-anchor="middle" font-size="9" font-weight="800" fill="#be123c">→ Tạo ATP &amp; NADPH</text>
    <!-- Arrows between Light and Calvin -->
    <text x="565" y="128" text-anchor="middle" font-size="14" font-weight="900" fill="#be123c">→</text>
    <text x="565" y="165" text-anchor="middle" font-size="14" font-weight="900" fill="#0284c7">←</text>
    <!-- Calvin Cycle -->
    <rect x="578" y="76" width="150" height="132" rx="10" fill="#ecfdf5" stroke="#0d9488" stroke-width="1.8"/>
    <text x="653" y="96" text-anchor="middle" font-size="10" font-weight="800" fill="#0f766e">CHU TRÌNH CALVIN</text>
    <text x="653" y="112" text-anchor="middle" font-size="8.5" font-weight="700" fill="#0d9488">(Chất nền Stroma)</text>
    <text x="653" y="132" text-anchor="middle" font-size="8.5" fill="#334155">• Nhận CO₂ từ khí quyển</text>
    <text x="653" y="148" text-anchor="middle" font-size="8.5" fill="#334155">• Dùng ATP &amp; NADPH</text>
    <text x="653" y="166" text-anchor="middle" font-size="9" font-weight="800" fill="#065f46">→ Tạo C₆H₁₂O₆ (Glucose)</text>
    <text x="653" y="186" text-anchor="middle" font-size="8.5" fill="#0369a1">Trả lại ADP + Pᵢ, NADP⁺</text>
    <!-- Bottom note -->
    <rect x="402" y="218" width="326" height="32" rx="6" fill="#f0fdf4" stroke="#86efac"/>
    <text x="565" y="238" text-anchor="middle" font-size="9" font-weight="700" fill="#166534">6CO₂ + 6H₂O + Quang năng → C₆H₁₂O₆ + 6O₂ (Tích luỹ hoá năng)</text>
  </svg>`,

  15: `<svg viewBox="0 0 760 255" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="760" height="255" rx="16" fill="#f0f9ff" class="dark:fill-slate-900"/>
    <text x="380" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#0369a1">THỰC HÀNH: ẢNH HƯỞNG CỦA NHIỆT ĐỘ, pH ĐẾN HOẠT TÍNH ENZYME &amp; AMYLASE</text>
    <!-- Left Chart: Temperature Curve -->
    <rect x="22" y="45" width="235" height="192" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
    <text x="139" y="66" text-anchor="middle" font-size="10.5" font-weight="800" fill="#0369a1">1. ĐỒ THỊ THEO NHIỆT ĐỘ (t°C)</text>
    <line x1="48" y1="190" x2="232" y2="190" stroke="#475569" stroke-width="2"/>
    <line x1="48" y1="190" x2="48" y2="85" stroke="#475569" stroke-width="2"/>
    <path d="M 52 182 Q 115 160, 152 94 Q 178 94, 198 188" fill="none" stroke="#e11d48" stroke-width="3"/>
    <line x1="152" y1="94" x2="152" y2="190" stroke="#059669" stroke-width="1.5" stroke-dasharray="3 3"/>
    <text x="152" y="88" text-anchor="middle" font-size="9" font-weight="800" fill="#059669">Tối ưu (~37°C)</text>
    <text x="65" y="205" font-size="8.5" fill="#334155">0°C (Bất hoạt)</text>
    <text x="195" y="205" font-size="8.5" fill="#dc2626" font-weight="700">&gt;60°C (Biến tính)</text>
    <text x="139" y="224" text-anchor="middle" font-size="9" fill="#475569">Nhiệt cao phá vỡ cấu hình 3D vĩnh viễn</text>

    <!-- Center Chart: pH Curve -->
    <rect x="272" y="45" width="220" height="192" rx="12" fill="#ffffff" stroke="#0d9488" stroke-width="2"/>
    <text x="382" y="66" text-anchor="middle" font-size="10.5" font-weight="800" fill="#0f766e">2. ĐỒ THỊ THEO ĐỘ pH</text>
    <line x1="295" y1="190" x2="472" y2="190" stroke="#475669" stroke-width="2"/>
    <line x1="295" y1="190" x2="295" y2="85" stroke="#475669" stroke-width="2"/>
    <!-- Pepsin pH 2 -->
    <path d="M 302 188 Q 325 95, 348 188" fill="none" stroke="#d97706" stroke-width="2.5"/>
    <text x="325" y="92" text-anchor="middle" font-size="8.5" font-weight="800" fill="#b45309">Pepsin (pH~2)</text>
    <!-- Amylase pH 7 -->
    <path d="M 355 188 Q 392 95, 428 188" fill="none" stroke="#059669" stroke-width="2.5"/>
    <text x="392" y="108" text-anchor="middle" font-size="8.5" font-weight="800" fill="#059669">Amylase (pH~7)</text>
    <text x="382" y="206" text-anchor="middle" font-size="8.5" fill="#334155">pH:  1    2    4    6    7    8    10</text>
    <text x="382" y="224" text-anchor="middle" font-size="9" fill="#475569">Mỗi enzyme có pH tối ưu đặc trưng</text>

    <!-- Right Box: Amylase + Iodine Test -->
    <rect x="506" y="45" width="232" height="192" rx="12" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
    <text x="622" y="66" text-anchor="middle" font-size="10.5" font-weight="800" fill="#6d28d9">3. KIỂM TRA AMYLASE + LUGOL</text>
    <rect x="522" y="80" width="200" height="62" rx="8" fill="#fef3c7" stroke="#d97706"/>
    <text x="622" y="98" text-anchor="middle" font-size="9.5" font-weight="800" fill="#b45309">Ống 37°C (pH 7): MẤT MÀU XANH</text>
    <text x="622" y="114" text-anchor="middle" font-size="8.5" fill="#334155">Tinh bột đã bị Amylase thuỷ phân</text>
    <text x="622" y="129" text-anchor="middle" font-size="8.5" font-weight="700" fill="#059669">thành đường Maltose hoàn toàn</text>

    <rect x="522" y="152" width="200" height="68" rx="8" fill="#dbeafe" stroke="#2563eb"/>
    <text x="622" y="170" text-anchor="middle" font-size="9.5" font-weight="800" fill="#1e3a8a">Ống Đun sôi 100°C / Nước đá:</text>
    <text x="622" y="186" text-anchor="middle" font-size="9" font-weight="800" fill="#1d4ed8">CÒN MÀU XANH TÍM ĐẬM</text>
    <text x="622" y="204" text-anchor="middle" font-size="8.5" fill="#334155">Tinh bột chưa bị phân giải</text>
  </svg>`,

  16: `<svg viewBox="0 0 760 275" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="760" height="275" rx="16" fill="#f0fdf4" class="dark:fill-slate-900"/>
    <text x="380" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#065f46">CHU KÌ TẾ BÀO (G₁ – S – G₂ – M), ĐIỂM KIỂM SOÁT &amp; 4 KÌ NGUYÊN PHÂN</text>
    <!-- Left: Cell Cycle Wheel -->
    <rect x="20" y="44" width="250" height="214" rx="12" fill="#ffffff" stroke="#059669" stroke-width="2"/>
    <text x="145" y="64" text-anchor="middle" font-size="11" font-weight="800" fill="#065f46">1. VÒNG CHU KÌ TẾ BÀO</text>
    <circle cx="145" cy="145" r="58" fill="none" stroke="#10b981" stroke-width="18"/>
    <path d="M 145 87 A 58 58 0 0 1 203 145" fill="none" stroke="#f59e0b" stroke-width="18"/>
    <text x="145" y="142" text-anchor="middle" font-size="10" font-weight="800" fill="#065f46">KÌ TRUNG GIAN</text>
    <text x="145" y="156" text-anchor="middle" font-size="9" font-weight="700" fill="#047857">G₁ → S → G₂ (90%)</text>
    <text x="205" y="95" font-size="9.5" font-weight="800" fill="#d97706">Pha M</text>
    <text x="82" y="102" font-size="9.5" font-weight="800" fill="#047857">Pha G₂</text>
    <text x="80" y="195" font-size="9.5" font-weight="800" fill="#0284c7">Pha S (x2 DNA)</text>
    <text x="195" y="195" font-size="9.5" font-weight="800" fill="#059669">Pha G₁</text>
    <text x="145" y="226" text-anchor="middle" font-size="9" font-weight="700" fill="#e11d48">🛑 3 Điểm kiểm soát: G₁/S • G₂/M • Thoi</text>
    <text x="145" y="242" text-anchor="middle" font-size="8.5" fill="#64748b">Mất kiểm soát → Khối u / Ung thư</text>

    <!-- Right: 4 Stages of Mitosis -->
    <rect x="285" y="44" width="455" height="214" rx="12" fill="#ffffff" stroke="#0d9488" stroke-width="2"/>
    <text x="512" y="64" text-anchor="middle" font-size="11" font-weight="800" fill="#0f766e">2. BỐN KÌ NGUYÊN PHÂN (TỪ 1 TẾ BÀO 2n → 2 TẾ BÀO CON 2n GIỐNG HỆT MẸ)</text>
    <!-- Prophase -->
    <g transform="translate(300, 78)" text-anchor="middle">
      <rect x="0" y="0" width="98" height="122" rx="8" fill="#f8fafc" stroke="#94a3b8"/>
      <text x="49" y="18" font-size="10" font-weight="800" fill="#0f766e">1. KÌ ĐẦU</text>
      <circle cx="49" cy="58" r="26" fill="#ecfdf5" stroke="#059669" stroke-dasharray="4 2" stroke-width="1.8"/>
      <text x="49" y="62" font-size="14" font-weight="800" fill="#dc2626">XX</text>
      <text x="49" y="98" font-size="8.5" fill="#334155">NST kép co xoắn</text>
      <text x="49" y="112" font-size="8.5" fill="#64748b">Màng nhân tiêu biến</text>
    </g>
    <!-- Metaphase -->
    <g transform="translate(408, 78)" text-anchor="middle">
      <rect x="0" y="0" width="98" height="122" rx="8" fill="#f8fafc" stroke="#0284c7" stroke-width="1.5"/>
      <text x="49" y="18" font-size="10" font-weight="800" fill="#0369a1">2. KÌ GIỮA</text>
      <circle cx="49" cy="58" r="26" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.8"/>
      <line x1="23" y1="58" x2="75" y2="58" stroke="#94a3b8" stroke-dasharray="2 2"/>
      <text x="49" y="62" font-size="13" font-weight="800" fill="#dc2626">X X</text>
      <text x="49" y="98" font-size="8.5" font-weight="700" fill="#0369a1">Xếp 1 hàng xích đạo</text>
      <text x="49" y="112" font-size="8.5" fill="#64748b">Xoắn cực đại rõ nhất</text>
    </g>
    <!-- Anaphase -->
    <g transform="translate(516, 78)" text-anchor="middle">
      <rect x="0" y="0" width="98" height="122" rx="8" fill="#f8fafc" stroke="#e11d48" stroke-width="1.5"/>
      <text x="49" y="18" font-size="10" font-weight="800" fill="#be123c">3. KÌ SAU</text>
      <ellipse cx="49" cy="58" rx="28" ry="24" fill="#fff1f2" stroke="#e11d48" stroke-width="1.8"/>
      <text x="49" y="50" font-size="11" font-weight="800" fill="#dc2626">∧ ∧</text>
      <text x="49" y="72" font-size="11" font-weight="800" fill="#dc2626">∨ ∨</text>
      <text x="49" y="98" font-size="8.5" font-weight="700" fill="#be123c">Tách chromatid chị em</text>
      <text x="49" y="112" font-size="8.5" fill="#64748b">Phân li về 2 cực (4n đơn)</text>
    </g>
    <!-- Telophase -->
    <g transform="translate(624, 78)" text-anchor="middle">
      <rect x="0" y="0" width="100" height="122" rx="8" fill="#f8fafc" stroke="#059669" stroke-width="1.5"/>
      <text x="50" y="18" font-size="10" font-weight="800" fill="#065f46">4. KÌ CUỐI</text>
      <circle cx="34" cy="58" r="16" fill="#d1fae5" stroke="#059669" stroke-width="1.8"/>
      <circle cx="66" cy="58" r="16" fill="#d1fae5" stroke="#059669" stroke-width="1.8"/>
      <text x="34" y="61" font-size="9" font-weight="800" fill="#065f46">2n</text>
      <text x="66" y="61" font-size="9" font-weight="800" fill="#065f46">2n</text>
      <text x="50" y="98" font-size="8.5" font-weight="700" fill="#065f46">NST dãn xoắn, 2 nhân</text>
      <text x="50" y="112" font-size="8.5" fill="#64748b">Chia TBC: Thắt eo / Vách</text>
    </g>
    <text x="512" y="222" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0f766e">• Động vật: Thắt eo màng sinh chất từ ngoài vào   • Thực vật: Hình thành vách ngăn từ trong ra</text>
    <text x="512" y="242" text-anchor="middle" font-size="9.5" font-weight="800" fill="#047857">Ý nghĩa: Sinh trưởng, thay thế tế bào già/tổn thương, tái sinh và cơ sở sinh sản vô tính</text>
  </svg>`,

  17: `<svg viewBox="0 0 760 270" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="760" height="270" rx="16" fill="#fdf4ff" class="dark:fill-slate-900"/>
    <text x="380" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#7e22ce">SƠ ĐỒ GIẢM PHÂN TẠO GIAO TỬ &amp; CƠ CHẾ PHÁT SINH BIẾN DỊ TỔ HỢP (2n → 4n đơn)</text>
    <!-- Cell 2n parent -->
    <g transform="translate(20, 56)" text-anchor="middle">
      <rect x="0" y="0" width="120" height="145" rx="12" fill="#ffffff" stroke="#9333ea" stroke-width="2"/>
      <text x="60" y="22" font-size="10" font-weight="800" fill="#6b21a8">TẾ BÀO MẸ (2n)</text>
      <circle cx="60" cy="68" r="28" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
      <text x="60" y="72" font-size="12" font-weight="800" fill="#7e22ce">2n đơn</text>
      <text x="60" y="114" font-size="8.5" font-weight="700" fill="#0284c7">Nhân đôi DNA 1 lần</text>
      <text x="60" y="130" font-size="8.5" fill="#334155">trước Giảm phân I</text>
    </g>
    <text x="152" y="132" font-size="16" font-weight="900" fill="#9333ea">→</text>
    <!-- Meiosis I -->
    <g transform="translate(166, 46)" text-anchor="middle">
      <rect x="0" y="0" width="215" height="165" rx="12" fill="#ffffff" stroke="#e11d48" stroke-width="2.5"/>
      <text x="107" y="22" font-size="10.5" font-weight="800" fill="#be123c">GIẢM PHÂN I (GIẢM NHIỄM)</text>
      <rect x="14" y="34" width="187" height="72" rx="8" fill="#fff1f2" stroke="#f43f5e"/>
      <text x="107" y="52" font-size="9.5" font-weight="800" fill="#be123c">• Kì đầu I: Tiếp hợp &amp; Trao đổi chéo</text>
      <text x="107" y="69" font-size="9.5" font-weight="800" fill="#0369a1">• Kì giữa I: Xếp thành 2 HÀNG</text>
      <text x="107" y="86" font-size="9.5" font-weight="700" fill="#334155">• Kì sau I: Tách cặp NST tương đồng</text>
      <circle cx="68" cy="134" r="20" fill="#ffe4e6" stroke="#e11d48" stroke-width="2"/><text x="68" y="138" font-size="9.5" font-weight="800" fill="#be123c">n kép</text>
      <circle cx="146" cy="134" r="20" fill="#ffe4e6" stroke="#e11d48" stroke-width="2"/><text x="146" y="138" font-size="9.5" font-weight="800" fill="#be123c">n kép</text>
    </g>
    <text x="394" y="132" font-size="16" font-weight="900" fill="#059669">→</text>
    <!-- Meiosis II -->
    <g transform="translate(408, 46)" text-anchor="middle">
      <rect x="0" y="0" width="332" height="165" rx="12" fill="#ffffff" stroke="#059669" stroke-width="2"/>
      <text x="166" y="22" font-size="10.5" font-weight="800" fill="#065f46">GIẢM PHÂN II (KHÔNG NHÂN ĐÔI DNA)</text>
      <rect x="16" y="34" width="300" height="54" rx="8" fill="#ecfdf5" stroke="#10b981"/>
      <text x="166" y="54" font-size="9.5" font-weight="800" fill="#047857">• Kì giữa II: Xếp 1 HÀNG trên mặt phẳng xích đạo</text>
      <text x="166" y="72" font-size="9.5" font-weight="700" fill="#334155">• Kì sau II: Tách 2 chromatid chị em về 2 cực</text>
      <!-- 4 haploid cells -->
      <circle cx="58" cy="126" r="22" fill="#d1fae5" stroke="#059669" stroke-width="2"/><text x="58" y="130" font-size="10" font-weight="800" fill="#065f46">n đơn</text>
      <circle cx="130" cy="126" r="22" fill="#d1fae5" stroke="#059669" stroke-width="2"/><text x="130" y="130" font-size="10" font-weight="800" fill="#065f46">n đơn</text>
      <circle cx="202" cy="126" r="22" fill="#d1fae5" stroke="#059669" stroke-width="2"/><text x="202" y="130" font-size="10" font-weight="800" fill="#065f46">n đơn</text>
      <circle cx="274" cy="126" r="22" fill="#d1fae5" stroke="#059669" stroke-width="2"/><text x="274" y="130" font-size="10" font-weight="800" fill="#065f46">n đơn</text>
    </g>
    <!-- Bottom Summary -->
    <rect x="20" y="222" width="720" height="34" rx="8" fill="#f3e8ff" stroke="#c084fc"/>
    <text x="380" y="243" text-anchor="middle" font-size="10" font-weight="800" fill="#6b21a8">Kết quả: 1 tế bào mẹ (2n) → 4 tế bào con đơn bội (n) đa dạng di truyền • Phối hợp Thụ tinh (n × n = 2n) duy trì bộ NST loài</text>
  </svg>`,

  18: `<svg viewBox="0 0 760 250" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="760" height="250" rx="16" fill="#fff1f2" class="dark:fill-slate-900"/>
    <text x="380" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#be123c">THỰC HÀNH: QUY TRÌNH LÀM TIÊU BẢN DẦM ÉP ĐỈNH RỄ HÀNH QUAN SÁT PHÂN BÀO</text>
    <g transform="translate(20, 48)" font-size="9.5" text-anchor="middle">
      <rect x="0" y="0" width="165" height="178" rx="12" fill="#ffffff" stroke="#e11d48" stroke-width="2"/>
      <circle cx="82" cy="24" r="13" fill="#e11d48"/><text x="82" y="28" font-size="11" font-weight="800" fill="#fff">1</text>
      <text x="82" y="54" font-size="10.5" font-weight="800" fill="#be123c">CẮT &amp; CỐ ĐỊNH RỄ</text>
      <text x="82" y="80" fill="#334155">Cắt đầu rễ hành 5 mm</text>
      <text x="82" y="100" fill="#334155">Ngâm cố định trong</text>
      <text x="82" y="118" font-weight="700" fill="#be123c">Dung dịch Carnoy (≥24h)</text>
      <text x="82" y="142" font-size="8.5" fill="#64748b">Giữ nguyên trạng thái</text>
      <text x="82" y="156" font-size="8.5" fill="#64748b">các kì phân bào</text>

      <text x="176" y="92" font-size="16" font-weight="900" fill="#e11d48">→</text>

      <rect x="188" y="0" width="165" height="178" rx="12" fill="#ffffff" stroke="#e11d48" stroke-width="2"/>
      <circle cx="270" cy="24" r="13" fill="#e11d48"/><text x="270" y="28" font-size="11" font-weight="800" fill="#fff">2</text>
      <text x="270" y="54" font-size="10.5" font-weight="800" fill="#be123c">NHUỘM &amp; HƠ NÓNG</text>
      <text x="270" y="80" fill="#334155">Nhuộm thuốc nhuộm</text>
      <text x="270" y="100" font-weight="800" fill="#be123c">Acetocarmine 2%</text>
      <text x="270" y="118" fill="#334155">Hơ ấm nhẹ 5–8 phút</text>
      <text x="270" y="142" font-size="8.5" font-weight="700" fill="#dc2626">(Tuyệt đối không đun sôi)</text>
      <text x="270" y="156" font-size="8.5" fill="#64748b">NST bắt màu đỏ tím đậm</text>

      <text x="364" y="92" font-size="16" font-weight="900" fill="#e11d48">→</text>

      <rect x="376" y="0" width="165" height="178" rx="12" fill="#ffffff" stroke="#e11d48" stroke-width="2"/>
      <circle cx="458" cy="24" r="13" fill="#e11d48"/><text x="458" y="28" font-size="11" font-weight="800" fill="#fff">3</text>
      <text x="458" y="54" font-size="10.5" font-weight="800" fill="#be123c">CẮT CHÓP &amp; DẦM ÉP</text>
      <text x="458" y="80" fill="#334155">Lấy đỉnh mô phân sinh</text>
      <text x="458" y="100" font-weight="700" fill="#be123c">(~1,5 – 2 mm chóp rễ)</text>
      <text x="458" y="118" fill="#334155">Đậy lamen, ép thẳng nhẹ</text>
      <text x="458" y="142" font-size="8.5" fill="#64748b">Dàn đều tế bào thành</text>
      <text x="458" y="156" font-size="8.5" fill="#64748b">một lớp mỏng phẳng</text>

      <text x="552" y="92" font-size="16" font-weight="900" fill="#e11d48">→</text>

      <rect x="564" y="0" width="156" height="178" rx="12" fill="#ffffff" stroke="#059669" stroke-width="2"/>
      <circle cx="642" cy="24" r="13" fill="#059669"/><text x="642" y="28" font-size="11" font-weight="800" fill="#fff">4</text>
      <text x="642" y="54" font-size="10.5" font-weight="800" fill="#065f46">QUAN SÁT 10× → 40×</text>
      <text x="642" y="80" fill="#334155">Tìm vùng phân chia 10×</text>
      <text x="642" y="100" font-weight="700" fill="#065f46">Chuyển 40× nhận diện:</text>
      <text x="642" y="118" fill="#334155">Kì đầu, giữa, sau, cuối</text>
      <text x="642" y="142" font-size="8.5" fill="#64748b">Vẽ hình &amp; chú thích NST</text>
      <text x="642" y="156" font-size="8.5" fill="#64748b">trong báo cáo thực hành</text>
    </g>
  </svg>`,

  19: `<svg viewBox="0 0 760 275" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="760" height="275" rx="16" fill="#f0fdf4" class="dark:fill-slate-900"/>
    <text x="380" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#065f46">CÔNG NGHỆ TẾ BÀO THỰC VẬT (TÍNH TOÀN NĂNG) &amp; ĐỘNG VẬT (CHUYỂN NHÂN)</text>
    <!-- Top Box: Plant Tissue Culture -->
    <rect x="20" y="42" width="720" height="104" rx="12" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
    <text x="380" y="62" text-anchor="middle" font-size="11" font-weight="800" fill="#15803d">1. QUY TRÌNH NUÔI CẤY MÔ TẾ BÀO THỰC VẬT (DỰA TRÊN TÍNH TOÀN NĂNG CỦA TẾ BÀO)</text>
    <g font-size="9.5" font-weight="700" text-anchor="middle">
      <rect x="35" y="74" width="125" height="56" rx="8" fill="#dcfce7" stroke="#16a34a"/>
      <text x="97" y="95" fill="#15803d">Mẫu mô đỉnh chồi</text><text x="97" y="114" font-size="8.5" fill="#334155">Khử trùng sạch bệnh</text>
      <text x="172" y="105" font-size="14" fill="#16a34a">→</text>
      <rect x="184" y="74" width="135" height="56" rx="8" fill="#dcfce7" stroke="#16a34a"/>
      <text x="251" y="95" fill="#15803d">Phản biệt hoá</text><text x="251" y="114" font-size="8.5" fill="#334155">Tạo Mô sẹo (Callus)</text>
      <text x="331" y="105" font-size="14" fill="#16a34a">→</text>
      <rect x="343" y="74" width="165" height="56" rx="8" fill="#fef3c7" stroke="#d97706"/>
      <text x="425" y="95" fill="#b45309">Tái biệt hoá (Hormone)</text><text x="425" y="114" font-size="8.5" fill="#334155">Auxin / Cytokinin → Rễ &amp; Chồi</text>
      <text x="520" y="105" font-size="14" fill="#16a34a">→</text>
      <rect x="532" y="74" width="192" height="56" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="2"/>
      <text x="628" y="95" fill="#065f46">Cây con hoàn chỉnh (In vitro)</text><text x="628" y="114" font-size="8.5" fill="#047857">Nhân nhanh, đồng nhất kiểu gene</text>
    </g>

    <!-- Bottom Box: Somatic Cell Nuclear Transfer (Dolly) -->
    <rect x="20" y="158" width="720" height="104" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
    <text x="380" y="178" text-anchor="middle" font-size="11" font-weight="800" fill="#0369a1">2. NHÂN BẢN VÔ TÍNH ĐỘNG VẬT BẰNG CHUYỂN NHÂN (CỪU DOLLY) &amp; TẾ BÀO GỐC</text>
    <g font-size="9.5" font-weight="700" text-anchor="middle">
      <rect x="35" y="190" width="155" height="56" rx="8" fill="#e0f2fe" stroke="#0284c7"/>
      <text x="112" y="210" fill="#0369a1">Nhân (2n) tuyến vú</text><text x="112" y="228" font-size="8.5" fill="#334155">Cừu mặt trắng (Cho nhân)</text>
      <text x="202" y="220" font-size="14" fill="#0284c7">+</text>
      <rect x="214" y="190" width="150" height="56" rx="8" fill="#f1f5f9" stroke="#64748b"/>
      <text x="289" y="210" fill="#334155">Tế bào trứng bỏ nhân</text><text x="289" y="228" font-size="8.5" fill="#64748b">Cừu mặt đen (Cho TBC/Ti thể)</text>
      <text x="376" y="220" font-size="14" fill="#0284c7">→</text>
      <rect x="388" y="190" width="145" height="56" rx="8" fill="#ede9fe" stroke="#7c3aed"/>
      <text x="460" y="210" fill="#6d28d9">Xung điện → Phôi sớm</text><text x="460" y="228" font-size="8.5" fill="#334155">Cấy vào tử cung mang thai hộ</text>
      <text x="545" y="220" font-size="14" fill="#0284c7">→</text>
      <rect x="557" y="190" width="167" height="56" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="640" y="210" fill="#b45309">Sinh ra Cừu Dolly</text><text x="640" y="228" font-size="8.5" fill="#92400e">Giống cừu cho nhân (Mặt trắng)</text>
    </g>
  </svg>`,

  20: `<svg viewBox="0 0 760 255" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="760" height="255" rx="16" fill="#f0fdfa" class="dark:fill-slate-900"/>
    <text x="380" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#0f766e">SỰ ĐA DẠNG VI SINH VẬT &amp; QUY TRÌNH PHÂN LẬP – NUÔI CẤY – ĐỊNH DANH</text>
    <!-- 5 Step Flow -->
    <g transform="translate(20, 48)" font-size="9.5" text-anchor="middle">
      <rect x="0" y="0" width="128" height="145" rx="10" fill="#ffffff" stroke="#0d9488" stroke-width="2"/>
      <text x="64" y="22" font-weight="800" fill="#0f766e">1. THU MẪU TỰ NHIÊN</text>
      <text x="64" y="48" fill="#334155">Đất, nước, không khí,</text>
      <text x="64" y="65" fill="#334155">thực phẩm lên men</text>
      <text x="64" y="95" font-size="8.5" font-weight="700" fill="#0d9488">Chứa quần xã hỗn hợp</text>
      <text x="64" y="112" font-size="8.5" fill="#64748b">nhiều loài VSV</text>

      <text x="138" y="76" font-size="15" font-weight="900" fill="#0d9488">→</text>

      <rect x="148" y="0" width="136" height="145" rx="10" fill="#ffffff" stroke="#0d9488" stroke-width="2"/>
      <text x="216" y="22" font-weight="800" fill="#0f766e">2. PHA LOÃNG / CẤY RIA</text>
      <circle cx="216" cy="68" r="24" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
      <path d="M 200 58 L 230 58 L 202 68 L 232 68 L 206 78 L 228 78" fill="none" stroke="#dc2626" stroke-width="1.5"/>
      <text x="216" y="110" font-size="8.5" font-weight="700" fill="#b45309">Trên môi trường thạch đặc</text>
      <text x="216" y="126" font-size="8.5" fill="#64748b">(Đĩa Petri vô trùng)</text>

      <text x="294" y="76" font-size="15" font-weight="900" fill="#0d9488">→</text>

      <rect x="304" y="0" width="132" height="145" rx="10" fill="#ffffff" stroke="#059669" stroke-width="2"/>
      <text x="370" y="22" font-weight="800" fill="#065f46">3. Ủ ẤM &amp; KHUẨN LẠC</text>
      <circle cx="370" cy="68" r="24" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
      <circle cx="360" cy="60" r="3" fill="#059669"/><circle cx="378" cy="64" r="3" fill="#dc2626"/><circle cx="368" cy="76" r="3" fill="#0284c7"/>
      <text x="370" y="110" font-size="8.5" font-weight="700" fill="#065f46">1 tế bào → 1 Khuẩn lạc đơn</text>
      <text x="370" y="126" font-size="8.5" fill="#64748b">Nhìn thấy bằng mắt thường</text>

      <text x="446" y="76" font-size="15" font-weight="900" fill="#059669">→</text>

      <rect x="456" y="0" width="124" height="145" rx="10" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
      <text x="518" y="22" font-weight="800" fill="#0369a1">4. PHÂN LẬP THUẦN</text>
      <text x="518" y="52" fill="#334155">Tách khuẩn lạc đơn</text>
      <text x="518" y="70" fill="#334155">sang môi trường mới</text>
      <text x="518" y="102" font-size="8.5" font-weight="700" fill="#0284c7">Thu chủng VSV thuần khiết</text>
      <text x="518" y="118" font-size="8.5" fill="#64748b">(Không lẫn tạp)</text>

      <text x="590" y="76" font-size="15" font-weight="900" fill="#0284c7">→</text>

      <rect x="600" y="0" width="120" height="145" rx="10" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
      <text x="660" y="22" font-weight="800" fill="#6d28d9">5. ĐỊNH DANH LOÀI</text>
      <text x="660" y="52" fill="#334155">• Quan sát hiển vi/Gram</text>
      <text x="660" y="70" fill="#334155">• Thử nghiệm hoá sinh</text>
      <text x="660" y="92" font-size="8.5" font-weight="700" fill="#7c3aed">• Giải trình tự DNA/RNA</text>
      <text x="660" y="112" font-size="8.5" fill="#64748b">(Gene 16S rRNA)</text>
    </g>
    <!-- Bottom Groups -->
    <rect x="20" y="206" width="720" height="34" rx="8" fill="#ccfbf1" stroke="#14b8a6"/>
    <text x="380" y="227" text-anchor="middle" font-size="10" font-weight="800" fill="#0f766e">Các nhóm VSV: Nhân sơ (Vi khuẩn, Cổ khuẩn) • Nhân thực (Vi nấm: nấm men/nấm mốc, Vi tảo, Động vật nguyên sinh)</text>
  </svg>`,

  21: `<svg viewBox="0 0 760 275" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="760" height="275" rx="16" fill="#f0fdf4" class="dark:fill-slate-900"/>
    <text x="380" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#065f46">ĐƯỜNG CONG SINH TRƯỞNG 4 PHA (NUÔI CẤY KHÔNG LIÊN TỤC) &amp; KIỂU DINH DƯỠNG VSV</text>
    <!-- Left: Growth Curve -->
    <rect x="20" y="44" width="445" height="214" rx="12" fill="#ffffff" stroke="#059669" stroke-width="2"/>
    <text x="242" y="64" text-anchor="middle" font-size="11" font-weight="800" fill="#065f46">1. ĐƯỜNG CONG SINH TRƯỞNG QUẦN THỂ VI KHUẨN (N_t = N_0 × 2^(t/g))</text>
    <!-- Axes -->
    <line x1="58" y1="210" x2="438" y2="210" stroke="#334155" stroke-width="2"/>
    <line x1="58" y1="210" x2="58" y2="80" stroke="#334155" stroke-width="2"/>
    <text x="48" y="88" text-anchor="end" font-size="8.5" font-weight="700" fill="#334155">log N</text>
    <text x="435" y="224" text-anchor="end" font-size="8.5" font-weight="700" fill="#334155">Thời gian (t)</text>
    <!-- Phase dividers -->
    <line x1="135" y1="82" x2="135" y2="210" stroke="#cbd5e1" stroke-dasharray="3 3"/>
    <line x1="235" y1="82" x2="235" y2="210" stroke="#cbd5e1" stroke-dasharray="3 3"/>
    <line x1="345" y1="82" x2="345" y2="210" stroke="#cbd5e1" stroke-dasharray="3 3"/>
    <!-- Curve: Lag -> Log -> Stationary -> Death -->
    <path d="M 60 185 L 135 185 C 165 185, 200 100, 235 100 L 345 100 C 375 100, 410 175, 432 195" fill="none" stroke="#059669" stroke-width="4"/>
    <!-- Phase Labels -->
    <text x="96" y="172" text-anchor="middle" font-size="9.5" font-weight="800" fill="#0284c7">1. Tiềm phát</text>
    <text x="96" y="200" text-anchor="middle" font-size="8" fill="#64748b">Thích nghi, N=N₀</text>
    <text x="185" y="130" text-anchor="middle" font-size="9.5" font-weight="800" fill="#059669">2. Luỹ thừa (Log)</text>
    <text x="185" y="200" text-anchor="middle" font-size="8" fill="#059669" font-weight="700">Tăng cực nhanh</text>
    <text x="290" y="92" text-anchor="middle" font-size="9.5" font-weight="800" fill="#d97706">3. Cân bằng</text>
    <text x="290" y="200" text-anchor="middle" font-size="8" fill="#b45309">N cực đại (Sinh=Chết)</text>
    <text x="390" y="138" text-anchor="middle" font-size="9.5" font-weight="800" fill="#dc2626">4. Suy vong</text>
    <text x="390" y="200" text-anchor="middle" font-size="8" fill="#dc2626">Cạn chất, độc tăng</text>
    <text x="242" y="244" text-anchor="middle" font-size="9" font-weight="700" fill="#0f766e">• Nuôi cấy liên tục: Cấp dinh dưỡng &amp; lấy sản phẩm liên tục → Giữ ở pha luỹ thừa</text>

    <!-- Right: 4 Nutritional Types & Reproduction -->
    <rect x="480" y="44" width="260" height="214" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
    <text x="610" y="64" text-anchor="middle" font-size="11" font-weight="800" fill="#0369a1">2. 4 KIỂU DINH DƯỠNG &amp; SINH SẢN</text>
    <g font-size="9" fill="#334155">
      <rect x="494" y="74" width="232" height="32" rx="6" fill="#ecfdf5"/>
      <text x="610" y="88" text-anchor="middle" font-weight="800" fill="#047857">Quang tự dưỡng (Ánh sáng + CO₂)</text>
      <text x="610" y="101" text-anchor="middle" font-size="8">Vi khuẩn lam, Vi tảo, VK lưu huỳnh</text>

      <rect x="494" y="110" width="232" height="32" rx="6" fill="#f0f9ff"/>
      <text x="610" y="124" text-anchor="middle" font-weight="800" fill="#0369a1">Quang dị dưỡng (Ánh sáng + Chất hữu cơ)</text>
      <text x="610" y="137" text-anchor="middle" font-size="8">VK không chứa lưu huỳnh màu lục/tía</text>

      <rect x="494" y="146" width="232" height="32" rx="6" fill="#fef3c7"/>
      <text x="610" y="160" text-anchor="middle" font-weight="800" fill="#b45309">Hoá tự dưỡng (Chất vô cơ + CO₂)</text>
      <text x="610" y="173" text-anchor="middle" font-size="8">VK nitrat hoá, VK oxy hoá sắt/lưu huỳnh</text>

      <rect x="494" y="182" width="232" height="32" rx="6" fill="#ffe4e6"/>
      <text x="610" y="196" text-anchor="middle" font-weight="800" fill="#be123c">Hoá dị dưỡng (Chất hữu cơ + Chất hữu cơ)</text>
      <text x="610" y="209" text-anchor="middle" font-size="8">Nấm, Động vật nguyên sinh, đa số VK</text>
    </g>
    <text x="610" y="232" text-anchor="middle" font-size="8.5" font-weight="700" fill="#334155">Sinh sản: Phân đôi • Nảy chồi • Bào tử</text>
    <text x="610" y="246" text-anchor="middle" font-size="8" fill="#dc2626" font-weight="700">(Nội bào tử VK chỉ là dạng bảo vệ, không phải sinh sản)</text>
  </svg>`,

  22: `<svg viewBox="0 0 760 265" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="760" height="265" rx="16" fill="#f0fdf4" class="dark:fill-slate-900"/>
    <text x="380" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#065f46">VAI TRÒ TUẦN HOÀN VẬT CHẤT &amp; 4 TRỤ CỘT ỨNG DỤNG CÔNG NGHỆ VI SINH VẬT</text>
    <!-- 4 Pillars -->
    <g transform="translate(20, 44)" font-size="9.5" text-anchor="middle">
      <rect x="0" y="0" width="170" height="156" rx="12" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
      <rect x="0" y="0" width="170" height="30" rx="10" fill="#fef3c7"/>
      <text x="85" y="20" font-size="10.5" font-weight="800" fill="#b45309">1. THỰC PHẨM LÊN MEN</text>
      <text x="85" y="50" fill="#334155">• VK Lactic: Sữa chua,</text>
      <text x="85" y="66" fill="#334155">phô mai, dưa cải muối</text>
      <text x="85" y="88" fill="#334155">• Nấm men: Rượu, bia,</text>
      <text x="85" y="104" fill="#334155">làm nở bột bánh mì</text>
      <text x="85" y="126" font-weight="700" fill="#b45309">• Nấm mốc: Nước tương,</text>
      <text x="85" y="142" font-weight="700" fill="#b45309">enzyme thuỷ phân đạm</text>

      <rect x="183" y="0" width="170" height="156" rx="12" fill="#ffffff" stroke="#e11d48" stroke-width="2"/>
      <rect x="183" y="0" width="170" height="30" rx="10" fill="#ffe4e6"/>
      <text x="268" y="20" font-size="10.5" font-weight="800" fill="#be123c">2. Y HỌC &amp; DƯỢC PHẨM</text>
      <text x="268" y="50" fill="#334155">• Xạ khuẩn / Nấm mốc:</text>
      <text x="268" y="66" font-weight="700" fill="#be123c">Sản xuất Kháng sinh</text>
      <text x="268" y="88" fill="#334155">• E. coli tái tổ hợp:</text>
      <text x="268" y="104" font-weight="700" fill="#0284c7">Hormone Insulin, Vaccine</text>
      <text x="268" y="126" fill="#334155">• Men vi sinh Probiotics</text>
      <text x="268" y="142" fill="#334155">cân bằng hệ đường ruột</text>

      <rect x="366" y="0" width="170" height="156" rx="12" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
      <rect x="366" y="0" width="170" height="30" rx="10" fill="#dcfce7"/>
      <text x="451" y="20" font-size="10.5" font-weight="800" fill="#15803d">3. NÔNG NGHIỆP XANH</text>
      <text x="451" y="50" fill="#334155">• Phân vi sinh cố định đạm</text>
      <text x="451" y="66" font-weight="700" fill="#15803d">(Rhizobium nốt sần đậu)</text>
      <text x="451" y="88" fill="#334155">• Phân vi sinh phân giải lân</text>
      <text x="451" y="104" fill="#334155">&amp; phân giải cellulose</text>
      <text x="451" y="126" font-weight="700" fill="#047857">• Thuốc trừ sâu sinh học Bt</text>
      <text x="451" y="142" fill="#334155">Ủ chua thức ăn chăn nuôi</text>

      <rect x="549" y="0" width="171" height="156" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
      <rect x="549" y="0" width="171" height="30" rx="10" fill="#e0f2fe"/>
      <text x="634" y="20" font-size="10.5" font-weight="800" fill="#0369a1">4. CÔNG NGHIỆP &amp; MÔI TRƯỜNG</text>
      <text x="634" y="50" fill="#334155">• Xử lí nước thải hiếu khí /</text>
      <text x="634" y="66" font-weight="700" fill="#0369a1">kị khí tạo khí Biogas (CH₄)</text>
      <text x="634" y="88" fill="#334155">• Phân huỷ rác hữu cơ,</text>
      <text x="634" y="104" fill="#334155">xử lí vết dầu tràn biển</text>
      <text x="634" y="126" font-weight="700" fill="#0f766e">• Sản xuất acid hữu cơ,</text>
      <text x="634" y="142" font-weight="700" fill="#0f766e">nhiên liệu sinh học Ethanol</text>
    </g>
    <!-- Bottom Cycle Bar -->
    <rect x="20" y="212" width="720" height="36" rx="10" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
    <text x="380" y="234" text-anchor="middle" font-size="10" font-weight="800" fill="#065f46">♻️ Vai trò sinh thái tự nhiên: VSV phân giải xác hữu cơ → Chất khoáng vô cơ (CO₂, NH₄⁺, NO₃⁻) khép kín tuần hoàn vật chất</text>
  </svg>`,

  23: `<svg viewBox="0 0 760 250" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="760" height="250" rx="16" fill="#fffbeb" class="dark:fill-slate-900"/>
    <text x="380" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#b45309">THỰC HÀNH: QUY TRÌNH LÊN MEN LACTIC LÀM SỮA CHUA &amp; MUỐI CHUA RAU CỦ</text>
    <g transform="translate(20, 46)" font-size="9.5" text-anchor="middle">
      <rect x="0" y="0" width="165" height="182" rx="12" fill="#ffffff" stroke="#f59e0b" stroke-width="2"/>
      <circle cx="82" cy="24" r="13" fill="#f59e0b"/><text x="82" y="28" font-size="11" font-weight="800" fill="#fff">1</text>
      <text x="82" y="54" font-size="10.5" font-weight="800" fill="#b45309">PHA SỮA (40–45°C)</text>
      <text x="82" y="80" fill="#334155">Pha sữa tươi / sữa đặc</text>
      <text x="82" y="98" fill="#334155">với nước đun sôi để ấm</text>
      <text x="82" y="120" font-weight="800" fill="#dc2626">Nhiệt độ: 40 – 45°C</text>
      <text x="82" y="142" font-size="8.5" fill="#64748b">(Nếu quá nóng &gt;60°C sẽ</text>
      <text x="82" y="156" font-size="8.5" fill="#64748b">giết chết vi khuẩn giống)</text>

      <text x="176" y="94" font-size="16" font-weight="900" fill="#d97706">→</text>

      <rect x="188" y="0" width="165" height="182" rx="12" fill="#ffffff" stroke="#f59e0b" stroke-width="2"/>
      <circle cx="270" cy="24" r="13" fill="#f59e0b"/><text x="270" y="28" font-size="11" font-weight="800" fill="#fff">2</text>
      <text x="270" y="54" font-size="10.5" font-weight="800" fill="#b45309">CẤY MEN CÁI (STARTER)</text>
      <text x="270" y="80" fill="#334155">Bổ sung sữa chua cái</text>
      <text x="270" y="98" font-weight="700" fill="#059669">(Chứa VK Lactobacillus)</text>
      <text x="270" y="120" fill="#334155">Khuấy nhẹ đều tay,</text>
      <text x="270" y="142" font-size="8.5" fill="#64748b">rót vào hũ tiệt trùng</text>
      <text x="270" y="156" font-size="8.5" fill="#64748b">&amp; đậy kín nắp (kị khí)</text>

      <text x="364" y="94" font-size="16" font-weight="900" fill="#d97706">→</text>

      <rect x="376" y="0" width="165" height="182" rx="12" fill="#ffffff" stroke="#059669" stroke-width="2"/>
      <circle cx="458" cy="24" r="13" fill="#059669"/><text x="458" y="28" font-size="11" font-weight="800" fill="#fff">3</text>
      <text x="458" y="54" font-size="10.5" font-weight="800" fill="#065f46">Ủ ẤM 40–45°C (6–8h)</text>
      <text x="458" y="80" font-weight="700" fill="#047857">Lactose → Lactic acid</text>
      <text x="458" y="98" fill="#334155">Hạ pH xuống ~ 4,5</text>
      <text x="458" y="120" font-weight="800" fill="#b45309">Protein Casein kết tủa</text>
      <text x="458" y="142" font-size="8.5" fill="#64748b">Sữa chuyển trạng thái</text>
      <text x="458" y="156" font-size="8.5" fill="#64748b">đông tụ sánh mịn, chua dịu</text>

      <text x="552" y="94" font-size="16" font-weight="900" fill="#059669">→</text>

      <rect x="564" y="0" width="156" height="182" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
      <circle cx="642" cy="24" r="13" fill="#0284c7"/><text x="642" y="28" font-size="11" font-weight="800" fill="#fff">4</text>
      <text x="642" y="54" font-size="10.5" font-weight="800" fill="#0369a1">BẢO QUẢN LẠNH (4–6°C)</text>
      <text x="642" y="80" fill="#334155">Đưa vào ngăn mát</text>
      <text x="642" y="98" fill="#334155">tủ lạnh ngay khi đạt</text>
      <text x="642" y="120" font-weight="700" fill="#0284c7">Ức chế VK tiếp tục lên men</text>
      <text x="642" y="142" font-size="8.5" fill="#64748b">Giữ hương vị thơm ngon,</text>
      <text x="642" y="156" font-size="8.5" fill="#64748b">không bị quá chua/tách nước</text>
    </g>
  </svg>`,

  24: `<svg viewBox="0 0 760 275" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="760" height="275" rx="16" fill="#fff1f2" class="dark:fill-slate-900"/>
    <text x="380" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#be123c">CẤU TẠO HẠT VIRUS (VIRION) &amp; 5 GIAI ĐOẠN CHU TRÌNH NHÂN LÊN TRONG TẾ BÀO CHỦ</text>
    <!-- Top Box: Virion Structure -->
    <rect x="20" y="42" width="720" height="84" rx="12" fill="#ffffff" stroke="#e11d48" stroke-width="2"/>
    <text x="155" y="64" text-anchor="middle" font-size="11" font-weight="800" fill="#be123c">CẤU TẠO HẠT VIRUS (PHI TẾ BÀO)</text>
    <circle cx="58" cy="88" r="24" fill="#ffe4e6" stroke="#e11d48" stroke-width="2.5"/>
    <polygon points="58,70 74,80 74,96 58,106 42,96 42,80" fill="#fecdd3" stroke="#be123c" stroke-width="1.5"/>
    <path d="M 50 88 Q 58 78, 66 88" fill="none" stroke="#7c3aed" stroke-width="2.5"/>
    <text x="195" y="86" font-size="9.5" fill="#334155">• <tspan font-weight="800" fill="#7c3aed">Lõi Nucleic acid:</tspan> DNA hoặc RNA (1 hoặc 2 mạch)</text>
    <text x="195" y="106" font-size="9.5" fill="#334155">• <tspan font-weight="800" fill="#be123c">Vỏ Capsid:</tspan> Cấu tạo từ các đơn vị protein Capsomere</text>
    <text x="485" y="86" font-size="9.5" fill="#334155">• <tspan font-weight="800" fill="#0369a1">Màng bọc (Envelope):</tspan> Lớp lipid kép + <tspan font-weight="700">Gai Glycoprotein</tspan></text>
    <text x="485" y="106" font-size="9.5" fill="#334155">• <tspan font-weight="800" fill="#059669">3 Dạng hình thái:</tspan> Xoắn (TMV) • Khối đa diện (HIV) • Hỗn hợp (Phage)</text>

    <!-- Bottom: 5 Stages of Viral Replication -->
    <g transform="translate(20, 138)" font-size="9.5" text-anchor="middle">
      <rect x="0" y="0" width="130" height="120" rx="10" fill="#ffffff" stroke="#e11d48" stroke-width="2"/>
      <circle cx="65" cy="20" r="11" fill="#e11d48"/><text x="65" y="24" font-size="10" font-weight="800" fill="#fff">1</text>
      <text x="65" y="45" font-weight="800" fill="#be123c">HẤP PHỤ (BÁM)</text>
      <text x="65" y="66" font-size="8.5" fill="#334155">Gai glycoprotein / lông đuôi</text>
      <text x="65" y="82" font-size="8.5" font-weight="700" fill="#be123c">gắn đặc hiệu Thụ thể</text>
      <text x="65" y="98" font-size="8.5" fill="#64748b">bề mặt tế bào vật chủ</text>

      <text x="139" y="64" font-size="14" font-weight="900" fill="#e11d48">→</text>

      <rect x="148" y="0" width="130" height="120" rx="10" fill="#ffffff" stroke="#e11d48" stroke-width="2"/>
      <circle cx="213" cy="20" r="11" fill="#e11d48"/><text x="213" y="24" font-size="10" font-weight="800" fill="#fff">2</text>
      <text x="213" y="45" font-weight="800" fill="#be123c">XÂM NHẬP</text>
      <text x="213" y="66" font-size="8.5" fill="#334155">• Phage: Bơm lõi DNA vào</text>
      <text x="213" y="82" font-size="8.5" fill="#334155">• Virus ĐV: Nhập bào /</text>
      <text x="213" y="98" font-size="8.5" font-weight="700" fill="#be123c">Dung hợp màng &amp; Cởi vỏ</text>

      <text x="287" y="64" font-size="14" font-weight="900" fill="#e11d48">→</text>

      <rect x="296" y="0" width="130" height="120" rx="10" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
      <circle cx="361" cy="20" r="11" fill="#7c3aed"/><text x="361" y="24" font-size="10" font-weight="800" fill="#fff">3</text>
      <text x="361" y="45" font-weight="800" fill="#6d28d9">SINH TỔNG HỢP</text>
      <text x="361" y="66" font-size="8.5" fill="#334155">Dùng enzyme, ribosome,</text>
      <text x="361" y="82" font-size="8.5" fill="#334155">nguyên liệu tế bào chủ</text>
      <text x="361" y="98" font-size="8.5" font-weight="700" fill="#6d28d9">tổng hợp DNA/RNA + Vỏ</text>

      <text x="435" y="64" font-size="14" font-weight="900" fill="#7c3aed">→</text>

      <rect x="444" y="0" width="126" height="120" rx="10" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
      <circle cx="507" cy="20" r="11" fill="#0284c7"/><text x="507" y="24" font-size="10" font-weight="800" fill="#fff">4</text>
      <text x="507" y="45" font-weight="800" fill="#0369a1">LẮP RÁP</text>
      <text x="507" y="66" font-size="8.5" fill="#334155">Lắp lõi nucleic acid</text>
      <text x="507" y="82" font-size="8.5" fill="#334155">vào trong vỏ Capsid</text>
      <text x="507" y="98" font-size="8.5" font-weight="700" fill="#0369a1">tạo hạt Virion hoàn chỉnh</text>

      <text x="579" y="64" font-size="14" font-weight="900" fill="#0284c7">→</text>

      <rect x="588" y="0" width="132" height="120" rx="10" fill="#ffffff" stroke="#059669" stroke-width="2"/>
      <circle cx="654" cy="20" r="11" fill="#059669"/><text x="654" y="24" font-size="10" font-weight="800" fill="#fff">5</text>
      <text x="654" y="45" font-weight="800" fill="#065f46">GIẢI PHÓNG</text>
      <text x="654" y="66" font-size="8.5" font-weight="700" fill="#dc2626">• Chu trình tan (Phá vỡ TB)</text>
      <text x="654" y="82" font-size="8.5" font-weight="700" fill="#059669">• Nảy chồi / Tiềm tan</text>
      <text x="654" y="98" font-size="8.5" fill="#64748b">(Cài hệ gene vào NST chủ)</text>
    </g>
  </svg>`,

  25: `<svg viewBox="0 0 760 270" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="760" height="270" rx="16" fill="#f0fdf4" class="dark:fill-slate-900"/>
    <text x="380" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#065f46">PHƯƠNG THỨC LÂY TRUYỀN VIRUS, PHÒNG BỆNH &amp; THÀNH TỰU ỨNG DỤNG VIRUS</text>
    <!-- Left Box: Transmission & Diseases -->
    <rect x="20" y="44" width="352" height="208" rx="12" fill="#ffffff" stroke="#e11d48" stroke-width="2"/>
    <text x="196" y="64" text-anchor="middle" font-size="11" font-weight="800" fill="#be123c">1. ĐƯỜNG LÂY TRUYỀN &amp; BỆNH DO VIRUS / PRION</text>
    <rect x="34" y="76" width="324" height="52" rx="8" fill="#fff1f2"/>
    <text x="196" y="94" text-anchor="middle" font-size="9.5" font-weight="800" fill="#be123c">Lây ngang: Hô hấp (Cúm, SARS-CoV-2) • Tiêu hoá (Rotavirus)</text>
    <text x="196" y="110" text-anchor="middle" font-size="9" fill="#334155">Máu / Tình dục (HIV, HBV) • Vector côn trùng (Sốt xuất huyết) • Lây dọc: Mẹ → Con</text>

    <rect x="34" y="136" width="324" height="54" rx="8" fill="#fef3c7"/>
    <text x="196" y="154" text-anchor="middle" font-size="9.5" font-weight="800" fill="#b45309">HIV tấn công bạch cầu T-CD4 → Suy giảm miễn dịch (AIDS)</text>
    <text x="196" y="170" text-anchor="middle" font-size="9" fill="#334155">Thực vật: Xâm nhập qua vết thương côn trùng chích hút &amp; truyền qua cầu sinh chất</text>
    <text x="196" y="206" text-anchor="middle" font-size="9" font-weight="800" fill="#7c3aed">⚠️ Prion: Phân tử Protein sai cấu hình (Không có DNA/RNA) gây bệnh bò điên</text>
    <text x="196" y="224" text-anchor="middle" font-size="9" font-weight="700" fill="#059669">Phòng bệnh: Tiêm Vaccine chủ động • Thuốc kháng virus ARV (Kháng sinh vô hiệu)</text>

    <!-- Right Box: 3 Applications of Viruses -->
    <rect x="388" y="44" width="352" height="208" rx="12" fill="#ffffff" stroke="#059669" stroke-width="2"/>
    <text x="564" y="64" text-anchor="middle" font-size="11" font-weight="800" fill="#065f46">2. BA THÀNH TỰU ỨNG DỤNG VIRUS TRONG KHOA HỌC</text>
    <rect x="404" y="76" width="320" height="50" rx="8" fill="#ecfdf5" stroke="#10b981"/>
    <text x="564" y="94" text-anchor="middle" font-size="10" font-weight="800" fill="#047857">① Sản xuất Vaccine &amp; Chế phẩm sinh học (Interferon)</text>
    <text x="564" y="112" text-anchor="middle" font-size="9" fill="#334155">Vaccine bất hoạt, giảm độc lực, vector virus hoặc mRNA tạo miễn dịch đặc hiệu</text>

    <rect x="404" y="134" width="320" height="50" rx="8" fill="#f0f9ff" stroke="#0284c7"/>
    <text x="564" y="152" text-anchor="middle" font-size="10" font-weight="800" fill="#0369a1">② Làm Vector (Thể truyền) chuyển gene trong Công nghệ di truyền</text>
    <text x="564" y="170" text-anchor="middle" font-size="9" fill="#334155">Cắt bỏ gene độc của virus, gắn gene lành/gene đích đưa vào tế bào vật chủ</text>

    <rect x="404" y="192" width="320" height="50" rx="8" fill="#fef3c7" stroke="#d97706"/>
    <text x="564" y="210" text-anchor="middle" font-size="10" font-weight="800" fill="#b45309">③ Sản xuất Thuốc trừ sâu sinh học từ Virus (Chế phẩm NPV)</text>
    <text x="564" y="228" text-anchor="middle" font-size="9" fill="#334155">Diệt đặc hiệu sâu hại cây trồng mà không gây ô nhiễm môi trường &amp; thiên địch</text>
  </svg>`,

  26: `<svg viewBox="0 0 760 250" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="760" height="250" rx="16" fill="#f0fdfa" class="dark:fill-slate-900"/>
    <text x="380" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#0f766e">THỰC HÀNH DỰ ÁN: ĐIỀU TRA BỆNH DO VIRUS &amp; TRUYỀN THÔNG Y TẾ CỘNG ĐỒNG</text>
    <g transform="translate(20, 48)" font-size="9.5" text-anchor="middle">
      <rect x="0" y="0" width="168" height="178" rx="12" fill="#ffffff" stroke="#0d9488" stroke-width="2"/>
      <circle cx="84" cy="24" r="13" fill="#0d9488"/><text x="84" y="28" font-size="11" font-weight="800" fill="#fff">1</text>
      <text x="84" y="54" font-size="10.5" font-weight="800" fill="#0f766e">CHỌN CHỦ ĐỀ DUYỆT</text>
      <text x="84" y="80" fill="#334155">• Bệnh ở người: Cúm,</text>
      <text x="84" y="96" fill="#334155">Sốt xuất huyết, HIV, Dại</text>
      <text x="84" y="116" fill="#334155">• Cây trồng: Khảm lá,</text>
      <text x="84" y="132" fill="#334155">Vàng lùn xoắn lá lúa</text>
      <text x="84" y="156" font-size="8.5" font-weight="700" fill="#0d9488">Lập phiếu điều tra chuẩn</text>

      <text x="178" y="92" font-size="16" font-weight="900" fill="#0d9488">→</text>

      <rect x="190" y="0" width="168" height="178" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
      <circle cx="274" cy="24" r="13" fill="#0284c7"/><text x="274" y="28" font-size="11" font-weight="800" fill="#fff">2</text>
      <text x="274" y="54" font-size="10.5" font-weight="800" fill="#0369a1">THU THẬP &amp; KIỂM CHỨNG</text>
      <text x="274" y="80" fill="#334155">Nguồn Bộ Y tế, WHO,</text>
      <text x="274" y="96" fill="#334155">Trạm Bảo vệ thực vật</text>
      <text x="274" y="118" font-weight="700" fill="#0369a1">Tác nhân • Đường lây</text>
      <text x="274" y="134" font-weight="700" fill="#0369a1">Triệu chứng • Cách phòng</text>
      <text x="274" y="156" font-size="8.5" fill="#dc2626">Không tự lấy mẫu bệnh phẩm</text>

      <text x="368" y="92" font-size="16" font-weight="900" fill="#0284c7">→</text>

      <rect x="380" y="0" width="168" height="178" rx="12" fill="#ffffff" stroke="#059669" stroke-width="2"/>
      <circle cx="464" cy="24" r="13" fill="#059669"/><text x="464" y="28" font-size="11" font-weight="800" fill="#fff">3</text>
      <text x="464" y="54" font-size="10.5" font-weight="800" fill="#065f46">XỬ LÍ &amp; PHÂN TÍCH</text>
      <text x="464" y="80" fill="#334155">Phân biệt dữ liệu thực tế</text>
      <text x="464" y="96" fill="#334155">với ý kiến chủ quan</text>
      <text x="464" y="118" font-weight="700" fill="#065f46">Phân biệt triệu chứng virus</text>
      <text x="464" y="134" fill="#334155">với nấm/vi khuẩn/thiếu khoáng</text>
      <text x="464" y="156" font-size="8.5" fill="#64748b">Bảo mật thông tin cá nhân</text>

      <text x="558" y="92" font-size="16" font-weight="900" fill="#059669">→</text>

      <rect x="570" y="0" width="150" height="178" rx="12" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
      <circle cx="645" cy="24" r="13" fill="#d97706"/><text x="645" y="28" font-size="11" font-weight="800" fill="#fff">4</text>
      <text x="645" y="54" font-size="10.5" font-weight="800" fill="#b45309">TUYÊN TRUYỀN</text>
      <text x="645" y="80" font-weight="700" fill="#b45309">Thiết kế Poster / Tờ rơi</text>
      <text x="645" y="98" fill="#334155">Ngắn gọn, dễ hiểu</text>
      <text x="645" y="118" font-weight="700" fill="#059669">Nêu rõ hành động phòng</text>
      <text x="645" y="134" fill="#334155">&amp; nơi hỗ trợ y tế</text>
      <text x="645" y="156" font-size="8.5" font-weight="700" fill="#be123c">Không gây hoang mang/kì thị</text>
    </g>
  </svg>`
};

const allDiagrams = { ...diagramsP1, ...diagramsP2 };
const output = `// scratch/sinhhoc10_diagrams.js - 26 custom SVG diagrams for Sinh học 10
const diagrams = ${JSON.stringify(allDiagrams, null, 2)};
module.exports = diagrams;
`;

fs.writeFileSync('scratch/sinhhoc10_diagrams.js', output, 'utf8');
console.log('Successfully generated scratch/sinhhoc10_diagrams.js! Total diagrams:', Object.keys(allDiagrams).length);
