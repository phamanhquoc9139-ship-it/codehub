// scratch/diali11_svgs.js
// Bộ 8 Sơ đồ tư duy & Lược đồ địa lí SVG chuẩn vector sắc nét cho Địa lí 11

const diali11_svgs = {
  svg1_nhomnuoc: {
    title: "Tiêu chí phân chia 2 nhóm nước trên thế giới",
    caption: "Hệ thống 3 chỉ tiêu cốt lõi: GNI/người, Cơ cấu kinh tế và Chỉ số HDI",
    svg: `<svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[380px] select-none">
      <defs>
        <linearGradient id="gDev" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0284c7" stop-opacity="0.15"/>
          <stop offset="100%" stop-color="#0369a1" stop-opacity="0.25"/>
        </linearGradient>
        <linearGradient id="gProg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#059669" stop-opacity="0.15"/>
          <stop offset="100%" stop-color="#047857" stop-opacity="0.25"/>
        </linearGradient>
      </defs>
      <!-- Center Title -->
      <rect x="250" y="15" width="300" height="45" rx="12" fill="#0f172a" class="dark:fill-slate-800"/>
      <text x="400" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#38bdf8">3 CHỈ TIÊU PHÂN CHIA NHÓM NƯỚC</text>

      <!-- Connecting Lines -->
      <path d="M 400 60 L 400 100 M 400 100 L 160 100 L 160 120 M 400 100 L 400 120 M 400 100 L 640 100 L 640 120" stroke="#0284c7" stroke-width="2.5" fill="none" stroke-linecap="round"/>

      <!-- Card 1: GNI / người -->
      <g transform="translate(40, 120)">
        <rect width="240" height="180" rx="16" fill="url(#gDev)" stroke="#0284c7" stroke-width="1.5"/>
        <circle cx="120" cy="35" r="22" fill="#0284c7"/>
        <text x="120" y="41" text-anchor="middle" font-size="16" fill="#ffffff" font-weight="bold">$</text>
        <text x="120" y="75" text-anchor="middle" font-size="14" font-weight="bold" fill="#0369a1" class="dark:fill-sky-300">GNI BÌNH QUÂN ĐẦU NGƯỜI</text>
        <text x="120" y="105" text-anchor="middle" font-size="11.5" fill="#334155" class="dark:fill-slate-300">Phản ánh mức thu nhập &amp; mức sống</text>
        <line x1="20" y1="120" x2="220" y2="120" stroke="#94a3b8" stroke-dasharray="3 3"/>
        <text x="30" y="142" font-size="11" fill="#0369a1" class="dark:fill-sky-200" font-weight="bold">Phát triển: Thu nhập cao (&gt; 13.205$)</text>
        <text x="30" y="165" font-size="11" fill="#059669" class="dark:fill-emerald-300">Đang phát triển: Trung bình &amp; thấp</text>
      </g>

      <!-- Card 2: Cơ cấu kinh tế -->
      <g transform="translate(280, 120)">
        <rect width="240" height="180" rx="16" fill="url(#gDev)" stroke="#0284c7" stroke-width="1.5"/>
        <circle cx="120" cy="35" r="22" fill="#0891b2"/>
        <text x="120" y="42" text-anchor="middle" font-size="16" fill="#ffffff">📊</text>
        <text x="120" y="75" text-anchor="middle" font-size="14" font-weight="bold" fill="#0e7490" class="dark:fill-cyan-300">CƠ CẤU KINH TẾ (GDP)</text>
        <text x="120" y="105" text-anchor="middle" font-size="11.5" fill="#334155" class="dark:fill-slate-300">Tỉ trọng Nông - Công nghiệp - Dịch vụ</text>
        <line x1="20" y1="120" x2="220" y2="120" stroke="#94a3b8" stroke-dasharray="3 3"/>
        <text x="30" y="142" font-size="11" fill="#0369a1" class="dark:fill-sky-200" font-weight="bold">Phát triển: Dịch vụ áp đảo (&gt; 65-70%)</text>
        <text x="30" y="165" font-size="11" fill="#059669" class="dark:fill-emerald-300">Đang PT: Đang CNH, nông nghiệp giảm</text>
      </g>

      <!-- Card 3: Chỉ số HDI -->
      <g transform="translate(520, 120)">
        <rect width="240" height="180" rx="16" fill="url(#gProg)" stroke="#059669" stroke-width="1.5"/>
        <circle cx="120" cy="35" r="22" fill="#059669"/>
        <text x="120" y="42" text-anchor="middle" font-size="16" fill="#ffffff">🌱</text>
        <text x="120" y="75" text-anchor="middle" font-size="14" font-weight="bold" fill="#047857" class="dark:fill-emerald-300">CHỈ SỐ PHÁT TRIỂN (HDI)</text>
        <text x="120" y="105" text-anchor="middle" font-size="11.5" fill="#334155" class="dark:fill-slate-300">Tổng hợp: Sức khoẻ - Học vấn - Thu nhập</text>
        <line x1="20" y1="120" x2="220" y2="120" stroke="#94a3b8" stroke-dasharray="3 3"/>
        <text x="30" y="142" font-size="11" fill="#0369a1" class="dark:fill-sky-200" font-weight="bold">Phát triển: Rất cao (≥ 0,800)</text>
        <text x="30" y="165" font-size="11" fill="#059669" class="dark:fill-emerald-300">Đang PT: Cao, TB hoặc Thấp (&lt; 0,800)</text>
      </g>
    </svg>`
  },

  svg2_mylatinh: {
    title: "Sơ đồ Không gian Kinh tế & Xã hội Mỹ La tinh",
    caption: "Tương phản địa hình, tiềm năng tài nguyên và các nút thắt kinh tế - xã hội",
    svg: `<svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[380px] select-none">
      <!-- Background Panels -->
      <rect x="20" y="20" width="360" height="280" rx="18" fill="#f0f9ff" class="dark:fill-slate-900" stroke="#0284c7" stroke-width="1.5"/>
      <rect x="420" y="20" width="360" height="280" rx="18" fill="#fef2f2" class="dark:fill-slate-900" stroke="#e11d48" stroke-width="1.5"/>

      <!-- Header Left: Thế mạnh tự nhiên -->
      <rect x="50" y="35" width="300" height="38" rx="10" fill="#0284c7"/>
      <text x="200" y="60" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#ffffff">🏔️ TIỀM NĂNG TỰ NHIÊN DỒI DÀO</text>

      <g transform="translate(45, 95)" font-size="12" fill="#1e293b" class="dark:fill-slate-200">
        <circle cx="10" cy="15" r="4" fill="#0284c7"/>
        <text x="25" y="19" font-weight="bold">Phía Tây: Dãy An-đét đồ sộ</text>
        <text x="25" y="38" font-size="11" fill="#64748b" class="dark:fill-slate-400">Khoáng sản kim loại màu (đồng, chì, kẽm, bạc)</text>

        <circle cx="10" cy="70" r="4" fill="#0284c7"/>
        <text x="25" y="74" font-weight="bold">Phía Đông: Rừng A-ma-dôn &amp; Sơn nguyên</text>
        <text x="25" y="93" font-size="11" fill="#64748b" class="dark:fill-slate-400">'Lá phổi xanh', thuỷ điện, đồng cỏ chăn nuôi gia súc</text>

        <circle cx="10" cy="125" r="4" fill="#0284c7"/>
        <text x="25" y="129" font-weight="bold">Đồng bằng trù phú: La Pla-ta, Pam-pa</text>
        <text x="25" y="148" font-size="11" fill="#64748b" class="dark:fill-slate-400">Vùng nông nghiệp trồng trọt xuất khẩu lúa mì, đậu tương</text>

        <circle cx="10" cy="180" r="4" fill="#0284c7"/>
        <text x="25" y="184" font-weight="bold">Kênh đào Pa-na-ma huyết mạch</text>
        <text x="25" y="198" font-size="11" fill="#64748b" class="dark:fill-slate-400">Cầu nối hàng hải Thái Bình Dương - Đại Tây Dương</text>
      </g>

      <!-- Header Right: Thách thức xã hội -->
      <rect x="450" y="35" width="300" height="38" rx="10" fill="#e11d48"/>
      <text x="600" y="60" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#ffffff">⚠️ RÀO CẢN KINH TẾ - XÃ HỘI</text>

      <g transform="translate(445, 95)" font-size="12" fill="#1e293b" class="dark:fill-slate-200">
        <circle cx="10" cy="15" r="4" fill="#e11d48"/>
        <text x="25" y="19" font-weight="bold">Đô thị hoá tự phát tỉ lệ cao (&gt; 80%)</text>
        <text x="25" y="38" font-size="11" fill="#64748b" class="dark:fill-slate-400">Di dân ồ ạt tạo nên các khu ổ chuột (Favela), thất nghiệp</text>

        <circle cx="10" cy="70" r="4" fill="#e11d48"/>
        <text x="25" y="74" font-weight="bold">Bất bình đẳng sở hữu ruộng đất</text>
        <text x="25" y="93" font-size="11" fill="#64748b" class="dark:fill-slate-400">Đại điền trang chiếm đa số đất, nông dân nghèo thiếu tư liệu</text>

        <circle cx="10" cy="125" r="4" fill="#e11d48"/>
        <text x="25" y="129" font-weight="bold">Gánh nặng nợ nước ngoài cao</text>
        <text x="25" y="148" font-size="11" fill="#64748b" class="dark:fill-slate-400">Chi trả lãi vay lớn, phụ thuộc vào tư bản nước ngoài</text>

        <circle cx="10" cy="180" r="4" fill="#e11d48"/>
        <text x="25" y="184" font-weight="bold">Kinh tế dễ tổn thương theo giá hàng hoá</text>
        <text x="25" y="198" font-size="11" fill="#64748b" class="dark:fill-slate-400">Phụ thuộc xuất khẩu khoáng sản thô và nông sản thô</text>
      </g>
    </svg>`
  },

  svg3_eu: {
    title: "Sơ đồ 4 quyền tự do lưu thông của Liên minh châu Âu (EU)",
    caption: "Cốt lõi Thị trường chung châu Âu thành lập từ Hiệp ước Ma-xtrích",
    svg: `<svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[380px] select-none">
      <!-- EU Star Circle Background -->
      <circle cx="400" cy="160" r="95" fill="#1e3a8a" class="dark:fill-blue-950/80" stroke="#fbbf24" stroke-width="3" stroke-dasharray="6 4"/>
      <circle cx="400" cy="160" r="70" fill="#1d4ed8"/>
      <text x="400" y="155" text-anchor="middle" font-size="20" font-weight="bold" fill="#ffffff">LIÊN MINH</text>
      <text x="400" y="180" text-anchor="middle" font-size="20" font-weight="bold" fill="#fbbf24">CHÂU ÂU (EU)</text>

      <!-- Connecting Arms -->
      <line x1="320" y1="120" x2="190" y2="70" stroke="#3b82f6" stroke-width="3"/>
      <line x1="480" y1="120" x2="610" y2="70" stroke="#3b82f6" stroke-width="3"/>
      <line x1="320" y1="200" x2="190" y2="250" stroke="#3b82f6" stroke-width="3"/>
      <line x1="480" y1="200" x2="610" y2="250" stroke="#3b82f6" stroke-width="3"/>

      <!-- Top Left: Tự do lưu thông hàng hoá -->
      <g transform="translate(30, 25)">
        <rect width="210" height="95" rx="14" fill="#eff6ff" class="dark:fill-slate-800" stroke="#2563eb" stroke-width="1.8"/>
        <text x="105" y="32" text-anchor="middle" font-size="13" font-weight="bold" fill="#1d4ed8" class="dark:fill-blue-400">📦 TỰ DO HÀNG HOÁ</text>
        <text x="105" y="55" text-anchor="middle" font-size="10.5" fill="#475569" class="dark:fill-slate-300">Không thuế quan nội khối</text>
        <text x="105" y="73" text-anchor="middle" font-size="10.5" fill="#475569" class="dark:fill-slate-300">Thống nhất quy chuẩn kĩ thuật</text>
      </g>

      <!-- Top Right: Tự do dịch vụ -->
      <g transform="translate(560, 25)">
        <rect width="210" height="95" rx="14" fill="#eff6ff" class="dark:fill-slate-800" stroke="#2563eb" stroke-width="1.8"/>
        <text x="105" y="32" text-anchor="middle" font-size="13" font-weight="bold" fill="#1d4ed8" class="dark:fill-blue-400">💼 TỰ DO DỊCH VỤ</text>
        <text x="105" y="55" text-anchor="middle" font-size="10.5" fill="#475569" class="dark:fill-slate-300">Tự do cung ứng dịch vụ xuyên biên giới</text>
        <text x="105" y="73" text-anchor="middle" font-size="10.5" fill="#475569" class="dark:fill-slate-300">Vận tải, bưu chính, tài chính</text>
      </g>

      <!-- Bottom Left: Tự do con người -->
      <g transform="translate(30, 200)">
        <rect width="210" height="95" rx="14" fill="#eff6ff" class="dark:fill-slate-800" stroke="#2563eb" stroke-width="1.8"/>
        <text x="105" y="32" text-anchor="middle" font-size="13" font-weight="bold" fill="#1d4ed8" class="dark:fill-blue-400">🚶 TỰ DO CON NGƯỜI</text>
        <text x="105" y="55" text-anchor="middle" font-size="10.5" fill="#475569" class="dark:fill-slate-300">Khu vực miễn thị thực Schengen</text>
        <text x="105" y="73" text-anchor="middle" font-size="10.5" fill="#475569" class="dark:fill-slate-300">Tự do cư trú, học tập, làm việc</text>
      </g>

      <!-- Bottom Right: Tự do tiền vốn -->
      <g transform="translate(560, 200)">
        <rect width="210" height="95" rx="14" fill="#eff6ff" class="dark:fill-slate-800" stroke="#2563eb" stroke-width="1.8"/>
        <text x="105" y="32" text-anchor="middle" font-size="13" font-weight="bold" fill="#1d4ed8" class="dark:fill-blue-400">💶 TỰ DO TIỀN VỐN</text>
        <text x="105" y="55" text-anchor="middle" font-size="10.5" fill="#475569" class="dark:fill-slate-300">Đồng tiền chung Euro (€)</text>
        <text x="105" y="73" text-anchor="middle" font-size="10.5" fill="#475569" class="dark:fill-slate-300">Tự do chuyển nhượng tài sản &amp; đầu tư</text>
      </g>
    </svg>`
  },

  svg4_asean: {
    title: "Sơ đồ Ba trụ cột Cộng đồng ASEAN",
    caption: "Cộng đồng ASEAN (thành lập 31/12/2015) trên 3 trụ cột vững chắc",
    svg: `<svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[380px] select-none">
      <!-- Roof Header -->
      <polygon points="400,20 120,80 680,80" fill="#0369a1"/>
      <text x="400" y="58" text-anchor="middle" font-size="16" font-weight="bold" fill="#ffffff">MÁI NHÀ CHUNG CỘNG ĐỒNG ASEAN (31/12/2015)</text>

      <!-- Pillar 1: APSC -->
      <g transform="translate(130, 95)">
        <rect width="160" height="170" rx="10" fill="#f0fdf4" class="dark:fill-slate-900" stroke="#16a34a" stroke-width="2"/>
        <rect width="160" height="35" rx="10" fill="#16a34a"/>
        <text x="80" y="23" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">APSC (AN NINH)</text>
        <text x="80" y="65" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d" class="dark:fill-emerald-300">CHÍNH TRỊ - AN NINH</text>
        <text x="80" y="95" text-anchor="middle" font-size="10" fill="#475569" class="dark:fill-slate-300">Duy trì hoà bình, ổn định</text>
        <text x="80" y="115" text-anchor="middle" font-size="10" fill="#475569" class="dark:fill-slate-300">Giải quyết hoà bình tranh chấp</text>
        <text x="80" y="135" text-anchor="middle" font-size="10" fill="#475569" class="dark:fill-slate-300">Không phổ biến vũ khí hạt nhân</text>
        <text x="80" y="155" text-anchor="middle" font-size="10" fill="#475569" class="dark:fill-slate-300">Hợp tác an ninh hàng hải</text>
      </g>

      <!-- Pillar 2: AEC -->
      <g transform="translate(320, 95)">
        <rect width="160" height="170" rx="10" fill="#eff6ff" class="dark:fill-slate-900" stroke="#2563eb" stroke-width="2"/>
        <rect width="160" height="35" rx="10" fill="#2563eb"/>
        <text x="80" y="23" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">AEC (KINH TẾ)</text>
        <text x="80" y="65" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8" class="dark:fill-blue-300">CỘNG ĐỒNG KINH TẾ</text>
        <text x="80" y="95" text-anchor="middle" font-size="10" fill="#475569" class="dark:fill-slate-300">Một thị trường đơn nhất</text>
        <text x="80" y="115" text-anchor="middle" font-size="10" fill="#475569" class="dark:fill-slate-300">Một cơ sở sản xuất chung</text>
        <text x="80" y="135" text-anchor="middle" font-size="10" fill="#475569" class="dark:fill-slate-300">Tự do dòng chảy thương mại</text>
        <text x="80" y="155" text-anchor="middle" font-size="10" fill="#475569" class="dark:fill-slate-300">Thu hẹp khoảng cách phát triển</text>
      </g>

      <!-- Pillar 3: ASCC -->
      <g transform="translate(510, 95)">
        <rect width="160" height="170" rx="10" fill="#fdf2f8" class="dark:fill-slate-900" stroke="#db2777" stroke-width="2"/>
        <rect width="160" height="35" rx="10" fill="#db2777"/>
        <text x="80" y="23" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">ASCC (VĂN HOÁ - XH)</text>
        <text x="80" y="65" text-anchor="middle" font-size="11" font-weight="bold" fill="#be185d" class="dark:fill-pink-300">VĂN HOÁ - XÃ HỘI</text>
        <text x="80" y="95" text-anchor="middle" font-size="10" fill="#475569" class="dark:fill-slate-300">Nâng cao chất lượng sống</text>
        <text x="80" y="115" text-anchor="middle" font-size="10" fill="#475569" class="dark:fill-slate-300">Bảo vệ môi trường tự nhiên</text>
        <text x="80" y="135" text-anchor="middle" font-size="10" fill="#475569" class="dark:fill-slate-300">Bảo tồn bản sắc văn hoá</text>
        <text x="80" y="155" text-anchor="middle" font-size="10" fill="#475569" class="dark:fill-slate-300">Bình đẳng &amp; an sinh xã hội</text>
      </g>

      <!-- Foundation Baseline -->
      <rect x="90" y="275" width="620" height="25" rx="6" fill="#0f172a" class="dark:fill-slate-700"/>
      <text x="400" y="292" text-anchor="middle" font-size="12" font-weight="bold" fill="#38bdf8">NỀN TẢNG: HIẾN CHƯƠNG ASEAN • ĐỒNG THUẬN • KHÔNG CAN THIỆP NỘI BỘ</text>
    </svg>`
  },

  svg5_taynama: {
    title: "Sơ đồ Trục Dầu khí & Yết hầu hàng hải Tây Nam Á",
    caption: "Chiến lược dầu mỏ vịnh Péc-xích và hai eo biển yết hầu Hoóc-mút, kênh Xuy-ê",
    svg: `<svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[380px] select-none">
      <!-- Main Tank Center -->
      <rect x="270" y="40" width="260" height="110" rx="18" fill="#18181b" stroke="#f59e0b" stroke-width="2.5"/>
      <text x="400" y="75" text-anchor="middle" font-size="16" font-weight="bold" fill="#fbbf24">⛽ VỊNH PÉC-XÍCH</text>
      <text x="400" y="100" text-anchor="middle" font-size="12" fill="#fef3c7">'RỐN DẦU' KHÍ ĐỐT CỦA THẾ GIỚI</text>
      <text x="400" y="125" text-anchor="middle" font-size="11" fill="#cbd5e1">&gt; 50% Trữ lượng dầu mỏ đã xác minh toàn cầu</text>

      <!-- West Choke: Suez Canal -->
      <g transform="translate(40, 180)">
        <rect width="210" height="110" rx="14" fill="#f0f9ff" class="dark:fill-slate-800" stroke="#0284c7" stroke-width="1.8"/>
        <text x="105" y="32" text-anchor="middle" font-size="13" font-weight="bold" fill="#0369a1" class="dark:fill-sky-300">⚓ KÊNH ĐÀO XUY-Ê</text>
        <text x="105" y="55" text-anchor="middle" font-size="11" fill="#475569" class="dark:fill-slate-300">Nối Biển Đỏ với Địa Trung Hải</text>
        <text x="105" y="75" text-anchor="middle" font-size="11" fill="#475569" class="dark:fill-slate-300">Rút ngắn tuyến đường sang châu Âu</text>
        <text x="105" y="95" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0284c7">Cửa ngõ sang phương Tây</text>
      </g>

      <!-- East Choke: Hormuz Strait -->
      <g transform="translate(550, 180)">
        <rect width="210" height="110" rx="14" fill="#fef2f2" class="dark:fill-slate-800" stroke="#e11d48" stroke-width="1.8"/>
        <text x="105" y="32" text-anchor="middle" font-size="13" font-weight="bold" fill="#be123c" class="dark:fill-rose-300">🛑 EO BIỂN HOÓC-MÚT</text>
        <text x="105" y="55" text-anchor="middle" font-size="11" fill="#475569" class="dark:fill-slate-300">Yết hầu duy nhất ra biển A-ráp</text>
        <text x="105" y="75" text-anchor="middle" font-size="11" fill="#475569" class="dark:fill-slate-300">~ 20% lượng dầu mỏ thế giới đi qua</text>
        <text x="105" y="95" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#e11d48">Điểm nóng địa - chính trị</text>
      </g>

      <!-- Arrows -->
      <path d="M 270 95 L 145 95 L 145 170" stroke="#0284c7" stroke-width="3" fill="none" stroke-dasharray="4 3"/>
      <polygon points="145,175 140,165 150,165" fill="#0284c7"/>

      <path d="M 530 95 L 655 95 L 655 170" stroke="#e11d48" stroke-width="3" fill="none" stroke-dasharray="4 3"/>
      <polygon points="655,175 650,165 660,165" fill="#e11d48"/>

      <!-- Center Note -->
      <text x="400" y="240" text-anchor="middle" font-size="12" font-weight="bold" fill="#334155" class="dark:fill-slate-300">Ảnh hưởng sâu sắc tới ổn định kinh tế và năng lượng thế giới</text>
    </svg>`
  },

  svg6_hoaky: {
    title: "Sơ đồ Dịch chuyển công nghiệp Hoa Kỳ",
    caption: "Từ 'Vành đai Rỉ sét' truyền thống sang 'Vành đai Mặt trời' công nghệ cao",
    svg: `<svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[380px] select-none">
      <!-- Box 1: Rust Belt -->
      <g transform="translate(50, 40)">
        <rect width="280" height="230" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#64748b" stroke-width="2"/>
        <rect width="280" height="38" rx="16" fill="#475569"/>
        <text x="140" y="25" text-anchor="middle" font-size="13" font-weight="bold" fill="#ffffff">VÀNH ĐAI RỈ SÉT (ĐÔNG BẮC)</text>
        <text x="25" y="65" font-size="12" font-weight="bold" fill="#334155" class="dark:fill-slate-200">• Thời kì:</text>
        <text x="75" y="65" font-size="11.5" fill="#64748b" class="dark:fill-slate-400">Thế kỉ XIX - giữa TK XX</text>
        <text x="25" y="95" font-size="12" font-weight="bold" fill="#334155" class="dark:fill-slate-200">• Ngành truyền thống:</text>
        <text x="25" y="115" font-size="11" fill="#475569" class="dark:fill-slate-300">Luyện kim đen (than, sắt Ngũ Hồ), đóng tàu, dệt may, cơ khí ô tô cổ điển (Detroit)</text>
        <text x="25" y="155" font-size="12" font-weight="bold" fill="#334155" class="dark:fill-slate-200">• Xu hướng hiện nay:</text>
        <text x="25" y="175" font-size="11" fill="#dc2626" class="dark:fill-rose-400">Suy giảm tỉ trọng, chuyển sang dịch vụ tài chính, bảo hiểm (Niu Oóc, Bô-xtơn)</text>
      </g>

      <!-- Big Shift Arrow -->
      <g transform="translate(345, 120)">
        <path d="M 10 35 L 75 35 L 75 15 L 105 45 L 75 75 L 75 55 L 10 55 Z" fill="#0284c7"/>
        <text x="50" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#0284c7">DỊCH CHUYỂN</text>
        <text x="50" y="85" text-anchor="middle" font-size="10" fill="#64748b">Vốn &amp; Nhân lực</text>
      </g>

      <!-- Box 2: Sun Belt -->
      <g transform="translate(470, 40)">
        <rect width="280" height="230" rx="16" fill="#fffbeb" class="dark:fill-slate-900" stroke="#f59e0b" stroke-width="2"/>
        <rect width="280" height="38" rx="16" fill="#f59e0b"/>
        <text x="140" y="25" text-anchor="middle" font-size="13" font-weight="bold" fill="#ffffff">VÀNH ĐAI MẶT TRỜI (NAM &amp; TÂY)</text>
        <text x="25" y="65" font-size="12" font-weight="bold" fill="#78350f" class="dark:fill-amber-300">• Vị trí:</text>
        <text x="75" y="65" font-size="11.5" fill="#64748b" class="dark:fill-slate-400">Các bang phía Nam &amp; Bờ Tây Thái Bình Dương</text>
        <text x="25" y="95" font-size="12" font-weight="bold" fill="#78350f" class="dark:fill-amber-300">• Ngành mũi nhọn hiện đại:</text>
        <text x="25" y="115" font-size="11" fill="#475569" class="dark:fill-slate-300">Điện tử viễn thông, phần mềm (Silicon Valley), hoá dầu (Texas), hàng không vũ trụ (NASA, Boeing)</text>
        <text x="25" y="155" font-size="12" font-weight="bold" fill="#78350f" class="dark:fill-amber-300">• Lợi thế vượt trội:</text>
        <text x="25" y="175" font-size="11" fill="#16a34a" class="dark:fill-emerald-400">Khí hậu ấm áp, lao động trẻ trình độ cao, gần thị trường Mỹ La tinh và châu Á</text>
      </g>
    </svg>`
  },

  svg7_trungquoc: {
    title: "Sơ đồ Phân hoá Tự nhiên & Kinh tế Trung Quốc (Ranh giới 105°Đ)",
    caption: "Sự tương phản sâu sắc giữa Miền Đông năng động và Miền Tây giàu tài nguyên",
    svg: `<svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[380px] select-none">
      <!-- Divider Line 105°E -->
      <line x1="400" y1="20" x2="400" y2="295" stroke="#0284c7" stroke-width="2.5" stroke-dasharray="6 4"/>
      <rect x="345" y="15" width="110" height="28" rx="8" fill="#0284c7"/>
      <text x="400" y="34" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">KINH TUYẾN 105°Đ</text>

      <!-- West Region Panel -->
      <g transform="translate(30, 45)">
        <rect width="345" height="250" rx="16" fill="#fefce8" class="dark:fill-slate-900" stroke="#ca8a04" stroke-width="1.8"/>
        <rect width="345" height="35" rx="16" fill="#ca8a04"/>
        <text x="172" y="23" text-anchor="middle" font-size="13" font-weight="bold" fill="#ffffff">⛰️ MIỀN TÂY (NỘI ĐỊA HIỂM TRỞ)</text>
        
        <g transform="translate(20, 50)" font-size="11.5" fill="#334155" class="dark:fill-slate-300">
          <text y="15" font-weight="bold" fill="#854d0e" class="dark:fill-amber-300">Tự nhiên &amp; Địa hình:</text>
          <text y="35">• Sơn nguyên Tây Tạng đồ sộ, dãy Hi-ma-lay-a</text>
          <text y="52">• Hoang mạc khô hạn (Tắc-la Ma-can, Gô-bi)</text>
          <text y="69">• Thượng nguồn các con sông lớn, tiềm năng thuỷ điện</text>

          <text y="98" font-weight="bold" fill="#854d0e" class="dark:fill-amber-300">Dân cư &amp; Xã hội:</text>
          <text y="118">• Mật độ dân số rất thấp (&lt; 10% dân số cả nước)</text>
          <text y="135">• Nhiều dân tộc thiểu số (Tạng, Duy Ngô Nhĩ...)</text>

          <text y="164" font-weight="bold" fill="#854d0e" class="dark:fill-amber-300">Kinh tế:</text>
          <text y="184">• Chăn nuôi đại gia súc (cừu, dê, ngựa, bò Tây Tạng)</text>
          <text y="201">• Khai khoáng và Chiến lược 'Đại khai phá miền Tây'</text>
        </g>
      </g>

      <!-- East Region Panel -->
      <g transform="translate(425, 45)">
        <rect width="345" height="250" rx="16" fill="#ecfdf5" class="dark:fill-slate-900" stroke="#059669" stroke-width="1.8"/>
        <rect width="345" height="35" rx="16" fill="#059669"/>
        <text x="172" y="23" text-anchor="middle" font-size="13" font-weight="bold" fill="#ffffff">🌊 MIỀN ĐÔNG (ĐỒNG BẰNG TRÙ PHÚ)</text>

        <g transform="translate(20, 50)" font-size="11.5" fill="#334155" class="dark:fill-slate-300">
          <text y="15" font-weight="bold" fill="#065f46" class="dark:fill-emerald-300">Tự nhiên &amp; Địa hình:</text>
          <text y="35">• Các đồng bằng châu thổ màu mỡ: Hoa Bắc, Hoa Trung</text>
          <text y="52">• Khí hậu gió mùa mưa nhiều, đường bờ biển dài</text>
          <text y="69">• Hạ lưu Trường Giang, Hoàng Hà nguồn nước dồi dào</text>

          <text y="98" font-weight="bold" fill="#065f46" class="dark:fill-emerald-300">Dân cư &amp; Đô thị hoá:</text>
          <text y="118">• Tập trung trên 90% dân số cả nước</text>
          <text y="135">• Hàng loạt siêu đô thị: Bắc Kinh, Thượng Hải, Thâm Quyến</text>

          <text y="164" font-weight="bold" fill="#065f46" class="dark:fill-emerald-300">Kinh tế mũi nhọn:</text>
          <text y="184">• Đầu tàu kinh tế (đóng góp &gt; 53% GDP, vựa lúa gạo)</text>
          <text y="201">• 'Công xưởng thế giới', công nghệ cao, cảng biển sầm uất</text>
        </g>
      </g>
    </svg>`
  },

  svg8_bieudo: {
    title: "Sơ đồ Tư duy Chọn Dạng Biểu đồ Địa lí",
    caption: "Quy tắc vàng 5 dạng biểu đồ cơ bản trong chương trình THPT",
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
        <text x="70" y="190" text-anchor="middle" font-size="10" fill="#64748b" class="dark:fill-slate-400">Số mốc thời gian:</text>
        <text x="70" y="210" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1d4ed8" class="dark:fill-blue-300">1 đến 3 năm</text>
        <text x="70" y="230" text-anchor="middle" font-size="10" fill="#64748b" class="dark:fill-slate-400">(hoặc nhiều đối tượng)</text>
      </g>

      <!-- Col 2: Đường -->
      <g transform="translate(175, 25)">
        <rect width="140" height="270" rx="12" fill="#ecfdf5" class="dark:fill-slate-900" stroke="#10b981" stroke-width="2"/>
        <rect width="140" height="35" rx="12" fill="#10b981"/>
        <text x="70" y="23" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">📈 BIỂU ĐỒ ĐƯỜNG</text>
        <text x="70" y="65" text-anchor="middle" font-size="11" font-weight="bold" fill="#047857" class="dark:fill-emerald-300">TỪ KHOÁ:</text>
        <text x="70" y="85" text-anchor="middle" font-size="11" fill="#334155" class="dark:fill-slate-300 font-bold">"Tốc độ tăng"</text>
        <text x="70" y="105" text-anchor="middle" font-size="11" fill="#334155" class="dark:fill-slate-300 font-bold">"Phát triển"</text>
        <text x="70" y="125" text-anchor="middle" font-size="11" fill="#334155" class="dark:fill-slate-300 font-bold">"Diễn biến"</text>
        <text x="70" y="145" text-anchor="middle" font-size="11" fill="#334155" class="dark:fill-slate-300 font-bold">"Gia tăng"</text>
        <line x1="15" y1="165" x2="125" y2="165" stroke="#cbd5e1"/>
        <text x="70" y="190" text-anchor="middle" font-size="10" fill="#64748b" class="dark:fill-slate-400">Số mốc thời gian:</text>
        <text x="70" y="210" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#047857" class="dark:fill-emerald-300">≥ 4 năm liên tục</text>
        <text x="70" y="230" text-anchor="middle" font-size="10" fill="#64748b" class="dark:fill-slate-400">(Năm gốc = 100%)</text>
      </g>

      <!-- Col 3: Tròn -->
      <g transform="translate(330, 25)">
        <rect width="140" height="270" rx="12" fill="#fdf4ff" class="dark:fill-slate-900" stroke="#d946ef" stroke-width="2"/>
        <rect width="140" height="35" rx="12" fill="#d946ef"/>
        <text x="70" y="23" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">🍩 BIỂU ĐỒ TRÒN</text>
        <text x="70" y="65" text-anchor="middle" font-size="11" font-weight="bold" fill="#a21caf" class="dark:fill-fuchsia-300">TỪ KHOÁ:</text>
        <text x="70" y="85" text-anchor="middle" font-size="11" fill="#334155" class="dark:fill-slate-300 font-bold">"Cơ cấu"</text>
        <text x="70" y="105" text-anchor="middle" font-size="11" fill="#334155" class="dark:fill-slate-300 font-bold">"Tỉ trọng"</text>
        <text x="70" y="125" text-anchor="middle" font-size="11" fill="#334155" class="dark:fill-slate-300 font-bold">"Quy mô &amp; cơ cấu"</text>
        <line x1="15" y1="165" x2="125" y2="165" stroke="#cbd5e1"/>
        <text x="70" y="190" text-anchor="middle" font-size="10" fill="#64748b" class="dark:fill-slate-400">Số mốc thời gian:</text>
        <text x="70" y="210" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#a21caf" class="dark:fill-fuchsia-300">1 đến 3 năm</text>
        <text x="70" y="230" text-anchor="middle" font-size="10" fill="#64748b" class="dark:fill-slate-400">(Bán kính R nếu đổi quy mô)</text>
      </g>

      <!-- Col 4: Miền -->
      <g transform="translate(485, 25)">
        <rect width="140" height="270" rx="12" fill="#fff7ed" class="dark:fill-slate-900" stroke="#f97316" stroke-width="2"/>
        <rect width="140" height="35" rx="12" fill="#f97316"/>
        <text x="70" y="23" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">🏔️ BIỂU ĐỒ MIỀN</text>
        <text x="70" y="65" text-anchor="middle" font-size="11" font-weight="bold" fill="#c2410c" class="dark:fill-orange-300">TỪ KHOÁ:</text>
        <text x="70" y="85" text-anchor="middle" font-size="11" fill="#334155" class="dark:fill-slate-300 font-bold">"Chuyển dịch cơ cấu"</text>
        <text x="70" y="105" text-anchor="middle" font-size="11" fill="#334155" class="dark:fill-slate-300 font-bold">"Thay đổi cơ cấu"</text>
        <line x1="15" y1="165" x2="125" y2="165" stroke="#cbd5e1"/>
        <text x="70" y="190" text-anchor="middle" font-size="10" fill="#64748b" class="dark:fill-slate-400">Số mốc thời gian:</text>
        <text x="70" y="210" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#c2410c" class="dark:fill-orange-300">≥ 4 năm liên tục</text>
        <text x="70" y="230" text-anchor="middle" font-size="10" fill="#64748b" class="dark:fill-slate-400">(Khung hình chữ nhật 100%)</text>
      </g>

      <!-- Col 5: Kết hợp -->
      <g transform="translate(640, 25)">
        <rect width="140" height="270" rx="12" fill="#faf5ff" class="dark:fill-slate-900" stroke="#8b5cf6" stroke-width="2"/>
        <rect width="140" height="35" rx="12" fill="#8b5cf6"/>
        <text x="70" y="23" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">📊+📈 KẾT HỢP</text>
        <text x="70" y="65" text-anchor="middle" font-size="11" font-weight="bold" fill="#6d28d9" class="dark:fill-purple-300">TỪ KHOÁ:</text>
        <text x="70" y="85" text-anchor="middle" font-size="11" fill="#334155" class="dark:fill-slate-300 font-bold">"2 đối tượng"</text>
        <text x="70" y="105" text-anchor="middle" font-size="11" fill="#334155" class="dark:fill-slate-300 font-bold">"2 đơn vị khác nhau"</text>
        <line x1="15" y1="165" x2="125" y2="165" stroke="#cbd5e1"/>
        <text x="70" y="190" text-anchor="middle" font-size="10" fill="#64748b" class="dark:fill-slate-400">Ví dụ tiêu biểu:</text>
        <text x="70" y="210" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#6d28d9" class="dark:fill-purple-300">Dân số (người) - Cột</text>
        <text x="70" y="230" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#6d28d9" class="dark:fill-purple-300">Tỉ lệ gia tăng (%) - Đường</text>
      </g>
    </svg>`
  }
};

module.exports = diali11_svgs;
