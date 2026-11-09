// scratch/ktpl11_svgs.js
// 8 Sơ đồ tư duy Vector SVG cho KTPL 11

module.exports = {
  svg1_canhtranh: `
  <svg viewBox="0 0 800 280" class="w-full h-auto rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-4 border border-slate-700/80 shadow-md" xmlns="http://www.w3.org/2000/svg">
    <text x="400" y="28" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">CƠ CHẾ CẠNH TRANH & ĐỘNG LỰC PHÁT TRIỂN TRONG KINH TẾ THỊ TRƯỜNG</text>

    <!-- Left Box: Cạnh tranh lành mạnh -->
    <rect x="30" y="50" width="350" height="210" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <rect x="30" y="50" width="350" height="34" rx="10" fill="#047857"/>
    <text x="205" y="73" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">CẠNH TRANH LÀNH MẠNH (ĐỘNG LỰC)</text>
    
    <text x="50" y="110" fill="#6ee7b7" font-size="11" font-weight="bold">• Biểu hiện tích cực:</text>
    <text x="65" y="130" fill="#cbd5e1" font-size="10">- Đổi mới công nghệ, tự động hóa quy trình</text>
    <text x="65" y="148" fill="#cbd5e1" font-size="10">- Nâng cao chất lượng, cải tiến mẫu mã</text>
    <text x="65" y="166" fill="#cbd5e1" font-size="10">- Tối ưu chi phí, giảm giá thành hợp lí</text>
    <text x="65" y="184" fill="#cbd5e1" font-size="10">- Chăm sóc khách hàng, hậu mãi chu đáo</text>
    <text x="50" y="215" fill="#facc15" font-size="11" font-weight="bold">➔ Kết quả: Người tiêu dùng hưởng lợi, kinh tế tăng trưởng</text>

    <!-- Right Box: Cạnh tranh không lành mạnh -->
    <rect x="420" y="50" width="350" height="210" rx="10" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
    <rect x="420" y="50" width="350" height="34" rx="10" fill="#b91c1c"/>
    <text x="595" y="73" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">CẠNH TRANH KHÔNG LÀNH MẠNH (LÊN ÁN)</text>
    
    <text x="440" y="110" fill="#fca5a5" font-size="11" font-weight="bold">• Biểu hiện phi pháp & phi đạo đức:</text>
    <text x="455" y="130" fill="#cbd5e1" font-size="10">- Nhái nhãn hiệu, bao bì (chỉ dẫn gây nhầm lẫn)</text>
    <text x="455" y="148" fill="#cbd5e1" font-size="10">- Gièm pha, tung tin đồn thất thiệt bôi nhọ đối thủ</text>
    <text x="455" y="166" fill="#cbd5e1" font-size="10">- Quảng cáo gian dối, thổi phồng sự thật</text>
    <text x="455" y="184" fill="#cbd5e1" font-size="10">- Đánh cắp, xâm phạm bí mật kinh doanh</text>
    <text x="440" y="215" fill="#f87171" font-size="11" font-weight="bold">➔ Hậu quả: Thiệt hại khách hàng, bị pháp luật xử lí</text>
  </svg>`,

  svg2_cung_cau: `
  <svg viewBox="0 0 800 280" class="w-full h-auto rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-4 border border-slate-700/80 shadow-md" xmlns="http://www.w3.org/2000/svg">
    <text x="400" y="28" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">ĐỒ THỊ CÂN BẰNG CUNG – CẦU VÀ SỰ ĐIỀU TIẾT GIÁ CẢ THỊ TRƯỜNG</text>

    <!-- Graph Axis -->
    <g transform="translate(60, 45)">
      <!-- Axis lines -->
      <line x1="40" y1="20" x2="40" y2="180" stroke="#94a3b8" stroke-width="2"/>
      <line x1="40" y1="180" x2="300" y2="180" stroke="#94a3b8" stroke-width="2"/>
      <text x="35" y="18" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="end">Giá (P)</text>
      <text x="305" y="185" fill="#94a3b8" font-size="11" font-weight="bold">Lượng (Q)</text>

      <!-- Demand Curve (D) -->
      <line x1="60" y1="40" x2="260" y2="160" stroke="#ef4444" stroke-width="3"/>
      <text x="270" y="165" fill="#ef4444" font-size="12" font-weight="bold">Cầu (D)</text>

      <!-- Supply Curve (S) -->
      <line x1="60" y1="160" x2="260" y2="40" stroke="#10b981" stroke-width="3"/>
      <text x="270" y="45" fill="#10b981" font-size="12" font-weight="bold">Cung (S)</text>

      <!-- Equilibrium Point E -->
      <circle cx="160" cy="100" r="6" fill="#facc15" stroke="#ffffff" stroke-width="2"/>
      <text x="175" y="95" fill="#facc15" font-size="11" font-weight="bold">E (Cân bằng)</text>
      
      <!-- Dashed lines -->
      <line x1="40" y1="100" x2="160" y2="100" stroke="#facc15" stroke-dasharray="4,4"/>
      <line x1="160" y1="100" x2="160" y2="180" stroke="#facc15" stroke-dasharray="4,4"/>
      <text x="32" y="104" fill="#facc15" font-size="10" font-weight="bold" text-anchor="end">P*</text>
      <text x="160" y="195" fill="#facc15" font-size="10" font-weight="bold" text-anchor="middle">Q*</text>
    </g>

    <!-- Right Side Explanations -->
    <g transform="translate(400, 50)">
      <!-- Rule 1: Cung < Cầu -->
      <rect x="0" y="0" width="370" height="60" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="15" y="24" fill="#fbbf24" font-size="11" font-weight="bold">1. Cung &lt; Cầu (Hàng khan hiếm):</text>
      <text x="25" y="44" fill="#cbd5e1" font-size="10">Người mua tranh mua ➔ Giá tăng (P &gt; P*) ➔ Kích thích mở rộng sản xuất</text>

      <!-- Rule 2: Cung > Cầu -->
      <rect x="0" y="70" width="370" height="60" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="15" y="94" fill="#60a5fa" font-size="11" font-weight="bold">2. Cung &gt; Cầu (Hàng dư thừa):</text>
      <text x="25" y="114" fill="#cbd5e1" font-size="10">Người bán tranh bán ➔ Giá giảm (P &lt; P*) ➔ Người mua tăng mua, giảm sản xuất</text>

      <!-- Rule 3: Cung = Cầu -->
      <rect x="0" y="140" width="370" height="60" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
      <text x="15" y="164" fill="#34d399" font-size="11" font-weight="bold">3. Cung = Cầu (Thị trường ổn định):</text>
      <text x="25" y="184" fill="#cbd5e1" font-size="10">Lượng bán bằng lượng mua ➔ Giá cả tương đối ổn định quanh điểm cân bằng E</text>
    </g>
  </svg>`,

  svg3_lamphat: `
  <svg viewBox="0 0 800 270" class="w-full h-auto rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-4 border border-slate-700/80 shadow-md" xmlns="http://www.w3.org/2000/svg">
    <text x="400" y="28" fill="#f59e0b" font-size="15" font-weight="bold" text-anchor="middle">3 MỨC ĐỘ LẠM PHÁT & CÔNG THỨC ĐO LƯỜNG THEO CHỈ SỐ CPI</text>

    <!-- Formula Box -->
    <rect x="40" y="48" width="720" height="45" rx="8" fill="#0f172a" stroke="#0284c7" stroke-width="1.5"/>
    <text x="400" y="76" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Tỉ lệ lạm phát (%) = [(CPI kì hiện tại − CPI kì gốc) ÷ CPI kì gốc] × 100%</text>

    <!-- Level 1: Vừa phải -->
    <g transform="translate(40, 105)">
      <rect width="225" height="145" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
      <rect width="225" height="30" rx="10" fill="#047857"/>
      <text x="112" y="20" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">LẠM PHÁT VỪA PHẢI</text>
      <text x="15" y="55" fill="#34d399" font-size="11" font-weight="bold">Tăng giá: 0% – dưới 10%/năm</text>
      <text x="15" y="75" fill="#cbd5e1" font-size="10">• Mức tăng giá một con số</text>
      <text x="15" y="93" fill="#cbd5e1" font-size="10">• Nền kinh tế tương đối ổn định</text>
      <text x="15" y="111" fill="#cbd5e1" font-size="10">• Kích thích đầu tư & sản xuất</text>
      <text x="15" y="130" fill="#6ee7b7" font-size="9" font-weight="bold">Mức độ an toàn có kiểm soát</text>
    </g>

    <!-- Level 2: Phi mã -->
    <g transform="translate(285, 105)">
      <rect width="230" height="145" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
      <rect width="230" height="30" rx="10" fill="#b45309"/>
      <text x="115" y="20" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">LẠM PHÁT PHI MÃ</text>
      <text x="15" y="55" fill="#fbbf24" font-size="11" font-weight="bold">Tăng giá: 10% – dưới 1.000%/năm</text>
      <text x="15" y="75" fill="#cbd5e1" font-size="10">• Mức tăng 2 đến 3 con số</text>
      <text x="15" y="93" fill="#cbd5e1" font-size="10">• Đồng tiền mất giá nhanh chóng</text>
      <text x="15" y="111" fill="#cbd5e1" font-size="10">• Người dân chuyển sang tích trữ vàng</text>
      <text x="15" y="130" fill="#fde68a" font-size="9" font-weight="bold">Gây bất ổn vĩ mô nghiêm trọng</text>
    </g>

    <!-- Level 3: Siêu lạm phát -->
    <g transform="translate(535, 105)">
      <rect width="225" height="145" rx="10" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
      <rect width="225" height="30" rx="10" fill="#b91c1c"/>
      <text x="112" y="20" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">SIÊU LẠM PHÁT</text>
      <text x="15" y="55" fill="#f87171" font-size="11" font-weight="bold">Tăng giá: từ 1.000%/năm trở lên</text>
      <text x="15" y="75" fill="#cbd5e1" font-size="10">• Tăng giá phi mã mất kiểm soát</text>
      <text x="15" y="93" fill="#cbd5e1" font-size="10">• Tiền tệ gần như vô giá trị</text>
      <text x="15" y="111" fill="#cbd5e1" font-size="10">• Hệ thống kinh tế tê liệt, khủng hoảng</text>
      <text x="15" y="130" fill="#fca5a5" font-size="9" font-weight="bold">Nguy cơ sụp đổ kinh tế</text>
    </g>
  </svg>`,

  svg4_thatnghiep_vieclam: `
  <svg viewBox="0 0 800 280" class="w-full h-auto rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-4 border border-slate-700/80 shadow-md" xmlns="http://www.w3.org/2000/svg">
    <text x="400" y="28" fill="#a855f7" font-size="15" font-weight="bold" text-anchor="middle">PHÂN LOẠI THẤT NGHIỆP & MỐI QUAN HỆ VỚI THỊ TRƯỜNG LAO ĐỘNG</text>

    <!-- 4 Types of Unemployment -->
    <g transform="translate(30, 48)">
      <rect x="0" y="0" width="170" height="95" rx="8" fill="#1e293b" stroke="#8b5cf6" stroke-width="1.5"/>
      <text x="85" y="24" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">THẤT NGHIỆP CƠ CẤU</text>
      <text x="15" y="48" fill="#cbd5e1" font-size="10">• Đổi mới công nghệ, AI</text>
      <text x="15" y="66" fill="#cbd5e1" font-size="10">• Kĩ năng đào tạo không khớp</text>
      <text x="15" y="82" fill="#cbd5e1" font-size="10">• Cần đào tạo lại tay nghề</text>

      <rect x="190" y="0" width="175" height="95" rx="8" fill="#1e293b" stroke="#8b5cf6" stroke-width="1.5"/>
      <text x="277" y="24" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">THẤT NGHIỆP CHU KÌ</text>
      <text x="205" y="48" fill="#cbd5e1" font-size="10">• Biến động theo chu kì</text>
      <text x="205" y="66" fill="#cbd5e1" font-size="10">• Tăng khi kinh tế suy thoái</text>
      <text x="205" y="82" fill="#cbd5e1" font-size="10">• Giảm khi kinh tế phục hồi</text>

      <rect x="385" y="0" width="170" height="95" rx="8" fill="#1e293b" stroke="#8b5cf6" stroke-width="1.5"/>
      <text x="470" y="24" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">THẤT NGHIỆP TỰ NGUYỆN</text>
      <text x="400" y="48" fill="#cbd5e1" font-size="10">• Người lao động từ chối việc</text>
      <text x="400" y="66" fill="#cbd5e1" font-size="10">• Do mức lương/điều kiện thấp</text>
      <text x="400" y="82" fill="#cbd5e1" font-size="10">• Chờ đợi cơ hội tốt hơn</text>

      <rect x="575" y="0" width="165" height="95" rx="8" fill="#1e293b" stroke="#8b5cf6" stroke-width="1.5"/>
      <text x="657" y="24" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">KHÔNG TỰ NGUYỆN</text>
      <text x="590" y="48" fill="#cbd5e1" font-size="10">• Muốn đi làm ngay</text>
      <text x="590" y="66" fill="#cbd5e1" font-size="10">• Chấp nhận mức lương hiện có</text>
      <text x="590" y="82" fill="#cbd5e1" font-size="10">• Nhưng không tìm được việc</text>
    </g>

    <!-- Connecting Market Box -->
    <rect x="30" y="160" width="740" height="100" rx="10" fill="#0f172a" stroke="#0ea5e9" stroke-width="1.5"/>
    <text x="400" y="185" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">MÔ HÌNH KẾT NỐI: THỊ TRƯỜNG LAO ĐỘNG &amp; THỊ TRƯỜNG VIỆC LÀM</text>
    
    <g transform="translate(60, 200)">
      <rect width="180" height="45" rx="6" fill="#1e293b" stroke="#10b981"/>
      <text x="90" y="27" fill="#6ee7b7" font-size="11" font-weight="bold" text-anchor="middle">CUNG LAO ĐỘNG (Người tìm việc)</text>
    </g>

    <path d="M250 222 L310 222" stroke="#0ea5e9" stroke-width="2.5" marker-end="url(#arrow)"/>

    <g transform="translate(320, 200)">
      <rect width="160" height="45" rx="6" fill="#0369a1"/>
      <text x="80" y="20" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">SÀN VIỆC LÀM</text>
      <text x="80" y="35" fill="#e0f2fe" font-size="9" text-anchor="middle">Kết nối thông tin số</text>
    </g>

    <path d="M490 222 L550 222" stroke="#0ea5e9" stroke-width="2.5" marker-end="url(#arrow)"/>

    <g transform="translate(560, 200)">
      <rect width="180" height="45" rx="6" fill="#1e293b" stroke="#f59e0b"/>
      <text x="90" y="27" fill="#fde68a" font-size="11" font-weight="bold" text-anchor="middle">CẦU LAO ĐỘNG (Doanh nghiệp tuyển)</text>
    </g>
  </svg>`,

  svg5_swot_kinhdoanh: `
  <svg viewBox="0 0 800 280" class="w-full h-auto rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-4 border border-slate-700/80 shadow-md" xmlns="http://www.w3.org/2000/svg">
    <text x="400" y="28" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">MA TRẬN SWOT ĐÁNH GIÁ Ý TƯỞNG &amp; CƠ HỘI KINH DOANH</text>

    <!-- 4 SWOT Quadrants -->
    <g transform="translate(40, 50)">
      <!-- S: Strengths -->
      <rect x="0" y="0" width="350" height="95" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
      <text x="20" y="26" fill="#34d399" font-size="12" font-weight="bold">S – STRENGTHS (ĐIỂM MẠNH - NỘI TẠI)</text>
      <text x="25" y="48" fill="#cbd5e1" font-size="10">• Năng lực chuyên môn, đam mê, kinh nghiệm sẵn có</text>
      <text x="25" y="66" fill="#cbd5e1" font-size="10">• Nguồn vốn tự có hoặc khả năng huy động vốn tốt</text>
      <text x="25" y="82" fill="#cbd5e1" font-size="10">• Vị trí kinh doanh đắc địa, công nghệ vượt trội</text>

      <!-- W: Weaknesses -->
      <rect x="370" y="0" width="350" height="95" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
      <text x="390" y="26" fill="#f87171" font-size="12" font-weight="bold">W – WEAKNESSES (ĐIỂM YẾU - NỘI TẠI)</text>
      <text x="395" y="48" fill="#cbd5e1" font-size="10">• Thiếu kinh nghiệm quản lí và điều hành thực tế</text>
      <text x="395" y="66" fill="#cbd5e1" font-size="10">• Nhân sự mỏng, thương hiệu chưa có chỗ đứng</text>
      <text x="395" y="82" fill="#cbd5e1" font-size="10">• Nguồn lực tài chính hạn chế, dễ đứt dòng tiền</text>

      <!-- O: Opportunities -->
      <rect x="0" y="110" width="350" height="95" rx="8" fill="#1e293b" stroke="#0ea5e9" stroke-width="2"/>
      <text x="20" y="136" fill="#38bdf8" font-size="12" font-weight="bold">O – OPPORTUNITIES (CƠ HỘI - BÊN NGOÀI)</text>
      <text x="25" y="158" fill="#cbd5e1" font-size="10">• Nhu cầu thị trường mới mẻ chưa được đáp ứng</text>
      <text x="25" y="176" fill="#cbd5e1" font-size="10">• Chính sách hỗ trợ khởi nghiệp của Nhà nước</text>
      <text x="25" y="192" fill="#cbd5e1" font-size="10">• Sự phát triển mạnh mẽ của thương mại điện tử</text>

      <!-- T: Threats -->
      <rect x="370" y="110" width="350" height="95" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
      <text x="390" y="136" fill="#fbbf24" font-size="12" font-weight="bold">T – THREATS (THÁCH THỨC - BÊN NGOÀI)</text>
      <text x="395" y="158" fill="#cbd5e1" font-size="10">• Đối thủ cạnh tranh tiềm tàng lớn, tiềm lực mạnh</text>
      <text x="395" y="176" fill="#cbd5e1" font-size="10">• Giá cả nguyên vật liệu đầu vào tăng thất thường</text>
      <text x="395" y="192" fill="#cbd5e1" font-size="10">• Rủi ro thay đổi pháp lí và thị hiếu người tiêu dùng</text>
    </g>
  </svg>`,

  svg6_daoduc_kinhdoanh: `
  <svg viewBox="0 0 800 280" class="w-full h-auto rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-4 border border-slate-700/80 shadow-md" xmlns="http://www.w3.org/2000/svg">
    <text x="400" y="28" fill="#10b981" font-size="15" font-weight="bold" text-anchor="middle">5 CHUẨN MỰC ĐẠO ĐỨC KINH DOANH &amp; VĂN HÓA TIÊU DÙNG BỀN VỮNG</text>

    <!-- 5 Standards Columns -->
    <g transform="translate(30, 50)">
      <rect x="0" y="0" width="138" height="200" rx="8" fill="#1e293b" stroke="#059669" stroke-width="1.5"/>
      <rect x="0" y="0" width="138" height="32" rx="8" fill="#047857"/>
      <text x="69" y="21" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">1. TRÁCH NHIỆM</text>
      <text x="12" y="55" fill="#cbd5e1" font-size="10">• Tuân thủ luật</text>
      <text x="12" y="75" fill="#cbd5e1" font-size="10">• Đóng thuế đầy đủ</text>
      <text x="12" y="95" fill="#cbd5e1" font-size="10">• Bảo vệ môi trường</text>
      <text x="12" y="115" fill="#cbd5e1" font-size="10">• An toàn lao động</text>

      <rect x="150" y="0" width="138" height="200" rx="8" fill="#1e293b" stroke="#0284c7" stroke-width="1.5"/>
      <rect x="150" y="0" width="138" height="32" rx="8" fill="#0369a1"/>
      <text x="219" y="21" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">2. TRUNG THỰC</text>
      <text x="162" y="55" fill="#cbd5e1" font-size="10">• Giữ chữ tín</text>
      <text x="162" y="75" fill="#cbd5e1" font-size="10">• Thông tin đúng</text>
      <text x="162" y="95" fill="#cbd5e1" font-size="10">• Không hàng giả</text>
      <text x="162" y="115" fill="#cbd5e1" font-size="10">• Cạnh tranh minh bạch</text>

      <rect x="300" y="0" width="138" height="200" rx="8" fill="#1e293b" stroke="#d97706" stroke-width="1.5"/>
      <rect x="300" y="0" width="138" height="32" rx="8" fill="#b45309"/>
      <text x="369" y="21" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">3. KỈ LUẬT</text>
      <text x="312" y="55" fill="#cbd5e1" font-size="10">• Đúng hợp đồng</text>
      <text x="312" y="75" fill="#cbd5e1" font-size="10">• Đúng quy trình</text>
      <text x="312" y="95" fill="#cbd5e1" font-size="10">• Bảo mật thông tin</text>
      <text x="312" y="115" fill="#cbd5e1" font-size="10">• Chuẩn mực ngành</text>

      <rect x="450" y="0" width="138" height="200" rx="8" fill="#1e293b" stroke="#7c3aed" stroke-width="1.5"/>
      <rect x="450" y="0" width="138" height="32" rx="8" fill="#6d28d9"/>
      <text x="519" y="21" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">4. VÌ CON NGƯỜI</text>
      <text x="462" y="55" fill="#cbd5e1" font-size="10">• Lương xứng đáng</text>
      <text x="462" y="75" fill="#cbd5e1" font-size="10">• Quyền người làm</text>
      <text x="462" y="95" fill="#cbd5e1" font-size="10">• Tôn trọng khách</text>
      <text x="462" y="115" fill="#cbd5e1" font-size="10">• Nhân văn nhân ái</text>

      <rect x="600" y="0" width="140" height="200" rx="8" fill="#1e293b" stroke="#db2777" stroke-width="1.5"/>
      <rect x="600" y="0" width="140" height="32" rx="8" fill="#be185d"/>
      <text x="670" y="21" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">5. TIÊU DÙNG XANH</text>
      <text x="612" y="55" fill="#cbd5e1" font-size="10">• Tiết kiệm, tri ân</text>
      <text x="612" y="75" fill="#cbd5e1" font-size="10">• Tái chế rác thải</text>
      <text x="612" y="95" fill="#cbd5e1" font-size="10">• Ưu tiên hàng Việt</text>
      <text x="612" y="115" fill="#cbd5e1" font-size="10">• Thân thiện môi sinh</text>
    </g>
  </svg>`,

  svg7_binhdang_phapluat: `
  <svg viewBox="0 0 800 280" class="w-full h-auto rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-4 border border-slate-700/80 shadow-md" xmlns="http://www.w3.org/2000/svg">
    <text x="400" y="28" fill="#facc15" font-size="15" font-weight="bold" text-anchor="middle">5 TRỤ CỘT BÌNH ĐẲNG TRƯỚC PHÁP LUẬT CỦA CÔNG DÂN (CHỦ ĐỀ 7)</text>

    <!-- Center Circle: Công dân bình đẳng trước pháp luật -->
    <circle cx="400" cy="150" r="55" fill="#0f172a" stroke="#facc15" stroke-width="3"/>
    <text x="400" y="145" fill="#fde047" font-size="12" font-weight="bold" text-anchor="middle">BÌNH ĐẲNG</text>
    <text x="400" y="162" fill="#cbd5e1" font-size="10" text-anchor="middle">Trước Pháp Luật</text>

    <!-- Branch 1: Quyền & Nghĩa vụ (Bài 9) -->
    <g transform="translate(40, 55)">
      <rect width="180" height="70" rx="8" fill="#1e293b" stroke="#0ea5e9" stroke-width="1.5"/>
      <text x="90" y="24" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">1. QUYỀN &amp; NGHĨA VỤ</text>
      <text x="15" y="45" fill="#cbd5e1" font-size="10">• Bình đẳng hưởng quyền</text>
      <text x="15" y="60" fill="#cbd5e1" font-size="10">• Bình đẳng chịu trách nhiệm</text>
    </g>

    <!-- Branch 2: Bình đẳng giới (Bài 10) -->
    <g transform="translate(580, 55)">
      <rect width="180" height="70" rx="8" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/>
      <text x="90" y="24" fill="#f472b6" font-size="11" font-weight="bold" text-anchor="middle">2. BÌNH ĐẲNG GIỚI</text>
      <text x="15" y="45" fill="#cbd5e1" font-size="10">• Chính trị, kinh tế, lao động</text>
      <text x="15" y="60" fill="#cbd5e1" font-size="10">• Giáo dục và gia đình</text>
    </g>

    <!-- Branch 3: Dân tộc (Bài 11) -->
    <g transform="translate(40, 165)">
      <rect width="180" height="70" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
      <text x="90" y="24" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">3. GIỮA CÁC DÂN TỘC</text>
      <text x="15" y="45" fill="#cbd5e1" font-size="10">• Đoàn kết, tương trợ</text>
      <text x="15" y="60" fill="#cbd5e1" font-size="10">• Dùng tiếng nói, chữ viết</text>
    </g>

    <!-- Branch 4: Tôn giáo (Bài 12) -->
    <g transform="translate(580, 165)">
      <rect width="180" height="70" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
      <text x="90" y="24" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">4. GIỮA CÁC TÔN GIÁO</text>
      <text x="15" y="45" fill="#cbd5e1" font-size="10">• Tự do theo/không theo</text>
      <text x="15" y="60" fill="#cbd5e1" font-size="10">• Bảo hộ cơ sở hợp pháp</text>
    </g>

    <!-- Connecting lines -->
    <line x1="220" y1="90" x2="350" y2="135" stroke="#94a3b8" stroke-dasharray="3,3"/>
    <line x1="580" y1="90" x2="450" y2="135" stroke="#94a3b8" stroke-dasharray="3,3"/>
    <line x1="220" y1="200" x2="350" y2="165" stroke="#94a3b8" stroke-dasharray="3,3"/>
    <line x1="580" y1="200" x2="450" y2="165" stroke="#94a3b8" stroke-dasharray="3,3"/>
  </svg>`,

  svg8_cay_quyen_congdan: `
  <svg viewBox="0 0 800 280" class="w-full h-auto rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-4 border border-slate-700/80 shadow-md" xmlns="http://www.w3.org/2000/svg">
    <text x="400" y="28" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">HỆ THỐNG QUYỀN DÂN CHỦ &amp; QUYỀN TỰ DO CƠ BẢN CỦA CÔNG DÂN (HIẾN PHÁP 2013)</text>

    <!-- Left Block: Quyền Dân chủ (Bài 13 - 16) -->
    <rect x="30" y="50" width="350" height="210" rx="10" fill="#1e293b" stroke="#0ea5e9" stroke-width="2"/>
    <rect x="30" y="50" width="350" height="34" rx="10" fill="#0284c7"/>
    <text x="205" y="73" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">QUYỀN DÂN CHỦ CƠ BẢN (CHỦ ĐỀ 8)</text>
    
    <text x="50" y="110" fill="#7dd3fc" font-size="11" font-weight="bold">• Bài 13: Tham gia quản lí nhà nước &amp; xã hội</text>
    <text x="65" y="126" fill="#cbd5e1" font-size="10">- Thảo luận, biểu quyết, kiến nghị ở cơ sở &amp; cả nước</text>
    
    <text x="50" y="148" fill="#7dd3fc" font-size="11" font-weight="bold">• Bài 14: Quyền bầu cử &amp; ứng cử</text>
    <text x="65" y="164" fill="#cbd5e1" font-size="10">- 18 tuổi bầu cử, 21 tuổi ứng cử; 4 nguyên tắc vàng</text>
    
    <text x="50" y="186" fill="#7dd3fc" font-size="11" font-weight="bold">• Bài 15: Quyền khiếu nại &amp; tố cáo</text>
    <text x="65" y="202" fill="#cbd5e1" font-size="10">- Khôi phục quyền lợi cá nhân &amp; đấu tranh chống sai phạm</text>
    
    <text x="50" y="224" fill="#7dd3fc" font-size="11" font-weight="bold">• Bài 16: Quyền và nghĩa vụ bảo vệ Tổ quốc</text>
    <text x="65" y="240" fill="#cbd5e1" font-size="10">- Nghĩa vụ quân sự, an ninh trật tự, lòng trung thành</text>

    <!-- Right Block: Quyền Tự do (Bài 17 - 21) -->
    <rect x="420" y="50" width="350" height="210" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <rect x="420" y="50" width="350" height="34" rx="10" fill="#047857"/>
    <text x="595" y="73" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">QUYỀN TỰ DO CƠ BẢN (CHỦ ĐỀ 9)</text>
    
    <text x="440" y="105" fill="#6ee7b7" font-size="11" font-weight="bold">• Bài 17: Thân thể, tính mạng, danh dự, nhân phẩm</text>
    <text x="455" y="120" fill="#cbd5e1" font-size="10">- Bắt người phải có phê chuẩn (trừ phạm tội quả tang)</text>
    
    <text x="440" y="138" fill="#6ee7b7" font-size="11" font-weight="bold">• Bài 18: Bất khả xâm phạm về chỗ ở</text>
    <text x="455" y="153" fill="#cbd5e1" font-size="10">- Khám xét phải có căn cứ, văn bản và chứng kiến</text>
    
    <text x="440" y="171" fill="#6ee7b7" font-size="11" font-weight="bold">• Bài 19: An toàn bí mật thư tín, điện thoại</text>
    <text x="455" y="186" fill="#cbd5e1" font-size="10">- Bảo mật đời tư số, cấm đọc trộm, nghe lén</text>
    
    <text x="440" y="204" fill="#6ee7b7" font-size="11" font-weight="bold">• Bài 20: Tự do ngôn luận, báo chí, thông tin</text>
    <text x="455" y="219" fill="#cbd5e1" font-size="10">- Có trách nhiệm, không tin giả, không xúc phạm</text>
    
    <text x="440" y="237" fill="#6ee7b7" font-size="11" font-weight="bold">• Bài 21: Tự do tín ngưỡng &amp; tôn giáo</text>
    <text x="455" y="250" fill="#cbd5e1" font-size="10">- Tự do theo/không theo, cấm mê tín dị đoan</text>
  </svg>`
};
