// scratch/diali12_svgs.js
// 8 Visual Vector Diagrams for Geography Grade 12 (Kết Nối Tri Thức)

const svgs = {
  // Bài 1: Vị trí địa lí và Các vùng biển Việt Nam
  territorySeaZones: `
    <svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[360px] select-none rounded-xl bg-slate-900">
      <defs>
        <linearGradient id="gLand" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#059669"/>
          <stop offset="100%" stop-color="#047857"/>
        </linearGradient>
        <linearGradient id="gSea" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#0284c7" stop-opacity="0.3"/>
          <stop offset="50%" stop-color="#0369a1" stop-opacity="0.5"/>
          <stop offset="100%" stop-color="#0f172a" stop-opacity="0.8"/>
        </linearGradient>
      </defs>
      <!-- Title -->
      <text x="400" y="32" text-anchor="middle" font-size="14" font-weight="900" fill="#38bdf8" letter-spacing="1">MẶT CẮT CÁC VÙNG BIỂN THUỘC CHỦ QUYỀN & QUYỀN CHỦ QUYỀN VIỆT NAM (LUẬT BIỂN 1982 & 2012)</text>
      
      <!-- Sky and Sea background -->
      <rect x="20" y="50" width="760" height="250" rx="12" fill="url(#gSea)"/>
      
      <!-- Land Profile -->
      <path d="M 20 220 Q 80 180 130 190 T 170 240 L 170 300 L 20 300 Z" fill="url(#gLand)"/>
      <text x="75" y="245" font-size="12" font-weight="bold" fill="#ffffff">ĐẤT LIỀN</text>
      <text x="75" y="265" font-size="10" fill="#a7f3d0">331.000+ km²</text>

      <!-- Baseline (Đường cơ sở) -->
      <line x1="170" y1="70" x2="170" y2="300" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 4"/>
      <rect x="125" y="65" width="90" height="22" rx="6" fill="#f59e0b"/>
      <text x="170" y="80" text-anchor="middle" font-size="10" font-weight="bold" fill="#000000">ĐƯỜNG CƠ SỞ</text>

      <!-- Zone 1: Nội thủy -->
      <rect x="130" y="115" width="38" height="60" rx="6" fill="#0ea5e9" opacity="0.4"/>
      <text x="149" y="145" text-anchor="middle" font-size="9" font-weight="bold" fill="#e0f2fe">NỘI THỦY</text>

      <!-- Zone 2: Lãnh hải (12 hải lí) -->
      <line x1="280" y1="70" x2="280" y2="300" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3 3"/>
      <rect x="175" y="95" width="100" height="30" rx="6" fill="#0369a1" opacity="0.7"/>
      <text x="225" y="110" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">LÃNH HẢI (12 HL)</text>
      <text x="225" y="122" text-anchor="middle" font-size="8.5" fill="#bae6fd">Chủ quyền hoàn toàn</text>

      <!-- Zone 3: Vùng tiếp giáp lãnh hải (12 hải lí tiếp) -->
      <line x1="390" y1="70" x2="390" y2="300" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3 3"/>
      <rect x="285" y="95" width="100" height="30" rx="6" fill="#0284c7" opacity="0.6"/>
      <text x="335" y="110" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">TIẾP GIÁP LÃNH HẢI</text>
      <text x="335" y="122" text-anchor="middle" font-size="8.5" fill="#bae6fd">An ninh, tài khóa, y tế</text>

      <!-- Zone 4: Vùng đặc quyền kinh tế (200 hải lí từ đường cơ sở) -->
      <line x1="560" y1="70" x2="560" y2="300" stroke="#f43f5e" stroke-width="2"/>
      <rect x="395" y="95" width="160" height="30" rx="6" fill="#1e40af" opacity="0.6"/>
      <text x="475" y="110" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">VÙNG ĐẶC QUYỀN KINH TẾ (EEZ)</text>
      <text x="475" y="122" text-anchor="middle" font-size="8.5" fill="#fbcfe8">200 hải lí từ đường cơ sở</text>

      <!-- Sea Bed / Continental Shelf (Thềm lục địa) -->
      <path d="M 170 240 Q 250 250 350 260 Q 500 270 700 290 L 780 300 L 170 300 Z" fill="#334155"/>
      <rect x="580" y="240" width="180" height="40" rx="8" fill="#1e293b" stroke="#475569"/>
      <text x="670" y="258" text-anchor="middle" font-size="11" font-weight="bold" fill="#f8fafc">THỀM LỤC ĐỊA</text>
      <text x="670" y="272" text-anchor="middle" font-size="9" fill="#94a3b8">Đáy biển mở rộng đến 200 - 350 HL</text>

      <!-- Islands / Archipelago -->
      <g transform="translate(620, 150)">
        <path d="M 0 30 Q 25 10 50 30 Z" fill="#10b981"/>
        <text x="25" y="45" text-anchor="middle" font-size="10" font-weight="bold" fill="#fbbf24">ĐẢO & QUẦN ĐẢO</text>
        <text x="25" y="57" text-anchor="middle" font-size="8.5" fill="#cbd5e1">(Hoàng Sa, Trường Sa)</text>
      </g>
    </svg>
  `,

  // Bài 2: Thiên nhiên nhiệt đới ẩm gió mùa & Cơ chế gió mùa
  monsoonMechanism: `
    <svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[350px] select-none rounded-xl bg-slate-900">
      <text x="400" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#38bdf8">CƠ CHẾ HOẠT ĐỘNG CỦA HAI MÙA GIÓ CHỦ YẾU TẠI VIỆT NAM</text>
      
      <!-- Box 1: Gió mùa Mùa Đông -->
      <g transform="translate(40, 50)">
        <rect width="340" height="225" rx="14" fill="#1e293b" stroke="#0284c7" stroke-width="1.5"/>
        <rect x="0" y="0" width="340" height="40" rx="14" fill="#0369a1"/>
        <text x="170" y="25" text-anchor="middle" font-size="13" font-weight="bold" fill="#ffffff">GIÓ MÙA ĐÔNG BẮC (THÁNG 11 – 4)</text>
        
        <text x="20" y="65" font-size="11.5" font-weight="bold" fill="#38bdf8">• Nguồn gốc:</text>
        <text x="100" y="65" font-size="11" fill="#cbd5e1">Khối khí cực lục địa (áp cao Xibia)</text>
        
        <text x="20" y="95" font-size="11.5" font-weight="bold" fill="#38bdf8">• Hướng gió:</text>
        <text x="100" y="95" font-size="11" fill="#cbd5e1">Đông Bắc (thổi từng đợt lạnh)</text>

        <text x="20" y="125" font-size="11.5" font-weight="bold" fill="#38bdf8">• Đầu mùa đông:</text>
        <text x="120" y="125" font-size="11" fill="#cbd5e1">Lạnh khô (miền Bắc hanh hao)</text>

        <text x="20" y="155" font-size="11.5" font-weight="bold" fill="#38bdf8">• Cuối mùa đông:</text>
        <text x="120" y="155" font-size="11" fill="#cbd5e1">Lạnh ẩm, có mưa phùn ven biển</text>

        <text x="20" y="190" font-size="11.5" font-weight="bold" fill="#f59e0b">• Giới hạn nam:</text>
        <text x="120" y="190" font-size="11" fill="#fde68a">Bị chặn lại ở dãy Bạch Mã (16°B)</text>
      </g>

      <!-- Box 2: Gió mùa Mùa Hạ -->
      <g transform="translate(420, 50)">
        <rect width="340" height="225" rx="14" fill="#1e293b" stroke="#059669" stroke-width="1.5"/>
        <rect x="0" y="0" width="340" height="40" rx="14" fill="#047857"/>
        <text x="170" y="25" text-anchor="middle" font-size="13" font-weight="bold" fill="#ffffff">GIÓ MÙA TÂY NAM (THÁNG 5 – 10)</text>
        
        <text x="20" y="65" font-size="11.5" font-weight="bold" fill="#34d399">• Nguồn gốc:</text>
        <text x="100" y="65" font-size="11" fill="#cbd5e1">Áp cao Bắc Ấn Độ Dương & Vịnh Bengan</text>
        
        <text x="20" y="95" font-size="11.5" font-weight="bold" fill="#34d399">• Hướng gió:</text>
        <text x="100" y="95" font-size="11" fill="#cbd5e1">Tây Nam (đổi hướng ĐN ở Bắc Bộ)</text>

        <text x="20" y="125" font-size="11.5" font-weight="bold" fill="#34d399">• Nam Bộ & TN:</text>
        <text x="120" y="125" font-size="11" fill="#cbd5e1">Mưa lớn đầu & giữa mùa hạ</text>

        <text x="20" y="155" font-size="11.5" font-weight="bold" fill="#34d399">• Duyên hải MT:</text>
        <text x="120" y="155" font-size="11" fill="#fca5a5">Khô nóng do hiệu ứng phơn (Gió Lào)</text>

        <text x="20" y="190" font-size="11.5" font-weight="bold" fill="#f59e0b">• Giữa & cuối hạ:</text>
        <text x="120" y="190" font-size="11" fill="#fde68a">Hội tụ FIT đem mưa lớn trên cả nước</text>
      </g>
    </svg>
  `,

  // Bài 3: 3 Miền tự nhiên Việt Nam
  threeNaturalRegions: `
    <svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[340px] select-none rounded-xl bg-slate-900">
      <text x="400" y="26" text-anchor="middle" font-size="14" font-weight="bold" fill="#38bdf8">ĐẶC ĐIỂM 3 MIỀN ĐỊA LÍ TỰ NHIÊN VIỆT NAM</text>
      
      <!-- Miền 1 -->
      <g transform="translate(25, 45)">
        <rect width="235" height="215" rx="12" fill="#1e293b" stroke="#0ea5e9"/>
        <rect width="235" height="35" rx="12" fill="#0284c7"/>
        <text x="117" y="22" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">BẮC & ĐÔNG BẮC BẮC BỘ</text>
        <text x="15" y="60" font-size="10.5" fill="#38bdf8" font-weight="bold">Địa hình:</text>
        <text x="15" y="78" font-size="10" fill="#cbd5e1">Đồi núi thấp, 4 cánh cung lớn</text>
        <text x="15" y="94" font-size="10" fill="#cbd5e1">Đồng bằng sông Hồng mở rộng</text>
        <text x="15" y="120" font-size="10.5" fill="#38bdf8" font-weight="bold">Khí hậu:</text>
        <text x="15" y="138" font-size="10" fill="#cbd5e1">Mùa đông lạnh sâu nhất nước</text>
        <text x="15" y="165" font-size="10.5" fill="#38bdf8" font-weight="bold">Khoáng sản:</text>
        <text x="15" y="183" font-size="10" fill="#cbd5e1">Than đá Quảng Ninh, sắt, thiếc</text>
      </g>

      <!-- Miền 2 -->
      <g transform="translate(282, 45)">
        <rect width="235" height="215" rx="12" fill="#1e293b" stroke="#f59e0b"/>
        <rect width="235" height="35" rx="12" fill="#d97706"/>
        <text x="117" y="22" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">TÂY BẮC & BẮC TRUNG BỘ</text>
        <text x="15" y="60" font-size="10.5" fill="#fbbf24" font-weight="bold">Địa hình:</text>
        <text x="15" y="78" font-size="10" fill="#cbd5e1">Núi cao đồ sộ hướng Tây Bắc–ĐN</text>
        <text x="15" y="94" font-size="10" fill="#cbd5e1">Đỉnh Fansipan (3143m)</text>
        <text x="15" y="120" font-size="10.5" fill="#fbbf24" font-weight="bold">Khí hậu:</text>
        <text x="15" y="138" font-size="10" fill="#cbd5e1">Mùa đông bớt lạnh, hạ gió phơn</text>
        <text x="15" y="165" font-size="10.5" fill="#fbbf24" font-weight="bold">Tiềm năng:</text>
        <text x="15" y="183" font-size="10" fill="#cbd5e1">Thủy điện sông Đà, sông Mã</text>
      </g>

      <!-- Miền 3 -->
      <g transform="translate(540, 45)">
        <rect width="235" height="215" rx="12" fill="#1e293b" stroke="#10b981"/>
        <rect width="235" height="35" rx="12" fill="#059669"/>
        <text x="117" y="22" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">NAM TRUNG BỘ & NAM BỘ</text>
        <text x="15" y="60" font-size="10.5" fill="#34d399" font-weight="bold">Địa hình:</text>
        <text x="15" y="78" font-size="10" fill="#cbd5e1">Trường Sơn Nam, cao nguyên badan</text>
        <text x="15" y="94" font-size="10" fill="#cbd5e1">Đồng bằng sông Cửu Long lớn nhất</text>
        <text x="15" y="120" font-size="10.5" fill="#34d399" font-weight="bold">Khí hậu:</text>
        <text x="15" y="138" font-size="10" fill="#cbd5e1">Cận xích đạo, phân mùa mưa–khô rõ</text>
        <text x="15" y="165" font-size="10.5" fill="#34d399" font-weight="bold">Tài nguyên:</text>
        <text x="15" y="183" font-size="10" fill="#cbd5e1">Dầu khí thềm lục địa, bauxite TN</text>
      </g>
    </svg>
  `,

  // Bài 7: Dân số và Cơ cấu dân số
  populationStructure: `
    <svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[340px] select-none rounded-xl bg-slate-900">
      <text x="400" y="26" text-anchor="middle" font-size="14" font-weight="bold" fill="#38bdf8">XU HƯỚNG BIẾN ĐỔI QUY MÔ & CƠ CẤU DÂN SỐ VIỆT NAM</text>
      
      <!-- Box 1 -->
      <g transform="translate(40, 45)">
        <rect width="220" height="215" rx="12" fill="#1e293b" stroke="#38bdf8"/>
        <circle cx="110" cy="40" r="22" fill="#0284c7"/>
        <text x="110" y="47" text-anchor="middle" font-size="18" fill="#ffffff">👥</text>
        <text x="110" y="80" text-anchor="middle" font-size="12" font-weight="bold" fill="#38bdf8">QUY MÔ DÂN SỐ</text>
        <text x="110" y="105" text-anchor="middle" font-size="11" fill="#e2e8f0">> 100 triệu người</text>
        <text x="110" y="125" text-anchor="middle" font-size="10" fill="#94a3b8">Đứng thứ 3 Đông Nam Á</text>
        <line x1="20" y1="145" x2="200" y2="145" stroke="#475569"/>
        <text x="110" y="168" text-anchor="middle" font-size="10.5" fill="#fde68a">Tốc độ tăng chậm lại</text>
        <text x="110" y="188" text-anchor="middle" font-size="10" fill="#cbd5e1">Mức sinh giảm dần (&lt; 2 con/mẹ)</text>
      </g>

      <!-- Box 2 -->
      <g transform="translate(290, 45)">
        <rect width="220" height="215" rx="12" fill="#1e293b" stroke="#f59e0b"/>
        <circle cx="110" cy="40" r="22" fill="#d97706"/>
        <text x="110" y="47" text-anchor="middle" font-size="18" fill="#ffffff">⏳</text>
        <text x="110" y="80" text-anchor="middle" font-size="12" font-weight="bold" fill="#fbbf24">CƠ CẤU THEO TUỔI</text>
        <text x="110" y="105" text-anchor="middle" font-size="11" fill="#e2e8f0">Cơ cấu dân số vàng</text>
        <text x="110" y="125" text-anchor="middle" font-size="10" fill="#94a3b8">Lao động dồi dào, cần cù</text>
        <line x1="20" y1="145" x2="200" y2="145" stroke="#475569"/>
        <text x="110" y="168" text-anchor="middle" font-size="10.5" fill="#f87171">Chuyển sang già hóa nhanh</text>
        <text x="110" y="188" text-anchor="middle" font-size="10" fill="#cbd5e1">Tỉ lệ người &gt; 60 tuổi tăng cao</text>
      </g>

      <!-- Box 3 -->
      <g transform="translate(540, 45)">
        <rect width="220" height="215" rx="12" fill="#1e293b" stroke="#10b981"/>
        <circle cx="110" cy="40" r="22" fill="#059669"/>
        <text x="110" y="47" text-anchor="middle" font-size="18" fill="#ffffff">🗺️</text>
        <text x="110" y="80" text-anchor="middle" font-size="12" font-weight="bold" fill="#34d399">PHÂN BỐ DÂN CƯ</text>
        <text x="110" y="105" text-anchor="middle" font-size="11" fill="#e2e8f0">Mất cân đối nghiêm trọng</text>
        <text x="110" y="125" text-anchor="middle" font-size="10" fill="#94a3b8">Đồng bằng: rất đông đúc</text>
        <line x1="20" y1="145" x2="200" y2="145" stroke="#475569"/>
        <text x="110" y="168" text-anchor="middle" font-size="10.5" fill="#cbd5e1">ĐBSH: ~1.100 người/km²</text>
        <text x="110" y="188" text-anchor="middle" font-size="10" fill="#cbd5e1">Miền núi/TN: &lt; 150 người/km²</text>
      </g>
    </svg>
  `,

  // Bài 11: Chuyển dịch cơ cấu kinh tế
  economicRestructuring: `
    <svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[340px] select-none rounded-xl bg-slate-900">
      <text x="400" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#38bdf8">BA HƯỚNG CHUYỂN DỊCH CƠ CẤU KINH TẾ Ở VIỆT NAM</text>
      
      <!-- Hướng 1: Theo ngành -->
      <g transform="translate(30, 50)">
        <rect width="230" height="210" rx="12" fill="#1e293b" stroke="#0ea5e9"/>
        <rect width="230" height="36" rx="12" fill="#0284c7"/>
        <text x="115" y="23" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">1. CƠ CẤU NGÀNH KINH TẾ</text>
        <text x="15" y="62" font-size="11" font-weight="bold" fill="#f87171">▼ Nông - Lâm - Thủy sản:</text>
        <text x="25" y="80" font-size="10.5" fill="#cbd5e1">Giảm tỉ trọng, tăng chất lượng</text>
        <text x="15" y="105" font-size="11" font-weight="bold" fill="#34d399">▲ Công nghiệp - Xây dựng:</text>
        <text x="25" y="123" font-size="10.5" fill="#cbd5e1">Tăng nhanh chế biến, chế tạo</text>
        <text x="15" y="148" font-size="11" font-weight="bold" fill="#38bdf8">▲ Khu vực Dịch vụ:</text>
        <text x="25" y="166" font-size="10.5" fill="#cbd5e1">Tỉ trọng cao, đa dạng hóa</text>
        <text x="15" y="192" font-size="10" fill="#94a3b8">Động lực: CNH – HĐH, KTS</text>
      </g>

      <!-- Hướng 2: Theo thành phần -->
      <g transform="translate(285, 50)">
        <rect width="230" height="210" rx="12" fill="#1e293b" stroke="#f59e0b"/>
        <rect width="230" height="36" rx="12" fill="#d97706"/>
        <text x="115" y="23" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">2. THÀNH PHẦN KINH TẾ</text>
        <text x="15" y="62" font-size="11" font-weight="bold" fill="#fbbf24">• Kinh tế Nhà nước:</text>
        <text x="25" y="80" font-size="10.5" fill="#cbd5e1">Giữ vai trò chủ đạo, then chốt</text>
        <text x="15" y="105" font-size="11" font-weight="bold" fill="#fbbf24">• Kinh tế ngoài Nhà nước:</text>
        <text x="25" y="123" font-size="10.5" fill="#cbd5e1">Động lực quan trọng, năng động</text>
        <text x="15" y="148" font-size="11" font-weight="bold" fill="#fbbf24">• Khu vực có vốn FDI:</text>
        <text x="25" y="166" font-size="10.5" fill="#cbd5e1">Tăng nhanh tỉ trọng xuất khẩu</text>
        <text x="15" y="192" font-size="10" fill="#94a3b8">Định hướng XHCN, hội nhập</text>
      </g>

      <!-- Hướng 3: Theo lãnh thổ -->
      <g transform="translate(540, 50)">
        <rect width="230" height="210" rx="12" fill="#1e293b" stroke="#10b981"/>
        <rect width="230" height="36" rx="12" fill="#059669"/>
        <text x="115" y="23" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">3. LÃNH THỔ KINH TẾ</text>
        <text x="15" y="62" font-size="11" font-weight="bold" fill="#34d399">• Vùng chuyên môn hóa:</text>
        <text x="25" y="80" font-size="10.5" fill="#cbd5e1">Nông nghiệp lớn (ĐBSCL, TN)</text>
        <text x="15" y="105" font-size="11" font-weight="bold" fill="#34d399">• Khu công nghiệp & KKT:</text>
        <text x="25" y="123" font-size="10.5" fill="#cbd5e1">Tập trung ven biển, vùng kinh tế</text>
        <text x="15" y="148" font-size="11" font-weight="bold" fill="#34d399">• 4 Vùng kinh tế trọng điểm:</text>
        <text x="25" y="166" font-size="10.5" fill="#cbd5e1">Bắc Bộ, Miền Trung, Phía Nam, ĐBSCL</text>
        <text x="15" y="192" font-size="10" fill="#94a3b8">Liên kết vùng & hành lang kinh tế</text>
      </g>
    </svg>
  `,

  // Bài 16: Cơ cấu ngành công nghiệp
  industryStructure: `
    <svg viewBox="0 0 800 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[320px] select-none rounded-xl bg-slate-900">
      <text x="400" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#38bdf8">CƠ CẤU 3 NHÓM NGÀNH CÔNG NGHIỆP TRỌNG ĐIỂM VIỆT NAM</text>
      
      <g transform="translate(40, 50)">
        <rect width="220" height="190" rx="12" fill="#1e293b" stroke="#0ea5e9"/>
        <text x="110" y="32" text-anchor="middle" font-size="12" font-weight="bold" fill="#38bdf8">1. CÔNG NGHIỆP KHAI KHOÁNG</text>
        <line x1="20" y1="45" x2="200" y2="45" stroke="#475569"/>
        <text x="15" y="70" font-size="11" fill="#cbd5e1">• Than đá: Quảng Ninh (Antraxit)</text>
        <text x="15" y="95" font-size="11" fill="#cbd5e1">• Dầu mỏ & Khí: Thềm lục địa Nam</text>
        <text x="15" y="120" font-size="11" fill="#cbd5e1">• Bauxite: Tây Nguyên trữ lượng lớn</text>
        <text x="15" y="150" font-size="10.5" fill="#f87171">Xu hướng: Giảm phụ thuộc thô,</text>
        <text x="15" y="168" font-size="10.5" fill="#f87171">bảo vệ môi trường</text>
      </g>

      <g transform="translate(290, 50)">
        <rect width="220" height="190" rx="12" fill="#1e293b" stroke="#10b981"/>
        <text x="110" y="32" text-anchor="middle" font-size="12" font-weight="bold" fill="#34d399">2. CHẾ BIẾN, CHẾ TẠO</text>
        <line x1="20" y1="45" x2="200" y2="45" stroke="#475569"/>
        <text x="15" y="70" font-size="11" fill="#cbd5e1">• Điện tử, máy tính: Hà Nội, BN, TP.HCM</text>
        <text x="15" y="95" font-size="11" fill="#cbd5e1">• Dệt may, da giày: Dựa vào lao động</text>
        <text x="15" y="120" font-size="11" fill="#cbd5e1">• Chế biến thực phẩm: Gần nguyên liệu</text>
        <text x="15" y="150" font-size="10.5" fill="#34d399">Đóng vai trò động lực tăng trưởng</text>
        <text x="15" y="168" font-size="10.5" fill="#34d399">chủ lực xuất khẩu</text>
      </g>

      <g transform="translate(540, 50)">
        <rect width="220" height="190" rx="12" fill="#1e293b" stroke="#f59e0b"/>
        <text x="110" y="32" text-anchor="middle" font-size="12" font-weight="bold" fill="#fbbf24">3. SẢN XUẤT PHÂN PHỐI ĐIỆN</text>
        <line x1="20" y1="45" x2="200" y2="45" stroke="#475569"/>
        <text x="15" y="70" font-size="11" fill="#cbd5e1">• Thủy điện: Sơn La, Hòa Bình, Yaly</text>
        <text x="15" y="95" font-size="11" fill="#cbd5e1">• Nhiệt điện than & khí: Phú Mỹ, Cà Mau</text>
        <text x="15" y="120" font-size="11" fill="#cbd5e1">• Năng lượng tái tạo: Điện gió, mặt trời</text>
        <text x="15" y="150" font-size="10.5" fill="#fbbf24">Chuyển dịch năng lượng xanh,</text>
        <text x="15" y="168" font-size="10.5" fill="#fbbf24">giảm phát thải CO₂</text>
      </g>
    </svg>
  `,

  // Bài 21: Mạng lưới Giao thông vận tải
  transportNetwork: `
    <svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[340px] select-none rounded-xl bg-slate-900">
      <text x="400" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#38bdf8">MẠNG LƯỚI CÁC LOẠI HÌNH GIAO THÔNG VẬN TẢI VIỆT NAM</text>
      
      <!-- Đường bộ -->
      <g transform="translate(30, 50)">
        <rect width="165" height="210" rx="10" fill="#1e293b" stroke="#0ea5e9"/>
        <text x="82" y="26" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#38bdf8">ĐƯỜNG BỘ</text>
        <text x="10" y="55" font-size="10" fill="#cbd5e1">• QL 1A xuyên Việt</text>
        <text x="10" y="75" font-size="10" fill="#cbd5e1">• Đường HCM</text>
        <text x="10" y="95" font-size="10" fill="#cbd5e1">• Cao tốc Bắc–Nam</text>
        <text x="10" y="125" font-size="9.5" fill="#94a3b8">Khối lượng vận chuyển hàng & khách lớn nhất</text>
      </g>

      <!-- Đường sắt -->
      <g transform="translate(205, 50)">
        <rect width="165" height="210" rx="10" fill="#1e293b" stroke="#f59e0b"/>
        <text x="82" y="26" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#fbbf24">ĐƯỜNG SẮT</text>
        <text x="10" y="55" font-size="10" fill="#cbd5e1">• Tuyến Thống Nhất</text>
        <text x="10" y="75" font-size="10" fill="#cbd5e1">(Hà Nội – TP.HCM)</text>
        <text x="10" y="95" font-size="10" fill="#cbd5e1">• Các tuyến nhánh phía Bắc (HN–Lào Cai)</text>
        <text x="10" y="130" font-size="9.5" fill="#94a3b8">Vận chuyển đường dài, khối lượng lớn, an toàn</text>
      </g>

      <!-- Đường biển -->
      <g transform="translate(380, 50)">
        <rect width="165" height="210" rx="10" fill="#1e293b" stroke="#10b981"/>
        <text x="82" y="26" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#34d399">ĐƯỜNG BIỂN</text>
        <text x="10" y="55" font-size="10" fill="#cbd5e1">• Cảng Hải Phòng</text>
        <text x="10" y="75" font-size="10" fill="#cbd5e1">• Cảng Đà Nẵng</text>
        <text x="10" y="95" font-size="10" fill="#cbd5e1">• Cái Mép – Thị Vải</text>
        <text x="10" y="115" font-size="10" fill="#cbd5e1">• Cảng Sài Gòn</text>
        <text x="10" y="145" font-size="9.5" fill="#94a3b8">Vận tải ngoại thương chủ lực</text>
      </g>

      <!-- Đường hàng không -->
      <g transform="translate(555, 50)">
        <rect width="215" height="210" rx="10" fill="#1e293b" stroke="#ec4899"/>
        <text x="107" y="26" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#f472b6">HÀNG KHÔNG & THỦY NỘI ĐỊA</text>
        <text x="10" y="55" font-size="10" fill="#cbd5e1">• Nội Bài, Tân Sơn Nhất, Đà Nẵng, Cam Ranh, Phú Quốc</text>
        <text x="10" y="90" font-size="10" fill="#cbd5e1">• Đường thủy nội địa: Rất phát triển ở ĐBSCL và ĐBSH</text>
        <text x="10" y="125" font-size="9.5" fill="#94a3b8">Hàng không: Tốc độ cao</text>
        <text x="10" y="145" font-size="9.5" fill="#94a3b8">Thủy nội địa: Chi phí thấp</text>
      </g>
    </svg>
  `,

  // Bài 33: Kinh tế biển và An ninh quốc phòng Biển Đông
  marineEconomy: `
    <svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[340px] select-none rounded-xl bg-slate-900">
      <text x="400" y="26" text-anchor="middle" font-size="14" font-weight="bold" fill="#38bdf8">4 TRỤ CỘT KINH TẾ BIỂN GẮN LIỀN BẢO VỆ CHỦ QUYỀN BIỂN ĐẢO</text>
      
      <!-- Cột 1 -->
      <g transform="translate(25, 45)">
        <rect width="175" height="215" rx="12" fill="#1e293b" stroke="#0ea5e9"/>
        <rect width="175" height="32" rx="12" fill="#0284c7"/>
        <text x="87" y="21" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">1. DU LỊCH BIỂN ĐẢO</text>
        <text x="12" y="55" font-size="10" fill="#cbd5e1">• Vịnh Hạ Long (di sản)</text>
        <text x="12" y="75" font-size="10" fill="#cbd5e1">• Nha Trang, Đà Nẵng</text>
        <text x="12" y="95" font-size="10" fill="#cbd5e1">• Phú Quốc, Côn Đảo</text>
        <text x="12" y="130" font-size="9.5" fill="#38bdf8">Nghỉ dưỡng, sinh thái,</text>
        <text x="12" y="145" font-size="9.5" fill="#38bdf8">quảng bá văn hóa</text>
      </g>

      <!-- Cột 2 -->
      <g transform="translate(215, 45)">
        <rect width="175" height="215" rx="12" fill="#1e293b" stroke="#10b981"/>
        <rect width="175" height="32" rx="12" fill="#059669"/>
        <text x="87" y="21" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">2. THỦY HẢI SẢN</text>
        <text x="12" y="55" font-size="10" fill="#cbd5e1">• 4 ngư trường trọng điểm</text>
        <text x="12" y="75" font-size="10" fill="#cbd5e1">• Khai thác xa bờ bền vững</text>
        <text x="12" y="95" font-size="10" fill="#cbd5e1">• Chống khai thác IUU</text>
        <text x="12" y="130" font-size="9.5" fill="#34d399">Tàu cá ngư dân là cột mốc</text>
        <text x="12" y="145" font-size="9.5" fill="#34d399">chủ quyền trên biển</text>
      </g>

      <!-- Cột 3 -->
      <g transform="translate(405, 45)">
        <rect width="175" height="215" rx="12" fill="#1e293b" stroke="#f59e0b"/>
        <rect width="175" height="32" rx="12" fill="#d97706"/>
        <text x="87" y="21" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">3. KHOÁNG SẢN & DẦU KHÍ</text>
        <text x="12" y="55" font-size="10" fill="#cbd5e1">• Bể Cửu Long, Nam Côn Sơn</text>
        <text x="12" y="75" font-size="10" fill="#cbd5e1">• Cát trắng, muối biển</text>
        <text x="12" y="95" font-size="10" fill="#cbd5e1">• Điện gió ngoài khơi</text>
        <text x="12" y="130" font-size="9.5" fill="#fbbf24">Nguyên liệu công nghiệp,</text>
        <text x="12" y="145" font-size="9.5" fill="#fbbf24">an ninh năng lượng</text>
      </g>

      <!-- Cột 4 -->
      <g transform="translate(595, 45)">
        <rect width="175" height="215" rx="12" fill="#1e293b" stroke="#8b5cf6"/>
        <rect width="175" height="32" rx="12" fill="#7c3aed"/>
        <text x="87" y="21" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">4. CẢNG & HÀNG HẢI</text>
        <text x="12" y="55" font-size="10" fill="#cbd5e1">• Tuyến hàng hải quốc tế</text>
        <text x="12" y="75" font-size="10" fill="#cbd5e1">• Cảng nước sâu Cái Mép</text>
        <text x="12" y="95" font-size="10" fill="#cbd5e1">• Logistics biển</text>
        <text x="12" y="130" font-size="9.5" fill="#c4b5fd">Cửa ngõ hội nhập toàn cầu,</text>
        <text x="12" y="145" font-size="9.5" fill="#c4b5fd">thế trận quốc phòng biển</text>
      </g>
    </svg>
  `
};

module.exports = svgs;
