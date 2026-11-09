// Generator for ict11_svgs.js
const fs = require('fs');

const svgs = {
  1: `<svg viewBox="0 0 800 240" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="240" rx="12" fill="#0f172a"/>
  <text x="400" y="24" text-anchor="middle" font-size="13" font-weight="900" fill="#38bdf8" letter-spacing="1">GIAO DIỆN INKSCAPE & SO SÁNH ĐỒ HỌA VECTOR VÀ BITMAP</text>
  
  <!-- Left panel: Inkscape Workspace -->
  <rect x="25" y="45" width="360" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <rect x="25" y="45" width="40" height="175" rx="8" fill="#0f172a"/>
  <!-- Tools on left -->
  <circle cx="45" cy="65" r="8" fill="#38bdf8"/>
  <rect x="39" y="82" width="12" height="12" rx="2" fill="#94a3b8"/>
  <circle cx="45" cy="107" r="6" fill="#94a3b8"/>
  <polygon points="45,120 48,127 55,127 49,132 51,139 45,134 39,139 41,132 35,127 42,127" fill="#94a3b8"/>
  <path d="M40,155 Q45,148 50,155 T60,155" stroke="#38bdf8" stroke-width="2" fill="none"/>
  <!-- Canvas -->
  <rect x="80" y="60" width="180" height="145" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
  <circle cx="170" cy="120" r="35" fill="#0284c7" opacity="0.85"/>
  <rect x="130" y="100" width="50" height="50" rx="6" fill="#f59e0b" opacity="0.85"/>
  <!-- Properties Panel -->
  <rect x="275" y="60" width="95" height="145" rx="4" fill="#0f172a" stroke="#334155"/>
  <text x="285" y="78" font-size="10" font-weight="700" fill="#38bdf8">Fill & Stroke</text>
  <rect x="285" y="88" width="75" height="14" rx="2" fill="#334155"/>
  <text x="290" y="99" font-size="8" fill="#e2e8f0">Fill: #0284C7</text>
  <rect x="285" y="108" width="75" height="14" rx="2" fill="#334155"/>
  <text x="290" y="119" font-size="8" fill="#e2e8f0">Stroke: None</text>
  <rect x="285" y="128" width="75" height="14" rx="2" fill="#334155"/>
  <text x="290" y="139" font-size="8" fill="#e2e8f0">Opacity: 100%</text>

  <!-- Right panel: Vector vs Raster comparison -->
  <rect x="415" y="45" width="360" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <!-- Vector side -->
  <rect x="430" y="60" width="160" height="145" rx="6" fill="#0f172a" stroke="#0ea5e9"/>
  <text x="510" y="78" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">ĐỒ HỌA VECTOR (SVG)</text>
  <path d="M460,150 C460,95 560,95 560,150" stroke="#0ea5e9" stroke-width="6" fill="none"/>
  <circle cx="460" cy="150" r="4" fill="#38bdf8"/>
  <circle cx="560" cy="150" r="4" fill="#38bdf8"/>
  <text x="510" y="180" text-anchor="middle" font-size="9" fill="#94a3b8">Toán học định nghĩa</text>
  <text x="510" y="195" text-anchor="middle" font-size="9" font-weight="700" fill="#22c55e">✓ Phóng to sắc nét 100%</text>

  <!-- Raster side -->
  <rect x="600" y="60" width="160" height="145" rx="6" fill="#0f172a" stroke="#ef4444"/>
  <text x="680" y="78" text-anchor="middle" font-size="11" font-weight="700" fill="#f87171">BITMAP / RASTER</text>
  <!-- Pixelated curve -->
  <g fill="#ef4444">
    <rect x="630" y="145" width="8" height="8"/>
    <rect x="638" y="137" width="8" height="8"/>
    <rect x="646" y="125" width="8" height="8"/>
    <rect x="654" y="115" width="8" height="8"/>
    <rect x="662" y="110" width="8" height="8"/>
    <rect x="670" y="108" width="8" height="8"/>
    <rect x="678" y="108" width="8" height="8"/>
    <rect x="686" y="110" width="8" height="8"/>
    <rect x="694" y="115" width="8" height="8"/>
    <rect x="702" y="125" width="8" height="8"/>
    <rect x="710" y="137" width="8" height="8"/>
    <rect x="718" y="145" width="8" height="8"/>
  </g>
  <text x="680" y="180" text-anchor="middle" font-size="9" fill="#94a3b8">Ma trận điểm ảnh pixel</text>
  <text x="680" y="195" text-anchor="middle" font-size="9" font-weight="700" fill="#f87171">✗ Phóng to vỡ hạt nhòe</text>
</svg>`,

  2: `<svg viewBox="0 0 800 240" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="240" rx="12" fill="#0f172a"/>
  <text x="400" y="24" text-anchor="middle" font-size="13" font-weight="900" fill="#38bdf8" letter-spacing="1">ĐỐI TƯỢNG HÌNH KHỐI VÀ CƠ CHẾ ĐIỀU KHIỂN THAM SỐ</text>
  
  <!-- Box 1: Rectangle & Rounded Corner -->
  <rect x="25" y="45" width="170" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="110" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">1. HÌNH CHỮ NHẬT (F4)</text>
  <rect x="50" y="85" width="120" height="80" rx="16" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
  <circle cx="154" cy="85" r="5" fill="#f59e0b" stroke="#ffffff" stroke-width="1.5"/>
  <path d="M154,85 L154,101" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="2,2"/>
  <text x="110" y="185" text-anchor="middle" font-size="9.5" fill="#e2e8f0">Bo góc thông minh Rx, Ry</text>
  <text x="110" y="202" text-anchor="middle" font-size="8.5" fill="#94a3b8">Tay nắm tròn chỉnh bán kính</text>

  <!-- Box 2: Circle & Arc/Slice -->
  <rect x="215" y="45" width="170" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="300" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">2. HÌNH TRÒN & CUNG (F5)</text>
  <path d="M300,125 L350,125 A50,50 0 1,0 300,75 Z" fill="#10b981" stroke="#34d399" stroke-width="2"/>
  <circle cx="350" cy="125" r="5" fill="#f59e0b" stroke="#ffffff" stroke-width="1.5"/>
  <circle cx="300" cy="75" r="5" fill="#f59e0b" stroke="#ffffff" stroke-width="1.5"/>
  <text x="300" y="185" text-anchor="middle" font-size="9.5" fill="#e2e8f0">Cắt góc nan quạt (Slice)</text>
  <text x="300" y="202" text-anchor="middle" font-size="8.5" fill="#94a3b8">Start & End Angles linh hoạt</text>

  <!-- Box 3: Star & Polygon -->
  <rect x="405" y="45" width="170" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="490" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">3. SAO & ĐA GIÁC (*)</text>
  <polygon points="490,80 502,110 535,110 508,130 518,160 490,142 462,160 472,130 445,110 478,110" fill="#f59e0b" stroke="#fbbf24" stroke-width="2"/>
  <text x="490" y="185" text-anchor="middle" font-size="9.5" fill="#e2e8f0">Corners: 5 | Spoke: 0.382</text>
  <text x="490" y="202" text-anchor="middle" font-size="8.5" fill="#94a3b8">Tỉ lệ vàng vẽ Quốc kỳ chuẩn</text>

  <!-- Box 4: Object to Path -->
  <rect x="595" y="45" width="180" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="685" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">4. OBJECT TO PATH</text>
  <path d="M635,90 L735,90 L715,155 L655,155 Z" fill="#6366f1" stroke="#818cf8" stroke-width="2"/>
  <circle cx="635" cy="90" r="4" fill="#ef4444" stroke="#ffffff"/>
  <circle cx="735" cy="90" r="4" fill="#ef4444" stroke="#ffffff"/>
  <circle cx="715" cy="155" r="4" fill="#ef4444" stroke="#ffffff"/>
  <circle cx="655" cy="155" r="4" fill="#ef4444" stroke="#ffffff"/>
  <text x="685" y="185" text-anchor="middle" font-size="9.5" font-weight="700" fill="#e2e8f0">Shift + Ctrl + C</text>
  <text x="685" y="202" text-anchor="middle" font-size="8.5" fill="#94a3b8">Giải phóng điểm neo uốn tự do</text>
</svg>`,

  3: `<svg viewBox="0 0 800 240" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="240" rx="12" fill="#0f172a"/>
  <text x="400" y="24" text-anchor="middle" font-size="13" font-weight="900" fill="#38bdf8" letter-spacing="1">ĐỐI TƯỢNG ĐƯỜNG BEZIER VÀ CẤU TRÚC ĐIỂM NEO (NODE)</text>
  
  <!-- Section 1: Cusp Node -->
  <rect x="25" y="45" width="235" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="142" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#f87171">1. ĐIỂM NHỌN (CUSP NODE)</text>
  <path d="M50,145 L142,90 L230,150" stroke="#f87171" stroke-width="3" fill="none"/>
  <!-- Node diamond -->
  <rect x="137" y="85" width="10" height="10" transform="rotate(45 142 90)" fill="#ffffff" stroke="#ef4444" stroke-width="2"/>
  <line x1="142" y1="90" x2="110" y2="70" stroke="#94a3b8" stroke-width="1.5"/>
  <circle cx="110" cy="70" r="3.5" fill="#38bdf8"/>
  <line x1="142" y1="90" x2="185" y2="60" stroke="#94a3b8" stroke-width="1.5"/>
  <circle cx="185" cy="60" r="3.5" fill="#38bdf8"/>
  <text x="142" y="185" text-anchor="middle" font-size="9.5" fill="#e2e8f0">2 tay nắm độc lập góc & độ dài</text>
  <text x="142" y="202" text-anchor="middle" font-size="8.5" fill="#94a3b8">Tạo góc bẻ gãy khúc, đỉnh ngọn</text>

  <!-- Section 2: Smooth Node -->
  <rect x="280" y="45" width="240" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="400" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">2. ĐIỂM TRƠN (SMOOTH NODE)</text>
  <path d="M305,145 C340,85 460,85 495,145" stroke="#38bdf8" stroke-width="3" fill="none"/>
  <!-- Smooth node square -->
  <rect x="395" y="93" width="10" height="10" fill="#ffffff" stroke="#0ea5e9" stroke-width="2"/>
  <line x1="340" y1="98" x2="460" y2="98" stroke="#f59e0b" stroke-width="1.5"/>
  <circle cx="340" cy="98" r="4" fill="#f59e0b"/>
  <circle cx="460" cy="98" r="4" fill="#f59e0b"/>
  <text x="400" y="185" text-anchor="middle" font-size="9.5" fill="#e2e8f0">2 tay nắm luôn thẳng hàng 180°</text>
  <text x="400" y="202" text-anchor="middle" font-size="8.5" fill="#94a3b8">Độ dài tay nắm có thể khác nhau</text>

  <!-- Section 3: Symmetric Node -->
  <rect x="540" y="45" width="235" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="657" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#4ade80">3. ĐỐI XỨNG (SYMMETRIC NODE)</text>
  <path d="M565,150 C600,80 715,80 750,150" stroke="#4ade80" stroke-width="3" fill="none"/>
  <!-- Symmetric node circle -->
  <circle cx="657" cy="97" r="5" fill="#ffffff" stroke="#22c55e" stroke-width="2"/>
  <line x1="607" y1="97" x2="707" y2="97" stroke="#a855f7" stroke-width="1.5"/>
  <circle cx="607" cy="97" r="4" fill="#a855f7"/>
  <circle cx="707" cy="97" r="4" fill="#a855f7"/>
  <text x="657" y="185" text-anchor="middle" font-size="9.5" fill="#e2e8f0">2 tay nắm thẳng hàng VÀ bằng nhau</text>
  <text x="657" y="202" text-anchor="middle" font-size="8.5" fill="#94a3b8">Tạo đường cong đối xứng cân bằng</text>
</svg>`,

  4: `<svg viewBox="0 0 800 240" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="240" rx="12" fill="#0f172a"/>
  <text x="400" y="24" text-anchor="middle" font-size="13" font-weight="900" fill="#38bdf8" letter-spacing="1">BỘ PHÉP TOÁN BOOLEAN VÀ CĂN GIÓNG ĐỐI TƯỢNG TRONG INKSCAPE</text>
  
  <!-- 1. Union -->
  <rect x="25" y="45" width="135" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="92" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">UNION (Ctrl++)</text>
  <!-- Merged shape -->
  <path d="M60,115 A25,25 0 0,0 85,140 A25,25 0 0,0 120,125 A25,25 0 0,0 95,95 A25,25 0 0,0 60,115 Z" fill="#0284c7" stroke="#38bdf8"/>
  <text x="92" y="185" text-anchor="middle" font-size="9.5" fill="#e2e8f0">Hợp nhất mảng</text>
  <text x="92" y="202" text-anchor="middle" font-size="8.5" fill="#94a3b8">Tạo một hình kín duy nhất</text>

  <!-- 2. Difference -->
  <rect x="175" y="45" width="135" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="242" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">DIFFERENCE (Ctrl+-)</text>
  <!-- Moon crescent -->
  <path d="M230,95 A25,25 0 1,0 255,145 A30,30 0 0,1 230,95 Z" fill="#f59e0b" stroke="#fbbf24"/>
  <text x="242" y="185" text-anchor="middle" font-size="9.5" fill="#e2e8f0">Cắt trừ (Hình dưới - trên)</text>
  <text x="242" y="202" text-anchor="middle" font-size="8.5" fill="#94a3b8">Tạo trăng khuyết, khoét lỗ</text>

  <!-- 3. Intersection -->
  <rect x="325" y="45" width="135" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="392" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">INTERSECT (Ctrl+*)</text>
  <!-- Leaf intersection -->
  <path d="M375,100 A35,35 0 0,1 410,135 A35,35 0 0,1 375,100 Z" fill="#10b981" stroke="#34d399"/>
  <path d="M375,100 A35,35 0 0,0 410,135 A35,35 0 0,0 375,100 Z" fill="#10b981" stroke="#34d399"/>
  <text x="392" y="185" text-anchor="middle" font-size="9.5" fill="#e2e8f0">Phần giao nhau</text>
  <text x="392" y="202" text-anchor="middle" font-size="8.5" fill="#94a3b8">Lấy phần chung giữa 2 hình</text>

  <!-- 4. Text on Path -->
  <rect x="475" y="45" width="140" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="545" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">TEXT ON PATH</text>
  <path id="curvePath" d="M495,140 A50,50 0 0,1 595,140" stroke="#64748b" stroke-dasharray="2,2" fill="none"/>
  <text font-size="10" font-weight="700" fill="#f43f5e">
    <textPath href="#curvePath" startOffset="10%">TIN HỌC 11 ICT</textPath>
  </text>
  <text x="545" y="185" text-anchor="middle" font-size="9.5" fill="#e2e8f0">Text > Put on Path</text>
  <text x="545" y="202" text-anchor="middle" font-size="8.5" fill="#94a3b8">Uốn chữ theo hình cong</text>

  <!-- 5. Align & Distribute -->
  <rect x="630" y="45" width="145" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="702" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">ALIGN (Shift+Ctrl+A)</text>
  <line x1="702" y1="85" x2="702" y2="155" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3,3"/>
  <rect x="672" y="90" width="60" height="15" rx="2" fill="#818cf8"/>
  <rect x="662" y="112" width="80" height="15" rx="2" fill="#6366f1"/>
  <rect x="682" y="134" width="40" height="15" rx="2" fill="#4f46e5"/>
  <text x="702" y="185" text-anchor="middle" font-size="9.5" fill="#e2e8f0">Căn giữa thẳng trục</text>
  <text x="702" y="202" text-anchor="middle" font-size="8.5" fill="#94a3b8">Chia đều khoảng cách</text>
</svg>`,

  5: `<svg viewBox="0 0 800 240" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="240" rx="12" fill="#0f172a"/>
  <text x="400" y="24" text-anchor="middle" font-size="13" font-weight="900" fill="#38bdf8" letter-spacing="1">DỰ ÁN ĐỒ HỌA THÁP RÙA VECTOR: CẤU TRÚC PHÂN TẦNG VÀ CHIỀU SÂU</text>
  
  <!-- Left: Artwork Rendering -->
  <rect x="25" y="45" width="420" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <!-- Sky background -->
  <rect x="35" y="55" width="400" height="95" rx="4" fill="url(#skyGrad)"/>
  <defs>
    <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#38bdf8"/>
    </linearGradient>
    <linearGradient id="roofGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#b45309"/>
      <stop offset="100%" stop-color="#78350f"/>
    </linearGradient>
    <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0e7490"/>
      <stop offset="100%" stop-color="#155e75"/>
    </linearGradient>
  </defs>
  <!-- Mound (gò rùa) -->
  <ellipse cx="235" cy="150" rx="140" ry="20" fill="#15803d"/>
  <!-- Turtle Tower Level 1 (Base) -->
  <rect x="175" y="115" width="120" height="30" fill="#e2e8f0" stroke="#475569"/>
  <path d="M185,145 L185,128 A8,8 0 0,1 201,128 L201,145 Z" fill="#334155"/>
  <path d="M215,145 L215,125 A12,12 0 0,1 239,125 L239,145 Z" fill="#334155"/>
  <path d="M253,145 L253,128 A8,8 0 0,1 269,128 L269,145 Z" fill="#334155"/>
  <rect x="170" y="112" width="130" height="4" fill="url(#roofGrad)"/>
  <!-- Level 2 -->
  <rect x="190" y="90" width="90" height="22" fill="#e2e8f0" stroke="#475569"/>
  <path d="M200,112 L200,98 A7,7 0 0,1 214,98 L214,112 Z" fill="#334155"/>
  <path d="M225,112 L225,97 A8,8 0 0,1 241,97 L241,112 Z" fill="#334155"/>
  <path d="M252,112 L252,98 A7,7 0 0,1 266,98 L266,112 Z" fill="#334155"/>
  <rect x="185" y="87" width="100" height="4" fill="url(#roofGrad)"/>
  <!-- Level 3 -->
  <rect x="210" y="70" width="50" height="17" fill="#e2e8f0" stroke="#475569"/>
  <circle cx="235" cy="78" r="4.5" fill="#334155"/>
  <path d="M205,70 L235,58 L265,70 Z" fill="url(#roofGrad)"/>
  <polygon points="235,53 237,56 240,56 238,58 239,61 235,59 231,61 232,58 230,56 233,56" fill="#fbbf24"/>
  <!-- Lake Water with reflection -->
  <rect x="35" y="150" width="400" height="60" rx="4" fill="url(#waterGrad)"/>
  <!-- Shadow reflection -->
  <ellipse cx="235" cy="165" rx="60" ry="8" fill="#083344" opacity="0.6"/>
  <text x="80" y="195" font-size="10" font-weight="700" fill="#67e8f9">Mặt nước Hồ Gươm (Opacity 70% + Blur)</text>

  <!-- Right: Architecture Layer Structure -->
  <rect x="460" y="45" width="315" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="617" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">CẤU TRÚC PHÂN LỚP (LAYERS)</text>
  
  <rect x="475" y="80" width="285" height="24" rx="4" fill="#0f172a" stroke="#0ea5e9"/>
  <text x="485" y="96" font-size="9" font-weight="700" fill="#38bdf8">Layer 4: Đỉnh tháp & Ngôi sao vàng</text>
  <text x="740" y="96" text-anchor="end" font-size="8" fill="#94a3b8">Vector Path</text>

  <rect x="475" y="108" width="285" height="24" rx="4" fill="#0f172a" stroke="#38bdf8"/>
  <text x="485" y="124" font-size="9" font-weight="700" fill="#e2e8f0">Layer 3: Khối kiến trúc 3 tầng & Cửa vòm</text>
  <text x="740" y="124" text-anchor="end" font-size="8" fill="#94a3b8">Difference</text>

  <rect x="475" y="136" width="285" height="24" rx="4" fill="#0f172a" stroke="#22c55e"/>
  <text x="485" y="152" font-size="9" font-weight="700" fill="#4ade80">Layer 2: Gò rùa & Bóng đổ mặt hồ</text>
  <text x="740" y="152" text-anchor="end" font-size="8" fill="#94a3b8">Radial Gradient</text>

  <rect x="475" y="164" width="285" height="24" rx="4" fill="#0f172a" stroke="#64748b"/>
  <text x="485" y="180" font-size="9" font-weight="700" fill="#94a3b8">Layer 1: Nền trời & Mây khói (Background)</text>
  <text x="740" y="180" text-anchor="end" font-size="8" fill="#94a3b8">Linear Grad</text>

  <text x="617" y="206" text-anchor="middle" font-size="9" font-weight="700" fill="#fbbf24">Xuất bản: SVG gốc (In ấn 300 DPI / Web 96 DPI)</text>
</svg>`,

  6: `<svg viewBox="0 0 800 240" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="240" rx="12" fill="#0f172a"/>
  <text x="400" y="24" text-anchor="middle" font-size="13" font-weight="900" fill="#38bdf8" letter-spacing="1">QUY TRÌNH KỊCH BẢN PHÂN CẢNH VÀ MÔI TRƯỜNG 3D TOONTASTIC</text>
  
  <!-- Step 1: Beginning -->
  <rect x="25" y="50" width="230" height="165" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <rect x="25" y="50" width="230" height="28" rx="8" fill="#0284c7"/>
  <text x="140" y="69" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">HỒI 1: BEGINNING (MỞ ĐẦU)</text>
  <!-- Icon Stage -->
  <circle cx="140" cy="115" r="28" fill="#0f172a" stroke="#38bdf8"/>
  <path d="M125,125 L140,105 L155,125 Z" fill="#38bdf8"/>
  <circle cx="140" cy="100" r="6" fill="#fbbf24"/>
  <text x="140" y="160" text-anchor="middle" font-size="10" font-weight="700" fill="#e2e8f0">Thiết lập Bối cảnh & Nhân vật</text>
  <text x="140" y="178" text-anchor="middle" font-size="8.5" fill="#94a3b8">Chọn không gian 3D, giới thiệu mục tiêu</text>
  <text x="140" y="195" text-anchor="middle" font-size="8.5" fill="#38bdf8">Thời lượng: 15 - 20s</text>

  <!-- Arrow 1 -->
  <polygon points="265,130 275,135 265,140" fill="#38bdf8"/>

  <!-- Step 2: Middle -->
  <rect x="285" y="50" width="230" height="165" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
  <rect x="285" y="50" width="230" height="28" rx="8" fill="#d97706"/>
  <text x="400" y="69" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">HỒI 2: MIDDLE (XUNG ĐỘT)</text>
  <!-- Icon Conflict -->
  <circle cx="400" cy="115" r="28" fill="#0f172a" stroke="#f59e0b"/>
  <path d="M388,105 L412,125 M412,105 L388,125" stroke="#ef4444" stroke-width="4"/>
  <polygon points="400,98 405,108 395,108" fill="#fbbf24"/>
  <text x="400" y="160" text-anchor="middle" font-size="10" font-weight="700" fill="#e2e8f0">Biến cố & Thử thách cam go</text>
  <text x="400" y="178" text-anchor="middle" font-size="8.5" fill="#94a3b8">Xung đột nảy sinh, nhân vật hành động</text>
  <text x="400" y="195" text-anchor="middle" font-size="8.5" fill="#f59e0b">Thời lượng: 20 - 30s</text>

  <!-- Arrow 2 -->
  <polygon points="525,130 535,135 525,140" fill="#38bdf8"/>

  <!-- Step 3: Climax -->
  <rect x="545" y="50" width="230" height="165" rx="8" fill="#1e293b" stroke="#22c55e" stroke-width="2"/>
  <rect x="545" y="50" width="230" height="28" rx="8" fill="#16a34a"/>
  <text x="660" y="69" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">HỒI 3: CLIMAX (KẾT THÚC)</text>
  <!-- Icon Climax -->
  <circle cx="660" cy="115" r="28" fill="#0f172a" stroke="#22c55e"/>
  <polygon points="660,98 664,108 674,108 666,114 669,124 660,118 651,124 654,114 646,108 656,108" fill="#fbbf24"/>
  <text x="660" y="160" text-anchor="middle" font-size="10" font-weight="700" fill="#e2e8f0">Giải quyết vấn đề & Bài học</text>
  <text x="660" y="178" text-anchor="middle" font-size="8.5" fill="#94a3b8">Nút thắt tháo gỡ, đọng lại thông điệp</text>
  <text x="660" y="195" text-anchor="middle" font-size="8.5" fill="#4ade80">Thời lượng: 15 - 20s</text>
</svg>`,

  7: `<svg viewBox="0 0 800 240" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="240" rx="12" fill="#0f172a"/>
  <text x="400" y="24" text-anchor="middle" font-size="13" font-weight="900" fill="#38bdf8" letter-spacing="1">THIẾT KẾ NHÂN VẬT VÀ CƠ CHẾ GẮN KHUNG XƯƠNG TỰ ĐỘNG (RIGGING)</text>
  
  <!-- Left: Draw Your Own -->
  <rect x="25" y="45" width="235" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="142" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">1. BÚT VẼ TAY (DRAW 2D)</text>
  <!-- Hand drawn character contour -->
  <ellipse cx="142" cy="95" rx="18" ry="16" fill="#fbcfe8" stroke="#f43f5e" stroke-width="2"/>
  <rect x="127" y="113" width="30" height="36" rx="6" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <line x1="127" y1="120" x2="105" y2="135" stroke="#3b82f6" stroke-width="4" stroke-linecap="round"/>
  <line x1="157" y1="120" x2="179" y2="135" stroke="#3b82f6" stroke-width="4" stroke-linecap="round"/>
  <line x1="133" y1="149" x2="128" y2="175" stroke="#1e3a8a" stroke-width="4" stroke-linecap="round"/>
  <line x1="151" y1="149" x2="156" y2="175" stroke="#1e3a8a" stroke-width="4" stroke-linecap="round"/>
  <text x="142" y="195" text-anchor="middle" font-size="9" fill="#e2e8f0">Vẽ các chi tách biệt rõ ràng</text>
  <text x="142" y="210" text-anchor="middle" font-size="8" fill="#94a3b8">Tự động phồng thành thể tích 3D</text>

  <!-- Center: Rigging & Skeleton Joints -->
  <rect x="280" y="45" width="240" height="175" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <text x="400" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">2. KHUNG XƯƠNG CỬ ĐỘNG (RIGGING)</text>
  <!-- Skeleton lines & joint dots -->
  <line x1="400" y1="95" x2="400" y2="145" stroke="#f59e0b" stroke-width="3"/>
  <line x1="400" y1="115" x2="370" y2="130" stroke="#f59e0b" stroke-width="2.5"/>
  <line x1="370" y1="130" x2="355" y2="145" stroke="#f59e0b" stroke-width="2.5"/>
  <line x1="400" y1="115" x2="430" y2="130" stroke="#f59e0b" stroke-width="2.5"/>
  <line x1="430" y1="130" x2="445" y2="145" stroke="#f59e0b" stroke-width="2.5"/>
  <line x1="400" y1="145" x2="385" y2="175" stroke="#f59e0b" stroke-width="2.5"/>
  <line x1="400" y1="145" x2="415" y2="175" stroke="#f59e0b" stroke-width="2.5"/>
  <!-- Joint circles -->
  <circle cx="400" cy="95" r="5" fill="#ef4444" stroke="#ffffff"/>
  <circle cx="400" cy="115" r="4" fill="#22c55e" stroke="#ffffff"/>
  <circle cx="370" cy="130" r="4" fill="#22c55e" stroke="#ffffff"/>
  <circle cx="355" cy="145" r="4" fill="#38bdf8" stroke="#ffffff"/>
  <circle cx="430" cy="130" r="4" fill="#22c55e" stroke="#ffffff"/>
  <circle cx="445" cy="145" r="4" fill="#38bdf8" stroke="#ffffff"/>
  <circle cx="400" cy="145" r="4" fill="#22c55e" stroke="#ffffff"/>
  <circle cx="385" cy="175" r="4" fill="#38bdf8" stroke="#ffffff"/>
  <circle cx="415" cy="175" r="4" fill="#38bdf8" stroke="#ffffff"/>
  <text x="400" y="195" text-anchor="middle" font-size="9" fill="#e2e8f0">Thuật toán dò khớp tự động</text>
  <text x="400" y="210" text-anchor="middle" font-size="8" fill="#94a3b8">Cử động chân tay tự nhiên khi diễn</text>

  <!-- Right: Photo Face Avatar -->
  <rect x="540" y="45" width="235" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="657" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">3. AVATAR MẶT NGƯỜI THẬT</text>
  <!-- Face frame -->
  <circle cx="657" cy="115" r="30" fill="#0f172a" stroke="#ec4899" stroke-width="2"/>
  <circle cx="657" cy="110" r="16" fill="#f472b6"/>
  <circle cx="652" cy="107" r="2.5" fill="#ffffff"/>
  <circle cx="662" cy="107" r="2.5" fill="#ffffff"/>
  <path d="M652,118 Q657,123 662,118" stroke="#ffffff" stroke-width="1.5" fill="none"/>
  <!-- Body cartoon -->
  <rect x="642" y="145" width="30" height="25" rx="4" fill="#3b82f6"/>
  <text x="657" y="195" text-anchor="middle" font-size="9" fill="#e2e8f0">Chụp webcam hoặc tải ảnh chân dung</text>
  <text x="657" y="210" text-anchor="middle" font-size="8" fill="#94a3b8">Hóa thân sinh động vào nhân vật</text>
</svg>`,

  8: `<svg viewBox="0 0 800 240" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="240" rx="12" fill="#0f172a"/>
  <text x="400" y="24" text-anchor="middle" font-size="13" font-weight="900" fill="#38bdf8" letter-spacing="1">ĐIỀU HÀNH DIỄN XUẤT, THU ÂM TRỰC TIẾP VÀ CHỈNH MOOD MUSIC</text>
  
  <!-- Left: Real-time puppet control -->
  <rect x="25" y="45" width="240" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="145" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">ĐIỀU KHIỂN NHÂN VẬT</text>
  <rect x="40" y="80" width="210" height="85" rx="4" fill="#0f172a" stroke="#334155"/>
  <circle cx="90" cy="122" r="14" fill="#38bdf8"/>
  <!-- Motion arrows -->
  <path d="M105,122 C135,100 160,140 190,115" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3" fill="none"/>
  <polygon points="190,115 180,113 186,123" fill="#f59e0b"/>
  <circle cx="195" cy="115" r="14" fill="#38bdf8" opacity="0.6"/>
  <text x="145" y="185" text-anchor="middle" font-size="9.5" fill="#e2e8f0">Kéo chuột / chạm tay di chuyển</text>
  <text x="145" y="202" text-anchor="middle" font-size="8.5" fill="#94a3b8">Chạm vào thân tạo biểu cảm quay mặt</text>

  <!-- Center: Realtime Voice recording -->
  <rect x="280" y="45" width="240" height="175" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
  <text x="400" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#f87171">THU ÂM LỒNG TIẾNG TRỰC TIẾP</text>
  <!-- Mic icon -->
  <circle cx="400" cy="100" r="16" fill="#ef4444"/>
  <rect x="396" y="92" width="8" height="14" rx="4" fill="#ffffff"/>
  <!-- Soundwave -->
  <g stroke="#38bdf8" stroke-width="2" stroke-linecap="round">
    <line x1="330" y1="135" x2="330" y2="145"/>
    <line x1="345" y1="125" x2="345" y2="155"/>
    <line x1="360" y1="120" x2="360" y2="160"/>
    <line x1="375" y1="130" x2="375" y2="150"/>
    <line x1="390" y1="115" x2="390" y2="165"/>
    <line x1="405" y1="122" x2="405" y2="158"/>
    <line x1="420" y1="110" x2="420" y2="170"/>
    <line x1="435" y1="128" x2="435" y2="152"/>
    <line x1="450" y1="120" x2="450" y2="160"/>
    <line x1="465" y1="135" x2="465" y2="145"/>
  </g>
  <text x="400" y="190" text-anchor="middle" font-size="9.5" fill="#e2e8f0">Micro ghi trực tiếp theo chuyển động</text>
  <text x="400" y="205" text-anchor="middle" font-size="8.5" fill="#94a3b8">Đồng bộ giọng nói và cử chỉ 100%</text>

  <!-- Right: Mood Music Slider -->
  <rect x="535" y="45" width="240" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="655" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">CHỌN MOOD NHẠC NỀN</text>
  <!-- Slider bar -->
  <rect x="560" y="115" width="190" height="8" rx="4" fill="#0f172a"/>
  <rect x="560" y="115" width="120" height="8" rx="4" fill="#38bdf8"/>
  <circle cx="680" cy="119" r="10" fill="#fbbf24" stroke="#ffffff" stroke-width="2"/>
  <!-- Emotion labels -->
  <text x="565" y="100" font-size="8.5" fill="#94a3b8">Rùng rợn</text>
  <text x="620" y="100" font-size="8.5" fill="#94a3b8">Buồn</text>
  <text x="680" y="100" font-size="8.5" font-weight="700" fill="#fbbf24">Kịch tính</text>
  <text x="740" y="100" font-size="8.5" fill="#94a3b8">Vui tươi</text>
  <text x="655" y="165" text-anchor="middle" font-size="9.5" fill="#e2e8f0">5 cung bậc cảm xúc âm thanh</text>
  <text x="655" y="185" text-anchor="middle" font-size="8.5" fill="#94a3b8">Tự động tăng giảm theo diễn biến</text>
  <text x="655" y="205" text-anchor="middle" font-size="8.5" font-weight="700" fill="#22c55e">Export Video MP4 HD chuẩn</text>
</svg>`,

  9: `<svg viewBox="0 0 800 240" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="240" rx="12" fill="#0f172a"/>
  <text x="400" y="24" text-anchor="middle" font-size="13" font-weight="900" fill="#38bdf8" letter-spacing="1">QUẢN LÝ NGUỒN TÀI NGUYÊN ĐA PHƯƠNG TIỆN CHO PHIM HOẠT HÌNH</text>
  
  <!-- Folder Pipeline -->
  <g transform="translate(30, 50)">
    <!-- Node 1: Video Toontastic -->
    <rect x="0" y="0" width="160" height="150" rx="8" fill="#1e293b" stroke="#0ea5e9"/>
    <text x="80" y="25" text-anchor="middle" font-size="10.5" font-weight="700" fill="#38bdf8">1. VIDEO TOONTASTIC</text>
    <rect x="20" y="40" width="120" height="60" rx="4" fill="#0f172a"/>
    <polygon points="70,60 90,70 70,80" fill="#38bdf8"/>
    <text x="80" y="120" text-anchor="middle" font-size="9" fill="#e2e8f0">File thô cảnh 1, 2, 3</text>
    <text x="80" y="136" text-anchor="middle" font-size="8" fill="#94a3b8">Định dạng MP4 HD</text>

    <!-- Node 2: Graphics Inkscape -->
    <rect x="190" y="0" width="160" height="150" rx="8" fill="#1e293b" stroke="#10b981"/>
    <text x="270" y="25" text-anchor="middle" font-size="10.5" font-weight="700" fill="#34d399">2. ĐỒ HỌA INKSCAPE</text>
    <rect x="210" y="40" width="120" height="60" rx="4" fill="#0f172a"/>
    <circle cx="270" cy="70" r="18" fill="#f59e0b"/>
    <polygon points="270,55 275,68 288,68 277,76 281,88 270,80 259,88 263,76 252,68 265,68" fill="#ffffff"/>
    <text x="270" y="120" text-anchor="middle" font-size="9" fill="#e2e8f0">Đạo cụ, logo, chữ dẫn</text>
    <text x="270" y="136" text-anchor="middle" font-size="8" fill="#94a3b8">PNG nền trong suốt</text>

    <!-- Node 3: Audio Foley -->
    <rect x="380" y="0" width="160" height="150" rx="8" fill="#1e293b" stroke="#f59e0b"/>
    <text x="460" y="25" text-anchor="middle" font-size="10.5" font-weight="700" fill="#fbbf24">3. ÂM THANH FOLEY</text>
    <rect x="400" y="40" width="120" height="60" rx="4" fill="#0f172a"/>
    <path d="M440,65 L455,65 L465,55 L465,85 L455,75 L440,75 Z" fill="#fbbf24"/>
    <path d="M472,62 A10,10 0 0,1 472,78" stroke="#fbbf24" stroke-width="2" fill="none"/>
    <text x="460" y="120" text-anchor="middle" font-size="9" fill="#e2e8f0">Tiếng gió, bước chân</text>
    <text x="460" y="136" text-anchor="middle" font-size="8" fill="#94a3b8">File WAV / MP3 sạch</text>

    <!-- Node 4: Copyright Standard -->
    <rect x="570" y="0" width="170" height="150" rx="8" fill="#1e293b" stroke="#8b5cf6"/>
    <text x="655" y="25" text-anchor="middle" font-size="10.5" font-weight="700" fill="#c084fc">4. BẢN QUYỀN MỞ</text>
    <rect x="590" y="40" width="130" height="60" rx="4" fill="#0f172a"/>
    <circle cx="635" cy="70" r="14" fill="#8b5cf6"/>
    <text x="635" y="75" text-anchor="middle" font-size="11" font-weight="900" fill="#ffffff">CC</text>
    <circle cx="675" cy="70" r="14" fill="#8b5cf6"/>
    <text x="675" y="75" text-anchor="middle" font-size="9" font-weight="900" fill="#ffffff">BY</text>
    <text x="655" y="120" text-anchor="middle" font-size="9" fill="#e2e8f0">Creative Commons</text>
    <text x="655" y="136" text-anchor="middle" font-size="8" fill="#94a3b8">Ghi nhận tác giả Credit</text>
  </g>
  <text x="400" y="222" text-anchor="middle" font-size="9.5" fill="#38bdf8">Tổ chức thư mục dự án: 01_Scripts | 02_Footage | 03_Audio | 04_Graphics | 05_Exports</text>
</svg>`,

  10: `<svg viewBox="0 0 800 240" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="240" rx="12" fill="#0f172a"/>
  <text x="400" y="24" text-anchor="middle" font-size="13" font-weight="900" fill="#38bdf8" letter-spacing="1">BIÊN TẬP HẬU KỲ VIDEOPAD: TIMELINE ĐA KÊNH & AUDIO DUCKING</text>
  
  <!-- VideoPad Timeline interface mockup -->
  <rect x="25" y="45" width="750" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  
  <!-- Track headers -->
  <rect x="35" y="55" width="110" height="26" rx="4" fill="#0f172a"/>
  <text x="45" y="72" font-size="9" font-weight="700" fill="#38bdf8">Video Track 1</text>
  
  <rect x="35" y="85" width="110" height="26" rx="4" fill="#0f172a"/>
  <text x="45" y="102" font-size="9" font-weight="700" fill="#a855f7">Video Track 2 (Overlay)</text>
  
  <rect x="35" y="115" width="110" height="26" rx="4" fill="#0f172a"/>
  <text x="45" y="132" font-size="9" font-weight="700" fill="#34d399">Audio Track 1 (Voice)</text>
  
  <rect x="35" y="145" width="110" height="26" rx="4" fill="#0f172a"/>
  <text x="45" y="162" font-size="9" font-weight="700" fill="#fbbf24">Audio Track 2 (Music)</text>

  <!-- Track content area -->
  <!-- Video clips -->
  <rect x="155" y="55" width="180" height="26" rx="3" fill="#0284c7" stroke="#38bdf8"/>
  <text x="245" y="72" text-anchor="middle" font-size="9" fill="#ffffff">Phân cảnh 1 (Beginning)</text>
  
  <!-- Split / Transition point -->
  <rect x="338" y="55" width="16" height="26" fill="#f59e0b"/>
  
  <rect x="357" y="55" width="220" height="26" rx="3" fill="#0284c7" stroke="#38bdf8"/>
  <text x="467" y="72" text-anchor="middle" font-size="9" fill="#ffffff">Phân cảnh 2 (Middle - Xung đột)</text>
  
  <rect x="580" y="55" width="180" height="26" rx="3" fill="#0284c7" stroke="#38bdf8"/>
  <text x="670" y="72" text-anchor="middle" font-size="9" fill="#ffffff">Phân cảnh 3 (Climax)</text>

  <!-- Video Track 2: Title Overlay -->
  <rect x="155" y="85" width="100" height="26" rx="3" fill="#7c3aed"/>
  <text x="205" y="102" text-anchor="middle" font-size="8.5" fill="#ffffff">Tiêu đề phim</text>
  <rect x="660" y="85" width="100" height="26" rx="3" fill="#7c3aed"/>
  <text x="710" y="102" text-anchor="middle" font-size="8.5" fill="#ffffff">Credits cuộn</text>

  <!-- Audio 1: Voice actors -->
  <rect x="170" y="115" width="140" height="26" rx="3" fill="#059669"/>
  <text x="240" y="132" text-anchor="middle" font-size="8.5" fill="#ffffff">Lời thoại Minh (12s)</text>
  <rect x="380" y="115" width="160" height="26" rx="3" fill="#059669"/>
  <text x="460" y="132" text-anchor="middle" font-size="8.5" fill="#ffffff">Đối thoại kịch tính (18s)</text>

  <!-- Audio 2: Music with Ducking curve -->
  <rect x="155" y="145" width="605" height="26" rx="3" fill="#b45309"/>
  <!-- Ducking envelope curve -->
  <path d="M155,152 L170,152 L175,165 L310,165 L315,152 L380,152 L385,165 L540,165 L545,152 L760,152" stroke="#ffffff" stroke-width="2" fill="none"/>
  <text x="610" y="162" text-anchor="end" font-size="8" font-weight="700" fill="#fef08a">Audio Ducking: Nhạc tự giảm 20% khi có tiếng nói</text>

  <!-- Bottom status -->
  <text x="400" y="202" text-anchor="middle" font-size="9.5" font-weight="700" fill="#38bdf8">Xuất video: Export Video > MP4 1080p Full HD (Chuẩn H.264)</text>
</svg>`,

  11: `<svg viewBox="0 0 800 240" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="240" rx="12" fill="#0f172a"/>
  <text x="400" y="24" text-anchor="middle" font-size="13" font-weight="900" fill="#38bdf8" letter-spacing="1">GIMP: NGUYÊN LÝ LỚP ẢNH (LAYER) VÀ MẶT NẠ LỚP (LAYER MASK)</text>
  
  <!-- Left: Layer Stack Concept -->
  <rect x="25" y="45" width="360" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="205" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">1. NGUYÊN LÝ XẾP CHỒNG LỚP (LAYERS)</text>
  
  <!-- 3D Layer slabs -->
  <polygon points="120,115 280,115 240,135 80,135" fill="#38bdf8" opacity="0.8" stroke="#ffffff"/>
  <text x="180" y="128" text-anchor="middle" font-size="8.5" font-weight="700" fill="#0f172a">Layer 3: Chân dung nhân vật (Đã tách nền)</text>

  <polygon points="120,135 280,135 240,155 80,155" fill="#f59e0b" opacity="0.8" stroke="#ffffff"/>
  <text x="180" y="148" text-anchor="middle" font-size="8.5" font-weight="700" fill="#0f172a">Layer 2: Dải ánh sáng vàng (Screen 60%)</text>

  <polygon points="120,155 280,155 240,175 80,175" fill="#64748b" opacity="0.8" stroke="#ffffff"/>
  <text x="180" y="168" text-anchor="middle" font-size="8.5" font-weight="700" fill="#ffffff">Layer 1: Ảnh nền phong cảnh (Background)</text>

  <text x="205" y="200" text-anchor="middle" font-size="9" fill="#94a3b8">Lớp trên che lớp dưới | Đổi Blend Mode & Opacity</text>

  <!-- Right: Layer Mask Mechanism -->
  <rect x="415" y="45" width="360" height="175" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <text x="595" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">2. MẶT NẠ LỚP (LAYER MASK) PHI PHÁ HỦY</text>
  
  <!-- Photo thumbnail -->
  <rect x="440" y="85" width="70" height="65" rx="4" fill="#0284c7" stroke="#ffffff"/>
  <circle cx="475" cy="117" r="18" fill="#fbcfe8"/>
  <text x="475" y="165" text-anchor="middle" font-size="8.5" fill="#e2e8f0">Ảnh gốc</text>

  <!-- Link icon -->
  <text x="525" y="122" font-size="16" fill="#94a3b8">⇄</text>

  <!-- Mask thumbnail -->
  <rect x="545" y="85" width="70" height="65" rx="4" fill="#000000" stroke="#ffffff"/>
  <circle cx="580" cy="117" r="18" fill="#ffffff"/>
  <text x="580" y="165" text-anchor="middle" font-size="8.5" fill="#e2e8f0">Layer Mask</text>

  <!-- Explanation list -->
  <rect x="635" y="82" width="125" height="70" rx="4" fill="#0f172a" stroke="#334155"/>
  <text x="645" y="98" font-size="8.5" font-weight="700" fill="#ffffff">■ Màu Trắng: HIỆN</text>
  <text x="645" y="115" font-size="8.5" font-weight="700" fill="#f87171">■ Màu Đen: CHE GIẤU</text>
  <text x="645" y="132" font-size="8.5" fill="#94a3b8">■ Màu Xám: Bán trong</text>
  <text x="645" y="146" font-size="7.5" fill="#38bdf8">Tô cọ lấy lại ảnh dễ dàng</text>

  <text x="595" y="200" text-anchor="middle" font-size="9" font-weight="700" fill="#4ade80">Không làm mất điểm ảnh gốc như công cụ Tẩy (Eraser)</text>
</svg>`,

  12: `<svg viewBox="0 0 800 240" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="240" rx="12" fill="#0f172a"/>
  <text x="400" y="24" text-anchor="middle" font-size="13" font-weight="900" fill="#38bdf8" letter-spacing="1">NGUYÊN LÝ ẢNH ĐỘNG GIF VÀ QUY ƯỚC LAYER THÀNH KHUNG HÌNH (FRAME)</text>
  
  <!-- Left: Timeline of frames -->
  <g transform="translate(30, 50)">
    <!-- Frame 1 -->
    <rect x="0" y="0" width="105" height="120" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="52" y="20" text-anchor="middle" font-size="9" font-weight="700" fill="#38bdf8">Frame 1 (Đáy)</text>
    <rect x="15" y="30" width="75" height="60" rx="3" fill="#0f172a"/>
    <circle cx="52" cy="75" r="10" fill="#ef4444"/>
    <text x="52" y="108" text-anchor="middle" font-size="8" fill="#94a3b8">Đèn Đỏ bật</text>

    <!-- Arrow -->
    <text x="117" y="65" font-size="16" fill="#38bdf8">→</text>

    <!-- Frame 2 -->
    <rect x="135" y="0" width="105" height="120" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="187" y="20" text-anchor="middle" font-size="9" font-weight="700" fill="#38bdf8">Frame 2</text>
    <rect x="150" y="30" width="75" height="60" rx="3" fill="#0f172a"/>
    <circle cx="187" cy="60" r="10" fill="#f59e0b"/>
    <text x="187" y="108" text-anchor="middle" font-size="8" fill="#94a3b8">Đèn Vàng bật</text>

    <!-- Arrow -->
    <text x="252" y="65" font-size="16" fill="#38bdf8">→</text>

    <!-- Frame 3 -->
    <rect x="270" y="0" width="105" height="120" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="322" y="20" text-anchor="middle" font-size="9" font-weight="700" fill="#38bdf8">Frame 3 (Đỉnh)</text>
    <rect x="285" y="30" width="75" height="60" rx="3" fill="#0f172a"/>
    <circle cx="322" cy="45" r="10" fill="#22c55e"/>
    <text x="322" y="108" text-anchor="middle" font-size="8" fill="#94a3b8">Đèn Xanh bật</text>

    <!-- Arrow Loop -->
    <path d="M375,60 C410,60 410,135 187,135 C10,135 10,60 0,60" stroke="#fbbf24" stroke-width="2" stroke-dasharray="3,3" fill="none"/>
    <polygon points="0,60 8,55 8,65" fill="#fbbf24"/>
  </g>

  <!-- Right: GIMP Export GIF dialog -->
  <rect x="460" y="45" width="315" height="175" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="617" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">HỘP THOẠI EXPORT IMAGE AS GIF</text>
  
  <rect x="480" y="82" width="275" height="26" rx="4" fill="#0f172a" stroke="#22c55e"/>
  <rect x="490" y="89" width="12" height="12" rx="2" fill="#22c55e"/>
  <text x="496" y="99" text-anchor="middle" font-size="10" font-weight="900" fill="#0f172a">✓</text>
  <text x="512" y="99" font-size="9.5" font-weight="700" fill="#4ade80">As animation (Bắt buộc chọn để tạo động)</text>

  <rect x="480" y="114" width="275" height="26" rx="4" fill="#0f172a" stroke="#22c55e"/>
  <rect x="490" y="121" width="12" height="12" rx="2" fill="#22c55e"/>
  <text x="496" y="131" text-anchor="middle" font-size="10" font-weight="900" fill="#0f172a">✓</text>
  <text x="512" y="131" font-size="9.5" font-weight="700" fill="#4ade80">Loop forever (Lặp vô tận không ngừng)</text>

  <rect x="480" y="146" width="275" height="26" rx="4" fill="#0f172a" stroke="#334155"/>
  <text x="490" y="163" font-size="9" fill="#e2e8f0">Delay between frames: 200 milliseconds</text>

  <text x="617" y="202" text-anchor="middle" font-size="9" fill="#fbbf24">Xem trước: Filters > Animation > Playback</text>
</svg>`,

  13: `<svg viewBox="0 0 800 240" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="240" rx="12" fill="#0f172a"/>
  <text x="400" y="24" text-anchor="middle" font-size="13" font-weight="900" fill="#38bdf8" letter-spacing="1">CÚ PHÁP ĐẶT TÊN LAYER: THỜI GIAN TRỄ VÀ CHẾ ĐỘ COMBINE / REPLACE</text>
  
  <!-- Left: Syntax formula -->
  <rect x="25" y="45" width="360" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="205" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">1. CÚ PHÁP ĐẶT TÊN LỚP (LAYER NAME)</text>
  
  <rect x="45" y="85" width="320" height="40" rx="6" fill="#0f172a" stroke="#0ea5e9"/>
  <text x="205" y="110" text-anchor="middle" font-size="12" font-family="monospace" font-weight="700" fill="#38bdf8">Tên_Lớp (500ms) (replace)</text>

  <g transform="translate(45, 135)">
    <text x="0" y="15" font-size="9" font-weight="700" fill="#fbbf24">• (500ms):</text>
    <text x="60" y="15" font-size="8.5" fill="#e2e8f0">Thời gian dừng khung hình (1000ms = 1 giây)</text>

    <text x="0" y="35" font-size="9" font-weight="700" fill="#4ade80">• (replace):</text>
    <text x="65" y="35" font-size="8.5" fill="#e2e8f0">Xóa sạch khung hình cũ trước khi vẽ mới</text>

    <text x="0" y="55" font-size="9" font-weight="700" fill="#f43f5e">• (combine):</text>
    <text x="65" y="55" font-size="8.5" fill="#e2e8f0">Vẽ đè lên khung hình cũ (tích lũy nền)</text>
  </g>

  <!-- Right: Text Animation Concept -->
  <rect x="415" y="45" width="360" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="595" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">2. TẠO CHỮ ĐỘNG (TEXT ANIMATION)</text>
  
  <rect x="435" y="85" width="320" height="24" rx="4" fill="#0f172a" stroke="#334155"/>
  <text x="445" y="101" font-size="9" fill="#94a3b8">Frame 1 (150ms):</text>
  <text x="560" y="101" font-size="10" font-weight="700" fill="#38bdf8">CHÀO MỪNG</text>

  <rect x="435" y="115" width="320" height="24" rx="4" fill="#0f172a" stroke="#334155"/>
  <text x="445" y="131" font-size="9" fill="#94a3b8">Frame 2 (150ms):</text>
  <text x="560" y="131" font-size="10" font-weight="700" fill="#38bdf8">CHÀO MỪNG NĂM HỌC MỚI</text>

  <rect x="435" y="145" width="320" height="24" rx="4" fill="#0f172a" stroke="#f59e0b"/>
  <text x="445" y="161" font-size="9" fill="#fbbf24">Frame 3 (1500ms):</text>
  <text x="560" y="161" font-size="10" font-weight="900" fill="#f59e0b">2026 - 2027 THẮNG LỢI !</text>

  <text x="595" y="200" text-anchor="middle" font-size="9" font-weight="700" fill="#4ade80">Filters > Animation > Optimize (for GIF) giảm 50% dung lượng</text>
</svg>`,

  14: `<svg viewBox="0 0 800 240" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="240" rx="12" fill="#0f172a"/>
  <text x="400" y="24" text-anchor="middle" font-size="13" font-weight="900" fill="#38bdf8" letter-spacing="1">BỘ HIỆU ỨNG ĐỒNG BỘ: HÒA TAN (BLEND) VÀ MƯA RƠI (LINEAR MOTION BLUR)</text>
  
  <!-- Left: Blend / Morphing -->
  <rect x="25" y="45" width="360" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="205" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">1. BỘ LỌC BIẾN HÌNH BLEND</text>
  
  <circle cx="90" cy="115" r="24" fill="#38bdf8"/>
  <text x="90" y="155" text-anchor="middle" font-size="8.5" fill="#e2e8f0">Lớp A (Nụ sen)</text>

  <path d="M130,115 L160,115" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>
  <polygon points="160,115 152,111 152,119" fill="#f59e0b"/>

  <rect x="175" y="95" width="60" height="40" rx="4" fill="#0f172a" stroke="#f59e0b"/>
  <text x="205" y="112" text-anchor="middle" font-size="8" font-weight="700" fill="#f59e0b">Blend Filter</text>
  <text x="205" y="125" text-anchor="middle" font-size="7" fill="#94a3b8">Sinh 5 frame</text>

  <path d="M250,115 L280,115" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>
  <polygon points="280,115 272,111 272,119" fill="#f59e0b"/>

  <ellipse cx="320" cy="115" rx="30" ry="22" fill="#f43f5e"/>
  <text x="320" y="155" text-anchor="middle" font-size="8.5" fill="#e2e8f0">Lớp B (Sen nở)</text>

  <text x="205" y="195" text-anchor="middle" font-size="9" fill="#4ade80">Tự động nội suy dải màu và độ mờ đục</text>

  <!-- Right: Linear Motion Blur Rain -->
  <rect x="415" y="45" width="360" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="595" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">2. HIỆU ỨNG MƯA RƠI CHUYỂN ĐỘNG</text>
  
  <rect x="435" y="82" width="160" height="95" rx="4" fill="#082f49" stroke="#0ea5e9"/>
  <!-- Rain streaks -->
  <line x1="455" y1="90" x2="445" y2="115" stroke="#ffffff" stroke-width="1.5" opacity="0.8"/>
  <line x1="495" y1="95" x2="485" y2="120" stroke="#ffffff" stroke-width="1.5" opacity="0.8"/>
  <line x1="535" y1="88" x2="525" y2="113" stroke="#ffffff" stroke-width="1.5" opacity="0.8"/>
  <line x1="475" y1="125" x2="465" y2="150" stroke="#ffffff" stroke-width="1.5" opacity="0.8"/>
  <line x1="515" y1="130" x2="505" y2="155" stroke="#ffffff" stroke-width="1.5" opacity="0.8"/>
  <line x1="555" y1="120" x2="545" y2="145" stroke="#ffffff" stroke-width="1.5" opacity="0.8"/>

  <g transform="translate(610, 85)">
    <text x="0" y="15" font-size="8.5" font-weight="700" fill="#38bdf8">1. RGB Noise</text>
    <text x="0" y="28" font-size="7.5" fill="#94a3b8">Tạo hạt nhiễu trắng</text>

    <text x="0" y="50" font-size="8.5" font-weight="700" fill="#f59e0b">2. Motion Blur</text>
    <text x="0" y="63" font-size="7.5" fill="#94a3b8">Góc 70°, dài 25px</text>

    <text x="0" y="85" font-size="8.5" font-weight="700" fill="#22c55e">3. Blend Mode: Screen</text>
    <text x="0" y="98" font-size="7.5" fill="#94a3b8">Lọc bỏ nền đen hoàn toàn</text>
  </g>

  <text x="595" y="200" text-anchor="middle" font-size="9" fill="#fbbf24">3 Frame lệch pha gán (80ms)(replace) tạo mưa liên hồi</text>
</svg>`,

  15: `<svg viewBox="0 0 800 240" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="240" rx="12" fill="#0f172a"/>
  <text x="400" y="24" text-anchor="middle" font-size="13" font-weight="900" fill="#38bdf8" letter-spacing="1">DỰ ÁN BANNER ĐỘNG HOÀN CHỈNH VÀ TIÊU CHUẨN XUẤT BẢN WEB</text>
  
  <!-- Banner Preview Mockup (728x90 proportion) -->
  <rect x="25" y="45" width="750" height="95" rx="8" fill="url(#bannerGrad)" stroke="#38bdf8" stroke-width="2"/>
  <defs>
    <linearGradient id="bannerGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#1e1b4b"/>
      <stop offset="50%" stop-color="#312e81"/>
      <stop offset="100%" stop-color="#4338ca"/>
    </linearGradient>
  </defs>

  <!-- Left: Book icon vector -->
  <g transform="translate(45, 60)">
    <polygon points="25,10 5,20 5,55 25,45" fill="#67e8f9"/>
    <polygon points="25,10 45,20 45,55 25,45" fill="#38bdf8"/>
    <circle cx="25" cy="8" r="4" fill="#fbbf24"/>
  </g>

  <!-- Text Header -->
  <text x="115" y="82" font-size="14" font-weight="900" fill="#ffffff" letter-spacing="1">NGÀY HỘI VĂN HÓA ĐỌC SÁCH 2026</text>
  <text x="115" y="105" font-size="10" fill="#a5b4fc">Khơi nguồn tri thức – Chắp cánh tương lai • Thư viện trường</text>

  <!-- CTA Button Pulse -->
  <rect x="600" y="65" width="150" height="40" rx="20" fill="#f59e0b" stroke="#fef08a" stroke-width="2"/>
  <text x="675" y="90" text-anchor="middle" font-size="11" font-weight="900" fill="#0f172a">ĐĂNG KÝ NGAY ➔</text>

  <!-- Bottom: Quality & Optimization Checklist -->
  <g transform="translate(25, 155)">
    <rect x="0" y="0" width="170" height="65" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="85" y="24" text-anchor="middle" font-size="9.5" font-weight="700" fill="#38bdf8">KÍCH THƯỚC CHUẨN</text>
    <text x="85" y="44" text-anchor="middle" font-size="11" font-weight="900" fill="#ffffff">728 x 90 px</text>
    <text x="85" y="58" text-anchor="middle" font-size="8" fill="#94a3b8">Tiêu chuẩn Leaderboard Web</text>

    <rect x="190" y="0" width="170" height="65" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="275" y="24" text-anchor="middle" font-size="9.5" font-weight="700" fill="#22c55e">DUNG LƯỢNG TỐI ƯU</text>
    <text x="275" y="44" text-anchor="middle" font-size="11" font-weight="900" fill="#4ade80">&lt; 1.5 MB</text>
    <text x="275" y="58" text-anchor="middle" font-size="8" fill="#94a3b8">Tải trang cực nhanh, không giật</text>

    <rect x="380" y="0" width="170" height="65" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="465" y="24" text-anchor="middle" font-size="9.5" font-weight="700" fill="#f59e0b">BẢNG MÀU INDEXED</text>
    <text x="465" y="44" text-anchor="middle" font-size="11" font-weight="900" fill="#fcd34d">128 - 256 Màu</text>
    <text x="465" y="58" text-anchor="middle" font-size="8" fill="#94a3b8">Dithering khử răng cưa</text>

    <rect x="570" y="0" width="180" height="65" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="660" y="24" text-anchor="middle" font-size="9.5" font-weight="700" fill="#ec4899">VÒNG LẶP & ĐỘ TRỄ</text>
    <text x="660" y="44" text-anchor="middle" font-size="11" font-weight="900" fill="#f472b6">Loop Forever</text>
    <text x="660" y="58" text-anchor="middle" font-size="8" fill="#94a3b8">Dừng đọc CTA: 1500ms</text>
  </g>
</svg>`
};

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/ict11_svgs.js', 'module.exports = ' + JSON.stringify(svgs, null, 2) + ';\n', 'utf8');
console.log('Saved ict11_svgs.js successfully');
