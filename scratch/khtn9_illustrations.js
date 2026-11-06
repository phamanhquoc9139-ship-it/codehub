// khtn9_illustrations.js - Thư viện bản vẽ vector SVG độc quyền môn Khoa học tự nhiên 9
module.exports = {
  // Bài 2 & 3: Động năng - Thế năng - Cơ năng
  energy_conservation: `
    <svg viewBox="0 0 760 170" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradSky" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#eff6ff"/>
          <stop offset="100%" stop-color="#dbeafe"/>
        </linearGradient>
      </defs>
      <rect x="5" y="5" width="750" height="160" rx="14" fill="url(#gradSky)" stroke="#93c5fd" stroke-width="1.2"/>
      <!-- Quỹ đạo con lắc / máng trượt -->
      <path d="M 60 40 Q 200 145 380 145 T 700 40" fill="none" stroke="#60a5fa" stroke-width="3" stroke-dasharray="6,4"/>
      <!-- Vị trí A: Cực đại thế năng -->
      <g transform="translate(60, 40)">
        <circle cx="0" cy="0" r="14" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
        <text x="0" y="4" text-anchor="middle" font-size="9" font-weight="bold" fill="#fff">A</text>
        <text x="0" y="-18" text-anchor="middle" font-size="10" font-weight="bold" fill="#b91c1c">Đỉnh A: h_max</text>
        <text x="0" y="32" text-anchor="middle" font-size="9" fill="#1e293b">W_t max • W_đ = 0</text>
      </g>
      <!-- Vị trí B: Đáy chuyển động - Động năng cực đại -->
      <g transform="translate(380, 145)">
        <circle cx="0" cy="0" r="14" fill="#10b981" stroke="#047857" stroke-width="2"/>
        <text x="0" y="4" text-anchor="middle" font-size="9" font-weight="bold" fill="#fff">B</text>
        <text x="0" y="28" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">Đáy B: v_max (mặt đất)</text>
        <text x="0" y="42" text-anchor="middle" font-size="9" fill="#1e293b">W_đ max • W_t = 0</text>
      </g>
      <!-- Vị trí C: Cực đại đối xứng -->
      <g transform="translate(700, 40)">
        <circle cx="0" cy="0" r="14" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
        <text x="0" y="4" text-anchor="middle" font-size="9" font-weight="bold" fill="#fff">C</text>
        <text x="0" y="-18" text-anchor="middle" font-size="10" font-weight="bold" fill="#b91c1c">Đỉnh C: h_max</text>
        <text x="0" y="32" text-anchor="middle" font-size="9" fill="#1e293b">W_t max • W_đ = 0</text>
      </g>
      <!-- Banner công thức trung tâm -->
      <rect x="230" y="15" width="300" height="35" rx="8" fill="#ffffff" stroke="#3b82f6" stroke-width="1.2"/>
      <text x="380" y="37" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">BẢO TOÀN CƠ NĂNG: W = W_đ + W_t = hằng số</text>
      <text x="210" y="95" text-anchor="middle" font-size="9.5" fill="#475569">Thế năng chuyển hóa thành Động năng</text>
      <text x="550" y="95" text-anchor="middle" font-size="9.5" fill="#475569">Động năng chuyển hóa thành Thế năng</text>
    </svg>
  `,

  // Bài 5 & 6: Khúc xạ & Phản xạ toàn phần
  optics_refraction: `
    <svg viewBox="0 0 760 170" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="750" height="160" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
      <!-- Nửa trên không khí n1 = 1 -->
      <rect x="10" y="10" width="740" height="75" fill="#f0f9ff"/>
      <text x="30" y="30" font-size="11" font-weight="bold" fill="#0369a1">MÔI TRƯỜNG 1: Không khí (chiết suất n1 ≈ 1)</text>
      <!-- Nửa dưới nước n2 = 1.33 -->
      <rect x="10" y="85" width="740" height="75" fill="#e0f2fe"/>
      <text x="30" y="145" font-size="11" font-weight="bold" fill="#0284c7">MÔI TRƯỜNG 2: Nước / Thủy tinh (chiết suất n2 > n1)</text>
      <!-- Mặt phân cách & Pháp tuyến -->
      <line x1="10" y1="85" x2="750" y2="85" stroke="#0284c7" stroke-width="2"/>
      <line x1="380" y1="15" x2="380" y2="155" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3"/>
      <text x="390" y="30" font-size="10" fill="#475569">Pháp tuyến N-N'</text>
      <!-- Tia tới SI -->
      <line x1="220" y1="20" x2="380" y2="85" stroke="#ea580c" stroke-width="2.5"/>
      <polygon points="305,55 315,50 310,60" fill="#ea580c"/>
      <text x="210" y="35" font-size="11" font-weight="bold" fill="#c2410c">Tia tới S</text>
      <text x="345" y="60" font-size="10" font-weight="bold" fill="#ea580c">Góc tới i</text>
      <!-- Điểm tới I -->
      <circle cx="380" cy="85" r="4" fill="#0284c7"/>
      <text x="385" y="100" font-size="11" font-weight="bold" fill="#0369a1">Điểm tới I</text>
      <!-- Tia khúc xạ IR (lệch gần pháp tuyến, r < i) -->
      <line x1="380" y1="85" x2="480" y2="150" stroke="#059669" stroke-width="2.5"/>
      <polygon points="435,120 445,115 440,126" fill="#059669"/>
      <text x="495" y="145" font-size="11" font-weight="bold" fill="#047857">Tia khúc xạ R (r &lt; i)</text>
      <text x="395" y="125" font-size="10" font-weight="bold" fill="#047857">Góc khúc xạ r</text>
      <!-- Tia phản xạ một phần IS' -->
      <line x1="380" y1="85" x2="540" y2="20" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,2"/>
      <text x="550" y="35" font-size="10" fill="#b45309">Tia phản xạ yếu S' (i' = i)</text>
      <!-- Công thức -->
      <rect x="540" y="100" width="195" height="48" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="1"/>
      <text x="637" y="120" text-anchor="middle" font-size="10" font-weight="bold" fill="#0369a1">ĐỊNH LUẬT KHÚC XẠ:</text>
      <text x="637" y="138" text-anchor="middle" font-size="11" font-weight="bold" fill="#0284c7">n1 · sin(i) = n2 · sin(r)</text>
    </svg>
  `,

  // Bài 8 & 9: Thấu kính hội tụ & Tạo ảnh
  lens_optics: `
    <svg viewBox="0 0 760 170" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="750" height="160" rx="14" fill="#faf5ff" stroke="#e9d5ff" stroke-width="1.2"/>
      <!-- Trục chính Delta -->
      <line x1="15" y1="85" x2="745" y2="85" stroke="#6b21a8" stroke-width="1.5"/>
      <text x="730" y="78" font-size="11" font-weight="bold" fill="#6b21a8">Δ</text>
      <!-- Thấu kính hội tụ tại x = 380 -->
      <line x1="380" y1="15" x2="380" y2="155" stroke="#9333ea" stroke-width="3"/>
      <!-- Mũi tên 2 đầu hội tụ -->
      <polygon points="380,15 374,25 386,25" fill="#9333ea"/>
      <polygon points="380,155 374,145 386,145" fill="#9333ea"/>
      <circle cx="380" cy="85" r="4" fill="#6b21a8"/>
      <text x="386" y="98" font-size="11" font-weight="bold" fill="#6b21a8">O</text>
      <!-- Các tiêu điểm F và F' -->
      <circle cx="260" cy="85" r="3" fill="#dc2626"/>
      <text x="255" y="100" font-size="10" font-weight="bold" fill="#dc2626">F (vật)</text>
      <circle cx="140" cy="85" r="3" fill="#64748b"/>
      <text x="135" y="100" font-size="10" fill="#64748b">2F</text>
      <circle cx="500" cy="85" r="3" fill="#dc2626"/>
      <text x="495" y="100" font-size="10" font-weight="bold" fill="#dc2626">F' (ảnh)</text>
      <circle cx="620" cy="85" r="3" fill="#64748b"/>
      <text x="615" y="100" font-size="10" fill="#64748b">2F'</text>
      <!-- Vật sáng AB tại d = 190 (giữa F và 2F) -->
      <line x1="190" y1="85" x2="190" y2="35" stroke="#2563eb" stroke-width="3"/>
      <polygon points="190,35 185,45 195,45" fill="#2563eb"/>
      <text x="175" y="32" font-size="11" font-weight="bold" fill="#1d4ed8">B</text>
      <text x="185" y="98" font-size="10" font-weight="bold" fill="#1d4ed8">A</text>
      <!-- Tia 1: Song song trục chính tới thấu kính rồi qua F' -->
      <line x1="190" y1="35" x2="380" y2="35" stroke="#ea580c" stroke-width="1.5"/>
      <line x1="380" y1="35" x2="650" y2="155" stroke="#ea580c" stroke-width="1.5"/>
      <!-- Tia 2: Qua quang tâm O truyền thẳng -->
      <line x1="190" y1="35" x2="650" y2="155" stroke="#10b981" stroke-width="1.5"/>
      <!-- Ảnh thật A'B' tại x = 570 ngược chiều lớn hơn vật -->
      <line x1="570" y1="85" x2="570" y2="135" stroke="#dc2626" stroke-width="3"/>
      <polygon points="570,135 565,125 575,125" fill="#dc2626"/>
      <text x="575" y="145" font-size="11" font-weight="bold" fill="#b91c1c">B' (ảnh thật)</text>
      <text x="575" y="80" font-size="10" font-weight="bold" fill="#b91c1c">A'</text>
      <!-- Ghi chú -->
      <rect x="20" y="15" width="220" height="32" rx="6" fill="#ffffff" stroke="#9333ea" stroke-width="1"/>
      <text x="130" y="35" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#6b21a8">Vật trong khoảng (F-2F) -> Ảnh thật lớn hơn</text>
    </svg>
  `,

  // Bài 11 & 12: Mạch điện Định luật Ohm & Mạch song song
  electric_circuit: `
    <svg viewBox="0 0 760 170" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="750" height="160" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
      <!-- Mạch điện 2 nhánh song song -->
      <line x1="120" y1="85" x2="200" y2="85" stroke="#1e293b" stroke-width="2"/>
      <!-- Nguồn điện -->
      <line x1="70" y1="85" x2="110" y2="85" stroke="#1e293b" stroke-width="2"/>
      <line x1="110" y1="65" x2="110" y2="105" stroke="#ef4444" stroke-width="3"/>
      <text x="105" y="60" font-size="10" font-weight="bold" fill="#dc2626">+</text>
      <line x1="120" y1="72" x2="120" y2="98" stroke="#3b82f6" stroke-width="2"/>
      <text x="125" y="68" font-size="10" font-weight="bold" fill="#2563eb">-</text>
      <text x="100" y="125" font-size="11" font-weight="bold" fill="#1e293b">Nguồn U</text>
      <!-- Khóa K và Ampe kế A chính -->
      <circle cx="160" cy="85" r="14" fill="#ffffff" stroke="#4f46e5" stroke-width="1.5"/>
      <text x="160" y="89" text-anchor="middle" font-size="10" font-weight="bold" fill="#4f46e5">A</text>
      <text x="160" y="112" text-anchor="middle" font-size="8.5" fill="#64748b">Mạch chính I</text>
      <!-- Phân nhánh tại nút M (240, 85) -->
      <line x1="174" y1="85" x2="240" y2="85" stroke="#1e293b" stroke-width="2"/>
      <circle cx="240" cy="85" r="4" fill="#1e293b"/>
      <text x="235" y="78" font-size="10" font-weight="bold">M</text>
      <!-- Nhánh 1 trên: R1 -->
      <line x1="240" y1="85" x2="240" y2="45" stroke="#1e293b" stroke-width="2"/>
      <line x1="240" y1="45" x2="310" y2="45" stroke="#1e293b" stroke-width="2"/>
      <rect x="310" y="35" width="70" height="20" rx="3" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
      <text x="345" y="49" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">R1 (I1)</text>
      <line x1="380" y1="45" x2="450" y2="45" stroke="#1e293b" stroke-width="2"/>
      <line x1="450" y1="45" x2="450" y2="85" stroke="#1e293b" stroke-width="2"/>
      <!-- Nhánh 2 dưới: R2 -->
      <line x1="240" y1="85" x2="240" y2="125" stroke="#1e293b" stroke-width="2"/>
      <line x1="240" y1="125" x2="310" y2="125" stroke="#1e293b" stroke-width="2"/>
      <rect x="310" y="115" width="70" height="20" rx="3" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
      <text x="345" y="129" text-anchor="middle" font-size="10" font-weight="bold" fill="#15803d">R2 (I2)</text>
      <line x1="380" y1="125" x2="450" y2="125" stroke="#1e293b" stroke-width="2"/>
      <!-- Nút N (450, 85) -->
      <circle cx="450" cy="85" r="4" fill="#1e293b"/>
      <text x="455" y="78" font-size="10" font-weight="bold">N</text>
      <line x1="450" y1="85" x2="520" y2="85" stroke="#1e293b" stroke-width="2"/>
      <line x1="520" y1="85" x2="520" y2="150" stroke="#1e293b" stroke-width="2"/>
      <line x1="520" y1="150" x2="70" y2="150" stroke="#1e293b" stroke-width="2"/>
      <line x1="70" y1="150" x2="70" y2="85" stroke="#1e293b" stroke-width="2"/>
      <!-- Bảng công thức song song -->
      <rect x="540" y="25" width="200" height="120" rx="8" fill="#ffffff" stroke="#4f46e5" stroke-width="1"/>
      <text x="640" y="45" text-anchor="middle" font-size="11" font-weight="bold" fill="#4338ca">ĐẶC TRƯNG MẠCH SONG SONG</text>
      <text x="555" y="70" font-size="10" fill="#334155">• U = U1 = U2</text>
      <text x="555" y="90" font-size="10" fill="#334155">• I = I1 + I2</text>
      <text x="555" y="110" font-size="10" font-weight="bold" fill="#059669">• 1/Rtđ = 1/R1 + 1/R2</text>
      <text x="555" y="130" font-size="9.5" fill="#64748b">Rtđ = (R1·R2) / (R1+R2)</text>
    </svg>
  `,

  // Bài 14: Cảm ứng điện từ & Máy phát điện AC
  electromagnetic_induction: `
    <svg viewBox="0 0 760 170" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="750" height="160" rx="14" fill="#fffbeb" stroke="#fde68a" stroke-width="1.2"/>
      <!-- Thanh nam châm N-S -->
      <g transform="translate(80, 50)">
        <rect x="0" y="0" width="80" height="40" fill="#ef4444" rx="4"/>
        <text x="40" y="25" text-anchor="middle" font-size="14" font-weight="bold" fill="#fff">N (Bắc)</text>
        <rect x="80" y="0" width="80" height="40" fill="#3b82f6" rx="4"/>
        <text x="120" y="25" text-anchor="middle" font-size="14" font-weight="bold" fill="#fff">S (Nam)</text>
        <!-- Mũi tên chuyển động dịch chuyển -->
        <line x1="170" y1="20" x2="220" y2="20" stroke="#d97706" stroke-width="3"/>
        <polygon points="220,20 210,14 210,26" fill="#d97706"/>
        <text x="195" y="10" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309">Dịch chuyển v</text>
      </g>
      <!-- Các vòng dây dẫn điện -->
      <g transform="translate(320, 25)">
        <ellipse cx="60" cy="55" rx="35" ry="50" fill="none" stroke="#b45309" stroke-width="3"/>
        <ellipse cx="90" cy="55" rx="35" ry="50" fill="none" stroke="#b45309" stroke-width="3"/>
        <ellipse cx="120" cy="55" rx="35" ry="50" fill="none" stroke="#b45309" stroke-width="3"/>
        <text x="90" y="-8" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">Cuộn dây dẫn kín</text>
        <!-- Dây nối tới điện kế G -->
        <path d="M 60 105 L 60 125 L 200 125" fill="none" stroke="#1e293b" stroke-width="1.8"/>
        <path d="M 120 105 L 120 140 L 200 140" fill="none" stroke="#1e293b" stroke-width="1.8"/>
        <!-- Điện kế kim nhạy G -->
        <circle cx="230" cy="132" r="22" fill="#ffffff" stroke="#047857" stroke-width="2"/>
        <text x="230" y="128" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">G</text>
        <!-- Kim điện kế lệch -->
        <line x1="230" y1="132" x2="242" y2="118" stroke="#dc2626" stroke-width="2"/>
        <text x="230" y="148" text-anchor="middle" font-size="7" fill="#64748b">Kim lệch</text>
      </g>
      <!-- Mô tả bản chất -->
      <rect x="560" y="20" width="180" height="130" rx="8" fill="#ffffff" stroke="#d97706" stroke-width="1"/>
      <text x="650" y="42" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309">ĐIỀU KIỆN CẢM ỨNG</text>
      <text x="570" y="65" font-size="9.5" fill="#334155">• Số đường sức từ qua</text>
      <text x="575" y="80" font-size="9.5" fill="#334155">tiết diện S biến thiên.</text>
      <text x="570" y="100" font-size="9.5" fill="#334155">• Chuyển động tương đối</text>
      <text x="575" y="115" font-size="9.5" fill="#334155">giữa nam châm &amp; cuộn dây.</text>
      <text x="570" y="135" font-size="9.5" font-weight="bold" fill="#047857">=> Xuất hiện dòng điện AC</text>
    </svg>
  `,

  // Bài 19: Dãy hoạt động hóa học của kim loại
  metal_activity_series: `
    <svg viewBox="0 0 760 170" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="750" height="160" rx="14" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.2"/>
      <text x="380" y="26" text-anchor="middle" font-size="12" font-weight="bold" fill="#166534">DÃY HOẠT ĐỘNG HÓA HỌC CỦA KIM LOẠI (KNTN 9)</text>
      <!-- Khung các kim loại -->
      <g transform="translate(20, 40)">
        <!-- K, Na, Ca -->
        <rect x="0" y="0" width="150" height="50" rx="6" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
        <text x="75" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#b91c1c">K, Na, Ca</text>
        <text x="75" y="40" text-anchor="middle" font-size="9" fill="#7f1d1d">Phản ứng H2O ở t° thường</text>
        <!-- Mg, Al, Zn, Fe, Pb -->
        <rect x="160" y="0" width="240" height="50" rx="6" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="280" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#b45309">Mg, Al, Zn, Fe, Pb</text>
        <text x="280" y="40" text-anchor="middle" font-size="9" fill="#78350f">Tác dụng acid loãng -> H2↑</text>
        <!-- (H) -->
        <rect x="410" y="0" width="50" height="50" rx="6" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5"/>
        <text x="435" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#334155">(H)</text>
        <text x="435" y="40" text-anchor="middle" font-size="8.5" fill="#64748b">Chuẩn</text>
        <!-- Cu, Ag, Au -->
        <rect x="470" y="0" width="160" height="50" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="550" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#1d4ed8">Cu, Ag, Au</text>
        <text x="550" y="40" text-anchor="middle" font-size="9" fill="#1e3a8a">Không đẩy H2 khỏi acid</text>
      </g>
      <!-- Mũi tên giảm dần độ hoạt động -->
      <line x1="30" y1="108" x2="640" y2="108" stroke="#16a34a" stroke-width="3"/>
      <polygon points="640,108 630,103 630,113" fill="#16a34a"/>
      <text x="335" y="125" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">MỨC ĐỘ HOẠT ĐỘNG HÓA HỌC GIẢM DẦN ———></text>
      <!-- Câu thần chú ghi nhớ -->
      <rect x="60" y="135" width="630" height="24" rx="4" fill="#ffffff" stroke="#86efac" stroke-width="1"/>
      <text x="375" y="151" text-anchor="middle" font-size="10" font-style="italic" fill="#166534">Ghi nhớ: Khi (K) Nào (Na) Cần (Ca) May (Mg) Áo (Al) Giáp (Zn) Sắt (Fe) Phải (Pb) Hỏi (H) Cụ (Cu) Bạc (Ag) Vàng (Au)</text>
    </svg>
  `,

  // Bài 23 & 24 & 26 & 27: Cấu trúc phân tử hữu cơ trọng tâm
  organic_molecules: `
    <svg viewBox="0 0 760 170" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="750" height="160" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
      <!-- 1. Methane CH4 -->
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="155" height="130" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
        <text x="77" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#0284c7">METHANE (CH4)</text>
        <text x="77" y="34" text-anchor="middle" font-size="8.5" fill="#64748b">Alkane (Liên kết đơn)</text>
        <circle cx="77" cy="75" r="14" fill="#334155"/>
        <text x="77" y="79" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">C</text>
        <!-- 4 liên kết đơn H -->
        <line x1="77" y1="61" x2="77" y2="48" stroke="#334155" stroke-width="2"/>
        <text x="77" y="46" text-anchor="middle" font-size="10" font-weight="bold">H</text>
        <line x1="77" y1="89" x2="77" y2="102" stroke="#334155" stroke-width="2"/>
        <text x="77" y="112" text-anchor="middle" font-size="10" font-weight="bold">H</text>
        <line x1="63" y1="75" x2="48" y2="75" stroke="#334155" stroke-width="2"/>
        <text x="43" y="79" text-anchor="middle" font-size="10" font-weight="bold">H</text>
        <line x1="91" y1="75" x2="106" y2="75" stroke="#334155" stroke-width="2"/>
        <text x="112" y="79" text-anchor="middle" font-size="10" font-weight="bold">H</text>
        <text x="77" y="124" text-anchor="middle" font-size="8" fill="#0369a1">Phản ứng thế Halogen</text>
      </g>
      <!-- 2. Ethene C2H4 -->
      <g transform="translate(205, 20)">
        <rect x="0" y="0" width="165" height="130" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
        <text x="82" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#16a34a">ETHENE (C2H4)</text>
        <text x="82" y="34" text-anchor="middle" font-size="8.5" fill="#64748b">Alkene (Liên kết đôi C=C)</text>
        <!-- C = C -->
        <circle cx="60" cy="75" r="13" fill="#334155"/>
        <text x="60" y="79" text-anchor="middle" font-size="10" font-weight="bold" fill="#fff">C</text>
        <circle cx="105" cy="75" r="13" fill="#334155"/>
        <text x="105" y="79" text-anchor="middle" font-size="10" font-weight="bold" fill="#fff">C</text>
        <line x1="73" y1="71" x2="92" y2="71" stroke="#16a34a" stroke-width="2.5"/>
        <line x1="73" y1="79" x2="92" y2="79" stroke="#16a34a" stroke-width="2.5"/>
        <text x="35" y="60" font-size="9" font-weight="bold">H</text>
        <text x="35" y="98" font-size="9" font-weight="bold">H</text>
        <text x="125" y="60" font-size="9" font-weight="bold">H</text>
        <text x="125" y="98" font-size="9" font-weight="bold">H</text>
        <text x="82" y="124" text-anchor="middle" font-size="8" fill="#15803d">Phản ứng cộng Br2, trùng hợp</text>
      </g>
      <!-- 3. Ethanol C2H5OH -->
      <g transform="translate(390, 20)">
        <rect x="0" y="0" width="170" height="130" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
        <text x="85" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#d97706">ETHANOL (C2H5OH)</text>
        <text x="85" y="34" text-anchor="middle" font-size="8.5" fill="#64748b">Nhóm chức hydroxyl -OH</text>
        <text x="85" y="75" text-anchor="middle" font-size="12" font-family="monospace" font-weight="bold" fill="#1e293b">CH3-CH2-OH</text>
        <rect x="110" y="60" width="45" height="24" rx="4" fill="#fef3c7" stroke="#f59e0b" stroke-width="1"/>
        <text x="132" y="76" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309">-OH</text>
        <text x="85" y="105" text-anchor="middle" font-size="8.5" fill="#475569">Tác dụng Na giải phóng H2</text>
        <text x="85" y="124" text-anchor="middle" font-size="8" fill="#b45309">Độ rượu: (Vr / Vdd) × 100</text>
      </g>
      <!-- 4. Acetic Acid CH3COOH -->
      <g transform="translate(580, 20)">
        <rect x="0" y="0" width="155" height="130" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
        <text x="77" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">ACETIC ACID</text>
        <text x="77" y="34" text-anchor="middle" font-size="8.5" fill="#64748b">Nhóm carboxyl -COOH</text>
        <text x="77" y="75" text-anchor="middle" font-size="12" font-family="monospace" font-weight="bold" fill="#1e293b">CH3-COOH</text>
        <rect x="95" y="60" width="55" height="24" rx="4" fill="#fee2e2" stroke="#ef4444" stroke-width="1"/>
        <text x="122" y="76" text-anchor="middle" font-size="11" font-weight="bold" fill="#b91c1c">-COOH</text>
        <text x="77" y="105" text-anchor="middle" font-size="8.5" fill="#475569">Làm quỳ tím đỏ, vị chua</text>
        <text x="77" y="124" text-anchor="middle" font-size="8" fill="#b91c1c">Este hóa tạo ethyl acetate</text>
      </g>
    </svg>
  `,

  // Bài 38 & 39: Cấu trúc DNA xoắn kép & Nguyên tắc bổ sung
  dna_structure: `
    <svg viewBox="0 0 760 170" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="750" height="160" rx="14" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.2"/>
      <!-- Sợi xoắn kép DNA -->
      <g transform="translate(40, 25)">
        <text x="120" y="15" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">MÔ HÌNH XOẮN KÉP DNA (WATSON - CRICK)</text>
        <!-- Cột mạch kép với các cặp base -->
        <!-- Cặp 1: A = T -->
        <rect x="20" y="35" width="90" height="22" rx="4" fill="#3b82f6"/>
        <text x="65" y="50" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">A (Adenine)</text>
        <line x1="110" y1="42" x2="130" y2="42" stroke="#1e293b" stroke-width="2"/>
        <line x1="110" y1="50" x2="130" y2="50" stroke="#1e293b" stroke-width="2"/>
        <text x="120" y="32" text-anchor="middle" font-size="7.5" fill="#64748b">2 lk H</text>
        <rect x="130" y="35" width="90" height="22" rx="4" fill="#ef4444"/>
        <text x="175" y="50" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">T (Thymine)</text>
        <!-- Cặp 2: G ≡ C -->
        <rect x="20" y="65" width="90" height="22" rx="4" fill="#10b981"/>
        <text x="65" y="80" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">G (Guanine)</text>
        <line x1="110" y1="71" x2="130" y2="71" stroke="#1e293b" stroke-width="1.8"/>
        <line x1="110" y1="76" x2="130" y2="76" stroke="#1e293b" stroke-width="1.8"/>
        <line x1="110" y1="81" x2="130" y2="81" stroke="#1e293b" stroke-width="1.8"/>
        <text x="120" y="63" text-anchor="middle" font-size="7.5" fill="#64748b">3 lk H</text>
        <rect x="130" y="65" width="90" height="22" rx="4" fill="#f59e0b"/>
        <text x="175" y="80" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">C (Cytosine)</text>
        <!-- Cặp 3: T = A -->
        <rect x="20" y="95" width="90" height="22" rx="4" fill="#ef4444"/>
        <text x="65" y="110" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">T (Thymine)</text>
        <line x1="110" y1="102" x2="130" y2="102" stroke="#1e293b" stroke-width="2"/>
        <line x1="110" y1="110" x2="130" y2="110" stroke="#1e293b" stroke-width="2"/>
        <rect x="130" y="95" width="90" height="22" rx="4" fill="#3b82f6"/>
        <text x="175" y="110" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">A (Adenine)</text>
      </g>
      <!-- Khung luồng thông tin trung tâm -->
      <g transform="translate(320, 20)">
        <rect x="0" y="0" width="410" height="135" rx="8" fill="#ffffff" stroke="#93c5fd" stroke-width="1.2"/>
        <text x="205" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">LUỒNG THÔNG TIN TRUNG TÂM SINH HỌC PHÂN TỬ</text>
        <!-- Các hộp quy trình -->
        <rect x="15" y="45" width="70" height="35" rx="6" fill="#dbeafe" stroke="#3b82f6" stroke-width="1"/>
        <text x="50" y="67" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">GENE (DNA)</text>
        <line x1="85" y1="62" x2="120" y2="62" stroke="#3b82f6" stroke-width="2"/>
        <polygon points="120,62 112,58 112,66" fill="#3b82f6"/>
        <text x="102" y="52" text-anchor="middle" font-size="8" fill="#64748b">Phiên mã</text>
        <rect x="120" y="45" width="70" height="35" rx="6" fill="#dcfce7" stroke="#10b981" stroke-width="1"/>
        <text x="155" y="67" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">mRNA</text>
        <line x1="190" y1="62" x2="225" y2="62" stroke="#10b981" stroke-width="2"/>
        <polygon points="225,62 217,58 217,66" fill="#10b981"/>
        <text x="207" y="52" text-anchor="middle" font-size="8" fill="#64748b">Dịch mã</text>
        <rect x="225" y="45" width="75" height="35" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1"/>
        <text x="262" y="67" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">PROTEIN</text>
        <line x1="300" y1="62" x2="330" y2="62" stroke="#f59e0b" stroke-width="2"/>
        <polygon points="330,62 322,58 322,66" fill="#f59e0b"/>
        <rect x="330" y="45" width="70" height="35" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="1"/>
        <text x="365" y="67" text-anchor="middle" font-size="10" font-weight="bold" fill="#991b1b">TÍNH TRẠNG</text>
        <text x="205" y="112" text-anchor="middle" font-size="9.5" fill="#334155">Nguyên tắc bổ sung: DNA: A = T, G ≡ C | RNA: A - U, G ≡ C</text>
      </g>
    </svg>
  `,

  // Bài 43: Nguyên phân vs Giảm phân
  cell_division: `
    <svg viewBox="0 0 760 170" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="750" height="160" rx="14" fill="#fafafa" stroke="#e5e5e5" stroke-width="1.2"/>
      <!-- Nửa trái: NGUYÊN PHÂN -->
      <g transform="translate(20, 15)">
        <rect x="0" y="0" width="350" height="140" rx="10" fill="#f0fdf4" stroke="#86efac" stroke-width="1.2"/>
        <text x="175" y="24" text-anchor="middle" font-size="12" font-weight="bold" fill="#15803d">NGUYÊN PHÂN (MITOSIS)</text>
        <!-- Tế bào mẹ 2n -->
        <circle cx="60" cy="75" r="22" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
        <text x="60" y="79" text-anchor="middle" font-size="11" font-weight="bold" fill="#166534">2n</text>
        <text x="60" y="112" text-anchor="middle" font-size="9" fill="#15803d">1 tế bào mẹ</text>
        <!-- Mũi tên phân chia 1 lần -->
        <line x1="90" y1="75" x2="160" y2="75" stroke="#16a34a" stroke-width="2"/>
        <polygon points="160,75 152,71 152,79" fill="#16a34a"/>
        <text x="125" y="68" text-anchor="middle" font-size="8.5" fill="#166534">1 lần phân chia</text>
        <!-- 2 tế bào con 2n -->
        <circle cx="210" cy="50" r="18" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
        <text x="210" y="54" text-anchor="middle" font-size="10" font-weight="bold" fill="#166534">2n</text>
        <circle cx="210" cy="100" r="18" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
        <text x="210" y="104" text-anchor="middle" font-size="10" font-weight="bold" fill="#166534">2n</text>
        <text x="280" y="70" font-size="9" font-weight="bold" fill="#15803d">2 tế bào con</text>
        <text x="280" y="85" font-size="8.5" fill="#166534">Giống hệt mẹ (2n)</text>
      </g>
      <!-- Nửa phải: GIẢM PHÂN -->
      <g transform="translate(390, 15)">
        <rect x="0" y="0" width="350" height="140" rx="10" fill="#fdf2f8" stroke="#fbcfe8" stroke-width="1.2"/>
        <text x="175" y="24" text-anchor="middle" font-size="12" font-weight="bold" fill="#be185d">GIẢM PHÂN (MEIOSIS)</text>
        <!-- Tế bào mẹ 2n -->
        <circle cx="50" cy="75" r="22" fill="#fbcfe8" stroke="#db2777" stroke-width="1.5"/>
        <text x="50" y="79" text-anchor="middle" font-size="11" font-weight="bold" fill="#9d174d">2n</text>
        <text x="50" y="112" text-anchor="middle" font-size="9" fill="#be185d">Tế bào sinh dục</text>
        <!-- 2 lần phân chia liên tiếp -->
        <line x1="80" y1="75" x2="140" y2="75" stroke="#db2777" stroke-width="2"/>
        <polygon points="140,75 132,71 132,79" fill="#db2777"/>
        <text x="110" y="68" text-anchor="middle" font-size="8" fill="#be185d">2 lần phân chia</text>
        <!-- 4 giao tử n -->
        <circle cx="170" cy="40" r="13" fill="#fce7f3" stroke="#db2777" stroke-width="1"/>
        <text x="170" y="44" text-anchor="middle" font-size="9" font-weight="bold" fill="#9d174d">n</text>
        <circle cx="170" cy="68" r="13" fill="#fce7f3" stroke="#db2777" stroke-width="1"/>
        <text x="170" y="72" text-anchor="middle" font-size="9" font-weight="bold" fill="#9d174d">n</text>
        <circle cx="170" cy="96" r="13" fill="#fce7f3" stroke="#db2777" stroke-width="1"/>
        <text x="170" y="100" text-anchor="middle" font-size="9" font-weight="bold" fill="#9d174d">n</text>
        <circle cx="170" cy="124" r="13" fill="#fce7f3" stroke="#db2777" stroke-width="1"/>
        <text x="170" y="128" text-anchor="middle" font-size="9" font-weight="bold" fill="#9d174d">n</text>
        <text x="210" y="78" font-size="9.5" font-weight="bold" fill="#be185d">4 giao tử (n)</text>
        <text x="210" y="93" font-size="8.5" fill="#9d174d">Bộ NST giảm 1/2</text>
      </g>
    </svg>
  `
};
