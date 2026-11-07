// scratch/diali12_svgs_grade11_style.js
// Bộ 8 Sơ đồ tư duy & Lược đồ địa lí SVG chuẩn vector sắc nét cho Địa lí 12

const diali12_svgs = {
  svg1_vitri: {
    title: "Phạm vi Lãnh thổ & 5 Vùng Biển Việt Nam",
    caption: "Mô hình quy chế pháp lí 5 vùng biển theo UNCLOS 1982 và Luật Biển Việt Nam",
    svg: `<svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[380px] select-none">
      <defs>
        <linearGradient id="gLand12" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#059669" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="#10b981" stop-opacity="0.35"/>
        </linearGradient>
        <linearGradient id="gSea12" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0284c7" stop-opacity="0.15"/>
          <stop offset="100%" stop-color="#0369a1" stop-opacity="0.3"/>
        </linearGradient>
      </defs>
      <!-- Title Header -->
      <rect x="230" y="15" width="340" height="42" rx="10" fill="#0f172a" class="dark:fill-slate-800"/>
      <text x="400" y="41" text-anchor="middle" font-size="13" font-weight="bold" fill="#38bdf8">5 VÙNG BIỂN THUỘC CHỦ QUYỀN VÀ QUYỀN CHỦ QUYỀN</text>

      <!-- Land profile -->
      <path d="M 30 240 Q 90 120 150 180 T 210 240 L 210 280 L 30 280 Z" fill="url(#gLand12)" stroke="#059669" stroke-width="2"/>
      <text x="110" y="260" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46" class="dark:fill-emerald-300">ĐẤT LIỀN</text>

      <!-- Baseline -->
      <line x1="210" y1="120" x2="210" y2="280" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4"/>
      <text x="210" y="110" text-anchor="middle" font-size="10" font-weight="bold" fill="#dc2626">ĐƯỜNG CƠ SỞ</text>

      <!-- Sea Sections -->
      <!-- 1. Noi thuy -->
      <rect x="150" y="180" width="60" height="100" fill="#38bdf8" opacity="0.2"/>
      <text x="180" y="215" text-anchor="middle" font-size="10" font-weight="bold" fill="#0284c7">Nội thủy</text>

      <!-- 2. Lanh hai (12 hai li) -->
      <rect x="210" y="180" width="90" height="100" fill="url(#gSea12)" stroke="#0284c7" stroke-width="1.5"/>
      <text x="255" y="210" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1" class="dark:fill-sky-300">LÃNH HẢI</text>
      <text x="255" y="230" text-anchor="middle" font-size="10" fill="#475569" class="dark:fill-slate-300">12 hải lí</text>
      <text x="255" y="250" text-anchor="middle" font-size="9" font-weight="bold" fill="#dc2626">Biên giới biển</text>

      <!-- 3. Tiep giap lanh hai (12 hai li tiep) -->
      <rect x="300" y="180" width="90" height="100" fill="#0284c7" opacity="0.1" stroke="#0284c7" stroke-dasharray="2,2"/>
      <text x="345" y="210" text-anchor="middle" font-size="10" font-weight="bold" fill="#0284c7">Tiếp giáp</text>
      <text x="345" y="228" text-anchor="middle" font-size="9" fill="#475569">lãnh hải (12 hl)</text>
      <text x="345" y="248" text-anchor="middle" font-size="9" fill="#64748b">An ninh, Thuế quan</text>

      <!-- 4. Dac quyen kinh te (200 hai li) -->
      <rect x="390" y="180" width="220" height="100" fill="url(#gSea12)" stroke="#0284c7" stroke-width="1"/>
      <text x="500" y="210" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1" class="dark:fill-sky-300">VÙNG ĐẶC QUYỀN KINH TẾ (EEZ)</text>
      <text x="500" y="230" text-anchor="middle" font-size="10" fill="#475569" class="dark:fill-slate-300">200 hải lí tính từ đường cơ sở</text>
      <text x="500" y="250" text-anchor="middle" font-size="9" fill="#64748b">Quyền chủ quyền tài nguyên sinh vật & khoáng sản</text>

      <!-- 5. Them luc dia -->
      <path d="M 210 280 L 760 280 L 760 305 Q 480 310 210 280 Z" fill="#b45309" opacity="0.3" stroke="#b45309"/>
      <text x="485" y="300" text-anchor="middle" font-size="10" font-weight="bold" fill="#92400e" class="dark:fill-amber-300">THỀM LỤC ĐỊA (Đáy biển & lòng đất dưới đáy biển kéo dài đến 200 - 350 hải lí)</text>
    </svg>`
  },

  svg2_giomua: {
    title: "Cơ chế Gió mùa & Sự phân hóa Mùa ở Việt Nam",
    caption: "So sánh Gió mùa mùa đông (Gió mùa Đông Bắc) và Gió mùa mùa hạ (Tây Nam)",
    svg: `<svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[380px] select-none">
      <!-- Col 1: Gio mua mua dong -->
      <g transform="translate(40, 20)">
        <rect width="340" height="260" rx="14" fill="#f0f9ff" class="dark:fill-slate-900" stroke="#0284c7" stroke-width="1.5"/>
        <rect width="340" height="38" rx="14" fill="#0284c7"/>
        <text x="170" y="25" text-anchor="middle" font-size="13" font-weight="bold" fill="#ffffff">❄️ GIÓ MÙA MÙA ĐÔNG (Tháng 11 - 4)</text>
        
        <text x="20" y="68" font-size="11" font-weight="bold" fill="#0369a1">• Nguồn gốc:</text>
        <text x="100" y="68" font-size="11" fill="#334155" class="dark:fill-slate-300">Áp cao Xibia (khối khí cực đới lục địa NPc)</text>
        
        <text x="20" y="98" font-size="11" font-weight="bold" fill="#0369a1">• Hướng gió:</text>
        <text x="100" y="98" font-size="11" fill="#334155" class="dark:fill-slate-300">Đông Bắc (thổi thành từng đợt gió lạnh)</text>

        <text x="20" y="130" font-size="11" font-weight="bold" fill="#0369a1">• Đầu mùa đông:</text>
        <text x="120" y="130" font-size="11" fill="#334155" class="dark:fill-slate-300">Lạnh khô, hanh hao ở miền Bắc</text>

        <text x="20" y="160" font-size="11" font-weight="bold" fill="#0369a1">• Cuối mùa đông:</text>
        <text x="120" y="160" font-size="11" fill="#334155" class="dark:fill-slate-300">Lạnh ẩm, mưa phùn ở đồng bằng ven biển</text>

        <text x="20" y="195" font-size="11" font-weight="bold" fill="#dc2626">• Giới hạn nam:</text>
        <text x="120" y="195" font-size="11" fill="#dc2626" font-weight="bold">Dãy Bạch Mã (16°B) chặn gió mùa ĐB</text>

        <text x="20" y="230" font-size="10" fill="#64748b">→ Phía Nam: Gió Tín phong BBN gây mùa khô sâu sắc</text>
      </g>

      <!-- Col 2: Gio mua mua ha -->
      <g transform="translate(420, 20)">
        <rect width="340" height="260" rx="14" fill="#fef2f2" class="dark:fill-slate-900" stroke="#ef4444" stroke-width="1.5"/>
        <rect width="340" height="38" rx="14" fill="#ef4444"/>
        <text x="170" y="25" text-anchor="middle" font-size="13" font-weight="bold" fill="#ffffff">☀️ GIÓ MÙA MÙA HẠ (Tháng 5 - 10)</text>
        
        <text x="20" y="68" font-size="11" font-weight="bold" fill="#b91c1c">• Đầu mùa hạ:</text>
        <text x="100" y="68" font-size="11" fill="#334155" class="dark:fill-slate-300">Khối khí nhiệt đới ẩm vịnh Băng-gan (TBg)</text>
        <text x="40" y="90" font-size="10" fill="#059669">→ Mưa lớn Nam Bộ & Tây Nguyên</text>
        <text x="40" y="110" font-size="10" fill="#dc2626">→ Gió phơn Tây Nam khô nóng ở Bắc Trung Bộ</text>

        <text x="20" y="142" font-size="11" font-weight="bold" fill="#b91c1c">• Giữa & cuối hạ:</text>
        <text x="110" y="142" font-size="11" fill="#334155" class="dark:fill-slate-300">Áp cao cận chí tuyến bán cầu Nam (Em)</text>
        <text x="40" y="165" font-size="10" fill="#0284c7">→ Vượt xích đạo đổi hướng Tây Nam gây mưa lớn</text>

        <text x="20" y="200" font-size="11" font-weight="bold" fill="#b91c1c">• Dải hội tụ (FIT):</text>
        <text x="120" y="200" font-size="11" fill="#334155" class="dark:fill-slate-300">Gây mưa dầm trên diện rộng và sinh ra bão</text>
        
        <text x="20" y="235" font-size="10" fill="#64748b">→ Bắc Bộ có gió mùa hướng Đông Nam do hút gió</text>
      </g>
    </svg>`
  },

  svg3_mientunhien: {
    title: "3 Miền Địa lí Tự nhiên Việt Nam",
    caption: "Phân hóa cảnh quan theo địa hình, khí hậu và sinh thái 3 miền",
    svg: `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[380px] select-none">
      <!-- 3 Columns -->
      <!-- Miền 1 -->
      <g transform="translate(25, 20)">
        <rect width="230" height="240" rx="12" fill="#f0fdf4" class="dark:fill-slate-900" stroke="#16a34a" stroke-width="1.5"/>
        <rect width="230" height="34" rx="12" fill="#16a34a"/>
        <text x="115" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">MIỀN BẮC & ĐÔNG BẮC BẮC BỘ</text>
        <text x="15" y="60" font-size="10" font-weight="bold" fill="#15803d">Giới hạn:</text>
        <text x="65" y="60" font-size="10" fill="#475569">Tả ngạn sông Hồng</text>
        <text x="15" y="85" font-size="10" font-weight="bold" fill="#15803d">Địa hình:</text>
        <text x="65" y="85" font-size="10" fill="#475569">Đồi núi thấp, 4 cánh cung lớn</text>
        <text x="15" y="110" font-size="10" font-weight="bold" fill="#15803d">Khí hậu:</text>
        <text x="65" y="110" font-size="10" fill="#475569">Mùa đông lạnh nhất cả nước</text>
        <text x="15" y="135" font-size="10" font-weight="bold" fill="#15803d">Khoáng sản:</text>
        <text x="75" y="135" font-size="10" fill="#475569">Giàu than đá, sắt, thiếc, apatit</text>
        <text x="15" y="160" font-size="10" font-weight="bold" fill="#15803d">Sinh vật:</text>
        <text x="65" y="160" font-size="10" fill="#475569">Cận nhiệt đới và ôn đới trên núi</text>
        <text x="15" y="195" font-size="9" fill="#64748b">→ Có vịnh Hạ Long di sản thế giới</text>
      </g>

      <!-- Miền 2 -->
      <g transform="translate(285, 20)">
        <rect width="230" height="240" rx="12" fill="#eff6ff" class="dark:fill-slate-900" stroke="#2563eb" stroke-width="1.5"/>
        <rect width="230" height="34" rx="12" fill="#2563eb"/>
        <text x="115" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">MIỀN TÂY BẮC & BẮC TRUNG BỘ</text>
        <text x="15" y="60" font-size="10" font-weight="bold" fill="#1d4ed8">Giới hạn:</text>
        <text x="65" y="60" font-size="10" fill="#475569">Sông Hồng đến dãy Bạch Mã</text>
        <text x="15" y="85" font-size="10" font-weight="bold" fill="#1d4ed8">Địa hình:</text>
        <text x="65" y="85" font-size="10" fill="#475569">Cao nhất nước (Hoàng Liên Sơn)</text>
        <text x="15" y="110" font-size="10" font-weight="bold" fill="#1d4ed8">Hướng núi:</text>
        <text x="75" y="110" font-size="10" fill="#475569">Tây Bắc – Đông Nam chủ đạo</text>
        <text x="15" y="135" font-size="10" font-weight="bold" fill="#1d4ed8">Khí hậu:</text>
        <text x="65" y="135" font-size="10" fill="#475569">Đông ấm hơn, hạ có gió phơn</text>
        <text x="15" y="160" font-size="10" font-weight="bold" fill="#1d4ed8">Thủy năng:</text>
        <text x="75" y="160" font-size="10" fill="#475569">Tiềm năng thủy điện lớn nhất</text>
        <text x="15" y="195" font-size="9" fill="#64748b">→ Thiên tai: lũ quét, sạt lở, bão lũ</text>
      </g>

      <!-- Miền 3 -->
      <g transform="translate(545, 20)">
        <rect width="230" height="240" rx="12" fill="#fff7ed" class="dark:fill-slate-900" stroke="#ea580c" stroke-width="1.5"/>
        <rect width="230" height="34" rx="12" fill="#ea580c"/>
        <text x="115" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">MIỀN NAM TRUNG BỘ & NAM BỘ</text>
        <text x="15" y="60" font-size="10" font-weight="bold" fill="#c2410c">Giới hạn:</text>
        <text x="65" y="60" font-size="10" fill="#475569">Từ dãy Bạch Mã trở vào Nam</text>
        <text x="15" y="85" font-size="10" font-weight="bold" fill="#c2410c">Địa hình:</text>
        <text x="65" y="85" font-size="10" fill="#475569">Cao nguyên bazan, châu thổ ĐBSCL</text>
        <text x="15" y="110" font-size="10" font-weight="bold" fill="#c2410c">Khí hậu:</text>
        <text x="65" y="110" font-size="10" fill="#475569">Cận xích đạo, nóng quanh năm</text>
        <text x="15" y="135" font-size="10" font-weight="bold" fill="#c2410c">Mùa khô:</text>
        <text x="65" y="135" font-size="10" fill="#475569">Sâu sắc gây thiếu nước, cháy rừng</text>
        <text x="15" y="160" font-size="10" font-weight="bold" fill="#c2410c">Biển đảo:</text>
        <text x="65" y="160" font-size="10" fill="#475569">Vịnh nước sâu, thềm lục địa dầu khí</text>
        <text x="15" y="195" font-size="9" fill="#64748b">→ Vựa lúa, cây công nghiệp và dầu mỏ</text>
      </g>
    </svg>`
  },

  svg4_danso: {
    title: "Chuyển dịch Dân số & Cơ cấu Lao động Việt Nam",
    caption: "Quy mô 100+ triệu dân, thời kì dân số vàng và xu thế già hóa",
    svg: `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[380px] select-none">
      <!-- 4 Pillars of Population -->
      <g transform="translate(30, 25)">
        <rect width="160" height="230" rx="10" fill="#f8fafc" class="dark:fill-slate-900" stroke="#0ea5e9" stroke-width="1.5"/>
        <rect width="160" height="32" rx="10" fill="#0ea5e9"/>
        <text x="80" y="21" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">QUY MÔ & TĂNG</text>
        <text x="80" y="65" text-anchor="middle" font-size="14" font-weight="bold" fill="#0369a1">101,3 triệu</text>
        <text x="80" y="85" text-anchor="middle" font-size="10" fill="#64748b">(Năm 2024)</text>
        <text x="15" y="120" font-size="10" fill="#334155" class="dark:fill-slate-300">• Tỉ lệ tăng dân số chậm lại (~0,9%/năm).</text>
        <text x="15" y="155" font-size="10" fill="#334155" class="dark:fill-slate-300">• Đứng thứ 3 Đông Nam Á và thứ 15 trên thế giới.</text>
      </g>

      <g transform="translate(220, 25)">
        <rect width="160" height="230" rx="10" fill="#f8fafc" class="dark:fill-slate-900" stroke="#10b981" stroke-width="1.5"/>
        <rect width="160" height="32" rx="10" fill="#10b981"/>
        <text x="80" y="21" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">CƠ CẤU TUỔI</text>
        <text x="80" y="65" text-anchor="middle" font-size="12" font-weight="bold" fill="#047857">Dân số Vàng</text>
        <text x="80" y="85" text-anchor="middle" font-size="10" fill="#64748b">(Lao động > 67%)</text>
        <text x="15" y="120" font-size="10" fill="#334155" class="dark:fill-slate-300">• Lợi thế nguồn nhân lực trẻ, dồi dào.</text>
        <text x="15" y="155" font-size="10" fill="#dc2626" font-weight="bold">• Thách thức: Tốc độ già hóa dân số nhanh.</text>
      </g>

      <g transform="translate(410, 25)">
        <rect width="160" height="230" rx="10" fill="#f8fafc" class="dark:fill-slate-900" stroke="#f59e0b" stroke-width="1.5"/>
        <rect width="160" height="32" rx="10" fill="#f59e0b"/>
        <text x="80" y="21" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">PHÂN BỐ DÂN CƯ</text>
        <text x="80" y="65" text-anchor="middle" font-size="13" font-weight="bold" fill="#b45309">305 người/km²</text>
        <text x="80" y="85" text-anchor="middle" font-size="10" fill="#64748b">(Rất không đều)</text>
        <text x="15" y="120" font-size="10" fill="#334155" class="dark:fill-slate-300">• ĐBSH: >1.100 ng/km².</text>
        <text x="15" y="145" font-size="10" fill="#334155" class="dark:fill-slate-300">• Tây Nguyên, Tây Bắc: 100 - 140 ng/km².</text>
        <text x="15" y="175" font-size="10" fill="#334155" class="dark:fill-slate-300">• Đô thị chiếm >42%.</text>
      </g>

      <g transform="translate(600, 25)">
        <rect width="160" height="230" rx="10" fill="#f8fafc" class="dark:fill-slate-900" stroke="#8b5cf6" stroke-width="1.5"/>
        <rect width="160" height="32" rx="10" fill="#8b5cf6"/>
        <text x="80" y="21" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">CHẤT LƯỢNG SỐNG</text>
        <text x="80" y="65" text-anchor="middle" font-size="14" font-weight="bold" fill="#6d28d9">HDI: 0,726</text>
        <text x="80" y="85" text-anchor="middle" font-size="10" fill="#64748b">(Nhóm cao)</text>
        <text x="15" y="120" font-size="10" fill="#334155" class="dark:fill-slate-300">• Tuổi thọ TB: 74,5 tuổi.</text>
        <text x="15" y="145" font-size="10" fill="#334155" class="dark:fill-slate-300">• Tỉ lệ biết chữ > 95%.</text>
        <text x="15" y="175" font-size="10" fill="#334155" class="dark:fill-slate-300">• Chuyển dịch mạnh sang công nghiệp - dịch vụ.</text>
      </g>
    </svg>`
  },

  svg5_coccaukt: {
    title: "Chuyển dịch Cơ cấu Kinh tế Việt Nam Thời kì Đổi mới",
    caption: "Chuyển dịch theo ngành (giảm Nông nghiệp, tăng Công nghiệp - Dịch vụ) và Lãnh thổ",
    svg: `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[380px] select-none">
      <rect x="20" y="15" width="760" height="250" rx="14" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" stroke-width="1"/>
      <text x="400" y="45" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a" class="dark:fill-white">XU THẾ CHUYỂN DỊCH CƠ CẤU GDP THEO NGÀNH (1990 - NAY)</text>

      <!-- Pie / Bar conceptual comparison -->
      <!-- Year 1990 -->
      <g transform="translate(100, 75)">
        <rect width="250" height="40" rx="8" fill="#10b981"/>
        <text x="125" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">Nông - Lâm - Thủy sản: ~38,7% (1990)</text>
        <rect y="50" width="150" height="35" rx="8" fill="#3b82f6"/>
        <text x="75" y="72" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">CN - XD: ~22,7%</text>
        <rect y="95" width="220" height="35" rx="8" fill="#f59e0b"/>
        <text x="110" y="117" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">Dịch vụ: ~38,6%</text>
        <text x="125" y="155" text-anchor="middle" font-size="12" font-weight="bold" fill="#64748b">CƠ CẤU NĂM 1990</text>
      </g>

      <!-- Arrow -->
      <path d="M 400 130 L 440 130 M 430 120 L 440 130 L 430 140" stroke="#0ea5e9" stroke-width="4" fill="none" stroke-linecap="round"/>

      <!-- Year 2024 -->
      <g transform="translate(480, 75)">
        <rect width="90" height="35" rx="8" fill="#10b981"/>
        <text x="45" y="22" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">Nông: ~11,8%</text>
        <rect y="45" width="230" height="40" rx="8" fill="#3b82f6"/>
        <text x="115" y="70" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">CN - Xây dựng: ~37,5%</text>
        <rect y="95" width="260" height="40" rx="8" fill="#f59e0b"/>
        <text x="130" y="120" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">Dịch vụ & Thuế SP: ~50,7%</text>
        <text x="130" y="155" text-anchor="middle" font-size="12" font-weight="bold" fill="#0284c7">CƠ CẤU HIỆN NAY (2024)</text>
      </g>

      <text x="400" y="248" text-anchor="middle" font-size="11" fill="#475569" class="dark:fill-slate-400">→ Chuyển đổi từ nước nông nghiệp lạc hậu sang mô hình công nghiệp hóa, kinh tế số và dịch vụ hiện đại.</text>
    </svg>`
  },

  svg6_nongnghiep: {
    title: "Phân bố Các Vùng Chuyên Canh Nông nghiệp Trọng điểm",
    caption: "Vựa lúa số 1 (ĐBSCL) & Thủ phủ cây công nghiệp lâu năm (Tây Nguyên, Đông Nam Bộ)",
    svg: `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[380px] select-none">
      <g transform="translate(30, 20)">
        <rect width="220" height="240" rx="12" fill="#eff6ff" class="dark:fill-slate-900" stroke="#3b82f6" stroke-width="1.5"/>
        <rect width="220" height="34" rx="12" fill="#3b82f6"/>
        <text x="110" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">VỰA LƯƠNG THỰC LÚA GẠO</text>
        <text x="15" y="60" font-size="11" font-weight="bold" fill="#1d4ed8">• ĐBS Cửu Long:</text>
        <text x="25" y="80" font-size="10" fill="#475569">>50% sản lượng lúa cả nước, >90% gạo xuất khẩu.</text>
        <text x="15" y="110" font-size="11" font-weight="bold" fill="#1d4ed8">• ĐB Sông Hồng:</text>
        <text x="25" y="130" font-size="10" fill="#475569">Vùng thâm canh lúa năng suất cao nhất cả nước.</text>
        <text x="15" y="160" font-size="11" font-weight="bold" fill="#059669">• Định hướng:</text>
        <text x="25" y="180" font-size="10" fill="#475569">Lúa chất lượng cao (ST25), giảm lượng phát thải carbon.</text>
      </g>

      <g transform="translate(290, 20)">
        <rect width="220" height="240" rx="12" fill="#fef3c7" class="dark:fill-slate-900" stroke="#d97706" stroke-width="1.5"/>
        <rect width="220" height="34" rx="12" fill="#d97706"/>
        <text x="110" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">CÂY CÔNG NGHIỆP LÂU NĂM</text>
        <text x="15" y="60" font-size="11" font-weight="bold" fill="#b45309">• Tây Nguyên:</text>
        <text x="25" y="80" font-size="10" fill="#475569">Số 1 về cà phê (Robusta), hồ tiêu, chè Lâm Đồng.</text>
        <text x="15" y="110" font-size="11" font-weight="bold" fill="#b45309">• Đông Nam Bộ:</text>
        <text x="25" y="130" font-size="10" fill="#475569">Số 1 về cao su mủ (Bình Phước, Đồng Nai), điều, hồ tiêu.</text>
        <text x="15" y="160" font-size="11" font-weight="bold" fill="#b45309">• TDMN Bắc Bộ:</text>
        <text x="25" y="180" font-size="10" fill="#475569">Số 1 về chè búp (Thái Nguyên, Phú Thọ, Sơn La).</text>
      </g>

      <g transform="translate(550, 20)">
        <rect width="220" height="240" rx="12" fill="#f0fdf4" class="dark:fill-slate-900" stroke="#16a34a" stroke-width="1.5"/>
        <rect width="220" height="34" rx="12" fill="#16a34a"/>
        <text x="110" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">THỦY SẢN & ĂN QUẢ</text>
        <text x="15" y="60" font-size="11" font-weight="bold" fill="#15803d">• Nuôi trồng thủy sản:</text>
        <text x="25" y="80" font-size="10" fill="#475569">ĐBSCL dẫn đầu tôm cá tra; DH Nam Trung Bộ nuôi tôm hùm.</text>
        <text x="15" y="115" font-size="11" font-weight="bold" fill="#15803d">• Vùng cây ăn quả:</text>
        <text x="25" y="135" font-size="10" fill="#475569">ĐBSCL (xoài, bưởi, sầu riêng); Đông Bắc (vải thiều, mận, nhãn).</text>
        <text x="15" y="170" font-size="11" font-weight="bold" fill="#15803d">• Xu hướng:</text>
        <text x="25" y="190" font-size="10" fill="#475569">Chứng nhận VietGAP, GlobalGAP vươn ra thế giới.</text>
      </g>
    </svg>`
  },

  svg7_congnghiep: {
    title: "Không gian Công nghiệp & Các Vùng Động lực Kinh tế",
    caption: "Hai trung tâm hạt nhân TP.HCM, Hà Nội và mạng lưới khu công nghiệp ven biển",
    svg: `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[380px] select-none">
      <rect x="25" y="15" width="750" height="250" rx="14" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" stroke-width="1"/>
      <text x="400" y="42" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a" class="dark:fill-white">HAI VÙNG TẬP TRUNG CÔNG NGHIỆP LỚN NHẤT CẢ NƯỚC</text>

      <!-- North Zone -->
      <g transform="translate(60, 65)">
        <rect width="310" height="180" rx="12" fill="#eff6ff" class="dark:fill-blue-950/30" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="155" y="30" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">VÙNG PHÍA BẮC (ĐBSH & PHỤ CẬN)</text>
        <text x="15" y="60" font-size="11" fill="#334155" class="dark:fill-slate-300">• Hạt nhân: <strong>Hà Nội</strong> (công nghiệp quy mô rất lớn).</text>
        <text x="15" y="85" font-size="11" fill="#334155" class="dark:fill-slate-300">• Các hướng chuyên môn hóa:</text>
        <text x="25" y="105" font-size="10" fill="#64748b">- Hải Phòng - Quảng Ninh: Cơ khí, đóng tàu, hóa chất, than.</text>
        <text x="25" y="125" font-size="10" fill="#64748b">- Bắc Ninh - Bắc Giang - Thái Nguyên: Điện tử, vi mạch bán dẫn.</text>
        <text x="25" y="145" font-size="10" fill="#64748b">- Đáp Cầu - Bắc Giang: Thủy tinh, phân hóa học.</text>
        <text x="25" y="165" font-size="10" fill="#64748b">- Nam Định - Ninh Bình: Dệt may, da giày, xi măng.</text>
      </g>

      <!-- South Zone -->
      <g transform="translate(430, 65)">
        <rect width="310" height="180" rx="12" fill="#fef2f2" class="dark:fill-rose-950/30" stroke="#ef4444" stroke-width="1.5"/>
        <text x="155" y="30" text-anchor="middle" font-size="12" font-weight="bold" fill="#b91c1c">VÙNG PHÍA NAM (ĐÔNG NAM BỘ)</text>
        <text x="15" y="60" font-size="11" fill="#334155" class="dark:fill-slate-300">• Hạt nhân: <strong>TP. Hồ Chí Minh</strong> (quy mô lớn nhất cả nước).</text>
        <text x="15" y="85" font-size="11" fill="#334155" class="dark:fill-slate-300">• Các trung tâm vệ tinh:</text>
        <text x="25" y="105" font-size="10" fill="#64748b">- Biên Hòa (Đồng Nai): Cơ khí, điện tử, chế biến gỗ.</text>
        <text x="25" y="125" font-size="10" fill="#64748b">- Thủ Dầu Một (Bình Dương): Chế biến công nghiệp, công nghệ cao.</text>
        <text x="25" y="145" font-size="10" fill="#64748b">- Vũng Tàu: Khai thác dầu khí, hóa dầu, điện khí, cảng biển.</text>
        <text x="15" y="170" font-size="11" font-weight="bold" fill="#b91c1c">→ Đóng góp >50% giá trị sản xuất CN cả nước.</text>
      </g>
    </svg>`
  },

  svg8_bieudo: {
    title: "Sơ đồ Tư duy Chọn Dạng Biểu đồ Địa lí 12",
    caption: "Quy tắc vàng 5 dạng biểu đồ cơ bản trong cấu trúc đề thi THPT Quốc gia",
    svg: `<svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[380px] select-none">
      <!-- 5 Step Columns -->
      <!-- Col 1: Cột -->
      <g transform="translate(20, 25)">
        <rect width="140" height="270" rx="12" fill="#eff6ff" class="dark:fill-slate-900" stroke="#3b82f6" stroke-width="2"/>
        <rect width="140" height="35" rx="12" fill="#3b82f6"/>
        <text x="70" y="23" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">📊 BIỂU ĐỒ CỘT</text>
        <text x="70" y="65" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8" class="dark:fill-blue-300">TỪ KHOÁ:</text>
        <text x="70" y="85" text-anchor="middle" font-size="11" fill="#334155" class="dark:fill-slate-300 font-bold">"Quy mô"</text>
        <text x="70" y="105" text-anchor="middle" font-size="11" fill="#334155" class="dark:fill-slate-300 font-bold">"Sản lượng"</text>
        <text x="70" y="125" text-anchor="middle" font-size="11" fill="#334155" class="dark:fill-slate-300 font-bold">"Khối lượng"</text>
        <text x="70" y="145" text-anchor="middle" font-size="11" fill="#334155" class="dark:fill-slate-300 font-bold">"So sánh"</text>
        <line x1="15" y1="165" x2="125" y2="165" stroke="#cbd5e1"/>
        <text x="70" y="190" text-anchor="middle" font-size="10" fill="#64748b">Cột đơn, cột ghép</text>
        <text x="70" y="210" text-anchor="middle" font-size="10" fill="#64748b">hoặc cột chồng</text>
        <text x="70" y="240" text-anchor="middle" font-size="10" font-weight="bold" fill="#2563eb">Mốc: 1 - 4 năm</text>
      </g>

      <!-- Col 2: Đường -->
      <g transform="translate(175, 25)">
        <rect width="140" height="270" rx="12" fill="#f0fdf4" class="dark:fill-slate-900" stroke="#10b981" stroke-width="2"/>
        <rect width="140" height="35" rx="12" fill="#10b981"/>
        <text x="70" y="23" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">📈 BIỂU ĐỒ ĐƯỜNG</text>
        <text x="70" y="65" text-anchor="middle" font-size="11" font-weight="bold" fill="#047857" class="dark:fill-emerald-300">TỪ KHOÁ:</text>
        <text x="70" y="85" text-anchor="middle" font-size="11" fill="#334155" class="dark:fill-slate-300 font-bold">"Tốc độ tăng"</text>
        <text x="70" y="105" text-anchor="middle" font-size="11" fill="#334155" class="dark:fill-slate-300 font-bold">"Tăng trưởng"</text>
        <text x="70" y="125" text-anchor="middle" font-size="11" fill="#334155" class="dark:fill-slate-300 font-bold">"Phát triển"</text>
        <text x="70" y="145" text-anchor="middle" font-size="11" fill="#334155" class="dark:fill-slate-300 font-bold">"Biến thiên"</text>
        <line x1="15" y1="165" x2="125" y2="165" stroke="#cbd5e1"/>
        <text x="70" y="190" text-anchor="middle" font-size="10" fill="#64748b">Xử lí năm gốc</text>
        <text x="70" y="210" text-anchor="middle" font-size="10" fill="#64748b">quy về = 100%</text>
        <text x="70" y="240" text-anchor="middle" font-size="10" font-weight="bold" fill="#059669">Thời gian ≥ 4 năm</text>
      </g>

      <!-- Col 3: Tròn -->
      <g transform="translate(330, 25)">
        <rect width="140" height="270" rx="12" fill="#fefce8" class="dark:fill-slate-900" stroke="#f59e0b" stroke-width="2"/>
        <rect width="140" height="35" rx="12" fill="#f59e0b"/>
        <text x="70" y="23" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">🟡 BIỂU ĐỒ TRÒN</text>
        <text x="70" y="65" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309" class="dark:fill-amber-300">TỪ KHOÁ:</text>
        <text x="70" y="85" text-anchor="middle" font-size="11" fill="#334155" class="dark:fill-slate-300 font-bold">"Cơ cấu"</text>
        <text x="70" y="105" text-anchor="middle" font-size="11" fill="#334155" class="dark:fill-slate-300 font-bold">"Tỉ trọng"</text>
        <text x="70" y="125" text-anchor="middle" font-size="11" fill="#334155" class="dark:fill-slate-300 font-bold">"Quy mô & cơ cấu"</text>
        <line x1="15" y1="165" x2="125" y2="165" stroke="#cbd5e1"/>
        <text x="70" y="190" text-anchor="middle" font-size="10" fill="#64748b">Tổng thể = 100%</text>
        <text x="70" y="210" text-anchor="middle" font-size="10" fill="#64748b">Tính bán kính R</text>
        <text x="70" y="240" text-anchor="middle" font-size="10" font-weight="bold" fill="#d97706">Mốc: 1 - 3 năm</text>
      </g>

      <!-- Col 4: Miền -->
      <g transform="translate(485, 25)">
        <rect width="140" height="270" rx="12" fill="#faf5ff" class="dark:fill-slate-900" stroke="#a855f7" stroke-width="2"/>
        <rect width="140" height="35" rx="12" fill="#a855f7"/>
        <text x="70" y="23" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">🏔️ BIỂU ĐỒ MIỀN</text>
        <text x="70" y="65" text-anchor="middle" font-size="11" font-weight="bold" fill="#7e22ce" class="dark:fill-purple-300">TỪ KHOÁ:</text>
        <text x="70" y="85" text-anchor="middle" font-size="11" fill="#334155" class="dark:fill-slate-300 font-bold">"Chuyển dịch cơ cấu"</text>
        <text x="70" y="115" text-anchor="middle" font-size="11" fill="#334155" class="dark:fill-slate-300 font-bold">"Thay đổi cơ cấu"</text>
        <line x1="15" y1="165" x2="125" y2="165" stroke="#cbd5e1"/>
        <text x="70" y="190" text-anchor="middle" font-size="10" fill="#64748b">Miền chồng lên nhau</text>
        <text x="70" y="210" text-anchor="middle" font-size="10" fill="#64748b">Khung hình chữ nhật</text>
        <text x="70" y="240" text-anchor="middle" font-size="10" font-weight="bold" fill="#9333ea">Thời gian ≥ 4 năm</text>
      </g>

      <!-- Col 5: Kết hợp -->
      <g transform="translate(640, 25)">
        <rect width="140" height="270" rx="12" fill="#fff1f2" class="dark:fill-slate-900" stroke="#f43f5e" stroke-width="2"/>
        <rect width="140" height="35" rx="12" fill="#f43f5e"/>
        <text x="70" y="23" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">📉 BIỂU ĐỒ KẾT HỢP</text>
        <text x="70" y="65" text-anchor="middle" font-size="11" font-weight="bold" fill="#be123c" class="dark:fill-rose-300">TỪ KHOÁ:</text>
        <text x="70" y="85" text-anchor="middle" font-size="11" fill="#334155" class="dark:fill-slate-300 font-bold">"Diện tích & Sản lượng"</text>
        <text x="70" y="115" text-anchor="middle" font-size="11" fill="#334155" class="dark:fill-slate-300 font-bold">"Số dân & Tỉ lệ"</text>
        <line x1="15" y1="165" x2="125" y2="165" stroke="#cbd5e1"/>
        <text x="70" y="190" text-anchor="middle" font-size="10" fill="#64748b">Cột + Đường</text>
        <text x="70" y="210" text-anchor="middle" font-size="10" fill="#64748b">Hai trục tung (2 ĐV)</text>
        <text x="70" y="240" text-anchor="middle" font-size="10" font-weight="bold" fill="#e11d48">≥ 2 đại lượng khác ĐV</text>
      </g>
    </svg>`
  }
};

module.exports = diali12_svgs;
