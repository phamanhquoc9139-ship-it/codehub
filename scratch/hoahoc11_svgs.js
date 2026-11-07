// scratch/hoahoc11_svgs.js
// 7 sơ đồ trực quan SVG chất lượng cao cho 6 chương Hóa học 11 KNTT

module.exports = {
  1: {
    title: "Sơ đồ chuyển dịch cân bằng Le Chatelier (Chương 1)",
    note: "Nguyên lí Le Chatelier: Khi thay đổi nồng độ, nhiệt độ, áp suất, cân bằng tự chuyển dịch theo chiều làm giảm tác động bên ngoài. Xúc tác không làm chuyển dịch cân bằng.",
    svg: `<svg viewBox="0 0 860 210" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrTeal" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#0d9488" />
        </marker>
        <marker id="arrAmber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#f59e0b" />
        </marker>
      </defs>
      <rect width="860" height="210" rx="16" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
      
      <!-- Box 1: Nồng độ -->
      <rect x="25" y="25" width="185" height="160" rx="12" fill="#f0fdfa" class="dark:fill-teal-950/30" stroke="#0d9488" stroke-width="1.5" />
      <text x="117" y="52" text-anchor="middle" font-weight="bold" font-size="12" fill="#0f766e" class="dark:fill-teal-300">NỒNG ĐỘ</text>
      <text x="35" y="75" font-size="10" font-weight="bold" fill="#0f766e" class="dark:fill-teal-300">• Tăng nồng độ chất:</text>
      <text x="45" y="92" font-size="9" fill="#134e4a" class="dark:fill-teal-400">Dịch chuyển theo chiều</text>
      <text x="45" y="106" font-size="9" font-weight="bold" fill="#0d9488">TIÊU THỤ bớt chất đó</text>
      <text x="35" y="130" font-size="10" font-weight="bold" fill="#0f766e" class="dark:fill-teal-300">• Giảm nồng độ chất:</text>
      <text x="45" y="147" font-size="9" fill="#134e4a" class="dark:fill-teal-400">Dịch chuyển theo chiều</text>
      <text x="45" y="161" font-size="9" font-weight="bold" fill="#0d9488">TẠO THÊM chất đó</text>

      <!-- Box 2: Nhiệt độ -->
      <rect x="230" y="25" width="185" height="160" rx="12" fill="#fffbeb" class="dark:fill-amber-950/30" stroke="#f59e0b" stroke-width="1.5" />
      <text x="322" y="52" text-anchor="middle" font-weight="bold" font-size="12" fill="#b45309" class="dark:fill-amber-300">NHIỆT ĐỘ</text>
      <text x="240" y="75" font-size="10" font-weight="bold" fill="#b45309" class="dark:fill-amber-300">• Tăng nhiệt độ (đun nóng):</text>
      <text x="250" y="92" font-size="9" fill="#78350f" class="dark:fill-amber-400">Dịch chuyển theo chiều</text>
      <text x="250" y="106" font-size="9" font-weight="bold" fill="#d97706">THU NHIỆT (ΔH &gt; 0)</text>
      <text x="240" y="130" font-size="10" font-weight="bold" fill="#b45309" class="dark:fill-amber-300">• Giảm nhiệt độ (làm lạnh):</text>
      <text x="250" y="147" font-size="9" fill="#78350f" class="dark:fill-amber-400">Dịch chuyển theo chiều</text>
      <text x="250" y="161" font-size="9" font-weight="bold" fill="#d97706">TOẢ NHIỆT (ΔH &lt; 0)</text>

      <!-- Box 3: Áp suất -->
      <rect x="435" y="25" width="195" height="160" rx="12" fill="#eff6ff" class="dark:fill-blue-950/30" stroke="#3b82f6" stroke-width="1.5" />
      <text x="532" y="52" text-anchor="middle" font-weight="bold" font-size="12" fill="#1d4ed8" class="dark:fill-blue-300">ÁP SUẤT (HỆ KHÍ)</text>
      <text x="445" y="75" font-size="10" font-weight="bold" fill="#1d4ed8" class="dark:fill-blue-300">• Tăng áp suất chung:</text>
      <text x="455" y="92" font-size="9" fill="#1e3a8a" class="dark:fill-blue-400">Dịch chuyển theo chiều</text>
      <text x="455" y="106" font-size="9" font-weight="bold" fill="#2563eb">GIẢM SỐ MOL KHÍ</text>
      <text x="445" y="130" font-size="10" font-weight="bold" fill="#1d4ed8" class="dark:fill-blue-300">• Giảm áp suất chung:</text>
      <text x="455" y="147" font-size="9" fill="#1e3a8a" class="dark:fill-blue-400">Dịch chuyển theo chiều</text>
      <text x="455" y="161" font-size="9" font-weight="bold" fill="#2563eb">TĂNG SỐ MOL KHÍ</text>

      <!-- Box 4: Chất xúc tác -->
      <rect x="650" y="25" width="185" height="160" rx="12" fill="#fdf2f8" class="dark:fill-pink-950/30" stroke="#ec4899" stroke-width="1.5" />
      <text x="742" y="52" text-anchor="middle" font-weight="bold" font-size="12" fill="#be185d" class="dark:fill-pink-300">CHẤT XÚC TÁC</text>
      <text x="660" y="78" font-size="10" font-weight="bold" fill="#be185d" class="dark:fill-pink-300">• Tăng tốc độ vt và vn:</text>
      <text x="670" y="96" font-size="9" fill="#831843" class="dark:fill-pink-400">Làm giảm năng lượng hoạt hoá,</text>
      <text x="670" y="110" font-size="9" fill="#831843" class="dark:fill-pink-400">giúp nhanh đạt cân bằng.</text>
      <text x="660" y="135" font-size="10" font-weight="bold" fill="#be185d" class="dark:fill-pink-300">• KHÔNG đổi vị trí CB:</text>
      <text x="670" y="152" font-size="9" font-weight="bold" fill="#db2777">KHÔNG làm đổi Kc</text>
      <text x="670" y="166" font-size="9" fill="#831843" class="dark:fill-pink-400">và hiệu suất phản ứng.</text>
    </svg>`
  },

  2: {
    title: "Sơ đồ công nghệ Haber-Bosch và Phương pháp Tiếp xúc (Chương 2)",
    note: "Hai quy trình hoá chất cơ bản nhất: Tổng hợp NH3 từ N2 + H2 (450°C, 200 bar, Fe) và Sản xuất H2SO4 qua 3 giai đoạn tiếp xúc.",
    svg: `<svg viewBox="0 0 860 210" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrInd" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#6366f1" />
        </marker>
        <marker id="arrEme" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#059669" />
        </marker>
      </defs>
      <rect width="860" height="210" rx="16" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />

      <!-- Cột trái: Haber-Bosch -->
      <rect x="25" y="20" width="380" height="170" rx="12" fill="#eef2ff" class="dark:fill-indigo-950/30" stroke="#6366f1" stroke-width="1.5" />
      <text x="215" y="44" text-anchor="middle" font-weight="bold" font-size="12" fill="#4338ca" class="dark:fill-indigo-300">TỔNG HỢP NH3 (HABER - BOSCH)</text>
      <rect x="45" y="58" width="130" height="40" rx="8" fill="#ffffff" class="dark:fill-slate-800" stroke="#818cf8" />
      <text x="110" y="78" text-anchor="middle" font-size="10" font-weight="bold" fill="#312e81" class="dark:fill-indigo-200">N2(g) + 3H2(g)</text>
      <text x="110" y="91" text-anchor="middle" font-size="8" fill="#64748b">Tỉ lệ mol 1 : 3</text>

      <path d="M 175 78 L 220 78" stroke="#6366f1" stroke-width="2" marker-end="url(#arrInd)" />

      <rect x="225" y="58" width="160" height="40" rx="8" fill="#4f46e5" />
      <text x="305" y="76" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">THÁP PHẢN ỨNG</text>
      <text x="305" y="89" text-anchor="middle" font-size="8" fill="#e0e7ff">400-450°C • 150-200 bar • Fe</text>

      <path d="M 305 98 L 305 125" stroke="#6366f1" stroke-width="2" marker-end="url(#arrInd)" />

      <rect x="180" y="125" width="205" height="45" rx="8" fill="#ffffff" class="dark:fill-slate-800" stroke="#818cf8" />
      <text x="282" y="145" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">2NH3(g) (ΔH = -92 kJ)</text>
      <text x="282" y="158" text-anchor="middle" font-size="8" fill="#64748b">Ngưng tụ hoá lỏng tách NH3</text>

      <!-- Cột phải: Phương pháp Tiếp xúc H2SO4 -->
      <rect x="430" y="20" width="405" height="170" rx="12" fill="#ecfdf5" class="dark:fill-emerald-950/30" stroke="#059669" stroke-width="1.5" />
      <text x="632" y="44" text-anchor="middle" font-weight="bold" font-size="12" fill="#065f46" class="dark:fill-emerald-300">SẢN XUẤT H2SO4 (PHƯƠNG PHÁP TIẾP XÚC)</text>

      <!-- 3 Giai đoạn -->
      <rect x="445" y="60" width="105" height="90" rx="8" fill="#ffffff" class="dark:fill-slate-800" stroke="#34d399" />
      <text x="497" y="78" text-anchor="middle" font-size="9" font-weight="bold" fill="#047857">GIAI ĐOẠN 1</text>
      <text x="497" y="93" text-anchor="middle" font-size="8" fill="#334155" class="dark:fill-slate-300">S hoặc FeS2</text>
      <text x="497" y="106" text-anchor="middle" font-size="8" fill="#334155" class="dark:fill-slate-300">Đốt trong O2</text>
      <text x="497" y="130" text-anchor="middle" font-size="9" font-weight="bold" fill="#0d9488">Tạo khí SO2</text>

      <path d="M 550 105 L 565 105" stroke="#059669" stroke-width="2" marker-end="url(#arrEme)" />

      <rect x="570" y="60" width="115" height="90" rx="8" fill="#ffffff" class="dark:fill-slate-800" stroke="#34d399" />
      <text x="627" y="78" text-anchor="middle" font-size="9" font-weight="bold" fill="#047857">GIAI ĐOẠN 2</text>
      <text x="627" y="93" text-anchor="middle" font-size="8" fill="#334155" class="dark:fill-slate-300">2SO2 + O2</text>
      <text x="627" y="106" text-anchor="middle" font-size="8" fill="#334155" class="dark:fill-slate-300">450°C, xt V2O5</text>
      <text x="627" y="130" text-anchor="middle" font-size="9" font-weight="bold" fill="#0d9488">Tạo khí SO3</text>

      <path d="M 685 105 L 700 105" stroke="#059669" stroke-width="2" marker-end="url(#arrEme)" />

      <rect x="705" y="60" width="115" height="90" rx="8" fill="#ffffff" class="dark:fill-slate-800" stroke="#34d399" />
      <text x="762" y="78" text-anchor="middle" font-size="9" font-weight="bold" fill="#047857">GIAI ĐOẠN 3</text>
      <text x="762" y="93" text-anchor="middle" font-size="8" fill="#334155" class="dark:fill-slate-300">Hấp thụ bằng</text>
      <text x="762" y="106" text-anchor="middle" font-size="8" fill="#334155" class="dark:fill-slate-300">H2SO4 đặc (98%)</text>
      <text x="762" y="130" text-anchor="middle" font-size="9" font-weight="bold" fill="#0d9488">Oleum -&gt; H2SO4</text>
    </svg>`
  },

  3: {
    title: "Phổ hồng ngoại IR và Bảng nhận diện Nhóm chức (Chương 3)",
    note: "Mỗi nhóm chức hấp thụ bức xạ hồng ngoại ở một dải số sóng đặc trưng: O-H alcohol (3500-3200), O-H acid (3300-2500), C=O carbonyl (1750-1660 cm^-1).",
    svg: `<svg viewBox="0 0 860 190" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <rect width="860" height="190" rx="16" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
      <text x="430" y="32" text-anchor="middle" font-weight="bold" font-size="12" fill="#0f766e" class="dark:fill-teal-300">CÁC DẢI HẤP THỤ ĐẶC TRƯNG TRÊN PHỔ HỒNG NGOẠI (IR, cm⁻¹)</text>

      <!-- 4 Vùng phổ chính -->
      <rect x="25" y="48" width="185" height="120" rx="10" fill="#f0fdfa" class="dark:fill-teal-950/30" stroke="#14b8a6" />
      <text x="117" y="70" text-anchor="middle" font-weight="bold" font-size="11" fill="#0f766e">O-H ALCOHOL / PHENOL</text>
      <text x="117" y="92" text-anchor="middle" font-size="12" font-weight="bold" fill="#0d9488">3500 – 3200 cm⁻¹</text>
      <text x="117" y="112" text-anchor="middle" font-size="9" fill="#134e4a">Dải hấp thụ rộng (broad)</text>
      <text x="117" y="128" text-anchor="middle" font-size="8" fill="#64748b">Do liên kết hydrogen liên phân tử</text>

      <rect x="230" y="48" width="185" height="120" rx="10" fill="#eff6ff" class="dark:fill-blue-950/30" stroke="#3b82f6" />
      <text x="322" y="70" text-anchor="middle" font-weight="bold" font-size="11" fill="#1d4ed8">O-H CARBOXYLIC ACID</text>
      <text x="322" y="92" text-anchor="middle" font-size="12" font-weight="bold" fill="#2563eb">3300 – 2500 cm⁻¹</text>
      <text x="322" y="112" text-anchor="middle" font-size="9" fill="#1e3a8a">Dải rất rộng trùm lên C-H</text>
      <text x="322" y="128" text-anchor="middle" font-size="8" fill="#64748b">Dimer liên kết hydrogen cực mạnh</text>

      <rect x="435" y="48" width="200" height="120" rx="10" fill="#fffbeb" class="dark:fill-amber-950/30" stroke="#f59e0b" />
      <text x="535" y="70" text-anchor="middle" font-weight="bold" font-size="11" fill="#b45309">C=O CARBONYL</text>
      <text x="535" y="92" text-anchor="middle" font-size="12" font-weight="bold" fill="#d97706">1750 – 1660 cm⁻¹</text>
      <text x="535" y="112" text-anchor="middle" font-size="9" fill="#78350f">Tín hiệu peak nhọn, cường độ mạnh</text>
      <text x="535" y="128" text-anchor="middle" font-size="8" fill="#64748b">Aldehyde, Ketone, Acid, Ester</text>

      <rect x="655" y="48" width="180" height="120" rx="10" fill="#fdf2f8" class="dark:fill-pink-950/30" stroke="#ec4899" />
      <text x="745" y="70" text-anchor="middle" font-weight="bold" font-size="11" fill="#be185d">C=C &amp; C≡C (NỐI BỘI)</text>
      <text x="745" y="92" text-anchor="middle" font-size="11" font-weight="bold" fill="#db2777">C=C: 1680 – 1600</text>
      <text x="745" y="108" text-anchor="middle" font-size="11" font-weight="bold" fill="#db2777">C≡C: 2260 – 2100</text>
      <text x="745" y="128" text-anchor="middle" font-size="8" fill="#64748b">Nhận biết hydrocarbon không no</text>
    </svg>`
  },

  4: {
    title: "Sơ đồ 7 phương pháp tách biệt và tinh chế hữu cơ (Chương 3)",
    note: "Dựa vào độ tan, nhiệt độ sôi, khả năng bay hơi cùng nước và ái lực hấp phụ giữa pha tĩnh và pha động.",
    svg: `<svg viewBox="0 0 860 180" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <rect width="860" height="180" rx="16" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
      <text x="430" y="28" text-anchor="middle" font-weight="bold" font-size="12" fill="#0f766e" class="dark:fill-teal-300">CÁC PHƯƠNG PHÁP TÁCH BIỆT VÀ TINH CHẾ HỢP CHẤT HỮU CƠ</text>

      <!-- 4 Hộp lớn -->
      <rect x="25" y="45" width="185" height="115" rx="10" fill="#f0fdfa" class="dark:fill-teal-950/30" stroke="#14b8a6" />
      <text x="117" y="68" text-anchor="middle" font-weight="bold" font-size="11" fill="#0f766e">CHƯNG CẤT</text>
      <text x="35" y="90" font-size="9" fill="#134e4a">• Khác nhiệt độ sôi</text>
      <text x="35" y="108" font-size="8" fill="#64748b">• Thường: sôi chênh lệch &gt; 20°C</text>
      <text x="35" y="122" font-size="8" fill="#64748b">• Phân đoạn: nhiệt độ sôi gần nhau</text>
      <text x="35" y="136" font-size="8" fill="#64748b">• Lôi cuốn hơi nước: tách tinh dầu</text>

      <rect x="230" y="45" width="185" height="115" rx="10" fill="#eff6ff" class="dark:fill-blue-950/30" stroke="#3b82f6" />
      <text x="322" y="68" text-anchor="middle" font-weight="bold" font-size="11" fill="#1d4ed8">CHIẾT</text>
      <text x="240" y="90" font-size="9" fill="#1e3a8a">• Khác độ tan trong 2 pha</text>
      <text x="240" y="108" font-size="8" fill="#64748b">• Chiết lỏng - lỏng: Phễu chiết tách 2 lớp</text>
      <text x="240" y="122" font-size="8" fill="#64748b">• Chiết lỏng - rắn: Ngâm rượu thuốc,</text>
      <text x="240" y="136" font-size="8" fill="#64748b">chiết màu thảo mộc tự nhiên</text>

      <rect x="435" y="45" width="185" height="115" rx="10" fill="#fffbeb" class="dark:fill-amber-950/30" stroke="#f59e0b" />
      <text x="527" y="68" text-anchor="middle" font-weight="bold" font-size="11" fill="#b45309">KẾT TINH</text>
      <text x="445" y="90" font-size="9" fill="#78350f">• Độ tan đổi theo nhiệt độ</text>
      <text x="445" y="108" font-size="8" fill="#64748b">• Hoà tan nóng tạo bão hoà</text>
      <text x="445" y="122" font-size="8" fill="#64748b">• Lọc nóng loại bỏ cặn bẩn</text>
      <text x="445" y="136" font-size="8" fill="#64748b">• Làm lạnh để chất rắn kết tinh lại</text>

      <rect x="640" y="45" width="195" height="115" rx="10" fill="#fdf2f8" class="dark:fill-pink-950/30" stroke="#ec4899" />
      <text x="737" y="68" text-anchor="middle" font-weight="bold" font-size="11" fill="#be185d">SẮC KÍ CỘT</text>
      <text x="650" y="90" font-size="9" fill="#831843">• Khác ái lực hấp phụ</text>
      <text x="650" y="108" font-size="8" fill="#64748b">• Pha tĩnh: Silica gel / Alumina</text>
      <text x="650" y="122" font-size="8" fill="#64748b">• Pha động: Dung môi lỏng</text>
      <text x="650" y="136" font-size="8" fill="#64748b">• Tách chất khó tách / lượng vi lượng</text>
    </svg>`
  },

  5: {
    title: "Quy tắc cộng Markovnikov và Quy tắc tách Zaitsev (Chương 4 & 5)",
    note: "Quy tắc Markovnikov: H vào C mang nhiều H hơn. Quy tắc Zaitsev: X hoặc OH tách cùng H ở C có bậc cao hơn (ít H hơn) tạo alkene thế nhiều hơn.",
    svg: `<svg viewBox="0 0 860 190" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrMk" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#0d9488" />
        </marker>
        <marker id="arrZt" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#d97706" />
        </marker>
      </defs>
      <rect width="860" height="190" rx="16" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />

      <!-- Khối trái: Markovnikov -->
      <rect x="25" y="20" width="395" height="150" rx="12" fill="#f0fdfa" class="dark:fill-teal-950/30" stroke="#0d9488" stroke-width="1.5" />
      <text x="222" y="44" text-anchor="middle" font-weight="bold" font-size="12" fill="#0f766e" class="dark:fill-teal-300">QUY TẮC CỘNG MARKOVNIKOV (CỘNG VÀO C=C)</text>
      <rect x="45" y="60" width="130" height="35" rx="6" fill="#ffffff" class="dark:fill-slate-800" stroke="#14b8a6" />
      <text x="110" y="82" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f766e">CH2=CH-CH3 + HBr</text>

      <path d="M 180 77 L 225 77" stroke="#0d9488" stroke-width="2" marker-end="url(#arrMk)" />

      <rect x="235" y="55" width="170" height="45" rx="6" fill="#0d9488" />
      <text x="320" y="73" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">CH3-CH(Br)-CH3</text>
      <text x="320" y="88" text-anchor="middle" font-size="9" font-weight="bold" fill="#fef08a">SẢN PHẨM CHÍNH</text>

      <text x="45" y="125" font-size="10" fill="#134e4a" class="dark:fill-teal-300">• H cộng vào C1 mang nhiều H hơn (CH2 -&gt; CH3)</text>
      <text x="45" y="145" font-size="10" fill="#134e4a" class="dark:fill-teal-300">• Br cộng vào C2 mang ít H hơn (CH -&gt; CH-Br)</text>

      <!-- Khối phải: Zaitsev -->
      <rect x="440" y="20" width="395" height="150" rx="12" fill="#fffbeb" class="dark:fill-amber-950/30" stroke="#f59e0b" stroke-width="1.5" />
      <text x="637" y="44" text-anchor="middle" font-weight="bold" font-size="12" fill="#b45309" class="dark:fill-amber-300">QUY TẮC TÁCH ZAITSEV (TÁCH HX HOẶC H2O)</text>
      <rect x="460" y="60" width="135" height="35" rx="6" fill="#ffffff" class="dark:fill-slate-800" stroke="#f59e0b" />
      <text x="527" y="82" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309">CH3-CH2-CH(Br)-CH3</text>

      <path d="M 600 77 L 645 77" stroke="#d97706" stroke-width="2" marker-end="url(#arrZt)" />

      <rect x="655" y="55" width="165" height="45" rx="6" fill="#d97706" />
      <text x="737" y="73" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">CH3-CH=CH-CH3</text>
      <text x="737" y="88" text-anchor="middle" font-size="9" font-weight="bold" fill="#fef08a">SẢN PHẨM CHÍNH</text>

      <text x="460" y="125" font-size="10" fill="#78350f" class="dark:fill-amber-300">• Br tách cùng H ở C bậc cao hơn (C3 ít H hơn)</text>
      <text x="460" y="145" font-size="10" fill="#78350f" class="dark:fill-amber-300">• Tạo alkene có nối đôi thế nhiều nhóm hơn quanh trục</text>
    </svg>`
  },

  6: {
    title: "Bản đồ Chuyển hoá Hữu cơ Tổng hợp (Chương 4, 5, 6)",
    note: "Mối liên kết chuyển hoá tuần tự từ Hydrocarbon đến Dẫn xuất Halogen, Alcohol, Aldehyde, Carboxylic acid và Ester.",
    svg: `<svg viewBox="0 0 860 190" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrMap" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#0d9488" />
        </marker>
      </defs>
      <rect width="860" height="190" rx="16" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
      <text x="430" y="28" text-anchor="middle" font-weight="bold" font-size="12" fill="#0f766e" class="dark:fill-teal-300">BẢN ĐỒ CHUYỂN HOÁ CÁC HỢP CHẤT HỮU CƠ CỐT LÕI</text>

      <!-- Step 1: Alkene -->
      <rect x="25" y="55" width="115" height="55" rx="8" fill="#e0f2fe" stroke="#0284c7" />
      <text x="82" y="78" text-anchor="middle" font-size="10" font-weight="bold" fill="#0369a1">CH2=CH2</text>
      <text x="82" y="95" text-anchor="middle" font-size="8" fill="#0284c7">(Ethylene)</text>

      <path d="M 140 82 L 180 82" stroke="#0d9488" stroke-width="2" marker-end="url(#arrMap)" />
      <text x="160" y="74" text-anchor="middle" font-size="7" fill="#64748b">+H2O, H+</text>

      <!-- Step 2: Alcohol -->
      <rect x="185" y="55" width="125" height="55" rx="8" fill="#ecfdf5" stroke="#10b981" />
      <text x="247" y="78" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">CH3CH2OH</text>
      <text x="247" y="95" text-anchor="middle" font-size="8" fill="#059669">(Ethanol)</text>

      <path d="M 310 82 L 350 82" stroke="#0d9488" stroke-width="2" marker-end="url(#arrMap)" />
      <text x="330" y="74" text-anchor="middle" font-size="7" fill="#64748b">+CuO, t°</text>

      <!-- Step 3: Aldehyde -->
      <rect x="355" y="55" width="120" height="55" rx="8" fill="#fffbeb" stroke="#f59e0b" />
      <text x="415" y="78" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309">CH3CHO</text>
      <text x="415" y="95" text-anchor="middle" font-size="8" fill="#d97706">(Acetaldehyde)</text>

      <path d="M 475 82 L 515 82" stroke="#0d9488" stroke-width="2" marker-end="url(#arrMap)" />
      <text x="495" y="74" text-anchor="middle" font-size="7" fill="#64748b">+O2, xt</text>

      <!-- Step 4: Carboxylic acid -->
      <rect x="520" y="55" width="130" height="55" rx="8" fill="#fef2f2" stroke="#ef4444" />
      <text x="585" y="78" text-anchor="middle" font-size="10" font-weight="bold" fill="#b91c1c">CH3COOH</text>
      <text x="585" y="95" text-anchor="middle" font-size="8" fill="#dc2626">(Acetic acid)</text>

      <path d="M 650 82 L 690 82" stroke="#0d9488" stroke-width="2" marker-end="url(#arrMap)" />
      <text x="670" y="74" text-anchor="middle" font-size="7" fill="#64748b">+C2H5OH, H+</text>

      <!-- Step 5: Ester -->
      <rect x="695" y="55" width="140" height="55" rx="8" fill="#fdf2f8" stroke="#ec4899" />
      <text x="765" y="78" text-anchor="middle" font-size="10" font-weight="bold" fill="#be185d">CH3COOC2H5</text>
      <text x="765" y="95" text-anchor="middle" font-size="8" fill="#db2777">(Ethyl acetate)</text>

      <!-- Chú thích dưới -->
      <rect x="25" y="130" width="810" height="40" rx="8" fill="#ffffff" class="dark:fill-slate-800" stroke="#e2e8f0" />
      <text x="430" y="154" text-anchor="middle" font-size="10" fill="#475569" class="dark:fill-slate-300">Hydrate hoá -&gt; Oxi hoá nhẹ -&gt; Oxi hoá sâu -&gt; Ester hoá thuận nghịch (H2SO4 đặc, t°)</text>
    </svg>`
  },

  7: {
    title: "Cây Nhận biết Hợp chất Hữu cơ bằng Thuốc thử Đặc trưng",
    note: "Hệ thống nhận biết nhanh: Nước Br2 (alkene, alkyne, phenol), AgNO3/NH3 (alk-1-yne, aldehyde), Cu(OH)2 (polyol kề, aldehyde đun), NaHCO3 (acid).",
    svg: `<svg viewBox="0 0 860 190" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <rect width="860" height="190" rx="16" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
      <text x="430" y="28" text-anchor="middle" font-weight="bold" font-size="12" fill="#0f766e" class="dark:fill-teal-300">THUỐC THỬ ĐẶC TRƯNG NHẬN BIẾT CÁC HỢP CHẤT HỮU CƠ</text>

      <rect x="25" y="45" width="185" height="120" rx="10" fill="#fffbeb" stroke="#f59e0b" />
      <text x="117" y="68" text-anchor="middle" font-weight="bold" font-size="10" fill="#b45309">DUNG DỊCH NƯỚC BR2</text>
      <text x="35" y="88" font-size="9" fill="#78350f">• Mất màu nâu đỏ:</text>
      <text x="45" y="103" font-size="8" fill="#64748b">Alkene, Alkyne, Styrene</text>
      <text x="35" y="122" font-size="9" fill="#78350f">• Tạo kết tủa trắng:</text>
      <text x="45" y="137" font-size="8" fill="#64748b">Phenol (2,4,6-tribromophenol)</text>

      <rect x="230" y="45" width="185" height="120" rx="10" fill="#eef2ff" stroke="#6366f1" />
      <text x="322" y="68" text-anchor="middle" font-weight="bold" font-size="10" fill="#4338ca">DUNG DỊCH AGNO3 / NH3</text>
      <text x="240" y="88" font-size="9" fill="#312e81">• Kết tủa vàng nhạt:</text>
      <text x="250" y="103" font-size="8" fill="#64748b">Alk-1-yne (-C≡C-H đầu mạch)</text>
      <text x="240" y="122" font-size="9" fill="#312e81">• Tráng gương bạc sáng:</text>
      <text x="250" y="137" font-size="8" fill="#64748b">Aldehyde (-CHO), Formic acid</text>

      <rect x="435" y="45" width="185" height="120" rx="10" fill="#ecfdf5" stroke="#10b981" />
      <text x="527" y="68" text-anchor="middle" font-weight="bold" font-size="10" fill="#047857">DUNG DỊCH CU(OH)2</text>
      <text x="445" y="88" font-size="9" fill="#065f46">• Dung dịch xanh lam thẫm:</text>
      <text x="455" y="103" font-size="8" fill="#64748b">Polyalcohol có -OH kề (Glycerol)</text>
      <text x="445" y="122" font-size="9" fill="#065f46">• Kết tủa đỏ gạch Cu2O:</text>
      <text x="455" y="137" font-size="8" fill="#64748b">Aldehyde (-CHO) khi đun nóng</text>

      <rect x="640" y="45" width="195" height="120" rx="10" fill="#fdf2f8" stroke="#ec4899" />
      <text x="737" y="68" text-anchor="middle" font-weight="bold" font-size="10" fill="#be185d">DUNG DỊCH NAHCO3 &amp; I2/NAOH</text>
      <text x="650" y="88" font-size="9" fill="#831843">• Sủi bọt khí CO2↑:</text>
      <text x="660" y="103" font-size="8" fill="#64748b">Carboxylic acid (R-COOH)</text>
      <text x="650" y="122" font-size="9" fill="#831843">• Kết tủa vàng CHI3 (Iodoform):</text>
      <text x="660" y="137" font-size="8" fill="#64748b">Methyl ketone (CH3-C=O), Ethanal</text>
    </svg>`
  }
};
