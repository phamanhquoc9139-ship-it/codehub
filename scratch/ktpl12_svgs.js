// scratch/ktpl12_svgs.js
// Bộ 8 Sơ đồ tư duy & Lược đồ pháp lí SVG vector chuẩn cho KTPL 12

const ktpl12_svgs = {
  svg1_gdp_flow: {
    title: "Cấu trúc GDP theo Phương pháp Tiếp cận Chi tiêu",
    caption: "Mô hình 4 thành tố vĩ mô: GDP = C + I + G + (X − M)",
    svg: `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[380px] select-none">
      <defs>
        <linearGradient id="gdpGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#4f46e5" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="#6366f1" stop-opacity="0.35"/>
        </linearGradient>
      </defs>
      <rect x="250" y="15" width="300" height="42" rx="12" fill="#0f172a" class="dark:fill-slate-800"/>
      <text x="400" y="41" text-anchor="middle" font-size="13" font-weight="bold" fill="#818cf8">GDP = C + I + G + (X − M)</text>

      <!-- 4 Pillars -->
      <g transform="translate(30, 75)">
        <rect width="165" height="180" rx="12" fill="#eff6ff" class="dark:fill-slate-900" stroke="#3b82f6" stroke-width="1.5"/>
        <rect width="165" height="32" rx="12" fill="#3b82f6"/>
        <text x="82" y="21" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">C: TIÊU DÙNG (HỘ GIA ĐÌNH)</text>
        <text x="15" y="60" font-size="11" fill="#334155" class="dark:fill-slate-300">• Chi mua lương thực, thực phẩm</text>
        <text x="15" y="85" font-size="11" fill="#334155" class="dark:fill-slate-300">• Chi nhà ở, điện nước, đi lại</text>
        <text x="15" y="110" font-size="11" fill="#334155" class="dark:fill-slate-300">• Chi y tế, giáo dục gia đình</text>
        <text x="15" y="145" font-size="10" font-weight="bold" fill="#2563eb">→ Chiếm tỉ trọng lớn nhất trong GDP</text>
      </g>

      <g transform="translate(220, 75)">
        <rect width="165" height="180" rx="12" fill="#f0fdf4" class="dark:fill-slate-900" stroke="#10b981" stroke-width="1.5"/>
        <rect width="165" height="32" rx="12" fill="#10b981"/>
        <text x="82" y="21" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">I: ĐẦU TƯ (DOANH NGHIỆP)</text>
        <text x="15" y="60" font-size="11" fill="#334155" class="dark:fill-slate-300">• Mua sắm máy móc trang thiết bị</text>
        <text x="15" y="85" font-size="11" fill="#334155" class="dark:fill-slate-300">• Xây dựng nhà xưởng, văn phòng</text>
        <text x="15" y="110" font-size="11" fill="#334155" class="dark:fill-slate-300">• Thay đổi hàng tồn kho sản xuất</text>
        <text x="15" y="145" font-size="10" font-weight="bold" fill="#059669">→ Tạo năng lực sản xuất mới cho tương lai</text>
      </g>

      <g transform="translate(410, 75)">
        <rect width="165" height="180" rx="12" fill="#fef3c7" class="dark:fill-slate-900" stroke="#f59e0b" stroke-width="1.5"/>
        <rect width="165" height="32" rx="12" fill="#f59e0b"/>
        <text x="82" y="21" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">G: CHI TIÊU CHÍNH PHỦ</text>
        <text x="15" y="60" font-size="11" fill="#334155" class="dark:fill-slate-300">• Đầu tư công: đường cao tốc, cầu cảng</text>
        <text x="15" y="85" font-size="11" fill="#334155" class="dark:fill-slate-300">• Chi bệnh viện, trường học công lập</text>
        <text x="15" y="110" font-size="11" fill="#334155" class="dark:fill-slate-300">• Chi quốc phòng, an ninh trật tự</text>
        <text x="15" y="145" font-size="10" font-weight="bold" fill="#d97706">→ Không gồm trợ cấp chuyển nhượng</text>
      </g>

      <g transform="translate(600, 75)">
        <rect width="170" height="180" rx="12" fill="#fdf2f8" class="dark:fill-slate-900" stroke="#ec4899" stroke-width="1.5"/>
        <rect width="170" height="32" rx="12" fill="#ec4899"/>
        <text x="85" y="21" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">(X − M): XUẤT KHẨU RÒNG</text>
        <text x="15" y="60" font-size="11" fill="#334155" class="dark:fill-slate-300">• X: Giá trị hàng hóa xuất khẩu</text>
        <text x="15" y="85" font-size="11" fill="#334155" class="dark:fill-slate-300">• M: Giá trị hàng hóa nhập khẩu</text>
        <text x="15" y="110" font-size="11" fill="#334155" class="dark:fill-slate-300">• X > M: Xuất siêu (dương)</text>
        <text x="15" y="145" font-size="10" font-weight="bold" fill="#db2777">→ Đóng góp cán cân thương mại vĩ mô</text>
      </g>
    </svg>`
  },

  svg2_benvung: {
    title: "3 Trụ Cột Của Phát Triển Bền Vững",
    caption: "Mô hình giao thoa hài hòa giữa Kinh tế, Xã hội và Môi trường sinh thái",
    svg: `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[380px] select-none">
      <defs>
        <radialGradient id="gEco" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="#2563eb" stop-opacity="0.35"/>
        </radialGradient>
        <radialGradient id="gSoc" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#10b981" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="#059669" stop-opacity="0.35"/>
        </radialGradient>
        <radialGradient id="gEnv" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="#d97706" stop-opacity="0.35"/>
        </radialGradient>
      </defs>

      <!-- 3 Intersecting Circles -->
      <circle cx="340" cy="120" r="95" fill="url(#gEco)" stroke="#3b82f6" stroke-width="2"/>
      <circle cx="460" cy="120" r="95" fill="url(#gSoc)" stroke="#10b981" stroke-width="2"/>
      <circle cx="400" cy="180" r="95" fill="url(#gEnv)" stroke="#f59e0b" stroke-width="2"/>

      <!-- Labels on Circles -->
      <text x="310" y="85" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">KINH TẾ</text>
      <text x="310" y="105" text-anchor="middle" font-size="10" fill="#475569">(Tăng trưởng, Việc làm)</text>

      <text x="490" y="85" text-anchor="middle" font-size="13" font-weight="bold" fill="#065f46">XÃ HỘI</text>
      <text x="490" y="105" text-anchor="middle" font-size="10" fill="#475569">(Công bằng, An sinh, HDI)</text>

      <text x="400" y="245" text-anchor="middle" font-size="13" font-weight="bold" fill="#92400e">MÔI TRƯỜNG</text>
      <text x="400" y="262" text-anchor="middle" font-size="10" fill="#475569">(Bảo tồn, Giảm phát thải)</text>

      <!-- Center Intersection -->
      <rect x="345" y="130" width="110" height="32" rx="8" fill="#0f172a" class="dark:fill-slate-800"/>
      <text x="400" y="151" text-anchor="middle" font-size="11" font-weight="bold" fill="#38bdf8">PHÁT TRIỂN BỀN VỮNG</text>

      <!-- Sidebar Annotations -->
      <g transform="translate(40, 40)">
        <rect width="180" height="180" rx="10" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" stroke-width="1"/>
        <text x="90" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#334155" class="dark:fill-white">YÊU CẦU CỐT LÕI</text>
        <text x="15" y="60" font-size="10" fill="#475569" class="dark:fill-slate-300">• Tăng trưởng không đánh đổi</text>
        <text x="25" y="78" font-size="10" fill="#ef4444">môi trường lấy lợi nhuận.</text>
        <text x="15" y="105" font-size="10" fill="#475569" class="dark:fill-slate-300">• Chuyển đổi mô hình sang</text>
        <text x="25" y="123" font-size="10" fill="#10b981">kinh tế xanh & tuần hoàn.</text>
        <text x="15" y="150" font-size="10" fill="#475569" class="dark:fill-slate-300">• Bảo đảm quyền lợi thế hệ tương lai.</text>
      </g>
    </svg>`
  },

  svg3_csr_pyramid: {
    title: "Kim Tự Tháp Trách Nhiệm Xã Hội Của Doanh Nghiệp (CSR)",
    caption: "Mô hình 4 bậc thang trách nhiệm theo học thuyết Carroll",
    svg: `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[380px] select-none">
      <!-- Top Tier: Nhân văn -->
      <polygon points="400,20 330,75 470,75" fill="#f43f5e" opacity="0.9"/>
      <text x="400" y="55" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">4. TRÁCH NHIỆM NHÂN VĂN (TỪ THIỆN)</text>

      <!-- Tier 2: Đạo đức -->
      <polygon points="330,80 470,80 520,135 280,135" fill="#f59e0b" opacity="0.9"/>
      <text x="400" y="112" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">3. TRÁCH NHIỆM ĐẠO ĐỨC (CÔNG BẰNG, ĐÚNG ĐẮN)</text>

      <!-- Tier 3: Pháp lí -->
      <polygon points="280,140 520,140 580,195 220,195" fill="#10b981" opacity="0.9"/>
      <text x="400" y="172" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">2. TRÁCH NHIỆM PHÁP LÍ (TUÂN THỦ PHÁP LUẬT BẮT BUỘC)</text>

      <!-- Bottom Tier: Kinh tế -->
      <polygon points="220,200 580,200 650,260 150,260" fill="#3b82f6" opacity="0.95"/>
      <text x="400" y="235" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">1. TRÁCH NHIỆM KINH TẾ (KINH DOANH CÓ HIỆU QUẢ - NỀN TẢNG)</text>

      <!-- Right Description Note -->
      <g transform="translate(620, 45)">
        <rect width="160" height="190" rx="10" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" stroke-width="1"/>
        <text x="80" y="25" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f172a" class="dark:fill-white">Ý NGHĨA TỪNG BẬC</text>
        <text x="10" y="55" font-size="9" fill="#e11d48">• Bậc 4: Đóng góp tự nguyện</text>
        <text x="10" y="90" font-size="9" fill="#d97706">• Bậc 3: Hành xử đạo đức</text>
        <text x="10" y="125" font-size="9" fill="#059669">• Bậc 2: Không vi phạm luật</text>
        <text x="10" y="160" font-size="9" fill="#2563eb">• Bậc 1: Tạo ra lợi nhuận</text>
      </g>
    </svg>`
  },

  svg4_ansinh: {
    title: "Hệ Thống 4 Trụ Cột An Sinh Xã Hội Việt Nam",
    caption: "Mạng lưới bảo vệ đa tầng giúp người dân phòng ngừa, giảm thiểu và khắc phục rủi ro",
    svg: `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[380px] select-none">
      <rect x="25" y="15" width="750" height="250" rx="14" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" stroke-width="1"/>
      <text x="400" y="42" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a" class="dark:fill-white">LƯỚI AN TOÀN AN SINH XÃ HỘI TOÀN DIỆN</text>

      <g transform="translate(45, 65)">
        <rect width="155" height="180" rx="12" fill="#eff6ff" class="dark:fill-slate-800" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="77" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">1. VIỆC LÀM & GIẢM NGHÈO</text>
        <text x="12" y="55" font-size="10" fill="#334155" class="dark:fill-slate-300">• Vay vốn ưu đãi tạo việc làm</text>
        <text x="12" y="80" font-size="10" fill="#334155" class="dark:fill-slate-300">• Đào tạo nghề cho lao động</text>
        <text x="12" y="105" font-size="10" fill="#334155" class="dark:fill-slate-300">• Hỗ trợ sinh kế người nghèo</text>
        <text x="12" y="145" font-size="10" font-weight="bold" fill="#2563eb">→ Phòng ngừa rủi ro thu nhập</text>
      </g>

      <g transform="translate(225, 65)">
        <rect width="155" height="180" rx="12" fill="#f0fdf4" class="dark:fill-slate-800" stroke="#10b981" stroke-width="1.5"/>
        <text x="77" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#047857">2. BẢO HIỂM (NÒNG CỐT)</text>
        <text x="12" y="55" font-size="10" fill="#334155" class="dark:fill-slate-300">• Bảo hiểm xã hội (BHXH)</text>
        <text x="12" y="80" font-size="10" fill="#334155" class="dark:fill-slate-300">• Bảo hiểm y tế (BHYT)</text>
        <text x="12" y="105" font-size="10" fill="#334155" class="dark:fill-slate-300">• Bảo hiểm thất nghiệp (BHTN)</text>
        <text x="12" y="145" font-size="10" font-weight="bold" fill="#059669">→ Giảm thiểu tổn thất tài chính</text>
      </g>

      <g transform="translate(405, 65)">
        <rect width="155" height="180" rx="12" fill="#fef3c7" class="dark:fill-slate-800" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="77" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309">3. TRỢ GIÚP XÃ HỘI</text>
        <text x="12" y="55" font-size="10" fill="#334155" class="dark:fill-slate-300">• Trợ cấp thường xuyên người già</text>
        <text x="12" y="80" font-size="10" fill="#334155" class="dark:fill-slate-300">• Hỗ trợ người khuyết tật, mồ côi</text>
        <text x="12" y="105" font-size="10" fill="#334155" class="dark:fill-slate-300">• Cứu trợ đột xuất bão lũ thiên tai</text>
        <text x="12" y="145" font-size="10" font-weight="bold" fill="#d97706">→ Khắc phục rủi ro tức thời</text>
      </g>

      <g transform="translate(585, 65)">
        <rect width="165" height="180" rx="12" fill="#fdf2f8" class="dark:fill-slate-800" stroke="#ec4899" stroke-width="1.5"/>
        <text x="82" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#be185d">4. DỊCH VỤ CƠ BẢN</text>
        <text x="12" y="55" font-size="10" fill="#334155" class="dark:fill-slate-300">• Giáo dục tối thiểu, miễn học phí</text>
        <text x="12" y="80" font-size="10" fill="#334155" class="dark:fill-slate-300">• Y tế cơ sở, trạm xá xã</text>
        <text x="12" y="105" font-size="10" fill="#334155" class="dark:fill-slate-300">• Nước sạch sinh hoạt & Nhà ở XH</text>
        <text x="12" y="145" font-size="10" font-weight="bold" fill="#db2777">→ Tiếp cận công bằng dịch vụ</text>
      </g>
    </svg>`
  },

  svg5_kehoach_kd: {
    title: "Quy Trình 6 Bước Lập Kế Hoạch Kinh Doanh",
    caption: "Quy trình chuẩn hóa từ khâu hình thành ý tưởng đến thẩm định tính khả thi",
    svg: `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[380px] select-none">
      <!-- 6 Sequential Flow Steps -->
      <g transform="translate(20, 30)">
        <!-- Step 1 -->
        <rect x="0" y="0" width="115" height="210" rx="10" fill="#eff6ff" class="dark:fill-slate-900" stroke="#3b82f6" stroke-width="1.5"/>
        <circle cx="57" cy="30" r="16" fill="#3b82f6"/>
        <text x="57" y="35" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">1</text>
        <text x="57" y="70" text-anchor="middle" font-size="10" font-weight="bold" fill="#1d4ed8">CHỌN Ý TƯỞNG</text>
        <text x="10" y="100" font-size="9" fill="#475569">• Bắt nguồn từ nhu cầu thực tế</text>
        <text x="10" y="130" font-size="9" fill="#475569">• Khác biệt & độc đáo</text>
      </g>

      <g transform="translate(145, 30)">
        <!-- Step 2 -->
        <rect x="0" y="0" width="115" height="210" rx="10" fill="#f0fdf4" class="dark:fill-slate-900" stroke="#10b981" stroke-width="1.5"/>
        <circle cx="57" cy="30" r="16" fill="#10b981"/>
        <text x="57" y="35" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">2</text>
        <text x="57" y="70" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">ĐẶT MỤC TIÊU</text>
        <text x="10" y="100" font-size="9" fill="#475569">• Mục tiêu SMART</text>
        <text x="10" y="130" font-size="9" fill="#475569">• Cụ thể, đo lường được</text>
        <text x="10" y="160" font-size="9" fill="#475569">• Khả thi theo thời gian</text>
      </g>

      <g transform="translate(270, 30)">
        <!-- Step 3 -->
        <rect x="0" y="0" width="115" height="210" rx="10" fill="#fef3c7" class="dark:fill-slate-900" stroke="#f59e0b" stroke-width="1.5"/>
        <circle cx="57" cy="30" r="16" fill="#f59e0b"/>
        <text x="57" y="35" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">3</text>
        <text x="57" y="70" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309">PHÂN TÍCH SWOT</text>
        <text x="10" y="100" font-size="9" fill="#475569">• Điểm mạnh / Điểm yếu</text>
        <text x="10" y="130" font-size="9" fill="#475569">• Cơ hội / Thách thức</text>
        <text x="10" y="160" font-size="9" fill="#475569">• Nghiên cứu đối thủ</text>
      </g>

      <g transform="translate(395, 30)">
        <!-- Step 4 -->
        <rect x="0" y="0" width="115" height="210" rx="10" fill="#faf5ff" class="dark:fill-slate-900" stroke="#a855f7" stroke-width="1.5"/>
        <circle cx="57" cy="30" r="16" fill="#a855f7"/>
        <text x="57" y="35" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">4</text>
        <text x="57" y="70" text-anchor="middle" font-size="10" font-weight="bold" fill="#7e22ce">LẬP KẾ HOẠCH</text>
        <text x="10" y="100" font-size="9" fill="#475569">• Sản xuất & Địa điểm</text>
        <text x="10" y="130" font-size="9" fill="#475569">• Tiếp thị (4P)</text>
        <text x="10" y="160" font-size="9" fill="#475569">• Nhân sự & Tài chính</text>
      </g>

      <g transform="translate(520, 30)">
        <!-- Step 5 -->
        <rect x="0" y="0" width="115" height="210" rx="10" fill="#fff1f2" class="dark:fill-slate-900" stroke="#f43f5e" stroke-width="1.5"/>
        <circle cx="57" cy="30" r="16" fill="#f43f5e"/>
        <text x="57" y="35" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">5</text>
        <text x="57" y="70" text-anchor="middle" font-size="10" font-weight="bold" fill="#be123c">QUẢN TRỊ RỦI RO</text>
        <text x="10" y="100" font-size="9" fill="#475569">• Nhận diện rủi ro vốn</text>
        <text x="10" y="130" font-size="9" fill="#475569">• Biến động giá cả</text>
        <text x="10" y="160" font-size="9" fill="#475569">• Phương án dự phòng</text>
      </g>

      <g transform="translate(645, 30)">
        <!-- Step 6 -->
        <rect x="0" y="0" width="125" height="210" rx="10" fill="#f0fdfa" class="dark:fill-slate-900" stroke="#14b8a6" stroke-width="1.5"/>
        <circle cx="62" cy="30" r="16" fill="#14b8a6"/>
        <text x="62" y="35" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">6</text>
        <text x="62" y="70" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f766e">HOÀN THIỆN</text>
        <text x="10" y="100" font-size="9" fill="#475569">• Rà soát tính khả thi</text>
        <text x="10" y="130" font-size="9" fill="#475569">• Thẩm định dòng tiền</text>
        <text x="10" y="160" font-size="9" fill="#475569">• Thuyết trình gọi vốn</text>
      </g>
    </svg>`
  },

  svg6_sohuu: {
    title: "Tam Giác Quyền Sở Hữu Tài Sản Theo Bộ Luật Dân Sự",
    caption: "3 quyền năng độc lập nhưng gắn bó mật thiết của chủ sở hữu tài sản",
    svg: `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[380px] select-none">
      <defs>
        <linearGradient id="gradTri" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#4f46e5" stop-opacity="0.15"/>
          <stop offset="100%" stop-color="#818cf8" stop-opacity="0.25"/>
        </linearGradient>
      </defs>

      <!-- Center Triangle -->
      <polygon points="400,30 220,230 580,230" fill="url(#gradTri)" stroke="#6366f1" stroke-width="2.5"/>

      <!-- Node 1: Chiếm hữu -->
      <g transform="translate(400, 30)">
        <circle r="42" fill="#3b82f6" stroke="#ffffff" stroke-width="3"/>
        <text y="-5" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">QUYỀN</text>
        <text y="14" text-anchor="middle" font-size="12" font-weight="extrabold" fill="#ffffff">CHIẾM HỮU</text>
      </g>
      <text x="400" y="88" text-anchor="middle" font-size="10" fill="#475569" class="dark:fill-slate-300">Nắm giữ, chi phối vật lí tài sản</text>

      <!-- Node 2: Sử dụng -->
      <g transform="translate(220, 230)">
        <circle r="42" fill="#10b981" stroke="#ffffff" stroke-width="3"/>
        <text y="-5" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">QUYỀN</text>
        <text y="14" text-anchor="middle" font-size="12" font-weight="extrabold" fill="#ffffff">SỬ DỤNG</text>
      </g>
      <text x="220" y="175" text-anchor="middle" font-size="10" fill="#475569" class="dark:fill-slate-300">Khai thác công dụng, hưởng hoa lợi</text>

      <!-- Node 3: Định đoạt -->
      <g transform="translate(580, 230)">
        <circle r="42" fill="#ec4899" stroke="#ffffff" stroke-width="3"/>
        <text y="-5" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">QUYỀN</text>
        <text y="14" text-anchor="middle" font-size="12" font-weight="extrabold" fill="#ffffff">ĐỊNH ĐOẠT</text>
      </g>
      <text x="580" y="175" text-anchor="middle" font-size="10" fill="#475569" class="dark:fill-slate-300">Chuyển nhượng, tặng cho, tiêu hủy</text>

      <!-- Central Label -->
      <rect x="330" y="130" width="140" height="32" rx="8" fill="#0f172a" class="dark:fill-slate-800"/>
      <text x="400" y="151" text-anchor="middle" font-size="12" font-weight="bold" fill="#38bdf8">QUYỀN SỞ HỮU</text>
    </svg>`
  },

  svg7_vungbien: {
    title: "Phạm Vi 5 Vùng Biển Theo Công Ước UNCLOS 1982",
    caption: "Sơ đồ mặt cắt quy chế pháp lí các vùng biển theo Công ước Liên hợp quốc về Luật Biển",
    svg: `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[380px] select-none">
      <defs>
        <linearGradient id="gLandKTPL" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#059669" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="#10b981" stop-opacity="0.35"/>
        </linearGradient>
        <linearGradient id="gSeaKTPL" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0284c7" stop-opacity="0.15"/>
          <stop offset="100%" stop-color="#0369a1" stop-opacity="0.3"/>
        </linearGradient>
      </defs>
      <rect x="230" y="15" width="340" height="38" rx="10" fill="#0f172a" class="dark:fill-slate-800"/>
      <text x="400" y="39" text-anchor="middle" font-size="13" font-weight="bold" fill="#38bdf8">QUY CHẾ PHÁP LÍ 5 VÙNG BIỂN VIỆT NAM</text>

      <!-- Land profile -->
      <path d="M 30 210 Q 90 110 150 160 T 210 210 L 210 250 L 30 250 Z" fill="url(#gLandKTPL)" stroke="#059669" stroke-width="2"/>
      <text x="110" y="235" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46" class="dark:fill-emerald-300">ĐẤT LIỀN</text>

      <!-- Baseline -->
      <line x1="210" y1="100" x2="210" y2="250" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4"/>
      <text x="210" y="90" text-anchor="middle" font-size="10" font-weight="bold" fill="#dc2626">ĐƯỜNG CƠ SỞ</text>

      <!-- 1. Noi thuy -->
      <rect x="150" y="160" width="60" height="90" fill="#38bdf8" opacity="0.25"/>
      <text x="180" y="195" text-anchor="middle" font-size="10" font-weight="bold" fill="#0284c7">Nội thủy</text>

      <!-- 2. Lanh hai (12 hl) -->
      <rect x="210" y="160" width="90" height="90" fill="url(#gSeaKTPL)" stroke="#0284c7" stroke-width="1.5"/>
      <text x="255" y="190" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1" class="dark:fill-sky-300">LÃNH HẢI</text>
      <text x="255" y="210" text-anchor="middle" font-size="9" fill="#475569" class="dark:fill-slate-300">12 hải lí</text>
      <text x="255" y="230" text-anchor="middle" font-size="9" font-weight="bold" fill="#dc2626">Biên giới biển</text>

      <!-- 3. Tiep giap lanh hai -->
      <rect x="300" y="160" width="90" height="90" fill="#0284c7" opacity="0.1" stroke="#0284c7" stroke-dasharray="2,2"/>
      <text x="345" y="190" text-anchor="middle" font-size="10" font-weight="bold" fill="#0284c7">Tiếp giáp</text>
      <text x="345" y="210" text-anchor="middle" font-size="9" fill="#475569">lãnh hải (12 hl)</text>

      <!-- 4. Dac quyen kinh te (200 hl) -->
      <rect x="390" y="160" width="220" height="90" fill="url(#gSeaKTPL)" stroke="#0284c7" stroke-width="1"/>
      <text x="500" y="190" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1" class="dark:fill-sky-300">VÙNG ĐẶC QUYỀN KINH TẾ (EEZ)</text>
      <text x="500" y="210" text-anchor="middle" font-size="10" fill="#475569" class="dark:fill-slate-300">200 hải lí tính từ đường cơ sở</text>
      <text x="500" y="230" text-anchor="middle" font-size="9" fill="#64748b">Quyền chủ quyền tài nguyên sinh vật & khoáng sản</text>

      <!-- 5. Them luc dia -->
      <path d="M 210 250 L 760 250 L 760 270 Q 480 275 210 250 Z" fill="#b45309" opacity="0.3" stroke="#b45309"/>
      <text x="485" y="265" text-anchor="middle" font-size="9" font-weight="bold" fill="#92400e" class="dark:fill-amber-300">THỀM LỤC ĐỊA (Đáy biển và lòng đất dưới đáy biển)</text>
    </svg>`
  },

  svg8_wto: {
    title: "5 Nguyên Tắc Vàng Của Tổ Chức Thương Mại Thế Giới (WTO)",
    caption: "Các nguyên tắc trụ cột định hình sân chơi thương mại tự do và công bằng",
    svg: `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[380px] select-none">
      <!-- 5 Column Cards -->
      <g transform="translate(20, 25)">
        <rect width="140" height="230" rx="10" fill="#eff6ff" class="dark:fill-slate-900" stroke="#3b82f6" stroke-width="1.5"/>
        <rect width="140" height="32" rx="10" fill="#3b82f6"/>
        <text x="70" y="21" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">1. KHÔNG PHÂN BIỆT</text>
        <text x="15" y="65" font-size="11" font-weight="bold" fill="#1d4ed8">• MFN (Tối huệ quốc):</text>
        <text x="15" y="85" font-size="10" fill="#475569">Ưu đãi cho một nước phải áp dụng cho tất cả.</text>
        <text x="15" y="125" font-size="11" font-weight="bold" fill="#1d4ed8">• NT (Đãi ngộ QG):</text>
        <text x="15" y="145" font-size="10" fill="#475569">Không đối xử bất lợi với hàng ngoại nhập so với nội địa.</text>
      </g>

      <g transform="translate(175, 25)">
        <rect width="140" height="230" rx="10" fill="#f0fdf4" class="dark:fill-slate-900" stroke="#10b981" stroke-width="1.5"/>
        <rect width="140" height="32" rx="10" fill="#10b981"/>
        <text x="70" y="21" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">2. MỞ CỬA THỊ TRƯỜNG</text>
        <text x="15" y="65" font-size="10" fill="#475569">• Từng bước cắt giảm thuế quan theo lộ trình cam kết.</text>
        <text x="15" y="110" font-size="10" fill="#475569">• Xóa bỏ các hạn ngạch và rào cản phi thuế quan phi lí.</text>
        <text x="15" y="155" font-size="10" font-weight="bold" fill="#047857">→ Thúc đẩy tự do hóa thương mại toàn cầu</text>
      </g>

      <g transform="translate(330, 25)">
        <rect width="140" height="230" rx="10" fill="#fefce8" class="dark:fill-slate-900" stroke="#f59e0b" stroke-width="1.5"/>
        <rect width="140" height="32" rx="10" fill="#f59e0b"/>
        <text x="70" y="21" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">3. THƯƠNG MẠI CÔNG BẰNG</text>
        <text x="15" y="65" font-size="10" fill="#475569">• Chống bán phá giá (Anti-dumping) gây thiệt hại.</text>
        <text x="15" y="115" font-size="10" fill="#475569">• Chống trợ cấp chính phủ bất bình đẳng.</text>
        <text x="15" y="160" font-size="10" font-weight="bold" fill="#b45309">→ Tạo sân chơi cạnh tranh lành mạnh</text>
      </g>

      <g transform="translate(485, 25)">
        <rect width="140" height="230" rx="10" fill="#faf5ff" class="dark:fill-slate-900" stroke="#a855f7" stroke-width="1.5"/>
        <rect width="140" height="32" rx="10" fill="#a855f7"/>
        <text x="70" y="21" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">4. TÍNH MINH BẠCH</text>
        <text x="15" y="65" font-size="10" fill="#475569">• Công khai, thông báo chính sách thương mại.</text>
        <text x="15" y="115" font-size="10" fill="#475569">• Không tùy tiện thay đổi quy chuẩn kĩ thuật bất ngờ.</text>
        <text x="15" y="165" font-size="10" font-weight="bold" fill="#7e22ce">→ Tạo môi trường pháp lí dễ dự báo</text>
      </g>

      <g transform="translate(640, 25)">
        <rect width="140" height="230" rx="10" fill="#fff1f2" class="dark:fill-slate-900" stroke="#f43f5e" stroke-width="1.5"/>
        <rect width="140" height="32" rx="10" fill="#f43f5e"/>
        <text x="70" y="21" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">5. ĐỐI XỬ ĐẶC BIỆT</text>
        <text x="15" y="65" font-size="10" fill="#475569">• Dành ưu đãi đặc biệt cho các nước đang phát triển.</text>
        <text x="15" y="115" font-size="10" fill="#475569">• Hỗ trợ kĩ thuật và kéo dài thời hạn chuyển đổi.</text>
        <text x="15" y="165" font-size="10" font-weight="bold" fill="#be123c">→ Giúp các nước thu hẹp khoảng cách phát triển</text>
      </g>
    </svg>`
  }
};

module.exports = ktpl12_svgs;
