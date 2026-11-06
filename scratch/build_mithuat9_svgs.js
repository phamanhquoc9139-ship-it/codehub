const fs = require('fs');

const svgs = {};

// 1. Bài 1: Vẻ đẹp cuộc sống trong tác phẩm mĩ thuật
svgs['bai-1'] = `
<svg viewBox="0 0 800 320" class="w-full h-auto max-h-[340px] select-none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="780" height="300" rx="16" fill="#fdf2f8" class="dark:fill-slate-900" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="400" y="38" text-anchor="middle" font-size="14" font-weight="800" fill="#be123c" class="dark:fill-rose-400">
    HỆ THỐNG YẾU TỐ TẠO HÌNH BIỂU ĐẠT ĐỀ TÀI CUỘC SỐNG
  </text>

  <!-- 4 Pillars of Visual Art in Life -->
  <!-- Col 1: Bố cục -->
  <g transform="translate(30, 55)">
    <rect x="0" y="0" width="168" height="235" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#f43f5e" stroke-width="1.2"/>
    <rect x="0" y="0" width="168" height="30" rx="12" fill="#e11d48"/>
    <text x="84" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">1. BỐ CỤC THỊ GIÁC</text>
    <circle cx="84" cy="65" r="24" fill="#ffe4e6" class="dark:fill-rose-950/50"/>
    <text x="84" y="72" text-anchor="middle" font-size="18">📐</text>
    <text x="84" y="108" text-anchor="middle" font-size="11" font-weight="bold" fill="#be123c" class="dark:fill-rose-300">Tỉ lệ Vàng & Điểm nhấn</text>
    <text x="12" y="132" font-size="10" fill="#475569" class="dark:fill-slate-300">• Mảng chính: Trọng tâm đề tài</text>
    <text x="12" y="152" font-size="10" fill="#475569" class="dark:fill-slate-300">• Mảng phụ: Hỗ trợ dẫn dắt</text>
    <text x="12" y="172" font-size="10" fill="#475569" class="dark:fill-slate-300">• Nhịp điệu: Vận động / Tĩnh tại</text>
    <text x="12" y="192" font-size="10" font-weight="bold" fill="#e11d48" class="dark:fill-rose-400">• Cân bằng thị giác tổng thể</text>
    <rect x="15" y="208" width="138" height="18" rx="6" fill="#fecdd3" class="dark:fill-rose-900/60"/>
    <text x="84" y="221" text-anchor="middle" font-size="9" font-weight="bold" fill="#9f1239" class="dark:fill-rose-200">Góc nhìn đa chiều</text>
  </g>

  <!-- Col 2: Đường nét & Khối -->
  <g transform="translate(218, 55)">
    <rect x="0" y="0" width="168" height="235" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#f43f5e" stroke-width="1.2"/>
    <rect x="0" y="0" width="168" height="30" rx="12" fill="#e11d48"/>
    <text x="84" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">2. NÉT &amp; HÌNH THỂ</text>
    <circle cx="84" cy="65" r="24" fill="#ffe4e6" class="dark:fill-rose-950/50"/>
    <text x="84" y="72" text-anchor="middle" font-size="18">✏️</text>
    <text x="84" y="108" text-anchor="middle" font-size="11" font-weight="bold" fill="#be123c" class="dark:fill-rose-300">Biểu cảm Đường nét</text>
    <text x="12" y="132" font-size="10" fill="#475569" class="dark:fill-slate-300">• Nét khoẻ: Dáng dấp lao động</text>
    <text x="12" y="152" font-size="10" fill="#475569" class="dark:fill-slate-300">• Nét mềm: Thiên nhiên dịu êm</text>
    <text x="12" y="172" font-size="10" fill="#475569" class="dark:fill-slate-300">• Nét kỉ hà: Đô thị hiện đại</text>
    <text x="12" y="192" font-size="10" font-weight="bold" fill="#e11d48" class="dark:fill-rose-400">• Khái quát hoá hình khối</text>
    <rect x="15" y="208" width="138" height="18" rx="6" fill="#fecdd3" class="dark:fill-rose-900/60"/>
    <text x="84" y="221" text-anchor="middle" font-size="9" font-weight="bold" fill="#9f1239" class="dark:fill-rose-200">Gợi cảm xúc nhân vật</text>
  </g>

  <!-- Col 3: Hoà sắc & Đậm nhạt -->
  <g transform="translate(406, 55)">
    <rect x="0" y="0" width="168" height="235" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#f43f5e" stroke-width="1.2"/>
    <rect x="0" y="0" width="168" height="30" rx="12" fill="#e11d48"/>
    <text x="84" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">3. HOÀ SẮC BIỂU CẢM</text>
    <circle cx="84" cy="65" r="24" fill="#ffe4e6" class="dark:fill-rose-950/50"/>
    <text x="84" y="72" text-anchor="middle" font-size="18">🎨</text>
    <text x="84" y="108" text-anchor="middle" font-size="11" font-weight="bold" fill="#be123c" class="dark:fill-rose-300">Tương quan Màu sắc</text>
    <text x="12" y="132" font-size="10" fill="#475569" class="dark:fill-slate-300">• Gam ấm: Rộn ràng, sum họp</text>
    <text x="12" y="152" font-size="10" fill="#475569" class="dark:fill-slate-300">• Gam lạnh: Thanh bình, sâu lắng</text>
    <text x="12" y="172" font-size="10" fill="#475569" class="dark:fill-slate-300">• Sắc độ: 5 cấp độ đậm nhạt</text>
    <text x="12" y="192" font-size="10" font-weight="bold" fill="#e11d48" class="dark:fill-rose-400">• Ánh sáng tạo chiều sâu</text>
    <rect x="15" y="208" width="138" height="18" rx="6" fill="#fecdd3" class="dark:fill-rose-900/60"/>
    <text x="84" y="221" text-anchor="middle" font-size="9" font-weight="bold" fill="#9f1239" class="dark:fill-rose-200">Không khí không gian</text>
  </g>

  <!-- Col 4: Chất liệu hội hoạ -->
  <g transform="translate(594, 55)">
    <rect x="0" y="0" width="176" height="235" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#f43f5e" stroke-width="1.2"/>
    <rect x="0" y="0" width="176" height="30" rx="12" fill="#e11d48"/>
    <text x="88" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">4. CHẤT LIỆU TẠO HÌNH</text>
    <circle cx="88" cy="65" r="24" fill="#ffe4e6" class="dark:fill-rose-950/50"/>
    <text x="88" y="72" text-anchor="middle" font-size="18">🖌️</text>
    <text x="88" y="108" text-anchor="middle" font-size="11" font-weight="bold" fill="#be123c" class="dark:fill-rose-300">Đặc tính Bề mặt</text>
    <text x="12" y="132" font-size="10" fill="#475569" class="dark:fill-slate-300">• Sơn mài: Sâu thẳm, lộng lẫy</text>
    <text x="12" y="152" font-size="10" fill="#475569" class="dark:fill-slate-300">• Tranh lụa: Mềm mại, trong trẻo</text>
    <text x="12" y="172" font-size="10" fill="#475569" class="dark:fill-slate-300">• Khắc gỗ: Mộc mạc, khoẻ khoắn</text>
    <text x="12" y="192" font-size="10" font-weight="bold" fill="#e11d48" class="dark:fill-rose-400">• Sơn dầu &amp; Acrylic: Đậm đặc</text>
    <rect x="15" y="208" width="146" height="18" rx="6" fill="#fecdd3" class="dark:fill-rose-900/60"/>
    <text x="88" y="221" text-anchor="middle" font-size="9" font-weight="bold" fill="#9f1239" class="dark:fill-rose-200">Bản sắc thẩm mĩ riêng</text>
  </g>
</svg>
`;

// 2. Bài 2: Thiết kế phụ kiện thời trang
svgs['bai-2'] = `
<svg viewBox="0 0 800 320" class="w-full h-auto max-h-[340px] select-none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="780" height="300" rx="16" fill="#fdf2f8" class="dark:fill-slate-900" stroke="#db2777" stroke-width="1.5"/>
  <text x="400" y="38" text-anchor="middle" font-size="14" font-weight="800" fill="#9d174d" class="dark:fill-pink-400">
    BẢN VẼ KĨ THUẬT &amp; RẬP MẪU PHỤ KIỆN THỜI TRANG (TÚI TOTE CANVAS)
  </text>

  <!-- Left: Bản vẽ rập phẳng (Pattern 2D) -->
  <g transform="translate(40, 60)">
    <rect x="0" y="0" width="330" height="230" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#db2777" stroke-width="1.2"/>
    <text x="165" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#db2777" class="dark:fill-pink-300">BẢN RẬP CẮT PHÔI 2D (TỈ LỆ 1:10)</text>
    
    <!-- Bag body 2D flat layout -->
    <rect x="40" y="45" width="110" height="140" fill="#fce7f3" stroke="#be185d" stroke-dasharray="4,3" stroke-width="1.5"/>
    <rect x="160" y="45" width="110" height="140" fill="#fce7f3" stroke="#be185d" stroke-dasharray="4,3" stroke-width="1.5"/>
    <text x="95" y="120" text-anchor="middle" font-size="10" font-weight="bold" fill="#9d174d">Thân trước (35x40cm)</text>
    <text x="215" y="120" text-anchor="middle" font-size="10" font-weight="bold" fill="#9d174d">Thân sau (35x40cm)</text>
    
    <!-- Quai đeo -->
    <rect x="290" y="45" width="22" height="140" rx="4" fill="#fbcfe8" stroke="#be185d" stroke-width="1.2"/>
    <text x="301" y="120" text-anchor="middle" font-size="9" font-weight="bold" fill="#831843" transform="rotate(-90 301 120)">Quai đeo (65x3cm)</text>
    
    <text x="165" y="208" text-anchor="middle" font-size="9.5" fill="#64748b" class="dark:fill-slate-400">Đường nét đứt: Đường gấp mí may | Đường nét liền: Mép cắt phôi</text>
  </g>

  <!-- Right: Phối cảnh 3D & Công năng tiện ích -->
  <g transform="translate(400, 60)">
    <rect x="0" y="0" width="360" height="230" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#db2777" stroke-width="1.2"/>
    <text x="180" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#db2777" class="dark:fill-pink-300">PHỐI CẢNH 3D &amp; CÔNG THÁI HỌC SỬ DỤNG</text>

    <!-- 3D Bag Representation -->
    <path d="M 60 70 L 140 70 L 155 185 L 45 185 Z" fill="#fdf2f8" stroke="#be185d" stroke-width="2"/>
    <path d="M 140 70 L 175 60 L 190 170 L 155 185 Z" fill="#fce7f3" stroke="#be185d" stroke-width="2"/>
    <path d="M 75 70 C 75 35, 125 35, 125 70" fill="none" stroke="#be185d" stroke-width="3"/>
    
    <!-- Graphic Print on Bag -->
    <circle cx="100" cy="130" r="22" fill="#fb7185"/>
    <text x="100" y="135" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">ECO 9</text>

    <!-- Feature callouts -->
    <line x1="175" y1="100" x2="220" y2="85" stroke="#db2777" stroke-width="1.2"/>
    <circle cx="220" cy="85" r="3" fill="#db2777"/>
    <text x="228" y="89" font-size="10" font-weight="bold" fill="#0f172a" class="dark:fill-white">Độ mở đáy: 10 cm (chứa sách A4)</text>

    <line x1="100" y1="40" x2="220" y2="50" stroke="#db2777" stroke-width="1.2"/>
    <circle cx="220" cy="50" r="3" fill="#db2777"/>
    <text x="228" y="54" font-size="10" font-weight="bold" fill="#0f172a" class="dark:fill-white">Quai trợ lực vai êm ái</text>

    <line x1="140" y1="150" x2="220" y2="125" stroke="#db2777" stroke-width="1.2"/>
    <circle cx="220" cy="125" r="3" fill="#db2777"/>
    <text x="228" y="129" font-size="10" font-weight="bold" fill="#0f172a" class="dark:fill-white">Khoá nam châm ẩn an toàn</text>

    <line x1="120" y1="185" x2="220" y2="165" stroke="#db2777" stroke-width="1.2"/>
    <circle cx="220" cy="165" r="3" fill="#db2777"/>
    <text x="228" y="169" font-size="10" font-weight="bold" fill="#0f172a" class="dark:fill-white">Vải Canvas tái chế chống ẩm</text>

    <rect x="225" y="185" width="125" height="28" rx="6" fill="#fdf2f8" stroke="#f472b6" stroke-width="1"/>
    <text x="287" y="203" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#be185d">Thẩm mĩ + Tiện ích</text>
  </g>
</svg>
`;

// 3. Bài 3: Nghệ thuật đương đại thế giới
svgs['bai-3'] = `
<svg viewBox="0 0 800 320" class="w-full h-auto max-h-[340px] select-none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="780" height="300" rx="16" fill="#faf5ff" class="dark:fill-slate-900" stroke="#9333ea" stroke-width="1.5"/>
  <text x="400" y="38" text-anchor="middle" font-size="14" font-weight="800" fill="#6b21a8" class="dark:fill-purple-400">
    4 TRÀO LƯU NGHỆ THUẬT ĐƯƠNG ĐẠI THẾ GIỚI TIÊU BIỂU
  </text>

  <!-- 4 Contemporary Movements -->
  <!-- 1. Pop Art -->
  <g transform="translate(30, 55)">
    <rect x="0" y="0" width="168" height="235" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#9333ea" stroke-width="1.2"/>
    <rect x="0" y="0" width="168" height="30" rx="12" fill="#7e22ce"/>
    <text x="84" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">POP ART</text>
    
    <!-- 4-grid Pop Art visual -->
    <rect x="24" y="42" width="55" height="55" fill="#f43f5e"/>
    <text x="51" y="75" text-anchor="middle" font-size="20">🥫</text>
    <rect x="89" y="42" width="55" height="55" fill="#3b82f6"/>
    <text x="116" y="75" text-anchor="middle" font-size="20">🥫</text>
    <rect x="24" y="102" width="55" height="55" fill="#eab308"/>
    <text x="51" y="135" text-anchor="middle" font-size="20">🥫</text>
    <rect x="89" y="102" width="55" height="55" fill="#10b981"/>
    <text x="116" y="135" text-anchor="middle" font-size="20">🥫</text>

    <text x="84" y="172" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#6b21a8" class="dark:fill-purple-300">Văn hoá Đại chúng</text>
    <text x="12" y="192" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Lặp lại hình ảnh công nghiệp</text>
    <text x="12" y="208" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Màu tương phản rực rỡ</text>
    <text x="12" y="224" font-size="9.5" font-weight="bold" fill="#9333ea">• Andy Warhol, Lichtenstein</text>
  </g>

  <!-- 2. Sắp đặt (Installation) -->
  <g transform="translate(218, 55)">
    <rect x="0" y="0" width="168" height="235" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#9333ea" stroke-width="1.2"/>
    <rect x="0" y="0" width="168" height="30" rx="12" fill="#7e22ce"/>
    <text x="84" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">SẮP ĐẶT (INSTALLATION)</text>
    
    <!-- 3D Room Visual -->
    <path d="M 25 50 L 143 50 L 143 145 L 25 145 Z" fill="#f3e8ff" stroke="#9333ea" stroke-width="1"/>
    <line x1="25" y1="50" x2="60" y2="80" stroke="#a855f7"/>
    <line x1="143" y1="50" x2="108" y2="80" stroke="#a855f7"/>
    <rect x="60" y="80" width="48" height="40" fill="#e9d5ff" stroke="#7e22ce"/>
    <circle cx="84" cy="98" r="10" fill="#f59e0b"/>
    <text x="84" y="132" text-anchor="middle" font-size="10">💡 🔊 🪑</text>

    <text x="84" y="172" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#6b21a8" class="dark:fill-purple-300">Không gian 3 Chiều</text>
    <text x="12" y="192" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Chiếm lĩnh căn phòng / tự nhiên</text>
    <text x="12" y="208" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Người xem bước vào tương tác</text>
    <text x="12" y="224" font-size="9.5" font-weight="bold" fill="#9333ea">• Trải nghiệm đa giác quan</text>
  </g>

  <!-- 3. Nghệ thuật Ý niệm (Conceptual) -->
  <g transform="translate(406, 55)">
    <rect x="0" y="0" width="168" height="235" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#9333ea" stroke-width="1.2"/>
    <rect x="0" y="0" width="168" height="30" rx="12" fill="#7e22ce"/>
    <text x="84" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">Ý NIỆM (CONCEPTUAL)</text>
    
    <!-- Conceptual Visual: Chair + Photo + Dictionary definition -->
    <circle cx="84" cy="95" r="42" fill="#f3e8ff" stroke="#c084fc" stroke-dasharray="3,3"/>
    <text x="84" y="85" text-anchor="middle" font-size="24">💡</text>
    <text x="84" y="115" text-anchor="middle" font-size="10" font-weight="bold" fill="#7e22ce">IDEA &gt; OBJECT</text>

    <text x="84" y="172" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#6b21a8" class="dark:fill-purple-300">Tư tưởng là Cốt lõi</text>
    <text x="12" y="192" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Khái niệm quý hơn hình thức</text>
    <text x="12" y="208" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Đặt câu hỏi phản biện xã hội</text>
    <text x="12" y="224" font-size="9.5" font-weight="bold" fill="#9333ea">• Joseph Kosuth (Một &amp; 3 chiếc ghế)</text>
  </g>

  <!-- 4. Trình diễn (Performance) -->
  <g transform="translate(594, 55)">
    <rect x="0" y="0" width="176" height="235" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#9333ea" stroke-width="1.2"/>
    <rect x="0" y="0" width="176" height="30" rx="12" fill="#7e22ce"/>
    <text x="88" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">TRÌNH DIỄN (PERFORMANCE)</text>
    
    <!-- Performance visual: Human action + Time + Spectators -->
    <circle cx="88" cy="95" r="42" fill="#fdf4ff" stroke="#e879f9"/>
    <text x="88" y="90" text-anchor="middle" font-size="24">🎭</text>
    <text x="88" y="118" text-anchor="middle" font-size="10" font-weight="bold" fill="#a21caf">Body + Time + Action</text>

    <text x="88" y="172" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#6b21a8" class="dark:fill-purple-300">Hành động Thời gian thực</text>
    <text x="12" y="192" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Cơ thể nghệ sĩ là chất liệu</text>
    <text x="12" y="208" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Tương tác trực tiếp công chúng</text>
    <text x="12" y="224" font-size="9.5" font-weight="bold" fill="#9333ea">• Không thể sao chép, mua bán</text>
  </g>
</svg>
`;

// 4. Bài 4: Thiết kế giá đỡ thiết bị công nghệ
svgs['bai-4'] = `
<svg viewBox="0 0 800 320" class="w-full h-auto max-h-[340px] select-none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="780" height="300" rx="16" fill="#f5f3ff" class="dark:fill-slate-900" stroke="#6366f1" stroke-width="1.5"/>
  <text x="400" y="38" text-anchor="middle" font-size="14" font-weight="800" fill="#4338ca" class="dark:fill-indigo-400">
    ĐỘNG LỰC HỌC CÔNG THÁI HỌC VÀ KẾT CẤU GIÁ ĐỠ ĐIỆN THOẠI / TABLET
  </text>

  <!-- Left: Sơ đồ góc nghiêng công thái học -->
  <g transform="translate(40, 60)">
    <rect x="0" y="0" width="340" height="230" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#6366f1" stroke-width="1.2"/>
    <text x="170" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#4f46e5" class="dark:fill-indigo-300">CƠ CẤU CÂN BẰNG TRỌNG TÂM &amp; TẦM NHÌN</text>

    <!-- Side view diagram -->
    <!-- Table surface -->
    <line x1="30" y1="180" x2="310" y2="180" stroke="#94a3b8" stroke-width="3"/>
    
    <!-- Phone Stand structure -->
    <!-- Base -->
    <rect x="70" y="174" width="130" height="6" fill="#4f46e5"/>
    <!-- Back support (inclined 60 deg) -->
    <line x1="90" y1="174" x2="160" y2="60" stroke="#4f46e5" stroke-width="8" stroke-linecap="round"/>
    <!-- Front lip / hook -->
    <path d="M 85 174 L 85 150 L 95 150" fill="none" stroke="#4f46e5" stroke-width="6" stroke-linecap="round"/>
    
    <!-- Phone / Tablet body -->
    <rect x="90" y="70" width="12" height="110" rx="3" fill="#e0e7ff" stroke="#312e81" stroke-width="2" transform="rotate(30 90 70)"/>

    <!-- Gravity Center G -->
    <circle cx="125" cy="120" r="5" fill="#ef4444"/>
    <text x="135" y="124" font-size="11" font-weight="bold" fill="#ef4444">Trọng tâm G</text>
    <line x1="125" y1="125" x2="125" y2="174" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,3"/>

    <!-- Angle indicator -->
    <path d="M 120 174 A 30 30 0 0 0 115 150" fill="none" stroke="#f59e0b" stroke-width="2"/>
    <text x="140" y="160" font-size="11" font-weight="bold" fill="#d97706">Góc 60°</text>

    <text x="170" y="210" text-anchor="middle" font-size="9.5" fill="#64748b" class="dark:fill-slate-400">Trọng tâm nằm trong chân đế =&gt; Không bị lật khi chạm vuốt</text>
  </g>

  <!-- Right: Bản vẽ chi tiết khớp gài carton & tản nhiệt -->
  <g transform="translate(410, 60)">
    <rect x="0" y="0" width="350" height="230" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#6366f1" stroke-width="1.2"/>
    <text x="175" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#4f46e5" class="dark:fill-indigo-300">KHỚP MỘNG GÀI CARTON &amp; TIỆN ÍCH SẠC</text>

    <!-- Part A: Lưng đỡ có rãnh khoét -->
    <rect x="30" y="50" width="85" height="120" rx="8" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.5"/>
    <!-- Vent slots -->
    <rect x="50" y="70" width="45" height="8" rx="3" fill="#ffffff"/>
    <rect x="50" y="85" width="45" height="8" rx="3" fill="#ffffff"/>
    <rect x="50" y="100" width="45" height="8" rx="3" fill="#ffffff"/>
    <!-- Charging cable notch -->
    <rect x="65" y="150" width="15" height="20" fill="#ffffff"/>
    <text x="72" y="185" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#312e81">Mặt lưng đỡ</text>

    <!-- Plus sign -->
    <text x="140" y="115" text-anchor="middle" font-size="20" font-weight="bold" fill="#6366f1">+</text>

    <!-- Part B: Chân chống mộng gài -->
    <path d="M 170 80 L 250 80 L 250 160 L 210 160 L 210 130 L 170 130 Z" fill="#c7d2fe" stroke="#4f46e5" stroke-width="1.5"/>
    <rect x="200" y="80" width="10" height="35" fill="#ffffff"/>
    <text x="210" y="185" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#312e81">Chân mộng gài</text>

    <!-- Feature notes -->
    <rect x="270" y="55" width="65" height="120" rx="6" fill="#f8fafc" class="dark:fill-slate-700" stroke="#cbd5e1" stroke-width="1"/>
    <text x="302" y="75" text-anchor="middle" font-size="9" font-weight="bold" fill="#0f172a" class="dark:fill-white">Ưu điểm:</text>
    <text x="302" y="95" text-anchor="middle" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Tản nhiệt</text>
    <text x="302" y="115" text-anchor="middle" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Cổng sạc</text>
    <text x="302" y="135" text-anchor="middle" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Xếp phẳng</text>
    <text x="302" y="155" text-anchor="middle" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Tái chế 100%</text>

    <text x="175" y="210" text-anchor="middle" font-size="9.5" fill="#64748b" class="dark:fill-slate-400">Khớp mộng gài đan xen không cần keo dán, tháo gập tiện lợi</text>
  </g>
</svg>
`;

// 5. Bài 5: Thiết kế bìa sách
svgs['bai-5'] = `
<svg viewBox="0 0 800 320" class="w-full h-auto max-h-[340px] select-none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="780" height="300" rx="16" fill="#f0f9ff" class="dark:fill-slate-900" stroke="#0284c7" stroke-width="1.5"/>
  <text x="400" y="38" text-anchor="middle" font-size="14" font-weight="800" fill="#0369a1" class="dark:fill-sky-400">
    CẤU TRÚC PHÂN CẤP THỊ GIÁC TOÀN BỘ BÌA SÁCH (BÌA 1, GÁY, BÌA 4)
  </text>

  <!-- Complete Book Jacket Anatomy -->
  <g transform="translate(60, 55)">
    <!-- Back Cover (Bìa 4) -->
    <rect x="0" y="0" width="280" height="235" fill="#ffffff" class="dark:fill-slate-800" stroke="#0284c7" stroke-width="1.5"/>
    <rect x="0" y="0" width="280" height="28" fill="#e0f2fe" class="dark:fill-sky-950/60"/>
    <text x="140" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1">BÌA 4 (BÌA SAU)</text>
    
    <!-- Blurb / Summary lines -->
    <rect x="25" y="45" width="230" height="8" rx="2" fill="#cbd5e1"/>
    <rect x="25" y="60" width="230" height="8" rx="2" fill="#cbd5e1"/>
    <rect x="25" y="75" width="200" height="8" rx="2" fill="#cbd5e1"/>
    <rect x="25" y="90" width="180" height="8" rx="2" fill="#cbd5e1"/>
    <text x="140" y="125" text-anchor="middle" font-size="10" font-style="italic" fill="#64748b">"Đoạn tóm tắt giới thiệu cuốn hút (Blurb)"</text>
    
    <!-- Barcode ISBN -->
    <rect x="160" y="160" width="95" height="50" fill="#ffffff" stroke="#94a3b8" stroke-width="1"/>
    <line x1="170" y1="165" x2="170" y2="195" stroke="#000000" stroke-width="2"/>
    <line x1="176" y1="165" x2="176" y2="195" stroke="#000000" stroke-width="1"/>
    <line x1="182" y1="165" x2="182" y2="195" stroke="#000000" stroke-width="3"/>
    <line x1="190" y1="165" x2="190" y2="195" stroke="#000000" stroke-width="1.5"/>
    <line x1="200" y1="165" x2="200" y2="195" stroke="#000000" stroke-width="2"/>
    <line x1="210" y1="165" x2="210" y2="195" stroke="#000000" stroke-width="1"/>
    <line x1="220" y1="165" x2="220" y2="195" stroke="#000000" stroke-width="2.5"/>
    <line x1="235" y1="165" x2="235" y2="195" stroke="#000000" stroke-width="2"/>
    <text x="207" y="205" text-anchor="middle" font-size="8" font-family="monospace">ISBN: 978-604-...</text>
    <text x="60" y="190" font-size="10" font-weight="bold" fill="#0369a1">Giá: 68.000 đ</text>

    <!-- Spine (Gáy sách) -->
    <rect x="280" y="0" width="60" height="235" fill="#0284c7" stroke="#0369a1" stroke-width="1.5"/>
    <text x="310" y="30" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff">KIM ĐỒNG</text>
    <text x="310" y="130" text-anchor="middle" font-size="11" font-weight="900" fill="#ffffff" transform="rotate(-90 310 130)">TÊN SÁCH Ở GÁY</text>
    <text x="310" y="215" text-anchor="middle" font-size="9" fill="#e0f2fe">Tác giả</text>

    <!-- Front Cover (Bìa 1) -->
    <rect x="340" y="0" width="340" height="235" fill="#ffffff" class="dark:fill-slate-800" stroke="#0284c7" stroke-width="1.5"/>
    <rect x="340" y="0" width="340" height="28" fill="#e0f2fe" class="dark:fill-sky-950/60"/>
    <text x="510" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1">BÌA 1 (BÌA TRƯỚC - PHÂN CẤP THỊ GIÁC)</text>

    <!-- 1. Tác giả -->
    <text x="510" y="55" text-anchor="middle" font-size="11" font-weight="bold" fill="#64748b" class="dark:fill-slate-300">TÊN TÁC GIẢ</text>

    <!-- 2. Tên sách (Primary Focus) -->
    <rect x="365" y="65" width="290" height="42" rx="8" fill="#0284c7"/>
    <text x="510" y="93" text-anchor="middle" font-size="16" font-weight="900" fill="#ffffff" letter-spacing="1">TÊN CUỐN SÁCH</text>

    <!-- 3. Key Visual Illustration -->
    <rect x="385" y="115" width="250" height="85" rx="10" fill="#bae6fd" stroke="#0ea5e9" stroke-width="1.2"/>
    <circle cx="510" cy="148" r="22" fill="#facc15"/>
    <path d="M 460 185 Q 510 135 560 185 Z" fill="#0284c7"/>
    <text x="510" y="194" text-anchor="middle" font-size="9" font-weight="bold" fill="#0369a1">Hình minh hoạ chủ đạo</text>

    <!-- 4. Publisher -->
    <text x="510" y="222" text-anchor="middle" font-size="10" font-weight="bold" fill="#475569" class="dark:fill-slate-300">NHÀ XUẤT BẢN KIM ĐỒNG</text>
  </g>
</svg>
`;

// 6. Bài 6: Tranh minh hoạ
svgs['bai-6'] = `
<svg viewBox="0 0 800 320" class="w-full h-auto max-h-[340px] select-none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="780" height="300" rx="16" fill="#f0fdf4" class="dark:fill-slate-900" stroke="#16a34a" stroke-width="1.5"/>
  <text x="400" y="38" text-anchor="middle" font-size="14" font-weight="800" fill="#15803d" class="dark:fill-emerald-400">
    CẤU TRÚC 3 LỚP KHÔNG GIAN TRONG TRANH MINH HOẠ VĂN HỌC
  </text>

  <!-- Illustration Depth Hierarchy -->
  <g transform="translate(40, 55)">
    <!-- 1. Hậu cảnh (Background) -->
    <rect x="0" y="0" width="225" height="235" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#16a34a" stroke-width="1.2"/>
    <rect x="0" y="0" width="225" height="30" rx="12" fill="#22c55e"/>
    <text x="112" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">1. HẬU CẢNH (XA NHẤT)</text>
    
    <rect x="25" y="45" width="175" height="85" rx="8" fill="#dcfce7"/>
    <path d="M 25 110 Q 75 60 120 95 Q 160 55 200 110 Z" fill="#86efac"/>
    <circle cx="170" cy="70" r="12" fill="#fef08a"/>
    <text x="112" y="152" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d" class="dark:fill-emerald-300">Không gian &amp; Thời gian</text>
    <text x="15" y="174" font-size="10" fill="#475569" class="dark:fill-slate-300">• Dãy núi, bầu trời, mây trôi</text>
    <text x="15" y="192" font-size="10" fill="#475569" class="dark:fill-slate-300">• Màu sắc mờ nhạt, độ tương phản thấp</text>
    <text x="15" y="210" font-size="10" font-weight="bold" fill="#16a34a">• Gợi thời đại và bối cảnh truyện</text>
  </g>

  <g transform="translate(285, 55)">
    <!-- 2. Trung cảnh (Midground - Focus) -->
    <rect x="0" y="0" width="230" height="235" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#16a34a" stroke-width="2"/>
    <rect x="0" y="0" width="230" height="30" rx="12" fill="#16a34a"/>
    <text x="115" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">2. TRUNG CẢNH (TRỌNG TÂM)</text>

    <rect x="25" y="45" width="180" height="85" rx="8" fill="#bbf7d0"/>
    <!-- Character in Action -->
    <circle cx="115" cy="75" r="14" fill="#fbcfe8"/>
    <path d="M 100 90 L 130 90 L 138 125 L 92 125 Z" fill="#2563eb"/>
    <text x="115" y="112" text-anchor="middle" font-size="10" fill="#ffffff">⚔️</text>
    
    <text x="115" y="152" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d" class="dark:fill-emerald-300">Hành động &amp; Cốt truyện</text>
    <text x="15" y="174" font-size="10" fill="#475569" class="dark:fill-slate-300">• Nhân vật chính xung đột kịch tính</text>
    <text x="15" y="192" font-size="10" fill="#475569" class="dark:fill-slate-300">• Nét vẽ chi tiết, sắc nét, rõ thần thái</text>
    <text x="15" y="210" font-size="10" font-weight="bold" fill="#16a34a">• Điểm nhấn thị giác đầu tiên</text>
  </g>

  <g transform="translate(535, 55)">
    <!-- 3. Tiền cảnh (Foreground) -->
    <rect x="0" y="0" width="225" height="235" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#16a34a" stroke-width="1.2"/>
    <rect x="0" y="0" width="225" height="30" rx="12" fill="#22c55e"/>
    <text x="112" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">3. TIỀN CẢNH (GẦN NHẤT)</text>

    <rect x="25" y="45" width="175" height="85" rx="8" fill="#dcfce7"/>
    <!-- Foliage / branches framing -->
    <path d="M 25 45 C 50 80, 80 50, 95 130 L 25 130 Z" fill="#14532d"/>
    <text x="112" y="152" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d" class="dark:fill-emerald-300">Khung viền dẫn mắt</text>
    <text x="15" y="174" font-size="10" fill="#475569" class="dark:fill-slate-300">• Tán cây, tảng đá, bậc cửa</text>
    <text x="15" y="192" font-size="10" fill="#475569" class="dark:fill-slate-300">• Sắc độ đậm nhất, kích thước lớn</text>
    <text x="15" y="210" font-size="10" font-weight="bold" fill="#16a34a">• Hút ánh nhìn vào trung tâm</text>
  </g>
</svg>
`;

// 7. Bài 7: Cảm hứng trong sáng tác hội hoạ
svgs['bai-7'] = `
<svg viewBox="0 0 800 320" class="w-full h-auto max-h-[340px] select-none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="780" height="300" rx="16" fill="#ecfdf5" class="dark:fill-slate-900" stroke="#059669" stroke-width="1.5"/>
  <text x="400" y="38" text-anchor="middle" font-size="14" font-weight="800" fill="#065f46" class="dark:fill-emerald-400">
    CHU TRÌNH 4 BƯỚC CHUYỂN HOÁ CẢM HỨNG VÀO TÁC PHẨM HỘI HOẠ
  </text>

  <!-- 4-step Inspiration Flow -->
  <!-- Step 1 -->
  <g transform="translate(30, 60)">
    <rect x="0" y="0" width="168" height="225" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#059669" stroke-width="1.2"/>
    <rect x="0" y="0" width="168" height="28" rx="12" fill="#10b981"/>
    <text x="84" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">1. ĐÁNH THỨC CẢM XÚC</text>
    <circle cx="84" cy="65" r="24" fill="#d1fae5"/>
    <text x="84" y="72" text-anchor="middle" font-size="20">💭</text>
    <text x="84" y="105" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#047857">Rung động Đời sống</text>
    <text x="12" y="128" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Kỉ niệm bạn bè, mái trường</text>
    <text x="12" y="146" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Cơn mưa rào, hoàng hôn</text>
    <text x="12" y="164" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Tình thương của mẹ cha</text>
    <text x="12" y="184" font-size="9.5" font-weight="bold" fill="#059669">• Cảm xúc chân thực</text>
  </g>

  <!-- Arrow 1 -->
  <path d="M 203 170 L 213 170" stroke="#059669" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Step 2 -->
  <g transform="translate(218, 60)">
    <rect x="0" y="0" width="168" height="225" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#059669" stroke-width="1.2"/>
    <rect x="0" y="0" width="168" height="28" rx="12" fill="#10b981"/>
    <text x="84" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">2. KÍ HOẠ &amp; HÌNH THỂ</text>
    <circle cx="84" cy="65" r="24" fill="#d1fae5"/>
    <text x="84" y="72" text-anchor="middle" font-size="20">✍️</text>
    <text x="84" y="105" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#047857">Chắt lọc Nét bút</text>
    <text x="12" y="128" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Bắt lấy cái 'thần' của dáng</text>
    <text x="12" y="146" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Lược bỏ rườm rà thứ yếu</text>
    <text x="12" y="164" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Phác thảo các mảng lớn</text>
    <text x="12" y="184" font-size="9.5" font-weight="bold" fill="#059669">• Định hình nhịp điệu nét</text>
  </g>

  <!-- Step 3 -->
  <g transform="translate(406, 60)">
    <rect x="0" y="0" width="168" height="225" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#059669" stroke-width="1.2"/>
    <rect x="0" y="0" width="168" height="28" rx="12" fill="#10b981"/>
    <text x="84" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">3. HOÀ SẮC BIỂU CẢM</text>
    <circle cx="84" cy="65" r="24" fill="#d1fae5"/>
    <text x="84" y="72" text-anchor="middle" font-size="20">🎭</text>
    <text x="84" y="105" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#047857">Màu của Tâm trạng</text>
    <text x="12" y="128" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Vàng ấm: Niềm vui, hi vọng</text>
    <text x="12" y="146" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Lam thẫm: Hoài niệm, suy tư</text>
    <text x="12" y="164" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Tương phản sáng tối gắt</text>
    <text x="12" y="184" font-size="9.5" font-weight="bold" fill="#059669">• Cường điệu hoá sắc thái</text>
  </g>

  <!-- Step 4 -->
  <g transform="translate(594, 60)">
    <rect x="0" y="0" width="176" height="225" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#059669" stroke-width="1.2"/>
    <rect x="0" y="0" width="176" height="28" rx="12" fill="#10b981"/>
    <text x="88" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">4. TÁC PHẨM CÁ NHÂN</text>
    <circle cx="88" cy="65" r="24" fill="#d1fae5"/>
    <text x="88" y="72" text-anchor="middle" font-size="20">🖼️</text>
    <text x="88" y="105" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#047857">Tiếng nói Nghệ thuật</text>
    <text x="12" y="128" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Hoàn thiện vân chất liệu</text>
    <text x="12" y="146" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Đặt tên tranh giàu chất thơ</text>
    <text x="12" y="164" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Chia sẻ thông điệp sâu xa</text>
    <text x="12" y="184" font-size="9.5" font-weight="bold" fill="#059669">• Khẳng định cá tính riêng</text>
  </g>
</svg>
`;

// 8. Bài 8: Thiết kế hình ảnh nhận diện thương hiệu
svgs['bai-8'] = `
<svg viewBox="0 0 800 320" class="w-full h-auto max-h-[340px] select-none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="780" height="300" rx="16" fill="#f0fdfa" class="dark:fill-slate-900" stroke="#0d9488" stroke-width="1.5"/>
  <text x="400" y="38" text-anchor="middle" font-size="14" font-weight="800" fill="#0f766e" class="dark:fill-teal-400">
    HỆ THỐNG NHẬN DIỆN THƯƠNG HIỆU ĐỒNG BỘ (BRAND IDENTITY SYSTEM)
  </text>

  <!-- Left: Logo & Color Palette -->
  <g transform="translate(40, 60)">
    <rect x="0" y="0" width="340" height="230" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#0d9488" stroke-width="1.2"/>
    <text x="170" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#0d9488" class="dark:fill-teal-300">HẠT NHÂN: LOGO &amp; QUY CHUẨN MÀU</text>

    <!-- Master Logo with Golden Ratio grid hints -->
    <rect x="40" y="45" width="110" height="110" rx="10" fill="#ccfbf1" stroke="#14b8a6" stroke-dasharray="3,3"/>
    <circle cx="95" cy="100" r="32" fill="#0d9488"/>
    <path d="M 80 100 L 95 85 L 110 100 L 95 115 Z" fill="#ffffff"/>
    <circle cx="95" cy="100" r="6" fill="#facc15"/>
    <text x="95" y="170" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f766e">ECO BRAND 9</text>

    <!-- Color Palette Chips -->
    <text x="250" y="55" text-anchor="middle" font-size="10" font-weight="bold" fill="#64748b">BẢNG MÀU CHUẨN</text>
    <rect x="180" y="65" width="40" height="24" rx="4" fill="#0d9488"/>
    <text x="230" y="81" font-size="9" font-family="monospace">#0D9488 (Teal)</text>

    <rect x="180" y="95" width="40" height="24" rx="4" fill="#facc15"/>
    <text x="230" y="111" font-size="9" font-family="monospace">#FACC15 (Sun)</text>

    <rect x="180" y="125" width="40" height="24" rx="4" fill="#0f172a"/>
    <text x="230" y="141" font-size="9" font-family="monospace">#0F172A (Dark)</text>

    <text x="170" y="210" text-anchor="middle" font-size="9.5" fill="#64748b" class="dark:fill-slate-400">4 Tiêu chuẩn: Đơn giản • Dễ nhớ • Độc đáo • Ứng dụng cao</text>
  </g>

  <!-- Right: Ứng dụng thực tế (Mockups) -->
  <g transform="translate(410, 60)">
    <rect x="0" y="0" width="350" height="230" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#0d9488" stroke-width="1.2"/>
    <text x="175" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#0d9488" class="dark:fill-teal-300">VẬT PHẨM ỨNG DỤNG ĐỒNG BỘ (MOCKUP)</text>

    <!-- 1. Namecard -->
    <rect x="35" y="50" width="115" height="70" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
    <circle cx="55" cy="72" r="8" fill="#0d9488"/>
    <rect x="70" y="68" width="60" height="6" rx="2" fill="#0d9488"/>
    <rect x="70" y="78" width="45" height="4" rx="2" fill="#94a3b8"/>
    <rect x="45" y="95" width="80" height="3" rx="1.5" fill="#cbd5e1"/>
    <rect x="45" y="102" width="60" height="3" rx="1.5" fill="#cbd5e1"/>
    <text x="92" y="134" text-anchor="middle" font-size="9" font-weight="bold" fill="#475569">Danh thiếp</text>

    <!-- 2. T-shirt Mockup -->
    <path d="M 200 65 L 215 50 L 245 50 L 260 65 L 250 80 L 240 75 L 240 120 L 220 120 L 220 75 L 210 80 Z" fill="#ffffff" stroke="#0d9488" stroke-width="1.5"/>
    <circle cx="230" cy="85" r="5" fill="#0d9488"/>
    <text x="230" y="134" text-anchor="middle" font-size="9" font-weight="bold" fill="#475569">Áo đồng phục</text>

    <!-- 3. Cup Mockup -->
    <path d="M 285 60 L 325 60 L 318 110 L 292 110 Z" fill="#ffffff" stroke="#0d9488" stroke-width="1.5"/>
    <path d="M 322 70 C 335 70, 335 95, 319 95" fill="none" stroke="#0d9488" stroke-width="2"/>
    <circle cx="305" cy="85" r="5" fill="#0d9488"/>
    <text x="305" y="134" text-anchor="middle" font-size="9" font-weight="bold" fill="#475569">Cốc sứ</text>

    <rect x="35" y="160" width="280" height="45" rx="8" fill="#f0fdfa" stroke="#2dd4bf" stroke-width="1"/>
    <text x="175" y="180" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f766e">Nhận diện thương hiệu gia tăng giá trị kinh tế</text>
    <text x="175" y="196" text-anchor="middle" font-size="9" fill="#0d9488">Gắn kết cảm xúc - Khẳng định uy tín tổ chức</text>
  </g>
</svg>
`;

// 9. Triển lãm Cuối Kì I
svgs['trien-lam-1'] = `
<svg viewBox="0 0 800 320" class="w-full h-auto max-h-[340px] select-none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="780" height="300" rx="16" fill="#fff1f2" class="dark:fill-slate-900" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="400" y="38" text-anchor="middle" font-size="14" font-weight="800" fill="#be123c" class="dark:fill-rose-400">
    QUY CHUẨN THIẾT KẾ KHÔNG GIAN TRIỂN LÃM MĨ THUẬT HỌC KÌ I
  </text>

  <!-- Gallery Layout -->
  <g transform="translate(50, 60)">
    <rect x="0" y="0" width="700" height="230" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#f43f5e" stroke-width="1.2"/>
    
    <!-- Gallery Wall and Floor -->
    <line x1="30" y1="170" x2="670" y2="170" stroke="#cbd5e1" stroke-width="2"/>
    
    <!-- Spotlight beams -->
    <path d="M 120 10 L 80 100 L 160 100 Z" fill="#fef08a" opacity="0.4"/>
    <path d="M 330 10 L 280 100 L 380 100 Z" fill="#fef08a" opacity="0.4"/>
    <path d="M 540 10 L 490 100 L 590 100 Z" fill="#fef08a" opacity="0.4"/>
    <circle cx="120" cy="10" r="6" fill="#eab308"/>
    <circle cx="330" cy="10" r="6" fill="#eab308"/>
    <circle cx="540" cy="10" r="6" fill="#eab308"/>

    <!-- Artwork 1 (Painting) -->
    <rect x="85" y="45" width="70" height="80" fill="#fecdd3" stroke="#e11d48" stroke-width="2"/>
    <circle cx="120" cy="80" r="14" fill="#fb7185"/>
    <text x="120" y="140" text-anchor="middle" font-size="9" font-weight="bold" fill="#9f1239">Tranh Đề tài</text>

    <!-- Artwork 2 (3D Model on Pedestal) -->
    <rect x="295" y="115" width="70" height="55" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
    <rect x="315" y="80" width="30" height="35" rx="4" fill="#c7d2fe" stroke="#4f46e5" stroke-width="1.5"/>
    <text x="330" y="185" text-anchor="middle" font-size="9" font-weight="bold" fill="#312e81">Mô hình Giá đỡ</text>

    <!-- Artwork 3 (Book Covers) -->
    <rect x="505" y="45" width="70" height="80" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
    <text x="540" y="85" text-anchor="middle" font-size="8" font-weight="bold" fill="#0369a1">BÌA SÁCH</text>
    <text x="540" y="140" text-anchor="middle" font-size="9" font-weight="bold" fill="#075985">Đồ hoạ Sách</text>

    <!-- Artwork Label (Thẻ chú thích) Callout -->
    <rect x="165" y="95" width="55" height="30" rx="3" fill="#ffffff" stroke="#64748b" stroke-width="1"/>
    <text x="192" y="108" text-anchor="middle" font-size="7" font-weight="bold" fill="#0f172a">Tên tác phẩm</text>
    <text x="192" y="118" text-anchor="middle" font-size="6" fill="#64748b">Tác giả - Lớp</text>

    <!-- Eye level guideline -->
    <line x1="30" y1="85" x2="670" y2="85" stroke="#f43f5e" stroke-width="1" stroke-dasharray="4,4"/>
    <text x="640" y="80" text-anchor="end" font-size="9" font-weight="bold" fill="#e11d48">Tầm mắt chuẩn: 1.45m - 1.55m</text>
    
    <text x="350" y="215" text-anchor="middle" font-size="10" font-weight="bold" fill="#be123c">
      Tiêu chuẩn: Khoảng cách thoáng • Ánh sáng rọi chuẩn • Thẻ chú thích rõ ràng
    </text>
  </g>
</svg>
`;

// 10. Bài 9: Tỉ lệ và hình khối của đồ vật
svgs['bai-9'] = `
<svg viewBox="0 0 800 320" class="w-full h-auto max-h-[340px] select-none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="780" height="300" rx="16" fill="#fffbeb" class="dark:fill-slate-900" stroke="#d97706" stroke-width="1.5"/>
  <text x="400" y="38" text-anchor="middle" font-size="14" font-weight="800" fill="#92400e" class="dark:fill-amber-400">
    QUY LUẬT DÓNG TỈ LỆ, QUY KHỐI VÀ 5 SẮC ĐỘ ÁNH SÁNG CHUẨN
  </text>

  <!-- Left: Dóng trục và quy khối hình học -->
  <g transform="translate(40, 60)">
    <rect x="0" y="0" width="340" height="230" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#d97706" stroke-width="1.2"/>
    <text x="170" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#d97706" class="dark:fill-amber-300">DÓNG TRỤC ĐỐI XỨNG &amp; QUY KHỐI</text>

    <!-- Axis line -->
    <line x1="170" y1="45" x2="170" y2="195" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,3"/>
    <text x="175" y="55" font-size="9" font-weight="bold" fill="#ef4444">Trục thẳng đứng</text>

    <!-- Wireframe Vase: Cylinders and spheres -->
    <!-- Neck -->
    <ellipse cx="170" cy="70" rx="25" ry="6" fill="none" stroke="#d97706" stroke-width="1.5"/>
    <ellipse cx="170" cy="95" rx="18" ry="5" fill="none" stroke="#d97706" stroke-width="1.5"/>
    <!-- Body (Sphere) -->
    <circle cx="170" cy="140" r="42" fill="none" stroke="#d97706" stroke-width="1.5" stroke-dasharray="4,2"/>
    <ellipse cx="170" cy="140" rx="42" ry="12" fill="none" stroke="#d97706" stroke-width="1"/>
    <!-- Base -->
    <ellipse cx="170" cy="185" rx="22" ry="6" fill="none" stroke="#d97706" stroke-width="1.5"/>

    <!-- Outer contour -->
    <path d="M 145 70 Q 152 95 128 140 Q 148 185 148 185 L 192 185 Q 192 185 212 140 Q 188 95 195 70 Z" fill="#fef3c7" opacity="0.5" stroke="#b45309" stroke-width="2"/>

    <!-- Comparison rulers -->
    <line x1="100" y1="70" x2="100" y2="185" stroke="#3b82f6" stroke-width="1"/>
    <text x="95" y="130" text-anchor="end" font-size="9" font-weight="bold" fill="#2563eb">Cao tổng thể</text>

    <text x="170" y="212" text-anchor="middle" font-size="9.5" fill="#64748b" class="dark:fill-slate-400">Dóng bút chì so sánh: Rộng miệng / Rộng vai / Chiều cao</text>
  </g>

  <!-- Right: 5 sắc độ ánh sáng chuẩn -->
  <g transform="translate(410, 60)">
    <rect x="0" y="0" width="350" height="230" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#d97706" stroke-width="1.2"/>
    <text x="175" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#d97706" class="dark:fill-amber-300">5 PHÂN VÙNG SẮC ĐỘ ÁNH SÁNG TRÊN KHỐI CẦU</text>

    <!-- Shaded Sphere with Light Source -->
    <!-- Light source -->
    <circle cx="50" cy="55" r="10" fill="#facc15"/>
    <line x1="60" y1="65" x2="90" y2="90" stroke="#facc15" stroke-width="2" marker-end="url(#arrow)"/>
    <text x="65" y="50" font-size="9" font-weight="bold" fill="#ca8a04">Nguồn sáng</text>

    <!-- Sphere circle -->
    <circle cx="140" cy="130" r="50" fill="#e2e8f0" stroke="#475569" stroke-width="1.5"/>
    
    <!-- Cast shadow on ground -->
    <ellipse cx="205" cy="175" rx="45" ry="10" fill="#334155" opacity="0.6"/>

    <!-- Callout 1: Highlight -->
    <circle cx="115" cy="105" r="8" fill="#ffffff"/>
    <line x1="115" y1="97" x2="115" y2="60" stroke="#94a3b8"/>
    <text x="115" y="52" text-anchor="middle" font-size="9" font-weight="bold" fill="#0f172a" class="dark:fill-white">1. Điểm sáng nhất</text>

    <!-- Callout 2: Light -->
    <text x="160" y="90" font-size="9" fill="#475569" class="dark:fill-slate-300">2. Vùng sáng</text>

    <!-- Callout 3: Terminator (Core Shadow) -->
    <path d="M 130 85 Q 165 130 155 178" fill="none" stroke="#0f172a" stroke-width="2"/>
    <line x1="150" y1="130" x2="230" y2="105" stroke="#94a3b8"/>
    <text x="235" y="108" font-size="9" font-weight="bold" fill="#ef4444">3. Ranh giới sáng-tối</text>

    <!-- Callout 4: Reflected Light -->
    <path d="M 160 160 Q 180 150 185 140" fill="none" stroke="#93c5fd" stroke-width="2"/>
    <line x1="175" y1="150" x2="230" y2="135" stroke="#94a3b8"/>
    <text x="235" y="138" font-size="9" font-weight="bold" fill="#0284c7">4. Phản quang</text>

    <!-- Callout 5: Cast Shadow -->
    <line x1="210" y1="175" x2="230" y2="165" stroke="#94a3b8"/>
    <text x="235" y="168" font-size="9" font-weight="bold" fill="#334155">5. Bóng đổ</text>

    <text x="175" y="212" text-anchor="middle" font-size="9.5" fill="#64748b" class="dark:fill-slate-400">Chuyển tiếp êm ái giữa 5 sắc độ tạo nên cảm giác khối 3D căng tròn</text>
  </g>
</svg>
`;

// 11. Bài 10: Nguyên mẫu trong tác phẩm điêu khắc
svgs['bai-10'] = `
<svg viewBox="0 0 800 320" class="w-full h-auto max-h-[340px] select-none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="780" height="300" rx="16" fill="#fff7ed" class="dark:fill-slate-900" stroke="#ea580c" stroke-width="1.5"/>
  <text x="400" y="38" text-anchor="middle" font-size="14" font-weight="800" fill="#c2410c" class="dark:fill-orange-400">
    SO SÁNH ĐIÊU KHẮC TƯỢNG TRÒN (360°) VÀ NGHỆ THUẬT PHÙ ĐIÊU (RELIEF)
  </text>

  <!-- Left: Tượng tròn (360 view) -->
  <g transform="translate(40, 60)">
    <rect x="0" y="0" width="340" height="230" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#ea580c" stroke-width="1.2"/>
    <text x="170" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#ea580c" class="dark:fill-orange-300">TƯỢNG TRÒN (SCULPTURE IN THE ROUND)</text>

    <!-- 3D Pedestal and Bust -->
    <rect x="120" y="145" width="100" height="40" fill="#fed7aa" stroke="#c2410c" stroke-width="1.5"/>
    <path d="M 140 145 L 140 120 L 150 115 L 150 100 L 140 90 L 145 65 L 195 65 L 200 90 L 190 100 L 190 115 L 200 120 L 200 145 Z" fill="#ffedd5" stroke="#c2410c" stroke-width="2"/>
    
    <!-- 360 degree orbit arrows -->
    <ellipse cx="170" cy="105" rx="80" ry="22" fill="none" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="5,4"/>
    <circle cx="250" cy="105" r="4" fill="#ea580c"/>
    <text x="258" y="102" font-size="9" font-weight="bold" fill="#c2410c">360°</text>

    <text x="170" y="198" text-anchor="middle" font-size="10" font-weight="bold" fill="#9a3412">Quan sát từ mọi góc nhìn</text>
    <text x="170" y="215" text-anchor="middle" font-size="9" fill="#64748b" class="dark:fill-slate-400">Khối độc lập trong không gian 3 chiều vật lí thực</text>
  </g>

  <!-- Right: Phù điêu (Relief: High vs Low) -->
  <g transform="translate(410, 60)">
    <rect x="0" y="0" width="350" height="230" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#ea580c" stroke-width="1.2"/>
    <text x="175" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#ea580c" class="dark:fill-orange-300">PHÙ ĐIÊU (RELIEF: NỔI CAO &amp; NỔI THẤP)</text>

    <!-- Relief Plate Surface -->
    <rect x="40" y="55" width="270" height="110" rx="8" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
    
    <!-- Flat Backplate cross section note -->
    <line x1="40" y1="55" x2="310" y2="55" stroke="#c2410c" stroke-width="1"/>
    
    <!-- Low relief area (Leaves/bg) -->
    <path d="M 60 140 Q 90 90 120 140 Z" fill="#fed7aa" stroke="#ea580c" stroke-width="1.2"/>
    <text x="90" y="155" text-anchor="middle" font-size="9" font-weight="bold" fill="#9a3412">Chạm nổi thấp</text>

    <!-- High relief area (Main figure coming out) -->
    <circle cx="220" cy="105" r="32" fill="#fdba74" stroke="#c2410c" stroke-width="2.5"/>
    <ellipse cx="230" cy="115" rx="36" ry="8" fill="#7c2d12" opacity="0.4"/>
    <text x="220" y="155" text-anchor="middle" font-size="9" font-weight="bold" fill="#9a3412">Khối nổi cao (&gt;50%)</text>

    <line x1="220" y1="73" x2="220" y2="40" stroke="#c2410c" stroke-width="1"/>
    <text x="220" y="35" text-anchor="middle" font-size="9" font-weight="bold" fill="#ea580c">Gắn liền mặt nền phẳng</text>

    <text x="175" y="198" text-anchor="middle" font-size="10" font-weight="bold" fill="#9a3412">Sự kết hợp giữa Hội hoạ &amp; Điêu khắc</text>
    <text x="175" y="215" text-anchor="middle" font-size="9" fill="#64748b" class="dark:fill-slate-400">Tạo chiều sâu bằng độ dày mỏng các tầng lớp đất nặn</text>
  </g>
</svg>
`;

// 12. Bài 11: Vẻ đẹp tạo hình con rối
svgs['bai-11'] = `
<svg viewBox="0 0 800 320" class="w-full h-auto max-h-[340px] select-none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="780" height="300" rx="16" fill="#fef2f2" class="dark:fill-slate-900" stroke="#dc2626" stroke-width="1.5"/>
  <text x="400" y="38" text-anchor="middle" font-size="14" font-weight="800" fill="#991b1b" class="dark:fill-red-400">
    CƠ CHẾ KHỚP XOAY &amp; ĐIỀU KHIỂN RỐI QUE - RỐI BÓNG DÂN GIAN
  </text>

  <!-- Left: Rối que có khớp chuyển động -->
  <g transform="translate(40, 60)">
    <rect x="0" y="0" width="340" height="230" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#dc2626" stroke-width="1.2"/>
    <text x="170" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626" class="dark:fill-red-300">CƠ CẤU RỐI QUE (CHỐT ĐINH TÁN XOAY)</text>

    <!-- Puppet Body -->
    <!-- Head -->
    <circle cx="170" cy="65" r="20" fill="#fecaca" stroke="#b91c1c" stroke-width="1.5"/>
    <text x="170" y="70" text-anchor="middle" font-size="12">🤡</text>
    
    <!-- Torso -->
    <path d="M 150 85 L 190 85 L 195 140 L 145 140 Z" fill="#fee2e2" stroke="#b91c1c" stroke-width="1.5"/>
    
    <!-- Arm with Joint: Shoulder + Elbow -->
    <circle cx="145" cy="90" r="5" fill="#f59e0b"/>
    <line x1="145" y1="90" x2="115" y2="105" stroke="#b91c1c" stroke-width="5" stroke-linecap="round"/>
    <circle cx="115" cy="105" r="5" fill="#f59e0b"/>
    <line x1="115" y1="105" x2="95" y2="135" stroke="#b91c1c" stroke-width="5" stroke-linecap="round"/>

    <!-- Control Rods (Que tre điều khiển) -->
    <!-- Spine rod -->
    <line x1="170" y1="140" x2="170" y2="215" stroke="#78350f" stroke-width="4"/>
    <text x="178" y="200" font-size="9" font-weight="bold" fill="#78350f">Que chính (Thân)</text>

    <!-- Hand rod -->
    <line x1="95" y1="135" x2="75" y2="215" stroke="#78350f" stroke-width="2.5"/>
    <text x="65" y="190" font-size="9" font-weight="bold" fill="#78350f">Que phụ</text>

    <!-- Joint annotation -->
    <line x1="115" y1="105" x2="70" y2="85" stroke="#dc2626" stroke-width="1"/>
    <text x="65" y="80" text-anchor="middle" font-size="9" font-weight="bold" fill="#dc2626">Chốt ghim xoay linh hoạt</text>

    <text x="170" y="222" text-anchor="middle" font-size="9" fill="#64748b" class="dark:fill-slate-400">Hai que điều khiển giúp nhân vật vung tay, gập cùi chỏ sống động</text>
  </g>

  <!-- Right: Rối bóng (Shadow puppet optical principle) -->
  <g transform="translate(410, 60)">
    <rect x="0" y="0" width="350" height="230" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#dc2626" stroke-width="1.2"/>
    <text x="175" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626" class="dark:fill-red-300">NGUYÊN LÍ QUANG HỌC RỐI BÓNG</text>

    <!-- Light Source -->
    <circle cx="45" cy="115" r="14" fill="#facc15"/>
    <text x="45" y="90" text-anchor="middle" font-size="9" font-weight="bold" fill="#ca8a04">Đèn chiếu</text>

    <!-- Puppet Silhouette in between -->
    <line x1="140" y1="70" x2="140" y2="160" stroke="#000000" stroke-width="8"/>
    <circle cx="140" cy="70" r="10" fill="#000000"/>
    <text x="140" y="180" text-anchor="middle" font-size="9" font-weight="bold" fill="#000000">Con rối phẳng</text>

    <!-- Screen (Màn vải trắng) -->
    <line x1="220" y1="45" x2="220" y2="195" stroke="#0284c7" stroke-width="4"/>
    <text x="220" y="38" text-anchor="middle" font-size="9" font-weight="bold" fill="#0284c7">Màn vải trắng</text>

    <!-- Cast Shadow on screen -->
    <ellipse cx="220" cy="115" rx="4" ry="45" fill="#000000"/>
    <text x="260" y="118" font-size="10" font-weight="bold" fill="#000000">Bóng đen in trên màn</text>

    <!-- Spectators eyes -->
    <text x="310" y="118" text-anchor="middle" font-size="20">👀</text>
    <text x="310" y="140" text-anchor="middle" font-size="9" font-weight="bold" fill="#64748b">Khán giả</text>

    <text x="175" y="215" text-anchor="middle" font-size="9.5" fill="#64748b" class="dark:fill-slate-400">Hình rối càng gần đèn thì bóng càng to; hoa văn trổ thủng lọt sáng kì ảo</text>
  </g>
</svg>
`;

// 13. Bài 12: Tạo hình nhân vật múa rối nước
svgs['bai-12'] = `
<svg viewBox="0 0 800 320" class="w-full h-auto max-h-[340px] select-none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="780" height="300" rx="16" fill="#f0fdfa" class="dark:fill-slate-900" stroke="#0f766e" stroke-width="1.5"/>
  <text x="400" y="38" text-anchor="middle" font-size="14" font-weight="800" fill="#115e59" class="dark:fill-teal-400">
    CẤU TRÚC SÂN KHẤU THỦY ĐÌNH &amp; HỆ THỐNG ĐIỀU KHIỂN RỐI NƯỚC DÂN GIAN
  </text>

  <!-- Thủy đình & Water Stage Cross-section -->
  <g transform="translate(40, 55)">
    <rect x="0" y="0" width="720" height="235" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#0f766e" stroke-width="1.2"/>

    <!-- Water Surface Line -->
    <line x1="30" y1="140" x2="690" y2="140" stroke="#0284c7" stroke-width="3"/>
    <rect x="30" y="142" width="660" height="75" fill="#bae6fd" opacity="0.4"/>
    <text x="660" y="135" text-anchor="end" font-size="10" font-weight="bold" fill="#0284c7">MẶT NƯỚC AO HỒ (SÂN KHẤU)</text>

    <!-- Thủy Đình (Pavilion on the left) -->
    <!-- Roof -->
    <path d="M 40 75 Q 120 40 200 75 L 180 85 L 60 85 Z" fill="#b91c1c" stroke="#7f1d1d" stroke-width="1.5"/>
    <!-- Bamboo Screen (Mành tre) -->
    <rect x="70" y="85" width="100" height="55" fill="#fef08a" stroke="#ca8a04" stroke-width="1"/>
    <line x1="80" y1="85" x2="80" y2="140" stroke="#ca8a04" stroke-width="1"/>
    <line x1="90" y1="85" x2="90" y2="140" stroke="#ca8a04" stroke-width="1"/>
    <line x1="100" y1="85" x2="100" y2="140" stroke="#ca8a04" stroke-width="1"/>
    <line x1="110" y1="85" x2="110" y2="140" stroke="#ca8a04" stroke-width="1"/>
    <text x="120" y="115" text-anchor="middle" font-size="9" font-weight="bold" fill="#78350f">Mành buồng trò</text>

    <!-- Puppeteer behind screen (underwater) -->
    <circle cx="120" cy="155" r="10" fill="#fed7aa"/>
    <text x="120" y="180" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#0f172a" class="dark:fill-white">Nghệ nhân lội nước</text>

    <!-- Underwater Machinery (Hệ máy sào, dây kéo ngầm) -->
    <!-- Long bamboo pole (Sào) -->
    <line x1="130" y1="165" x2="480" y2="165" stroke="#78350f" stroke-width="5" stroke-linecap="round"/>
    <text x="300" y="185" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#78350f">Cây sào đẩy ngầm dưới nước (dài 3-5m)</text>

    <!-- String control lines -->
    <line x1="130" y1="160" x2="480" y2="150" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2"/>
    <text x="300" y="148" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#dc2626">Dây kéo điều khiển tay/khớp</text>

    <!-- Puppet Chú Tễu at water surface -->
    <g transform="translate(480, 80)">
      <!-- Float base (Phao gỗ sung) -->
      <ellipse cx="25" cy="62" rx="28" ry="8" fill="#d97706"/>
      <!-- Body (Torso) -->
      <path d="M 12 25 Q 25 15 38 25 L 35 60 L 15 60 Z" fill="#fecaca" stroke="#b91c1c" stroke-width="1.5"/>
      <!-- Smiling Face with 3 hair tufts -->
      <circle cx="25" cy="12" r="12" fill="#fecaca" stroke="#b91c1c" stroke-width="1.5"/>
      <circle cx="25" cy="0" r="3" fill="#000000"/>
      <circle cx="15" cy="3" r="3" fill="#000000"/>
      <circle cx="35" cy="3" r="3" fill="#000000"/>
      <text x="25" y="16" text-anchor="middle" font-size="8">😄</text>
      <!-- Raised waving arms -->
      <path d="M 12 28 L -5 10" stroke="#b91c1c" stroke-width="3" stroke-linecap="round"/>
      <path d="M 38 28 L 55 10" stroke="#b91c1c" stroke-width="3" stroke-linecap="round"/>
      <text x="25" y="80" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f766e">CHÚ TỄU (GỖ SUNG)</text>
    </g>

    <text x="360" y="222" text-anchor="middle" font-size="9.5" fill="#475569" class="dark:fill-slate-300">
      Đặc sắc: Mặt nước vừa là sàn diễn, vừa che giấu toàn bộ bộ máy điều khiển sào dây tinh xảo
    </text>
  </g>
</svg>
`;

// 14. Bài 13: Khuynh hướng sáng tác mĩ thuật đương đại VN
svgs['bai-13'] = `
<svg viewBox="0 0 800 320" class="w-full h-auto max-h-[340px] select-none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="780" height="300" rx="16" fill="#f0fdf4" class="dark:fill-slate-900" stroke="#047857" stroke-width="1.5"/>
  <text x="400" y="38" text-anchor="middle" font-size="14" font-weight="800" fill="#065f46" class="dark:fill-emerald-400">
    GIAO THOA BẢN SẮC TRUYỀN THỐNG VÀ NGÔN NGỮ ĐƯƠNG ĐẠI VIỆT NAM
  </text>

  <!-- 3 Pillars of Contemporary Vietnamese Art -->
  <!-- 1. Sơn mài cách tân -->
  <g transform="translate(35, 55)">
    <rect x="0" y="0" width="220" height="235" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#047857" stroke-width="1.2"/>
    <rect x="0" y="0" width="220" height="30" rx="12" fill="#059669"/>
    <text x="110" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">SƠN MÀI CÁCH TÂN</text>

    <!-- Lacquer Visual -->
    <rect x="35" y="45" width="150" height="75" rx="6" fill="#18181b"/>
    <circle cx="85" cy="82" r="24" fill="#dc2626"/>
    <path d="M 125 55 L 145 95 L 105 95 Z" fill="#eab308"/>
    <!-- Eggshell crackle effect representation -->
    <text x="160" y="70" font-size="10">✨</text>
    <text x="50" y="95" font-size="10">🥚</text>

    <text x="110" y="142" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#047857">Nghệ thuật Mài Nước</text>
    <text x="15" y="164" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Then, son, vàng quỳ, vỏ trứng</text>
    <text x="15" y="182" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Bố cục trừu tượng hiện đại</text>
    <text x="15" y="200" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Màu sắc biến ảo sâu thẳm</text>
    <text x="15" y="218" font-size="9.5" font-weight="bold" fill="#059669">• Tinh hoa hội hoạ dân tộc</text>
  </g>

  <!-- 2. Tranh lụa & Giấy Dó -->
  <g transform="translate(290, 55)">
    <rect x="0" y="0" width="220" height="235" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#047857" stroke-width="1.2"/>
    <rect x="0" y="0" width="220" height="30" rx="12" fill="#059669"/>
    <text x="110" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">TRANH LỤA &amp; GIẤY DÓ</text>

    <rect x="35" y="45" width="150" height="75" rx="6" fill="#fef3c7"/>
    <!-- Soft ink wash on Silk/Dó -->
    <path d="M 45 100 Q 85 55 130 90 Q 160 70 175 105 Z" fill="#94a3b8" opacity="0.6"/>
    <circle cx="150" cy="70" r="14" fill="#fb7185" opacity="0.7"/>

    <text x="110" y="142" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#047857">Chất liệu Tự nhiên Bản địa</text>
    <text x="15" y="164" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Giấy dó vỏ cây dai bền trăm năm</text>
    <text x="15" y="182" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Nhuộm rửa lụa tạo độ mờ ảo</text>
    <text x="15" y="200" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Thấm hút loang màu thi vị</text>
    <text x="15" y="218" font-size="9.5" font-weight="bold" fill="#059669">• Hơi thở phương Đông trữ tình</text>
  </g>

  <!-- 3. Nghệ thuật Hỗn hợp (Mixed Media) -->
  <g transform="translate(545, 55)">
    <rect x="0" y="0" width="220" height="235" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#047857" stroke-width="1.2"/>
    <rect x="0" y="0" width="220" height="30" rx="12" fill="#059669"/>
    <text x="110" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">MIXED MEDIA &amp; ĐA PHƯƠNG TIỆN</text>

    <rect x="35" y="45" width="150" height="75" rx="6" fill="#f4f4f5"/>
    <rect x="45" y="55" width="60" height="55" fill="#d4d4d8" stroke="#71717a"/>
    <text x="75" y="85" text-anchor="middle" font-size="14">🧵</text>
    <text x="135" y="85" text-anchor="middle" font-size="20">🏺 🌾</text>

    <text x="110" y="142" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#047857">Phối hợp Đa chất liệu</text>
    <text x="15" y="164" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Thổ cẩm, gốm sứ, sợi tự nhiên</text>
    <text x="15" y="182" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Kết hợp Video Art &amp; Sắp đặt</text>
    <text x="15" y="200" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Đối thoại truyền thống - hiện đại</text>
    <text x="15" y="218" font-size="9.5" font-weight="bold" fill="#059669">• Khám phá các vấn đề đương đại</text>
  </g>
</svg>
`;

// 15. Bài 14: Đồ gia dụng từ vật liệu đã qua sử dụng
svgs['bai-14'] = `
<svg viewBox="0 0 800 320" class="w-full h-auto max-h-[340px] select-none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="780" height="300" rx="16" fill="#f0fdf4" class="dark:fill-slate-900" stroke="#16a34a" stroke-width="1.5"/>
  <text x="400" y="38" text-anchor="middle" font-size="14" font-weight="800" fill="#15803d" class="dark:fill-green-400">
    QUY TRÌNH NÂNG CẤP TUẦN HOÀN (UPCYCLING) ĐÈN BÀN GIA DỤNG
  </text>

  <!-- 4-step Upcycling Process -->
  <!-- Step 1: Thu gom & Làm sạch -->
  <g transform="translate(30, 60)">
    <rect x="0" y="0" width="168" height="225" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#16a34a" stroke-width="1.2"/>
    <rect x="0" y="0" width="168" height="28" rx="12" fill="#22c55e"/>
    <text x="84" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">1. XỬ LÍ AN TOÀN</text>
    <circle cx="84" cy="65" r="24" fill="#dcfce7"/>
    <text x="84" y="72" text-anchor="middle" font-size="20">🍾 🧼</text>
    <text x="84" y="105" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#15803d">Khử khuẩn &amp; Mài cạnh</text>
    <text x="12" y="128" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Thu gom chai thuỷ tinh, hộp thiếc</text>
    <text x="12" y="146" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Rửa sạch xà phòng, phơi khô</text>
    <text x="12" y="164" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Mài nhẵn mọi mép sắc nhọn</text>
    <text x="12" y="184" font-size="9.5" font-weight="bold" fill="#dc2626">• Tuyệt đối an toàn tiếp xúc</text>
  </g>

  <!-- Step 2: Thiết kế tạo dáng -->
  <g transform="translate(218, 60)">
    <rect x="0" y="0" width="168" height="225" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#16a34a" stroke-width="1.2"/>
    <rect x="0" y="0" width="168" height="28" rx="12" fill="#22c55e"/>
    <text x="84" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">2. THIẾT KẾ DÁNG</text>
    <circle cx="84" cy="65" r="24" fill="#dcfce7"/>
    <text x="84" y="72" text-anchor="middle" font-size="20">📐</text>
    <text x="84" y="105" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#15803d">Bản vẽ Cấu trúc</text>
    <text x="12" y="128" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Thân đèn: Chai thuỷ tinh làm trụ</text>
    <text x="12" y="146" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Chụp đèn: Bìa carton xẻ rãnh</text>
    <text x="12" y="164" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Đế gỗ thông ổn định trọng tâm</text>
    <text x="12" y="184" font-size="9.5" font-weight="bold" fill="#15803d">• Thẩm mĩ phong cách Vintage</text>
  </g>

  <!-- Step 3: Quấn dây trang trí -->
  <g transform="translate(406, 60)">
    <rect x="0" y="0" width="168" height="225" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#16a34a" stroke-width="1.2"/>
    <rect x="0" y="0" width="168" height="28" rx="12" fill="#22c55e"/>
    <text x="84" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">3. TẠO HÌNH CHI TIẾT</text>
    <circle cx="84" cy="65" r="24" fill="#dcfce7"/>
    <text x="84" y="72" text-anchor="middle" font-size="20">🧶 🪵</text>
    <text x="84" y="105" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#15803d">Gia công Vật liệu</text>
    <text x="12" y="128" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Quấn dây sợi đay quanh thân chai</text>
    <text x="12" y="146" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Khoét lỗ thông hơi trên chụp đèn</text>
    <text x="12" y="164" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Liên kết bằng keo nến chắc chắn</text>
    <text x="12" y="184" font-size="9.5" font-weight="bold" fill="#15803d">• Che giấu dấu vết rác thải</text>
  </g>

  <!-- Step 4: Lắp điện an toàn -->
  <g transform="translate(594, 60)">
    <rect x="0" y="0" width="176" height="225" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#16a34a" stroke-width="1.2"/>
    <rect x="0" y="0" width="176" height="28" rx="12" fill="#22c55e"/>
    <text x="88" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">4. LẮP ĐÈN AN TOÀN</text>
    <circle cx="88" cy="65" r="24" fill="#dcfce7"/>
    <text x="88" y="72" text-anchor="middle" font-size="20">💡 🔌</text>
    <text x="88" y="105" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#15803d">Hoàn thiện Công năng</text>
    <text x="12" y="128" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Lắp bóng LED toả nhiệt thấp</text>
    <text x="12" y="146" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Nguồn USB 5V chống giật</text>
    <text x="12" y="164" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Thử nghiệm độ toả sáng dịu mắt</text>
    <text x="12" y="184" font-size="9.5" font-weight="bold" fill="#16a34a">• Giá trị cao hơn nguyên bản</text>
  </g>
</svg>
`;

// 16. Bài 15: Ngành, nghề liên quan đến mĩ thuật ứng dụng
svgs['bai-15'] = `
<svg viewBox="0 0 800 320" class="w-full h-auto max-h-[340px] select-none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="780" height="300" rx="16" fill="#eef2ff" class="dark:fill-slate-900" stroke="#4f46e5" stroke-width="1.5"/>
  <text x="400" y="38" text-anchor="middle" font-size="14" font-weight="800" fill="#3730a3" class="dark:fill-indigo-400">
    HỆ SINH THÁI CÁC NGÀNH NGHỀ MĨ THUẬT ỨNG DỤNG THỜI ĐẠI 4.0
  </text>

  <!-- 4 Core Applied Art Pillars -->
  <!-- Pillar 1: Graphic & Brand -->
  <g transform="translate(30, 55)">
    <rect x="0" y="0" width="168" height="235" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#4f46e5" stroke-width="1.2"/>
    <rect x="0" y="0" width="168" height="30" rx="12" fill="#4338ca"/>
    <text x="84" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">THIẾT KẾ ĐỒ HOẠ</text>
    <circle cx="84" cy="65" r="24" fill="#e0e7ff"/>
    <text x="84" y="72" text-anchor="middle" font-size="20">🖥️</text>
    <text x="84" y="108" text-anchor="middle" font-size="11" font-weight="bold" fill="#3730a3">Graphic Design</text>
    <text x="12" y="132" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Nhận diện thương hiệu (Logo)</text>
    <text x="12" y="150" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Bao bì sản phẩm thương mại</text>
    <text x="12" y="168" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Sách báo, poster truyền thông</text>
    <text x="12" y="186" font-size="9.5" font-weight="bold" fill="#4f46e5">• Đồ hoạ kĩ thuật số</text>
    <rect x="15" y="205" width="138" height="20" rx="6" fill="#e0e7ff"/>
    <text x="84" y="219" text-anchor="middle" font-size="9" font-weight="bold" fill="#312e81">Phần mềm: Ps, Ai, InDesign</text>
  </g>

  <!-- Pillar 2: UI/UX & Game/Animation -->
  <g transform="translate(218, 55)">
    <rect x="0" y="0" width="168" height="235" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#4f46e5" stroke-width="1.2"/>
    <rect x="0" y="0" width="168" height="30" rx="12" fill="#4338ca"/>
    <text x="84" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">UI/UX &amp; HOẠT HÌNH</text>
    <circle cx="84" cy="65" r="24" fill="#e0e7ff"/>
    <text x="84" y="72" text-anchor="middle" font-size="20">📱</text>
    <text x="84" y="108" text-anchor="middle" font-size="11" font-weight="bold" fill="#3730a3">Digital Experience</text>
    <text x="12" y="132" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Giao diện ứng dụng điện thoại</text>
    <text x="12" y="150" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Trải nghiệm người dùng App/Web</text>
    <text x="12" y="168" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Nhân vật hoạt hình 2D/3D</text>
    <text x="12" y="186" font-size="9.5" font-weight="bold" fill="#4f46e5">• Kĩ xảo điện ảnh VFX</text>
    <rect x="15" y="205" width="138" height="20" rx="6" fill="#e0e7ff"/>
    <text x="84" y="219" text-anchor="middle" font-size="9" font-weight="bold" fill="#312e81">Công cụ: Figma, Blender</text>
  </g>

  <!-- Pillar 3: Nội thất & Không gian -->
  <g transform="translate(406, 55)">
    <rect x="0" y="0" width="168" height="235" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#4f46e5" stroke-width="1.2"/>
    <rect x="0" y="0" width="168" height="30" rx="12" fill="#4338ca"/>
    <text x="84" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">THIẾT KẾ NỘI THẤT</text>
    <circle cx="84" cy="65" r="24" fill="#e0e7ff"/>
    <text x="84" y="72" text-anchor="middle" font-size="20">🛋️</text>
    <text x="84" y="108" text-anchor="middle" font-size="11" font-weight="bold" fill="#3730a3">Interior Design</text>
    <text x="12" y="132" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Phân chia mặt bằng không gian</text>
    <text x="12" y="150" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Phối hợp ánh sáng &amp; vật liệu</text>
    <text x="12" y="168" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Không gian sống, làm việc</text>
    <text x="12" y="186" font-size="9.5" font-weight="bold" fill="#4f46e5">• Tiện nghi và phong cách sống</text>
    <rect x="15" y="205" width="138" height="20" rx="6" fill="#e0e7ff"/>
    <text x="84" y="219" text-anchor="middle" font-size="9" font-weight="bold" fill="#312e81">Phần mềm: 3ds Max, SketchUp</text>
  </g>

  <!-- Pillar 4: Thời trang & Tạo dáng CN -->
  <g transform="translate(594, 55)">
    <rect x="0" y="0" width="176" height="235" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#4f46e5" stroke-width="1.2"/>
    <rect x="0" y="0" width="176" height="30" rx="12" fill="#4338ca"/>
    <text x="88" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">THỜI TRANG &amp; TẠO DÁNG</text>
    <circle cx="88" cy="65" r="24" fill="#e0e7ff"/>
    <text x="88" y="72" text-anchor="middle" font-size="20">👗</text>
    <text x="88" y="108" text-anchor="middle" font-size="11" font-weight="bold" fill="#3730a3">Fashion &amp; Product</text>
    <text x="12" y="132" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Sáng tạo bộ sưu tập trang phục</text>
    <text x="12" y="150" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Tạo dáng phụ kiện, giày túi</text>
    <text x="12" y="168" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Tạo dáng sản phẩm công nghiệp</text>
    <text x="12" y="186" font-size="9.5" font-weight="bold" fill="#4f46e5">• Đón đầu xu hướng toàn cầu</text>
    <rect x="15" y="205" width="146" height="20" rx="6" fill="#e0e7ff"/>
    <text x="88" y="219" text-anchor="middle" font-size="9" font-weight="bold" fill="#312e81">Vật liệu vải &amp; Cơ khí tạo mẫu</text>
  </g>
</svg>
`;

// 17. Bài 16: Đặc trưng nghề nghiệp & Portfolio
svgs['bai-16'] = `
<svg viewBox="0 0 800 320" class="w-full h-auto max-h-[340px] select-none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="780" height="300" rx="16" fill="#faf5ff" class="dark:fill-slate-900" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="400" y="38" text-anchor="middle" font-size="14" font-weight="800" fill="#5b21b6" class="dark:fill-purple-400">
    BẢN ĐỒ NĂNG LỰC NHÀ THIẾT KẾ &amp; CẤU TRÚC HỒ SƠ PORTFOLIO
  </text>

  <!-- Left: 4 Competency Pillars -->
  <g transform="translate(40, 60)">
    <rect x="0" y="0" width="340" height="230" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#7c3aed" stroke-width="1.2"/>
    <text x="170" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#7c3aed" class="dark:fill-purple-300">4 NĂNG LỰC CỐT LÕI (DESIGN THINKING)</text>

    <!-- 4 Quadrants -->
    <rect x="25" y="45" width="135" height="70" rx="8" fill="#f5f3ff" stroke="#c4b5fd" stroke-width="1"/>
    <text x="92" y="68" text-anchor="middle" font-size="10" font-weight="bold" fill="#6d28d9">1. THẤU CẢM (EMPATHY)</text>
    <text x="92" y="86" text-anchor="middle" font-size="8.5" fill="#475569">Hiểu nỗi đau &amp; nhu cầu</text>
    <text x="92" y="100" text-anchor="middle" font-size="8.5" fill="#475569">của người dùng thực tế</text>

    <rect x="180" y="45" width="135" height="70" rx="8" fill="#f5f3ff" stroke="#c4b5fd" stroke-width="1"/>
    <text x="247" y="68" text-anchor="middle" font-size="10" font-weight="bold" fill="#6d28d9">2. KĨ NĂNG SỐ (TECH)</text>
    <text x="247" y="86" text-anchor="middle" font-size="8.5" fill="#475569">Thành thạo phần mềm</text>
    <text x="247" y="100" text-anchor="middle" font-size="8.5" fill="#475569">đồ hoạ &amp; công nghệ mới</text>

    <rect x="25" y="125" width="135" height="70" rx="8" fill="#f5f3ff" stroke="#c4b5fd" stroke-width="1"/>
    <text x="92" y="148" text-anchor="middle" font-size="10" font-weight="bold" fill="#6d28d9">3. LÀM VIỆC NHÓM</text>
    <text x="92" y="166" text-anchor="middle" font-size="8.5" fill="#475569">Phối hợp kĩ sư, marketing</text>
    <text x="92" y="180" text-anchor="middle" font-size="8.5" fill="#475569">và nhà sản xuất</text>

    <rect x="180" y="125" width="135" height="70" rx="8" fill="#f5f3ff" stroke="#c4b5fd" stroke-width="1"/>
    <text x="247" y="148" text-anchor="middle" font-size="10" font-weight="bold" fill="#6d28d9">4. ĐẠO ĐỨC &amp; BẢN QUYỀN</text>
    <text x="247" y="166" text-anchor="middle" font-size="8.5" fill="#475569">Tôn trọng quyền tác giả</text>
    <text x="247" y="180" text-anchor="middle" font-size="8.5" fill="#475569">Trung thực, không đạo nhái</text>

    <text x="170" y="215" text-anchor="middle" font-size="9" fill="#64748b" class="dark:fill-slate-400">Thiết kế là giải quyết vấn đề của con người bằng cái đẹp</text>
  </g>

  <!-- Right: Portfolio Structure -->
  <g transform="translate(410, 60)">
    <rect x="0" y="0" width="350" height="230" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#7c3aed" stroke-width="1.2"/>
    <text x="175" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#7c3aed" class="dark:fill-purple-300">CẤU TRÚC CUỐN HỒ SƠ NĂNG LỰC (PORTFOLIO)</text>

    <!-- Isometric Portfolio Book -->
    <rect x="35" y="45" width="130" height="150" rx="6" fill="#f3e8ff" stroke="#7c3aed" stroke-width="2"/>
    <rect x="35" y="45" width="20" height="150" rx="4" fill="#6d28d9"/>
    <text x="100" y="90" text-anchor="middle" font-size="12" font-weight="900" fill="#6d28d9">MY ART</text>
    <text x="100" y="105" text-anchor="middle" font-size="9" font-weight="bold" fill="#7c3aed">PORTFOLIO</text>
    <circle cx="100" cy="140" r="16" fill="#c4b5fd"/>
    <text x="100" y="145" text-anchor="middle" font-size="12">🎨</text>

    <!-- Page Content Breakdown -->
    <rect x="180" y="50" width="150" height="30" rx="6" fill="#fdf4ff" stroke="#d946ef" stroke-width="1"/>
    <text x="255" y="68" text-anchor="middle" font-size="9" font-weight="bold" fill="#a21caf">1. Giới thiệu bản thân &amp; Sở thích</text>

    <rect x="180" y="90" width="150" height="30" rx="6" fill="#fdf4ff" stroke="#d946ef" stroke-width="1"/>
    <text x="255" y="108" text-anchor="middle" font-size="9" font-weight="bold" fill="#a21caf">2. Dự án tuyển chọn (4-6 bài)</text>

    <rect x="180" y="130" width="150" height="30" rx="6" fill="#fdf4ff" stroke="#d946ef" stroke-width="1"/>
    <text x="255" y="148" text-anchor="middle" font-size="9" font-weight="bold" fill="#a21caf">3. Bản vẽ phác thảo &amp; Quy trình</text>

    <rect x="180" y="170" width="150" height="30" rx="6" fill="#fdf4ff" stroke="#d946ef" stroke-width="1"/>
    <text x="255" y="188" text-anchor="middle" font-size="9" font-weight="bold" fill="#a21caf">4. Định hướng nghề tương lai</text>

    <text x="175" y="215" text-anchor="middle" font-size="9" fill="#64748b" class="dark:fill-slate-400">Tấm hộ chiếu khẳng định năng lực nghệ thuật cá nhân</text>
  </g>
</svg>
`;

// 18. Triển lãm Cuối Năm
svgs['trien-lam-2'] = `
<svg viewBox="0 0 800 320" class="w-full h-auto max-h-[340px] select-none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="780" height="300" rx="16" fill="#fdf4ff" class="dark:fill-slate-900" stroke="#c026d3" stroke-width="1.5"/>
  <text x="400" y="38" text-anchor="middle" font-size="14" font-weight="800" fill="#a21caf" class="dark:fill-fuchsia-400">
    TRIỂN LÃM TỔNG KẾT VÀ BÁO CÁO DỰ ÁN HƯỚNG NGHIỆP TỐT NGHIỆP THCS
  </text>

  <!-- Complete Exhibition Festival Hall -->
  <g transform="translate(40, 55)">
    <rect x="0" y="0" width="720" height="235" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#c026d3" stroke-width="1.2"/>

    <!-- Festival Banners -->
    <rect x="40" y="20" width="640" height="25" rx="6" fill="#c026d3"/>
    <text x="360" y="37" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">
      NGÀY HỘI TRIỂN LÃM SÁNG TẠO MĨ THUẬT LỚP 9 • DẤU ẤN TRƯỞNG THÀNH NGHỆ THUẬT
    </text>

    <!-- Zone A: Hội hoạ & Điêu khắc -->
    <rect x="40" y="60" width="200" height="120" rx="8" fill="#fae8ff" stroke="#e879f9" stroke-width="1.2"/>
    <text x="140" y="80" text-anchor="middle" font-size="10" font-weight="bold" fill="#86198f">KHU A: TẠO HÌNH NGHỆ THUẬT</text>
    <rect x="60" y="95" width="45" height="50" fill="#f43f5e" stroke="#ffffff"/>
    <text x="82" y="125" text-anchor="middle" font-size="8" fill="#ffffff">Tranh</text>
    <rect x="120" y="105" width="35" height="40" rx="4" fill="#fb923c" stroke="#ffffff"/>
    <text x="137" y="130" text-anchor="middle" font-size="8" fill="#ffffff">Phù điêu</text>
    <rect x="170" y="95" width="50" height="50" rx="4" fill="#2dd4bf" stroke="#ffffff"/>
    <text x="195" y="125" text-anchor="middle" font-size="8" fill="#ffffff">Rối nước</text>
    <text x="140" y="168" text-anchor="middle" font-size="8.5" fill="#475569">Tranh cuộc sống • Đất nặn • Rối</text>

    <!-- Zone B: Mĩ thuật ứng dụng & Thiết kế xanh -->
    <rect x="260" y="60" width="200" height="120" rx="8" fill="#fdf2f8" stroke="#f472b6" stroke-width="1.2"/>
    <text x="360" y="80" text-anchor="middle" font-size="10" font-weight="bold" fill="#9d174d">KHU B: THIẾT KẾ ỨNG DỤNG</text>
    <text x="290" y="125" font-size="20">👜</text>
    <text x="345" y="125" font-size="20">📱</text>
    <text x="400" y="125" font-size="20">💡</text>
    <text x="360" y="168" text-anchor="middle" font-size="8.5" fill="#475569">Phụ kiện • Giá đỡ • Đèn Upcycling</text>

    <!-- Zone C: Portfolio & Gian hàng hướng nghiệp -->
    <rect x="480" y="60" width="200" height="120" rx="8" fill="#eff6ff" stroke="#60a5fa" stroke-width="1.2"/>
    <text x="580" y="80" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">KHU C: PORTFOLIO &amp; HƯỚNG NGHIỆP</text>
    <text x="515" y="125" font-size="22">📚</text>
    <text x="570" y="125" font-size="22">🎓</text>
    <text x="625" y="125" font-size="22">🤝</text>
    <text x="580" y="168" text-anchor="middle" font-size="8.5" fill="#475569">Hồ sơ cá nhân • Thuyết trình dự án</text>

    <!-- Guestbook & Interaction -->
    <rect x="40" y="190" width="640" height="32" rx="6" fill="#f5f3ff" stroke="#c084fc" stroke-width="1"/>
    <text x="360" y="210" text-anchor="middle" font-size="10" font-weight="bold" fill="#6b21a8">
      📖 Sổ cảm tưởng Guestbook • Phiếu bình chọn tác phẩm truyền cảm hứng • Kết nối phụ huynh &amp; nhà trường
    </text>
  </g>
</svg>
`;

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/mithuat9_svgs.json', JSON.stringify(svgs, null, 2), 'utf8');
console.log('Successfully generated 18 bespoke SVGs for Mĩ thuật 9 in mithuat9_svgs.json');
